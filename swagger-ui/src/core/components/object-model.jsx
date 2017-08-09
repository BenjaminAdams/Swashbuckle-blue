import React, { Component, } from "react"
import PropTypes from "prop-types"
import { List } from "immutable"

const braceOpen = "{"
const braceClose = "}"

export default class ObjectModel extends Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    name: PropTypes.string,
    isRef: PropTypes.bool,
    expandDepth: PropTypes.number,
    depth: PropTypes.number,
    required: PropTypes.bool,
    requiredConditionally: PropTypes.bool,
  }

  trimTitle = (title) => {
    if(!title) return title
    var split= title.split('.')
    if(!split || split.length==1) return title;
    return split[split.length-1]
  }

  render(){
    let { schema, name, isRef, getComponent, depth,requiredConditionally,  ...props } = this.props
    let { expandDepth } = this.props
    expandDepth = 5;
    let description = schema.get("description")
    let properties = schema.get("properties")
    let additionalProperties = schema.get("additionalProperties")
    let titleStr = schema.get("title") || name || 'failed to get title'
    let required = schema.get("required")
    let requiredConditionallyList = schema.get("requiredConditionally")
    const JumpToPath = getComponent("JumpToPath", true)
    const Markdown = getComponent("Markdown")
    const Model = getComponent("Model")
    const ModelCollapse = getComponent("ModelCollapse")
    const JumpToPathSection = ({ name }) => <span className="model-jump-to-path"><JumpToPath path={`definitions.${name}`} /></span>
    const collapsedContent = (<span>
        <span>{ braceOpen }</span>...<span>{ braceClose }</span>
        {
        isRef ? <JumpToPathSection name={ name }/> : ""
        }
    </span>)

    titleStr= this.trimTitle(titleStr) //these titles were huge classnames in c#
    let reff=schema.get("$$ref")
    if(reff) {
      reff=reff.replace('#/definitions/', '')
    }

    const titleEl = titleStr && <span className="model-title">
      { isRef && reff && <span className="model-hint">{ reff }</span> }
      <span className="model-title__text">{ titleStr }</span>
    </span>

    return <span className="model">
      <ModelCollapse title={titleEl} collapsed={ depth > expandDepth } collapsedContent={ collapsedContent }>
         <span className="brace-open object">{ braceOpen }</span>
          {
            !isRef ? null : <JumpToPathSection name={ name }/>
          }
          {
             <div className="model-desc">
            
            { required && !requiredConditionally  && <span className="required"> * required</span> }  
            { !required && requiredConditionally && <span className="required" title="This field is only sometimes required" >* conditionally required </span> } 
            { !description ? null : <Markdown source={ description } /> }
            
            </div>
          } 
          <div className="inner-object">
            {
              <div className="model">
              {
                !(properties && properties.size) ? null : properties.entrySeq().map(
                    ([key, value]) => {
                      let isRequired = List.isList(required) && required.contains(key)                  
                      let isRequiredConditionally = List.isList(requiredConditionallyList) && requiredConditionallyList.contains(key)
                      let propertyStyle = { verticalAlign: "top", paddingRight: "10px" }
                      if ( isRequired  ) {
                        propertyStyle.fontWeight = "bold"
                      }

                      return (<div key={key}>
                        <div className="propContainer" style={ propertyStyle }> 
                          <span className="propName">{ key }:</span>
                          
                          <span className="propModel">
                            <Model key={ `object-${name}-${key}_${value}` } { ...props }
                                  required={ isRequired }
                                  requiredConditionally={isRequiredConditionally}
                                  getComponent={ getComponent }
                                  schema={ value }
                                  depth={ depth + 1 } />
                          </span>
                      
                          {/* isRequired && <span className="required">required * </span> */}  
                          { /* isRequiredConditionally && <span className="required" title="This field is only sometimes required" >conditionally required * </span> */}  
                       
                        </div>
                      </div>
                    
                    
                    )
                    }).toArray()
              }
              

              {

                
                !additionalProperties || !additionalProperties.size ? null
                  : <div>
                    <div>{ "< * >:" }</div>
                    <div>
                      <Model { ...props } required={ false }
                             getComponent={ getComponent }
                             schema={ additionalProperties }
                             depth={ depth + 1 } />
                    </div>
                    </div>
              }
             </div>
          }
        </div>
        <span className="brace-close">{ braceClose }</span>
      </ModelCollapse>
    </span>
  }
}
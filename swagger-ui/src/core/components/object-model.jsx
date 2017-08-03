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
    depth: PropTypes.number
  }

  trimTitle = (title) => {
    if(!title) return title
    var split= title.split('.')
    if(!split || split.length==1) return title;
    return split[split.length-1]
  }

  render(){
    let { schema, name, isRef, getComponent, depth, ...props } = this.props
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
            !description ? null : <div className="model-desc"><Markdown source={ description } /></div>
          }
          <span className="inner-object">
            {
              <table className="model"><tbody>
              {
                !(properties && properties.size) ? null : properties.entrySeq().map(
                    ([key, value]) => {
                      let isRequired = List.isList(required) && required.contains(key)                  
                      let isRequiredConditionally = List.isList(requiredConditionallyList) && requiredConditionallyList.contains(key)
                      let propertyStyle = { verticalAlign: "top", paddingRight: "10px" }
                      if ( isRequired  ) {
                        propertyStyle.fontWeight = "bold"
                      }

                      return (<tr key={key}>
                        <td style={ propertyStyle }>{ key }: <br />
                        { isRequired && <span className="required">required * </span>}  
                        {  isRequiredConditionally && <span className="required" title="This field is only sometimes required" >conditionally<br /> required * </span>}  
                        
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <Model key={ `object-${name}-${key}_${value}` } { ...props }
                                 required={ isRequired }
                                 requiredConditionally={isRequiredConditionally}
                                 getComponent={ getComponent }
                                 schema={ value }
                                 depth={ depth + 1 } />
                        </td>
                      </tr>)
                    }).toArray()
              }
              {
                !additionalProperties || !additionalProperties.size ? null
                  : <tr>
                    <td>{ "< * >:" }</td>
                    <td>
                      <Model { ...props } required={ false }
                             getComponent={ getComponent }
                             schema={ additionalProperties }
                             depth={ depth + 1 } />
                    </td>
                  </tr>
              }
              </tbody></table>
          }
        </span>
        <span className="brace-close">{ braceClose }</span>
      </ModelCollapse>
    </span>
  }
}
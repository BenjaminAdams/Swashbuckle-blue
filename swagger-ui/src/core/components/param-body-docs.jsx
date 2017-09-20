import React from "react"
import PropTypes from "prop-types"
import { List } from "immutable"
//import AuthorizeBtn from "core/components/auth/authorize-btn.jsx"

export default class ParamBodyDocs extends React.Component {
  static propTypes = {
    param: PropTypes.object.isRequired,
    selectedName: PropTypes.string,
    // taggedOps: PropTypes.object.isRequired,
    getComponent: PropTypes.func
  }

  constructor(props, context) {
    super(props, context)

    this.findTheRightDocs = this.findTheRightDocs.bind(this)
    this.findRecursive = this.findRecursive.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { selectedName } = this.props

    if (!nextProps.selectedName) {
      return false
    }

    if (nextProps.selectedName !== selectedName) return true

    return true
  }

  findTheRightDocs = (param) => {
    let { selectedName } = this.props
    var self = this
    var schema = param.get('schema')
    selectedName= selectedName.toLowerCase()

    var propsAndItems = schema.getIn(['properties'])
    if(propsAndItems) {
      propsAndItems.merge(schema.getIn(['items', 'properties']))
    }else {
      propsAndItems=schema.getIn(['items', 'properties'])
    }

    return this.findRecursive(propsAndItems, schema)  
  }

  findRecursive = (properties, parent) => {
    if(!properties) return null
    let { selectedName } = this.props
    var self = this
    var found = null;
    selectedName= selectedName.toLowerCase()

    properties.entrySeq().forEach( (v) => {
      if(v && v[1]) {
        if (v[0] && v[0].toLowerCase() === selectedName.toLowerCase()) {

          found= {
            param: v[1],
            required: List.isList(parent.get('required')) && self.containsIgnoreCase(selectedName,parent.get('required')),
            requiredConditionally: List.isList(parent.get('requiredConditionally')) && self.containsIgnoreCase(selectedName, parent.get('requiredConditionally'))
          }
          return false
        } 
        
        if (!found && v[1].has('properties')) {
          let foundInner = self.findRecursive(v[1].getIn(['properties']), v[1])
          
          if (foundInner) {            
            found= foundInner
            return false
          }
        }
        
        if(!found && v[1].has('items')) {  //items is for arrays
            var arrayItems= v[1].get('items')
            
            if(arrayItems && arrayItems.has('properties')) {           
                let foundInner = self.findRecursive(arrayItems.getIn(['properties']), v[1])
                if (foundInner) {
                  
                  found= {
                    param:foundInner.param,
                    required: List.isList(arrayItems.get('required')) && self.containsIgnoreCase(selectedName,arrayItems.get('required')),
                    requiredConditionally: List.isList(arrayItems.get('requiredConditionally')) && self.containsIgnoreCase(selectedName,arrayItems.get('requiredConditionally'))
                  }
                  return false
                }
            }          
        }
      }
    });

    return found
  }

containsIgnoreCase = (needle, haystack) => {
  if(!needle || !haystack) return false
    
    var lowerHaystack= haystack.map(x => x.toLowerCase())  
    return lowerHaystack.contains(needle)
}


  render() {
    let { param, selectedName, getComponent } = this.props

    if (!selectedName) return <div></div>

    var found = this.findTheRightDocs(param)
    if (!found || !found.param) return <div></div>

    let PrimitiveModel = getComponent("PrimitiveModel")
    //clear some props we dont want to display in the popup
    found.param = found.param.delete('required')
    found.param = found.param.delete('properties')
    found.param = found.param.delete('items')
    found.param = found.param.delete('x-schema')
    found.param = found.param.delete('ignore')
    found.param = found.param.delete('requiredConditionally')
    if(!found.param.get('isNullable')) {
      found.param = found.param.delete('isNullable')
    }

    return (
      <div className="docsPopup model parameters">
      <h3>{selectedName}</h3>
        <PrimitiveModel getComponent={getComponent} schema={found.param} required={found.required} requiredConditionally={found.requiredConditionally} />
      </div>
    )
  }
}

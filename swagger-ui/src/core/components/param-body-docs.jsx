import React from "react"
import PropTypes from "prop-types"
//import Logo from "../../img/logo_small.png"
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
    var tmp = schema.toJS()
    var found = schema.getIn(['properties', selectedName])
    if (found) return found
    //found= schema.getIn(['properties', 'schema',selectedName ])
    //  var props=schema.getIn(['properties'])
    // found= props.getIn(['schema',selectedName])

    return this.findRecursive(schema.getIn(['properties']))

    //    var found= schema.getIn(['properties']).entrySeq().forEach(v => { 
    //         console.log(v) 

    //         return v[1]

    //         if(v[0] === selectedName) {
    //             return v[1]
    //         }
    //     });

    //     return found    
  }

  findRecursive = (properties) => {
   // console.log('properties==', properties)
    if(!properties) return null
    let { selectedName } = this.props
    var self = this

    var found = null;

    properties.entrySeq().forEach(v => {
     // console.log(v)

      if (v[0] === selectedName) {

        found = v[1]
      }

      if (v[1].has('properties')) {
        var foundInner = self.findRecursive(v[1].getIn(['properties']))
        if (foundInner) {
          found = foundInner
        }
      }
    });

    return found
  }

  render() {
    let { param, selectedName, getComponent } = this.props

    if (!selectedName) return <div></div>
    var found = this.findTheRightDocs(param)

    console.log('we found=', found)
    if (!found) return <div></div>

    let PrimitiveModel = getComponent("PrimitiveModel")
    found = found.delete('required')
    found = found.delete('properties')
    found = found.delete('ignore')
    found = found.delete('requiredConditionally')

    return (
      <div className="docsPopup model parameters">
      <h3>{selectedName}</h3>
        <PrimitiveModel getComponent={getComponent} schema={found} required={true} requiredConditionally={true} />
      </div>
    )
  }
}

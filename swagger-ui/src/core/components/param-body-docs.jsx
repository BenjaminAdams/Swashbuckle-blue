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

  shouldComponentUpdate(nextProps, nextState) {
    let { selectedName } = this.props

    if (!nextProps.selectedName) {
      return false
    }

    if (nextProps.selectedName !== selectedName) return true

    return true
  }

  findTheRightDocs = () => {
    let { param, selectedName } = this.props
    var schema = param.get('schema')
    var tmp=schema.toJS()
    var found= schema.getIn(['properties', selectedName])
    if(found) return found
    found= schema.getIn(['properties', 'schema',selectedName ])
    return found
    
  }

  render() {
    let { param, selectedName,getComponent } = this.props
    //console.log('param=', param.toJS())
    if (!selectedName) return <div></div>
    var found = this.findTheRightDocs()
    console.log('we found=', found)
    if (!found) return <div></div>

    let PrimitiveModel = getComponent("PrimitiveModel")
    found=found.delete('required')
    found=found.delete('properties')
    found=found.delete('ignore')
    found=found.delete('requiredConditionally')

    return (
      <div className="docsPopup model parameters">
      <h3>{selectedName}</h3>
        <PrimitiveModel getComponent={getComponent} schema={found} required={true} requiredConditionally={true} />
      </div>
    )
  }
}

import React, { Component, } from "react"
import PropTypes from "prop-types"

export default class OperationWrapper extends React.Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    name: PropTypes.string,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    expandDepth: PropTypes.number
  }

  render(){
    let { getComponent } = this.props
    //const operation = getComponent("operation")

      console.log('inside of OperationWrapper')

    return <div className="model-boxxxxxxxxxxxxxxx">
             <div>YAYYAYAYAYAYAYAYAYAYA</div>
           </div>
  }
}
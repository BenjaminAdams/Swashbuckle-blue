import React, { Component, } from "react"
import PropTypes from "prop-types"

export default class ModelComponent extends Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    name: PropTypes.string,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    expandDepth: PropTypes.number,
    taggedOps: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { specSelectors, response } = this.props
    if (this.props.taggedOps.count() != nextProps.taggedOps.count()) {
      return true
    } else {
      return false
    } 
  }

  render(){
    let { getComponent } = this.props
    const Model = getComponent("Model")

    return <div className="model-box">
      <Model { ...this.props } depth={ 1 } expandDepth={ this.props.expandDepth || 0 }/>
    </div>
  }
}



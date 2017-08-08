import React, { Component } from "react"
import PropTypes from "prop-types"
import { getList } from "core/utils"

export default class Clear extends Component {

  onClick =() => {
    let { specSelectors, specActions: { changeParam,clearResponse,clearRequest }, path, method,operation } = this.props
    clearResponse( path, method )
    clearRequest( path, method )

    let parameters = getList(operation, ["parameters"]) 
    let onChangeKey=[ path, method ]

    parameters.map( (x, index) => {
          var name = x.get('name')    
          var oldVal= x.get('value') || ''

          changeParam(onChangeKey, name, undefined, oldVal.includes('<?xml'))
          return x
    })

  }

  render(){
    return (
      <button className="btn btn-clear opblock-control__btn" onClick={ this.onClick }>
        Clear
      </button>
    )
  }

  static propTypes = {
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    operation:  PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  }
}

import React from "react"
import PropTypes from "prop-types"

export default class ModelExample extends React.Component {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    schema: PropTypes.object.isRequired,
    example: PropTypes.any.isRequired,
    isExecute: PropTypes.bool,
    taggedOps: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      activeTab: "example"
    }
  }

  activeTab =( e ) => {
    let { target : { dataset : { name } } } = e

    this.setState({
      activeTab: name
    })
  }

  render() {
    let { getComponent, specSelectors, schema, example, isExecute,taggedOps } = this.props
    const ModelWrapper = getComponent("ModelWrapper")

    return <div>
      <ul className="tab">
        <li className={ "tabitem" + ( this.state.activeTab === "example" ? " active" : "") }>
          <a className="tablinks" data-name="example" onClick={ this.activeTab }>Example Value</a>
        </li>
        <li className={ "tabitem" + ( this.state.activeTab === "model" ? " active" : "") }>
          <a className={ "tablinks" + ( isExecute ? " inactive" : "" )} data-name="model" onClick={ this.activeTab }>Documentation</a>
        </li>
      </ul>
      
      <div>
        {
          (this.state.activeTab === "example") && example
        }
        {
           this.state.activeTab === "model" && <ModelWrapper schema={ schema }
                                                     getComponent={ getComponent }
                                                     taggedOps={taggedOps}
                                                     specSelectors={ specSelectors }
                                                     expandDepth={ 5 } />
        }
      </div>
    </div>
  }

}

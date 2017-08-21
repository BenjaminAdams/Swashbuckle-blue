import React, { Component } from "react"
import PropTypes from "prop-types"
import IM from "immutable"
import { eachMap } from 'core/utils'

export default class CustomHeaders extends Component {
  static propTypes = {
    customHeaders: PropTypes.array.isRequired,
    specSelectors: PropTypes.object.isRequired,
    pathMethod: PropTypes.array.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      customHeaders: props.customHeaders
    }
  }

  addEmptyHeader = () => {
    let { specSelectors, specActions, pathMethod } = this.props
    let { customHeaders } = this.state

    customHeaders.push({ name: '', value: '' })
    specActions.updateCustomHeaders(pathMethod, customHeaders)
    this.setState({ customHeaders: customHeaders })

  }

//   updateHeaders = (e) => {
//     let { specSelectors, specActions, pathMethod } = this.props
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.value)
//     var newCustomHeaders = IM.fromJS([{ name: 'test', value: e.target.value }])
//     specActions.updateCustomHeaders(pathMethod, newCustomHeaders)
//     this.setState({ customHeaders: newCustomHeaders })
//     console.log('ch3ecking the spec=', specSelectors.getCustomHeader(pathMethod))
//   }


  handleChangeName(i, e) {
    let { specActions, pathMethod } = this.props
    this.state.customHeaders[i].name = e.target.value
    this.setState({
      customHeaders: this.state.customHeaders
    });
    specActions.updateCustomHeaders(pathMethod, this.state.customHeaders)
  }

  handleChangeValue(i, e) {
    let { specActions, pathMethod } = this.props
    this.state.customHeaders[i].value = e.target.value
    this.setState({
      customHeaders: this.state.customHeaders
    });
    specActions.updateCustomHeaders(pathMethod, this.state.customHeaders)
  }

  render() {
    let { customHeaders } = this.state

    var fieldsArray = [];

    for (var i = 0; i < customHeaders.length; i++) {
      fieldsArray.push(
        <li key={i}>
            <input onChange={this.handleChangeName.bind(this, i)} type="text" placeholder="name" value={this.state.customHeaders[i].name}  />
            <input onChange={this.handleChangeValue.bind(this, i)} type="text" placeholder="value" value={this.state.customHeaders[i].value}  />
        </li>
      );
    }

    return (
      <div className="parameters">
        <span className="col parameters-col_name"></span>
        <span className="col parameters-col_description">
        <div>
            <div onClick={this.addEmptyHeader} className="addNewHeader" title="Adds a custom HTTP header to your request"><span className="plusIcon">+</span> Add custom header</div>
            <ul className="customHeaderList">
                {fieldsArray}                 
            </ul>             
        </div>
        </span>
        </div>
    )
  }
}

import React, { Component } from "react"
import PropTypes from "prop-types"
import IM from "immutable"
import { eachMap } from 'core/utils'

export default class CustomHeaders extends Component {
  static propTypes = {
    customHeaders: PropTypes.object.isRequired,
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
    
    customHeaders = customHeaders.push(IM.Map({ name: '', value: '' }))
 
    specActions.updateCustomHeaders(pathMethod,customHeaders)
    this.setState({ customHeaders: customHeaders })

    console.log('adding a new header',customHeaders)
  }

  updateHeaders = (e) => {
    let { specSelectors,specActions, pathMethod } = this.props

    console.log(e)
    console.log(e.target)
    console.log(e.target.value)

    var newCustomHeaders= IM.fromJS([{name:'test', value:e.target.value}])

    specActions.updateCustomHeaders(pathMethod,newCustomHeaders)

    this.setState({ customHeaders: newCustomHeaders })

    console.log('ch3ecking the spec=', specSelectors.getCustomHeader(pathMethod))
  }

  getAllheaderValues = (e) => {

  }

  render() {
    let { customHeaders } = this.state

    // var fieldsArray = [];

    // for (var i = 0; i <= this.props.numToShow; i++) {
    //   fieldsArray.push(
    //     <div>
    //         <label>
    //             <div className="label">{i}</div> 
    //             <input 
    //               type='text' 
    //               value={this.state.values[i]} 
    //               name={this.state.values[i]} 
    //               onChange={this.handleChange.bind(this, i)} />
    //         </label>
    //     </div>
    //   );
    // }


    return (
      <div className="parameters">
        <span className="col parameters-col_name"></span>

        <span className="col parameters-col_description">
        <div>
            <div onClick={this.addEmptyHeader} className="addNewHeader" title="Adds a custom HTTP header to your request"><span className="plusIcon">+</span> Add custom header</div>

            <ul className="customHeaderList">
                {
                  IM.List(customHeaders).map((head, i) => (
                     <li key={i}>
                        <input onChange={this.updateHeaders} type="text" placeholder="name" value={head.get('name')} />
                        <input onChange={this.updateHeaders} type="text" placeholder="value" value={head.get('value')} />
                     </li>
                  )).toArray()
                }                  
            </ul>             
        </div>
        </span>
        </div>

    )

  }
}

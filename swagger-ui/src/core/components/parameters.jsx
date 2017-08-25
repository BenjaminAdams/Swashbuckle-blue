import React, { Component } from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"
import Im from "immutable"
import { getXhrHistory } from 'core/ls-actions'
import { fromJS,OrderedMap } from "immutable"
import { atou, eachMap } from 'core/utils'

export default class Parameters extends Component {
  static propTypes = {
    parameters: ImPropTypes.list.isRequired,
    specActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    fn: PropTypes.object.isRequired,
    tryItOutEnabled: PropTypes.bool,
    onTryoutClick: PropTypes.func,
    onCancelClick: PropTypes.func,
    onChangeKey: PropTypes.array,
    pathMethod: PropTypes.array.isRequired,
    summary: PropTypes.string,
    onChangeConsumesWrapper: PropTypes.func.isRequired,
    operationId: PropTypes.string,
    tag: PropTypes.string,
    taggedOps: PropTypes.object.isRequired,
  }

  static defaultProps = {
    onTryoutClick: Function.prototype,
    onCancelClick: Function.prototype,
    tryItOutEnabled: true,
    onChangeKey: [],
    summary: '',
    operationId: ''
  }

  //wont work here
  // shouldComponentUpdate(nextProps, nextState) {
  //   let { specSelectors, response } = this.props
  //   if (this.props.taggedOps.count() != nextProps.taggedOps.count()) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  onChange = (param, value, isXml) => {
    let { specActions: { changeParam }, onChangeKey} = this.props
    //console.log('inside of onChange, onChangeKey=',onChangeKey,param.toJS())
    changeParam(onChangeKey, param.get("name"), value, isXml)
  }

  render() {
    let {
      onTryoutClick,
      onCancelClick,
      parameters,
      tryItOutEnabled,
      summary,
      fn,
      getComponent,
      specSelectors,
      pathMethod,
      onChangeConsumesWrapper,
      operationId, 
      taggedOps,
      tag
    } = this.props

    const ParameterRow = getComponent("parameterRow")
    const TryItOutButton = getComponent("TryItOutButton")
    const isExecute = true 
    summary = '<h3>' + tag + ' ' + operationId + '</h3>' + summary

    return (
      <div className="opblock-section">
        <div className="opblock-section-header" dangerouslySetInnerHTML={{__html:summary}}>        
                
            { 
              /*
               allowTryItOut ? (
              <TryItOutButton enabled={ tryItOutEnabled } onCancelClick={ onCancelClick } onTryoutClick={ onTryoutClick } />
            ) : null 
            */
              }
        </div>
        { !parameters.count() ? <div className="opblock-description-wrapper"><p>No parameters</p></div> :
          <div className="table-container">
            <div className="parameters">            
                {
                  eachMap(parameters, (parameter) => (
                    <ParameterRow fn={ fn }
                      getComponent={ getComponent }
                      param={ parameter }
                      taggedOps={taggedOps}
                      key={ parameter.get( "name" ) }
                      onChange={ this.onChange }
                      onChangeConsumes={onChangeConsumesWrapper}
                      specSelectors={ specSelectors }
                      pathMethod={ pathMethod }
                      isExecute={ isExecute }/>
                  )).toArray()
                }           
            </div>
          </div>
        }
      </div>
    )
  }
}

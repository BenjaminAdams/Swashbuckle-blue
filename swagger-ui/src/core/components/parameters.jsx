import React, { Component } from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"
import Im from "immutable"
import { getXhrHistory } from 'core/ls-actions'
import { fromJS } from "immutable"

// More readable, just iterate over maps, only
const eachMap = (iterable, fn) => iterable.valueSeq().filter(Im.Map.isMap).map(fn)

export default class Parameters extends Component {

  static propTypes = {
    parameters: ImPropTypes.list.isRequired,
    specActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    fn: PropTypes.object.isRequired,
    tryItOutEnabled: PropTypes.bool,
    allowTryItOut: PropTypes.bool,
    onTryoutClick: PropTypes.func,
    onCancelClick: PropTypes.func,
    onChangeKey: PropTypes.array,
    pathMethod: PropTypes.array.isRequired,
    summary: PropTypes.string,
    onChangeConsumesWrapper: PropTypes.func.isRequired,
    operationId: PropTypes.string,
    tag: PropTypes.string
  }

  static defaultProps = {
    onTryoutClick: Function.prototype,
    onCancelClick: Function.prototype,
    tryItOutEnabled: false,
    allowTryItOut: true,
    onChangeKey: [],
    summary: '',
    operationId: ''
  }

  onChange = (param, value, isXml) => {
    let {
      specActions: { changeParam },
      onChangeKey,
    } = this.props

    changeParam(onChangeKey, param.get("name"), value, isXml)
  }

  loadValuesFromHistory = (parameters) => {
    var slimParameters;
    if (parameters.count()) {
      var xhrHistory = fromJS(getXhrHistory())
      if (xhrHistory != null && xhrHistory.count()) {
        slimParameters = xhrHistory.first().get('parameters')

        parameters= parameters.map( (x, index) => {
            console.log('x, index=',x, index)
            var name = x.get('name')     
            var paramFromSlim= slimParameters.find(y=>y.get('name')==name)
            
            if(paramFromSlim) {
             x= x.set('value', paramFromSlim.get('value'))
            }
         
            return x
        })
      }
    }

    return parameters;
  }

  render() {
    let {
      onTryoutClick,
      onCancelClick,
      parameters,
      allowTryItOut,
      tryItOutEnabled,
      summary,
      fn,
      getComponent,
      specSelectors,
      pathMethod,
      onChangeConsumesWrapper,
      operationId,
      tag
    } = this.props

    const ParameterRow = getComponent("parameterRow")
    const TryItOutButton = getComponent("TryItOutButton")
    const isExecute = tryItOutEnabled && allowTryItOut
    summary = '<h3>' + tag + ' ' + operationId + '</h3>' + summary
    parameters= this.loadValuesFromHistory(parameters)
    console.log('parameters after',parameters)

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

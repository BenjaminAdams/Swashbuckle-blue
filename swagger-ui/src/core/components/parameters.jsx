import React, { Component } from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"
import Im from "immutable"
import { getXhrHistory } from 'core/ls-actions'
import { fromJS } from "immutable"
import { atou } from 'core/utils'

// More readable, just iterate over maps, only
const eachMap = (iterable, fn) => iterable.valueSeq().filter(Im.Map.isMap).map(fn)

export default class Parameters extends Component {
constructor(props) {
    super(props);
   //  this.state = {stopLoadingValuesFromUrl:false};
   this.stopLoadingValuesFromUrl=false
  }


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
    let { specActions: { changeParam }, onChangeKey} = this.props
    console.log('inside of onChange')
    this.stopLoadingValuesFromUrl=true
    changeParam(onChangeKey, param.get("name"), value, isXml)
  }



  // loadValuesFromQry = (parameters) => {
  //   console.log(' this.stopLoadingValuesFromUrl', this.stopLoadingValuesFromUrl)

  //   if (this.stopLoadingValuesFromUrl===true || !parameters || !parameters.count() || !window.location.hash.includes('?params=')) return parameters

  //   var split=window.location.hash.split('?params=')
  //   if(!split || !split[1]) return parameters
  //   var slimParameters = fromJS(JSON.parse(atou(split[1])))

  //   parameters= parameters.map( (x, index) => {
  //         var name = x.get('name')     
  //         var paramFromSlim= slimParameters.find(y=>y.get('name')==name)
          
  //         if(paramFromSlim) {
  //           x= x.set('value', paramFromSlim.get('value'))
  //         }      
  //         return x
  //     })
  //   return parameters
  // }


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

    console.log('rendering parameters.jsx again')

   // parameters= this.loadValuesFromQry(parameters)

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

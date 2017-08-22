import React, { PureComponent } from "react"
import { List, OrderedMap, fromJS } from 'immutable'
import PropTypes from "prop-types"
import { getList,atou } from "core/utils"
import * as CustomPropTypes from "core/proptypes"
import {getXhrHistory} from 'core/ls-actions'
import {HistoryBoxes} from "core/components/history-boxes"
//import HistoryBoxes from 'core/components/history-boxes.jsx'

export default class Operation extends PureComponent {
  static propTypes = {
    path: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    operation: PropTypes.object.isRequired,
    displayOperationId: PropTypes.bool,
    displayRequestDuration: PropTypes.bool,
    getComponent: PropTypes.func.isRequired,
    authActions: PropTypes.object,
    authSelectors: PropTypes.object,
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    fn: PropTypes.object.isRequired,
    tag: PropTypes.string,
    qryParamsFromRouter: PropTypes.object
  }

  static defaultProps = {
    displayOperationId: false,
    displayRequestDuration: false
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      tryItOutEnabled: true,
      //customHeaders : []
    }
  }

componentWillMount(){
    let { operation, specActions } = this.props

   let parameters = getList(operation, ["parameters"]) 
   parameters=this.loadValuesFromQry(parameters)
}


  componentWillReceiveProps(nextProps) {
    const defaultContentType = "application/json"
    let { specActions, path, method, operation } = nextProps
    let producesValue = operation.get("produces_value")
    let produces = operation.get("produces")
    let consumes = operation.get("consumes")
    let consumesValue = operation.get("consumes_value")

   // if(nextProps.response !== this.props.response) {  //moved this out of operations.jsx
   //   this.setState({ executeInProgress: false })
   // }

    if (producesValue === undefined) {
      producesValue = produces && produces.size ? produces.first() : defaultContentType
      specActions.changeProducesValue([path, method], producesValue)
    }

    if (consumesValue === undefined) {
      consumesValue = consumes && consumes.size ? consumes.first() : defaultContentType
      specActions.changeConsumesValue([path, method], consumesValue)
    }
  }

  onChangeConsumesWrapper = ( val ) => {
    let { specActions: { changeConsumesValue }, path, method } = this.props

    var onChangeKey=[ path, method ]
    changeConsumesValue(onChangeKey, val)
  }

  loadValuesFromQry = (parameters) => {
    let { specActions: { changeParam, changeConsumesValue }, path, method, qryParamsFromRouter } = this.props
    var onChangeKey=[ path, method ]

    if (!parameters || !parameters.count() || !qryParamsFromRouter || !qryParamsFromRouter.historyParams) return parameters

    var slimParameters = fromJS(JSON.parse(atou(qryParamsFromRouter.historyParams)))

    parameters= parameters.map( (x, index) => {
          var name = x.get('name')     
          var paramFromSlim= slimParameters.find(y=>y.get('name')===name)

          if(paramFromSlim) {
            var isXml=false
            var newVal= paramFromSlim.get('value')
            if(!newVal) {
              newVal= paramFromSlim.get('value_xml')
              if(newVal) {
                isXml = true
                changeConsumesValue(onChangeKey, 'application/xml')
              }else {
                newVal = ''
              }
            }

            x= x.set('value', newVal)
            changeParam(onChangeKey, name, newVal, isXml)
         
          }      
          return x
      })
    return parameters
  }

  onTryoutClick =() => {
    this.setState({tryItOutEnabled: !this.state.tryItOutEnabled})
  }

  onCancelClick =() => {
    let { specActions, path, method } = this.props
    this.setState({tryItOutEnabled: !this.state.tryItOutEnabled})
    specActions.clearValidateParams([path, method])
  }

  onChangeProducesWrapper = ( val ) => this.props.specActions.changeProducesValue([this.props.path,this.props.method], val)

  onExecute = () => {
    this.setState({ executeInProgress: true })
  }

  render() {
    let {  path, method, operation,  displayOperationId,
      displayRequestDuration,
      fn,
      getComponent,
      specActions,
      specSelectors,
      authActions,
      authSelectors,
      tag, 
      urlHash,
      routeId
    } = this.props

    var response = specSelectors.responseFor(path, method)
    var request = specSelectors.requestFor(path, method)

    let summary = operation.get("summary")
    let description = operation.get("description")
    let deprecated = operation.get("deprecated")
    let externalDocs = operation.get("externalDocs")
    let responses = operation.get("responses")
    let security = operation.get("security") || specSelectors.security()
    let produces = operation.get("produces")
    let parameters = getList(operation, ["parameters"])
    let operationId = operation.get("__originalOperationId")
    let operationScheme = specSelectors.operationScheme(path, method)
    const Responses = getComponent("responses")
    const Parameters = getComponent( "parameters" )
    const Execute = getComponent( "execute" )
    const ContentType = getComponent( "contentType" )
    const Clear = getComponent( "clear" )
    const AuthorizeOperationBtn = getComponent( "authorizeOperationBtn" )
    const JumpToPath = getComponent("JumpToPath", true)
    const Collapse = getComponent( "Collapse" )
    const Markdown = getComponent( "Markdown" )
    const CustomHeaders = getComponent('customHeaders')
    //const HistoryBoxes = getComponent('HistoryBoxes', true)
    var pathMethod=[path, method]

    let consumesValue = specSelectors.contentTypeValues(pathMethod).get("requestContentType")
    let consumes = specSelectors.operationConsumes(pathMethod)
    produces = produces && produces.size ? produces : Responses.defaultProps.produces

    // Merge in Live Response
    if(response && response.size > 0) {
      let notDocumented = !responses.get(String(response.get("status")))
      response = response.set("notDocumented", notDocumented)
    }

    let { tryItOutEnabled } = this.state
    tryItOutEnabled= true  //always enable TryItOut
    let shown = true
    let onChangeKey = [ path, method ] // Used to add values to _this_ operation ( indexed by path and method )

   var customHeaders= specSelectors.getCustomHeader(pathMethod)

    return (
        <div className={deprecated ? "opblock opblock-deprecated" : shown ? `opblock opblock-${method} is-open` : `opblock opblock-${method}`} id={operationId} >
          <div className={`opblock-summary opblock-summary-${method}`} >
              <span className="opblock-summary-method">{method.toUpperCase()}</span>
              <span className={ deprecated ? "opblock-summary-path__deprecated" : "opblock-summary-path" } >
                    <span>{path}</span>
              </span>

            { /*  displayOperationId && operationId ? <span className="opblock-summary-operation-id">{operationId}</span> : null */ }

            { /* we dont need this here
              (!security || !security.count()) ? null :
                <AuthorizeOperationBtn authActions={ authActions }
                  security={ security }
                  authSelectors={ authSelectors }/>
           */ }
          </div>
         
            <div className="opblock-body">
              { deprecated && <h4 className="opblock-title_normal"> Warning: Deprecated</h4>}
              { description &&
                <div className="opblock-description-wrapper">
                  <div className="opblock-description">
                    <Markdown source={ description } />
                  </div>
                </div>
              }
              {
                externalDocs && externalDocs.get("url") ?
                <div className="opblock-external-docs-wrapper">
                  <h4 className="opblock-title_normal">Find more details</h4>
                  <div className="opblock-external-docs">
                    <span className="opblock-external-docs__description">
                      <Markdown source={ externalDocs.get("description") } />
                    </span>
                    <a className="opblock-external-docs__link" href={ externalDocs.get("url") }>{ externalDocs.get("url") }</a>
                  </div>
                </div> : null
              }

              <Parameters
                parameters={parameters}
                onChangeKey={onChangeKey}
                onChangeConsumesWrapper={this.onChangeConsumesWrapper}
                onTryoutClick = { this.onTryoutClick }
                onCancelClick = { this.onCancelClick }
                tryItOutEnabled = { tryItOutEnabled }
                summary={summary}
                fn={fn}
                tag={tag}
                getComponent={ getComponent }
                specActions={ specActions }
                specSelectors={ specSelectors }
                pathMethod={pathMethod}
                operationId={operationId}
              />


        <div className="opblock-section-header-response">          
          <CustomHeaders 
            customHeaders={customHeaders} 
            specSelectors={specSelectors}  
            specActions={specActions}
            pathMethod={pathMethod}
            
            />
        </div>
                  
        <div className="opblock-section-header-response">
          { consumes.size ? 
            <div className="contentTypeContainer">
              <label htmlFor="" title="Content-Type header value">
                <span>Content-Type</span>
                <ContentType value={ consumesValue } contentTypes={ consumes } onChange={this.onChangeConsumesWrapper} className="body-param-content-type" />
              </label>
            </div> : null
          }

          {produces.size >0 ?
            <div className="acceptContainer">
                <label htmlFor="" title="Accept header value">
                  <span>Accept</span>
                  <ContentType value={operation.get("produces_value")}
                            onChange={this.onChangeProducesWrapper}
                            contentTypes={produces}
                            className="execute-content-type"/>
                </label>
            </div>
            : null
          }
        </div>


            <div className="btn-group">
                  <Execute
                    getComponent={getComponent}
                    operation={ operation }
                    specActions={ specActions }
                    specSelectors={ specSelectors }
                    path={ path }
                    method={ method }
                    urlHash={urlHash}
                    routeId={routeId}
                    onExecute={ this.onExecute } />
              

            
                  <Clear
                    onClick={ this.onClearClick }
                    specActions={ specActions }
                    specSelectors={ specSelectors }
                    operation={operation}
                    path={ path }
                    method={ method }/>
              
            </div>

            <HistoryBoxes routeId={routeId} />
            

            {this.state.executeInProgress ? <div className="loading-container"><div className="loading"></div></div> : null}

              { !responses ? null :
                  <Responses
                    responses={ responses }
                    request={ request }
                    tryItOutResponse={ response }
                    getComponent={ getComponent }
                    specSelectors={ specSelectors }
                    specActions={ specActions }
                    produces={ produces }
                    producesValue={ operation.get("produces_value") }
                    pathMethod={ [path, method] }
                    displayRequestDuration={ displayRequestDuration }
                    fn={fn} />
              }
            </div>       
        </div>
    )
  }
}

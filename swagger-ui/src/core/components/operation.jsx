import React, { PureComponent } from "react"
import { List, OrderedMap, fromJS } from 'immutable'
import PropTypes from "prop-types"
import { getList } from "core/utils"
import * as CustomPropTypes from "core/proptypes"
import {getXhrHistory} from 'core/ls-actions'

export default class Operation extends PureComponent {
  static propTypes = {
    path: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    operation: PropTypes.object.isRequired,
    jumpToKey: CustomPropTypes.arrayOrString.isRequired,
    allowTryItOut: PropTypes.bool,
    displayOperationId: PropTypes.bool,
    displayRequestDuration: PropTypes.bool,
    response: PropTypes.object,
    request: PropTypes.object,
    getComponent: PropTypes.func.isRequired,
    authActions: PropTypes.object,
    authSelectors: PropTypes.object,
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    fn: PropTypes.object.isRequired,
    getConfigs: PropTypes.func.isRequired,
    tag: PropTypes.string
  }

  static defaultProps = {
    response: null,
    allowTryItOut: true,
    displayOperationId: false,
    displayRequestDuration: false
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      tryItOutEnabled: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const defaultContentType = "application/json"
    let { specActions, path, method, operation } = nextProps
    let producesValue = operation.get("produces_value")
    let produces = operation.get("produces")
    let consumes = operation.get("consumes")
    let consumesValue = operation.get("consumes_value")

    if(nextProps.response !== this.props.response) {
      this.setState({ executeInProgress: false })
    }

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
    let {
      specActions: { changeConsumesValue },
      path, method
    } = this.props

    var onChangeKey=[ path, method ]
    changeConsumesValue(onChangeKey, val)
  }

  onTryoutClick =() => {
    this.setState({tryItOutEnabled: !this.state.tryItOutEnabled})
  }

  onCancelClick =() => {
    let { specActions, path, method } = this.props
    this.setState({tryItOutEnabled: !this.state.tryItOutEnabled})
    specActions.clearValidateParams([path, method])
  }

  onExecute = () => {
    this.setState({ executeInProgress: true })
  }

  render() {
    let {
      jumpToKey,
      path,
      method,
      operation,
      response,
      request,
      allowTryItOut,
      displayOperationId,
      displayRequestDuration,
      fn,
      getComponent,
      specActions,
      specSelectors,
      authActions,
      authSelectors,
      getConfigs,
      tag, 
      urlHash,
      routeId
    } = this.props

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
    const Clear = getComponent( "clear" )
    const AuthorizeOperationBtn = getComponent( "authorizeOperationBtn" )
    const JumpToPath = getComponent("JumpToPath", true)
    const Collapse = getComponent( "Collapse" )
    const Markdown = getComponent( "Markdown" )

    const { deepLinking } = getConfigs()
    const isDeepLinkingEnabled = deepLinking && deepLinking !== "false"

    // Merge in Live Response
    if(response && response.size > 0) {
      let notDocumented = !responses.get(String(response.get("status")))
      response = response.set("notDocumented", notDocumented)
    }

    let { tryItOutEnabled } = this.state
    tryItOutEnabled= true  //always enable TryItOut
    let shown = true
    let onChangeKey = [ path, method ] // Used to add values to _this_ operation ( indexed by path and method )

// var xhrHistory= fromJS(getXhrHistory())
// if(xhrHistory != null &&  xhrHistory.count()) {
//   parameters = xhrHistory.first().get('parameters')
// }

console.log('request=', request? request.toJS() : request)
console.log('response=', response? response.toJS() : response)

    return (
        <div className={deprecated ? "opblock opblock-deprecated" : shown ? `opblock opblock-${method} is-open` : `opblock opblock-${method}`} id={operationId} >
          <div className={`opblock-summary opblock-summary-${method}`} >
              <span className="opblock-summary-method">{method.toUpperCase()}</span>
              <span className={ deprecated ? "opblock-summary-path__deprecated" : "opblock-summary-path" } >
                    <span>{path}</span>
                <JumpToPath path={jumpToKey} />
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
                allowTryItOut={allowTryItOut}
                summary={summary}
                fn={fn}
                tag={tag}
                getComponent={ getComponent }
                specActions={ specActions }
                specSelectors={ specSelectors }
                pathMethod={ [path, method] }
                operationId={operationId}
              />
                  
            <div className={(!tryItOutEnabled || !response || !allowTryItOut) ? "execute-wrapper" : "btn-group"}>
              { !tryItOutEnabled || !allowTryItOut ? null :

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
              }

              { (!tryItOutEnabled || !response || !allowTryItOut) ? null :
                  <Clear
                    onClick={ this.onClearClick }
                    specActions={ specActions }
                    path={ path }
                    method={ method }/>
              }
            </div>

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
                    onChangeConsumesWrapper={this.onChangeConsumesWrapper}
                    fn={fn} />
              }
            </div>       
        </div>
    )
  }
}

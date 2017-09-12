import React from "react"
import PropTypes from "prop-types"
//import { helpers } from "swagger-client"
import { opId } from "core/plugins/swagger-js"
import { HashRouter, Route, Link, Switch } from 'react-router-dom'



export default class Operations extends React.Component {
  static propTypes = {
    specSelectors: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    authActions: PropTypes.object.isRequired,
    authSelectors: PropTypes.object.isRequired,
    getConfigs: PropTypes.func.isRequired,
    taggedOps: PropTypes.object.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    let { specSelectors } = this.props

    if (this.props.taggedOps.count() != nextProps.taggedOps.count()) {
      return true
    } else {
      return false
    }
  }



  render() {
    let { specSelectors, specActions, getComponent, layoutSelectors, layoutActions, authActions, authSelectors, getConfigs, fn, taggedOps } = this.props

    //let taggedOps = specSelectors.taggedOperations()
    // let taggedOps = specSelectors.operationsExtraSlim()     

    if (taggedOps.size < 1) return <h3> No operations defined in spec! </h3>

    const Operation = getComponent("operation")
    const Collapse = getComponent("Collapse")

    var version = specSelectors.getVersion()
    let { docExpansion, displayOperationId, displayRequestDuration, deepLinking } = getConfigs()

    const isDeepLinkingEnabled = deepLinking && deepLinking !== "false"

    let filter = layoutSelectors.currentFilter()

    //var baseUrlSplit = window.location.pathname.split('/swagger/ui/index')
    //var baseUrl = baseUrlSplit[0] + '/swagger/ui/index'
    var baseUrl = window.swashbuckleConfig.baseUrl

    var allTheRoutes = taggedOps.map((operations, tag) => {

      // let operations = tagObj.get("operations")

      var routes = operations.map(op => {
        var response = specSelectors.responseFor(op.get('path'), op.get('method'))

        return <Route exact
          path={op.get('urlHash') + '/:historyParams?/:respBody?'}
          key={op.get('routeId')}
          render={x =>
            <Operation
              {...op.toObject() }
              bensOperationId={op.get('operationId')}
              path={op.get('path')}
              parentId={op.get('parentId')}
              //urlHash={op.get('urlHash')}
              method={op.get('method')}
              key={x.location.pathname} //we have to pass this so it re-renders between historybox items
              tag={tag}
              response={response}
              taggedOps={taggedOps}
              displayOperationId={true}
              displayRequestDuration={true}
              specActions={specActions}
              specSelectors={specSelectors}
              layoutActions={layoutActions}
              layoutSelectors={layoutSelectors}
              authActions={authActions}
              authSelectors={authSelectors}
              getComponent={getComponent}
              fn={fn}
              qryParamsFromRouter={x.match.params}
            />
          }
        />
      }).toArray()

      return routes;
    }).toArray()

    return (
      <div>
        <HashRouter basename={baseUrl} hashType="noslash">
          <Switch>
            {allTheRoutes}
            {  /* had to disable this because when you clicked a link in the history and the versions didnt match it would show 404 
                    <Route path="/:version/*" render={x=><h2>404 API Method Not Found</h2>}/>   */ }
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

Operations.propTypes = {
  layoutActions: PropTypes.object.isRequired,
  specSelectors: PropTypes.object.isRequired,
  specActions: PropTypes.object.isRequired,
  layoutSelectors: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired,
  fn: PropTypes.object.isRequired
}

import React from "react"
import PropTypes from "prop-types"
import { helpers } from "swagger-client"
import { HashRouter, Route, Link } from 'react-router-dom'

const { opId } = helpers

export default class Operations extends React.Component {
  static propTypes = {
    specSelectors: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    authActions: PropTypes.object.isRequired,
    authSelectors: PropTypes.object.isRequired,
    getConfigs: PropTypes.func.isRequired
  };

  render() {
    let {
      specSelectors,
      specActions,
      getComponent,
      layoutSelectors,
      layoutActions,
      authActions,
      authSelectors,
      getConfigs,
      fn
    } = this.props

    let taggedOps = specSelectors.taggedOperations()

    const Operation = getComponent("operation")
    const OperationWrapper = getComponent("operationWrapper")
    const Collapse = getComponent("Collapse")

    let showSummary = layoutSelectors.showSummary()
    let {
      docExpansion,
      displayOperationId,
      displayRequestDuration,
      maxDisplayedTags,
      deepLinking
    } = getConfigs()

    const isDeepLinkingEnabled = deepLinking && deepLinking !== "false"

    let filter = layoutSelectors.currentFilter()

    if (filter) {
      if (filter !== true) {
        taggedOps = taggedOps.filter((tagObj, tag) => {
          return tag.indexOf(filter) !== -1
        })
      }
    }

    if (maxDisplayedTags && !isNaN(maxDisplayedTags) && maxDisplayedTags >= 0) {
      taggedOps = taggedOps.slice(0, maxDisplayedTags)
    }

    //var baseUrlSplit = window.location.pathname.split('/swagger/ui/index')
    //var baseUrl = baseUrlSplit[0] + '/swagger/ui/index'
    var baseUrl =window.swashbuckleConfig.baseUrl

      var allTheRoutes= taggedOps.map( (tagObj, tag) => {
              let operations = tagObj.get("operations")
              let tagDescription = tagObj.getIn(["tagDetails", "description"], null)

             //const operationId = op.getIn(["operation", "operationId"]) || op.getIn(["operation", "__originalOperationId"]) || opId(op.get("operation"), path, method) || op.get("id")

             // let isShownKey = ["operations-tag", tag]
             // let showTag = layoutSelectors.isShown(isShownKey, docExpansion === "full" || docExpansion === "list")

            //var routes = operations.map(op => <Route exact path={op.get('routeId')}  key={op.get('routeId')}  render={x => console.log('inside render=', x) }  />)
            var routes = operations.map(op => <Route exact path={"/"+op.get('routeId')}  key={op.get('routeId')}  render={x => <div>asdasdasd</div> }  />)

            return routes

            })
            //  { taggedOps.size < 1 ? <h3> No operations defined in spec! </h3> : null }

    return (
        <div>
          <HashRouter basename={baseUrl}>
          <div>
          {allTheRoutes}        
          </div>
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
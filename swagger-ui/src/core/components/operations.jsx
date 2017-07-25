import React from "react"
import PropTypes from "prop-types"
import { helpers } from "swagger-client"
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

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
      let { specSelectors, specActions, getComponent, layoutSelectors, layoutActions, authActions, authSelectors, getConfigs, fn } = this.props

      let taggedOps = specSelectors.taggedOperations()
      if (taggedOps.size < 1) return <h3> No operations defined in spec! </h3>

      const Operation = getComponent("operation")
      const OperationWrapper = getComponent("operationWrapper")
      const Collapse = getComponent("Collapse")

      var version= specSelectors.getVersion() 
      let showSummary = layoutSelectors.showSummary()
      let { docExpansion, displayOperationId, displayRequestDuration, maxDisplayedTags, deepLinking } = getConfigs()

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
      var baseUrl = window.swashbuckleConfig.baseUrl

      var allTheRoutes = taggedOps.map((tagObj, tag) => {
          let operations = tagObj.get("operations")
          let tagDescription = tagObj.getIn(["tagDetails", "description"], null)
          let isShownKey = ["operations-tag", tag]
          let showTag = layoutSelectors.isShown(isShownKey, docExpansion === "full" || docExpansion === "list")

          var routes = operations.map(op => {
              const path = op.get("path", "")
              const method = op.get("method", "")
              const jumpToKey = `paths.${path}.${method}`
              const operationId = op.getIn(["operation", "operationId"]) || op.getIn(["operation", "__originalOperationId"]) || opId(op.get("operation"), path, method) || op.get("id")
              const isShownKey = ["operations", tag, operationId]
              const allowTryItOut = specSelectors.allowTryItOutFor(op.get("path"), op.get("method"))
              const response = specSelectors.responseFor(op.get("path"), op.get("method"))
              const request = specSelectors.requestFor(op.get("path"), op.get("method"))

              return <Route 
                      exact path={ op.get('urlHash') } 
                      key={ op.get('routeId') } 
                      render={ x => 
                        <Operation
                          {...op.toObject()}
                          jumpToKey={jumpToKey}
                          showSummary={showSummary}
                          key={isShownKey}
                          response={ response }
                          request={ request }
                          allowTryItOut={allowTryItOut}
                          displayOperationId={true}
                          displayRequestDuration={displayRequestDuration}
                          specActions={ specActions }
                          specSelectors={ specSelectors }
                          layoutActions={ layoutActions }
                          layoutSelectors={ layoutSelectors }
                          authActions={ authActions }
                          authSelectors={ authSelectors }
                          getComponent={ getComponent }
                          fn={fn}
                          getConfigs={ getConfigs }
                        />
            }
            />}).toArray()

            return routes;
          }).toArray()

        return (
          <div>
            <HashRouter basename={ baseUrl } hashType="noslash">
              <Switch>
                { allTheRoutes }
                <Route render={x=><h2>404 API Method Not Found</h2>}/>
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

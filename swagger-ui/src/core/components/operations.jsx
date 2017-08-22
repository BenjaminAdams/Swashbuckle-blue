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
      getConfigs: PropTypes.func.isRequired
    };

    render() {
      let { specSelectors, specActions, getComponent, layoutSelectors, layoutActions, authActions, authSelectors, getConfigs, fn } = this.props

      let taggedOps = specSelectors.taggedOperations()
      if (taggedOps.size < 1) return <h3> No operations defined in spec! </h3>

      const Operation = getComponent("operation")
      const Collapse = getComponent("Collapse")

      var version= specSelectors.getVersion() 
      let { docExpansion, displayOperationId, displayRequestDuration, maxDisplayedTags, deepLinking } = getConfigs()

      const isDeepLinkingEnabled = deepLinking && deepLinking !== "false"

      let filter = layoutSelectors.currentFilter()

      if (filter && filter !== true) {     
          taggedOps = taggedOps.filter((tagObj, tag) => {
            return tag.indexOf(filter) !== -1
          })        
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
                          key={isShownKey}
                          response={ response }
                          request={ request }
                          tag={tag}
                          allowTryItOut={allowTryItOut}
                          displayOperationId={true}
                          displayRequestDuration={true}
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

          console.log('rendering operations', allTheRoutes.length)

        return (
          <div>
            <HashRouter basename={ baseUrl } hashType="noslash">
              <Switch>
                { allTheRoutes }
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

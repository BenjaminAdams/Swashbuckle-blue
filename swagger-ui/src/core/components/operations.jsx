import React from "react"
import PropTypes from "prop-types"
import { helpers } from "swagger-client"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

    return (
        <div>

          {
            taggedOps.map( (tagObj, tag) => {
              let operations = tagObj.get("operations")
              let tagDescription = tagObj.getIn(["tagDetails", "description"], null)

             // let isShownKey = ["operations-tag", tag]
             // let showTag = layoutSelectors.isShown(isShownKey, docExpansion === "full" || docExpansion === "list")

               // <div className={showTag ? "opblock-tag-section is-open" : "opblock-tag-section"} key={"operation-" + tag}>

                  //<h4
                  //  onClick={() => layoutActions.show(isShownKey, !showTag)}
                  //  className={!tagDescription ? "opblock-tag no-desc" : "opblock-tag" }
                  //  id={isShownKey.join("-")}>
                  //  <a
                  //    className="nostyle"
                  //    onClick={(e) => e.preventDefault()}
                  //    href={ isDeepLinkingEnabled ? `#/${tag}` : ""}>
                  //    <span>{tag}</span>
                  //  </a>
                  //  { !tagDescription ? null :
                  //      <small>
                  //        { tagDescription }
                  //      </small>
                  //  }

                  //  <button className="expand-operation" title="Expand operation" onClick={() => layoutActions.show(isShownKey, !showTag)}>
                  //    <svg className="arrow" width="20" height="20">
                  //      <use xlinkHref={showTag ? "#large-arrow-down" : "#large-arrow"} />
                  //    </svg>
                  //  </button>
                  //</h4>

                  operations.map(op => <Route exact path={"/" + op.get('id')}  key={op.get('id')}  render={x => console.log('inside render=', x) }  />)
            }).toArray()
          }

          { taggedOps.size < 1 ? <h3> No operations defined in spec! </h3> : null }
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
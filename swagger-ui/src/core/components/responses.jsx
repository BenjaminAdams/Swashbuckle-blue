import React from "react"
import PropTypes from "prop-types"
import { fromJS } from "immutable"
import { defaultStatusCode } from "core/utils"

export default class Responses extends React.Component {

  static propTypes = {
    request: PropTypes.object,
    tryItOutResponse: PropTypes.object,
    responses: PropTypes.object.isRequired,
    produces: PropTypes.object,
    producesValue: PropTypes.any,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    pathMethod: PropTypes.array.isRequired,
    displayRequestDuration: PropTypes.bool.isRequired,
    fn: PropTypes.object.isRequired,
    taggedOps: PropTypes.object.isRequired
  }

  static defaultProps = {
    request: null,
    tryItOutResponse: null,
    produces: fromJS(["application/json"]),
    consumes: fromJS(["application/json"]),
    displayRequestDuration: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { specSelectors, response } = this.props

    if (this.props.taggedOps.count() != nextProps.taggedOps.count()) {
      return true
    } else if (nextProps.response !== this.props.response) {
      return true
    } else {
      return false
    }
  }

  render() {
    let { responses, request, tryItOutResponse, getComponent, specSelectors, fn, producesValue, displayRequestDuration, pathMethod, taggedOps } = this.props
    let defaultCode = defaultStatusCode(responses)
    const ContentType = getComponent("contentType")
    const LiveResponse = getComponent("liveResponse")
    const Response = getComponent("response")

    return (
      <div className="responses-wrapper">
        <div className="responses-inner">
          {
            !tryItOutResponse ? null
                              : <div>
                                  <LiveResponse request={ request }
                                                response={ tryItOutResponse }
                                                getComponent={ getComponent }
                                                displayRequestDuration={ displayRequestDuration } />
                                  <h4>Responses</h4>
                                </div>

          }

          <table className="responses-table"> 
            <thead>
              <tr className="responses-header">
                <td className="col col_header response-col_status">Code</td>
                <td className="col col_header response-col_description">Description</td>
              </tr>
            </thead>
            <tbody>
              {
                responses.entrySeq().map( ([code, response]) => {

                  let className = tryItOutResponse && tryItOutResponse.get("status") == code ? "response_current" : ""
                  return (
                    <Response key={ code }
                              isDefault={defaultCode === code}
                              fn={fn}
                              className={ className }
                              code={ code }
                              taggedOps={taggedOps}
                              response={ response }
                              specSelectors={ specSelectors }
                              contentType={ producesValue }
                              getComponent={ getComponent }/>
                    )
                }).toArray()
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

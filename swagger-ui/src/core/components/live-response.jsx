import React from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"

const Headers = ( { headers } )=>{
  return (
    <div>
      <h5>Response headers</h5>
      <pre>{headers}</pre>
    </div>)
}
Headers.propTypes = {
  headers: PropTypes.array.isRequired
}

const Duration = ( { duration } ) => {
  return (
    <div>
      <h5>Request duration</h5>
      <pre>{duration} ms</pre>
    </div>
  )
}
Duration.propTypes = {
  duration: PropTypes.number.isRequired
}


export default class LiveResponse extends React.Component {
  static propTypes = {
    response: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    displayRequestDuration: PropTypes.bool.isRequired
  }

  handleFocus(e) {
    e.target.select()
    document.execCommand("copy")
  }

  removeStartingSlash(str){
    if (str.indexOf('/') == 0) {
      str = str.slice(1);
    }
    return str 
  }

  render() {
    const { request, response, getComponent, displayRequestDuration } = this.props

    const status = response.get("status")
    const url = response.get("url")
    const headers = response.get("headers").toJS()
    const notDocumented = response.get("notDocumented")
    const isError = response.get("error")
    var body = response.get("text")
    const duration = response.get("duration")
    const headersKeys = Object.keys(headers)
    const contentType = headers["content-type"]

    const Curl = getComponent("curl")
    const ResponseBody = getComponent("responseBody")
    const returnObject = headersKeys.map(key => {
      return <span className="headerline" key={key}> {key}: {headers[key]} </span>
    })
    const hasHeaders = returnObject.length !== 0

    if(!body) {
      body = response.get('name')  + ' ' + response.get('message')
    }

    var shareLink= window.location.origin + '/#' + this.removeStartingSlash(response.get('shareLink'))

    return (
      <div>
        <h4>Server response</h4>
        <table className="responses-table">
          <thead>
          <tr className="responses-header">
            <td className="col col_header response-col_status">Code</td>
            <td className="col col_header response-col_description">Details</td>
          </tr>
          </thead>
          <tbody>
            <tr className="response">
              <td className="col response-col_status">
                { status }
                {
                  notDocumented ? <div className="response-undocumented">
                                    <i style={{color: 'red'}}>Error</i>
                                  </div>
                                : null
                }
              </td>
              <td className="col response-col_description">

                {
                  body ? <ResponseBody content={ body }
                                       contentType={ contentType }
                                       url={ url }
                                       headers={ headers }
                                       getComponent={ getComponent }/>
                       : null
                }
                {
                  hasHeaders ? <Headers headers={ returnObject }/> : null
                }
                {
                  displayRequestDuration && duration ? <Duration duration={ duration } /> : null
                }
              </td>
            </tr>
          </tbody>
        </table>
        <h4 title="This link will share your request">Share this request</h4>
        <div className="copy-paste">
          <input type="text" className="shareLink" readOnly="true" value={shareLink} onFocus={this.handleFocus}/>
        </div>
      { request && <Curl request={ request }/> }
      </div>
    )
  }

  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    request: ImPropTypes.map,
    response: ImPropTypes.map
  }
}

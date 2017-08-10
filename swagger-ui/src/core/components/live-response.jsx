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
    getComponent: PropTypes.func.isRequired
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
    const { request, response, getComponent } = this.props

    var status = response.get("status")
    var statusText = response.get("statusText")
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

    var statusColor= 'green'
    if(status ==='err' || status >299) {
      statusColor='#ff6060' //red
    }else if(!status) {
       statusColor='#ff6060' //red
       statusText='unknown error'
       status='Err'
    }

    var shareLink= window.location.origin + '/#' + this.removeStartingSlash(response.get('shareLink'))

    return (
      <div>
        <h4>Server response </h4>

<div className="response-infobar"> 

<span className="response-infobar-status http-code" style={{backgroundColor: statusColor}}>
   { status } {statusText}
</span>

<span className="response-infobar-status"  style={{color: 'gray'}}>{response.get('duration')}ms</span>


       { /* notDocumented ? <div className="response-undocumented"> <i style={{color: 'red'}}>Error</i>  </div> : null */ }

</div>
        
        <div className="responses-table">
            <div className="response">
              <span className="col response-col_status">
             
            
              </span>
              <span className="col response-col_description">

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
              </span>
            </div>
        </div>
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

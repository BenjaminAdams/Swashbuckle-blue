import React from "react"
import PropTypes from "prop-types"
import curlify from "core/curlify"

export default class Curl extends React.Component {
  static propTypes = {
    request: PropTypes.object.isRequired
  }

  handleFocus(e) {
    e.target.select()
    document.execCommand("copy")
  }

  render() {
    let { request } = this.props
    let curl = curlify(request)

    return (
      <div>
        <h4>Curl</h4>
        <div className="copy-paste">
          <input type="text" className="shareLink" readOnly="true" value={curl} onFocus={this.handleFocus}/>
        </div>
      </div>
    )
  }

}

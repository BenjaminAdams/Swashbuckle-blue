import React from "react"
import PropTypes from "prop-types"
import {HashRouter, Link} from 'react-router-dom'

class ListChildren extends React.Component {
  static propTypes = {
    operations: PropTypes.array.isRequired
  }

  render() {
    const {operations} = this.props

    var ops = operations.map(function (op) {
      return <li key={op.routeId} className="sidebarChild" title={op.operation.operationId}>
        <Link to={"/" + op.routeId}>
          <div className={"methodBtn " + "btn-"+op.method}>{op.method}</div>
          <div className="childTxt">{op.operation.operationId}</div>
        </Link>
      </li>
    })

    return (
      <ul>{ops}</ul>
    )
  }
}

export default class BaseLayout extends React.Component {
  static propTypes = {
    taggedOps: PropTypes.object.isRequired
  }

  render() {
    let {taggedOps} = this.props

    // var baseUrlSplit = window.location.pathname.split('/swagger/ui/index') var
    // baseUrl = baseUrlSplit[0] + '/swagger/ui/index'
    var baseUrl = window.swashbuckleConfig.baseUrl

    var parentNodes = taggedOps
      .entrySeq()
      .map(function (tagObj, tag) {
        // let operations = tagObj.get("operations").toJS()
        let operations = tagObj[1]
          .get("operations")
          .toJS()
        return <li key={tagObj[0]} className="sidebarParent">{tagObj[0]}<ListChildren operations={operations}/></li>
      });

    return <HashRouter basename={baseUrl}>
      <ul id="sidebar">
        <li className="sidebarParent">
          <ul>
            <Link to="/">Home</Link>
          </ul>
        </li>
        {parentNodes}
      </ul>
    </HashRouter>
  }
}
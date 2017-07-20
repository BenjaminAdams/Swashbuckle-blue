import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom'

class ListChildren extends React.Component {
  static propTypes = {
    operations: PropTypes.array.isRequired,
    parentName: PropTypes.string.isRequired
  }

  render() {
    const { operations, parentName } = this.props

    var ops= operations.map(function(op) {
      var routeId =  parentName+"_"+ op.operation.operationId

      return <li key={routeId} className="sidebarChild" title={op.operation.operationId}>
               <Link to={"#" + routeId}>
                 <div className="methodBtn btn-get">{op.method}</div>
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
    let { taggedOps } = this.props

    var baseUrlSplit = window.location.pathname.split('/swagger/ui/index')
    var baseUrl = baseUrlSplit[0]

    var parentNodes = taggedOps.entrySeq().map(function(tagObj, tag) {
     // let operations = tagObj.get("operations").toJS()
      let operations = tagObj[1].get("operations").toJS()
      return <li className="sidebarParent">{tagObj[0]}<ListChildren operations={operations} parentName={tagObj[0]}/></li>
    });

    return  <HashRouter basename={baseUrl + '/swagger/ui/index'}>
        <ul id="sidebar">
          <li><ul><Link to="/">Home</Link></ul></li>
          {parentNodes}
        </ul>
      </HashRouter>
  }
}
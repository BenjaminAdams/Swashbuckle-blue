import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom'

class ListChildren extends React.Component {
  static propTypes = {
    operations: PropTypes.object.isRequired
  }

  render() {
    const { operations } = this.props

    var ops= operations.map(function(op) {
      return <li className="sidebarChild" title="/Documentation/ListErrorCodes" data-parentid="_Documentation" data-nickname="ListErrorCodes">
               <Link to={"/" + op.get('id')}>
                 <div className="methodBtn btn-get">{op.get('method')}</div>
                 <div className="childTxt">ListErrorCodes</div>
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

    var parentNodes = taggedOps.map(function(tagObj, tag) {
      let operations = tagObj.get("operations")
      return <li className="sidebarParent">{tag}<ListChildren operations={operations}/></li>
    });

    return  <HashRouter basename={baseUrl + '/swagger/ui/index'}>
        <ul id="sidebar">
          <li><ul><Link to="/">Home</Link></ul></li>
          {parentNodes}
        </ul>
      </HashRouter>
  }
}
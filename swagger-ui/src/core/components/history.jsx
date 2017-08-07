import React from "react"
import PropTypes from "prop-types"
import { fromJS } from "immutable"
import ImPropTypes from "react-immutable-proptypes"
import {getXhrHistory} from 'core/ls-actions'
import { atou } from 'core/utils'
import { HashRouter,Link } from 'react-router-dom'

export class History extends React.Component {
  render() {
    var hst=fromJS(getXhrHistory())
    var hstDivs= hst.map((x, index) => {
      var req= x.get('request')
      var lowerMethod = req.get('method').toLowerCase()

      var theLink=x.get("urlHash") + '/' + '?params=' + x.get('parameters')

      return <Link to={theLink} key={index} style={{'textDecoration':'none'}}>
      <div className={"opblock opblock-" + lowerMethod +" is-open"}>
        <div className={"opblock-summary opblock-summary-"+ lowerMethod}>
        <span className="opblock-summary-method">{req.get('method')}</span>
        <span className="opblock-summary-method opblock-info">{x.get('duration')}ms</span>
        <span className="opblock-summary-path">
        <span title={req.get('url')}>{x.get('routeId')}</span>
        </span>
        </div>
      </div>   
      </Link>     
      
     }).toArray()

    return (
      <HashRouter basename={window.swashbuckleConfig.baseUrl} hashType="noslash">
      <div className="wrapper">
        {hstDivs}      
      </div>
      </HashRouter>
    )
  }
}
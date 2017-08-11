import React from "react"
import PropTypes from "prop-types"
import { fromJS } from "immutable"
import ImPropTypes from "react-immutable-proptypes"
import {getXhrHistory, clearXhrHistory} from 'core/ls-actions'
import { atou, timeAgo, getHistoryLink } from 'core/utils'
import { HashRouter,Link } from 'react-router-dom'

export class History extends React.Component {
    static propTypes = {
      specSelectors: PropTypes.object.isRequired
    }

  componentDidMount() {
    timeAgo(this.el)
  }

  componentDidUpdate() {
    timeAgo(this.el)
  }

  clearHistory = () => {
    clearXhrHistory()
    this.forceUpdate()
  }

  shouldWeReloadAfter = (histItem, theLink) => {
    let { specSelectors } = this.props

    if(histItem.get('specVersion') !== specSelectors.version() ){
     
      window.location.href = '/#'+theLink
      location.reload();  //force reload the page because the versions are different
      return false  
    }
  }

  render() {
    var hst=fromJS(getXhrHistory())
    var hstDivs= hst.map((x, index) => {
      var req= x.get('request')
      var res= x.get('response')
      var lowerMethod = req.get('method').toLowerCase()

      var theLink= getHistoryLink(x)

      return <div><Link to={theLink} key={index} style={{'textDecoration':'none'}}  onClick={() => this.shouldWeReloadAfter(x,theLink)} >
      <div className={"opblock opblock-" + lowerMethod +" is-open"}>
        <div className={"opblock-summary opblock-summary-"+ lowerMethod} style={{position:'relative'}}>
        <span className="opblock-summary-method">{req.get('method')}</span>
        <span className="opblock-summary-method opblock-info">{x.get('duration')}ms</span>
        <span className="opblock-summary-method opblock-info" title={res.get('statusText')}>{res.get('status')}</span>
        <span className="opblock-summary-path">
          <span title={req.get('url')}>{x.get('routeId')}</span>
          <span className="timeago" title={x.get('dateAdded')}>{x.get('dateAdded')}</span>
        </span>
        </div>
      </div>  
      </Link></div>
      
     }).toArray()
 
     if(!hstDivs || hstDivs.length===0) hstDivs= <div className="nothingHere"><h4>Nothing here</h4>This page shows a history of all the requests you've made. Submit a request first</div>

    return (
      <HashRouter basename={window.swashbuckleConfig.baseUrl} hashType="noslash">
      <div className="wrapper history">
      <h1>History</h1>
      <div style={{position:'relative'}}><button className="clearHstBtn btn expand-methods" onClick={this.clearHistory}>Clear History</button></div>
      
        {hstDivs}      
      </div>
      </HashRouter>
    )
  }
}
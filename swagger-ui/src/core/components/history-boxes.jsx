import React from "react"
import PropTypes from "prop-types"
import { fromJS } from "immutable"
import ImPropTypes from "react-immutable-proptypes"
import { getXhrHistory, clearXhrHistory } from 'core/ls-actions'
import { atou, timeAgo, getHistoryLink } from 'core/utils'
import { HashRouter, Link } from 'react-router-dom'

export class HistoryBoxes extends React.PureComponent {
  static propTypes = {
    routeId: PropTypes.string.isRequired,
    response: PropTypes.object,
    taggedOps: PropTypes.object.isRequired,
    hst: PropTypes.object
  }

  static defaultProps = {
    hst: fromJS({})
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

  componentDidMount() {
    timeAgo(this.el)
  }

  componentDidUpdate() {
    timeAgo(this.el)
  }

  render() {
    let { routeId, hst } = this.props
    //var hst = fromJS(getXhrHistory())

console.log('rendering hst')

    var hstDivs = hst.filter(x => x.get('routeId') === routeId).map((x, index) => {
      var req = x.get('request')
      var res = x.get('response')
      var lowerMethod = req.get('method').toLowerCase()
      var theLink = getHistoryLink(x)
      var iconColor = 'green'

      if (!res.get('status') || res.get('status') > 299 || res.get('status') === 'err') {
        iconColor = 'red'
      }

      return <Link to={theLink} key={index} className={iconColor} >
      <div className='timeAgoPopup'>
        <span className="timeago" title={x.get('dateAdded')}>{x.get('dateAdded')}</span> | <span>{x.get('duration')}ms</span> | <span>{res.get('status')}</span>
      </div>
      </Link>

    }).toArray()

    if (!hstDivs || hstDivs.length === 0) return <div></div>

    return (
      <div>
        <h5 className="histBoxesTitle">History</h5>
        <HashRouter basename={window.swashbuckleConfig.baseUrl} hashType="noslash">
        <div className="detailsHistoryList">     
          {hstDivs}      
        </div>
        </HashRouter>
      </div>
    )
  }
}

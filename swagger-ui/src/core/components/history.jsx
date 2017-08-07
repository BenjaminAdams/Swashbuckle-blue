import React from "react"
import PropTypes from "prop-types"
import { fromJS } from "immutable"
import ImPropTypes from "react-immutable-proptypes"
import {getXhrHistory} from 'core/ls-actions'


export class History extends React.Component {




  render() {
    //let { host, basePath } = this.props
    var hst=fromJS(getXhrHistory())
    var hstDivs= hst.map((x, index) => { 
      console.log(x.toJS())
      var req= x.get('request')
      return <li key={index}>{req.get('url')}</li> 

     }).toArray()

    return (
      <div>
      <ul>{hstDivs}</ul>
      
      </div>
    )
  }
}


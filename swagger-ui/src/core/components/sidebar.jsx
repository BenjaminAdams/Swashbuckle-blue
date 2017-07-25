import React from "react"
import PropTypes from "prop-types"
import { HashRouter, Link } from 'react-router-dom'

class ListChildren extends React.Component {
  static propTypes = {
    operations: PropTypes.array.isRequired,
    version: PropTypes.string.isRequired
  }

  render() {
    const { operations, version } = this.props

    var ops = operations.map(function(op) {
      return <li key={op.routeId} className="sidebarChild" title={op.operation.operationId}>
        <Link to={op.urlHash}>
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

export default class Sidebar extends React.Component {
  static propTypes = {
    taggedOps: PropTypes.object.isRequired,
    showSidebar:  PropTypes.bool.isRequired,  //showSidebar is an input to propigate/share the click event of the close/hide button from the Operations.jsx file
    toggleSidebarFunc: PropTypes.func.isRequired,
    specActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    getConfigs: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
  }

constructor(props) {
    super(props);
     this.state = {showSidebar: props.showSidebar};
  }
  
  render() {
    let { taggedOps, showSidebar,toggleSidebarFunc, specActions, getComponent,specSelectors } = this.props

    const SidebarUrlLoader = getComponent("sidebarUrlLoader", true) 

    // var baseUrlSplit = window.location.pathname.split('/swagger/ui/index') var
    // baseUrl = baseUrlSplit[0] + '/swagger/ui/index'
    var baseUrl = window.swashbuckleConfig.baseUrl
    var version=specSelectors.getVersion()

    var parentNodes = taggedOps
      .entrySeq()
      .map(function(tagObj, tag) {
        let operations = tagObj[1]
          .get("operations")
          .toJS()
        return <li key={tagObj[0]} className="sidebarParent">{tagObj[0]}<ListChildren operations={operations} version={version} /></li>
      });

    return <HashRouter basename={baseUrl} hashType="noslash">
    <div>
      <div className="collapseExpandIcon" 
            title={this.props.showSidebar ? 'Collapse sidebar' : 'Show sidebar' } 
            onClick={toggleSidebarFunc}
            style={this.props.showSidebar ? { left: '250px' } : { left: '0px' }}>
                {this.props.showSidebar ? '<<' : '>>' } 
            
      </div>
      <ul id="sidebar" style={this.props.showSidebar ? {} : { display: 'none' }}>
        <li className="sidebarParent">{ SidebarUrlLoader ? <SidebarUrlLoader /> : null }</li>
        <li className="sidebarParent">
          <ul>
            <Link to="/">Intro</Link>
          </ul>
        </li>

        {parentNodes}
      </ul>
      </div>
    </HashRouter>
  }
}

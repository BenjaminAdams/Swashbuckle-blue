import React from "react"
import PropTypes from "prop-types"
import { HashRouter, Link } from 'react-router-dom'

class ListChildren extends React.PureComponent {
  static propTypes = {
    operations: PropTypes.array.isRequired,
    version: PropTypes.string.isRequired
  }

  gotoTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    const { operations, version } = this.props
    var self = this

    var ops = operations.map(function(op) {
      return <li key={op.routeId} className="sidebarChild" title={op.operationId}>
        <Link to={op.urlHash} onClick={self.gotoTop}>
          <div className={"methodBtn " + "btn-"+op.method}>{op.method}</div>
          <div className="childTxt">{op.operationId}</div>
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
    showSidebar: PropTypes.bool.isRequired, //showSidebar is an input to propigate/share the click event of the close/hide button from the Operations.jsx file
    toggleSidebarFunc: PropTypes.func.isRequired,
    getComponent: PropTypes.func.isRequired,
    getConfigs: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    taggedOps: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { 
      showSidebar: props.showSidebar,
      selectedIndex: 0
     };
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { specSelectors } = this.props

    if(this.props.showSidebar !== nextProps.showSidebar) return true

    if (this.props.taggedOps.count() != nextProps.taggedOps.count()) {      
      return true
    } else if(this.state.selectedIndex != nextState.selectedIndex){
      return true
    }    
    else {
      return false
    }
  }

  render() {
    let { showSidebar, toggleSidebarFunc, getComponent, specSelectors } = this.props

    let taggedOps = specSelectors.operationsExtraSlim()
    const SidebarUrlLoader = getComponent("sidebarUrlLoader", true)

    var baseUrl = window.swashbuckleConfig.baseUrl
    var version = specSelectors.getVersion()

    var parentNodes = taggedOps
      .entrySeq()
      .map(function(operations, tag) {

        return <li key={operations[0]} className="sidebarParent">{operations[0]}<ListChildren operations={operations[1].toJS()} version={version} /></li>
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
        <li className="sidebarParent">{ SidebarUrlLoader ? <SidebarUrlLoader selectedIndex={this.state.selectedIndex} /> : null }</li>
        <li className="sidebarParent">
          <ul>
            <li><Link to="/">Intro</Link></li>
            <li><Link to="/history">History</Link></li>
          </ul>
        </li>

        {parentNodes}
      </ul>
      </div>
    </HashRouter>
  }
}

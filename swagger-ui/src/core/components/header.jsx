import React from "react"
import PropTypes from "prop-types"
//import Logo from "../../img/logo_small.png"
//import AuthorizeBtn from "core/components/auth/authorize-btn.jsx"

export default class Header extends React.Component {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    taggedOps: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { specSelectors } = this.props

    if (this.props.taggedOps.count() != nextProps.taggedOps.count()) {
      return true
    } else {
      return false
    }
  }

  render() {
    let { getComponent, specSelectors, specActions, authActions, authSelectors, taggedOps } = this.props
    const Link = getComponent("Link")

    let AuthorizeBtn = getComponent("authorizeBtn", true)
    let schemes = specSelectors.schemes()
    var customLogo = window.swashbuckleConfig.customLogo || null
    let securityDefinitions = specSelectors.securityDefinitions()
    const Schemes = getComponent("schemes")

    let title = 'swagger'
    let info = specSelectors.info()
    if (info && info.get('title')) {
      title = info.get('title')
      document.title = title
    }

    return (
      <div className="topbar">
          <div className="topbar-wrapper">
            <Link href="#" title={title}> 
              {customLogo ? <img src={ customLogo } alt={title}/> : '' } 
              <span>{title}</span>             
            </Link>
            
            <div className="auth-wrapper">
            {schemes && schemes.size > 1 ? ( <Schemes schemes={schemes} specActions={specActions} /> ) : null}                                        
            {securityDefinitions ? (<AuthorizeBtn taggedOps={taggedOps} />) : null}
            </div>

          </div>
      </div>
    )
  }
}

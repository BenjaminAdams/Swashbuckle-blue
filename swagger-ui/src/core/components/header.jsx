import React from "react"
import PropTypes from "prop-types"
//import Logo from "../../img/logo_small.png"

export default class Header extends React.Component {
   static propTypes = {
     getComponent: PropTypes.func.isRequired,
     specSelectors: PropTypes.object.isRequired
   }

    render() {
    let { getComponent, specSelectors } = this.props
    const Link = getComponent("Link")
    let AuthorizeBtn = getComponent("authorizeBtn", true)
    var customLogo= window.swashbuckleConfig.customLogo || null
    let securityDefinitions = specSelectors.securityDefinitions()

    return (
      <div className="topbar">
        <div className="wrapper">
          <div className="topbar-wrapper">
            <Link href="#" title="Swagger UX"> 
              {customLogo ? <img src={ customLogo } alt="Swagger UX"/> : '' } 
              <span>swagger</span>             
            </Link>
            {securityDefinitions ? (<AuthorizeBtn />) : null}
          </div>
        </div>
      </div>
    )
  }
}


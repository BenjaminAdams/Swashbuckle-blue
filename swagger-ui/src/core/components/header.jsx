import React from "react"
import PropTypes from "prop-types"
//import Logo from "../../img/logo_small.png"

export default class Header extends React.Component {

    render() {
    let { getComponent } = this.props
    const Link = getComponent("Link")
    var customLogo= window.swashbuckleConfig.customLogo || null


    return (
      <div className="topbar">
        <div className="wrapper">
          <div className="topbar-wrapper">
            <Link href="#" title="Swagger UX"> 
              {customLogo ? <img src={ customLogo } alt="Swagger UX"/> : '' } 
              <span>swagger</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  getComponent: PropTypes.func.isRequired
}
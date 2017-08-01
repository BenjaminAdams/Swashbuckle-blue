import React from "react"
import PropTypes from "prop-types"

export default class AuthorizeBtn extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    authActions: PropTypes.object.isRequired
  }

  componentWillMount() {
    let {  authActions } = this.props
    var secPayload= localStorage.getItem('securitiesPayload')
    if(secPayload) {
      authActions.authorize(JSON.parse(secPayload))
    }
  }

  onClick =() => {
    let { authActions, authSelectors } = this.props
    let definitions = authSelectors.definitionsToAuthorize()

    authActions.showDefinitions(definitions)
  }

  render() {
    let { authSelectors, getComponent, authActions } = this.props
    //must be moved out of button component
    const AuthorizationPopup = getComponent("authorizationPopup", true)

    let showPopup = !!authSelectors.shownDefinitions()
    let isAuthorized = !!authSelectors.authorized().size


    return (
      <span>
        <button className={isAuthorized ? "btn authorize locked" : "btn authorize unlocked"} onClick={ this.onClick }>
          <span>Authorize</span>
          <svg width="20" height="20">
            <use xlinkHref={ isAuthorized ? "#locked" : "#unlocked" } />
          </svg>
        </button>
      { showPopup && <AuthorizationPopup /> }
      </span>
    )
  }


  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    authSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    authActions: PropTypes.object.isRequired,
  }
}

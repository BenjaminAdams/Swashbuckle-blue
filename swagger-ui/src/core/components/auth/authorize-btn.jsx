import React from "react"
import PropTypes from "prop-types"
//import AuthorizationPopup from "core/components/auth/authorization-popup.jsx"

export default class AuthorizeBtn extends React.Component {
  static propTypes = {
    className: PropTypes.string,
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

  componentWillMount() {
    let { authActions } = this.props
    var secPayload = localStorage.getItem('securitiesPayload')
    if (secPayload) {
      authActions.authorize(JSON.parse(secPayload))
    }
  }

  onClick = () => {
    let { authActions, authSelectors } = this.props
    let definitions = authSelectors.definitionsToAuthorize()

    authActions.showDefinitions(definitions)
  }

  render() {
    let { authSelectors, authActions, getComponent, taggedOps } = this.props
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
      { showPopup && <AuthorizationPopup taggedOps={taggedOps} /> }
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

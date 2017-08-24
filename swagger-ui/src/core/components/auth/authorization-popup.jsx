import React from "react"
import PropTypes from "prop-types"

export default class AuthorizationPopup extends React.Component {
   static propTypes = {
    fn: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    authSelectors: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    errSelectors: PropTypes.object.isRequired,
    authActions: PropTypes.object.isRequired,
    taggedOps: PropTypes.object.isRequired
  }
 
  close =() => {
    let { authActions } = this.props

    authActions.showDefinitions(false)
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
    let { authSelectors, authActions, getComponent, errSelectors, specSelectors, fn: { AST }, taggedOps } = this.props
    let definitions = authSelectors.shownDefinitions()
    const Auths = getComponent("auths")

    return (
      <div className="dialog-ux">
        <div className="backdrop-ux"></div>
        <div className="modal-ux">
          <div className="modal-dialog-ux">
            <div className="modal-ux-inner">
              <div className="modal-ux-header">
                <h3>Available authorizations</h3>
                <button type="button" className="close-modal" onClick={ this.close }>
                  <svg width="20" height="20">
                    <use xlinkHref="#close" />
                  </svg>
                </button>
              </div>
              <div className="modal-ux-content">

                {
                  definitions.valueSeq().map(( definition, key ) => {
                    return <Auths key={ key }
                                  AST={AST}
                                  taggedOps={taggedOps}
                                  definitions={ definition }
                                  getComponent={ getComponent }
                                  errSelectors={ errSelectors }
                                  closeFunction={this.close}
                                  authSelectors={ authSelectors }
                                  authActions={ authActions }
                                  specSelectors={ specSelectors }/>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

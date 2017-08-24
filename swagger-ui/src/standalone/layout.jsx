import React from "react"
import PropTypes from "prop-types" 


export default class StandaloneLayout extends React.Component {
  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired
  }

  render() {
    let { getComponent, specSelectors } = this.props

    let taggedOps = specSelectors.operationsExtraSlim()

    let Container = getComponent("Container")
    let Row = getComponent("Row")
    let Col = getComponent("Col")


    const BaseLayout = getComponent("BaseLayout", true)
    const OnlineValidatorBadge = getComponent("onlineValidatorBadge", true)

    const loadingStatus = specSelectors.loadingStatus()

    if(loadingStatus === "failed") {
       localStorage.clear('selectedDiscUrl') //user will be stuck in a failed loading state if we dont clear this
    }

    return (
      <Container className='swagger-ui'>
        { loadingStatus === "loading" &&
          <div className="info">
            <h4 className="mainLoading">Loading...</h4>
          </div>
        }
        { loadingStatus === "failed" &&
          <div className="info">
            <h4 className="mainLoading">Failed to load spec.</h4>
          </div>
        }
        { loadingStatus === "failedConfig" &&
          <div className="info" style={{ maxWidth: "880px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <h4 className="mainLoading">Failed to load config.</h4>
          </div>
        }
        { !loadingStatus || loadingStatus === "success" && <BaseLayout taggedOps={taggedOps} /> }
        <Row>
          <Col>
            <OnlineValidatorBadge />
          </Col>
        </Row>
      </Container>
    )
  }

}

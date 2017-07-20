import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom'

export default class BaseLayout extends React.Component {
    static propTypes = {
        errSelectors: PropTypes.object.isRequired,
        errActions: PropTypes.object.isRequired,
        specActions: PropTypes.object.isRequired,
        specSelectors: PropTypes.object.isRequired,
        layoutSelectors: PropTypes.object.isRequired,
        layoutActions: PropTypes.object.isRequired,
        getComponent: PropTypes.func.isRequired
    }

    onFilterChange = (e) => {
        let {target: {value}} = e
        this.props.layoutActions.updateFilter(value)
    }

    render() {
        let { specSelectors, specActions, getComponent, layoutSelectors } = this.props

        let taggedOps = specSelectors.taggedOperations()

        let info = specSelectors.info()
        let url = specSelectors.url()
        let basePath = specSelectors.basePath()
        let host = specSelectors.host()
        let securityDefinitions = specSelectors.securityDefinitions()
        let externalDocs = specSelectors.externalDocs()
        let schemes = specSelectors.schemes()

        let Info = getComponent("info")
        let Operations = getComponent("operations", true)
        let Operation = getComponent("operation", true)
        let Sidebar = getComponent("sidebar", true)
        let Models = getComponent("Models", true)
        let AuthorizeBtn = getComponent("authorizeBtn", true)
        let Row = getComponent("Row")
        let Col = getComponent("Col")
        let Errors = getComponent("errors", true)

        let isLoading = specSelectors.loadingStatus() === "loading"
        let isFailed = specSelectors.loadingStatus() === "failed"
        let filter = layoutSelectors.currentFilter()

        let inputStyle = {}
        if (isFailed) inputStyle.color = "red"
        if (isLoading) inputStyle.color = "#aaa"

        const Schemes = getComponent("schemes")

        const isSpecEmpty = !specSelectors.specStr()

        if (isSpecEmpty) {
            return <h4>No spec provided.</h4>
        }

        return (
            <div className='swagger-ui'>

                <Sidebar taggedOps={taggedOps} />

                <div className="collapseExpandIcon" title="Collapse sidebar">&lt;&lt;</div>
                <div id="swagger-ui-container">
                    <Errors />
                    <Row className="information-container">
                        <Col mobile={12}>
                            {info.count() ? (
                                <Info info={info} url={url} host={host} basePath={basePath} externalDocs={externalDocs} getComponent={getComponent} />
                            ) : null}
                        </Col>
                    </Row>
                    {schemes && schemes.size || securityDefinitions ? (
                        <div className="scheme-container">
                            <Col className="schemes wrapper" mobile={12}>
                                {schemes && schemes.size ? (
                                    <Schemes schemes={schemes} specActions={specActions} />
                                ) : null}

                                {securityDefinitions ? (
                                    <AuthorizeBtn />
                                ) : null}
                            </Col>
                        </div>
                    ) : null}

                    {
                        filter === null || filter === false ? null :
                            <div className="filter-container">
                                <Col className="filter wrapper" mobile={12}>
                                    <input className="operation-filter-input" placeholder="Filter by tag" type="text" onChange={this.onFilterChange} value={filter === true || filter === "true" ? "" : filter} disabled={isLoading} style={inputStyle} />
                                </Col>
                            </div>
                    }

                    <Row>
                        <Col mobile={12} desktop={12} >
                            <Operations />
                        </Col>
                    </Row>
                    <Row>
                        <Col mobile={12} desktop={12} >
                            <Models />
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }
}
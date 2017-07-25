import React from "react"
import PropTypes from "prop-types"
import { browserHistory  } from 'react-router-dom'

export default class Topbar extends React.Component {

  static propTypes = {
    layoutActions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.state = { url: props.specSelectors.url(), selectedIndex: 0 }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ url: nextProps.specSelectors.url() })
  }

  onUrlChange =(e)=> {
    let {target: {value}} = e
    this.setState({url: value})
  }

  loadSpec = (url) => {
    this.props.specActions.updateUrl(url)
    this.props.specActions.download(url)
  }

  onUrlSelect =(e)=> {
    let url = e.target.value || e.target.href
    this.loadSpec(url)
    this.setSelectedUrl(url)
    localStorage.setItem('selectedDiscUrl',url);  //we will use this on page load at the root url when no route is selected
    e.preventDefault()
    try {   
      //sending the user back to the baseUrl, this will prevent a 404 method not found from showing up when we load a different version
       history.pushState('', document.title, window.location.pathname);
      }
    catch(e) {}
  }

  downloadUrl = (e) => {
    this.loadSpec(this.state.url)
    e.preventDefault()
  }

  setSelectedUrl = (selectedUrl) => {
    const configs = this.props.getConfigs()
    const urls = configs.urls || []

    if(urls && urls.length) {
      if(selectedUrl)
      {
        urls.forEach((spec, i) => {
          if(spec.url === selectedUrl)
            {
              this.setState({selectedIndex: i})
            }
        })
      }
    }
  }

  componentWillMount() {
    const configs = this.props.getConfigs()
    const urls = configs.urls || []

    if(urls && urls.length) {
      let primaryName = configs["urls.primaryName"]
      if(primaryName)
      {
        urls.forEach((spec, i) => {
          if(spec.name === primaryName)
            {
              this.setState({selectedIndex: i})
            }
        })
      }
    }
  }

  componentDidMount() {
    const urls = this.props.getConfigs().urls || []

    if(urls && urls.length) {
      this.loadSpec(urls[this.state.selectedIndex].url)
    }
  }

  onFilterChange =(e) => {
    let {target: {value}} = e
    this.props.layoutActions.updateFilter(value)
  }

  render() {
    let { getComponent, specSelectors, getConfigs } = this.props
    const Button = getComponent("Button")
    const Link = getComponent("Link")

    let isLoading = specSelectors.loadingStatus() === "loading"
    let isFailed = specSelectors.loadingStatus() === "failed"

    let inputStyle = {}
    if(isFailed) inputStyle.color = "red"
    if(isLoading) inputStyle.color = "#aaa"

    const urls = window.swashbuckleConfig.discoveryUrlObj
    let control = []
    let formOnSubmit = null

    if(window.swashbuckleConfig.discoveryUrlObj.length< 2 ) return '';
   var selectedDiscUrl= specSelectors.getUrlFromVersion()

    if(urls) {
      let rows = []
      urls.forEach((link, i) => {
        var url=window.swashbuckleConfig.rootUrl +'/'+ link.url;
        rows.push(<option key={i} value={url}>{link.title}</option>)
      })

      control.push(
        <label key={this.state.selectedIndex} className="select-label" htmlFor="select">
          <select id="select" disabled={isLoading} onChange={ this.onUrlSelect } value={selectedDiscUrl || ''} >
            {rows}
          </select>
        </label>
      )
    }

    return (
          <div className="todo">
            <form className="download-url-wrapper" onSubmit={formOnSubmit}>
              {control}
            </form>
          </div>
    )
  }
}

Topbar.propTypes = {
  specSelectors: PropTypes.object.isRequired,
  specActions: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired,
  getConfigs: PropTypes.func.isRequired
}

import React from "react"
import PropTypes from "prop-types"

//import "./topbar.less"


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
    localStorage.setItem('selectedDiscUrl',url);     
    window.swashbuckleConfig.selectedDiscUrl = url
    e.preventDefault()
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

    var selectedDiscUrl= localStorage.getItem('selectedDiscUrl');
    if(selectedDiscUrl) {
      window.swashbuckleConfig.selectedDiscUrl = selectedDiscUrl
    }else {
      selectedDiscUrl= ''
    }

    if(urls) {
      let rows = []
      urls.forEach((link, i) => {
        var url=window.swashbuckleConfig.rootUrl +'/'+ link.url;
        rows.push(<option key={i} value={url}>{link.title}</option>)
      })

      control.push(
        <label key={this.state.selectedIndex} className="select-label" htmlFor="select">
          <select id="select" disabled={isLoading} onChange={ this.onUrlSelect } value={selectedDiscUrl} >
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
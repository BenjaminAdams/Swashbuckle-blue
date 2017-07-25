import deepExtend from "deep-extend"
import System from "core/system"
import win from "core/window"
import ApisPreset from "core/presets/apis"
import * as AllPlugins from "core/plugins/all"
import { parseSeach, filterConfigs } from "core/utils"
import { HashRouter, Route, Link } from 'react-router-dom'

const CONFIGS = [
  "url",
  "urls",
  "urls.primaryName",
  "spec",
  "validatorUrl",
  "onComplete",
  "onFailure",
  "authorizations",
  "docExpansion",
  "tagsSorter",
  "maxDisplayedTags",
  "filter",
  "operationsSorter",
  "supportedSubmitMethods",
  "dom_id",
  "defaultModelRendering",
  "oauth2RedirectUrl",
  "showRequestHeaders",
  "custom",
  "modelPropertyMacro",
  "parameterMacro",
  "displayOperationId",
  "displayRequestDuration",
  "deepLinking",
 ]

// eslint-disable-next-line no-undef
const { GIT_DIRTY, GIT_COMMIT, PACKAGE_VERSION, HOSTNAME, BUILD_TIME } = buildInfo

module.exports = function SwaggerUI(opts) {

  win.versions = win.versions || {}
  win.versions.swaggerUi = {
    version: PACKAGE_VERSION,
    gitRevision: GIT_COMMIT,
    gitDirty: GIT_DIRTY,
    buildTimestamp: BUILD_TIME,
    machine: HOSTNAME
  }

  const defaults = {
    // Some general settings, that we floated to the top
    dom_id: null,
    spec: {},
    url: "",
    urls: null,
    layout: "BaseLayout",
    docExpansion: "list",
    maxDisplayedTags: null,
    filter: null,
    validatorUrl: "https://online.swagger.io/validator",
    configs: {},
    custom: {},
    displayOperationId: false,
    displayRequestDuration: false,
    deepLinking: false,

    // Initial set of plugins ( TODO rename this, or refactor - we don't need presets _and_ plugins. Its just there for performance.
    // Instead, we can compile the first plugin ( it can be a collection of plugins ), then batch the rest.
    presets: [
      ApisPreset
    ],

    // Plugins; ( loaded after presets )
    plugins: [
    ],

    // Inline Plugin
    fn: {},
    components: {},
    state: {},

    // Override some core configs... at your own risk
    store: {},
  }

  let queryConfig = parseSeach()

  const constructorConfig = deepExtend({}, defaults, opts, queryConfig)

  if (window.swashbuckleConfig.discoveryUrlObj != null && window.swashbuckleConfig.discoveryUrlObj.length > 1) {
    //if the user has indicated they wanted to view a specific version
    //this can come from 2 places
    //1.  The url hash
    //2.  Localstorage - this is set by the left sidebar nav select box
    constructorConfig.url = checkIfAVersionWasPreviouslySelected(constructorConfig.url)
  }

  const storeConfigs = deepExtend({}, constructorConfig.store, {
    system: {
      configs: constructorConfig.configs
    },
    plugins: constructorConfig.presets,
    state: {
      layout: {
        layout: constructorConfig.layout,
        filter: constructorConfig.filter
      },
      spec: {
        spec: "",
        url: constructorConfig.url
      }
    }
  })

  let inlinePlugin = () => {
    return {
      fn: constructorConfig.fn,
      components: constructorConfig.components,
      state: constructorConfig.state,
    }
  }

  var store = new System(storeConfigs)
  store.register([constructorConfig.plugins, inlinePlugin])

  var system = store.getSystem()

  system.initOAuth = system.authActions.configureAuth

  const downloadSpec = (fetchedConfig) => {
    if (typeof constructorConfig !== "object") {
      return system
    }

    let localConfig = system.specSelectors.getLocalConfig ? system.specSelectors.getLocalConfig() : {}
    let mergedConfig = deepExtend({}, localConfig, constructorConfig, fetchedConfig || {}, queryConfig)
    store.setConfigs(filterConfigs(mergedConfig, CONFIGS))

    if (fetchedConfig !== null) {
      if (!queryConfig.url && typeof mergedConfig.spec === "object" && Object.keys(mergedConfig.spec).length) {
        system.specActions.updateUrl("")
        system.specActions.updateLoadingStatus("success")
        system.specActions.updateSpec(JSON.stringify(mergedConfig.spec))
      } else if (system.specActions.download && mergedConfig.url) {
        system.specActions.updateUrl(mergedConfig.url)
        system.specActions.download(mergedConfig.url)
      }
    }

    if (mergedConfig.dom_id) {
      system.render(mergedConfig.dom_id, "App")
    } else {
      console.error("Skipped rendering: no `dom_id` was specified")
    }

    return system
  }

  let configUrl = queryConfig.config || constructorConfig.configUrl

  if (!configUrl || !system.specActions.getConfigByUrl || system.specActions.getConfigByUrl && !system.specActions.getConfigByUrl(configUrl, downloadSpec)) {
    return downloadSpec()
  }

  return system
}

function checkIfAVersionWasPreviouslySelected(defaultUrl) {
  //get the version from the url if it exists
  var versionFromUrl = getVersionFromUrl()
  if (versionFromUrl == null) {
    //if the user has no version selected in the URL then we should try and load their prefered version from localStorage
    return getDocUrlFromLocalstorage(defaultUrl)
  }

  //find the url for that version from the window.swashbuckleConfig.discoveryUrlObj obj
  var newDocsUrl = window.swashbuckleConfig.discoveryUrlObj.find(x => x.version === versionFromUrl)
  //replace url variable with that url
  if (newDocsUrl) {
    newDocsUrl.selectedAtPageLoad = true
    return window.swashbuckleConfig.rootUrl + '/' + newDocsUrl.url
  }

  return defaultUrl
}

function getVersionFromUrl() {
  try {
    if (!window.location.hash) return null;
    var url = window.location.hash.replace('#', '')
    if (!url) return null;
    return url.split('/')[0]
  } catch (e) {
    return null
  }
}

function getDocUrlFromLocalstorage(defaultUrl) {
  var selectedDiscUrl = localStorage.getItem('selectedDiscUrl')
  if (selectedDiscUrl) return selectedDiscUrl
  return defaultUrl
}

// Add presets
module.exports.presets = {
  apis: ApisPreset,
}

// All Plugins
module.exports.plugins = AllPlugins

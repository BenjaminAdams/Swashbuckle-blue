import StandaloneLayout from "./layout"
import "../style/main.scss"
import ConfigsPlugin from "plugins/configs"

// the Standalone preset

let preset = [
  ConfigsPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  }
]

module.exports = preset

import React, { Component } from "react"
import PropTypes from "prop-types"
import win from "core/window"
import IM from 'immutable'
import ParamBodyDocs from "core/components/param-body-docs.jsx"

export default class ParameterRow extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    param: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    fn: PropTypes.object.isRequired,
    isExecute: PropTypes.bool,
    onChangeConsumes: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    pathMethod: PropTypes.array.isRequired,
    taggedOps: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
    let { specSelectors, pathMethod, param } = props

    this.state = {
      displayDocsForName: null
    }

    let defaultValue = param.get("default")
    let parameter = specSelectors.getParameter(pathMethod, param.get("name"))
    let value = parameter ? parameter.get("value") : ""
    let exampleValue=param.get('example')
    if ( defaultValue !== undefined && value === undefined ) {
      this.onChangeWrapper(defaultValue)
    }else if(exampleValue) {
      this.onChangeWrapper(exampleValue)
    }
  }

  componentWillReceiveProps(props) {
    let { specSelectors, pathMethod, param } = props
    let example = param.get("example")
    let defaultValue = param.get("default")
    let parameter = specSelectors.getParameter(pathMethod, param.get("name"))
    let paramValue = parameter ? parameter.get("value") : undefined
    let enumValue = parameter ? parameter.get("enum") : undefined
    let value

    if ( paramValue !== undefined ) {
      value = paramValue
    } else if ( example !== undefined ) {
      value = example
    } else if ( defaultValue !== undefined) {
      value = defaultValue
    } else if ( param.get("required") && enumValue && enumValue.size ) {
      value = enumValue.first()
    }

    if ( value !== undefined ) {
      this.onChangeWrapper(value)
    }
  }

  onChangeWrapper = (value) => {
    let { onChange, param } = this.props
    return onChange(param, value)
  }

  changeShowDocsFor = (name) => {
    let {param} = this.props
    this.setState({ displayDocsForName: name })
  }

  render() {
    let {param, onChange, getComponent, isExecute, fn, onChangeConsumes, specSelectors, pathMethod, taggedOps} = this.props

    //const onChangeWrapper = (value) => onChange(param, value)
    const JsonSchemaForm = getComponent("JsonSchemaForm")
    const ParamBody = getComponent("ParamBody")
    let inType = param.get("in")
    const ModelExample = getComponent("modelExample")
    const Markdown = getComponent("Markdown")
    let schema = param.get("schema")
    let isFormData = inType === "formData"
    let isFormDataSupported = "FormData" in win
    let required = param.get("required")
    let requiredConditionally = param.get("requiredConditionally")
    let itemType = param.getIn(["items", "type"])
    let parameter = specSelectors.getParameter(pathMethod, param.get("name"))
    var valueFromHistory= param.get('value') 
    let value = parameter ? parameter.get("value") : ""

    if(valueFromHistory) {
      value = valueFromHistory
      parameter=parameter.set('value',value)
    }

    if(typeof(value) ==='undefined' && parameter) {
      value=parameter.get('example')
    }

    let schemaDesc= param.get("description")  //gets the comment from the param list in the class declaration

    let bodyParam = inType !== "body" ? null
      : <ParamBody getComponent={getComponent}
                   fn={fn}
                   param={param}
                   taggedOps={taggedOps}
                   consumes={ specSelectors.operationConsumes(pathMethod) }
                   consumesValue={ specSelectors.contentTypeValues(pathMethod).get("requestContentType") }
                   onChange={onChange}
                   onChangeConsumes={onChangeConsumes}
                   changeShowDocsFor={this.changeShowDocsFor}
                   isExecute={ isExecute }
                   specSelectors={ specSelectors }
                   pathMethod={ pathMethod }
                   value={value}
      />

    if(bodyParam && schema && typeof(schema.get) ==='function' && schema.get("description")) {
      //adds a comment from the top of the class
      if(!schemaDesc) schemaDesc= ''
      schemaDesc = ' <p>' + schema.get("description") + '</p>' + schemaDesc
    }

    return (
      <div style={{'display': parameter.get('ignore') ===true ? 'none' : 'block' }}>
        <span className="col parameters-col_name">
          <div className="parameter__name">
            { param.get("name") }
            { !required ? null : <div className="required">required *</div> }
            { !requiredConditionally ? null : <div className="required" title="This field is only sometimes required">conditionally required *</div> }
          </div>
          <div className="parameter__type">{ param.get("type") } { itemType && `[${itemType}]` }</div>
          <div className="parameter__in">({ param.get("in") })</div>
          { this.state.displayDocsForName ? 
              <ParamBodyDocs 
                param={param} 
                selectedName={this.state.displayDocsForName} 
                taggedOps={taggedOps} 
                getComponent={getComponent} /> : null }
        </span>

        <span className="col parameters-col_description">
          <Markdown source={ schemaDesc }/>
          {(isFormData && !isFormDataSupported) && <div>Error: your browser does not support FormData</div>}

          { bodyParam || !isExecute ? null
            : <JsonSchemaForm fn={fn}
                              getComponent={getComponent}
                              value={ value }
                              required={ required }
                              description={param.get("description") ? `${param.get("name")} - ${param.get("description")}` : `${param.get("name")}`}
                              onChange={ this.onChangeWrapper }
                              schema={ param }/>
          }

          {
            bodyParam && schema ? <ModelExample getComponent={ getComponent }
                                                isExecute={ isExecute }
                                                specSelectors={ specSelectors }
                                                schema={ schema }
                                                taggedOps={taggedOps}
                                                example={ bodyParam }/>
              : null
          }
        </span>
      </div>
    )
  }
}

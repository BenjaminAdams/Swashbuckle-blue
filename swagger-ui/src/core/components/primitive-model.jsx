import React, { Component } from "react"
import PropTypes from "prop-types"

const propStyle = { color: "#999", fontStyle: "italic" }

export default class Primitive extends Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    required: PropTypes.bool,
    requiredConditionally: PropTypes.bool,
  }

  render(){
    let { schema, getComponent, required, requiredConditionally } = this.props

    if(!schema || !schema.get) {
      // don't render if schema isn't correctly formed
      return <div></div>
    }

    let type = schema.get("type")
    let format = schema.get("format")
    let xml = schema.get("xml")
    let enumArray = schema.get("enum")
    let description = schema.get("description")
    let properties = schema.filter( ( v, key) => ["enum", "type", "format", "description", "$$ref"].indexOf(key) === -1 )
    let style = required ? { fontWeight: "bold" } : {}
    const Markdown = getComponent("Markdown")
    const EnumModel = getComponent("EnumModel")

    if(type==='string' && enumArray) {
      type= 'enum/string'
    }

    return <span className="prop">
      <span className="prop-type" style={ style }>{ type }</span>{ /* required && <span style={{ color: "red" }}>required *</span> */}
      { format && <span className="prop-format">(${format})</span>}

      {
        !description ? null :<Markdown source={ description } />
      }

        { required && !requiredConditionally  && <p className="required"> * required</p> }  
        { !required && requiredConditionally && <p className="required" title="This field is only sometimes required" >* conditionally required </p>}  
          

      {
        properties.size ? properties.entrySeq().map( ( [ key, v ] ) => 
        <p key={`${key}-${v}`} style={ propStyle }>
         { key }: { String(v) }</p>)
          : null
      }

             

      {
        xml && xml.size ? (<span><br /><span style={ propStyle }>xml:</span>
          {
            xml.entrySeq().map( ( [ key, v ] ) => <span key={`${key}-${v}`} style={ propStyle }><br/>&nbsp;&nbsp;&nbsp;{key}: { String(v) }</span>).toArray()
          }
        </span>): null
      }
      {
        enumArray && <EnumModel value={ enumArray } getComponent={ getComponent } />
      }
    </span>
  }
}
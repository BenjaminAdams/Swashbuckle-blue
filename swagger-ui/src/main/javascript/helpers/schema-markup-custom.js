'use strict';

var Helpers = {}

Helpers.__bind = function (fn, me) {
    return function () {
        return fn.apply(me, arguments);
    };
};

var log = Helpers.log = function () {
    // Only log if available and we're not testing
    if (console && process.env.NODE_ENV !== 'test') {
        console.log(Array.prototype.slice.call(arguments)[0]);
    }
};

Helpers.fail = function (message) {
    log(message);
};

var optionHtml = Helpers.optionHtml = function (label, value) {
    return '<tr><td class="optionName">' + label + ':</td><td>' + value + '</td></tr>';
};

var resolveSchema = Helpers.resolveSchema = function (schema) {
    if (window.$.isPlainObject(schema.schema)) {
        schema = resolveSchema(schema.schema);
    }

    if (schema.type === 'array' && schema.items && schema.items.$ref) {
        schema.$ref = schema.items.$ref
    }

    return schema;
};

var simpleRef = Helpers.simpleRef = function (name) {
    if (typeof name === 'undefined') {
        return null;
    }

    if (name.indexOf('#/definitions/') === 0) {
        return name.substring('#/definitions/'.length);
    } else {
        return name;
    }
}

function optionHtml(label, value) {
    return '<tr><td class="optionName">' + label + ':</td><td>' + value + '</td></tr>';
}

function typeFromJsonSchema(type, format) {
    var str;

    if (type === 'integer' && format === 'int32') {
        str = 'integer';
    } else if (type === 'integer' && format === 'int64') {
        str = 'long';
    } else if (type === 'integer' && typeof format === 'undefined') {
        str = 'long';
    } else if (type === 'string' && format === 'date-time') {
        str = 'date-time';
    } else if (type === 'string' && format === 'date') {
        str = 'date';
    } else if (type === 'number' && format === 'float') {
        str = 'float';
    } else if (type === 'number' && format === 'double') {
        str = 'double';
    } else if (type === 'number' && typeof format === 'undefined') {
        str = 'double';
    } else if (type === 'boolean') {
        str = 'boolean';
    } else if (type === 'string') {
        str = 'string';
    }

    return str;
}

function getStringSignature(obj, baseComponent) {
    var str = '';

    if (typeof obj.$ref !== 'undefined') {
        str += Helpers.simpleRef(obj.$ref);
    } else if (typeof obj.type === 'undefined') {
        str += 'object';
    } else if (obj.type === 'array') {
        if (baseComponent) {
            str += getStringSignature((obj.items || obj.$ref || {}));
        } else {
            str += 'Array[';
            str += getStringSignature((obj.items || obj.$ref || {}));
            str += ']';
        }
    } else if (obj.type === 'integer' && obj.format === 'int32') {
        str += 'integer';
    } else if (obj.type === 'integer' && obj.format === 'int64') {
        str += 'long';
    } else if (obj.type === 'integer' && typeof obj.format === 'undefined') {
        str += 'long';
    } else if (obj.type === 'string' && obj.format === 'date-time') {
        str += 'date-time';
    } else if (obj.type === 'string' && obj.format === 'date') {
        str += 'date';
    } else if (obj.type === 'string' && typeof obj.format === 'undefined') {
        str += 'string';
    } else if (obj.type === 'number' && obj.format === 'float') {
        str += 'float';
    } else if (obj.type === 'number' && obj.format === 'double') {
        str += 'double';
    } else if (obj.type === 'number' && typeof obj.format === 'undefined') {
        str += 'double';
    } else if (obj.type === 'boolean') {
        str += 'boolean';
    } else if (obj.$ref) {
        str += Helpers.simpleRef(obj.$ref);
    } else {
        str += obj.type;
    }

    return str;
}

function schemaToJSON(schema, models, modelsToIgnore, modelPropertyMacro) {
    // Resolve the schema (Handle nested schemas)
    schema = Helpers.resolveSchema(schema);

    if (typeof modelPropertyMacro !== 'function') {
        modelPropertyMacro = function (prop) {
            return (prop || {}).default;
        }
    }

    modelsToIgnore = modelsToIgnore || {};

    var type = schema.type || 'object';
    var format = schema.format;
    var model;
    var output;

    if (schema.example) {
        output = schema.example;
    } else if (_.isUndefined(schema.items) && _.isArray(schema.enum)) {
        output = schema.enum[0];
    }

    if (_.isUndefined(output)) {
        if (schema.$ref) {
            model = models[Helpers.simpleRef(schema.$ref)];

            if (!_.isUndefined(model)) {
                if (_.isUndefined(modelsToIgnore[model.name])) {
                    modelsToIgnore[model.name] = model;
                    output = schemaToJSON(model.definition, models, modelsToIgnore, modelPropertyMacro);
                    delete modelsToIgnore[model.name];
                } else {
                    if (model.type === 'array') {
                        output = [];
                    } else {
                        output = {};
                    }
                }
            }
        } else if (!_.isUndefined(schema.default)) {
            output = schema.default;
        } else if (type === 'string') {
            if (format === 'date-time') {
                output = new Date().toISOString();
            } else if (format === 'date') {
                output = new Date().toISOString().split('T')[0];
            } else {
                output = 'string';
            }
        } else if (type === 'integer') {
            output = 0;
        } else if (type === 'number') {
            output = 0.0;
        } else if (type === 'boolean') {
            output = true;
        } else if (type === 'object') {
            output = {};

            _.forEach(schema.properties, function (property, name) {
                var cProperty = _.cloneDeep(property);
                //var cProperty = $.extend(true, {}, property);

                // Allow macro to set the default value
                cProperty.default = modelPropertyMacro(property);

                output[name] = schemaToJSON(cProperty, models, modelsToIgnore, modelPropertyMacro);
            });
        } else if (type === 'array') {
            output = [];

            if (_.isArray(schema.items)) {
                _.forEach(schema.items, function (item) {
                    output.push(schemaToJSON(item, models, modelsToIgnore, modelPropertyMacro));
                });
            } else if (_.isPlainObject(schema.items)) {
                output.push(schemaToJSON(schema.items, models, modelsToIgnore, modelPropertyMacro));
            } else if (_.isUndefined(schema.items)) {
                output.push({});
            } else {
                Helpers.log('Array type\'s \'items\' property is not an array or an object, cannot process');
            }
        }
    }

    return output;
}

function getSchemaFromRef(schema, models) {
    if (schema.type === 'array' && schema.items && schema.items.$ref !== null) {
        console.log('its an arary', schema)

        // schema.$ref = schema.items.$ref
        // schema.type = 'object'
    }

    if (typeof schema.$ref === 'string') {
        var name = Helpers.simpleRef(schema.$ref);
        schema = models[name];
        if (typeof schema === 'undefined') {
            return name + ' is not defined!';
        }
    }

    return schema;
}

window.getMockSignatureFromParamAsTable = function (schema, models) {
    if (!schema) return ''
    var name = Helpers.simpleRef(schema.$ref);
    schema = getSchemaFromRef(schema, models)
    return schemaToHTMLAsTable(name, schema, models, null);
}

window.getMockSignatureAsTable = function (value) {
    return schemaToHTMLAsTable(value.name, value.definition, value.models, value.modelPropertyMacro);
}

function schemaToHTMLAsTable(name, schema, models, modelPropertyMacro) {
    // Allow for ignoring the 'name' argument.... shifting the rest
    if (_.isObject(arguments[0])) {
        name = void 0;
        schema = arguments[0];
        models = arguments[1];
        modelPropertyMacro = arguments[2];
    }

    models = models || {};

    if (!schema) return ''

    // Resolve the schema (Handle nested schemas)
    schema = Helpers.resolveSchema(schema);

    // Return for empty object
    if (_.isEmpty(schema)) {
        //return  'Empty' ;
        return ''
    }

    if (schema.type === 'array' && schema.items && schema.items.$ref !== null) {
        //console.log('found an array=', schema)
        //  schema.$ref = schema.items.$ref
        // schema.type = 'object'
    }

    // Dereference $ref from 'models'
    if (typeof schema.$ref === 'string') {
        name = Helpers.simpleRef(schema.$ref);
        schema = models[name];
        if (typeof schema === 'undefined') {
            //return  name + ' is not defined!' ;
            console.log(name + ' is not defined!, not displaying this')
            return ''
        }
    }

    // If we are a Model object... adjust accordingly
    if (schema.definition) {
        // console.log('we are adjusting a model, sending the definition to the root schema', schema)
        schema = schema.definition;
    }

    if (typeof modelPropertyMacro !== 'function') {
        modelPropertyMacro = function (prop) {
            return (prop || {}).default;
        }
    }

    if (typeof name !== 'string') {
        name = schema.title || 'Inline Model';
    }

    if (name === 'Object') {
        //prevent empty params from display a table
        console.log('FOUND AN OBJECT!!! this will not get displayed', schema)
        return ''
    }

    var references = {};
    var seenModels = [];
    var inlineModels = 0;

    console.log('generating base schema=', schema)

    // Generate current HTML
    var html = processModelAsTable(schema, name);

    // Generate references HTML
    while (_.keys(references).length > 0) {
        /* jshint ignore:start */
        _.forEach(references, function (schema, name) {
            var seenModel = _.indexOf(seenModels, name) > -1;

            delete references[name];

            if (!seenModel) {
                seenModels.push(name);

                html += '<br />' + processModelAsTable(schema, name);
            }
        });
        /* jshint ignore:end */
    }

    return html;

    //////////////////////////////////////

    function processModelAsTable(schema, name) {
        if (name) {
            seenModels.push(name);
        }

        if (!schema || !schema.properties) {
            console.log('schema or schema properties are false', schema)
            return ''
        }

        var html = ''

        html += '<h4><strong>' + name + '</strong></h4>'

        if (schema.description) {
            html += '<small style="font-size:12px;color:#383535;">' + schema.description + '</small>'
        }

        html += '<table class="fullwidth"><thead><tr>'
        html += '<th style="width:15%">Name</th>'
        html += '<th style="width:38%;">Description</th>'
        html += '<th style="width:12%;">Type</th>'
        html += '<th style="width:10%;">Required</th>'
        html += '</tr></thead><tbody class="model-desc">'

        _.each(schema.properties, function (property, name) {
            var model;

            var cProperty = _.cloneDeep(property);
            //var cProperty = $.extend(true, {}, property);

            // Allow macro to set the default value
            cProperty.default = modelPropertyMacro(cProperty);

            //Resolve the schema (Handle nested schemas)
            cProperty = Helpers.resolveSchema(cProperty);

            //console.log('we just resolved a property=', cProperty)

            //We need to handle property references
            if (!_.isUndefined(cProperty.$ref)) {
                addReference(cProperty, Helpers.simpleRef(cProperty.$ref))

                model = models[Helpers.simpleRef(cProperty.$ref)];

                if (!_.isUndefined(model) && _.indexOf([undefined, 'array', 'object'], model.definition.type) === -1) {
                    // Use referenced schema
                    cProperty = Helpers.resolveSchema(model.definition);
                }
            }

            html += '<tr><td class="propName">' + name + '</td>'

            if (!_.isUndefined(cProperty.description)) {
                html += '<td>' + cProperty.description + '</td>'
            } else {
                html += '<td></td>'
            }

            if (!_.isUndefined(cProperty.type)) {
                html += '<td>'
                if (cProperty.enum) {
                    html += 'Enum <span class="propVals">[\'' + cProperty.enum.join('\', \'') + '\']</span>';
                } else {
                    html += cProperty.type
                }

                if (cProperty.minLength) {
                    html += '<div title="min length">min: <span class="propVals">' + cProperty.minLength + '</span></div>';
                }

                if (cProperty.minLength) {
                    html += '<div title="max length">max: <span class="propVals">' + cProperty.maxLength + '</span></div>';
                }

                html += '</td>'
            } else {
                html += '<td></td>'
            }

            // html += primitiveToHTML(cProperty);

            var propertyIsRequired = (_.indexOf(schema.required, name) >= 0);
            if (propertyIsRequired) {
                html += '<td class="requiredParam">Y</td>'
            } else {
                html += '<td>N</td>'
            }

            return html;
        })

        html += '</tbody></table>'

        return html
    }

    //////////////////////////////////

    function processModel(schema, name) {
        var type = schema.type || 'object';
        var isArray = schema.type === 'array';
        var html = name + ' ' + (isArray ? '[' : '{');

        if (name) {
            seenModels.push(name);
        }

        if (isArray) {
            if (_.isArray(schema.items)) {
                html += '<div>' + _.map(schema.items, function (item) {
                    var type = item.type || 'object';

                    if (_.isUndefined(item.$ref)) {
                        if (_.indexOf(['array', 'object'], type) > -1) {
                            if (type === 'object' && _.isUndefined(item.properties)) {
                                return 'object';
                            } else {
                                return addReference(item);
                            }
                        } else {
                            return primitiveToOptionsHTML(item, type);
                        }
                    } else {
                        return addReference(item, Helpers.simpleRef(item.$ref));
                    }
                }).join(',</div><div>');
            } else if (_.isPlainObject(schema.items)) {
                if (_.isUndefined(schema.items.$ref)) {
                    if (_.indexOf(['array', 'object'], schema.items.type || 'object') > -1) {
                        if ((_.isUndefined(schema.items.type) || schema.items.type === 'object') && _.isUndefined(schema.items.properties)) {
                            html += '<div>object</div>';
                        } else {
                            html += '<div>' + addReference(schema.items) + '</div>';
                        }
                    } else {
                        html += '<div>' + primitiveToOptionsHTML(schema.items, schema.items.type) + '</div>';
                    }
                } else {
                    html += '<div>' + addReference(schema.items, Helpers.simpleRef(schema.items.$ref)) + '</div>';
                }
            } else {
                Helpers.log('Array type\'s \'items\' property is not an array or an object, cannot process');
                html += '<div>object</div>';
            }
        } else {
            if (schema.$ref) {
                html += '<div>' + addReference(schema, name) + '</div>';
            } else if (type === 'object') {
                html = '';

                if (_.isPlainObject(schema.properties)) {
                    html += _.map(schema.properties, function (property, name) {
                        var propertyIsRequired = (_.indexOf(schema.required, name) >= 0);
                        var cProperty = _.cloneDeep(property);

                        var requiredClass = propertyIsRequired ? 'required' : '';
                        var html = '<span class="propName ' + requiredClass + '">' + name + '</span> (';
                        var model;

                        // Allow macro to set the default value
                        cProperty.default = modelPropertyMacro(cProperty);

                        // Resolve the schema (Handle nested schemas)
                        cProperty = Helpers.resolveSchema(cProperty);

                        // We need to handle property references to primitives (Issue 339)
                        if (!_.isUndefined(cProperty.$ref)) {
                            model = models[Helpers.simpleRef(cProperty.$ref)];

                            if (!_.isUndefined(model) && _.indexOf([undefined, 'array', 'object'], model.definition.type) === -1) {
                                // Use referenced schema
                                cProperty = Helpers.resolveSchema(model.definition);
                            }
                        }

                        html += primitiveToHTML(cProperty);

                        if (!propertyIsRequired) {
                            html += ', <span class="propOptKey">optional</span>';
                        }

                        html += ')';

                        if (!_.isUndefined(cProperty.description)) {
                            html += ': ' + '<span class="propDesc">' + cProperty.description + '</span>';
                        }

                        if (cProperty.enum) {
                            html += ' = <span class="propVals">[\'' + cProperty.enum.join('\', \'') + '\']</span>';
                        }

                        return primitiveToOptionsHTML(cProperty, html);
                    }).join(',</div><div>');
                }

                html += '</div>';
            } else {
                html += '<div>' + primitiveToOptionsHTML(schema, type) + '</div>';
            }
        }

        return html + (isArray ? ']' : '}');
    };

    function addReference(schema, name, skipRef) {
        var modelName = name;
        var model;

        if (schema.$ref) {
            modelName = schema.title || Helpers.simpleRef(schema.$ref);
            model = models[modelName];
        } else if (_.isUndefined(name)) {
            modelName = schema.title || 'Inline Model ' + (++inlineModels);
            model = {
                definition: schema
            };
        }

        if (skipRef !== true) {
            references[modelName] = _.isUndefined(model) ? {} : model.definition;
        }

        return modelName;
    }

    function primitiveToHTML(schema) {
        var html = '<span class="propType">';
        var type = schema.type || 'object';

        if (schema.$ref) {
            html += addReference(schema, Helpers.simpleRef(schema.$ref));
        } else if (type === 'object') {
            if (!_.isUndefined(schema.properties)) {
                html += addReference(schema);
            } else {
                html += 'object';
            }
        } else if (type === 'array') {
            html += 'Array[';

            if (_.isArray(schema.items)) {
                html += _.map(schema.items, addReference).join(',');
            } else if (_.isPlainObject(schema.items)) {
                if (_.isUndefined(schema.items.$ref)) {
                    if (!_.isUndefined(schema.items.type) && _.indexOf(['array', 'object'], schema.items.type) === -1) {
                        html += schema.items.type;
                    } else {
                        html += addReference(schema.items);
                    }
                } else {
                    html += addReference(schema.items, Helpers.simpleRef(schema.items.$ref));
                }
            } else {
                Helpers.log('Array type\'s \'items\' schema is not an array or an object, cannot process');
                html += 'object';
            }

            html += ']';
        } else {
            html += schema.type;
        }

        html += '</span>';

        return html;
    }

    function primitiveToOptionsHTML(schema, html) {
        var options = '';
        var type = schema.type || 'object';
        var isArray = type === 'array';

        if (isArray) {
            if (window.$.isPlainObject(schema.items) && !_.isUndefined(schema.items.type)) {
                type = schema.items.type;
            } else {
                type = 'object';
            }
        }

        if (!_.isUndefined(schema.default)) {
            options += optionHtml('Default', schema.default);
        }

        switch (type) {
            case 'string':
                if (schema.minLength) {
                    options += optionHtml('Min. Length', schema.minLength);
                }

                if (schema.maxLength) {
                    options += optionHtml('Max. Length', schema.maxLength);
                }

                if (schema.pattern) {
                    options += optionHtml('Reg. Exp.', schema.pattern);
                }
                break;
            case 'integer':
            case 'number':
                if (schema.minimum) {
                    options += optionHtml('Min. Value', schema.minimum);
                }

                if (schema.exclusiveMinimum) {
                    options += optionHtml('Exclusive Min.', 'true');
                }

                if (schema.maximum) {
                    options += optionHtml('Max. Value', schema.maximum);
                }

                if (schema.exclusiveMaximum) {
                    options += optionHtml('Exclusive Max.', 'true');
                }

                if (schema.multipleOf) {
                    options += optionHtml('Multiple Of', schema.multipleOf);
                }

                break;
        }

        if (isArray) {
            if (schema.minItems) {
                options += optionHtml('Min. Items', schema.minItems);
            }

            if (schema.maxItems) {
                options += optionHtml('Max. Items', schema.maxItems);
            }

            if (schema.uniqueItems) {
                options += optionHtml('Unique Items', 'true');
            }

            if (schema.collectionFormat) {
                options += optionHtml('Coll. Format', schema.collectionFormat);
            }
        }

        if (_.isUndefined(schema.items)) {
            if (_.isArray(schema.enum)) {
                var enumString;

                if (type === 'number' || type === 'integer') {
                    enumString = schema.enum.join(', ');
                } else {
                    enumString = '"' + schema.enum.join('", "') + '"';
                }

                options += optionHtml('Enum', enumString);
            }
        }

        if (options.length > 0) {
            html = '<span class="propWrap">' + html + '<table class="optionsWrapper"><tr><th colspan="2">' + type + '</th></tr>' + options + '</table></span>';
        }

        return html;
    }
};
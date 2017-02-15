'use strict';

SwaggerUi.Views.ParameterView = Backbone.View.extend({
	events: {
		'click .copyBodyTxt': 'copyBodyTxt',
	},

	initialize: function() {
		if(this.model.ignore === true) {
			return
		}

		Handlebars.registerHelper('isArray', function(param, opts) {
			if(param.type.toLowerCase() === 'array' || param.allowMultiple) {
				return opts.fn(this);
			} else {
				return opts.inverse(this);
			}
		});
	},

	render: function() {
		var type = this.model.type || this.model.dataType;

		if(typeof type === 'undefined') {
			var schema = this.model.schema;
			if(schema && schema.$ref) {
				var ref = schema.$ref;
				if(ref.indexOf('#/definitions/') === 0) {
					type = ref.substring('#/definitions/'.length);
				} else {
					type = ref;
				}
			}
		}

		//console.log('yyyyyrendering one param in ParameterView', this.model)

		this.model.type = type;
		this.model.paramType = this.model.in || this.model.paramType;
		this.model.isBody = this.model.paramType === 'body' || this.model.in === 'body';
		this.model.isFile = type && type.toLowerCase() === 'file';

		if(this.model.ignore === true) {
			return
		}

		if(this.model.schema && typeof this.model.schema.$ref === 'string') {
			this.model.type = this.getObjType(this.model.schema.$ref)
		}

		// Allow for default === false
		if(typeof this.model.default === 'undefined') {
			this.model.default = this.model.defaultValue;
		}

		if(typeof this.model.example === 'undefined' && typeof this.model.schema !== 'undefined' && typeof this.model.schema.example !== 'undefined') {
			this.model.example = this.model.schema.example
		} else if(typeof this.model.example === 'undefined' || this.model.example === null || this.model.example === '') {
			//only set example to default when example is empty
			this.model.example = this.model.default
		}

		this.model.hasDefault = (typeof this.model.default !== 'undefined');
		this.model.valueId = 'm' + this.model.name + Math.random();

		if(this.model.allowableValues) {
			this.model.isList = true;
		}

		var template = this.template();
		$(this.el).html(template(this.model));

		if(this.model.sampleJSON) {
			//console.log('attempting to replace NULL with null', this.model.sampleJSON)
			//ugly hack to allow swaggerExample to show nulls
			// console.log('xbefore=', this.model.sampleJSON)

			this.model.sampleJSON = this.model.sampleJSON.replace('"NULL"', 'null')
			// console.log('xafter=', this.model.sampleJSON)
		}

		var signatureModel = {
			sampleJSON: this.model.sampleJSON,
			isParam: true,
			signature: this.model.signature
		};

		if(this.model.sampleJSON) {
			var signatureView = new SwaggerUi.Views.SignatureView({ model: signatureModel, tagName: 'div' });
			$('.model-signature', $(this.el)).append(signatureView.render().el);
		}
		else {
			var sig;

			if(this.model.enum) {
				sig = 'Enum <span class="propVals">[\'' + this.model.enum.join('\', \'') + '\']</span>';
			} else {
				sig = this.model.signature
			}

			if(typeof this.model.minLength !== 'undefined') {
				sig += '<div title="min length">minLength: <span class="propVals">' + this.model.minLength + '</span></div>';
			}

			if(this.model.maxLength) {
				sig += '<div title="max length">maxLength: <span class="propVals">' + this.model.maxLength + '</span></div>';
			}

			if(typeof this.model.minimum !== 'undefined') {
				sig += '<div title="min length">minValue: <span class="propVals">' + this.model.minimum + '</span></div>';
			}

			if(this.model.maximum) {
				sig += '<div title="max length">maxValue: <span class="propVals">' + this.model.maximum + '</span></div>';
			}

			$('.model-signature', $(this.el)).html(sig);
		}

		var isParam = false;

		if(this.model.isBody) {
			isParam = true;
		}

		var contentTypeModel = {
			isParam: isParam
		};

		contentTypeModel.consumes = this.model.consumes;

		if(isParam) {
			var parameterContentTypeView = new SwaggerUi.Views.ParameterContentTypeView({ model: contentTypeModel });
			$('.parameter-content-type', $(this.el)).append(parameterContentTypeView.render().el);
		}

		else {
			var responseContentTypeView = new SwaggerUi.Views.ResponseContentTypeView({ model: contentTypeModel });
			$('.response-content-type', $(this.el)).append(responseContentTypeView.render().el);
		}

		// this.initAceEditor()
		this.initCodeMirror();

		return this;
	},
	initCodeMirror: function() {
		var self = this

		setTimeout(function() {
			try {
				var txtArea = $('.body-textarea', $(self.el))

				self.editor = CodeMirror.fromTextArea(txtArea.get(0), {
					theme: 'rubyblue',
					mode: { name: 'javascript', json: true },
					//lineNumbers: true,
					matchBrackets: true,
					//autofocus: true,
					//	continueComments: "Enter",
				});

				self.editor.on("change", function(cm, change) {
					console.log('txt was changed', cm, change)
					txtArea.val(cm.getValue())
				})

				setInterval(function() {
					//we have to do this because when you load the editor and textarea is inside of a hidden div it will not load correctly
					self.editor.refresh();
				}, 500);
			} catch(e) {
				//	console.log('failed to load code editor=', e)
			}
		}, 800)
	},
	copyBodyTxt: function(e) {
		e.preventDefault()
		e.stopPropagation()
		var target = $(e.currentTarget);

		var txtFromTxtBody = this.editor.getValue()
		var statusOfCopy = this.copyTextToClipboard(txtFromTxtBody)
		if(statusOfCopy) {
			target.html('&#x1f4cb; copied')
			setTimeout(function() {
				target.html('&#x1f4cb;')
			}, 1200)
		}
	},
	copyTextToClipboard: function(text) {
		try {
			window.clipboardData.setData('Text', text);
			return true
		} catch(err) {
			return this.copyTextToClipboardIESucks(text);
		}
	},
	copyTextToClipboardIESucks: function(text) {
		var textArea = document.createElement('textarea');
		textArea.style.position = 'fixed';
		textArea.style.top = 0;
		textArea.style.left = 0;
		textArea.style.width = '2em';
		textArea.style.height = '2em';
		textArea.style.padding = 0;
		textArea.style.border = 'none';
		textArea.style.outline = 'none';
		textArea.style.boxShadow = 'none';
		textArea.style.background = 'transparent';
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.select();

		try {
			var statusOfCopy = document.execCommand('copy');
			document.body.removeChild(textArea);
			return statusOfCopy;
		} catch(err) {
			alert('Your browser does not support copy');
			document.body.removeChild(textArea);
		}
	},
	getObjType: function(name) {
		var discoveredName = '';
		if(typeof name === 'undefined') {
			return null;
		}

		if(name.indexOf('#/definitions/') === 0) {
			discoveredName = name.substring('#/definitions/'.length);
		} else {
			discoveredName = name;
		}

		discoveredName = discoveredName.replace('[System.String]', '')

		if(discoveredName && discoveredName.indexOf('.') > -1) {
			var split = discoveredName.split('.')
			if(split) {
				var lastName = split[split.length - 1]

				return '<span title="' + discoveredName + '">' + lastName + '</span>'
			}
		}

		return discoveredName;
	},

	calculateHeightOfEditor: function(sig) {
		var minHeight = 150
		var maxHeight = 500;
		var numOfFields = (sig.match(/propName/g) || []).length
		var height = (numOfFields * 14.5) + 30  //px for each field, and some extra spacing

		if(height > maxHeight) {
			height = maxHeight
		}

		if(height < minHeight) {
			return minHeight
		} else {
			return height
		}
	},

	// Return an appropriate template based on if the parameter is a list, readonly, required
	template: function() {
		if(this.model.isList) {
			return Handlebars.templates.param_list;
		} else {
			if(this.options.readOnly) {
				if(this.model.required) {
					return Handlebars.templates.param_readonly_required;
				} else {
					return Handlebars.templates.param_readonly;
				}
			} else {
				//depricated required template
				if(this.model.isFile) {
					return Handlebars.templates.param_file;
				} else {
					return Handlebars.templates.param;
				}
			}
		}
	}
});
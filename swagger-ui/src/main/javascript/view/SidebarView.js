'use strict';

SwaggerUi.Views.SidebarView = Backbone.View.extend({
	el: '#sidebar',
	events: {
		'click .sidebarChild': 'clickRouteLink',
	},
	initialize: function(opts) {
		_.bindAll(this, 'render', 'shortMethod', 'postCollapseExpandAction', 'addSidebarToggle', 'clickRouteLink');
		this.isCallapsed = false
		this.models = opts.models
		this.render()
	},

	render: function() {
		var self = this
		this.$el.empty()

		_.each(this.models, function(parent) {
			_.each(parent.operationsArray, function(model) {
				model.srtLbl = self.shortMethod(model.method)
				//model.parentId = parent.id  //we are technically using the parent.name in the template because for some reason parent.id is undefined here
			})
		})

		this.addSidebarToggle()

		$(this.el).html(Handlebars.templates.sidebar(this.models));
	},
	clickRouteLink: function(e) {
		var target = $(e.currentTarget)
		var parentId = target.data('parentid')
		var nickname = target.data('nickname')

		var $routeContent = $('.content-' + parentId + nickname);

		if(!$routeContent.parent().hasClass('active')) {
			//shows the swagger api details when the user clicks the sidebar, opens the toggle
			window.Docs.expandEndpointListForResource(parentId)
		}

		//send the user down to the api desc
		$routeContent.slideDown('fast', function() {
			$('html, body').animate({
				scrollTop: $routeContent.offset().top - 105
			}, 100);
		});
	},
	addSidebarToggle: function() {
		var self = this
		$('<div class="collapseExpandIcon" title="Collapse sidebar">&lt;&lt;</div>').appendTo('body');

		$('.collapseExpandIcon').click(function() {
			$('#sidebar').toggle()
			self.postCollapseExpandAction()
		});
	},
	postCollapseExpandAction: function() {
		this.isCallapsed = !this.isCallapsed;

		if(this.isCallapsed) {
			if($(window).width() <= 1024) {
				$('#swagger-ui-container').css({ 'padding-left': '30px' });
			} else {
				$('#swagger-ui-container').css({ 'padding-left': '0px' });
			}

			$('.collapseExpandIcon').text('>>');
			$('.collapseExpandIcon').attr('title', 'Expand sidebar');
			$('.collapseExpandIcon').css({ 'left': '0px' });
		} else {
			$('#swagger-ui-container').css({ 'padding-left': '275px' });
			$('.collapseExpandIcon').text('<<');
			$('.collapseExpandIcon').attr('title', 'Collapse sidebar');
			$('.collapseExpandIcon').css({ 'left': '250px' });
		}
	},
	shortMethod: function(meth) {
		if(meth === 'options') {
			return 'opt'
		} else if(meth === 'delete') {
			return 'del'
		} else {
			return meth
		}
	},
});
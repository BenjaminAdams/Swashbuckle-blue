'use strict';

SwaggerUi.Views.SidebarView = Backbone.View.extend({
    el: '#sidebar',
    initialize: function (opts) {
        console.log('good el, passing in opts to sidebar view opt=', opts)
        _.bindAll(this, 'render', 'addModelToSidebar', 'shortMethod', 'addParentNameToSidebar');
        this.models = opts.models
        this.render()
    },

    render: function () {
        var self = this
        this.$el.empty()

        _.each(this.models, function (parent) {
            self.addParentNameToSidebar(parent)

            _.each(parent.operationsArray, function (model) {
                self.addModelToSidebar(model)
            })
        })
    },
    addParentNameToSidebar: function (parent) {
        this.$el.append('<li class="sidebarParent">' + parent.name + '</li>')
    },
    addModelToSidebar: function (model) {
        var srtLbl = this.shortMethod(model.method)
        var methodBtn = '<div class="methodBtn btn-' + model.method + '">' + srtLbl + '</div>'

        var $routeLink = $('<li class="sidebarChild" title="' + model.path + '"   >' + methodBtn + '<div class="childTxt">' + model.path + '</div></li>')

        this.$el.append($routeLink)

        $routeLink.click(function () {
            var $routeContent = $('.content-' + model.parentId + model.nickname)
            $routeContent.slideDown('fast', function () {
                $('html, body').animate({
                    scrollTop: $routeContent.offset().top - 65
                }, 100);
            });
        })
    },
    shortMethod: function (meth) {
        if (meth === 'options') {
            return 'opt'
        } else if (meth === 'delete') {
            return 'del'
        } else {
            return meth
        }
    },
});
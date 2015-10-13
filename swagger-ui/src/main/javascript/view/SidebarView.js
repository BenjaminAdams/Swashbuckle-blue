'use strict';

SwaggerUi.Views.SidebarView = Backbone.View.extend({
    el: '#sidebar',
    initialize: function (opts) {
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
        var self = this
        var srtLbl = this.shortMethod(model.method)
        var methodBtn = '<div class="methodBtn btn-' + model.method + '">' + srtLbl + '</div>'

        var shortNick = this.getShortNickname(model.nickname)

        var $routeLink = $('<li class="sidebarChild" title="' + model.path + '"   >' + methodBtn + '<div class="childTxt">' + shortNick + '</div></li>')

        this.$el.append($routeLink)

        $routeLink.click(function (e) {
            var $routeContent = $('.content-' + model.parentId + model.nickname)
            // self.toggleOperationContent(e, model)
            //make sure parent has active class
            if (!$routeContent.parent().hasClass('active')) {
                // $('.toggleEndpointList[data-id="' + model.parentId + '"]').click()

                window.Docs.expandEndpointListForResource(model.parentId)
            }

            $routeContent.slideDown('fast', function () {
                $('html, body').animate({
                    scrollTop: $routeContent.offset().top - 105
                }, 100);
            });
        })
    },

    toggleOperationContent: function (event, model) {
        var elem = $('#' + Docs.escapeResourceName(model.parentId + '_' + model.nickname + '_content'));
        if (elem.is(':visible')) {
            event.preventDefault();
            $.bbq.pushState('#/', 2);
            Docs.collapseOperation(elem);
        } else {
            Docs.expandOperation(elem);
        }
    },

    getShortNickname: function (nickname) {
        var parts = nickname.split("_");
        if (parts.length === 0) {
            return nickname
        } else {
            var shortNick = _.filter(parts, function (item, i) {
                return i !== 0
            })
            return shortNick.join('_')
        }
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
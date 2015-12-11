// comment
//sdffergwr sadfsdf sdfgs

dsf
sdafsa
//sadf dsfa sadfadsfhdgd
define([
    'underscore',
    'jquery',
    'backbone',
    'models/SearchButtonModel'
], function(_, $, Backbone, SearchButtonModel) {
    

    var SearchButtonView = Backbone.View.extend({
        tagName: 'div',
        className: 'nav-tree__button',

        buttonTagName: 'span',
        buttonClassName: 'btn _dark',

        model: new SearchButtonModel(),

        events: {
            'click .btn': 'someoneTouchedMe',
            'touch .btn': 'someoneTouchedMe'
        },

        initialize: function() {
            this.on('show', this.show);
            this.on('hide', this.hide);

            this.listenTo(this.model, 'change:state', function(e, state) {
                if (state == 'spinner') {
                    this.$el.addClass('_spinner');
                    this.trigger('click');
                }
                else if (state == 'default') {
                    this.$el
                        .show()
                        .css('width', this.$el.closest('.container._nav').outerWidth());
                }
                else if (state == 'hidden') {
                    this.$el.hide().removeClass('_spinner');
                }
            });
            this.listenTo(this.model, 'change:fixed', function(e, fixed) {
                this.$el
                    .toggleClass('_fixed', fixed == true)
                    .css('width', this.$el.closest('.container._nav').outerWidth());
            });

            this.render();

            return this;
        },

        render: function() {
            var btn = document.createElement(this.buttonTagName),
                btnTitle = document.createTextNode(this.model.get('title'));

            btn.className = this.buttonClassName;
            btn.appendChild(btnTitle);

            this.el.appendChild(btn);
        },

        someoneTouchedMe: function(e) {
            if (this.model.get('state') == 'default') this.model.set('state', 'spinner');
        },

        show: function() {
            this.model.set('state', 'default');
        },
        hide: function() {
            this.model.set('state', 'hidden');
        }
    });

    return SearchButtonView;

});

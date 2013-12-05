/**
 * @package ImpressPages
 *
 *
 */


(function ($) {
    "use strict";

    var methods = {
        init: function (options) {
            return this.each(function () {
                var $this = $(this);

                var $list = $this.find('.ipsList');
                $list.html('');

                var $itemTemplate = $this.find('.ipsItemTemplate');

                $.each(options.layouts, function(key, value) {
                    var $newItem = $itemTemplate.clone().detach().text(value.title).data('layout', value.name);
                    if (value.name == options.currentLayout) {
                        $newItem.addClass('active');
                        $newItem.on('click', function(e){e.preventDefault(); $this.modal('hide');})
                    } else {
                        options.widgetObject.ipWidget('refresh');
                        $newItem.on('click', function(e){e.preventDefault(); $this.modal('hide');})
                    }
                    $list.append($newItem);
                });

                $this.modal();

            });
        }
    }

    $.fn.ipLayoutModal = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.ipPageOptions');
        }
    };



})(jQuery);
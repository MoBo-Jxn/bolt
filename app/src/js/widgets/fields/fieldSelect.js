/**
 * Select field widget.
 *
 * @param {object} $ - Global jQuery object
 * @param {Object} bolt - The Bolt module.
 */
(function ($, bolt) {
    'use strict';

    /**
     * Select field widget.
     *
     * @license http://opensource.org/licenses/mit-license.php MIT License
     * @author rarila
     *
     * @class fieldSelect
     * @memberOf jQuery.widget.bolt
     */
    $.widget('bolt.fieldSelect', /** @lends jQuery.widget.bolt.fieldSelect */ {
        /**
         * Default options.
         *
         * @property {boolean} autocomplete - Use autocomplete on select
         */
        options: {
            autocomplete: false
        },

        /**
         * The constructor of the select field widget.
         *
         * @private
         */
        _create: function () {
            var select = this.element.find('select');

            select.select2({
                width: '100%',
                placeholder: {
                    id: '',
                    text: bolt.data('field.select.text.placeholder')
                },
                allowClear: true,
                minimumResultsForSearch: this.options.autocomplete ? 0 : Infinity
            });
        }
    });
})(jQuery, Bolt);

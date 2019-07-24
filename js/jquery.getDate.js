/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function($) {
	'use strict';

	var $get = $.get;

	/**
	 * @name getDate
	 * @since 2018-12-14
	 * @param {function} callback {date}
	 */
	window.getDate = function(callback) {
		//함수일 때
		if(typeof callback === 'function') {
			$get('jquery.getDate.txt', function(data, textStatus, jqXHR) {
				callback(new Date(jqXHR.getResponseHeader('Date')));
			});
		}
	};
})(jQuery);
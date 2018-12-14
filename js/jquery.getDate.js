/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function($) {
		'use strict';

		//제이쿼리가 함수일 때
		if(typeof $ === 'function') {
			/**
			 * @name getDate
			 * @since 2018-12-14
			 * @return {date}
			 */
			window.getDate = function(callback) {
				$.get('/jquery.getDate.txt', function(data, textStatus, jqXHR) {
					//함수일 때
					if(typeof callback === 'function') {
						callback(new Date(jqXHR.getResponseHeader('Date')));
					}
				});
			};
		}else{
			throw '제이쿼리가 없습니다.';
		}
	})(window.jQuery);
}catch(e) {
	console.error(e);
}
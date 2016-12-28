var Emoticons = {
	replace: function(options){
		options = options ? options : {};
		options.mainClass = options.mainClass ? options.mainClass : '';
		options.emoTag = options.emoTag ? options.emoTag : 'i';
		options.emoMap = {
		  'smile': [':)', ':}', ':]'],
		  'happy': [';D']
		};
		//TODO merge with user specified mapping
		//TODO fix frozing issue

		var elements = document.querySelectorAll(options.selector);
		elements.forEach(function(element) {
			var content = element.innerHTML;
			for (var emoClass in options.emoMap) {
				if (options.emoMap.hasOwnProperty(emoClass)) {
					var emoArray = options.emoMap[emoClass];
					emoArray.forEach(function(emo){
						content = content.replace(emo, '<'+options.emoTag+' class="fw '+options.mainClass+' '+emoClass+'"/>')
					});
				}
			}
			element.innerHTML = content;
		});
	}
};
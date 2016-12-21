function replaceEmoticons(options){
	options = options ? options : {};
	options.mainClass = options.mainClass ? options.mainClass : '';
	options.emoElement = options.emoElement ? options.emoElement : 'i';
	options.emoMap = {
	  'smile': [':)', ':}', ':]'],
	  'happy': [';D']
	};

	var elements = document.querySelectorAll(options.selector);
	elements.forEach(function(element) {
		var content = element.innerHTML;
		for (var emoClass in options.emoMap) {
			if (options.emoMap.hasOwnProperty(emoClass)) {
				var emoArray = options.emoMap[emoClass];
				emoArray.forEach(function(emo){
					content = content.replace(emo, '<'+options.emoElement+' class="fw '+options.mainClass+' '+emoClass+'"/>')
				});
			}
		}
		element.innerHTML = content;
	});
}
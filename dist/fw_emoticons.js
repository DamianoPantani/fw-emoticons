//TODO fix frozing issue

(function() {
	this.Emoticons = (function() {
		
		function Emoticons() {}
		
		Emoticons.prototype.defaultEmoMap = {
			//TODO add more
			'sad': [':('],
			'smile': [':)', ':}', ':]'],
			'happy': [';D']
		};
		
		Emoticons.prototype.mergeWithDefaultMap = function(userMap){
			var newMap = this.defaultEmoMap;
			for (var emoClass in userMap) {
				if (userMap.hasOwnProperty(emoClass)) {
					var emoArray = userMap[emoClass];
					newMap[emoClass] = typeof emoArray === 'string' ? [emoArray] : Array.isArray(emoArray) ? emoArray : [];
				}
			}
			return newMap;
		};
		
		Emoticons.prototype.replace = function(options){
			options = options ? options : {};
			options.mainClass = options.mainClass ? options.mainClass : '';
			options.emoTag = options.emoTag ? options.emoTag : 'i';
			options.emoMap = options.emoMap ? options.emoMap : {};
			options.emoMap = this.mergeWithDefaultMap(options.emoMap);
			var elements = document.querySelectorAll(options.selector);
			elements.forEach(function(element) {
				var content = element.innerHTML;
				for (var emoClass in options.emoMap) {
					if (options.emoMap.hasOwnProperty(emoClass)) {
						var emoArray = options.emoMap[emoClass];
						emoArray.forEach(function(emo){
							if(content.indexOf(emo) !== -1){
								content = content.split(emo).join('<'+options.emoTag+' class="fw '+options.mainClass+' '+emoClass+'"></'+options.emoTag+'>');
							}
						});
					}
				}
				element.innerHTML = content;
			});
		}
		
		return Emoticons;
		
	})();
}).call(this);
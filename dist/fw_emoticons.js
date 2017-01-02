//TODO fix frozing issue
//TODO minify
//TODO jshint

(function() {
	this.Emoticons = (function() {
		
		function Emoticons() {}
		
		Emoticons.prototype.defaultEmoMap = {
			'smile': [':)',':}',':]'],
			'wink': [';)',';}',';]'],
			'happy': [':D',';D'],
			'sad': [':('],
			'glasses': ['8)','8]','8}'],
			'happytongue': [':P',';P'],
			'meh': [':|'],
			'dead': [':X'],
			'lol': ['o_O', 'O_o', 'o.O', 'O.o', ':lol:'],
			'shocked': [':O'],
			'thoughtful': [':/'],
			'thoughtful2': [':\\'],
			'nerd': [':nerd:'],
			'inlove': [':inlove:'],
			'angry': [':angry:'],
			'mad': [':mad:'],
			'evil2': [':evil:'],
			'devil': [':devil:'],
			'angel': [':angel:'],
			'target': [':target:'],
			'ban': [':ban:']
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
		};
		
		return Emoticons;
		
	})();
}).call(this);
(function() {
this.Emoticons = (function() {

function Emoticons() {}

Emoticons.prototype.defaultEmoMap = {
'smile': [':)',':}',':]',':>',':-)',':-}',':-]',':->'],
'wink': [';)',';}',';]',';-)',';-}',';-]',';->'],
'happy': [':D',';D',':-D',';-D','xD','xd','XD'],
'sad': [':(',':{',':[',':<',':-(',':-{',':-[',':-<'],
'weird': [';(',';{',';[',';<',';-(',';-{',';-[',';-<'],
'glasses': ['B-)','B-}','B-]','B->','8-)','8-}','8-]','8->'],
'happytongue': [':P',':p',';P',';p',':-P',';-P',':-p',';-p'],
'meh': [':|'],
'dead': [':X',':x',';x',';X'],
'lol': ['o_o','o_O','o_0','o.o','o.O','o.0','O_o','O_O','O_0','O.o','O.O','O.0','0_o','0_O','0_0','0.o','0.O','0.0',':lol:'],
'shocked': [':O',':o',':-O',':-o',';O',';o',';-O',';-o'],
'thoughtful': [';-/',':-/',';/',':/'],
'thoughtful2': [':\\',':-\\',';\\',';-\\'],
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
	var newMap = JSON.parse(JSON.stringify(this.defaultEmoMap));//clone
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
	for (var emoClass in options.emoMap) {
		if (options.emoMap.hasOwnProperty(emoClass)) {
			var emoArray = options.emoMap[emoClass];
			emoArray.forEach(function(emo){
				var emoPattern = new RegExp('('+emo.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')+')(?![^<]*>|[^<>]*</)', 'gi');
				elements.forEach(function(element) {
					if(element.innerHTML.indexOf(emo) !== -1){
						element.innerHTML = element.innerHTML.replace(emoPattern, '<'+options.emoTag+' class="fw '+options.mainClass+' '+emoClass+'"></'+options.emoTag+'>');
					}
				});
			});
		}
	}
};

return Emoticons;
	
})();
}).call(this);
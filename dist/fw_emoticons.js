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

/*TODO: CRITICAL FIX: 	if user passes empty array to map it replaces every sign!*/
/*TODO: MAJOR FIX: 		if user passes nested selector this it is skiped!*/

Emoticons.prototype.mergeAndGetRegexMap = function(userMap){
	var newMap = JSON.parse(JSON.stringify(this.defaultEmoMap));//clone
	for (var emoClass in userMap) {
		var emoArray = userMap[emoClass];
		newMap[emoClass] = typeof emoArray === 'string' ? [emoArray] : Array.isArray(emoArray) ? emoArray : [];
	}
	for (var emoClass in newMap) {
		newMap[emoClass].forEach(function(emo, i){
			newMap[emoClass][i] = emo.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
		});
		newMap[emoClass] = [new RegExp(newMap[emoClass].join("|")), new RegExp('('+newMap[emoClass].join("|")+')(?![^<]*>|[^<>]*</)', 'gi')];
	}
	return newMap;
};

Emoticons.prototype.replace = function(options){
	options = options ? options : {};
	var mainClass = options.mainClass ? options.mainClass : '';
	var emoTag = options.emoTag ? options.emoTag : 'i';
	var emoMap = options.emoMap ? options.emoMap : {};
	emoMap = this.mergeAndGetRegexMap(emoMap);
	var newContentPrefix = '<'+emoTag+' class="fw '+(mainClass ? mainClass+' ' : '');
	var newContentSuffix = '"></'+emoTag+'>';
	document.querySelectorAll(options.selector).forEach(function(element){
		var content = element.innerHTML;
		for (var emoClass in emoMap) {
			var emoRegex = emoMap[emoClass];
			if(emoRegex[0].test(content)){
				content = content.replace(emoRegex[1], newContentPrefix+emoClass+newContentSuffix);
			}
		}
		element.innerHTML = content;
	});
};

return Emoticons;
	
})();
}).call(this);
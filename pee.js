g = {};


var localizationDict = {
    pageTitle: {
	en:
	"China Passion Spicy Hot Pot Flavor",
	zh:
	"中国 Passion 火锅店",
    },
    welcomeInfo: {
	en:
	"We will reopen buisness on 11/21",
	zh:
	"为了给所有UCSC学生提供便捷和飘香，" +
	    "我们将于11.21前实体化，期待与所有校友的相遇。",
    },
    chinaPassion_title: {
	en:
	"China Passion Spicy Hot Pot Flavor",
	zh:
	"中国 Passion 火锅店",
    },
    contactInfo:{
	en:
	"If you want food contact our email",
	zh:
	"如有食物需要请联系我们的邮箱",
    },
};

function translate(obj){
    return obj[g.lang];
}

function translateItem(item){
    if(item.id in localizationDict){
	item.textContent = translate(localizationDict[item.id])
    }else{
	item.textContent = "MISSING LOCILIZATION, OUR PROGRAMMERS ARE DUMB"
	console.log("missing localization for ", item)
    }
}

function translatePage(){
    var allIDs = document.querySelectorAll('*[id]')
    allIDs.forEach(item => translateItem(item));
}


function changeLanguage(lang){
    g.lang = lang;
    translatePage()
}



changeLanguage("en");

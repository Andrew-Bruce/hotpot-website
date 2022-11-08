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
    operatingHoursTitle: {
	en:
	"Operating Hours:<br/>",
	zh:
	"营业时间：<br/>",
    },
    operatingHours: {
	en:
	"SAT: 5PM - 10PM<br/>"+
	    "SUN: 5PM - 10PM<br/>",
	zh:
	"星期六：五点 - 十点<br/>"+
	    "星期日：五点 - 十点<br/>",
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
    location:{
	en:
	"location<br/>" +
	    "TBD",
	zh:
	"地方<br/>"+
	"不知道",
    },
    phoneNumber:{
	en:
	"Phone<br/>" +
	    "858-388-9707",
	zh:
	"电话号<br/>" +
	    "858-388-9707",
    },
    email:{
	en:
	"email<br/>" +
	    "​cpspicyhotpotflavor@gmail.com",
	zh:
	"邮箱<br/>" +
	    "cpspicyhotpotflavor@gmail.com",
    },
    notice2:{
	en:
	"nothing important",

	zh:
	"我们将在11.21日 感恩节前夕实体化<br/>"+
	"​敬请期待<br/>"+
	"​当我们望向家乡的那一抹情<br/>"+
	"包裹住的温热留下的热爱<br/>"+
	"现已深秋<br/>"+
	"我们把希望带到UCSC<br/>"+
	    "享受家味深秋的烟火<br/>",
    }

};

function translate(obj){
    return obj[g.lang];
}

function translateItem(item){
    if(item.id in localizationDict){
	item.innerHTML = translate(localizationDict[item.id])
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


console.log("why are you looking at our javascript console????, go away")
changeLanguage("en");


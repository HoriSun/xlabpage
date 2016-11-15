var xlab = xlab || {};

xlab.typelist = {
    "home":null,
}

//extract the get parameters from url to a dict
function urlparser(){
    var ret = {};
    var option = unescape(window.location.href);
    var r = /[?&]([^?=#&]*)=([^?=#&]*)/g; // http://xxx.com?test=1&try=2 -->> {test:"1",try:"2"}
    var temp;
    while(temp=r.exec(option)) ret[temp[1]]=temp[2];
    return ret;
}

//外部接口，用作本文件加载后执行的主函数
function display(){
}

function goto(type) { // main|projects|experiences|honors|resume|contact|blog
    if (type in xlab.typelist) {
	//修改href会导致页面刷新
	//window.location.href = window.location.origin + '?t=' + type;
	//HTML5,无刷新修改url
	    window.history.pushState({},0,window.location.origin + window.location.pathname + '?t=' + type);
	    display();
    }
}

//HTML5无刷新页面前进/后退
window.onpopstate = display;

var a =urlparser();

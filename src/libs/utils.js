/*
 * @公共类库
 * @author: Jeff Guo
 */

//本地存储操作类
export const Storage = {

	setStore : (name, content) => {
		if (!name) return;
		if (typeof content !== 'string') {
			content = JSON.stringify(content);
		}
		window.localStorage.setItem(name, content);
	},

	getStore : name => {
		if (!name) return;
		return window.localStorage.getItem(name);
	},

	removeStore : name => {
		if (!name) return;
		window.localStorage.removeItem(name);
	}

};

//cookie操作类
export const Cookie = {

	del : (name, path, domain) => {
		document.cookie = name + "=" +	((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
	},

	get : (name) => {
		var v = document.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
		return v ? decodeURIComponent(v[1]) : null;
	},

	set: (name, value ,expires, path, domain) => {
		var str = name + "=" + encodeURIComponent(value);
		if (expires != null || expires != '') {
			if (expires == 0) {expires = 100*365*24*60;}
			var exp = new Date();
			exp.setTime(exp.getTime() + expires*60*1000);
			str += "; expires=" + exp.toGMTString();
		}
		if (path) {str += "; path=" + path;}
		if (domain) {str += "; domain=" + domain;}
		document.cookie = str;
	}
};



//日期类操作方法
export const date =  {

	/**
	 * 日期格式化
	 * @param date(String or Date)
	 * @param format
	 * @returns {format}
	 */
	format : (date,format) => {
		if (typeof date === 'string') {
			date = new Date(Date.parse(date.replace(/-\/./g, "/")));
		} else if(typeof date === 'number') {
			date = new Date(date);
		}
		let newFormat = format || 'yyyy-MM-dd'
		, o = {
			"M+" : date.getMonth()+1,                 //月份
			"d+" : date.getDate(),                    //日
			"h+" : date.getHours(),                   //小时
			"m+" : date.getMinutes(),                 //分
			"s+" : date.getSeconds(),                 //秒
			"q+" : Math.floor((date.getMonth()+3)/3), //季度
			"S"  : date.getMilliseconds()             //毫秒
		};
		if(/(y+)/.test(newFormat)){
			newFormat = newFormat.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
		}
		for(let k in o){
			if(new RegExp("("+ k +")").test(newFormat)){
				newFormat = newFormat.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
			}
		}
		return newFormat;
	}

};

/*
 *随机类
 */
export const random = {
	//随机生成一个十六进制颜色
	color : () => {
		var c = Math.random(0, 0xFFFFFF);
		return '#' + ('000000' + c.toString(16)).slice(-6);
	},
	intNum : (begin,end) => {
		var c = end - begin + 1;
		return Math.floor(Math.random() * c + begin);
	},
	//生成指定位数的随机字符串大小写字母
	string : (len) => {
		len = len || 32;
		var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
			, max = chars.length
			, exp = '';
		for (i = 0; i < len; i++) {
			exp += chars.charAt(Math.floor(Math.random() * (max+1)));
		}
		return exp;
	}
};
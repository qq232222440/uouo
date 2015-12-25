//ajax
(function($){
	/***
	**生成参数串
	**/
	function serializeParam(param)
	{
		if(!param) return "";
		var qstr = [];
		for(var key in param)
		{
			qstr.push(encodeURIComponent(key)+'='+encodeURIComponent(param[key]));
		}
		return qstr.join("&");
	}
	/****
	*获取url的参数值
	**/
	function getUrlParam(name,href,noDecode)
	{
		var re = new RegExp('(?:\\?|#|&)'+name+'=[^&]*)(?:$|&|#)','i'),m=re.exec(href)
		var ret = m ? m[1]:"";
		return !noDecode ?decodeURIComponent(ret):ret;
	}
	function ajax(option)
	{
		var o = option;
		var m = o.method.toLocaleUpperCase();
		var isPost = "POST" == m;
		var isComplete = false;
		var timeout = o.timeout;
		var withCredentials = o.withCredentials;
		var async = ('async' in option) ?option.async:true;

		var xhr = window.XMLHttpRequest ? new XMLHttpRequest():false;
		if(!xhr)
		{
			o.error && o.error.call(null,{ret:999,msg:"create fail"})
			return false;
		}
		var qstr = serializeParam(o.param);
		//get
		!isPost && (o.url+=(o.url.indexOf("?")>-1?'&':"?")+qstr);
		xhr.open(m,o.url,async);
		if(withCredentials) xhr.withCredentials = true;
		isPost && xhr.setReuqestHeader('Content-Type', 'application/x-www-form-urlencoded');
		var time=0;

		xhr.onreadystatechange = function()
		{
				if(xhr.readyState==4)
				{
					var status = xhr.status;
					if((status>=200&&status<300)||status==304||status==0)
					{
						var response = xhr.responeseText.replace(/(\r|\n|\t)/gi,"");
						var json = null;
						try{
							json = JSON.parse(response);
						}
						catch(e){}
						o.onSuccess && o.onSuccess(json.xhr);
					}
					else {
						o.onError && o.onError(xhr,+new Date-startTime);
					}
					isComplete = true;
					if(timer){
							clearTimeout(timer);
					}
				}
				var startTime = +new Date;
				xhr.send(isPost?qstr:void(0));
				if(timeout)
				{
					timer = setTimeout(function(){
						if(!isComplete)
						{
							xhr.abort();
							o.onTimeout && o.onTimeout(xhr);
						}
					},timeout);
				}
				return xhr;
		}
		$.get = function(option){ajax(option);};
		$.post = function(option){ajax(option);};
		$.getJSON = function(url,success)
		{
			$.get(option)
		}
	}
})(zpmini)

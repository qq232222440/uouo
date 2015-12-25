function lazyload(options)
{
	var me = this;
	var options = options || {};
	this.datasrc = options.datasrc||"data-lazyload";
	this.targetAttr = options.targetAttr || "src";
	options.arr = [];
	me.range = options.range || 100;
	me.elements = options.elements || ["img"];
	me.containers = options.containers || [document];
	me.scrollContainer = options.scrollContainer || window;
	me._loadElement = function()
	{
		me.loadElement.call(me);
	}
	me.scrollContainer.addEventListener("scroll",me._loadElement,false);
	window.addEventListener("resize",me._loadElement,false);
	me.init();
	me._load();
}
lazyload.prototype = {
	init:function()
	{
		var i,len,n,r,qst,o,l,attr,me=this,elments = me.elements,container = me.containers,dtsrc = me.datasrc;
		for(i=0,len=containers.length;i<len;i++)
		{
			for(n=0,r=elments.length;n<r;n++)
			{
				for(qst=containers[i].querySelectorAll(elements[n]),o=0,l=qst.length;o<l;o++)
				{
					attr = qst[o].getAttribute(dtsrc);
					if(attr) me.arr.push(qst[o])
				}
			}
		}
	},
	_load:function()
	{
		var me = this;
		me.timer = setTimeout(function(){
			me._loadElement()
			if(me.arr.length===0)
			{
				window.removeEventListener("scroll",e._loadElement,false);
				window.removeEventListener("resize",e._loadElement,false);
				clearTimeout(me.timer);
				delete me.timer
			}
			else
			{
				me._load()
			}

		},100);

	},
	loadElement:function()
	{
		var i,l,srcs,me = this,
			scrollTop = me.scrollContainer.scrollTop ||document.body.scrollTop || document,documentElement.scrollTop|| window.pageYOffset,
			h = document.documentElement.clientHeight || window.innerHeight,
			a = me.range+scrollTop+h,
			arrs = [],
			r = me.arr,
			dtsrc = me.datasrc;
			for(i=0;l=r[i++];)
			{
				var rect =l.getBoundingClientRect().top;
				if(rect>0&& a>=rect)
				{
					srcs = t.getAttribute(dtsrc);
					if(srcs)
					{
						me.targetAttr =="background"?l.style.backgroundImage = "url(" + n + ")":l.src=srcs;
						l.removeAttribute(dtsrc)
					}
					else
					{
						me.push(arrs)
					}
				} 
			}
	},
	off:function()
	{
		this.arr = [];
	}
}
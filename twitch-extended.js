// ==UserScript==
// @name           Twitch Extended
// @version        1.0
// @author         Pitros
// @description    Extension makes Twitch.tv better, by adding new features.
// @include        http://*.twitch.tv/*
// @exclude        http://*.twitch.tv/*/popout
// @exclude        *api.twitch.tv/*
// ==/UserScript==




/*! jQuery v@1.8.1 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.1",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("? ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n=(p._data(this,"events")||{})[c.type]||[],o=n.delegateCount,q=[].slice.call(arguments),r=!c.exclusive&&!c.namespace,s=p.event.special[c.type]||{},t=[];q[0]=c,c.delegateTarget=this;if(s.preDispatch&&s.preDispatch.call(this,c)===!1)return;if(o&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<o;d++)k=n[d],l=k.selector,h[l]===b&&(h[l]=p(l,this).index(f)>=0),h[l]&&j.push(k);j.length&&t.push({elem:f,matches:j})}n.length>o&&t.push({elem:this,matches:n.slice(o)});for(d=0;d<t.length&&!c.isPropagationStopped();d++){i=t[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){k=i.matches[e];if(r||!c.namespace&&!k.namespace||c.namespace_re&&c.namespace_re.test(k.namespace))c.data=k.data,c.handleObj=k,g=((p.event.special[k.origType]||{}).handle||k.handler).apply(i.elem,q),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return s.postDispatch&&s.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function $(a,b,c,d){c=c||[],b=b||q;var e,f,g,j,k=b.nodeType;if(k!==1&&k!==9)return[];if(!a||typeof a!="string")return c;g=h(b);if(!g&&!d)if(e=L.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&i(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return u.apply(c,t.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&X&&b.getElementsByClassName)return u.apply(c,t.call(b.getElementsByClassName(j),0)),c}return bk(a,b,c,d,g)}function _(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function ba(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bb(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bc(a,b,c,d){var e,g,h,i,j,k,l,m,n,p,r=!c&&b!==q,s=(r?"<s>":"")+a.replace(H,"$1<s>"),u=y[o][s];if(u)return d?0:t.call(u,0);j=a,k=[],m=0,n=f.preFilter,p=f.filter;while(j){if(!e||(g=I.exec(j)))g&&(j=j.slice(g[0].length),h.selector=l),k.push(h=[]),l="",r&&(j=" "+j);e=!1;if(g=J.exec(j))l+=g[0],j=j.slice(g[0].length),e=h.push({part:g.pop().replace(H," "),string:g[0],captures:g});for(i in p)(g=S[i].exec(j))&&(!n[i]||(g=n[i](g,b,c)))&&(l+=g[0],j=j.slice(g[0].length),e=h.push({part:i,string:g.shift(),captures:g}));if(!e)break}return l&&(h.selector=l),d?j.length:j?$.error(a):t.call(y(s,k),0)}function bd(a,b,e,f){var g=b.dir,h=s++;return a||(a=function(a){return a===e}),b.first?function(b){while(b=b[g])if(b.nodeType===1)return a(b)&&b}:f?function(b){while(b=b[g])if(b.nodeType===1&&a(b))return b}:function(b){var e,f=h+"."+c,i=f+"."+d;while(b=b[g])if(b.nodeType===1){if((e=b[o])===i)return b.sizset;if(typeof e=="string"&&e.indexOf(f)===0){if(b.sizset)return b}else{b[o]=i;if(a(b))return b.sizset=!0,b;b.sizset=!1}}}}function be(a,b){return a?function(c){var d=b(c);return d&&a(d===!0?c:d)}:b}function bf(a,b,c){var d,e,g=0;for(;d=a[g];g++)f.relative[d.part]?e=bd(e,f.relative[d.part],b,c):e=be(e,f.filter[d.part].apply(null,d.captures.concat(b,c)));return e}function bg(a){return function(b){var c,d=0;for(;c=a[d];d++)if(c(b))return!0;return!1}}function bh(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)$(a,b[e],c,d)}function bi(a,b,c,d,e,g){var h,i=f.setFilters[b.toLowerCase()];return i||$.error(b),(a||!(h=e))&&bh(a||"*",d,h=[],e),h.length>0?i(h,c,g):[]}function bj(a,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s=0,t=a.length,v=S.POS,w=new RegExp("^"+v.source+"(?!"+A+")","i"),x=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(n[a]=b)};for(;s<t;s++){f=a[s],g="",m=e;for(h=0,i=f.length;h<i;h++){j=f[h],k=j.string;if(j.part==="PSEUDO"){v.exec(""),l=0;while(n=v.exec(k)){o=!0,p=v.lastIndex=n.index+n[0].length;if(p>l){g+=k.slice(l,n.index),l=p,q=[c],J.test(g)&&(m&&(q=m),m=e);if(r=O.test(g))g=g.slice(0,-5).replace(J,"$&*"),l++;n.length>1&&n[0].replace(w,x),m=bi(g,n[1],n[2],q,m,r)}g=""}}o||(g+=k),o=!1}g?J.test(g)?bh(g,m||[c],d,e):$(g,c,d,e?e.concat(m):m):u.apply(d,m)}return t===1?d:$.uniqueSort(d)}function bk(a,b,e,g,h){a=a.replace(H,"$1");var i,k,l,m,n,o,p,q,r,s,v=bc(a,b,h),w=b.nodeType;if(S.POS.test(a))return bj(v,b,e,g);if(g)i=t.call(g,0);else if(v.length===1){if((o=t.call(v[0],0)).length>2&&(p=o[0]).part==="ID"&&w===9&&!h&&f.relative[o[1].part]){b=f.find.ID(p.captures[0].replace(R,""),b,h)[0];if(!b)return e;a=a.slice(o.shift().string.length)}r=(v=N.exec(o[0].string))&&!v.index&&b.parentNode||b,q="";for(n=o.length-1;n>=0;n--){p=o[n],s=p.part,q=p.string+q;if(f.relative[s])break;if(f.order.test(s)){i=f.find[s](p.captures[0].replace(R,""),r,h);if(i==null)continue;a=a.slice(0,a.length-q.length)+q.replace(S[s],""),a||u.apply(e,t.call(i,0));break}}}if(a){k=j(a,b,h),c=k.dirruns++,i==null&&(i=f.find.TAG("*",N.test(a)&&b.parentNode||b));for(n=0;m=i[n];n++)d=k.runs++,k(m)&&e.push(m)}return e}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=a.document,r=q.documentElement,s=0,t=[].slice,u=[].push,v=function(a,b){return a[o]=b||!0,a},w=function(){var a={},b=[];return v(function(c,d){return b.push(c)>f.cacheLength&&delete a[b.shift()],a[c]=d},a)},x=w(),y=w(),z=w(),A="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",C=B.replace("w","w#"),D="([*^$|!~]?=)",E="\\["+A+"*("+B+")"+A+"*(?:"+D+A+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+C+")|)|)"+A+"*\\]",F=":("+B+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+E+")|[^:]|\\\\.)*|.*))\\)|)",G=":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",H=new RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g"),I=new RegExp("^"+A+"*,"+A+"*"),J=new RegExp("^"+A+"*([\\x20\\t\\r\\n\\f>+~])"+A+"*"),K=new RegExp(F),L=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,M=/^:not/,N=/[\x20\t\r\n\f]*[+~]/,O=/:not\($/,P=/h\d/i,Q=/input|select|textarea|button/i,R=/\\(?!\\)/g,S={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),NAME:new RegExp("^\\[name=['\"]?("+B+")['\"]?\\]"),TAG:new RegExp("^("+B.replace("w","w*")+")"),ATTR:new RegExp("^"+E),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),POS:new RegExp(G,"ig"),needsContext:new RegExp("^"+A+"*[>+~]|"+G,"i")},T=function(a){var b=q.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},U=T(function(a){return a.appendChild(q.createComment("")),!a.getElementsByTagName("*").length}),V=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),W=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),X=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),Y=T(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",r.insertBefore(a,r.firstChild);var b=q.getElementsByName&&q.getElementsByName(o).length===2+q.getElementsByName(o+0).length;return e=!q.getElementById(o),r.removeChild(a),b});try{t.call(r.childNodes,0)[0].nodeType}catch(Z){t=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}$.matches=function(a,b){return $(a,null,null,b)},$.matchesSelector=function(a,b){return $(b,null,null,[a]).length>0},g=$.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=g(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=g(b);return c},h=$.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},i=$.contains=r.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:r.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},$.attr=function(a,b){var c,d=h(a);return d||(b=b.toLowerCase()),f.attrHandle[b]?f.attrHandle[b](a):W||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},f=$.selectors={cacheLength:50,createPseudo:v,match:S,order:new RegExp("ID|TAG"+(Y?"|NAME":"")+(X?"|CLASS":"")),attrHandle:V?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:e?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:U?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(R,""),a[3]=(a[4]||a[5]||"").replace(R,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||$.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&$.error(a[0]),a},PSEUDO:function(a,b,c){var d,e;if(S.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(d=a[4])K.test(d)&&(e=bc(d,b,c,!0))&&(e=d.indexOf(")",d.length-e)-d.length)&&(d=d.slice(0,e),a[0]=a[0].slice(0,e)),a[2]=d;return a.slice(0,3)}},filter:{ID:e?function(a){return a=a.replace(R,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(R,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(R,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=x[o][a];return b||(b=x(a,new RegExp("(^|"+A+")"+a+"("+A+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=$.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return $.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=s++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[o]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[o]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e,g=f.pseudos[a]||f.pseudos[a.toLowerCase()];return g||$.error("unsupported pseudo: "+a),g[o]?g(b,c,d):g.length>1?(e=[a,a,"",b],function(a){return g(a,0,e)}):g}},pseudos:{not:v(function(a,b,c){var d=j(a.replace(H,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!f.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:v(function(a){return function(b){return(b.textContent||b.innerText||g(b)).indexOf(a)>-1}}),has:v(function(a){return function(b){return $(a,b).length>0}}),header:function(a){return P.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:_("radio"),checkbox:_("checkbox"),file:_("file"),password:_("password"),image:_("image"),submit:ba("submit"),reset:ba("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return Q.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}},k=r.compareDocumentPosition?function(a,b){return a===b?(l=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return l=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bb(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bb(e[j],f[j]);return j===c?bb(a,f[j],-1):bb(e[j],b,1)},[0,0].sort(k),m=!l,$.uniqueSort=function(a){var b,c=1;l=m,a.sort(k);if(l)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},$.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},j=$.compile=function(a,b,c){var d,e,f,g=z[o][a];if(g&&g.context===b)return g;d=bc(a,b,c);for(e=0,f=d.length;e<f;e++)d[e]=bf(d[e],b,c);return g=z(a,bg(d)),g.context=b,g.runs=g.dirruns=0,g},q.querySelectorAll&&function(){var a,b=bk,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=r.matchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||r.oMatchesSelector||r.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+A+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+A+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bk=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return u.apply(f,t.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j,k,l,m=d.getAttribute("id"),n=m||o,p=N.test(a)&&d.parentNode||d;m?n=n.replace(c,"\\$&"):d.setAttribute("id",n),j=bc(a,d,h),n="[id='"+n+"']";for(k=0,l=j.length;k<l;k++)j[k]=n+j[k].selector;try{return u.apply(f,t.call(p.querySelectorAll(j.join(",")),0)),f}catch(i){}finally{m||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push(S.PSEUDO.source,S.POS.source,"!=")}catch(c){}}),f=new RegExp(f.join("|")),$.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!h(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=g.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return $(c,null,null,[b]).length>0})}(),f.setFilters.nth=f.setFilters.eq,f.filters=f.pseudos,$.attr=p.attr,p.find=$,p.expr=$.selectors,p.expr[":"]=p.expr.pseudos,p.unique=$.uniqueSort,p.text=$.getText,p.isXMLDoc=$.isXML,p.contains=$.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{cj=f.href}catch(cy){cj=e.createElement("a"),cj.href="",cj=cj.href}ck=ct.exec(cj.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:cj,isLocal:cn.test(ck[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,ck[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==ck[1]&&i[2]==ck[2]&&(i[3]||(i[1]==="http:"?80:443))==(ck[3]||(ck[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cQ.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=da(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);

(function(jQuery) {

jQuery.noConflict();

(function(e){function t(e){if(e.attr("title")||typeof e.attr("original-title")!="string"){e.attr("original-title",e.attr("title")||"").removeAttr("title")}}function n(n,r){this.$element=e(n);this.options=r;this.enabled=true;t(this.$element)}n.prototype={show:function(){var t=this.getTitle();if(t&&this.enabled){var n=this.tip();n.find(".tipsy-inner")[this.options.html?"html":"text"](t);n[0].className="tipsy";n.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).appendTo(document.body);var r=e.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var i=n[0].offsetWidth,s=n[0].offsetHeight;var o=typeof this.options.gravity=="function"?this.options.gravity.call(this.$element[0]):this.options.gravity;var u;switch(o.charAt(0)){case"n":u={top:r.top+r.height+this.options.offset,left:r.left+r.width/2-i/2};break;case"s":u={top:r.top-s-this.options.offset,left:r.left+r.width/2-i/2};break;case"e":u={top:r.top+r.height/2-s/2,left:r.left-i-this.options.offset};break;case"w":u={top:r.top+r.height/2-s/2,left:r.left+r.width+this.options.offset};break}if(o.length==2){if(o.charAt(1)=="w"){u.left=r.left+r.width/2-15}else{u.left=r.left+r.width/2-i+15}}n.css(u).addClass("tipsy-"+o);if(this.options.fade){n.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity})}else{n.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){e(this).remove()})}else{this.tip().remove()}},getTitle:function(){var e,n=this.$element,r=this.options;t(n);var e,r=this.options;if(typeof r.title=="string"){e=n.attr(r.title=="title"?"original-title":r.title)}else if(typeof r.title=="function"){e=r.title.call(n[0])}e=(""+e).replace(/(^\s*|\s*$)/,"");return e||r.fallback},tip:function(){if(!this.$tip){this.$tip=e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};e.fn.tipsy=function(t){function r(r){var i=e.data(r,"tipsy");if(!i){i=new n(r,e.fn.tipsy.elementOptions(r,t));e.data(r,"tipsy",i)}return i}function i(){var e=r(this);e.hoverState="in";if(t.delayIn==0){e.show()}else{setTimeout(function(){if(e.hoverState=="in")e.show()},t.delayIn)}}function s(){var e=r(this);e.hoverState="out";if(t.delayOut==0){e.hide()}else{setTimeout(function(){if(e.hoverState=="out")e.hide()},t.delayOut)}}if(t===true){return this.data("tipsy")}else if(typeof t=="string"){return this.data("tipsy")[t]()}t=e.extend({},e.fn.tipsy.defaults,t);if(!t.live)this.each(function(){r(this)});if(t.trigger!="manual"){var o=t.live?"live":"bind",u=t.trigger=="hover"?"mouseenter":"focus",a=t.trigger=="hover"?"mouseleave":"blur";this[o](u,i)[o](a,s)}return this};e.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:.8,title:"title",trigger:"hover"};e.fn.tipsy.elementOptions=function(t,n){return e.metadata?e.extend({},n,e(t).metadata()):n};e.fn.tipsy.autoNS=function(){return e(this).offset().top>e(document).scrollTop()+e(window).height()/2?"s":"n"};e.fn.tipsy.autoWE=function(){return e(this).offset().left>e(document).scrollLeft()+e(window).width()/2?"e":"w"}})(jQuery)
  





if (jQuery('body').hasClass('channel_new')) { 


///////////////////////////////// MAIN FUNCTIONS

			////////////// CHECK IF ELEMENT EXISTS

	jQuery.fn.exists = function(){return this.length>0;}

			//////////////  STORAGE VARIABLE

	function storage (nazwa, wartosc) {
		localStorage.setItem(nazwa, wartosc);
	}
	
			////////////// LOAD VARIABLE FROM STORAGE

	function setDef(name, def) {
	if (localStorage.getItem(name) === null){
	localStorage.setItem(name, def);
	}}


///////////////////////////////// VARIABLES


	setDef("nicks", "");
	var nicks = localStorage.getItem('nicks');
	
	setDef("DelMes", "1");
	DelMes = localStorage.getItem('DelMes');

	setDef("qreply", "1");
	qreply = localStorage.getItem('qreply');
	
	setDef("iupdate", "1");
	iupdate = localStorage.getItem('iupdate');

	setDef("rtweak", "0");
	rtweak = localStorage.getItem('rtweak');

	setDef("LStream", "1");
	LStream = localStorage.getItem('LStream');
	
	
	var channelname = jQuery('.channel_name').text();
	
	var highldone,big,nicki;
	
	rescount = 0;
	started = 0;

///////////////////////////////// LANGUAGES


			var TEXT_EXT_NAME = "Twitch Extended";
			var TEXT_EXT_VER = "1.2";

switch(jQuery('html').attr('lang')) {
		case 'pl' :
			var TEXT_TWE_HOVER = "Kliknij by otworzy&#263; panel konfiguracyjny";
		
			var TEXT_LAST_STREAM = "Ostatni stream";
			var TEXT_LAST_STREAM_HOVER = "Zostanie wy&#347;wietlona data ostatniego streamu";
			
			var TEXT_LAST_STREAM = "Ostatni stream";
			var TEXT_LAST_STREAM_ENDED = "zako&#324;czy&#322; si&#281;";
			var TEXT_LAST_TODAY = "dzisiaj";
			var TEXT_LAST_YESTERDAY = "wczoraj";
			var TEXT_LAST_HOUR = "o";
					
			var TEXT_CHAT_DELETED = "Usuni&#281;te wiadomo&#347;ci w chacie";
			var TEXT_CHAT_DELETED_HOVER = "Wiadomo&#347;ci b&#281;d&#261; p&#243;&#322;prze&#378;roczyste";
			
			var TEXT_CHAT_REPLY = "Szybka odpowied&#378;";
			var TEXT_CHAT_REPLY_HOVER = "Przyciski b&#281;d&#261; wy&#347;wietlane w chacie";
			
			var TEXT_DISPLAY_TWEAK = "Ulepszenie dla niskich rozdzielczo&#347;ci";
			var TEXT_DISPLAY_TWEAK_HOVER = "Zwi&#281;ksza rozmiar &#347;rodkowej kolumny";
			
			var TEXT_UPDATE_INFO = "Aktualizuj opis";
			var TEXT_UPDATE_INFO_HOVER = "B&#281;d&#261; aktualizowane co 1 minut&#281;";
			
			var TEXT_LOAD_ARCHIVE = "Za&#322;aduj archiwum";
			var TEXT_ARCHIVE = "Archiwum";
			var TEXT_HIGLIGHTS = "Wyr&#243;&#380;nione filmy";
		break; 
		
		default :
			var TEXT_TWE_HOVER = "Click me to open control panel";
		
			var TEXT_LAST_STREAM = "Last stream";
			var TEXT_LAST_STREAM_HOVER = "Date of last stream will be displaye";
			var TEXT_LAST_STREAM_ENDED = "ended on";
			var TEXT_LAST_TODAY = "today";
			var TEXT_LAST_YESTERDAY = "yesterday";
			var TEXT_LAST_HOUR = "at";
				
			var TEXT_CHAT_DELETED = "Deleted messages in chat";
			var TEXT_CHAT_DELETED_HOVER = "Messages will be half-transparent";
			
			var TEXT_CHAT_REPLY = "Quick reply";
			var TEXT_CHAT_REPLY_HOVER = "Buttons will be displayed in chat";
			
			var TEXT_DISPLAY_TWEAK = "Small resolution tweak";
			var TEXT_DISPLAY_TWEAK_HOVER = "Increase center column width";
			
			var TEXT_UPDATE_INFO = "Update stream info";
			var TEXT_UPDATE_INFO_HOVER = "It will be updated every 1 minute";
			
			var TEXT_LOAD_ARCHIVE = "Load archive";
			var TEXT_ARCHIVE = "Archive";
			var TEXT_HIGLIGHTS = "Highlighted videos";

}

///////////////////////////////// CSS 

	jQuery('body').append("<style type='text/css'>"
	////////////// CONTROL PANEL
	+ "#te-panel { position: fixed; bottom: -2px; z-index: 50;}"
	+ "#te-panel-name, #te-panel-content { padding: 0 5px 0 5px; background: rgba(0, 0, 0, 0.851); border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.102); color: #FFFFFF; cursor: pointer; display: block; font-size: 11px; font-weight: 700; height: 22px; line-height: 22px; text-align: center; text-shadow: 0px 1px 0px #000000; text-transform: uppercase; }"
	+ "te-panel-name { width: 100px; }"
	+ "#te-panel-content { margin-left: 110px; float: left; position: absolute; bottom: -45px; border-radius: 3px 3px 0px 0px; height: 44px; width: 465px;}"
	+ "#te-panel-options { list-style-type: none; display: inline;}"
	+ "#te-panel-options li { display: inline; padding: 8px 0 0; margin: 0 8px; }"
	+ "#te-panel-options li a { opacity: 0.5; color: #FFFFFF; padding: 5px 0 0 0;}"
	+ "#te-panel-options li a.active { opacity: 1; }"
	+ "#te-panel-name { float: left; border-radius: 3px 3px 0px 0px;}"
	+ ".active { border-radius: 3px 0px 0px 0px !important; }"
	////////////// PLAYER PAGE
	+ "#twe-logo { bottom: 58px; color: #282828; font-size: 22px; font-weight: 700; line-height: 24px; z-index: 20; position: absolute; right: 68px;"
		+ "text-shadow: -1px 0 #F9F9F9, 0 1px #F9F9F9, 1px 0 #F9F9F9, 0 -1px #F9F9F9, -1px -1px #F9F9F9, 1px 1px #F9F9F9, 1px 1px #F9F9F9, -1px -1px #F9F9F9, -1px 1px #F9F9F9, 1px -1px #F9F9F9, 1px -1px #F9F9F9, -1px 1px #F9F9F9, -2px 0 #F9F9F9, 0 2px #F9F9F9, 2px 0 #F9F9F9, 0 -2px #F9F9F9;   }"
	+ ".last-date { color: #6441A5; font-weight: 700; }"
	+ ".last-title { font-weight: 700; }"
	+ "#last_streamed { padding: 0 0 0 10px;}"
	////////////// SMALL RESOLUTION TWEAK
	+ "#player_col .content .scroll-content.tweaked { padding: 0px 5px !important; }"
	+ ".content.tweaked .image, .content.tweaked #standard_holder { z-index: 11 !important; position: relative;}"
	////////////// CHAT
	+ ".message-deleted { opacity: 0.4; }"
	+ ".chat-reply { visibility: hidden; padding: 2px; float: right; opacity: 0.3; margin-left: -4px; width: 16px; height: 14px; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADqSURBVHjapFO7bsJAEFwvBp2RYsmnpKPi0dEjpc4XpE4XiU+iyA/wLf4CF4YPcGOLRRwXZ32XCimYOyfE261OMzczmg2stdBnEHpOb4Lw5zJbzK8eZSLTsipXLuA+33UrkIlM/23hr+AbCy6wTGRqrKkb5sNZ64KZ370KfD9jgKPhcPQUP8RLIcTWS+AKjBs+WrDNZR9H4ykifngzaJMQ0UtVVc9KqdxYUwMAREI8doboUqI/9RsRZQAAgzCMfy2Si8QYs76riW2SS4ANM91dZUTcCCEm9VddnJR69fagqzNElLVtBH3P+XsAaoBlJEPBlTMAAAAASUVORK5CYII=') 50% 50% no-repeat; } .chat-reply:hover {opacity: 1}"
	+ "#chat:hover  .chat-reply { visibility: visible; }"
	+ "</style");


///////////////////////////////// FUNCTIONS

			////////////// RENDER LOGO
			
	function RenderLogo (loc) { 
		if (loc = 'channel') { jQuery('#logo').after('<span id="twe-logo">Extended</span>'); }
	}
	
			////////////// CONTROL PANEL
			
	function RenderControl () {
		jQuery('#stats_and_actions').append('<div id="te-panel"><p id="te-panel-name" original-title="' +  TEXT_TWE_HOVER + '">Twitch Extended</p><div id="te-panel-content"><ul id="te-panel-options">'
		+ '<li><a id="delete-button" original-title="' +  TEXT_CHAT_DELETED_HOVER + '">' +  TEXT_CHAT_DELETED + '</a> </li>'
		+ '<li><a id="reply-button" original-title="' +  TEXT_CHAT_REPLY_HOVER + '">' +  TEXT_CHAT_REPLY + '</a> </li>'
		+ '<li><a id="resolution-button" original-title="' +  TEXT_DISPLAY_TWEAK_HOVER + '">' +  TEXT_DISPLAY_TWEAK + '</a> </li>'
		+ '<li><a id="laststream-button" original-title="' +  TEXT_LAST_STREAM_HOVER + '">' +  TEXT_LAST_STREAM + '</a> </li>'
		+ '<li><a id="update-button" original-title="' +  TEXT_UPDATE_INFO_HOVER + '">' +  TEXT_UPDATE_INFO + '</a> </li></div>');
		
		jQuery('#te-panel-name').toggle(function () {
			jQuery('#te-panel-name').addClass('active');
			jQuery('#te-panel-content').animate({'bottom' : '0px'}, 300);
		}, function () {
			jQuery('#te-panel-name').removeClass('active');
			jQuery('#te-panel-content').animate({'bottom' : '-45px'}, 170);	
		});
		
		if (DelMes == 1) { jQuery('#delete-button').addClass('active'); }
		if (qreply == 1) { jQuery('#reply-button').addClass('active'); }
		if (iupdate == 1) { jQuery('#update-button').addClass('active'); }
		if (rtweak == 1) { jQuery('#resolution-button').addClass('active'); }
		if (LStream == 1) { jQuery('#laststream-button').addClass('active'); }
		
		jQuery('#reply-button').click(function(){
		if (qreply == 1) { 
		qreply = 0; storage('qreply', 0); jQuery('#reply-button').removeClass('active'); ReplyCheck();
		} else {
		qreply = 1; storage('qreply', 1); jQuery('#reply-button').addClass('active'); ReplyCheck();
		}});
		
		jQuery('#delete-button').click(function(){
		if (DelMes == 1) { 
		DelMes = 0; storage('DelMes', 0); jQuery('#delete-button').removeClass('active'); DeleteCheck();
		} else {
		DelMes = 1; storage('DelMes', 1); jQuery('#delete-button').addClass('active'); DeleteCheck();	
		}});
		
		jQuery('#resolution-button').click(function(){
		if (rtweak == 1) { 
		ResTweak('stop'); rtweak = 0; storage('rtweak', 0); jQuery('#resolution-button').removeClass('active'); 
		} else {
		rtweak = 1; storage('rtweak', 1); jQuery('#resolution-button').addClass('active'); ResTweak('start');	
		}});

		jQuery('#laststream-button').click(function(){
		if (LStream == 1) { 
		LStream = 0; storage('LStream', 0); jQuery('#laststream-button').removeClass('active'); LastStream(); 
		} else {
		LStream = 1; storage('LStream', 1); jQuery('#laststream-button').addClass('active'); LastStream();	
		}});
		

		jQuery('#update-button').click(function(){
		if (iupdate == 1) { 
		iupdate = 0; storage('iupdate', 0); jQuery('#update-button').removeClass('active'); InfoUpdate();
		} else {
		iupdate = 1; storage('iupdate', 1); jQuery('#update-button').addClass('active'); InfoUpdate();	
		}});
		
		jQuery('#te-panel-name').tipsy({gravity: 'sw', fade: true, delayIn: 600});
		jQuery('#te-panel-options li a').tipsy({gravity: 's', fade: true, delayIn: 200, delayOut: 50});
	}
	
			////////////// KEEPS DELETED MESSAGES IN CHAT
			
	function DeleteCheck() {
		if(DelMes == 1) {
			CurrentChat.handlers.clear_chat = function(a) { if (a.target == "user") {
			jQuery('#chat_line_list .chat_from_' + a.user.replace(/[<>,]/g, '').replace(/%/g, '_')).addClass('message-deleted');}}
		}
		if(DelMes == 0) {
			CurrentChat.handlers.clear_chat = function(a) { if (a.target == "user") {
			jQuery("#chat_line_list .chat_from_"+a.user.replace(/%/g,"_").replace(/[<>,]/g,"")+" .chat_line").each(function(a){a.innerHTML="&lt;"+i18n("message deleted")+"&gt;"});}}
		}
	}	
	
			////////////// SHOWS FAST REPLY BUTTON 
			
	function ReplyCheck() {
		if (qreply == 1) {
			CurrentChat.insert_chat_line = function(a){if(!(this.restarting&&!this.history_ended||"chattester10"==a.sender)){var b=$("broadcast_tabs_holder");b&&TabbedView(b).notifyTab("chat",{inc:1});if("jtv"==a.sender)this.last_sender=a.sender,this.admin_message(this.format_message(a));else if(!a.is_action&&this.last_sender&&this.last_sender==a.sender&&"jtv"!=this.last_sender)this.insert_with_lock("#chat_line_list li:last",'<p class="chat_line" style="display:block;">&raquo; '+this.format_message(a)+"</p>");else{this.last_sender=a.sender;var c="";a.image_url&&(c='<a href="#" id="profile-image-link-%linkid" onclick="return false;" class="chat_viewer_thumb left"><img src="/images/redesign/chat_type_jtv.png" class="type_overlay jtv" /><img src="'+a.image_url+'" class="thumb" /></a>');b="";if((PP.login===PP.channel||"true"===PP.is_admin||"true"===PP.is_subadmin||this.staff[PP.login]||this.admins[PP.login]||this.moderators[PP.login])&&"jtv"!=a.sender&&a.sender!=PP.login)b='<a name="timeout" class="mod_button timeout" onclick="CurrentChat.timeout(\'%nickname\'); return false;" title="%timeout_title"><img src="/images/xarth/g/g18_clock-00000080.png" alt="Timeout" /></a><a name="ban" class="mod_button ban" onclick="CurrentChat.ban(\'%nickname\'); return false;" title="%ban_title"><img src="/images/xarth/g/g18_ban-00000080.png" alt="Ban" /></a><a name="unban" class="mod_button unban" onclick="CurrentChat.unban(\'%nickname\'); return false;" style="display:none;" title="%unban_title"><img src="/images/xarth/g/g18_unban-00000080.png" alt="Unban" /></a>'.replace(/\%nickname/g,a.sender),b=b.replace(/\%timeout_title/g,h_(_("Timeout %{username}"),{username:a.sender}).replace(/\"/g,"")),b=b.replace(/\%ban_title/g,h_(_("Ban %{username}"),{username:a.sender}).replace(/\"/g,"")),b=b.replace(/\%unban_title/g,h_(_("Unban %{username}"),{username:a.sender}).replace(/\"/g,""));var d=a.is_action?'<li class="line jtv chat_from_%sender"><p style="color:%color">%timestamp%modbuttons<span class="nick">%displayname</span> <span class="chat_line" style="color:%color">%message</span></p></li>':'<li class="line jtv chat_from_%sender'+(c?" pic clearfix":"")+'">'+c+'<a onClick="var msg = $(\'chat_text_input\').value; $(\'chat_text_input\').value=(msg+\'@%sender, \'); $(\'chat_text_input\').focus()" class="chat-reply" title="Reply to: %sender"/></a><p>%timestamp%tag%modbuttons<a href="#" style="color:%color" class="nick" id="%linkid">%displayname</a>:&nbsp;<span class="chat_line">%message</span></p></li>';a.timestamp=this.history_ended&&!this.show_timestamps?"":'<span class="small">'+a.timestamp+"&nbsp;</span>";var g=!1,c=unescape(a.nickname);0==c.indexOf("ign-")&&(g=!0,c=c.substr(4));var e="";if(a.tagtype)var h,e='<span class="tag %tagtype" title="%tagname">%tagname</span>&nbsp;'.replace(/\%tagtype/g,a.tagtype).replace(/\%tagname/g,a.tagname);a.pro&&(e+='<span class="tag %tagtype" title="%tagname"><a href="http://justin.tv/payment/pro_account?utm_source=link&utm_medium=pro_link&utm_campaign=chat_badge">%tagname</a></span> '.replace(/\%tagtype/g,"pro").replace(/\%tagname/g,"Pro"));a.subscriber&&(h='<span class="tag %tagtype %tagchannel" title="%tagname"><a href="/'+this.channel+'/subscribe" target="_blank">%tagname</a></span> ',e+=h.replace(/\%tagtype/g,"subscriber").replace(/\%tagname/g,"Subscriber").replace(/\%tagchannel/g,this.channel));g&&(e+='<span class="tag %tagtype" title="%tagname">%tagname</span>&nbsp;'.replace(/\%tagtype/g,"ign").replace(/\%tagname/g,"My IGN"));g="chat-line-"+Math.round(1E9*Math.random());b=d.replace(/\%modbuttons/g,b);b=b.replace(/\%tag/g,e);b=b.replace(/\%sender/g,a.sender.replace(/\%/g,"_"));b=b.replace(/\%nickname/g,unescape(a.sender));b=b.replace(/\%displayname/g,c);b=b.replace(/\%timestamp/g,a.timestamp);b=b.replace(/\%message/g,this.format_message(a));b=b.replace(/\%color/g,a.color);b=b.replace(/\%linkid/g,g);!a.is_action&&"jtv"!=a.sender?this.insert_with_lock("#chat_line_list",b,a,g):this.insert_with_lock("#chat_line_list",b)}}};
		} else {
			CurrentChat.insert_chat_line = function(a){if(!(this.restarting&&!this.history_ended||"chattester10"==a.sender)){var b=$("broadcast_tabs_holder");b&&TabbedView(b).notifyTab("chat",{inc:1});if("jtv"==a.sender)this.last_sender=a.sender,this.admin_message(this.format_message(a));else if(!a.is_action&&this.last_sender&&this.last_sender==a.sender&&"jtv"!=this.last_sender)this.insert_with_lock("#chat_line_list li:last",'<p class="chat_line" style="display:block;">&raquo; '+this.format_message(a)+"</p>");else{this.last_sender=a.sender;var c="";a.image_url&&(c='<a href="#" id="profile-image-link-%linkid" onclick="return false;" class="chat_viewer_thumb left"><img src="/images/redesign/chat_type_jtv.png" class="type_overlay jtv" /><img src="'+a.image_url+'" class="thumb" /></a>');b="";if((PP.login===PP.channel||"true"===PP.is_admin||"true"===PP.is_subadmin||this.staff[PP.login]||this.admins[PP.login]||this.moderators[PP.login])&&"jtv"!=a.sender&&a.sender!=PP.login)b='<a name="timeout" class="mod_button timeout" onclick="CurrentChat.timeout(\'%nickname\'); return false;" title="%timeout_title"><img src="/images/xarth/g/g18_clock-00000080.png" alt="Timeout" /></a><a name="ban" class="mod_button ban" onclick="CurrentChat.ban(\'%nickname\'); return false;" title="%ban_title"><img src="/images/xarth/g/g18_ban-00000080.png" alt="Ban" /></a><a name="unban" class="mod_button unban" onclick="CurrentChat.unban(\'%nickname\'); return false;" style="display:none;" title="%unban_title"><img src="/images/xarth/g/g18_unban-00000080.png" alt="Unban" /></a>'.replace(/\%nickname/g,a.sender),b=b.replace(/\%timeout_title/g,h_(_("Timeout %{username}"),{username:a.sender}).replace(/\"/g,"")),b=b.replace(/\%ban_title/g,h_(_("Ban %{username}"),{username:a.sender}).replace(/\"/g,"")),b=b.replace(/\%unban_title/g,h_(_("Unban %{username}"),{username:a.sender}).replace(/\"/g,""));var d=a.is_action?'<li class="line jtv chat_from_%sender"><p style="color:%color">%timestamp%modbuttons<span class="nick">%displayname</span> <span class="chat_line" style="color:%color">%message</span></p></li>':'<li class="line jtv chat_from_%sender'+(c?" pic clearfix":"")+'">'+c+'<p>%timestamp%tag%modbuttons<a href="#" style="color:%color" class="nick" id="%linkid">%displayname</a>:&nbsp;<span class="chat_line">%message</span></p></li>';a.timestamp=this.history_ended&&!this.show_timestamps?"":'<span class="small">'+a.timestamp+"&nbsp;</span>";var g=!1,c=unescape(a.nickname);0==c.indexOf("ign-")&&(g=!0,c=c.substr(4));var e="";if(a.tagtype)var h,e='<span class="tag %tagtype" title="%tagname">%tagname</span>&nbsp;'.replace(/\%tagtype/g,a.tagtype).replace(/\%tagname/g,a.tagname);a.pro&&(e+='<span class="tag %tagtype" title="%tagname"><a href="http://justin.tv/payment/pro_account?utm_source=link&utm_medium=pro_link&utm_campaign=chat_badge">%tagname</a></span> '.replace(/\%tagtype/g,"pro").replace(/\%tagname/g,"Pro"));a.subscriber&&(h='<span class="tag %tagtype %tagchannel" title="%tagname"><a href="/'+this.channel+'/subscribe" target="_blank">%tagname</a></span> ',e+=h.replace(/\%tagtype/g,"subscriber").replace(/\%tagname/g,"Subscriber").replace(/\%tagchannel/g,this.channel));g&&(e+='<span class="tag %tagtype" title="%tagname">%tagname</span>&nbsp;'.replace(/\%tagtype/g,"ign").replace(/\%tagname/g,"My IGN"));g="chat-line-"+Math.round(1E9*Math.random());b=d.replace(/\%modbuttons/g,b);b=b.replace(/\%tag/g,e);b=b.replace(/\%sender/g,a.sender.replace(/\%/g,"_"));b=b.replace(/\%nickname/g,unescape(a.sender));b=b.replace(/\%displayname/g,c);b=b.replace(/\%timestamp/g,a.timestamp);b=b.replace(/\%message/g,this.format_message(a));b=b.replace(/\%color/g,a.color);b=b.replace(/\%linkid/g,g);!a.is_action&&"jtv"!=a.sender?this.insert_with_lock("#chat_line_list",b,a,g):this.insert_with_lock("#chat_line_list",b)}}};
		}};
		
	function LastStream() {
	if (LStream == 1) {
		jQuery.getJSON("https://api.twitch.tv/kraken/streams/"+channelname+"?callback=?",{},function(data) { 
		if (!data.stream) { 
		
		//jQuery.getJSON("https://api.twitch.tv/kraken/channels/"+channelname+"/videos?callback=?&limit=1",{},function(data) {
		jQuery.getJSON("http://api.justin.tv/api/channel/archives/"+channelname+".json?callback=?&limit=1",{},function(data) {
			//var date_rec = data.videos[0].recorded_at;
			var date_rec = data[0].created_on;
			var rec_title = data[0].title;
			var rec_length = data[0].length;
			
			var rec_h = Math.floor(rec_length / 3600);
			var rec_m = Math.floor((rec_length % 3600) / 60);
			//2013-01-07 15:42:33 UTC
			//2013-01-04T18:02:55Z
			
			var data = new Date();
			var year = data.getFullYear();
			var month = data.getMonth()+1;
			var day = data.getDate();
			
			if (month < 10) {month= '0'+day}
			if (day < 10) {day = '0'+day}
			var today = day+'-'+month+'-'+year
			
			var day_y = data.getDate()-1;
			if (day_y < 10) {day_y = '0'+day_y}
			var yesterday = day_y+'-'+month+'-'+year		
			
			//var filter = /(\d{4})-(\d{2})-(\d{2})(T)(\d{2})\:(\d{2})\:(\d{2})(Z)/;
			var filter = /(\d{4})-(\d{2})-(\d{2}).(\d{2})\:(\d{2})\:(\d{2}).[A-Z]{3}/;
			var date = date_rec.replace(filter, "$3-$2-$1"); 
							
				var time_m = parseFloat(date_rec.replace(filter, "$5"))+rec_m; 
				if (time_m >= 60) { time_m = time_m - 60; rec_h++; }
			
			var time_h = parseFloat(date_rec.replace(filter, "$4"))+rec_h; 
				//if (time_m <= 9) { time_m = "0" + time_m; }
			var time = time_h+":"+time_m
			
			if (yesterday == date) { var date = TEXT_LAST_YESTERDAY }
			if (today == date) { var date = TEXT_LAST_TODAY }
			
			//jQuery('.playing').after('<span id="last_streamed">' +  TEXT_LAST_STREAM + ' - "<span class="last-title">' +rec_title+ '</span>", '+TEXT_LAST_STREAM_ENDED + ' <span class="last-date">' +date+' '+TEXT_LAST_HOUR+' '+time+'</span></span>');
			jQuery('.playing').after('<span id="last_streamed" style="display: none;">' +  TEXT_LAST_STREAM + ' ' + TEXT_LAST_STREAM_ENDED + ' <span class="last-date">' +date+' '+TEXT_LAST_HOUR+' '+time+'</span></span>');
			jQuery('#last_streamed').fadeIn();
			   
			
		});
		}});
		} else {if (jQuery('#last_streamed').exists()) { jQuery('#last_streamed').remove();}};
	}
	
	function ArchiveTweak () {
	jQuery.getJSON("http://api.justin.tv/api/channel/archives/"+channelname+".json?callback=?&limit=1",{},function(data) {
	});
	}
	
	function InfoUpdate() {

		if (iupdate == 1) {
		jQuery.getJSON("https://api.twitch.tv/kraken/channels/"+channelname+"?callback=?",{},function(data) {
			var title = jQuery('.real_title');
			var gamename = jQuery('.playing .game');
			
			if(data.status != title.html()) { jQuery('.title_over h2').html(data.status); title.html(data.status).fadeTo(500, 0.2).fadeTo(500, 1).fadeTo(500, 0.2).fadeTo(500, 1); jQuery(window).resize(); }
			if(data.game != gamename.text()) {gamename.attr({'href' : '/directory/game/'+data.game}).html(data.game).fadeTo(500, 0.2).fadeTo(500, 1).fadeTo(500, 0.2).fadeTo(500, 1);}

			
		});
		setTimeout(function() {	InfoUpdate(); },60000); }
	}
	
	function ResTweak(option) {
		function ResTweakOn () {
				var h = jQuery('#standard_holder').height() + 28 + "px";
				jQuery('#standard_holder').css({'height' : h});
				
				if(jQuery('.scroll-content').hasClass('tweaked')) {} else { jQuery('#player_col .scroll-content, #player_col .content').addClass('tweaked');} 
		}
		
		function ResTweakOff () {
			if(jQuery('.scroll-content').hasClass('tweaked')) { 
				jQuery('.scroll-content, .content').removeClass('tweaked');	
				var h = jQuery('#standard_holder').height() - 28 + "px"; 
				jQuery('#standard_holder').css({'height' : h}); 
			}  
		}
		
		if (rtweak == 1) {
			if (option == 'start') { ResTweakOn(); started = 1 }
			if (option == 'stop') { ResTweakOff(); }
			jQuery('#left_close, #right_close').click(function(){ rescount++; if (rescount == 1) { ResTweak('restart') } setTimeout(function() {	rescount = 0; }, 1000);});
			
			if (option == 'restart') {
			ResTweakOff();
			setTimeout(function() {
			ResTweakOn();
			}, 150);
			}
			
			
			
			jQuery(window).resize(function() {
				rescount++; if (rescount == 1 && started == 1) { ResTweak('restart') } setTimeout(function() {	rescount = 0; }, 1000);
			});
		}
	}


	
	
	function GetArchive () { 
	
		jQuery('.js-archive_list').prepend('<div id="VideosArchive"></div><div class="archive video clearfix" style="text-align: center; padding: 5px 0;"><a id="getarchive">' +  TEXT_LOAD_ARCHIVE + '</a></div>');

			jQuery('#getarchive').click(function() {	
			
				jQuery('#VideosArchive').fadeTo(500, 0.33).load('/'+channelname+' #archives .video', function() {

					jQuery("#VideosArchive .video").each(function(){
					var link = jQuery(this).find(".thumb").attr('href');
					var image = jQuery(this).find(".thumb").html();
					var title = jQuery(this).find(".title a").html();
					var time_ago = jQuery(this).find(".time_ago").html();
					var length = jQuery(this).find(".length").html();
					var views_count = jQuery(this).find(".views_count").html();
					
					
					jQuery(this).html('<a class="thumb" href="' + link + '">'
										+'<div class="image">' + image + '</div>'
										+'<div class="video_meta">'
										+'<div class="title">' + title + '</div>'
										+'<div class="video_stats">'
										+'<span class="stat js-timeago">' + time_ago + '</span>'
										+'<span class="stat length">' + length + '</span>'
										+'<div class="divider"></div>'
										+'<span class="stat views_count">' + views_count + '</span>'
										+'</div></div></a>');
					
					
					});
					jQuery('#VideosArchive').prepend('<div class="archive video clearfix" style="text-align: center; font-weight: 700; padding: 5px;"><p>' +  TEXT_ARCHIVE + '</p></div>');
					jQuery('#VideosArchive').append('<div class="archive video clearfix" style="text-align: center; font-weight: 700; padding: 5px;"><p>' +  TEXT_HIGHLIGHTS + '</p></div>');
					jQuery('#getarchive').remove();
					
				jQuery(this).fadeTo(500, 1);
				
				});
				
			});
	
	}
						
///////////////////////////////// RUNNING EXTENSION
	
	RenderLogo('channel');
	RenderControl();
	DeleteCheck();
	ReplyCheck();
	LastStream();
	InfoUpdate();
	GetArchive();
	setTimeout(function() { ResTweak('start'); },5000)
	
	if (PP['login'] == 'fisher225') { jQuery('#player_col .stretch.scroll').css({'background' : 'url(http://i1.ryjbuk.pl/9c90bf52535af0501503ca21e742db6ec579593e/cycki-8-jpg)'}); }
	PP.channel_hide_chat_links = false;
	
			////////////// FULLY LOADED
	jQuery('#twe-logo').append('!');

	} else {
	
	
	///////////////////////////////// BEGIN OF OLD AND BAD CODE :( FOR STANDARD VERSION OF TWITCH - NOT BETA
	
	
(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]]}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha)},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:true,max:255},"percent":{max:1},"degrees":{mod:360,
floor:true}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1}});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null)return allowEmpty||!prop.def?null:prop.def;value=type.floor?~~value:parseFloat(value);
if(isNaN(value))return prop.def;if(type.mod)return(value+type.mod)%type.mod;return 0>value?0:type.max<value?type.max:value}function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return false}});
if(rgba.length){if(rgba.join()==="0,0,0,0")jQuery.extend(rgba,colors.transparent);return inst}return colors[string]}color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this}if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined}var inst=this,type=jQuery.type(red),rgba=this._rgba=[],source;if(green!==undefined){red=[red,green,blue,alpha];type="array"}if(type==="string")return this.parse(stringParse(red)||
colors._default);if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop)});return this}if(type==="object"){if(red instanceof color)each(spaces,function(spaceName,space){if(red[space.cache])inst[space.cache]=red[space.cache].slice()});else each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null)return;inst[cache]=space.to(inst._rgba)}inst[cache][prop.idx]=
clamp(red[key],prop,true)});if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;if(space.from)inst._rgba=space.from(inst[cache])}});return this}},is:function(compare){var is=color(compare),same=true,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=isCache[prop.idx]===localCache[prop.idx];return same}})}return same});
return same},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache])used.push(spaceName)});return used.pop()},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],
type=propTypes[prop.type]||{};if(endValue===null)return;if(startValue===null)result[index]=endValue;else{if(type.mod)if(endValue-startValue>type.mod/2)startValue+=type.mod;else if(startValue-endValue>type.mod/2)startValue-=type.mod;result[index]=clamp((endValue-startValue)*distance+startValue,prop)}});return this[spaceName](result)},blend:function(opaque){if(this._rgba[3]===1)return this;var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-
a)*blend[i]+a*v}))},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?i>2?1:0:v});if(rgba[3]===1){rgba.pop();prefix="rgb("}return prefix+rgba.join()+")"},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null)v=i>2?1:0;if(i&&i<3)v=Math.round(v*100)+"%";return v});if(hsla[3]===1){hsla.pop();prefix="hsl("}return prefix+hsla.join()+")"},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();
if(includeAlpha)rgba.push(~~(alpha*255));return"#"+jQuery.map(rgba,function(v,i){v=(v||0).toString(16);return v.length===1?"0"+v:v}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1)return p+(q-p)*h*6;if(h*2<1)return q;if(h*3<2)return p+(q-p)*(2/3-h)*6;return p}spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null)return[null,null,null,rgba[3]];var r=rgba[0]/
255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max)h=0;else if(r===max)h=60*(g-b)/diff+360;else if(g===max)h=60*(b-r)/diff+120;else h=60*(r-g)/diff+240;if(l===0||l===1)s=l;else if(l<=0.5)s=diff/add;else s=diff/(2-add);return[Math.round(h)%360,s,l,a==null?1:a]};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null)return[null,null,null,hsla[3]];var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],
q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q,r,g,b;return[Math.round(hue2rgb(p,q,h+1/3)*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-1/3)*255),a]};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache])this[cache]=to(this._rgba);if(value===undefined)return this[cache].slice();var ret,type=jQuery.type(value),arr=type==="array"||type==="object"?value:arguments,local=this[cache].slice();each(props,
function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null)val=local[prop.idx];local[prop.idx]=clamp(val,prop)});if(from){ret=color(from(local));ret[cache]=local;return ret}else return color(local)};each(props,function(key,prop){if(color.fn[key])return;color.fn[key]=function(value){var vtype=jQuery.type(value),fn=key==="alpha"?this._hsla?"hsla":"rgba":spaceName,local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined")return cur;if(vtype==="function"){value=value.call(this,
cur);vtype=jQuery.type(value)}if(value==null&&prop.empty)return this;if(vtype==="string"){match=rplusequals.exec(value);if(match)value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1)}local[prop.idx]=value;return this[fn](local)}})});color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(jQuery.type(value)!=="string"||(parsed=stringParse(value))){value=color(parsed||value);if(!support.rgba&&
value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style)try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode}catch(e){}value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default")}value=value.toRgbaString()}try{elem.style[hook]=value}catch(value){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);
fx.end=color(fx.end);fx.colorInit=true}jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos))}})};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value});return expanded}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",
red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);

/*
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);

///////////////////////////////// CSS

	jQuery('body').append("<style type='text/css'>"
	///////////// User display
	+ ".biggy-box { position: relative; background: #F1F1F1 !important; padding: 5px !important; !important; z-index: 120; }"
	+ ".biggy2 { width: 744px; height: 454px;}"
	+ ".biggy-chat { position: relative; background: #F1F1F1 !important; padding: 5px !important; z-index: 20; }"
	///////////// CONFIG
	+ "#twe-logo { margin: -12px 0 0 10px; color: #EEEEEE !important; font-weight: 700; font-size: 12px; line-height: 24px; text-shadow: -1px 0 #6441A5, 0 1px #6441A5, 1px 0 #6441A5, 0 -1px #6441A5, -1px -1px #6441A5, 1px 1px #6441A5, 1px 1px #6441A5, -1px -1px #6441A5, -1px 1px #6441A5, 1px -1px #6441A5, 1px -1px #6441A5, -1px 1px #6441A5, -2px 0 #6441A5, 0 2px #6441A5, 2px 0 #6441A5, 0 -2px #6441A5; ;  float: left; position: relative; z-index: 20; }"
	+ "#config-div { background: #F1F1F1; box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.071); margin-bottom: 0px; overflow: hidden; padding: 16px; }"
	+ "#config-div sup { font-size: 9px; } .copyright { font-size: 10px; line-height: 27px;}"
	+ ".config-title { color: #6441A5; font-size: 18px; font-weight: bold; margin: 0 0 20px 0; border-bottom:1px solid #6441A5}"
	+ ".config-sub { color: #6441A5; font-size: 14px; font-weight: bold; margin: 10px 0; border-bottom:1px solid #6441A5}"
	+ ".config-option { font-size: 14px; line-height: 20px; padding: 6px 0;}"
	+ ".config-option .normal_button { width: 80px; text-align: center; padding: 1px 0; }"
	+ ".config-option.margin { padding-left: 25px; background: url('https://lh4.googleusercontent.com/-Vf3ePJsTDrg/UEunbWyXZoI/AAAAAAAAAUM/d0T4qAmSMQE/s10/arrow.png') 2% 40% no-repeat;}"
	+ ".apply-clear { margin: 20px 0 0 0; }"
	+ ".cright { float: right; } .cright a span { padding: 4px 5px !important;}"
	+ "#nicks-list { width: 520px; margin: 0; font-size: 14px;}"
	+ "#nicks-div { padding: 5px 0; }"
	+ "#twedonate { margin-bottom: 20px;}"
	+ ".egmented_buttons.cright { margin-top: -5px; }" 
	+ ".switch.cright { margin-top: -2px; }" 
	///////////// PANEL
	+ "#twex-panel-cont { padding: 3px 3px 3px 5px; height: 36px;}"
	+ "#twex-panel { background: #F1F1F1; height: 36px; margin: 15px -10px -10px -10px; border-top: 1px solid #DFDFDF; overflow: hidden;}"
	+ "#twex-buttons { float:right;} #twex-buttons a {margin-left: 3px;}"
	+ "#twex-title { color: #6441A5; font-weight: 700; font-size: 14px; line-height: 30px;}"
	+ "#twex-title sup { color: #6441A5; font-weight: 700; font-size: 8px;}"
	///////////// RESZTA
	+ ".hidden {display: none !important; }"
	+ ".message-deleted { opacity: 0.4; }"
	+ ".chat-reply { padding: 2px; float: right; opacity: 0.3; margin-left: -4px; width: 16px; height: 14px; display: block; background: url('https://lh3.googleusercontent.com/-_Ul8TySI-v8/UEosmHtgokI/AAAAAAAAARs/V947Bb3t01M/s16/reply.png') 50% 50% no-repeat; } .chat-reply:hover {opacity: 1}"
	+ ".option1 {background: -o-linear-gradient(top, #8266B6, #533787) #6A4E9E !important; box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.102), 0px 1px 0px rgba(0, 0, 0, 0.149); color: #FFFFFF; text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.749); }"
	+ "#site_chat_flash {position: absolute; left: 0; right: 0; visibility: hidden !important;}"
	///////////// BIG MODE
	+ "#big-toggle-close {position: fixed; z-index: 124; bottom: 0; left: 30%; color: #FFFFFF; height: 27px !important; border-top: 0px solid transparent !important; border-bottom: 0px solid transparent !important; border: 1px solid rgba(0, 0, 0, 0.5); color: #6441A5; background: -webkit-linear-gradient(top, #585858, #333333) #1A1A1A !important;background: -moz-linear-gradient(top, #585858, #333333) #1A1A1A !important;background: -o-linear-gradient(top, #585858, #333333) #1A1A1A !important;background: -ms-linear-gradient(top, #585858, #333333) #1A1A1A !important; background: linear-gradient(top, #585858, #333333) #1A1A1A !important; box-shadow: inset 0px 1px 0px #585858, 0px 1px 0px #1A1A1A !important; -webkit-box-shadow: inset 0px 1px 0px #585858, 0px 1px 0px #1A1A1A !important; box-shadow: inset 0px 1px 0px #585858, 0px 1px 0px #1A1A1A !important; text-shadow: 0px 1px 0px #252525 !important;}"
	+ "#chat.bigscr { background: #F1F1F1;}"
	+ "</style>");
		
	var css = ".normal_button, #chat_toggle, .dropdown, #night-slider, .slider { border: 1px solid rgba(0, 0, 0, 0.5); color: #6441A5; background: -webkit-linear-gradient(top, #585858, #333333) #1A1A1A !important;background: -moz-linear-gradient(top, #585858, #333333) #1A1A1A !important;background: -o-linear-gradient(top, #585858, #333333) #1A1A1A !important;background: -ms-linear-gradient(top, #585858, #333333) #1A1A1A !important;background: linear-gradient(top, #585858, #333333) #1A1A1A !important; box-shadow: inset 0px 1px 0px #585858, 0px 1px 0px #1A1A1A !important; text-shadow: 0px 1px 0px #252525 !important;}"
	+ ".normal_button:active, #chat_toggle:active, .dropdown:active, #night-slider:active { background: -webkit-linear-gradient(top, #4C4C4C, #272727) #444444 !important;background: -moz-linear-gradient(top, #4C4C4C, #272727) #444444 !important;background: -o-linear-gradient(top, #4C4C4C, #272727) #444444 !important;background: -ms-linear-gradient(top, #4C4C4C, #272727) #444444 !important;background: linear-gradient(top, #4C4C4C, #272727) #444444 !important; box-shadow: inset 0px 1px 0px #4C4C4C, 0px 1px 0px #272727 !important; border-bottom-color: #272727;}"
	+ "#config-div { border: 1px solid #333333; border-top: 0px;}"
	+ "#chat_toggle { border: 0px solid transparent !important; color: #8D6DC6 !important; }"
	+ ".main { border-color: #484848 }"
	+ ".whatisthis{ background: #1A1A1A !important; border: 1px solid #333333 !important; }"
	+ "#header_language_dropmenu { border: 1px solid #333333; }"
	+ ".primary_button:active {box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 1), 0px 1px 0px #000000; }"
	+ "#twex-panel { background: #1A1A1A; border-top: 1px solid #252525;}"
	+ ".switch { box-shadow: inset 0px 0px 0px 1px #141414 !important; background: #333333;}" 
	+ ".slider { box-shadow: inset 0px 1px 0px #585858, 0px 0px 0px #333333 !important; }"
	+ "input.text:focus, input.string:focus, select:focus, textarea:focus, input.text, input.string, select, textarea { color: #292929 !important; background: rgba(255, 255, 255, 0.506) !important; }"
	//+ "#config-div .primary_button { border-top: 0px solid transparent !important; } .normal_button { border-bottom: 0px solid transparent}"
	+ "#chat_lines, #chat.bigscr, #standard_holder, .biggy-chat, #facebook_connect, #config-div, #chat_redisplay_holder { background: #1A1A1A !important; } "
	+ "#chat { color: #FFFFFF !important; }"
	+ "#player_column a, #site_header a { color: #8D6DC6 !important; }"
	+ ".tabs, .tabs .tab a, #stats_and_description { border-color: #333333 !important; }"
	+ "#site_header, #user_info { background: #1A1A1A; border: 1px solid #333333 }"
	+ "#broadcast_title { color: #CECECE; }"
	+ "input { box-shadow: none !important; }"
	+ ".primary_button span { color: #E8DCFF !important; } .primary_button { border-top: 1px solid #000000 !important; }"
	+ "#games h5 { color: #FFFFFF !important; }"
	+ ".fullwidth_light { background: #1A1A1A; }"
	+ ".title a, .title { color: #FFFFFF !important; }"
	+ ".hide_ad { border-bottom: 1px solid #252525 !important;}"
	+ ".header_divider { background: rgba(255, 255, 255, 0.235) !important; box-shadow: 0px 1px 0px #8B8B8B, inset 0px 1px 0px rgba(0, 0, 0, 0.647) !important; }"
	+ "h1.static_header { border-bottom-color: #484848; }"
	+ ".subwindow, .twitch_subwindow  { background-color: #1A1A1A; }"
	+ "#roadblock_message {background-color: #333333 !important; color: #FFFFFF !important; }"
	+ ".roadblock h1 { color: #FFFFFF; }"
	+ ".config-option .normal_button { width: 80px; text-align: center; padding: 1px 0 0 0; }"
	+ ".dropdown.js-select, .normal_button.list_more {color: #888888 !important; }"
	+ "body.popout_chat#chat { background: #1A1A1A;}"
	///////////// TOP BAR
	+ "#header_search { background: url('http://www-cdn.jtvnw.net/images/xarth/g/g18_search-00000080.png') no-repeat left 4px top 50%; }"
	+ "#user_display_name, .dropdown.js-select{ background: url('https://lh4.googleusercontent.com/-TG43SrEJej8/UHLgF1oO72I/AAAAAAAAAVw/KK0ulBpIkRQ/s16/dropdown-wh.png') no-repeat 100% 50% , -o-linear-gradient(top, #585858, #333333) #333333 !important;}"
	///////////// NOTYFICATION
	+ ".noty_close { opacity: 0.15 }"
	+ ".noty_bar { background: #1A1A1A !important; border-color: #000000; !important}"
	+ ".noty_text { text-shadow: 0px 1px 0px #252525 !important; }"
	///////////// PM
	+ "#message_actions, .button_group { background: #1A1A1A !important; }"
	+ ".manage_message { background: #333333 !important; }"
	+ "#compose_message_form, #compose_message_form .button_group, #reply_form, #reply_form .button_group {border-color: #333333 !important; box-shadow: 0px 0px 0px #000000 !important;}"
	+ ".preview { background: #000000 !important; border-bottom: 1px solid #333333 !important; box-shadow: 0px 1px 0px #585858 !important; color: #8E8B8B !important; background }"
	+ ".preview.unread { background: #1A1A1A !important;}"
	+ ".vtabs li a:hover { background: #1A1A1A !important; }"
	+ ".vtabs li a { text-shadow: 0px 0px 0px #000000 !important; }"
	///////////// WYNIKI
	+ "ul.subtabs li.selected {background: #1A1A1A !important;}"
	+ "ul.subtabs, .message  {border-bottom-color: #333333 !important;}"
	///////////// CHAT
	+ ".chat-reply { background-image: url('https://lh4.googleusercontent.com/-fl2-d3DqYno/UEosrNg1GyI/AAAAAAAAAR4/ELP74NfgqHY/s16/reply-wh.png')}"
	+ "#views_count { background-image: url('https://lh3.googleusercontent.com/-vRgIGsAF6eU/UEoro71h9YI/AAAAAAAAAQ4/cutTz-GO_Vw/s18/eye-wh.png') !important;}"
	+ ".views_count { color: #FFFFFF; opacity: 0.4; background-image: url('https://lh3.googleusercontent.com/-vRgIGsAF6eU/UEoro71h9YI/AAAAAAAAAQ4/cutTz-GO_Vw/s18/eye-wh.png') !important;}"
	+ "#followers_count { background-image: url('https://lh5.googleusercontent.com/-n1f7SB8kAkw/UEosf6B3e5I/AAAAAAAAARg/TxUCm9mswvE/s18/heart-wh.png') !important;}"
	+ ".mod_button.timeout { background-image: url('https://lh5.googleusercontent.com/-4y36JwLaQWY/UEosaUZ1VJI/AAAAAAAAARU/_W3Zv9mATr8/s18/clock-wh.png') !important;} .mod_button.timeout img {visibility: hidden !important;}"
	+ ".mod_button.ban { background-image: url('https://lh6.googleusercontent.com/-Ym6_XT0WQes/UEor5VjWJVI/AAAAAAAAARA/88dZ_e1GBmM/s18/ban-wh.png') !important;} .mod_button.ban img {visibility: hidden !important;}"
	+ ".mod_button.unban { background-image: url('https://lh3.googleusercontent.com/-AZMHXBnZSKs/UEoy-mfGggI/AAAAAAAAAS0/l7qzId0ZqoI/s18/unban-wh.png') !important;} .mod_button.unban img {visibility: hidden !important;}"
	///////////// LISTY
	+ ".video_list .video, .mixed_list .video, .mixed_list .user.result {border-bottom: 1px solid #333333 !important; box-shadow: 0px 1px 0px #585858 !important; color: #8E8B8B !important;}"
	+ ".video_list .video .title a {color: #D5D5D5 !important; }"
	+ ".video_list .video:hover, .mixed_list .video:hover, .mixed_list .user.result:hover {color: #8E8B8B !important; background: #333333 !important; }"
	+ "#team_member_list .member:hover, .roadblock_channel_list .video:hover { background: #1A1A1A;  }"
	+ "#team_member_list .member, .roadblock_channel_list .video { border-bottom: 1px solid #333333 !important; box-shadow: 0px 1px 0px #585858 !important; color: #8E8B8B !important;  }"
	+ ".noise-black { background-image: none !important; background-color: #000000 !important;}";
	

	
	var nightstyle = document.createElement("style");
	nightstyle.setAttribute("type", "text/css");
	nightstyle.textContent = css;

///////////////////////////////// ZMIENNE 

	var wysokosc = jQuery('#standard_holder').height();
//	var chat = jQuery('#chat_lines').height();
	var dlugosc = jQuery('#standard_holder').width();
	
	function getd(name, def) {
	if (localStorage.getItem(name) === null){
	localStorage.setItem(name, def);
	}}
	
	getd('mnoznik', '1.25');
	mnoznik = localStorage.getItem('mnoznik');
	mnoznik = parseFloat(mnoznik)

	getd('chatsize', '300');
	chatsize = localStorage.getItem('chatsize');
	chatsize = parseFloat(chatsize)

	getd('bigscreenchatsize', '350');
	bigscreenchatsize = localStorage.getItem('bigscreenchatsize');
	bigscreenchatsize = parseFloat(bigscreenchatsize)

	getd("chatright", "-70");
	chatright = localStorage.getItem('chatright');
	chatright = parseFloat(chatright);
	
	getd("playerleft", "-70");
	playerleft = localStorage.getItem('playerleft');
	playerleft = parseFloat(playerleft);
	
	getd("nightm", "0");
	nightm = localStorage.getItem('nightm');

	getd("nightmbg", "1");
	nightmbg = localStorage.getItem('nightmbg');

	getd("nicks", "");
	nicks = localStorage.getItem('nicks');
	
	getd("deletem", "1");
	deletem = localStorage.getItem('deletem');

	getd("reply", "1");
	reply = localStorage.getItem('reply');

	getd("channel", "0");
	channel = localStorage.getItem('channel');

	getd("tab", "0");
	tab = localStorage.getItem('tab');
		
	getd("tablimit", "1");
	tablimit = localStorage.getItem('tablimit');
	
	getd("fb", "0");
	fb = localStorage.getItem('fb');
	
	bigscreencss = 0;
	bigscreen = 0;
	
	var chats = jQuery('#chat').width();
	chat = jQuery('#chat_lines').height();
	
	highldone = 0;
	big = 0;
	nicki = '';
	
	var bg = jQuery('.main').css('backgroundColor');
	var co = jQuery('.main').css('color');
	
	
///////////////////////////////// FUNKCJE ///////////////////////////////// 

	jQuery.fn.exists = function(){return this.length>0;}


	function storage (nazwa, wartosc) {
		localStorage.setItem(nazwa, wartosc);
	}

///////////////////////////////// LANGUAGES

			TEXT_EXT_VER = "1.2";

switch(jQuery('html').attr('lang')) {
		case 'pl' :
			TEXT_EXT_NAME = "Twitch Extended";
			//TEXT_EXT_VER = "1.2";

			TEXT_REFRESH_B = "Od&#347;wie&#380; info o streamie";
			TEXT_NIGHTM_B = "Tryb nocny";
			TEXT_BIGSCREEN_B = "Du&#380;y ekran";
			TEXT_USERDISPLAY_B = "Tryb u&#380;ytkownika";
			TEXT_BIGSCREEN_OFF_B = "Wy&#322;&#261;cz du&#380;y ekran | [ESC]";
			
			TEXT_TWE_IMG_ALT = "Konfiguracja Twitch Extended";
			
			TEXT_DONATE = "Podoba Ci si&#281; to rozszerzenie? Mo&#380;esz wspom&#243;c mnie poprzez darowizn&#281;.";
			
			TEXT_NIGHTM_HEAD = "Konfiguracja trybu nocnego";
			TEXT_NIGHTM_TITLE = "Tryb nocny";
			TEXT_NIGHTM_BG = "Zachowaj oryginalne t&#322;o kana&#322;u";
			
			TEXT_CHAT_HEAD = "Konfiguracja czatu";
			TEXT_CHAT_DELETED = "Pokazuj usuni&#281;te wiadomo&#347;ci na czacie";
			TEXT_CHAT_REPLY = "Pokazuj przycisk szybkiej odpowiedzi na czacie";
			TEXT_CHAT_HIGHLIGHT = "Podkre&#347;laj wiadomo&#347;ci od (oddzielaj nazwy u&#380;ytkownik&#243;w przecinkiem \",\")";
			
			TEXT_DISP_HEAD = "Konfiguracja wy&#347;wieltania";
			TEXT_DISP_SUGCHANN = "Ukryj sugerowane kana&#322;y";
			TEXT_DISP_TABS = "Ukryj zak&#322;adki poni&#380;ej (informacje i nagrania)";
			TEXT_DISP_TABS_LIMIT = "Ogranicz wysoko&#347;&#263; zak&#322;adek (mog&#261; by&#263; problemy je&#347;li flash jest osadzony)";
			TEXT_DISP_FB = "Ukryj pasek po&#322;&#261;czenia z Facebookiem";
			
			TEXT_BIGSCR_HEAD = "Konfiguracja du&#380;ego ekranu";
			TEXT_BIGSCR_CHATW = "Szeroko&#347;&#263; czatu (domy&#347;lnie 350px)";
			
			TEXT_USERD_HEAD = "Konfiguracja trybu u&#380;ytkownika";
			TEXT_USERD_FLASH = "Mno&#380;nik wielko&#347;ci odtwarzacza Flash (domy&#347;lnie 1.0)";
			TEXT_USERD_CHATW = "Szeroko&#347;&#263; czatu (domy&#347;lnie 300px)";
			TEXT_USERD_CHATPOS = "Pozycja czatu od prawej strony okna (domy&#347;lnie -70px)";
			TEXT_USERD_FLASHPOS = "Pozycja odtwarzacza wideo od lewej strony okna (domy&#347;lnie -70px)";

			TEXT_CFG_APPLY = "Zastosuj zmiany w trybie u&#380;ytkownika";
			TEXT_CFG_CLEAR_B = "Wyczy&#347;&#263; ustawienia";
			TEXT_CLEAR_Q = "Czy jeste&#347; pewien, &#380;e chcesz wyczy&#347;ci&#263; wszystkie ustawienia?";
			TEXT_CLEAR_D = "&#379;adne zmiany nie zosta&#322;y wprowadzone!";
		break; 
		
		default :
			TEXT_EXT_NAME = "Twitch Extended";
			//TEXT_EXT_VER = "1.2";

			TEXT_REFRESH_B = "Refresh stream info";
			TEXT_NIGHTM_B = "Night mode";
			TEXT_BIGSCREEN_B = "Big screen";
			TEXT_USERDISPLAY_B = "User display";
			TEXT_BIGSCREEN_OFF_B = "Turn off big screen | [ESC]";
			
			TEXT_TWE_IMG_ALT = "Twitch Extended Configuration";
			
			TEXT_DONATE = "Do you like this extension? You can support me by donate.";
			
			TEXT_NIGHTM_HEAD = "Night mode configuration";
			TEXT_NIGHTM_TITLE = "Night mode";
			TEXT_NIGHTM_BG = "Keep original channel background";
			
			TEXT_CHAT_HEAD = "Chat configuration";
			TEXT_CHAT_DELETED = "Show deleted messages in chat";
			TEXT_CHAT_REPLY = "Show chat fast reply button";
			TEXT_CHAT_HIGHLIGHT = "Highlight messages from (separate nicks with commas \",\")";
			
			TEXT_DISP_HEAD = "Display configuration";
			TEXT_DISP_SUGCHANN = "Hide suggested channels";
			TEXT_DISP_TABS = "Hide tabs below (info and videos)";
			TEXT_DISP_TABS_LIMIT = "Limit tabs size (may cause bugs if flash was embedded)";
			TEXT_DISP_FB = "Hide Facebook connect bar";
			
			TEXT_BIGSCR_HEAD = "Big screen configuration";
			TEXT_BIGSCR_CHATW = "Chat width (350px is default)";
			
			TEXT_USERD_HEAD = "User display mode configuration";
			TEXT_USERD_FLASH = "Flash player size multiplier (1.0 is default size)";
			TEXT_USERD_CHATW = "Chat width (300px is default)";
			TEXT_USERD_CHATPOS = "Chat position from right side of window (-70px is default)";
			TEXT_USERD_FLASHPOS = "Video player position from left side of window  (-70px is default)";

			TEXT_CFG_APPLY = "Apply user display changes";
			TEXT_CFG_CLEAR_B = "Clear settings";
			TEXT_CLEAR_Q = "Are you sure you want to clear all the settings?";	
			TEXT_CLEAR_D = "No changes have been made!";
}
	
///////////////////////////////// NIGHT MODE
	
	function nighton () {
		jQuery('.main').animate({backgroundColor: '#000000', color: '#FFFFFF'});
		storage('nightm', 1);
		jQuery.doTimeout(200,function() { 
		document.body.appendChild(nightstyle);
		document.body.appendChild(nighthighlight);
		});
	}	
	function nightonlite () {
		jQuery('.main').animate({backgroundColor: '#000000', color: '#FFFFFF'});
		storage('nightm', 1);
		document.body.appendChild(nightstyle);
	}
		
	function nightoff () {
		document.body.removeChild(nightstyle);
		document.body.removeChild(nighthighlight);
		jQuery('.main').animate({backgroundColor: bg, color: co});
		storage('nightm', 0);
	}
	function nightofflite () {
		document.body.removeChild(nightstyle);
		jQuery('.main').animate({backgroundColor: bg, color: co});
		storage('nightm', 0);
	}

	function nightbgon () { if (!jQuery('body.front_page').exists()) {jQuery('.noise').addClass('noise-black'); }}
	function nightbgoff () { jQuery('.noise').removeClass('noise-black'); }	

///////////////////////////////// ZMIANA ROZMIAROW
	
	function sizebig () {
		chat = jQuery('#chat_lines').height();
		var chatoffs1 = jQuery("#stats_and_description").offset().top;
		
		if(jQuery("#chat").position().top > 20) {
		if(jQuery("#related_channels").offset().top > jQuery("#stats_and_description").offset().top) {
		var adheight = jQuery('.advertisement').height();
		} else { var adheight = 0; }
		}
		
		jQuery('#standard_holder').addClass('biggy-box').animate({left: playerleft, top: '0', height: wys, width: wid}, 400 );
		jQuery('#live_site_player_flash').css({'height' : wys , 'width' : wid});
		jQuery('#chat').addClass('biggy-chat').animate({right: chatright, top: -adheight, width: chatsize}, 500 );
		
				
		jQuery.doTimeout(500,function() { 
			var chatoffs2 = jQuery("#stats_and_description").offset().top;
			var chatw = chatoffs2-chatoffs1+chat-10;
				
			jQuery('#chat_lines').css({'max-height' : chatw}).animate({height: chatw}, 450);
				
			jQuery.doTimeout(500,function() { jQuery('#chat_lines').scrollTop(10000) 
				//jQuery('#chat').after('BIG: '+chatw+' '+chatoffs2+' '+chatoffs1+' '+chat+'<br/>');
				
				var windowoffset = window.pageYOffset + jQuery(window).height() - jQuery('#controls').offset().top - 40;
				if (windowoffset < 0) { jQuery('html').animate({scrollTop : window.pageYOffset + -windowoffset},'slow');}
			});
		});	
	}
	
	function sizenormal () {
		jQuery('#standard_holder').removeClass('biggy-box').animate({left: '0', top: '0', height: wysokosc, width: dlugosc}, 1 );
		jQuery('#live_site_player_flash').css({'height' : wysokosc , 'width' : dlugosc});
		jQuery('#chat').animate({right: '0px', top: '0', width: chats}, 500 );
		jQuery.doTimeout(500,function() { 
			jQuery('#chat').removeClass('biggy-chat')
			jQuery.doTimeout(50,function() { jQuery('#chat_lines').scrollTop(10000)}); 
		});
		jQuery('#chat_lines').css({'max-height' : 'auto'}).animate({height: chat}, 500); 
		//jQuery('#chat').after('NORMAL: '+chat+'<br/>');
	}
	
	function calcsize () {
		wys = wysokosc*mnoznik;
		wid = dlugosc*mnoznik;
	}
	
	jQuery(window).resize(function() {
		if (bigscreen == 1) { UpdateBigscreen(); 	}
	});

	jQuery(window).keypress(function(e) {
		if (big == 1 & bigscreen == 0) { if (e.keyCode ==  27) {  jQuery('#big-toggle').trigger('click'); }	}
		if (bigscreen == 1) { if (e.keyCode ==  27) {  jQuery('#big-screen').trigger('click'); }	}
	});
	
	function UpdateBigscreen () {
		var playerwidth = jQuery(window).width() - bigscreenchatsize -5;
		var chatheight = jQuery(window).height() - 35;
		
		bigscreenc = "#chat.bigscr, #live_site_player_flash.bigscr { position: fixed; z-index: 123; top: 0px; height: 100% !important;}"
		+ "#chat.bigscr { background: #F1F1F1; !important; width: "+bigscreenchatsize+"px !important; right: 0px !important; padding: 0 0 0 5px !important;}"
		+ "#chat_lines.bigscr {height: "+chatheight+"px !important; max-height: "+chatheight+"px !important;}"	
		+ "#channel_viewer_count.bigscr {position: fixed; bottom: 5px; left: 150px; z-index: 150; opacity: 1 !important;}"
		+ ".advertisement.bigscr { visibility: hidden; }"
		+ "#live_site_player_flash.bigscr {width: "+playerwidth+"px !important; left: 0px;}";	

		if (bigscreencss == 0) { 
		bigscreencss = document.createElement("style");
		bigscreencss.setAttribute("type", "text/css");
		bigscreencss.textContent = bigscreenc;
			jQuery.doTimeout(50,function() { jQuery('#chat_lines').scrollTop(10000)}); 
		document.body.appendChild(bigscreencss); 
		} else {
		bigscreencss.textContent = bigscreenc;			
		document.body.removeChild(bigscreencss); 
		document.body.appendChild(bigscreencss); 	
		jQuery.doTimeout(50,function() { jQuery('#chat_lines').scrollTop(10000)}); 
		}
	}
	
	function bigscreenOn () {
		UpdateBigscreen(); 
		
		jQuery('#chat, #live_site_player_flash, #chat_lines, #channel_viewer_count, .advertisement').addClass('bigscr');
		jQuery('body').append('<div id="big_screen_close"><a class="normal_button" id="big-toggle-close"><span style="color: #fff;">' +  TEXT_BIGSCREEN_OFF_B + '</span></a></div>'); 
		jQuery('#big_screen_close').click(function() { jQuery('#big-screen').trigger('click'); });
	}

	function bigscreenOff () {
		jQuery('#chat, #live_site_player_flash, #chat_lines, #channel_viewer_count, .advertisement').removeClass('bigscr');
		jQuery('#big_screen_close').remove();
		jQuery.doTimeout(50,function() { jQuery('#chat_lines').scrollTop(10000)}); 
	}		

///////////////////////////////// CHAT MODES
	
	function deletecheck() {
	if(deletem == 1) {
		CurrentChat.handlers.clear_chat = function(a) { if (a.target == "user") {
		jQuery('#chat_line_list .chat_from_' + a.user.replace(/[<>,]/g, '').replace(/%/g, '_')).addClass('message-deleted');}}
	}}	
	function replycheck() {
	if(reply == 1) {
		CurrentChat.insert_chat_line = function(a){if(!(this.restarting&&!this.history_ended||"chattester10"==a.sender)){var b=$("broadcast_tabs_holder");b&&TabbedView(b).notifyTab("chat",{inc:1});if("jtv"==a.sender)this.last_sender=a.sender,this.admin_message(this.format_message(a));else if(!a.is_action&&this.last_sender&&this.last_sender==a.sender&&"jtv"!=this.last_sender)this.insert_with_lock("#chat_line_list li:last",'<p class="chat_line" style="display:block;">&raquo; '+this.format_message(a)+"</p>");else{this.last_sender=a.sender;var c="";a.image_url&&(c='<a href="#" id="profile-image-link-%linkid" onclick="return false;" class="chat_viewer_thumb left"><img src="/images/redesign/chat_type_jtv.png" class="type_overlay jtv" /><img src="'+a.image_url+'" class="thumb" /></a>');b="";if((PP.login===PP.channel||"true"===PP.is_admin||"true"===PP.is_subadmin||this.staff[PP.login]||this.admins[PP.login]||this.moderators[PP.login])&&"jtv"!=a.sender&&a.sender!=PP.login)b='<a name="timeout" class="mod_button timeout" onclick="CurrentChat.timeout(\'%nickname\'); return false;" title="%timeout_title"><img src="/images/xarth/g/g18_clock-00000080.png" alt="Timeout" /></a><a name="ban" class="mod_button ban" onclick="CurrentChat.ban(\'%nickname\'); return false;" title="%ban_title"><img src="/images/xarth/g/g18_ban-00000080.png" alt="Ban" /></a><a name="unban" class="mod_button unban" onclick="CurrentChat.unban(\'%nickname\'); return false;" style="display:none;" title="%unban_title"><img src="/images/xarth/g/g18_unban-00000080.png" alt="Unban" /></a>'.replace(/\%nickname/g,a.sender),b=b.replace(/\%timeout_title/g,h_(_("Timeout %{username}"),{username:a.sender}).replace(/\"/g,"")),b=b.replace(/\%ban_title/g,h_(_("Ban %{username}"),{username:a.sender}).replace(/\"/g,"")),b=b.replace(/\%unban_title/g,h_(_("Unban %{username}"),{username:a.sender}).replace(/\"/g,""));var d=a.is_action?'<li class="line jtv chat_from_%sender"><p style="color:%color">%timestamp%modbuttons<span class="nick">%displayname</span> <span class="chat_line" style="color:%color">%message</span></p></li>':'<li class="line jtv chat_from_%sender'+(c?" pic clearfix":"")+'">'+c+'<a onClick="var msg = $(\'chat_text_input\').value; $(\'chat_text_input\').value=(msg+\'@%sender, \'); $(\'chat_text_input\').focus()" class="chat-reply" title="Reply to: %sender"/></a><p>%timestamp%tag%modbuttons<a href="#" style="color:%color" class="nick" id="%linkid">%displayname</a>:&nbsp;<span class="chat_line">%message</span></p></li>';a.timestamp=this.history_ended&&!this.show_timestamps?"":'<span class="small">'+a.timestamp+"&nbsp;</span>";var g=!1,c=unescape(a.nickname);0==c.indexOf("ign-")&&(g=!0,c=c.substr(4));var e="";if(a.tagtype)var h,e='<span class="tag %tagtype" title="%tagname">%tagname</span>&nbsp;'.replace(/\%tagtype/g,a.tagtype).replace(/\%tagname/g,a.tagname);a.pro&&(e+='<span class="tag %tagtype" title="%tagname"><a href="http://justin.tv/payment/pro_account?utm_source=link&utm_medium=pro_link&utm_campaign=chat_badge">%tagname</a></span> '.replace(/\%tagtype/g,"pro").replace(/\%tagname/g,"Pro"));a.subscriber&&(h='<span class="tag %tagtype %tagchannel" title="%tagname"><a href="/'+this.channel+'/subscribe" target="_blank">%tagname</a></span> ',e+=h.replace(/\%tagtype/g,"subscriber").replace(/\%tagname/g,"Subscriber").replace(/\%tagchannel/g,this.channel));g&&(e+='<span class="tag %tagtype" title="%tagname">%tagname</span>&nbsp;'.replace(/\%tagtype/g,"ign").replace(/\%tagname/g,"My IGN"));g="chat-line-"+Math.round(1E9*Math.random());b=d.replace(/\%modbuttons/g,b);b=b.replace(/\%tag/g,e);b=b.replace(/\%sender/g,a.sender.replace(/\%/g,"_"));b=b.replace(/\%nickname/g,unescape(a.sender));b=b.replace(/\%displayname/g,c);b=b.replace(/\%timestamp/g,a.timestamp);b=b.replace(/\%message/g,this.format_message(a));b=b.replace(/\%color/g,a.color);b=b.replace(/\%linkid/g,g);!a.is_action&&"jtv"!=a.sender?this.insert_with_lock("#chat_line_list",b,a,g):this.insert_with_lock("#chat_line_list",b)}}};
	} else {
		CurrentChat.insert_chat_line = function(a){if(!(this.restarting&&!this.history_ended||"chattester10"==a.sender)){var b=$("broadcast_tabs_holder");b&&TabbedView(b).notifyTab("chat",{inc:1});if("jtv"==a.sender)this.last_sender=a.sender,this.admin_message(this.format_message(a));else if(!a.is_action&&this.last_sender&&this.last_sender==a.sender&&"jtv"!=this.last_sender)this.insert_with_lock("#chat_line_list li:last",'<p class="chat_line" style="display:block;">&raquo; '+this.format_message(a)+"</p>");else{this.last_sender=a.sender;var c="";a.image_url&&(c='<a href="#" id="profile-image-link-%linkid" onclick="return false;" class="chat_viewer_thumb left"><img src="/images/redesign/chat_type_jtv.png" class="type_overlay jtv" /><img src="'+a.image_url+'" class="thumb" /></a>');b="";if((PP.login===PP.channel||"true"===PP.is_admin||"true"===PP.is_subadmin||this.staff[PP.login]||this.admins[PP.login]||this.moderators[PP.login])&&"jtv"!=a.sender&&a.sender!=PP.login)b='<a name="timeout" class="mod_button timeout" onclick="CurrentChat.timeout(\'%nickname\'); return false;" title="%timeout_title"><img src="/images/xarth/g/g18_clock-00000080.png" alt="Timeout" /></a><a name="ban" class="mod_button ban" onclick="CurrentChat.ban(\'%nickname\'); return false;" title="%ban_title"><img src="/images/xarth/g/g18_ban-00000080.png" alt="Ban" /></a><a name="unban" class="mod_button unban" onclick="CurrentChat.unban(\'%nickname\'); return false;" style="display:none;" title="%unban_title"><img src="/images/xarth/g/g18_unban-00000080.png" alt="Unban" /></a>'.replace(/\%nickname/g,a.sender),b=b.replace(/\%timeout_title/g,h_(_("Timeout %{username}"),{username:a.sender}).replace(/\"/g,"")),b=b.replace(/\%ban_title/g,h_(_("Ban %{username}"),{username:a.sender}).replace(/\"/g,"")),b=b.replace(/\%unban_title/g,h_(_("Unban %{username}"),{username:a.sender}).replace(/\"/g,""));var d=a.is_action?'<li class="line jtv chat_from_%sender"><p style="color:%color">%timestamp%modbuttons<span class="nick">%displayname</span> <span class="chat_line" style="color:%color">%message</span></p></li>':'<li class="line jtv chat_from_%sender'+(c?" pic clearfix":"")+'">'+c+'<p>%timestamp%tag%modbuttons<a href="#" style="color:%color" class="nick" id="%linkid">%displayname</a>:&nbsp;<span class="chat_line">%message</span></p></li>';a.timestamp=this.history_ended&&!this.show_timestamps?"":'<span class="small">'+a.timestamp+"&nbsp;</span>";var g=!1,c=unescape(a.nickname);0==c.indexOf("ign-")&&(g=!0,c=c.substr(4));var e="";if(a.tagtype)var h,e='<span class="tag %tagtype" title="%tagname">%tagname</span>&nbsp;'.replace(/\%tagtype/g,a.tagtype).replace(/\%tagname/g,a.tagname);a.pro&&(e+='<span class="tag %tagtype" title="%tagname"><a href="http://justin.tv/payment/pro_account?utm_source=link&utm_medium=pro_link&utm_campaign=chat_badge">%tagname</a></span> '.replace(/\%tagtype/g,"pro").replace(/\%tagname/g,"Pro"));a.subscriber&&(h='<span class="tag %tagtype %tagchannel" title="%tagname"><a href="/'+this.channel+'/subscribe" target="_blank">%tagname</a></span> ',e+=h.replace(/\%tagtype/g,"subscriber").replace(/\%tagname/g,"Subscriber").replace(/\%tagchannel/g,this.channel));g&&(e+='<span class="tag %tagtype" title="%tagname">%tagname</span>&nbsp;'.replace(/\%tagtype/g,"ign").replace(/\%tagname/g,"My IGN"));g="chat-line-"+Math.round(1E9*Math.random());b=d.replace(/\%modbuttons/g,b);b=b.replace(/\%tag/g,e);b=b.replace(/\%sender/g,a.sender.replace(/\%/g,"_"));b=b.replace(/\%nickname/g,unescape(a.sender));b=b.replace(/\%displayname/g,c);b=b.replace(/\%timestamp/g,a.timestamp);b=b.replace(/\%message/g,this.format_message(a));b=b.replace(/\%color/g,a.color);b=b.replace(/\%linkid/g,g);!a.is_action&&"jtv"!=a.sender?this.insert_with_lock("#chat_line_list",b,a,g):this.insert_with_lock("#chat_line_list",b)}}};
	}}
	
///////////////////////////////// DISPLAY MODES	
	function channelcheck() {
	if(channel == 1) {
		jQuery('#related_channels').fadeOut(200);
	} else {
		jQuery('#related_channels').fadeIn(500);
	}}	
	
	function tabcheck() {
	if(tab == 1) {
		jQuery('#archive_info_tabs, #archives, #about').animate({'opacity' : 0}).doTimeout(400, function() {jQuery(this).addClass('hidden')} );
	} else {
		jQuery('#archive_info_tabs, #archives, #about').animate({'opacity' : 1}).removeClass('hidden');		
	}}	
	
	function tablimitcheck() {
	if(tablimit == 1) {
		jQuery('#archives, #about').css({'overflow-y': 'scroll !important', 'height': '378px' , 'width' : '627px'});
	} else {
		jQuery('#archives, #about').css({'overflow-y': '', 'height': 'auto' , 'width' : '610px'});;
	}}
	
	function fbcheck() {
	if(fb == 1) {
		jQuery('#facebook_connect').fadeOut(200);
		jQuery('#archive_info_tabs').css('margin-top', '20px');
	} else {
		jQuery('#facebook_connect').fadeIn(500);
		jQuery('#archive_info_tabs').css('margin-top', 0);
	}}
	
///////////////////////////////// LANGUAGE FIX - (CHANGE ONLY SIZES) - ONLY POLISH AT THE MOMENT
	
	function correctpl () {
	jQuery('body').append("<style type='text/css'>#self_actions {width:271px !important;}"
	+ "#self_actions .dropmenu_left { width: 150px !important; }"
	+ "#create_account_div label, #login_div label { width: 115px !important; }"
	+ "#create_account_div .text, #login_div .text  {width: 250px !important; }"
	+ "</style>");
	}
	
///////////////////////////////// AKTUALIZACJA 
	function updatestreaminfo () {
			oldpos = jQuery('#follow_and_filters').offset().top;
			channelname = jQuery('#live_channel_name').text();
		
		//////////////// ZMIANA
			jQuery('#broadcast_title').fadeTo(500, 0.33).load('/'+channelname+' #broadcast_title', function() {
			jQuery(this).attr("id","broadcast_title-temp").fadeTo(500, 1);
			newtitle = jQuery('#broadcast_title').text();
			jQuery('#broadcast_title-temp').html(newtitle).attr("id","broadcast_title");
			
		//////////// WYS CHATU
			newpos = jQuery('#follow_and_filters').offset().top; 
			chatt = jQuery('#chat_lines').height();
			
			if	(newpos == oldpos) { return; }
			else if (newpos > oldpos) { var calcpos = newpos-oldpos; chat = chat + calcpos; chatt = chatt + calcpos; } 
			else { 	var calcpos = oldpos-newpos; chat = chat - calcpos; chatt = chatt - calcpos; }
			jQuery('#chat_lines').css({'max-height' : chatt, 'height' : chatt})
			});
		
		jQuery('#metagame').fadeTo(500, 0.33).load('/'+channelname+' #metagame', function() {
		jQuery(this).attr("id","#metagame-temp").fadeTo(500, 1);
		newtitle = jQuery('#metagame').text();
		jQuery('#metagame-temp').html(newtitle).attr("id","#metagame");
		});
	}

///////////////////////////////// PODSWIETLANIE
	function highlight () {
	
		////////// USUWANIE
		if(highldone == 1) { 
			document.body.removeChild(highlon); 
			if (nightm == 1) {document.body.removeChild(nighthighlight);}
			hlcss = "";
			nighthighlightst = "";
		};
		highldone = 1;
		
		////////// ARRAY
		nicksplit = nicks.split(',');
		nicklist = [];
			
		////////// MAKE LIST
		
		jQuery.each(nicksplit, function(nr, nick) { 
			chatfr = ' .chat_from_' + nick + ' ';
			nicklist.push(chatfr);
		})
		
		////////// NORMAL
		
		hlcss = nicklist + " { background: rgba(0, 0, 0, 0.05); border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(0, 0, 0, 0.1); padding: 5px 0 0 0 !important; }";
		highlon = document.createElement("style");
		highlon.setAttribute("type", "text/css");
		highlon.textContent = hlcss;
		document.body.appendChild(highlon); 

		////////// NIGHT
		
		nighthighlightst = nicklist + " { background: rgba(255, 255, 255, 0.075); border-top: 1px solid rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding: 5px 0 0 0 !important; }";
		nighthighlight = document.createElement("style");
		nighthighlight.setAttribute("type", "text/css");
		nighthighlight.textContent = nighthighlightst;
		if (nightm == 1) { nighton(); }
	}
	
	
	
///////////////////////////////// DZIA&#322;ANIE ///////////////////////////////// 

////////////// ALWAYS

jQuery('#header_logo').append('<span id="twe-logo">Extended</span>');

////////////// LITE

if (!jQuery('body.channel').exists()) {

	if (nightm == 1) { nightonlite(); }
	if (nightmbg == 0) { nightbgon(); }
	channelcheck();
	tabcheck();
	fbcheck();
	
	if(jQuery('body.archive.show').exists()) {tablimitcheck();}
	if(jQuery('body.popout_chat').exists()) {replycheck();}
	
	if (jQuery('#stats_and_description').exists()){
	jQuery('#stats_and_description').append('<div id="twex-panel"><div id="twex-panel-cont"><span id="twex-title">' +  TEXT_EXT_NAME + '</span>'
	+ '<div id="twex-buttons"><a class="normal_button" id="night-m-b"><span>' +  TEXT_NIGHTM_B + '</span></a>'
	+ '</div></div></div>');
	} else { jQuery('#header_search').before('<a class="normal_button" style="margin-left: 10px;" id="night-m-b"><span>' +  TEXT_NIGHTM_B + '</span></a>');	}
	
	jQuery('#night-m-b').click(function () {
		if(nightm == 0) {
		nightonlite();
		nightm = 1;
	} else {
		nightofflite();
		nightm = 0;
	}});
	};
	
	if(jQuery('html').attr('lang') == 'pl') { correctpl(); }
	
	jQuery('.glyph_only img').css({'vertical-align': 'middle'});
	
////////////// FULL



if (jQuery('body.channel').exists()) {


	///////////////////////////////// BUTTONY 
		
	jQuery('#stats_and_description').append('<div id="twex-panel"><div id="twex-panel-cont"><span id="twex-title">' + TEXT_EXT_NAME + '</span>'
	+ '<div id="twex-buttons"><a class="normal_button" id="title-refresh"><span>' + TEXT_REFRESH_B  + '</span></a>'
	+ '<a class="normal_button" id="night-m-b"><span>' +  TEXT_NIGHTM_B + '</span></a>'
	+ '<a class="normal_button" id="big-screen"><span>' +  TEXT_BIGSCREEN_B + '</span></a>'
	+ '<a class="normal_button" id="big-toggle"><span>' +  TEXT_USERDISPLAY_B + '</span></a>'
	+ '<a class="normal_button" id="tw-config"><span class="glyph_only"><img alt="' +  TEXT_TWE_IMG_ALT + '" src="http://www-cdn.jtvnw.net/images/xarth/g/g18_gear-00000080.png"></span></a>'
	+ '</div></div></div><div style="clear: both;"></div>');

	
	jQuery('.glyph_only img').css({'vertical-align': 'middle'});
	
	highlight();
	calcsize();
	deletecheck();
	channelcheck();
	tabcheck();
	fbcheck();
	replycheck();
	tablimitcheck();
	
	jQuery('#site_chat_flash').css({'position' : 'absolute', 'top' : '50', 'left' : '0', 'z-index' : '-55', 'visibility' : 'hidden'});
	
	jezyk = jQuery('html').attr('lang');
	if(jezyk == 'pl') { correctpl(); }
	jQuery('#title-refresh').click(function () { updatestreaminfo(); });

////////////// NIGHT
	
	if (nightm == 1) { nighton(); }
	if (nightmbg == 0) { nightbgon(); }
	
	jQuery('#night-m-b').click(function () {
	if(nightm == 0) {
		nighton();
		nightm = 1;
	} else {
		nightoff();
		nightm = 0;
	}});
		
///////////////////////////////// USTAWIENIA ///////////////////////////////// 

	jQuery('#tw-config').toggle(function () {
		
		jQuery('#stats_and_description').after(''
		+ '<div id="config-div" class="bottomround" style="display: none"><p class="config-title">' +  TEXT_EXT_NAME + ' ' +  TEXT_EXT_VER + '</p>'
/////////////////// DONATE
		+ '<div id="twedonate">' +  TEXT_DONATE  + ''
		+ '<div class="cright"><form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHPwYJKoZIhvcNAQcEoIIHMDCCBywCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBeGLqY664SPNknNJgWlAYk1Z1RoaEo3fm7Wn+hHtke1P2txwnzoGpQ1XfLLhfZQW/FfwQZQ0xcBULXb6fALQf6WrtcRKnyme1yud+Ni2a+NeIAVQToEUvTbchUTisPipqZj/81Rcooe0g5t2/uA1tYoHdxCxkdsRVFlltRI0OF/zELMAkGBSsOAwIaBQAwgbwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIB7mxvK0SriOAgZjH/oIA5JMESpXie63nFXetnnd1JD9tX64jOw5scOMi/aUnVwMiE0wfbaqCAVwpXIW2SWfAE7xySudHBHSYqrszEYDUvGtH+oxnIIlBmpR1FBAged1t5ZX9frNl5gIEBxidXs/WAZrZObK0pqR7m8q/vR2nk9n9hS5HqVtbPiuZJipdKa8m1wRmL6+y+6lSXZol/o5u6b+ckKCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTEyMTEwMzEyMDY1MlowIwYJKoZIhvcNAQkEMRYEFGR+V/cF28qUzcaJorErrnCJtCSSMA0GCSqGSIb3DQEBAQUABIGAvC9lGb1vJXhfpfYKFvx/hmN9BFqu05w+lF3S2QlTcHROBn84fHGBnW1Lhccg0m8OiQ6XRblA+93se/6MUjTm5IR3QE63QJ+s10UxXUUDEJGH+Y4N0oK/q9aG0acvRpbtahGU5N0xgZ7di2MOTYQ+AAWWPWsa39izSomJy5VyCUI=-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal � The safer, easier way to pay online."><img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1"></form>'
		+ '</div></div>'		
/////////////////// NIGHT
		+ '<p class="config-sub">' +  TEXT_NIGHTM_HEAD + '</p>'
		+ '<p class="config-option">' +  TEXT_NIGHTM_TITLE + ' '
		+ '<a class="switch cright" id="night-m"><span class="option1">ON</span><span class="option2">OFF</span><span id="night-slider" class="slider"></span></a></p>'
/////////////////// NIGHT BG
		+ '<p class="config-option margin">' +  TEXT_NIGHTM_BG + ' '
		+ '<a class="switch cright" id="night-m-bg"><span class="option1">YES</span><span class="option2">NO</span><span id="night-slider-bg" class="slider"></span></a></p>'
/////////////////// WIADOMOSCI
		+ '<p class="config-sub">' +  TEXT_CHAT_HEAD + '</p>'
		+ '<p class="config-option">' +  TEXT_CHAT_DELETED + ' '
		+ '<a class="switch cright" id="deletem-button"><span class="option1">YES</span><span class="option2">NO</span><span id="deletem-slider" class="slider"></span></a></p>'
/////////////////// ODPOWIED&#378;
		+ '<p class="config-option">' +  TEXT_CHAT_REPLY + ' '
		+ '<a class="switch cright" id="reply-button"><span class="option1">YES</span><span class="option2">NO</span><span id="reply-slider" class="slider"></span></a></p>'
/////////////////// WYROZNIANIE
		+ '<p class="config-option">' +  TEXT_CHAT_HIGHLIGHT + ''
		+ '<div id="nicks-div"><input autocomplete="off" class="text leftround" id="nicks-list" placeholder="Input nicks here" type="text" value="'+nicks+'">'
		+ '<button class="primary_button" id="nicks-apply" type="submit"><span>Apply</span></button></div>'
/////////////////// UKRYWANIE POLECANE KANA&#322;Y
		+ '<p class="config-sub">' +  TEXT_DISP_HEAD + '</p>'
		+ '<p class="config-option">' +  TEXT_DISP_SUGCHANN + ''
		+ '<a class="switch cright" id="channels-button"><span class="option1">YES</span><span class="option2">NO</span><span id="channels-slider" class="slider"></span></a></p>'
/////////////////// UKRYWANIE ZAKLADEK
		+ '<p class="config-option">' +  TEXT_DISP_TABS + ''
		+ '<a class="switch cright" id="tabs-button"><span class="option1">YES</span><span class="option2">NO</span><span id="tabs-slider" class="slider"></span></a></p>'
/////////////////// ZAKLADKI ROZMIAR
		+ '<p class="config-option margin">' +  TEXT_DISP_TABS_LIMIT + ''
		+ '<a class="switch cright" id="tabheight"><span class="option1">YES</span><span class="option2">NO</span><span id="tabheight-slider" class="slider"></span></a></p>'
/////////////////// UKRYWANIE FACEBOOKA
		+ '<p class="config-option">' +  TEXT_DISP_FB + ' '
		+ '<a class="switch cright" id="fb-button"><span class="option1">YES</span><span class="option2">NO</span><span id="fb-slider" class="slider"></span></a></p>'
///////////////////  BIG SCREEN
		+ '<p class="config-sub">' +  TEXT_BIGSCR_HEAD + '</p>'
		+ '<p class="config-option">' +  TEXT_BIGSCR_CHATW + ''
		+ '<span class="segmented_buttons cright"><button class="leftround primary_button" id="bschats-m"><span class="glyph_only">-</span></button>'
		+ '<a class="normal_button"><span id="bschats">loading</span></a>'
		+ '<button class="rightround primary_button" id="bschats-p"><span class="glyph_only">+</span></button></span></p>'
///////////////////  ROZMIAR
		+ '<p class="config-sub">' +  TEXT_USERD_HEAD + '</p>'
		+ '<p class="config-option">' +  TEXT_USERD_FLASH + ''
		+ '<span class="segmented_buttons cright"><button class="leftround primary_button" id="vsize-m"><span class="glyph_only">-</span></button>'
		+ '<a class="normal_button"><span id="vsize">loading</span></a>'
		+ '<button class="rightround primary_button" id="vsize-p"><span class="glyph_only">+</span></button></span></p>'
///////////////////  SZEROKOSC CHATU
		+ '<p class="config-option">' +  TEXT_USERD_CHATW + ''
		+ '<span class="segmented_buttons cright"><button class="leftround primary_button" id="chats-m"><span class="glyph_only">-</span></button>'
		+ '<a class="normal_button"><span id="chats">loading</span></a>'
		+ '<button class="rightround primary_button" id="chats-p"><span class="glyph_only">+</span></button></span></p>'
///////////////////  POZYCJA CHATU
		+ '<p class="config-option">' +  TEXT_USERD_CHATPOS + ''
		+ '<span class="segmented_buttons cright"><button class="leftround primary_button" id="chatright-m"><span class="glyph_only">-</span></button>'
		+ '<a class="normal_button"><span id="chatr">loading</span></a>'
		+ '<button class="rightround primary_button" id="chatright-p"><span class="glyph_only">+</span></button></span></p>'
///////////////////  POZYCJA ODTWARZACZA
		+ '<p class="config-option">' +  TEXT_USERD_FLASHPOS + ''
		+ '<span class="segmented_buttons cright"><button class="leftround primary_button" id="playerleft-m"><span class="glyph_only">-</span></button>'
		+ '<a class="normal_button"><span id="playerl">loading</span></a>'
		+ '<button class="rightround primary_button" id="playerleft-p"><span class="glyph_only">+</span></button></span></p>'
/////////////////// BUTTONY
		+ '<p class="apply-clear"><a class="normal_button" id="apply"><span>' +  TEXT_CFG_APPLY + '</span></a><a class="normal_button" id="clear" style="float: right"><span>' +  TEXT_CFG_CLEAR_B + '</span></a></p>'
		+ '</div>');
		
		
		jQuery('#config-div').slideDown(400);
		
///////////////////////////////// STATUSY	
	
	jQuery('#vsize').html(mnoznik.toFixed(2));
	jQuery('#chatr').html(chatright +'px');
	jQuery('#playerl').html(playerleft +'px');
	jQuery('#chats').html(chatsize +'px');
	jQuery('#bschats').html(bigscreenchatsize +'px');
	
///////////////////////////////// NIGHTMODE

	jQuery('#night-m').toggle(function () {
		jQuery('#night-slider').css({'left' : 'auto', 'right' : '0'});
		nighton();
		nightm = 1;
	}, function () {
		jQuery('#night-slider').css({'left' : '0', 'right' : 'auto'});		
		nightoff();
		nightm = 0;
	});
	
		if (nightm == 1) { jQuery('#night-m').trigger('click'); }
		
///////////////////////////////// NIGHTMODE BG

	jQuery('#night-m-bg').toggle(function () {
		jQuery('#night-slider-bg').css({'left' : 'auto', 'right' : '0'});
		nightbgoff();
		nightmbg = 1;
		storage('nightmbg', 1);
	}, function () {
		jQuery('#night-slider-bg').css({'left' : '0', 'right' : 'auto'});		
		nightbgon();
		nightmbg = 0;
		storage('nightmbg', 0);
	});
	
		if (nightmbg == 1) { jQuery('#night-m-bg').trigger('click'); }

///////////////////////////////// ANULOWANIE USUWANIA WIADOMOSCI

	jQuery('#deletem-button').toggle(function () {
		jQuery('#deletem-slider').css({'left' : 'auto', 'right' : '0'});
		deletem = 1;
		deletecheck();
		storage('deletem', deletem);
	}, function () {
		jQuery('#deletem-slider').css({'left' : '0', 'right' : 'auto'});		
		deletem = 0;
		deletecheck();
		storage('deletem', deletem);
	});
	
		if (deletem == 1) { jQuery('#deletem-button').trigger('click'); }		
		
///////////////////////////////// SZYBKA ODPOWIEDZ

	jQuery('#reply-button').toggle(function () {
		jQuery('#reply-slider').css({'left' : 'auto', 'right' : '0'});
		reply = 1;
		replycheck();
		storage('reply', reply);
	}, function () {
		jQuery('#reply-slider').css({'left' : '0', 'right' : 'auto'});		
		reply = 0;
		replycheck();
		storage('reply', reply);
	});
	
	
		if (reply == 1) { jQuery('#reply-button').trigger('click'); }		

///////////////////////////////// WYROZNIANIE
		
	jQuery('#nicks-apply').click(function () {
		nicks = jQuery('#nicks-list').val();
		storage('nicks',nicks);
		highlight();
	});
	

///////////////////////////////// SUGEROWANE KANA&#322;Y

	jQuery('#channels-button').toggle(function () {
		jQuery('#channels-slider').css({'left' : 'auto', 'right' : '0'});
		channel = 1;
		channelcheck();
		storage('channel', channel);
	}, function () {
		jQuery('#channels-slider').css({'left' : '0', 'right' : 'auto'});		
		channel = 0;
		channelcheck();
		storage('channel', channel);
	});
	
		if (channel == 1) { jQuery('#channels-button').trigger('click'); }	
		
///////////////////////////////// TABS

	jQuery('#tabs-button').toggle(function () {
		jQuery('#tabs-slider').css({'left' : 'auto', 'right' : '0'});
		tab = 1;
		tabcheck();
		storage('tab', tab);
	}, function () {
		jQuery('#tabs-slider').css({'left' : '0', 'right' : 'auto'});		
		tab = 0;
		tabcheck();
		storage('tab', tab);
	});
	
		if (tab == 1) { jQuery('#tabs-button').trigger('click'); }		
		
///////////////////////////////// TABS SIZE

	jQuery('#tabheight').toggle(function () {
		jQuery('#tabheight-slider').css({'left' : 'auto', 'right' : '0'});
		tablimit = 1;
		tablimitcheck();
		storage('tablimit', 1);
	}, function () {
		jQuery('#tabheight-slider').css({'left' : '0', 'right' : 'auto'});	
		tablimit = 0;		
		tablimitcheck();
		storage('tablimit', 0);
	});
	
		if (tablimit == 1) { jQuery('#tabheight').trigger('click'); }		
		
///////////////////////////////// FB

	jQuery('#fb-button').toggle(function () {
		jQuery('#fb-slider').css({'left' : 'auto', 'right' : '0'});
		fb = 1;
		fbcheck();
		storage('fb', fb);
	}, function () {
		jQuery('#fb-slider').css({'left' : '0', 'right' : 'auto'});		
		fb = 0;
		fbcheck();
		storage('fb', fb);
	});
	
		if (fb == 1) { jQuery('#fb-button').trigger('click'); }	
		
///////////////////////////////// SZEROKOSC CHATU W BIG SCREEN
	
	jQuery('#bschats-p').click(function () {
		bigscreenchatsize = bigscreenchatsize+10;
		jQuery('#bschats').html(bigscreenchatsize+'px');
		
		storage('bigscreenchatsize', bigscreenchatsize);
	});
	
	jQuery('#bschats-m').click(function () {
		if(bigscreenchatsize == 100) {return}
		bigscreenchatsize = bigscreenchatsize-10;
		jQuery('#bschats').html(bigscreenchatsize+'px');
		
		storage('bigscreenchatsize', bigscreenchatsize);
	});	
	
///////////////////////////////// ROZMIAR ODTWARZACZA
	
	jQuery('#vsize-p').click(function () {
		mnoznik = mnoznik+0.05;
		jQuery('#vsize').html(mnoznik.toFixed(2));
		
		storage('mnoznik', mnoznik);
	});
	
	jQuery('#vsize-m').click(function () {
		mnoznik = mnoznik-0.05;
		jQuery('#vsize').html(mnoznik.toFixed(2));
		
		storage('mnoznik', mnoznik);
	});
	
///////////////////////////////// SZEROKOSC CHATU
	
	jQuery('#chats-p').click(function () {
		chatsize = chatsize+10;
		jQuery('#chats').html(chatsize+'px');
		
		storage('chatsize', chatsize);
	});
	
	jQuery('#chats-m').click(function () {
		if(chatsize == 100) {return}
		chatsize = chatsize-10;
		jQuery('#chats').html(chatsize+'px');
		
		storage('chatsize', chatsize);
	});


///////////////////////////////// POZYCJE CHATU I ODTWARZACZA
	
	jQuery('#chatright-p').click(function () {
		chatright = chatright+10;
		jQuery('#chatr').html(chatright+'px');
		storage('chatright', chatright);
	});	
	jQuery('#chatright-m').click(function () {
		chatright = chatright-10;
		jQuery('#chatr').html(chatright+'px');
		storage('chatright', chatright);
	});
	
	jQuery('#playerleft-p').click(function () {
		playerleft = playerleft+10;
		jQuery('#playerl').html(playerleft+'px');
		storage('playerleft', playerleft);
	});	
	jQuery('#playerleft-m').click(function () {
		playerleft = playerleft-10;
		jQuery('#playerl').html(playerleft+'px');
		storage('playerleft', playerleft);
	});	
	
///////////////////////////////// AKTUALIZACJA USTAWIEN
	
	jQuery('#apply').click(function () {
		calcsize();
		if (big == 1) {
		sizenormal();
		jQuery.doTimeout(500, function () {
		sizebig(); });
		};
	});	
	
///////////////////////////////// CZYSZCZENIE USTAWIEN
	
	jQuery('#clear').click(function () {
	var alert=window.confirm(TEXT_CLEAR_Q)
	if (alert) { localStorage.clear(); 	document.location.reload(true); } else { window.alert(TEXT_CLEAR_D); }
	});
	
	
	}, function () {
		jQuery('#config-div').slideUp(400);		
	});


	
///////////////////////////////// ZMIANA ROZMIARU	
	
	jQuery('#big-toggle').toggle(function () {
		sizebig();
		big = 1;
	}, function () {
		sizenormal();
		big = 0;
	});	

///////////////////////////////// BIG SCREEN
	
	jQuery('#big-screen').toggle(function () {
		bigscreenOn();
		bigscreen = 1;
	}, function () {
		bigscreenOff();
		bigscreen = 0;
	});

	
	
	
	}

	
	
	
	/////END
	}

	
	
})(jQuery);	
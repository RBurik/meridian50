function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
  
testWebP(function (support) {
  
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});;
(function(e){e.fn.ddslick=function(l){if(c[l]){return c[l].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof l==="object"||!l){return c.init.apply(this,arguments)}else{e.error("Method "+l+" does not exists.")}}};var c={},d={data:[],keepJSONItemsOnTop:false,width:260,height:null,background:"#eee",selectText:"",defaultSelectedIndex:null,truncateDescription:true,imagePosition:"left",showSelectedHTML:true,clickOffToClose:true,embedCSS:true,onSelected:function(){}},i='<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>',a='<ul class="dd-options"></ul>',b='<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>';c.init=function(l){var l=e.extend({},d,l);if(e("#css-ddslick").length<=0&&l.embedCSS){e(b).appendTo("head")}return this.each(function(){var p=e(this),q=p.data("ddslick");if(!q){var n=[],o=l.data;p.find("option").each(function(){var w=e(this),v=w.data();n.push({text:e.trim(w.text()),value:w.val(),selected:w.is(":selected"),description:v.description,imageSrc:v.imagesrc})});if(l.keepJSONItemsOnTop){e.merge(l.data,n)}else{l.data=e.merge(n,l.data)}var m=p,s=e('<div id="'+p.attr("id")+'"></div>');p.replaceWith(s);p=s;p.addClass("dd-container").append(i).append(a);var n=p.find(".dd-select"),u=p.find(".dd-options");u.css({width:l.width});n.css({width:l.width,background:l.background});p.css({width:l.width});if(l.height!=null){u.css({height:l.height,overflow:"auto"})}e.each(l.data,function(v,w){if(w.selected){l.defaultSelectedIndex=v}u.append('<li><a class="dd-option">'+(w.value?' <input class="dd-option-value" type="hidden" value="'+w.value+'" />':"")+(w.imageSrc?' <img class="dd-option-image'+(l.imagePosition=="right"?" dd-image-right":"")+'" src="'+w.imageSrc+'" />':"")+(w.text?' <label class="dd-option-text">'+w.text+"</label>":"")+(w.description?' <small class="dd-option-description dd-desc">'+w.description+"</small>":"")+"</a></li>")});var t={settings:l,original:m,selectedIndex:-1,selectedItem:null,selectedData:null};p.data("ddslick",t);if(l.selectText.length>0&&l.defaultSelectedIndex==null){p.find(".dd-selected").html(l.selectText)}else{var r=(l.defaultSelectedIndex!=null&&l.defaultSelectedIndex>=0&&l.defaultSelectedIndex<l.data.length)?l.defaultSelectedIndex:0;j(p,r)}p.find(".dd-select").on("click.ddslick",function(){f(p)});p.find(".dd-option").on("click.ddslick",function(){j(p,e(this).closest("li").index())});if(l.clickOffToClose){u.addClass("dd-click-off-close");p.on("click.ddslick",function(v){v.stopPropagation()});e("body").on("click",function(){e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")})}}})};c.select=function(l){return this.each(function(){if(l.index!==undefined){j(e(this),l.index)}})};c.open=function(){return this.each(function(){var m=e(this),l=m.data("ddslick");if(l){f(m)}})};c.close=function(){return this.each(function(){var m=e(this),l=m.data("ddslick");if(l){k(m)}})};c.destroy=function(){return this.each(function(){var n=e(this),m=n.data("ddslick");if(m){var l=m.original;n.removeData("ddslick").unbind(".ddslick").replaceWith(l)}})};function j(q,s){var u=q.data("ddslick");var r=q.find(".dd-selected"),n=r.siblings(".dd-selected-value"),v=q.find(".dd-options"),l=r.siblings(".dd-pointer"),p=q.find(".dd-option").eq(s),m=p.closest("li"),o=u.settings,t=u.settings.data[s];q.find(".dd-option").removeClass("dd-option-selected");p.addClass("dd-option-selected");u.selectedIndex=s;u.selectedItem=m;u.selectedData=t;if(o.showSelectedHTML){r.html((t.imageSrc?'<img class="dd-selected-image'+(o.imagePosition=="right"?" dd-image-right":"")+'" src="'+t.imageSrc+'" />':"")+(t.text?'<label class="dd-selected-text">'+t.text+"</label>":"")+(t.description?'<small class="dd-selected-description dd-desc'+(o.truncateDescription?" dd-selected-description-truncated":"")+'" >'+t.description+"</small>":""))}else{r.html(t.text)}n.val(t.value);u.original.val(t.value);q.data("ddslick",u);k(q);g(q);if(typeof o.onSelected=="function"){o.onSelected.call(this,u)}}function f(p){var o=p.find(".dd-select"),m=o.siblings(".dd-options"),l=o.find(".dd-pointer"),n=m.is(":visible");e(".dd-click-off-close").not(m).slideUp(50);e(".dd-pointer").removeClass("dd-pointer-up");if(n){m.slideUp("fast");l.removeClass("dd-pointer-up")}else{m.slideDown("fast");l.addClass("dd-pointer-up")}h(p)}function k(l){l.find(".dd-options").slideUp(50);l.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")}function g(o){var n=o.find(".dd-select").css("height");var m=o.find(".dd-selected-description");var l=o.find(".dd-selected-image");if(m.length<=0&&l.length>0){o.find(".dd-selected-text").css("lineHeight",n)}}function h(l){l.find(".dd-option").each(function(){var p=e(this);var n=p.css("height");var o=p.find(".dd-option-description");var m=l.find(".dd-option-image");if(o.length<=0&&m.length>0){p.find(".dd-option-text").css("lineHeight",n)}})}})(jQuery);;
/*! WOW - v1.1.0 - 2015-04-04
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);;

let russian = `<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 473.68 473.68" style="enable-background:new 0 0 473.68 473.68;" xml:space="preserve">
<circle style="fill:#FFFFFF;" cx="236.85" cy="236.849" r="236.83"/>
<path style="fill:#2B479D;" d="M460.143,157.873H314.218c6.339,50.593,6.376,106.339,0.123,156.995h146.113
	c8.53-24.438,13.219-50.682,13.219-78.026C473.677,209.139,468.879,182.573,460.143,157.873z"/>
<path style="fill:#EFECEC;" d="M314.218,157.873H460.14c-0.022-0.075-0.045-0.138-0.075-0.206
	C429.756,72.2,351.785,9.319,258.105,0.972C294.361,20.844,304.951,83.804,314.218,157.873z"/>
<path style="fill:#E63026;" d="M258.113,472.697c93.848-8.362,171.927-71.46,202.12-157.156c0.079-0.228,0.146-0.453,0.228-0.673
	H314.345C305.149,389.338,294.514,452.742,258.113,472.697z"/>
<path style="fill:#3757A6;" d="M0,236.841c0,27.348,4.697,53.588,13.219,78.026h313.313c6.26-50.66,6.215-106.402-0.116-156.995
	H13.534C4.798,182.573,0,209.139,0,236.841z"/>
<path style="fill:#EFEFEF;" d="M13.608,157.668c-0.022,0.067-0.045,0.131-0.075,0.206h312.883
	c-9.274-74.07-32.056-137.029-68.307-156.901c-7.012-0.621-14.102-0.972-21.274-0.972C133.806,0,46.191,65.801,13.608,157.668z"/>
<path style="fill:#E73B36;" d="M326.532,314.867H13.219c0.079,0.221,0.153,0.445,0.228,0.673
	C45.9,407.642,133.641,473.676,236.835,473.676c7.173,0,14.263-0.352,21.274-0.98C294.514,452.742,317.336,389.338,326.532,314.867z
	"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

let uk = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 473.68 473.68" style="enable-background:new 0 0 473.68 473.68;" xml:space="preserve">
<g>
	<path style="fill:#29337A;" d="M41.712,102.641c-15.273,22.168-26.88,47.059-33.918,73.812h107.734L41.712,102.641z"/>
	<path style="fill:#29337A;" d="M170.511,9.48c-27.288,7.947-52.56,20.628-74.814,37.168l74.814,74.814V9.48z"/>
	<path style="fill:#29337A;" d="M101.261,430.982c20.874,14.607,44.195,25.915,69.25,33.211v-102.45L101.261,430.982z"/>
	<path style="fill:#29337A;" d="M10.512,306.771c7.831,25.366,19.831,48.899,35.167,69.833l69.833-69.833H10.512z"/>
</g>
<g>
	<path style="fill:#FFFFFF;" d="M45.619,97.144c-1.324,1.81-2.629,3.646-3.908,5.501l73.816,73.812H7.793
		c-1.746,6.645-3.171,13.418-4.345,20.284h141.776L45.619,97.144z"/>
	<path style="fill:#FFFFFF;" d="M95.767,427.074c1.802,1.343,3.654,2.621,5.493,3.908l69.25-69.242v102.45
		c6.653,1.945,13.41,3.624,20.284,4.974V332.05L95.767,427.074z"/>
	<path style="fill:#FFFFFF;" d="M5.25,286.487c1.47,6.873,3.205,13.642,5.258,20.284h105.001l-69.833,69.833
		c7.595,10.377,16.017,20.115,25.168,29.12L190.08,286.487H5.25L5.25,286.487z"/>
	<path style="fill:#FFFFFF;" d="M170.511,9.48v111.982l-74.815-74.81c-10.314,7.67-19.955,16.185-28.888,25.403l123.983,123.983
		V4.506C183.921,5.864,177.164,7.547,170.511,9.48z"/>
</g>
<g>
	<polygon style="fill:#D32030;" points="170.511,306.056 169.8,306.771 170.511,306.771 	"/>
	<polygon style="fill:#D32030;" points="190.084,286.487 190.794,286.487 190.794,285.773 	"/>
	<polygon style="fill:#D32030;" points="281.229,196.737 280.545,196.737 280.545,197.425 	"/>
	<polygon style="fill:#D32030;" points="171.21,176.457 170.511,175.754 170.511,176.457 	"/>
	<polygon style="fill:#D32030;" points="190.794,196.037 190.794,196.737 191.494,196.737 	"/>
</g>
<g>
	<path style="fill:#252F6C;" d="M300.825,411.764v53.091c25.381-7.105,49.045-18.305,70.211-32.897l-57.526-57.526
		C308.913,390.583,307.231,398.933,300.825,411.764z"/>
	<path style="fill:#252F6C;" d="M313.812,108.471l62.799-62.799C354.05,29.15,328.456,16.559,300.824,8.818v54.538
		C308.21,78.146,308.831,89.384,313.812,108.471z"/>
	<path style="fill:#252F6C;" d="M427.029,377.984c15.815-21.275,28.141-45.29,36.147-71.213h-107.36L427.029,377.984z"/>
	<path style="fill:#252F6C;" d="M465.887,176.457c-7.188-27.318-19.143-52.676-34.898-75.192l-75.2,75.192H465.887z"/>
</g>
<g>
	<path style="fill:#E7E7E7;" d="M327.638,290.5l16.275,16.275l77.903,77.903c1.769-2.214,3.526-4.42,5.217-6.69l-71.213-71.213
		h107.36c2.046-6.638,3.784-13.41,5.25-20.284H329.16C328.932,289.367,327.911,287.643,327.638,290.5z"/>
	<path style="fill:#E7E7E7;" d="M311.352,120.348l70.607-70.615c-1.769-1.372-3.541-2.737-5.348-4.061l-62.799,62.799
		C314.463,110.954,310.746,117.805,311.352,120.348z"/>
	<path style="fill:#E7E7E7;" d="M300.825,58.992V8.814c-6.645-1.862-13.41-3.44-20.284-4.727v24.476
		C288.088,36.745,294.853,47.022,300.825,58.992z"/>
	<path style="fill:#E7E7E7;" d="M326.041,196.737h144.195c-1.171-6.866-2.599-13.635-4.345-20.284H355.793l75.2-75.192
		C423.6,90.7,415.384,80.768,406.409,71.565l-84.702,84.694C323.988,171.622,325.009,180.544,326.041,196.737z"/>
	<path style="fill:#E7E7E7;" d="M310.088,371.002l60.952,60.959c10.138-6.982,19.685-14.753,28.593-23.189l-80.173-80.177
		C316.901,343.423,313.865,357.745,310.088,371.002z"/>
	<path style="fill:#E7E7E7;" d="M280.545,442.301v27.28c6.873-1.279,13.635-2.865,20.284-4.727v-53.091
		C294.853,423.738,288.088,434.13,280.545,442.301z"/>
</g>
<path style="fill:#D71F28;" d="M321.707,156.259l84.694-84.694c-7.625-7.831-15.8-15.119-24.446-21.832l-66.55,66.561
	C318.363,128.657,319.706,142.808,321.707,156.259z"/>
<g>
	<path style="fill:#D32030;" d="M225.019,0.292C228.965,0.101,232.899,0,236.836,0C232.876,0,228.935,0.101,225.019,0.292z"/>
	<path style="fill:#D32030;" d="M236.836,473.68c-3.938,0-7.872-0.108-11.81-0.299C228.942,473.579,232.876,473.68,236.836,473.68z"
		/>
	<path style="fill:#D32030;" d="M236.836,473.68c14.943,0,29.535-1.447,43.708-4.099v-27.28
		C268.103,455.786,253.549,473.68,236.836,473.68z"/>
</g>
<g>
	<path style="fill:#D71F28;" d="M470.232,196.737H327.911c1.885,29.704,1.657,60.249-0.681,89.75h141.2
		c3.418-16.017,5.25-32.613,5.25-49.643C473.68,223.164,472.461,209.784,470.232,196.737z"/>
	<path style="fill:#D71F28;" d="M327.638,290.5c-1.316,13.994-5.901,24.898-8.182,38.099l80.173,80.173
		c7.932-7.517,15.347-15.557,22.183-24.094l-77.9-77.907L327.638,290.5z"/>
</g>
<path style="fill:#D32030;" d="M280.545,30.324V4.091C266.376,1.447,251.784,0,236.836,0C253.549,0,268.103,16.843,280.545,30.324z"
	/>
<g>
	<path style="fill:#29337A;" d="M300.825,422.007c6.406-12.834,11.899-27.609,16.499-43.757l-16.499-16.499V422.007z"/>
	<path style="fill:#29337A;" d="M319.377,102.906c-4.989-19.087-11.166-36.439-18.552-51.229v69.773L319.377,102.906z"/>
</g>
<g>
	<path style="fill:#FFFFFF;" d="M332.234,295.092c0.269-2.857,0.512-5.725,0.744-8.605h-9.349L332.234,295.092z"/>
	<path style="fill:#FFFFFF;" d="M300.825,121.451V51.674c-5.976-11.97-12.737-22.254-20.284-30.429v129.906l40.735-40.735
		c-0.613-2.543-1.257-5.034-1.9-7.517L300.825,121.451z"/>
	<path style="fill:#FFFFFF;" d="M281.229,196.737h52.429c-1.028-16.192-2.666-32.123-4.944-47.482L281.229,196.737z"/>
	<path style="fill:#FFFFFF;" d="M280.545,452.432c7.547-8.182,14.308-18.459,20.284-30.429v-60.256l16.499,16.499
		c3.784-13.264,6.959-27.434,9.525-42.261l-46.307-46.304L280.545,452.432L280.545,452.432z"/>
</g>
<path style="fill:#E51D35;" d="M280.545,452.432V289.681l46.304,46.307c2.277-13.205,4.069-26.899,5.381-40.896l-8.605-8.605h9.349
	c2.337-29.502,2.565-60.047,0.681-89.75h-52.429l47.482-47.482c-2.001-13.455-4.476-26.469-7.434-38.836l-40.728,40.735V21.248
	C268.103,7.763,253.549,0,236.836,0c-3.938,0-7.872,0.101-11.817,0.292c-11.649,0.583-23.073,2.016-34.225,4.215v191.531
	L66.808,72.055c-7.618,7.861-14.704,16.237-21.189,25.089l79.313,79.313l20.291,20.284H3.448C1.227,209.784,0,223.164,0,236.844
	c0,17.034,1.84,33.626,5.25,49.643h184.834L70.847,405.724c7.808,7.67,16.121,14.813,24.921,21.349l95.023-95.023v137.116
	c11.151,2.199,22.583,3.631,34.232,4.215c3.938,0.191,7.872,0.299,11.81,0.299C253.549,473.68,268.103,465.917,280.545,452.432z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;

// Dropdown select

var language = [
  {
      text: "",
      value: 1,
      selected: true,
      description: "",
      imageSrc: russian
  },
  {
      text: "",
      value: 2,
      selected: false,
      description: "",
      imageSrc: uk
  },
];

$('.select-language').ddslick({
  data: language,
  width: '5rem',
  selectText: "Select your preferred social network",
  imagePosition:"right",
  onSelected: function(selectedData){
      //callback function: do something with selectedData;
  }   
});

$(document).ready(function() {
  // wow.js
  new WOW().init();


  // active .nav-item
  $('.nav-item').eq(3).addClass('nav-item-active')

  // Popup
  $('.toContact').on("click", function() {
    var $pp = $('.popup');
    $pp.addClass('popup-active');
    $('html').addClass('fixed-page');
    $(document).mouseup(function (e){ // событие клика по веб-документу
      if (!$pp.is(e.target) // если клик был не по нашему блоку
          && $pp.has(e.target).length === 0) { // и не по его дочерним элементам
        $pp.removeClass('popup-active');
        $('html').removeClass('fixed-page');
      }
    })
  })
  $('.popup-escape').on("click", function() {
    var $pp = $('.popup');
    $pp.removeClass('popup-active');
    $('html').removeClass('fixed-page');
  })
})
(function(A,L){typeof exports=="object"&&typeof module!="undefined"?L(exports,require("jquery")):typeof define=="function"&&define.amd?define(["exports","jquery"],L):(A=typeof globalThis!="undefined"?globalThis:A||self,L(A.layer={},A.jQuery))})(this,function(A,L){"use strict";var z=window.layui&&layui.define,c,h,s={getPath:function(){var e=document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"?document.currentScript.src:function(){for(var n=document.getElementsByTagName("script"),i=n.length-1,a,o=i;o>0;o--)if(n[o].readyState==="interactive"){a=n[o].src;break}return a||n[i].src}(),t=window.LAYUI_GLOBAL||{};return t.layer_dir||e.substring(0,e.lastIndexOf("/")+1)}(),config:{removeFocus:!0},end:{},beforeEnd:{},events:{resize:{}},minStackIndex:0,minStackArr:[],btn:["\u786E\u5B9A","\u53D6\u6D88"],type:["dialog","page","iframe","loading","tips"],getStyle:function(e,t){var n=e.currentStyle?e.currentStyle:window.getComputedStyle(e,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](t)},link:function(e,t,n){if(r.path){var i=document.getElementsByTagName("head")[0],a=document.createElement("link");typeof t=="string"&&(n=t);var o=(n||e).replace(/\.|\//g,""),d="layuicss-"+o,l="creating",f=0;a.rel="stylesheet",a.href=r.path+e,a.id=d,document.getElementById(d)||i.appendChild(a),typeof t=="function"&&function y(b){var v=100,p=document.getElementById(d);if(++f>10*1e3/v)return window.console&&console.error(o+".css: Invalid");parseInt(s.getStyle(p,"width"))===1989?(b===l&&p.removeAttribute("lay-status"),p.getAttribute("lay-status")===l?setTimeout(y,v):t()):(p.setAttribute("lay-status",l),setTimeout(function(){y(l)},v))}()}}},r={v:"3.7.0",ie:function(){var e=navigator.userAgent.toLowerCase();return window.ActiveXObject||"ActiveXObject"in window?(e.match(/msie\s(\d+)/)||[])[1]||"11":!1}(),index:window.layer&&window.layer.v?1e5:0,path:s.getPath,config:function(e,t){return e=e||{},r.cache=s.config=c.extend({},s.config,e),r.path=s.config.path||r.path,typeof e.extend=="string"&&(e.extend=[e.extend]),s.config.path&&r.ready(),e.extend?(z?layui.addcss("modules/layer/"+e.extend):s.link("css/"+e.extend),this):this},ready:function(e){var t="layer",n="",i=(z?"modules/":"css/")+"layer.css?v="+r.v+n;return z?layui["layui.all"]?typeof e=="function"&&e():layui.addcss(i,e,t):s.link(i,e,t),this},alert:function(e,t,n){var i=typeof t=="function";return i&&(n=t),r.open(c.extend({content:e,yes:n},i?{}:t))},confirm:function(e,t,n,i){var a=typeof t=="function";return a&&(i=n,n=t),r.open(c.extend({content:e,btn:s.btn,yes:n,btn2:i},a?{}:t))},msg:function(e,t,n){var i=typeof t=="function",a=s.config.skin,o=(a?a+" "+a+"-msg":"")||"layui-layer-msg",d=u.anim.length-1;return i&&(n=t),r.open(c.extend({content:e,time:3e3,shade:!1,skin:o,title:!1,closeBtn:!1,btn:!1,resize:!1,end:n,removeFocus:!1},i&&!s.config.skin?{skin:o+" layui-layer-hui",anim:d}:function(){return t=t||{},(t.icon===-1||t.icon===void 0&&!s.config.skin)&&(t.skin=o+" "+(t.skin||"layui-layer-hui")),t}()))},load:function(e,t){return r.open(c.extend({type:3,icon:e||0,resize:!1,shade:.01,removeFocus:!1},t))},tips:function(e,t,n){return r.open(c.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:260,removeFocus:!1},n))}},E=function(e){var t=this,n=function(){t.creat()};t.index=++r.index,t.config.maxWidth=c(h).width()-15*2,t.config=c.extend({},t.config,s.config,e),document.body?n():setTimeout(function(){n()},30)};E.pt=E.prototype;var u=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];u.anim={0:"layer-anim-00",1:"layer-anim-01",2:"layer-anim-02",3:"layer-anim-03",4:"layer-anim-04",5:"layer-anim-05",6:"layer-anim-06",slideDown:"layer-anim-slide-down",slideLeft:"layer-anim-slide-left",slideUp:"layer-anim-slide-up",slideRight:"layer-anim-slide-right"},u.SHADE="layui-layer-shade",u.MOVE="layui-layer-move";var D="LAYUI-LAYER-SHADE-KEY",C="LAYUI_LAYER_CONTENT_RECORD_HEIGHT";E.pt.config={type:0,shade:.3,fixed:!0,move:u[1],title:"\u4FE1\u606F",offset:"auto",area:"auto",closeBtn:1,icon:-1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,minStack:!0,moveType:1,resize:!0,scrollbar:!0,tips:2},E.pt.vessel=function(e,t){var n=this,i=n.index,a=n.config,o=a.zIndex+i,d=typeof a.title=="object",l=a.maxmin&&(a.type===1||a.type===2),f=a.title?'<div class="layui-layer-title" style="'+(d?a.title[1]:"")+'">'+(d?a.title[0]:a.title)+"</div>":"";return a.zIndex=o,t([a.shade?'<div class="'+u.SHADE+'" id="'+u.SHADE+i+'" times="'+i+'" style="'+("z-index:"+(o-1)+"; ")+'"></div>':"",'<div class="'+u[0]+(" layui-layer-"+s.type[a.type])+((a.type==0||a.type==2)&&!a.shade?" layui-layer-border":"")+" "+(a.skin||"")+'" id="'+u[0]+i+'" type="'+s.type[a.type]+'" times="'+i+'" showtime="'+a.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+o+"; width:"+a.area[0]+";height:"+a.area[1]+";position:"+(a.fixed?"fixed;":"absolute;")+'">'+(e&&a.type!=2?"":f)+"<div"+(a.id?' id="'+a.id+'"':"")+' class="layui-layer-content'+(a.type==0&&a.icon!==-1?" layui-layer-padding":"")+(a.type==3?" layui-layer-loading"+a.icon:"")+'">'+function(){var y=["layui-icon-tips","layui-icon-success","layui-icon-error","layui-icon-question","layui-icon-lock","layui-icon-face-cry","layui-icon-face-smile"],b,v="layui-anim layui-anim-rotate layui-anim-loop";if(a.type==0&&a.icon!==-1)return a.icon==16&&(b="layui-icon layui-icon-loading "+v),'<i class="layui-layer-face layui-icon '+(b||y[a.icon]||y[0])+'"></i>';if(a.type==3){var p=["layui-icon-loading","layui-icon-loading-1"];return a.icon==2?'<div class="layui-layer-loading-2 '+v+'"></div>':'<i class="layui-layer-loading-icon layui-icon '+(p[a.icon]||p[0])+" "+v+'"></i>'}return""}()+(a.type==1&&e?"":a.content||"")+'</div><div class="layui-layer-setwin">'+function(){var y=[];return l&&(y.push('<span class="layui-layer-min"></span>'),y.push('<span class="layui-layer-max"></span>')),a.closeBtn&&y.push('<span class="layui-icon layui-icon-close '+[u[7],u[7]+(a.title?a.closeBtn:a.type==4?"1":"2")].join(" ")+'"></span>'),y.join("")}()+"</div>"+(a.btn?function(){var y="";typeof a.btn=="string"&&(a.btn=[a.btn]);for(var b=0,v=a.btn.length;b<v;b++)y+='<a class="'+u[6]+b+'">'+a.btn[b]+"</a>";return'<div class="'+function(){var p=[u[6]];return a.btnAlign&&p.push(u[6]+"-"+a.btnAlign),p.join(" ")}()+'">'+y+"</div>"}():"")+(a.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],f,c('<div class="'+u.MOVE+'" id="'+u.MOVE+'"></div>')),n},E.pt.creat=function(){var e=this,t=e.config,n=e.index,i=t.content,a=typeof i=="object",o=c("body"),d=function(l){if(t.shift&&(t.anim=t.shift),u.anim[t.anim]){var f="layer-anim "+u.anim[t.anim];l.addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){c(this).removeClass(f)})}};if(t.id&&c("."+u[0]).find("#"+t.id)[0])return function(){var l=c("#"+t.id).closest("."+u[0]),f=l.attr("times"),y=l.data("config"),b=c("#"+u.SHADE+f),v=l.data("maxminStatus")||{};v==="min"?r.restore(f):y.hideOnClose&&(b.show(),l.show(),d(l),setTimeout(function(){b.css({opacity:b.data(D)})},10))}();switch(t.removeFocus&&document.activeElement&&document.activeElement.blur(),typeof t.area=="string"&&(t.area=t.area==="auto"?["",""]:[t.area,""]),r.ie==6&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:s.btn[0],r.closeAll("dialog");break;case 2:var i=t.content=a?t.content:[t.content||"","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+u[4]+n+'" name="'+u[4]+n+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&t.icon,r.closeAll("loading");break;case 4:a||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips=typeof t.tips=="object"?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips");break}e.vessel(a,function(l,f,y){o.append(l[0]),a?function(){t.type==2||t.type==4?function(){c("body").append(l[1])}():function(){i.parents("."+u[0])[0]||(i.data("display",i.css("display")).show().addClass("layui-layer-wrap").wrap(l[1]),c("#"+u[0]+n).find("."+u[5]).before(f))}()}():o.append(l[1]),c("#"+u.MOVE)[0]||o.append(s.moveElem=y),e.layero=c("#"+u[0]+n),e.shadeo=c("#"+u.SHADE+n),t.scrollbar||s.setScrollbar(n)}).auto(n),e.shadeo.css({"background-color":t.shade[1]||"#000",opacity:t.shade[0]||t.shade,transition:t.shade[2]||""}),e.shadeo.data(D,t.shade[0]||t.shade),t.type==2&&r.ie==6&&e.layero.find("iframe").attr("src",i[0]),t.type==4?e.tips():function(){e.offset(),parseInt(s.getStyle(document.getElementById(u.MOVE),"z-index"))||function(){e.layero.css("visibility","hidden"),r.ready(function(){e.offset(),e.layero.css("visibility","visible")})}()}(),t.fixed&&(s.events.resize[e.index]||(s.events.resize[e.index]=function(){e.resize()},h.on("resize",s.events.resize[e.index]))),t.time<=0||setTimeout(function(){r.close(e.index)},t.time),e.move().callback(),d(e.layero),e.layero.data("config",t)},E.pt.resize=function(){var e=this,t=e.config;e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(e.index),t.type==4&&e.tips()},E.pt.auto=function(e){var t=this,n=t.config,i=c("#"+u[0]+e);(n.area[0]===""||n.area[0]==="auto")&&n.maxWidth>0&&(r.ie&&r.ie<8&&n.btn&&i.width(i.innerWidth()),i.outerWidth()>n.maxWidth&&i.width(n.maxWidth));var a=[i.innerWidth(),i.innerHeight()],o=i.find(u[1]).outerHeight()||0,d=i.find("."+u[6]).outerHeight()||0,l=function(f){f=i.find(f),f.height(a[1]-o-d-2*(parseFloat(f.css("padding-top"))|0))};switch(n.type){case 2:l("iframe");break;default:n.area[1]===""||n.area[1]==="auto"?n.maxHeight>0&&i.outerHeight()>n.maxHeight?(a[1]=n.maxHeight,l("."+u[5])):n.fixed&&a[1]>=h.height()&&(a[1]=h.height(),l("."+u[5])):l("."+u[5]);break}return t},E.pt.offset=function(){var e=this,t=e.config,n=e.layero,i=[n.outerWidth(),n.outerHeight()],a=typeof t.offset=="object";e.offsetTop=(h.height()-i[1])/2,e.offsetLeft=(h.width()-i[0])/2,a?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):t.offset!=="auto"&&(t.offset==="t"?e.offsetTop=0:t.offset==="r"?e.offsetLeft=h.width()-i[0]:t.offset==="b"?e.offsetTop=h.height()-i[1]:t.offset==="l"?e.offsetLeft=0:t.offset==="lt"?(e.offsetTop=0,e.offsetLeft=0):t.offset==="lb"?(e.offsetTop=h.height()-i[1],e.offsetLeft=0):t.offset==="rt"?(e.offsetTop=0,e.offsetLeft=h.width()-i[0]):t.offset==="rb"?(e.offsetTop=h.height()-i[1],e.offsetLeft=h.width()-i[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?h.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?h.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=h.scrollTop(),e.offsetLeft+=h.scrollLeft()),n.data("maxminStatus")==="min"&&(e.offsetTop=h.height()-(n.find(u[1]).outerHeight()||0),e.offsetLeft=n.css("left")),n.css({top:e.offsetTop,left:e.offsetLeft})},E.pt.tips=function(){var e=this,t=e.config,n=e.layero,i=[n.outerWidth(),n.outerHeight()],a=c(t.follow);a[0]||(a=c("body"));var o={width:a.outerWidth(),height:a.outerHeight(),top:a.offset().top,left:a.offset().left},d=n.find(".layui-layer-TipsG"),l=t.tips[0];t.tips[1]||d.remove(),o.autoLeft=function(){o.left+i[0]-h.width()>0?(o.tipLeft=o.left+o.width-i[0],d.css({right:12,left:"auto"})):o.tipLeft=o.left},o.where=[function(){o.autoLeft(),o.tipTop=o.top-i[1]-10,d.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){o.tipLeft=o.left+o.width+10,o.tipTop=o.top-(o.height*.75<21?21-o.height*.5:0),o.tipTop=Math.max(o.tipTop,0),d.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){o.autoLeft(),o.tipTop=o.top+o.height+10,d.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){o.tipLeft=o.left-i[0]-10,o.tipTop=o.top-(o.height*.75<21?21-o.height*.5:0),o.tipTop=Math.max(o.tipTop,0),d.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],o.where[l-1](),l===1?o.top-(h.scrollTop()+i[1]+8*2)<0&&o.where[2]():l===2?h.width()-(o.left+o.width+i[0]+8*2)>0||o.where[3]():l===3?o.top-h.scrollTop()+o.height+i[1]+8*2-h.height()>0&&o.where[0]():l===4&&i[0]+8*2-o.left>0&&o.where[1](),n.find("."+u[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),n.css({left:o.tipLeft-(t.fixed?h.scrollLeft():0),top:o.tipTop-(t.fixed?h.scrollTop():0)})},E.pt.move=function(){var e=this,t=e.config,n=c(document),i=e.layero,a=["LAY_MOVE_DICT","LAY_RESIZE_DICT"],o=i.find(t.move),d=i.find(".layui-layer-resize");return t.move&&o.css("cursor","move"),o.on("mousedown",function(l){if(!l.button){var f=c(this),y={};t.move&&(y.layero=i,y.config=t,y.offset=[l.clientX-parseFloat(i.css("left")),l.clientY-parseFloat(i.css("top"))],f.data(a[0],y),s.eventMoveElem=f,s.moveElem.css("cursor","move").show()),l.preventDefault()}}),d.on("mousedown",function(l){var f=c(this),y={};t.resize&&(y.layero=i,y.config=t,y.offset=[l.clientX,l.clientY],y.index=e.index,y.area=[i.outerWidth(),i.outerHeight()],f.data(a[1],y),s.eventResizeElem=f,s.moveElem.css("cursor","se-resize").show()),l.preventDefault()}),s.docEvent||(n.on("mousemove",function(l){if(s.eventMoveElem){var f=s.eventMoveElem.data(a[0])||{},y=f.layero,b=f.config,v=l.clientX-f.offset[0],p=l.clientY-f.offset[1],g=y.css("position")==="fixed";if(l.preventDefault(),f.stX=g?0:h.scrollLeft(),f.stY=g?0:h.scrollTop(),!b.moveOut){var m=h.width()-y.outerWidth()+f.stX,x=h.height()-y.outerHeight()+f.stY;v<f.stX&&(v=f.stX),v>m&&(v=m),p<f.stY&&(p=f.stY),p>x&&(p=x)}y.css({left:v,top:p})}if(s.eventResizeElem){var f=s.eventResizeElem.data(a[1])||{},b=f.config,v=l.clientX-f.offset[0],p=l.clientY-f.offset[1];l.preventDefault(),r.style(f.index,{width:f.area[0]+v,height:f.area[1]+p}),b.resizing&&b.resizing(f.layero)}}).on("mouseup",function(l){if(s.eventMoveElem){var f=s.eventMoveElem.data(a[0])||{},y=f.config;s.eventMoveElem.removeData(a[0]),delete s.eventMoveElem,s.moveElem.hide(),y.moveEnd&&y.moveEnd(f.layero)}s.eventResizeElem&&(s.eventResizeElem.removeData(a[1]),delete s.eventResizeElem,s.moveElem.hide())}),s.docEvent=!0),e},E.pt.btnLoading=function(e,t){if(t){var n='<i class="layui-layer-btn-loading-icon layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>';if(e.find(".layui-layer-btn-loading-icon")[0])return;e.addClass("layui-layer-btn-is-loading").attr({disabled:""}).prepend(n)}else e.removeClass("layui-layer-btn-is-loading").removeAttr("disabled").find(".layui-layer-btn-loading-icon").remove()},E.pt.callback=function(){var e=this,t=e.layero,n=e.config;e.openLayer(),n.success&&(n.type==2?t.find("iframe").on("load",function(){n.success(t,e.index,e)}):n.success(t,e.index,e)),r.ie==6&&e.IE6(t),t.find("."+u[6]).children("a").on("click",function(){var a=c(this),o=a.index();if(!a.attr("disabled"))if(n.btnAsync){var d=o===0?n.yes||n.btn1:n["btn"+(o+1)];e.loading=function(f){e.btnLoading(a,f)},d?s.promiseLikeResolve(d.call(n,e.index,t,e)).then(function(f){f!==!1&&r.close(e.index)},function(f){f!==void 0&&window.console&&window.console.error("layer error hint: "+f)}):r.close(e.index)}else if(o===0)n.yes?n.yes(e.index,t,e):n.btn1?n.btn1(e.index,t,e):r.close(e.index);else{var l=n["btn"+(o+1)]&&n["btn"+(o+1)](e.index,t,e);l===!1||r.close(e.index)}});function i(){var a=n.cancel&&n.cancel(e.index,t,e);a===!1||r.close(e.index)}t.find("."+u[7]).on("click",i),n.shadeClose&&e.shadeo.on("click",function(){r.close(e.index)}),t.find(".layui-layer-min").on("click",function(){var a=n.min&&n.min(t,e.index,e);a===!1||r.min(e.index,n)}),t.find(".layui-layer-max").on("click",function(){c(this).hasClass("layui-layer-maxmin")?(r.restore(e.index),n.restore&&n.restore(t,e.index,e)):(r.full(e.index,n),setTimeout(function(){n.full&&n.full(t,e.index,e)},100))}),n.end&&(s.end[e.index]=n.end),n.beforeEnd&&(s.beforeEnd[e.index]=c.proxy(n.beforeEnd,n,t,e.index,e))},s.reselect=function(){c.each(c("select"),function(e,t){var n=c(this);n.parents("."+u[0])[0]||n.attr("layer")==1&&c("."+u[0]).length<1&&n.removeAttr("layer").show(),n=null})},E.pt.IE6=function(e){c("select").each(function(t,n){var i=c(this);i.parents("."+u[0])[0]||i.css("display")==="none"||i.attr({layer:"1"}).hide(),i=null})},E.pt.openLayer=function(){var e=this;r.zIndex=e.config.zIndex,r.setTop=function(t){var n=function(){r.zIndex++,t.css("z-index",r.zIndex+1)};return r.zIndex=parseInt(t[0].style.zIndex),t.on("mousedown",n),r.zIndex}},s.record=function(e){if(!e[0])return window.console&&console.error("index error");var t=e.attr("type"),n=e.find(".layui-layer-content"),i=t===s.type[2]?n.children("iframe"):n,a=[e[0].style.width||s.getStyle(e[0],"width"),e[0].style.height||s.getStyle(e[0],"height"),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:a}),n.data(C,s.getStyle(i[0],"height"))},s.setScrollbar=function(e){u.html.css("overflow","hidden")},s.restScrollbar=function(e){var t=c("."+u[0]).filter(function(){var n=c(this);return n.data("config").scrollbar===!1&&n.data("maxminStatus")!=="min"&&n.attr("times")!==String(e)});t.length===0&&u.html.css("overflow","")},s.promiseLikeResolve=function(e){var t=c.Deferred();return e&&typeof e.then=="function"?e.then(t.resolve,t.reject):t.resolve(e),t.promise()},window.layer=r,r.getChildFrame=function(e,t){return t=t||c("."+u[4]).attr("times"),c("#"+u[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return c("#"+e).parents("."+u[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("html",e).outerHeight(),n=c("#"+u[0]+e),i=n.find(u[1]).outerHeight()||0,a=n.find("."+u[6]).outerHeight()||0;n.css({height:t+i+a}),n.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){c("#"+u[0]+e).find("iframe").attr("src",t)},r.style=function(e,t,n){var i=c("#"+u[0]+e),a=i.find(".layui-layer-content"),o=i.attr("type"),d=i.find(u[1]).outerHeight()||0,l=i.find("."+u[6]).outerHeight()||0;i.attr("minLeft"),o===s.type[3]||o===s.type[4]||(n||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-d-l<=64&&(t.height=64+d+l)),i.css(t),l=i.find("."+u[6]).outerHeight()||0,o===s.type[2]?i.find("iframe").css({height:(typeof t.height=="number"?t.height:i.height())-d-l}):a.css({height:(typeof t.height=="number"?t.height:i.height())-d-l-parseFloat(a.css("padding-top"))-parseFloat(a.css("padding-bottom"))}))},r.min=function(e,t){var n=c("#"+u[0]+e),i=n.data("maxminStatus");if(i!=="min"){i==="max"&&r.restore(e),n.data("maxminStatus","min"),t=t||n.data("config")||{};var a=c("#"+u.SHADE+e),o=n.find(".layui-layer-min"),d=n.find(u[1]).outerHeight()||0,l=n.attr("minLeft"),f=typeof l=="string",y=f?l:181*s.minStackIndex+"px",b=n.css("position"),v=180,p={width:v,height:d,position:"fixed",overflow:"hidden"};s.record(n),s.minStackArr.length>0&&(y=s.minStackArr[0],s.minStackArr.shift()),parseFloat(y)+v>h.width()&&(y=h.width()-v-function(){return s.minStackArr.edgeIndex=s.minStackArr.edgeIndex||0,s.minStackArr.edgeIndex+=3}(),y<0&&(y=0)),t.minStack&&(p.left=y,p.top=h.height()-d,f||s.minStackIndex++,n.attr("minLeft",y)),n.attr("position",b),r.style(e,p,!0),o.hide(),n.attr("type")==="page"&&n.find(u[4]).hide(),s.restScrollbar(e),a.hide()}},r.restore=function(e){var t=c("#"+u[0]+e),n=c("#"+u.SHADE+e),i=t.find(".layui-layer-content"),a=t.attr("area").split(","),o=t.attr("type"),d=t.data("config")||{},l=i.data(C);if(t.removeData("maxminStatus"),r.style(e,{width:a[0],height:a[1],top:parseFloat(a[2]),left:parseFloat(a[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),o==="page"&&t.find(u[4]).show(),d.scrollbar?s.restScrollbar(e):s.setScrollbar(e),l!==void 0){i.removeData(C);var f=o===s.type[2]?i.children("iframe"):i;f.css({height:l})}n.show()},r.full=function(e){var t=c("#"+u[0]+e),n=t.data("maxminStatus");n!=="max"&&(n==="min"&&r.restore(e),t.data("maxminStatus","max"),s.record(t),s.setScrollbar(e),setTimeout(function(){var i=t.css("position")==="fixed";r.style(e,{top:i?0:h.scrollTop(),left:i?0:h.scrollLeft(),width:"100%",height:"100%"},!0),t.find(".layui-layer-min").hide()},100))},r.title=function(e,t){var n=c("#"+u[0]+(t||r.index)).find(u[1]);n.html(e)},r.close=function(e,t){var n=function(){var l=c("."+u[0]).children("#"+e).closest("."+u[0]);return l[0]?(e=l.attr("times"),l):c("#"+u[0]+e)}(),i=n.attr("type"),a=n.data("config")||{},o=a.id&&a.hideOnClose;if(n[0]){var d=function(){var l={slideDown:"layer-anim-slide-down-out",slideLeft:"layer-anim-slide-left-out",slideUp:"layer-anim-slide-up-out",slideRight:"layer-anim-slide-right-out"}[a.anim]||"layer-anim-close",f=function(){var b="layui-layer-wrap";if(o)return n.removeClass("layer-anim "+l),n.hide();if(i===s.type[1]&&n.attr("conType")==="object"){n.children(":not(."+u[5]+")").remove();for(var v=n.find("."+b),p=0;p<2;p++)v.unwrap();v.css("display",v.data("display")).removeClass(b)}else{if(i===s.type[2])try{var g=c("#"+u[4]+e)[0];g.contentWindow.document.write(""),g.contentWindow.close(),n.find("."+u[5])[0].removeChild(g)}catch(m){}n[0].innerHTML="",n.remove()}typeof s.end[e]=="function"&&s.end[e](),delete s.end[e],typeof t=="function"&&t(),s.events.resize[e]&&(h.off("resize",s.events.resize[e]),delete s.events.resize[e])},y=c("#"+u.SHADE+e);r.ie&&r.ie<10||!a.isOutAnim?y[o?"hide":"remove"]():(y.css({opacity:0}),setTimeout(function(){y[o?"hide":"remove"]()},350)),a.isOutAnim&&n.addClass("layer-anim "+l),r.ie==6&&s.reselect(),s.restScrollbar(e),typeof n.attr("minLeft")=="string"&&(s.minStackIndex--,s.minStackArr.push(n.attr("minLeft"))),r.ie&&r.ie<10||!a.isOutAnim?f():setTimeout(function(){f()},200)};!o&&typeof s.beforeEnd[e]=="function"?s.promiseLikeResolve(s.beforeEnd[e]()).then(function(l){l!==!1&&(delete s.beforeEnd[e],d())},function(l){l!==void 0&&window.console&&window.console.error("layer error hint: "+l)}):(delete s.beforeEnd[e],d())}},r.closeAll=function(e,t){typeof e=="function"&&(t=e,e=null);var n=c("."+u[0]);c.each(n,function(i){var a=c(this),o=e?a.attr("type")===e:1;o&&r.close(a.attr("times"),i===n.length-1?t:null),o=null}),n.length===0&&typeof t=="function"&&t()},r.closeLast=function(e,t){var n=[],i=c.isArray(e);if(c(typeof e=="string"?".layui-layer-"+e:".layui-layer").each(function(o,d){var l=c(d),f=i&&e.indexOf(l.attr("type"))===-1||l.css("display")==="none";if(f)return!0;n.push(Number(l.attr("times")))}),n.length>0){var a=Math.max.apply(null,n);r.close(a,t)}};var F=r.cache||{},I=function(e){return F.skin?" "+F.skin+" "+F.skin+"-"+e:""};r.prompt=function(e,t){var n="",i="";if(e=e||{},typeof e=="function"&&(t=e),e.area){var a=e.area;n='style="width: '+a[0]+"; height: "+a[1]+';"',delete e.area}e.placeholder&&(i=' placeholder="'+e.placeholder+'"');var o,d=e.formType==2?'<textarea class="layui-layer-input"'+n+i+"></textarea>":function(){return'<input type="'+(e.formType==1?"password":"text")+'" class="layui-layer-input"'+i+">"}(),l=e.success;return delete e.success,r.open(c.extend({type:1,btn:["\u786E\u5B9A","\u53D6\u6D88"],content:d,skin:"layui-layer-prompt"+I("prompt"),maxWidth:h.width(),success:function(f){o=f.find(".layui-layer-input"),o.val(e.value||"").focus(),typeof l=="function"&&l(f)},resize:!1,yes:function(f){var y=o.val();y.length>(e.maxlength||500)?r.tips("\u6700\u591A\u8F93\u5165"+(e.maxlength||500)+"\u4E2A\u5B57\u7B26",o,{tips:1}):t&&t(y,f,o)}},e))},r.tab=function(e){e=e||{};var t=e.tab||{},n="layui-this",i=e.success;return delete e.success,r.open(c.extend({type:1,skin:"layui-layer-tab"+I("tab"),resize:!1,title:function(){var a=t.length,o=1,d="";if(a>0)for(d='<span class="'+n+'">'+t[0].title+"</span>";o<a;o++)d+="<span>"+t[o].title+"</span>";return d}(),content:'<ul class="layui-layer-tabmain">'+function(){var a=t.length,o=1,d="";if(a>0)for(d='<li class="layui-layer-tabli '+n+'">'+(t[0].content||"no content")+"</li>";o<a;o++)d+='<li class="layui-layer-tabli">'+(t[o].content||"no  content")+"</li>";return d}()+"</ul>",success:function(a){var o=a.find(".layui-layer-title").children(),d=a.find(".layui-layer-tabmain").children();o.on("mousedown",function(l){l.stopPropagation?l.stopPropagation():l.cancelBubble=!0;var f=c(this),y=f.index();f.addClass(n).siblings().removeClass(n),d.eq(y).show().siblings().hide(),typeof e.change=="function"&&e.change(y)}),typeof i=="function"&&i(a)}},e))},r.photos=function(e,t,n){var i={};if(e=c.extend(!0,{toolbar:!0,footer:!0},e),!e.photos)return;var a=!(typeof e.photos=="string"||e.photos instanceof c),o=a?e.photos:{},d=o.data||[],l=o.start||0,f=e.success;if(i.imgIndex=(l|0)+1,e.img=e.img||"img",delete e.success,a){if(d.length===0)return r.msg("\u6CA1\u6709\u56FE\u7247")}else{var y=c(e.photos),b=function(){d=[],y.find(e.img).each(function(p){var g=c(this);g.attr("layer-index",p),d.push({alt:g.attr("alt"),pid:g.attr("layer-pid"),src:g.attr("lay-src")||g.attr("layer-src")||g.attr("src"),thumb:g.attr("src")})})};if(b(),d.length===0||(t||y.on("click",e.img,function(){b();var p=c(this),g=p.attr("layer-index");r.photos(c.extend(e,{photos:{start:g,data:d,tab:e.tab},full:e.full}),!0)}),!t))return}i.imgprev=function(p){i.imgIndex--,i.imgIndex<1&&(i.imgIndex=d.length),i.tabimg(p)},i.imgnext=function(p,g){i.imgIndex++,!(i.imgIndex>d.length&&(i.imgIndex=1,g))&&i.tabimg(p)},i.keyup=function(p){if(!i.end){var g=p.keyCode;p.preventDefault(),g===37?i.imgprev(!0):g===39?i.imgnext(!0):g===27&&r.close(i.index)}},i.tabimg=function(p){if(!(d.length<=1))return o.start=i.imgIndex-1,r.close(i.index),r.photos(e,!0,p)},i.isNumber=function(p){return typeof p=="number"&&!isNaN(p)},i.image={},i.getTransform=function(p){var g=[],m=p.rotate,x=p.scaleX,w=p.scale;return i.isNumber(m)&&m!==0&&g.push("rotate("+m+"deg)"),i.isNumber(x)&&x!==1&&g.push("scaleX("+x+")"),i.isNumber(w)&&g.push("scale("+w+")"),g.length?g.join(" "):"none"},i.event=function(p,g,m){if(i.main.find(".layui-layer-photos-prev").on("click",function(k){k.preventDefault(),i.imgprev(!0)}),i.main.find(".layui-layer-photos-next").on("click",function(k){k.preventDefault(),i.imgnext(!0)}),c(document).on("keyup",i.keyup),p.off("click").on("click","*[toolbar-event]",function(){var k=c(this),T=k.attr("toolbar-event");switch(T){case"rotate":i.image.rotate=((i.image.rotate||0)+Number(k.attr("data-option")))%360,i.imgElem.css({transform:i.getTransform(i.image)});break;case"scalex":i.image.scaleX=i.image.scaleX===-1?1:-1,i.imgElem.css({transform:i.getTransform(i.image)});break;case"zoom":var S=Number(k.attr("data-option"));i.image.scale=(i.image.scale||1)+S,S<0&&i.image.scale<0-S&&(i.image.scale=0-S),i.imgElem.css({transform:i.getTransform(i.image)});break;case"reset":i.image.scaleX=1,i.image.scale=1,i.image.rotate=0,i.imgElem.css({transform:"none"});break;case"close":r.close(g);break}m.offset(),m.auto(g)}),i.main.on("mousewheel DOMMouseScroll",function(k){var T=k.originalEvent.wheelDelta||-k.originalEvent.detail,S=i.main.find('[toolbar-event="zoom"]');T>0?S.eq(0).trigger("click"):S.eq(1).trigger("click"),k.preventDefault()}),window.layui||window.lay){var x=window.layui.lay||window.lay,w=function(k,T){var S=Date.now()-T.timeStart,H=T.distanceX/S,B=h.width()/3,M=Math.abs(H)>.25||Math.abs(T.distanceX)>B;M&&(T.direction==="left"?i.imgnext(!0):T.direction==="right"&&i.imgprev(!0))};c.each([m.shadeo,i.main],function(k,T){x.touchSwipe(T,{onTouchEnd:w})})}};function v(p,g,m){var x=new Image;if(x.src=p,x.complete)return g(x);x.onload=function(){x.onload=null,g(x)},x.onerror=function(w){x.onerror=null,m(w)}}i.loadi=r.load(1,{shade:"shade"in e?!1:[.9,void 0,"unset"],scrollbar:!1}),v(d[l].src,function(p){r.close(i.loadi);var g=d[l].alt||"";n&&(e.anim=-1),i.index=r.open(c.extend({type:1,id:"layui-layer-photos",area:function(){var m=[p.width,p.height],x=[c(window).width()-100,c(window).height()-100];if(!e.full&&(m[0]>x[0]||m[1]>x[1])){var w=[m[0]/x[0],m[1]/x[1]];w[0]>w[1]?(m[0]=m[0]/w[0],m[1]=m[1]/w[0]):w[0]<w[1]&&(m[0]=m[0]/w[1],m[1]=m[1]/w[1])}return[m[0]+"px",m[1]+"px"]}(),title:!1,shade:[.9,void 0,"unset"],shadeClose:!0,closeBtn:!1,move:".layer-layer-photos-main img",moveType:1,scrollbar:!1,moveOut:!0,anim:5,isOutAnim:!1,skin:"layui-layer-photos"+I("photos"),content:'<div class="layer-layer-photos-main"><img src="'+d[l].src+'" alt="'+g+'" layer-pid="'+(d[l].pid||"")+'">'+function(){var m=['<div class="layui-layer-photos-pointer">'];return d.length>1&&m.push(['<div class="layer-layer-photos-page">','<span class="layui-icon layui-icon-left layui-layer-photos-prev"></span>','<span class="layui-icon layui-icon-right layui-layer-photos-next"></span>',"</div>"].join("")),e.toolbar&&m.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-header">','<span toolbar-event="rotate" data-option="90" title="\u65CB\u8F6C"><i class="layui-icon layui-icon-refresh"></i></span>','<span toolbar-event="scalex" title="\u53D8\u6362"><i class="layui-icon layui-icon-slider"></i></span>','<span toolbar-event="zoom" data-option="0.1" title="\u653E\u5927"><i class="layui-icon layui-icon-add-circle"></i></span>','<span toolbar-event="zoom" data-option="-0.1" title="\u7F29\u5C0F"><i class="layui-icon layui-icon-reduce-circle"></i></span>','<span toolbar-event="reset" title="\u8FD8\u539F"><i class="layui-icon layui-icon-refresh-1"></i></span>','<span toolbar-event="close" title="\u5173\u95ED"><i class="layui-icon layui-icon-close"></i></span>',"</div>"].join("")),e.footer&&m.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-footer">',"<h3>"+g+"</h3>","<em>"+i.imgIndex+" / "+d.length+"</em>",'<a href="'+d[l].src+'" target="_blank">\u67E5\u770B\u539F\u56FE</a>',"</div>"].join("")),m.push("</div>"),m.join("")}()+"</div>",success:function(m,x,w){i.main=m.find(".layer-layer-photos-main"),i.footer=m.find(".layui-layer-photos-footer"),i.imgElem=i.main.children("img"),i.event(m,x,w),e.tab&&e.tab(d[l],m),typeof f=="function"&&f(m)},end:function(){i.end=!0,c(document).off("keyup",i.keyup)}},e))},function(){r.close(i.loadi),r.msg("\u5F53\u524D\u56FE\u7247\u5730\u5740\u5F02\u5E38\uFF0C<br>\u662F\u5426\u7EE7\u7EED\u67E5\u770B\u4E0B\u4E00\u5F20\uFF1F",{time:3e4,btn:["\u4E0B\u4E00\u5F20","\u4E0D\u770B\u4E86"],yes:function(){d.length>1&&i.imgnext(!0,!0)}})})},s.run=function(e){c=e,h=c(window);var t=navigator.userAgent.toLowerCase(),n=/android|iphone|ipod|ipad|ios/.test(t),i=c(window);n&&c.each({Height:"height",Width:"width"},function(a,o){var d="inner"+a;h[o]=function(){return d in window?window[d]:i[o]()}}),u.html=c("html"),r.open=function(a){var o=new E(a);return o.index}},window.layui&&layui.define?(r.ready(),layui.define(["jquery","lay"],function(e){r.path=layui.cache.dir,s.run(layui.$),window.layer=r,e("layer",r)})):typeof define=="function"&&define.amd?define(["jquery"],function(){return s.run(L),r}):function(){r.ready(),s.run(L)}(),A.layer=r});
//# sourceMappingURL=layer.umd.js.map

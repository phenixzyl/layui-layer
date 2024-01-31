"use strict";var F=require("jquery"),A=window.layui&&layui.define,c,m,s={getPath:function(){var e=document.currentScript?document.currentScript.src:function(){for(var n=document.scripts,i=n.length-1,a,o=i;o>0;o--)if(n[o].readyState==="interactive"){a=n[o].src;break}return a||n[i].src}(),t=window.LAYUI_GLOBAL||{};return t.layer_dir||e.substring(0,e.lastIndexOf("/")+1)}(),config:{removeFocus:!0},end:{},events:{resize:{}},minStackIndex:0,minStackArr:[],btn:["\u786E\u5B9A","\u53D6\u6D88"],type:["dialog","page","iframe","loading","tips"],getStyle:function(e,t){var n=e.currentStyle?e.currentStyle:window.getComputedStyle(e,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](t)},link:function(e,t,n){if(r.path){var i=document.getElementsByTagName("head")[0],a=document.createElement("link");typeof t=="string"&&(n=t);var o=(n||e).replace(/\.|\//g,""),f="layuicss-"+o,u="creating",d=0;a.rel="stylesheet",a.href=r.path+e,a.id=f,document.getElementById(f)||i.appendChild(a),typeof t=="function"&&function y(x){var v=100,p=document.getElementById(f);if(++d>10*1e3/v)return window.console&&console.error(o+".css: Invalid");parseInt(s.getStyle(p,"width"))===1989?(x===u&&p.removeAttribute("lay-status"),p.getAttribute("lay-status")===u?setTimeout(y,v):t()):(p.setAttribute("lay-status",u),setTimeout(function(){y(u)},v))}()}}},r={v:"3.7.0",ie:function(){var e=navigator.userAgent.toLowerCase();return window.ActiveXObject||"ActiveXObject"in window?(e.match(/msie\s(\d+)/)||[])[1]||"11":!1}(),index:window.layer&&window.layer.v?1e5:0,path:s.getPath,config:function(e,t){return e=e||{},r.cache=s.config=c.extend({},s.config,e),r.path=s.config.path||r.path,typeof e.extend=="string"&&(e.extend=[e.extend]),s.config.path&&r.ready(),e.extend?(A?layui.addcss("modules/layer/"+e.extend):s.link("css/"+e.extend),this):this},ready:function(e){var t="layer",n="",i=(A?"modules/":"css/")+"layer.css?v="+r.v+n;return A?layui["layui.all"]?typeof e=="function"&&e():layui.addcss(i,e,t):s.link(i,e,t),this},alert:function(e,t,n){var i=typeof t=="function";return i&&(n=t),r.open(c.extend({content:e,yes:n},i?{}:t))},confirm:function(e,t,n,i){var a=typeof t=="function";return a&&(i=n,n=t),r.open(c.extend({content:e,btn:s.btn,yes:n,btn2:i},a?{}:t))},msg:function(e,t,n){var i=typeof t=="function",a=s.config.skin,o=(a?a+" "+a+"-msg":"")||"layui-layer-msg",f=l.anim.length-1;return i&&(n=t),r.open(c.extend({content:e,time:3e3,shade:!1,skin:o,title:!1,closeBtn:!1,btn:!1,resize:!1,end:n,removeFocus:!1},i&&!s.config.skin?{skin:o+" layui-layer-hui",anim:f}:function(){return t=t||{},(t.icon===-1||t.icon===void 0&&!s.config.skin)&&(t.skin=o+" "+(t.skin||"layui-layer-hui")),t}()))},load:function(e,t){return r.open(c.extend({type:3,icon:e||0,resize:!1,shade:.01,removeFocus:!1},t))},tips:function(e,t,n){return r.open(c.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:260,removeFocus:!1},n))}},E=function(e){var t=this,n=function(){t.creat()};t.index=++r.index,t.config.maxWidth=c(m).width()-15*2,t.config=c.extend({},t.config,s.config,e),document.body?n():setTimeout(function(){n()},30)};E.pt=E.prototype;var l=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];l.anim={0:"layer-anim-00",1:"layer-anim-01",2:"layer-anim-02",3:"layer-anim-03",4:"layer-anim-04",5:"layer-anim-05",6:"layer-anim-06",slideDown:"layer-anim-slide-down",slideLeft:"layer-anim-slide-left",slideUp:"layer-anim-slide-up",slideRight:"layer-anim-slide-right"},l.SHADE="layui-layer-shade",l.MOVE="layui-layer-move",E.pt.config={type:0,shade:.3,fixed:!0,move:l[1],title:"\u4FE1\u606F",offset:"auto",area:"auto",closeBtn:1,icon:-1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,minStack:!0,moveType:1,resize:!0,scrollbar:!0,tips:2},E.pt.vessel=function(e,t){var n=this,i=n.index,a=n.config,o=a.zIndex+i,f=typeof a.title=="object",u=a.maxmin&&(a.type===1||a.type===2),d=a.title?'<div class="layui-layer-title" style="'+(f?a.title[1]:"")+'">'+(f?a.title[0]:a.title)+"</div>":"";return a.zIndex=o,t([a.shade?'<div class="'+l.SHADE+'" id="'+l.SHADE+i+'" times="'+i+'" style="'+("z-index:"+(o-1)+"; ")+'"></div>':"",'<div class="'+l[0]+(" layui-layer-"+s.type[a.type])+((a.type==0||a.type==2)&&!a.shade?" layui-layer-border":"")+" "+(a.skin||"")+'" id="'+l[0]+i+'" type="'+s.type[a.type]+'" times="'+i+'" showtime="'+a.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+o+"; width:"+a.area[0]+";height:"+a.area[1]+";position:"+(a.fixed?"fixed;":"absolute;")+'">'+(e&&a.type!=2?"":d)+"<div"+(a.id?' id="'+a.id+'"':"")+' class="layui-layer-content'+(a.type==0&&a.icon!==-1?" layui-layer-padding":"")+(a.type==3?" layui-layer-loading"+a.icon:"")+'">'+function(){var y=["layui-icon-tips","layui-icon-success","layui-icon-error","layui-icon-question","layui-icon-lock","layui-icon-face-cry","layui-icon-face-smile"],x,v="layui-anim layui-anim-rotate layui-anim-loop";if(a.type==0&&a.icon!==-1)return a.icon==16&&(x="layui-icon layui-icon-loading "+v),'<i class="layui-layer-face layui-icon '+(x||y[a.icon]||y[0])+'"></i>';if(a.type==3){var p=["layui-icon-loading","layui-icon-loading-1"];return a.icon==2?'<div class="layui-layer-loading-2 '+v+'"></div>':'<i class="layui-layer-loading-icon layui-icon '+(p[a.icon]||p[0])+" "+v+'"></i>'}return""}()+(a.type==1&&e?"":a.content||"")+'</div><div class="layui-layer-setwin">'+function(){var y=[];return u&&(y.push('<span class="layui-layer-min"></span>'),y.push('<span class="layui-layer-max"></span>')),a.closeBtn&&y.push('<span class="layui-icon layui-icon-close '+[l[7],l[7]+(a.title?a.closeBtn:a.type==4?"1":"2")].join(" ")+'"></span>'),y.join("")}()+"</div>"+(a.btn?function(){var y="";typeof a.btn=="string"&&(a.btn=[a.btn]);for(var x=0,v=a.btn.length;x<v;x++)y+='<a class="'+l[6]+x+'">'+a.btn[x]+"</a>";return'<div class="'+function(){var p=[l[6]];return a.btnAlign&&p.push(l[6]+"-"+a.btnAlign),p.join(" ")}()+'">'+y+"</div>"}():"")+(a.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],d,c('<div class="'+l.MOVE+'" id="'+l.MOVE+'"></div>')),n},E.pt.creat=function(){var e=this,t=e.config,n=e.index,i=t.content,a=typeof i=="object",o=c("body");if(t.id&&c("."+l[0]).find("#"+t.id)[0])return function(){var u=c("#"+t.id).closest("."+l[0]),d=u.attr("times"),y=u.data("config"),x=c("#"+l.SHADE+d),v=u.data("maxminStatus")||{};v==="min"?r.restore(d):y.hideOnClose&&(x.show(),u.show())}();switch(t.removeFocus&&document.activeElement.blur(),typeof t.area=="string"&&(t.area=t.area==="auto"?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),r.ie==6&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:s.btn[0],r.closeAll("dialog");break;case 2:var i=t.content=a?t.content:[t.content||"","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+l[4]+n+'" name="'+l[4]+n+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&t.icon,r.closeAll("loading");break;case 4:a||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips=typeof t.tips=="object"?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips");break}if(e.vessel(a,function(u,d,y){o.append(u[0]),a?function(){t.type==2||t.type==4?function(){c("body").append(u[1])}():function(){i.parents("."+l[0])[0]||(i.data("display",i.css("display")).show().addClass("layui-layer-wrap").wrap(u[1]),c("#"+l[0]+n).find("."+l[5]).before(d))}()}():o.append(u[1]),c("#"+l.MOVE)[0]||o.append(s.moveElem=y),e.layero=c("#"+l[0]+n),e.shadeo=c("#"+l.SHADE+n),t.scrollbar||s.setScrollbar(n)}).auto(n),e.shadeo.css({"background-color":t.shade[1]||"#000",opacity:t.shade[0]||t.shade}),t.type==2&&r.ie==6&&e.layero.find("iframe").attr("src",i[0]),t.type==4?e.tips():function(){e.offset(),parseInt(s.getStyle(document.getElementById(l.MOVE),"z-index"))||function(){e.layero.css("visibility","hidden"),r.ready(function(){e.offset(),e.layero.css("visibility","visible")})}()}(),t.fixed&&(s.events.resize[e.index]||(s.events.resize[e.index]=function(){e.resize()},m.on("resize",s.events.resize[e.index]))),t.time<=0||setTimeout(function(){r.close(e.index)},t.time),e.move().callback(),l.anim[t.anim]){var f="layer-anim "+l.anim[t.anim];e.layero.addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){c(this).removeClass(f)})}e.layero.data("config",t)},E.pt.resize=function(){var e=this,t=e.config;e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(e.index),t.type==4&&e.tips()},E.pt.auto=function(e){var t=this,n=t.config,i=c("#"+l[0]+e);n.area[0]===""&&n.maxWidth>0&&(r.ie&&r.ie<8&&n.btn&&i.width(i.innerWidth()),i.outerWidth()>n.maxWidth&&i.width(n.maxWidth));var a=[i.innerWidth(),i.innerHeight()],o=i.find(l[1]).outerHeight()||0,f=i.find("."+l[6]).outerHeight()||0,u=function(d){d=i.find(d),d.height(a[1]-o-f-2*(parseFloat(d.css("padding-top"))|0))};switch(n.type){case 2:u("iframe");break;default:n.area[1]===""?n.maxHeight>0&&i.outerHeight()>n.maxHeight?(a[1]=n.maxHeight,u("."+l[5])):n.fixed&&a[1]>=m.height()&&(a[1]=m.height(),u("."+l[5])):u("."+l[5]);break}return t},E.pt.offset=function(){var e=this,t=e.config,n=e.layero,i=[n.outerWidth(),n.outerHeight()],a=typeof t.offset=="object";e.offsetTop=(m.height()-i[1])/2,e.offsetLeft=(m.width()-i[0])/2,a?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):t.offset!=="auto"&&(t.offset==="t"?e.offsetTop=0:t.offset==="r"?e.offsetLeft=m.width()-i[0]:t.offset==="b"?e.offsetTop=m.height()-i[1]:t.offset==="l"?e.offsetLeft=0:t.offset==="lt"?(e.offsetTop=0,e.offsetLeft=0):t.offset==="lb"?(e.offsetTop=m.height()-i[1],e.offsetLeft=0):t.offset==="rt"?(e.offsetTop=0,e.offsetLeft=m.width()-i[0]):t.offset==="rb"?(e.offsetTop=m.height()-i[1],e.offsetLeft=m.width()-i[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?m.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?m.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=m.scrollTop(),e.offsetLeft+=m.scrollLeft()),n.data("maxminStatus")==="min"&&(e.offsetTop=m.height()-(n.find(l[1]).outerHeight()||0),e.offsetLeft=n.css("left")),n.css({top:e.offsetTop,left:e.offsetLeft})},E.pt.tips=function(){var e=this,t=e.config,n=e.layero,i=[n.outerWidth(),n.outerHeight()],a=c(t.follow);a[0]||(a=c("body"));var o={width:a.outerWidth(),height:a.outerHeight(),top:a.offset().top,left:a.offset().left},f=n.find(".layui-layer-TipsG"),u=t.tips[0];t.tips[1]||f.remove(),o.autoLeft=function(){o.left+i[0]-m.width()>0?(o.tipLeft=o.left+o.width-i[0],f.css({right:12,left:"auto"})):o.tipLeft=o.left},o.where=[function(){o.autoLeft(),o.tipTop=o.top-i[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){o.tipLeft=o.left+o.width+10,o.tipTop=o.top-(o.height*.75<21?21-o.height*.5:0),o.tipTop=Math.max(o.tipTop,0),f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){o.autoLeft(),o.tipTop=o.top+o.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){o.tipLeft=o.left-i[0]-10,o.tipTop=o.top-(o.height*.75<21?21-o.height*.5:0),o.tipTop=Math.max(o.tipTop,0),f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],o.where[u-1](),u===1?o.top-(m.scrollTop()+i[1]+8*2)<0&&o.where[2]():u===2?m.width()-(o.left+o.width+i[0]+8*2)>0||o.where[3]():u===3?o.top-m.scrollTop()+o.height+i[1]+8*2-m.height()>0&&o.where[0]():u===4&&i[0]+8*2-o.left>0&&o.where[1](),n.find("."+l[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),n.css({left:o.tipLeft-(t.fixed?m.scrollLeft():0),top:o.tipTop-(t.fixed?m.scrollTop():0)})},E.pt.move=function(){var e=this,t=e.config,n=c(document),i=e.layero,a=["LAY_MOVE_DICT","LAY_RESIZE_DICT"],o=i.find(t.move),f=i.find(".layui-layer-resize");return t.move&&o.css("cursor","move"),o.on("mousedown",function(u){if(!u.button){var d=c(this),y={};t.move&&(y.layero=i,y.config=t,y.offset=[u.clientX-parseFloat(i.css("left")),u.clientY-parseFloat(i.css("top"))],d.data(a[0],y),s.eventMoveElem=d,s.moveElem.css("cursor","move").show()),u.preventDefault()}}),f.on("mousedown",function(u){var d=c(this),y={};t.resize&&(y.layero=i,y.config=t,y.offset=[u.clientX,u.clientY],y.index=e.index,y.area=[i.outerWidth(),i.outerHeight()],d.data(a[1],y),s.eventResizeElem=d,s.moveElem.css("cursor","se-resize").show()),u.preventDefault()}),s.docEvent||(n.on("mousemove",function(u){if(s.eventMoveElem){var d=s.eventMoveElem.data(a[0])||{},y=d.layero,x=d.config,v=u.clientX-d.offset[0],p=u.clientY-d.offset[1],g=y.css("position")==="fixed";if(u.preventDefault(),d.stX=g?0:m.scrollLeft(),d.stY=g?0:m.scrollTop(),!x.moveOut){var h=m.width()-y.outerWidth()+d.stX,b=m.height()-y.outerHeight()+d.stY;v<d.stX&&(v=d.stX),v>h&&(v=h),p<d.stY&&(p=d.stY),p>b&&(p=b)}y.css({left:v,top:p})}if(s.eventResizeElem){var d=s.eventResizeElem.data(a[1])||{},x=d.config,v=u.clientX-d.offset[0],p=u.clientY-d.offset[1];u.preventDefault(),r.style(d.index,{width:d.area[0]+v,height:d.area[1]+p}),x.resizing&&x.resizing(d.layero)}}).on("mouseup",function(u){if(s.eventMoveElem){var d=s.eventMoveElem.data(a[0])||{},y=d.config;s.eventMoveElem.removeData(a[0]),delete s.eventMoveElem,s.moveElem.hide(),y.moveEnd&&y.moveEnd(d.layero)}s.eventResizeElem&&(s.eventResizeElem.removeData(a[1]),delete s.eventResizeElem,s.moveElem.hide())}),s.docEvent=!0),e},E.pt.callback=function(){var e=this,t=e.layero,n=e.config;e.openLayer(),n.success&&(n.type==2?t.find("iframe").on("load",function(){n.success(t,e.index,e)}):n.success(t,e.index,e)),r.ie==6&&e.IE6(t),t.find("."+l[6]).children("a").on("click",function(){var a=c(this).index();if(a===0)n.yes?n.yes(e.index,t,e):n.btn1?n.btn1(e.index,t,e):r.close(e.index);else{var o=n["btn"+(a+1)]&&n["btn"+(a+1)](e.index,t,e);o===!1||r.close(e.index)}});function i(){var a=n.cancel&&n.cancel(e.index,t,e);a===!1||r.close(e.index)}t.find("."+l[7]).on("click",i),n.shadeClose&&e.shadeo.on("click",function(){r.close(e.index)}),t.find(".layui-layer-min").on("click",function(){var a=n.min&&n.min(t,e.index,e);a===!1||r.min(e.index,n)}),t.find(".layui-layer-max").on("click",function(){c(this).hasClass("layui-layer-maxmin")?(r.restore(e.index),n.restore&&n.restore(t,e.index,e)):(r.full(e.index,n),setTimeout(function(){n.full&&n.full(t,e.index,e)},100))}),n.end&&(s.end[e.index]=n.end)},s.reselect=function(){c.each(c("select"),function(e,t){var n=c(this);n.parents("."+l[0])[0]||n.attr("layer")==1&&c("."+l[0]).length<1&&n.removeAttr("layer").show(),n=null})},E.pt.IE6=function(e){c("select").each(function(t,n){var i=c(this);i.parents("."+l[0])[0]||i.css("display")==="none"||i.attr({layer:"1"}).hide(),i=null})},E.pt.openLayer=function(){var e=this;r.zIndex=e.config.zIndex,r.setTop=function(t){var n=function(){r.zIndex++,t.css("z-index",r.zIndex+1)};return r.zIndex=parseInt(t[0].style.zIndex),t.on("mousedown",n),r.zIndex}},s.record=function(e){if(!e[0])return window.console&&console.error("index error");var t=[e[0].style.width||e.width(),e[0].style.height||e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},s.setScrollbar=function(e){l.html.css("overflow","hidden").attr("layer-full",e)},s.restScrollbar=function(e){l.html.attr("layer-full")==e&&(l.html[0].style[l.html[0].style.removeProperty?"removeProperty":"removeAttribute"]("overflow"),l.html.removeAttr("layer-full"))},window.layer=r,r.getChildFrame=function(e,t){return t=t||c("."+l[4]).attr("times"),c("#"+l[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return c("#"+e).parents("."+l[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("html",e).outerHeight(),n=c("#"+l[0]+e),i=n.find(l[1]).outerHeight()||0,a=n.find("."+l[6]).outerHeight()||0;n.css({height:t+i+a}),n.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){c("#"+l[0]+e).find("iframe").attr("src",t)},r.style=function(e,t,n){var i=c("#"+l[0]+e),a=i.find(".layui-layer-content"),o=i.attr("type"),f=i.find(l[1]).outerHeight()||0,u=i.find("."+l[6]).outerHeight()||0;i.attr("minLeft"),o===s.type[3]||o===s.type[4]||(n||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-f-u<=64&&(t.height=64+f+u)),i.css(t),u=i.find("."+l[6]).outerHeight()||0,o===s.type[2]?i.find("iframe").css({height:(typeof t.height=="number"?t.height:i.height())-f-u}):a.css({height:(typeof t.height=="number"?t.height:i.height())-f-u-parseFloat(a.css("padding-top"))-parseFloat(a.css("padding-bottom"))}))},r.min=function(e,t){var n=c("#"+l[0]+e),i=n.data("maxminStatus");if(i!=="min"){i==="max"&&r.restore(e),n.data("maxminStatus","min"),t=t||n.data("config")||{};var a=c("#"+l.SHADE+e),o=n.find(".layui-layer-min"),f=n.find(l[1]).outerHeight()||0,u=n.attr("minLeft"),d=typeof u=="string",y=d?u:181*s.minStackIndex+"px",x=n.css("position"),v=180,p={width:v,height:f,position:"fixed",overflow:"hidden"};s.record(n),s.minStackArr.length>0&&(y=s.minStackArr[0],s.minStackArr.shift()),parseFloat(y)+v>m.width()&&(y=m.width()-v-function(){return s.minStackArr.edgeIndex=s.minStackArr.edgeIndex||0,s.minStackArr.edgeIndex+=3}(),y<0&&(y=0)),t.minStack&&(p.left=y,p.top=m.height()-f,d||s.minStackIndex++,n.attr("minLeft",y)),n.attr("position",x),r.style(e,p,!0),o.hide(),n.attr("type")==="page"&&n.find(l[4]).hide(),s.restScrollbar(e),a.hide()}},r.restore=function(e){var t=c("#"+l[0]+e),n=c("#"+l.SHADE+e),i=t.attr("area").split(","),a=t.attr("type"),o=t.data("config")||{};t.removeData("maxminStatus"),r.style(e,{width:i[0],height:i[1],top:parseFloat(i[2]),left:parseFloat(i[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),a==="page"&&t.find(l[4]).show(),o.scrollbar?s.restScrollbar(e):s.setScrollbar(e),n.show()},r.full=function(e){var t=c("#"+l[0]+e),n=t.data("maxminStatus");n!=="max"&&(n==="min"&&r.restore(e),t.data("maxminStatus","max"),s.record(t),l.html.attr("layer-full")||s.setScrollbar(e),setTimeout(function(){var i=t.css("position")==="fixed";r.style(e,{top:i?0:m.scrollTop(),left:i?0:m.scrollLeft(),width:"100%",height:"100%"},!0),t.find(".layui-layer-min").hide()},100))},r.title=function(e,t){var n=c("#"+l[0]+(t||r.index)).find(l[1]);n.html(e)},r.close=function(e,t){var n=function(){var d=c("."+l[0]).children("#"+e).closest("."+l[0]);return d[0]?(e=d.attr("times"),d):c("#"+l[0]+e)}(),i=n.attr("type"),a=n.data("config")||{},o=a.id&&a.hideOnClose;if(n[0]){var f={slideDown:"layer-anim-slide-down-out",slideLeft:"layer-anim-slide-left-out",slideUp:"layer-anim-slide-up-out",slideRight:"layer-anim-slide-right-out"}[a.anim]||"layer-anim-close",u=function(){var d="layui-layer-wrap";if(o)return n.removeClass("layer-anim "+f),n.hide();if(i===s.type[1]&&n.attr("conType")==="object"){n.children(":not(."+l[5]+")").remove();for(var y=n.find("."+d),x=0;x<2;x++)y.unwrap();y.css("display",y.data("display")).removeClass(d)}else{if(i===s.type[2])try{var v=c("#"+l[4]+e)[0];v.contentWindow.document.write(""),v.contentWindow.close(),n.find("."+l[5])[0].removeChild(v)}catch(p){}n[0].innerHTML="",n.remove()}typeof s.end[e]=="function"&&s.end[e](),delete s.end[e],typeof t=="function"&&t(),s.events.resize[e]&&(m.off("resize",s.events.resize[e]),delete s.events.resize[e])};(function(){c("#"+l.SHADE+e)[o?"hide":"remove"]()})(),a.isOutAnim&&n.addClass("layer-anim "+f),r.ie==6&&s.reselect(),s.restScrollbar(e),typeof n.attr("minLeft")=="string"&&(s.minStackIndex--,s.minStackArr.push(n.attr("minLeft"))),r.ie&&r.ie<10||!a.isOutAnim?u():setTimeout(function(){u()},200)}},r.closeAll=function(e,t){typeof e=="function"&&(t=e,e=null);var n=c("."+l[0]);c.each(n,function(i){var a=c(this),o=e?a.attr("type")===e:1;o&&r.close(a.attr("times"),i===n.length-1?t:null),o=null}),n.length===0&&typeof t=="function"&&t()},r.closeLast=function(e,t){e=e||"page",r.close(c(".layui-layer-"+e+":last").attr("times"),t)};var z=r.cache||{},L=function(e){return z.skin?" "+z.skin+" "+z.skin+"-"+e:""};r.prompt=function(e,t){var n="",i="";if(e=e||{},typeof e=="function"&&(t=e),e.area){var a=e.area;n='style="width: '+a[0]+"; height: "+a[1]+';"',delete e.area}e.placeholder&&(i=' placeholder="'+e.placeholder+'"');var o,f=e.formType==2?'<textarea class="layui-layer-input"'+n+i+"></textarea>":function(){return'<input type="'+(e.formType==1?"password":"text")+'" class="layui-layer-input"'+i+">"}(),u=e.success;return delete e.success,r.open(c.extend({type:1,btn:["\u786E\u5B9A","\u53D6\u6D88"],content:f,skin:"layui-layer-prompt"+L("prompt"),maxWidth:m.width(),success:function(d){o=d.find(".layui-layer-input"),o.val(e.value||"").focus(),typeof u=="function"&&u(d)},resize:!1,yes:function(d){var y=o.val();y.length>(e.maxlength||500)?r.tips("\u6700\u591A\u8F93\u5165"+(e.maxlength||500)+"\u4E2A\u5B57\u7B26",o,{tips:1}):t&&t(y,d,o)}},e))},r.tab=function(e){e=e||{};var t=e.tab||{},n="layui-this",i=e.success;return delete e.success,r.open(c.extend({type:1,skin:"layui-layer-tab"+L("tab"),resize:!1,title:function(){var a=t.length,o=1,f="";if(a>0)for(f='<span class="'+n+'">'+t[0].title+"</span>";o<a;o++)f+="<span>"+t[o].title+"</span>";return f}(),content:'<ul class="layui-layer-tabmain">'+function(){var a=t.length,o=1,f="";if(a>0)for(f='<li class="layui-layer-tabli '+n+'">'+(t[0].content||"no content")+"</li>";o<a;o++)f+='<li class="layui-layer-tabli">'+(t[o].content||"no  content")+"</li>";return f}()+"</ul>",success:function(a){var o=a.find(".layui-layer-title").children(),f=a.find(".layui-layer-tabmain").children();o.on("mousedown",function(u){u.stopPropagation?u.stopPropagation():u.cancelBubble=!0;var d=c(this),y=d.index();d.addClass(n).siblings().removeClass(n),f.eq(y).show().siblings().hide(),typeof e.change=="function"&&e.change(y)}),typeof i=="function"&&i(a)}},e))},r.photos=function(e,t,n){var i={};if(e=c.extend(!0,{toolbar:!0,footer:!0},e),!e.photos)return;var a=!(typeof e.photos=="string"||e.photos instanceof c),o=a?e.photos:{},f=o.data||[],u=o.start||0,d=e.success;if(i.imgIndex=(u|0)+1,e.img=e.img||"img",delete e.success,a){if(f.length===0)return r.msg("\u6CA1\u6709\u56FE\u7247")}else{var y=c(e.photos),x=function(){f=[],y.find(e.img).each(function(p){var g=c(this);g.attr("layer-index",p),f.push({alt:g.attr("alt"),pid:g.attr("layer-pid"),src:g.attr("lay-src")||g.attr("layer-src")||g.attr("src"),thumb:g.attr("src")})})};if(x(),f.length===0||(t||y.on("click",e.img,function(){x();var p=c(this),g=p.attr("layer-index");r.photos(c.extend(e,{photos:{start:g,data:f,tab:e.tab},full:e.full}),!0)}),!t))return}i.imgprev=function(p){i.imgIndex--,i.imgIndex<1&&(i.imgIndex=f.length),i.tabimg(p)},i.imgnext=function(p,g){i.imgIndex++,!(i.imgIndex>f.length&&(i.imgIndex=1,g))&&i.tabimg(p)},i.keyup=function(p){if(!i.end){var g=p.keyCode;p.preventDefault(),g===37?i.imgprev(!0):g===39?i.imgnext(!0):g===27&&r.close(i.index)}},i.tabimg=function(p){if(!(f.length<=1))return o.start=i.imgIndex-1,r.close(i.index),r.photos(e,!0,p)},i.isNumber=function(p){return typeof p=="number"&&!isNaN(p)},i.image={},i.getTransform=function(p){var g=[],h=p.rotate,b=p.scaleX,w=p.scale;return i.isNumber(h)&&h!==0&&g.push("rotate("+h+"deg)"),i.isNumber(b)&&b!==1&&g.push("scaleX("+b+")"),i.isNumber(w)&&g.push("scale("+w+")"),g.length?g.join(" "):"none"},i.event=function(p,g,h){if(i.main.find(".layui-layer-photos-prev").on("click",function(k){k.preventDefault(),i.imgprev(!0)}),i.main.find(".layui-layer-photos-next").on("click",function(k){k.preventDefault(),i.imgnext(!0)}),c(document).on("keyup",i.keyup),p.off("click").on("click","*[toolbar-event]",function(){var k=c(this),T=k.attr("toolbar-event");switch(T){case"rotate":i.image.rotate=((i.image.rotate||0)+Number(k.attr("data-option")))%360,i.imgElem.css({transform:i.getTransform(i.image)});break;case"scalex":i.image.scaleX=i.image.scaleX===-1?1:-1,i.imgElem.css({transform:i.getTransform(i.image)});break;case"zoom":var S=Number(k.attr("data-option"));i.image.scale=(i.image.scale||1)+S,S<0&&i.image.scale<0-S&&(i.image.scale=0-S),i.imgElem.css({transform:i.getTransform(i.image)});break;case"reset":i.image.scaleX=1,i.image.scale=1,i.image.rotate=0,i.imgElem.css({transform:"none"});break;case"close":r.close(g);break}h.offset(),h.auto(g)}),i.main.on("mousewheel DOMMouseScroll",function(k){var T=k.originalEvent.wheelDelta||-k.originalEvent.detail,S=i.main.find('[toolbar-event="zoom"]');T>0?S.eq(0).trigger("click"):S.eq(1).trigger("click"),k.preventDefault()}),window.layui||window.lay){var b=window.layui.lay||window.lay,w=function(k,T){var S=Date.now()-T.timeStart,I=T.distanceX/S,C=m.width()/3,D=Math.abs(I)>.25||Math.abs(T.distanceX)>C;D&&(T.direction==="left"?i.imgnext(!0):T.direction==="right"&&i.imgprev(!0))};c.each([h.shadeo,i.main],function(k,T){b.touchSwipe(T,{onTouchEnd:w})})}};function v(p,g,h){var b=new Image;if(b.src=p,b.complete)return g(b);b.onload=function(){b.onload=null,g(b)},b.onerror=function(w){b.onerror=null,h(w)}}i.loadi=r.load(1,{shade:"shade"in e?!1:.9,scrollbar:!1}),v(f[u].src,function(p){r.close(i.loadi);var g=f[u].alt||"";n&&(e.anim=-1),i.index=r.open(c.extend({type:1,id:"layui-layer-photos",area:function(){var h=[p.width,p.height],b=[c(window).width()-100,c(window).height()-100];if(!e.full&&(h[0]>b[0]||h[1]>b[1])){var w=[h[0]/b[0],h[1]/b[1]];w[0]>w[1]?(h[0]=h[0]/w[0],h[1]=h[1]/w[0]):w[0]<w[1]&&(h[0]=h[0]/w[1],h[1]=h[1]/w[1])}return[h[0]+"px",h[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layer-layer-photos-main img",moveType:1,scrollbar:!1,moveOut:!0,anim:5,isOutAnim:!1,skin:"layui-layer-photos"+L("photos"),content:'<div class="layer-layer-photos-main"><img src="'+f[u].src+'" alt="'+g+'" layer-pid="'+(f[u].pid||"")+'">'+function(){var h=['<div class="layui-layer-photos-pointer">'];return f.length>1&&h.push(['<div class="layer-layer-photos-page">','<span class="layui-icon layui-icon-left layui-layer-photos-prev"></span>','<span class="layui-icon layui-icon-right layui-layer-photos-next"></span>',"</div>"].join("")),e.toolbar&&h.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-header">','<span toolbar-event="rotate" data-option="90" title="\u65CB\u8F6C"><i class="layui-icon layui-icon-refresh"></i></span>','<span toolbar-event="scalex" title="\u53D8\u6362"><i class="layui-icon layui-icon-slider"></i></span>','<span toolbar-event="zoom" data-option="0.1" title="\u653E\u5927"><i class="layui-icon layui-icon-add-circle"></i></span>','<span toolbar-event="zoom" data-option="-0.1" title="\u7F29\u5C0F"><i class="layui-icon layui-icon-reduce-circle"></i></span>','<span toolbar-event="reset" title="\u8FD8\u539F"><i class="layui-icon layui-icon-refresh-1"></i></span>','<span toolbar-event="close" title="\u5173\u95ED"><i class="layui-icon layui-icon-close"></i></span>',"</div>"].join("")),e.footer&&h.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-footer">',"<h3>"+g+"</h3>","<em>"+i.imgIndex+" / "+f.length+"</em>",'<a href="'+f[u].src+'" target="_blank">\u67E5\u770B\u539F\u56FE</a>',"</div>"].join("")),h.push("</div>"),h.join("")}()+"</div>",success:function(h,b,w){i.main=h.find(".layer-layer-photos-main"),i.footer=h.find(".layui-layer-photos-footer"),i.imgElem=i.main.children("img"),i.event(h,b,w),e.tab&&e.tab(f[u],h),typeof d=="function"&&d(h)},end:function(){i.end=!0,c(document).off("keyup",i.keyup)}},e))},function(){r.close(i.loadi),r.msg("\u5F53\u524D\u56FE\u7247\u5730\u5740\u5F02\u5E38\uFF0C<br>\u662F\u5426\u7EE7\u7EED\u67E5\u770B\u4E0B\u4E00\u5F20\uFF1F",{time:3e4,btn:["\u4E0B\u4E00\u5F20","\u4E0D\u770B\u4E86"],yes:function(){f.length>1&&i.imgnext(!0,!0)}})})},s.run=function(e){c=e,m=c(window);var t=navigator.userAgent.toLowerCase(),n=/android|iphone|ipod|ipad|ios/.test(t),i=c(window);n&&c.each({Height:"height",Width:"width"},function(a,o){var f="inner"+a;m[o]=function(){return f in window?window[f]:i[o]()}}),l.html=c("html"),r.open=function(a){var o=new E(a);return o.index}},window.layui&&layui.define?(r.ready(),layui.define(["jquery","lay"],function(e){r.path=layui.cache.dir,s.run(layui.$),window.layer=r,e("layer",r)})):typeof define=="function"&&define.amd?define(["jquery"],function(){return s.run(F),r}):function(){r.ready(),s.run(F)}(),exports.layer=r;
//# sourceMappingURL=layer.js.map

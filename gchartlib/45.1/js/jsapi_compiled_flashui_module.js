/*
 SWFObject v2.2 <http://code.google.com/p/swfobject/> 
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var gvjs_2R="SWFObjectExprInst",gvjs_3R="Shockwave Flash",gvjs_4R="application/x-shockwave-flash",gvjs_5R=function(){function a(){if(!H){try{var a=x.getElementsByTagName(gvjs_0j)[0].appendChild(x.createElement(gvjs_rx));a.parentNode.removeChild(a)}catch(Q){return}H=!0;for(var a=A.length,b=0;b<a;b++)A[b]()}}function b(a){H?a():A[A.length]=a}function c(a){if("undefined"!=typeof v.addEventListener)v.addEventListener("load",a,!1);else if("undefined"!=typeof x.addEventListener)x.addEventListener("load",
a,!1);else if("undefined"!=typeof v.attachEvent)q(v,a);else if(typeof v.onload==gvjs_b){var b=v.onload;v.onload=function(){b(null);a()}}else v.onload=a}function d(){var a=x.getElementsByTagName(gvjs_0j)[0],b=x.createElement(gvjs_6a);b.setAttribute(gvjs_lb,gvjs_4R);var c=a.appendChild(b);if(c){var d=0;(function(){function f(){if("undefined"!=typeof c.GetVariable){var g=c.GetVariable("$version");g&&(g=g.split(" ")[1].split(","),F.fE=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)])}else if(10>
d){d++;setTimeout(f,10);return}a.removeChild(b);c=null;e()}return f})()()}else e()}function e(){var a=B.length;if(0<a)for(var b=0;b<a;b++){var c=B[b].id,d=B[b].yna,e={lF:!1,id:c};if(0<F.fE[0]){var l=p(c);if(l)if(!r(B[b].lAa)||F.du&&312>F.du)if(B[b].Zaa&&g()){e={};e.data=B[b].Zaa;e.width=l.getAttribute(gvjs_nb)||"0";e.height=l.getAttribute(gvjs_3a)||"0";l.getAttribute("class")&&(e.lGa=l.getAttribute("class"));l.getAttribute("align")&&(e.align=l.getAttribute("align"));for(var m={},l=l.getElementsByTagName("param"),
n=l.length,q=0;q<n;q++)"movie"!=l[q].getAttribute(gvjs_bw).toLowerCase()&&(m[l[q].getAttribute(gvjs_bw)]=l[q].getAttribute(gvjs_H));h(e,m,c,d)}else k(l),d&&d(e);else u(c,!0),d&&(e.lF=!0,e.Pga=f(c),d(e))}else u(c,!0),d&&((c=f(c))&&"undefined"!=typeof c.SetVariable&&(e.lF=!0,e.Pga=c),d(e))}}function f(a){var b=null;(a=p(a))&&a.nodeName==gvjs_xa&&("undefined"!=typeof a.SetVariable?b=a:(a=a.getElementsByTagName(gvjs_6a)[0])&&(b=a));return b}function g(){return!L&&r("6.0.65")&&(F.bo||F.lea)&&!(F.du&&312>
F.du)}function h(a,b,c,d){L=!0;G=d||null;I={lF:!1,id:c};var e=p(c);if(e){e.nodeName==gvjs_xa?(J=l(e),E=null):(J=e,E=c);a.id=gvjs_2R;if("undefined"==typeof a.width||!/%$/.test(a.width)&&310>parseInt(a.width,10))a.width="310";if("undefined"==typeof a.height||!/%$/.test(a.height)&&137>parseInt(a.height,10))a.height="137";x.title=x.title.slice(0,47)+" - Flash Player Installation";d=F.tn&&F.bo?"ActiveX":"PlugIn";d="MMredirectURL="+v.location.toString().replace(/&/g,"%26")+"&MMplayerType="+d+"&MMdoctitle="+
x.title;b.flashVars="undefined"!=typeof b.flashVars?b.flashVars+("&"+d):d;F.tn&&F.bo&&4!=e.readyState&&(d=x.createElement(gvjs_Za),c+="SWFObjectNew",d.setAttribute(gvjs_dv,c),e.parentNode.insertBefore(d,e),e.style.display=gvjs_d,function(){function a(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(a,10)}return a}()());m(a,b,c)}}function k(a){if(F.tn&&F.bo&&4!=a.readyState){var b=x.createElement(gvjs_Za);a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(l(a),b);a.style.display=gvjs_d;
(function(){function b(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(b,10)}return b})()()}else a.parentNode.replaceChild(l(a),a)}function l(a){var b=x.createElement(gvjs_Za);if(F.bo&&F.tn)b.innerHTML=a.innerHTML;else if(a=a.getElementsByTagName(gvjs_6a)[0])if(a=a.childNodes)for(var c=a.length,d=0;d<c;d++)1==a[d].nodeType&&"PARAM"==a[d].nodeName||8==a[d].nodeType||b.appendChild(a[d].cloneNode(!0));return b}function m(a,b,c){var d,e=p(c);if(F.du&&312>F.du)return d;if(e)if("undefined"==typeof a.id&&
(a.id=c),F.tn&&F.bo){var f="",g;for(g in a)a[g]!=Object.prototype[g]&&(g.toLowerCase()==gvjs_Sj?b.movie=a[g]:"styleclass"==g.toLowerCase()?f+=gvjs_vq+a[g]+'"':"classid"!=g.toLowerCase()&&(f+=" "+g+'="'+a[g]+'"'));g="";for(var h in b)b[h]!=Object.prototype[h]&&(g+='<param name="'+h+gvjs_Cq+b[h]+'" />');e.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+f+">"+g+"</object>";C[C.length]=a.id;d=p(a.id)}else{h=x.createElement(gvjs_6a);h.setAttribute(gvjs_lb,gvjs_4R);for(var k in a)a[k]!=
Object.prototype[k]&&("styleclass"==k.toLowerCase()?h.setAttribute("class",a[k]):"classid"!=k.toLowerCase()&&h.setAttribute(k,a[k]));for(f in b)b[f]!=Object.prototype[f]&&"movie"!=f.toLowerCase()&&(a=h,g=f,k=b[f],c=x.createElement("param"),c.setAttribute(gvjs_bw,g),c.setAttribute(gvjs_H,k),a.appendChild(c));e.parentNode.replaceChild(h,e);d=h}return d}function n(a){var b=p(a);b&&b.nodeName==gvjs_xa&&(F.tn&&F.bo?(b.style.display=gvjs_d,function(){function c(){if(4==b.readyState){var d=p(a);if(d){for(var e in d)typeof d[e]==
gvjs_b&&(d[e]=null);d.parentNode.removeChild(d)}}else setTimeout(c,10)}return c}()()):b.parentNode.removeChild(b))}function p(a){var b=null;try{b=x.getElementById(a)}catch(Q){}return b}function q(a,b){a.attachEvent("onload",b);D[D.length]=[a,"onload",b]}function r(a){var b=F.fE;a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function t(a,b,c,d){if(!F.tn||!F.lea){var e=x.getElementsByTagName("head")[0];
e&&(c=c&&typeof c==gvjs_f?c:gvjs_3w,d&&(P=M=null),M&&P==c||(d=x.createElement(gvjs_eb),d.setAttribute(gvjs_lb,"text/css"),d.setAttribute("media",c),M=e.appendChild(d),F.tn&&F.bo&&"undefined"!=typeof x.styleSheets&&0<x.styleSheets.length&&(M=x.styleSheets[x.styleSheets.length-1]),P=c),F.tn&&F.bo?M&&typeof M.addRule==gvjs_6a&&M.addRule(a,b):M&&"undefined"!=typeof x.createTextNode&&M.appendChild(x.createTextNode(a+" {"+b+"}")))}}function u(a,b){Z&&(b=b?gvjs_ki:gvjs_Xi,H&&p(a)?p(a).style.visibility=b:
t("#"+a,"visibility:"+b,null,null))}function w(a){return null!=/[\\\"<>\.;]/.exec(a)&&"undefined"!=typeof encodeURIComponent?encodeURIComponent(a):a}var v=window,x=document,y=navigator,z=!1,A=[function(){z?d():e()}],B=[],C=[],D=[],J,E,G,I,H=!1,L=!1,M,P,Z=!0,F=function(){var a="undefined"!=typeof x.getElementById&&"undefined"!=typeof x.getElementsByTagName&&"undefined"!=typeof x.createElement,b=y.userAgent.toLowerCase(),c=y.platform.toLowerCase(),d=c?/win/.test(c):/win/.test(b),c=c?/mac/.test(c):/mac/.test(b),
b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,e=!+"\v1",f=[0,0,0],g=null;if("undefined"!=typeof y.plugins&&typeof y.plugins[gvjs_3R]==gvjs_6a)!(g=y.plugins[gvjs_3R].description)||"undefined"!=typeof y.mimeTypes&&y.mimeTypes[gvjs_4R]&&!y.mimeTypes[gvjs_4R].enabledPlugin||(z=!0,e=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),f[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),f[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),f[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,
"$1"),10):0);else if("undefined"!=typeof v.ActiveXObject)try{if(g=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"))e=!0,g=g.split(" ")[1].split(","),f=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]}catch(ra){}return{Pw:a,fE:f,du:b,tn:e,bo:d,lea:c}}();(function(){F.Pw&&(("undefined"!=typeof x.readyState&&x.readyState==gvjs_Vj||"undefined"==typeof x.readyState&&(x.getElementsByTagName(gvjs_0j)[0]||x.body))&&a(),H||("undefined"!=typeof x.addEventListener&&x.addEventListener("DOMContentLoaded",
a,!1),F.tn&&F.bo&&(x.attachEvent(gvjs_Fi,function(){function b(){x.readyState==gvjs_Vj&&(x.detachEvent(gvjs_Fi,b),a())}return b}()),v==top&&function(){function b(){if(!H){try{x.documentElement.doScroll(gvjs_Oi)}catch(K){setTimeout(b,0);return}a()}}return b}()()),F.du&&function(){function b(){H||(/loaded|complete/.test(x.readyState)?a():setTimeout(b,0))}return b}()(),c(a)))})();(function(){F.tn&&F.bo&&window.attachEvent("onunload",function(){for(var a=D.length,b=0;b<a;b++)D[b][0].detachEvent(D[b][1],
D[b][2]);a=C.length;for(b=0;b<a;b++)n(C[b]);for(var c in F)F[c]=null;F=null;for(var d in gvjs_5R)gvjs_5R[d]=null;gvjs_5R=null})})();return{$Fa:function(a,b,c,d){if(F.Pw&&a&&b){var e={};e.id=a;e.lAa=b;e.Zaa=c;e.yna=d;B[B.length]=e;u(a,!1)}else d&&d({lF:!1,id:a})},tFa:function(a){if(F.Pw)return f(a)},Faa:function(a,c,d,e,f,k,l,n,p,q){var t={lF:!1,id:c};F.Pw&&!(F.du&&312>F.du)&&a&&c&&d&&e&&f?(u(c,!1),b(function(){d+="";e+="";var b={};if(p&&typeof p===gvjs_6a)for(var v in p)b[v]=p[v];b.data=a;b.width=
d;b.height=e;v={};if(n&&typeof n===gvjs_6a)for(var w in n)v[w]=n[w];if(l&&typeof l===gvjs_6a)for(var x in l)v.flashVars="undefined"!=typeof v.flashVars?v.flashVars+("&"+x+"="+l[x]):x+"="+l[x];if(r(f))w=m(b,v,c),b.id==c&&u(c,!0),t.lF=!0,t.Pga=w;else{if(k&&g()){b.data=k;h(b,v,c,q);return}u(c,!0)}q&&q(t)})):q&&q(t)},mGa:function(){Z=!1},qGa:F,sFa:function(){return{KFa:F.fE[0],NFa:F.fE[1],release:F.fE[2]}},AFa:r,gFa:function(a,b,c){if(F.Pw)return m(a,b,c)},iGa:function(a,b,c,d){F.Pw&&g()&&h(a,b,c,d)},
aGa:function(a){F.Pw&&n(a)},fFa:function(a,b,c,d){F.Pw&&t(a,b,c,d)},SEa:b,TEa:c,uFa:function(a){var b=x.location.search||x.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(null==a)return w(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return w(b[c].substring(b[c].indexOf("=")+1))}return""},mFa:function(){if(L){var a=p(gvjs_2R);a&&J&&(a.parentNode.replaceChild(J,a),E&&(u(E,!0),F.tn&&F.bo&&(J.style.display=gvjs_1j)),G&&G(I));L=!1}}}}();
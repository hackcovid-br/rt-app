(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+C2N":function(e,t,n){"use strict";(function(e){}).call(this,n("q1tI"))},"/J7P":function(e,t,n){e.exports=n.p+"static/logoMenu-d43af3ac4328c5f760c6f794532bbf28.svg"},"0h69":function(e,t,n){},"2hh/":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));n("Z6e2");function r(t){var n=t.children,r=t.size,o=t.className+" highlight";return e.createElement("span",{className:o,style:{fontSize:r+"px"}},n)}}).call(this,n("q1tI"))},"64fX":function(e,t,n){},"6IZj":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var r=n("Tgqd");function o(t){var n=t.isVisible,o=t.toggleSidebar;return e.createElement("button",{className:"navbar__toggle",onClick:o},n?e.createElement(r.b,{color:"#d5d5d5",size:24}):e.createElement(r.a,{color:"#d5d5d5",size:24}))}}).call(this,n("q1tI"))},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},"81lf":function(e,t,n){},COQZ:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));n("0h69");var r=n("q1tI"),o=n("gGy4"),i=n("6IZj"),a=n("vZ2W");function c(){var t=Object(r.useState)({showSidebar:!1}),n=t[0],c=t[1];function u(){c({showSidebar:!n.showSidebar})}var s=Object(o.a)();return Object(r.useEffect)((function(){return function(){c({showSidebar:!1})}}),[]),e.createElement(e.Fragment,null,s&&e.createElement(i.a,{isVisible:n.showSidebar,toggleSidebar:u}),e.createElement(a.a,{isVisible:n.showSidebar}),n.showSidebar&&e.createElement("span",{className:"navbar__overlay",onClick:u}))}}).call(this,n("q1tI"))},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,u=e.title,s=c(e,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:a({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},M8b6:function(e,t,n){"use strict";(function(e){n("pr76");var r=n("COQZ"),o=n("Wbzz"),i=(n("+C2N"),n("/J7P")),a=n.n(i);t.a=function(){return e.createElement("header",{className:"header"},e.createElement("div",{className:"container header__container"},e.createElement(o.Link,{to:"/",className:"logo__link"},e.createElement("img",{className:"logo",src:a.a,alt:"HackCovid logo"})),e.createElement(r.a,null)))}}).call(this,n("q1tI"))},OGtf:function(e,t,n){var r=n("XKFU"),o=n("eeVq"),i=n("vhPU"),a=/"/g,c=function(e,t,n,r){var o=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),i=n("hswa").f,a=n("kJMx").f,c=n("quPj"),u=n("C/va"),s=r.RegExp,l=s,f=s.prototype,p=/a/g,d=/a/g,h=new s(p)!==p;if(n("nh4g")&&(!h||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),i=void 0===t;return!n&&r&&e.constructor===s&&i?e:o(h?new l(r&&!i?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&i?u.call(e):t),n?this:f,s)};for(var m=function(e){e in s||i(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},y=a(l),b=0;y.length>b;)m(y[b++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},U1il:function(e,t,n){"use strict";(function(e){n("64fX");var r=n("VVYi"),o=n.n(r),i=n("2hh/"),a=n("gGy4");t.a=function(){var t=Object(a.a)();return e.createElement("footer",{className:"main-footer "+(t?"small":"")},e.createElement("div",{className:"container"},e.createElement("div",{className:"contact"},e.createElement("h4",null,"Fale conosco:"),e.createElement("p",null,"contato",e.createElement(i.a,null,"@"),"hackcovid.com.br")),e.createElement("div",{className:"footer-logo"},e.createElement("img",{src:o.a,alt:"HackCovid"}),e.createElement("h4",null,"HackCovid"))))}}).call(this,n("q1tI"))},VVYi:function(e,t,n){e.exports=n.p+"static/logo-footer-a13dfb1d6f295536dc875a03f29cd7a2.svg"},Z6e2:function(e,t,n){},bmMU:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],n.get(u.value[0])))return!1;return!0}if(i&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(t[u]!==n[u])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,s[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],n[s[u]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},gGy4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(e){void 0===e&&(e="600px");var t=Object(r.useState)(!1),n=t[0],o=t[1];function i(e){var t=e.matches;o(t)}return Object(r.useEffect)((function(){var t=window.matchMedia("(max-width: "+e+")");return o(t.matches),t.addListener(i),function(){return t.removeListener(i)}}),[]),n}},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?o.call(this):"Invalid Date"}))},pr76:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,i,a,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("MgzW"),y=n.n(m),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",O="href",C="http-equiv",S="innerHTML",A="itemprop",k="name",j="property",x="rel",P="src",N="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",q="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",H=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[T.NOSCRIPT,T.SCRIPT,T.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},B=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,T.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,L);return t||r||void 0},Z=function(e){return Q(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==S&&c!==E&&c!==A||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,o),ce(f,p);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,i),metaTags:se(T.META,a),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[h.a.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+B(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+B(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+B(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,o,r),link:pe(T.LINK,i,r),meta:pe(T.META,a,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,u,r),style:pe(T.STYLE,s,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},he=l()((function(e){return{baseTag:J([O,N],e),bodyAttributes:G(b,e),defer:Q(e,q),encode:Q(e,M),htmlAttributes:G(v,e),linkTags:X(T.LINK,[x,O],e),metaTags:X(T.META,[k,w,C,j,A],e),noscriptTags:X(T.NOSCRIPT,[S],e),onChangeClientState:Z(e),scriptTags:X(T.SCRIPT,[P,S],e),styleTags:X(T.STYLE,[E],e),title:W(e),titleAttributes:G(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),me=(o=he,a=i=function(e){function t(){return z(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return D({},r,((t={})[n.type]=[].concat(r[n.type]||[],[D({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return D({},o,((t={})[r.type]=a,t.titleAttributes=D({},i),t));case T.BODY:return D({},o,{bodyAttributes:D({},i)});case T.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((n={})[r.type]=D({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=D({},t);return Object.keys(e).forEach((function(t){var r;n=D({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=D({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},V(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind}).call(this,n("yLpj"))},tCqT:function(e,t,n){"use strict";(function(e){n("81lf");var r=n("U1il"),o=n("M8b6"),i=n("qhky"),a=n("gGy4");t.a=function(t){var n=t.children,c=Object(a.a)();return e.createElement("div",{className:c?"mobile-layout":"desktop-layout"},e.createElement(i.a,null,e.createElement("title",null,"HackCovid"),e.createElement("meta",{name:"description",content:" HackCovid é um projeto social que tem como objetivo auxiliar na diminuição do impacto do covid-19."})),e.createElement(o.a,null),n,e.createElement(r.a,null))}}).call(this,n("q1tI"))},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vZ2W:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));n("f3/d"),n("tUrg");var r=n("YwZP"),o=n("Wbzz");function i(t){var n=t.isVisible,i=r.globalHistory.location.pathname;return e.createElement("ul",{className:"navbar "+(n?"visible":"")},[{name:"Home",link:"/"},{name:"Transmissão",link:"/rt"},{name:"Mobilidade",link:"/mobilidade"},{name:"Casos",link:"/casos"},{name:"Sobre",link:"/sobre"}].map((function(t){return e.createElement("li",{key:t.link},i!==t.link&&e.createElement(o.Link,{to:t.link,className:"navbar__item"},t.name),i===t.link&&e.createElement("span",{className:"navbar__item current"},t.name))})))}}).call(this,n("q1tI"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=9f695ef3b22f785e04f0f40dd0f8c9c02f588707-13d4ed2ca86fb4f65035.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),f=n(4957),l=n(7995),i=n(647),c=n(1992),d=n(639),s=n(4019),p=n(227),v="undefined"!==typeof u.default.useTransition,y={};function h(e,t,n,r){if(e&&f.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;y[t+"%"+n+(o?"%"+o:"")]=!0}}var m=u.default.forwardRef((function(e,t){var n,o=e.href,m=e.as,g=e.children,b=e.prefetch,_=e.passHref,C=e.replace,M=e.soft,x=e.shallow,j=e.scroll,k=e.locale,E=e.onClick,O=e.onMouseEnter,L=e.onTouchStart,R=e.legacyBehavior,w=void 0===R?!0!==Boolean(!1):R,S=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!w||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var P=!1!==b,A=v?u.default.useTransition():[],I=r(A,2)[1],U=u.default.useContext(i.RouterContext),T=u.default.useContext(c.AppRouterContext);T&&(U=T);var Z,H=u.default.useMemo((function(){var e=f.resolveHref(U,o,!0),t=r(e,2),n=t[0],a=t[1];return{href:n,as:m?f.resolveHref(U,m):a||n}}),[U,o,m]),B=H.href,D=H.as,K=u.default.useRef(B),N=u.default.useRef(D);w&&(Z=u.default.Children.only(n));var q=w?Z&&"object"===typeof Z&&Z.ref:t,z=d.useIntersection({rootMargin:"200px"}),F=r(z,3),G=F[0],$=F[1],Q=F[2],W=u.default.useCallback((function(e){N.current===D&&K.current===B||(Q(),N.current=D,K.current=B),G(e),q&&("function"===typeof q?q(e):"object"===typeof q&&(q.current=e))}),[D,q,B,Q,G]);u.default.useEffect((function(){var e=$&&P&&f.isLocalURL(B),t="undefined"!==typeof k?k:U&&U.locale,n=y[B+"%"+D+(t?"%"+t:"")];e&&!n&&h(U,B,D,{locale:t})}),[D,B,$,k,P,U]);var J={ref:W,onClick:function(e){w||"function"!==typeof E||E(e),w&&Z.props&&"function"===typeof Z.props.onClick&&Z.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l,i,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&f.isLocalURL(n)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:l})};c?c(d):d()}}(e,U,B,D,C,M,x,j,k,T?I:void 0)},onMouseEnter:function(e){w||"function"!==typeof O||O(e),w&&Z.props&&"function"===typeof Z.props.onMouseEnter&&Z.props.onMouseEnter(e),f.isLocalURL(B)&&h(U,B,D,{priority:!0})},onTouchStart:function(e){w||"function"!==typeof L||L(e),w&&Z.props&&"function"===typeof Z.props.onTouchStart&&Z.props.onTouchStart(e),f.isLocalURL(B)&&h(U,B,D,{priority:!0})}};if(!w||_||"a"===Z.type&&!("href"in Z.props)){var V="undefined"!==typeof k?k:U&&U.locale,X=U&&U.isLocaleDomain&&s.getDomainLocale(D,V,U.locales,U.domainLocales);J.href=X||p.addBasePath(l.addLocale(D,V,U&&U.defaultLocale))}return w?u.default.cloneElement(Z,J):u.default.createElement("a",Object.assign({},S,J),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!u,c=o.useRef(),d=o.useState(!1),s=r(d,2),p=s[0],v=s[1],y=o.useState(null),h=r(y,2),m=h[0],g=h[1];o.useEffect((function(){if(u){if(c.current&&(c.current(),c.current=void 0),i||p)return;return m&&m.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=f.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},l.push(n),f.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),f.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(m,(function(e){return e&&v(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==c.current||c.current(),c.current=void 0}}if(!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,i,n,t,p]);var b=o.useCallback((function(){v(!1)}),[]);return[g,p,b]};var o=n(7294),a=n(6286),u="function"===typeof IntersectionObserver;var f=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=(0,n(1598).Z)(n(7294)),u=o(n(1585)),f=n(8e3),l=n(5850),i=n(9470);n(9475);function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce(d,[]).reverse().concat(c(t.inAmpMode).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var f=o.key.slice(o.key.indexOf("$")+1);e.has(f)?a=!1:e.add(f)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,i=s.length;l<i;l++){var c=s[l];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var d=o.props[c],p=r[c]||new Set;"name"===c&&u||!p.has(d)?(p.add(d),r[c]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=r({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(e,u)}return a.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=a.useContext(f.AmpStateContext),r=a.useContext(l.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:p,headManager:r,inAmpMode:i.isInAmpMode(n)},t)};t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function f(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),f()}return a((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),a((function(){return t&&(t._pendingUpdate=f),function(){t&&(t._pendingUpdate=f)}})),u((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var o=!1,a=o?function(){}:r.useLayoutEffect,u=o?function(){}:r.useEffect},1664:function(e,t,n){e.exports=n(7942)}}]);
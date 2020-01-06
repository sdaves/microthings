(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.CustomHtml = window.CustomHtml || {};

var preact = require('preact');
for (var i in preact) { window.CustomHtml[i] = preact[i]; }

var proppy = require('proppy');
for (var i in proppy) { window.CustomHtml[i] = proppy[i]; }

var proppyPreact = require('proppy-preact');
for (var i in proppyPreact) { window.CustomHtml[i] = proppyPreact[i]; }

},{"preact":3,"proppy":14,"proppy-preact":8}],2:[function(require,module,exports){
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t((n=n||self).preactContext={},n.preact)}(this,function(n,t){"use strict";var i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])})(n,t)};function r(n,t){function r(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var e={register:function(n){console.warn("Consumer used without a Provider")},unregister:function(n){},val:function(n){}};function u(n){var t=n.children;return{child:1===t.length?t[0]:null,children:t}}function o(n){return u(n).child||"render"in n&&n.render}var c=1073741823,f=function(){return c},s=0;function a(n,i){var a="_preactContextProvider-"+s++;return{Provider:function(n){function e(t){var r=n.call(this,t)||this;return r.t=function(n,t){var i=[],r=n,e=function(n){return 0|t(r,n)};return{register:function(n){i.push(n),n(r,e(r))},unregister:function(n){i=i.filter(function(t){return t!==n})},val:function(n){if(void 0===n||n==r)return r;var t=e(n);return r=n,i.forEach(function(i){return i(n,t)}),r}}}(t.value,i||f),r}return r(e,n),e.prototype.getChildContext=function(){var n;return(n={})[a]=this.t,n},e.prototype.componentDidUpdate=function(){this.t.val(this.props.value)},e.prototype.render=function(){var n=u(this.props),i=n.child,r=n.children;return i||t.h("span",null,r)},e}(t.Component),Consumer:function(t){function i(i,r){var e=t.call(this,i,r)||this;return e.i=function(n,t){var i=e.props.unstable_observedBits,r=void 0===i||null===i?c:i;0!=((r|=0)&t)&&e.setState({value:n})},e.state={value:e.u().val()||n},e}return r(i,t),i.prototype.componentDidMount=function(){this.u().register(this.i)},i.prototype.shouldComponentUpdate=function(n,t){return this.state.value!==t.value||o(this.props)!==o(n)},i.prototype.componentWillUnmount=function(){this.u().unregister(this.i)},i.prototype.componentDidUpdate=function(n,t,i){var r=i[a];r!==this.context[a]&&((r||e).unregister(this.i),this.componentDidMount())},i.prototype.render=function(){var n="render"in this.props&&this.props.render,t=o(this.props);if(n&&n!==t&&console.warn("Both children and a render function are defined. Children will be used"),"function"==typeof t)return t(this.state.value);console.warn("Consumer is expecting a function as one and only child but didn't find any")},i.prototype.u=function(){return this.context[a]||e},i}(t.Component)}}var h=a;n.default=a,n.createContext=h,Object.defineProperty(n,"__esModule",{value:!0})});
},{"preact":3}],3:[function(require,module,exports){
var n,l,u,t,i,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function p(n,l,u){var t,i=arguments,o={};for(t in l)"key"!==t&&"ref"!==t&&(o[t]=l[t]);if(arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(i[t]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===o[t]&&(o[t]=n.defaultProps[t]);return h(n,o,l&&l.key,l&&l.ref)}function h(l,u,t,i){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function v(n){return n.children}function y(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function m(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m(n)}}function x(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(w)}function w(){var n,l,t,i,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(t=[],i=N(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,t,null==r?d(o):r),T(t,o),i!=r&&m(o)))}function g(n,l,u,t,i,o,r,c,s){var p,h,v,y,m,x,w,g=u&&u.__k||e,_=g.length;if(c==f&&(c=null!=o?o[0]:_?d(u,0):null),p=0,l.__k=k(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(v=g[p])||v&&u.key==v.key&&u.type===v.type)g[p]=void 0;else for(h=0;h<_;h++){if((v=g[h])&&u.key==v.key&&u.type===v.type){g[h]=void 0;break}v=null}if(y=N(n,u,v=v||f,t,i,o,r,c,s),(h=u.ref)&&v.ref!=h&&(w||(w=[]),v.ref&&w.push(v.ref,null,u),w.push(h,u.__c||y,u)),null!=y){if(null==x&&(x=y),null!=u.__d)y=u.__d,u.__d=null;else if(o==v||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(m=c,h=0;(m=m.nextSibling)&&h<_;h+=2)if(m==y)break n;n.insertBefore(y,c)}"option"==l.type&&(n.value="")}c=y.nextSibling,"function"==typeof l.type&&(l.__d=y)}}return p++,u}),l.__e=x,null!=o&&"function"!=typeof l.type)for(p=o.length;p--;)null!=o[p]&&a(o[p]);for(p=_;p--;)null!=g[p]&&z(g[p],g[p]);if(w)for(p=0;p<w.length;p++)j(w[p],w[++p],w[++p])}function k(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)k(n[t],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?h(null,n,null,null):null!=n.__e||null!=n.__c?h(n.type,n.props,n.key,null):n):n);return u}function _(n,l,u,t,i){var o;for(o in u)o in l||C(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],t)}function b(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function C(n,l,u,t,i){var o,r,f,e,c;if(i?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(r in t)u&&r in u||b(o,r,"");if(u)for(f in u)t&&u[f]===t[f]||b(o,f,u[f])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,P,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,P,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function P(l){this.l[l.type](n.event?n.event(l):l)}function N(l,u,t,i,o,r,f,e,c){var a,p,h,d,m,x,w,_,b,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(_=u.props,b=(a=P.contextType)&&i[a.__c],C=a?b?b.props.value:a.__:i,t.__c?w=(p=u.__c=t.__c).__=p.__E:("prototype"in P&&P.prototype.render?u.__c=p=new P(_,C):(u.__c=p=new y(_,C),p.constructor=P,p.render=A),b&&b.sub(p),p.props=_,p.state||(p.state={}),p.context=C,p.__n=i,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,P.getDerivedStateFromProps(_,p.__s))),d=p.props,m=p.state,h)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&_!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(_,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(_,p.__s,C)){for(p.props=_,p.state=p.__s,p.__d=!1,p.__v=u,u.__e=t.__e,u.__k=t.__k,p.__h.length&&f.push(p),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(_,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,m,x)})}p.context=C,p.props=_,p.state=p.__s,(a=n.__r)&&a(u),p.__d=!1,p.__v=u,p.__P=l,a=p.render(p.props,p.state,p.context),u.__k=k(null!=a&&a.type==v&&null==a.key?a.props.children:a),null!=p.getChildContext&&(i=s(s({},i),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(x=p.getSnapshotBeforeUpdate(d,m)),g(l,u,t,i,o,r,f,e,c),p.base=u.__e,p.__h.length&&f.push(p),w&&(p.__E=p.__=null),p.__e=null}else u.__e=$(t.__e,u,t,i,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,t)}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function $(n,l,u,t,i,o,r,c){var s,a,p,h,v,y=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),y!==d&&(n.data=d);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),p=(y=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(y===f)for(y={},v=0;v<n.attributes.length;v++)y[n.attributes[v].name]=n.attributes[v].value;(h||p)&&(h&&p&&h.__html==p.__html||(n.innerHTML=h&&h.__html||""))}_(n,d,y,i,c),l.__k=l.props.children,h||g(n,l,u,t,"foreignObject"!==l.type&&i,o,r,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))}return n}function j(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function z(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&j(i,null,u),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&z(i[r],u,t);null!=o&&a(o)}function A(n,l,u){return this.constructor(n,u)}function D(l,u,t){var i,r,c;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=p(v,null,[l]),c=[],N(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:e.slice.call(u.childNodes),c,t||f,i),T(c,l)}n={__e:function(n,l){for(var u;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError)u.setState(u.constructor.getDerivedStateFromError(n));else{if(null==u.componentDidCatch)continue;u.componentDidCatch(n)}return x(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),x(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),x(this))},y.prototype.render=v,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0,exports.render=D,exports.hydrate=function(n,l){D(n,l,o)},exports.createElement=p,exports.h=p,exports.Fragment=v,exports.createRef=function(){return{}},exports.isValidElement=l,exports.Component=y,exports.cloneElement=function(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),h(n.type,l,l.key||n.key,l.ref||n.ref)},exports.createContext=function(n){var l={},u={__c:"__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&t.some(function(n){n.context=l.value,x(n)})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u},exports.toChildArray=k,exports._e=z,exports.options=n;


},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_context_1 = require("preact-context");
exports.ProppyContext = preact_context_1.createContext({
    providers: {},
});

},{"preact-context":2}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
/**
 * Source: https://gist.github.com/developit/5d879edb820228224dc9
 */
var ProppyProvider = /** @class */ (function (_super) {
    __extends(ProppyProvider, _super);
    function ProppyProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProppyProvider.prototype.getChildContext = function () {
        var _a = this.props, children = _a.children, context = __rest(_a, ["children"]);
        return context;
    };
    ProppyProvider.prototype.render = function (_a) {
        var children = _a.children;
        return (children && children[0]) || null;
    };
    return ProppyProvider;
}(preact_1.Component));
exports.ProppyProvider = ProppyProvider;

},{"preact":3}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var proppy_1 = require("proppy");
var preact_1 = require("preact");
var ProppySubscription = /** @class */ (function (_super) {
    __extends(ProppySubscription, _super);
    function ProppySubscription(props, context) {
        var _this = _super.call(this, props, context) || this;
        var providers = context.providers;
        _this._parent = proppy_1.create({
            initialize: function () {
                this.set(props);
            },
        })(providers);
        _this._p = props.proppyFactory(providers, _this._parent);
        _this.state = {
            proppyProps: _this._p.props,
        };
        return _this;
    }
    // @TODO: this needs attention
    ProppySubscription.prototype.componentWillReceiveProps = function (nextProps) {
        this._parent.set(nextProps.parentProps);
    };
    ProppySubscription.prototype.componentDidMount = function () {
        var _this = this;
        this._p.subscribe(function (proppyProps) {
            return _this.setState({
                proppyProps: proppyProps,
            });
        });
    };
    ProppySubscription.prototype.componentWillUnmount = function () {
        this._p.destroy();
    };
    ProppySubscription.prototype.render = function (props) {
        return props.children[0](Object.assign({}, this.state.proppyProps, props.parentProps));
    };
    return ProppySubscription;
}(preact_1.Component));
exports.ProppySubscription = ProppySubscription;

},{"preact":3,"proppy":14}],7:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var ProppyContext_1 = require("./ProppyContext");
var ProppySubscription_1 = require("./ProppySubscription");
function attach(P) {
    return function (Component) {
        return function (props) {
            return (preact_1.h(ProppyContext_1.ProppyContext.Consumer, null, function (providers) { return (preact_1.h(ProppySubscription_1.ProppySubscription, { parentProps: props, providers: providers || {}, proppyFactory: P }, function (proppyProps) { return preact_1.h(Component, __assign({}, proppyProps)); })); }));
        };
    };
}
exports.attach = attach;

},{"./ProppyContext":4,"./ProppySubscription":6,"preact":3}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProppyProvider_1 = require("./ProppyProvider");
exports.ProppyProvider = ProppyProvider_1.ProppyProvider;
var attach_1 = require("./attach");
exports.attach = attach_1.attach;

},{"./ProppyProvider":5,"./attach":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    if (funcs.length === 0) {
        throw new Error('Cannot compose without any ProppyJS factories');
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return function (providers, parent) {
        if (providers === void 0) { providers = {}; }
        if (parent === void 0) { parent = null; }
        var f = funcs[0](providers, parent);
        for (var i = 1; i < funcs.length; i++) {
            f = funcs[i](providers, f);
        }
        return f;
    };
}
exports.compose = compose;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notify(callbacks, props) {
    callbacks.forEach(function (cb) { return cb(props); });
}
function defaultParentHandler() {
    this.set.apply(this, arguments);
}
function getParentHandler(parent, options) {
    if (!parent ||
        options.handleReceivedProps === false) {
        return;
    }
    if (options.handleReceivedProps === true ||
        options.handleReceivedProps === undefined) {
        return defaultParentHandler;
    }
    return options.handleReceivedProps;
}
function create(options) {
    return function (providers, parent) {
        if (providers === void 0) { providers = {}; }
        var callbacks = [];
        var hasSubscribed = false;
        var parentHandler = getParentHandler(parent, options);
        var parentSubscription;
        var p = {
            props: parent
                ? Object.assign({}, parent.props)
                : {},
            parent: parent,
            providers: providers,
        };
        p.set = function (props, replace) {
            if (replace === void 0) { replace = false; }
            p.props = replace
                ? Object.assign({}, props)
                : Object.assign({}, p.props, props);
            return notify(callbacks, p.props);
        };
        p.subscribe = function (cb) {
            if (!hasSubscribed) {
                hasSubscribed = true;
                if (options.didSubscribe) {
                    options.didSubscribe.apply(p);
                }
            }
            callbacks.push(cb);
            cb(p.props);
            return function () {
                callbacks = callbacks.filter(function (callback) { return cb !== callback; });
            };
        };
        p.destroy = function () {
            if (options.willDestroy) {
                options.willDestroy.apply(p);
            }
            if (parentSubscription) {
                parentSubscription();
                parent.destroy();
            }
            callbacks = [];
        };
        if (options.initialize) {
            options.initialize.apply(p);
        }
        if (parentHandler) {
            parentSubscription = parent.subscribe(function (props) { return parentHandler.apply(p, [props]); });
        }
        return p;
    };
}
exports.create = create;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function didSubscribe(fn) {
    return create_1.create({
        didSubscribe: function () {
            this._u = fn(this.props, this.providers);
        },
        willDestroy: function () {
            if (typeof this._u === 'function') {
                this._u(this.props, this.providers);
            }
        }
    });
}
exports.didSubscribe = didSubscribe;

},{"./create":10}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function emit(fn) {
    return create_1.create({
        didSubscribe: function () {
            var _this = this;
            var cb = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.set.apply(_this, args);
            };
            this._cancel = fn(cb, this.props, this.providers);
        },
        willDestroy: function () {
            if (typeof this._cancel === 'function') {
                this._cancel(this.props);
            }
        }
    });
}
exports.emit = emit;

},{"./create":10}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function handleReceivedProps(fn) {
    return create_1.create({
        handleReceivedProps: fn,
    });
}
exports.handleReceivedProps = handleReceivedProps;

},{"./create":10}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("./compose");
exports.compose = compose_1.compose;
var create_1 = require("./create");
exports.create = create_1.create;
var map_1 = require("./map");
exports.map = map_1.map;
var shouldUpdate_1 = require("./shouldUpdate");
exports.shouldUpdate = shouldUpdate_1.shouldUpdate;
var withHandlers_1 = require("./withHandlers");
exports.withHandlers = withHandlers_1.withHandlers;
var withObservable_1 = require("./withObservable");
exports.withObservable = withObservable_1.withObservable;
var withProps_1 = require("./withProps");
exports.withProps = withProps_1.withProps;
var withReducer_1 = require("./withReducer");
exports.withReducer = withReducer_1.withReducer;
var withState_1 = require("./withState");
exports.withState = withState_1.withState;
var withStateHandlers_1 = require("./withStateHandlers");
exports.withStateHandlers = withStateHandlers_1.withStateHandlers;
var withTimer_1 = require("./withTimer");
exports.withTimer = withTimer_1.withTimer;
var onChange_1 = require("./onChange");
exports.onChange = onChange_1.onChange;
var didSubscribe_1 = require("./didSubscribe");
exports.didSubscribe = didSubscribe_1.didSubscribe;
var willDestroy_1 = require("./willDestroy");
exports.willDestroy = willDestroy_1.willDestroy;
var emit_1 = require("./emit");
exports.emit = emit_1.emit;
var handleReceivedProps_1 = require("./handleReceivedProps");
exports.handleReceivedProps = handleReceivedProps_1.handleReceivedProps;

},{"./compose":9,"./create":10,"./didSubscribe":11,"./emit":12,"./handleReceivedProps":13,"./map":15,"./onChange":16,"./shouldUpdate":17,"./willDestroy":18,"./withHandlers":19,"./withObservable":20,"./withProps":21,"./withReducer":22,"./withState":23,"./withStateHandlers":24,"./withTimer":25}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function map(mapperFn) {
    return create_1.create({
        initialize: function () {
            this.set(mapperFn(this.props, this.providers), true);
        },
        handleReceivedProps: function (parentProps) {
            this.set(mapperFn(parentProps, this.providers), true);
        },
    });
}
exports.map = map;

},{"./create":10}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function onChange(propName, fn) {
    return create_1.create({
        initialize: function () {
            this._prevProps = this.props;
            this._own = {};
            this._i = false;
        },
        handleReceivedProps: function (parentProps) {
            var _this = this;
            if (!this._i) {
                this._i = true;
                return;
            }
            var detector = typeof propName === 'string'
                ? function (p, n) { return p[propName] !== n[propName]; }
                : propName;
            this.set(Object.assign({}, parentProps, this._own));
            var cb = function (newProps) {
                _this._own = newProps;
                _this.set(newProps);
            };
            if (detector(this._prevProps, parentProps)) {
                var result = fn(parentProps, this.providers, cb);
                if (result) {
                    cb(result);
                }
            }
            this._prevProps = this.props;
        },
    });
}
exports.onChange = onChange;

},{"./create":10}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function shouldUpdate(fn) {
    return create_1.create({
        initialize: function () {
            this._prevProps = this.props;
        },
        handleReceivedProps: function (parentProps) {
            if (fn(this._prevProps, parentProps, this.providers)) {
                this.set(parentProps, true);
            }
        },
    });
}
exports.shouldUpdate = shouldUpdate;

},{"./create":10}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function willDestroy(fn) {
    return create_1.create({
        willDestroy: function () {
            fn(this.props, this.providers);
        },
    });
}
exports.willDestroy = willDestroy;

},{"./create":10}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function withHandlers(handlers) {
    return create_1.create({
        initialize: function () {
            var _this = this;
            Object.keys(handlers).forEach(function (k) {
                var _a;
                var v = handlers[k];
                _this.set((_a = {},
                    _a[k] = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return v(_this.props, _this.providers).apply(void 0, args);
                    },
                    _a));
            });
        },
    });
}
exports.withHandlers = withHandlers;

},{"./create":10}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function withObservable(stream$) {
    return create_1.create({
        didSubscribe: function () {
            var _this = this;
            var observable = typeof stream$ === 'function'
                ? stream$(this.props, this.providers)
                : stream$;
            this._observableSubscription = observable.subscribe(function (props) { return _this.set(props); });
        },
        willDestroy: function () {
            this._observableSubscription.unsubscribe();
        },
    });
}
exports.withObservable = withObservable;

},{"./create":10}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function withProps(defaults) {
    if (defaults === void 0) { defaults = {}; }
    return create_1.create({
        initialize: function () {
            var props = typeof defaults === 'function'
                ? defaults(this.props, this.providers)
                : defaults;
            this.set(props);
        },
    });
}
exports.withProps = withProps;

},{"./create":10}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function withReducer(stateName, dispatcherName, reducer, initialState) {
    return create_1.create({
        initialize: function () {
            var _this = this;
            this.props[stateName] = initialState;
            this.props[dispatcherName] = function (action) {
                var _a;
                var payload = typeof action === 'function'
                    ? action(_this.props, _this.providers)
                    : action;
                _this.set((_a = {},
                    _a[stateName] = reducer(_this.props[stateName], payload),
                    _a));
            };
        },
    });
}
exports.withReducer = withReducer;

},{"./create":10}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function withState(stateName, setterName, initialState) {
    return create_1.create({
        initialize: function () {
            var _this = this;
            this.props[stateName] = initialState;
            this.props[setterName] = function (value) {
                var _a;
                _this.set((_a = {},
                    _a[stateName] = value,
                    _a));
            };
        },
    });
}
exports.withState = withState;

},{"./create":10}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function withStateHandlers(initialState, handlers, acceptReceivedProps) {
    if (acceptReceivedProps === void 0) { acceptReceivedProps = true; }
    return create_1.create({
        initialize: function () {
            var _this = this;
            this.set(initialState, !acceptReceivedProps);
            Object.keys(handlers).forEach(function (k) {
                var _a;
                var v = handlers[k];
                _this.set((_a = {},
                    _a[k] = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return _this.set(v(_this.props, _this.providers).apply(void 0, args));
                    },
                    _a));
            });
        },
        handleReceivedProps: acceptReceivedProps,
    });
}
exports.withStateHandlers = withStateHandlers;

},{"./create":10}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
function withTimer(timer, defaults) {
    if (defaults === void 0) { defaults = {}; }
    return create_1.create({
        didSubscribe: function () {
            var _this = this;
            this._t = setTimeout(function () {
                var props = typeof defaults === 'function'
                    ? defaults(_this.props, _this.providers)
                    : defaults;
                _this.set(props);
            }, timer);
        },
        willDestroy: function () {
            clearTimeout(this._t);
        },
    });
}
exports.withTimer = withTimer;

},{"./create":10}]},{},[1]);

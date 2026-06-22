(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function lx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var dd={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function oS(){if(z0)return Fo;z0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var H0;function lS(){return H0||(H0=1,dd.exports=oS()),dd.exports}var f=lS(),hd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function cS(){if(k0)return ct;k0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function S(O,K,ue){this.props=O,this.context=K,this.refs=C,this.updater=ue||b}S.prototype.isReactComponent={},S.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(O,K,ue){this.props=O,this.context=K,this.refs=C,this.updater=ue||b}var D=N.prototype=new y;D.constructor=N,M(D,S.prototype),D.isPureReactComponent=!0;var L=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function j(O,K,ue,ye,Ue,qe){return ue=qe.ref,{$$typeof:r,type:O,key:K,ref:ue!==void 0?ue:null,props:qe}}function A(O,K){return j(O.type,K,void 0,void 0,void 0,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function he(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ue){return K[ue]})}var k=/\/+/g;function ne(O,K){return typeof O=="object"&&O!==null&&O.key!=null?he(""+O.key):K.toString(36)}function se(){}function de(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(se,se):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function $(O,K,ue,ye,Ue){var qe=typeof O;(qe==="undefined"||qe==="boolean")&&(O=null);var ee=!1;if(O===null)ee=!0;else switch(qe){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(O.$$typeof){case r:case e:ee=!0;break;case x:return ee=O._init,$(ee(O._payload),K,ue,ye,Ue)}}if(ee)return Ue=Ue(O),ee=ye===""?"."+ne(O,0):ye,L(Ue)?(ue="",ee!=null&&(ue=ee.replace(k,"$&/")+"/"),$(Ue,K,ue,"",function(Je){return Je})):Ue!=null&&(U(Ue)&&(Ue=A(Ue,ue+(Ue.key==null||O&&O.key===Ue.key?"":(""+Ue.key).replace(k,"$&/")+"/")+ee)),K.push(Ue)),1;ee=0;var Ee=ye===""?".":ye+":";if(L(O))for(var be=0;be<O.length;be++)ye=O[be],qe=Ee+ne(ye,be),ee+=$(ye,K,ue,qe,Ue);else if(be=v(O),typeof be=="function")for(O=be.call(O),be=0;!(ye=O.next()).done;)ye=ye.value,qe=Ee+ne(ye,be++),ee+=$(ye,K,ue,qe,Ue);else if(qe==="object"){if(typeof O.then=="function")return $(de(O),K,ue,ye,Ue);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ee}function I(O,K,ue){if(O==null)return O;var ye=[],Ue=0;return $(O,ye,"","",function(qe){return K.call(ue,qe,Ue++)}),ye}function z(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=ue)},function(ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=ue)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var ce=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ve(){}return ct.Children={map:I,forEach:function(O,K,ue){I(O,function(){K.apply(this,arguments)},ue)},count:function(O){var K=0;return I(O,function(){K++}),K},toArray:function(O){return I(O,function(K){return K})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ct.Component=S,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=N,ct.StrictMode=s,ct.Suspense=g,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ct.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},ct.cache=function(O){return function(){return O.apply(null,arguments)}},ct.cloneElement=function(O,K,ue){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ye=M({},O.props),Ue=O.key,qe=void 0;if(K!=null)for(ee in K.ref!==void 0&&(qe=void 0),K.key!==void 0&&(Ue=""+K.key),K)!H.call(K,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&K.ref===void 0||(ye[ee]=K[ee]);var ee=arguments.length-2;if(ee===1)ye.children=ue;else if(1<ee){for(var Ee=Array(ee),be=0;be<ee;be++)Ee[be]=arguments[be+2];ye.children=Ee}return j(O.type,Ue,void 0,void 0,qe,ye)},ct.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ct.createElement=function(O,K,ue){var ye,Ue={},qe=null;if(K!=null)for(ye in K.key!==void 0&&(qe=""+K.key),K)H.call(K,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Ue[ye]=K[ye]);var ee=arguments.length-2;if(ee===1)Ue.children=ue;else if(1<ee){for(var Ee=Array(ee),be=0;be<ee;be++)Ee[be]=arguments[be+2];Ue.children=Ee}if(O&&O.defaultProps)for(ye in ee=O.defaultProps,ee)Ue[ye]===void 0&&(Ue[ye]=ee[ye]);return j(O,qe,void 0,void 0,null,Ue)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(O){return{$$typeof:m,render:O}},ct.isValidElement=U,ct.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:z}},ct.memo=function(O,K){return{$$typeof:p,type:O,compare:K===void 0?null:K}},ct.startTransition=function(O){var K=B.T,ue={};B.T=ue;try{var ye=O(),Ue=B.S;Ue!==null&&Ue(ue,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(ve,ce)}catch(qe){ce(qe)}finally{B.T=K}},ct.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ct.use=function(O){return B.H.use(O)},ct.useActionState=function(O,K,ue){return B.H.useActionState(O,K,ue)},ct.useCallback=function(O,K){return B.H.useCallback(O,K)},ct.useContext=function(O){return B.H.useContext(O)},ct.useDebugValue=function(){},ct.useDeferredValue=function(O,K){return B.H.useDeferredValue(O,K)},ct.useEffect=function(O,K,ue){var ye=B.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(O,K)},ct.useId=function(){return B.H.useId()},ct.useImperativeHandle=function(O,K,ue){return B.H.useImperativeHandle(O,K,ue)},ct.useInsertionEffect=function(O,K){return B.H.useInsertionEffect(O,K)},ct.useLayoutEffect=function(O,K){return B.H.useLayoutEffect(O,K)},ct.useMemo=function(O,K){return B.H.useMemo(O,K)},ct.useOptimistic=function(O,K){return B.H.useOptimistic(O,K)},ct.useReducer=function(O,K,ue){return B.H.useReducer(O,K,ue)},ct.useRef=function(O){return B.H.useRef(O)},ct.useState=function(O){return B.H.useState(O)},ct.useSyncExternalStore=function(O,K,ue){return B.H.useSyncExternalStore(O,K,ue)},ct.useTransition=function(){return B.H.useTransition()},ct.version="19.1.0",ct}var j0;function Kh(){return j0||(j0=1,hd.exports=cS()),hd.exports}var Z=Kh();const uS=lx(Z);var pd={exports:{}},zo={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function fS(){return G0||(G0=1,function(r){function e(I,z){var ce=I.length;I.push(z);e:for(;0<ce;){var ve=ce-1>>>1,O=I[ve];if(0<l(O,z))I[ve]=z,I[ce]=O,ce=ve;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var z=I[0],ce=I.pop();if(ce!==z){I[0]=ce;e:for(var ve=0,O=I.length,K=O>>>1;ve<K;){var ue=2*(ve+1)-1,ye=I[ue],Ue=ue+1,qe=I[Ue];if(0>l(ye,ce))Ue<O&&0>l(qe,ye)?(I[ve]=qe,I[Ue]=ce,ve=Ue):(I[ve]=ye,I[ue]=ce,ve=ue);else if(Ue<O&&0>l(qe,ce))I[ve]=qe,I[Ue]=ce,ve=Ue;else break e}}return z}function l(I,z){var ce=I.sortIndex-z.sortIndex;return ce!==0?ce:I.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();r.unstable_now=function(){return d.now()-m}}var g=[],p=[],x=1,_=null,v=3,b=!1,M=!1,C=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=I)s(p),z.sortIndex=z.expirationTime,e(g,z);else break;z=i(p)}}function B(I){if(C=!1,L(I),!M)if(i(g)!==null)M=!0,H||(H=!0,ne());else{var z=i(p);z!==null&&$(B,z.startTime-I)}}var H=!1,j=-1,A=5,U=-1;function he(){return S?!0:!(r.unstable_now()-U<A)}function k(){if(S=!1,H){var I=r.unstable_now();U=I;var z=!0;try{e:{M=!1,C&&(C=!1,N(j),j=-1),b=!0;var ce=v;try{t:{for(L(I),_=i(g);_!==null&&!(_.expirationTime>I&&he());){var ve=_.callback;if(typeof ve=="function"){_.callback=null,v=_.priorityLevel;var O=ve(_.expirationTime<=I);if(I=r.unstable_now(),typeof O=="function"){_.callback=O,L(I),z=!0;break t}_===i(g)&&s(g),L(I)}else s(g);_=i(g)}if(_!==null)z=!0;else{var K=i(p);K!==null&&$(B,K.startTime-I),z=!1}}break e}finally{_=null,v=ce,b=!1}z=void 0}}finally{z?ne():H=!1}}}var ne;if(typeof D=="function")ne=function(){D(k)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,de=se.port2;se.port1.onmessage=k,ne=function(){de.postMessage(null)}}else ne=function(){y(k,0)};function $(I,z){j=y(function(){I(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var ce=v;v=z;try{return I()}finally{v=ce}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ce=v;v=I;try{return z()}finally{v=ce}},r.unstable_scheduleCallback=function(I,z,ce){var ve=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ve+ce:ve):ce=ve,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ce+O,I={id:x++,callback:z,priorityLevel:I,startTime:ce,expirationTime:O,sortIndex:-1},ce>ve?(I.sortIndex=ce,e(p,I),i(g)===null&&I===i(p)&&(C?(N(j),j=-1):C=!0,$(B,ce-ve))):(I.sortIndex=O,e(g,I),M||b||(M=!0,H||(H=!0,ne()))),I},r.unstable_shouldYield=he,r.unstable_wrapCallback=function(I){var z=v;return function(){var ce=v;v=z;try{return I.apply(this,arguments)}finally{v=ce}}}}(gd)),gd}var V0;function dS(){return V0||(V0=1,md.exports=fS()),md.exports}var vd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function hS(){if(X0)return Rn;X0=1;var r=Kh();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:g,containerInfo:p,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(g,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(g,p,null,x)},Rn.flushSync=function(g){var p=d.T,x=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=p,s.p=x,s.d.f()}},Rn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Rn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Rn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var x=p.as,_=m(x,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:b}):x==="script"&&s.d.X(g,{crossOrigin:_,integrity:v,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},Rn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=m(x,p.crossOrigin);s.d.L(g,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(g,p){if(typeof g=="string")if(p){var x=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},Rn.requestFormReset=function(g){s.d.r(g)},Rn.unstable_batchedUpdates=function(g,p){return g(p)},Rn.useFormState=function(g,p,x){return d.H.useFormState(g,p,x)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var W0;function pS(){if(W0)return vd.exports;W0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vd.exports=hS(),vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function mS(){if(q0)return zo;q0=1;var r=dS(),e=Kh(),i=pS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var E=!1,w=u.child;w;){if(w===a){E=!0,a=u,o=h;break}if(w===o){E=!0,o=u,a=h;break}w=w.sibling}if(!E){for(w=h.child;w;){if(w===a){E=!0,a=h,o=u;break}if(w===o){E=!0,o=h,a=u;break}w=w.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case D:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var $=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},ve=[],O=-1;function K(t){return{current:t}}function ue(t){0>O||(t.current=ve[O],ve[O]=null,O--)}function ye(t,n){O++,ve[O]=t.current,t.current=n}var Ue=K(null),qe=K(null),ee=K(null),Ee=K(null);function be(t,n){switch(ye(ee,n),ye(qe,t),ye(Ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?h0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=h0(n),t=p0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(Ue),ye(Ue,t)}function Je(){ue(Ue),ue(qe),ue(ee)}function Ke(t){t.memoizedState!==null&&ye(Ee,t);var n=Ue.current,a=p0(n,t.type);n!==a&&(ye(qe,t),ye(Ue,a))}function $e(t){qe.current===t&&(ue(Ue),ue(qe)),Ee.current===t&&(ue(Ee),Lo._currentValue=ce)}var Jt=Object.prototype.hasOwnProperty,pt=r.unstable_scheduleCallback,yt=r.unstable_cancelCallback,Ot=r.unstable_shouldYield,ot=r.unstable_requestPaint,Mt=r.unstable_now,G=r.unstable_getCurrentPriorityLevel,Yt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,Ve=r.unstable_LowPriority,P=r.unstable_IdlePriority,T=r.log,W=r.unstable_setDisableYieldValue,me=null,xe=null;function fe(t){if(typeof T=="function"&&W(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(me,t)}catch{}}var Le=Math.clz32?Math.clz32:et,Ce=Math.log,Ze=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Ce(t)/Ze|0)|0}var Me=256,Ae=4194304;function Be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function He(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=Be(o):(E&=w,E!==0?u=Be(E):a||(a=w&~t,a!==0&&(u=Be(a))))):(w=o&~h,w!==0?u=Be(w):E!==0?u=Be(E):a||(a=o&~t,a!==0&&(u=Be(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Re(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function we(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,h){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,F=t.expirationTimes,te=t.hiddenUpdates;for(a=E&~a;0<a;){var ge=31-Le(a),Se=1<<ge;w[ge]=0,F[ge]=-1;var ae=te[ge];if(ae!==null)for(te[ge]=null,ge=0;ge<ae.length;ge++){var re=ae[ge];re!==null&&(re.lane&=-536870913)}a&=~Se}o!==0&&pe(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(E&~n))}function pe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Le(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function ke(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Le(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:L0(t.type))}function fi(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var vn=Math.random().toString(36).slice(2),dn="__reactFiber$"+vn,xn="__reactProps$"+vn,Aa="__reactContainer$"+vn,Bs="__reactEvents$"+vn,cl="__reactListeners$"+vn,Vi="__reactHandles$"+vn,Fs="__reactResources$"+vn,wa="__reactMarker$"+vn;function zs(t){delete t[dn],delete t[xn],delete t[Bs],delete t[cl],delete t[Vi]}function di(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Aa]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=x0(t);t!==null;){if(a=t[dn])return a;t=x0(t)}return n}t=a,a=t.parentNode}return null}function Xi(t){if(t=t[dn]||t[Aa]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ei(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Wi(t){var n=t[Fs];return n||(n=t[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[wa]=!0}var ul=new Set,fl={};function qi(t,n){Ra(t,n),Ra(t+"Capture",n)}function Ra(t,n){for(fl[t]=n,t=0;t<n.length;t++)ul.add(n[t])}var uu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dl={},R={};function q(t){return Jt.call(R,t)?!0:Jt.call(dl,t)?!1:uu.test(t)?R[t]=!0:(dl[t]=!0,!1)}function oe(t,n,a){if(q(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Q(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var De,Fe;function Ne(t){if(De===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);De=n&&n[1]||"",Fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+De+t+Fe}var je=!1;function Xe(t,n){if(!t||je)return"";je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(re){var ae=re}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(re){ae=re}t.call(Se.prototype)}}else{try{throw Error()}catch(re){ae=re}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(re){if(re&&ae&&typeof re.stack=="string")return[re.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),E=h[0],w=h[1];if(E&&w){var F=E.split(`
`),te=w.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===te.length)for(o=F.length-1,u=te.length-1;1<=o&&0<=u&&F[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==te[u]){var ge=`
`+F[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{je=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ne(a):""}function st(t){switch(t.tag){case 26:case 27:case 5:return Ne(t.type);case 16:return Ne("Lazy");case 13:return Ne("Suspense");case 19:return Ne("SuspenseList");case 0:case 15:return Xe(t.type,!1);case 11:return Xe(t.type.render,!1);case 1:return Xe(t.type,!0);case 31:return Ne("Activity");default:return""}}function rt(t){try{var n="";do n+=st(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t){var n=Rt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,h.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){t._valueTracker||(t._valueTracker=Zt(t))}function Ct(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Rt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var We=/[\n"\\]/g;function Vt(t){return t.replace(We,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vt(t,n,a,o,u,h,E,w){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Bn(t,E,ze(n)):a!=null?Bn(t,E,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+ze(w):t.removeAttribute("name")}function In(t,n,a,o,u,h,E,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Bn(t,n,a){n==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Yi(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function Ut(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if($(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Wt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ti=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ti.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&an(t,h,n[h])}function Ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),r_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return r_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var fu=null;function du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,ks=null;function mp(t){var n=Xi(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(vt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ct(o)}break e;case"textarea":Yi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Fn(t,!!a.multiple,n,!1)}}}var hu=!1;function gp(t,n,a){if(hu)return t(n,a);hu=!0;try{var o=t(n);return o}finally{if(hu=!1,(Hs!==null||ks!==null)&&($l(),Hs&&(n=Hs,t=ks,ks=Hs=null,mp(n),t)))for(n=0;n<t.length;n++)mp(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Zi)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{pu=!1}var Ca=null,mu=null,ml=null;function vp(){if(ml)return ml;var t,n=mu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[h-o];o++);return ml=u.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function xp(){return!1}function zn(t){function n(a,o,u,h,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?vl:xp,this.isPropagationStopped=xp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=zn(os),qr=x({},os,{view:0,detail:0}),o_=zn(qr),gu,vu,Yr,_l=x({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(gu=t.screenX-Yr.screenX,vu=t.screenY-Yr.screenY):vu=gu=0,Yr=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),_p=zn(_l),l_=x({},_l,{dataTransfer:0}),c_=zn(l_),u_=x({},qr,{relatedTarget:0}),xu=zn(u_),f_=x({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),d_=zn(f_),h_=x({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p_=zn(h_),m_=x({},os,{data:0}),yp=zn(m_),g_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function __(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=x_[t])?!!n[t]:!1}function _u(){return __}var y_=x({},qr,{key:function(t){if(t.key){var n=g_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S_=zn(y_),b_=x({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=zn(b_),M_=x({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),E_=zn(M_),T_=x({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),A_=zn(T_),w_=x({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R_=zn(w_),C_=x({},os,{newState:0,oldState:0}),N_=zn(C_),D_=[9,13,27,32],yu=Zi&&"CompositionEvent"in window,Zr=null;Zi&&"documentMode"in document&&(Zr=document.documentMode);var U_=Zi&&"TextEvent"in window&&!Zr,bp=Zi&&(!yu||Zr&&8<Zr&&11>=Zr),Mp=" ",Ep=!1;function Tp(t,n){switch(t){case"keyup":return D_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function L_(t,n){switch(t){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(Ep=!0,Mp);case"textInput":return t=n.data,t===Mp&&Ep?null:t;default:return null}}function O_(t,n){if(js)return t==="compositionend"||!yu&&Tp(t,n)?(t=vp(),ml=mu=Ca=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var P_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!P_[t.type]:n==="textarea"}function Rp(t,n,a,o){Hs?ks?ks.push(o):ks=[o]:Hs=o,n=sc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Kr=null,Qr=null;function I_(t){l0(t,0)}function yl(t){var n=Ei(t);if(Ct(n))return t}function Cp(t,n){if(t==="change")return n}var Np=!1;if(Zi){var Su;if(Zi){var bu="oninput"in document;if(!bu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),bu=typeof Dp.oninput=="function"}Su=bu}else Su=!1;Np=Su&&(!document.documentMode||9<document.documentMode)}function Up(){Kr&&(Kr.detachEvent("onpropertychange",Lp),Qr=Kr=null)}function Lp(t){if(t.propertyName==="value"&&yl(Qr)){var n=[];Rp(n,Qr,t,du(t)),gp(I_,n)}}function B_(t,n,a){t==="focusin"?(Up(),Kr=n,Qr=a,Kr.attachEvent("onpropertychange",Lp)):t==="focusout"&&Up()}function F_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Qr)}function z_(t,n){if(t==="click")return yl(n)}function H_(t,n){if(t==="input"||t==="change")return yl(n)}function k_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:k_;function Jr(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Jt.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function Op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,n){var a=Op(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Op(a)}}function Ip(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ip(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nn(t.document)}return n}function Mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var j_=Zi&&"documentMode"in document&&11>=document.documentMode,Gs=null,Eu=null,$r=null,Tu=!1;function Fp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||Gs==null||Gs!==nn(o)||(o=Gs,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$r&&Jr($r,o)||($r=o,o=sc(Eu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gs)))}function ls(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vs={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Au={},zp={};Zi&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function cs(t){if(Au[t])return Au[t];if(!Vs[t])return t;var n=Vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Au[t]=n[a];return t}var Hp=cs("animationend"),kp=cs("animationiteration"),jp=cs("animationstart"),G_=cs("transitionrun"),V_=cs("transitionstart"),X_=cs("transitioncancel"),Gp=cs("transitionend"),Vp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function pi(t,n){Vp.set(t,n),qi(n,[t])}var Xp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=Xp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:rt(n)},Xp.set(t,n),n)}return{value:t,source:n,stack:rt(n)}}var ni=[],Xs=0,Ru=0;function Sl(){for(var t=Xs,n=Ru=Xs=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var h=ni[n];if(ni[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}h!==0&&Wp(a,u,h)}}function bl(t,n,a,o){ni[Xs++]=t,ni[Xs++]=n,ni[Xs++]=a,ni[Xs++]=o,Ru|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Cu(t,n,a,o){return bl(t,n,a,o),Ml(t)}function Ws(t,n){return bl(t,null,null,n),Ml(t)}function Wp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Le(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Ml(t){if(50<To)throw To=0,If=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qs={};function W_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new W_(t,n,a,o)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function El(t,n,a,o,u,h){var E=0;if(o=t,typeof t=="function")Nu(t)&&(E=1);else if(typeof t=="string")E=Yy(t,a,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Wn(31,a,n,u),t.elementType=U,t.lanes=h,t;case M:return us(a.children,u,h,n);case C:E=8,u|=24;break;case S:return t=Wn(12,a,n,u|2),t.elementType=S,t.lanes=h,t;case B:return t=Wn(13,a,n,u),t.elementType=B,t.lanes=h,t;case H:return t=Wn(19,a,n,u),t.elementType=H,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case D:E=10;break e;case N:E=9;break e;case L:E=11;break e;case j:E=14;break e;case A:E=16,o=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Wn(E,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function us(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function Du(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Uu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ys=[],Zs=0,Tl=null,Al=0,ii=[],ai=0,fs=null,Qi=1,Ji="";function ds(t,n){Ys[Zs++]=Al,Ys[Zs++]=Tl,Tl=t,Al=n}function Yp(t,n,a){ii[ai++]=Qi,ii[ai++]=Ji,ii[ai++]=fs,fs=t;var o=Qi;t=Ji;var u=32-Le(o)-1;o&=~(1<<u),a+=1;var h=32-Le(n)+u;if(30<h){var E=u-u%5;h=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Qi=1<<32-Le(n)+u|a<<u|o,Ji=h+t}else Qi=1<<h|a<<u|o,Ji=t}function Lu(t){t.return!==null&&(ds(t,1),Yp(t,1,0))}function Ou(t){for(;t===Tl;)Tl=Ys[--Zs],Ys[Zs]=null,Al=Ys[--Zs],Ys[Zs]=null;for(;t===fs;)fs=ii[--ai],ii[ai]=null,Ji=ii[--ai],ii[ai]=null,Qi=ii[--ai],ii[ai]=null}var Un=null,$t=null,Nt=!1,hs=null,wi=!1,Pu=Error(s(519));function ps(t){var n=Error(s(418,""));throw no(ti(n,t)),Pu}function Zp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[xn]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)gt(wo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),jt(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Ut(n,o.value,o.defaultValue,o.children),jt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||d0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=rc),n=!0):n=!1,n||ps(t)}function Kp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Un=Un.return}}function eo(t){if(t!==Un)return!1;if(!Nt)return Kp(t),Nt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Jf(t.type,t.memoizedProps)),a=!a),a&&$t&&ps(t),Kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=gi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Xa(t.type)?(t=nd,nd=null,$t=t):$t=n):$t=Un?gi(t.stateNode.nextSibling):null;return!0}function to(){$t=Un=null,Nt=!1}function Qp(){var t=hs;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),hs=null),t}function no(t){hs===null?hs=[t]:hs.push(t)}var Iu=K(null),ms=null,$i=null;function Na(t,n,a){ye(Iu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Iu.current,ue(Iu)}function Bu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Fu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var E=u.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=u;for(var F=0;F<n.length;F++)if(w.context===n[F]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),Bu(h.return,a,t),o||(E=null);break e}h=w.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=a,h=E.alternate,h!==null&&(h.lanes|=a),Bu(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function io(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=u.type;Xn(u.pendingProps.value,E.value)||(t!==null?t.push(w):t=[w])}}else if(u===Ee.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&Fu(n,t,a,o),n.flags|=262144}function wl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){ms=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Jp(ms,t)}function Rl(t,n){return ms===null&&gs(t),Jp(t,n)}function Jp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var q_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Y_=r.unstable_scheduleCallback,Z_=r.unstable_NormalPriority,hn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new q_,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&Y_(Z_,function(){t.controller.abort()})}var so=null,Hu=0,Ks=0,Qs=null;function K_(t,n){if(so===null){var a=so=[];Hu=0,Ks=Gf(),Qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Hu++,n.then($p,$p),n}function $p(){if(--Hu===0&&so!==null){Qs!==null&&(Qs.status="fulfilled");var t=so;so=null,Ks=0,Qs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Q_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var em=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&K_(t,n),em!==null&&em(t,n)};var vs=K(null);function ku(){var t=vs.current;return t!==null?t:Xt.pooledCache}function Cl(t,n){n===null?ye(vs,vs.current):ye(vs,n.pool)}function tm(){var t=ku();return t===null?null:{parent:hn._currentValue,pool:t}}var ro=Error(s(460)),nm=Error(s(474)),Nl=Error(s(542)),ju={then:function(){}};function im(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Dl(){}function am(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Dl,Dl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t;default:if(typeof n.status=="string")n.then(Dl,Dl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t}throw oo=n,ro}}var oo=null;function sm(){if(oo===null)throw Error(s(459));var t=oo;return oo=null,t}function rm(t){if(t===ro||t===Nl)throw Error(s(483))}var Da=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ml(t),Wp(t,null,a),n}return bl(t,o,n,a),Ml(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ke(t,a)}}function Xu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wu=!1;function co(){if(Wu){var t=Qs;if(t!==null)throw t}}function uo(t,n,a,o){Wu=!1;var u=t.updateQueue;Da=!1;var h=u.firstBaseUpdate,E=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var F=w,te=F.next;F.next=null,E===null?h=te:E.next=te,E=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,w=ge.lastBaseUpdate,w!==E&&(w===null?ge.firstBaseUpdate=te:w.next=te,ge.lastBaseUpdate=F))}if(h!==null){var Se=u.baseState;E=0,ge=te=F=null,w=h;do{var ae=w.lane&-536870913,re=ae!==w.lane;if(re?(_t&ae)===ae:(o&ae)===ae){ae!==0&&ae===Ks&&(Wu=!0),ge!==null&&(ge=ge.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var it=t,Qe=w;ae=n;var Ht=a;switch(Qe.tag){case 1:if(it=Qe.payload,typeof it=="function"){Se=it.call(Ht,Se,ae);break e}Se=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=Qe.payload,ae=typeof it=="function"?it.call(Ht,Se,ae):it,ae==null)break e;Se=x({},Se,ae);break e;case 2:Da=!0}}ae=w.callback,ae!==null&&(t.flags|=64,re&&(t.flags|=8192),re=u.callbacks,re===null?u.callbacks=[ae]:re.push(ae))}else re={lane:ae,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ge===null?(te=ge=re,F=Se):ge=ge.next=re,E|=ae;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;re=w,w=re.next,re.next=null,u.lastBaseUpdate=re,u.shared.pending=null}}while(!0);ge===null&&(F=Se),u.baseState=F,u.firstBaseUpdate=te,u.lastBaseUpdate=ge,h===null&&(u.shared.lanes=0),ka|=E,t.lanes=E,t.memoizedState=Se}}function om(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)om(a[t],n)}var Js=K(null),Ul=K(0);function cm(t,n){t=oa,ye(Ul,t),ye(Js,n),oa=t|n.baseLanes}function qu(){ye(Ul,oa),ye(Js,Js.current)}function Yu(){oa=Ul.current,ue(Js),ue(Ul)}var Oa=0,dt=null,Ft=null,ln=null,Ll=!1,$s=!1,xs=!1,Ol=0,fo=0,er=null,J_=0;function sn(){throw Error(s(321))}function Zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Ku(t,n,a,o,u,h){return Oa=h,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Wm:qm,xs=!1,h=a(o,u),xs=!1,$s&&(h=fm(n,a,o,u)),um(t),h}function um(t){I.H=Hl;var n=Ft!==null&&Ft.next!==null;if(Oa=0,ln=Ft=dt=null,Ll=!1,fo=0,er=null,n)throw Error(s(300));t===null||_n||(t=t.dependencies,t!==null&&wl(t)&&(_n=!0))}function fm(t,n,a,o){dt=t;var u=0;do{if($s&&(er=null),fo=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,ln=Ft=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=sy,h=n(a,o)}while($s);return h}function $_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Ft!==null?Ft.memoizedState:null)!==t&&(dt.flags|=1024),n}function Qu(){var t=Ol!==0;return Ol=0,t}function Ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $u(t){if(Ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ll=!1}Oa=0,ln=Ft=dt=null,$s=!1,fo=Ol=0,er=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?dt.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(Ft===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var n=ln===null?dt.memoizedState:ln.next;if(n!==null)ln=n,Ft=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},ln===null?dt.memoizedState=ln=t:ln=ln.next=t}return ln}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,er===null&&(er=[]),t=am(er,t,n),n=dt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Wm:qm),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===D)return wn(t)}throw Error(s(438,String(t)))}function tf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ef(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=he;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Il(t){var n=cn();return nf(n,Ft,t)}function nf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var E=u.next;u.next=h.next,h.next=E}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var w=E=null,F=null,te=n,ge=!1;do{var Se=te.lane&-536870913;if(Se!==te.lane?(_t&Se)===Se:(Oa&Se)===Se){var ae=te.revertLane;if(ae===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Se===Ks&&(ge=!0);else if((Oa&ae)===ae){te=te.next,ae===Ks&&(ge=!0);continue}else Se={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(w=F=Se,E=h):F=F.next=Se,dt.lanes|=ae,ka|=ae;Se=te.action,xs&&a(h,Se),h=te.hasEagerState?te.eagerState:a(h,Se)}else ae={lane:Se,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(w=F=ae,E=h):F=F.next=ae,dt.lanes|=Se,ka|=Se;te=te.next}while(te!==null&&te!==n);if(F===null?E=h:F.next=w,!Xn(h,t.memoizedState)&&(_n=!0,ge&&(a=Qs,a!==null)))throw a;t.memoizedState=h,t.baseState=E,t.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function af(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do h=t(h,E.action),E=E.next;while(E!==u);Xn(h,n.memoizedState)||(_n=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function dm(t,n,a){var o=dt,u=cn(),h=Nt;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var E=!Xn((Ft||u).memoizedState,a);E&&(u.memoizedState=a,_n=!0),u=u.queue;var w=mm.bind(null,o,u,t);if(po(2048,8,w,[t]),u.getSnapshot!==n||E||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,tr(9,Bl(),pm.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));h||(Oa&124)!==0||hm(o,n,a)}return a}function hm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=ef(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function pm(t,n,a,o){n.value=a,n.getSnapshot=o,gm(n)&&vm(t)}function mm(t,n,a){return a(function(){gm(n)&&vm(t)})}function gm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function vm(t){var n=Ws(t,2);n!==null&&Qn(n,t,2)}function sf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),xs){fe(!0);try{a()}finally{fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function xm(t,n,a,o){return t.baseState=a,nf(t,Ft,typeof o=="function"?o:ta)}function ey(t,n,a,o,u){if(zl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,_m(n,h)):(h.next=a.next,n.pending=a.next=h)}}function _m(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=I.T,E={};I.T=E;try{var w=a(u,o),F=I.S;F!==null&&F(E,w),ym(t,n,w)}catch(te){rf(t,n,te)}finally{I.T=h}}else try{h=a(u,o),ym(t,n,h)}catch(te){rf(t,n,te)}}function ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sm(t,n,o)},function(o){return rf(t,n,o)}):Sm(t,n,a)}function Sm(t,n,a){n.status="fulfilled",n.value=a,bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_m(t,a)))}function rf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,bm(n),n=n.next;while(n!==o)}t.action=null}function bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mm(t,n){return n}function Em(t,n){if(Nt){var a=Xt.formState;if(a!==null){e:{var o=dt;if(Nt){if($t){t:{for(var u=$t,h=wi;u.nodeType!==8;){if(!h){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){$t=gi(u.nextSibling),o=u.data==="F!";break e}}ps(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:n},a.queue=o,a=Gm.bind(null,dt,o),o.dispatch=a,o=sf(!1),h=ff.bind(null,dt,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=ey.bind(null,dt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Tm(t){var n=cn();return Am(n,Ft,t)}function Am(t,n,a){if(n=nf(t,n,Mm)[0],t=Il(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(E){throw E===ro?Nl:E}else o=n;n=cn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,tr(9,Bl(),ty.bind(null,u,a),null)),[o,h,t]}function ty(t,n){t.action=n}function wm(t){var n=cn(),a=Ft;if(a!==null)return Am(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function tr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=ef(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Bl(){return{destroy:void 0,resource:void 0}}function Rm(){return cn().memoizedState}function Fl(t,n,a,o){var u=Hn();o=o===void 0?null:o,dt.flags|=t,u.memoizedState=tr(1|n,Bl(),a,o)}function po(t,n,a,o){var u=cn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ft!==null&&o!==null&&Zu(o,Ft.memoizedState.deps)?u.memoizedState=tr(n,h,a,o):(dt.flags|=t,u.memoizedState=tr(1|n,h,a,o))}function Cm(t,n){Fl(8390656,8,t,n)}function Nm(t,n){po(2048,8,t,n)}function Dm(t,n){return po(4,2,t,n)}function Um(t,n){return po(4,4,t,n)}function Lm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Om(t,n,a){a=a!=null?a.concat([t]):null,po(4,4,Lm.bind(null,n,t),a)}function of(){}function Pm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Zu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Im(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Zu(n,o[1]))return o[0];if(o=t(),xs){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o}function lf(t,n,a){return a===void 0||(Oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=zg(),dt.lanes|=t,ka|=t,a)}function Bm(t,n,a,o){return Xn(a,n)?a:Js.current!==null?(t=lf(t,a,o),Xn(t,n)||(_n=!0),t):(Oa&42)===0?(_n=!0,t.memoizedState=a):(t=zg(),dt.lanes|=t,ka|=t,n)}function Fm(t,n,a,o,u){var h=z.p;z.p=h!==0&&8>h?h:8;var E=I.T,w={};I.T=w,ff(t,!1,n,a);try{var F=u(),te=I.S;if(te!==null&&te(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ge=Q_(F,o);mo(t,n,ge,Kn(t))}else mo(t,n,o,Kn(t))}catch(Se){mo(t,n,{then:function(){},status:"rejected",reason:Se},Kn())}finally{z.p=h,I.T=E}}function ny(){}function cf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=zm(t).queue;Fm(t,u,n,ce,a===null?ny:function(){return Hm(t),a(o)})}function zm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:ce},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hm(t){var n=zm(t).next.queue;mo(t,n,{},Kn())}function uf(){return wn(Lo)}function km(){return cn().memoizedState}function jm(){return cn().memoizedState}function iy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=Ua(a);var o=La(n,t,a);o!==null&&(Qn(o,n,a),lo(o,n,a)),n={cache:zu()},t.payload=n;return}n=n.return}}function ay(t,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zl(t)?Vm(n,a):(a=Cu(t,n,a,o),a!==null&&(Qn(a,t,o),Xm(a,n,o)))}function Gm(t,n,a){var o=Kn();mo(t,n,a,o)}function mo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(t))Vm(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var E=n.lastRenderedState,w=h(E,a);if(u.hasEagerState=!0,u.eagerState=w,Xn(w,E))return bl(t,n,u,0),Xt===null&&Sl(),!1}catch{}finally{}if(a=Cu(t,n,u,o),a!==null)return Qn(a,t,o),Xm(a,n,o),!0}return!1}function ff(t,n,a,o){if(o={lane:2,revertLane:Gf(),action:o,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(n)throw Error(s(479))}else n=Cu(t,a,o,2),n!==null&&Qn(n,t,2)}function zl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Vm(t,n){$s=Ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Xm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ke(t,a)}}var Hl={readContext:wn,use:Pl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Wm={readContext:wn,use:Pl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Cm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Fl(4194308,4,Lm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(xs){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(xs){fe(!0);try{a(n)}finally{fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=ay.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=sf(t);var n=t.queue,a=Gm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:of,useDeferredValue:function(t,n){var a=Hn();return lf(a,t,n)},useTransition:function(){var t=sf(!1);return t=Fm.bind(null,dt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Hn();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(_t&124)!==0||hm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Cm(mm.bind(null,o,h,t),[t]),o.flags|=2048,tr(9,Bl(),pm.bind(null,o,h,a,n),null),a},useId:function(){var t=Hn(),n=Xt.identifierPrefix;if(Nt){var a=Ji,o=Qi;a=(o&~(1<<32-Le(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=J_++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:Em,useActionState:Em,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:tf,useCacheRefresh:function(){return Hn().memoizedState=iy.bind(null,dt)}},qm={readContext:wn,use:Pl,useCallback:Pm,useContext:wn,useEffect:Nm,useImperativeHandle:Om,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Im,useReducer:Il,useRef:Rm,useState:function(){return Il(ta)},useDebugValue:of,useDeferredValue:function(t,n){var a=cn();return Bm(a,Ft.memoizedState,t,n)},useTransition:function(){var t=Il(ta)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:dm,useId:km,useHostTransitionStatus:uf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t,n){var a=cn();return xm(a,Ft,t,n)},useMemoCache:tf,useCacheRefresh:jm},sy={readContext:wn,use:Pl,useCallback:Pm,useContext:wn,useEffect:Nm,useImperativeHandle:Om,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Im,useReducer:af,useRef:Rm,useState:function(){return af(ta)},useDebugValue:of,useDeferredValue:function(t,n){var a=cn();return Ft===null?lf(a,t,n):Bm(a,Ft.memoizedState,t,n)},useTransition:function(){var t=af(ta)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:dm,useId:km,useHostTransitionStatus:uf,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=cn();return Ft!==null?xm(a,Ft,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:jm},nr=null,go=0;function kl(t){var n=go;return go+=1,nr===null&&(nr=[]),am(nr,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function jl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ym(t){var n=t._init;return n(t._payload)}function Zm(t){function n(Y,V){if(t){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Ki(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=67108866,V):J):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,V,J,_e){return V===null||V.tag!==6?(V=Du(J,Y.mode,_e),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function F(Y,V,J,_e){var Ge=J.type;return Ge===M?ge(Y,V,J.props.children,_e,J.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===A&&Ym(Ge)===V.type)?(V=u(V,J.props),vo(V,J),V.return=Y,V):(V=El(J.type,J.key,J.props,null,Y.mode,_e),vo(V,J),V.return=Y,V)}function te(Y,V,J,_e){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Uu(J,Y.mode,_e),V.return=Y,V):(V=u(V,J.children||[]),V.return=Y,V)}function ge(Y,V,J,_e,Ge){return V===null||V.tag!==7?(V=us(J,Y.mode,_e,Ge),V.return=Y,V):(V=u(V,J),V.return=Y,V)}function Se(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Du(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return J=El(V.type,V.key,V.props,null,Y.mode,J),vo(J,V),J.return=Y,J;case b:return V=Uu(V,Y.mode,J),V.return=Y,V;case A:var _e=V._init;return V=_e(V._payload),Se(Y,V,J)}if($(V)||ne(V))return V=us(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return Se(Y,kl(V),J);if(V.$$typeof===D)return Se(Y,Rl(Y,V),J);jl(Y,V)}return null}function ae(Y,V,J,_e){var Ge=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ge!==null?null:w(Y,V,""+J,_e);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===Ge?F(Y,V,J,_e):null;case b:return J.key===Ge?te(Y,V,J,_e):null;case A:return Ge=J._init,J=Ge(J._payload),ae(Y,V,J,_e)}if($(J)||ne(J))return Ge!==null?null:ge(Y,V,J,_e,null);if(typeof J.then=="function")return ae(Y,V,kl(J),_e);if(J.$$typeof===D)return ae(Y,V,Rl(Y,J),_e);jl(Y,J)}return null}function re(Y,V,J,_e,Ge){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Y=Y.get(J)||null,w(V,Y,""+_e,Ge);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case v:return Y=Y.get(_e.key===null?J:_e.key)||null,F(V,Y,_e,Ge);case b:return Y=Y.get(_e.key===null?J:_e.key)||null,te(V,Y,_e,Ge);case A:var ht=_e._init;return _e=ht(_e._payload),re(Y,V,J,_e,Ge)}if($(_e)||ne(_e))return Y=Y.get(J)||null,ge(V,Y,_e,Ge,null);if(typeof _e.then=="function")return re(Y,V,J,kl(_e),Ge);if(_e.$$typeof===D)return re(Y,V,J,Rl(V,_e),Ge);jl(V,_e)}return null}function it(Y,V,J,_e){for(var Ge=null,ht=null,Ye=V,tt=V=0,Sn=null;Ye!==null&&tt<J.length;tt++){Ye.index>tt?(Sn=Ye,Ye=null):Sn=Ye.sibling;var Tt=ae(Y,Ye,J[tt],_e);if(Tt===null){Ye===null&&(Ye=Sn);break}t&&Ye&&Tt.alternate===null&&n(Y,Ye),V=h(Tt,V,tt),ht===null?Ge=Tt:ht.sibling=Tt,ht=Tt,Ye=Sn}if(tt===J.length)return a(Y,Ye),Nt&&ds(Y,tt),Ge;if(Ye===null){for(;tt<J.length;tt++)Ye=Se(Y,J[tt],_e),Ye!==null&&(V=h(Ye,V,tt),ht===null?Ge=Ye:ht.sibling=Ye,ht=Ye);return Nt&&ds(Y,tt),Ge}for(Ye=o(Ye);tt<J.length;tt++)Sn=re(Ye,Y,tt,J[tt],_e),Sn!==null&&(t&&Sn.alternate!==null&&Ye.delete(Sn.key===null?tt:Sn.key),V=h(Sn,V,tt),ht===null?Ge=Sn:ht.sibling=Sn,ht=Sn);return t&&Ye.forEach(function(Ka){return n(Y,Ka)}),Nt&&ds(Y,tt),Ge}function Qe(Y,V,J,_e){if(J==null)throw Error(s(151));for(var Ge=null,ht=null,Ye=V,tt=V=0,Sn=null,Tt=J.next();Ye!==null&&!Tt.done;tt++,Tt=J.next()){Ye.index>tt?(Sn=Ye,Ye=null):Sn=Ye.sibling;var Ka=ae(Y,Ye,Tt.value,_e);if(Ka===null){Ye===null&&(Ye=Sn);break}t&&Ye&&Ka.alternate===null&&n(Y,Ye),V=h(Ka,V,tt),ht===null?Ge=Ka:ht.sibling=Ka,ht=Ka,Ye=Sn}if(Tt.done)return a(Y,Ye),Nt&&ds(Y,tt),Ge;if(Ye===null){for(;!Tt.done;tt++,Tt=J.next())Tt=Se(Y,Tt.value,_e),Tt!==null&&(V=h(Tt,V,tt),ht===null?Ge=Tt:ht.sibling=Tt,ht=Tt);return Nt&&ds(Y,tt),Ge}for(Ye=o(Ye);!Tt.done;tt++,Tt=J.next())Tt=re(Ye,Y,tt,Tt.value,_e),Tt!==null&&(t&&Tt.alternate!==null&&Ye.delete(Tt.key===null?tt:Tt.key),V=h(Tt,V,tt),ht===null?Ge=Tt:ht.sibling=Tt,ht=Tt);return t&&Ye.forEach(function(rS){return n(Y,rS)}),Nt&&ds(Y,tt),Ge}function Ht(Y,V,J,_e){if(typeof J=="object"&&J!==null&&J.type===M&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:e:{for(var Ge=J.key;V!==null;){if(V.key===Ge){if(Ge=J.type,Ge===M){if(V.tag===7){a(Y,V.sibling),_e=u(V,J.props.children),_e.return=Y,Y=_e;break e}}else if(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===A&&Ym(Ge)===V.type){a(Y,V.sibling),_e=u(V,J.props),vo(_e,J),_e.return=Y,Y=_e;break e}a(Y,V);break}else n(Y,V);V=V.sibling}J.type===M?(_e=us(J.props.children,Y.mode,_e,J.key),_e.return=Y,Y=_e):(_e=El(J.type,J.key,J.props,null,Y.mode,_e),vo(_e,J),_e.return=Y,Y=_e)}return E(Y);case b:e:{for(Ge=J.key;V!==null;){if(V.key===Ge)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Y,V.sibling),_e=u(V,J.children||[]),_e.return=Y,Y=_e;break e}else{a(Y,V);break}else n(Y,V);V=V.sibling}_e=Uu(J,Y.mode,_e),_e.return=Y,Y=_e}return E(Y);case A:return Ge=J._init,J=Ge(J._payload),Ht(Y,V,J,_e)}if($(J))return it(Y,V,J,_e);if(ne(J)){if(Ge=ne(J),typeof Ge!="function")throw Error(s(150));return J=Ge.call(J),Qe(Y,V,J,_e)}if(typeof J.then=="function")return Ht(Y,V,kl(J),_e);if(J.$$typeof===D)return Ht(Y,V,Rl(Y,J),_e);jl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Y,V.sibling),_e=u(V,J),_e.return=Y,Y=_e):(a(Y,V),_e=Du(J,Y.mode,_e),_e.return=Y,Y=_e),E(Y)):a(Y,V)}return function(Y,V,J,_e){try{go=0;var Ge=Ht(Y,V,J,_e);return nr=null,Ge}catch(Ye){if(Ye===ro||Ye===Nl)throw Ye;var ht=Wn(29,Ye,null,Y.mode);return ht.lanes=_e,ht.return=Y,ht}finally{}}}var ir=Zm(!0),Km=Zm(!1),si=K(null),Ri=null;function Pa(t){var n=t.alternate;ye(pn,pn.current&1),ye(si,t),Ri===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(Ri=t)}function Qm(t){if(t.tag===22){if(ye(pn,pn.current),ye(si,t),Ri===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ri=t)}}else Ia()}function Ia(){ye(pn,pn.current),ye(si,si.current)}function na(t){ue(si),Ri===t&&(Ri=null),ue(pn)}var pn=K(0);function Gl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function df(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var hf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(Qn(n,t,o),lo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(Qn(n,t,o),lo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=La(t,o,a),n!==null&&(Qn(n,t,a),lo(n,t,a))}};function Jm(t,n,a,o,u,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,E):n.prototype&&n.prototype.isPureReactComponent?!Jr(a,o)||!Jr(u,h):!0}function $m(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&hf.enqueueReplaceState(n,n.state,null)}function _s(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function eg(t){Vl(t)}function tg(t){console.error(t)}function ng(t){Vl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ig(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function ag(t){return t=Ua(t),t.tag=3,t}function sg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){ig(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){ig(n,a,o),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function ry(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&io(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ri===null?Ff():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ju?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Hf(t,o,u)),!1;case 22:return a.flags|=65536,o===ju?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Hf(t,o,u)),!1}throw Error(s(435,a.tag))}return Hf(t,o,u),Ff(),!1}if(Nt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(t=Error(s(422),{cause:o}),no(ti(t,a)))):(o!==Pu&&(n=Error(s(423),{cause:o}),no(ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ti(o,a),u=pf(t.stateNode,o,u),Xu(t,u),en!==4&&(en=2)),!1;var h=Error(s(520),{cause:o});if(h=ti(h,a),Eo===null?Eo=[h]:Eo.push(h),en!==4&&(en=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=pf(a.stateNode,o,t),Xu(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ja===null||!ja.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ag(u),sg(u,t,a,o),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var rg=Error(s(461)),_n=!1;function Mn(t,n,a,o){n.child=t===null?Km(n,null,a,o):ir(n,t.child,a,o)}function og(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var E={};for(var w in o)w!=="ref"&&(E[w]=o[w])}else E=o;return gs(n),o=Ku(t,n,a,E,h,u),w=Qu(),t!==null&&!_n?(Ju(t,n,u),ia(t,n,u)):(Nt&&w&&Lu(n),n.flags|=1,Mn(t,n,o,u),n.child)}function lg(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Nu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,cg(t,n,h,o,u)):(t=El(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!bf(t,u)){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(E,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Ki(h,o),t.ref=n.ref,t.return=n,n.child=t}function cg(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(Jr(h,o)&&t.ref===n.ref)if(_n=!1,n.pendingProps=o=h,bf(t,u))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,ia(t,n,u)}return mf(t,n,a,o,u)}function ug(t,n,a){var o=n.pendingProps,u=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,t!==null){for(u=n.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return fg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,h!==null?h.cachePool:null),h!==null?cm(n,h):qu(),Qm(n);else return n.lanes=n.childLanes=536870912,fg(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Cl(n,h.cachePool),cm(n,h),Ia(),n.memoizedState=null):(t!==null&&Cl(n,null),qu(),Ia());return Mn(t,n,u,a),n.child}function fg(t,n,a,o){var u=ku();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Cl(n,null),qu(),Qm(n),t!==null&&io(t,n,o,!0),null}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function mf(t,n,a,o,u){return gs(n),a=Ku(t,n,a,o,void 0,u),o=Qu(),t!==null&&!_n?(Ju(t,n,u),ia(t,n,u)):(Nt&&o&&Lu(n),n.flags|=1,Mn(t,n,a,u),n.child)}function dg(t,n,a,o,u,h){return gs(n),n.updateQueue=null,a=fm(n,o,a,u),um(t),o=Qu(),t!==null&&!_n?(Ju(t,n,h),ia(t,n,h)):(Nt&&o&&Lu(n),n.flags|=1,Mn(t,n,a,h),n.child)}function hg(t,n,a,o,u){if(gs(n),n.stateNode===null){var h=qs,E=a.contextType;typeof E=="object"&&E!==null&&(h=wn(E)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=hf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Gu(n),E=a.contextType,h.context=typeof E=="object"&&E!==null?wn(E):qs,h.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(df(n,a,E,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&hf.enqueueReplaceState(h,h.state,null),uo(n,o,h,u),co(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var w=n.memoizedProps,F=_s(a,w);h.props=F;var te=h.context,ge=a.contextType;E=qs,typeof ge=="object"&&ge!==null&&(E=wn(ge));var Se=a.getDerivedStateFromProps;ge=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||te!==E)&&$m(n,h,o,E),Da=!1;var ae=n.memoizedState;h.state=ae,uo(n,o,h,u),co(),te=n.memoizedState,w||ae!==te||Da?(typeof Se=="function"&&(df(n,a,Se,o),te=n.memoizedState),(F=Da||Jm(n,a,F,o,ae,te,E))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),h.props=o,h.state=te,h.context=E,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Vu(t,n),E=n.memoizedProps,ge=_s(a,E),h.props=ge,Se=n.pendingProps,ae=h.context,te=a.contextType,F=qs,typeof te=="object"&&te!==null&&(F=wn(te)),w=a.getDerivedStateFromProps,(te=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==Se||ae!==F)&&$m(n,h,o,F),Da=!1,ae=n.memoizedState,h.state=ae,uo(n,o,h,u),co();var re=n.memoizedState;E!==Se||ae!==re||Da||t!==null&&t.dependencies!==null&&wl(t.dependencies)?(typeof w=="function"&&(df(n,a,w,o),re=n.memoizedState),(ge=Da||Jm(n,a,ge,o,ae,re,F)||t!==null&&t.dependencies!==null&&wl(t.dependencies))?(te||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,re,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,re,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=re),h.props=o,h.state=re,h.context=F,o=ge):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Wl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=ir(n,t.child,null,u),n.child=ir(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=ia(t,n,u),t}function pg(t,n,a,o){return to(),n.flags|=256,Mn(t,n,a,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(t){return{baseLanes:t,cachePool:tm()}}function xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function mg(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,E;if((E=h)||(E=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Pa(n):Ia(),Nt){var w=$t,F;if(F=w){e:{for(F=w,w=wi;F.nodeType!==8;){if(!w){w=null;break e}if(F=gi(F.nextSibling),F===null){w=null;break e}}w=F}w!==null?(n.memoizedState={dehydrated:w,treeContext:fs!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},F=Wn(18,null,null,0),F.stateNode=w,F.return=n,n.child=F,Un=n,$t=null,F=!0):F=!1}F||ps(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return td(w)?n.lanes=32:n.lanes=536870912,null;na(n)}return w=o.children,o=o.fallback,u?(Ia(),u=n.mode,w=ql({mode:"hidden",children:w},u),o=us(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,u=n.child,u.memoizedState=vf(a),u.childLanes=xf(t,E,a),n.memoizedState=gf,o):(Pa(n),_f(n,w))}if(F=t.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(h)n.flags&256?(Pa(n),n.flags&=-257,n=yf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),u=o.fallback,w=n.mode,o=ql({mode:"visible",children:o.children},w),u=us(u,w,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ir(n,t.child,null,a),o=n.child,o.memoizedState=vf(a),o.childLanes=xf(t,E,a),n.memoizedState=gf,n=u);else if(Pa(n),td(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var te=E.dgst;E=te,o=Error(s(419)),o.stack="",o.digest=E,no({value:o,source:null,stack:null}),n=yf(t,n,a)}else if(_n||io(t,n,a,!1),E=(a&t.childLanes)!==0,_n||E){if(E=Xt,E!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Ws(t,o),Qn(E,t,o),rg;w.data==="$?"||Ff(),n=yf(t,n,a)}else w.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,$t=gi(w.nextSibling),Un=n,Nt=!0,hs=null,wi=!1,t!==null&&(ii[ai++]=Qi,ii[ai++]=Ji,ii[ai++]=fs,Qi=t.id,Ji=t.overflow,fs=n),n=_f(n,o.children),n.flags|=4096);return n}return u?(Ia(),u=o.fallback,w=n.mode,F=t.child,te=F.sibling,o=Ki(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,te!==null?u=Ki(te,u):(u=us(u,w,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,w=t.child.memoizedState,w===null?w=vf(a):(F=w.cachePool,F!==null?(te=hn._currentValue,F=F.parent!==te?{parent:te,pool:te}:F):F=tm(),w={baseLanes:w.baseLanes|a,cachePool:F}),u.memoizedState=w,u.childLanes=xf(t,E,a),n.memoizedState=gf,o):(Pa(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function yf(t,n,a){return ir(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function gg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Bu(t.return,n,a)}function Sf(t,n,a,o,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function vg(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Mn(t,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,a,n);else if(t.tag===19)gg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ye(pn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Gl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Gl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Sf(n,!0,a,null,h);break;case"together":Sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(io(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&wl(t)))}function oy(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Na(n,hn,t.memoizedState.cache),to();break;case 27:case 5:Ke(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mg(t,n,a):(Pa(n),t=ia(t,n,a),t!==null?t.sibling:null);Pa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(io(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return vg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ye(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,ug(t,n,a);case 24:Na(n,hn,t.memoizedState.cache)}return ia(t,n,a)}function xg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!bf(t,a)&&(n.flags&128)===0)return _n=!1,oy(t,n,a);_n=(t.flags&131072)!==0}else _n=!1,Nt&&(n.flags&1048576)!==0&&Yp(n,Al,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Nu(o)?(t=_s(o,t),n.tag=1,n=hg(null,n,o,t,a)):(n.tag=0,n=mf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===L){n.tag=11,n=og(null,n,o,t,a);break e}else if(u===j){n.tag=14,n=lg(null,n,o,t,a);break e}}throw n=de(o)||o,Error(s(306,n,""))}}return n;case 0:return mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_s(o,n.pendingProps),hg(t,n,o,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Vu(t,n),uo(n,o,null,a);var E=n.memoizedState;if(o=E.cache,Na(n,hn,o),o!==h.cache&&Fu(n,[hn],a,!0),co(),o=E.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=pg(t,n,o,a);break e}else if(o!==u){u=ti(Error(s(424)),n),no(u),n=pg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=gi(t.firstChild),Un=n,Nt=!0,hs=null,wi=!0,a=Km(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(to(),o===u){n=ia(t,n,a);break e}Mn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=b0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,t=n.pendingProps,o=oc(ee.current).createElement(a),o[dn]=n,o[xn]=t,Tn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=b0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Nt&&(o=n.stateNode=_0(n.type,n.pendingProps,ee.current),Un=n,wi=!0,u=$t,Xa(n.type)?(nd=u,$t=gi(o.firstChild)):$t=u),Mn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=$t)&&(o=Py(o,n.type,n.pendingProps,wi),o!==null?(n.stateNode=o,Un=n,$t=gi(o.firstChild),wi=!1,u=!0):u=!1),u||ps(n)),Ke(n),u=n.type,h=n.pendingProps,E=t!==null?t.memoizedProps:null,o=h.children,Jf(u,h)?o=null:E!==null&&Jf(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(t,n,$_,null,null,a),Lo._currentValue=u),Wl(t,n),Mn(t,n,o,a),n.child;case 6:return t===null&&Nt&&((t=a=$t)&&(a=Iy(a,n.pendingProps,wi),a!==null?(n.stateNode=a,Un=n,$t=null,t=!0):t=!1),t||ps(n)),null;case 13:return mg(t,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ir(n,null,o,a):Mn(t,n,o,a),n.child;case 11:return og(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Mn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gs(n),u=wn(u),o=o(u),n.flags|=1,Mn(t,n,o,a),n.child;case 14:return lg(t,n,n.type,n.pendingProps,a);case 15:return cg(t,n,n.type,n.pendingProps,a);case 19:return vg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=ql(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ki(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return ug(t,n,a);case 24:return gs(n),o=wn(hn),t===null?(u=ku(),u===null&&(u=Xt,h=zu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Gu(n),Na(n,hn,u)):((t.lanes&a)!==0&&(Vu(t,n),uo(n,null,null,a),co()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,hn,o)):(o=h.cache,Na(n,hn,o),o!==u.cache&&Fu(n,[hn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function _g(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!w0(n)){if(n=si.current,n!==null&&((_t&4194048)===_t?Ri!==null:(_t&62914560)!==_t&&(_t&536870912)===0||n!==Ri))throw oo=ju,nm;t.flags|=8192}}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,or|=n)}function xo(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ly(t,n,a){var o=n.pendingProps;switch(Ou(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(hn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(eo(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qp())),Kt(n),null;case 26:return a=n.memoizedState,t===null?(aa(n),a!==null?(Kt(n),_g(n,a)):(Kt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(aa(n),Kt(n),_g(n,a)):(Kt(n),n.flags&=-16777217):(t.memoizedProps!==o&&aa(n),Kt(n),n.flags&=-16777217),null;case 27:$e(n),a=ee.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Ue.current,eo(n)?Zp(n):(t=_0(u,o,a),n.stateNode=t,aa(n))}return Kt(n),null;case 5:if($e(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(t=Ue.current,eo(n))Zp(n);else{switch(u=oc(ee.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[dn]=n,t[xn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Tn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&aa(n)}}return Kt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ee.current,eo(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||d0(t.nodeValue,a)),t||ps(n)}else t=oc(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=eo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else to(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Qp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(na(n),n):(na(n),null)}if(na(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Kt(n),null;case 4:return Je(),t===null&&qf(n.stateNode.containerInfo),Kt(n),null;case 10:return ea(n.type),Kt(n),null;case 19:if(ue(pn),u=n.memoizedState,u===null)return Kt(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)xo(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Gl(t),h!==null){for(n.flags|=128,xo(u,!1),t=h.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)qp(a,t),a=a.sibling;return ye(pn,pn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Mt()>Ql&&(n.flags|=128,o=!0,xo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Gl(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),xo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Nt)return Kt(n),null}else 2*Mt()-u.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,o=!0,xo(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Mt(),n.sibling=null,t=pn.current,ye(pn,o?t&1|2:t&1),n):(Kt(n),null);case 22:case 23:return na(n),Yu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ue(vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(hn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cy(t,n){switch(Ou(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(hn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 13:if(na(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));to()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ue(pn),null;case 4:return Je(),null;case 10:return ea(n.type),null;case 22:case 23:return na(n),Yu(),t!==null&&ue(vs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(hn),null;case 25:return null;default:return null}}function yg(t,n){switch(Ou(n),n.tag){case 3:ea(hn),Je();break;case 26:case 27:case 5:$e(n);break;case 4:Je();break;case 13:na(n);break;case 19:ue(pn);break;case 10:ea(n.type);break;case 22:case 23:na(n),Yu(),t!==null&&ue(vs);break;case 24:ea(hn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,E=a.inst;o=h(),E.destroy=o}a=a.next}while(a!==u)}}catch(w){Gt(n,n.return,w)}}function Ba(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var E=o.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,u=n;var F=a,te=w;try{te()}catch(ge){Gt(u,F,ge)}}}o=o.next}while(o!==h)}}catch(ge){Gt(n,n.return,ge)}}function Sg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lm(n,a)}catch(o){Gt(t,t.return,o)}}}function bg(t,n,a){a.props=_s(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function Ci(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function Mg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function Mf(t,n,a){try{var o=t.stateNode;Ny(o,t.type,a,n),o[xn]=n}catch(u){Gt(t,t.return,u)}}function Eg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function Ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=rc));else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Tf(t,n,a),t=t.sibling;t!==null;)Tf(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function Tg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[dn]=t,n[xn]=a}catch(h){Gt(t,t.return,h)}}var sa=!1,rn=!1,Af=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,yn=null;function uy(t,n){if(t=t.containerInfo,Kf=hc,t=Bp(t),Mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,w=-1,F=-1,te=0,ge=0,Se=t,ae=null;t:for(;;){for(var re;Se!==a||u!==0&&Se.nodeType!==3||(w=E+u),Se!==h||o!==0&&Se.nodeType!==3||(F=E+o),Se.nodeType===3&&(E+=Se.nodeValue.length),(re=Se.firstChild)!==null;)ae=Se,Se=re;for(;;){if(Se===t)break t;if(ae===a&&++te===u&&(w=E),ae===h&&++ge===o&&(F=E),(re=Se.nextSibling)!==null)break;Se=ae,ae=Se.parentNode}Se=re}a=w===-1||F===-1?null:{start:w,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:t,selectionRange:a},hc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var it=_s(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){Gt(a,a.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ed(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ed(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function wg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Fa(t,a),o&4&&_o(5,a);break;case 1:if(Fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){Gt(a,a.return,E)}else{var u=_s(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Gt(a,a.return,E)}}o&64&&Sg(a),o&512&&yo(a,a.return);break;case 3:if(Fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lm(t,n)}catch(E){Gt(a,a.return,E)}}break;case 27:n===null&&o&4&&Tg(a);case 26:case 5:Fa(t,a),n===null&&o&4&&Mg(a),o&512&&yo(a,a.return);break;case 12:Fa(t,a);break;case 13:Fa(t,a),o&4&&Ng(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=_y.bind(null,a),By(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||rn,u=sa;var h=rn;sa=o,(rn=n)&&!h?za(t,a,(a.subtreeFlags&8772)!==0):Fa(t,a),sa=u,rn=h}break;case 30:break;default:Fa(t,a)}}function Rg(t){var n=t.alternate;n!==null&&(t.alternate=null,Rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,kn=!1;function ra(t,n,a){for(a=a.child;a!==null;)Cg(t,n,a),a=a.sibling}function Cg(t,n,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:rn||Ci(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ci(a,n);var o=qt,u=kn;Xa(a.type)&&(qt=a.stateNode,kn=!1),ra(t,n,a),Co(a.stateNode),qt=o,kn=u;break;case 5:rn||Ci(a,n);case 6:if(o=qt,u=kn,qt=null,ra(t,n,a),qt=o,kn=u,qt!==null)if(kn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(h){Gt(a,n,h)}else try{qt.removeChild(a.stateNode)}catch(h){Gt(a,n,h)}break;case 18:qt!==null&&(kn?(t=qt,v0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Bo(t)):v0(qt,a.stateNode));break;case 4:o=qt,u=kn,qt=a.stateNode.containerInfo,kn=!0,ra(t,n,a),qt=o,kn=u;break;case 0:case 11:case 14:case 15:rn||Ba(2,a,n),rn||Ba(4,a,n),ra(t,n,a);break;case 1:rn||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&bg(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,ra(t,n,a),rn=o;break;default:ra(t,n,a)}}function Ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bo(t)}catch(a){Gt(n,n.return,a)}}function fy(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ag),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ag),n;default:throw Error(s(435,t.tag))}}function wf(t,n){var a=fy(t);n.forEach(function(o){var u=yy.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,E=n,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(Xa(w.type)){qt=w.stateNode,kn=!1;break e}break;case 5:qt=w.stateNode,kn=!1;break e;case 3:case 4:qt=w.stateNode.containerInfo,kn=!0;break e}w=w.return}if(qt===null)throw Error(s(160));Cg(h,E,u),qt=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Dg(n,t),n=n.sibling}var mi=null;function Dg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(Ba(3,t,t.return),_o(3,t),Ba(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(rn||a===null||Ci(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(qn(n,t),Yn(t),o&512&&(rn||a===null||Ci(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[wa]||h[dn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Tn(h,o,a),h[dn]=t,tn(h),o=h;break e;case"link":var E=T0("link","href",u).get(o+(a.href||""));if(E){for(var w=0;w<E.length;w++)if(h=E[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(w,1);break t}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;case"meta":if(E=T0("meta","content",u).get(o+(a.content||""))){for(w=0;w<E.length;w++)if(h=E[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(w,1);break t}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[dn]=t,tn(h),o=h}t.stateNode=o}else A0(u,t.type,t.stateNode);else t.stateNode=E0(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?A0(u,t.type,t.stateNode):E0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(rn||a===null||Ci(a,a.return)),a!==null&&o&4&&Mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(rn||a===null||Ci(a,a.return)),t.flags&32){u=t.stateNode;try{Wt(u,"")}catch(re){Gt(t,t.return,re)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Mf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Af=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(re){Gt(t,t.return,re)}}break;case 3:if(uc=null,u=mi,mi=lc(n.containerInfo),qn(n,t),mi=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(n.containerInfo)}catch(re){Gt(t,t.return,re)}Af&&(Af=!1,Ug(t));break;case 4:o=mi,mi=lc(t.stateNode.containerInfo),qn(n,t),Yn(t),mi=o;break;case 12:qn(n,t),Yn(t);break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lf=Mt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,wf(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,te=sa,ge=rn;if(sa=te||u,rn=ge||F,qn(n,t),rn=ge,sa=te,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||sa||rn||ys(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=F.stateNode;var Se=F.memoizedProps.style,ae=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;w.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(re){Gt(F,F.return,re)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(re){Gt(F,F.return,re)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wf(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,wf(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Eg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Ef(t);Zl(t,h,u);break;case 5:var E=a.stateNode;a.flags&32&&(Wt(E,""),a.flags&=-33);var w=Ef(t);Zl(t,w,E);break;case 3:case 4:var F=a.stateNode.containerInfo,te=Ef(t);Tf(t,te,F);break;default:throw Error(s(161))}}catch(ge){Gt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wg(t,n.alternate,n),n=n.sibling}function ys(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),ys(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bg(n,n.return,a),ys(n);break;case 27:Co(n.stateNode);case 26:case 5:Ci(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}t=t.sibling}}function za(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,E=h.flags;switch(h.tag){case 0:case 11:case 15:za(u,h,a),_o(4,h);break;case 1:if(za(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Gt(o,o.return,te)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)om(F[u],w)}catch(te){Gt(o,o.return,te)}}a&&E&64&&Sg(h),yo(h,h.return);break;case 27:Tg(h);case 26:case 5:za(u,h,a),a&&o===null&&E&4&&Mg(h),yo(h,h.return);break;case 12:za(u,h,a);break;case 13:za(u,h,a),a&&E&4&&Ng(u,h);break;case 22:h.memoizedState===null&&za(u,h,a),yo(h,h.return);break;case 30:break;default:za(u,h,a)}n=n.sibling}}function Rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function Cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Ni(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lg(t,n,a,o),n=n.sibling}function Lg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,o),u&2048&&_o(9,n);break;case 1:Ni(t,n,a,o);break;case 3:Ni(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(u&2048){Ni(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,E=h.id,w=h.onPostCommit;typeof w=="function"&&w(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Gt(n,n.return,F)}}else Ni(t,n,a,o);break;case 13:Ni(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,E=n.alternate,n.memoizedState!==null?h._visibility&2?Ni(t,n,a,o):So(t,n):h._visibility&2?Ni(t,n,a,o):(h._visibility|=2,ar(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Rf(E,n);break;case 24:Ni(t,n,a,o),u&2048&&Cf(n.alternate,n);break;default:Ni(t,n,a,o)}}function ar(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,E=n,w=a,F=o,te=E.flags;switch(E.tag){case 0:case 11:case 15:ar(h,E,w,F,u),_o(8,E);break;case 23:break;case 22:var ge=E.stateNode;E.memoizedState!==null?ge._visibility&2?ar(h,E,w,F,u):So(h,E):(ge._visibility|=2,ar(h,E,w,F,u)),u&&te&2048&&Rf(E.alternate,E);break;case 24:ar(h,E,w,F,u),u&&te&2048&&Cf(E.alternate,E);break;default:ar(h,E,w,F,u)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&Rf(o.alternate,o);break;case 24:So(a,o),u&2048&&Cf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var bo=8192;function sr(t){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)Og(t),t=t.sibling}function Og(t){switch(t.tag){case 26:sr(t),t.flags&bo&&t.memoizedState!==null&&Ky(mi,t.memoizedState,t.memoizedProps);break;case 5:sr(t);break;case 3:case 4:var n=mi;mi=lc(t.stateNode.containerInfo),sr(t),mi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=bo,bo=16777216,sr(t),bo=n):sr(t));break;default:sr(t)}}function Pg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Bg(o,t)}Pg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):Mo(t);break;default:Mo(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Bg(o,t)}Pg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function Bg(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,h=o.return;if(Rg(o),o===a){yn=null;break e}if(u!==null){u.return=h,yn=u;break e}yn=h}}}var dy={getCacheForType:function(t){var n=wn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},hy=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Xt=null,mt=null,_t=0,It=0,Zn=null,Ha=!1,rr=!1,Nf=!1,oa=0,en=0,ka=0,Ss=0,Df=0,ri=0,or=0,Eo=null,jn=null,Uf=!1,Lf=0,Ql=1/0,Jl=null,ja=null,En=0,Ga=null,lr=null,cr=0,Of=0,Pf=null,Fg=null,To=0,If=null;function Kn(){if((Pt&2)!==0&&_t!==0)return _t&-_t;if(I.T!==null){var t=Ks;return t!==0?t:Gf()}return Et()}function zg(){ri===0&&(ri=(_t&536870912)===0||Nt?X():536870912);var t=si.current;return t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===Xt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(ur(t,0),Va(t,_t,ri,!1)),Ie(t,a),((Pt&2)===0||t!==Xt)&&(t===Xt&&((Pt&2)===0&&(Ss|=a),en===4&&Va(t,_t,ri,!1)),Di(t))}function Hg(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?gy(t,n):zf(t,n,!0),h=o;do{if(u===0){rr&&!o&&Va(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!py(a)){u=zf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var w=t;u=Eo;var F=w.current.memoizedState.isDehydrated;if(F&&(ur(w,E).flags|=256),E=zf(w,E,!1),E!==2){if(Nf&&!F){w.errorRecoveryDisabledLanes|=h,Ss|=h,u=4;break e}h=jn,jn=u,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}u=E}if(h=!1,u!==2)continue}}if(u===1){ur(t,0),Va(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,ri,!Ha);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Lf+300-Mt(),10<u)){if(Va(o,n,ri,!Ha),He(o,0,!0)!==0)break e;o.timeoutHandle=m0(kg.bind(null,o,a,jn,Jl,Uf,n,ri,Ss,or,Ha,h,2,-0,0),u);break e}kg(o,a,jn,Jl,Uf,n,ri,Ss,or,Ha,h,0,-0,0)}}break}while(!0);Di(t)}function kg(t,n,a,o,u,h,E,w,F,te,ge,Se,ae,re){if(t.timeoutHandle=-1,Se=n.subtreeFlags,(Se&8192||(Se&16785408)===16785408)&&(Uo={stylesheets:null,count:0,unsuspend:Zy},Og(n),Se=Qy(),Se!==null)){t.cancelPendingCommit=Se(Yg.bind(null,t,n,h,a,o,u,E,w,F,ge,1,ae,re)),Va(t,h,E,!te);return}Yg(t,n,h,a,o,u,E,w,F)}function py(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Xn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(t,n,a,o){n&=~Df,n&=~Ss,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Le(u),E=1<<h;o[h]=-1,u&=~E}a!==0&&pe(t,a,n)}function $l(){return(Pt&6)===0?(Ao(0),!1):!0}function Bf(){if(mt!==null){if(It===0)var t=mt.return;else t=mt,$i=ms=null,$u(t),nr=null,go=0,t=mt;for(;t!==null;)yg(t.alternate,t),t=t.return;mt=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Uy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Bf(),Xt=t,mt=a=Ki(t.current,null),_t=n,It=0,Zn=null,Ha=!1,rr=Pe(t,n),Nf=!1,or=ri=Df=Ss=ka=en=0,jn=Eo=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Le(o),h=1<<u;n|=t[u],o&=~h}return oa=n,Sl(),a}function jg(t,n){dt=null,I.H=Hl,n===ro||n===Nl?(n=sm(),It=3):n===nm?(n=sm(),It=4):It=n===rg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,mt===null&&(en=1,Xl(t,ti(n,t.current)))}function Gg(){var t=I.H;return I.H=Hl,t===null?Hl:t}function Vg(){var t=I.A;return I.A=dy,t}function Ff(){en=4,Ha||(_t&4194048)!==_t&&si.current!==null||(rr=!0),(ka&134217727)===0&&(Ss&134217727)===0||Xt===null||Va(Xt,_t,ri,!1)}function zf(t,n,a){var o=Pt;Pt|=2;var u=Gg(),h=Vg();(Xt!==t||_t!==n)&&(Jl=null,ur(t,n)),n=!1;var E=en;e:do try{if(It!==0&&mt!==null){var w=mt,F=Zn;switch(It){case 8:Bf(),E=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var te=It;if(It=0,Zn=null,fr(t,w,F,te),a&&rr){E=0;break e}break;default:te=It,It=0,Zn=null,fr(t,w,F,te)}}my(),E=en;break}catch(ge){jg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,$i=ms=null,Pt=o,I.H=u,I.A=h,mt===null&&(Xt=null,_t=0,Sl()),E}function my(){for(;mt!==null;)Xg(mt)}function gy(t,n){var a=Pt;Pt|=2;var o=Gg(),u=Vg();Xt!==t||_t!==n?(Jl=null,Ql=Mt()+500,ur(t,n)):rr=Pe(t,n);e:do try{if(It!==0&&mt!==null){n=mt;var h=Zn;t:switch(It){case 1:It=0,Zn=null,fr(t,n,h,1);break;case 2:case 9:if(im(h)){It=0,Zn=null,Wg(n);break}n=function(){It!==2&&It!==9||Xt!==t||(It=7),Di(t)},h.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:im(h)?(It=0,Zn=null,Wg(n)):(It=0,Zn=null,fr(t,n,h,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var w=mt;if(!E||w0(E)){It=0,Zn=null;var F=w.sibling;if(F!==null)mt=F;else{var te=w.return;te!==null?(mt=te,ec(te)):mt=null}break t}}It=0,Zn=null,fr(t,n,h,5);break;case 6:It=0,Zn=null,fr(t,n,h,6);break;case 8:Bf(),en=6;break e;default:throw Error(s(462))}}vy();break}catch(ge){jg(t,ge)}while(!0);return $i=ms=null,I.H=o,I.A=u,Pt=a,mt!==null?0:(Xt=null,_t=0,Sl(),en)}function vy(){for(;mt!==null&&!Ot();)Xg(mt)}function Xg(t){var n=xg(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?ec(t):mt=n}function Wg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:$u(n);default:yg(a,n),n=mt=qp(n,oa),n=xg(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?ec(t):mt=n}function fr(t,n,a,o){$i=ms=null,$u(n),nr=null,go=0;var u=n.return;try{if(ry(t,u,n,a,_t)){en=1,Xl(t,ti(a,t.current)),mt=null;return}}catch(h){if(u!==null)throw mt=u,h;en=1,Xl(t,ti(a,t.current)),mt=null;return}n.flags&32768?(Nt||o===1?t=!0:rr||(_t&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),qg(n,t)):ec(n)}function ec(t){var n=t;do{if((n.flags&32768)!==0){qg(n,Ha);return}t=n.return;var a=ly(n.alternate,n,oa);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);en===0&&(en=5)}function qg(t,n){do{var a=cy(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);en=6,mt=null}function Yg(t,n,a,o,u,h,E,w,F){t.cancelPendingCommit=null;do tc();while(En!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Ru,Te(t,a,h,E,w,F),t===Xt&&(mt=Xt=null,_t=0),lr=n,Ga=t,cr=a,Of=h,Pf=u,Fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sy(wt,function(){return $g(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=z.p,z.p=2,E=Pt,Pt|=4;try{uy(t,n,a)}finally{Pt=E,z.p=u,I.T=o}}En=1,Zg(),Kg(),Qg()}}function Zg(){if(En===1){En=0;var t=Ga,n=lr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=Pt;Pt|=4;try{Dg(n,t);var h=Qf,E=Bp(t.containerInfo),w=h.focusedElem,F=h.selectionRange;if(E!==w&&w&&w.ownerDocument&&Ip(w.ownerDocument.documentElement,w)){if(F!==null&&Mu(w)){var te=F.start,ge=F.end;if(ge===void 0&&(ge=te),"selectionStart"in w)w.selectionStart=te,w.selectionEnd=Math.min(ge,w.value.length);else{var Se=w.ownerDocument||document,ae=Se&&Se.defaultView||window;if(ae.getSelection){var re=ae.getSelection(),it=w.textContent.length,Qe=Math.min(F.start,it),Ht=F.end===void 0?Qe:Math.min(F.end,it);!re.extend&&Qe>Ht&&(E=Ht,Ht=Qe,Qe=E);var Y=Pp(w,Qe),V=Pp(w,Ht);if(Y&&V&&(re.rangeCount!==1||re.anchorNode!==Y.node||re.anchorOffset!==Y.offset||re.focusNode!==V.node||re.focusOffset!==V.offset)){var J=Se.createRange();J.setStart(Y.node,Y.offset),re.removeAllRanges(),Qe>Ht?(re.addRange(J),re.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),re.addRange(J))}}}}for(Se=[],re=w;re=re.parentNode;)re.nodeType===1&&Se.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var _e=Se[w];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}hc=!!Kf,Qf=Kf=null}finally{Pt=u,z.p=o,I.T=a}}t.current=n,En=2}}function Kg(){if(En===2){En=0;var t=Ga,n=lr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=Pt;Pt|=4;try{wg(t,n.alternate,n)}finally{Pt=u,z.p=o,I.T=a}}En=3}}function Qg(){if(En===4||En===3){En=0,ot();var t=Ga,n=lr,a=cr,o=Fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,lr=Ga=null,Jg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ja=null),Dt(a),n=n.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=z.p,z.p=2,I.T=null;try{for(var h=t.onRecoverableError,E=0;E<o.length;E++){var w=o[E];h(w.value,{componentStack:w.stack})}}finally{I.T=n,z.p=u}}(cr&3)!==0&&tc(),Di(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===If?To++:(To=0,If=t):To=0,Ao(0)}}function Jg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function tc(t){return Zg(),Kg(),Qg(),$g()}function $g(){if(En!==5)return!1;var t=Ga,n=Of;Of=0;var a=Dt(cr),o=I.T,u=z.p;try{z.p=32>a?32:a,I.T=null,a=Pf,Pf=null;var h=Ga,E=cr;if(En=0,lr=Ga=null,cr=0,(Pt&6)!==0)throw Error(s(331));var w=Pt;if(Pt|=4,Ig(h.current),Lg(h,h.current,E,a),Pt=w,Ao(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(me,h)}catch{}return!0}finally{z.p=u,I.T=o,Jg(t,n)}}function e0(t,n,a){n=ti(a,n),n=pf(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Ie(t,2),Di(t))}function Gt(t,n,a){if(t.tag===3)e0(t,t,a);else for(;n!==null;){if(n.tag===3){e0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ja===null||!ja.has(o))){t=ti(a,t),a=ag(2),o=La(n,a,2),o!==null&&(sg(a,o,n,t),Ie(o,2),Di(o));break}}n=n.return}}function Hf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new hy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=xy.bind(null,t,n,a),n.then(t,t))}function xy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(_t&a)===a&&(en===4||en===3&&(_t&62914560)===_t&&300>Mt()-Lf?(Pt&2)===0&&ur(t,0):Df|=a,or===_t&&(or=0)),Di(t)}function t0(t,n){n===0&&(n=Re()),t=Ws(t,n),t!==null&&(Ie(t,n),Di(t))}function _y(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),t0(t,a)}function yy(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),t0(t,a)}function Sy(t,n){return pt(t,n)}var nc=null,dr=null,kf=!1,ic=!1,jf=!1,bs=0;function Di(t){t!==dr&&t.next===null&&(dr===null?nc=dr=t:dr=dr.next=t),ic=!0,kf||(kf=!0,My())}function Ao(t,n){if(!jf&&ic){jf=!0;do for(var a=!1,o=nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var E=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-Le(42|t)+1)-1,h&=u&~(E&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,s0(o,h))}else h=_t,h=He(o,o===Xt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Pe(o,h)||(a=!0,s0(o,h));o=o.next}while(a);jf=!1}}function by(){n0()}function n0(){ic=kf=!1;var t=0;bs!==0&&(Dy()&&(t=bs),bs=0);for(var n=Mt(),a=null,o=nc;o!==null;){var u=o.next,h=i0(o,n);h===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(dr=a)):(a=o,(t!==0||(h&3)!==0)&&(ic=!0)),o=u}Ao(t)}function i0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var E=31-Le(h),w=1<<E,F=u[E];F===-1?((w&a)===0||(w&o)!==0)&&(u[E]=lt(w,n)):F<=n&&(t.expiredLanes|=w),h&=~w}if(n=Xt,a=_t,a=He(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&yt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&yt(o),Dt(a)){case 2:case 8:a=St;break;case 32:a=wt;break;case 268435456:a=P;break;default:a=wt}return o=a0.bind(null,t),a=pt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&yt(o),t.callbackPriority=2,t.callbackNode=null,2}function a0(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var o=_t;return o=He(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Hg(t,o,n),i0(t,Mt()),t.callbackNode!=null&&t.callbackNode===a?a0.bind(null,t):null)}function s0(t,n){if(tc())return null;Hg(t,n,!0)}function My(){Ly(function(){(Pt&6)!==0?pt(Yt,by):n0()})}function Gf(){return bs===0&&(bs=X()),bs}function r0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function o0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ey(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=r0((u[xn]||null).action),E=o.submitter;E&&(n=(n=E[xn]||null)?r0(n.formAction):E.getAttribute("formAction"),n!==null&&(h=n,E=null));var w=new xl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(bs!==0){var F=E?o0(u,E):new FormData(u);cf(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(w.preventDefault(),F=E?o0(u,E):new FormData(u),cf(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var Vf=0;Vf<wu.length;Vf++){var Xf=wu[Vf],Ty=Xf.toLowerCase(),Ay=Xf[0].toUpperCase()+Xf.slice(1);pi(Ty,"on"+Ay)}pi(Hp,"onAnimationEnd"),pi(kp,"onAnimationIteration"),pi(jp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(G_,"onTransitionRun"),pi(V_,"onTransitionStart"),pi(X_,"onTransitionCancel"),pi(Gp,"onTransitionEnd"),Ra("onMouseEnter",["mouseout","mouseover"]),Ra("onMouseLeave",["mouseout","mouseover"]),Ra("onPointerEnter",["pointerout","pointerover"]),Ra("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function l0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var E=o.length-1;0<=E;E--){var w=o[E],F=w.instance,te=w.currentTarget;if(w=w.listener,F!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=te;try{h(u)}catch(ge){Vl(ge)}u.currentTarget=null,h=F}else for(E=0;E<o.length;E++){if(w=o[E],F=w.instance,te=w.currentTarget,w=w.listener,F!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=te;try{h(u)}catch(ge){Vl(ge)}u.currentTarget=null,h=F}}}}function gt(t,n){var a=n[Bs];a===void 0&&(a=n[Bs]=new Set);var o=t+"__bubble";a.has(o)||(c0(n,t,2,!1),a.add(o))}function Wf(t,n,a){var o=0;n&&(o|=4),c0(a,t,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function qf(t){if(!t[ac]){t[ac]=!0,ul.forEach(function(a){a!=="selectionchange"&&(wy.has(a)||Wf(a,!1,t),Wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,Wf("selectionchange",!1,n))}}function c0(t,n,a,o){switch(L0(n)){case 2:var u=eS;break;case 8:u=tS;break;default:u=od}a=u.bind(null,n,a,t),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Yf(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var w=o.stateNode.containerInfo;if(w===u)break;if(E===4)for(E=o.return;E!==null;){var F=E.tag;if((F===3||F===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;w!==null;){if(E=di(w),E===null)return;if(F=E.tag,F===5||F===6||F===26||F===27){o=h=E;continue e}w=w.parentNode}}o=o.return}gp(function(){var te=h,ge=du(a),Se=[];e:{var ae=Vp.get(t);if(ae!==void 0){var re=xl,it=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":re=S_;break;case"focusin":it="focus",re=xu;break;case"focusout":it="blur",re=xu;break;case"beforeblur":case"afterblur":re=xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=c_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=E_;break;case Hp:case kp:case jp:re=d_;break;case Gp:re=A_;break;case"scroll":case"scrollend":re=o_;break;case"wheel":re=R_;break;case"copy":case"cut":case"paste":re=p_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=Sp;break;case"toggle":case"beforetoggle":re=N_}var Qe=(n&4)!==0,Ht=!Qe&&(t==="scroll"||t==="scrollend"),Y=Qe?ae!==null?ae+"Capture":null:ae;Qe=[];for(var V=te,J;V!==null;){var _e=V;if(J=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||J===null||Y===null||(_e=Xr(V,Y),_e!=null&&Qe.push(Ro(V,_e,J))),Ht)break;V=V.return}0<Qe.length&&(ae=new re(ae,it,null,a,ge),Se.push({event:ae,listeners:Qe}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",re=t==="mouseout"||t==="pointerout",ae&&a!==fu&&(it=a.relatedTarget||a.fromElement)&&(di(it)||it[Aa]))break e;if((re||ae)&&(ae=ge.window===ge?ge:(ae=ge.ownerDocument)?ae.defaultView||ae.parentWindow:window,re?(it=a.relatedTarget||a.toElement,re=te,it=it?di(it):null,it!==null&&(Ht=c(it),Qe=it.tag,it!==Ht||Qe!==5&&Qe!==27&&Qe!==6)&&(it=null)):(re=null,it=te),re!==it)){if(Qe=_p,_e="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=Sp,_e="onPointerLeave",Y="onPointerEnter",V="pointer"),Ht=re==null?ae:Ei(re),J=it==null?ae:Ei(it),ae=new Qe(_e,V+"leave",re,a,ge),ae.target=Ht,ae.relatedTarget=J,_e=null,di(ge)===te&&(Qe=new Qe(Y,V+"enter",it,a,ge),Qe.target=J,Qe.relatedTarget=Ht,_e=Qe),Ht=_e,re&&it)t:{for(Qe=re,Y=it,V=0,J=Qe;J;J=hr(J))V++;for(J=0,_e=Y;_e;_e=hr(_e))J++;for(;0<V-J;)Qe=hr(Qe),V--;for(;0<J-V;)Y=hr(Y),J--;for(;V--;){if(Qe===Y||Y!==null&&Qe===Y.alternate)break t;Qe=hr(Qe),Y=hr(Y)}Qe=null}else Qe=null;re!==null&&u0(Se,ae,re,Qe,!1),it!==null&&Ht!==null&&u0(Se,Ht,it,Qe,!0)}}e:{if(ae=te?Ei(te):window,re=ae.nodeName&&ae.nodeName.toLowerCase(),re==="select"||re==="input"&&ae.type==="file")var Ge=Cp;else if(wp(ae))if(Np)Ge=H_;else{Ge=F_;var ht=B_}else re=ae.nodeName,!re||re.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Ai(te.elementType)&&(Ge=Cp):Ge=z_;if(Ge&&(Ge=Ge(t,te))){Rp(Se,Ge,a,ge);break e}ht&&ht(t,ae,te),t==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&Bn(ae,"number",ae.value)}switch(ht=te?Ei(te):window,t){case"focusin":(wp(ht)||ht.contentEditable==="true")&&(Gs=ht,Eu=te,$r=null);break;case"focusout":$r=Eu=Gs=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Fp(Se,a,ge);break;case"selectionchange":if(j_)break;case"keydown":case"keyup":Fp(Se,a,ge)}var Ye;if(yu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else js?Tp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(bp&&a.locale!=="ko"&&(js||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&js&&(Ye=vp()):(Ca=ge,mu="value"in Ca?Ca.value:Ca.textContent,js=!0)),ht=sc(te,tt),0<ht.length&&(tt=new yp(tt,t,null,a,ge),Se.push({event:tt,listeners:ht}),Ye?tt.data=Ye:(Ye=Ap(a),Ye!==null&&(tt.data=Ye)))),(Ye=U_?L_(t,a):O_(t,a))&&(tt=sc(te,"onBeforeInput"),0<tt.length&&(ht=new yp("onBeforeInput","beforeinput",null,a,ge),Se.push({event:ht,listeners:tt}),ht.data=Ye)),Ey(Se,t,te,a,ge)}l0(Se,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function sc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Xr(t,a),u!=null&&o.unshift(Ro(t,u,h)),u=Xr(t,n),u!=null&&o.push(Ro(t,u,h))),t.tag===3)return o;t=t.return}return[]}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function u0(t,n,a,o,u){for(var h=n._reactName,E=[];a!==null&&a!==o;){var w=a,F=w.alternate,te=w.stateNode;if(w=w.tag,F!==null&&F===o)break;w!==5&&w!==26&&w!==27||te===null||(F=te,u?(te=Xr(a,h),te!=null&&E.unshift(Ro(a,te,F))):u||(te=Xr(a,h),te!=null&&E.push(Ro(a,te,F)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var Ry=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function f0(t){return(typeof t=="string"?t:""+t).replace(Ry,`
`).replace(Cy,"")}function d0(t,n){return n=f0(n),f0(t)===n}function rc(){}function zt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Wt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Wt(t,""+o);break;case"className":ie(t,"class",o);break;case"tabIndex":ie(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ie(t,a,o);break;case"style":hi(t,o,h);break;case"data":if(n!=="object"){ie(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",u.name,u,null),zt(t,n,"formEncType",u.formEncType,u,null),zt(t,n,"formMethod",u.formMethod,u,null),zt(t,n,"formTarget",u.formTarget,u,null)):(zt(t,n,"encType",u.encType,u,null),zt(t,n,"method",u.method,u,null),zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=rc);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),oe(t,"popover",o);break;case"xlinkActuate":Q(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Q(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Q(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Q(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Q(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Q(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Q(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Q(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Q(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hl.get(a)||a,oe(t,a,o))}}function Zf(t,n,a,o,u,h){switch(a){case"style":hi(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Wt(t,o):(typeof o=="number"||typeof o=="bigint")&&Wt(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[xn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):oe(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var E=a[h];if(E!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:zt(t,n,h,E,a,null)}}u&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var w=h=E=u=null,F=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":E=ge;break;case"checked":F=ge;break;case"defaultChecked":te=ge;break;case"value":h=ge;break;case"defaultValue":w=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:zt(t,n,o,ge,a,null)}}In(t,h,w,F,te,E,u,!1),jt(t);return;case"select":gt("invalid",t),o=E=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":E=w;break;case"multiple":o=w;default:zt(t,n,u,w,a,null)}n=h,a=E,t.multiple=!!o,n!=null?Fn(t,!!o,n,!1):a!=null&&Fn(t,!!o,a,!0);return;case"textarea":gt("invalid",t),h=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(w=a[E],w!=null))switch(E){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:zt(t,n,E,w,a,null)}Ut(t,o,u,h),jt(t);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,F,o,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)gt(wo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:zt(t,n,te,o,a,null)}return;default:if(Ai(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&Zf(t,n,ge,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&zt(t,n,w,o,a,null))}function Ny(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,E=null,w=null,F=null,te=null,ge=null;for(re in a){var Se=a[re];if(a.hasOwnProperty(re)&&Se!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":F=Se;default:o.hasOwnProperty(re)||zt(t,n,re,null,o,Se)}}for(var ae in o){var re=o[ae];if(Se=a[ae],o.hasOwnProperty(ae)&&(re!=null||Se!=null))switch(ae){case"type":h=re;break;case"name":u=re;break;case"checked":te=re;break;case"defaultChecked":ge=re;break;case"value":E=re;break;case"defaultValue":w=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:re!==Se&&zt(t,n,ae,re,o,Se)}}vt(t,E,w,F,te,ge,h,u);return;case"select":re=E=w=ae=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":re=F;default:o.hasOwnProperty(h)||zt(t,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":ae=h;break;case"defaultValue":w=h;break;case"multiple":E=h;default:h!==F&&zt(t,n,u,h,o,F)}n=w,a=E,o=re,ae!=null?Fn(t,!!a,ae,!1):!!o!=!!a&&(n!=null?Fn(t,!!a,n,!0):Fn(t,!!a,a?[]:"",!1));return;case"textarea":re=ae=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:zt(t,n,w,null,o,u)}for(E in o)if(u=o[E],h=a[E],o.hasOwnProperty(E)&&(u!=null||h!=null))switch(E){case"value":ae=u;break;case"defaultValue":re=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&zt(t,n,E,u,o,h)}Yi(t,ae,re);return;case"option":for(var it in a)if(ae=a[it],a.hasOwnProperty(it)&&ae!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:zt(t,n,it,null,o,ae)}for(F in o)if(ae=o[F],re=a[F],o.hasOwnProperty(F)&&ae!==re&&(ae!=null||re!=null))switch(F){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:zt(t,n,F,ae,o,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)ae=a[Qe],a.hasOwnProperty(Qe)&&ae!=null&&!o.hasOwnProperty(Qe)&&zt(t,n,Qe,null,o,ae);for(te in o)if(ae=o[te],re=a[te],o.hasOwnProperty(te)&&ae!==re&&(ae!=null||re!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:zt(t,n,te,ae,o,re)}return;default:if(Ai(n)){for(var Ht in a)ae=a[Ht],a.hasOwnProperty(Ht)&&ae!==void 0&&!o.hasOwnProperty(Ht)&&Zf(t,n,Ht,void 0,o,ae);for(ge in o)ae=o[ge],re=a[ge],!o.hasOwnProperty(ge)||ae===re||ae===void 0&&re===void 0||Zf(t,n,ge,ae,o,re);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!o.hasOwnProperty(Y)&&zt(t,n,Y,null,o,ae);for(Se in o)ae=o[Se],re=a[Se],!o.hasOwnProperty(Se)||ae===re||ae==null&&re==null||zt(t,n,Se,ae,o,re)}var Kf=null,Qf=null;function oc(t){return t.nodeType===9?t:t.ownerDocument}function h0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function Dy(){var t=window.event;return t&&t.type==="popstate"?t===$f?!1:($f=t,!0):($f=null,!1)}var m0=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(t){return g0.resolve(null).then(t).catch(Oy)}:m0;function Oy(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function v0(t,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&Co(E.documentElement),a&2&&Co(E.body),a&4)for(a=E.head,Co(a),E=a.firstChild;E;){var w=E.nextSibling,F=E.nodeName;E[wa]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=w}}if(u===0){t.removeChild(h),Bo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Bo(n)}function ed(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ed(a),zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Py(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function Iy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function By(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var nd=null;function x0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function _0(t,n,a){switch(n=oc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zs(t)}var oi=new Map,y0=new Set;function lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=z.d;z.d={f:Fy,r:zy,D:Hy,C:ky,L:jy,m:Gy,X:Xy,S:Vy,M:Wy};function Fy(){var t=la.f(),n=$l();return t||n}function zy(t){var n=Xi(t);n!==null&&n.tag===5&&n.type==="form"?Hm(n):la.r(t)}var pr=typeof document>"u"?null:document;function S0(t,n,a){var o=pr;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),y0.has(u)||(y0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function Hy(t){la.D(t),S0("dns-prefetch",t,null)}function ky(t,n){la.C(t,n),S0("preconnect",t,n)}function jy(t,n,a){la.L(t,n,a);var o=pr;if(o&&t&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var h=u;switch(n){case"style":h=mr(t);break;case"script":h=gr(t)}oi.has(h)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(h))||n==="script"&&o.querySelector(Do(h))||(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function Gy(t,n){la.m(t,n);var a=pr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=gr(t)}if(!oi.has(h)&&(t=x({rel:"modulepreload",href:t},n),oi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(h)))return}o=a.createElement("link"),Tn(o,"link",t),tn(o),a.head.appendChild(o)}}}function Vy(t,n,a){la.S(t,n,a);var o=pr;if(o&&t){var u=Wi(o).hoistableStyles,h=mr(t);n=n||"default";var E=u.get(h);if(!E){var w={loading:0,preload:null};if(E=o.querySelector(No(h)))w.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(h))&&id(t,a);var F=E=o.createElement("link");tn(F),Tn(F,"link",t),F._p=new Promise(function(te,ge){F.onload=te,F.onerror=ge}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,cc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:w},u.set(h,E)}}}function Xy(t,n){la.X(t,n);var a=pr;if(a&&t){var o=Wi(a).hoistableScripts,u=gr(t),h=o.get(u);h||(h=a.querySelector(Do(u)),h||(t=x({src:t,async:!0},n),(n=oi.get(u))&&ad(t,n),h=a.createElement("script"),tn(h),Tn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Wy(t,n){la.M(t,n);var a=pr;if(a&&t){var o=Wi(a).hoistableScripts,u=gr(t),h=o.get(u);h||(h=a.querySelector(Do(u)),h||(t=x({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&ad(t,n),h=a.createElement("script"),tn(h),Tn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function b0(t,n,a,o){var u=(u=ee.current)?lc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Wi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mr(a.href);var h=Wi(u).hoistableStyles,E=h.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,E),(h=u.querySelector(No(t)))&&!h._p&&(E.instance=h,E.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),h||qy(u,t,a,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Wi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function mr(t){return'href="'+Vt(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function M0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function qy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),tn(n),t.head.appendChild(n))}function gr(t){return'[src="'+Vt(t)+'"]'}function Do(t){return"script[async]"+t}function E0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),Tn(o,"style",u),cc(o,a.precedence,t),n.instance=o;case"stylesheet":u=mr(a.href);var h=t.querySelector(No(u));if(h)return n.state.loading|=4,n.instance=h,tn(h),h;o=M0(a),(u=oi.get(u))&&id(o,u),h=(t.ownerDocument||t).createElement("link"),tn(h);var E=h;return E._p=new Promise(function(w,F){E.onload=w,E.onerror=F}),Tn(h,"link",o),n.state.loading|=4,cc(h,a.precedence,t),n.instance=h;case"script":return h=gr(a.src),(u=t.querySelector(Do(h)))?(n.instance=u,tn(u),u):(o=a,(u=oi.get(h))&&(o=x({},a),ad(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),Tn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,t));return n.instance}function cc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,E=0;E<o.length;E++){var w=o[E];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var uc=null;function T0(t,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[wa]||h[dn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(n)||"";E=t+E;var w=o.get(E);w?w.push(h):o.set(E,[h])}}return o}function A0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Yy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function w0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Uo=null;function Zy(){}function Ky(t,n,a){if(Uo===null)throw Error(s(475));var o=Uo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=mr(a.href),h=t.querySelector(No(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=fc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,tn(h);return}h=t.ownerDocument||t,a=M0(a),(u=oi.get(u))&&id(a,u),h=h.createElement("link"),tn(h);var E=h;E._p=new Promise(function(w,F){E.onload=w,E.onerror=F}),Tn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=fc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Qy(){if(Uo===null)throw Error(s(475));var t=Uo;return t.stylesheets&&t.count===0&&sd(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&sd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function fc(){if(this.count--,this.count===0){if(this.stylesheets)sd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function sd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,n.forEach(Jy,t),dc=null,fc.call(t))}function Jy(t,n){if(!(n.state.loading&4)){var a=dc.get(t);if(a)var o=a.get(null);else{a=new Map,dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var E=u[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),h=a.get(E)||o,h===o&&a.set(null,u),a.set(E,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:D,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $y(t,n,a,o,u,h,E,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function R0(t,n,a,o,u,h,E,w,F,te,ge,Se){return t=new $y(t,n,a,E,w,F,te,Se),n=1,h===!0&&(n|=24),h=Wn(3,null,null,n),t.current=h,h.stateNode=t,n=zu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Gu(h),t}function C0(t){return t?(t=qs,t):qs}function N0(t,n,a,o,u,h){u=C0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=La(t,o,n),a!==null&&(Qn(a,t,n),lo(a,t,n))}function D0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rd(t,n){D0(t,n),(t=t.alternate)&&D0(t,n)}function U0(t){if(t.tag===13){var n=Ws(t,67108864);n!==null&&Qn(n,t,67108864),rd(t,67108864)}}var hc=!0;function eS(t,n,a,o){var u=I.T;I.T=null;var h=z.p;try{z.p=2,od(t,n,a,o)}finally{z.p=h,I.T=u}}function tS(t,n,a,o){var u=I.T;I.T=null;var h=z.p;try{z.p=8,od(t,n,a,o)}finally{z.p=h,I.T=u}}function od(t,n,a,o){if(hc){var u=ld(o);if(u===null)Yf(t,n,o,pc,a),O0(t,o);else if(iS(u,t,n,a,o))o.stopPropagation();else if(O0(t,o),n&4&&-1<nS.indexOf(t)){for(;u!==null;){var h=Xi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Be(h.pendingLanes);if(E!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var F=1<<31-Le(E);w.entanglements[1]|=F,E&=~F}Di(h),(Pt&6)===0&&(Ql=Mt()+500,Ao(0))}}break;case 13:w=Ws(h,2),w!==null&&Qn(w,h,2),$l(),rd(h,2)}if(h=ld(o),h===null&&Yf(t,n,o,pc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Yf(t,n,o,null,a)}}function ld(t){return t=du(t),cd(t)}var pc=null;function cd(t){if(pc=null,t=di(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return pc=t,null}function L0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(G()){case Yt:return 2;case St:return 8;case wt:case Ve:return 32;case P:return 268435456;default:return 32}default:return 32}}var ud=!1,Wa=null,qa=null,Ya=null,Oo=new Map,Po=new Map,Za=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O0(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Io(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Xi(n),n!==null&&U0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function iS(t,n,a,o,u){switch(n){case"focusin":return Wa=Io(Wa,t,n,a,o,u),!0;case"dragenter":return qa=Io(qa,t,n,a,o,u),!0;case"mouseover":return Ya=Io(Ya,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Oo.set(h,Io(Oo.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Po.set(h,Io(Po.get(h)||null,t,n,a,o,u)),!0}return!1}function P0(t){var n=di(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,fi(t.priority,function(){if(a.tag===13){var o=Kn();o=nt(o);var u=Ws(a,o);u!==null&&Qn(u,a,o),rd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ld(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);fu=o,a.target.dispatchEvent(o),fu=null}else return n=Xi(a),n!==null&&U0(n),t.blockedOn=a,!1;n.shift()}return!0}function I0(t,n,a){mc(t)&&a.delete(n)}function aS(){ud=!1,Wa!==null&&mc(Wa)&&(Wa=null),qa!==null&&mc(qa)&&(qa=null),Ya!==null&&mc(Ya)&&(Ya=null),Oo.forEach(I0),Po.forEach(I0)}function gc(t,n){t.blockedOn===n&&(t.blockedOn=null,ud||(ud=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,aS)))}var vc=null;function B0(t){vc!==t&&(vc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===t&&(vc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(cd(o||a)===null)continue;break}var h=Xi(a);h!==null&&(t.splice(n,3),n-=3,cf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Bo(t){function n(F){return gc(F,t)}Wa!==null&&gc(Wa,t),qa!==null&&gc(qa,t),Ya!==null&&gc(Ya,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)P0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],E=u[xn]||null;if(typeof h=="function")E||B0(a);else if(E){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,E=h[xn]||null)w=E.formAction;else if(cd(u)!==null)continue}else w=E.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),B0(a)}}}function fd(t){this._internalRoot=t}xc.prototype.render=fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();N0(a,o,t,n,null,null)},xc.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;N0(t.current,2,null,t,null,null),$l(),n[Aa]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Et();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&P0(t)}};var F0=e.version;if(F0!=="19.1.0")throw Error(s(527,F0,"19.1.0"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var sS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{me=_c.inject(sS),xe=_c}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=eg,h=tg,E=ng,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=R0(t,1,!1,null,null,a,o,u,h,E,w,null),t[Aa]=n.current,qf(t),new fd(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=eg,E=tg,w=ng,F=null,te=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(te=a.formState)),n=R0(t,1,!0,n,a??null,o,u,h,E,w,F,te),n.context=C0(null),a=n.current,o=Kn(),o=nt(o),u=Ua(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Ie(n,a),Di(n),t[Aa]=n.current,qf(t),new xc(n)},zo.version="19.1.0",zo}var Y0;function gS(){if(Y0)return pd.exports;Y0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=mS(),pd.exports}var vS=gS();const xS=lx(vS);var Ho={},Z0;function _S(){if(Z0)return Ho;Z0=1,Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.parse=d,Ho.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function d(v,b){const M=new c,C=v.length;if(C<2)return M;const S=(b==null?void 0:b.decode)||x;let y=0;do{const N=v.indexOf("=",y);if(N===-1)break;const D=v.indexOf(";",y),L=D===-1?C:D;if(N>L){y=v.lastIndexOf(";",N-1)+1;continue}const B=m(v,y,N),H=g(v,N,B),j=v.slice(B,H);if(M[j]===void 0){let A=m(v,N+1,L),U=g(v,L,A);const he=S(v.slice(A,U));M[j]=he}y=L+1}while(y<C);return M}function m(v,b,M){do{const C=v.charCodeAt(b);if(C!==32&&C!==9)return b}while(++b<M);return M}function g(v,b,M){for(;b>M;){const C=v.charCodeAt(--b);if(C!==32&&C!==9)return b+1}return M}function p(v,b,M){const C=(M==null?void 0:M.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=C(b);if(!e.test(S))throw new TypeError(`argument val is invalid: ${b}`);let y=v+"="+S;if(!M)return y;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);y+="; Max-Age="+M.maxAge}if(M.domain){if(!i.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);y+="; Domain="+M.domain}if(M.path){if(!s.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);y+="; Path="+M.path}if(M.expires){if(!_(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);y+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(y+="; HttpOnly"),M.secure&&(y+="; Secure"),M.partitioned&&(y+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":y+="; Priority=Low";break;case"medium":y+="; Priority=Medium";break;case"high":y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":y+="; SameSite=Strict";break;case"lax":y+="; SameSite=Lax";break;case"none":y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return y}function x(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function _(v){return l.call(v)==="[object Date]"}return Ho}_S();var K0="popstate";function yS(r={}){function e(s,l){let{pathname:c,search:d,hash:m}=s.location;return th("",{pathname:c,search:d,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Jo(l)}return bS(e,i,null,r)}function Qt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Hi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SS(){return Math.random().toString(36).substring(2,10)}function Q0(r,e){return{usr:r.state,key:r.key,idx:e}}function th(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Hr(e):e,state:i,key:e&&e.key||s||SS()}}function Jo({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Hr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function bS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,d=l.history,m="POP",g=null,p=x();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function x(){return(d.state||{idx:null}).idx}function _(){m="POP";let S=x(),y=S==null?null:S-p;p=S,g&&g({action:m,location:C.location,delta:y})}function v(S,y){m="PUSH";let N=th(C.location,S,y);p=x()+1;let D=Q0(N,p),L=C.createHref(N);try{d.pushState(D,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(L)}c&&g&&g({action:m,location:C.location,delta:1})}function b(S,y){m="REPLACE";let N=th(C.location,S,y);p=x();let D=Q0(N,p),L=C.createHref(N);d.replaceState(D,"",L),c&&g&&g({action:m,location:C.location,delta:0})}function M(S){return MS(S)}let C={get action(){return m},get location(){return r(l,d)},listen(S){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(K0,_),g=S,()=>{l.removeEventListener(K0,_),g=null}},createHref(S){return e(l,S)},createURL:M,encodeLocation(S){let y=M(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:b,go(S){return d.go(S)}};return C}function MS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Jo(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function cx(r,e,i="/"){return ES(r,e,i,!1)}function ES(r,e,i,s){let l=typeof e=="string"?Hr(e):e,c=ya(l.pathname||"/",i);if(c==null)return null;let d=ux(r);TS(d);let m=null;for(let g=0;m==null&&g<d.length;++g){let p=IS(c);m=OS(d[g],p,s)}return m}function ux(r,e=[],i=[],s=""){let l=(c,d,m)=>{let g={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};g.relativePath.startsWith("/")&&(Qt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let p=ga([s,g.relativePath]),x=i.concat(g);c.children&&c.children.length>0&&(Qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),ux(c.children,e,x,p)),!(c.path==null&&!c.index)&&e.push({path:p,score:US(p,c.index),routesMeta:x})};return r.forEach((c,d)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))l(c,d);else for(let g of fx(c.path))l(c,d,g)}),e}function fx(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let d=fx(s.join("/")),m=[];return m.push(...d.map(g=>g===""?c:[c,g].join("/"))),l&&m.push(...d),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function TS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:LS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var AS=/^:[\w-]+$/,wS=3,RS=2,CS=1,NS=10,DS=-2,J0=r=>r==="*";function US(r,e){let i=r.split("/"),s=i.length;return i.some(J0)&&(s+=DS),e&&(s+=RS),i.filter(l=>!J0(l)).reduce((l,c)=>l+(AS.test(c)?wS:c===""?CS:NS),s)}function LS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function OS(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",d=[];for(let m=0;m<s.length;++m){let g=s[m],p=m===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",_=$c({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},x),v=g.route;if(!_&&p&&i&&!s[s.length-1].route.index&&(_=$c({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!_)return null;Object.assign(l,_.params),d.push({params:l,pathname:ga([c,_.pathname]),pathnameBase:HS(ga([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=ga([c,_.pathnameBase]))}return d}function $c(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=PS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:_},v)=>{if(x==="*"){let M=m[v]||"";d=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const b=m[v];return _&&!b?p[x]=void 0:p[x]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:d,pattern:r}}function PS(r,e=!1,i=!0){Hi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,g)=>(s.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function IS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ya(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function BS(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Hr(r):r;return{pathname:i?i.startsWith("/")?i:FS(i,e):e,search:kS(s),hash:jS(l)}}function FS(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function xd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zS(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function dx(r){let e=zS(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function hx(r,e,i,s=!1){let l;typeof r=="string"?l=Hr(r):(l={...r},Qt(!l.pathname||!l.pathname.includes("?"),xd("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),xd("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),xd("#","search","hash",l)));let c=r===""||l.pathname==="",d=c?"/":l.pathname,m;if(d==null)m=i;else{let _=e.length-1;if(!s&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}m=_>=0?e[_]:"/"}let g=BS(l,m),p=d&&d!=="/"&&d.endsWith("/"),x=(c||d===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(p||x)&&(g.pathname+="/"),g}var ga=r=>r.join("/").replace(/\/\/+/g,"/"),HS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),kS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,jS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function GS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var px=["POST","PUT","PATCH","DELETE"];new Set(px);var VS=["GET",...px];new Set(VS);var kr=Z.createContext(null);kr.displayName="DataRouter";var au=Z.createContext(null);au.displayName="DataRouterState";var mx=Z.createContext({isTransitioning:!1});mx.displayName="ViewTransition";var XS=Z.createContext(new Map);XS.displayName="Fetchers";var WS=Z.createContext(null);WS.displayName="Await";var Gi=Z.createContext(null);Gi.displayName="Navigation";var nl=Z.createContext(null);nl.displayName="Location";var Ea=Z.createContext({outlet:null,matches:[],isDataRoute:!1});Ea.displayName="Route";var Qh=Z.createContext(null);Qh.displayName="RouteError";function qS(r,{relative:e}={}){Qt(il(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=Z.useContext(Gi),{hash:l,pathname:c,search:d}=al(r,{relative:e}),m=c;return i!=="/"&&(m=c==="/"?i:ga([i,c])),s.createHref({pathname:m,search:d,hash:l})}function il(){return Z.useContext(nl)!=null}function rs(){return Qt(il(),"useLocation() may be used only in the context of a <Router> component."),Z.useContext(nl).location}var gx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vx(r){Z.useContext(Gi).static||Z.useLayoutEffect(r)}function Is(){let{isDataRoute:r}=Z.useContext(Ea);return r?rb():YS()}function YS(){Qt(il(),"useNavigate() may be used only in the context of a <Router> component.");let r=Z.useContext(kr),{basename:e,navigator:i}=Z.useContext(Gi),{matches:s}=Z.useContext(Ea),{pathname:l}=rs(),c=JSON.stringify(dx(s)),d=Z.useRef(!1);return vx(()=>{d.current=!0}),Z.useCallback((g,p={})=>{if(Hi(d.current,gx),!d.current)return;if(typeof g=="number"){i.go(g);return}let x=hx(g,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:ga([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,r])}Z.createContext(null);function al(r,{relative:e}={}){let{matches:i}=Z.useContext(Ea),{pathname:s}=rs(),l=JSON.stringify(dx(i));return Z.useMemo(()=>hx(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function ZS(r,e){return xx(r,e)}function xx(r,e,i,s){var N;Qt(il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=Z.useContext(Gi),{matches:d}=Z.useContext(Ea),m=d[d.length-1],g=m?m.params:{},p=m?m.pathname:"/",x=m?m.pathnameBase:"/",_=m&&m.route;{let D=_&&_.path||"";_x(p,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=rs(),b;if(e){let D=typeof e=="string"?Hr(e):e;Qt(x==="/"||((N=D.pathname)==null?void 0:N.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${D.pathname}" was given in the \`location\` prop.`),b=D}else b=v;let M=b.pathname||"/",C=M;if(x!=="/"){let D=x.replace(/^\//,"").split("/");C="/"+M.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=!c&&i&&i.matches&&i.matches.length>0?i.matches:cx(r,{pathname:C});Hi(_||S!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Hi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=eb(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:ga([x,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:ga([x,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),d,i,s);return e&&y?Z.createElement(nl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},y):y}function KS(){let r=sb(),e=GS(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=Z.createElement(Z.Fragment,null,Z.createElement("p",null,"💿 Hey developer 👋"),Z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Z.createElement("code",{style:c},"ErrorBoundary")," or"," ",Z.createElement("code",{style:c},"errorElement")," prop on your route.")),Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),i?Z.createElement("pre",{style:l},i):null,d)}var QS=Z.createElement(KS,null),JS=class extends Z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?Z.createElement(Ea.Provider,{value:this.props.routeContext},Z.createElement(Qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $S({routeContext:r,match:e,children:i}){let s=Z.useContext(kr);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Z.createElement(Ea.Provider,{value:r},i)}function eb(r,e=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let g=l.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);Qt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let d=!1,m=-1;if(i)for(let g=0;g<l.length;g++){let p=l[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(m=g),p.route.id){let{loaderData:x,errors:_}=i,v=p.route.loader&&!x.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||v){d=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}return l.reduceRight((g,p,x)=>{let _,v=!1,b=null,M=null;i&&(_=c&&p.route.id?c[p.route.id]:void 0,b=p.route.errorElement||QS,d&&(m<0&&x===0?(_x("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,M=null):m===x&&(v=!0,M=p.route.hydrateFallbackElement||null)));let C=e.concat(l.slice(0,x+1)),S=()=>{let y;return _?y=b:v?y=M:p.route.Component?y=Z.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=g,Z.createElement($S,{match:p,routeContext:{outlet:g,matches:C,isDataRoute:i!=null},children:y})};return i&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?Z.createElement(JS,{location:i.location,revalidation:i.revalidation,component:b,error:_,children:S(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):S()},null)}function Jh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tb(r){let e=Z.useContext(kr);return Qt(e,Jh(r)),e}function nb(r){let e=Z.useContext(au);return Qt(e,Jh(r)),e}function ib(r){let e=Z.useContext(Ea);return Qt(e,Jh(r)),e}function $h(r){let e=ib(r),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function ab(){return $h("useRouteId")}function sb(){var s;let r=Z.useContext(Qh),e=nb("useRouteError"),i=$h("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[i]}function rb(){let{router:r}=tb("useNavigate"),e=$h("useNavigate"),i=Z.useRef(!1);return vx(()=>{i.current=!0}),Z.useCallback(async(l,c={})=>{Hi(i.current,gx),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var $0={};function _x(r,e,i){!e&&!$0[r]&&($0[r]=!0,Hi(!1,i))}Z.memo(ob);function ob({routes:r,future:e,state:i}){return xx(r,void 0,i,e)}function Ln(r){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lb({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){Qt(!il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),m=Z.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof i=="string"&&(i=Hr(i));let{pathname:g="/",search:p="",hash:x="",state:_=null,key:v="default"}=i,b=Z.useMemo(()=>{let M=ya(g,d);return M==null?null:{location:{pathname:M,search:p,hash:x,state:_,key:v},navigationType:s}},[d,g,p,x,_,v,s]);return Hi(b!=null,`<Router basename="${d}"> is not able to match the URL "${g}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:Z.createElement(Gi.Provider,{value:m},Z.createElement(nl.Provider,{children:e,value:b}))}function cb({children:r,location:e}){return ZS(nh(r),e)}function nh(r,e=[]){let i=[];return Z.Children.forEach(r,(s,l)=>{if(!Z.isValidElement(s))return;let c=[...e,l];if(s.type===Z.Fragment){i.push.apply(i,nh(s.props.children,c));return}Qt(s.type===Ln,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=nh(s.props.children,c)),i.push(d)}),i}var Xc="get",Wc="application/x-www-form-urlencoded";function su(r){return r!=null&&typeof r.tagName=="string"}function ub(r){return su(r)&&r.tagName.toLowerCase()==="button"}function fb(r){return su(r)&&r.tagName.toLowerCase()==="form"}function db(r){return su(r)&&r.tagName.toLowerCase()==="input"}function hb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function pb(r,e){return r.button===0&&(!e||e==="_self")&&!hb(r)}var yc=null;function mb(){if(yc===null)try{new FormData(document.createElement("form"),0),yc=!1}catch{yc=!0}return yc}var gb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _d(r){return r!=null&&!gb.has(r)?(Hi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wc}"`),null):r}function vb(r,e){let i,s,l,c,d;if(fb(r)){let m=r.getAttribute("action");s=m?ya(m,e):null,i=r.getAttribute("method")||Xc,l=_d(r.getAttribute("enctype"))||Wc,c=new FormData(r)}else if(ub(r)||db(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(s=g?ya(g,e):null,i=r.getAttribute("formmethod")||m.getAttribute("method")||Xc,l=_d(r.getAttribute("formenctype"))||_d(m.getAttribute("enctype"))||Wc,c=new FormData(m,r),!mb()){let{name:p,type:x,value:_}=r;if(x==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,_)}}else{if(su(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Xc,s=null,l=Wc,d=r}return c&&l==="text/plain"&&(d=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:d}}function ep(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function xb(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _b(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function yb(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await xb(c,i);return d.links?d.links():[]}return[]}));return Eb(s.flat(1).filter(_b).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function ev(r,e,i,s,l,c){let d=(g,p)=>i[p]?g.route.id!==i[p].route.id:!0,m=(g,p)=>{var x;return i[p].pathname!==g.pathname||((x=i[p].route.path)==null?void 0:x.endsWith("*"))&&i[p].params["*"]!==g.params["*"]};return c==="assets"?e.filter((g,p)=>d(g,p)||m(g,p)):c==="data"?e.filter((g,p)=>{var _;let x=s.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(d(g,p)||m(g,p))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=i[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Sb(r,e,{includeHydrateFallback:i}={}){return bb(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function bb(r){return[...new Set(r)]}function Mb(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function Eb(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(Mb(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tb=new Set([100,101,204,205]);function Ab(r,e){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":e&&ya(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function yx(){let r=Z.useContext(kr);return ep(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function wb(){let r=Z.useContext(au);return ep(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var tp=Z.createContext(void 0);tp.displayName="FrameworkContext";function Sx(){let r=Z.useContext(tp);return ep(r,"You must render this element inside a <HydratedRouter> element"),r}function Rb(r,e){let i=Z.useContext(tp),[s,l]=Z.useState(!1),[c,d]=Z.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:p,onMouseLeave:x,onTouchStart:_}=e,v=Z.useRef(null);Z.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let C=y=>{y.forEach(N=>{d(N.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),Z.useEffect(()=>{if(s){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[s]);let b=()=>{l(!0)},M=()=>{l(!1),d(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:ko(m,b),onBlur:ko(g,M),onMouseEnter:ko(p,b),onMouseLeave:ko(x,M),onTouchStart:ko(_,b)}]:[!1,v,{}]}function ko(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function Cb({page:r,...e}){let{router:i}=yx(),s=Z.useMemo(()=>cx(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?Z.createElement(Db,{page:r,matches:s,...e}):null}function Nb(r){let{manifest:e,routeModules:i}=Sx(),[s,l]=Z.useState([]);return Z.useEffect(()=>{let c=!1;return yb(r,e,i).then(d=>{c||l(d)}),()=>{c=!0}},[r,e,i]),s}function Db({page:r,matches:e,...i}){let s=rs(),{manifest:l,routeModules:c}=Sx(),{basename:d}=yx(),{loaderData:m,matches:g}=wb(),p=Z.useMemo(()=>ev(r,e,g,l,s,"data"),[r,e,g,l,s]),x=Z.useMemo(()=>ev(r,e,g,l,s,"assets"),[r,e,g,l,s]),_=Z.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,C=!1;if(e.forEach(y=>{var D;let N=l.routes[y.route.id];!N||!N.hasLoader||(!p.some(L=>L.route.id===y.route.id)&&y.route.id in m&&((D=c[y.route.id])!=null&&D.shouldRevalidate)||N.hasClientLoader?C=!0:M.add(y.route.id))}),M.size===0)return[];let S=Ab(r,d);return C&&M.size>0&&S.searchParams.set("_routes",e.filter(y=>M.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[d,m,s,l,p,e,r,c]),v=Z.useMemo(()=>Sb(x,l),[x,l]),b=Nb(x);return Z.createElement(Z.Fragment,null,_.map(M=>Z.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),v.map(M=>Z.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),b.map(({key:M,link:C})=>Z.createElement("link",{key:M,...C})))}function Ub(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bx&&(window.__reactRouterVersion="7.6.0")}catch{}function Lb({basename:r,children:e,window:i}){let s=Z.useRef();s.current==null&&(s.current=yS({window:i,v5Compat:!0}));let l=s.current,[c,d]=Z.useState({action:l.action,location:l.location}),m=Z.useCallback(g=>{Z.startTransition(()=>d(g))},[d]);return Z.useLayoutEffect(()=>l.listen(m),[l,m]),Z.createElement(lb,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l})}var Mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,np=Z.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:d,state:m,target:g,to:p,preventScrollReset:x,viewTransition:_,...v},b){let{basename:M}=Z.useContext(Gi),C=typeof p=="string"&&Mx.test(p),S,y=!1;if(typeof p=="string"&&C&&(S=p,bx))try{let U=new URL(window.location.href),he=p.startsWith("//")?new URL(U.protocol+p):new URL(p),k=ya(he.pathname,M);he.origin===U.origin&&k!=null?p=k+he.search+he.hash:y=!0}catch{Hi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=qS(p,{relative:l}),[D,L,B]=Rb(s,v),H=Ib(p,{replace:d,state:m,target:g,preventScrollReset:x,relative:l,viewTransition:_});function j(U){e&&e(U),U.defaultPrevented||H(U)}let A=Z.createElement("a",{...v,...B,href:S||N,onClick:y||c?e:j,ref:Ub(b,L),target:g,"data-discover":!C&&i==="render"?"true":void 0});return D&&!C?Z.createElement(Z.Fragment,null,A,Z.createElement(Cb,{page:N})):A});np.displayName="Link";var Zo=Z.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:d,viewTransition:m,children:g,...p},x){let _=al(d,{relative:p.relative}),v=rs(),b=Z.useContext(au),{navigator:M,basename:C}=Z.useContext(Gi),S=b!=null&&kb(_)&&m===!0,y=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,N=v.pathname,D=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(N=N.toLowerCase(),D=D?D.toLowerCase():null,y=y.toLowerCase()),D&&C&&(D=ya(D,C)||D);const L=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let B=N===y||!l&&N.startsWith(y)&&N.charAt(L)==="/",H=D!=null&&(D===y||!l&&D.startsWith(y)&&D.charAt(y.length)==="/"),j={isActive:B,isPending:H,isTransitioning:S},A=B?e:void 0,U;typeof s=="function"?U=s(j):U=[s,B?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let he=typeof c=="function"?c(j):c;return Z.createElement(np,{...p,"aria-current":A,className:U,ref:x,style:he,to:d,viewTransition:m},typeof g=="function"?g(j):g)});Zo.displayName="NavLink";var Ob=Z.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:d=Xc,action:m,onSubmit:g,relative:p,preventScrollReset:x,viewTransition:_,...v},b)=>{let M=zb(),C=Hb(m,{relative:p}),S=d.toLowerCase()==="get"?"get":"post",y=typeof m=="string"&&Mx.test(m),N=D=>{if(g&&g(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,B=(L==null?void 0:L.getAttribute("formmethod"))||d;M(L||D.currentTarget,{fetcherKey:e,method:B,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:_})};return Z.createElement("form",{ref:b,method:S,action:C,onSubmit:s?g:N,...v,"data-discover":!y&&r==="render"?"true":void 0})});Ob.displayName="Form";function Pb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ex(r){let e=Z.useContext(kr);return Qt(e,Pb(r)),e}function Ib(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:d}={}){let m=Is(),g=rs(),p=al(r,{relative:c});return Z.useCallback(x=>{if(pb(x,e)){x.preventDefault();let _=i!==void 0?i:Jo(g)===Jo(p);m(r,{replace:_,state:s,preventScrollReset:l,relative:c,viewTransition:d})}},[g,m,p,i,s,e,r,l,c,d])}var Bb=0,Fb=()=>`__${String(++Bb)}__`;function zb(){let{router:r}=Ex("useSubmit"),{basename:e}=Z.useContext(Gi),i=ab();return Z.useCallback(async(s,l={})=>{let{action:c,method:d,encType:m,formData:g,body:p}=vb(s,e);if(l.navigate===!1){let x=l.fetcherKey||Fb();await r.fetch(x,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:g,body:p,formMethod:l.method||d,formEncType:l.encType||m,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:g,body:p,formMethod:l.method||d,formEncType:l.encType||m,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function Hb(r,{relative:e}={}){let{basename:i}=Z.useContext(Gi),s=Z.useContext(Ea);Qt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...al(r||".",{relative:e})},d=rs();if(r==null){c.search=d.search;let m=new URLSearchParams(c.search),g=m.getAll("index");if(g.some(x=>x==="")){m.delete("index"),g.filter(_=>_).forEach(_=>m.append("index",_));let x=m.toString();c.search=x?`?${x}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ga([i,c.pathname])),Jo(c)}function kb(r,e={}){let i=Z.useContext(mx);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ex("useViewTransitionState"),l=al(r,{relative:e.relative});if(!i.isTransitioning)return!1;let c=ya(i.currentLocation.pathname,s)||i.currentLocation.pathname,d=ya(i.nextLocation.pathname,s)||i.nextLocation.pathname;return $c(l.pathname,d)!=null||$c(l.pathname,c)!=null}[...Tb];const jb="/assets/scanner-BiZN9XhY.png",Gb="/assets/chatlogo-D_FQmafv.png",Vb="/assets/wallet-back-card-8SVfUFQq.png",Xb="/assets/wallet-front-card-D502TlnO.png",Wb="/assets/sos%20button-Cq0nAT1v.png",qb="/assets/pogo-logo3-CiYjFcgo.png",Yb={CHATGPT:{badge:"01",badgeClass:"",title:"CHATGPT",deImg:Gb,deClass:"wallet-card-logo"},SAFEHUB:{badge:"03",badgeClass:"wallet-card-badge-red",title:"SAFEHUB",deImg:Wb,deClass:"wallet-card-sos-button"},POGO:{badge:"02",badgeClass:"wallet-card-badge-purple",title:"POGO",deImg:qb,deClass:"wallet-card-pogo-logo"},WRAP:{badge:"04",badgeClass:"wallet-card-badge-yellow",title:"WRAP",deImg:null,deClass:""}},Zb=[{id:"CHATGPT",label:"ChatGPT"},{id:"POGO",label:"Pogo"},{id:"SAFEHUB",label:"Safehub"},{id:"WRAP",label:"Wrap"}],Kb=()=>f.jsx("svg",{width:"11",height:"11",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:f.jsx("path",{d:"M2 6l3 3 5-5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})}),Qb=()=>{const r=Is(),[e,i]=Z.useState(!0),[s,l]=Z.useState("CHATGPT"),[c,d]=Z.useState(!1),m=v=>{v!==s&&(l(v),d(!1))},g=()=>{switch(s){case"CHATGPT":r("/work/chatgpt/full");break;case"SAFEHUB":r("/work/safehub");break;case"POGO":r("/work/pogo");break;case"WRAP":window.open("https://trywrap.com/","_blank","noopener,noreferrer");break}},p=v=>{v.stopPropagation();const b=v.target,M=v.currentTarget;(b===M||b.closest(".wallet-card-header, .wallet-card-badge, .wallet-card-title")!==null)&&d(!0)},x=v=>{v.stopPropagation(),d(!1)},_=Yb[s];return f.jsx("div",{className:"wallet-wrapper",children:f.jsxs("div",{className:"wallet-layout",children:[f.jsx("div",{className:"wallet-container",children:f.jsxs("div",{className:"wallet-pocket",children:[f.jsx("img",{src:Vb,alt:"",className:"wallet-pocket-image"}),f.jsxs("div",{className:`wallet-card ${c?"card-hovered":""}`,onClick:g,onMouseEnter:p,onMouseLeave:x,style:{cursor:"pointer"},children:[f.jsxs("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",borderRadius:"16px",pointerEvents:"none",overflow:"hidden"},xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("clipPath",{id:"card-clip",children:f.jsx("rect",{width:"100%",height:"100%",rx:"16"})}),f.jsx("g",{clipPath:"url(#card-clip)",children:Array.from({length:120},(v,b)=>f.jsx("circle",{cx:"0",cy:"0",r:20+b*6,fill:"none",stroke:"rgba(0,0,0,0.025)",strokeWidth:"1"},b))})]}),f.jsxs("div",{className:"wallet-card-header",children:[f.jsx("div",{className:`wallet-card-badge ${_.badgeClass}`,children:_.badge}),f.jsx("span",{className:"wallet-card-title",children:_.title})]}),_.deImg&&f.jsx("img",{src:_.deImg,alt:"",className:_.deClass}),f.jsx("img",{src:jb,alt:"",className:"wallet-card-chip"})]},s),f.jsx("img",{src:Xb,alt:"",className:"wallet-second-base"})]})}),f.jsx("div",{className:"wallet-nav",children:f.jsxs("div",{className:`wallet-nav-section${e?" open":""}`,children:[f.jsxs("button",{className:"wallet-nav-header",onClick:()=>i(v=>!v),children:[f.jsx("span",{className:"wallet-nav-label",children:"RECENT WORK"}),f.jsx("span",{className:`wallet-nav-chevron${e?" rotated":""}`})]}),f.jsx("div",{className:"wallet-nav-items-grid",children:f.jsx("div",{className:"wallet-nav-items",children:Zb.map(({id:v,label:b})=>f.jsxs("div",{className:`wallet-nav-item${s===v?" active":""}`,onClick:()=>m(v),children:[f.jsx("span",{className:"wallet-nav-item-label",children:b}),s===v&&f.jsx("span",{className:"wallet-nav-item-check",children:f.jsx(Kb,{})})]},v))})})]})})]})})},Jb="/assets/emoji-mail-Cgi9Z51R.png",$b="/assets/emoji-folder-CPcV07Op.png",eM="/assets/emoji-paper-upEZoPsv.png",tv=()=>f.jsx("svg",{width:"9",height:"9",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:f.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),vr=({href:r,children:e,internal:i=!1})=>{const s=Is();return i?f.jsxs("span",{className:"hero-inline-link",style:{cursor:"pointer"},onClick:()=>s(r),children:[e,f.jsx("sup",{className:"hero-inline-sup",children:f.jsx(tv,{})})]}):f.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"hero-inline-link",children:[e,f.jsx("sup",{className:"hero-inline-sup",children:f.jsx(tv,{})})]})},tM=()=>f.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[f.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),nM=()=>f.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:f.jsx("path",{d:"M20 6L9 17l-5-5",stroke:"#BF5656",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),nv=()=>f.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[f.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),iv=["currently designing in new york","currently sipping on matcha","currently decorating my laptop with stickers","currently listening to don toliver","currently playing animal crossing new horizons","currently jamming to lofi","currently watching masterchef canada"];function iM(){const r=Is(),e=Z.useRef(null),[i,s]=Z.useState(!1),[l,c]=Z.useState(0);Z.useEffect(()=>{const m=setInterval(()=>{c(g=>(g+1)%iv.length)},3500);return()=>clearInterval(m)},[]);const d=()=>{navigator.clipboard.writeText("ng545@cornell.edu"),s(!0),setTimeout(()=>s(!1),2e3)};return Z.useEffect(()=>{const m=new IntersectionObserver(p=>{p.forEach(x=>{x.isIntersecting&&x.target.classList.add("fade-in-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"}),g=document.querySelectorAll(".fade-in-on-scroll");return g.forEach(p=>m.observe(p)),()=>g.forEach(p=>m.unobserve(p))},[]),f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"new-hero-wrap",children:f.jsxs("div",{className:"new-hero-content",children:[f.jsxs("div",{className:"new-hero-top",children:[f.jsx("span",{className:"new-hero-name",children:"Nitish's Digital Corner"}),f.jsxs("span",{className:"new-hero-location",children:[f.jsx("span",{className:"new-hero-status-dot"}),f.jsx("span",{className:"new-hero-location-text",children:iv[l]},l)]})]}),f.jsxs("p",{className:"new-hero-body",children:["I'm a designer building ambitious tools that feel surprisingly simple. Currently studying Data Science & Statistics @"," ",f.jsx(vr,{href:"https://www.cornell.edu",children:"Cornell University"})," ","while conducting HCI research with the"," ",f.jsx(vr,{href:"https://interplay.tech/",children:"Interplay Research Studio"})," ","and working as a Product Design Intern @"," ",f.jsx(vr,{href:"https://www.joinpogo.com/",children:"Pogo"}),"."]}),f.jsxs("p",{className:"new-hero-body-grey",children:["Incoming TPM @"," ",f.jsx(vr,{href:"https://www.cisco.com/",children:"Cisco"}),"."," ","Previously designed an intuitive bookmarking experience for"," ",f.jsx(vr,{href:"/work/chatgpt/article",internal:!0,children:"ChatGPT"})," ","conversations, and led the design of a consumer dating app for"," ",f.jsx(vr,{href:"https://trywrap.com/",children:"Wrap"}),"."]}),f.jsxs("div",{className:"hero-contact-block",children:[f.jsxs("button",{className:"hero-email-row",onClick:d,"aria-label":"Copy email address",children:[f.jsx("img",{src:Jb,alt:"",className:"hero-contact-emoji","aria-hidden":"true"}),f.jsx("span",{className:"hero-email-text",children:"ng545@cornell.edu"}),f.jsx("span",{className:`hero-email-icon${i?" hero-email-icon--copied":""}`,children:i?f.jsx(nM,{}):f.jsx(tM,{})})]}),f.jsxs("a",{href:"https://www.linkedin.com/in/nitishgannu/",target:"_blank",rel:"noopener noreferrer",className:"hero-linkedin-row",children:[f.jsx("img",{src:$b,alt:"",className:"hero-contact-emoji","aria-hidden":"true"}),f.jsx("span",{className:"hero-linkedin-text",children:"linkedin.com/in/nitishg/"}),f.jsx("span",{className:"hero-linkedin-icon",children:f.jsx(nv,{})})]}),f.jsxs("a",{href:"#",className:"hero-linkedin-row",children:[f.jsx("img",{src:eM,alt:"",className:"hero-contact-emoji","aria-hidden":"true"}),f.jsx("span",{className:"hero-linkedin-text",children:"read.cv"}),f.jsx("span",{className:"hero-linkedin-icon",children:f.jsx(nv,{})})]})]})]})}),f.jsx("div",{className:"main-content-container wallet-desktop-only",ref:e,children:f.jsx("div",{className:"wallet-side-panel",children:f.jsx(Qb,{})})}),f.jsxs("div",{className:"mobile-project-list",children:[f.jsx("p",{className:"mobile-project-heading",children:"FEATURED WORK"}),[{num:"01",bg:"#111111",color:"#ffffff",label:"ChatGPT",date:"Fall 2025",path:"/work/chatgpt/article"},{num:"02",bg:"#7c3aed",color:"#ffffff",label:"Pogo",date:"Spring 2026",path:"/work/pogo"},{num:"03",bg:"#d5061b",color:"#ffffff",label:"Safehub",date:"Spring 2024",path:"/work/safehub"},{num:"04",bg:"#ffb700",color:"#ffffff",label:"Wrap",date:"Summer 2025",href:"https://trywrap.com/"}].map(({num:m,bg:g,color:p,label:x,date:_,path:v,href:b})=>f.jsxs("a",{href:b||v,onClick:v?M=>{M.preventDefault(),r(v)}:void 0,target:b?"_blank":void 0,rel:b?"noopener noreferrer":void 0,className:"mobile-project-row",children:[f.jsx("span",{className:"mobile-project-badge",style:{backgroundColor:g,color:p},children:m}),f.jsxs("span",{className:"mobile-project-info",children:[f.jsx("span",{className:"mobile-project-title",children:x}),f.jsx("span",{className:"mobile-project-date",children:_})]}),f.jsx("svg",{className:"mobile-project-arrow",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:f.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]},m))]})]})}const av="/assets/portfolio1-DiUIeXWw.jpg",aM="/assets/portfolio2-DvkUX-Ss.jpg",sM="/assets/portfolio3-cFjSv9RB.jpg",sv="/assets/portfolio4-Dwc8lrmg.jpg",rM="/assets/matcha1-new-ilk_oeJQ.jpg",oM="/assets/matcha2-new-B20bYSc-.jpg",lM="/assets/matcha3-new-BDZH9xpW.jpg",cM="/assets/matcha4-new-N3ulVg8X.jpg",uM="/assets/matchamovie-q2XLSOx1.mov",rv=[{label:"trying everything matcha flavored ↓",items:[{type:"img",src:rM},{type:"img",src:oM},{type:"img",src:lM},{type:"img",src:cM},{type:"video",src:uM}]},{label:"me in Miami 🌴",items:[{type:"img",src:av},{type:"img",src:sM},{type:"img",src:sv}]},{label:"me in NYC 🏙️",items:[{type:"img",src:sv},{type:"img",src:aM},{type:"img",src:av}]}],fM=()=>f.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M17 1l4 4-4 4"}),f.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),f.jsx("path",{d:"M7 23l-4-4 4-4"}),f.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]});function ov(r,e,i){return r===e%i?"front":r===(e+1)%i?"mid":"back"}function dM(){const[r,e]=Z.useState(0),[i,s]=Z.useState(0),l=rv[r],c=l.items.length,d=()=>{e(m=>(m+1)%rv.length),s(0)};return f.jsx("div",{className:"about-page-new",children:f.jsxs("div",{className:"about-layout",children:[f.jsx("h1",{className:"about-hero-title",children:"Hey, I'm Nitish."}),f.jsx("p",{className:"about-body-text",children:"I've never been great at picking one path and sticking to it, but design feels right at the moment, so that's where I'm spending my time. I'm also trying my hand at blogging, potentially to inspire others."}),f.jsx("p",{className:"about-body-text about-body-text--grey",children:"Outside of designing in Figma, you'll probably find me on a hiking trail, searching for the best Thai restaurants in my area to rate on Beli, or adding another Smiski to my growing collection."}),f.jsxs("div",{className:"about-stack-col",children:[f.jsxs("div",{className:"about-stack-header",children:[f.jsx("span",{className:"about-stack-label",children:l.label}),f.jsx("button",{className:"about-stack-rotate",onClick:d,"aria-label":"Switch set",children:f.jsx(fM,{})})]}),f.jsx("div",{className:"about-photo-stack",onClick:()=>s(m=>(m+1)%c),children:l.items.map((m,g)=>m.type==="video"?f.jsx("video",{src:m.src,className:`about-photo-card about-photo-card--${ov(g,i,c)}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{objectFit:"cover"}},m.src):f.jsx("img",{src:m.src,alt:"",className:`about-photo-card about-photo-card--${ov(g,i,c)}`},m.src))})]}),f.jsxs("div",{className:"about-spotify-block",children:[f.jsx("p",{className:"about-spotify-label",children:"more recently listening to ↓"}),f.jsx("iframe",{className:"about-spotify-embed",src:"https://open.spotify.com/embed/playlist/0JzWMZwqJ1tl989E0tdZlo?utm_source=generator",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",title:"My jams playlist"})]})]})})}const hM="/assets/playground1-DOa-1y59.jpg",pM="/assets/playground2-CbEEjSiB.jpg",mM="/assets/playground3-DWks5Hfq.jpg",gM="/assets/playground4-Eno4u8ze.jpg",vM="/assets/playground5-bDrwqSFX.jpg",xM="/assets/playground6-Cy4jFYxE.jpg",_M="/assets/playground7-Bc1qX_Vl.jpg",yM="/assets/playground8-t8mD4Cep.jpg",SM="/assets/portfolio4-Dwc8lrmg.jpg",bM="/assets/playground10-CK7-_Z_v.jpg",MM="/assets/playground11-CkeUv4g9.png",EM="/assets/playground12-Ckj-evdO.jpg",TM="/assets/matcha1-new-ilk_oeJQ.jpg",AM="/assets/playground14-D2yoYerN.jpg",wM="/assets/playground15-DIGDscYW.jpg",RM="/assets/plane-f4ad0RLY.png",yd="/assets/planet-CFEYygEu.png",Sc="/assets/cloud-C_RrmoAy.png",CM=[{id:1,src:hM,x:-700,y:-380,rotation:-4,width:320,zIndex:1},{id:2,src:pM,x:320,y:-420,rotation:3,width:300,zIndex:2},{id:3,src:mM,x:680,y:-160,rotation:-2,width:310,zIndex:3},{id:4,src:vM,x:-400,y:120,rotation:5,width:290,zIndex:4},{id:5,src:xM,x:-720,y:400,rotation:-3,width:300,zIndex:5},{id:6,src:gM,x:-100,y:-680,rotation:2,width:290,zIndex:6},{id:7,src:_M,x:-650,y:-740,rotation:-2,width:370,zIndex:7},{id:8,src:yM,x:700,y:200,rotation:3,width:280,zIndex:8},{id:9,src:SM,x:250,y:90,rotation:-4,width:290,zIndex:9},{id:10,src:bM,x:700,y:-900,rotation:4,width:310,zIndex:10},{id:11,src:MM,x:-1150,y:-520,rotation:-3,width:300,zIndex:11},{id:12,src:EM,x:0,y:600,rotation:2,width:320,zIndex:12},{id:13,src:TM,x:-1190,y:200,rotation:-5,width:295,zIndex:13},{id:14,src:AM,x:120,y:-1080,rotation:1,width:330,zIndex:14},{id:15,src:wM,x:1100,y:180,rotation:-3,width:285,zIndex:15}];function NM(){const[r,e]=Z.useState({x:0,y:0}),[i,s]=Z.useState(CM),[l,c]=Z.useState(!1),d=Z.useRef(null),m=Z.useRef({x:0,y:0});Z.useEffect(()=>{const _={x:Math.round(window.innerWidth/2),y:Math.round(window.innerHeight/2)};m.current=_,e(_)},[]);const g=Z.useCallback(_=>{m.current=_,e(_)},[]),p=Z.useCallback(_=>{_.button===0&&(d.current={type:"canvas",startMouseX:_.clientX,startMouseY:_.clientY,startCanvasX:m.current.x,startCanvasY:m.current.y},c(!0))},[]),x=Z.useCallback((_,v)=>{_.stopPropagation(),_.button===0&&(d.current={type:"photo",photoId:v.id,startMouseX:_.clientX,startMouseY:_.clientY,startPhotoX:v.x,startPhotoY:v.y},c(!0),s(b=>{const M=Math.max(...b.map(C=>C.zIndex));return b.map(C=>C.id===v.id?{...C,zIndex:M+1}:C)}))},[]);return Z.useEffect(()=>{const _=b=>{if(!d.current)return;const M=b.clientX-d.current.startMouseX,C=b.clientY-d.current.startMouseY;if(d.current.type==="canvas")g({x:d.current.startCanvasX+M,y:d.current.startCanvasY+C});else{const{photoId:S,startPhotoX:y,startPhotoY:N}=d.current;s(D=>D.map(L=>L.id===S?{...L,x:y+M,y:N+C}:L))}},v=()=>{d.current=null,c(!1)};return window.addEventListener("mousemove",_),window.addEventListener("mouseup",v),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",v)}},[g]),f.jsx("div",{className:`photos-page${l?" dragging":""}`,onMouseDown:p,children:f.jsxs("div",{className:"photos-canvas",style:{transform:`translate(${r.x}px, ${r.y}px)`},children:[f.jsx("img",{src:Sc,className:"deco-icon deco-cloud",alt:"",draggable:!1,style:{filter:"invert(1)"}}),f.jsx("img",{src:RM,className:"deco-icon deco-plane",alt:"",draggable:!1,style:{filter:"invert(1)"}}),f.jsx("img",{src:yd,className:"deco-icon deco-planet",alt:"",draggable:!1,style:{filter:"invert(1)"}}),f.jsx("div",{className:"photos-hint-group",children:f.jsx("p",{className:"hint-sub",children:"DRAG TO MOVE"})}),f.jsx("img",{src:Sc,className:"scatter-deco",style:{filter:"invert(1)",left:-900,top:-400,width:90,"--base-rot":"-6deg",animation:"fadeIn 0.55s ease-out 1.30s both, cartoon-rock 3s steps(1,end) -2.4s infinite"},alt:"",draggable:!1}),f.jsx("img",{src:Sc,className:"scatter-deco",style:{filter:"invert(1)",left:530,top:-490,width:75,"--base-rot":"4deg",animation:"fadeIn 0.55s ease-out 1.40s both, cartoon-rock 3s steps(1,end) -0.8s infinite"},alt:"",draggable:!1}),f.jsx("img",{src:Sc,className:"scatter-deco",style:{filter:"invert(1)",left:-130,top:430,width:80,"--base-rot":"-3deg",animation:"fadeIn 0.55s ease-out 1.35s both, cartoon-rock 3s steps(1,end) -1.8s infinite"},alt:"",draggable:!1}),f.jsx("img",{src:yd,className:"scatter-deco",style:{filter:"invert(1)",left:870,top:-110,width:100,"--base-rot":"8deg",animation:"fadeIn 0.55s ease-out 1.45s both, cartoon-rock 3s steps(1,end) -1.2s infinite"},alt:"",draggable:!1}),f.jsx("img",{src:yd,className:"scatter-deco",style:{filter:"invert(1)",left:-820,top:170,width:90,"--base-rot":"-5deg",animation:"fadeIn 0.55s ease-out 1.38s both, cartoon-rock 3s steps(1,end) -2.7s infinite"},alt:"",draggable:!1}),i.map((_,v)=>f.jsx("div",{className:"canvas-photo",style:{left:_.x,top:_.y,width:_.width,zIndex:_.zIndex,"--rot":`${_.rotation}deg`,animationDelay:`${1.5+v*.09}s`},onMouseDown:b=>x(b,_),children:f.jsx("img",{src:_.src,alt:"",draggable:!1})},_.id))]})})}const DM="/assets/searchpeek-BC0UxGDT.png",UM="/assets/searchflow-BW40ulZP.mov",LM="/assets/tabs-7xy82rau.png",OM="/assets/quotes-D4dGwG2w.png",PM="/assets/notifications%20tutorial-D53RamJF.png",IM="/assets/searching%20tutorial-B0vJ0EXt.png",BM="/assets/FAQs%20segment-YLZ06GBZ.png",FM="/assets/ITERATION%201%20SEARCH-5kJI9bzb.png",zM="/assets/ITERATION%202%20SEARCH-DgyTGixC.png",HM="/assets/final%20product-CixDOueA.png",kM="/assets/filterpanel-DMyyXSfg.png",jM="/assets/notif-aZsFLyqM.png",GM="/assets/search1-Dyu9bfD0.JPG",VM="/assets/search2-B8lPCkW7.jpg",XM="/assets/search3-CrVMwTNY.jpg",WM=()=>{const[r,e]=Z.useState(""),i=Z.useRef({});Z.useEffect(()=>{window.scrollTo(0,0)},[]),Z.useEffect(()=>{const c=()=>{const d=window.scrollY+200,m=["context","introducing","problem","solution","final-product","reflections"];let g="";for(const p of m){const x=i.current[p];if(x){const _=x.offsetTop;d>=_&&(g=p)}}e(g)};return window.addEventListener("scroll",c),c(),()=>window.removeEventListener("scroll",c)},[]);const s=c=>{const d=i.current[c];if(d){const p=d.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:p,behavior:"smooth"})}},l=[{id:"context",label:"CONTEXT"},{id:"introducing",label:"INTRODUCTION"},{id:"problem",label:"THE PROBLEM"},{id:"solution",label:"SOLUTION"},{id:"final-product",label:"FINAL PRODUCT"},{id:"reflections",label:"REFLECTIONS"}];return f.jsxs("div",{className:"case-study-container searchneu-case-study",children:[f.jsx("aside",{className:"case-study-sidebar",children:f.jsx("nav",{className:"sidebar-nav",children:l.map(c=>f.jsx("button",{className:`sidebar-nav-link ${r===c.id?"active":""}`,onClick:()=>s(c.id),children:c.label},c.id))})}),f.jsxs("div",{className:"case-study-content",children:[f.jsx("div",{className:"case-study-thumbnail-banner-container",children:f.jsx("img",{src:DM,alt:"SearchNEU Project Thumbnail",className:"case-study-thumbnail-wireframes"})}),f.jsx("h1",{className:"searchneu-case-study-title",children:"Building an Interactive Course Registration Experience"}),f.jsxs("div",{className:"case-study-columns",children:[f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"searchneu-column-title",children:"TEAM"}),f.jsx("p",{className:"column-content",children:"5 Developers, 1 PM, 3 Designers"})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"searchneu-column-title",children:"ROLE"}),f.jsx("p",{className:"column-content",children:"Product Designer"})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"searchneu-column-title",children:"TIMELINE"}),f.jsx("p",{className:"column-content",children:"5 Months"})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"searchneu-column-title",children:"SKILLS & TOOLS"}),f.jsxs("p",{className:"column-content",children:["Figma, User Research, ",f.jsx("br",{}),"Notion"]})]})]}),f.jsxs("div",{className:"case-study-section",id:"context",ref:c=>i.current.context=c,children:[f.jsx("h2",{className:"searchneu-section-title",children:"[1] CONTEXT"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"Course registration is stressful and fragmented"})}),f.jsx("p",{className:"section-paragraph",children:"Course registration is often a stressful and fragmented process, requiring students to juggle multiple tabs to check degree requirements, course availability, schedules, and professor reviews."}),f.jsx("div",{className:"searchneu-tabs-container",children:f.jsx("img",{className:"searchneu-tabs-image",src:LM,alt:"Tabs"})}),f.jsx("div",{className:"searchneu-quotes-container",children:f.jsx("img",{className:"searchneu-quotes-image",src:OM,alt:"Quotes"})})]}),f.jsxs("div",{className:"case-study-section",id:"introducing",ref:c=>i.current.introducing=c,children:[f.jsx("h2",{className:"searchneu-section-title",children:"[2] INTRODUCING SEARCHNEU"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"So what is SearchNEU?"})}),f.jsx("p",{className:"section-paragraph",children:"SearchNEU is a platform built to make course registration easier and more reliable for students. It brings everything into one place where students can view real-time class data, track availability, and get instant notifications when seats open up."}),f.jsx("div",{className:"searchneu-video-container",children:f.jsx("video",{className:"searchneu-video",src:UM,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),f.jsxs("div",{className:"searchneu-feature-one-two-column",style:{marginTop:"60px"},children:[f.jsxs("div",{className:"searchneu-feature-one-left-column",children:[f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"Streamlines the course search process"})}),f.jsxs("p",{className:"section-paragraph",children:["Using ",f.jsx("span",{className:"dotted-underline",children:"filters"})," helps narrow down results quickly, allowing users to streamline their search and find relevant courses without digging through thousands of options."]})]}),f.jsx("div",{className:"searchneu-feature-one-right-column",children:f.jsx("div",{className:"searchneu-feature-canvas",children:f.jsx("img",{className:"searchneu-intro-feature-image",src:kM,alt:"Filter Panel"})})})]}),f.jsxs("div",{className:"searchneu-feature-one-two-column",style:{marginTop:"60px"},children:[f.jsxs("div",{className:"searchneu-feature-one-left-column",children:[f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"Helps you enroll as soon as a spot opens"})}),f.jsxs("p",{className:"section-paragraph",children:["Enabling ",f.jsx("span",{className:"dotted-underline",children:"notifications"})," for a waitlisted course lets you know as soon as a spot opens, so you can act quickly without constantly checking back."]})]}),f.jsx("div",{className:"searchneu-feature-one-right-column",children:f.jsx("div",{className:"searchneu-feature-canvas",children:f.jsx("img",{className:"searchneu-intro-feature-image-2",src:jM,alt:"Notifications"})})})]})]}),f.jsxs("div",{className:"case-study-section",id:"problem",ref:c=>i.current.problem=c,children:[f.jsx("h2",{className:"searchneu-section-title",children:"[3] THE SPRING 2025 PROBLEM"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"How could we fix SearchNEU?"})}),f.jsxs("p",{className:"section-paragraph problem-statement-text-searchneu",children:[f.jsx("span",{className:"searchneu-blue",children:"SearchNEU"})," ",f.jsx("span",{className:"problem-text-grey",children:"faces usability challenges for"})," ",f.jsx("span",{className:"searchneu-blue",children:"new students"}),", ",f.jsx("span",{className:"problem-text-grey",children:"especially those unfamiliar with college course registration, highlighting the need for a more"})," ",f.jsx("span",{className:"searchneu-blue",children:"intuitive"})," ",f.jsx("span",{className:"problem-text-grey",children:"and"})," ",f.jsx("span",{className:"searchneu-blue",children:"user-friendly"})," ",f.jsx("span",{className:"problem-text-grey",children:"platform that encourages adoption and helps students"})," ",f.jsx("span",{className:"searchneu-blue",children:"navigate course selection efficiently"}),"."]}),f.jsx("p",{className:"section-paragraph",children:"This made us wonder."}),f.jsxs("div",{className:"callout",children:[f.jsx("span",{className:"callout-icon",style:{color:"#0066cc"},children:"⚠"}),f.jsx("div",{children:f.jsx("p",{className:"callout-caption",children:"How might we make SearchNEU more intuitive and user-friendly so that new students can easily navigate course registration and feel confident using the platform?"})})]})]}),f.jsxs("div",{className:"case-study-section",id:"solution",ref:c=>i.current.solution=c,children:[f.jsx("h2",{className:"searchneu-section-title",children:"[4] SOLUTION"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"What did we design?"})}),f.jsx("p",{className:"section-paragraph",children:"Throughout the spring semester, our design team focused on making SearchNEU easier to learn and navigate."}),f.jsxs("p",{className:"section-paragraph",children:["We decided to build an FAQ section with a unique twist. Instead of relying on static text, we introduced ",f.jsx("span",{className:"dotted-underline",children:"interactive tutorial modals"})," that guided students through the platform step by step."]}),f.jsxs("div",{className:"searchneu-feature-one-two-column",children:[f.jsxs("div",{className:"searchneu-feature-one-left-column",children:[f.jsx("h2",{className:"searchneu-section-title",children:"[4.1] FEATURE #1"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"Notifications Guide"})}),f.jsxs("p",{className:"section-paragraph",children:["Shows users how to set up notifications for an entire course code or for a specific section so they never miss ",f.jsx("span",{className:"dotted-underline",children:"availability updates"}),"."]})]}),f.jsx("div",{className:"searchneu-feature-one-right-column",children:f.jsx("div",{className:"searchneu-feature-canvas",children:f.jsx("img",{className:"searchneu-feature-image",src:PM,alt:"Notifications Tutorial"})})})]}),f.jsxs("div",{className:"searchneu-feature-two-two-column",style:{marginTop:"60px"},children:[f.jsxs("div",{className:"searchneu-feature-two-left-column",children:[f.jsx("h2",{className:"searchneu-section-title",children:"[4.2] FEATURE #2"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"Searching Guide"})}),f.jsx("p",{className:"section-paragraph",children:"Walks users through using filters effectively so they can narrow down courses and find the best fit faster."})]}),f.jsx("div",{className:"searchneu-feature-two-right-column",children:f.jsx("div",{className:"searchneu-feature-canvas",children:f.jsx("img",{className:"searchneu-feature-image",src:IM,alt:"Searching Tutorial"})})})]}),f.jsxs("div",{style:{marginTop:"60px"},children:[f.jsx("h2",{className:"searchneu-section-title",children:"[4.3] FEATURE #3"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"Comprehensive FAQs"})}),f.jsxs("p",{className:"section-paragraph",children:["Designing the FAQs page took more iteration than I expected, but it became a valuable opportunity to practice clear, user-focused ",f.jsx("span",{className:"dotted-underline",children:"UX writing"}),"."]}),f.jsxs("div",{className:"searchneu-two-column-canvas-container",children:[f.jsxs("div",{className:"searchneu-canvas-column",children:[f.jsx("span",{className:"searchneu-canvas-column-caption",children:"ITERATION #1"}),f.jsx("img",{className:"searchneu-canvas-column-image",src:FM,alt:"Iteration #1"})]}),f.jsxs("div",{className:"searchneu-canvas-column",children:[f.jsx("span",{className:"searchneu-canvas-column-caption",children:"ITERATION #2"}),f.jsx("img",{className:"searchneu-canvas-column-image",src:zM,alt:"Iteration #2"})]})]}),f.jsxs("div",{className:"searchneu-feature-canvas-wide",children:[f.jsx("span",{className:"searchneu-faqs-caption",children:"FINAL DESIGN"}),f.jsx("img",{className:"searchneu-faqs-image",src:BM,alt:"FAQs Segment"})]})]})]}),f.jsxs("div",{className:"case-study-section",id:"final-product",ref:c=>i.current["final-product"]=c,children:[f.jsx("h2",{className:"searchneu-section-title",children:"[5] PUTTING IT TOGETHER"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"The final product"})}),f.jsx("p",{className:"section-paragraph",children:"Here's 5 months of design work, research, and iteration assmbled together."}),f.jsx("div",{className:"searchneu-final-product-canvas",children:f.jsx("img",{className:"searchneu-final-product-image",src:HM,alt:"Final Product"})})]}),f.jsxs("div",{className:"case-study-section",id:"reflections",ref:c=>i.current.reflections=c,children:[f.jsx("h2",{className:"searchneu-section-title",children:"[6] REFLECTIONS"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"A semester filled with design crits and new friends"})}),f.jsx("p",{className:"section-paragraph",children:"SearchNEU was my first experience working as a product designer with a cross-functional team of product managers, engineers, and other product designers. It was an enjoyable experience filled with late-night work sessions for SearchNEU, team dinners, social outings, and learning new quirky design things."}),f.jsxs("div",{className:"searchneu-reflections-images",children:[f.jsxs("div",{className:"searchneu-reflections-image-item",children:[f.jsx("img",{src:GM,alt:"SearchNEU reflection image 1",className:"searchneu-reflections-image"}),f.jsx("p",{className:"searchneu-reflections-image-caption",children:"SearchNEU Photoshoot"})]}),f.jsxs("div",{className:"searchneu-reflections-image-item",children:[f.jsx("img",{src:VM,alt:"SearchNEU reflection image 2",className:"searchneu-reflections-image"}),f.jsx("p",{className:"searchneu-reflections-image-caption",children:"Sandbox Demo Day"})]}),f.jsxs("div",{className:"searchneu-reflections-image-item",children:[f.jsx("img",{src:XM,alt:"SearchNEU reflection image 3",className:"searchneu-reflections-image"}),f.jsx("p",{className:"searchneu-reflections-image-caption",children:"SearchNEU Team Dinner"})]})]}),f.jsx("p",{style:{fontFamily:"'Georgia', 'Times New Roman', serif",fontStyle:"italic",fontSize:"32px",fontWeight:"400",color:"#333",textAlign:"center",marginTop:"60px",lineHeight:"1.2"},children:"Full case study coming soon!"})]})]})]})},qM="/assets/wrap%20project%20thumbnail%20in%20case%20study-CDZPNK_v.png",YM="/assets/collage%20wrap%20case%20study-JR7ZTVP_.png",ZM=()=>(Is(),uS.useEffect(()=>{window.scrollTo(0,0)},[]),f.jsx("div",{className:"case-study-container wrap-case-study",children:f.jsxs("div",{className:"case-study-content",children:[f.jsxs("div",{className:"case-study-header",children:[f.jsx("h1",{className:"case-study-title",children:f.jsx("em",{children:"Redefining Modern Dating with Real Connections & Safer Spaces"})}),f.jsx("p",{className:"case-study-description",children:"Worked with a cross-functional team to create a dating platform that fostered honesty, security, and real connections through intuitive and responsible design."}),f.jsx("img",{src:qM,alt:"Wrap Project Thumbnail",className:"case-study-thumbnail"}),f.jsxs("div",{className:"case-study-columns",children:[f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"wrap-column-title",children:"TEAM"}),f.jsx("p",{className:"column-content",children:"9 Engineers, 1 Product Designer, 1 PM"})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"wrap-column-title",children:"ROLE"}),f.jsx("p",{className:"column-content",children:"Founding Product Designer"})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"wrap-column-title",children:"TIMELINE"}),f.jsx("p",{className:"column-content",children:"June 2025 - Present"})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"wrap-column-title",children:"SKILLS & TOOLS"}),f.jsx("p",{className:"column-content",children:"User Research, Figma, Miro, Design Systems"})]})]})]}),f.jsxs("div",{className:"case-study-section",children:[f.jsx("h2",{className:"wrap-section-title",children:"SUMMER 2025 INTERNSHIP"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"Trying on new hats every single day"})}),f.jsx("p",{className:"section-paragraph",children:"Over the summer at Wrap, I had the opportunity to step into a variety of roles—managing engineer hand-offs, assisting with coding tasks, and exploring new marketing initiatives. Each day brought a chance to expand my skill set and contribute in different ways."}),f.jsxs("p",{className:"section-paragraph",children:["While the nature of my work is under ",f.jsx("b",{children:"NDA"}),", here are some of my contributions:"]}),f.jsxs("div",{className:"interview-callouts",children:[f.jsxs("div",{className:"callout",children:[f.jsx("div",{className:"callout-icon",children:"✦"}),f.jsxs("div",{className:"callout-content",children:[f.jsx("h4",{className:"callout-title",children:"Shipped 7 features throughout 3 months"}),f.jsx("p",{className:"callout-caption",children:"Led brainstorming sessions with the CEO and 2 engineers to ideate sketches for features, and built ~15 prototypes that were implemented."})]})]}),f.jsxs("div",{className:"callout",children:[f.jsx("div",{className:"callout-icon",children:"✦"}),f.jsxs("div",{className:"callout-content",children:[f.jsx("h4",{className:"callout-title",children:"Supported Engineering Workflows"}),f.jsx("p",{className:"callout-caption",children:"Assisted engineers with writing and reviewing code, managing hand-offs, and streamlining implementation of key features."})]})]}),f.jsxs("div",{className:"callout",children:[f.jsx("div",{className:"callout-icon",children:"✦"}),f.jsxs("div",{className:"callout-content",children:[f.jsx("h4",{className:"callout-title",children:"Built a Scalable Design System"}),f.jsx("p",{className:"callout-caption",children:"Developed a cohesive design system to ensure consistency across the product, streamline UI updates, and improve collaboration between designers and engineers."})]})]})]}),f.jsx("img",{src:YM,alt:"Wrap Project Collage",className:"wrap-collage-image"}),f.jsx("p",{className:"wrap-collage-caption",children:"JUST SOME THINGS I MADE FOR FUN"})]}),f.jsxs("div",{className:"case-study-section",children:[f.jsx("h2",{className:"wrap-section-title",children:"TAKEAWAYS"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:'My Summer 2025 "Wrapped"'})}),f.jsx("p",{className:"section-paragraph",children:"I learned many things this summer, from using auto layout and writing unbiased user interview questions to navigating the streets of NYC without Google Maps."}),f.jsx("p",{className:"section-paragraph",children:"But here are some of the main things I took away:"}),f.jsxs("div",{className:"interview-callouts",children:[f.jsxs("div",{className:"callout",children:[f.jsx("div",{className:"callout-icon",children:"★"}),f.jsxs("div",{className:"callout-content",children:[f.jsx("h4",{className:"callout-title",children:"Build Connections Early"}),f.jsx("p",{className:"callout-caption",children:"Socializing with engineers helped me discover people from my own college I never knew and made collaboration much smoother."})]})]}),f.jsxs("div",{className:"callout",children:[f.jsx("div",{className:"callout-icon",children:"★"}),f.jsxs("div",{className:"callout-content",children:[f.jsx("h4",{className:"callout-title",children:"Own the Design Process"}),f.jsx("p",{className:"callout-caption",children:"Being the only designer meant I led research initiatives, maintained the design system, and wrote documentation, which was a huge learning experience."})]})]}),f.jsxs("div",{className:"callout",children:[f.jsx("div",{className:"callout-icon",children:"★"}),f.jsxs("div",{className:"callout-content",children:[f.jsx("h4",{className:"callout-title",children:"Mentor and Learn"}),f.jsx("p",{className:"callout-caption",children:"I taught the CEO about UX design while learning from his perspective, making it a mutually rewarding experience."})]})]})]}),f.jsxs("p",{className:"contact-paragraph",children:["To learn more about my project or hear more about my process, reach out to ",f.jsx("a",{href:"mailto:ng545@cornell.edu",className:"contact-email",children:"ng545@cornell.edu"})," to set up a coffee chat ☕!"]})]})]})})),KM="/assets/safehub-main-C_myJ9cK.png",QM="/assets/safehub-v1-D6CXDAvT.png",JM="/assets/safehub-v2-B7-hVRoK.png",$M="/assets/safehub-location-v1-CGmCgpTE.png",eE="/assets/safehub-maps-video-CfJtSI_s.mov",tE="/assets/safehub-tooltip-recording-2-ftKGaPaP.mov",nE="/assets/safehub-you-are-here-CenqAm5f.mov",iE="/assets/safehub-location-v2-DJhZImjY.png",aE="/assets/safehub-emergency-v1-DZiS4JeJ.png",lv=()=>f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:f.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),sE=()=>(Z.useEffect(()=>{window.scrollTo(0,0)},[]),f.jsx("div",{className:"case-study-container",children:f.jsxs("div",{className:"safehub-content",children:[f.jsxs("div",{className:"safehub-header",children:[f.jsxs("div",{className:"safehub-header-left",children:[f.jsx("h1",{className:"safehub-header-title",children:"Safehub"}),f.jsx("p",{className:"safehub-header-date",children:"Spring 2024"})]}),f.jsx("div",{className:"safehub-header-right",children:f.jsx("p",{className:"safehub-description",children:"A 0→1 mobile safety app for Stamford High School, enabling students, teachers, and staff a faster way to report and respond to on-campus emergencies."})})]}),f.jsx("div",{className:"safehub-image-container",children:f.jsx("img",{src:KM,alt:"Safehub app",className:"safehub-main-image"})}),f.jsxs("div",{className:"safehub-section",children:[f.jsx("p",{className:"safehub-section-heading",children:"Introduction"}),f.jsx("p",{className:"safehub-section-body",children:"Stamford High School faces significant challenges in maintaining rapid and reliable emergency response."}),f.jsxs("div",{className:"safehub-news-links",children:[f.jsxs("a",{href:"https://www.stamfordadvocate.com/news/article/stamford-school-shooting-threat-student-arrest-19749508.php",target:"_blank",rel:"noopener noreferrer",className:"safehub-news-card",children:[f.jsx("span",{className:"safehub-news-text",children:"Stamford High School student threatened to 'shoot up the school' on Snapchat"}),f.jsx("span",{className:"safehub-news-arrow",children:f.jsx(lv,{})})]}),f.jsxs("a",{href:"https://www.nbcnewyork.com/news/local/active-shooter-hoax-call-triggers-lockdown-at-ct-schools-week-after-nj-swatting-spree/3917578/",target:"_blank",rel:"noopener noreferrer",className:"safehub-news-card",children:[f.jsx("span",{className:"safehub-news-text",children:"'Extremely Traumatic:' CT Official Blasts 'Active Shooter' Hoax"}),f.jsx("span",{className:"safehub-news-arrow",children:f.jsx(lv,{})})]})]})]}),f.jsxs("div",{className:"safehub-section",children:[f.jsx("p",{className:"safehub-section-heading",children:"User Research"}),f.jsx("p",{className:"safehub-section-body",children:"I noticed that students had very different reactions when I asked how safe campus felt. This led me to conduct user research to better understand those experiences."}),f.jsxs("div",{className:"safehub-quotes",children:[f.jsxs("div",{className:"safehub-quote-block",children:[f.jsx("p",{className:"safehub-quote-text",children:`"Marijuana and Vaping are relatively common in the Bathrooms, especially on the 6th & 7th floors, but the fights get out of hand since there are no cameras and staff can't intervene"`}),f.jsx("p",{className:"safehub-quote-attribution",children:"Stamford High Junior"})]}),f.jsxs("div",{className:"safehub-quote-block",children:[f.jsx("p",{className:"safehub-quote-text",children:'"There was a fight near the auditorium one afternoon, and it honestly terrified me. It took almost ten minutes before anyone showed up to help, and by then, everyone was already panicking."'}),f.jsx("p",{className:"safehub-quote-attribution",children:"Stamford High Sophomore"})]})]})]}),f.jsxs("div",{className:"safehub-section",children:[f.jsx("p",{className:"safehub-section-heading",children:"Insights"}),f.jsx("p",{className:"safehub-section-body",children:"I combined AI with affinity diagramming to determine common themes and found 2 insights that stood out:"}),f.jsxs("div",{className:"safehub-key-insights",children:[f.jsxs("div",{className:"safehub-key-insight",children:[f.jsx("p",{className:"safehub-key-insight-label",children:"Key Insight #1"}),f.jsx("p",{className:"safehub-key-insight-text",children:"Students were most concerned about medical emergencies, strangers, fights, suspicious objects, and fires."})]}),f.jsxs("div",{className:"safehub-key-insight",children:[f.jsx("p",{className:"safehub-key-insight-label",children:"Key Insight #2"}),f.jsx("p",{className:"safehub-key-insight-text",children:"Students questioned the effectiveness of current safety measures, including guards and cameras."})]})]})]}),f.jsxs("div",{className:"safehub-section",children:[f.jsx("p",{className:"safehub-section-heading",children:"The Problem"}),f.jsx("p",{className:"safehub-section-body",children:"Stamford High faces critical safety risks due to limited security staff and the absence of an efficient emergency response system, highlighting the need for a faster, technology-driven solution."}),f.jsxs("div",{className:"safehub-callout",children:[f.jsx("span",{className:"safehub-callout-icon",children:"⚠"}),f.jsx("p",{className:"safehub-callout-text",children:"How might we empower students, teachers, and staff with tools that improve emergency preparedness and response?"})]})]}),f.jsxs("div",{className:"safehub-section",children:[f.jsx("p",{className:"safehub-section-heading",children:"Design"}),f.jsx("p",{className:"safehub-section-body",children:"After taking into account all of the insights from my research, I started defining how I wanted the core elements of the app to look."}),f.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[f.jsxs("div",{className:"safehub-design-label safehub-design-label--iteration",children:[f.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--red",children:f.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:f.jsx("path",{d:"M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})})}),f.jsx("span",{className:"safehub-design-label-text",children:"ITERATION"})]}),f.jsx("img",{src:JM,alt:"Main screen v2",className:"safehub-main-image"})]}),f.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"Iteration led me to a final concept that felt adequate."}),f.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[f.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[f.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:f.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:f.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),f.jsx("img",{src:QM,alt:"Main screen v1",className:"safehub-main-image"})]})]}),f.jsxs("div",{className:"safehub-section",children:[f.jsx("p",{className:"safehub-section-heading",children:"Location"}),f.jsx("p",{className:"safehub-section-body",children:"While exploring location reporting, I aimed to find a balance between giving users control to report locations accurately and keeping the process simple and effortless."}),f.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[f.jsxs("div",{className:"safehub-design-label safehub-design-label--iteration",children:[f.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--red",children:f.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:f.jsx("path",{d:"M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})})}),f.jsx("span",{className:"safehub-design-label-text",children:"ITERATION"})]}),f.jsx("img",{src:$M,alt:"Location v1",className:"safehub-main-image"})]}),f.jsx("p",{className:"safehub-image-caption",children:"BRUTE FORCE APPROACH"}),f.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"I tried to explore a way to integrate maps, following patterns from familiar tools like Google Maps, Uber, and Lyft."}),f.jsx("div",{className:"safehub-image-container safehub-image-container--video",children:f.jsx("video",{className:"safehub-video",src:eE,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),f.jsxs("div",{className:"safehub-video-pair",children:[f.jsx("div",{className:"safehub-video-block",children:f.jsx("video",{className:"safehub-video",src:tE,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),f.jsx("div",{className:"safehub-video-block",children:f.jsx("video",{className:"safehub-video",src:nE,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})]}),f.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"Putting that together, I assembled a solid design."}),f.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[f.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[f.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:f.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:f.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),f.jsx("img",{src:iE,alt:"Location v2",className:"safehub-main-image"})]})]}),f.jsxs("div",{className:"safehub-section",children:[f.jsx("p",{className:"safehub-section-heading",children:"Emergency Selection"}),f.jsx("p",{className:"safehub-section-body",children:"Accounting for how users specify their emergency felt relatively straightforward to incorporate into the flow. I compiled these emergency choices from user research."}),f.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[f.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[f.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:f.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:f.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),f.jsx("img",{src:aE,alt:"Emergency selection",className:"safehub-main-image"})]})]})]})})),rE="/assets/ChatGPT%20Thumbnail-CU9zW1Hs.png",oE="/assets/hmw-mWAKJkvP.webp",lE="/assets/matcha%20flow%202%202-lsPGq96-.mov",cE="/assets/local%20with%20colors-Dvplt9YA.mov",uE="/assets/Global%20Bookmarks-B0R53pk7.mov",fE="/assets/vedant%201-DKEQ0i9R.png",dE="/assets/ryan%202-C1j2N_UV.png",hE="/assets/Aditi%203-CtLfI4Ac.png",pE="/assets/sticky--_sXhqSu.webp",mE="/assets/solutions-ok1WU0ts.webp",gE="/assets/swot-x7fHZY3s.png",vE="/assets/local%20bookmarks%20man-Cfy3X5JU.webp",xE="/assets/gloal%20bookmarks%20man-S1zA0VGb.webp",_E="/assets/claude%20analysis-BsZWfSHr.png",yE="/assets/gemini%20analysis-BmeCR9WI.png",SE=()=>(Z.useEffect(()=>{window.scrollTo(0,0)},[]),f.jsx("div",{className:"case-study-container chatgpt-case-study",children:f.jsxs("div",{className:"case-study-content",children:[f.jsxs("div",{className:"case-study-header",children:[f.jsx("h1",{className:"case-study-title",children:f.jsx("em",{children:"Building Bookmarks into ChatGPT Mobile"})}),f.jsx("p",{className:"case-study-description",children:"Creating a more intuitive mobile interface for ChatGPT's mobile app through Bookmark integration, enabling users to save and organize their most valuable conversations."}),f.jsx("img",{src:rE,alt:"ChatGPT Project Thumbnail",className:"chatgpt-thumbnail-image"}),f.jsxs("div",{className:"case-study-columns",children:[f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"chatgpt-column-title chatgpt-column-team",children:"TEAM"}),f.jsx("p",{className:"column-content",children:"Just Me!"})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"chatgpt-column-title chatgpt-column-role",children:"ROLE"}),f.jsx("p",{className:"column-content",children:"Product Designer"})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"chatgpt-column-title chatgpt-column-timeline",children:"TIMELINE"}),f.jsxs("p",{className:"column-content",children:["3 months",f.jsx("br",{}),"(Sept 2025 - Nov 2025)"]})]}),f.jsxs("div",{className:"case-study-column",children:[f.jsx("h3",{className:"chatgpt-column-title chatgpt-column-skills",children:"SKILLS & TOOLS"}),f.jsxs("p",{className:"column-content",children:["Figma, User Research,",f.jsx("br",{}),"Prototyping"]})]})]})]}),f.jsxs("div",{className:"case-study-section",children:[f.jsx("h2",{className:"chatgpt-section-title chatgpt-section-background",children:"[1] BACKGROUND"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"One of the greatest AI tools on the market"})}),f.jsx("p",{className:"section-paragraph",children:"ChatGPT. It's the AI tool most of us rely on without even thinking about it."}),f.jsxs("p",{className:"section-paragraph",children:["I recently realized I rarely use ChatGPT's mobile app. The experience just never felt as ",f.jsx("span",{className:"dotted-underline",children:"smooth"})," or ",f.jsx("span",{className:"dotted-underline",children:"intuitive"})," as the desktop version. ",f.jsx("em",{children:"Was it just me?"})," Or were other users also struggling to rely on ChatGPT on the go?"]}),f.jsx("p",{className:"section-paragraph",children:"Information retrieval on the mobile app often felt like a hassle:"}),f.jsxs("div",{className:"chatgpt-callouts",children:[f.jsx("div",{className:"chatgpt-callout",children:f.jsxs("div",{className:"chatgpt-callout-content",children:[f.jsx("h4",{className:"chatgpt-callout-title",children:"OVERLAPPING CONVERSATIONS"}),f.jsx("p",{className:"chatgpt-callout-caption",children:"Multiple chat threads made it hard to locate specific conversations quickly."})]})}),f.jsx("div",{className:"chatgpt-callout",children:f.jsxs("div",{className:"chatgpt-callout-content",children:[f.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-pink",children:"LIMITED SCREEN SPACE"}),f.jsx("p",{className:"chatgpt-callout-caption",children:"The mobile interface felt cramped, making it difficult to navigate and find important messages."})]})}),f.jsx("div",{className:"chatgpt-callout",children:f.jsxs("div",{className:"chatgpt-callout-content",children:[f.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-bubblegum",children:"COMPACT INTERFACE"}),f.jsx("p",{className:"chatgpt-callout-caption",children:"The condensed layout made it challenging to revisit past insights and organize conversations effectively."})]})})]}),f.jsx("p",{className:"section-paragraph",children:"This made me wonder:"}),f.jsx("div",{className:"chatgpt-hmw-container",children:f.jsx("img",{src:oE,alt:"How Might We",className:"chatgpt-hmw-image"})})]}),f.jsxs("div",{className:"case-study-section",children:[f.jsx("h2",{className:"chatgpt-section-title chatgpt-section-final-product",children:"[2] THE FINAL PRODUCT"}),f.jsx("h3",{className:"section-subtitle",children:f.jsx("em",{children:"A little preview of the final product"})}),f.jsxs("p",{className:"section-paragraph",children:["The output of the project was ",f.jsx("span",{className:"dotted-underline",children:"three well-crafted high-fidelity flows"})," that integrated my bookmarks feature into the ChatGPT mobile app!"]}),f.jsxs("div",{className:"chatgpt-videos-canvas",children:[f.jsx("video",{src:lE,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),f.jsx("video",{src:cE,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),f.jsx("video",{src:uE,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]})]}),f.jsxs("div",{className:"case-study-section",children:[f.jsx("h2",{className:"chatgpt-section-title chatgpt-section-user-research",children:"[3] USER RESEARCH"}),f.jsx("h3",{className:"section-subtitle",children:"Discovering how others felt through User Research"}),f.jsxs("p",{className:"section-paragraph",children:["I conducted informal interviews with a small but diverse group of ChatGPT users: a mix of ",f.jsx("span",{className:"dotted-underline",children:"software engineers"})," and ",f.jsx("span",{className:"dotted-underline",children:"college students"}),"."]}),f.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[3.1] THE SOFTWARE ENGINEER"}),f.jsx("div",{className:"chatgpt-wide-canvas",children:f.jsx("img",{src:fE,alt:"Vedant",className:"chatgpt-wide-canvas-image chatgpt-vedant-image"})}),f.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-pink",children:"[3.2] THE BU STUDENT"}),f.jsx("div",{className:"chatgpt-wide-canvas",children:f.jsx("img",{src:dE,alt:"Ryan",className:"chatgpt-wide-canvas-image chatgpt-ryan-image"})}),f.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-bubblegum",children:"[3.3] THE CORNELL STUDENT"}),f.jsx("div",{className:"chatgpt-wide-canvas",children:f.jsx("img",{src:hE,alt:"Aditi",className:"chatgpt-wide-canvas-image chatgpt-aditi-image"})})]}),f.jsxs("div",{className:"case-study-section",children:[f.jsx("h2",{className:"chatgpt-section-title chatgpt-section-brainstorming",children:"[4] BRAINSTORMING"}),f.jsx("h3",{className:"section-subtitle",children:"Brainstorming HMWs with my Friends"}),f.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[4.1] HMW QUESTIONS"}),f.jsx("p",{className:"section-paragraph",children:"I spent around 4 hours coming up with HMW questions with my roommate and one of my closest friends!"}),f.jsx("div",{className:"chatgpt-wide-canvas chatgpt-sticky-canvas",children:f.jsx("img",{src:pE,alt:"Sticky Notes",className:"chatgpt-sticky-image"})}),f.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-pink",children:"[4.2] SOLUTIONS"}),f.jsxs("p",{className:"section-paragraph",children:["We condensed the HMWs into three core problem spaces which are the following: ",f.jsx("span",{className:"dotted-underline chatgpt-yellow",children:"Enhancing Learning Retention"}),", ",f.jsx("span",{className:"dotted-underline chatgpt-blue",children:"Conversation Structure"}),", and ",f.jsx("span",{className:"dotted-underline chatgpt-green",children:"Summarizing Takeaways"}),"."]}),f.jsx("div",{className:"chatgpt-wide-canvas chatgpt-solutions-canvas",children:f.jsx("img",{src:mE,alt:"Solutions",className:"chatgpt-wide-canvas-image chatgpt-solutions-image"})}),f.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-bubblegum",children:"[4.3] FEASABILITY"}),f.jsx("p",{className:"section-paragraph",children:"Conducting SWOT analysis led me to discover the feasibility of these solution spaces, especially on a mobile interface."}),f.jsx("div",{className:"chatgpt-wide-canvas chatgpt-swot-canvas",children:f.jsx("img",{src:gE,alt:"SWOT Analysis",className:"chatgpt-wide-canvas-image chatgpt-swot-image"})}),f.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[4.4] MARKET RESEARCH"}),f.jsx("p",{className:"section-paragraph",children:"To determine which features made the most sense for users, I evaluated other AI tools to identify patterns in interactions and functionality."}),f.jsx("div",{className:"chatgpt-wide-canvas",children:f.jsx("img",{src:_E,alt:"Claude Analysis",className:"chatgpt-wide-canvas-image chatgpt-claude-image"})}),f.jsx("div",{className:"chatgpt-wide-canvas",children:f.jsx("img",{src:yE,alt:"Gemini Analysis",className:"chatgpt-wide-canvas-image chatgpt-gemini-image"})})]}),f.jsxs("div",{className:"case-study-section",children:[f.jsx("h2",{className:"chatgpt-section-title chatgpt-section-more-brainstorming",children:"[5] MORE BRAINSTORMING"}),f.jsx("h3",{className:"section-subtitle",children:"Understanding the terminology"}),f.jsx("div",{className:"chatgpt-callout",children:f.jsxs("div",{className:"chatgpt-callout-content",children:[f.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-title-orange",children:"[5.1] LOCAL BOOKMARKS"}),f.jsxs("p",{className:"chatgpt-callout-caption",children:[f.jsx("em",{children:"Local Bookmarks"}),' are for "in-moment organization" within a single chat. They keep important messages easily accessible without forcing users to think about categorization.']})]})}),f.jsx("div",{className:"chatgpt-wide-canvas chatgpt-local-bookmarks-canvas",children:f.jsx("img",{src:vE,alt:"Local Bookmarks",className:"chatgpt-wide-canvas-image chatgpt-local-bookmarks-image"})}),f.jsx("div",{className:"chatgpt-callout",children:f.jsxs("div",{className:"chatgpt-callout-content",children:[f.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-title-orange",children:"[5.2] GLOBAL BOOKMARKS"}),f.jsx("p",{className:"chatgpt-callout-caption",children:"Global Bookmarks are category tagged bookmarks that are designed for cross-conversation organization."})]})}),f.jsx("div",{className:"chatgpt-wide-canvas chatgpt-local-bookmarks-canvas",children:f.jsx("img",{src:xE,alt:"Global Bookmarks",className:"chatgpt-wide-canvas-image chatgpt-local-bookmarks-image"})}),f.jsx("p",{className:"section-paragraph",children:"Support users with managing key information across numerous chats and enables thematic organization."})]})]})})),bE=[{name:"Insights Library",date:"May 26",comingSoon:!1,path:null},{name:"AI Qualitative Branching",date:"May 26",comingSoon:!0,path:null},{name:"Sections",date:"Apr 26",comingSoon:!1,path:"/work/pogo/sections"},{name:"Virtual Backgrounds",date:"Apr 26",comingSoon:!1,path:null},{name:"Monadic Study Builder",date:"Mar 26",comingSoon:!1,path:null},{name:"TURF Study Builder",date:"Feb 26",comingSoon:!1,path:null}];function ME(){const r=Is();return Z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),f.jsx("div",{className:"pogo-features-page",children:f.jsxs("div",{className:"pogo-features-inner",children:[f.jsxs("div",{className:"pogo-header",children:[f.jsxs("div",{className:"pogo-header-left",children:[f.jsx("h1",{className:"pogo-header-title",children:"Pogo AI Survey Platform"}),f.jsx("p",{className:"pogo-header-date",children:"Spring 2026"})]}),f.jsx("div",{className:"pogo-header-right",children:f.jsx("p",{className:"pogo-header-desc",children:"Currently working as a Product Design Intern at Pogo, an enterprise AI survey platform that has raised $14.8M in funding."})})]}),f.jsx("p",{className:"pogo-header-title pogo-section-label",children:"Shipped Features"}),f.jsx("ul",{className:"pogo-features-list",children:bE.map((e,i)=>f.jsxs("li",{className:`pogo-features-row${e.comingSoon?" pogo-features-row--dim cursor-coming-soon":""}${e.path?" pogo-features-row--link":""}`,style:{animationDelay:`${.2+i*.08}s`,cursor:e.path?"pointer":"default"},onClick:()=>e.path&&r(e.path),children:[f.jsx("span",{className:"pogo-features-name",children:e.name}),f.jsx("span",{className:"pogo-features-date",children:e.date})]},e.name))})]})})}const EE="/assets/sections-portfolio-thumbnail-2-BzVwE-74.png",TE="/assets/sections-moving-question-DZJvcC_N.png",AE="/assets/moving-question-to-section-menu--N_aHMel.png",wE="/assets/converting-question-to-section-DIe8NMiD.png",RE="/assets/companies-NCL2s234.png",CE="/assets/notion-faces-comic-BGrAiGMS.png",NE="/assets/hiding-a-section-BXo5ldxr.png",DE="/assets/hiding-individual-questions-vo-vRv53.png",UE="/assets/renaming-a-section-C5jOcUll.png";function LE(){const[r,e]=Z.useState(!1),[i,s]=Z.useState(""),[l,c]=Z.useState(!1),d=Z.useRef(null);Z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]);const m=()=>{i==="pogosections1234"?e(!0):(c(!0),setTimeout(()=>c(!1),500),s(""))};return f.jsx("div",{className:"sections-page",children:f.jsxs("div",{className:"sections-inner",children:[f.jsxs("div",{className:"sections-header",children:[f.jsxs("div",{className:"sections-header-left",children:[f.jsx("h1",{className:"sections-title",children:"Survey Sections"}),f.jsx("p",{className:"sections-meta",children:"Spring 2026"})]}),f.jsx("div",{className:"sections-header-right",children:f.jsx("p",{className:"sections-desc",children:'Designed a minimal "Sections" feature for the AI Qualitative Survey builder within the Pogo platform, enabling researchers to organize long-form AI-generated surveys into lightweight thematic groups without adding workflow complexity.'})})]}),f.jsx("div",{className:"sections-thumbnail-canvas",children:f.jsx("img",{src:EE,alt:"Sections feature thumbnail",className:"sections-thumbnail-img"})}),f.jsxs("div",{className:"sections-text-block",style:{paddingBottom:"16px"},children:[f.jsx("p",{className:"sections-section-label",children:"BACKGROUND"}),f.jsx("h2",{className:"sections-section-title",children:"Clients requested a special feature"}),f.jsx("p",{className:"sections-section-body",children:"While working on the AI Qualitative Survey branching editor, I identified enterprise user demand for more organized branching logic workflows. One of the clearest examples came from rideshare research studies with Uber, where researchers wanted to classify respondents early in the interview and route them into different discussion paths"})]}),f.jsx("div",{className:"sections-thumbnail-canvas sections-thumbnail-canvas--comic",children:f.jsx("img",{src:CE,alt:"Notion faces comic",className:"sections-comic-img"})}),f.jsxs("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px",paddingBottom:"20px"},children:[f.jsx("h2",{className:"sections-section-title",children:"Currently, survey builders have to hide questions one by one"}),f.jsx("p",{className:"sections-section-body",style:{marginTop:"8px"},children:"In large enterprise studies with 10–15+ interview questions and multiple respondent cohorts, branching logic quickly became difficult to manage and scale."})]}),f.jsx("div",{className:"sections-thumbnail-canvas sections-thumbnail-canvas--hiding",children:f.jsx("img",{src:DE,alt:"Hiding individual questions",className:"sections-hiding-individual-img"})}),f.jsxs("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px",paddingBottom:"20px"},children:[f.jsx("h2",{className:"sections-section-title",children:'Sections support more organized "hide" logic'}),f.jsx("p",{className:"sections-section-body",style:{marginTop:"8px"},children:"Sections simplify large branching workflows by allowing related questions to be hidden and managed together instead of one at a time."})]}),f.jsx("div",{className:"sections-thumbnail-canvas sections-thumbnail-canvas--hiding",children:f.jsx("img",{src:NE,alt:"Hiding a section",className:"sections-hiding-img"})}),f.jsxs("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px"},children:[f.jsx("p",{className:"sections-section-label sections-section-label--dark",children:"COMPETITOR RESEARCH"}),f.jsx("h2",{className:"sections-section-title",children:"Finding inspiration in popular tools"}),f.jsx("p",{className:"sections-section-body",children:"I first conducted competitor analysis across survey platforms and workspace tools to understand how other products approached sections, organization, and information hierarchy. This research helped inform interaction patterns and usability decisions for the feature's overall design."})]}),f.jsx("div",{className:"sections-thumbnail-canvas sections-thumbnail-canvas--half",children:f.jsx("img",{src:RE,alt:"Competitor companies",className:"sections-companies-img cursor-companies"})}),f.jsxs("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px"},children:[f.jsx("p",{className:"sections-section-label sections-section-label--dark",children:"DESIGNS"}),f.jsx("h2",{className:"sections-section-title",children:"Fast forward to the interactions"}),f.jsx("p",{className:"sections-section-body",children:"The feature supported several intuitive interactions, including creating sections from multiple entry points, grouping existing questions into sections, and quickly removing or ungrouping content when restructuring surveys."})]}),f.jsx("div",{className:"sections-text-block sections-text-block--tight",children:f.jsx("h2",{className:"sections-section-title",children:"Dragging questions into a section"})}),f.jsx("div",{className:"sections-thumbnail-canvas",children:f.jsx("img",{src:TE,alt:"Sections moving question",className:"sections-thumbnail-img"})}),f.jsx("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px"},children:f.jsx("h2",{className:"sections-section-title",children:"Moving questions into a section"})}),f.jsx("div",{className:"sections-thumbnail-canvas",children:f.jsx("img",{src:AE,alt:"Moving question to section menu",className:"sections-thumbnail-img"})}),f.jsx("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px"},children:f.jsx("h2",{className:"sections-section-title",children:"Converting a question to a section"})}),f.jsx("div",{className:"sections-thumbnail-canvas",children:f.jsx("img",{src:wE,alt:"Converting a question to a section",className:"sections-thumbnail-img"})}),f.jsx("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px"},children:f.jsx("h2",{className:"sections-section-title",children:"Renaming the title of a section"})}),f.jsx("div",{className:"sections-thumbnail-canvas",children:f.jsx("img",{src:UE,alt:"Renaming a section",className:"sections-thumbnail-img"})}),r?f.jsx("div",{style:{minHeight:"100vh"}}):f.jsxs("div",{className:"sections-password-gate",children:[f.jsx("h2",{className:"sections-password-title",children:"This project isn't public yet"}),f.jsx("p",{className:"sections-password-body",children:"If you don't have the password, please reach out via email. Due to NDA restrictions, I can only provide access and discuss the project directly with interested parties."}),f.jsxs("div",{className:`sections-password-row${l?" sections-password-shake":""}`,children:[f.jsx("input",{ref:d,type:"password",value:i,onChange:g=>s(g.target.value),onKeyDown:g=>g.key==="Enter"&&m(),className:"sections-password-input",placeholder:"PASSWORD"}),f.jsx("button",{onClick:m,className:"sections-password-btn",children:"SUBMIT"})]})]})]})})}const ih="/assets/chatgpt-logo-DyzhL--E.png",Tx="/assets/reddit-logo2-DkJOcndy.webp",OE="/assets/chatgpt-bookmark-1-C2424Z2Q.png",PE="/assets/chatgpt-participants-jN64hiEx.png",IE="/assets/chatgpt-user-1-D4T7bMQR.png",BE="/assets/chatgpt-user-2-C_3cDCdD.png",FE="/assets/chatgpt-user-3-BZx3JJ_Y.png",zE="/assets/chatgpt-text-example-CoAXoUz6.png",HE="/assets/chatgpt-problem-2-Cmc_rCZS.png",kE="/assets/chatgpt-design-1-CnQBWeVZ.png",jE="/assets/chatgpt-branding-bg-DEgpmGJD.png",cv="/assets/chatgpt-branding-bg-3-D3b6umyR.png",GE="/assets/chatgpt-branding-bg-4-xgdXPrMM.png",VE="/assets/chatgpt-tooltip-example-Cz5kJItN.png",XE="/assets/chatgpt-chatbox-popup-BXXSipk8.png",WE="/assets/chatgpt-option-menu-BrChuFX4.png",qE="/assets/chatgpt-only-one-B3F_95MY.png",YE="/assets/chatgpt-more-than-one-BoPLwqZX.png",ZE="/assets/chatgpt-bookmark-popup-CvO5grWF.png",xr=[{type:"participants",src:PE},{type:"profile",src:IE,frustrations:["Lost in long threads","Hard to revisit interactions","Confidently incorrect answers"]},{type:"profile",src:BE,frustrations:["Mobile layout feels cramped","Long conversations overwhelm quickly","Hard to retrieve information"]},{type:"profile",src:FE,frustrations:["Lags in long conversations","Mobile scrolling is exhausting","No performance issue alerts"]}],uv=()=>f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:f.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),KE=()=>f.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none","aria-hidden":"true",children:[f.jsx("circle",{cx:"7.5",cy:"7.5",r:"7.5",fill:"#E03131"}),f.jsx("path",{d:"M5 5l5 5M10 5l-5 5",stroke:"#fff",strokeWidth:"1.7",strokeLinecap:"round"})]});function fv({slide:r}){return r.type==="participants"?f.jsx("img",{src:r.src,alt:"Research participants",className:"chatgpt-full-carousel-img"}):f.jsxs("div",{className:"chatgpt-full-profile-slide",children:[f.jsx("img",{src:r.src,alt:"User",className:"chatgpt-full-carousel-img"}),f.jsxs("div",{className:"chatgpt-full-profile-content",children:[f.jsxs("div",{className:"chatgpt-full-profile-label-row",children:[f.jsx(KE,{}),f.jsx("span",{className:"chatgpt-full-profile-label",children:"FRUSTRATIONS"})]}),f.jsx("ul",{className:"chatgpt-full-profile-list",children:r.frustrations.map((e,i)=>f.jsxs("li",{className:"chatgpt-full-profile-item",children:[f.jsx("span",{className:"chatgpt-full-profile-badge",children:i+1}),f.jsx("span",{className:"chatgpt-full-profile-item-text",children:e})]},i))})]})]})}function QE(){const[r,e]=Z.useState(0),[i,s]=Z.useState(null),[l,c]=Z.useState(!1);Z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]);const d=p=>{l||(s(r),e(p),c(!0),setTimeout(()=>{s(null),c(!1)},420))},m=()=>d((r-1+xr.length)%xr.length),g=()=>d((r+1)%xr.length);return f.jsx("div",{className:"chatgpt-full-page",children:f.jsxs("div",{className:"chatgpt-full-inner",children:[f.jsxs("div",{className:"chatgpt-full-header",children:[f.jsxs("div",{className:"chatgpt-full-header-left",children:[f.jsx("div",{className:"chatgpt-full-logo-box",children:f.jsx("img",{src:ih,alt:"ChatGPT",className:"chatgpt-full-logo-img"})}),f.jsxs("div",{className:"chatgpt-full-title-group",children:[f.jsx("h1",{className:"chatgpt-full-title",children:"ChatGPT Bookmarks"}),f.jsx("p",{className:"chatgpt-full-date",children:"Fall 2025"})]})]}),f.jsx("div",{className:"chatgpt-full-header-right",children:f.jsx("p",{className:"chatgpt-full-desc",children:"As part of a fun semester-wide project, I explored how bookmarking could work inside ChatGPT conversations to help users save, revisit, and navigate important messages more naturally."})})]}),f.jsxs("div",{className:"chatgpt-full-canvas chatgpt-full-canvas--branded",children:[f.jsx("img",{src:cv,alt:"",className:"chatgpt-full-canvas-cover-bg"}),f.jsx("img",{src:OE,alt:"ChatGPT Bookmarks",className:"chatgpt-full-canvas-img"})]}),f.jsxs("div",{className:"chatgpt-full-text-block",children:[f.jsx("p",{className:"chatgpt-full-label",children:"CONTEXT"}),f.jsx("h2",{className:"chatgpt-full-section-title",children:"Experimenting with AI tools led me to find something cool"}),f.jsxs("p",{className:"chatgpt-full-section-body",children:["Recently, I realized it was difficult to revisit and retain valuable notes or insights I generated in"," ",f.jsxs("a",{href:"https://chatgpt.com",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-full-inline-link",children:["ChatGPT",f.jsx("sup",{className:"chatgpt-full-inline-sup",children:f.jsx("svg",{width:"8",height:"8",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:f.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})," ","because important content often became buried across long conversations. This led me to explore a bookmarking feature that could help users quickly save, organize, and return to meaningful moments within chats."]})]}),f.jsxs("div",{className:"chatgpt-full-text-block",children:[f.jsx("p",{className:"chatgpt-full-label",children:"USER RESEARCH"}),f.jsx("h2",{className:"chatgpt-full-section-title",children:"Discovering how others felt through contextual interviews"}),f.jsx("p",{className:"chatgpt-full-section-body",children:"I conducted informal interviews with a small but diverse group of ChatGPT users: a mix of software engineers and college students."})]}),f.jsxs("div",{className:"chatgpt-full-canvas chatgpt-full-canvas--half chatgpt-full-carousel",children:[i!==null&&f.jsx("div",{className:"chatgpt-full-slide-wrapper chatgpt-full-slide-wrapper--exit",children:f.jsx(fv,{slide:xr[i]})}),f.jsx("div",{className:`chatgpt-full-slide-wrapper${l?" chatgpt-full-slide-wrapper--enter":""}`,children:f.jsx(fv,{slide:xr[r]})},r),f.jsx("button",{className:"chatgpt-full-chevron chatgpt-full-chevron--left",onClick:m,"aria-label":"Previous",children:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18l-6-6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx("button",{className:"chatgpt-full-chevron chatgpt-full-chevron--right",onClick:g,"aria-label":"Next",children:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18l6-6-6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx("div",{className:"chatgpt-full-carousel-dots",children:xr.map((p,x)=>f.jsx("span",{className:`chatgpt-full-carousel-dot${x===r?" chatgpt-full-carousel-dot--active":""}`,onClick:()=>d(x)},x))})]}),f.jsxs("div",{className:"chatgpt-full-text-block",children:[f.jsx("h2",{className:"chatgpt-full-section-title",children:"The internet had already been complaining"}),f.jsx("p",{className:"chatgpt-full-section-body",children:"Beyond my interviews, I surfaced Reddit threads and ChatGPT community forums where users were describing the exact same frustrations, confirming this wasn't isolated to the people I spoke with."})]}),f.jsxs("div",{className:"chatgpt-full-feedback-links",children:[f.jsxs("a",{href:"https://www.reddit.com/r/ChatGPT/comments/1oxm491/feature_suggestion_bookmarks_table_of_contents_in/?utm_source=chatgpt.com",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-full-feedback-card chatgpt-full-feedback-card--reddit",children:[f.jsx("img",{src:Tx,alt:"Reddit",className:"chatgpt-full-feedback-logo"}),f.jsx("span",{className:"chatgpt-full-feedback-text",children:"Feature Suggestion: Bookmarks"}),f.jsx("span",{className:"chatgpt-full-feedback-arrow",children:f.jsx(uv,{})})]}),f.jsxs("a",{href:"https://community.openai.com/t/add-ability-to-bookmark-favorite-a-message-in-any-chat-thread/1086947",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-full-feedback-card",children:[f.jsx("img",{src:ih,alt:"ChatGPT",className:"chatgpt-full-feedback-logo chatgpt-full-feedback-logo--sm"}),f.jsx("span",{className:"chatgpt-full-feedback-text",children:"Add ability to bookmark / favorite a message"}),f.jsx("span",{className:"chatgpt-full-feedback-arrow",children:f.jsx(uv,{})})]})]}),f.jsxs("div",{className:"chatgpt-full-text-block",children:[f.jsx("p",{className:"chatgpt-full-label",children:"PROBLEM"}),f.jsx("h2",{className:"chatgpt-full-section-title",children:"You understood it. You just can't remember it."}),f.jsx("p",{className:"chatgpt-full-section-body",children:"When digesting dense content like study material or technical explanations, users identify key takeaways in the moment but have no way to capture them before the conversation moves on."})]}),f.jsx("div",{className:"chatgpt-full-canvas chatgpt-full-canvas--problem",children:f.jsx("img",{src:zE,alt:"Text example",className:"chatgpt-full-problem-img"})}),f.jsxs("div",{className:"chatgpt-full-text-block",children:[f.jsx("h2",{className:"chatgpt-full-section-title",children:"You know it exists. You just can't find it."}),f.jsx("p",{className:"chatgpt-full-section-body",children:"When iterating on something across a long conversation, a recipe, a cover letter, a piece of code, earlier versions get buried under new messages with no way to jump back to them."})]}),f.jsx("div",{className:"chatgpt-full-canvas chatgpt-full-canvas--empty",children:f.jsx("img",{src:HE,alt:"Problem 2",className:"chatgpt-full-problem2-img"})}),f.jsxs("div",{className:"chatgpt-full-text-block",children:[f.jsx("p",{className:"chatgpt-full-label",children:"SOLUTION"}),f.jsx("h2",{className:"chatgpt-full-section-title",children:"A preview of the final designs"})]}),f.jsx("div",{className:"chatgpt-full-design-canvas chatgpt-full-design-canvas--wide",children:f.jsx("img",{src:WE,alt:"Option menu design",className:"chatgpt-full-design-img chatgpt-full-design-img--option-menu"})}),f.jsxs("div",{className:"chatgpt-full-designs-grid",children:[f.jsxs("div",{className:"chatgpt-full-designs-col",children:[f.jsxs("div",{className:"chatgpt-full-design-canvas chatgpt-full-design-canvas--tall chatgpt-full-design-canvas--branded",children:[f.jsx("img",{src:jE,alt:"",className:"chatgpt-full-design-canvas-bg"}),f.jsx("img",{src:kE,alt:"Bookmarks panel",className:"chatgpt-full-design-img chatgpt-full-design-img--1"})]}),f.jsxs("div",{className:"chatgpt-full-design-canvas chatgpt-full-design-canvas--short-xl",children:[f.jsx("img",{src:qE,alt:"Only one bookmark",className:"chatgpt-full-design-img chatgpt-full-design-img--only-one"}),f.jsx("img",{src:YE,alt:"More than one bookmark",className:"chatgpt-full-design-img chatgpt-full-design-img--more-than-one"})]})]}),f.jsxs("div",{className:"chatgpt-full-designs-col",children:[f.jsx("div",{className:"chatgpt-full-design-canvas chatgpt-full-design-canvas--short",children:f.jsx("img",{src:XE,alt:"Chatbox with popup",className:"chatgpt-full-design-img chatgpt-full-design-img--chatbox-popup"})}),f.jsxs("div",{className:"chatgpt-full-design-canvas chatgpt-full-design-canvas--tall-xl chatgpt-full-design-canvas--branded",children:[f.jsx("img",{src:GE,alt:"",className:"chatgpt-full-design-canvas-bg"}),f.jsx("img",{src:ZE,alt:"Bookmark creation popup",className:"chatgpt-full-design-img chatgpt-full-design-img--bookmark-popup"})]})]})]}),f.jsxs("div",{className:"chatgpt-full-design-canvas chatgpt-full-design-canvas--wide chatgpt-full-design-canvas--branded",children:[f.jsx("img",{src:cv,alt:"",className:"chatgpt-full-design-canvas-bg"}),f.jsx("img",{src:VE,alt:"Tooltip example",className:"chatgpt-full-design-img chatgpt-full-design-img--tooltip"})]}),f.jsxs("div",{className:"chatgpt-full-text-block",children:[f.jsx("p",{className:"chatgpt-full-label",children:"DESIGN DECISIONS"}),f.jsx("h2",{className:"chatgpt-full-section-title",children:"Designing the bookmarking experience"}),f.jsx("p",{className:"chatgpt-full-section-body",children:"Throughout the project, design decisions extended beyond visual direction alone. Every interaction was considered from the user's perspective, accounting for edge cases, connected workflows, and the small moments that shape the overall experience."})]})]})})}const JE=[{num:"01",title:"Rejection",date:"Mar 2026",path:"/writing/rejection"}];function $E(){const r=Is();return Z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),f.jsx("div",{className:"pogo-features-page",children:f.jsxs("div",{className:"pogo-features-inner",children:[f.jsx("p",{className:"pogo-features-heading",children:"WRITING"}),f.jsx("ul",{className:"pogo-features-list",children:JE.map((e,i)=>f.jsxs("li",{className:"pogo-features-row writing-row",style:{animationDelay:`${.2+i*.08}s`,cursor:"pointer"},onClick:()=>r(e.path),children:[f.jsx("span",{className:"pogo-features-name",children:e.title}),f.jsx("span",{className:"pogo-features-date",children:e.date})]},e.num))})]})})}const e1="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%20643%201032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Subtract'%3e%3cmask%20id='path-1-inside-1_0_13'%20fill='white'%3e%3cpath%20d='M626%200C635.389%208.56862e-06%20643%207.61117%20643%2017V1015C643%201024.39%20635.389%201032%20626%201032H17C7.61117%201032%202.25505e-07%201024.39%200%201015V389.105C0%20377.56%207.90547%20367.516%2019.1274%20364.804L141.414%20335.252C145.005%20334.384%20147.535%20331.17%20147.535%20327.476V25C147.535%2011.1929%20158.728%200%20172.535%200H626Z'/%3e%3c/mask%3e%3cpath%20d='M626%200C635.389%208.56862e-06%20643%207.61117%20643%2017V1015C643%201024.39%20635.389%201032%20626%201032H17C7.61117%201032%202.25505e-07%201024.39%200%201015V389.105C0%20377.56%207.90547%20367.516%2019.1274%20364.804L141.414%20335.252C145.005%20334.384%20147.535%20331.17%20147.535%20327.476V25C147.535%2011.1929%20158.728%200%20172.535%200H626Z'%20fill='var(--fill-0,%20%23EDEDED)'/%3e%3cpath%20d='M626%200V-2V-2V0ZM643%2017H645V17H643ZM643%201015H645V1015H643ZM626%201032V1034V1032ZM17%201032L17%201034H17V1032ZM0%201015H-2V1015H0ZM141.414%20335.252L141.884%20337.196H141.884L141.414%20335.252ZM147.535%20327.476L149.535%20327.476V327.476H147.535ZM19.1274%20364.804L19.5972%20366.748L19.1274%20364.804ZM626%200V2C634.284%202.00001%20641%208.71574%20641%2017H643H645C645%206.50659%20636.493%20-1.99999%20626%20-2V0ZM643%2017H641V1015H643H645V17H643ZM643%201015H641C641%201023.28%20634.284%201030%20626%201030V1032V1034C636.493%201034%20645%201025.49%20645%201015H643ZM626%201032V1030H17V1032V1034H626V1032ZM17%201032L17%201030C8.71574%201030%202%201023.28%202%201015H0H-2C-2%201025.49%206.5066%201034%2017%201034L17%201032ZM0%201015H2V389.105H0H-2V1015H0ZM19.1274%20364.804L19.5972%20366.748L141.884%20337.196L141.414%20335.252L140.944%20333.308L18.6576%20362.86L19.1274%20364.804ZM141.414%20335.252L141.884%20337.196C146.373%20336.111%20149.535%20332.094%20149.535%20327.476L147.535%20327.476L145.535%20327.476C145.535%20330.246%20143.637%20332.657%20140.944%20333.308L141.414%20335.252ZM147.535%20327.476H149.535V25H147.535H145.535V327.476H147.535ZM172.535%200V2H626V0V-2H172.535V0ZM147.535%2025H149.535C149.535%2012.2975%20159.833%202%20172.535%202V0V-2C157.623%20-2%20145.535%2010.0883%20145.535%2025H147.535ZM0%20389.105H2C2%20378.483%209.27303%20369.243%2019.5972%20366.748L19.1274%20364.804L18.6576%20362.86C6.53791%20365.789%20-2%20376.636%20-2%20389.105H0Z'%20fill='var(--stroke-0,%20%23ACABAB)'%20mask='url(%23path-1-inside-1_0_13)'/%3e%3c/g%3e%3c/svg%3e",t1="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%202147245670'%3e%3crect%20x='1'%20y='1'%20width='48'%20height='48'%20rx='24'%20stroke='var(--stroke-0,%20%23B5B4B5)'%20stroke-width='2'/%3e%3ccircle%20id='Ellipse%2031401'%20cx='25'%20cy='25'%20r='9'%20fill='var(--fill-0,%20%23F7F7F7)'%20stroke='var(--stroke-0,%20%23B5B4B5)'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e",n1="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%20893%20572'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='circular-lines'%20opacity='0.3'%3e%3cg%20clip-path='url(%23clip0_0_23)'%3e%3ccircle%20id='Ellipse'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='18'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_2'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='36'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_3'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='54'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_4'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='72'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_5'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='90'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_6'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='108'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_7'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='126'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_8'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='144'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_9'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='162'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_10'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='180'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_11'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='198'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_12'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='216'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_13'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='234'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_14'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='252'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_15'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='270'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_16'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='288'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_17'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='306'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_18'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='324'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_19'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='342'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_20'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='360'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_21'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='378'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_22'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='396'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_23'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='414'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_24'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='432'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_25'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='450'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_26'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='468'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_27'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='486'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_28'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='504'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_29'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='522'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3ccircle%20id='Ellipse_30'%20opacity='0.45'%20cx='446.5'%20cy='286'%20r='540'%20stroke='var(--stroke-0,%20%23666666)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_23'%3e%3crect%20width='893'%20height='572'%20rx='37'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",i1="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20width='100%25'%20height='100%25'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%20569.5%2081'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='bottom%20dark%20grey%20thingie'%3e%3cpath%20id='Rectangle%207'%20d='M470%201V80H20.6602L1.27441%201H470Z'%20fill='var(--fill-0,%20%23E6E6E6)'%20stroke='var(--stroke-0,%20%23B5B4B5)'%20stroke-width='2'/%3e%3cg%20id='Rectangle%208'%3e%3cmask%20id='path-2-inside-1_0_61'%20fill='white'%3e%3cpath%20d='M460.5%200H569.5V44C569.5%2064.4345%20552.935%2081%20532.5%2081H460.5V0Z'/%3e%3c/mask%3e%3cpath%20d='M460.5%200H569.5V44C569.5%2064.4345%20552.935%2081%20532.5%2081H460.5V0Z'%20fill='var(--fill-0,%20%23E6E6E6)'/%3e%3cpath%20d='M460.5%20-2H571.5L567.5%202H460.5V-2ZM571.5%2044C571.5%2065.5391%20554.039%2083%20532.5%2083H460.5V79H532.5C551.83%2079%20567.5%2063.33%20567.5%2044H571.5ZM460.5%2081V0V81ZM571.5%20-2V44C571.5%2065.5391%20554.039%2083%20532.5%2083V79C551.83%2079%20567.5%2063.33%20567.5%2044V2L571.5%20-2Z'%20fill='var(--stroke-0,%20%23B5B4B5)'%20mask='url(%23path-2-inside-1_0_61)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",a1=[{id:"card8",z:1,tab:{left:23,top:31,width:92,height:604},body:{left:69,top:66,width:572,height:893}},{id:"card9",z:2,tab:{left:7,top:3,width:92,height:604},body:{left:22,top:70,width:572,height:893},texture:"circular"},{id:"card10",z:3,tab:{left:22,top:31,width:92,height:604},body:{left:68,top:66,width:572,height:893}}];function s1(){return f.jsx("div",{className:"wc-scene",children:f.jsxs("div",{className:"wc-native",children:[a1.map(r=>f.jsxs("div",{className:"wc-card-layer",style:{zIndex:r.z},children:[f.jsx("div",{className:"wc-card-body",style:r.body,children:r.texture==="circular"&&f.jsx("img",{src:n1,className:"wc-card-texture",alt:""})}),f.jsx("div",{className:"wc-card-tab",style:r.tab,children:f.jsx("img",{src:i1,className:"wc-tab-dark",alt:""})})]},r.id)),f.jsxs("div",{className:"wc-body-layer",children:[f.jsx("img",{src:e1,className:"wc-body-img",alt:""}),f.jsxs("div",{className:"wc-open-label",children:[f.jsx("span",{className:"wc-open-arrow",children:"◄"}),f.jsx("span",{className:"wc-open-text",children:"OPEN"})]}),f.jsx("img",{src:t1,className:"wc-bottom-icon",alt:""})]})]})})}function r1(){return f.jsx("div",{style:{minHeight:"100vh",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(s1,{})})}const o1=()=>f.jsx("svg",{width:"9",height:"9",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:f.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})});function Ms({href:r,children:e}){return f.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"article-link",children:[e,f.jsx("sup",{className:"article-link-sup",children:f.jsx(o1,{})})]})}function Sd({children:r}){return f.jsx("span",{className:"article-underline",children:r})}function l1(){return Z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),f.jsx("div",{className:"article-page",children:f.jsxs("div",{className:"article-inner",children:[f.jsx("h1",{className:"article-title",children:"Rejection"}),f.jsx("p",{className:"article-dateline",children:f.jsx("span",{className:"article-date",children:"March 2026, written from the comfort of my dorm room"})}),f.jsxs("div",{className:"article-body",children:[f.jsxs("p",{children:["At ",f.jsx(Ms,{href:"https://www.cornell.edu",children:"Cornell"}),", spring club recruiting was a lot harder than I expected. Everyone around me seemed incredibly accomplished and already involved in things they cared about, while I was still trying to find my place. After a series of rejections, I started questioning my identity as a designer. Before college, it was one of the few things I felt confident in, but over time I began wondering whether I was even cut out for the field at all."]}),f.jsxs("p",{children:["Then the opportunity at ",f.jsx(Ms,{href:"https://www.joinpogo.com/",children:"Pogo"})," showed up."]}),f.jsx("p",{children:"Working there as a Product Design Intern helped me reconnect with why I cared about design in the first place. It reminded me that growth is not always linear and that rejection does not automatically mean you are in the wrong field."}),f.jsx("p",{children:"Throughout the spring internship, my visual design skills started to feel stronger again, and I found myself taking a lot more ownership over my work. It felt good to say I was working at a Series B startup, and I was proud of that in its own way, but honestly what mattered more to me was the way it brought me back into design. It wasn't really about the title or the resume line. It was more about feeling connected to the work again, and remembering that I actually enjoyed doing this."}),f.jsx("p",{children:"At the same time, sophomore summer recruiting slowly started working out too. Opportunities that once felt completely out of reach somehow became real options. Offers found themselves into my hands, and eventually the question stopped being whether I was capable enough to earn an opportunity. Instead, I started thinking about where I genuinely saw myself growing and enjoying the work."}),f.jsxs("p",{children:["Did I see myself at ",f.jsx(Ms,{href:"https://www.walmart.com",children:"Walmart"})," as a"," ",f.jsx(Sd,{children:"System Engineer Intern"})," re-envisioning the future of AI Digital Twins for Supply Chain Operations? Or maybe at"," ",f.jsx(Ms,{href:"https://www.mlb.com",children:"Major League Baseball"})," as a"," ",f.jsx(Sd,{children:"Product Design Intern"})," building the future of interactive baseball games in augmented reality? Did I see myself back at"," ",f.jsx(Ms,{href:"https://www.joinpogo.com/",children:"Pogo"})," helping design the first AI Qualitative Survey Platform? Or was it"," ",f.jsx(Ms,{href:"https://www.cisco.com",children:"Cisco"})," where I saw myself shaping the direction of Software-Defined WAN technology as a"," ",f.jsx(Sd,{children:"Technical Product Management Intern"}),"?"]}),f.jsxs("p",{children:["Eventually, I realized I saw myself growing the most at"," ",f.jsx(Ms,{href:"https://www.cisco.com",children:"Cisco"}),", which is where I'll be spending this summer in the Bay Area."]}),f.jsx("p",{children:"So to my junior year self reading this someday, whether you are stressed about recruiting again or struggling through another difficult semester, remember that things eventually worked out because you kept going even when your confidence was low. You stayed with it when it mattered most."})]}),f.jsx("hr",{className:"article-divider"})]})})}const c1="/assets/screen1-ppgaT2M6.png",u1="/assets/screen2-BYvi939c.png",f1="/assets/screen3-Bg4PHBuL.png",d1="/assets/screen4-VvD5IonC.png",h1="/assets/screen5-BBQ9xSz2.png",dv=()=>f.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:f.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});function p1(){return Z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),f.jsx("div",{className:"case-study-container",children:f.jsxs("div",{className:"chatgpt-article-content",children:[f.jsxs("div",{className:"chatgpt-article-header",children:[f.jsxs("div",{className:"chatgpt-article-header-left",children:[f.jsx("h1",{className:"chatgpt-article-title",children:"ChatGPT Bookmarks"}),f.jsx("p",{className:"chatgpt-article-date",children:"Fall 2025"}),f.jsx(np,{to:"/work/chatgpt/full",className:"chatgpt-article-case-link",children:"Full Case Study"})]}),f.jsx("div",{className:"chatgpt-article-header-right",children:f.jsx("p",{className:"chatgpt-article-body",children:"As part of a fun semester-wide project, I explored how bookmarking could work inside ChatGPT conversations to help users save, revisit, and navigate important messages more naturally."})})]}),f.jsxs("div",{className:"chatgpt-feedback-section",children:[f.jsx("p",{className:"chatgpt-feedback-heading",children:"Motivation"}),f.jsxs("a",{href:"https://www.reddit.com/r/ChatGPT/comments/1oxm491/feature_suggestion_bookmarks_table_of_contents_in/?utm_source=chatgpt.com",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-feedback-card chatgpt-feedback-card--reddit",children:[f.jsx("img",{src:Tx,alt:"Reddit",className:"chatgpt-feedback-logo"}),f.jsx("span",{className:"chatgpt-feedback-text",children:"Feature Suggestion: Bookmarks"}),f.jsx("span",{className:"chatgpt-feedback-arrow",children:f.jsx(dv,{})})]}),f.jsxs("a",{href:"https://community.openai.com/t/add-ability-to-bookmark-favorite-a-message-in-any-chat-thread/1086947",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-feedback-card",children:[f.jsx("img",{src:ih,alt:"ChatGPT",className:"chatgpt-feedback-logo chatgpt-feedback-logo--sm"}),f.jsx("span",{className:"chatgpt-feedback-text",children:"Add ability to bookmark / favorite a message"}),f.jsx("span",{className:"chatgpt-feedback-arrow",children:f.jsx(dv,{})})]})]}),f.jsxs("div",{className:"chatgpt-article-canvas",children:[f.jsx("img",{src:c1,alt:"Screen 1",className:"chatgpt-screen-img"}),f.jsx("img",{src:u1,alt:"Screen 2",className:"chatgpt-screen-img",style:{marginTop:"140px"}})]}),f.jsx("div",{className:"chatgpt-article-canvas",style:{marginTop:"16px",aspectRatio:"4 / 3"},children:f.jsx("img",{src:f1,alt:"Screen 3",className:"chatgpt-screen-img chatgpt-screen-large"})}),f.jsxs("div",{className:"chatgpt-article-canvas",style:{marginTop:"16px"},children:[f.jsx("img",{src:h1,alt:"Screen 5",className:"chatgpt-screen-img",style:{marginTop:"140px"}}),f.jsx("img",{src:d1,alt:"Screen 4",className:"chatgpt-screen-img"})]}),f.jsxs("p",{className:"chatgpt-last-updated",children:[f.jsx("span",{className:"chatgpt-last-updated-label",children:"Last Updated: "}),f.jsx("span",{className:"chatgpt-last-updated-date",children:"December 2025"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="183",m1=0,hv=1,g1=2,qc=1,v1=2,Ko=3,ss=0,Vn=1,pa=2,va=0,Lr=1,pv=2,mv=3,gv=4,x1=5,Ds=100,_1=101,y1=102,S1=103,b1=104,M1=200,E1=201,T1=202,A1=203,ah=204,sh=205,w1=206,R1=207,C1=208,N1=209,D1=210,U1=211,L1=212,O1=213,P1=214,rh=0,oh=1,lh=2,Pr=3,ch=4,uh=5,fh=6,dh=7,Ax=0,I1=1,B1=2,Bi=0,wx=1,Rx=2,Cx=3,Nx=4,Dx=5,Ux=6,Lx=7,Ox=300,Ps=301,Ir=302,bd=303,Md=304,ru=306,hh=1e3,ma=1001,ph=1002,An=1003,F1=1004,bc=1005,Dn=1006,Ed=1007,Ls=1008,ui=1009,Px=1010,Ix=1011,$o=1012,ap=1013,ki=1014,Pi=1015,Sa=1016,sp=1017,rp=1018,el=1020,Bx=35902,Fx=35899,zx=1021,Hx=1022,bi=1023,ba=1026,Os=1027,kx=1028,op=1029,Br=1030,lp=1031,cp=1033,Yc=33776,Zc=33777,Kc=33778,Qc=33779,mh=35840,gh=35841,vh=35842,xh=35843,_h=36196,yh=37492,Sh=37496,bh=37488,Mh=37489,Eh=37490,Th=37491,Ah=37808,wh=37809,Rh=37810,Ch=37811,Nh=37812,Dh=37813,Uh=37814,Lh=37815,Oh=37816,Ph=37817,Ih=37818,Bh=37819,Fh=37820,zh=37821,Hh=36492,kh=36494,jh=36495,Gh=36283,Vh=36284,Xh=36285,Wh=36286,z1=3200,H1=0,k1=1,is="",ci="srgb",Fr="srgb-linear",eu="linear",Bt="srgb",_r=7680,vv=519,j1=512,G1=513,V1=514,up=515,X1=516,W1=517,fp=518,q1=519,xv=35044,_v="300 es",Ii=2e3,tu=2001;function Y1(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Z1(){const r=nu("canvas");return r.style.display="block",r}const yv={};function Sv(...r){const e="THREE."+r.shift();console.log(e,...r)}function jx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=jx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function At(...r){r=jx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function iu(...r){const e=r.join(" ");e in yv||(yv[e]=!0,at(...r))}function K1(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Q1={[rh]:oh,[lh]:fh,[ch]:dh,[Pr]:uh,[oh]:rh,[fh]:lh,[dh]:ch,[uh]:Pr};class jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Td=Math.PI/180,qh=180/Math.PI;function sl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function xt(r,e,i){return Math.max(e,Math.min(i,r))}function J1(r,e){return(r%e+e)%e}function Ad(r,e,i){return(1-i)*r+i*e}function jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,i=0){Lt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,m){let g=s[l+0],p=s[l+1],x=s[l+2],_=s[l+3],v=c[d+0],b=c[d+1],M=c[d+2],C=c[d+3];if(_!==C||g!==v||p!==b||x!==M){let S=g*v+p*b+x*M+_*C;S<0&&(v=-v,b=-b,M=-M,C=-C,S=-S);let y=1-m;if(S<.9995){const N=Math.acos(S),D=Math.sin(N);y=Math.sin(y*N)/D,m=Math.sin(m*N)/D,g=g*y+v*m,p=p*y+b*m,x=x*y+M*m,_=_*y+C*m}else{g=g*y+v*m,p=p*y+b*m,x=x*y+M*m,_=_*y+C*m;const N=1/Math.sqrt(g*g+p*p+x*x+_*_);g*=N,p*=N,x*=N,_*=N}}e[i]=g,e[i+1]=p,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const m=s[l],g=s[l+1],p=s[l+2],x=s[l+3],_=c[d],v=c[d+1],b=c[d+2],M=c[d+3];return e[i]=m*M+x*_+g*b-p*v,e[i+1]=g*M+x*v+p*_-m*b,e[i+2]=p*M+x*b+m*v-g*_,e[i+3]=x*M-m*_-g*v-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,m=Math.cos,g=Math.sin,p=m(s/2),x=m(l/2),_=m(c/2),v=g(s/2),b=g(l/2),M=g(c/2);switch(d){case"XYZ":this._x=v*x*_+p*b*M,this._y=p*b*_-v*x*M,this._z=p*x*M+v*b*_,this._w=p*x*_-v*b*M;break;case"YXZ":this._x=v*x*_+p*b*M,this._y=p*b*_-v*x*M,this._z=p*x*M-v*b*_,this._w=p*x*_+v*b*M;break;case"ZXY":this._x=v*x*_-p*b*M,this._y=p*b*_+v*x*M,this._z=p*x*M+v*b*_,this._w=p*x*_-v*b*M;break;case"ZYX":this._x=v*x*_-p*b*M,this._y=p*b*_+v*x*M,this._z=p*x*M-v*b*_,this._w=p*x*_+v*b*M;break;case"YZX":this._x=v*x*_+p*b*M,this._y=p*b*_+v*x*M,this._z=p*x*M-v*b*_,this._w=p*x*_-v*b*M;break;case"XZY":this._x=v*x*_-p*b*M,this._y=p*b*_-v*x*M,this._z=p*x*M+v*b*_,this._w=p*x*_+v*b*M;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],m=i[5],g=i[9],p=i[2],x=i[6],_=i[10],v=s+m+_;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(x-g)*b,this._y=(c-p)*b,this._z=(d-l)*b}else if(s>m&&s>_){const b=2*Math.sqrt(1+s-m-_);this._w=(x-g)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+p)/b}else if(m>_){const b=2*Math.sqrt(1+m-s-_);this._w=(c-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(g+x)/b}else{const b=2*Math.sqrt(1+_-s-m);this._w=(d-l)/b,this._x=(c+p)/b,this._y=(g+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,m=i._x,g=i._y,p=i._z,x=i._w;return this._x=s*x+d*m+l*p-c*g,this._y=l*x+d*g+c*m-s*p,this._z=c*x+d*p+s*g-l*m,this._w=d*x-s*m-l*g-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,m=this.dot(e);m<0&&(s=-s,l=-l,c=-c,d=-d,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),x=Math.sin(p);g=Math.sin(g*p)/x,i=Math.sin(i*p)/x,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,s=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(bv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(bv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,m=e.z,g=e.w,p=2*(d*l-m*s),x=2*(m*i-c*l),_=2*(c*s-d*i);return this.x=i+g*p+d*_-m*x,this.y=s+g*x+m*p-c*_,this.z=l+g*_+c*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*d-s*g,this.z=s*m-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wd=new le,bv=new Gr;class ut{constructor(e,i,s,l,c,d,m,g,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,m,g,p)}set(e,i,s,l,c,d,m,g,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=m,x[3]=i,x[4]=c,x[5]=g,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],m=s[3],g=s[6],p=s[1],x=s[4],_=s[7],v=s[2],b=s[5],M=s[8],C=l[0],S=l[3],y=l[6],N=l[1],D=l[4],L=l[7],B=l[2],H=l[5],j=l[8];return c[0]=d*C+m*N+g*B,c[3]=d*S+m*D+g*H,c[6]=d*y+m*L+g*j,c[1]=p*C+x*N+_*B,c[4]=p*S+x*D+_*H,c[7]=p*y+x*L+_*j,c[2]=v*C+b*N+M*B,c[5]=v*S+b*D+M*H,c[8]=v*y+b*L+M*j,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],m=e[5],g=e[6],p=e[7],x=e[8];return i*d*x-i*m*p-s*c*x+s*m*g+l*c*p-l*d*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],m=e[5],g=e[6],p=e[7],x=e[8],_=x*d-m*p,v=m*g-x*c,b=p*c-d*g,M=i*_+s*v+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=_*C,e[1]=(l*p-x*s)*C,e[2]=(m*s-l*d)*C,e[3]=v*C,e[4]=(x*i-l*g)*C,e[5]=(l*c-m*i)*C,e[6]=b*C,e[7]=(s*g-p*i)*C,e[8]=(d*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,m){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*d+p*m)+d+e,-l*p,l*g,-l*(-p*d+g*m)+m+i,0,0,1),this}scale(e,i){return this.premultiply(Rd.makeScale(e,i)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new ut,Mv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ev=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $1(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Bt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return iu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return iu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Fr]:{primaries:e,whitePoint:s,transfer:eu,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const bt=$1();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yr;class eT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{yr===void 0&&(yr=nu("canvas")),yr.width=e.width,yr.height=e.height;const l=yr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=yr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tT=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,m=l.length;d<m;d++)l[d].isDataTexture?c.push(Cd(l[d].image)):c.push(Cd(l[d]))}else c=Cd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Cd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let nT=0;const Nd=new le;class Pn extends jr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ma,l=ma,c=Dn,d=Ls,m=bi,g=ui,p=Pn.DEFAULT_ANISOTROPY,x=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=sl(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Ox;Pn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,p=g[0],x=g[4],_=g[8],v=g[1],b=g[5],M=g[9],C=g[2],S=g[6],y=g[10];if(Math.abs(x-v)<.01&&Math.abs(_-C)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+v)<.1&&Math.abs(_+C)<.1&&Math.abs(M+S)<.1&&Math.abs(p+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,L=(b+1)/2,B=(y+1)/2,H=(x+v)/4,j=(_+C)/4,A=(M+S)/4;return D>L&&D>B?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=H/s,c=j/s):L>B?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=H/l,c=A/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=j/c,l=A/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-M)*(S-M)+(_-C)*(_-C)+(v-x)*(v-x));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(_-C)/N,this.z=(v-x)/N,this.w=Math.acos((p+b+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iT extends jr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Pn(l),d=s.count;for(let m=0;m<d;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new dp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends iT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Gx extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aT extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e,i,s,l,c,d,m,g,p,x,_,v,b,M,C,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,m,g,p,x,_,v,b,M,C,S)}set(e,i,s,l,c,d,m,g,p,x,_,v,b,M,C,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=d,y[9]=m,y[13]=g,y[2]=p,y[6]=x,y[10]=_,y[14]=v,y[3]=b,y[7]=M,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Sr.setFromMatrixColumn(e,0).length(),c=1/Sr.setFromMatrixColumn(e,1).length(),d=1/Sr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),m=Math.sin(s),g=Math.cos(l),p=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=d*x,b=d*_,M=m*x,C=m*_;i[0]=g*x,i[4]=-g*_,i[8]=p,i[1]=b+M*p,i[5]=v-C*p,i[9]=-m*g,i[2]=C-v*p,i[6]=M+b*p,i[10]=d*g}else if(e.order==="YXZ"){const v=g*x,b=g*_,M=p*x,C=p*_;i[0]=v+C*m,i[4]=M*m-b,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-m,i[2]=b*m-M,i[6]=C+v*m,i[10]=d*g}else if(e.order==="ZXY"){const v=g*x,b=g*_,M=p*x,C=p*_;i[0]=v-C*m,i[4]=-d*_,i[8]=M+b*m,i[1]=b+M*m,i[5]=d*x,i[9]=C-v*m,i[2]=-d*p,i[6]=m,i[10]=d*g}else if(e.order==="ZYX"){const v=d*x,b=d*_,M=m*x,C=m*_;i[0]=g*x,i[4]=M*p-b,i[8]=v*p+C,i[1]=g*_,i[5]=C*p+v,i[9]=b*p-M,i[2]=-p,i[6]=m*g,i[10]=d*g}else if(e.order==="YZX"){const v=d*g,b=d*p,M=m*g,C=m*p;i[0]=g*x,i[4]=C-v*_,i[8]=M*_+b,i[1]=_,i[5]=d*x,i[9]=-m*x,i[2]=-p*x,i[6]=b*_+M,i[10]=v-C*_}else if(e.order==="XZY"){const v=d*g,b=d*p,M=m*g,C=m*p;i[0]=g*x,i[4]=-_,i[8]=p*x,i[1]=v*_+C,i[5]=d*x,i[9]=b*_-M,i[2]=M*_-b,i[6]=m*x,i[10]=C*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sT,e,rT)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Qa.crossVectors(s,Jn),Qa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Qa.crossVectors(s,Jn)),Qa.normalize(),Mc.crossVectors(Jn,Qa),l[0]=Qa.x,l[4]=Mc.x,l[8]=Jn.x,l[1]=Qa.y,l[5]=Mc.y,l[9]=Jn.y,l[2]=Qa.z,l[6]=Mc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],m=s[4],g=s[8],p=s[12],x=s[1],_=s[5],v=s[9],b=s[13],M=s[2],C=s[6],S=s[10],y=s[14],N=s[3],D=s[7],L=s[11],B=s[15],H=l[0],j=l[4],A=l[8],U=l[12],he=l[1],k=l[5],ne=l[9],se=l[13],de=l[2],$=l[6],I=l[10],z=l[14],ce=l[3],ve=l[7],O=l[11],K=l[15];return c[0]=d*H+m*he+g*de+p*ce,c[4]=d*j+m*k+g*$+p*ve,c[8]=d*A+m*ne+g*I+p*O,c[12]=d*U+m*se+g*z+p*K,c[1]=x*H+_*he+v*de+b*ce,c[5]=x*j+_*k+v*$+b*ve,c[9]=x*A+_*ne+v*I+b*O,c[13]=x*U+_*se+v*z+b*K,c[2]=M*H+C*he+S*de+y*ce,c[6]=M*j+C*k+S*$+y*ve,c[10]=M*A+C*ne+S*I+y*O,c[14]=M*U+C*se+S*z+y*K,c[3]=N*H+D*he+L*de+B*ce,c[7]=N*j+D*k+L*$+B*ve,c[11]=N*A+D*ne+L*I+B*O,c[15]=N*U+D*se+L*z+B*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],m=e[5],g=e[9],p=e[13],x=e[2],_=e[6],v=e[10],b=e[14],M=e[3],C=e[7],S=e[11],y=e[15],N=g*b-p*v,D=m*b-p*_,L=m*v-g*_,B=d*b-p*x,H=d*v-g*x,j=d*_-m*x;return i*(C*N-S*D+y*L)-s*(M*N-S*B+y*H)+l*(M*D-C*B+y*j)-c*(M*L-C*H+S*j)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],m=e[5],g=e[6],p=e[7],x=e[8],_=e[9],v=e[10],b=e[11],M=e[12],C=e[13],S=e[14],y=e[15],N=i*m-s*d,D=i*g-l*d,L=i*p-c*d,B=s*g-l*m,H=s*p-c*m,j=l*p-c*g,A=x*C-_*M,U=x*S-v*M,he=x*y-b*M,k=_*S-v*C,ne=_*y-b*C,se=v*y-b*S,de=N*se-D*ne+L*k+B*he-H*U+j*A;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/de;return e[0]=(m*se-g*ne+p*k)*$,e[1]=(l*ne-s*se-c*k)*$,e[2]=(C*j-S*H+y*B)*$,e[3]=(v*H-_*j-b*B)*$,e[4]=(g*he-d*se-p*U)*$,e[5]=(i*se-l*he+c*U)*$,e[6]=(S*L-M*j-y*D)*$,e[7]=(x*j-v*L+b*D)*$,e[8]=(d*ne-m*he+p*A)*$,e[9]=(s*he-i*ne-c*A)*$,e[10]=(M*H-C*L+y*N)*$,e[11]=(_*L-x*H-b*N)*$,e[12]=(m*U-d*k-g*A)*$,e[13]=(i*k-s*U+l*A)*$,e[14]=(C*D-M*B-S*N)*$,e[15]=(x*B-_*D+v*N)*$,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,m=e.y,g=e.z,p=c*d,x=c*m;return this.set(p*d+s,p*m-l*g,p*g+l*m,0,p*m+l*g,x*m+s,x*g-l*d,0,p*g-l*m,x*g+l*d,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,m=i._z,g=i._w,p=c+c,x=d+d,_=m+m,v=c*p,b=c*x,M=c*_,C=d*x,S=d*_,y=m*_,N=g*p,D=g*x,L=g*_,B=s.x,H=s.y,j=s.z;return l[0]=(1-(C+y))*B,l[1]=(b+L)*B,l[2]=(M-D)*B,l[3]=0,l[4]=(b-L)*H,l[5]=(1-(v+y))*H,l[6]=(S+N)*H,l[7]=0,l[8]=(M+D)*j,l[9]=(S-N)*j,l[10]=(1-(v+C))*j,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Sr.set(l[0],l[1],l[2]).length();const m=Sr.set(l[4],l[5],l[6]).length(),g=Sr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),vi.copy(this);const p=1/d,x=1/m,_=1/g;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=x,vi.elements[5]*=x,vi.elements[6]*=x,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,i.setFromRotationMatrix(vi),s.x=d,s.y=m,s.z=g,this}makePerspective(e,i,s,l,c,d,m=Ii,g=!1){const p=this.elements,x=2*c/(i-e),_=2*c/(s-l),v=(i+e)/(i-e),b=(s+l)/(s-l);let M,C;if(g)M=c/(d-c),C=d*c/(d-c);else if(m===Ii)M=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(m===tu)M=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,m=Ii,g=!1){const p=this.elements,x=2/(i-e),_=2/(s-l),v=-(i+e)/(i-e),b=-(s+l)/(s-l);let M,C;if(g)M=1/(d-c),C=d/(d-c);else if(m===Ii)M=-2/(d-c),C=-(d+c)/(d-c);else if(m===tu)M=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Sr=new le,vi=new fn,sT=new le(0,0,0),rT=new le(1,1,1),Qa=new le,Mc=new le,Jn=new le,Tv=new fn,Av=new Gr;class Ma{constructor(e=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],m=l[8],g=l[1],p=l[5],x=l[9],_=l[2],v=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(m,b),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(m,b));break;case"XZY":this._z=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class Vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oT=0;const wv=new le,br=new Gr,ca=new fn,Ec=new le,Go=new le,lT=new le,cT=new Gr,Rv=new le(1,0,0),Cv=new le(0,1,0),Nv=new le(0,0,1),Dv={type:"added"},uT={type:"removed"},Mr={type:"childadded",child:null},Dd={type:"childremoved",child:null};class ei extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new le,i=new Ma,s=new Gr,l=new le(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ut}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Rv,e)}rotateY(e){return this.rotateOnAxis(Cv,e)}rotateZ(e){return this.rotateOnAxis(Nv,e)}translateOnAxis(e,i){return wv.copy(e).applyQuaternion(this.quaternion),this.position.add(wv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Rv,e)}translateY(e){return this.translateOnAxis(Cv,e)}translateZ(e){return this.translateOnAxis(Nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ec.copy(e):Ec.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Go,Ec,this.up):ca.lookAt(Ec,Go,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),br.setFromRotationMatrix(ca),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(uT),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,lT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,cT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,x=g.length;p<x;p++){const _=g[p];c(e.shapes,_)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(c(e.materials,this.material[g]));l.material=m}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(e.animations,g))}}if(i){const m=d(e.geometries),g=d(e.materials),p=d(e.textures),x=d(e.images),_=d(e.shapes),v=d(e.skeletons),b=d(e.animations),M=d(e.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),b.length>0&&(s.animations=b),M.length>0&&(s.nodes=M)}return s.object=l,s;function d(m){const g=[];for(const p in m){const x=m[p];delete x.metadata,g.push(x)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ei.DEFAULT_UP=new le(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fT={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const m=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,s),y=this._getHandJoint(p,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=x.position.distanceTo(_.position),b=.02,M=.005;p.inputState.pinching&&v>b+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=b-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));m!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(fT)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Ld(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class kt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=bt.workingColorSpace){if(e=J1(e,1),i=xt(i,0,1),s=xt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ld(d,c,e+1/3),this.g=Ld(d,c,e),this.b=Ld(d,c,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],m=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=Xx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return bt.workingToColorSpace(Nn.copy(this),e),Math.round(xt(Nn.r*255,0,255))*65536+Math.round(xt(Nn.g*255,0,255))*256+Math.round(xt(Nn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(s,l,c),m=Math.min(s,l,c);let g,p;const x=(m+d)/2;if(m===d)g=0,p=0;else{const _=d-m;switch(p=x<=.5?_/(d+m):_/(2-d-m),d){case s:g=(l-c)/_+(l<c?6:0);break;case l:g=(c-s)/_+2;break;case c:g=(s-l)/_+4;break}g/=6}return e.h=g,e.s=p,e.l=x,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ci){bt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,s=Nn.g,l=Nn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Ac);const s=Ad(Ja.h,Ac.h,i),l=Ad(Ja.s,Ac.s,i),c=Ad(Ja.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new kt;kt.NAMES=Xx;class dT extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const xi=new le,ua=new le,Od=new le,fa=new le,Er=new le,Tr=new le,Uv=new le,Pd=new le,Id=new le,Bd=new le,Fd=new on,zd=new on,Hd=new on;class Si{constructor(e=new le,i=new le,s=new le){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),xi.subVectors(e,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){xi.subVectors(l,i),ua.subVectors(s,i),Od.subVectors(e,i);const d=xi.dot(xi),m=xi.dot(ua),g=xi.dot(Od),p=ua.dot(ua),x=ua.dot(Od),_=d*p-m*m;if(_===0)return c.set(0,0,0),null;const v=1/_,b=(p*g-m*x)*v,M=(d*x-m*g)*v;return c.set(1-b-M,M,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,i,s,l,c,d,m,g){return this.getBarycoord(e,i,s,l,fa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,fa.x),g.addScaledVector(d,fa.y),g.addScaledVector(m,fa.z),g)}static getInterpolatedAttribute(e,i,s,l,c,d){return Fd.setScalar(0),zd.setScalar(0),Hd.setScalar(0),Fd.fromBufferAttribute(e,i),zd.fromBufferAttribute(e,s),Hd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Fd,c.x),d.addScaledVector(zd,c.y),d.addScaledVector(Hd,c.z),d}static isFrontFacing(e,i,s,l){return xi.subVectors(s,i),ua.subVectors(e,i),xi.cross(ua).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),xi.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Si.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,m;Er.subVectors(l,s),Tr.subVectors(c,s),Pd.subVectors(e,s);const g=Er.dot(Pd),p=Tr.dot(Pd);if(g<=0&&p<=0)return i.copy(s);Id.subVectors(e,l);const x=Er.dot(Id),_=Tr.dot(Id);if(x>=0&&_<=x)return i.copy(l);const v=g*_-x*p;if(v<=0&&g>=0&&x<=0)return d=g/(g-x),i.copy(s).addScaledVector(Er,d);Bd.subVectors(e,c);const b=Er.dot(Bd),M=Tr.dot(Bd);if(M>=0&&b<=M)return i.copy(c);const C=b*p-g*M;if(C<=0&&p>=0&&M<=0)return m=p/(p-M),i.copy(s).addScaledVector(Tr,m);const S=x*M-b*_;if(S<=0&&_-x>=0&&b-M>=0)return Uv.subVectors(c,l),m=(_-x)/(_-x+(b-M)),i.copy(l).addScaledVector(Uv,m);const y=1/(S+C+v);return d=C*y,m=v*y,i.copy(s).addScaledVector(Er,d).addScaledVector(Tr,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rl{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(_i.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,m=c.count;d<m;d++)e.isMesh===!0?e.getVertexPosition(d,_i):_i.fromBufferAttribute(c,d),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Rc.subVectors(this.max,Vo),Ar.subVectors(e.a,Vo),wr.subVectors(e.b,Vo),Rr.subVectors(e.c,Vo),$a.subVectors(wr,Ar),es.subVectors(Rr,wr),Es.subVectors(Ar,Rr);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-Es.z,Es.y,$a.z,0,-$a.x,es.z,0,-es.x,Es.z,0,-Es.x,-$a.y,$a.x,0,-es.y,es.x,0,-Es.y,Es.x,0];return!kd(i,Ar,wr,Rr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!kd(i,Ar,wr,Rr,Rc))?!1:(Cc.crossVectors($a,es),i=[Cc.x,Cc.y,Cc.z],kd(i,Ar,wr,Rr,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new le,new le,new le,new le,new le,new le,new le,new le],_i=new le,wc=new rl,Ar=new le,wr=new le,Rr=new le,$a=new le,es=new le,Es=new le,Vo=new le,Rc=new le,Cc=new le,Ts=new le;function kd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ts.fromArray(r,c);const m=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),g=e.dot(Ts),p=i.dot(Ts),x=s.dot(Ts);if(Math.max(-Math.max(g,p,x),Math.min(g,p,x))>m)return!1}return!0}const un=new le,Nc=new Lt;let hT=0;class zi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=xv,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(e),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=jo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xv&&(e.usage=this.usage),e}}class Wx extends zi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class qx extends zi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class _a extends zi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const pT=new rl,Xo=new le,jd=new le;class hp{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):pT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(jd)),this.expandByPoint(Xo.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mT=0;const li=new fn,Gd=new ei,Cr=new le,$n=new rl,Wo=new rl,bn=new le;class Ta extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y1(e)?qx:Wx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,s){return li.makeTranslation(e,i,s),this.applyMatrix4(li),this}scale(e,i,s){return li.makeScale(e,i,s),this.applyMatrix4(li),this}lookAt(e){return Gd.lookAt(e),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _a(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const m=i[c];Wo.setFromBufferAttribute(m),this.morphTargetsRelative?(bn.addVectors($n.min,Wo.min),$n.expandByPoint(bn),bn.addVectors($n.max,Wo.max),$n.expandByPoint(bn)):($n.expandByPoint(Wo.min),$n.expandByPoint(Wo.max))}$n.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const m=i[c],g=this.morphTargetsRelative;for(let p=0,x=m.count;p<x;p++)bn.fromBufferAttribute(m,p),g&&(Cr.fromBufferAttribute(e,p),bn.add(Cr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),m=[],g=[];for(let A=0;A<s.count;A++)m[A]=new le,g[A]=new le;const p=new le,x=new le,_=new le,v=new Lt,b=new Lt,M=new Lt,C=new le,S=new le;function y(A,U,he){p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,U),_.fromBufferAttribute(s,he),v.fromBufferAttribute(c,A),b.fromBufferAttribute(c,U),M.fromBufferAttribute(c,he),x.sub(p),_.sub(p),b.sub(v),M.sub(v);const k=1/(b.x*M.y-M.x*b.y);isFinite(k)&&(C.copy(x).multiplyScalar(M.y).addScaledVector(_,-b.y).multiplyScalar(k),S.copy(_).multiplyScalar(b.x).addScaledVector(x,-M.x).multiplyScalar(k),m[A].add(C),m[U].add(C),m[he].add(C),g[A].add(S),g[U].add(S),g[he].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let A=0,U=N.length;A<U;++A){const he=N[A],k=he.start,ne=he.count;for(let se=k,de=k+ne;se<de;se+=3)y(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const D=new le,L=new le,B=new le,H=new le;function j(A){B.fromBufferAttribute(l,A),H.copy(B);const U=m[A];D.copy(U),D.sub(B.multiplyScalar(B.dot(U))).normalize(),L.crossVectors(H,U);const k=L.dot(g[A])<0?-1:1;d.setXYZW(A,D.x,D.y,D.z,k)}for(let A=0,U=N.length;A<U;++A){const he=N[A],k=he.start,ne=he.count;for(let se=k,de=k+ne;se<de;se+=3)j(e.getX(se+0)),j(e.getX(se+1)),j(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,b=s.count;v<b;v++)s.setXYZ(v,0,0,0);const l=new le,c=new le,d=new le,m=new le,g=new le,p=new le,x=new le,_=new le;if(e)for(let v=0,b=e.count;v<b;v+=3){const M=e.getX(v+0),C=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),m.add(x),g.add(x),p.add(x),s.setXYZ(M,m.x,m.y,m.z),s.setXYZ(C,g.x,g.y,g.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,b=i.count;v<b;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(m,g){const p=m.array,x=m.itemSize,_=m.normalized,v=new p.constructor(g.length*x);let b=0,M=0;for(let C=0,S=g.length;C<S;C++){m.isInterleavedBufferAttribute?b=g[C]*m.data.stride+m.offset:b=g[C]*x;for(let y=0;y<x;y++)v[M++]=p[b++]}return new zi(v,x,_)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ta,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],p=e(g,s);i.setAttribute(m,p)}const c=this.morphAttributes;for(const m in c){const g=[],p=c[m];for(let x=0,_=p.length;x<_;x++){const v=p[x],b=e(v,s);g.push(b)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,g=d.length;m<g;m++){const p=d[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];e.data.attributes[g]=p.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],x=[];for(let _=0,v=p.length;_<v;_++){const b=p[_];x.push(b.toJSON(e.data))}x.length>0&&(l[g]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],_=c[p];for(let v=0,b=_.length;v<b;v++)x.push(_[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let gT=0;class ou extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Lr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=sh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ah&&(s.blendSrc=this.blendSrc),this.blendDst!==sh&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const m in c){const g=c[m];delete g.metadata,d.push(g)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ha=new le,Vd=new le,Dc=new le,ts=new le,Xd=new le,Uc=new le,Wd=new le;class vT{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Vd.copy(e).add(i).multiplyScalar(.5),Dc.copy(i).sub(e).normalize(),ts.copy(this.origin).sub(Vd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Dc),m=ts.dot(this.direction),g=-ts.dot(Dc),p=ts.lengthSq(),x=Math.abs(1-d*d);let _,v,b,M;if(x>0)if(_=d*g-m,v=d*m-g,M=c*x,_>=0)if(v>=-M)if(v<=M){const C=1/x;_*=C,v*=C,b=_*(_+d*v+2*m)+v*(d*_+v+2*g)+p}else v=c,_=Math.max(0,-(d*v+m)),b=-_*_+v*(v+2*g)+p;else v=-c,_=Math.max(0,-(d*v+m)),b=-_*_+v*(v+2*g)+p;else v<=-M?(_=Math.max(0,-(-d*c+m)),v=_>0?-c:Math.min(Math.max(-c,-g),c),b=-_*_+v*(v+2*g)+p):v<=M?(_=0,v=Math.min(Math.max(-c,-g),c),b=v*(v+2*g)+p):(_=Math.max(0,-(d*c+m)),v=_>0?c:Math.min(Math.max(-c,-g),c),b=-_*_+v*(v+2*g)+p);else v=d>0?-c:c,_=Math.max(0,-(d*v+m)),b=-_*_+v*(v+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Vd).addScaledVector(Dc,v),b}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),m=s-d,g=s+d;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,m,g;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),x>=0?(c=(e.min.y-v.y)*x,d=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,d=(e.min.y-v.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(m=(e.min.z-v.z)*_,g=(e.max.z-v.z)*_):(m=(e.max.z-v.z)*_,g=(e.min.z-v.z)*_),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,s,l,c){Xd.subVectors(i,e),Uc.subVectors(s,e),Wd.crossVectors(Xd,Uc);let d=this.direction.dot(Wd),m;if(d>0){if(l)return null;m=1}else if(d<0)m=-1,d=-d;else return null;ts.subVectors(this.origin,e);const g=m*this.direction.dot(Uc.crossVectors(ts,Uc));if(g<0)return null;const p=m*this.direction.dot(Xd.cross(ts));if(p<0||g+p>d)return null;const x=-m*ts.dot(Wd);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yx extends ou{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=Ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lv=new fn,As=new vT,Lc=new hp,Ov=new le,Oc=new le,Pc=new le,Ic=new le,qd=new le,Bc=new le,Pv=new le,Fc=new le;class ji extends ei{constructor(e=new Ta,i=new Yx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(c&&m){Bc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const x=m[g],_=c[g];x!==0&&(qd.fromBufferAttribute(_,e),d?Bc.addScaledVector(qd,x):Bc.addScaledVector(qd.sub(i),x))}i.add(Bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),As.copy(e.ray).recast(e.near),!(Lc.containsPoint(As.origin)===!1&&(As.intersectSphere(Lc,Ov)===null||As.origin.distanceToSquared(Ov)>(e.far-e.near)**2))&&(Lv.copy(c).invert(),As.copy(e.ray).applyMatrix4(Lv),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,As)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,m=c.index,g=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,v=c.groups,b=c.drawRange;if(m!==null)if(Array.isArray(d))for(let M=0,C=v.length;M<C;M++){const S=v[M],y=d[S.materialIndex],N=Math.max(S.start,b.start),D=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let L=N,B=D;L<B;L+=3){const H=m.getX(L),j=m.getX(L+1),A=m.getX(L+2);l=zc(this,y,e,s,p,x,_,H,j,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let S=M,y=C;S<y;S+=3){const N=m.getX(S),D=m.getX(S+1),L=m.getX(S+2);l=zc(this,d,e,s,p,x,_,N,D,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let M=0,C=v.length;M<C;M++){const S=v[M],y=d[S.materialIndex],N=Math.max(S.start,b.start),D=Math.min(g.count,Math.min(S.start+S.count,b.start+b.count));for(let L=N,B=D;L<B;L+=3){const H=L,j=L+1,A=L+2;l=zc(this,y,e,s,p,x,_,H,j,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),C=Math.min(g.count,b.start+b.count);for(let S=M,y=C;S<y;S+=3){const N=S,D=S+1,L=S+2;l=zc(this,d,e,s,p,x,_,N,D,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function xT(r,e,i,s,l,c,d,m){let g;if(e.side===Vn?g=s.intersectTriangle(d,c,l,!0,m):g=s.intersectTriangle(l,c,d,e.side===ss,m),g===null)return null;Fc.copy(m),Fc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:r}}function zc(r,e,i,s,l,c,d,m,g,p){r.getVertexPosition(m,Oc),r.getVertexPosition(g,Pc),r.getVertexPosition(p,Ic);const x=xT(r,e,i,s,Oc,Pc,Ic,Pv);if(x){const _=new le;Si.getBarycoord(Pv,Oc,Pc,Ic,_),l&&(x.uv=Si.getInterpolatedAttribute(l,m,g,p,_,new Lt)),c&&(x.uv1=Si.getInterpolatedAttribute(c,m,g,p,_,new Lt)),d&&(x.normal=Si.getInterpolatedAttribute(d,m,g,p,_,new le),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:m,b:g,c:p,normal:new le,materialIndex:0};Si.getNormal(Oc,Pc,Ic,v.normal),x.face=v,x.barycoord=_}return x}class _T extends Pn{constructor(e=null,i=1,s=1,l,c,d,m,g,p=An,x=An,_,v){super(null,d,m,g,p,x,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new le,yT=new le,ST=new ut;class Ns{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Yd.subVectors(s,i).cross(yT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Yd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ST.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new hp,bT=new Lt(.5,.5),Hc=new le;class Zx{constructor(e=new Ns,i=new Ns,s=new Ns,l=new Ns,c=new Ns,d=new Ns){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ii,s=!1){const l=this.planes,c=e.elements,d=c[0],m=c[1],g=c[2],p=c[3],x=c[4],_=c[5],v=c[6],b=c[7],M=c[8],C=c[9],S=c[10],y=c[11],N=c[12],D=c[13],L=c[14],B=c[15];if(l[0].setComponents(p-d,b-x,y-M,B-N).normalize(),l[1].setComponents(p+d,b+x,y+M,B+N).normalize(),l[2].setComponents(p+m,b+_,y+C,B+D).normalize(),l[3].setComponents(p-m,b-_,y-C,B-D).normalize(),s)l[4].setComponents(g,v,S,L).normalize(),l[5].setComponents(p-g,b-v,y-S,B-L).normalize();else if(l[4].setComponents(p-g,b-v,y-S,B-L).normalize(),i===Ii)l[5].setComponents(p+g,b+v,y+S,B+L).normalize();else if(i===tu)l[5].setComponents(g,v,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=bT.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?e.max.x:e.min.x,Hc.y=l.normal.y>0?e.max.y:e.min.y,Hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kx extends Pn{constructor(e=[],i=Ps,s,l,c,d,m,g,p,x){super(e,i,s,l,c,d,m,g,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tl extends Pn{constructor(e,i,s=ki,l,c,d,m=An,g=An,p,x=ba,_=1){if(x!==ba&&x!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,c,d,m,g,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class MT extends tl{constructor(e,i=ki,s=Ps,l,c,d=An,m=An,g,p=ba){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,s,l,c,d,m,g,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qx extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ol extends Ta{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const m=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const g=[],p=[],x=[],_=[];let v=0,b=0;M("z","y","x",-1,-1,s,i,e,d,c,0),M("z","y","x",1,-1,s,i,-e,d,c,1),M("x","z","y",1,1,e,s,i,l,d,2),M("x","z","y",1,-1,e,s,-i,l,d,3),M("x","y","z",1,-1,e,i,s,l,c,4),M("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new _a(p,3)),this.setAttribute("normal",new _a(x,3)),this.setAttribute("uv",new _a(_,2));function M(C,S,y,N,D,L,B,H,j,A,U){const he=L/j,k=B/A,ne=L/2,se=B/2,de=H/2,$=j+1,I=A+1;let z=0,ce=0;const ve=new le;for(let O=0;O<I;O++){const K=O*k-se;for(let ue=0;ue<$;ue++){const ye=ue*he-ne;ve[C]=ye*N,ve[S]=K*D,ve[y]=de,p.push(ve.x,ve.y,ve.z),ve[C]=0,ve[S]=0,ve[y]=H>0?1:-1,x.push(ve.x,ve.y,ve.z),_.push(ue/j),_.push(1-O/A),z+=1}}for(let O=0;O<A;O++)for(let K=0;K<j;K++){const ue=v+K+$*O,ye=v+K+$*(O+1),Ue=v+(K+1)+$*(O+1),qe=v+(K+1)+$*O;g.push(ue,ye,qe),g.push(ye,Ue,qe),ce+=6}m.addGroup(b,ce,U),b+=ce,v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ll extends Ta{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,m=Math.floor(s),g=Math.floor(l),p=m+1,x=g+1,_=e/m,v=i/g,b=[],M=[],C=[],S=[];for(let y=0;y<x;y++){const N=y*v-d;for(let D=0;D<p;D++){const L=D*_-c;M.push(L,-N,0),C.push(0,0,1),S.push(D/m),S.push(1-y/g)}}for(let y=0;y<g;y++)for(let N=0;N<m;N++){const D=N+p*y,L=N+p*(y+1),B=N+1+p*(y+1),H=N+1+p*y;b.push(D,L,H),b.push(L,B,H)}this.setIndex(b),this.setAttribute("position",new _a(M,3)),this.setAttribute("normal",new _a(C,3)),this.setAttribute("uv",new _a(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}function zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(r){const e={};for(let i=0;i<r.length;i++){const s=zr(r[i]);for(const l in s)e[l]=s[l]}return e}function ET(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Jx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const TT={clone:zr,merge:On};var AT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends ou{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AT,this.fragmentShader=wT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=ET(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class RT extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CT extends ou{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NT extends ou{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kc=new le,jc=new Gr,Ui=new le;class $x extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,jc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,jc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(kc,jc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,jc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new le,Iv=new Lt,Bv=new Lt;class yi extends $x{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,Iv,Bv),i.subVectors(Bv,Iv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Td*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/g,i-=d.offsetY*s/p,l*=d.width/g,s*=d.height/p}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class pp extends $x{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,m-=x*this.view.offsetY,g=m-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Nr=-90,Dr=1;class DT extends ei{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Nr,Dr,e,i);l.layers=this.layers,this.add(l);const c=new yi(Nr,Dr,e,i);c.layers=this.layers,this.add(c);const d=new yi(Nr,Dr,e,i);d.layers=this.layers,this.add(d);const m=new yi(Nr,Dr,e,i);m.layers=this.layers,this.add(m);const g=new yi(Nr,Dr,e,i);g.layers=this.layers,this.add(g);const p=new yi(Nr,Dr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,m,g]=i;for(const p of i)this.remove(p);if(e===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,m,g,p,x]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(_,v,b),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class UT extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class LT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Fv(r,e,i,s){const l=OT(s);switch(i){case zx:return r*e;case kx:return r*e/l.components*l.byteLength;case op:return r*e/l.components*l.byteLength;case Br:return r*e*2/l.components*l.byteLength;case lp:return r*e*2/l.components*l.byteLength;case Hx:return r*e*3/l.components*l.byteLength;case bi:return r*e*4/l.components*l.byteLength;case cp:return r*e*4/l.components*l.byteLength;case Yc:case Zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:case xh:return Math.max(r,16)*Math.max(e,8)/4;case mh:case vh:return Math.max(r,8)*Math.max(e,8)/2;case _h:case yh:case bh:case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sh:case Eh:case Th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Hh:case kh:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gh:case Vh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xh:case Wh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function OT(r){switch(r){case ui:case Px:return{byteLength:1,components:1};case $o:case Ix:case Sa:return{byteLength:2,components:1};case sp:case rp:return{byteLength:2,components:4};case ki:case ap:case Pi:return{byteLength:4,components:1};case Bx:case Fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function e_(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function PT(r){const e=new WeakMap;function i(m,g){const p=m.array,x=m.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(g,v),r.bufferData(g,p,x),m.onUploadCallback();let b;if(p instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=r.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=r.SHORT;else if(p instanceof Uint32Array)b=r.UNSIGNED_INT;else if(p instanceof Int32Array)b=r.INT;else if(p instanceof Int8Array)b=r.BYTE;else if(p instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:_}}function s(m,g,p){const x=g.array,_=g.updateRanges;if(r.bindBuffer(p,m),_.length===0)r.bufferSubData(p,0,x);else{_.sort((b,M)=>b.start-M.start);let v=0;for(let b=1;b<_.length;b++){const M=_[v],C=_[b];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++v,_[v]=C)}_.length=v+1;for(let b=0,M=_.length;b<M;b++){const C=_[b];r.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=e.get(m);g&&(r.deleteBuffer(g.buffer),e.delete(m))}function d(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const x=e.get(m);(!x||x.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=e.get(m);if(p===void 0)e.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:l,remove:c,update:d}}var IT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,XT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,s2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d2="gl_FragColor = linearToOutputTexel( gl_FragColor );",h2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,m2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,g2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,X2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_A=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ew=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:IT,alphahash_pars_fragment:BT,alphamap_fragment:FT,alphamap_pars_fragment:zT,alphatest_fragment:HT,alphatest_pars_fragment:kT,aomap_fragment:jT,aomap_pars_fragment:GT,batching_pars_vertex:VT,batching_vertex:XT,begin_vertex:WT,beginnormal_vertex:qT,bsdfs:YT,iridescence_fragment:ZT,bumpmap_pars_fragment:KT,clipping_planes_fragment:QT,clipping_planes_pars_fragment:JT,clipping_planes_pars_vertex:$T,clipping_planes_vertex:e2,color_fragment:t2,color_pars_fragment:n2,color_pars_vertex:i2,color_vertex:a2,common:s2,cube_uv_reflection_fragment:r2,defaultnormal_vertex:o2,displacementmap_pars_vertex:l2,displacementmap_vertex:c2,emissivemap_fragment:u2,emissivemap_pars_fragment:f2,colorspace_fragment:d2,colorspace_pars_fragment:h2,envmap_fragment:p2,envmap_common_pars_fragment:m2,envmap_pars_fragment:g2,envmap_pars_vertex:v2,envmap_physical_pars_fragment:R2,envmap_vertex:x2,fog_vertex:_2,fog_pars_vertex:y2,fog_fragment:S2,fog_pars_fragment:b2,gradientmap_pars_fragment:M2,lightmap_pars_fragment:E2,lights_lambert_fragment:T2,lights_lambert_pars_fragment:A2,lights_pars_begin:w2,lights_toon_fragment:C2,lights_toon_pars_fragment:N2,lights_phong_fragment:D2,lights_phong_pars_fragment:U2,lights_physical_fragment:L2,lights_physical_pars_fragment:O2,lights_fragment_begin:P2,lights_fragment_maps:I2,lights_fragment_end:B2,logdepthbuf_fragment:F2,logdepthbuf_pars_fragment:z2,logdepthbuf_pars_vertex:H2,logdepthbuf_vertex:k2,map_fragment:j2,map_pars_fragment:G2,map_particle_fragment:V2,map_particle_pars_fragment:X2,metalnessmap_fragment:W2,metalnessmap_pars_fragment:q2,morphinstance_vertex:Y2,morphcolor_vertex:Z2,morphnormal_vertex:K2,morphtarget_pars_vertex:Q2,morphtarget_vertex:J2,normal_fragment_begin:$2,normal_fragment_maps:eA,normal_pars_fragment:tA,normal_pars_vertex:nA,normal_vertex:iA,normalmap_pars_fragment:aA,clearcoat_normal_fragment_begin:sA,clearcoat_normal_fragment_maps:rA,clearcoat_pars_fragment:oA,iridescence_pars_fragment:lA,opaque_fragment:cA,packing:uA,premultiplied_alpha_fragment:fA,project_vertex:dA,dithering_fragment:hA,dithering_pars_fragment:pA,roughnessmap_fragment:mA,roughnessmap_pars_fragment:gA,shadowmap_pars_fragment:vA,shadowmap_pars_vertex:xA,shadowmap_vertex:_A,shadowmask_pars_fragment:yA,skinbase_vertex:SA,skinning_pars_vertex:bA,skinning_vertex:MA,skinnormal_vertex:EA,specularmap_fragment:TA,specularmap_pars_fragment:AA,tonemapping_fragment:wA,tonemapping_pars_fragment:RA,transmission_fragment:CA,transmission_pars_fragment:NA,uv_pars_fragment:DA,uv_pars_vertex:UA,uv_vertex:LA,worldpos_vertex:OA,background_vert:PA,background_frag:IA,backgroundCube_vert:BA,backgroundCube_frag:FA,cube_vert:zA,cube_frag:HA,depth_vert:kA,depth_frag:jA,distance_vert:GA,distance_frag:VA,equirect_vert:XA,equirect_frag:WA,linedashed_vert:qA,linedashed_frag:YA,meshbasic_vert:ZA,meshbasic_frag:KA,meshlambert_vert:QA,meshlambert_frag:JA,meshmatcap_vert:$A,meshmatcap_frag:ew,meshnormal_vert:tw,meshnormal_frag:nw,meshphong_vert:iw,meshphong_frag:aw,meshphysical_vert:sw,meshphysical_frag:rw,meshtoon_vert:ow,meshtoon_frag:lw,points_vert:cw,points_frag:uw,shadow_vert:fw,shadow_frag:dw,sprite_vert:hw,sprite_frag:pw},Oe={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Oi={basic:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:On([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:On([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new kt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:On([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:On([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:On([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:On([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:On([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:On([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:On([Oe.common,Oe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:On([Oe.lights,Oe.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Oi.physical={uniforms:On([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Gc={r:0,b:0,g:0},Rs=new Ma,mw=new fn;function gw(r,e,i,s,l,c){const d=new kt(0);let m=l===!0?0:1,g,p,x=null,_=0,v=null;function b(N){let D=N.isScene===!0?N.background:null;if(D&&D.isTexture){const L=N.backgroundBlurriness>0;D=e.get(D,L)}return D}function M(N){let D=!1;const L=b(N);L===null?S(d,m):L&&L.isColor&&(S(L,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(N,D){const L=b(D);L&&(L.isCubeTexture||L.mapping===ru)?(p===void 0&&(p=new ji(new ol(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:zr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,H,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Rs.copy(D.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(mw.makeRotationFromEuler(Rs)),p.material.toneMapped=bt.getTransfer(L.colorSpace)!==Bt,(x!==L||_!==L.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,x=L,_=L.version,v=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(g===void 0&&(g=new ji(new ll(2,2),new Mi({name:"BackgroundMaterial",uniforms:zr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=L,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=bt.getTransfer(L.colorSpace)!==Bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),g.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||_!==L.version||v!==r.toneMapping)&&(g.material.needsUpdate=!0,x=L,_=L.version,v=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function S(N,D){N.getRGB(Gc,Jx(r)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,D,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,S(d,m)},render:M,addToRenderList:C,dispose:y}}function vw(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function m(k,ne,se,de,$){let I=!1;const z=_(k,de,se,ne);c!==z&&(c=z,p(c.object)),I=b(k,de,se,$),I&&M(k,de,se,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,L(k,ne,se,de),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function g(){return r.createVertexArray()}function p(k){return r.bindVertexArray(k)}function x(k){return r.deleteVertexArray(k)}function _(k,ne,se,de){const $=de.wireframe===!0;let I=s[ne.id];I===void 0&&(I={},s[ne.id]=I);const z=k.isInstancedMesh===!0?k.id:0;let ce=I[z];ce===void 0&&(ce={},I[z]=ce);let ve=ce[se.id];ve===void 0&&(ve={},ce[se.id]=ve);let O=ve[$];return O===void 0&&(O=v(g()),ve[$]=O),O}function v(k){const ne=[],se=[],de=[];for(let $=0;$<i;$++)ne[$]=0,se[$]=0,de[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:se,attributeDivisors:de,object:k,attributes:{},index:null}}function b(k,ne,se,de){const $=c.attributes,I=ne.attributes;let z=0;const ce=se.getAttributes();for(const ve in ce)if(ce[ve].location>=0){const K=$[ve];let ue=I[ve];if(ue===void 0&&(ve==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),ve==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),K===void 0||K.attribute!==ue||ue&&K.data!==ue.data)return!0;z++}return c.attributesNum!==z||c.index!==de}function M(k,ne,se,de){const $={},I=ne.attributes;let z=0;const ce=se.getAttributes();for(const ve in ce)if(ce[ve].location>=0){let K=I[ve];K===void 0&&(ve==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),ve==="instanceColor"&&k.instanceColor&&(K=k.instanceColor));const ue={};ue.attribute=K,K&&K.data&&(ue.data=K.data),$[ve]=ue,z++}c.attributes=$,c.attributesNum=z,c.index=de}function C(){const k=c.newAttributes;for(let ne=0,se=k.length;ne<se;ne++)k[ne]=0}function S(k){y(k,0)}function y(k,ne){const se=c.newAttributes,de=c.enabledAttributes,$=c.attributeDivisors;se[k]=1,de[k]===0&&(r.enableVertexAttribArray(k),de[k]=1),$[k]!==ne&&(r.vertexAttribDivisor(k,ne),$[k]=ne)}function N(){const k=c.newAttributes,ne=c.enabledAttributes;for(let se=0,de=ne.length;se<de;se++)ne[se]!==k[se]&&(r.disableVertexAttribArray(se),ne[se]=0)}function D(k,ne,se,de,$,I,z){z===!0?r.vertexAttribIPointer(k,ne,se,$,I):r.vertexAttribPointer(k,ne,se,de,$,I)}function L(k,ne,se,de){C();const $=de.attributes,I=se.getAttributes(),z=ne.defaultAttributeValues;for(const ce in I){const ve=I[ce];if(ve.location>=0){let O=$[ce];if(O===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(O=k.instanceColor)),O!==void 0){const K=O.normalized,ue=O.itemSize,ye=e.get(O);if(ye===void 0)continue;const Ue=ye.buffer,qe=ye.type,ee=ye.bytesPerElement,Ee=qe===r.INT||qe===r.UNSIGNED_INT||O.gpuType===ap;if(O.isInterleavedBufferAttribute){const be=O.data,Je=be.stride,Ke=O.offset;if(be.isInstancedInterleavedBuffer){for(let $e=0;$e<ve.locationSize;$e++)y(ve.location+$e,be.meshPerAttribute);k.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let $e=0;$e<ve.locationSize;$e++)S(ve.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let $e=0;$e<ve.locationSize;$e++)D(ve.location+$e,ue/ve.locationSize,qe,K,Je*ee,(Ke+ue/ve.locationSize*$e)*ee,Ee)}else{if(O.isInstancedBufferAttribute){for(let be=0;be<ve.locationSize;be++)y(ve.location+be,O.meshPerAttribute);k.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let be=0;be<ve.locationSize;be++)S(ve.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let be=0;be<ve.locationSize;be++)D(ve.location+be,ue/ve.locationSize,qe,K,ue*ee,ue/ve.locationSize*be*ee,Ee)}}else if(z!==void 0){const K=z[ce];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ve.location,K);break;case 3:r.vertexAttrib3fv(ve.location,K);break;case 4:r.vertexAttrib4fv(ve.location,K);break;default:r.vertexAttrib1fv(ve.location,K)}}}}N()}function B(){U();for(const k in s){const ne=s[k];for(const se in ne){const de=ne[se];for(const $ in de){const I=de[$];for(const z in I)x(I[z].object),delete I[z];delete de[$]}}delete s[k]}}function H(k){if(s[k.id]===void 0)return;const ne=s[k.id];for(const se in ne){const de=ne[se];for(const $ in de){const I=de[$];for(const z in I)x(I[z].object),delete I[z];delete de[$]}}delete s[k.id]}function j(k){for(const ne in s){const se=s[ne];for(const de in se){const $=se[de];if($[k.id]===void 0)continue;const I=$[k.id];for(const z in I)x(I[z].object),delete I[z];delete $[k.id]}}}function A(k){for(const ne in s){const se=s[ne],de=k.isInstancedMesh===!0?k.id:0,$=se[de];if($!==void 0){for(const I in $){const z=$[I];for(const ce in z)x(z[ce].object),delete z[ce];delete $[I]}delete se[de],Object.keys(se).length===0&&delete s[ne]}}}function U(){he(),d=!0,c!==l&&(c=l,p(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:U,resetDefaultState:he,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfObject:A,releaseStatesOfProgram:j,initAttributes:C,enableAttribute:S,disableUnusedAttributes:N}}function xw(r,e,i){let s;function l(p){s=p}function c(p,x){r.drawArrays(s,p,x),i.update(x,s,1)}function d(p,x,_){_!==0&&(r.drawArraysInstanced(s,p,x,_),i.update(x,s,_))}function m(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,_);let b=0;for(let M=0;M<_;M++)b+=x[M];i.update(b,s,1)}function g(p,x,_,v){if(_===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<p.length;M++)d(p[M],x[M],v[M]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,x,0,v,0,_);let M=0;for(let C=0;C<_;C++)M+=x[C]*v[C];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function _w(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(j){return!(j!==bi&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(j){const A=j===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(j!==ui&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==Pi&&!A)}function g(j){if(j==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=g(p);x!==p&&(at("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:L,maxSamples:B,samples:H}}function yw(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ns,m=new ut,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const b=_.length!==0||v||s!==0||l;return l=v,s=_.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=x(_,v,0)},this.setState=function(_,v,b){const M=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!l||M===null||M.length===0||c&&!S)c?x(null):p();else{const N=c?0:s,D=N*4;let L=y.clippingState||null;g.value=L,L=x(M,v,D,b);for(let B=0;B!==D;++B)L[B]=i[B];y.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(_,v,b,M){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=g.value,M!==!0||S===null){const y=b+C*4,N=v.matrixWorldInverse;m.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,L=b;D!==C;++D,L+=4)d.copy(_[D]).applyMatrix4(N,m),d.normal.toArray(S,L),S[L+3]=d.constant}g.value=S,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const as=4,zv=[.125,.215,.35,.446,.526,.582],Us=20,Sw=256,qo=new pp,Hv=new kt;let Zd=null,Kd=0,Qd=0,Jd=!1;const bw=new le;class kv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:m=bw}=c;Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zd,Kd,Qd),this._renderer.xr.enabled=Jd,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ps||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Sa,format:bi,colorSpace:Fr,depthBuffer:!1},l=jv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mw(c)),this._blurMaterial=Tw(c,e,i),this._ggxMaterial=Ew(c,e,i)}return l}_compileMaterial(e){const i=new ji(new Ta,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,s,l,c){const g=new yi(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,b=_.toneMapping;_.getClearColor(Hv),_.toneMapping=Bi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ji(new ol,new Yx({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,y=!0):(S.color.copy(Hv),y=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(g.up.set(0,p[D],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+x[D],c.y,c.z)):L===1?(g.up.set(0,0,p[D]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+x[D],c.z)):(g.up.set(0,p[D],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+x[D]));const B=this._cubeSize;Ur(l,L*B,D>2?B:0,B,B),_.setRenderTarget(l),y&&_.render(C,g),_.render(e,g)}_.toneMapping=b,_.autoClear=v,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ps||e.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const m=c.uniforms;m.envMap.value=e;const g=this._cubeSize;Ur(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,qo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,m=this._lodMeshes[s];m.material=d;const g=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),v=0+p*1.25,b=_*v,{_lodMax:M}=this,C=this._sizeLods[s],S=3*C*(s>M-as?s-M+as:0),y=4*(this._cubeSize-C);g.envMap.value=e.texture,g.roughness.value=b,g.mipInt.value=M-i,Ur(c,S,y,3*C,2*C),l.setRenderTarget(c),l.render(m,qo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=M-s,Ur(e,S,y,3*C,2*C),l.setRenderTarget(e),l.render(m,qo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,m){const g=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,b=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Us-1),C=c/M,S=isFinite(c)?1+Math.floor(x*C):Us;S>Us&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Us}`);const y=[];let N=0;for(let j=0;j<Us;++j){const A=j/C,U=Math.exp(-A*A/2);y.push(U),j===0?N+=U:j<S&&(N+=2*U)}for(let j=0;j<y.length;j++)y[j]=y[j]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=d==="latitudinal",m&&(v.poleAxis.value=m);const{_lodMax:D}=this;v.dTheta.value=M,v.mipInt.value=D-s;const L=this._sizeLods[l],B=3*L*(l>D-as?l-D+as:0),H=4*(this._cubeSize-L);Ur(i,B,H,3*L,2*L),g.setRenderTarget(i),g.render(_,qo)}}function Mw(r){const e=[],i=[],s=[];let l=r;const c=r-as+1+zv.length;for(let d=0;d<c;d++){const m=Math.pow(2,l);e.push(m);let g=1/m;d>r-as?g=zv[d-r+as-1]:d===0&&(g=0),i.push(g);const p=1/(m-2),x=-p,_=1+p,v=[x,x,_,x,_,_,x,x,_,_,x,_],b=6,M=6,C=3,S=2,y=1,N=new Float32Array(C*M*b),D=new Float32Array(S*M*b),L=new Float32Array(y*M*b);for(let H=0;H<b;H++){const j=H%3*2/3-1,A=H>2?0:-1,U=[j,A,0,j+2/3,A,0,j+2/3,A+1,0,j,A,0,j+2/3,A+1,0,j,A+1,0];N.set(U,C*M*H),D.set(v,S*M*H);const he=[H,H,H,H,H,H];L.set(he,y*M*H)}const B=new Ta;B.setAttribute("position",new zi(N,C)),B.setAttribute("uv",new zi(D,S)),B.setAttribute("faceIndex",new zi(L,y)),s.push(new ji(B,null)),l>as&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function jv(r,e,i){const s=new Fi(r,e,i);return s.texture.mapping=ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function Ew(r,e,i){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Tw(r,e,i){const s=new Float32Array(Us),l=new le(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Gv(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Vv(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class t_ extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Kx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ol(5,5,5),c=new Mi({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:va});c.uniforms.tEquirect.value=i;const d=new ji(l,c),m=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Dn),new DT(1,10,this).update(e,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function Aw(r){let e=new WeakMap,i=new WeakMap,s=null;function l(v,b=!1){return v==null?null:b?d(v):c(v)}function c(v){if(v&&v.isTexture){const b=v.mapping;if(b===bd||b===Md)if(e.has(v)){const M=e.get(v).texture;return m(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const C=new t_(M.height);return C.fromEquirectangularTexture(r,v),e.set(v,C),v.addEventListener("dispose",p),m(C.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const b=v.mapping,M=b===bd||b===Md,C=b===Ps||b===Ir;if(M||C){let S=i.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new kv(r)),S=M?s.fromEquirectangular(v,S):s.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),S.texture;if(S!==void 0)return S.texture;{const N=v.image;return M&&N&&N.height>0||C&&N&&g(N)?(s===null&&(s=new kv(r)),S=M?s.fromEquirectangular(v):s.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,i.set(v,S),v.addEventListener("dispose",x),S.texture):null}}}return v}function m(v,b){return b===bd?v.mapping=Ps:b===Md&&(v.mapping=Ir),v}function g(v){let b=0;const M=6;for(let C=0;C<M;C++)v[C]!==void 0&&b++;return b===M}function p(v){const b=v.target;b.removeEventListener("dispose",p);const M=e.get(b);M!==void 0&&(e.delete(b),M.dispose())}function x(v){const b=v.target;b.removeEventListener("dispose",x);const M=i.get(b);M!==void 0&&(i.delete(b),M.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function ww(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&iu("WebGLRenderer: "+s+" extension not supported."),l}}}function Rw(r,e,i,s){const l={},c=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",d),delete l[v.id];const b=c.get(v);b&&(e.remove(b),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function m(_,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function g(_){const v=_.attributes;for(const b in v)e.update(v[b],r.ARRAY_BUFFER)}function p(_){const v=[],b=_.index,M=_.attributes.position;let C=0;if(M===void 0)return;if(b!==null){const N=b.array;C=b.version;for(let D=0,L=N.length;D<L;D+=3){const B=N[D+0],H=N[D+1],j=N[D+2];v.push(B,H,H,j,j,B)}}else{const N=M.array;C=M.version;for(let D=0,L=N.length/3-1;D<L;D+=3){const B=D+0,H=D+1,j=D+2;v.push(B,H,H,j,j,B)}}const S=new(M.count>=65535?qx:Wx)(v,1);S.version=C;const y=c.get(_);y&&e.remove(y),c.set(_,S)}function x(_){const v=c.get(_);if(v){const b=_.index;b!==null&&v.version<b.version&&p(_)}else p(_);return c.get(_)}return{get:m,update:g,getWireframeAttribute:x}}function Cw(r,e,i){let s;function l(v){s=v}let c,d;function m(v){c=v.type,d=v.bytesPerElement}function g(v,b){r.drawElements(s,b,c,v*d),i.update(b,s,1)}function p(v,b,M){M!==0&&(r.drawElementsInstanced(s,b,c,v*d,M),i.update(b,s,M))}function x(v,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,v,0,M);let S=0;for(let y=0;y<M;y++)S+=b[y];i.update(S,s,1)}function _(v,b,M,C){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)p(v[y]/d,b[y],C[y]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,c,v,0,C,0,M);let y=0;for(let N=0;N<M;N++)y+=b[N]*C[N];i.update(y,s,1)}}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function Nw(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,m){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=m*(c/3);break;case r.LINES:i.lines+=m*(c/2);break;case r.LINE_STRIP:i.lines+=m*(c-1);break;case r.LINE_LOOP:i.lines+=m*c;break;case r.POINTS:i.points+=m*c;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Dw(r,e,i){const s=new WeakMap,l=new on;function c(d,m,g){const p=d.morphTargetInfluences,x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,_=x!==void 0?x.length:0;let v=s.get(m);if(v===void 0||v.count!==_){let he=function(){A.dispose(),s.delete(m),m.removeEventListener("dispose",he)};var b=he;v!==void 0&&v.texture.dispose();const M=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,S=m.morphAttributes.color!==void 0,y=m.morphAttributes.position||[],N=m.morphAttributes.normal||[],D=m.morphAttributes.color||[];let L=0;M===!0&&(L=1),C===!0&&(L=2),S===!0&&(L=3);let B=m.attributes.position.count*L,H=1;B>e.maxTextureSize&&(H=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const j=new Float32Array(B*H*4*_),A=new Gx(j,B,H,_);A.type=Pi,A.needsUpdate=!0;const U=L*4;for(let k=0;k<_;k++){const ne=y[k],se=N[k],de=D[k],$=B*H*4*k;for(let I=0;I<ne.count;I++){const z=I*U;M===!0&&(l.fromBufferAttribute(ne,I),j[$+z+0]=l.x,j[$+z+1]=l.y,j[$+z+2]=l.z,j[$+z+3]=0),C===!0&&(l.fromBufferAttribute(se,I),j[$+z+4]=l.x,j[$+z+5]=l.y,j[$+z+6]=l.z,j[$+z+7]=0),S===!0&&(l.fromBufferAttribute(de,I),j[$+z+8]=l.x,j[$+z+9]=l.y,j[$+z+10]=l.z,j[$+z+11]=de.itemSize===4?l.w:1)}}v={count:_,texture:A,size:new Lt(B,H)},s.set(m,v),m.addEventListener("dispose",he)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const C=m.morphTargetsRelative?1:1-M;g.getUniforms().setValue(r,"morphTargetBaseInfluence",C),g.getUniforms().setValue(r,"morphTargetInfluences",p)}g.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function Uw(r,e,i,s,l){let c=new WeakMap;function d(p){const x=l.render.frame,_=p.geometry,v=e.get(p,_);if(c.get(v)!==x&&(e.update(v),c.set(v,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),c.get(p)!==x&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const b=p.skeleton;c.get(b)!==x&&(b.update(),c.set(b,x))}return v}function m(){c=new WeakMap}function g(p){const x=p.target;x.removeEventListener("dispose",g),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:m}}const Lw={[wx]:"LINEAR_TONE_MAPPING",[Rx]:"REINHARD_TONE_MAPPING",[Cx]:"CINEON_TONE_MAPPING",[Nx]:"ACES_FILMIC_TONE_MAPPING",[Ux]:"AGX_TONE_MAPPING",[Lx]:"NEUTRAL_TONE_MAPPING",[Dx]:"CUSTOM_TONE_MAPPING"};function Ow(r,e,i,s,l){const c=new Fi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Fi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),m=new Ta;m.setAttribute("position",new _a([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new _a([0,2,0,0,2,0],2));const g=new RT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ji(m,g),x=new pp(-1,1,1,-1,0,1);let _=null,v=null,b=!1,M,C=null,S=[],y=!1;this.setSize=function(N,D){c.setSize(N,D),d.setSize(N,D);for(let L=0;L<S.length;L++){const B=S[L];B.setSize&&B.setSize(N,D)}},this.setEffects=function(N){S=N,y=S.length>0&&S[0].isRenderPass===!0;const D=c.width,L=c.height;for(let B=0;B<S.length;B++){const H=S[B];H.setSize&&H.setSize(D,L)}},this.begin=function(N,D){if(b||N.toneMapping===Bi&&S.length===0)return!1;if(C=D,D!==null){const L=D.width,B=D.height;(c.width!==L||c.height!==B)&&this.setSize(L,B)}return y===!1&&N.setRenderTarget(c),M=N.toneMapping,N.toneMapping=Bi,!0},this.hasRenderPass=function(){return y},this.end=function(N,D){N.toneMapping=M,b=!0;let L=c,B=d;for(let H=0;H<S.length;H++){const j=S[H];if(j.enabled!==!1&&(j.render(N,B,L,D),j.needsSwap!==!1)){const A=L;L=B,B=A}}if(_!==N.outputColorSpace||v!==N.toneMapping){_=N.outputColorSpace,v=N.toneMapping,g.defines={},bt.getTransfer(_)===Bt&&(g.defines.SRGB_TRANSFER="");const H=Lw[v];H&&(g.defines[H]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(C),N.render(p,x),C=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),d.dispose(),m.dispose(),g.dispose()}}const n_=new Pn,Yh=new tl(1,1),i_=new Gx,a_=new aT,s_=new Kx,Xv=[],Wv=[],qv=new Float32Array(16),Yv=new Float32Array(9),Zv=new Float32Array(4);function Vr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Xv[l];if(c===void 0&&(c=new Float32Array(l),Xv[l]=c),e!==0){s.toArray(c,0);for(let d=1,m=0;d!==e;++d)m+=i,r[d].toArray(c,m)}return c}function mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function gn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function cu(r,e){let i=Wv[e];i===void 0&&(i=new Int32Array(e),Wv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function Pw(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function Iw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2fv(this.addr,e),gn(i,e)}}function Bw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;r.uniform3fv(this.addr,e),gn(i,e)}}function Fw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4fv(this.addr,e),gn(i,e)}}function zw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Zv.set(s),r.uniformMatrix2fv(this.addr,!1,Zv),gn(i,s)}}function Hw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Yv.set(s),r.uniformMatrix3fv(this.addr,!1,Yv),gn(i,s)}}function kw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;qv.set(s),r.uniformMatrix4fv(this.addr,!1,qv),gn(i,s)}}function jw(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function Gw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2iv(this.addr,e),gn(i,e)}}function Vw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3iv(this.addr,e),gn(i,e)}}function Xw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4iv(this.addr,e),gn(i,e)}}function Ww(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function qw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2uiv(this.addr,e),gn(i,e)}}function Yw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3uiv(this.addr,e),gn(i,e)}}function Zw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4uiv(this.addr,e),gn(i,e)}}function Kw(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Yh.compareFunction=i.isReversedDepthBuffer()?fp:up,c=Yh):c=n_,i.setTexture2D(e||c,l)}function Qw(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||a_,l)}function Jw(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||s_,l)}function $w(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||i_,l)}function e3(r){switch(r){case 5126:return Pw;case 35664:return Iw;case 35665:return Bw;case 35666:return Fw;case 35674:return zw;case 35675:return Hw;case 35676:return kw;case 5124:case 35670:return jw;case 35667:case 35671:return Gw;case 35668:case 35672:return Vw;case 35669:case 35673:return Xw;case 5125:return Ww;case 36294:return qw;case 36295:return Yw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return $w}}function t3(r,e){r.uniform1fv(this.addr,e)}function n3(r,e){const i=Vr(e,this.size,2);r.uniform2fv(this.addr,i)}function i3(r,e){const i=Vr(e,this.size,3);r.uniform3fv(this.addr,i)}function a3(r,e){const i=Vr(e,this.size,4);r.uniform4fv(this.addr,i)}function s3(r,e){const i=Vr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function r3(r,e){const i=Vr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function o3(r,e){const i=Vr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function l3(r,e){r.uniform1iv(this.addr,e)}function c3(r,e){r.uniform2iv(this.addr,e)}function u3(r,e){r.uniform3iv(this.addr,e)}function f3(r,e){r.uniform4iv(this.addr,e)}function d3(r,e){r.uniform1uiv(this.addr,e)}function h3(r,e){r.uniform2uiv(this.addr,e)}function p3(r,e){r.uniform3uiv(this.addr,e)}function m3(r,e){r.uniform4uiv(this.addr,e)}function g3(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Yh:d=n_;for(let m=0;m!==l;++m)i.setTexture2D(e[m]||d,c[m])}function v3(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||a_,c[d])}function x3(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||s_,c[d])}function _3(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||i_,c[d])}function y3(r){switch(r){case 5126:return t3;case 35664:return n3;case 35665:return i3;case 35666:return a3;case 35674:return s3;case 35675:return r3;case 35676:return o3;case 5124:case 35670:return l3;case 35667:case 35671:return c3;case 35668:case 35672:return u3;case 35669:case 35673:return f3;case 5125:return d3;case 36294:return h3;case 36295:return p3;case 36296:return m3;case 35678:case 36198:case 36298:case 36306:case 35682:return g3;case 35679:case 36299:case 36307:return v3;case 35680:case 36300:case 36308:case 36293:return x3;case 36289:case 36303:case 36311:case 36292:return _3}}class S3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=e3(i.type)}}class b3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=y3(i.type)}}class M3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const m=l[c];m.setValue(e,i[m.id],s)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function Kv(r,e){r.seq.push(e),r.map[e.id]=e}function E3(r,e,i){const s=r.name,l=s.length;for($d.lastIndex=0;;){const c=$d.exec(s),d=$d.lastIndex;let m=c[1];const g=c[2]==="]",p=c[3];if(g&&(m=m|0),p===void 0||p==="["&&d+2===l){Kv(i,p===void 0?new S3(m,r,e):new b3(m,r,e));break}else{let _=i.map[m];_===void 0&&(_=new M3(m),Kv(i,_)),i=_}}}class Jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const m=e.getActiveUniform(i,d),g=e.getUniformLocation(i,m.name);E3(m,g,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Qv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const T3=37297;let A3=0;function w3(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const m=d+1;s.push(`${m===e?">":" "} ${m}: ${i[d]}`)}return s.join(`
`)}const Jv=new ut;function R3(r){bt._getMatrix(Jv,bt.workingColorSpace,r);const e=`mat3( ${Jv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(r)){case eu:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $v(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const m=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+w3(r.getShaderSource(e),m)}else return c}function C3(r,e){const i=R3(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const N3={[wx]:"Linear",[Rx]:"Reinhard",[Cx]:"Cineon",[Nx]:"ACESFilmic",[Ux]:"AgX",[Lx]:"Neutral",[Dx]:"Custom"};function D3(r,e){const i=N3[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new le;function U3(){bt.getLuminanceCoefficients(Vc);const r=Vc.x.toFixed(4),e=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function O3(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function P3(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let m=1;c.type===r.FLOAT_MAT2&&(m=2),c.type===r.FLOAT_MAT3&&(m=3),c.type===r.FLOAT_MAT4&&(m=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:m}}return i}function Qo(r){return r!==""}function ex(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(r){return r.replace(I3,F3)}const B3=new Map;function F3(r,e){let i=ft[e];if(i===void 0){const s=B3.get(e);if(s!==void 0)i=ft[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Zh(i)}const z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(r){return r.replace(z3,H3)}function H3(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ix(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const k3={[qc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function j3(r){return k3[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const G3={[Ps]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function V3(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":G3[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const X3={[Ir]:"ENVMAP_MODE_REFRACTION"};function W3(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":X3[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const q3={[Ax]:"ENVMAP_BLENDING_MULTIPLY",[I1]:"ENVMAP_BLENDING_MIX",[B1]:"ENVMAP_BLENDING_ADD"};function Y3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":q3[r.combine]||"ENVMAP_BLENDING_NONE"}function Z3(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function K3(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,m=i.fragmentShader;const g=j3(i),p=V3(i),x=W3(i),_=Y3(i),v=Z3(i),b=L3(i),M=O3(c),C=l.createProgram();let S,y,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Qo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Qo).join(`
`),y.length>0&&(y+=`
`)):(S=[ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),y=[ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Bi?D3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,C3("linearToOutputTexel",i.outputColorSpace),U3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),d=Zh(d),d=ex(d,i),d=tx(d,i),m=Zh(m),m=ex(m,i),m=tx(m,i),d=nx(d),m=nx(m),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=N+S+d,L=N+y+m,B=Qv(l,l.VERTEX_SHADER,D),H=Qv(l,l.FRAGMENT_SHADER,L);l.attachShader(C,B),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function j(k){if(r.debug.checkShaderErrors){const ne=l.getProgramInfoLog(C)||"",se=l.getShaderInfoLog(B)||"",de=l.getShaderInfoLog(H)||"",$=ne.trim(),I=se.trim(),z=de.trim();let ce=!0,ve=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,B,H);else{const O=$v(l,B,"vertex"),K=$v(l,H,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+O+`
`+K)}else $!==""?at("WebGLProgram: Program Info Log:",$):(I===""||z==="")&&(ve=!1);ve&&(k.diagnostics={runnable:ce,programLog:$,vertexShader:{log:I,prefix:S},fragmentShader:{log:z,prefix:y}})}l.deleteShader(B),l.deleteShader(H),A=new Jc(l,C),U=P3(l,C)}let A;this.getUniforms=function(){return A===void 0&&j(this),A};let U;this.getAttributes=function(){return U===void 0&&j(this),U};let he=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return he===!1&&(he=l.getProgramParameter(C,T3)),he},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=A3++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=H,this}let Q3=0;class J3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new $3(e),i.set(e,s)),s}}class $3{constructor(e){this.id=Q3++,this.code=e,this.usedTimes=0}}function eR(r,e,i,s,l,c){const d=new Vx,m=new J3,g=new Set,p=[],x=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return g.add(A),A===0?"uv":`uv${A}`}function C(A,U,he,k,ne){const se=k.fog,de=ne.geometry,$=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,z=e.get(A.envMap||$,I),ce=z&&z.mapping===ru?z.image.height:null,ve=b[A.type];A.precision!==null&&(v=s.getMaxPrecision(A.precision),v!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const O=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,K=O!==void 0?O.length:0;let ue=0;de.morphAttributes.position!==void 0&&(ue=1),de.morphAttributes.normal!==void 0&&(ue=2),de.morphAttributes.color!==void 0&&(ue=3);let ye,Ue,qe,ee;if(ve){const Et=Oi[ve];ye=Et.vertexShader,Ue=Et.fragmentShader}else ye=A.vertexShader,Ue=A.fragmentShader,m.update(A),qe=m.getVertexShaderID(A),ee=m.getFragmentShaderID(A);const Ee=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Je=ne.isInstancedMesh===!0,Ke=ne.isBatchedMesh===!0,$e=!!A.map,Jt=!!A.matcap,pt=!!z,yt=!!A.aoMap,Ot=!!A.lightMap,ot=!!A.bumpMap,Mt=!!A.normalMap,G=!!A.displacementMap,Yt=!!A.emissiveMap,St=!!A.metalnessMap,wt=!!A.roughnessMap,Ve=A.anisotropy>0,P=A.clearcoat>0,T=A.dispersion>0,W=A.iridescence>0,me=A.sheen>0,xe=A.transmission>0,fe=Ve&&!!A.anisotropyMap,Le=P&&!!A.clearcoatMap,Ce=P&&!!A.clearcoatNormalMap,Ze=P&&!!A.clearcoatRoughnessMap,et=W&&!!A.iridescenceMap,Me=W&&!!A.iridescenceThicknessMap,Ae=me&&!!A.sheenColorMap,Be=me&&!!A.sheenRoughnessMap,He=!!A.specularMap,Pe=!!A.specularColorMap,lt=!!A.specularIntensityMap,X=xe&&!!A.transmissionMap,Re=xe&&!!A.thicknessMap,we=!!A.gradientMap,Ie=!!A.alphaMap,Te=A.alphaTest>0,pe=!!A.alphaHash,ke=!!A.extensions;let nt=Bi;A.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(nt=r.toneMapping);const Dt={shaderID:ve,shaderType:A.type,shaderName:A.name,vertexShader:ye,fragmentShader:Ue,defines:A.defines,customVertexShaderID:qe,customFragmentShaderID:ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Ke,batchingColor:Ke&&ne._colorsTexture!==null,instancing:Je,instancingColor:Je&&ne.instanceColor!==null,instancingMorph:Je&&ne.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Fr,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:Jt,envMap:pt,envMapMode:pt&&z.mapping,envMapCubeUVHeight:ce,aoMap:yt,lightMap:Ot,bumpMap:ot,normalMap:Mt,displacementMap:G,emissiveMap:Yt,normalMapObjectSpace:Mt&&A.normalMapType===k1,normalMapTangentSpace:Mt&&A.normalMapType===H1,metalnessMap:St,roughnessMap:wt,anisotropy:Ve,anisotropyMap:fe,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ze,dispersion:T,iridescence:W,iridescenceMap:et,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:Ae,sheenRoughnessMap:Be,specularMap:He,specularColorMap:Pe,specularIntensityMap:lt,transmission:xe,transmissionMap:X,thicknessMap:Re,gradientMap:we,opaque:A.transparent===!1&&A.blending===Lr&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:pe,combine:A.combine,mapUv:$e&&M(A.map.channel),aoMapUv:yt&&M(A.aoMap.channel),lightMapUv:Ot&&M(A.lightMap.channel),bumpMapUv:ot&&M(A.bumpMap.channel),normalMapUv:Mt&&M(A.normalMap.channel),displacementMapUv:G&&M(A.displacementMap.channel),emissiveMapUv:Yt&&M(A.emissiveMap.channel),metalnessMapUv:St&&M(A.metalnessMap.channel),roughnessMapUv:wt&&M(A.roughnessMap.channel),anisotropyMapUv:fe&&M(A.anisotropyMap.channel),clearcoatMapUv:Le&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(A.sheenRoughnessMap.channel),specularMapUv:He&&M(A.specularMap.channel),specularColorMapUv:Pe&&M(A.specularColorMap.channel),specularIntensityMapUv:lt&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:Re&&M(A.thicknessMap.channel),alphaMapUv:Ie&&M(A.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Mt||Ve),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!de.attributes.uv&&($e||Ie),fog:!!se,useFog:A.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||de.attributes.normal===void 0&&Mt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:be,skinning:ne.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ue,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&he.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&bt.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:Yt&&A.emissiveMap.isVideoTexture===!0&&bt.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pa,flipSided:A.side===Vn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ke&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&A.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Dt.vertexUv1s=g.has(1),Dt.vertexUv2s=g.has(2),Dt.vertexUv3s=g.has(3),g.clear(),Dt}function S(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const he in A.defines)U.push(he),U.push(A.defines[he]);return A.isRawShaderMaterial===!1&&(y(U,A),N(U,A),U.push(r.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function y(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function N(A,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),A.push(d.mask)}function D(A){const U=b[A.type];let he;if(U){const k=Oi[U];he=TT.clone(k.uniforms)}else he=A.uniforms;return he}function L(A,U){let he=x.get(U);return he!==void 0?++he.usedTimes:(he=new K3(r,U,A,l),p.push(he),x.set(U,he)),he}function B(A){if(--A.usedTimes===0){const U=p.indexOf(A);p[U]=p[p.length-1],p.pop(),x.delete(A.cacheKey),A.destroy()}}function H(A){m.remove(A)}function j(){m.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:D,acquireProgram:L,releaseProgram:B,releaseShaderCache:H,programs:p,dispose:j}}function tR(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let m=r.get(d);return m===void 0&&(m={},r.set(d,m)),m}function s(d){r.delete(d)}function l(d,m,g){r.get(d)[m]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function nR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function ax(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(v){let b=0;return v.isInstancedMesh&&(b+=2),v.isSkinnedMesh&&(b+=1),b}function m(v,b,M,C,S,y){let N=r[e];return N===void 0?(N={id:v.id,object:v,geometry:b,material:M,materialVariant:d(v),groupOrder:C,renderOrder:v.renderOrder,z:S,group:y},r[e]=N):(N.id=v.id,N.object=v,N.geometry=b,N.material=M,N.materialVariant=d(v),N.groupOrder=C,N.renderOrder=v.renderOrder,N.z=S,N.group=y),e++,N}function g(v,b,M,C,S,y){const N=m(v,b,M,C,S,y);M.transmission>0?s.push(N):M.transparent===!0?l.push(N):i.push(N)}function p(v,b,M,C,S,y){const N=m(v,b,M,C,S,y);M.transmission>0?s.unshift(N):M.transparent===!0?l.unshift(N):i.unshift(N)}function x(v,b){i.length>1&&i.sort(v||nR),s.length>1&&s.sort(b||ax),l.length>1&&l.sort(b||ax)}function _(){for(let v=e,b=r.length;v<b;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:p,finish:_,sort:x}}function iR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new sx,r.set(s,[d])):l>=c.length?(d=new sx,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function aR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new kt};break;case"SpotLight":i={position:new le,direction:new le,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=i,i}}}function sR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let rR=0;function oR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lR(r){const e=new aR,i=sR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new le);const l=new le,c=new fn,d=new fn;function m(p){let x=0,_=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let b=0,M=0,C=0,S=0,y=0,N=0,D=0,L=0,B=0,H=0,j=0;p.sort(oR);for(let U=0,he=p.length;U<he;U++){const k=p[U],ne=k.color,se=k.intensity,de=k.distance;let $=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Br?$=k.shadow.map.texture:$=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=ne.r*se,_+=ne.g*se,v+=ne.b*se;else if(k.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(k.sh.coefficients[I],se);j++}else if(k.isDirectionalLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const z=k.shadow,ce=i.get(k);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,s.directionalShadow[b]=ce,s.directionalShadowMap[b]=$,s.directionalShadowMatrix[b]=k.shadow.matrix,N++}s.directional[b]=I,b++}else if(k.isSpotLight){const I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(ne).multiplyScalar(se),I.distance=de,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,s.spot[C]=I;const z=k.shadow;if(k.map&&(s.spotLightMap[B]=k.map,B++,z.updateMatrices(k),k.castShadow&&H++),s.spotLightMatrix[C]=z.matrix,k.castShadow){const ce=i.get(k);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,s.spotShadow[C]=ce,s.spotShadowMap[C]=$,L++}C++}else if(k.isRectAreaLight){const I=e.get(k);I.color.copy(ne).multiplyScalar(se),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=I,S++}else if(k.isPointLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const z=k.shadow,ce=i.get(k);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,ce.shadowCameraNear=z.camera.near,ce.shadowCameraFar=z.camera.far,s.pointShadow[M]=ce,s.pointShadowMap[M]=$,s.pointShadowMatrix[M]=k.shadow.matrix,D++}s.point[M]=I,M++}else if(k.isHemisphereLight){const I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(se),I.groundColor.copy(k.groundColor).multiplyScalar(se),s.hemi[y]=I,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=v;const A=s.hash;(A.directionalLength!==b||A.pointLength!==M||A.spotLength!==C||A.rectAreaLength!==S||A.hemiLength!==y||A.numDirectionalShadows!==N||A.numPointShadows!==D||A.numSpotShadows!==L||A.numSpotMaps!==B||A.numLightProbes!==j)&&(s.directional.length=b,s.spot.length=C,s.rectArea.length=S,s.point.length=M,s.hemi.length=y,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=j,A.directionalLength=b,A.pointLength=M,A.spotLength=C,A.rectAreaLength=S,A.hemiLength=y,A.numDirectionalShadows=N,A.numPointShadows=D,A.numSpotShadows=L,A.numSpotMaps=B,A.numLightProbes=j,s.version=rR++)}function g(p,x){let _=0,v=0,b=0,M=0,C=0;const S=x.matrixWorldInverse;for(let y=0,N=p.length;y<N;y++){const D=p[y];if(D.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),_++}else if(D.isSpotLight){const L=s.spot[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),b++}else if(D.isRectAreaLight){const L=s.rectArea[M];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),d.identity(),c.copy(D.matrixWorld),c.premultiply(S),d.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),M++}else if(D.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(S),C++}}}return{setup:m,setupView:g,state:s}}function rx(r){const e=new lR(r),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function d(x){s.push(x)}function m(){e.setup(i)}function g(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:m,setupLightsView:g,pushLight:c,pushShadow:d}}function cR(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let m;return d===void 0?(m=new rx(r),e.set(l,[m])):c>=d.length?(m=new rx(r),d.push(m)):m=d[c],m}function s(){e=new WeakMap}return{get:i,dispose:s}}const uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dR=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],hR=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],ox=new fn,Yo=new le,eh=new le;function pR(r,e,i){let s=new Zx;const l=new Lt,c=new Lt,d=new on,m=new CT,g=new NT,p={},x=i.maxTextureSize,_={[ss]:Vn,[Vn]:ss,[pa]:pa},v=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:uR,fragmentShader:fR}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const M=new Ta;M.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ji(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let y=this.type;this.render=function(H,j,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;this.type===v1&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qc);const U=r.getRenderTarget(),he=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(va),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const se=y!==this.type;se&&j.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach($=>$.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,$=H.length;de<$;de++){const I=H[de],z=I.shadow;if(z===void 0){at("WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ce=z.getFrameExtents();l.multiply(ce),c.copy(z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ce.x),l.x=c.x*ce.x,z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ce.y),l.y=c.y*ce.y,z.mapSize.y=c.y));const ve=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ve,z.map===null||se===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ko){if(I.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Fi(l.x,l.y,{format:Br,type:Sa,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),z.map.texture.name=I.name+".shadowMap",z.map.depthTexture=new tl(l.x,l.y,Pi),z.map.depthTexture.name=I.name+".shadowMapDepth",z.map.depthTexture.format=ba,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An}else I.isPointLight?(z.map=new t_(l.x),z.map.depthTexture=new MT(l.x,ki)):(z.map=new Fi(l.x,l.y),z.map.depthTexture=new tl(l.x,l.y,ki)),z.map.depthTexture.name=I.name+".shadowMap",z.map.depthTexture.format=ba,this.type===qc?(z.map.depthTexture.compareFunction=ve?fp:up,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An);z.camera.updateProjectionMatrix()}const O=z.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<O;K++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,K),r.clear();else{K===0&&(r.setRenderTarget(z.map),r.clear());const ue=z.getViewport(K);d.set(c.x*ue.x,c.y*ue.y,c.x*ue.z,c.y*ue.w),ne.viewport(d)}if(I.isPointLight){const ue=z.camera,ye=z.matrix,Ue=I.distance||ue.far;Ue!==ue.far&&(ue.far=Ue,ue.updateProjectionMatrix()),Yo.setFromMatrixPosition(I.matrixWorld),ue.position.copy(Yo),eh.copy(ue.position),eh.add(dR[K]),ue.up.copy(hR[K]),ue.lookAt(eh),ue.updateMatrixWorld(),ye.makeTranslation(-Yo.x,-Yo.y,-Yo.z),ox.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ox,ue.coordinateSystem,ue.reversedDepth)}else z.updateMatrices(I);s=z.getFrustum(),L(j,A,z.camera,I,this.type)}z.isPointLightShadow!==!0&&this.type===Ko&&N(z,A),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(U,he,k)};function N(H,j){const A=e.update(C);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Fi(l.x,l.y,{format:Br,type:Sa})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(j,null,A,v,C,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(j,null,A,b,C,null)}function D(H,j,A,U){let he=null;const k=A.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)he=k;else if(he=A.isPointLight===!0?g:m,r.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const ne=he.uuid,se=j.uuid;let de=p[ne];de===void 0&&(de={},p[ne]=de);let $=de[se];$===void 0&&($=he.clone(),de[se]=$,j.addEventListener("dispose",B)),he=$}if(he.visible=j.visible,he.wireframe=j.wireframe,U===Ko?he.side=j.shadowSide!==null?j.shadowSide:j.side:he.side=j.shadowSide!==null?j.shadowSide:_[j.side],he.alphaMap=j.alphaMap,he.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,he.map=j.map,he.clipShadows=j.clipShadows,he.clippingPlanes=j.clippingPlanes,he.clipIntersection=j.clipIntersection,he.displacementMap=j.displacementMap,he.displacementScale=j.displacementScale,he.displacementBias=j.displacementBias,he.wireframeLinewidth=j.wireframeLinewidth,he.linewidth=j.linewidth,A.isPointLight===!0&&he.isMeshDistanceMaterial===!0){const ne=r.properties.get(he);ne.light=A}return he}function L(H,j,A,U,he){if(H.visible===!1)return;if(H.layers.test(j.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&he===Ko)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,H.matrixWorld);const se=e.update(H),de=H.material;if(Array.isArray(de)){const $=se.groups;for(let I=0,z=$.length;I<z;I++){const ce=$[I],ve=de[ce.materialIndex];if(ve&&ve.visible){const O=D(H,ve,U,he);H.onBeforeShadow(r,H,j,A,se,O,ce),r.renderBufferDirect(A,null,se,O,H,ce),H.onAfterShadow(r,H,j,A,se,O,ce)}}}else if(de.visible){const $=D(H,de,U,he);H.onBeforeShadow(r,H,j,A,se,$,null),r.renderBufferDirect(A,null,se,$,H,null),H.onAfterShadow(r,H,j,A,se,$,null)}}const ne=H.children;for(let se=0,de=ne.length;se<de;se++)L(ne[se],j,A,U,he)}function B(H){H.target.removeEventListener("dispose",B);for(const A in p){const U=p[A],he=H.target.uuid;he in U&&(U[he].dispose(),delete U[he])}}}function mR(r,e){function i(){let X=!1;const Re=new on;let we=null;const Ie=new on(0,0,0,0);return{setMask:function(Te){we!==Te&&!X&&(r.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){X=Te},setClear:function(Te,pe,ke,nt,Dt){Dt===!0&&(Te*=nt,pe*=nt,ke*=nt),Re.set(Te,pe,ke,nt),Ie.equals(Re)===!1&&(r.clearColor(Te,pe,ke,nt),Ie.copy(Re))},reset:function(){X=!1,we=null,Ie.set(-1,0,0,0)}}}function s(){let X=!1,Re=!1,we=null,Ie=null,Te=null;return{setReversed:function(pe){if(Re!==pe){const ke=e.get("EXT_clip_control");pe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Re=pe;const nt=Te;Te=null,this.setClear(nt)}},getReversed:function(){return Re},setTest:function(pe){pe?Ee(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(pe){we!==pe&&!X&&(r.depthMask(pe),we=pe)},setFunc:function(pe){if(Re&&(pe=Q1[pe]),Ie!==pe){switch(pe){case rh:r.depthFunc(r.NEVER);break;case oh:r.depthFunc(r.ALWAYS);break;case lh:r.depthFunc(r.LESS);break;case Pr:r.depthFunc(r.LEQUAL);break;case ch:r.depthFunc(r.EQUAL);break;case uh:r.depthFunc(r.GEQUAL);break;case fh:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=pe}},setLocked:function(pe){X=pe},setClear:function(pe){Te!==pe&&(Te=pe,Re&&(pe=1-pe),r.clearDepth(pe))},reset:function(){X=!1,we=null,Ie=null,Te=null,Re=!1}}}function l(){let X=!1,Re=null,we=null,Ie=null,Te=null,pe=null,ke=null,nt=null,Dt=null;return{setTest:function(Et){X||(Et?Ee(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!X&&(r.stencilMask(Et),Re=Et)},setFunc:function(Et,fi,vn){(we!==Et||Ie!==fi||Te!==vn)&&(r.stencilFunc(Et,fi,vn),we=Et,Ie=fi,Te=vn)},setOp:function(Et,fi,vn){(pe!==Et||ke!==fi||nt!==vn)&&(r.stencilOp(Et,fi,vn),pe=Et,ke=fi,nt=vn)},setLocked:function(Et){X=Et},setClear:function(Et){Dt!==Et&&(r.clearStencil(Et),Dt=Et)},reset:function(){X=!1,Re=null,we=null,Ie=null,Te=null,pe=null,ke=null,nt=null,Dt=null}}}const c=new i,d=new s,m=new l,g=new WeakMap,p=new WeakMap;let x={},_={},v=new WeakMap,b=[],M=null,C=!1,S=null,y=null,N=null,D=null,L=null,B=null,H=null,j=new kt(0,0,0),A=0,U=!1,he=null,k=null,ne=null,se=null,de=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ce)[1]),I=z>=1):ce.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),I=z>=2);let ve=null,O={};const K=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),ye=new on().fromArray(K),Ue=new on().fromArray(ue);function qe(X,Re,we,Ie){const Te=new Uint8Array(4),pe=r.createTexture();r.bindTexture(X,pe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<we;ke++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Re+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return pe}const ee={};ee[r.TEXTURE_2D]=qe(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),m.setClear(0),Ee(r.DEPTH_TEST),d.setFunc(Pr),ot(!1),Mt(hv),Ee(r.CULL_FACE),yt(va);function Ee(X){x[X]!==!0&&(r.enable(X),x[X]=!0)}function be(X){x[X]!==!1&&(r.disable(X),x[X]=!1)}function Je(X,Re){return _[X]!==Re?(r.bindFramebuffer(X,Re),_[X]=Re,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Re),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(X,Re){let we=b,Ie=!1;if(X){we=v.get(Re),we===void 0&&(we=[],v.set(Re,we));const Te=X.textures;if(we.length!==Te.length||we[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,ke=Te.length;pe<ke;pe++)we[pe]=r.COLOR_ATTACHMENT0+pe;we.length=Te.length,Ie=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(we)}function $e(X){return M!==X?(r.useProgram(X),M=X,!0):!1}const Jt={[Ds]:r.FUNC_ADD,[_1]:r.FUNC_SUBTRACT,[y1]:r.FUNC_REVERSE_SUBTRACT};Jt[S1]=r.MIN,Jt[b1]=r.MAX;const pt={[M1]:r.ZERO,[E1]:r.ONE,[T1]:r.SRC_COLOR,[ah]:r.SRC_ALPHA,[D1]:r.SRC_ALPHA_SATURATE,[C1]:r.DST_COLOR,[w1]:r.DST_ALPHA,[A1]:r.ONE_MINUS_SRC_COLOR,[sh]:r.ONE_MINUS_SRC_ALPHA,[N1]:r.ONE_MINUS_DST_COLOR,[R1]:r.ONE_MINUS_DST_ALPHA,[U1]:r.CONSTANT_COLOR,[L1]:r.ONE_MINUS_CONSTANT_COLOR,[O1]:r.CONSTANT_ALPHA,[P1]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(X,Re,we,Ie,Te,pe,ke,nt,Dt,Et){if(X===va){C===!0&&(be(r.BLEND),C=!1);return}if(C===!1&&(Ee(r.BLEND),C=!0),X!==x1){if(X!==S||Et!==U){if((y!==Ds||L!==Ds)&&(r.blendEquation(r.FUNC_ADD),y=Ds,L=Ds),Et)switch(X){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pv:r.blendFunc(r.ONE,r.ONE);break;case mv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:At("WebGLState: Invalid blending: ",X);break}else switch(X){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mv:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gv:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",X);break}N=null,D=null,B=null,H=null,j.set(0,0,0),A=0,S=X,U=Et}return}Te=Te||Re,pe=pe||we,ke=ke||Ie,(Re!==y||Te!==L)&&(r.blendEquationSeparate(Jt[Re],Jt[Te]),y=Re,L=Te),(we!==N||Ie!==D||pe!==B||ke!==H)&&(r.blendFuncSeparate(pt[we],pt[Ie],pt[pe],pt[ke]),N=we,D=Ie,B=pe,H=ke),(nt.equals(j)===!1||Dt!==A)&&(r.blendColor(nt.r,nt.g,nt.b,Dt),j.copy(nt),A=Dt),S=X,U=!1}function Ot(X,Re){X.side===pa?be(r.CULL_FACE):Ee(r.CULL_FACE);let we=X.side===Vn;Re&&(we=!we),ot(we),X.blending===Lr&&X.transparent===!1?yt(va):yt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ie=X.stencilWrite;m.setTest(Ie),Ie&&(m.setMask(X.stencilWriteMask),m.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),m.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Yt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){he!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),he=X)}function Mt(X){X!==m1?(Ee(r.CULL_FACE),X!==k&&(X===hv?r.cullFace(r.BACK):X===g1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),k=X}function G(X){X!==ne&&(I&&r.lineWidth(X),ne=X)}function Yt(X,Re,we){X?(Ee(r.POLYGON_OFFSET_FILL),(se!==Re||de!==we)&&(se=Re,de=we,d.getReversed()&&(Re=-Re),r.polygonOffset(Re,we))):be(r.POLYGON_OFFSET_FILL)}function St(X){X?Ee(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function wt(X){X===void 0&&(X=r.TEXTURE0+$-1),ve!==X&&(r.activeTexture(X),ve=X)}function Ve(X,Re,we){we===void 0&&(ve===null?we=r.TEXTURE0+$-1:we=ve);let Ie=O[we];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[we]=Ie),(Ie.type!==X||Ie.texture!==Re)&&(ve!==we&&(r.activeTexture(we),ve=we),r.bindTexture(X,Re||ee[X]),Ie.type=X,Ie.texture=Re)}function P(){const X=O[ve];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function me(){try{r.texSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function xe(){try{r.texSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ce(){try{r.texStorage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Ze(){try{r.texStorage3D(...arguments)}catch(X){At("WebGLState:",X)}}function et(){try{r.texImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Me(){try{r.texImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ae(X){ye.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),ye.copy(X))}function Be(X){Ue.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ue.copy(X))}function He(X,Re){let we=p.get(Re);we===void 0&&(we=new WeakMap,p.set(Re,we));let Ie=we.get(X);Ie===void 0&&(Ie=r.getUniformBlockIndex(Re,X.name),we.set(X,Ie))}function Pe(X,Re){const Ie=p.get(Re).get(X);g.get(Re)!==Ie&&(r.uniformBlockBinding(Re,Ie,X.__bindingPointIndex),g.set(Re,Ie))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},ve=null,O={},_={},v=new WeakMap,b=[],M=null,C=!1,S=null,y=null,N=null,D=null,L=null,B=null,H=null,j=new kt(0,0,0),A=0,U=!1,he=null,k=null,ne=null,se=null,de=null,ye.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),m.reset()}return{buffers:{color:c,depth:d,stencil:m},enable:Ee,disable:be,bindFramebuffer:Je,drawBuffers:Ke,useProgram:$e,setBlending:yt,setMaterial:Ot,setFlipSided:ot,setCullFace:Mt,setLineWidth:G,setPolygonOffset:Yt,setScissorTest:St,activeTexture:wt,bindTexture:Ve,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:et,texImage3D:Me,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:Ze,texSubImage2D:me,texSubImage3D:xe,compressedTexSubImage2D:fe,compressedTexSubImage3D:Le,scissor:Ae,viewport:Be,reset:lt}}function gR(r,e,i,s,l,c,d){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,x=new WeakMap;let _;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,T){return b?new OffscreenCanvas(P,T):nu("canvas")}function C(P,T,W){let me=1;const xe=Ve(P);if((xe.width>W||xe.height>W)&&(me=W/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*xe.width),Le=Math.floor(me*xe.height);_===void 0&&(_=M(fe,Le));const Ce=T?M(fe,Le):_;return Ce.width=fe,Ce.height=Le,Ce.getContext("2d").drawImage(P,0,0,fe,Le),at("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+Le+")."),Ce}else return"data"in P&&at("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){r.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(P,T,W,me,xe=!1){if(P!==null){if(r[P]!==void 0)return r[P];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=T;if(T===r.RED&&(W===r.FLOAT&&(fe=r.R32F),W===r.HALF_FLOAT&&(fe=r.R16F),W===r.UNSIGNED_BYTE&&(fe=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.R8UI),W===r.UNSIGNED_SHORT&&(fe=r.R16UI),W===r.UNSIGNED_INT&&(fe=r.R32UI),W===r.BYTE&&(fe=r.R8I),W===r.SHORT&&(fe=r.R16I),W===r.INT&&(fe=r.R32I)),T===r.RG&&(W===r.FLOAT&&(fe=r.RG32F),W===r.HALF_FLOAT&&(fe=r.RG16F),W===r.UNSIGNED_BYTE&&(fe=r.RG8)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RG8UI),W===r.UNSIGNED_SHORT&&(fe=r.RG16UI),W===r.UNSIGNED_INT&&(fe=r.RG32UI),W===r.BYTE&&(fe=r.RG8I),W===r.SHORT&&(fe=r.RG16I),W===r.INT&&(fe=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),W===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),W===r.UNSIGNED_INT&&(fe=r.RGB32UI),W===r.BYTE&&(fe=r.RGB8I),W===r.SHORT&&(fe=r.RGB16I),W===r.INT&&(fe=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),W===r.UNSIGNED_INT&&(fe=r.RGBA32UI),W===r.BYTE&&(fe=r.RGBA8I),W===r.SHORT&&(fe=r.RGBA16I),W===r.INT&&(fe=r.RGBA32I)),T===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),T===r.RGBA){const Le=xe?eu:bt.getTransfer(me);W===r.FLOAT&&(fe=r.RGBA32F),W===r.HALF_FLOAT&&(fe=r.RGBA16F),W===r.UNSIGNED_BYTE&&(fe=Le===Bt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function L(P,T){let W;return P?T===null||T===ki||T===el?W=r.DEPTH24_STENCIL8:T===Pi?W=r.DEPTH32F_STENCIL8:T===$o&&(W=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ki||T===el?W=r.DEPTH_COMPONENT24:T===Pi?W=r.DEPTH_COMPONENT32F:T===$o&&(W=r.DEPTH_COMPONENT16),W}function B(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function H(P){const T=P.target;T.removeEventListener("dispose",H),A(T),T.isVideoTexture&&x.delete(T)}function j(P){const T=P.target;T.removeEventListener("dispose",j),he(T)}function A(P){const T=s.get(P);if(T.__webglInit===void 0)return;const W=P.source,me=v.get(W);if(me){const xe=me[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&U(P),Object.keys(me).length===0&&v.delete(W)}s.remove(P)}function U(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const W=P.source,me=v.get(W);delete me[T.__cacheKey],d.memory.textures--}function he(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let xe=0;xe<T.__webglFramebuffer[me].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[me][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)r.deleteFramebuffer(T.__webglFramebuffer[me]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=P.textures;for(let me=0,xe=W.length;me<xe;me++){const fe=s.get(W[me]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),d.memory.textures--),s.remove(W[me])}s.remove(P)}let k=0;function ne(){k=0}function se(){const P=k;return P>=l.maxTextures&&at("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),k+=1,P}function de(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function $(P,T){const W=s.get(P);if(P.isVideoTexture&&St(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const me=P.image;if(me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(W,P,T);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function I(P,T){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ee(W,P,T);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function z(P,T){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){ee(W,P,T);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function ce(P,T){const W=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Ee(W,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}const ve={[hh]:r.REPEAT,[ma]:r.CLAMP_TO_EDGE,[ph]:r.MIRRORED_REPEAT},O={[An]:r.NEAREST,[F1]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Ed]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},K={[j1]:r.NEVER,[q1]:r.ALWAYS,[G1]:r.LESS,[up]:r.LEQUAL,[V1]:r.EQUAL,[fp]:r.GEQUAL,[X1]:r.GREATER,[W1]:r.NOTEQUAL};function ue(P,T){if(T.type===Pi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===Ed||T.magFilter===bc||T.magFilter===Ls||T.minFilter===Dn||T.minFilter===Ed||T.minFilter===bc||T.minFilter===Ls)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ve[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ve[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ve[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,O[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==bc&&T.minFilter!==Ls||T.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ye(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",H));const me=T.source;let xe=v.get(me);xe===void 0&&(xe={},v.set(me,xe));const fe=de(T);if(fe!==P.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,W=!0),xe[fe].usedTimes++;const Le=xe[P.__cacheKey];Le!==void 0&&(xe[P.__cacheKey].usedTimes--,Le.usedTimes===0&&U(T)),P.__cacheKey=fe,P.__webglTexture=xe[fe].texture}return W}function Ue(P,T,W){return Math.floor(Math.floor(P/W)/T)}function qe(P,T,W,me){const fe=P.updateRanges;if(fe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,W,me,T.data);else{fe.sort((Me,Ae)=>Me.start-Ae.start);let Le=0;for(let Me=1;Me<fe.length;Me++){const Ae=fe[Le],Be=fe[Me],He=Ae.start+Ae.count,Pe=Ue(Be.start,T.width,4),lt=Ue(Ae.start,T.width,4);Be.start<=He+1&&Pe===lt&&Ue(Be.start+Be.count-1,T.width,4)===Pe?Ae.count=Math.max(Ae.count,Be.start+Be.count-Ae.start):(++Le,fe[Le]=Be)}fe.length=Le+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Me=0,Ae=fe.length;Me<Ae;Me++){const Be=fe[Me],He=Math.floor(Be.start/4),Pe=Math.ceil(Be.count/4),lt=He%T.width,X=Math.floor(He/T.width),Re=Pe,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,lt,X,Re,we,W,me,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,et)}}function ee(P,T,W){let me=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=r.TEXTURE_3D);const xe=ye(P,T),fe=T.source;i.bindTexture(me,P.__webglTexture,r.TEXTURE0+W);const Le=s.get(fe);if(fe.version!==Le.__version||xe===!0){i.activeTexture(r.TEXTURE0+W);const Ce=bt.getPrimaries(bt.workingColorSpace),Ze=T.colorSpace===is?null:bt.getPrimaries(T.colorSpace),et=T.colorSpace===is||Ce===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Me=C(T.image,!1,l.maxTextureSize);Me=wt(T,Me);const Ae=c.convert(T.format,T.colorSpace),Be=c.convert(T.type);let He=D(T.internalFormat,Ae,Be,T.colorSpace,T.isVideoTexture);ue(me,T);let Pe;const lt=T.mipmaps,X=T.isVideoTexture!==!0,Re=Le.__version===void 0||xe===!0,we=fe.dataReady,Ie=B(T,Me);if(T.isDepthTexture)He=L(T.format===Os,T.type),Re&&(X?i.texStorage2D(r.TEXTURE_2D,1,He,Me.width,Me.height):i.texImage2D(r.TEXTURE_2D,0,He,Me.width,Me.height,0,Ae,Be,null));else if(T.isDataTexture)if(lt.length>0){X&&Re&&i.texStorage2D(r.TEXTURE_2D,Ie,He,lt[0].width,lt[0].height);for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],X?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Be,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Be,Pe.data);T.generateMipmaps=!1}else X?(Re&&i.texStorage2D(r.TEXTURE_2D,Ie,He,Me.width,Me.height),we&&qe(T,Me,Ae,Be)):i.texImage2D(r.TEXTURE_2D,0,He,Me.width,Me.height,0,Ae,Be,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,lt[0].width,lt[0].height,Me.depth);for(let Te=0,pe=lt.length;Te<pe;Te++)if(Pe=lt[Te],T.format!==bi)if(Ae!==null)if(X){if(we)if(T.layerUpdates.size>0){const ke=Fv(Pe.width,Pe.height,T.format,T.type);for(const nt of T.layerUpdates){const Dt=Pe.data.subarray(nt*ke/Pe.data.BYTES_PER_ELEMENT,(nt+1)*ke/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,nt,Pe.width,Pe.height,1,Ae,Dt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Me.depth,Ae,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Me.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Me.depth,Ae,Be,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Me.depth,0,Ae,Be,Pe.data)}else{X&&Re&&i.texStorage2D(r.TEXTURE_2D,Ie,He,lt[0].width,lt[0].height);for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],T.format!==bi?Ae!==null?X?we&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Be,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Be,Pe.data)}else if(T.isDataArrayTexture)if(X){if(Re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,Me.width,Me.height,Me.depth),we)if(T.layerUpdates.size>0){const Te=Fv(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const ke=Me.data.subarray(pe*Te/Me.data.BYTES_PER_ELEMENT,(pe+1)*Te/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Ae,Be,ke)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ae,Be,Me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Me.width,Me.height,Me.depth,0,Ae,Be,Me.data);else if(T.isData3DTexture)X?(Re&&i.texStorage3D(r.TEXTURE_3D,Ie,He,Me.width,Me.height,Me.depth),we&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ae,Be,Me.data)):i.texImage3D(r.TEXTURE_3D,0,He,Me.width,Me.height,Me.depth,0,Ae,Be,Me.data);else if(T.isFramebufferTexture){if(Re)if(X)i.texStorage2D(r.TEXTURE_2D,Ie,He,Me.width,Me.height);else{let Te=Me.width,pe=Me.height;for(let ke=0;ke<Ie;ke++)i.texImage2D(r.TEXTURE_2D,ke,He,Te,pe,0,Ae,Be,null),Te>>=1,pe>>=1}}else if(lt.length>0){if(X&&Re){const Te=Ve(lt[0]);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],X?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae,Be,Pe):i.texImage2D(r.TEXTURE_2D,Te,He,Ae,Be,Pe);T.generateMipmaps=!1}else if(X){if(Re){const Te=Ve(Me);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}we&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Be,Me)}else i.texImage2D(r.TEXTURE_2D,0,He,Ae,Be,Me);S(T)&&y(me),Le.__version=fe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ee(P,T,W){if(T.image.length!==6)return;const me=ye(P,T),xe=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);const fe=s.get(xe);if(xe.version!==fe.__version||me===!0){i.activeTexture(r.TEXTURE0+W);const Le=bt.getPrimaries(bt.workingColorSpace),Ce=T.colorSpace===is?null:bt.getPrimaries(T.colorSpace),Ze=T.colorSpace===is||Le===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const et=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!et&&!Me?Ae[pe]=C(T.image[pe],!0,l.maxCubemapSize):Ae[pe]=Me?T.image[pe].image:T.image[pe],Ae[pe]=wt(T,Ae[pe]);const Be=Ae[0],He=c.convert(T.format,T.colorSpace),Pe=c.convert(T.type),lt=D(T.internalFormat,He,Pe,T.colorSpace),X=T.isVideoTexture!==!0,Re=fe.__version===void 0||me===!0,we=xe.dataReady;let Ie=B(T,Be);ue(r.TEXTURE_CUBE_MAP,T);let Te;if(et){X&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,lt,Be.width,Be.height);for(let pe=0;pe<6;pe++){Te=Ae[pe].mipmaps;for(let ke=0;ke<Te.length;ke++){const nt=Te[ke];T.format!==bi?He!==null?X?we&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,0,0,nt.width,nt.height,He,nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,lt,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,0,0,nt.width,nt.height,He,Pe,nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,lt,nt.width,nt.height,0,He,Pe,nt.data)}}}else{if(Te=T.mipmaps,X&&Re){Te.length>0&&Ie++;const pe=Ve(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,He,Pe,Ae[pe].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Ae[pe].width,Ae[pe].height,0,He,Pe,Ae[pe].data);for(let ke=0;ke<Te.length;ke++){const Dt=Te[ke].image[pe].image;X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,0,0,Dt.width,Dt.height,He,Pe,Dt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,lt,Dt.width,Dt.height,0,He,Pe,Dt.data)}}else{X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,He,Pe,Ae[pe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,He,Pe,Ae[pe]);for(let ke=0;ke<Te.length;ke++){const nt=Te[ke];X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,0,0,He,Pe,nt.image[pe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,lt,He,Pe,nt.image[pe])}}}S(T)&&y(r.TEXTURE_CUBE_MAP),fe.__version=xe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function be(P,T,W,me,xe,fe){const Le=c.convert(W.format,W.colorSpace),Ce=c.convert(W.type),Ze=D(W.internalFormat,Le,Ce,W.colorSpace),et=s.get(T),Me=s.get(W);if(Me.__renderTarget=T,!et.__hasExternalTextures){const Ae=Math.max(1,T.width>>fe),Be=Math.max(1,T.height>>fe);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?i.texImage3D(xe,fe,Ze,Ae,Be,T.depth,0,Le,Ce,null):i.texImage2D(xe,fe,Ze,Ae,Be,0,Le,Ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Yt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,xe,Me.__webglTexture,0,G(T)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,xe,Me.__webglTexture,fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(P,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const me=T.depthTexture,xe=me&&me.isDepthTexture?me.type:null,fe=L(T.stencilBuffer,xe),Le=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Yt(T)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(T),fe,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(T),fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,P)}else{const me=T.textures;for(let xe=0;xe<me.length;xe++){const fe=me[xe],Le=c.convert(fe.format,fe.colorSpace),Ce=c.convert(fe.type),Ze=D(fe.internalFormat,Le,Ce,fe.colorSpace);Yt(T)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(T),Ze,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(T),Ze,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(P,T,W){const me=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(T.depthTexture);if(xe.__renderTarget=T,(!xe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,T.depthTexture.addEventListener("dispose",H)),xe.__webglTexture===void 0){xe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),ue(r.TEXTURE_CUBE_MAP,T.depthTexture);const et=c.convert(T.depthTexture.format),Me=c.convert(T.depthTexture.type);let Ae;T.depthTexture.format===ba?Ae=r.DEPTH_COMPONENT24:T.depthTexture.format===Os&&(Ae=r.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ae,T.width,T.height,0,et,Me,null)}}else $(T.depthTexture,0);const fe=xe.__webglTexture,Le=G(T),Ce=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Ze=T.depthTexture.format===Os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===ba)Yt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ce,fe,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ce,fe,0);else if(T.depthTexture.format===Os)Yt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ce,fe,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ce,fe,0);else throw new Error("Unknown depthTexture format")}function $e(P){const T=s.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=me}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let me=0;me<6;me++)Ke(T.__webglFramebuffer[me],P,me);else{const me=P.texture.mipmaps;me&&me.length>0?Ke(T.__webglFramebuffer[0],P,0):Ke(T.__webglFramebuffer,P,0)}else if(W){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=r.createRenderbuffer(),Je(T.__webglDepthbuffer[me],P,!1);else{const xe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,fe)}}else{const me=P.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Je(T.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(P,T,W){const me=s.get(P);T!==void 0&&be(me.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&$e(P)}function pt(P){const T=P.texture,W=s.get(P),me=s.get(T);P.addEventListener("dispose",j);const xe=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Le=xe.length>1;if(Le||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=T.version,d.memory.textures++),fe){W.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Ce]=[];for(let Ze=0;Ze<T.mipmaps.length;Ze++)W.__webglFramebuffer[Ce][Ze]=r.createFramebuffer()}else W.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)W.__webglFramebuffer[Ce]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Le)for(let Ce=0,Ze=xe.length;Ce<Ze;Ce++){const et=s.get(xe[Ce]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&Yt(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Ze=xe[Ce];W.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ce]);const et=c.convert(Ze.format,Ze.colorSpace),Me=c.convert(Ze.type),Ae=D(Ze.internalFormat,et,Me,Ze.colorSpace,P.isXRRenderTarget===!0),Be=G(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ae,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ue(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)be(W.__webglFramebuffer[Ce][Ze],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ze);else be(W.__webglFramebuffer[Ce],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(T)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let Ce=0,Ze=xe.length;Ce<Ze;Ce++){const et=xe[Ce],Me=s.get(et);let Ae=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Me.__webglTexture),ue(Ae,et),be(W.__webglFramebuffer,P,et,r.COLOR_ATTACHMENT0+Ce,Ae,0),S(et)&&y(Ae)}i.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,me.__webglTexture),ue(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)be(W.__webglFramebuffer[Ze],P,T,r.COLOR_ATTACHMENT0,Ce,Ze);else be(W.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Ce,0);S(T)&&y(Ce),i.unbindTexture()}P.depthBuffer&&$e(P)}function yt(P){const T=P.textures;for(let W=0,me=T.length;W<me;W++){const xe=T[W];if(S(xe)){const fe=N(P),Le=s.get(xe).__webglTexture;i.bindTexture(fe,Le),y(fe),i.unbindTexture()}}}const Ot=[],ot=[];function Mt(P){if(P.samples>0){if(Yt(P)===!1){const T=P.textures,W=P.width,me=P.height;let xe=r.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(P),Ce=T.length>1;if(Ce)for(let et=0;et<T.length;et++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ze=P.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let et=0;et<T.length;et++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[et]);const Me=s.get(T[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,W,me,0,0,W,me,xe,r.NEAREST),g===!0&&(Ot.length=0,ot.length=0,Ot.push(r.COLOR_ATTACHMENT0+et),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ot.push(fe),ot.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let et=0;et<T.length;et++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Le.__webglColorRenderbuffer[et]);const Me=s.get(T[et]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,Me,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&g){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function G(P){return Math.min(l.maxSamples,P.samples)}function Yt(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function St(P){const T=d.render.frame;x.get(P)!==T&&(x.set(P,T),P.update())}function wt(P,T){const W=P.colorSpace,me=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Fr&&W!==is&&(bt.getTransfer(W)===Bt?(me!==bi||xe!==ui)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),T}function Ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=ne,this.setTexture2D=$,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=ce,this.rebindTextures=Jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function vR(r,e){function i(s,l=is){let c;const d=bt.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===sp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Bx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Fx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Px)return r.BYTE;if(s===Ix)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===ap)return r.INT;if(s===ki)return r.UNSIGNED_INT;if(s===Pi)return r.FLOAT;if(s===Sa)return r.HALF_FLOAT;if(s===zx)return r.ALPHA;if(s===Hx)return r.RGB;if(s===bi)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Os)return r.DEPTH_STENCIL;if(s===kx)return r.RED;if(s===op)return r.RED_INTEGER;if(s===Br)return r.RG;if(s===lp)return r.RG_INTEGER;if(s===cp)return r.RGBA_INTEGER;if(s===Yc||s===Zc||s===Kc||s===Qc)if(d===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mh||s===gh||s===vh||s===xh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_h||s===yh||s===Sh||s===bh||s===Mh||s===Eh||s===Th)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===_h||s===yh)return d===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Sh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===bh)return c.COMPRESSED_R11_EAC;if(s===Mh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Eh)return c.COMPRESSED_RG11_EAC;if(s===Th)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ah||s===wh||s===Rh||s===Ch||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh||s===Ph||s===Ih||s===Bh||s===Fh||s===zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ah)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ch)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ih)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hh||s===kh||s===jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Hh)return d===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gh||s===Vh||s===Xh||s===Wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Gh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const xR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Qx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Mi({vertexShader:xR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ji(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SR extends jr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,m="local-floor",g=1,p=null,x=null,_=null,v=null,b=null,M=null;const C=typeof XRWebGLBinding<"u",S=new yR,y={},N=i.getContextAttributes();let D=null,L=null;const B=[],H=[],j=new Lt;let A=null;const U=new yi;U.viewport=new on;const he=new yi;he.viewport=new on;const k=[U,he],ne=new UT;let se=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Ee=B[ee];return Ee===void 0&&(Ee=new Ud,B[ee]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ee){let Ee=B[ee];return Ee===void 0&&(Ee=new Ud,B[ee]=Ee),Ee.getGripSpace()},this.getHand=function(ee){let Ee=B[ee];return Ee===void 0&&(Ee=new Ud,B[ee]=Ee),Ee.getHandSpace()};function $(ee){const Ee=H.indexOf(ee.inputSource);if(Ee===-1)return;const be=B[Ee];be!==void 0&&(be.update(ee.inputSource,ee.frame,p||d),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function I(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",z);for(let ee=0;ee<B.length;ee++){const Ee=H[ee];Ee!==null&&(H[ee]=null,B[ee].disconnect(Ee))}se=null,de=null,S.reset();for(const ee in y)delete y[ee];e.setRenderTarget(D),b=null,v=null,_=null,l=null,L=null,qe.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){m=ee,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",I),l.addEventListener("inputsourceschange",z),N.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(j),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Je=null,Ke=null;N.depth&&(Ke=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=N.stencil?Os:ba,Je=N.stencil?el:ki);const $e={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer($e),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Fi(v.textureWidth,v.textureHeight,{format:bi,type:ui,depthTexture:new tl(v.textureWidth,v.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Fi(b.framebufferWidth,b.framebufferHeight,{format:bi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await l.requestReferenceSpace(m),qe.setContext(l),qe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(ee){for(let Ee=0;Ee<ee.removed.length;Ee++){const be=ee.removed[Ee],Je=H.indexOf(be);Je>=0&&(H[Je]=null,B[Je].disconnect(be))}for(let Ee=0;Ee<ee.added.length;Ee++){const be=ee.added[Ee];let Je=H.indexOf(be);if(Je===-1){for(let $e=0;$e<B.length;$e++)if($e>=H.length){H.push(be),Je=$e;break}else if(H[$e]===null){H[$e]=be,Je=$e;break}if(Je===-1)break}const Ke=B[Je];Ke&&Ke.connect(be)}}const ce=new le,ve=new le;function O(ee,Ee,be){ce.setFromMatrixPosition(Ee.matrixWorld),ve.setFromMatrixPosition(be.matrixWorld);const Je=ce.distanceTo(ve),Ke=Ee.projectionMatrix.elements,$e=be.projectionMatrix.elements,Jt=Ke[14]/(Ke[10]-1),pt=Ke[14]/(Ke[10]+1),yt=(Ke[9]+1)/Ke[5],Ot=(Ke[9]-1)/Ke[5],ot=(Ke[8]-1)/Ke[0],Mt=($e[8]+1)/$e[0],G=Jt*ot,Yt=Jt*Mt,St=Je/(-ot+Mt),wt=St*-ot;if(Ee.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(wt),ee.translateZ(St),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ke[10]===-1)ee.projectionMatrix.copy(Ee.projectionMatrix),ee.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const Ve=Jt+St,P=pt+St,T=G-wt,W=Yt+(Je-wt),me=yt*pt/P*Ve,xe=Ot*pt/P*Ve;ee.projectionMatrix.makePerspective(T,W,me,xe,Ve,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function K(ee,Ee){Ee===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Ee.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let Ee=ee.near,be=ee.far;S.texture!==null&&(S.depthNear>0&&(Ee=S.depthNear),S.depthFar>0&&(be=S.depthFar)),ne.near=he.near=U.near=Ee,ne.far=he.far=U.far=be,(se!==ne.near||de!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),se=ne.near,de=ne.far),ne.layers.mask=ee.layers.mask|6,U.layers.mask=ne.layers.mask&-5,he.layers.mask=ne.layers.mask&-3;const Je=ee.parent,Ke=ne.cameras;K(ne,Je);for(let $e=0;$e<Ke.length;$e++)K(Ke[$e],Je);Ke.length===2?O(ne,U,he):ne.projectionMatrix.copy(U.projectionMatrix),ue(ee,ne,Je)};function ue(ee,Ee,be){be===null?ee.matrix.copy(Ee.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Ee.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Ee.projectionMatrix),ee.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=qh*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(v===null&&b===null))return g},this.setFoveation=function(ee){g=ee,v!==null&&(v.fixedFoveation=ee),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(ee){return y[ee]};let ye=null;function Ue(ee,Ee){if(x=Ee.getViewerPose(p||d),M=Ee,x!==null){const be=x.views;b!==null&&(e.setRenderTargetFramebuffer(L,b.framebuffer),e.setRenderTarget(L));let Je=!1;be.length!==ne.cameras.length&&(ne.cameras.length=0,Je=!0);for(let pt=0;pt<be.length;pt++){const yt=be[pt];let Ot=null;if(b!==null)Ot=b.getViewport(yt);else{const Mt=_.getViewSubImage(v,yt);Ot=Mt.viewport,pt===0&&(e.setRenderTargetTextures(L,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(L))}let ot=k[pt];ot===void 0&&(ot=new yi,ot.layers.enable(pt),ot.viewport=new on,k[pt]=ot),ot.matrix.fromArray(yt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(yt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),pt===0&&(ne.matrix.copy(ot.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Je===!0&&ne.cameras.push(ot)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const pt=_.getDepthInformation(be[0]);pt&&pt.isValid&&pt.texture&&S.init(pt,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let pt=0;pt<be.length;pt++){const yt=be[pt].camera;if(yt){let Ot=y[yt];Ot||(Ot=new Qx,y[yt]=Ot);const ot=_.getCameraImage(yt);Ot.sourceTexture=ot}}}}for(let be=0;be<B.length;be++){const Je=H[be],Ke=B[be];Je!==null&&Ke!==void 0&&Ke.update(Je,Ee,p||d)}ye&&ye(ee,Ee),Ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Ee}),M=null}const qe=new e_;qe.setAnimationLoop(Ue),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}}const Cs=new Ma,bR=new fn;function MR(r,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,Jx(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,N,D,L){y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),x(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&b(S,y,L)):y.isMeshMatcapMaterial?(c(S,y),M(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),C(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&m(S,y)):y.isPointsMaterial?g(S,y,N,D):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Vn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Vn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),D=N.envMap,L=N.envMapRotation;D&&(S.envMap.value=D,Cs.copy(L),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),S.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(Cs)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function m(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function g(S,y,N,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=D*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function x(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function b(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ER(r,e,i,s){let l={},c={},d=[];const m=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,D){const L=D.program;s.uniformBlockBinding(N,L)}function p(N,D){let L=l[N.id];L===void 0&&(M(N),L=x(N),l[N.id]=L,N.addEventListener("dispose",S));const B=D.program;s.updateUBOMapping(N,B);const H=e.render.frame;c[N.id]!==H&&(v(N),c[N.id]=H)}function x(N){const D=_();N.__bindingPointIndex=D;const L=r.createBuffer(),B=N.__size,H=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,L),L}function _(){for(let N=0;N<m;N++)if(d.indexOf(N)===-1)return d.push(N),N;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const D=l[N.id],L=N.uniforms,B=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let H=0,j=L.length;H<j;H++){const A=Array.isArray(L[H])?L[H]:[L[H]];for(let U=0,he=A.length;U<he;U++){const k=A[U];if(b(k,H,U,B)===!0){const ne=k.__offset,se=Array.isArray(k.value)?k.value:[k.value];let de=0;for(let $=0;$<se.length;$++){const I=se[$],z=C(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,ne+de,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,de),de+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(N,D,L,B){const H=N.value,j=D+"_"+L;if(B[j]===void 0)return typeof H=="number"||typeof H=="boolean"?B[j]=H:B[j]=H.clone(),!0;{const A=B[j];if(typeof H=="number"||typeof H=="boolean"){if(A!==H)return B[j]=H,!0}else if(A.equals(H)===!1)return A.copy(H),!0}return!1}function M(N){const D=N.uniforms;let L=0;const B=16;for(let j=0,A=D.length;j<A;j++){const U=Array.isArray(D[j])?D[j]:[D[j]];for(let he=0,k=U.length;he<k;he++){const ne=U[he],se=Array.isArray(ne.value)?ne.value:[ne.value];for(let de=0,$=se.length;de<$;de++){const I=se[de],z=C(I),ce=L%B,ve=ce%z.boundary,O=ce+ve;L+=ve,O!==0&&B-O<z.storage&&(L+=B-O),ne.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=L,L+=z.storage}}}const H=L%B;return H>0&&(L+=B-H),N.__size=L,N.__cache={},this}function C(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",N),D}function S(N){const D=N.target;D.removeEventListener("dispose",S);const L=d.indexOf(D.__bindingPointIndex);d.splice(L,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function y(){for(const N in l)r.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:g,update:p,dispose:y}}const TR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function AR(){return Li===null&&(Li=new _T(TR,16,16,Br,Sa),Li.name="DFG_LUT",Li.minFilter=Dn,Li.magFilter=Dn,Li.wrapS=ma,Li.wrapT=ma,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class wR{constructor(e={}){const{canvas:i=Z1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:b=ui}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const C=b,S=new Set([cp,lp,op]),y=new Set([ui,ki,$o,el,sp,rp]),N=new Uint32Array(4),D=new Int32Array(4);let L=null,B=null;const H=[],j=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let he=!1;this._outputColorSpace=ci;let k=0,ne=0,se=null,de=-1,$=null;const I=new on,z=new on;let ce=null;const ve=new kt(0);let O=0,K=i.width,ue=i.height,ye=1,Ue=null,qe=null;const ee=new on(0,0,K,ue),Ee=new on(0,0,K,ue);let be=!1;const Je=new Zx;let Ke=!1,$e=!1;const Jt=new fn,pt=new le,yt=new on,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Mt(){return se===null?ye:1}let G=s;function Yt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",ke,!1),i.addEventListener("webglcontextrestored",nt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),G===null){const q="webgl2";if(G=Yt(q,R),G===null)throw Yt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw At("WebGLRenderer: "+R.message),R}let St,wt,Ve,P,T,W,me,xe,fe,Le,Ce,Ze,et,Me,Ae,Be,He,Pe,lt,X,Re,we,Ie;function Te(){St=new ww(G),St.init(),Re=new vR(G,St),wt=new _w(G,St,e,Re),Ve=new mR(G,St),wt.reversedDepthBuffer&&v&&Ve.buffers.depth.setReversed(!0),P=new Nw(G),T=new tR,W=new gR(G,St,Ve,T,wt,Re,P),me=new Aw(U),xe=new PT(G),we=new vw(G,xe),fe=new Rw(G,xe,P,we),Le=new Uw(G,fe,xe,we,P),Pe=new Dw(G,wt,W),Ae=new yw(T),Ce=new eR(U,me,St,wt,we,Ae),Ze=new MR(U,T),et=new iR,Me=new cR(St),He=new gw(U,me,Ve,Le,M,g),Be=new pR(U,Le,wt),Ie=new ER(G,P,wt,Ve),lt=new xw(G,St,P),X=new Cw(G,St,P),P.programs=Ce.programs,U.capabilities=wt,U.extensions=St,U.properties=T,U.renderLists=et,U.shadowMap=Be,U.state=Ve,U.info=P}Te(),C!==ui&&(A=new Ow(C,i.width,i.height,l,c));const pe=new SR(U,G);this.xr=pe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=St.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=St.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(R){R!==void 0&&(ye=R,this.setSize(K,ue,!1))},this.getSize=function(R){return R.set(K,ue)},this.setSize=function(R,q,oe=!0){if(pe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,ue=q,i.width=Math.floor(R*ye),i.height=Math.floor(q*ye),oe===!0&&(i.style.width=R+"px",i.style.height=q+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(K*ye,ue*ye).floor()},this.setDrawingBufferSize=function(R,q,oe){K=R,ue=q,ye=oe,i.width=Math.floor(R*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,oe,ie){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,oe,ie),Ve.viewport(I.copy(ee).multiplyScalar(ye).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,q,oe,ie){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,q,oe,ie),Ve.scissor(z.copy(Ee).multiplyScalar(ye).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Ve.setScissorTest(be=R)},this.setOpaqueSort=function(R){Ue=R},this.setTransparentSort=function(R){qe=R},this.getClearColor=function(R){return R.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,oe=!0){let ie=0;if(R){let Q=!1;if(se!==null){const De=se.texture.format;Q=S.has(De)}if(Q){const De=se.texture.type,Fe=y.has(De),Ne=He.getClearColor(),je=He.getClearAlpha(),Xe=Ne.r,st=Ne.g,rt=Ne.b;Fe?(N[0]=Xe,N[1]=st,N[2]=rt,N[3]=je,G.clearBufferuiv(G.COLOR,0,N)):(D[0]=Xe,D[1]=st,D[2]=rt,D[3]=je,G.clearBufferiv(G.COLOR,0,D))}else ie|=G.COLOR_BUFFER_BIT}q&&(ie|=G.DEPTH_BUFFER_BIT),oe&&(ie|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&G.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ke,!1),i.removeEventListener("webglcontextrestored",nt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),He.dispose(),et.dispose(),Me.dispose(),T.dispose(),me.dispose(),Le.dispose(),we.dispose(),Ie.dispose(),Ce.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Bs),pe.removeEventListener("sessionend",cl),Vi.stop()};function ke(R){R.preventDefault(),Sv("WebGLRenderer: Context Lost."),he=!0}function nt(){Sv("WebGLRenderer: Context Restored."),he=!1;const R=P.autoReset,q=Be.enabled,oe=Be.autoUpdate,ie=Be.needsUpdate,Q=Be.type;Te(),P.autoReset=R,Be.enabled=q,Be.autoUpdate=oe,Be.needsUpdate=ie,Be.type=Q}function Dt(R){At("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){const q=R.target;q.removeEventListener("dispose",Et),fi(q)}function fi(R){vn(R),T.remove(R)}function vn(R){const q=T.get(R).programs;q!==void 0&&(q.forEach(function(oe){Ce.releaseProgram(oe)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,oe,ie,Q,De){q===null&&(q=Ot);const Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,Ne=ul(R,q,oe,ie,Q);Ve.setMaterial(ie,Fe);let je=oe.index,Xe=1;if(ie.wireframe===!0){if(je=fe.getWireframeAttribute(oe),je===void 0)return;Xe=2}const st=oe.drawRange,rt=oe.attributes.position;let ze=st.start*Xe,Rt=(st.start+st.count)*Xe;De!==null&&(ze=Math.max(ze,De.start*Xe),Rt=Math.min(Rt,(De.start+De.count)*Xe)),je!==null?(ze=Math.max(ze,0),Rt=Math.min(Rt,je.count)):rt!=null&&(ze=Math.max(ze,0),Rt=Math.min(Rt,rt.count));const Zt=Rt-ze;if(Zt<0||Zt===1/0)return;we.setup(Q,ie,Ne,oe,je);let jt,Ct=lt;if(je!==null&&(jt=xe.get(je),Ct=X,Ct.setIndex(jt)),Q.isMesh)ie.wireframe===!0?(Ve.setLineWidth(ie.wireframeLinewidth*Mt()),Ct.setMode(G.LINES)):Ct.setMode(G.TRIANGLES);else if(Q.isLine){let nn=ie.linewidth;nn===void 0&&(nn=1),Ve.setLineWidth(nn*Mt()),Q.isLineSegments?Ct.setMode(G.LINES):Q.isLineLoop?Ct.setMode(G.LINE_LOOP):Ct.setMode(G.LINE_STRIP)}else Q.isPoints?Ct.setMode(G.POINTS):Q.isSprite&&Ct.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)iu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const nn=Q._multiDrawStarts,We=Q._multiDrawCounts,Vt=Q._multiDrawCount,vt=je?xe.get(je).bytesPerElement:1,In=T.get(ie).currentProgram.getUniforms();for(let Bn=0;Bn<Vt;Bn++)In.setValue(G,"_gl_DrawID",Bn),Ct.render(nn[Bn]/vt,We[Bn])}else if(Q.isInstancedMesh)Ct.renderInstances(ze,Zt,Q.count);else if(oe.isInstancedBufferGeometry){const nn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,We=Math.min(oe.instanceCount,nn);Ct.renderInstances(ze,Zt,We)}else Ct.render(ze,Zt)};function dn(R,q,oe){R.transparent===!0&&R.side===pa&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,Ei(R,q,oe),R.side=ss,R.needsUpdate=!0,Ei(R,q,oe),R.side=pa):Ei(R,q,oe)}this.compile=function(R,q,oe=null){oe===null&&(oe=R),B=Me.get(oe),B.init(q),j.push(B),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),R!==oe&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),B.setupLights();const ie=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const De=Q.material;if(De)if(Array.isArray(De))for(let Fe=0;Fe<De.length;Fe++){const Ne=De[Fe];dn(Ne,oe,Q),ie.add(Ne)}else dn(De,oe,Q),ie.add(De)}),B=j.pop(),ie},this.compileAsync=function(R,q,oe=null){const ie=this.compile(R,q,oe);return new Promise(Q=>{function De(){if(ie.forEach(function(Fe){T.get(Fe).currentProgram.isReady()&&ie.delete(Fe)}),ie.size===0){Q(R);return}setTimeout(De,10)}St.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let xn=null;function Aa(R){xn&&xn(R)}function Bs(){Vi.stop()}function cl(){Vi.start()}const Vi=new e_;Vi.setAnimationLoop(Aa),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(R){xn=R,pe.setAnimationLoop(R),R===null?Vi.stop():Vi.start()},pe.addEventListener("sessionstart",Bs),pe.addEventListener("sessionend",cl),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(he===!0)return;const oe=pe.enabled===!0&&pe.isPresenting===!0,ie=A!==null&&(se===null||oe)&&A.begin(U,se);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(q),q=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,se),B=Me.get(R,j.length),B.init(q),j.push(B),Jt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Je.setFromProjectionMatrix(Jt,Ii,q.reversedDepth),$e=this.localClippingEnabled,Ke=Ae.init(this.clippingPlanes,$e),L=et.get(R,H.length),L.init(),H.push(L),pe.enabled===!0&&pe.isPresenting===!0){const Fe=U.xr.getDepthSensingMesh();Fe!==null&&Fs(Fe,q,-1/0,U.sortObjects)}Fs(R,q,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(Ue,qe),ot=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ot&&He.addToRenderList(L,R),this.info.render.frame++,Ke===!0&&Ae.beginShadows();const Q=B.state.shadowsArray;if(Be.render(Q,R,q),Ke===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&A.hasRenderPass())===!1){const Fe=L.opaque,Ne=L.transmissive;if(B.setupLights(),q.isArrayCamera){const je=q.cameras;if(Ne.length>0)for(let Xe=0,st=je.length;Xe<st;Xe++){const rt=je[Xe];zs(Fe,Ne,R,rt)}ot&&He.render(R);for(let Xe=0,st=je.length;Xe<st;Xe++){const rt=je[Xe];wa(L,R,rt,rt.viewport)}}else Ne.length>0&&zs(Fe,Ne,R,q),ot&&He.render(R),wa(L,R,q)}se!==null&&ne===0&&(W.updateMultisampleRenderTarget(se),W.updateRenderTargetMipmap(se)),ie&&A.end(U),R.isScene===!0&&R.onAfterRender(U,R,q),we.resetDefaultState(),de=-1,$=null,j.pop(),j.length>0?(B=j[j.length-1],Ke===!0&&Ae.setGlobalState(U.clippingPlanes,B.state.camera)):B=null,H.pop(),H.length>0?L=H[H.length-1]:L=null};function Fs(R,q,oe,ie){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Je.intersectsSprite(R)){ie&&yt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Jt);const Fe=Le.update(R),Ne=R.material;Ne.visible&&L.push(R,Fe,Ne,oe,yt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Je.intersectsObject(R))){const Fe=Le.update(R),Ne=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),yt.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),yt.copy(Fe.boundingSphere.center)),yt.applyMatrix4(R.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ne)){const je=Fe.groups;for(let Xe=0,st=je.length;Xe<st;Xe++){const rt=je[Xe],ze=Ne[rt.materialIndex];ze&&ze.visible&&L.push(R,Fe,ze,oe,yt.z,rt)}}else Ne.visible&&L.push(R,Fe,Ne,oe,yt.z,null)}}const De=R.children;for(let Fe=0,Ne=De.length;Fe<Ne;Fe++)Fs(De[Fe],q,oe,ie)}function wa(R,q,oe,ie){const{opaque:Q,transmissive:De,transparent:Fe}=R;B.setupLightsView(oe),Ke===!0&&Ae.setGlobalState(U.clippingPlanes,oe),ie&&Ve.viewport(I.copy(ie)),Q.length>0&&di(Q,q,oe),De.length>0&&di(De,q,oe),Fe.length>0&&di(Fe,q,oe),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function zs(R,q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ie.id]===void 0){const ze=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ie.id]=new Fi(1,1,{generateMipmaps:!0,type:ze?Sa:ui,minFilter:Ls,samples:Math.max(4,wt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const De=B.state.transmissionRenderTarget[ie.id],Fe=ie.viewport||I;De.setSize(Fe.z*U.transmissionResolutionScale,Fe.w*U.transmissionResolutionScale);const Ne=U.getRenderTarget(),je=U.getActiveCubeFace(),Xe=U.getActiveMipmapLevel();U.setRenderTarget(De),U.getClearColor(ve),O=U.getClearAlpha(),O<1&&U.setClearColor(16777215,.5),U.clear(),ot&&He.render(oe);const st=U.toneMapping;U.toneMapping=Bi;const rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),B.setupLightsView(ie),Ke===!0&&Ae.setGlobalState(U.clippingPlanes,ie),di(R,oe,ie),W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De),St.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Rt=0,Zt=q.length;Rt<Zt;Rt++){const jt=q[Rt],{object:Ct,geometry:nn,material:We,group:Vt}=jt;if(We.side===pa&&Ct.layers.test(ie.layers)){const vt=We.side;We.side=Vn,We.needsUpdate=!0,Xi(Ct,oe,ie,nn,We,Vt),We.side=vt,We.needsUpdate=!0,ze=!0}}ze===!0&&(W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De))}U.setRenderTarget(Ne,je,Xe),U.setClearColor(ve,O),rt!==void 0&&(ie.viewport=rt),U.toneMapping=st}function di(R,q,oe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,De=R.length;Q<De;Q++){const Fe=R[Q],{object:Ne,geometry:je,group:Xe}=Fe;let st=Fe.material;st.allowOverride===!0&&ie!==null&&(st=ie),Ne.layers.test(oe.layers)&&Xi(Ne,q,oe,je,st,Xe)}}function Xi(R,q,oe,ie,Q,De){R.onBeforeRender(U,q,oe,ie,Q,De),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(U,q,oe,ie,R,De),Q.transparent===!0&&Q.side===pa&&Q.forceSinglePass===!1?(Q.side=Vn,Q.needsUpdate=!0,U.renderBufferDirect(oe,q,ie,Q,R,De),Q.side=ss,Q.needsUpdate=!0,U.renderBufferDirect(oe,q,ie,Q,R,De),Q.side=pa):U.renderBufferDirect(oe,q,ie,Q,R,De),R.onAfterRender(U,q,oe,ie,Q,De)}function Ei(R,q,oe){q.isScene!==!0&&(q=Ot);const ie=T.get(R),Q=B.state.lights,De=B.state.shadowsArray,Fe=Q.state.version,Ne=Ce.getParameters(R,Q.state,De,q,oe),je=Ce.getProgramCacheKey(Ne);let Xe=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const st=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=me.get(R.envMap||ie.environment,st),ie.envMapRotation=ie.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Et),Xe=new Map,ie.programs=Xe);let rt=Xe.get(je);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===Fe)return tn(R,Ne),rt}else Ne.uniforms=Ce.getUniforms(R),R.onBeforeCompile(Ne,U),rt=Ce.acquireProgram(Ne,je),Xe.set(je,rt),ie.uniforms=Ne.uniforms;const ze=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),tn(R,Ne),ie.needsLights=qi(R),ie.lightsStateVersion=Fe,ie.needsLights&&(ze.ambientLightColor.value=Q.state.ambient,ze.lightProbe.value=Q.state.probe,ze.directionalLights.value=Q.state.directional,ze.directionalLightShadows.value=Q.state.directionalShadow,ze.spotLights.value=Q.state.spot,ze.spotLightShadows.value=Q.state.spotShadow,ze.rectAreaLights.value=Q.state.rectArea,ze.ltc_1.value=Q.state.rectAreaLTC1,ze.ltc_2.value=Q.state.rectAreaLTC2,ze.pointLights.value=Q.state.point,ze.pointLightShadows.value=Q.state.pointShadow,ze.hemisphereLights.value=Q.state.hemi,ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ze.spotLightMatrix.value=Q.state.spotLightMatrix,ze.spotLightMap.value=Q.state.spotLightMap,ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=rt,ie.uniformsList=null,rt}function Wi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Jc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function tn(R,q){const oe=T.get(R);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ul(R,q,oe,ie,Q){q.isScene!==!0&&(q=Ot),W.resetTextureUnits();const De=q.fog,Fe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Ne=se===null?U.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Fr,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Xe=me.get(ie.envMap||Fe,je),st=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ze=!!oe.morphAttributes.position,Rt=!!oe.morphAttributes.normal,Zt=!!oe.morphAttributes.color;let jt=Bi;ie.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(jt=U.toneMapping);const Ct=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,nn=Ct!==void 0?Ct.length:0,We=T.get(ie),Vt=B.state.lights;if(Ke===!0&&($e===!0||R!==$)){const an=R===$&&ie.id===de;Ae.setState(ie,R,an)}let vt=!1;ie.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Vt.state.version||We.outputColorSpace!==Ne||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==Xe||ie.fog===!0&&We.fog!==De||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ae.numPlanes||We.numIntersection!==Ae.numIntersection)||We.vertexAlphas!==st||We.vertexTangents!==rt||We.morphTargets!==ze||We.morphNormals!==Rt||We.morphColors!==Zt||We.toneMapping!==jt||We.morphTargetsCount!==nn)&&(vt=!0):(vt=!0,We.__version=ie.version);let In=We.currentProgram;vt===!0&&(In=Ei(ie,q,Q));let Bn=!1,Fn=!1,Yi=!1;const Ut=In.getUniforms(),Wt=We.uniforms;if(Ve.useProgram(In.program)&&(Bn=!0,Fn=!0,Yi=!0),ie.id!==de&&(de=ie.id,Fn=!0),Bn||$!==R){Ve.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ut.setValue(G,"projectionMatrix",R.projectionMatrix),Ut.setValue(G,"viewMatrix",R.matrixWorldInverse);const hi=Ut.map.cameraPosition;hi!==void 0&&hi.setValue(G,pt.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,Fn=!0,Yi=!0)}if(We.needsLights&&(Vt.state.directionalShadowMap.length>0&&Ut.setValue(G,"directionalShadowMap",Vt.state.directionalShadowMap,W),Vt.state.spotShadowMap.length>0&&Ut.setValue(G,"spotShadowMap",Vt.state.spotShadowMap,W),Vt.state.pointShadowMap.length>0&&Ut.setValue(G,"pointShadowMap",Vt.state.pointShadowMap,W)),Q.isSkinnedMesh){Ut.setOptional(G,Q,"bindMatrix"),Ut.setOptional(G,Q,"bindMatrixInverse");const an=Q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ut.setValue(G,"boneTexture",an.boneTexture,W))}Q.isBatchedMesh&&(Ut.setOptional(G,Q,"batchingTexture"),Ut.setValue(G,"batchingTexture",Q._matricesTexture,W),Ut.setOptional(G,Q,"batchingIdTexture"),Ut.setValue(G,"batchingIdTexture",Q._indirectTexture,W),Ut.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ut.setValue(G,"batchingColorTexture",Q._colorsTexture,W));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Pe.update(Q,oe,In),(Fn||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,Ut.setValue(G,"receiveShadow",Q.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Wt.envMapIntensity.value=q.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=AR()),Fn&&(Ut.setValue(G,"toneMappingExposure",U.toneMappingExposure),We.needsLights&&fl(Wt,Yi),De&&ie.fog===!0&&Ze.refreshFogUniforms(Wt,De),Ze.refreshMaterialUniforms(Wt,ie,ye,ue,B.state.transmissionRenderTarget[R.id]),Jc.upload(G,Wi(We),Wt,W)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Jc.upload(G,Wi(We),Wt,W),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ut.setValue(G,"center",Q.center),Ut.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Ut.setValue(G,"normalMatrix",Q.normalMatrix),Ut.setValue(G,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const an=ie.uniformsGroups;for(let hi=0,Ai=an.length;hi<Ai;hi++){const hl=an[hi];Ie.update(hl,In),Ie.bind(hl,In)}}return In}function fl(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function qi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(R,q,oe){const ie=T.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=q,T.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const oe=T.get(R);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const Ra=G.createFramebuffer();this.setRenderTarget=function(R,q=0,oe=0){se=R,k=q,ne=oe;let ie=null,Q=!1,De=!1;if(R){const Ne=T.get(R);if(Ne.__useDefaultFramebuffer!==void 0){Ve.bindFramebuffer(G.FRAMEBUFFER,Ne.__webglFramebuffer),I.copy(R.viewport),z.copy(R.scissor),ce=R.scissorTest,Ve.viewport(I),Ve.scissor(z),Ve.setScissorTest(ce),de=-1;return}else if(Ne.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Ne.__hasExternalTextures)W.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const st=R.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&T.has(st)&&(R.width!==st.image.width||R.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const Xe=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?ie=Xe[q][oe]:ie=Xe[q],Q=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?ie=T.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?ie=Xe[oe]:ie=Xe,I.copy(R.viewport),z.copy(R.scissor),ce=R.scissorTest}else I.copy(ee).multiplyScalar(ye).floor(),z.copy(Ee).multiplyScalar(ye).floor(),ce=be;if(oe!==0&&(ie=Ra),Ve.bindFramebuffer(G.FRAMEBUFFER,ie)&&Ve.drawBuffers(R,ie),Ve.viewport(I),Ve.scissor(z),Ve.setScissorTest(ce),Q){const Ne=T.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,oe)}else if(De){const Ne=q;for(let je=0;je<R.textures.length;je++){const Xe=T.get(R.textures[je]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+je,Xe.__webglTexture,oe,Ne)}}else if(R!==null&&oe!==0){const Ne=T.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ne.__webglTexture,oe)}de=-1},this.readRenderTargetPixels=function(R,q,oe,ie,Q,De,Fe,Ne=0){if(!(R&&R.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(je=je[Fe]),je){Ve.bindFramebuffer(G.FRAMEBUFFER,je);try{const Xe=R.textures[Ne],st=Xe.format,rt=Xe.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),!wt.textureFormatReadable(st)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(rt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ie&&oe>=0&&oe<=R.height-Q&&G.readPixels(q,oe,ie,Q,Re.convert(st),Re.convert(rt),De)}finally{const Xe=se!==null?T.get(se).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,q,oe,ie,Q,De,Fe,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(je=je[Fe]),je)if(q>=0&&q<=R.width-ie&&oe>=0&&oe<=R.height-Q){Ve.bindFramebuffer(G.FRAMEBUFFER,je);const Xe=R.textures[Ne],st=Xe.format,rt=Xe.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),!wt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ze),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(q,oe,ie,Q,Re.convert(st),Re.convert(rt),0);const Rt=se!==null?T.get(se).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,Rt);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await K1(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ze),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.deleteBuffer(ze),G.deleteSync(Zt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,oe=0){const ie=Math.pow(2,-oe),Q=Math.floor(R.image.width*ie),De=Math.floor(R.image.height*ie),Fe=q!==null?q.x:0,Ne=q!==null?q.y:0;W.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Fe,Ne,Q,De),Ve.unbindTexture()};const uu=G.createFramebuffer(),dl=G.createFramebuffer();this.copyTextureToTexture=function(R,q,oe=null,ie=null,Q=0,De=0){let Fe,Ne,je,Xe,st,rt,ze,Rt,Zt;const jt=R.isCompressedTexture?R.mipmaps[De]:R.image;if(oe!==null)Fe=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,je=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,st=oe.min.y,rt=oe.isBox3?oe.min.z:0;else{const Wt=Math.pow(2,-Q);Fe=Math.floor(jt.width*Wt),Ne=Math.floor(jt.height*Wt),R.isDataArrayTexture?je=jt.depth:R.isData3DTexture?je=Math.floor(jt.depth*Wt):je=1,Xe=0,st=0,rt=0}ie!==null?(ze=ie.x,Rt=ie.y,Zt=ie.z):(ze=0,Rt=0,Zt=0);const Ct=Re.convert(q.format),nn=Re.convert(q.type);let We;q.isData3DTexture?(W.setTexture3D(q,0),We=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),We=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),We=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Vt=G.getParameter(G.UNPACK_ROW_LENGTH),vt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),In=G.getParameter(G.UNPACK_SKIP_PIXELS),Bn=G.getParameter(G.UNPACK_SKIP_ROWS),Fn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,jt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xe),G.pixelStorei(G.UNPACK_SKIP_ROWS,st),G.pixelStorei(G.UNPACK_SKIP_IMAGES,rt);const Yi=R.isDataArrayTexture||R.isData3DTexture,Ut=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Wt=T.get(R),Ti=T.get(q),an=T.get(Wt.__renderTarget),hi=T.get(Ti.__renderTarget);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,an.__webglFramebuffer),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Ai=0;Ai<je;Ai++)Yi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(R).__webglTexture,Q,rt+Ai),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(q).__webglTexture,De,Zt+Ai)),G.blitFramebuffer(Xe,st,Fe,Ne,ze,Rt,Fe,Ne,G.DEPTH_BUFFER_BIT,G.NEAREST);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||T.has(R)){const Wt=T.get(R),Ti=T.get(q);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,uu),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,dl);for(let an=0;an<je;an++)Yi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.__webglTexture,Q,rt+an):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Wt.__webglTexture,Q),Ut?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ti.__webglTexture,De,Zt+an):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ti.__webglTexture,De),Q!==0?G.blitFramebuffer(Xe,st,Fe,Ne,ze,Rt,Fe,Ne,G.COLOR_BUFFER_BIT,G.NEAREST):Ut?G.copyTexSubImage3D(We,De,ze,Rt,Zt+an,Xe,st,Fe,Ne):G.copyTexSubImage2D(We,De,ze,Rt,Xe,st,Fe,Ne);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ut?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(We,De,ze,Rt,Zt,Fe,Ne,je,Ct,nn,jt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(We,De,ze,Rt,Zt,Fe,Ne,je,Ct,jt.data):G.texSubImage3D(We,De,ze,Rt,Zt,Fe,Ne,je,Ct,nn,jt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,ze,Rt,Fe,Ne,Ct,nn,jt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,ze,Rt,jt.width,jt.height,Ct,jt.data):G.texSubImage2D(G.TEXTURE_2D,De,ze,Rt,Fe,Ne,Ct,nn,jt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Vt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,In),G.pixelStorei(G.UNPACK_SKIP_ROWS,Bn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fn),De===0&&q.generateMipmaps&&G.generateMipmap(We),Ve.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){k=0,ne=0,se=null,Ve.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}const RR=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,CR=`
precision mediump float;

uniform float uTime;
uniform float uGrainSize;
uniform vec2  uMouse;
uniform vec2  uResolution;

// ── 2-D Simplex noise ──────────────────────────────────────────────────────
vec3 _perm(vec3 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1,0) : vec2(0,1);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = _perm(_perm(i.y + vec3(0,i1.y,1)) + i.x + vec3(0,i1.x,1));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x  = 2.0*fract(p*C.www) - 1.0;
  vec3 h  = abs(x) - 0.5;
  vec3 a0 = x - floor(x + 0.5);
  m *= 1.79284291400159 - 0.85373472095314*(a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x *x0.x  + h.x *x0.y;
  g.yz = a0.yz*x12.xz + h.yz*x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2  mousePx   = uMouse * uResolution;

  // ── Cell layout on raw fragment coords ────────────────────────────────
  float gap      = 4.0;
  float cellSize = uGrainSize + gap;
  vec2  cellIdx  = floor(gl_FragCoord.xy / cellSize);
  vec2  cellOrig = cellIdx * cellSize;
  vec2  local    = gl_FragCoord.xy - cellOrig;

  // Inner square (2 px margin each side → 4 px gap between squares)
  float margin   = gap * 0.5;
  float inSquare = step(margin, local.x) * step(local.x, cellSize - margin)
                 * step(margin, local.y) * step(local.y, cellSize - margin);

  // Cell centre UV for noise sampling
  vec2 cellCentre = (cellOrig + cellSize * 0.5) / uResolution;

  // Two-octave simplex noise — slightly higher frequency
  float n = snoise(cellCentre * 9.5  + uTime * 0.20) * 0.55
          + snoise(cellCentre * 19.0 + uTime * 0.35) * 0.45;
  n = n * 0.5 + 0.5;

  // Threshold: ~60 % cells on for a much denser field
  float filled = step(0.73, n) * inSquare;

  // Neutral colour #4C4F69
  vec3 color = vec3(0.298, 0.310, 0.412);

  gl_FragColor = vec4(color, filled * 0.045);
}
`;function NR(){const r=Z.useRef(null);return Z.useEffect(()=>{const e=r.current,i=window.innerWidth,s=window.innerHeight,l=new wR({antialias:!1,alpha:!0});l.setPixelRatio(1),l.setSize(i,s),l.setClearColor(0,0),e.appendChild(l.domElement);const c=new dT,d=new pp(-1,1,1,-1,0,1),m=C=>Math.max(4,Math.min(6,C/300)),g={uTime:{value:0},uGrainSize:{value:m(i)},uMouse:{value:new Lt(.5,.5)},uResolution:{value:new Lt(i,s)}},p=new Mi({vertexShader:RR,fragmentShader:CR,uniforms:g,transparent:!0,depthWrite:!1});c.add(new ji(new ll(2,2),p));const x=C=>{g.uMouse.value.set(C.clientX/window.innerWidth,1-C.clientY/window.innerHeight)};window.addEventListener("mousemove",x);const _=()=>{const C=window.innerWidth,S=window.innerHeight;l.setSize(C,S),g.uResolution.value.set(C,S),g.uGrainSize.value=m(C)};window.addEventListener("resize",_);let v;const b=new LT,M=()=>{v=requestAnimationFrame(M),g.uTime.value=b.getElapsedTime(),l.render(c,d)};return M(),()=>{cancelAnimationFrame(v),window.removeEventListener("mousemove",x),window.removeEventListener("resize",_),l.dispose(),p.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),f.jsx("div",{ref:r,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}function DR(){if(typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches)return null;const r=Z.useRef(null),e=Z.useRef(null),i=Z.useRef(!1);return Z.useEffect(()=>{const s=r.current,l=e.current,c=g=>{s.style.left=g.clientX+"px",s.style.top=g.clientY+"px";const p=document.elementFromPoint(g.clientX,g.clientY),x=!!(p&&p.closest(".cursor-companies"));x&&!i.current?(s.style.transition=["width 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)","height 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)","padding 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)","border-radius 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"].join(", "),l.style.transition="opacity 0.3s ease 0.15s",l.style.opacity="1",l.style.display="inline",s.style.padding="8px 14px",s.style.width="auto",s.style.height="auto",s.style.borderRadius="999px",i.current=!0):!x&&i.current&&(s.style.transition=["width 0.28s cubic-bezier(0.4, 0, 0.2, 1)","height 0.28s cubic-bezier(0.4, 0, 0.2, 1)","padding 0.22s cubic-bezier(0.4, 0, 0.2, 1)","border-radius 0.22s cubic-bezier(0.4, 0, 0.2, 1)"].join(", "),l.style.transition="opacity 0.1s ease",l.style.opacity="0",setTimeout(()=>{l.style.display="none"},120),s.style.padding="0",s.style.width="17px",s.style.height="17px",s.style.borderRadius="50%",i.current=!1)},d=()=>{s.style.animation="none",s.offsetWidth,s.style.animation="dotShrink 0.38s cubic-bezier(0.22,1,0.36,1) forwards"},m=()=>{s.style.animation="none"};return window.addEventListener("mousemove",c),window.addEventListener("mousedown",d),s.addEventListener("animationend",m),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mousedown",d),s.removeEventListener("animationend",m)}},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        *, *::before, *::after { cursor: none !important; }

        @keyframes dotShrink {
          0%   { transform: translate(-50%, -50%) scale(1);    }
          30%  { transform: translate(-50%, -50%) scale(0.4);  }
          65%  { transform: translate(-50%, -50%) scale(1.15); }
          100% { transform: translate(-50%, -50%) scale(1);    }
        }
      `}),f.jsx("div",{ref:r,style:{position:"fixed",top:"-200px",left:"-200px",width:"17px",height:"17px",borderRadius:"50%",backgroundColor:"#000000",transform:"translate(-50%, -50%)",transition:"width 0.22s cubic-bezier(0.34,1.56,0.64,1), height 0.22s cubic-bezier(0.34,1.56,0.64,1), padding 0.22s cubic-bezier(0.34,1.56,0.64,1)",pointerEvents:"none",zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx("span",{ref:e,style:{display:"none",opacity:"0",fontFamily:"'IBM Plex Mono', monospace",fontSize:"12px",fontWeight:500,letterSpacing:"0.08em",color:"#ffffff",whiteSpace:"nowrap",userSelect:"none"},children:"CHATGPT, NOTION, AND TYPEFORM!"})})]})}const UR="/assets/notion-nitu-D0HPhEhh.png",LR="/assets/clawd-logo-Bu_GsNtA.png";function OR({onComplete:r}){const[e,i]=Z.useState(0),[s,l]=Z.useState(""),c="Nitish Gannu.";return Z.useEffect(()=>{const d=setTimeout(()=>i(1),1e3),m=setTimeout(()=>i(2),1600);return()=>{clearTimeout(d),clearTimeout(m)}},[]),Z.useEffect(()=>{if(e!==2)return;if(s.length>=c.length){const m=setTimeout(()=>i(3),100);return()=>clearTimeout(m)}const d=setTimeout(()=>l(c.slice(0,s.length+1)),65);return()=>clearTimeout(d)},[e,s]),Z.useEffect(()=>{if(e!==3)return;const d=setTimeout(()=>{i(4),setTimeout(r,500)},800);return()=>clearTimeout(d)},[e,r]),f.jsx("div",{className:`loader-overlay${e===4?" loader-overlay--out":""}`,children:f.jsxs("div",{className:"loader-row",children:[f.jsx("div",{className:`loader-dot${e===0?" loader-dot--pulse":""}`}),f.jsxs("div",{className:`loader-text-container${e>=1?" loader-text-container--open":""}`,children:[f.jsx("span",{className:"loader-ghost","aria-hidden":"true",children:c}),f.jsxs("span",{className:"loader-typed",children:[s,e>=2&&f.jsx("span",{className:`loader-caret${e===3?" loader-caret--blink":""}`})]})]})]})})}const PR=["/work/searchneu","/work/wrap","/work/safehub","/work/chatgpt","/work/pogo","/work/pogo/sections","/writing","/writing/rejection","/work/chatgpt/article","/work/chatgpt/full"];function IR(){const r=rs(),[e,i]=Z.useState(r.pathname),[s,l]=Z.useState("fade-in"),[c,d]=Z.useState(!1),m=!sessionStorage.getItem("nitu-visited"),[g,p]=Z.useState(m),[x,_]=Z.useState(!m),v=Z.useCallback(()=>{sessionStorage.setItem("nitu-visited","1"),p(!1),setTimeout(()=>_(!0),50)},[]);return Z.useEffect(()=>{if(r.pathname!==e){l("fade-out");const b=setTimeout(()=>{i(r.pathname),l("fade-in")},180);return()=>clearTimeout(b)}},[r,e]),f.jsxs(f.Fragment,{children:[g&&f.jsx(OR,{onComplete:v}),f.jsxs("div",{className:x?"content-visible":"content-hidden",children:[f.jsx(DR,{}),!PR.includes(r.pathname)&&f.jsx(NR,{}),f.jsxs("div",{className:`navbar${r.pathname==="/photos"?" navbar--solid":""}`,children:[f.jsxs("div",{className:"nav-links",children:[f.jsx(Zo,{to:"/",className:"nav-item",children:"WORK"}),f.jsx("span",{className:"nav-sep",children:"/"}),f.jsx(Zo,{to:"/about",className:"nav-item",children:"ABOUT"}),f.jsx("span",{className:"nav-sep",children:"/"}),f.jsx(Zo,{to:"/writing",className:"nav-item",children:"WRITING"}),f.jsx("span",{className:"nav-sep",children:"/"}),f.jsx(Zo,{to:"/test",className:"nav-item",children:"TEST"})]}),f.jsx("img",{src:UR,alt:"",className:"navbar-notion-face cursor-notion"})]}),f.jsx("div",{className:`page-wrapper ${s}`,children:f.jsxs(cb,{location:{pathname:e},children:[f.jsx(Ln,{path:"/",element:f.jsx(iM,{})}),f.jsx(Ln,{path:"/about",element:f.jsx(dM,{})}),f.jsx(Ln,{path:"/work/searchneu",element:f.jsx(WM,{})}),f.jsx(Ln,{path:"/work/wrap",element:f.jsx(ZM,{})}),f.jsx(Ln,{path:"/work/safehub",element:f.jsx(sE,{})}),f.jsx(Ln,{path:"/work/chatgpt",element:f.jsx(SE,{})}),f.jsx(Ln,{path:"/photos",element:f.jsx(NM,{})}),f.jsx(Ln,{path:"/work/pogo",element:f.jsx(ME,{})}),f.jsx(Ln,{path:"/work/pogo/sections",element:f.jsx(LE,{})}),f.jsx(Ln,{path:"/writing",element:f.jsx($E,{})}),f.jsx(Ln,{path:"/writing/rejection",element:f.jsx(l1,{})}),f.jsx(Ln,{path:"/test",element:f.jsx(r1,{})}),f.jsx(Ln,{path:"/work/chatgpt/article",element:f.jsx(p1,{})}),f.jsx(Ln,{path:"/work/chatgpt/full",element:f.jsx(QE,{})})]})}),f.jsx("footer",{className:"site-footer",style:r.pathname==="/photos"?{display:"none"}:{},children:f.jsxs("div",{className:"site-footer-content",children:[f.jsx("div",{className:"site-footer-made-block",children:f.jsxs("p",{className:"site-footer-madewith",children:["© 2026 Nitish Gannu. Made with"," ",f.jsx("a",{href:"https://www.anthropic.com/claude-code",target:"_blank",rel:"noopener noreferrer",className:"site-footer-clawd-link",children:f.jsx("img",{src:LR,alt:"Claude Code",className:"site-footer-clawd-logo"})})]})}),f.jsxs("div",{className:"site-footer-links-row",children:[f.jsx("a",{href:"https://www.linkedin.com/in/nitishgannu/",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"LINKEDIN"}),f.jsx("span",{className:"site-footer-sep",children:" / "}),f.jsx("a",{href:"https://medium.com/@nitishgannu",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"MEDIUM"}),f.jsx("span",{className:"site-footer-sep",children:" / "}),f.jsx("a",{href:"https://x.com/nitishgannu",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"X"})]})]})})]})]})}xS.createRoot(document.getElementById("root")).render(f.jsx(Lb,{children:f.jsx(IR,{})}));

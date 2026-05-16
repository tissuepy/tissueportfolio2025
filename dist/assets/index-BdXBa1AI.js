(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Jv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fd={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function QS(){if(I0)return Fo;I0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var F0;function JS(){return F0||(F0=1,fd.exports=QS()),fd.exports}var p=JS(),dd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function $S(){if(B0)return ct;B0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function y(O,Z,ue){this.props=O,this.context=Z,this.refs=C,this.updater=ue||M}y.prototype.isReactComponent={},y.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function N(O,Z,ue){this.props=O,this.context=Z,this.refs=C,this.updater=ue||M}var D=N.prototype=new x;D.constructor=N,b(D,y.prototype),D.isPureReactComponent=!0;var L=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function V(O,Z,ue,Se,Ue,qe){return ue=qe.ref,{$$typeof:r,type:O,key:Z,ref:ue!==void 0?ue:null,props:qe}}function A(O,Z){return V(O.type,Z,void 0,void 0,void 0,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function he(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ue){return Z[ue]})}var G=/\/+/g;function te(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?he(""+O.key):Z.toString(36)}function ae(){}function de(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ae,ae):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function J(O,Z,ue,Se,Ue){var qe=typeof O;(qe==="undefined"||qe==="boolean")&&(O=null);var $=!1;if(O===null)$=!0;else switch(qe){case"bigint":case"string":case"number":$=!0;break;case"object":switch(O.$$typeof){case r:case e:$=!0;break;case _:return $=O._init,J($(O._payload),Z,ue,Se,Ue)}}if($)return Ue=Ue(O),$=Se===""?"."+te(O,0):Se,L(Ue)?(ue="",$!=null&&(ue=$.replace(G,"$&/")+"/"),J(Ue,Z,ue,"",function(Je){return Je})):Ue!=null&&(U(Ue)&&(Ue=A(Ue,ue+(Ue.key==null||O&&O.key===Ue.key?"":(""+Ue.key).replace(G,"$&/")+"/")+$)),Z.push(Ue)),1;$=0;var Ee=Se===""?".":Se+":";if(L(O))for(var Me=0;Me<O.length;Me++)Se=O[Me],qe=Ee+te(Se,Me),$+=J(Se,Z,ue,qe,Ue);else if(Me=v(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(Se=O.next()).done;)Se=Se.value,qe=Ee+te(Se,Me++),$+=J(Se,Z,ue,qe,Ue);else if(qe==="object"){if(typeof O.then=="function")return J(de(O),Z,ue,Se,Ue);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return $}function I(O,Z,ue){if(O==null)return O;var Se=[],Ue=0;return J(O,Se,"","",function(qe){return Z.call(ue,qe,Ue++)}),Se}function z(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=ue)},function(ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=ue)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var ce=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ve(){}return ct.Children={map:I,forEach:function(O,Z,ue){I(O,function(){Z.apply(this,arguments)},ue)},count:function(O){var Z=0;return I(O,function(){Z++}),Z},toArray:function(O){return I(O,function(Z){return Z})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ct.Component=y,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=N,ct.StrictMode=s,ct.Suspense=g,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ct.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},ct.cache=function(O){return function(){return O.apply(null,arguments)}},ct.cloneElement=function(O,Z,ue){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Se=b({},O.props),Ue=O.key,qe=void 0;if(Z!=null)for($ in Z.ref!==void 0&&(qe=void 0),Z.key!==void 0&&(Ue=""+Z.key),Z)!H.call(Z,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&Z.ref===void 0||(Se[$]=Z[$]);var $=arguments.length-2;if($===1)Se.children=ue;else if(1<$){for(var Ee=Array($),Me=0;Me<$;Me++)Ee[Me]=arguments[Me+2];Se.children=Ee}return V(O.type,Ue,void 0,void 0,qe,Se)},ct.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ct.createElement=function(O,Z,ue){var Se,Ue={},qe=null;if(Z!=null)for(Se in Z.key!==void 0&&(qe=""+Z.key),Z)H.call(Z,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ue[Se]=Z[Se]);var $=arguments.length-2;if($===1)Ue.children=ue;else if(1<$){for(var Ee=Array($),Me=0;Me<$;Me++)Ee[Me]=arguments[Me+2];Ue.children=Ee}if(O&&O.defaultProps)for(Se in $=O.defaultProps,$)Ue[Se]===void 0&&(Ue[Se]=$[Se]);return V(O,qe,void 0,void 0,null,Ue)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(O){return{$$typeof:m,render:O}},ct.isValidElement=U,ct.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:z}},ct.memo=function(O,Z){return{$$typeof:h,type:O,compare:Z===void 0?null:Z}},ct.startTransition=function(O){var Z=F.T,ue={};F.T=ue;try{var Se=O(),Ue=F.S;Ue!==null&&Ue(ue,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(ve,ce)}catch(qe){ce(qe)}finally{F.T=Z}},ct.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ct.use=function(O){return F.H.use(O)},ct.useActionState=function(O,Z,ue){return F.H.useActionState(O,Z,ue)},ct.useCallback=function(O,Z){return F.H.useCallback(O,Z)},ct.useContext=function(O){return F.H.useContext(O)},ct.useDebugValue=function(){},ct.useDeferredValue=function(O,Z){return F.H.useDeferredValue(O,Z)},ct.useEffect=function(O,Z,ue){var Se=F.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(O,Z)},ct.useId=function(){return F.H.useId()},ct.useImperativeHandle=function(O,Z,ue){return F.H.useImperativeHandle(O,Z,ue)},ct.useInsertionEffect=function(O,Z){return F.H.useInsertionEffect(O,Z)},ct.useLayoutEffect=function(O,Z){return F.H.useLayoutEffect(O,Z)},ct.useMemo=function(O,Z){return F.H.useMemo(O,Z)},ct.useOptimistic=function(O,Z){return F.H.useOptimistic(O,Z)},ct.useReducer=function(O,Z,ue){return F.H.useReducer(O,Z,ue)},ct.useRef=function(O){return F.H.useRef(O)},ct.useState=function(O){return F.H.useState(O)},ct.useSyncExternalStore=function(O,Z,ue){return F.H.useSyncExternalStore(O,Z,ue)},ct.useTransition=function(){return F.H.useTransition()},ct.version="19.1.0",ct}var z0;function Yh(){return z0||(z0=1,dd.exports=$S()),dd.exports}var re=Yh();const ey=Jv(re);var hd={exports:{}},Bo={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function ty(){return H0||(H0=1,function(r){function e(I,z){var ce=I.length;I.push(z);e:for(;0<ce;){var ve=ce-1>>>1,O=I[ve];if(0<l(O,z))I[ve]=z,I[ce]=O,ce=ve;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var z=I[0],ce=I.pop();if(ce!==z){I[0]=ce;e:for(var ve=0,O=I.length,Z=O>>>1;ve<Z;){var ue=2*(ve+1)-1,Se=I[ue],Ue=ue+1,qe=I[Ue];if(0>l(Se,ce))Ue<O&&0>l(qe,Se)?(I[ve]=qe,I[Ue]=ce,ve=Ue):(I[ve]=Se,I[ue]=ce,ve=ue);else if(Ue<O&&0>l(qe,ce))I[ve]=qe,I[Ue]=ce,ve=Ue;else break e}}return z}function l(I,z){var ce=I.sortIndex-z.sortIndex;return ce!==0?ce:I.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],h=[],_=1,S=null,v=3,M=!1,b=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var z=i(h);z!==null;){if(z.callback===null)s(h);else if(z.startTime<=I)s(h),z.sortIndex=z.expirationTime,e(g,z);else break;z=i(h)}}function F(I){if(C=!1,L(I),!b)if(i(g)!==null)b=!0,H||(H=!0,te());else{var z=i(h);z!==null&&J(F,z.startTime-I)}}var H=!1,V=-1,A=5,U=-1;function he(){return y?!0:!(r.unstable_now()-U<A)}function G(){if(y=!1,H){var I=r.unstable_now();U=I;var z=!0;try{e:{b=!1,C&&(C=!1,N(V),V=-1),M=!0;var ce=v;try{t:{for(L(I),S=i(g);S!==null&&!(S.expirationTime>I&&he());){var ve=S.callback;if(typeof ve=="function"){S.callback=null,v=S.priorityLevel;var O=ve(S.expirationTime<=I);if(I=r.unstable_now(),typeof O=="function"){S.callback=O,L(I),z=!0;break t}S===i(g)&&s(g),L(I)}else s(g);S=i(g)}if(S!==null)z=!0;else{var Z=i(h);Z!==null&&J(F,Z.startTime-I),z=!1}}break e}finally{S=null,v=ce,M=!1}z=void 0}}finally{z?te():H=!1}}}var te;if(typeof D=="function")te=function(){D(G)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,de=ae.port2;ae.port1.onmessage=G,te=function(){de.postMessage(null)}}else te=function(){x(G,0)};function J(I,z){V=x(function(){I(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var ce=v;v=z;try{return I()}finally{v=ce}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ce=v;v=I;try{return z()}finally{v=ce}},r.unstable_scheduleCallback=function(I,z,ce){var ve=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ve+ce:ve):ce=ve,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ce+O,I={id:_++,callback:z,priorityLevel:I,startTime:ce,expirationTime:O,sortIndex:-1},ce>ve?(I.sortIndex=ce,e(h,I),i(g)===null&&I===i(h)&&(C?(N(V),V=-1):C=!0,J(F,ce-ve))):(I.sortIndex=O,e(g,I),b||M||(b=!0,H||(H=!0,te()))),I},r.unstable_shouldYield=he,r.unstable_wrapCallback=function(I){var z=v;return function(){var ce=v;v=z;try{return I.apply(this,arguments)}finally{v=ce}}}}(md)),md}var G0;function ny(){return G0||(G0=1,pd.exports=ty()),pd.exports}var gd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function iy(){if(V0)return Rn;V0=1;var r=Yh();function e(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,h,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:g,containerInfo:h,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(g,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(g,h,null,_)},Rn.flushSync=function(g){var h=f.T,_=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=h,s.p=_,s.d.f()}},Rn.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(g,h))},Rn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Rn.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var _=h.as,S=m(_,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?s.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:v,fetchPriority:M}):_==="script"&&s.d.X(g,{crossOrigin:S,integrity:v,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rn.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=m(h.as,h.crossOrigin);s.d.M(g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(g)},Rn.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,S=m(_,h.crossOrigin);s.d.L(g,_,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rn.preloadModule=function(g,h){if(typeof g=="string")if(h){var _=m(h.as,h.crossOrigin);s.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(g)},Rn.requestFormReset=function(g){s.d.r(g)},Rn.unstable_batchedUpdates=function(g,h){return g(h)},Rn.useFormState=function(g,h,_){return f.H.useFormState(g,h,_)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var k0;function ay(){if(k0)return gd.exports;k0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gd.exports=iy(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function sy(){if(j0)return Bo;j0=1;var r=ny(),e=Yh(),i=ay();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var E=!1,w=u.child;w;){if(w===a){E=!0,a=u,o=d;break}if(w===o){E=!0,o=u,a=d;break}w=w.sibling}if(!E){for(w=d.child;w;){if(w===a){E=!0,a=d,o=u;break}if(w===o){E=!0,o=d,a=u;break}w=w.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case D:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var J=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},ve=[],O=-1;function Z(t){return{current:t}}function ue(t){0>O||(t.current=ve[O],ve[O]=null,O--)}function Se(t,n){O++,ve[O]=t.current,t.current=n}var Ue=Z(null),qe=Z(null),$=Z(null),Ee=Z(null);function Me(t,n){switch(Se($,n),Se(qe,t),Se(Ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?u0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=u0(n),t=f0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(Ue),Se(Ue,t)}function Je(){ue(Ue),ue(qe),ue($)}function Ke(t){t.memoizedState!==null&&Se(Ee,t);var n=Ue.current,a=f0(n,t.type);n!==a&&(Se(qe,t),Se(Ue,a))}function $e(t){qe.current===t&&(ue(Ue),ue(qe)),Ee.current===t&&(ue(Ee),Uo._currentValue=ce)}var Jt=Object.prototype.hasOwnProperty,pt=r.unstable_scheduleCallback,St=r.unstable_cancelCallback,Ot=r.unstable_shouldYield,ot=r.unstable_requestPaint,bt=r.unstable_now,k=r.unstable_getCurrentPriorityLevel,Yt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,je=r.unstable_LowPriority,P=r.unstable_IdlePriority,T=r.log,W=r.unstable_setDisableYieldValue,me=null,_e=null;function fe(t){if(typeof T=="function"&&W(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(me,t)}catch{}}var Le=Math.clz32?Math.clz32:et,Ce=Math.log,Ze=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Ce(t)/Ze|0)|0}var be=256,Ae=4194304;function Fe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function He(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Fe(o):(E&=w,E!==0?u=Fe(E):a||(a=w&~t,a!==0&&(u=Fe(a))))):(w=o&~d,w!==0?u=Fe(w):E!==0?u=Fe(E):a||(a=o&~t,a!==0&&(u=Fe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=be;return be<<=1,(be&4194048)===0&&(be=256),t}function Re(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function we(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(a=E&~a;0<a;){var ge=31-Le(a),ye=1<<ge;w[ge]=0,B[ge]=-1;var ie=ee[ge];if(ie!==null)for(ee[ge]=null,ge=0;ge<ie.length;ge++){var se=ie[ge];se!==null&&(se.lane&=-536870913)}a&=~ye}o!==0&&pe(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~n))}function pe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Le(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ge(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Le(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:N0(t.type))}function fi(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var vn=Math.random().toString(36).slice(2),dn="__reactFiber$"+vn,_n="__reactProps$"+vn,Aa="__reactContainer$"+vn,Fs="__reactEvents$"+vn,ol="__reactListeners$"+vn,ji="__reactHandles$"+vn,Bs="__reactResources$"+vn,wa="__reactMarker$"+vn;function zs(t){delete t[dn],delete t[_n],delete t[Fs],delete t[ol],delete t[ji]}function di(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Aa]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=m0(t);t!==null;){if(a=t[dn])return a;t=m0(t)}return n}t=a,a=t.parentNode}return null}function Xi(t){if(t=t[dn]||t[Aa]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ei(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Wi(t){var n=t[Bs];return n||(n=t[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[wa]=!0}var ll=new Set,cl={};function qi(t,n){Ra(t,n),Ra(t+"Capture",n)}function Ra(t,n){for(cl[t]=n,t=0;t<n.length;t++)ll.add(n[t])}var cu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ul={},R={};function q(t){return Jt.call(R,t)?!0:Jt.call(ul,t)?!1:cu.test(t)?R[t]=!0:(ul[t]=!0,!1)}function oe(t,n,a){if(q(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ne(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function K(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var De,Be;function Ne(t){if(De===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);De=n&&n[1]||"",Be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+De+t+Be}var Ve=!1;function Xe(t,n){if(!t||Ve)return"";Ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(se){var ie=se}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(se){ie=se}t.call(ye.prototype)}}else{try{throw Error()}catch(se){ie=se}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(se){if(se&&ie&&typeof se.stack=="string")return[se.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],w=d[1];if(E&&w){var B=E.split(`
`),ee=w.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ee.length)for(o=B.length-1,u=ee.length-1;1<=o&&0<=u&&B[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ee[u]){var ge=`
`+B[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{Ve=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ne(a):""}function st(t){switch(t.tag){case 26:case 27:case 5:return Ne(t.type);case 16:return Ne("Lazy");case 13:return Ne("Suspense");case 19:return Ne("SuspenseList");case 0:case 15:return Xe(t.type,!1);case 11:return Xe(t.type.render,!1);case 1:return Xe(t.type,!0);case 31:return Ne("Activity");default:return""}}function rt(t){try{var n="";do n+=st(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t){var n=Rt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vt(t){t._valueTracker||(t._valueTracker=Zt(t))}function Ct(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Rt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var We=/[\n"\\]/g;function jt(t){return t.replace(We,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vt(t,n,a,o,u,d,E,w){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?In(t,E,ze(n)):a!=null?In(t,E,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+ze(w):t.removeAttribute("name")}function Pn(t,n,a,o,u,d,E,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function In(t,n,a){n==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Yi(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function Ut(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Wt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ti=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ti.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&an(t,d,n[d])}function Ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(t){return K_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var uu=null;function fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function dp(t){var n=Xi(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(vt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[_n]||null;if(!u)throw Error(s(90));vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ct(o)}break e;case"textarea":Yi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Fn(t,!!a.multiple,n,!1)}}}var du=!1;function hp(t,n,a){if(du)return t(n,a);du=!0;try{var o=t(n);return o}finally{if(du=!1,(Hs!==null||Gs!==null)&&(Ql(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,dp(n),t)))for(n=0;n<t.length;n++)dp(t[n])}}function jr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Zi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{hu=!1}var Ca=null,pu=null,hl=null;function pp(){if(hl)return hl;var t,n=pu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[d-o];o++);return hl=u.slice(t,1<o?1-o:void 0)}function pl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function mp(){return!1}function Bn(t){function n(a,o,u,d,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ml:mp,this.isPropagationStopped=mp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Bn(os),Wr=_({},os,{view:0,detail:0}),Q_=Bn(Wr),mu,gu,qr,vl=_({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(mu=t.screenX-qr.screenX,gu=t.screenY-qr.screenY):gu=mu=0,qr=t),mu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),gp=Bn(vl),J_=_({},vl,{dataTransfer:0}),$_=Bn(J_),ex=_({},Wr,{relatedTarget:0}),vu=Bn(ex),tx=_({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=Bn(tx),ix=_({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ax=Bn(ix),sx=_({},os,{data:0}),vp=Bn(sx),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=lx[t])?!!n[t]:!1}function _u(){return cx}var ux=_({},Wr,{key:function(t){if(t.key){var n=rx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fx=Bn(ux),dx=_({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Bn(dx),hx=_({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),px=Bn(hx),mx=_({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=Bn(mx),vx=_({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_x=Bn(vx),xx=_({},os,{newState:0,oldState:0}),Sx=Bn(xx),yx=[9,13,27,32],xu=Zi&&"CompositionEvent"in window,Yr=null;Zi&&"documentMode"in document&&(Yr=document.documentMode);var Mx=Zi&&"TextEvent"in window&&!Yr,xp=Zi&&(!xu||Yr&&8<Yr&&11>=Yr),Sp=" ",yp=!1;function Mp(t,n){switch(t){case"keyup":return yx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function bx(t,n){switch(t){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(yp=!0,Sp);case"textInput":return t=n.data,t===Sp&&yp?null:t;default:return null}}function Ex(t,n){if(Vs)return t==="compositionend"||!xu&&Mp(t,n)?(t=pp(),hl=pu=Ca=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xp&&n.locale!=="ko"?null:n.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Tx[t.type]:n==="textarea"}function Tp(t,n,a,o){Hs?Gs?Gs.push(o):Gs=[o]:Hs=o,n=ic(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zr=null,Kr=null;function Ax(t){s0(t,0)}function _l(t){var n=Ei(t);if(Ct(n))return t}function Ap(t,n){if(t==="change")return n}var wp=!1;if(Zi){var Su;if(Zi){var yu="oninput"in document;if(!yu){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),yu=typeof Rp.oninput=="function"}Su=yu}else Su=!1;wp=Su&&(!document.documentMode||9<document.documentMode)}function Cp(){Zr&&(Zr.detachEvent("onpropertychange",Np),Kr=Zr=null)}function Np(t){if(t.propertyName==="value"&&_l(Kr)){var n=[];Tp(n,Kr,t,fu(t)),hp(Ax,n)}}function wx(t,n,a){t==="focusin"?(Cp(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",Np)):t==="focusout"&&Cp()}function Rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(Kr)}function Cx(t,n){if(t==="click")return _l(n)}function Nx(t,n){if(t==="input"||t==="change")return _l(n)}function Dx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Dx;function Qr(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Jt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,n){var a=Dp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Lp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Lp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Op(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nn(t.document)}return n}function Mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ux=Zi&&"documentMode"in document&&11>=document.documentMode,ks=null,bu=null,Jr=null,Eu=!1;function Pp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||ks==null||ks!==nn(o)||(o=ks,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jr&&Qr(Jr,o)||(Jr=o,o=ic(bu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=ks)))}function ls(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var js={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Tu={},Ip={};Zi&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function cs(t){if(Tu[t])return Tu[t];if(!js[t])return t;var n=js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ip)return Tu[t]=n[a];return t}var Fp=cs("animationend"),Bp=cs("animationiteration"),zp=cs("animationstart"),Lx=cs("transitionrun"),Ox=cs("transitionstart"),Px=cs("transitioncancel"),Hp=cs("transitionend"),Gp=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function pi(t,n){Gp.set(t,n),qi(n,[t])}var Vp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=Vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:rt(n)},Vp.set(t,n),n)}return{value:t,source:n,stack:rt(n)}}var ni=[],Xs=0,wu=0;function xl(){for(var t=Xs,n=wu=Xs=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&kp(a,u,d)}}function Sl(t,n,a,o){ni[Xs++]=t,ni[Xs++]=n,ni[Xs++]=a,ni[Xs++]=o,wu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ru(t,n,a,o){return Sl(t,n,a,o),yl(t)}function Ws(t,n){return Sl(t,null,null,n),yl(t)}function kp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Le(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function yl(t){if(50<Eo)throw Eo=0,Pf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qs={};function Ix(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,o){return new Ix(t,n,a,o)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ml(t,n,a,o,u,d){var E=0;if(o=t,typeof t=="function")Cu(t)&&(E=1);else if(typeof t=="string")E=BS(t,a,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Xn(31,a,n,u),t.elementType=U,t.lanes=d,t;case b:return us(a.children,u,d,n);case C:E=8,u|=24;break;case y:return t=Xn(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case F:return t=Xn(13,a,n,u),t.elementType=F,t.lanes=d,t;case H:return t=Xn(19,a,n,u),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case D:E=10;break e;case N:E=9;break e;case L:E=11;break e;case V:E=14;break e;case A:E=16,o=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Xn(E,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function us(t,n,a,o){return t=Xn(7,t,o,n),t.lanes=a,t}function Nu(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Du(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ys=[],Zs=0,bl=null,El=0,ii=[],ai=0,fs=null,Qi=1,Ji="";function ds(t,n){Ys[Zs++]=El,Ys[Zs++]=bl,bl=t,El=n}function Xp(t,n,a){ii[ai++]=Qi,ii[ai++]=Ji,ii[ai++]=fs,fs=t;var o=Qi;t=Ji;var u=32-Le(o)-1;o&=~(1<<u),a+=1;var d=32-Le(n)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Qi=1<<32-Le(n)+u|a<<u|o,Ji=d+t}else Qi=1<<d|a<<u|o,Ji=t}function Uu(t){t.return!==null&&(ds(t,1),Xp(t,1,0))}function Lu(t){for(;t===bl;)bl=Ys[--Zs],Ys[Zs]=null,El=Ys[--Zs],Ys[Zs]=null;for(;t===fs;)fs=ii[--ai],ii[ai]=null,Ji=ii[--ai],ii[ai]=null,Qi=ii[--ai],ii[ai]=null}var Un=null,$t=null,Nt=!1,hs=null,wi=!1,Ou=Error(s(519));function ps(t){var n=Error(s(418,""));throw to(ti(n,t)),Ou}function Wp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[_n]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)gt(Ao[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Vt(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Ut(n,o.value,o.defaultValue,o.children),Vt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||c0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=ac),n=!0):n=!1,n||ps(t)}function qp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Un=Un.return}}function $r(t){if(t!==Un)return!1;if(!Nt)return qp(t),Nt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Qf(t.type,t.memoizedProps)),a=!a),a&&$t&&ps(t),qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=gi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Xa(t.type)?(t=td,td=null,$t=t):$t=n):$t=Un?gi(t.stateNode.nextSibling):null;return!0}function eo(){$t=Un=null,Nt=!1}function Yp(){var t=hs;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),hs=null),t}function to(t){hs===null?hs=[t]:hs.push(t)}var Pu=Z(null),ms=null,$i=null;function Na(t,n,a){Se(Pu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Pu.current,ue(Pu)}function Iu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Fu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var B=0;B<n.length;B++)if(w.context===n[B]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Iu(d.return,a,t),o||(E=null);break e}d=w.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Iu(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function no(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=u.type;jn(u.pendingProps.value,E.value)||(t!==null?t.push(w):t=[w])}}else if(u===Ee.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&Fu(n,t,a,o),n.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){ms=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Zp(ms,t)}function Al(t,n){return ms===null&&gs(t),Zp(t,n)}function Zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var Fx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Bx=r.unstable_scheduleCallback,zx=r.unstable_NormalPriority,hn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new Fx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&Bx(zx,function(){t.controller.abort()})}var ao=null,zu=0,Ks=0,Qs=null;function Hx(t,n){if(ao===null){var a=ao=[];zu=0,Ks=Vf(),Qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(Kp,Kp),n}function Kp(){if(--zu===0&&ao!==null){Qs!==null&&(Qs.status="fulfilled");var t=ao;ao=null,Ks=0,Qs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Gx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Qp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hx(t,n),Qp!==null&&Qp(t,n)};var vs=Z(null);function Hu(){var t=vs.current;return t!==null?t:Xt.pooledCache}function wl(t,n){n===null?Se(vs,vs.current):Se(vs,n.pool)}function Jp(){var t=Hu();return t===null?null:{parent:hn._currentValue,pool:t}}var so=Error(s(460)),$p=Error(s(474)),Rl=Error(s(542)),Gu={then:function(){}};function em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cl(){}function tm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Cl,Cl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,im(t),t;default:if(typeof n.status=="string")n.then(Cl,Cl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,im(t),t}throw ro=n,so}}var ro=null;function nm(){if(ro===null)throw Error(s(459));var t=ro;return ro=null,t}function im(t){if(t===so||t===Rl)throw Error(s(483))}var Da=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),kp(t,null,a),n}return Sl(t,o,n,a),yl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ge(t,a)}}function ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Xu=!1;function lo(){if(Xu){var t=Qs;if(t!==null)throw t}}function co(t,n,a,o){Xu=!1;var u=t.updateQueue;Da=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var B=w,ee=B.next;B.next=null,E===null?d=ee:E.next=ee,E=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,w=ge.lastBaseUpdate,w!==E&&(w===null?ge.firstBaseUpdate=ee:w.next=ee,ge.lastBaseUpdate=B))}if(d!==null){var ye=u.baseState;E=0,ge=ee=B=null,w=d;do{var ie=w.lane&-536870913,se=ie!==w.lane;if(se?(xt&ie)===ie:(o&ie)===ie){ie!==0&&ie===Ks&&(Xu=!0),ge!==null&&(ge=ge.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var it=t,Qe=w;ie=n;var Ht=a;switch(Qe.tag){case 1:if(it=Qe.payload,typeof it=="function"){ye=it.call(Ht,ye,ie);break e}ye=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=Qe.payload,ie=typeof it=="function"?it.call(Ht,ye,ie):it,ie==null)break e;ye=_({},ye,ie);break e;case 2:Da=!0}}ie=w.callback,ie!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[ie]:se.push(ie))}else se={lane:ie,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ge===null?(ee=ge=se,B=ye):ge=ge.next=se,E|=ie;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;se=w,w=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ge===null&&(B=ye),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=ge,d===null&&(u.shared.lanes=0),Ga|=E,t.lanes=E,t.memoizedState=ye}}function am(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function sm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)am(a[t],n)}var Js=Z(null),Nl=Z(0);function rm(t,n){t=oa,Se(Nl,t),Se(Js,n),oa=t|n.baseLanes}function Wu(){Se(Nl,oa),Se(Js,Js.current)}function qu(){oa=Nl.current,ue(Js),ue(Nl)}var Oa=0,dt=null,Bt=null,ln=null,Dl=!1,$s=!1,_s=!1,Ul=0,uo=0,er=null,Vx=0;function sn(){throw Error(s(321))}function Yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Zu(t,n,a,o,u,d){return Oa=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?km:jm,_s=!1,d=a(o,u),_s=!1,$s&&(d=lm(n,a,o,u)),om(t),d}function om(t){I.H=Bl;var n=Bt!==null&&Bt.next!==null;if(Oa=0,ln=Bt=dt=null,Dl=!1,uo=0,er=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&Tl(t)&&(xn=!0))}function lm(t,n,a,o){dt=t;var u=0;do{if($s&&(er=null),uo=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,ln=Bt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Zx,d=n(a,o)}while($s);return d}function kx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Ku(){var t=Ul!==0;return Ul=0,t}function Qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ju(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}Oa=0,ln=Bt=dt=null,$s=!1,uo=Ul=0,er=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?dt.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(Bt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=ln===null?dt.memoizedState:ln.next;if(n!==null)ln=n,Bt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},ln===null?dt.memoizedState=ln=t:ln=ln.next=t}return ln}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,er===null&&(er=[]),t=tm(er,t,n),n=dt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?km:jm),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===D)return wn(t)}throw Error(s(438,String(t)))}function ef(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$u(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=he;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Ol(t){var n=cn();return tf(n,Bt,t)}function tf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=E=null,B=null,ee=n,ge=!1;do{var ye=ee.lane&-536870913;if(ye!==ee.lane?(xt&ye)===ye:(Oa&ye)===ye){var ie=ee.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ye===Ks&&(ge=!0);else if((Oa&ie)===ie){ee=ee.next,ie===Ks&&(ge=!0);continue}else ye={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(w=B=ye,E=d):B=B.next=ye,dt.lanes|=ie,Ga|=ie;ye=ee.action,_s&&a(d,ye),d=ee.hasEagerState?ee.eagerState:a(d,ye)}else ie={lane:ye,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(w=B=ie,E=d):B=B.next=ie,dt.lanes|=ye,Ga|=ye;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?E=d:B.next=w,!jn(d,t.memoizedState)&&(xn=!0,ge&&(a=Qs,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function nf(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do d=t(d,E.action),E=E.next;while(E!==u);jn(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function cm(t,n,a){var o=dt,u=cn(),d=Nt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var E=!jn((Bt||u).memoizedState,a);E&&(u.memoizedState=a,xn=!0),u=u.queue;var w=dm.bind(null,o,u,t);if(ho(2048,8,w,[t]),u.getSnapshot!==n||E||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,tr(9,Pl(),fm.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));d||(Oa&124)!==0||um(o,n,a)}return a}function um(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=$u(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fm(t,n,a,o){n.value=a,n.getSnapshot=o,hm(n)&&pm(t)}function dm(t,n,a){return a(function(){hm(n)&&pm(t)})}function hm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function pm(t){var n=Ws(t,2);n!==null&&Kn(n,t,2)}function af(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),_s){fe(!0);try{a()}finally{fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function mm(t,n,a,o){return t.baseState=a,tf(t,Bt,typeof o=="function"?o:ta)}function jx(t,n,a,o,u){if(Fl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,gm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function gm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,E={};I.T=E;try{var w=a(u,o),B=I.S;B!==null&&B(E,w),vm(t,n,w)}catch(ee){sf(t,n,ee)}finally{I.T=d}}else try{d=a(u,o),vm(t,n,d)}catch(ee){sf(t,n,ee)}}function vm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){_m(t,n,o)},function(o){return sf(t,n,o)}):_m(t,n,a)}function _m(t,n,a){n.status="fulfilled",n.value=a,xm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gm(t,a)))}function sf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}t.action=null}function xm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sm(t,n){return n}function ym(t,n){if(Nt){var a=Xt.formState;if(a!==null){e:{var o=dt;if(Nt){if($t){t:{for(var u=$t,d=wi;u.nodeType!==8;){if(!d){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=gi(u.nextSibling),o=u.data==="F!";break e}}ps(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=o,a=Hm.bind(null,dt,o),o.dispatch=a,o=af(!1),d=uf.bind(null,dt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=jx.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Mm(t){var n=cn();return bm(n,Bt,t)}function bm(t,n,a){if(n=tf(t,n,Sm)[0],t=Ol(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(E){throw E===so?Rl:E}else o=n;n=cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,tr(9,Pl(),Xx.bind(null,u,a),null)),[o,d,t]}function Xx(t,n){t.action=n}function Em(t){var n=cn(),a=Bt;if(a!==null)return bm(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function tr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=$u(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Pl(){return{destroy:void 0,resource:void 0}}function Tm(){return cn().memoizedState}function Il(t,n,a,o){var u=zn();o=o===void 0?null:o,dt.flags|=t,u.memoizedState=tr(1|n,Pl(),a,o)}function ho(t,n,a,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;Bt!==null&&o!==null&&Yu(o,Bt.memoizedState.deps)?u.memoizedState=tr(n,d,a,o):(dt.flags|=t,u.memoizedState=tr(1|n,d,a,o))}function Am(t,n){Il(8390656,8,t,n)}function wm(t,n){ho(2048,8,t,n)}function Rm(t,n){return ho(4,2,t,n)}function Cm(t,n){return ho(4,4,t,n)}function Nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Dm(t,n,a){a=a!=null?a.concat([t]):null,ho(4,4,Nm.bind(null,n,t),a)}function rf(){}function Um(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Lm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=t(),_s){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o}function of(t,n,a){return a===void 0||(Oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Ig(),dt.lanes|=t,Ga|=t,a)}function Om(t,n,a,o){return jn(a,n)?a:Js.current!==null?(t=of(t,a,o),jn(t,n)||(xn=!0),t):(Oa&42)===0?(xn=!0,t.memoizedState=a):(t=Ig(),dt.lanes|=t,Ga|=t,n)}function Pm(t,n,a,o,u){var d=z.p;z.p=d!==0&&8>d?d:8;var E=I.T,w={};I.T=w,uf(t,!1,n,a);try{var B=u(),ee=I.S;if(ee!==null&&ee(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ge=Gx(B,o);po(t,n,ge,Zn(t))}else po(t,n,o,Zn(t))}catch(ye){po(t,n,{then:function(){},status:"rejected",reason:ye},Zn())}finally{z.p=d,I.T=E}}function Wx(){}function lf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Im(t).queue;Pm(t,u,n,ce,a===null?Wx:function(){return Fm(t),a(o)})}function Im(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:ce},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fm(t){var n=Im(t).next.queue;po(t,n,{},Zn())}function cf(){return wn(Uo)}function Bm(){return cn().memoizedState}function zm(){return cn().memoizedState}function qx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=Ua(a);var o=La(n,t,a);o!==null&&(Kn(o,n,a),oo(o,n,a)),n={cache:Bu()},t.payload=n;return}n=n.return}}function Yx(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(t)?Gm(n,a):(a=Ru(t,n,a,o),a!==null&&(Kn(a,t,o),Vm(a,n,o)))}function Hm(t,n,a){var o=Zn();po(t,n,a,o)}function po(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))Gm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,w=d(E,a);if(u.hasEagerState=!0,u.eagerState=w,jn(w,E))return Sl(t,n,u,0),Xt===null&&xl(),!1}catch{}finally{}if(a=Ru(t,n,u,o),a!==null)return Kn(a,t,o),Vm(a,n,o),!0}return!1}function uf(t,n,a,o){if(o={lane:2,revertLane:Vf(),action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(n)throw Error(s(479))}else n=Ru(t,a,o,2),n!==null&&Kn(n,t,2)}function Fl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Gm(t,n){$s=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ge(t,a)}}var Bl={readContext:wn,use:Ll,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},km={readContext:wn,use:Ll,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Am,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Il(4194308,4,Nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Il(4194308,4,t,n)},useInsertionEffect:function(t,n){Il(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(_s){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(_s){fe(!0);try{a(n)}finally{fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Yx.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,a=Hm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(t,n){var a=zn();return of(a,t,n)},useTransition:function(){var t=af(!1);return t=Pm.bind(null,dt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=zn();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(xt&124)!==0||um(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Am(dm.bind(null,o,d,t),[t]),o.flags|=2048,tr(9,Pl(),fm.bind(null,o,d,a,n),null),a},useId:function(){var t=zn(),n=Xt.identifierPrefix;if(Nt){var a=Ji,o=Qi;a=(o&~(1<<32-Le(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Vx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:cf,useFormState:ym,useActionState:ym,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return zn().memoizedState=qx.bind(null,dt)}},jm={readContext:wn,use:Ll,useCallback:Um,useContext:wn,useEffect:wm,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Ol,useRef:Tm,useState:function(){return Ol(ta)},useDebugValue:rf,useDeferredValue:function(t,n){var a=cn();return Om(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Ol(ta)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:cf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=cn();return mm(a,Bt,t,n)},useMemoCache:ef,useCacheRefresh:zm},Zx={readContext:wn,use:Ll,useCallback:Um,useContext:wn,useEffect:wm,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:nf,useRef:Tm,useState:function(){return nf(ta)},useDebugValue:rf,useDeferredValue:function(t,n){var a=cn();return Bt===null?of(a,t,n):Om(a,Bt.memoizedState,t,n)},useTransition:function(){var t=nf(ta)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:cf,useFormState:Em,useActionState:Em,useOptimistic:function(t,n){var a=cn();return Bt!==null?mm(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:zm},nr=null,mo=0;function zl(t){var n=mo;return mo+=1,nr===null&&(nr=[]),tm(nr,t,n)}function go(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Hl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xm(t){var n=t._init;return n(t._payload)}function Wm(t){function n(Y,j){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[j],Y.flags|=16):Q.push(j)}}function a(Y,j){if(!t)return null;for(;j!==null;)n(Y,j),j=j.sibling;return null}function o(Y){for(var j=new Map;Y!==null;)Y.key!==null?j.set(Y.key,Y):j.set(Y.index,Y),Y=Y.sibling;return j}function u(Y,j){return Y=Ki(Y,j),Y.index=0,Y.sibling=null,Y}function d(Y,j,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<j?(Y.flags|=67108866,j):Q):(Y.flags|=67108866,j)):(Y.flags|=1048576,j)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,j,Q,xe){return j===null||j.tag!==6?(j=Nu(Q,Y.mode,xe),j.return=Y,j):(j=u(j,Q),j.return=Y,j)}function B(Y,j,Q,xe){var ke=Q.type;return ke===b?ge(Y,j,Q.props.children,xe,Q.key):j!==null&&(j.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===A&&Xm(ke)===j.type)?(j=u(j,Q.props),go(j,Q),j.return=Y,j):(j=Ml(Q.type,Q.key,Q.props,null,Y.mode,xe),go(j,Q),j.return=Y,j)}function ee(Y,j,Q,xe){return j===null||j.tag!==4||j.stateNode.containerInfo!==Q.containerInfo||j.stateNode.implementation!==Q.implementation?(j=Du(Q,Y.mode,xe),j.return=Y,j):(j=u(j,Q.children||[]),j.return=Y,j)}function ge(Y,j,Q,xe,ke){return j===null||j.tag!==7?(j=us(Q,Y.mode,xe,ke),j.return=Y,j):(j=u(j,Q),j.return=Y,j)}function ye(Y,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Nu(""+j,Y.mode,Q),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case v:return Q=Ml(j.type,j.key,j.props,null,Y.mode,Q),go(Q,j),Q.return=Y,Q;case M:return j=Du(j,Y.mode,Q),j.return=Y,j;case A:var xe=j._init;return j=xe(j._payload),ye(Y,j,Q)}if(J(j)||te(j))return j=us(j,Y.mode,Q,null),j.return=Y,j;if(typeof j.then=="function")return ye(Y,zl(j),Q);if(j.$$typeof===D)return ye(Y,Al(Y,j),Q);Hl(Y,j)}return null}function ie(Y,j,Q,xe){var ke=j!==null?j.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ke!==null?null:w(Y,j,""+Q,xe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===ke?B(Y,j,Q,xe):null;case M:return Q.key===ke?ee(Y,j,Q,xe):null;case A:return ke=Q._init,Q=ke(Q._payload),ie(Y,j,Q,xe)}if(J(Q)||te(Q))return ke!==null?null:ge(Y,j,Q,xe,null);if(typeof Q.then=="function")return ie(Y,j,zl(Q),xe);if(Q.$$typeof===D)return ie(Y,j,Al(Y,Q),xe);Hl(Y,Q)}return null}function se(Y,j,Q,xe,ke){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Y=Y.get(Q)||null,w(j,Y,""+xe,ke);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case v:return Y=Y.get(xe.key===null?Q:xe.key)||null,B(j,Y,xe,ke);case M:return Y=Y.get(xe.key===null?Q:xe.key)||null,ee(j,Y,xe,ke);case A:var ht=xe._init;return xe=ht(xe._payload),se(Y,j,Q,xe,ke)}if(J(xe)||te(xe))return Y=Y.get(Q)||null,ge(j,Y,xe,ke,null);if(typeof xe.then=="function")return se(Y,j,Q,zl(xe),ke);if(xe.$$typeof===D)return se(Y,j,Q,Al(j,xe),ke);Hl(j,xe)}return null}function it(Y,j,Q,xe){for(var ke=null,ht=null,Ye=j,tt=j=0,yn=null;Ye!==null&&tt<Q.length;tt++){Ye.index>tt?(yn=Ye,Ye=null):yn=Ye.sibling;var Tt=ie(Y,Ye,Q[tt],xe);if(Tt===null){Ye===null&&(Ye=yn);break}t&&Ye&&Tt.alternate===null&&n(Y,Ye),j=d(Tt,j,tt),ht===null?ke=Tt:ht.sibling=Tt,ht=Tt,Ye=yn}if(tt===Q.length)return a(Y,Ye),Nt&&ds(Y,tt),ke;if(Ye===null){for(;tt<Q.length;tt++)Ye=ye(Y,Q[tt],xe),Ye!==null&&(j=d(Ye,j,tt),ht===null?ke=Ye:ht.sibling=Ye,ht=Ye);return Nt&&ds(Y,tt),ke}for(Ye=o(Ye);tt<Q.length;tt++)yn=se(Ye,Y,tt,Q[tt],xe),yn!==null&&(t&&yn.alternate!==null&&Ye.delete(yn.key===null?tt:yn.key),j=d(yn,j,tt),ht===null?ke=yn:ht.sibling=yn,ht=yn);return t&&Ye.forEach(function(Ka){return n(Y,Ka)}),Nt&&ds(Y,tt),ke}function Qe(Y,j,Q,xe){if(Q==null)throw Error(s(151));for(var ke=null,ht=null,Ye=j,tt=j=0,yn=null,Tt=Q.next();Ye!==null&&!Tt.done;tt++,Tt=Q.next()){Ye.index>tt?(yn=Ye,Ye=null):yn=Ye.sibling;var Ka=ie(Y,Ye,Tt.value,xe);if(Ka===null){Ye===null&&(Ye=yn);break}t&&Ye&&Ka.alternate===null&&n(Y,Ye),j=d(Ka,j,tt),ht===null?ke=Ka:ht.sibling=Ka,ht=Ka,Ye=yn}if(Tt.done)return a(Y,Ye),Nt&&ds(Y,tt),ke;if(Ye===null){for(;!Tt.done;tt++,Tt=Q.next())Tt=ye(Y,Tt.value,xe),Tt!==null&&(j=d(Tt,j,tt),ht===null?ke=Tt:ht.sibling=Tt,ht=Tt);return Nt&&ds(Y,tt),ke}for(Ye=o(Ye);!Tt.done;tt++,Tt=Q.next())Tt=se(Ye,Y,tt,Tt.value,xe),Tt!==null&&(t&&Tt.alternate!==null&&Ye.delete(Tt.key===null?tt:Tt.key),j=d(Tt,j,tt),ht===null?ke=Tt:ht.sibling=Tt,ht=Tt);return t&&Ye.forEach(function(KS){return n(Y,KS)}),Nt&&ds(Y,tt),ke}function Ht(Y,j,Q,xe){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var ke=Q.key;j!==null;){if(j.key===ke){if(ke=Q.type,ke===b){if(j.tag===7){a(Y,j.sibling),xe=u(j,Q.props.children),xe.return=Y,Y=xe;break e}}else if(j.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===A&&Xm(ke)===j.type){a(Y,j.sibling),xe=u(j,Q.props),go(xe,Q),xe.return=Y,Y=xe;break e}a(Y,j);break}else n(Y,j);j=j.sibling}Q.type===b?(xe=us(Q.props.children,Y.mode,xe,Q.key),xe.return=Y,Y=xe):(xe=Ml(Q.type,Q.key,Q.props,null,Y.mode,xe),go(xe,Q),xe.return=Y,Y=xe)}return E(Y);case M:e:{for(ke=Q.key;j!==null;){if(j.key===ke)if(j.tag===4&&j.stateNode.containerInfo===Q.containerInfo&&j.stateNode.implementation===Q.implementation){a(Y,j.sibling),xe=u(j,Q.children||[]),xe.return=Y,Y=xe;break e}else{a(Y,j);break}else n(Y,j);j=j.sibling}xe=Du(Q,Y.mode,xe),xe.return=Y,Y=xe}return E(Y);case A:return ke=Q._init,Q=ke(Q._payload),Ht(Y,j,Q,xe)}if(J(Q))return it(Y,j,Q,xe);if(te(Q)){if(ke=te(Q),typeof ke!="function")throw Error(s(150));return Q=ke.call(Q),Qe(Y,j,Q,xe)}if(typeof Q.then=="function")return Ht(Y,j,zl(Q),xe);if(Q.$$typeof===D)return Ht(Y,j,Al(Y,Q),xe);Hl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,j!==null&&j.tag===6?(a(Y,j.sibling),xe=u(j,Q),xe.return=Y,Y=xe):(a(Y,j),xe=Nu(Q,Y.mode,xe),xe.return=Y,Y=xe),E(Y)):a(Y,j)}return function(Y,j,Q,xe){try{mo=0;var ke=Ht(Y,j,Q,xe);return nr=null,ke}catch(Ye){if(Ye===so||Ye===Rl)throw Ye;var ht=Xn(29,Ye,null,Y.mode);return ht.lanes=xe,ht.return=Y,ht}finally{}}}var ir=Wm(!0),qm=Wm(!1),si=Z(null),Ri=null;function Pa(t){var n=t.alternate;Se(pn,pn.current&1),Se(si,t),Ri===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(Ri=t)}function Ym(t){if(t.tag===22){if(Se(pn,pn.current),Se(si,t),Ri===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ri=t)}}else Ia()}function Ia(){Se(pn,pn.current),Se(si,si.current)}function na(t){ue(si),Ri===t&&(Ri=null),ue(pn)}var pn=Z(0);function Gl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ed(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ff(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var df={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(Kn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(Kn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=La(t,o,a),n!==null&&(Kn(n,t,a),oo(n,t,a))}};function Zm(t,n,a,o,u,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,o)||!Qr(u,d):!0}function Km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&df.enqueueReplaceState(n,n.state,null)}function xs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qm(t){Vl(t)}function Jm(t){console.error(t)}function $m(t){Vl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function eg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function tg(t){return t=Ua(t),t.tag=3,t}function ng(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){eg(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){eg(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Kx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&no(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ri===null?Ff():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(t,o,u)),!1;case 22:return a.flags|=65536,o===Gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(t,o,u)),!1}throw Error(s(435,a.tag))}return zf(t,o,u),Ff(),!1}if(Nt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ou&&(t=Error(s(422),{cause:o}),to(ti(t,a)))):(o!==Ou&&(n=Error(s(423),{cause:o}),to(ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ti(o,a),u=hf(t.stateNode,o,u),ju(t,u),en!==4&&(en=2)),!1;var d=Error(s(520),{cause:o});if(d=ti(d,a),bo===null?bo=[d]:bo.push(d),en!==4&&(en=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hf(a.stateNode,o,t),ju(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Va===null||!Va.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=tg(u),ng(u,t,a,o),ju(a,u),!1}a=a.return}while(a!==null);return!1}var ig=Error(s(461)),xn=!1;function bn(t,n,a,o){n.child=t===null?qm(n,null,a,o):ir(n,t.child,a,o)}function ag(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var E={};for(var w in o)w!=="ref"&&(E[w]=o[w])}else E=o;return gs(n),o=Zu(t,n,a,E,d,u),w=Ku(),t!==null&&!xn?(Qu(t,n,u),ia(t,n,u)):(Nt&&w&&Uu(n),n.flags|=1,bn(t,n,o,u),n.child)}function sg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Cu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,rg(t,n,d,o,u)):(t=Ml(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!yf(t,u)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(E,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Ki(d,o),t.ref=n.ref,t.return=n,n.child=t}function rg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Qr(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,yf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return pf(t,n,a,o,u)}function og(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return lg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,d!==null?d.cachePool:null),d!==null?rm(n,d):Wu(),Ym(n);else return n.lanes=n.childLanes=536870912,lg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(wl(n,d.cachePool),rm(n,d),Ia(),n.memoizedState=null):(t!==null&&wl(n,null),Wu(),Ia());return bn(t,n,u,a),n.child}function lg(t,n,a,o){var u=Hu();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&wl(n,null),Wu(),Ym(n),t!==null&&no(t,n,o,!0),null}function jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function pf(t,n,a,o,u){return gs(n),a=Zu(t,n,a,o,void 0,u),o=Ku(),t!==null&&!xn?(Qu(t,n,u),ia(t,n,u)):(Nt&&o&&Uu(n),n.flags|=1,bn(t,n,a,u),n.child)}function cg(t,n,a,o,u,d){return gs(n),n.updateQueue=null,a=lm(n,o,a,u),om(t),o=Ku(),t!==null&&!xn?(Qu(t,n,d),ia(t,n,d)):(Nt&&o&&Uu(n),n.flags|=1,bn(t,n,a,d),n.child)}function ug(t,n,a,o,u){if(gs(n),n.stateNode===null){var d=qs,E=a.contextType;typeof E=="object"&&E!==null&&(d=wn(E)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=df,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Vu(n),E=a.contextType,d.context=typeof E=="object"&&E!==null?wn(E):qs,d.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(ff(n,a,E,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&df.enqueueReplaceState(d,d.state,null),co(n,o,d,u),lo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,B=xs(a,w);d.props=B;var ee=d.context,ge=a.contextType;E=qs,typeof ge=="object"&&ge!==null&&(E=wn(ge));var ye=a.getDerivedStateFromProps;ge=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||ee!==E)&&Km(n,d,o,E),Da=!1;var ie=n.memoizedState;d.state=ie,co(n,o,d,u),lo(),ee=n.memoizedState,w||ie!==ee||Da?(typeof ye=="function"&&(ff(n,a,ye,o),ee=n.memoizedState),(B=Da||Zm(n,a,B,o,ie,ee,E))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=E,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,ku(t,n),E=n.memoizedProps,ge=xs(a,E),d.props=ge,ye=n.pendingProps,ie=d.context,ee=a.contextType,B=qs,typeof ee=="object"&&ee!==null&&(B=wn(ee)),w=a.getDerivedStateFromProps,(ee=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==ye||ie!==B)&&Km(n,d,o,B),Da=!1,ie=n.memoizedState,d.state=ie,co(n,o,d,u),lo();var se=n.memoizedState;E!==ye||ie!==se||Da||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof w=="function"&&(ff(n,a,w,o),se=n.memoizedState),(ge=Da||Zm(n,a,ge,o,ie,se,B)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,se,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,se,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=B,o=ge):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,jl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ir(n,t.child,null,u),n.child=ir(n,null,a,u)):bn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ia(t,n,u),t}function fg(t,n,a,o){return eo(),n.flags|=256,bn(t,n,a,o),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(t){return{baseLanes:t,cachePool:Jp()}}function vf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function dg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Pa(n):Ia(),Nt){var w=$t,B;if(B=w){e:{for(B=w,w=wi;B.nodeType!==8;){if(!w){w=null;break e}if(B=gi(B.nextSibling),B===null){w=null;break e}}w=B}w!==null?(n.memoizedState={dehydrated:w,treeContext:fs!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},B=Xn(18,null,null,0),B.stateNode=w,B.return=n,n.child=B,Un=n,$t=null,B=!0):B=!1}B||ps(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return ed(w)?n.lanes=32:n.lanes=536870912,null;na(n)}return w=o.children,o=o.fallback,u?(Ia(),u=n.mode,w=Xl({mode:"hidden",children:w},u),o=us(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,u=n.child,u.memoizedState=gf(a),u.childLanes=vf(t,E,a),n.memoizedState=mf,o):(Pa(n),_f(n,w))}if(B=t.memoizedState,B!==null&&(w=B.dehydrated,w!==null)){if(d)n.flags&256?(Pa(n),n.flags&=-257,n=xf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),u=o.fallback,w=n.mode,o=Xl({mode:"visible",children:o.children},w),u=us(u,w,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ir(n,t.child,null,a),o=n.child,o.memoizedState=gf(a),o.childLanes=vf(t,E,a),n.memoizedState=mf,n=u);else if(Pa(n),ed(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var ee=E.dgst;E=ee,o=Error(s(419)),o.stack="",o.digest=E,to({value:o,source:null,stack:null}),n=xf(t,n,a)}else if(xn||no(t,n,a,!1),E=(a&t.childLanes)!==0,xn||E){if(E=Xt,E!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Ws(t,o),Kn(E,t,o),ig;w.data==="$?"||Ff(),n=xf(t,n,a)}else w.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,$t=gi(w.nextSibling),Un=n,Nt=!0,hs=null,wi=!1,t!==null&&(ii[ai++]=Qi,ii[ai++]=Ji,ii[ai++]=fs,Qi=t.id,Ji=t.overflow,fs=n),n=_f(n,o.children),n.flags|=4096);return n}return u?(Ia(),u=o.fallback,w=n.mode,B=t.child,ee=B.sibling,o=Ki(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ee!==null?u=Ki(ee,u):(u=us(u,w,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,w=t.child.memoizedState,w===null?w=gf(a):(B=w.cachePool,B!==null?(ee=hn._currentValue,B=B.parent!==ee?{parent:ee,pool:ee}:B):B=Jp(),w={baseLanes:w.baseLanes|a,cachePool:B}),u.memoizedState=w,u.childLanes=vf(t,E,a),n.memoizedState=mf,o):(Pa(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function xf(t,n,a){return ir(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function hg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Iu(t.return,n,a)}function Sf(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function pg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(bn(t,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hg(t,a,n);else if(t.tag===19)hg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Se(pn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Gl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Gl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Sf(n,!0,a,null,d);break;case"together":Sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(no(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function Qx(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Na(n,hn,t.memoizedState.cache),eo();break;case 27:case 5:Ke(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?dg(t,n,a):(Pa(n),t=ia(t,n,a),t!==null?t.sibling:null);Pa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(no(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return pg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,og(t,n,a);case 24:Na(n,hn,t.memoizedState.cache)}return ia(t,n,a)}function mg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!yf(t,a)&&(n.flags&128)===0)return xn=!1,Qx(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Nt&&(n.flags&1048576)!==0&&Xp(n,El,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Cu(o)?(t=xs(o,t),n.tag=1,n=ug(null,n,o,t,a)):(n.tag=0,n=pf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===L){n.tag=11,n=ag(null,n,o,t,a);break e}else if(u===V){n.tag=14,n=sg(null,n,o,t,a);break e}}throw n=de(o)||o,Error(s(306,n,""))}}return n;case 0:return pf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xs(o,n.pendingProps),ug(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,ku(t,n),co(n,o,null,a);var E=n.memoizedState;if(o=E.cache,Na(n,hn,o),o!==d.cache&&Fu(n,[hn],a,!0),lo(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=fg(t,n,o,a);break e}else if(o!==u){u=ti(Error(s(424)),n),to(u),n=fg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=gi(t.firstChild),Un=n,Nt=!0,hs=null,wi=!0,a=qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(eo(),o===u){n=ia(t,n,a);break e}bn(t,n,o,a)}n=n.child}return n;case 26:return jl(t,n),t===null?(a=x0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,t=n.pendingProps,o=sc($.current).createElement(a),o[dn]=n,o[_n]=t,Tn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=x0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Nt&&(o=n.stateNode=g0(n.type,n.pendingProps,$.current),Un=n,wi=!0,u=$t,Xa(n.type)?(td=u,$t=gi(o.firstChild)):$t=u),bn(t,n,n.pendingProps.children,a),jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=$t)&&(o=TS(o,n.type,n.pendingProps,wi),o!==null?(n.stateNode=o,Un=n,$t=gi(o.firstChild),wi=!1,u=!0):u=!1),u||ps(n)),Ke(n),u=n.type,d=n.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,Qf(u,d)?o=null:E!==null&&Qf(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(t,n,kx,null,null,a),Uo._currentValue=u),jl(t,n),bn(t,n,o,a),n.child;case 6:return t===null&&Nt&&((t=a=$t)&&(a=AS(a,n.pendingProps,wi),a!==null?(n.stateNode=a,Un=n,$t=null,t=!0):t=!1),t||ps(n)),null;case 13:return dg(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ir(n,null,o,a):bn(t,n,o,a),n.child;case 11:return ag(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gs(n),u=wn(u),o=o(u),n.flags|=1,bn(t,n,o,a),n.child;case 14:return sg(t,n,n.type,n.pendingProps,a);case 15:return rg(t,n,n.type,n.pendingProps,a);case 19:return pg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Xl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ki(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return og(t,n,a);case 24:return gs(n),o=wn(hn),t===null?(u=Hu(),u===null&&(u=Xt,d=Bu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Vu(n),Na(n,hn,u)):((t.lanes&a)!==0&&(ku(t,n),co(n,null,null,a),lo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,hn,o)):(o=d.cache,Na(n,hn,o),o!==u.cache&&Fu(n,[hn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function gg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!E0(n)){if(n=si.current,n!==null&&((xt&4194048)===xt?Ri!==null:(xt&62914560)!==xt&&(xt&536870912)===0||n!==Ri))throw ro=Gu,$p;t.flags|=8192}}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,or|=n)}function vo(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Jx(t,n,a){var o=n.pendingProps;switch(Lu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(hn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&($r(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yp())),Kt(n),null;case 26:return a=n.memoizedState,t===null?(aa(n),a!==null?(Kt(n),gg(n,a)):(Kt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(aa(n),Kt(n),gg(n,a)):(Kt(n),n.flags&=-16777217):(t.memoizedProps!==o&&aa(n),Kt(n),n.flags&=-16777217),null;case 27:$e(n),a=$.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Ue.current,$r(n)?Wp(n):(t=g0(u,o,a),n.stateNode=t,aa(n))}return Kt(n),null;case 5:if($e(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(t=Ue.current,$r(n))Wp(n);else{switch(u=sc($.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[dn]=n,t[_n]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Tn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&aa(n)}}return Kt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=$.current,$r(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||c0(t.nodeValue,a)),t||ps(n)}else t=sc(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=$r(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else eo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Yp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(na(n),n):(na(n),null)}if(na(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Kt(n),null;case 4:return Je(),t===null&&Wf(n.stateNode.containerInfo),Kt(n),null;case 10:return ea(n.type),Kt(n),null;case 19:if(ue(pn),u=n.memoizedState,u===null)return Kt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)vo(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Gl(t),d!==null){for(n.flags|=128,vo(u,!1),t=d.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)jp(a,t),a=a.sibling;return Se(pn,pn.current&1|2),n.child}t=t.sibling}u.tail!==null&&bt()>Zl&&(n.flags|=128,o=!0,vo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Gl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),vo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Nt)return Kt(n),null}else 2*bt()-u.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,o=!0,vo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=bt(),n.sibling=null,t=pn.current,Se(pn,o?t&1|2:t&1),n):(Kt(n),null);case 22:case 23:return na(n),qu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ue(vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(hn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $x(t,n){switch(Lu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(hn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 13:if(na(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));eo()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ue(pn),null;case 4:return Je(),null;case 10:return ea(n.type),null;case 22:case 23:return na(n),qu(),t!==null&&ue(vs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(hn),null;case 25:return null;default:return null}}function vg(t,n){switch(Lu(n),n.tag){case 3:ea(hn),Je();break;case 26:case 27:case 5:$e(n);break;case 4:Je();break;case 13:na(n);break;case 19:ue(pn);break;case 10:ea(n.type);break;case 22:case 23:na(n),qu(),t!==null&&ue(vs);break;case 24:ea(hn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==u)}}catch(w){kt(n,n.return,w)}}function Fa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var E=o.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,u=n;var B=a,ee=w;try{ee()}catch(ge){kt(u,B,ge)}}}o=o.next}while(o!==d)}}catch(ge){kt(n,n.return,ge)}}function _g(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{sm(n,a)}catch(o){kt(t,t.return,o)}}}function xg(t,n,a){a.props=xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Ci(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function Sg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Mf(t,n,a){try{var o=t.stateNode;SS(o,t.type,a,n),o[_n]=n}catch(u){kt(t,t.return,u)}}function yg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ac));else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ql(t,n,a),t=t.sibling;t!==null;)ql(t,n,a),t=t.sibling}function Mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[dn]=t,n[_n]=a}catch(d){kt(t,t.return,d)}}var sa=!1,rn=!1,Tf=!1,bg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function eS(t,n){if(t=t.containerInfo,Zf=fc,t=Op(t),Mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,w=-1,B=-1,ee=0,ge=0,ye=t,ie=null;t:for(;;){for(var se;ye!==a||u!==0&&ye.nodeType!==3||(w=E+u),ye!==d||o!==0&&ye.nodeType!==3||(B=E+o),ye.nodeType===3&&(E+=ye.nodeValue.length),(se=ye.firstChild)!==null;)ie=ye,ye=se;for(;;){if(ye===t)break t;if(ie===a&&++ee===u&&(w=E),ie===d&&++ge===o&&(B=E),(se=ye.nextSibling)!==null)break;ye=ie,ie=ye.parentNode}ye=se}a=w===-1||B===-1?null:{start:w,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:t,selectionRange:a},fc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=xs(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){kt(a,a.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)$f(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$f(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Eg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),o&4&&_o(5,a);break;case 1:if(Ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){kt(a,a.return,E)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(a,a.return,E)}}o&64&&_g(a),o&512&&xo(a,a.return);break;case 3:if(Ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(t,n)}catch(E){kt(a,a.return,E)}}break;case 27:n===null&&o&4&&Mg(a);case 26:case 5:Ba(t,a),n===null&&o&4&&Sg(a),o&512&&xo(a,a.return);break;case 12:Ba(t,a);break;case 13:Ba(t,a),o&4&&wg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cS.bind(null,a),wS(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||rn,u=sa;var d=rn;sa=o,(rn=n)&&!d?za(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),sa=u,rn=d}break;case 30:break;default:Ba(t,a)}}function Tg(t){var n=t.alternate;n!==null&&(t.alternate=null,Tg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,Hn=!1;function ra(t,n,a){for(a=a.child;a!==null;)Ag(t,n,a),a=a.sibling}function Ag(t,n,a){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:rn||Ci(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ci(a,n);var o=qt,u=Hn;Xa(a.type)&&(qt=a.stateNode,Hn=!1),ra(t,n,a),Ro(a.stateNode),qt=o,Hn=u;break;case 5:rn||Ci(a,n);case 6:if(o=qt,u=Hn,qt=null,ra(t,n,a),qt=o,Hn=u,qt!==null)if(Hn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{qt.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:qt!==null&&(Hn?(t=qt,p0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Io(t)):p0(qt,a.stateNode));break;case 4:o=qt,u=Hn,qt=a.stateNode.containerInfo,Hn=!0,ra(t,n,a),qt=o,Hn=u;break;case 0:case 11:case 14:case 15:rn||Fa(2,a,n),rn||Fa(4,a,n),ra(t,n,a);break;case 1:rn||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&xg(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,ra(t,n,a),rn=o;break;default:ra(t,n,a)}}function wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Io(t)}catch(a){kt(n,n.return,a)}}function tS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new bg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new bg),n;default:throw Error(s(435,t.tag))}}function Af(t,n){var a=tS(t);n.forEach(function(o){var u=uS.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,E=n,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(Xa(w.type)){qt=w.stateNode,Hn=!1;break e}break;case 5:qt=w.stateNode,Hn=!1;break e;case 3:case 4:qt=w.stateNode.containerInfo,Hn=!0;break e}w=w.return}if(qt===null)throw Error(s(160));Ag(d,E,u),qt=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Rg(n,t),n=n.sibling}var mi=null;function Rg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Fa(3,t,t.return),_o(3,t),Fa(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(rn||a===null||Ci(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(Wn(n,t),qn(t),o&512&&(rn||a===null||Ci(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[wa]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,a),d[dn]=t,tn(d),o=d;break e;case"link":var E=M0("link","href",u).get(o+(a.href||""));if(E){for(var w=0;w<E.length;w++)if(d=E[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(w,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;case"meta":if(E=M0("meta","content",u).get(o+(a.content||""))){for(w=0;w<E.length;w++)if(d=E[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(w,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[dn]=t,tn(d),o=d}t.stateNode=o}else b0(u,t.type,t.stateNode);else t.stateNode=y0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?b0(u,t.type,t.stateNode):y0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(rn||a===null||Ci(a,a.return)),a!==null&&o&4&&Mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(rn||a===null||Ci(a,a.return)),t.flags&32){u=t.stateNode;try{Wt(u,"")}catch(se){kt(t,t.return,se)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Mf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(se){kt(t,t.return,se)}}break;case 3:if(lc=null,u=mi,mi=rc(n.containerInfo),Wn(n,t),mi=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Io(n.containerInfo)}catch(se){kt(t,t.return,se)}Tf&&(Tf=!1,Cg(t));break;case 4:o=mi,mi=rc(t.stateNode.containerInfo),Wn(n,t),qn(t),mi=o;break;case 12:Wn(n,t),qn(t);break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Uf=bt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Af(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=sa,ge=rn;if(sa=ee||u,rn=ge||B,Wn(n,t),rn=ge,sa=ee,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||sa||rn||Ss(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(d=B.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=B.stateNode;var ye=B.memoizedProps.style,ie=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;w.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(se){kt(B,B.return,se)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(se){kt(B,B.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Af(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Af(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(yg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=bf(t);ql(t,d,u);break;case 5:var E=a.stateNode;a.flags&32&&(Wt(E,""),a.flags&=-33);var w=bf(t);ql(t,w,E);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=bf(t);Ef(t,ee,B);break;default:throw Error(s(161))}}catch(ge){kt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Eg(t,n.alternate,n),n=n.sibling}function Ss(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Ss(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xg(n,n.return,a),Ss(n);break;case 27:Ro(n.stateNode);case 26:case 5:Ci(n,n.return),Ss(n);break;case 22:n.memoizedState===null&&Ss(n);break;case 30:Ss(n);break;default:Ss(n)}t=t.sibling}}function za(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:za(u,d,a),_o(4,d);break;case 1:if(za(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){kt(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)am(B[u],w)}catch(ee){kt(o,o.return,ee)}}a&&E&64&&_g(d),xo(d,d.return);break;case 27:Mg(d);case 26:case 5:za(u,d,a),a&&o===null&&E&4&&Sg(d),xo(d,d.return);break;case 12:za(u,d,a);break;case 13:za(u,d,a),a&&E&4&&wg(u,d);break;case 22:d.memoizedState===null&&za(u,d,a),xo(d,d.return);break;case 30:break;default:za(u,d,a)}n=n.sibling}}function wf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function Rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ni(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ng(t,n,a,o),n=n.sibling}function Ng(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,o),u&2048&&_o(9,n);break;case 1:Ni(t,n,a,o);break;case 3:Ni(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){Ni(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,E=d.id,w=d.onPostCommit;typeof w=="function"&&w(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){kt(n,n.return,B)}}else Ni(t,n,a,o);break;case 13:Ni(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?Ni(t,n,a,o):So(t,n):d._visibility&2?Ni(t,n,a,o):(d._visibility|=2,ar(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&wf(E,n);break;case 24:Ni(t,n,a,o),u&2048&&Rf(n.alternate,n);break;default:Ni(t,n,a,o)}}function ar(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,E=n,w=a,B=o,ee=E.flags;switch(E.tag){case 0:case 11:case 15:ar(d,E,w,B,u),_o(8,E);break;case 23:break;case 22:var ge=E.stateNode;E.memoizedState!==null?ge._visibility&2?ar(d,E,w,B,u):So(d,E):(ge._visibility|=2,ar(d,E,w,B,u)),u&&ee&2048&&wf(E.alternate,E);break;case 24:ar(d,E,w,B,u),u&&ee&2048&&Rf(E.alternate,E);break;default:ar(d,E,w,B,u)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&wf(o.alternate,o);break;case 24:So(a,o),u&2048&&Rf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var yo=8192;function sr(t){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)Dg(t),t=t.sibling}function Dg(t){switch(t.tag){case 26:sr(t),t.flags&yo&&t.memoizedState!==null&&HS(mi,t.memoizedState,t.memoizedProps);break;case 5:sr(t);break;case 3:case 4:var n=mi;mi=rc(t.stateNode.containerInfo),sr(t),mi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=yo,yo=16777216,sr(t),yo=n):sr(t));break;default:sr(t)}}function Ug(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Og(o,t)}Ug(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lg(t),t=t.sibling}function Lg(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):Mo(t);break;default:Mo(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Og(o,t)}Ug(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function Og(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(Tg(o),o===a){Sn=null;break e}if(u!==null){u.return=d,Sn=u;break e}Sn=d}}}var nS={getCacheForType:function(t){var n=wn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},iS=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Xt=null,mt=null,xt=0,It=0,Yn=null,Ha=!1,rr=!1,Cf=!1,oa=0,en=0,Ga=0,ys=0,Nf=0,ri=0,or=0,bo=null,Gn=null,Df=!1,Uf=0,Zl=1/0,Kl=null,Va=null,En=0,ka=null,lr=null,cr=0,Lf=0,Of=null,Pg=null,Eo=0,Pf=null;function Zn(){if((Pt&2)!==0&&xt!==0)return xt&-xt;if(I.T!==null){var t=Ks;return t!==0?t:Vf()}return Et()}function Ig(){ri===0&&(ri=(xt&536870912)===0||Nt?X():536870912);var t=si.current;return t!==null&&(t.flags|=32),ri}function Kn(t,n,a){(t===Xt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(ur(t,0),ja(t,xt,ri,!1)),Ie(t,a),((Pt&2)===0||t!==Xt)&&(t===Xt&&((Pt&2)===0&&(ys|=a),en===4&&ja(t,xt,ri,!1)),Di(t))}function Fg(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?rS(t,n):Bf(t,n,!0),d=o;do{if(u===0){rr&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!aS(a)){u=Bf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var w=t;u=bo;var B=w.current.memoizedState.isDehydrated;if(B&&(ur(w,E).flags|=256),E=Bf(w,E,!1),E!==2){if(Cf&&!B){w.errorRecoveryDisabledLanes|=d,ys|=d,u=4;break e}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){ur(t,0),ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,ri,!Ha);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Uf+300-bt(),10<u)){if(ja(o,n,ri,!Ha),He(o,0,!0)!==0)break e;o.timeoutHandle=d0(Bg.bind(null,o,a,Gn,Kl,Df,n,ri,ys,or,Ha,d,2,-0,0),u);break e}Bg(o,a,Gn,Kl,Df,n,ri,ys,or,Ha,d,0,-0,0)}}break}while(!0);Di(t)}function Bg(t,n,a,o,u,d,E,w,B,ee,ge,ye,ie,se){if(t.timeoutHandle=-1,ye=n.subtreeFlags,(ye&8192||(ye&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:zS},Dg(n),ye=GS(),ye!==null)){t.cancelPendingCommit=ye(Xg.bind(null,t,n,d,a,o,u,E,w,B,ge,1,ie,se)),ja(t,d,E,!ee);return}Xg(t,n,d,a,o,u,E,w,B)}function aS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~Nf,n&=~ys,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Le(u),E=1<<d;o[d]=-1,u&=~E}a!==0&&pe(t,a,n)}function Ql(){return(Pt&6)===0?(To(0),!1):!0}function If(){if(mt!==null){if(It===0)var t=mt.return;else t=mt,$i=ms=null,Ju(t),nr=null,mo=0,t=mt;for(;t!==null;)vg(t.alternate,t),t=t.return;mt=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,MS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),If(),Xt=t,mt=a=Ki(t.current,null),xt=n,It=0,Yn=null,Ha=!1,rr=Pe(t,n),Cf=!1,or=ri=Nf=ys=Ga=en=0,Gn=bo=null,Df=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Le(o),d=1<<u;n|=t[u],o&=~d}return oa=n,xl(),a}function zg(t,n){dt=null,I.H=Bl,n===so||n===Rl?(n=nm(),It=3):n===$p?(n=nm(),It=4):It=n===ig?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,mt===null&&(en=1,kl(t,ti(n,t.current)))}function Hg(){var t=I.H;return I.H=Bl,t===null?Bl:t}function Gg(){var t=I.A;return I.A=nS,t}function Ff(){en=4,Ha||(xt&4194048)!==xt&&si.current!==null||(rr=!0),(Ga&134217727)===0&&(ys&134217727)===0||Xt===null||ja(Xt,xt,ri,!1)}function Bf(t,n,a){var o=Pt;Pt|=2;var u=Hg(),d=Gg();(Xt!==t||xt!==n)&&(Kl=null,ur(t,n)),n=!1;var E=en;e:do try{if(It!==0&&mt!==null){var w=mt,B=Yn;switch(It){case 8:If(),E=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ee=It;if(It=0,Yn=null,fr(t,w,B,ee),a&&rr){E=0;break e}break;default:ee=It,It=0,Yn=null,fr(t,w,B,ee)}}sS(),E=en;break}catch(ge){zg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,$i=ms=null,Pt=o,I.H=u,I.A=d,mt===null&&(Xt=null,xt=0,xl()),E}function sS(){for(;mt!==null;)Vg(mt)}function rS(t,n){var a=Pt;Pt|=2;var o=Hg(),u=Gg();Xt!==t||xt!==n?(Kl=null,Zl=bt()+500,ur(t,n)):rr=Pe(t,n);e:do try{if(It!==0&&mt!==null){n=mt;var d=Yn;t:switch(It){case 1:It=0,Yn=null,fr(t,n,d,1);break;case 2:case 9:if(em(d)){It=0,Yn=null,kg(n);break}n=function(){It!==2&&It!==9||Xt!==t||(It=7),Di(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:em(d)?(It=0,Yn=null,kg(n)):(It=0,Yn=null,fr(t,n,d,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var w=mt;if(!E||E0(E)){It=0,Yn=null;var B=w.sibling;if(B!==null)mt=B;else{var ee=w.return;ee!==null?(mt=ee,Jl(ee)):mt=null}break t}}It=0,Yn=null,fr(t,n,d,5);break;case 6:It=0,Yn=null,fr(t,n,d,6);break;case 8:If(),en=6;break e;default:throw Error(s(462))}}oS();break}catch(ge){zg(t,ge)}while(!0);return $i=ms=null,I.H=o,I.A=u,Pt=a,mt!==null?0:(Xt=null,xt=0,xl(),en)}function oS(){for(;mt!==null&&!Ot();)Vg(mt)}function Vg(t){var n=mg(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?Jl(t):mt=n}function kg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=cg(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=cg(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Ju(n);default:vg(a,n),n=mt=jp(n,oa),n=mg(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?Jl(t):mt=n}function fr(t,n,a,o){$i=ms=null,Ju(n),nr=null,mo=0;var u=n.return;try{if(Kx(t,u,n,a,xt)){en=1,kl(t,ti(a,t.current)),mt=null;return}}catch(d){if(u!==null)throw mt=u,d;en=1,kl(t,ti(a,t.current)),mt=null;return}n.flags&32768?(Nt||o===1?t=!0:rr||(xt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),jg(n,t)):Jl(n)}function Jl(t){var n=t;do{if((n.flags&32768)!==0){jg(n,Ha);return}t=n.return;var a=Jx(n.alternate,n,oa);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);en===0&&(en=5)}function jg(t,n){do{var a=$x(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);en=6,mt=null}function Xg(t,n,a,o,u,d,E,w,B){t.cancelPendingCommit=null;do $l();while(En!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=wu,Te(t,a,d,E,w,B),t===Xt&&(mt=Xt=null,xt=0),lr=n,ka=t,cr=a,Lf=d,Of=u,Pg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fS(wt,function(){return Kg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=z.p,z.p=2,E=Pt,Pt|=4;try{eS(t,n,a)}finally{Pt=E,z.p=u,I.T=o}}En=1,Wg(),qg(),Yg()}}function Wg(){if(En===1){En=0;var t=ka,n=lr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=Pt;Pt|=4;try{Rg(n,t);var d=Kf,E=Op(t.containerInfo),w=d.focusedElem,B=d.selectionRange;if(E!==w&&w&&w.ownerDocument&&Lp(w.ownerDocument.documentElement,w)){if(B!==null&&Mu(w)){var ee=B.start,ge=B.end;if(ge===void 0&&(ge=ee),"selectionStart"in w)w.selectionStart=ee,w.selectionEnd=Math.min(ge,w.value.length);else{var ye=w.ownerDocument||document,ie=ye&&ye.defaultView||window;if(ie.getSelection){var se=ie.getSelection(),it=w.textContent.length,Qe=Math.min(B.start,it),Ht=B.end===void 0?Qe:Math.min(B.end,it);!se.extend&&Qe>Ht&&(E=Ht,Ht=Qe,Qe=E);var Y=Up(w,Qe),j=Up(w,Ht);if(Y&&j&&(se.rangeCount!==1||se.anchorNode!==Y.node||se.anchorOffset!==Y.offset||se.focusNode!==j.node||se.focusOffset!==j.offset)){var Q=ye.createRange();Q.setStart(Y.node,Y.offset),se.removeAllRanges(),Qe>Ht?(se.addRange(Q),se.extend(j.node,j.offset)):(Q.setEnd(j.node,j.offset),se.addRange(Q))}}}}for(ye=[],se=w;se=se.parentNode;)se.nodeType===1&&ye.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ye.length;w++){var xe=ye[w];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}fc=!!Zf,Kf=Zf=null}finally{Pt=u,z.p=o,I.T=a}}t.current=n,En=2}}function qg(){if(En===2){En=0;var t=ka,n=lr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=Pt;Pt|=4;try{Eg(t,n.alternate,n)}finally{Pt=u,z.p=o,I.T=a}}En=3}}function Yg(){if(En===4||En===3){En=0,ot();var t=ka,n=lr,a=cr,o=Pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,lr=ka=null,Zg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Dt(a),n=n.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=z.p,z.p=2,I.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var w=o[E];d(w.value,{componentStack:w.stack})}}finally{I.T=n,z.p=u}}(cr&3)!==0&&$l(),Di(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Pf?Eo++:(Eo=0,Pf=t):Eo=0,To(0)}}function Zg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function $l(t){return Wg(),qg(),Yg(),Kg()}function Kg(){if(En!==5)return!1;var t=ka,n=Lf;Lf=0;var a=Dt(cr),o=I.T,u=z.p;try{z.p=32>a?32:a,I.T=null,a=Of,Of=null;var d=ka,E=cr;if(En=0,lr=ka=null,cr=0,(Pt&6)!==0)throw Error(s(331));var w=Pt;if(Pt|=4,Lg(d.current),Ng(d,d.current,E,a),Pt=w,To(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{z.p=u,I.T=o,Zg(t,n)}}function Qg(t,n,a){n=ti(a,n),n=hf(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Ie(t,2),Di(t))}function kt(t,n,a){if(t.tag===3)Qg(t,t,a);else for(;n!==null;){if(n.tag===3){Qg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=ti(a,t),a=tg(2),o=La(n,a,2),o!==null&&(ng(a,o,n,t),Ie(o,2),Di(o));break}}n=n.return}}function zf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new iS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Cf=!0,u.add(a),t=lS.bind(null,t,n,a),n.then(t,t))}function lS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(xt&a)===a&&(en===4||en===3&&(xt&62914560)===xt&&300>bt()-Uf?(Pt&2)===0&&ur(t,0):Nf|=a,or===xt&&(or=0)),Di(t)}function Jg(t,n){n===0&&(n=Re()),t=Ws(t,n),t!==null&&(Ie(t,n),Di(t))}function cS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Jg(t,a)}function uS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Jg(t,a)}function fS(t,n){return pt(t,n)}var ec=null,dr=null,Hf=!1,tc=!1,Gf=!1,Ms=0;function Di(t){t!==dr&&t.next===null&&(dr===null?ec=dr=t:dr=dr.next=t),tc=!0,Hf||(Hf=!0,hS())}function To(t,n){if(!Gf&&tc){Gf=!0;do for(var a=!1,o=ec;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Le(42|t)+1)-1,d&=u&~(E&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,n0(o,d))}else d=xt,d=He(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pe(o,d)||(a=!0,n0(o,d));o=o.next}while(a);Gf=!1}}function dS(){$g()}function $g(){tc=Hf=!1;var t=0;Ms!==0&&(yS()&&(t=Ms),Ms=0);for(var n=bt(),a=null,o=ec;o!==null;){var u=o.next,d=e0(o,n);d===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(dr=a)):(a=o,(t!==0||(d&3)!==0)&&(tc=!0)),o=u}To(t)}function e0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Le(d),w=1<<E,B=u[E];B===-1?((w&a)===0||(w&o)!==0)&&(u[E]=lt(w,n)):B<=n&&(t.expiredLanes|=w),d&=~w}if(n=Xt,a=xt,a=He(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&St(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&St(o),Dt(a)){case 2:case 8:a=yt;break;case 32:a=wt;break;case 268435456:a=P;break;default:a=wt}return o=t0.bind(null,t),a=pt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&St(o),t.callbackPriority=2,t.callbackNode=null,2}function t0(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var o=xt;return o=He(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Fg(t,o,n),e0(t,bt()),t.callbackNode!=null&&t.callbackNode===a?t0.bind(null,t):null)}function n0(t,n){if($l())return null;Fg(t,n,!0)}function hS(){bS(function(){(Pt&6)!==0?pt(Yt,dS):$g()})}function Vf(){return Ms===0&&(Ms=X()),Ms}function i0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dl(""+t)}function a0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function pS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=i0((u[_n]||null).action),E=o.submitter;E&&(n=(n=E[_n]||null)?i0(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var w=new gl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ms!==0){var B=E?a0(u,E):new FormData(u);lf(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(w.preventDefault(),B=E?a0(u,E):new FormData(u),lf(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var kf=0;kf<Au.length;kf++){var jf=Au[kf],mS=jf.toLowerCase(),gS=jf[0].toUpperCase()+jf.slice(1);pi(mS,"on"+gS)}pi(Fp,"onAnimationEnd"),pi(Bp,"onAnimationIteration"),pi(zp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Lx,"onTransitionRun"),pi(Ox,"onTransitionStart"),pi(Px,"onTransitionCancel"),pi(Hp,"onTransitionEnd"),Ra("onMouseEnter",["mouseout","mouseover"]),Ra("onMouseLeave",["mouseout","mouseover"]),Ra("onPointerEnter",["pointerout","pointerover"]),Ra("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function s0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var w=o[E],B=w.instance,ee=w.currentTarget;if(w=w.listener,B!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ee;try{d(u)}catch(ge){Vl(ge)}u.currentTarget=null,d=B}else for(E=0;E<o.length;E++){if(w=o[E],B=w.instance,ee=w.currentTarget,w=w.listener,B!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ee;try{d(u)}catch(ge){Vl(ge)}u.currentTarget=null,d=B}}}}function gt(t,n){var a=n[Fs];a===void 0&&(a=n[Fs]=new Set);var o=t+"__bubble";a.has(o)||(r0(n,t,2,!1),a.add(o))}function Xf(t,n,a){var o=0;n&&(o|=4),r0(a,t,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Wf(t){if(!t[nc]){t[nc]=!0,ll.forEach(function(a){a!=="selectionchange"&&(vS.has(a)||Xf(a,!1,t),Xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,Xf("selectionchange",!1,n))}}function r0(t,n,a,o){switch(N0(n)){case 2:var u=jS;break;case 8:u=XS;break;default:u=rd}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function qf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var w=o.stateNode.containerInfo;if(w===u)break;if(E===4)for(E=o.return;E!==null;){var B=E.tag;if((B===3||B===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;w!==null;){if(E=di(w),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){o=d=E;continue e}w=w.parentNode}}o=o.return}hp(function(){var ee=d,ge=fu(a),ye=[];e:{var ie=Gp.get(t);if(ie!==void 0){var se=gl,it=t;switch(t){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":se=fx;break;case"focusin":it="focus",se=vu;break;case"focusout":it="blur",se=vu;break;case"beforeblur":case"afterblur":se=vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=px;break;case Fp:case Bp:case zp:se=nx;break;case Hp:se=gx;break;case"scroll":case"scrollend":se=Q_;break;case"wheel":se=_x;break;case"copy":case"cut":case"paste":se=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=_p;break;case"toggle":case"beforetoggle":se=Sx}var Qe=(n&4)!==0,Ht=!Qe&&(t==="scroll"||t==="scrollend"),Y=Qe?ie!==null?ie+"Capture":null:ie;Qe=[];for(var j=ee,Q;j!==null;){var xe=j;if(Q=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||Q===null||Y===null||(xe=jr(j,Y),xe!=null&&Qe.push(wo(j,xe,Q))),Ht)break;j=j.return}0<Qe.length&&(ie=new se(ie,it,null,a,ge),ye.push({event:ie,listeners:Qe}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ie&&a!==uu&&(it=a.relatedTarget||a.fromElement)&&(di(it)||it[Aa]))break e;if((se||ie)&&(ie=ge.window===ge?ge:(ie=ge.ownerDocument)?ie.defaultView||ie.parentWindow:window,se?(it=a.relatedTarget||a.toElement,se=ee,it=it?di(it):null,it!==null&&(Ht=c(it),Qe=it.tag,it!==Ht||Qe!==5&&Qe!==27&&Qe!==6)&&(it=null)):(se=null,it=ee),se!==it)){if(Qe=gp,xe="onMouseLeave",Y="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=_p,xe="onPointerLeave",Y="onPointerEnter",j="pointer"),Ht=se==null?ie:Ei(se),Q=it==null?ie:Ei(it),ie=new Qe(xe,j+"leave",se,a,ge),ie.target=Ht,ie.relatedTarget=Q,xe=null,di(ge)===ee&&(Qe=new Qe(Y,j+"enter",it,a,ge),Qe.target=Q,Qe.relatedTarget=Ht,xe=Qe),Ht=xe,se&&it)t:{for(Qe=se,Y=it,j=0,Q=Qe;Q;Q=hr(Q))j++;for(Q=0,xe=Y;xe;xe=hr(xe))Q++;for(;0<j-Q;)Qe=hr(Qe),j--;for(;0<Q-j;)Y=hr(Y),Q--;for(;j--;){if(Qe===Y||Y!==null&&Qe===Y.alternate)break t;Qe=hr(Qe),Y=hr(Y)}Qe=null}else Qe=null;se!==null&&o0(ye,ie,se,Qe,!1),it!==null&&Ht!==null&&o0(ye,Ht,it,Qe,!0)}}e:{if(ie=ee?Ei(ee):window,se=ie.nodeName&&ie.nodeName.toLowerCase(),se==="select"||se==="input"&&ie.type==="file")var ke=Ap;else if(Ep(ie))if(wp)ke=Nx;else{ke=Rx;var ht=wx}else se=ie.nodeName,!se||se.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&Ai(ee.elementType)&&(ke=Ap):ke=Cx;if(ke&&(ke=ke(t,ee))){Tp(ye,ke,a,ge);break e}ht&&ht(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&In(ie,"number",ie.value)}switch(ht=ee?Ei(ee):window,t){case"focusin":(Ep(ht)||ht.contentEditable==="true")&&(ks=ht,bu=ee,Jr=null);break;case"focusout":Jr=bu=ks=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Pp(ye,a,ge);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":Pp(ye,a,ge)}var Ye;if(xu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Vs?Mp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(xp&&a.locale!=="ko"&&(Vs||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Vs&&(Ye=pp()):(Ca=ge,pu="value"in Ca?Ca.value:Ca.textContent,Vs=!0)),ht=ic(ee,tt),0<ht.length&&(tt=new vp(tt,t,null,a,ge),ye.push({event:tt,listeners:ht}),Ye?tt.data=Ye:(Ye=bp(a),Ye!==null&&(tt.data=Ye)))),(Ye=Mx?bx(t,a):Ex(t,a))&&(tt=ic(ee,"onBeforeInput"),0<tt.length&&(ht=new vp("onBeforeInput","beforeinput",null,a,ge),ye.push({event:ht,listeners:tt}),ht.data=Ye)),pS(ye,t,ee,a,ge)}s0(ye,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=jr(t,a),u!=null&&o.unshift(wo(t,u,d)),u=jr(t,n),u!=null&&o.push(wo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function o0(t,n,a,o,u){for(var d=n._reactName,E=[];a!==null&&a!==o;){var w=a,B=w.alternate,ee=w.stateNode;if(w=w.tag,B!==null&&B===o)break;w!==5&&w!==26&&w!==27||ee===null||(B=ee,u?(ee=jr(a,d),ee!=null&&E.unshift(wo(a,ee,B))):u||(ee=jr(a,d),ee!=null&&E.push(wo(a,ee,B)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var _S=/\r\n?/g,xS=/\u0000|\uFFFD/g;function l0(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(xS,"")}function c0(t,n){return n=l0(n),l0(t)===n}function ac(){}function zt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Wt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Wt(t,""+o);break;case"className":ne(t,"class",o);break;case"tabIndex":ne(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(t,a,o);break;case"style":hi(t,o,d);break;case"data":if(n!=="object"){ne(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",u.name,u,null),zt(t,n,"formEncType",u.formEncType,u,null),zt(t,n,"formMethod",u.formMethod,u,null),zt(t,n,"formTarget",u.formTarget,u,null)):(zt(t,n,"encType",u.encType,u,null),zt(t,n,"method",u.method,u,null),zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ac);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=dl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),oe(t,"popover",o);break;case"xlinkActuate":K(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":K(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":K(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":K(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":K(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":K(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":K(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":K(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":K(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fl.get(a)||a,oe(t,a,o))}}function Yf(t,n,a,o,u,d){switch(a){case"style":hi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Wt(t,o):(typeof o=="number"||typeof o=="bigint")&&Wt(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ac);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):oe(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:zt(t,n,d,E,a,null)}}u&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var w=d=E=u=null,B=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":E=ge;break;case"checked":B=ge;break;case"defaultChecked":ee=ge;break;case"value":d=ge;break;case"defaultValue":w=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:zt(t,n,o,ge,a,null)}}Pn(t,d,w,B,ee,E,u,!1),Vt(t);return;case"select":gt("invalid",t),o=E=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":E=w;break;case"multiple":o=w;default:zt(t,n,u,w,a,null)}n=d,a=E,t.multiple=!!o,n!=null?Fn(t,!!o,n,!1):a!=null&&Fn(t,!!o,a,!0);return;case"textarea":gt("invalid",t),d=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(w=a[E],w!=null))switch(E){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:zt(t,n,E,w,a,null)}Ut(t,o,u,d),Vt(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,B,o,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Ao.length;o++)gt(Ao[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:zt(t,n,ee,o,a,null)}return;default:if(Ai(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&Yf(t,n,ge,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&zt(t,n,w,o,a,null))}function SS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,w=null,B=null,ee=null,ge=null;for(se in a){var ye=a[se];if(a.hasOwnProperty(se)&&ye!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":B=ye;default:o.hasOwnProperty(se)||zt(t,n,se,null,o,ye)}}for(var ie in o){var se=o[ie];if(ye=a[ie],o.hasOwnProperty(ie)&&(se!=null||ye!=null))switch(ie){case"type":d=se;break;case"name":u=se;break;case"checked":ee=se;break;case"defaultChecked":ge=se;break;case"value":E=se;break;case"defaultValue":w=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==ye&&zt(t,n,ie,se,o,ye)}}vt(t,E,w,B,ee,ge,d,u);return;case"select":se=E=w=ie=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":se=B;default:o.hasOwnProperty(d)||zt(t,n,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":ie=d;break;case"defaultValue":w=d;break;case"multiple":E=d;default:d!==B&&zt(t,n,u,d,o,B)}n=w,a=E,o=se,ie!=null?Fn(t,!!a,ie,!1):!!o!=!!a&&(n!=null?Fn(t,!!a,n,!0):Fn(t,!!a,a?[]:"",!1));return;case"textarea":se=ie=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:zt(t,n,w,null,o,u)}for(E in o)if(u=o[E],d=a[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":ie=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&zt(t,n,E,u,o,d)}Yi(t,ie,se);return;case"option":for(var it in a)if(ie=a[it],a.hasOwnProperty(it)&&ie!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:zt(t,n,it,null,o,ie)}for(B in o)if(ie=o[B],se=a[B],o.hasOwnProperty(B)&&ie!==se&&(ie!=null||se!=null))switch(B){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:zt(t,n,B,ie,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)ie=a[Qe],a.hasOwnProperty(Qe)&&ie!=null&&!o.hasOwnProperty(Qe)&&zt(t,n,Qe,null,o,ie);for(ee in o)if(ie=o[ee],se=a[ee],o.hasOwnProperty(ee)&&ie!==se&&(ie!=null||se!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:zt(t,n,ee,ie,o,se)}return;default:if(Ai(n)){for(var Ht in a)ie=a[Ht],a.hasOwnProperty(Ht)&&ie!==void 0&&!o.hasOwnProperty(Ht)&&Yf(t,n,Ht,void 0,o,ie);for(ge in o)ie=o[ge],se=a[ge],!o.hasOwnProperty(ge)||ie===se||ie===void 0&&se===void 0||Yf(t,n,ge,ie,o,se);return}}for(var Y in a)ie=a[Y],a.hasOwnProperty(Y)&&ie!=null&&!o.hasOwnProperty(Y)&&zt(t,n,Y,null,o,ie);for(ye in o)ie=o[ye],se=a[ye],!o.hasOwnProperty(ye)||ie===se||ie==null&&se==null||zt(t,n,ye,ie,o,se)}var Zf=null,Kf=null;function sc(t){return t.nodeType===9?t:t.ownerDocument}function u0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function yS(){var t=window.event;return t&&t.type==="popstate"?t===Jf?!1:(Jf=t,!0):(Jf=null,!1)}var d0=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,h0=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof h0<"u"?function(t){return h0.resolve(null).then(t).catch(ES)}:d0;function ES(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function p0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&Ro(E.documentElement),a&2&&Ro(E.body),a&4)for(a=E.head,Ro(a),E=a.firstChild;E;){var w=E.nextSibling,B=E.nodeName;E[wa]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=w}}if(u===0){t.removeChild(d),Io(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Io(n)}function $f(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function TS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function AS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function ed(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function wS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var td=null;function m0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function g0(t,n,a){switch(n=sc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zs(t)}var oi=new Map,v0=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=z.d;z.d={f:RS,r:CS,D:NS,C:DS,L:US,m:LS,X:PS,S:OS,M:IS};function RS(){var t=la.f(),n=Ql();return t||n}function CS(t){var n=Xi(t);n!==null&&n.tag===5&&n.type==="form"?Fm(n):la.r(t)}var pr=typeof document>"u"?null:document;function _0(t,n,a){var o=pr;if(o&&typeof n=="string"&&n){var u=jt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),v0.has(u)||(v0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function NS(t){la.D(t),_0("dns-prefetch",t,null)}function DS(t,n){la.C(t,n),_0("preconnect",t,n)}function US(t,n,a){la.L(t,n,a);var o=pr;if(o&&t&&n){var u='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+jt(a.imageSizes)+'"]')):u+='[href="'+jt(t)+'"]';var d=u;switch(n){case"style":d=mr(t);break;case"script":d=gr(t)}oi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function LS(t,n){la.m(t,n);var a=pr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+jt(o)+'"][href="'+jt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=gr(t)}if(!oi.has(d)&&(t=_({rel:"modulepreload",href:t},n),oi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),Tn(o,"link",t),tn(o),a.head.appendChild(o)}}}function OS(t,n,a){la.S(t,n,a);var o=pr;if(o&&t){var u=Wi(o).hoistableStyles,d=mr(t);n=n||"default";var E=u.get(d);if(!E){var w={loading:0,preload:null};if(E=o.querySelector(Co(d)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(d))&&nd(t,a);var B=E=o.createElement("link");tn(B),Tn(B,"link",t),B._p=new Promise(function(ee,ge){B.onload=ee,B.onerror=ge}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,oc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:w},u.set(d,E)}}}function PS(t,n){la.X(t,n);var a=pr;if(a&&t){var o=Wi(a).hoistableScripts,u=gr(t),d=o.get(u);d||(d=a.querySelector(No(u)),d||(t=_({src:t,async:!0},n),(n=oi.get(u))&&id(t,n),d=a.createElement("script"),tn(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function IS(t,n){la.M(t,n);var a=pr;if(a&&t){var o=Wi(a).hoistableScripts,u=gr(t),d=o.get(u);d||(d=a.querySelector(No(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&id(t,n),d=a.createElement("script"),tn(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function x0(t,n,a,o){var u=(u=$.current)?rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Wi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mr(a.href);var d=Wi(u).hoistableStyles,E=d.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=u.querySelector(Co(t)))&&!d._p&&(E.instance=d,E.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),d||FS(u,t,a,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Wi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function mr(t){return'href="'+jt(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function S0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function FS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),tn(n),t.head.appendChild(n))}function gr(t){return'[src="'+jt(t)+'"]'}function No(t){return"script[async]"+t}function y0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+jt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),Tn(o,"style",u),oc(o,a.precedence,t),n.instance=o;case"stylesheet":u=mr(a.href);var d=t.querySelector(Co(u));if(d)return n.state.loading|=4,n.instance=d,tn(d),d;o=S0(a),(u=oi.get(u))&&nd(o,u),d=(t.ownerDocument||t).createElement("link"),tn(d);var E=d;return E._p=new Promise(function(w,B){E.onload=w,E.onerror=B}),Tn(d,"link",o),n.state.loading|=4,oc(d,a.precedence,t),n.instance=d;case"script":return d=gr(a.src),(u=t.querySelector(No(d)))?(n.instance=u,tn(u),u):(o=a,(u=oi.get(d))&&(o=_({},a),id(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),Tn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,t));return n.instance}function oc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var w=o[E];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function M0(t,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[wa]||d[dn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=t+E;var w=o.get(E);w?w.push(d):o.set(E,[d])}}return o}function b0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function BS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Do=null;function zS(){}function HS(t,n,a){if(Do===null)throw Error(s(475));var o=Do;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=mr(a.href),d=t.querySelector(Co(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=cc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,tn(d);return}d=t.ownerDocument||t,a=S0(a),(u=oi.get(u))&&nd(a,u),d=d.createElement("link"),tn(d);var E=d;E._p=new Promise(function(w,B){E.onload=w,E.onerror=B}),Tn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=cc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function GS(){if(Do===null)throw Error(s(475));var t=Do;return t.stylesheets&&t.count===0&&ad(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&ad(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function cc(){if(this.count--,this.count===0){if(this.stylesheets)ad(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uc=null;function ad(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(VS,t),uc=null,cc.call(t))}function VS(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var o=a.get(null);else{a=new Map,uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,u),a.set(E,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:D,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function kS(t,n,a,o,u,d,E,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function T0(t,n,a,o,u,d,E,w,B,ee,ge,ye){return t=new kS(t,n,a,E,w,B,ee,ye),n=1,d===!0&&(n|=24),d=Xn(3,null,null,n),t.current=d,d.stateNode=t,n=Bu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Vu(d),t}function A0(t){return t?(t=qs,t):qs}function w0(t,n,a,o,u,d){u=A0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=La(t,o,n),a!==null&&(Kn(a,t,n),oo(a,t,n))}function R0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sd(t,n){R0(t,n),(t=t.alternate)&&R0(t,n)}function C0(t){if(t.tag===13){var n=Ws(t,67108864);n!==null&&Kn(n,t,67108864),sd(t,67108864)}}var fc=!0;function jS(t,n,a,o){var u=I.T;I.T=null;var d=z.p;try{z.p=2,rd(t,n,a,o)}finally{z.p=d,I.T=u}}function XS(t,n,a,o){var u=I.T;I.T=null;var d=z.p;try{z.p=8,rd(t,n,a,o)}finally{z.p=d,I.T=u}}function rd(t,n,a,o){if(fc){var u=od(o);if(u===null)qf(t,n,o,dc,a),D0(t,o);else if(qS(u,t,n,a,o))o.stopPropagation();else if(D0(t,o),n&4&&-1<WS.indexOf(t)){for(;u!==null;){var d=Xi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Fe(d.pendingLanes);if(E!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var B=1<<31-Le(E);w.entanglements[1]|=B,E&=~B}Di(d),(Pt&6)===0&&(Zl=bt()+500,To(0))}}break;case 13:w=Ws(d,2),w!==null&&Kn(w,d,2),Ql(),sd(d,2)}if(d=od(o),d===null&&qf(t,n,o,dc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else qf(t,n,o,null,a)}}function od(t){return t=fu(t),ld(t)}var dc=null;function ld(t){if(dc=null,t=di(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return dc=t,null}function N0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case Yt:return 2;case yt:return 8;case wt:case je:return 32;case P:return 268435456;default:return 32}default:return 32}}var cd=!1,Wa=null,qa=null,Ya=null,Lo=new Map,Oo=new Map,Za=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D0(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Xi(n),n!==null&&C0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function qS(t,n,a,o,u){switch(n){case"focusin":return Wa=Po(Wa,t,n,a,o,u),!0;case"dragenter":return qa=Po(qa,t,n,a,o,u),!0;case"mouseover":return Ya=Po(Ya,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Lo.set(d,Po(Lo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Oo.set(d,Po(Oo.get(d)||null,t,n,a,o,u)),!0}return!1}function U0(t){var n=di(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,fi(t.priority,function(){if(a.tag===13){var o=Zn();o=nt(o);var u=Ws(a,o);u!==null&&Kn(u,a,o),sd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=od(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);uu=o,a.target.dispatchEvent(o),uu=null}else return n=Xi(a),n!==null&&C0(n),t.blockedOn=a,!1;n.shift()}return!0}function L0(t,n,a){hc(t)&&a.delete(n)}function YS(){cd=!1,Wa!==null&&hc(Wa)&&(Wa=null),qa!==null&&hc(qa)&&(qa=null),Ya!==null&&hc(Ya)&&(Ya=null),Lo.forEach(L0),Oo.forEach(L0)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,cd||(cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,YS)))}var mc=null;function O0(t){mc!==t&&(mc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ld(o||a)===null)continue;break}var d=Xi(a);d!==null&&(t.splice(n,3),n-=3,lf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Io(t){function n(B){return pc(B,t)}Wa!==null&&pc(Wa,t),qa!==null&&pc(qa,t),Ya!==null&&pc(Ya,t),Lo.forEach(n),Oo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)U0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],E=u[_n]||null;if(typeof d=="function")E||O0(a);else if(E){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[_n]||null)w=E.formAction;else if(ld(u)!==null)continue}else w=E.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),O0(a)}}}function ud(t){this._internalRoot=t}gc.prototype.render=ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Zn();w0(a,o,t,n,null,null)},gc.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;w0(t.current,2,null,t,null,null),Ql(),n[Aa]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Et();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&U0(t)}};var P0=e.version;if(P0!=="19.1.0")throw Error(s(527,P0,"19.1.0"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var ZS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{me=vc.inject(ZS),_e=vc}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Qm,d=Jm,E=$m,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=T0(t,1,!1,null,null,a,o,u,d,E,w,null),t[Aa]=n.current,Wf(t),new ud(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Qm,E=Jm,w=$m,B=null,ee=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(ee=a.formState)),n=T0(t,1,!0,n,a??null,o,u,d,E,w,B,ee),n.context=A0(null),a=n.current,o=Zn(),o=nt(o),u=Ua(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Ie(n,a),Di(n),t[Aa]=n.current,Wf(t),new gc(n)},Bo.version="19.1.0",Bo}var X0;function ry(){if(X0)return hd.exports;X0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=sy(),hd.exports}var oy=ry();const ly=Jv(oy);var zo={},W0;function cy(){if(W0)return zo;W0=1,Object.defineProperty(zo,"__esModule",{value:!0}),zo.parse=f,zo.serialize=h;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,M){const b=new c,C=v.length;if(C<2)return b;const y=(M==null?void 0:M.decode)||_;let x=0;do{const N=v.indexOf("=",x);if(N===-1)break;const D=v.indexOf(";",x),L=D===-1?C:D;if(N>L){x=v.lastIndexOf(";",N-1)+1;continue}const F=m(v,x,N),H=g(v,N,F),V=v.slice(F,H);if(b[V]===void 0){let A=m(v,N+1,L),U=g(v,L,A);const he=y(v.slice(A,U));b[V]=he}x=L+1}while(x<C);return b}function m(v,M,b){do{const C=v.charCodeAt(M);if(C!==32&&C!==9)return M}while(++M<b);return b}function g(v,M,b){for(;M>b;){const C=v.charCodeAt(--M);if(C!==32&&C!==9)return M+1}return b}function h(v,M,b){const C=(b==null?void 0:b.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=C(M);if(!e.test(y))throw new TypeError(`argument val is invalid: ${M}`);let x=v+"="+y;if(!b)return x;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);x+="; Max-Age="+b.maxAge}if(b.domain){if(!i.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);x+="; Domain="+b.domain}if(b.path){if(!s.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);x+="; Path="+b.path}if(b.expires){if(!S(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);x+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(x+="; HttpOnly"),b.secure&&(x+="; Secure"),b.partitioned&&(x+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":x+="; Priority=Low";break;case"medium":x+="; Priority=Medium";break;case"high":x+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":x+="; SameSite=Strict";break;case"lax":x+="; SameSite=Lax";break;case"none":x+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return x}function _(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function S(v){return l.call(v)==="[object Date]"}return zo}cy();var q0="popstate";function uy(r={}){function e(s,l){let{pathname:c,search:f,hash:m}=s.location;return eh("",{pathname:c,search:f,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Ko(l)}return dy(e,i,null,r)}function Qt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Hi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fy(){return Math.random().toString(36).substring(2,10)}function Y0(r,e){return{usr:r.state,key:r.key,idx:e}}function eh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?zr(e):e,state:i,key:e&&e.key||s||fy()}}function Ko({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function zr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function dy(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,m="POP",g=null,h=_();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function _(){return(f.state||{idx:null}).idx}function S(){m="POP";let y=_(),x=y==null?null:y-h;h=y,g&&g({action:m,location:C.location,delta:x})}function v(y,x){m="PUSH";let N=eh(C.location,y,x);h=_()+1;let D=Y0(N,h),L=C.createHref(N);try{f.pushState(D,"",L)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(L)}c&&g&&g({action:m,location:C.location,delta:1})}function M(y,x){m="REPLACE";let N=eh(C.location,y,x);h=_();let D=Y0(N,h),L=C.createHref(N);f.replaceState(D,"",L),c&&g&&g({action:m,location:C.location,delta:0})}function b(y){return hy(y)}let C={get action(){return m},get location(){return r(l,f)},listen(y){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(q0,S),g=y,()=>{l.removeEventListener(q0,S),g=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let x=b(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:M,go(y){return f.go(y)}};return C}function hy(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Ko(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function $v(r,e,i="/"){return py(r,e,i,!1)}function py(r,e,i,s){let l=typeof e=="string"?zr(e):e,c=Sa(l.pathname||"/",i);if(c==null)return null;let f=e_(r);my(f);let m=null;for(let g=0;m==null&&g<f.length;++g){let h=Ay(c);m=Ey(f[g],h,s)}return m}function e_(r,e=[],i=[],s=""){let l=(c,f,m)=>{let g={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};g.relativePath.startsWith("/")&&(Qt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let h=ga([s,g.relativePath]),_=i.concat(g);c.children&&c.children.length>0&&(Qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),e_(c.children,e,_,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:My(h,c.index),routesMeta:_})};return r.forEach((c,f)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))l(c,f);else for(let g of t_(c.path))l(c,f,g)}),e}function t_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=t_(s.join("/")),m=[];return m.push(...f.map(g=>g===""?c:[c,g].join("/"))),l&&m.push(...f),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function my(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:by(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var gy=/^:[\w-]+$/,vy=3,_y=2,xy=1,Sy=10,yy=-2,Z0=r=>r==="*";function My(r,e){let i=r.split("/"),s=i.length;return i.some(Z0)&&(s+=yy),e&&(s+=_y),i.filter(l=>!Z0(l)).reduce((l,c)=>l+(gy.test(c)?vy:c===""?xy:Sy),s)}function by(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function Ey(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let m=0;m<s.length;++m){let g=s[m],h=m===s.length-1,_=c==="/"?e:e.slice(c.length)||"/",S=Jc({path:g.relativePath,caseSensitive:g.caseSensitive,end:h},_),v=g.route;if(!S&&h&&i&&!s[s.length-1].route.index&&(S=Jc({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},_)),!S)return null;Object.assign(l,S.params),f.push({params:l,pathname:ga([c,S.pathname]),pathnameBase:Ny(ga([c,S.pathnameBase])),route:v}),S.pathnameBase!=="/"&&(c=ga([c,S.pathnameBase]))}return f}function Jc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=Ty(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:s.reduce((h,{paramName:_,isOptional:S},v)=>{if(_==="*"){let b=m[v]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=m[v];return S&&!M?h[_]=void 0:h[_]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function Ty(r,e=!1,i=!0){Hi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,g)=>(s.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function Ay(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Sa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function wy(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?zr(r):r;return{pathname:i?i.startsWith("/")?i:Ry(i,e):e,search:Dy(s),hash:Uy(l)}}function Ry(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function vd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cy(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function n_(r){let e=Cy(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function i_(r,e,i,s=!1){let l;typeof r=="string"?l=zr(r):(l={...r},Qt(!l.pathname||!l.pathname.includes("?"),vd("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),vd("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),vd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,m;if(f==null)m=i;else{let S=e.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),S-=1;l.pathname=v.join("/")}m=S>=0?e[S]:"/"}let g=wy(l,m),h=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(h||_)&&(g.pathname+="/"),g}var ga=r=>r.join("/").replace(/\/\/+/g,"/"),Ny=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Dy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Uy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Ly(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var a_=["POST","PUT","PATCH","DELETE"];new Set(a_);var Oy=["GET",...a_];new Set(Oy);var Hr=re.createContext(null);Hr.displayName="DataRouter";var iu=re.createContext(null);iu.displayName="DataRouterState";var s_=re.createContext({isTransitioning:!1});s_.displayName="ViewTransition";var Py=re.createContext(new Map);Py.displayName="Fetchers";var Iy=re.createContext(null);Iy.displayName="Await";var ki=re.createContext(null);ki.displayName="Navigation";var el=re.createContext(null);el.displayName="Location";var Ea=re.createContext({outlet:null,matches:[],isDataRoute:!1});Ea.displayName="Route";var Zh=re.createContext(null);Zh.displayName="RouteError";function Fy(r,{relative:e}={}){Qt(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=re.useContext(ki),{hash:l,pathname:c,search:f}=nl(r,{relative:e}),m=c;return i!=="/"&&(m=c==="/"?i:ga([i,c])),s.createHref({pathname:m,search:f,hash:l})}function tl(){return re.useContext(el)!=null}function rs(){return Qt(tl(),"useLocation() may be used only in the context of a <Router> component."),re.useContext(el).location}var r_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function o_(r){re.useContext(ki).static||re.useLayoutEffect(r)}function Is(){let{isDataRoute:r}=re.useContext(Ea);return r?Ky():By()}function By(){Qt(tl(),"useNavigate() may be used only in the context of a <Router> component.");let r=re.useContext(Hr),{basename:e,navigator:i}=re.useContext(ki),{matches:s}=re.useContext(Ea),{pathname:l}=rs(),c=JSON.stringify(n_(s)),f=re.useRef(!1);return o_(()=>{f.current=!0}),re.useCallback((g,h={})=>{if(Hi(f.current,r_),!f.current)return;if(typeof g=="number"){i.go(g);return}let _=i_(g,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ga([e,_.pathname])),(h.replace?i.replace:i.push)(_,h.state,h)},[e,i,c,l,r])}re.createContext(null);function nl(r,{relative:e}={}){let{matches:i}=re.useContext(Ea),{pathname:s}=rs(),l=JSON.stringify(n_(i));return re.useMemo(()=>i_(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function zy(r,e){return l_(r,e)}function l_(r,e,i,s){var N;Qt(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=re.useContext(ki),{matches:f}=re.useContext(Ea),m=f[f.length-1],g=m?m.params:{},h=m?m.pathname:"/",_=m?m.pathnameBase:"/",S=m&&m.route;{let D=S&&S.path||"";c_(h,!S||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=rs(),M;if(e){let D=typeof e=="string"?zr(e):e;Qt(_==="/"||((N=D.pathname)==null?void 0:N.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=v;let b=M.pathname||"/",C=b;if(_!=="/"){let D=_.replace(/^\//,"").split("/");C="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=!c&&i&&i.matches&&i.matches.length>0?i.matches:$v(r,{pathname:C});Hi(S||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Hi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=jy(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:ga([_,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?_:ga([_,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,i,s);return e&&x?re.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},x):x}function Hy(){let r=Zy(),e=Ly(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=re.createElement(re.Fragment,null,re.createElement("p",null,"💿 Hey developer 👋"),re.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",re.createElement("code",{style:c},"ErrorBoundary")," or"," ",re.createElement("code",{style:c},"errorElement")," prop on your route.")),re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),i?re.createElement("pre",{style:l},i):null,f)}var Gy=re.createElement(Hy,null),Vy=class extends re.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?re.createElement(Ea.Provider,{value:this.props.routeContext},re.createElement(Zh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ky({routeContext:r,match:e,children:i}){let s=re.useContext(Hr);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),re.createElement(Ea.Provider,{value:r},i)}function jy(r,e=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let g=l.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);Qt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,m=-1;if(i)for(let g=0;g<l.length;g++){let h=l[g];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(m=g),h.route.id){let{loaderData:_,errors:S}=i,v=h.route.loader&&!_.hasOwnProperty(h.route.id)&&(!S||S[h.route.id]===void 0);if(h.route.lazy||v){f=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}return l.reduceRight((g,h,_)=>{let S,v=!1,M=null,b=null;i&&(S=c&&h.route.id?c[h.route.id]:void 0,M=h.route.errorElement||Gy,f&&(m<0&&_===0?(c_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,b=null):m===_&&(v=!0,b=h.route.hydrateFallbackElement||null)));let C=e.concat(l.slice(0,_+1)),y=()=>{let x;return S?x=M:v?x=b:h.route.Component?x=re.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=g,re.createElement(ky,{match:h,routeContext:{outlet:g,matches:C,isDataRoute:i!=null},children:x})};return i&&(h.route.ErrorBoundary||h.route.errorElement||_===0)?re.createElement(Vy,{location:i.location,revalidation:i.revalidation,component:M,error:S,children:y(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):y()},null)}function Kh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xy(r){let e=re.useContext(Hr);return Qt(e,Kh(r)),e}function Wy(r){let e=re.useContext(iu);return Qt(e,Kh(r)),e}function qy(r){let e=re.useContext(Ea);return Qt(e,Kh(r)),e}function Qh(r){let e=qy(r),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function Yy(){return Qh("useRouteId")}function Zy(){var s;let r=re.useContext(Zh),e=Wy("useRouteError"),i=Qh("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[i]}function Ky(){let{router:r}=Xy("useNavigate"),e=Qh("useNavigate"),i=re.useRef(!1);return o_(()=>{i.current=!0}),re.useCallback(async(l,c={})=>{Hi(i.current,r_),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var K0={};function c_(r,e,i){!e&&!K0[r]&&(K0[r]=!0,Hi(!1,i))}re.memo(Qy);function Qy({routes:r,future:e,state:i}){return l_(r,void 0,i,e)}function $n(r){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jy({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){Qt(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=re.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=zr(i));let{pathname:g="/",search:h="",hash:_="",state:S=null,key:v="default"}=i,M=re.useMemo(()=>{let b=Sa(g,f);return b==null?null:{location:{pathname:b,search:h,hash:_,state:S,key:v},navigationType:s}},[f,g,h,_,S,v,s]);return Hi(M!=null,`<Router basename="${f}"> is not able to match the URL "${g}${h}${_}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:re.createElement(ki.Provider,{value:m},re.createElement(el.Provider,{children:e,value:M}))}function $y({children:r,location:e}){return zy(th(r),e)}function th(r,e=[]){let i=[];return re.Children.forEach(r,(s,l)=>{if(!re.isValidElement(s))return;let c=[...e,l];if(s.type===re.Fragment){i.push.apply(i,th(s.props.children,c));return}Qt(s.type===$n,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=th(s.props.children,c)),i.push(f)}),i}var kc="get",jc="application/x-www-form-urlencoded";function au(r){return r!=null&&typeof r.tagName=="string"}function eM(r){return au(r)&&r.tagName.toLowerCase()==="button"}function tM(r){return au(r)&&r.tagName.toLowerCase()==="form"}function nM(r){return au(r)&&r.tagName.toLowerCase()==="input"}function iM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function aM(r,e){return r.button===0&&(!e||e==="_self")&&!iM(r)}var _c=null;function sM(){if(_c===null)try{new FormData(document.createElement("form"),0),_c=!1}catch{_c=!0}return _c}var rM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _d(r){return r!=null&&!rM.has(r)?(Hi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${jc}"`),null):r}function oM(r,e){let i,s,l,c,f;if(tM(r)){let m=r.getAttribute("action");s=m?Sa(m,e):null,i=r.getAttribute("method")||kc,l=_d(r.getAttribute("enctype"))||jc,c=new FormData(r)}else if(eM(r)||nM(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(s=g?Sa(g,e):null,i=r.getAttribute("formmethod")||m.getAttribute("method")||kc,l=_d(r.getAttribute("formenctype"))||_d(m.getAttribute("enctype"))||jc,c=new FormData(m,r),!sM()){let{name:h,type:_,value:S}=r;if(_==="image"){let v=h?`${h}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else h&&c.append(h,S)}}else{if(au(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=kc,s=null,l=jc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}function Jh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function lM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function uM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await lM(c,i);return f.links?f.links():[]}return[]}));return pM(s.flat(1).filter(cM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Q0(r,e,i,s,l,c){let f=(g,h)=>i[h]?g.route.id!==i[h].route.id:!0,m=(g,h)=>{var _;return i[h].pathname!==g.pathname||((_=i[h].route.path)==null?void 0:_.endsWith("*"))&&i[h].params["*"]!==g.params["*"]};return c==="assets"?e.filter((g,h)=>f(g,h)||m(g,h)):c==="data"?e.filter((g,h)=>{var S;let _=s.routes[g.route.id];if(!_||!_.hasLoader)return!1;if(f(g,h)||m(g,h))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((S=i[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function fM(r,e,{includeHydrateFallback:i}={}){return dM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function dM(r){return[...new Set(r)]}function hM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function pM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(hM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var mM=new Set([100,101,204,205]);function gM(r,e){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":e&&Sa(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function u_(){let r=re.useContext(Hr);return Jh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function vM(){let r=re.useContext(iu);return Jh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var $h=re.createContext(void 0);$h.displayName="FrameworkContext";function f_(){let r=re.useContext($h);return Jh(r,"You must render this element inside a <HydratedRouter> element"),r}function _M(r,e){let i=re.useContext($h),[s,l]=re.useState(!1),[c,f]=re.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:h,onMouseLeave:_,onTouchStart:S}=e,v=re.useRef(null);re.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=x=>{x.forEach(N=>{f(N.isIntersecting)})},y=new IntersectionObserver(C,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),re.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:Ho(m,M),onBlur:Ho(g,b),onMouseEnter:Ho(h,M),onMouseLeave:Ho(_,b),onTouchStart:Ho(S,M)}]:[!1,v,{}]}function Ho(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function xM({page:r,...e}){let{router:i}=u_(),s=re.useMemo(()=>$v(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?re.createElement(yM,{page:r,matches:s,...e}):null}function SM(r){let{manifest:e,routeModules:i}=f_(),[s,l]=re.useState([]);return re.useEffect(()=>{let c=!1;return uM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function yM({page:r,matches:e,...i}){let s=rs(),{manifest:l,routeModules:c}=f_(),{basename:f}=u_(),{loaderData:m,matches:g}=vM(),h=re.useMemo(()=>Q0(r,e,g,l,s,"data"),[r,e,g,l,s]),_=re.useMemo(()=>Q0(r,e,g,l,s,"assets"),[r,e,g,l,s]),S=re.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let b=new Set,C=!1;if(e.forEach(x=>{var D;let N=l.routes[x.route.id];!N||!N.hasLoader||(!h.some(L=>L.route.id===x.route.id)&&x.route.id in m&&((D=c[x.route.id])!=null&&D.shouldRevalidate)||N.hasClientLoader?C=!0:b.add(x.route.id))}),b.size===0)return[];let y=gM(r,f);return C&&b.size>0&&y.searchParams.set("_routes",e.filter(x=>b.has(x.route.id)).map(x=>x.route.id).join(",")),[y.pathname+y.search]},[f,m,s,l,h,e,r,c]),v=re.useMemo(()=>fM(_,l),[_,l]),M=SM(_);return re.createElement(re.Fragment,null,S.map(b=>re.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),v.map(b=>re.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),M.map(({key:b,link:C})=>re.createElement("link",{key:b,...C})))}function MM(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var d_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{d_&&(window.__reactRouterVersion="7.6.0")}catch{}function bM({basename:r,children:e,window:i}){let s=re.useRef();s.current==null&&(s.current=uy({window:i,v5Compat:!0}));let l=s.current,[c,f]=re.useState({action:l.action,location:l.location}),m=re.useCallback(g=>{re.startTransition(()=>f(g))},[f]);return re.useLayoutEffect(()=>l.listen(m),[l,m]),re.createElement(Jy,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l})}var h_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p_=re.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:m,target:g,to:h,preventScrollReset:_,viewTransition:S,...v},M){let{basename:b}=re.useContext(ki),C=typeof h=="string"&&h_.test(h),y,x=!1;if(typeof h=="string"&&C&&(y=h,d_))try{let U=new URL(window.location.href),he=h.startsWith("//")?new URL(U.protocol+h):new URL(h),G=Sa(he.pathname,b);he.origin===U.origin&&G!=null?h=G+he.search+he.hash:x=!0}catch{Hi(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=Fy(h,{relative:l}),[D,L,F]=_M(s,v),H=AM(h,{replace:f,state:m,target:g,preventScrollReset:_,relative:l,viewTransition:S});function V(U){e&&e(U),U.defaultPrevented||H(U)}let A=re.createElement("a",{...v,...F,href:y||N,onClick:x||c?e:V,ref:MM(M,L),target:g,"data-discover":!C&&i==="render"?"true":void 0});return D&&!C?re.createElement(re.Fragment,null,A,re.createElement(xM,{page:N})):A});p_.displayName="Link";var Xc=re.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:m,children:g,...h},_){let S=nl(f,{relative:h.relative}),v=rs(),M=re.useContext(iu),{navigator:b,basename:C}=re.useContext(ki),y=M!=null&&DM(S)&&m===!0,x=b.encodeLocation?b.encodeLocation(S).pathname:S.pathname,N=v.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(N=N.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&C&&(D=Sa(D,C)||D);const L=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let F=N===x||!l&&N.startsWith(x)&&N.charAt(L)==="/",H=D!=null&&(D===x||!l&&D.startsWith(x)&&D.charAt(x.length)==="/"),V={isActive:F,isPending:H,isTransitioning:y},A=F?e:void 0,U;typeof s=="function"?U=s(V):U=[s,F?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let he=typeof c=="function"?c(V):c;return re.createElement(p_,{...h,"aria-current":A,className:U,ref:_,style:he,to:f,viewTransition:m},typeof g=="function"?g(V):g)});Xc.displayName="NavLink";var EM=re.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=kc,action:m,onSubmit:g,relative:h,preventScrollReset:_,viewTransition:S,...v},M)=>{let b=CM(),C=NM(m,{relative:h}),y=f.toLowerCase()==="get"?"get":"post",x=typeof m=="string"&&h_.test(m),N=D=>{if(g&&g(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,F=(L==null?void 0:L.getAttribute("formmethod"))||f;b(L||D.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:h,preventScrollReset:_,viewTransition:S})};return re.createElement("form",{ref:M,method:y,action:C,onSubmit:s?g:N,...v,"data-discover":!x&&r==="render"?"true":void 0})});EM.displayName="Form";function TM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function m_(r){let e=re.useContext(Hr);return Qt(e,TM(r)),e}function AM(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let m=Is(),g=rs(),h=nl(r,{relative:c});return re.useCallback(_=>{if(aM(_,e)){_.preventDefault();let S=i!==void 0?i:Ko(g)===Ko(h);m(r,{replace:S,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[g,m,h,i,s,e,r,l,c,f])}var wM=0,RM=()=>`__${String(++wM)}__`;function CM(){let{router:r}=m_("useSubmit"),{basename:e}=re.useContext(ki),i=Yy();return re.useCallback(async(s,l={})=>{let{action:c,method:f,encType:m,formData:g,body:h}=oM(s,e);if(l.navigate===!1){let _=l.fetcherKey||RM();await r.fetch(_,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:g,body:h,formMethod:l.method||f,formEncType:l.encType||m,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:g,body:h,formMethod:l.method||f,formEncType:l.encType||m,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function NM(r,{relative:e}={}){let{basename:i}=re.useContext(ki),s=re.useContext(Ea);Qt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...nl(r||".",{relative:e})},f=rs();if(r==null){c.search=f.search;let m=new URLSearchParams(c.search),g=m.getAll("index");if(g.some(_=>_==="")){m.delete("index"),g.filter(S=>S).forEach(S=>m.append("index",S));let _=m.toString();c.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ga([i,c.pathname])),Ko(c)}function DM(r,e={}){let i=re.useContext(s_);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=m_("useViewTransitionState"),l=nl(r,{relative:e.relative});if(!i.isTransitioning)return!1;let c=Sa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Sa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Jc(l.pathname,f)!=null||Jc(l.pathname,c)!=null}[...mM];const UM="/assets/scanner-BiZN9XhY.png",LM="/assets/chatlogo-D_FQmafv.png",OM="/assets/wallet%20front%202-CPq3dhWT.png",PM="/assets/second%20base%203-BA33XM_5.png",IM="/assets/sos%20button-Cq0nAT1v.png",FM="/assets/pogo-logo3-CiYjFcgo.png",BM={CHATGPT:{badge:"01",badgeClass:"",title:"CHATGPT",deImg:LM,deClass:"wallet-card-logo"},SAFEHUB:{badge:"02",badgeClass:"wallet-card-badge-red",title:"SAFEHUB",deImg:IM,deClass:"wallet-card-sos-button"},POGO:{badge:"03",badgeClass:"wallet-card-badge-purple",title:"POGO",deImg:FM,deClass:"wallet-card-pogo-logo"},WRAP:{badge:"04",badgeClass:"wallet-card-badge-yellow",title:"WRAP",deImg:null,deClass:""}},zM=()=>{const r=Is(),[e,i]=re.useState("INDIVIDUAL"),[s,l]=re.useState("CHATGPT"),[c,f]=re.useState(!1),m=M=>{i(b=>b===M?null:M)},g=M=>{if(M===s)return;l(M);const b=["POGO","WRAP"].includes(M)?"TEAM":"INDIVIDUAL";i(b),f(!1)},h=()=>{switch(s){case"CHATGPT":r("/work/chatgpt/article");break;case"SAFEHUB":r("/work/safehub");break;case"POGO":r("/work/pogo");break;case"WRAP":window.open("https://trywrap.com/","_blank","noopener,noreferrer");break}},_=M=>{M.stopPropagation();const b=M.target,C=M.currentTarget;(b===C||b.closest(".wallet-card-header, .wallet-card-badge, .wallet-card-title")!==null)&&f(!0)},S=M=>{M.stopPropagation(),f(!1)},v=BM[s];return p.jsx("div",{className:"wallet-wrapper",children:p.jsxs("div",{className:"wallet-layout",children:[p.jsx("div",{className:"wallet-container",children:p.jsxs("div",{className:"wallet-pocket",children:[p.jsx("img",{src:OM,alt:"",className:"wallet-pocket-image"}),p.jsxs("div",{className:`wallet-card ${c?"card-hovered":""}`,onClick:h,onMouseEnter:_,onMouseLeave:S,style:{cursor:"pointer"},children:[p.jsxs("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",borderRadius:"16px",pointerEvents:"none",overflow:"hidden"},xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("clipPath",{id:"card-clip",children:p.jsx("rect",{width:"100%",height:"100%",rx:"16"})}),p.jsx("g",{clipPath:"url(#card-clip)",children:Array.from({length:120},(M,b)=>p.jsx("circle",{cx:"0",cy:"0",r:20+b*6,fill:"none",stroke:"rgba(0,0,0,0.025)",strokeWidth:"1"},b))})]}),p.jsxs("div",{className:"wallet-card-header",children:[p.jsx("div",{className:`wallet-card-badge ${v.badgeClass}`,children:v.badge}),p.jsx("span",{className:"wallet-card-title",children:v.title})]}),v.deImg&&p.jsx("img",{src:v.deImg,alt:"",className:v.deClass}),p.jsx("img",{src:UM,alt:"",className:"wallet-card-chip"})]},s),p.jsx("img",{src:PM,alt:"",className:"wallet-second-base"})]})}),p.jsxs("div",{className:"wallet-nav",children:[p.jsxs("div",{className:`wallet-nav-section wallet-nav-individual${e==="INDIVIDUAL"?" open":""}`,children:[p.jsxs("button",{className:"wallet-nav-header",onClick:()=>m("INDIVIDUAL"),children:[p.jsx("span",{className:"wallet-nav-label",children:"INDIVIDUAL"}),p.jsx("span",{className:`wallet-nav-chevron${e==="INDIVIDUAL"?" rotated":""}`})]}),p.jsxs("div",{className:"wallet-nav-items",children:[p.jsx("div",{className:`wallet-nav-item${s==="CHATGPT"?" active":""}`,onClick:()=>g("CHATGPT"),children:"CHATGPT"}),p.jsx("div",{className:`wallet-nav-item${s==="SAFEHUB"?" active":""}`,onClick:()=>g("SAFEHUB"),children:"SAFEHUB"})]})]}),p.jsxs("div",{className:`wallet-nav-section wallet-nav-team${e==="TEAM"?" open":""}`,children:[p.jsxs("button",{className:"wallet-nav-header",onClick:()=>m("TEAM"),children:[p.jsx("span",{className:"wallet-nav-label",children:"TEAM"}),p.jsx("span",{className:`wallet-nav-chevron${e==="TEAM"?" rotated":""}`})]}),p.jsxs("div",{className:"wallet-nav-items",children:[p.jsx("div",{className:`wallet-nav-item${s==="POGO"?" active":""}`,onClick:()=>g("POGO"),children:"POGO"}),p.jsx("div",{className:`wallet-nav-item${s==="WRAP"?" active":""}`,onClick:()=>g("WRAP"),children:"WRAP"})]})]})]})]})})},HM="/assets/emoji-mail-Cgi9Z51R.png",GM="/assets/emoji-folder-CPcV07Op.png",VM="/assets/emoji-paper-upEZoPsv.png",J0=()=>p.jsx("svg",{width:"9",height:"9",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:p.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),vr=({href:r,children:e,internal:i=!1})=>{const s=Is();return i?p.jsxs("span",{className:"hero-inline-link",style:{cursor:"pointer"},onClick:()=>s(r),children:[e,p.jsx("sup",{className:"hero-inline-sup",children:p.jsx(J0,{})})]}):p.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"hero-inline-link",children:[e,p.jsx("sup",{className:"hero-inline-sup",children:p.jsx(J0,{})})]})},kM=()=>p.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[p.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),p.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),jM=()=>p.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:p.jsx("path",{d:"M20 6L9 17l-5-5",stroke:"#BF5656",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),$0=()=>p.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[p.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),p.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),ev=["currently designing in new york","currently sipping on matcha","currently decorating my laptop with stickers","currently listening to don toliver","currently playing animal crossing new horizons","currently jamming to lofi","currently watching masterchef canada"];function XM(){const r=Is(),e=re.useRef(null),[i,s]=re.useState(!1),[l,c]=re.useState(0);re.useEffect(()=>{const m=setInterval(()=>{c(g=>(g+1)%ev.length)},3500);return()=>clearInterval(m)},[]);const f=()=>{navigator.clipboard.writeText("ng545@cornell.edu"),s(!0),setTimeout(()=>s(!1),2e3)};return re.useEffect(()=>{const m=new IntersectionObserver(h=>{h.forEach(_=>{_.isIntersecting&&_.target.classList.add("fade-in-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"}),g=document.querySelectorAll(".fade-in-on-scroll");return g.forEach(h=>m.observe(h)),()=>g.forEach(h=>m.unobserve(h))},[]),p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"new-hero-wrap",children:p.jsxs("div",{className:"new-hero-content",children:[p.jsxs("div",{className:"new-hero-top",children:[p.jsx("span",{className:"new-hero-name",children:"Nitish's Digital Corner"}),p.jsxs("span",{className:"new-hero-location",children:[p.jsx("span",{className:"new-hero-status-dot"}),p.jsx("span",{className:"new-hero-location-text",children:ev[l]},l)]})]}),p.jsxs("p",{className:"new-hero-body",children:["I'm a designer building ambitious tools that feel surprisingly simple. Currently studying Data Science & Statistics @"," ",p.jsx(vr,{href:"https://www.cornell.edu",children:"Cornell University"})," ","while conducting HCI research with the"," ",p.jsx(vr,{href:"https://interplay.tech/",children:"Interplay Research Studio"})," ","and working as a Product Design Intern @"," ",p.jsx(vr,{href:"https://www.joinpogo.com/",children:"Pogo"}),"."]}),p.jsxs("p",{className:"new-hero-body-grey",children:["Incoming TPM @"," ",p.jsx(vr,{href:"https://www.cisco.com/",children:"Cisco"}),"."," ","Previously designed an intuitive bookmarking experience for"," ",p.jsx(vr,{href:"/work/chatgpt/article",internal:!0,children:"ChatGPT"})," ","conversations, and led the design of a consumer dating app for"," ",p.jsx(vr,{href:"https://trywrap.com/",children:"Wrap"}),"."]}),p.jsxs("div",{className:"hero-contact-block",children:[p.jsxs("button",{className:"hero-email-row",onClick:f,"aria-label":"Copy email address",children:[p.jsx("img",{src:HM,alt:"",className:"hero-contact-emoji","aria-hidden":"true"}),p.jsx("span",{className:"hero-email-text",children:"ng545@cornell.edu"}),p.jsx("span",{className:`hero-email-icon${i?" hero-email-icon--copied":""}`,children:i?p.jsx(jM,{}):p.jsx(kM,{})})]}),p.jsxs("a",{href:"https://www.linkedin.com/in/nitishgannu/",target:"_blank",rel:"noopener noreferrer",className:"hero-linkedin-row",children:[p.jsx("img",{src:GM,alt:"",className:"hero-contact-emoji","aria-hidden":"true"}),p.jsx("span",{className:"hero-linkedin-text",children:"linkedin.com/in/nitishg/"}),p.jsx("span",{className:"hero-linkedin-icon",children:p.jsx($0,{})})]}),p.jsxs("a",{href:"#",className:"hero-linkedin-row",children:[p.jsx("img",{src:VM,alt:"",className:"hero-contact-emoji","aria-hidden":"true"}),p.jsx("span",{className:"hero-linkedin-text",children:"read.cv"}),p.jsx("span",{className:"hero-linkedin-icon",children:p.jsx($0,{})})]})]})]})}),p.jsx("div",{className:"main-content-container wallet-desktop-only",ref:e,children:p.jsx("div",{className:"wallet-side-panel",children:p.jsx(zM,{})})}),p.jsxs("div",{className:"mobile-project-list",children:[p.jsx("p",{className:"mobile-project-heading",children:"FEATURED WORK"}),[{num:"01",bg:"#111111",color:"#ffffff",label:"ChatGPT",date:"Fall 2025",path:"/work/chatgpt/article"},{num:"02",bg:"#7c3aed",color:"#ffffff",label:"Pogo",date:"Spring 2026",path:"/work/pogo"},{num:"03",bg:"#d5061b",color:"#ffffff",label:"Safehub",date:"Spring 2024",path:"/work/safehub"},{num:"04",bg:"#ffb700",color:"#ffffff",label:"Wrap",date:"Summer 2025",href:"https://trywrap.com/"}].map(({num:m,bg:g,color:h,label:_,date:S,path:v,href:M})=>p.jsxs("a",{href:M||v,onClick:v?b=>{b.preventDefault(),r(v)}:void 0,target:M?"_blank":void 0,rel:M?"noopener noreferrer":void 0,className:"mobile-project-row",children:[p.jsx("span",{className:"mobile-project-badge",style:{backgroundColor:g,color:h},children:m}),p.jsxs("span",{className:"mobile-project-info",children:[p.jsx("span",{className:"mobile-project-title",children:_}),p.jsx("span",{className:"mobile-project-date",children:S})]}),p.jsx("svg",{className:"mobile-project-arrow",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:p.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]},m))]})]})}const WM="/assets/portfolio1-DiUIeXWw.jpg",qM="/assets/portfolio3-cFjSv9RB.jpg",YM="/assets/portfolio4-Dwc8lrmg.jpg";function ZM(){return p.jsx("div",{className:"about-page-new",children:p.jsxs("div",{className:"about-layout",children:[p.jsx("h1",{className:"about-hero-title",children:"Hey, I'm Nitish."}),p.jsx("p",{className:"about-body-text",children:"I've never been great at picking one path and sticking to it, but design feels right at the moment, so that's where I'm spending my time. I'm also trying my hand at blogging, potentially to inspire others."}),p.jsx("p",{className:"about-body-text about-body-text--grey",children:"Outside of designing in Figma, you'll probably find me on a hiking trail, searching for the best Thai restaurants in my area to rate on Beli, or adding another Smiski to my growing collection."}),p.jsxs("div",{className:"about-photo-row",children:[p.jsx("img",{src:WM,alt:"",className:"about-photo"}),p.jsx("img",{src:qM,alt:"",className:"about-photo",style:{objectPosition:"top center"}}),p.jsx("img",{src:YM,alt:"",className:"about-photo"})]})]})})}const KM="/assets/playground1-DOa-1y59.jpg",QM="/assets/playground2-CbEEjSiB.jpg",JM="/assets/playground3-DWks5Hfq.jpg",$M="/assets/playground4-Eno4u8ze.jpg",eb="/assets/playground5-bDrwqSFX.jpg",tb="/assets/playground6-Cy4jFYxE.jpg",nb="/assets/playground7-Bc1qX_Vl.jpg",ib="/assets/playground8-t8mD4Cep.jpg",ab="/assets/portfolio4-Dwc8lrmg.jpg",sb="/assets/playground10-CK7-_Z_v.jpg",rb="/assets/playground11-CkeUv4g9.png",ob="/assets/playground12-Ckj-evdO.jpg",lb="/assets/playground13-ilk_oeJQ.jpg",cb="/assets/playground14-D2yoYerN.jpg",ub="/assets/playground15-DIGDscYW.jpg",fb="/assets/plane-f4ad0RLY.png",xd="/assets/planet-CFEYygEu.png",xc="/assets/cloud-C_RrmoAy.png",db=[{id:1,src:KM,x:-700,y:-380,rotation:-4,width:320,zIndex:1},{id:2,src:QM,x:320,y:-420,rotation:3,width:300,zIndex:2},{id:3,src:JM,x:680,y:-160,rotation:-2,width:310,zIndex:3},{id:4,src:eb,x:-400,y:120,rotation:5,width:290,zIndex:4},{id:5,src:tb,x:-720,y:400,rotation:-3,width:300,zIndex:5},{id:6,src:$M,x:-100,y:-680,rotation:2,width:290,zIndex:6},{id:7,src:nb,x:-650,y:-740,rotation:-2,width:370,zIndex:7},{id:8,src:ib,x:700,y:200,rotation:3,width:280,zIndex:8},{id:9,src:ab,x:250,y:90,rotation:-4,width:290,zIndex:9},{id:10,src:sb,x:700,y:-900,rotation:4,width:310,zIndex:10},{id:11,src:rb,x:-1150,y:-520,rotation:-3,width:300,zIndex:11},{id:12,src:ob,x:0,y:600,rotation:2,width:320,zIndex:12},{id:13,src:lb,x:-1190,y:200,rotation:-5,width:295,zIndex:13},{id:14,src:cb,x:120,y:-1080,rotation:1,width:330,zIndex:14},{id:15,src:ub,x:1100,y:180,rotation:-3,width:285,zIndex:15}];function hb(){const[r,e]=re.useState({x:0,y:0}),[i,s]=re.useState(db),[l,c]=re.useState(!1),f=re.useRef(null),m=re.useRef({x:0,y:0});re.useEffect(()=>{const S={x:Math.round(window.innerWidth/2),y:Math.round(window.innerHeight/2)};m.current=S,e(S)},[]);const g=re.useCallback(S=>{m.current=S,e(S)},[]),h=re.useCallback(S=>{S.button===0&&(f.current={type:"canvas",startMouseX:S.clientX,startMouseY:S.clientY,startCanvasX:m.current.x,startCanvasY:m.current.y},c(!0))},[]),_=re.useCallback((S,v)=>{S.stopPropagation(),S.button===0&&(f.current={type:"photo",photoId:v.id,startMouseX:S.clientX,startMouseY:S.clientY,startPhotoX:v.x,startPhotoY:v.y},c(!0),s(M=>{const b=Math.max(...M.map(C=>C.zIndex));return M.map(C=>C.id===v.id?{...C,zIndex:b+1}:C)}))},[]);return re.useEffect(()=>{const S=M=>{if(!f.current)return;const b=M.clientX-f.current.startMouseX,C=M.clientY-f.current.startMouseY;if(f.current.type==="canvas")g({x:f.current.startCanvasX+b,y:f.current.startCanvasY+C});else{const{photoId:y,startPhotoX:x,startPhotoY:N}=f.current;s(D=>D.map(L=>L.id===y?{...L,x:x+b,y:N+C}:L))}},v=()=>{f.current=null,c(!1)};return window.addEventListener("mousemove",S),window.addEventListener("mouseup",v),()=>{window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",v)}},[g]),p.jsx("div",{className:`photos-page${l?" dragging":""}`,onMouseDown:h,children:p.jsxs("div",{className:"photos-canvas",style:{transform:`translate(${r.x}px, ${r.y}px)`},children:[p.jsx("img",{src:xc,className:"deco-icon deco-cloud",alt:"",draggable:!1,style:{filter:"invert(1)"}}),p.jsx("img",{src:fb,className:"deco-icon deco-plane",alt:"",draggable:!1,style:{filter:"invert(1)"}}),p.jsx("img",{src:xd,className:"deco-icon deco-planet",alt:"",draggable:!1,style:{filter:"invert(1)"}}),p.jsx("div",{className:"photos-hint-group",children:p.jsx("p",{className:"hint-sub",children:"DRAG TO MOVE"})}),p.jsx("img",{src:xc,className:"scatter-deco",style:{filter:"invert(1)",left:-900,top:-400,width:90,"--base-rot":"-6deg",animation:"fadeIn 0.55s ease-out 1.30s both, cartoon-rock 3s steps(1,end) -2.4s infinite"},alt:"",draggable:!1}),p.jsx("img",{src:xc,className:"scatter-deco",style:{filter:"invert(1)",left:530,top:-490,width:75,"--base-rot":"4deg",animation:"fadeIn 0.55s ease-out 1.40s both, cartoon-rock 3s steps(1,end) -0.8s infinite"},alt:"",draggable:!1}),p.jsx("img",{src:xc,className:"scatter-deco",style:{filter:"invert(1)",left:-130,top:430,width:80,"--base-rot":"-3deg",animation:"fadeIn 0.55s ease-out 1.35s both, cartoon-rock 3s steps(1,end) -1.8s infinite"},alt:"",draggable:!1}),p.jsx("img",{src:xd,className:"scatter-deco",style:{filter:"invert(1)",left:870,top:-110,width:100,"--base-rot":"8deg",animation:"fadeIn 0.55s ease-out 1.45s both, cartoon-rock 3s steps(1,end) -1.2s infinite"},alt:"",draggable:!1}),p.jsx("img",{src:xd,className:"scatter-deco",style:{filter:"invert(1)",left:-820,top:170,width:90,"--base-rot":"-5deg",animation:"fadeIn 0.55s ease-out 1.38s both, cartoon-rock 3s steps(1,end) -2.7s infinite"},alt:"",draggable:!1}),i.map((S,v)=>p.jsx("div",{className:"canvas-photo",style:{left:S.x,top:S.y,width:S.width,zIndex:S.zIndex,"--rot":`${S.rotation}deg`,animationDelay:`${1.5+v*.09}s`},onMouseDown:M=>_(M,S),children:p.jsx("img",{src:S.src,alt:"",draggable:!1})},S.id))]})})}const pb="/assets/searchpeek-BC0UxGDT.png",mb="/assets/searchflow-BW40ulZP.mov",gb="/assets/tabs-7xy82rau.png",vb="/assets/quotes-D4dGwG2w.png",_b="/assets/notifications%20tutorial-D53RamJF.png",xb="/assets/searching%20tutorial-B0vJ0EXt.png",Sb="/assets/FAQs%20segment-YLZ06GBZ.png",yb="/assets/ITERATION%201%20SEARCH-5kJI9bzb.png",Mb="/assets/ITERATION%202%20SEARCH-DgyTGixC.png",bb="/assets/final%20product-CixDOueA.png",Eb="/assets/filterpanel-DMyyXSfg.png",Tb="/assets/notif-aZsFLyqM.png",Ab="/assets/search1-Dyu9bfD0.JPG",wb="/assets/search2-B8lPCkW7.jpg",Rb="/assets/search3-CrVMwTNY.jpg",Cb=()=>{const[r,e]=re.useState(""),i=re.useRef({});re.useEffect(()=>{window.scrollTo(0,0)},[]),re.useEffect(()=>{const c=()=>{const f=window.scrollY+200,m=["context","introducing","problem","solution","final-product","reflections"];let g="";for(const h of m){const _=i.current[h];if(_){const S=_.offsetTop;f>=S&&(g=h)}}e(g)};return window.addEventListener("scroll",c),c(),()=>window.removeEventListener("scroll",c)},[]);const s=c=>{const f=i.current[c];if(f){const h=f.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:h,behavior:"smooth"})}},l=[{id:"context",label:"CONTEXT"},{id:"introducing",label:"INTRODUCTION"},{id:"problem",label:"THE PROBLEM"},{id:"solution",label:"SOLUTION"},{id:"final-product",label:"FINAL PRODUCT"},{id:"reflections",label:"REFLECTIONS"}];return p.jsxs("div",{className:"case-study-container searchneu-case-study",children:[p.jsx("aside",{className:"case-study-sidebar",children:p.jsx("nav",{className:"sidebar-nav",children:l.map(c=>p.jsx("button",{className:`sidebar-nav-link ${r===c.id?"active":""}`,onClick:()=>s(c.id),children:c.label},c.id))})}),p.jsxs("div",{className:"case-study-content",children:[p.jsx("div",{className:"case-study-thumbnail-banner-container",children:p.jsx("img",{src:pb,alt:"SearchNEU Project Thumbnail",className:"case-study-thumbnail-wireframes"})}),p.jsx("h1",{className:"searchneu-case-study-title",children:"Building an Interactive Course Registration Experience"}),p.jsxs("div",{className:"case-study-columns",children:[p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"searchneu-column-title",children:"TEAM"}),p.jsx("p",{className:"column-content",children:"5 Developers, 1 PM, 3 Designers"})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"searchneu-column-title",children:"ROLE"}),p.jsx("p",{className:"column-content",children:"Product Designer"})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"searchneu-column-title",children:"TIMELINE"}),p.jsx("p",{className:"column-content",children:"5 Months"})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"searchneu-column-title",children:"SKILLS & TOOLS"}),p.jsxs("p",{className:"column-content",children:["Figma, User Research, ",p.jsx("br",{}),"Notion"]})]})]}),p.jsxs("div",{className:"case-study-section",id:"context",ref:c=>i.current.context=c,children:[p.jsx("h2",{className:"searchneu-section-title",children:"[1] CONTEXT"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"Course registration is stressful and fragmented"})}),p.jsx("p",{className:"section-paragraph",children:"Course registration is often a stressful and fragmented process, requiring students to juggle multiple tabs to check degree requirements, course availability, schedules, and professor reviews."}),p.jsx("div",{className:"searchneu-tabs-container",children:p.jsx("img",{className:"searchneu-tabs-image",src:gb,alt:"Tabs"})}),p.jsx("div",{className:"searchneu-quotes-container",children:p.jsx("img",{className:"searchneu-quotes-image",src:vb,alt:"Quotes"})})]}),p.jsxs("div",{className:"case-study-section",id:"introducing",ref:c=>i.current.introducing=c,children:[p.jsx("h2",{className:"searchneu-section-title",children:"[2] INTRODUCING SEARCHNEU"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"So what is SearchNEU?"})}),p.jsx("p",{className:"section-paragraph",children:"SearchNEU is a platform built to make course registration easier and more reliable for students. It brings everything into one place where students can view real-time class data, track availability, and get instant notifications when seats open up."}),p.jsx("div",{className:"searchneu-video-container",children:p.jsx("video",{className:"searchneu-video",src:mb,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),p.jsxs("div",{className:"searchneu-feature-one-two-column",style:{marginTop:"60px"},children:[p.jsxs("div",{className:"searchneu-feature-one-left-column",children:[p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"Streamlines the course search process"})}),p.jsxs("p",{className:"section-paragraph",children:["Using ",p.jsx("span",{className:"dotted-underline",children:"filters"})," helps narrow down results quickly, allowing users to streamline their search and find relevant courses without digging through thousands of options."]})]}),p.jsx("div",{className:"searchneu-feature-one-right-column",children:p.jsx("div",{className:"searchneu-feature-canvas",children:p.jsx("img",{className:"searchneu-intro-feature-image",src:Eb,alt:"Filter Panel"})})})]}),p.jsxs("div",{className:"searchneu-feature-one-two-column",style:{marginTop:"60px"},children:[p.jsxs("div",{className:"searchneu-feature-one-left-column",children:[p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"Helps you enroll as soon as a spot opens"})}),p.jsxs("p",{className:"section-paragraph",children:["Enabling ",p.jsx("span",{className:"dotted-underline",children:"notifications"})," for a waitlisted course lets you know as soon as a spot opens, so you can act quickly without constantly checking back."]})]}),p.jsx("div",{className:"searchneu-feature-one-right-column",children:p.jsx("div",{className:"searchneu-feature-canvas",children:p.jsx("img",{className:"searchneu-intro-feature-image-2",src:Tb,alt:"Notifications"})})})]})]}),p.jsxs("div",{className:"case-study-section",id:"problem",ref:c=>i.current.problem=c,children:[p.jsx("h2",{className:"searchneu-section-title",children:"[3] THE SPRING 2025 PROBLEM"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"How could we fix SearchNEU?"})}),p.jsxs("p",{className:"section-paragraph problem-statement-text-searchneu",children:[p.jsx("span",{className:"searchneu-blue",children:"SearchNEU"})," ",p.jsx("span",{className:"problem-text-grey",children:"faces usability challenges for"})," ",p.jsx("span",{className:"searchneu-blue",children:"new students"}),", ",p.jsx("span",{className:"problem-text-grey",children:"especially those unfamiliar with college course registration, highlighting the need for a more"})," ",p.jsx("span",{className:"searchneu-blue",children:"intuitive"})," ",p.jsx("span",{className:"problem-text-grey",children:"and"})," ",p.jsx("span",{className:"searchneu-blue",children:"user-friendly"})," ",p.jsx("span",{className:"problem-text-grey",children:"platform that encourages adoption and helps students"})," ",p.jsx("span",{className:"searchneu-blue",children:"navigate course selection efficiently"}),"."]}),p.jsx("p",{className:"section-paragraph",children:"This made us wonder."}),p.jsxs("div",{className:"callout",children:[p.jsx("span",{className:"callout-icon",style:{color:"#0066cc"},children:"⚠"}),p.jsx("div",{children:p.jsx("p",{className:"callout-caption",children:"How might we make SearchNEU more intuitive and user-friendly so that new students can easily navigate course registration and feel confident using the platform?"})})]})]}),p.jsxs("div",{className:"case-study-section",id:"solution",ref:c=>i.current.solution=c,children:[p.jsx("h2",{className:"searchneu-section-title",children:"[4] SOLUTION"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"What did we design?"})}),p.jsx("p",{className:"section-paragraph",children:"Throughout the spring semester, our design team focused on making SearchNEU easier to learn and navigate."}),p.jsxs("p",{className:"section-paragraph",children:["We decided to build an FAQ section with a unique twist. Instead of relying on static text, we introduced ",p.jsx("span",{className:"dotted-underline",children:"interactive tutorial modals"})," that guided students through the platform step by step."]}),p.jsxs("div",{className:"searchneu-feature-one-two-column",children:[p.jsxs("div",{className:"searchneu-feature-one-left-column",children:[p.jsx("h2",{className:"searchneu-section-title",children:"[4.1] FEATURE #1"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"Notifications Guide"})}),p.jsxs("p",{className:"section-paragraph",children:["Shows users how to set up notifications for an entire course code or for a specific section so they never miss ",p.jsx("span",{className:"dotted-underline",children:"availability updates"}),"."]})]}),p.jsx("div",{className:"searchneu-feature-one-right-column",children:p.jsx("div",{className:"searchneu-feature-canvas",children:p.jsx("img",{className:"searchneu-feature-image",src:_b,alt:"Notifications Tutorial"})})})]}),p.jsxs("div",{className:"searchneu-feature-two-two-column",style:{marginTop:"60px"},children:[p.jsxs("div",{className:"searchneu-feature-two-left-column",children:[p.jsx("h2",{className:"searchneu-section-title",children:"[4.2] FEATURE #2"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"Searching Guide"})}),p.jsx("p",{className:"section-paragraph",children:"Walks users through using filters effectively so they can narrow down courses and find the best fit faster."})]}),p.jsx("div",{className:"searchneu-feature-two-right-column",children:p.jsx("div",{className:"searchneu-feature-canvas",children:p.jsx("img",{className:"searchneu-feature-image",src:xb,alt:"Searching Tutorial"})})})]}),p.jsxs("div",{style:{marginTop:"60px"},children:[p.jsx("h2",{className:"searchneu-section-title",children:"[4.3] FEATURE #3"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"Comprehensive FAQs"})}),p.jsxs("p",{className:"section-paragraph",children:["Designing the FAQs page took more iteration than I expected, but it became a valuable opportunity to practice clear, user-focused ",p.jsx("span",{className:"dotted-underline",children:"UX writing"}),"."]}),p.jsxs("div",{className:"searchneu-two-column-canvas-container",children:[p.jsxs("div",{className:"searchneu-canvas-column",children:[p.jsx("span",{className:"searchneu-canvas-column-caption",children:"ITERATION #1"}),p.jsx("img",{className:"searchneu-canvas-column-image",src:yb,alt:"Iteration #1"})]}),p.jsxs("div",{className:"searchneu-canvas-column",children:[p.jsx("span",{className:"searchneu-canvas-column-caption",children:"ITERATION #2"}),p.jsx("img",{className:"searchneu-canvas-column-image",src:Mb,alt:"Iteration #2"})]})]}),p.jsxs("div",{className:"searchneu-feature-canvas-wide",children:[p.jsx("span",{className:"searchneu-faqs-caption",children:"FINAL DESIGN"}),p.jsx("img",{className:"searchneu-faqs-image",src:Sb,alt:"FAQs Segment"})]})]})]}),p.jsxs("div",{className:"case-study-section",id:"final-product",ref:c=>i.current["final-product"]=c,children:[p.jsx("h2",{className:"searchneu-section-title",children:"[5] PUTTING IT TOGETHER"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"The final product"})}),p.jsx("p",{className:"section-paragraph",children:"Here's 5 months of design work, research, and iteration assmbled together."}),p.jsx("div",{className:"searchneu-final-product-canvas",children:p.jsx("img",{className:"searchneu-final-product-image",src:bb,alt:"Final Product"})})]}),p.jsxs("div",{className:"case-study-section",id:"reflections",ref:c=>i.current.reflections=c,children:[p.jsx("h2",{className:"searchneu-section-title",children:"[6] REFLECTIONS"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"A semester filled with design crits and new friends"})}),p.jsx("p",{className:"section-paragraph",children:"SearchNEU was my first experience working as a product designer with a cross-functional team of product managers, engineers, and other product designers. It was an enjoyable experience filled with late-night work sessions for SearchNEU, team dinners, social outings, and learning new quirky design things."}),p.jsxs("div",{className:"searchneu-reflections-images",children:[p.jsxs("div",{className:"searchneu-reflections-image-item",children:[p.jsx("img",{src:Ab,alt:"SearchNEU reflection image 1",className:"searchneu-reflections-image"}),p.jsx("p",{className:"searchneu-reflections-image-caption",children:"SearchNEU Photoshoot"})]}),p.jsxs("div",{className:"searchneu-reflections-image-item",children:[p.jsx("img",{src:wb,alt:"SearchNEU reflection image 2",className:"searchneu-reflections-image"}),p.jsx("p",{className:"searchneu-reflections-image-caption",children:"Sandbox Demo Day"})]}),p.jsxs("div",{className:"searchneu-reflections-image-item",children:[p.jsx("img",{src:Rb,alt:"SearchNEU reflection image 3",className:"searchneu-reflections-image"}),p.jsx("p",{className:"searchneu-reflections-image-caption",children:"SearchNEU Team Dinner"})]})]}),p.jsx("p",{style:{fontFamily:"'Georgia', 'Times New Roman', serif",fontStyle:"italic",fontSize:"32px",fontWeight:"400",color:"#333",textAlign:"center",marginTop:"60px",lineHeight:"1.2"},children:"Full case study coming soon!"})]})]})]})},Nb="/assets/wrap%20project%20thumbnail%20in%20case%20study-CDZPNK_v.png",Db="/assets/collage%20wrap%20case%20study-JR7ZTVP_.png",Ub=()=>(Is(),ey.useEffect(()=>{window.scrollTo(0,0)},[]),p.jsx("div",{className:"case-study-container wrap-case-study",children:p.jsxs("div",{className:"case-study-content",children:[p.jsxs("div",{className:"case-study-header",children:[p.jsx("h1",{className:"case-study-title",children:p.jsx("em",{children:"Redefining Modern Dating with Real Connections & Safer Spaces"})}),p.jsx("p",{className:"case-study-description",children:"Worked with a cross-functional team to create a dating platform that fostered honesty, security, and real connections through intuitive and responsible design."}),p.jsx("img",{src:Nb,alt:"Wrap Project Thumbnail",className:"case-study-thumbnail"}),p.jsxs("div",{className:"case-study-columns",children:[p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"wrap-column-title",children:"TEAM"}),p.jsx("p",{className:"column-content",children:"9 Engineers, 1 Product Designer, 1 PM"})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"wrap-column-title",children:"ROLE"}),p.jsx("p",{className:"column-content",children:"Founding Product Designer"})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"wrap-column-title",children:"TIMELINE"}),p.jsx("p",{className:"column-content",children:"June 2025 - Present"})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"wrap-column-title",children:"SKILLS & TOOLS"}),p.jsx("p",{className:"column-content",children:"User Research, Figma, Miro, Design Systems"})]})]})]}),p.jsxs("div",{className:"case-study-section",children:[p.jsx("h2",{className:"wrap-section-title",children:"SUMMER 2025 INTERNSHIP"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"Trying on new hats every single day"})}),p.jsx("p",{className:"section-paragraph",children:"Over the summer at Wrap, I had the opportunity to step into a variety of roles—managing engineer hand-offs, assisting with coding tasks, and exploring new marketing initiatives. Each day brought a chance to expand my skill set and contribute in different ways."}),p.jsxs("p",{className:"section-paragraph",children:["While the nature of my work is under ",p.jsx("b",{children:"NDA"}),", here are some of my contributions:"]}),p.jsxs("div",{className:"interview-callouts",children:[p.jsxs("div",{className:"callout",children:[p.jsx("div",{className:"callout-icon",children:"✦"}),p.jsxs("div",{className:"callout-content",children:[p.jsx("h4",{className:"callout-title",children:"Shipped 7 features throughout 3 months"}),p.jsx("p",{className:"callout-caption",children:"Led brainstorming sessions with the CEO and 2 engineers to ideate sketches for features, and built ~15 prototypes that were implemented."})]})]}),p.jsxs("div",{className:"callout",children:[p.jsx("div",{className:"callout-icon",children:"✦"}),p.jsxs("div",{className:"callout-content",children:[p.jsx("h4",{className:"callout-title",children:"Supported Engineering Workflows"}),p.jsx("p",{className:"callout-caption",children:"Assisted engineers with writing and reviewing code, managing hand-offs, and streamlining implementation of key features."})]})]}),p.jsxs("div",{className:"callout",children:[p.jsx("div",{className:"callout-icon",children:"✦"}),p.jsxs("div",{className:"callout-content",children:[p.jsx("h4",{className:"callout-title",children:"Built a Scalable Design System"}),p.jsx("p",{className:"callout-caption",children:"Developed a cohesive design system to ensure consistency across the product, streamline UI updates, and improve collaboration between designers and engineers."})]})]})]}),p.jsx("img",{src:Db,alt:"Wrap Project Collage",className:"wrap-collage-image"}),p.jsx("p",{className:"wrap-collage-caption",children:"JUST SOME THINGS I MADE FOR FUN"})]}),p.jsxs("div",{className:"case-study-section",children:[p.jsx("h2",{className:"wrap-section-title",children:"TAKEAWAYS"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:'My Summer 2025 "Wrapped"'})}),p.jsx("p",{className:"section-paragraph",children:"I learned many things this summer, from using auto layout and writing unbiased user interview questions to navigating the streets of NYC without Google Maps."}),p.jsx("p",{className:"section-paragraph",children:"But here are some of the main things I took away:"}),p.jsxs("div",{className:"interview-callouts",children:[p.jsxs("div",{className:"callout",children:[p.jsx("div",{className:"callout-icon",children:"★"}),p.jsxs("div",{className:"callout-content",children:[p.jsx("h4",{className:"callout-title",children:"Build Connections Early"}),p.jsx("p",{className:"callout-caption",children:"Socializing with engineers helped me discover people from my own college I never knew and made collaboration much smoother."})]})]}),p.jsxs("div",{className:"callout",children:[p.jsx("div",{className:"callout-icon",children:"★"}),p.jsxs("div",{className:"callout-content",children:[p.jsx("h4",{className:"callout-title",children:"Own the Design Process"}),p.jsx("p",{className:"callout-caption",children:"Being the only designer meant I led research initiatives, maintained the design system, and wrote documentation, which was a huge learning experience."})]})]}),p.jsxs("div",{className:"callout",children:[p.jsx("div",{className:"callout-icon",children:"★"}),p.jsxs("div",{className:"callout-content",children:[p.jsx("h4",{className:"callout-title",children:"Mentor and Learn"}),p.jsx("p",{className:"callout-caption",children:"I taught the CEO about UX design while learning from his perspective, making it a mutually rewarding experience."})]})]})]}),p.jsxs("p",{className:"contact-paragraph",children:["To learn more about my project or hear more about my process, reach out to ",p.jsx("a",{href:"mailto:ng545@cornell.edu",className:"contact-email",children:"ng545@cornell.edu"})," to set up a coffee chat ☕!"]})]})]})})),Lb="/assets/safehub-main-C_myJ9cK.png",Ob="/assets/safehub-v1-D6CXDAvT.png",Pb="/assets/safehub-v2-B7-hVRoK.png",Ib="/assets/safehub-location-v1-CGmCgpTE.png",Fb="/assets/safehub-maps-video-CfJtSI_s.mov",Bb="/assets/safehub-tooltip-recording-2-ftKGaPaP.mov",zb="/assets/safehub-you-are-here-CenqAm5f.mov",Hb="/assets/safehub-location-v2-DJhZImjY.png",Gb="/assets/safehub-emergency-v1-DZiS4JeJ.png",tv=()=>p.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:p.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Vb=()=>(re.useEffect(()=>{window.scrollTo(0,0)},[]),p.jsx("div",{className:"case-study-container",children:p.jsxs("div",{className:"safehub-content",children:[p.jsxs("div",{className:"safehub-header",children:[p.jsxs("div",{className:"safehub-header-left",children:[p.jsx("h1",{className:"safehub-header-title",children:"Safehub"}),p.jsx("p",{className:"safehub-header-date",children:"Spring 2024"})]}),p.jsx("div",{className:"safehub-header-right",children:p.jsx("p",{className:"safehub-description",children:"A 0→1 mobile safety app for Stamford High School, enabling students, teachers, and staff a faster way to report and respond to on-campus emergencies."})})]}),p.jsx("div",{className:"safehub-image-container",children:p.jsx("img",{src:Lb,alt:"Safehub app",className:"safehub-main-image"})}),p.jsxs("div",{className:"safehub-section",children:[p.jsx("p",{className:"safehub-section-heading",children:"Introduction"}),p.jsx("p",{className:"safehub-section-body",children:"Stamford High School faces significant challenges in maintaining rapid and reliable emergency response."}),p.jsxs("div",{className:"safehub-news-links",children:[p.jsxs("a",{href:"https://www.stamfordadvocate.com/news/article/stamford-school-shooting-threat-student-arrest-19749508.php",target:"_blank",rel:"noopener noreferrer",className:"safehub-news-card",children:[p.jsx("span",{className:"safehub-news-text",children:"Stamford High School student threatened to 'shoot up the school' on Snapchat"}),p.jsx("span",{className:"safehub-news-arrow",children:p.jsx(tv,{})})]}),p.jsxs("a",{href:"https://www.nbcnewyork.com/news/local/active-shooter-hoax-call-triggers-lockdown-at-ct-schools-week-after-nj-swatting-spree/3917578/",target:"_blank",rel:"noopener noreferrer",className:"safehub-news-card",children:[p.jsx("span",{className:"safehub-news-text",children:"'Extremely Traumatic:' CT Official Blasts 'Active Shooter' Hoax"}),p.jsx("span",{className:"safehub-news-arrow",children:p.jsx(tv,{})})]})]})]}),p.jsxs("div",{className:"safehub-section",children:[p.jsx("p",{className:"safehub-section-heading",children:"User Research"}),p.jsx("p",{className:"safehub-section-body",children:"I noticed that students had very different reactions when I asked how safe campus felt. This led me to conduct user research to better understand those experiences."}),p.jsxs("div",{className:"safehub-quotes",children:[p.jsxs("div",{className:"safehub-quote-block",children:[p.jsx("p",{className:"safehub-quote-text",children:`"Marijuana and Vaping are relatively common in the Bathrooms, especially on the 6th & 7th floors, but the fights get out of hand since there are no cameras and staff can't intervene"`}),p.jsx("p",{className:"safehub-quote-attribution",children:"Stamford High Junior"})]}),p.jsxs("div",{className:"safehub-quote-block",children:[p.jsx("p",{className:"safehub-quote-text",children:'"There was a fight near the auditorium one afternoon, and it honestly terrified me. It took almost ten minutes before anyone showed up to help, and by then, everyone was already panicking."'}),p.jsx("p",{className:"safehub-quote-attribution",children:"Stamford High Sophomore"})]})]})]}),p.jsxs("div",{className:"safehub-section",children:[p.jsx("p",{className:"safehub-section-heading",children:"Insights"}),p.jsx("p",{className:"safehub-section-body",children:"I combined AI with affinity diagramming to determine common themes and found 2 insights that stood out:"}),p.jsxs("div",{className:"safehub-key-insights",children:[p.jsxs("div",{className:"safehub-key-insight",children:[p.jsx("p",{className:"safehub-key-insight-label",children:"Key Insight #1"}),p.jsx("p",{className:"safehub-key-insight-text",children:"Students were most concerned about medical emergencies, strangers, fights, suspicious objects, and fires."})]}),p.jsxs("div",{className:"safehub-key-insight",children:[p.jsx("p",{className:"safehub-key-insight-label",children:"Key Insight #2"}),p.jsx("p",{className:"safehub-key-insight-text",children:"Students questioned the effectiveness of current safety measures, including guards and cameras."})]})]})]}),p.jsxs("div",{className:"safehub-section",children:[p.jsx("p",{className:"safehub-section-heading",children:"The Problem"}),p.jsx("p",{className:"safehub-section-body",children:"Stamford High faces critical safety risks due to limited security staff and the absence of an efficient emergency response system, highlighting the need for a faster, technology-driven solution."}),p.jsxs("div",{className:"safehub-callout",children:[p.jsx("span",{className:"safehub-callout-icon",children:"⚠"}),p.jsx("p",{className:"safehub-callout-text",children:"How might we empower students, teachers, and staff with tools that improve emergency preparedness and response?"})]})]}),p.jsxs("div",{className:"safehub-section",children:[p.jsx("p",{className:"safehub-section-heading",children:"Design"}),p.jsx("p",{className:"safehub-section-body",children:"After taking into account all of the insights from my research, I started defining how I wanted the core elements of the app to look."}),p.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[p.jsxs("div",{className:"safehub-design-label safehub-design-label--iteration",children:[p.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--red",children:p.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:p.jsx("path",{d:"M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})})}),p.jsx("span",{className:"safehub-design-label-text",children:"ITERATION"})]}),p.jsx("img",{src:Pb,alt:"Main screen v2",className:"safehub-main-image"})]}),p.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"Iteration led me to a final concept that felt adequate."}),p.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[p.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[p.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:p.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:p.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),p.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),p.jsx("img",{src:Ob,alt:"Main screen v1",className:"safehub-main-image"})]})]}),p.jsxs("div",{className:"safehub-section",children:[p.jsx("p",{className:"safehub-section-heading",children:"Location"}),p.jsx("p",{className:"safehub-section-body",children:"While exploring location reporting, I aimed to find a balance between giving users control to report locations accurately and keeping the process simple and effortless."}),p.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[p.jsxs("div",{className:"safehub-design-label safehub-design-label--iteration",children:[p.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--red",children:p.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:p.jsx("path",{d:"M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})})}),p.jsx("span",{className:"safehub-design-label-text",children:"ITERATION"})]}),p.jsx("img",{src:Ib,alt:"Location v1",className:"safehub-main-image"})]}),p.jsx("p",{className:"safehub-image-caption",children:"BRUTE FORCE APPROACH"}),p.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"I tried to explore a way to integrate maps, following patterns from familiar tools like Google Maps, Uber, and Lyft."}),p.jsx("div",{className:"safehub-image-container safehub-image-container--video",children:p.jsx("video",{className:"safehub-video",src:Fb,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),p.jsxs("div",{className:"safehub-video-pair",children:[p.jsx("div",{className:"safehub-video-block",children:p.jsx("video",{className:"safehub-video",src:Bb,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),p.jsx("div",{className:"safehub-video-block",children:p.jsx("video",{className:"safehub-video",src:zb,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})]}),p.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"Putting that together, I assembled a solid design."}),p.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[p.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[p.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:p.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:p.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),p.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),p.jsx("img",{src:Hb,alt:"Location v2",className:"safehub-main-image"})]})]}),p.jsxs("div",{className:"safehub-section",children:[p.jsx("p",{className:"safehub-section-heading",children:"Emergency Selection"}),p.jsx("p",{className:"safehub-section-body",children:"Accounting for how users specify their emergency felt relatively straightforward to incorporate into the flow. I compiled these emergency choices from user research."}),p.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[p.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[p.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:p.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:p.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),p.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),p.jsx("img",{src:Gb,alt:"Emergency selection",className:"safehub-main-image"})]})]})]})})),kb="/assets/ChatGPT%20Thumbnail-CU9zW1Hs.png",jb="/assets/hmw-mWAKJkvP.webp",Xb="/assets/matcha%20flow%202%202-lsPGq96-.mov",Wb="/assets/local%20with%20colors-Dvplt9YA.mov",qb="/assets/Global%20Bookmarks-B0R53pk7.mov",Yb="/assets/vedant%201-DKEQ0i9R.png",Zb="/assets/ryan%202-C1j2N_UV.png",Kb="/assets/Aditi%203-CtLfI4Ac.png",Qb="/assets/sticky--_sXhqSu.webp",Jb="/assets/solutions-ok1WU0ts.webp",$b="/assets/swot-x7fHZY3s.png",eE="/assets/local%20bookmarks%20man-Cfy3X5JU.webp",tE="/assets/gloal%20bookmarks%20man-S1zA0VGb.webp",nE="/assets/claude%20analysis-BsZWfSHr.png",iE="/assets/gemini%20analysis-BmeCR9WI.png",aE=()=>(re.useEffect(()=>{window.scrollTo(0,0)},[]),p.jsx("div",{className:"case-study-container chatgpt-case-study",children:p.jsxs("div",{className:"case-study-content",children:[p.jsxs("div",{className:"case-study-header",children:[p.jsx("h1",{className:"case-study-title",children:p.jsx("em",{children:"Building Bookmarks into ChatGPT Mobile"})}),p.jsx("p",{className:"case-study-description",children:"Creating a more intuitive mobile interface for ChatGPT's mobile app through Bookmark integration, enabling users to save and organize their most valuable conversations."}),p.jsx("img",{src:kb,alt:"ChatGPT Project Thumbnail",className:"chatgpt-thumbnail-image"}),p.jsxs("div",{className:"case-study-columns",children:[p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"chatgpt-column-title chatgpt-column-team",children:"TEAM"}),p.jsx("p",{className:"column-content",children:"Just Me!"})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"chatgpt-column-title chatgpt-column-role",children:"ROLE"}),p.jsx("p",{className:"column-content",children:"Product Designer"})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"chatgpt-column-title chatgpt-column-timeline",children:"TIMELINE"}),p.jsxs("p",{className:"column-content",children:["3 months",p.jsx("br",{}),"(Sept 2025 - Nov 2025)"]})]}),p.jsxs("div",{className:"case-study-column",children:[p.jsx("h3",{className:"chatgpt-column-title chatgpt-column-skills",children:"SKILLS & TOOLS"}),p.jsxs("p",{className:"column-content",children:["Figma, User Research,",p.jsx("br",{}),"Prototyping"]})]})]})]}),p.jsxs("div",{className:"case-study-section",children:[p.jsx("h2",{className:"chatgpt-section-title chatgpt-section-background",children:"[1] BACKGROUND"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"One of the greatest AI tools on the market"})}),p.jsx("p",{className:"section-paragraph",children:"ChatGPT. It's the AI tool most of us rely on without even thinking about it."}),p.jsxs("p",{className:"section-paragraph",children:["I recently realized I rarely use ChatGPT's mobile app. The experience just never felt as ",p.jsx("span",{className:"dotted-underline",children:"smooth"})," or ",p.jsx("span",{className:"dotted-underline",children:"intuitive"})," as the desktop version. ",p.jsx("em",{children:"Was it just me?"})," Or were other users also struggling to rely on ChatGPT on the go?"]}),p.jsx("p",{className:"section-paragraph",children:"Information retrieval on the mobile app often felt like a hassle:"}),p.jsxs("div",{className:"chatgpt-callouts",children:[p.jsx("div",{className:"chatgpt-callout",children:p.jsxs("div",{className:"chatgpt-callout-content",children:[p.jsx("h4",{className:"chatgpt-callout-title",children:"OVERLAPPING CONVERSATIONS"}),p.jsx("p",{className:"chatgpt-callout-caption",children:"Multiple chat threads made it hard to locate specific conversations quickly."})]})}),p.jsx("div",{className:"chatgpt-callout",children:p.jsxs("div",{className:"chatgpt-callout-content",children:[p.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-pink",children:"LIMITED SCREEN SPACE"}),p.jsx("p",{className:"chatgpt-callout-caption",children:"The mobile interface felt cramped, making it difficult to navigate and find important messages."})]})}),p.jsx("div",{className:"chatgpt-callout",children:p.jsxs("div",{className:"chatgpt-callout-content",children:[p.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-bubblegum",children:"COMPACT INTERFACE"}),p.jsx("p",{className:"chatgpt-callout-caption",children:"The condensed layout made it challenging to revisit past insights and organize conversations effectively."})]})})]}),p.jsx("p",{className:"section-paragraph",children:"This made me wonder:"}),p.jsx("div",{className:"chatgpt-hmw-container",children:p.jsx("img",{src:jb,alt:"How Might We",className:"chatgpt-hmw-image"})})]}),p.jsxs("div",{className:"case-study-section",children:[p.jsx("h2",{className:"chatgpt-section-title chatgpt-section-final-product",children:"[2] THE FINAL PRODUCT"}),p.jsx("h3",{className:"section-subtitle",children:p.jsx("em",{children:"A little preview of the final product"})}),p.jsxs("p",{className:"section-paragraph",children:["The output of the project was ",p.jsx("span",{className:"dotted-underline",children:"three well-crafted high-fidelity flows"})," that integrated my bookmarks feature into the ChatGPT mobile app!"]}),p.jsxs("div",{className:"chatgpt-videos-canvas",children:[p.jsx("video",{src:Xb,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),p.jsx("video",{src:Wb,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),p.jsx("video",{src:qb,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]})]}),p.jsxs("div",{className:"case-study-section",children:[p.jsx("h2",{className:"chatgpt-section-title chatgpt-section-user-research",children:"[3] USER RESEARCH"}),p.jsx("h3",{className:"section-subtitle",children:"Discovering how others felt through User Research"}),p.jsxs("p",{className:"section-paragraph",children:["I conducted informal interviews with a small but diverse group of ChatGPT users: a mix of ",p.jsx("span",{className:"dotted-underline",children:"software engineers"})," and ",p.jsx("span",{className:"dotted-underline",children:"college students"}),"."]}),p.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[3.1] THE SOFTWARE ENGINEER"}),p.jsx("div",{className:"chatgpt-wide-canvas",children:p.jsx("img",{src:Yb,alt:"Vedant",className:"chatgpt-wide-canvas-image chatgpt-vedant-image"})}),p.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-pink",children:"[3.2] THE BU STUDENT"}),p.jsx("div",{className:"chatgpt-wide-canvas",children:p.jsx("img",{src:Zb,alt:"Ryan",className:"chatgpt-wide-canvas-image chatgpt-ryan-image"})}),p.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-bubblegum",children:"[3.3] THE CORNELL STUDENT"}),p.jsx("div",{className:"chatgpt-wide-canvas",children:p.jsx("img",{src:Kb,alt:"Aditi",className:"chatgpt-wide-canvas-image chatgpt-aditi-image"})})]}),p.jsxs("div",{className:"case-study-section",children:[p.jsx("h2",{className:"chatgpt-section-title chatgpt-section-brainstorming",children:"[4] BRAINSTORMING"}),p.jsx("h3",{className:"section-subtitle",children:"Brainstorming HMWs with my Friends"}),p.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[4.1] HMW QUESTIONS"}),p.jsx("p",{className:"section-paragraph",children:"I spent around 4 hours coming up with HMW questions with my roommate and one of my closest friends!"}),p.jsx("div",{className:"chatgpt-wide-canvas chatgpt-sticky-canvas",children:p.jsx("img",{src:Qb,alt:"Sticky Notes",className:"chatgpt-sticky-image"})}),p.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-pink",children:"[4.2] SOLUTIONS"}),p.jsxs("p",{className:"section-paragraph",children:["We condensed the HMWs into three core problem spaces which are the following: ",p.jsx("span",{className:"dotted-underline chatgpt-yellow",children:"Enhancing Learning Retention"}),", ",p.jsx("span",{className:"dotted-underline chatgpt-blue",children:"Conversation Structure"}),", and ",p.jsx("span",{className:"dotted-underline chatgpt-green",children:"Summarizing Takeaways"}),"."]}),p.jsx("div",{className:"chatgpt-wide-canvas chatgpt-solutions-canvas",children:p.jsx("img",{src:Jb,alt:"Solutions",className:"chatgpt-wide-canvas-image chatgpt-solutions-image"})}),p.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-bubblegum",children:"[4.3] FEASABILITY"}),p.jsx("p",{className:"section-paragraph",children:"Conducting SWOT analysis led me to discover the feasibility of these solution spaces, especially on a mobile interface."}),p.jsx("div",{className:"chatgpt-wide-canvas chatgpt-swot-canvas",children:p.jsx("img",{src:$b,alt:"SWOT Analysis",className:"chatgpt-wide-canvas-image chatgpt-swot-image"})}),p.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[4.4] MARKET RESEARCH"}),p.jsx("p",{className:"section-paragraph",children:"To determine which features made the most sense for users, I evaluated other AI tools to identify patterns in interactions and functionality."}),p.jsx("div",{className:"chatgpt-wide-canvas",children:p.jsx("img",{src:nE,alt:"Claude Analysis",className:"chatgpt-wide-canvas-image chatgpt-claude-image"})}),p.jsx("div",{className:"chatgpt-wide-canvas",children:p.jsx("img",{src:iE,alt:"Gemini Analysis",className:"chatgpt-wide-canvas-image chatgpt-gemini-image"})})]}),p.jsxs("div",{className:"case-study-section",children:[p.jsx("h2",{className:"chatgpt-section-title chatgpt-section-more-brainstorming",children:"[5] MORE BRAINSTORMING"}),p.jsx("h3",{className:"section-subtitle",children:"Understanding the terminology"}),p.jsx("div",{className:"chatgpt-callout",children:p.jsxs("div",{className:"chatgpt-callout-content",children:[p.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-title-orange",children:"[5.1] LOCAL BOOKMARKS"}),p.jsxs("p",{className:"chatgpt-callout-caption",children:[p.jsx("em",{children:"Local Bookmarks"}),' are for "in-moment organization" within a single chat. They keep important messages easily accessible without forcing users to think about categorization.']})]})}),p.jsx("div",{className:"chatgpt-wide-canvas chatgpt-local-bookmarks-canvas",children:p.jsx("img",{src:eE,alt:"Local Bookmarks",className:"chatgpt-wide-canvas-image chatgpt-local-bookmarks-image"})}),p.jsx("div",{className:"chatgpt-callout",children:p.jsxs("div",{className:"chatgpt-callout-content",children:[p.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-title-orange",children:"[5.2] GLOBAL BOOKMARKS"}),p.jsx("p",{className:"chatgpt-callout-caption",children:"Global Bookmarks are category tagged bookmarks that are designed for cross-conversation organization."})]})}),p.jsx("div",{className:"chatgpt-wide-canvas chatgpt-local-bookmarks-canvas",children:p.jsx("img",{src:tE,alt:"Global Bookmarks",className:"chatgpt-wide-canvas-image chatgpt-local-bookmarks-image"})}),p.jsx("p",{className:"section-paragraph",children:"Support users with managing key information across numerous chats and enables thematic organization."})]})]})})),sE=[{name:"AI Qualitative Branching",date:"May 26",comingSoon:!0,path:null},{name:"Sections",date:"Apr 26",comingSoon:!1,path:"/work/pogo/sections"},{name:"Virtual Backgrounds",date:"Apr 26",comingSoon:!1,path:null},{name:"Monadic Study Builder",date:"Mar 26",comingSoon:!1,path:null},{name:"TURF Study Builder",date:"Feb 26",comingSoon:!1,path:null}];function rE(){const r=Is();return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),p.jsx("div",{className:"pogo-features-page",children:p.jsxs("div",{className:"pogo-features-inner",children:[p.jsxs("div",{className:"pogo-header",children:[p.jsxs("div",{className:"pogo-header-left",children:[p.jsx("h1",{className:"pogo-header-title",children:"Pogo AI Survey Platform"}),p.jsx("p",{className:"pogo-header-date",children:"Spring 2026"})]}),p.jsx("div",{className:"pogo-header-right",children:p.jsx("p",{className:"pogo-header-desc",children:"Currently working as a Product Design Intern at Pogo, an enterprise AI survey platform that has raised $14.8M in funding."})})]}),p.jsx("p",{className:"pogo-header-title pogo-section-label",children:"Shipped Features"}),p.jsx("ul",{className:"pogo-features-list",children:sE.map((e,i)=>p.jsxs("li",{className:`pogo-features-row${e.comingSoon?" pogo-features-row--dim cursor-coming-soon":""}${e.path?" pogo-features-row--link":""}`,style:{animationDelay:`${.2+i*.08}s`,cursor:e.path?"pointer":"default"},onClick:()=>e.path&&r(e.path),children:[p.jsx("span",{className:"pogo-features-name",children:e.name}),p.jsx("span",{className:"pogo-features-date",children:e.date})]},e.name))})]})})}const oE="/assets/sections-portfolio-thumbnail-2-BzVwE-74.png",lE="/assets/sections-moving-question-DZJvcC_N.png",cE="/assets/moving-question-to-section-menu--N_aHMel.png",uE="/assets/converting-question-to-section-DIe8NMiD.png",fE="/assets/companies-NCL2s234.png",dE="/assets/notion-faces-comic-Bw9Xulu8.png";function hE(){return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),p.jsx("div",{className:"sections-page",children:p.jsxs("div",{className:"sections-inner",children:[p.jsxs("div",{className:"sections-header",children:[p.jsxs("div",{className:"sections-header-left",children:[p.jsx("h1",{className:"sections-title",children:"Survey Sections"}),p.jsx("p",{className:"sections-meta",children:"Spring 2026"})]}),p.jsx("div",{className:"sections-header-right",children:p.jsx("p",{className:"sections-desc",children:'Designed a minimal "Sections" feature for the AI Qualitative Survey builder within the Pogo platform, enabling researchers to organize long-form AI-generated surveys into lightweight thematic groups without adding workflow complexity.'})})]}),p.jsx("div",{className:"sections-thumbnail-canvas",children:p.jsx("img",{src:oE,alt:"Sections feature thumbnail",className:"sections-thumbnail-img"})}),p.jsxs("div",{className:"sections-text-block",children:[p.jsx("p",{className:"sections-section-label",children:"BACKGROUND"}),p.jsx("h2",{className:"sections-section-title",children:"Clients requested a special feature"}),p.jsx("p",{className:"sections-section-body",children:'While working on the AI Qualitative Survey branching editor, I identified enterprise user demand for more organized branching logic workflows. "Sections" emerged as a key solution to improve question organization and simplify navigation within complex surveys on the Pogo platform.'})]}),p.jsx("div",{className:"sections-thumbnail-canvas sections-thumbnail-canvas--comic",children:p.jsx("img",{src:dE,alt:"Notion faces comic",className:"sections-comic-img"})}),p.jsxs("div",{className:"sections-text-block sections-text-block--tight",children:[p.jsx("p",{className:"sections-section-label sections-section-label--dark",children:"COMPETITOR RESEARCH"}),p.jsx("h2",{className:"sections-section-title",children:"Finding inspiration in popular tools"}),p.jsx("p",{className:"sections-section-body",children:"I first conducted competitor analysis across survey platforms and workspace tools to understand how other products approached sections, organization, and information hierarchy. This research helped inform interaction patterns and usability decisions for the feature's overall design."})]}),p.jsx("div",{className:"sections-thumbnail-canvas sections-thumbnail-canvas--half",children:p.jsx("img",{src:fE,alt:"Competitor companies",className:"sections-companies-img cursor-companies"})}),p.jsxs("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px"},children:[p.jsx("h2",{className:"sections-section-title",children:"Fast forward to the interactions"}),p.jsx("p",{className:"sections-section-body",children:"The feature supported several intuitive interactions, including creating sections from multiple entry points, grouping existing questions into sections, and quickly removing or ungrouping content when restructuring surveys."})]}),p.jsxs("div",{className:"sections-text-block sections-text-block--tight",children:[p.jsx("p",{className:"sections-section-label sections-section-label--dark",children:"INTERACTION #1"}),p.jsx("h2",{className:"sections-section-title",children:"Dragging questions into a section"})]}),p.jsx("div",{className:"sections-thumbnail-canvas",children:p.jsx("img",{src:lE,alt:"Sections moving question",className:"sections-thumbnail-img"})}),p.jsxs("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px"},children:[p.jsx("p",{className:"sections-section-label sections-section-label--dark",children:"INTERACTION #2"}),p.jsx("h2",{className:"sections-section-title",children:"Moving questions into a section"})]}),p.jsx("div",{className:"sections-thumbnail-canvas",children:p.jsx("img",{src:cE,alt:"Moving question to section menu",className:"sections-thumbnail-img"})}),p.jsxs("div",{className:"sections-text-block sections-text-block--tight",style:{marginTop:"40px"},children:[p.jsx("p",{className:"sections-section-label sections-section-label--dark",children:"INTERACTION #3"}),p.jsx("h2",{className:"sections-section-title",children:"Converting a question to a section"})]}),p.jsx("div",{className:"sections-thumbnail-canvas",children:p.jsx("img",{src:uE,alt:"Converting a question to a section",className:"sections-thumbnail-img"})})]})})}const pE=[{num:"01",title:"Rejection",date:"Mar 2026",path:"/writing/rejection"}];function mE(){const r=Is();return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),p.jsx("div",{className:"pogo-features-page",children:p.jsxs("div",{className:"pogo-features-inner",children:[p.jsx("p",{className:"pogo-features-heading",children:"WRITING"}),p.jsx("ul",{className:"pogo-features-list",children:pE.map((e,i)=>p.jsxs("li",{className:"pogo-features-row writing-row",style:{animationDelay:`${.2+i*.08}s`,cursor:"pointer"},onClick:()=>r(e.path),children:[p.jsx("span",{className:"pogo-features-name",children:e.title}),p.jsx("span",{className:"pogo-features-date",children:e.date})]},e.num))})]})})}const gE=()=>p.jsx("svg",{width:"9",height:"9",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:p.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})});function bs({href:r,children:e}){return p.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"article-link",children:[e,p.jsx("sup",{className:"article-link-sup",children:p.jsx(gE,{})})]})}function Sd({children:r}){return p.jsx("span",{className:"article-underline",children:r})}function vE(){return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),p.jsx("div",{className:"article-page",children:p.jsxs("div",{className:"article-inner",children:[p.jsx("h1",{className:"article-title",children:"Rejection"}),p.jsx("p",{className:"article-dateline",children:p.jsx("span",{className:"article-date",children:"March 2026, written from the comfort of my dorm room"})}),p.jsxs("div",{className:"article-body",children:[p.jsxs("p",{children:["At ",p.jsx(bs,{href:"https://www.cornell.edu",children:"Cornell"}),", spring club recruiting was a lot harder than I expected. Everyone around me seemed incredibly accomplished and already involved in things they cared about, while I was still trying to find my place. After a series of rejections, I started questioning my identity as a designer. Before college, it was one of the few things I felt confident in, but over time I began wondering whether I was even cut out for the field at all."]}),p.jsxs("p",{children:["Then the opportunity at ",p.jsx(bs,{href:"https://www.joinpogo.com/",children:"Pogo"})," showed up."]}),p.jsx("p",{children:"Working there as a Product Design Intern helped me reconnect with why I cared about design in the first place. It reminded me that growth is not always linear and that rejection does not automatically mean you are in the wrong field."}),p.jsx("p",{children:"Throughout the spring internship, my visual design skills started to feel stronger again, and I found myself taking a lot more ownership over my work. It felt good to say I was working at a Series B startup, and I was proud of that in its own way, but honestly what mattered more to me was the way it brought me back into design. It wasn't really about the title or the resume line. It was more about feeling connected to the work again, and remembering that I actually enjoyed doing this."}),p.jsx("p",{children:"At the same time, sophomore summer recruiting slowly started working out too. Opportunities that once felt completely out of reach somehow became real options. Offers found themselves into my hands, and eventually the question stopped being whether I was capable enough to earn an opportunity. Instead, I started thinking about where I genuinely saw myself growing and enjoying the work."}),p.jsxs("p",{children:["Did I see myself at ",p.jsx(bs,{href:"https://www.walmart.com",children:"Walmart"})," as a"," ",p.jsx(Sd,{children:"System Engineer Intern"})," re-envisioning the future of AI Digital Twins for Supply Chain Operations? Or maybe at"," ",p.jsx(bs,{href:"https://www.mlb.com",children:"Major League Baseball"})," as a"," ",p.jsx(Sd,{children:"Product Design Intern"})," building the future of interactive baseball games in augmented reality? Did I see myself back at"," ",p.jsx(bs,{href:"https://www.joinpogo.com/",children:"Pogo"})," helping design the first AI Qualitative Survey Platform? Or was it"," ",p.jsx(bs,{href:"https://www.cisco.com",children:"Cisco"})," where I saw myself shaping the direction of Software-Defined WAN technology as a"," ",p.jsx(Sd,{children:"Technical Product Management Intern"}),"?"]}),p.jsxs("p",{children:["Eventually, I realized I saw myself growing the most at"," ",p.jsx(bs,{href:"https://www.cisco.com",children:"Cisco"}),", which is where I'll be spending this summer in the Bay Area."]}),p.jsx("p",{children:"So to my junior year self reading this someday, whether you are stressed about recruiting again or struggling through another difficult semester, remember that things eventually worked out because you kept going even when your confidence was low. You stayed with it when it mattered most."})]}),p.jsx("hr",{className:"article-divider"})]})})}const _E="/assets/screen1-ppgaT2M6.png",xE="/assets/screen2-BYvi939c.png",SE="/assets/screen3-Bg4PHBuL.png",yE="/assets/reddit-logo2-DkJOcndy.webp",ME="/assets/chatgpt-logo-DyzhL--E.png",bE="/assets/screen4-VvD5IonC.png",EE="/assets/screen5-BBQ9xSz2.png",nv=()=>p.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:p.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});function TE(){return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),p.jsx("div",{className:"case-study-container",children:p.jsxs("div",{className:"chatgpt-article-content",children:[p.jsxs("div",{className:"chatgpt-article-header",children:[p.jsxs("div",{className:"chatgpt-article-header-left",children:[p.jsx("h1",{className:"chatgpt-article-title",children:"ChatGPT Bookmarks"}),p.jsx("p",{className:"chatgpt-article-date",children:"Fall 2025"}),p.jsx("a",{href:"https://medium.com/@nitishgannu/building-bookmarks-into-chatgpt-46ca50a7b2a4",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-article-case-link cursor-medium",children:"Full Case Study"})]}),p.jsx("div",{className:"chatgpt-article-header-right",children:p.jsx("p",{className:"chatgpt-article-body",children:"As part of a fun semester-wide project, I explored how bookmarking could work inside ChatGPT conversations to help users save, revisit, and navigate important messages more naturally."})})]}),p.jsxs("div",{className:"chatgpt-feedback-section",children:[p.jsx("p",{className:"chatgpt-feedback-heading",children:"Motivation"}),p.jsxs("a",{href:"https://www.reddit.com/r/ChatGPT/comments/1oxm491/feature_suggestion_bookmarks_table_of_contents_in/?utm_source=chatgpt.com",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-feedback-card chatgpt-feedback-card--reddit",children:[p.jsx("img",{src:yE,alt:"Reddit",className:"chatgpt-feedback-logo"}),p.jsx("span",{className:"chatgpt-feedback-text",children:"Feature Suggestion: Bookmarks"}),p.jsx("span",{className:"chatgpt-feedback-arrow",children:p.jsx(nv,{})})]}),p.jsxs("a",{href:"https://community.openai.com/t/add-ability-to-bookmark-favorite-a-message-in-any-chat-thread/1086947",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-feedback-card",children:[p.jsx("img",{src:ME,alt:"ChatGPT",className:"chatgpt-feedback-logo chatgpt-feedback-logo--sm"}),p.jsx("span",{className:"chatgpt-feedback-text",children:"Add ability to bookmark / favorite a message"}),p.jsx("span",{className:"chatgpt-feedback-arrow",children:p.jsx(nv,{})})]})]}),p.jsxs("div",{className:"chatgpt-article-canvas",children:[p.jsx("img",{src:_E,alt:"Screen 1",className:"chatgpt-screen-img"}),p.jsx("img",{src:xE,alt:"Screen 2",className:"chatgpt-screen-img",style:{marginTop:"140px"}})]}),p.jsx("div",{className:"chatgpt-article-canvas",style:{marginTop:"16px",aspectRatio:"4 / 3"},children:p.jsx("img",{src:SE,alt:"Screen 3",className:"chatgpt-screen-img chatgpt-screen-large"})}),p.jsxs("div",{className:"chatgpt-article-canvas",style:{marginTop:"16px"},children:[p.jsx("img",{src:EE,alt:"Screen 5",className:"chatgpt-screen-img",style:{marginTop:"140px"}}),p.jsx("img",{src:bE,alt:"Screen 4",className:"chatgpt-screen-img"})]}),p.jsxs("p",{className:"chatgpt-last-updated",children:[p.jsx("span",{className:"chatgpt-last-updated-label",children:"Last Updated: "}),p.jsx("span",{className:"chatgpt-last-updated-date",children:"December 2025"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="183",AE=0,iv=1,wE=2,Wc=1,RE=2,Yo=3,ss=0,kn=1,pa=2,va=0,Ur=1,av=2,sv=3,rv=4,CE=5,Ds=100,NE=101,DE=102,UE=103,LE=104,OE=200,PE=201,IE=202,FE=203,nh=204,ih=205,BE=206,zE=207,HE=208,GE=209,VE=210,kE=211,jE=212,XE=213,WE=214,ah=0,sh=1,rh=2,Or=3,oh=4,lh=5,ch=6,uh=7,g_=0,qE=1,YE=2,Fi=0,v_=1,__=2,x_=3,S_=4,y_=5,M_=6,b_=7,E_=300,Ps=301,Pr=302,yd=303,Md=304,su=306,fh=1e3,ma=1001,dh=1002,An=1003,ZE=1004,Sc=1005,Dn=1006,bd=1007,Ls=1008,ui=1009,T_=1010,A_=1011,Qo=1012,tp=1013,Gi=1014,Pi=1015,ya=1016,np=1017,ip=1018,Jo=1020,w_=35902,R_=35899,C_=1021,N_=1022,Mi=1023,Ma=1026,Os=1027,D_=1028,ap=1029,Ir=1030,sp=1031,rp=1033,qc=33776,Yc=33777,Zc=33778,Kc=33779,hh=35840,ph=35841,mh=35842,gh=35843,vh=36196,_h=37492,xh=37496,Sh=37488,yh=37489,Mh=37490,bh=37491,Eh=37808,Th=37809,Ah=37810,wh=37811,Rh=37812,Ch=37813,Nh=37814,Dh=37815,Uh=37816,Lh=37817,Oh=37818,Ph=37819,Ih=37820,Fh=37821,Bh=36492,zh=36494,Hh=36495,Gh=36283,Vh=36284,kh=36285,jh=36286,KE=3200,QE=0,JE=1,is="",ci="srgb",Fr="srgb-linear",$c="linear",Ft="srgb",_r=7680,ov=519,$E=512,eT=513,tT=514,op=515,nT=516,iT=517,lp=518,aT=519,lv=35044,cv="300 es",Ii=2e3,eu=2001;function sT(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rT(){const r=tu("canvas");return r.style.display="block",r}const uv={};function fv(...r){const e="THREE."+r.shift();console.log(e,...r)}function U_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=U_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function At(...r){r=U_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function nu(...r){const e=r.join(" ");e in uv||(uv[e]=!0,at(...r))}function oT(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const lT={[ah]:sh,[rh]:ch,[oh]:uh,[Or]:lh,[sh]:ah,[ch]:rh,[uh]:oh,[lh]:Or};class Gr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=Math.PI/180,Xh=180/Math.PI;function il(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function _t(r,e,i){return Math.max(e,Math.min(i,r))}function cT(r,e){return(r%e+e)%e}function Td(r,e,i){return(1-i)*r+i*e}function Go(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,i=0){Lt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,m){let g=s[l+0],h=s[l+1],_=s[l+2],S=s[l+3],v=c[f+0],M=c[f+1],b=c[f+2],C=c[f+3];if(S!==C||g!==v||h!==M||_!==b){let y=g*v+h*M+_*b+S*C;y<0&&(v=-v,M=-M,b=-b,C=-C,y=-y);let x=1-m;if(y<.9995){const N=Math.acos(y),D=Math.sin(N);x=Math.sin(x*N)/D,m=Math.sin(m*N)/D,g=g*x+v*m,h=h*x+M*m,_=_*x+b*m,S=S*x+C*m}else{g=g*x+v*m,h=h*x+M*m,_=_*x+b*m,S=S*x+C*m;const N=1/Math.sqrt(g*g+h*h+_*_+S*S);g*=N,h*=N,_*=N,S*=N}}e[i]=g,e[i+1]=h,e[i+2]=_,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,f){const m=s[l],g=s[l+1],h=s[l+2],_=s[l+3],S=c[f],v=c[f+1],M=c[f+2],b=c[f+3];return e[i]=m*b+_*S+g*M-h*v,e[i+1]=g*b+_*v+h*S-m*M,e[i+2]=h*b+_*M+m*v-g*S,e[i+3]=_*b-m*S-g*v-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,m=Math.cos,g=Math.sin,h=m(s/2),_=m(l/2),S=m(c/2),v=g(s/2),M=g(l/2),b=g(c/2);switch(f){case"XYZ":this._x=v*_*S+h*M*b,this._y=h*M*S-v*_*b,this._z=h*_*b+v*M*S,this._w=h*_*S-v*M*b;break;case"YXZ":this._x=v*_*S+h*M*b,this._y=h*M*S-v*_*b,this._z=h*_*b-v*M*S,this._w=h*_*S+v*M*b;break;case"ZXY":this._x=v*_*S-h*M*b,this._y=h*M*S+v*_*b,this._z=h*_*b+v*M*S,this._w=h*_*S-v*M*b;break;case"ZYX":this._x=v*_*S-h*M*b,this._y=h*M*S+v*_*b,this._z=h*_*b-v*M*S,this._w=h*_*S+v*M*b;break;case"YZX":this._x=v*_*S+h*M*b,this._y=h*M*S+v*_*b,this._z=h*_*b-v*M*S,this._w=h*_*S-v*M*b;break;case"XZY":this._x=v*_*S-h*M*b,this._y=h*M*S-v*_*b,this._z=h*_*b+v*M*S,this._w=h*_*S+v*M*b;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],m=i[5],g=i[9],h=i[2],_=i[6],S=i[10],v=s+m+S;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-g)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(s>m&&s>S){const M=2*Math.sqrt(1+s-m-S);this._w=(_-g)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(m>S){const M=2*Math.sqrt(1+m-s-S);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(g+_)/M}else{const M=2*Math.sqrt(1+S-s-m);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(g+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,m=i._x,g=i._y,h=i._z,_=i._w;return this._x=s*_+f*m+l*h-c*g,this._y=l*_+f*g+c*m-s*h,this._z=c*_+f*h+s*g-l*m,this._w=f*_-s*m-l*g-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,m=this.dot(e);m<0&&(s=-s,l=-l,c=-c,f=-f,m=-m);let g=1-i;if(m<.9995){const h=Math.acos(m),_=Math.sin(h);g=Math.sin(g*h)/_,i=Math.sin(i*h)/_,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,s=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(dv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(dv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,m=e.z,g=e.w,h=2*(f*l-m*s),_=2*(m*i-c*l),S=2*(c*s-f*i);return this.x=i+g*h+f*S-m*_,this.y=s+g*_+m*h-c*S,this.z=l+g*S+c*_-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*f-s*g,this.z=s*m-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new le,dv=new Vr;class ut{constructor(e,i,s,l,c,f,m,g,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,m,g,h)}set(e,i,s,l,c,f,m,g,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=m,_[3]=i,_[4]=c,_[5]=g,_[6]=s,_[7]=f,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],m=s[3],g=s[6],h=s[1],_=s[4],S=s[7],v=s[2],M=s[5],b=s[8],C=l[0],y=l[3],x=l[6],N=l[1],D=l[4],L=l[7],F=l[2],H=l[5],V=l[8];return c[0]=f*C+m*N+g*F,c[3]=f*y+m*D+g*H,c[6]=f*x+m*L+g*V,c[1]=h*C+_*N+S*F,c[4]=h*y+_*D+S*H,c[7]=h*x+_*L+S*V,c[2]=v*C+M*N+b*F,c[5]=v*y+M*D+b*H,c[8]=v*x+M*L+b*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],m=e[5],g=e[6],h=e[7],_=e[8];return i*f*_-i*m*h-s*c*_+s*m*g+l*c*h-l*f*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],m=e[5],g=e[6],h=e[7],_=e[8],S=_*f-m*h,v=m*g-_*c,M=h*c-f*g,b=i*S+s*v+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=S*C,e[1]=(l*h-_*s)*C,e[2]=(m*s-l*f)*C,e[3]=v*C,e[4]=(_*i-l*g)*C,e[5]=(l*c-m*i)*C,e[6]=M*C,e[7]=(s*g-h*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,m){const g=Math.cos(c),h=Math.sin(c);return this.set(s*g,s*h,-s*(g*f+h*m)+f+e,-l*h,l*g,-l*(-h*f+g*m)+m+i,0,0,1),this}scale(e,i){return this.premultiply(wd.makeScale(e,i)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,i){return this.premultiply(wd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new ut,hv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uT(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return nu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return nu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Fr]:{primaries:e,whitePoint:s,transfer:$c,toXYZ:hv,fromXYZ:pv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:hv,fromXYZ:pv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Mt=uT();function _a(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class fT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{xr===void 0&&(xr=tu("canvas")),xr.width=e.width,xr.height=e.height;const l=xr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=tu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=_a(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dT=0;class cp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,m=l.length;f<m;f++)l[f].isDataTexture?c.push(Rd(l[f].image)):c.push(Rd(l[f]))}else c=Rd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Rd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let hT=0;const Cd=new le;class On extends Gr{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ma,l=ma,c=Dn,f=Ls,m=Mi,g=ui,h=On.DEFAULT_ANISOTROPY,_=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=il(),this.name="",this.source=new cp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=E_;On.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,h=g[0],_=g[4],S=g[8],v=g[1],M=g[5],b=g[9],C=g[2],y=g[6],x=g[10];if(Math.abs(_-v)<.01&&Math.abs(S-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(S+C)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(h+1)/2,L=(M+1)/2,F=(x+1)/2,H=(_+v)/4,V=(S+C)/4,A=(b+y)/4;return D>L&&D>F?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=H/s,c=V/s):L>F?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=H/l,c=A/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=V/c,l=A/c),this.set(s,l,c,i),this}let N=Math.sqrt((y-b)*(y-b)+(S-C)*(S-C)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(S-C)/N,this.z=(v-_)/N,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pT extends Gr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new On(l),f=s.count;for(let m=0;m<f;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new cp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends pT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class L_ extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mT extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e,i,s,l,c,f,m,g,h,_,S,v,M,b,C,y){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,m,g,h,_,S,v,M,b,C,y)}set(e,i,s,l,c,f,m,g,h,_,S,v,M,b,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=m,x[13]=g,x[2]=h,x[6]=_,x[10]=S,x[14]=v,x[3]=M,x[7]=b,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Sr.setFromMatrixColumn(e,0).length(),c=1/Sr.setFromMatrixColumn(e,1).length(),f=1/Sr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),m=Math.sin(s),g=Math.cos(l),h=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const v=f*_,M=f*S,b=m*_,C=m*S;i[0]=g*_,i[4]=-g*S,i[8]=h,i[1]=M+b*h,i[5]=v-C*h,i[9]=-m*g,i[2]=C-v*h,i[6]=b+M*h,i[10]=f*g}else if(e.order==="YXZ"){const v=g*_,M=g*S,b=h*_,C=h*S;i[0]=v+C*m,i[4]=b*m-M,i[8]=f*h,i[1]=f*S,i[5]=f*_,i[9]=-m,i[2]=M*m-b,i[6]=C+v*m,i[10]=f*g}else if(e.order==="ZXY"){const v=g*_,M=g*S,b=h*_,C=h*S;i[0]=v-C*m,i[4]=-f*S,i[8]=b+M*m,i[1]=M+b*m,i[5]=f*_,i[9]=C-v*m,i[2]=-f*h,i[6]=m,i[10]=f*g}else if(e.order==="ZYX"){const v=f*_,M=f*S,b=m*_,C=m*S;i[0]=g*_,i[4]=b*h-M,i[8]=v*h+C,i[1]=g*S,i[5]=C*h+v,i[9]=M*h-b,i[2]=-h,i[6]=m*g,i[10]=f*g}else if(e.order==="YZX"){const v=f*g,M=f*h,b=m*g,C=m*h;i[0]=g*_,i[4]=C-v*S,i[8]=b*S+M,i[1]=S,i[5]=f*_,i[9]=-m*_,i[2]=-h*_,i[6]=M*S+b,i[10]=v-C*S}else if(e.order==="XZY"){const v=f*g,M=f*h,b=m*g,C=m*h;i[0]=g*_,i[4]=-S,i[8]=h*_,i[1]=v*S+C,i[5]=f*_,i[9]=M*S-b,i[2]=b*S-M,i[6]=m*_,i[10]=C*S+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gT,e,vT)}lookAt(e,i,s){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Qa.crossVectors(s,Qn),Qa.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Qa.crossVectors(s,Qn)),Qa.normalize(),yc.crossVectors(Qn,Qa),l[0]=Qa.x,l[4]=yc.x,l[8]=Qn.x,l[1]=Qa.y,l[5]=yc.y,l[9]=Qn.y,l[2]=Qa.z,l[6]=yc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],m=s[4],g=s[8],h=s[12],_=s[1],S=s[5],v=s[9],M=s[13],b=s[2],C=s[6],y=s[10],x=s[14],N=s[3],D=s[7],L=s[11],F=s[15],H=l[0],V=l[4],A=l[8],U=l[12],he=l[1],G=l[5],te=l[9],ae=l[13],de=l[2],J=l[6],I=l[10],z=l[14],ce=l[3],ve=l[7],O=l[11],Z=l[15];return c[0]=f*H+m*he+g*de+h*ce,c[4]=f*V+m*G+g*J+h*ve,c[8]=f*A+m*te+g*I+h*O,c[12]=f*U+m*ae+g*z+h*Z,c[1]=_*H+S*he+v*de+M*ce,c[5]=_*V+S*G+v*J+M*ve,c[9]=_*A+S*te+v*I+M*O,c[13]=_*U+S*ae+v*z+M*Z,c[2]=b*H+C*he+y*de+x*ce,c[6]=b*V+C*G+y*J+x*ve,c[10]=b*A+C*te+y*I+x*O,c[14]=b*U+C*ae+y*z+x*Z,c[3]=N*H+D*he+L*de+F*ce,c[7]=N*V+D*G+L*J+F*ve,c[11]=N*A+D*te+L*I+F*O,c[15]=N*U+D*ae+L*z+F*Z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],m=e[5],g=e[9],h=e[13],_=e[2],S=e[6],v=e[10],M=e[14],b=e[3],C=e[7],y=e[11],x=e[15],N=g*M-h*v,D=m*M-h*S,L=m*v-g*S,F=f*M-h*_,H=f*v-g*_,V=f*S-m*_;return i*(C*N-y*D+x*L)-s*(b*N-y*F+x*H)+l*(b*D-C*F+x*V)-c*(b*L-C*H+y*V)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],m=e[5],g=e[6],h=e[7],_=e[8],S=e[9],v=e[10],M=e[11],b=e[12],C=e[13],y=e[14],x=e[15],N=i*m-s*f,D=i*g-l*f,L=i*h-c*f,F=s*g-l*m,H=s*h-c*m,V=l*h-c*g,A=_*C-S*b,U=_*y-v*b,he=_*x-M*b,G=S*y-v*C,te=S*x-M*C,ae=v*x-M*y,de=N*ae-D*te+L*G+F*he-H*U+V*A;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/de;return e[0]=(m*ae-g*te+h*G)*J,e[1]=(l*te-s*ae-c*G)*J,e[2]=(C*V-y*H+x*F)*J,e[3]=(v*H-S*V-M*F)*J,e[4]=(g*he-f*ae-h*U)*J,e[5]=(i*ae-l*he+c*U)*J,e[6]=(y*L-b*V-x*D)*J,e[7]=(_*V-v*L+M*D)*J,e[8]=(f*te-m*he+h*A)*J,e[9]=(s*he-i*te-c*A)*J,e[10]=(b*H-C*L+x*N)*J,e[11]=(S*L-_*H-M*N)*J,e[12]=(m*U-f*G-g*A)*J,e[13]=(i*G-s*U+l*A)*J,e[14]=(C*D-b*F-y*N)*J,e[15]=(_*F-S*D+v*N)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,m=e.y,g=e.z,h=c*f,_=c*m;return this.set(h*f+s,h*m-l*g,h*g+l*m,0,h*m+l*g,_*m+s,_*g-l*f,0,h*g-l*m,_*g+l*f,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,m=i._z,g=i._w,h=c+c,_=f+f,S=m+m,v=c*h,M=c*_,b=c*S,C=f*_,y=f*S,x=m*S,N=g*h,D=g*_,L=g*S,F=s.x,H=s.y,V=s.z;return l[0]=(1-(C+x))*F,l[1]=(M+L)*F,l[2]=(b-D)*F,l[3]=0,l[4]=(M-L)*H,l[5]=(1-(v+x))*H,l[6]=(y+N)*H,l[7]=0,l[8]=(b+D)*V,l[9]=(y-N)*V,l[10]=(1-(v+C))*V,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Sr.set(l[0],l[1],l[2]).length();const m=Sr.set(l[4],l[5],l[6]).length(),g=Sr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),vi.copy(this);const h=1/f,_=1/m,S=1/g;return vi.elements[0]*=h,vi.elements[1]*=h,vi.elements[2]*=h,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=S,vi.elements[9]*=S,vi.elements[10]*=S,i.setFromRotationMatrix(vi),s.x=f,s.y=m,s.z=g,this}makePerspective(e,i,s,l,c,f,m=Ii,g=!1){const h=this.elements,_=2*c/(i-e),S=2*c/(s-l),v=(i+e)/(i-e),M=(s+l)/(s-l);let b,C;if(g)b=c/(f-c),C=f*c/(f-c);else if(m===Ii)b=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(m===eu)b=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=_,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,m=Ii,g=!1){const h=this.elements,_=2/(i-e),S=2/(s-l),v=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,C;if(g)b=1/(f-c),C=f/(f-c);else if(m===Ii)b=-2/(f-c),C=-(f+c)/(f-c);else if(m===eu)b=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=_,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Sr=new le,vi=new fn,gT=new le(0,0,0),vT=new le(1,1,1),Qa=new le,yc=new le,Qn=new le,mv=new fn,gv=new Vr;class ba{constructor(e=0,i=0,s=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],m=l[8],g=l[1],h=l[5],_=l[9],S=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(m,M),this._z=Math.atan2(g,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-_t(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(m,M));break;case"XZY":this._z=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return gv.setFromEuler(this),this.setFromQuaternion(gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class O_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _T=0;const vv=new le,yr=new Vr,ca=new fn,Mc=new le,Vo=new le,xT=new le,ST=new Vr,_v=new le(1,0,0),xv=new le(0,1,0),Sv=new le(0,0,1),yv={type:"added"},yT={type:"removed"},Mr={type:"childadded",child:null},Nd={type:"childremoved",child:null};class ei extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new le,i=new ba,s=new Vr,l=new le(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ut}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(xv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,i){return vv.copy(e).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(xv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Mc.copy(e):Mc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Vo,Mc,this.up):ca.lookAt(Mc,Vo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(ca),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(yT),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,xT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,ST,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let h=0,_=g.length;h<_;h++){const S=g[h];c(e.shapes,S)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,h=this.material.length;g<h;g++)m.push(c(e.materials,this.material[g]));l.material=m}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(e.animations,g))}}if(i){const m=f(e.geometries),g=f(e.materials),h=f(e.textures),_=f(e.images),S=f(e.shapes),v=f(e.skeletons),M=f(e.animations),b=f(e.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),S.length>0&&(s.shapes=S),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(m){const g=[];for(const h in m){const _=m[h];delete _.metadata,g.push(_)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ei.DEFAULT_UP=new le(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MT={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const m=this._targetRay,g=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(h,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],v=_.position.distanceTo(S.position),M=.02,b=.005;h.inputState.pinching&&v>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));m!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(MT)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new bc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Ud(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Gt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Mt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Mt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Mt.workingColorSpace){if(e=cT(e,1),i=_t(i,0,1),s=_t(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Ud(f,c,e+1/3),this.g=Ud(f,c,e),this.b=Ud(f,c,e-1/3)}return Mt.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],m=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=P_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Mt.workingToColorSpace(Nn.copy(this),e),Math.round(_t(Nn.r*255,0,255))*65536+Math.round(_t(Nn.g*255,0,255))*256+Math.round(_t(Nn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Mt.workingColorSpace){Mt.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(s,l,c),m=Math.min(s,l,c);let g,h;const _=(m+f)/2;if(m===f)g=0,h=0;else{const S=f-m;switch(h=_<=.5?S/(f+m):S/(2-f-m),f){case s:g=(l-c)/S+(l<c?6:0);break;case l:g=(c-s)/S+2;break;case c:g=(s-l)/S+4;break}g/=6}return e.h=g,e.s=h,e.l=_,e}getRGB(e,i=Mt.workingColorSpace){return Mt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ci){Mt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,s=Nn.g,l=Nn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Ec);const s=Td(Ja.h,Ec.h,i),l=Td(Ja.s,Ec.s,i),c=Td(Ja.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Gt;Gt.NAMES=P_;class bT extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const _i=new le,ua=new le,Ld=new le,fa=new le,br=new le,Er=new le,Mv=new le,Od=new le,Pd=new le,Id=new le,Fd=new on,Bd=new on,zd=new on;class yi{constructor(e=new le,i=new le,s=new le){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),_i.subVectors(e,i),l.cross(_i);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){_i.subVectors(l,i),ua.subVectors(s,i),Ld.subVectors(e,i);const f=_i.dot(_i),m=_i.dot(ua),g=_i.dot(Ld),h=ua.dot(ua),_=ua.dot(Ld),S=f*h-m*m;if(S===0)return c.set(0,0,0),null;const v=1/S,M=(h*g-m*_)*v,b=(f*_-m*g)*v;return c.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,i,s,l,c,f,m,g){return this.getBarycoord(e,i,s,l,fa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,fa.x),g.addScaledVector(f,fa.y),g.addScaledVector(m,fa.z),g)}static getInterpolatedAttribute(e,i,s,l,c,f){return Fd.setScalar(0),Bd.setScalar(0),zd.setScalar(0),Fd.fromBufferAttribute(e,i),Bd.fromBufferAttribute(e,s),zd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Fd,c.x),f.addScaledVector(Bd,c.y),f.addScaledVector(zd,c.z),f}static isFrontFacing(e,i,s,l){return _i.subVectors(s,i),ua.subVectors(e,i),_i.cross(ua).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),_i.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,m;br.subVectors(l,s),Er.subVectors(c,s),Od.subVectors(e,s);const g=br.dot(Od),h=Er.dot(Od);if(g<=0&&h<=0)return i.copy(s);Pd.subVectors(e,l);const _=br.dot(Pd),S=Er.dot(Pd);if(_>=0&&S<=_)return i.copy(l);const v=g*S-_*h;if(v<=0&&g>=0&&_<=0)return f=g/(g-_),i.copy(s).addScaledVector(br,f);Id.subVectors(e,c);const M=br.dot(Id),b=Er.dot(Id);if(b>=0&&M<=b)return i.copy(c);const C=M*h-g*b;if(C<=0&&h>=0&&b<=0)return m=h/(h-b),i.copy(s).addScaledVector(Er,m);const y=_*b-M*S;if(y<=0&&S-_>=0&&M-b>=0)return Mv.subVectors(c,l),m=(S-_)/(S-_+(M-b)),i.copy(l).addScaledVector(Mv,m);const x=1/(y+C+v);return f=C*x,m=v*x,i.copy(s).addScaledVector(br,f).addScaledVector(Er,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class al{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,m=c.count;f<m;f++)e.isMesh===!0?e.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Ac.subVectors(this.max,ko),Tr.subVectors(e.a,ko),Ar.subVectors(e.b,ko),wr.subVectors(e.c,ko),$a.subVectors(Ar,Tr),es.subVectors(wr,Ar),Es.subVectors(Tr,wr);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-Es.z,Es.y,$a.z,0,-$a.x,es.z,0,-es.x,Es.z,0,-Es.x,-$a.y,$a.x,0,-es.y,es.x,0,-Es.y,Es.x,0];return!Hd(i,Tr,Ar,wr,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Hd(i,Tr,Ar,wr,Ac))?!1:(wc.crossVectors($a,es),i=[wc.x,wc.y,wc.z],Hd(i,Tr,Ar,wr,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new le,new le,new le,new le,new le,new le,new le,new le],xi=new le,Tc=new al,Tr=new le,Ar=new le,wr=new le,$a=new le,es=new le,Es=new le,ko=new le,Ac=new le,wc=new le,Ts=new le;function Hd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ts.fromArray(r,c);const m=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),g=e.dot(Ts),h=i.dot(Ts),_=s.dot(Ts);if(Math.max(-Math.max(g,h,_),Math.min(g,h,_))>m)return!1}return!0}const un=new le,Rc=new Lt;let ET=0;class zi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ET++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=lv,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(e),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Go(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lv&&(e.usage=this.usage),e}}class I_ extends zi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class F_ extends zi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class xa extends zi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const TT=new al,jo=new le,Gd=new le;class up{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):TT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Gd)),this.expandByPoint(jo.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let AT=0;const li=new fn,Vd=new ei,Rr=new le,Jn=new al,Xo=new al,Mn=new le;class Ta extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sT(e)?F_:I_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,s){return li.makeTranslation(e,i,s),this.applyMatrix4(li),this}scale(e,i,s){return li.makeScale(e,i,s),this.applyMatrix4(li),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xa(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new up);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const m=i[c];Xo.setFromBufferAttribute(m),this.morphTargetsRelative?(Mn.addVectors(Jn.min,Xo.min),Jn.expandByPoint(Mn),Mn.addVectors(Jn.max,Xo.max),Jn.expandByPoint(Mn)):(Jn.expandByPoint(Xo.min),Jn.expandByPoint(Xo.max))}Jn.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const m=i[c],g=this.morphTargetsRelative;for(let h=0,_=m.count;h<_;h++)Mn.fromBufferAttribute(m,h),g&&(Rr.fromBufferAttribute(e,h),Mn.add(Rr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),m=[],g=[];for(let A=0;A<s.count;A++)m[A]=new le,g[A]=new le;const h=new le,_=new le,S=new le,v=new Lt,M=new Lt,b=new Lt,C=new le,y=new le;function x(A,U,he){h.fromBufferAttribute(s,A),_.fromBufferAttribute(s,U),S.fromBufferAttribute(s,he),v.fromBufferAttribute(c,A),M.fromBufferAttribute(c,U),b.fromBufferAttribute(c,he),_.sub(h),S.sub(h),M.sub(v),b.sub(v);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(S,-M.y).multiplyScalar(G),y.copy(S).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(G),m[A].add(C),m[U].add(C),m[he].add(C),g[A].add(y),g[U].add(y),g[he].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let A=0,U=N.length;A<U;++A){const he=N[A],G=he.start,te=he.count;for(let ae=G,de=G+te;ae<de;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const D=new le,L=new le,F=new le,H=new le;function V(A){F.fromBufferAttribute(l,A),H.copy(F);const U=m[A];D.copy(U),D.sub(F.multiplyScalar(F.dot(U))).normalize(),L.crossVectors(H,U);const G=L.dot(g[A])<0?-1:1;f.setXYZW(A,D.x,D.y,D.z,G)}for(let A=0,U=N.length;A<U;++A){const he=N[A],G=he.start,te=he.count;for(let ae=G,de=G+te;ae<de;ae+=3)V(e.getX(ae+0)),V(e.getX(ae+1)),V(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new le,c=new le,f=new le,m=new le,g=new le,h=new le,_=new le,S=new le;if(e)for(let v=0,M=e.count;v<M;v+=3){const b=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),_.subVectors(f,c),S.subVectors(l,c),_.cross(S),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,C),h.fromBufferAttribute(s,y),m.add(_),g.add(_),h.add(_),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(C,g.x,g.y,g.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,c),S.subVectors(l,c),_.cross(S),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(m,g){const h=m.array,_=m.itemSize,S=m.normalized,v=new h.constructor(g.length*_);let M=0,b=0;for(let C=0,y=g.length;C<y;C++){m.isInterleavedBufferAttribute?M=g[C]*m.data.stride+m.offset:M=g[C]*_;for(let x=0;x<_;x++)v[b++]=h[M++]}return new zi(v,_,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ta,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],h=e(g,s);i.setAttribute(m,h)}const c=this.morphAttributes;for(const m in c){const g=[],h=c[m];for(let _=0,S=h.length;_<S;_++){const v=h[_],M=e(v,s);g.push(M)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let m=0,g=f.length;m<g;m++){const h=f[m];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const h in g)g[h]!==void 0&&(e[h]=g[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const h=s[g];e.data.attributes[g]=h.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const h=this.morphAttributes[g],_=[];for(let S=0,v=h.length;S<v;S++){const M=h[S];_.push(M.toJSON(e.data))}_.length>0&&(l[g]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],S=c[h];for(let v=0,M=S.length;v<M;v++)_.push(S[v].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,_=f.length;h<_;h++){const S=f[h];this.addGroup(S.start,S.count,S.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wT=0;class ru extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Ur,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==nh&&(s.blendSrc=this.blendSrc),this.blendDst!==ih&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ov&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const m in c){const g=c[m];delete g.metadata,f.push(g)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ha=new le,kd=new le,Cc=new le,ts=new le,jd=new le,Nc=new le,Xd=new le;class RT{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){kd.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),ts.copy(this.origin).sub(kd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Cc),m=ts.dot(this.direction),g=-ts.dot(Cc),h=ts.lengthSq(),_=Math.abs(1-f*f);let S,v,M,b;if(_>0)if(S=f*g-m,v=f*m-g,b=c*_,S>=0)if(v>=-b)if(v<=b){const C=1/_;S*=C,v*=C,M=S*(S+f*v+2*m)+v*(f*S+v+2*g)+h}else v=c,S=Math.max(0,-(f*v+m)),M=-S*S+v*(v+2*g)+h;else v=-c,S=Math.max(0,-(f*v+m)),M=-S*S+v*(v+2*g)+h;else v<=-b?(S=Math.max(0,-(-f*c+m)),v=S>0?-c:Math.min(Math.max(-c,-g),c),M=-S*S+v*(v+2*g)+h):v<=b?(S=0,v=Math.min(Math.max(-c,-g),c),M=v*(v+2*g)+h):(S=Math.max(0,-(f*c+m)),v=S>0?c:Math.min(Math.max(-c,-g),c),M=-S*S+v*(v+2*g)+h);else v=f>0?-c:c,S=Math.max(0,-(f*v+m)),M=-S*S+v*(v+2*g)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(kd).addScaledVector(Cc,v),M}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),m=s-f,g=s+f;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,m,g;const h=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,l=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,l=(e.min.x-v.x)*h),_>=0?(c=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),S>=0?(m=(e.min.z-v.z)*S,g=(e.max.z-v.z)*S):(m=(e.max.z-v.z)*S,g=(e.min.z-v.z)*S),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,s,l,c){jd.subVectors(i,e),Nc.subVectors(s,e),Xd.crossVectors(jd,Nc);let f=this.direction.dot(Xd),m;if(f>0){if(l)return null;m=1}else if(f<0)m=-1,f=-f;else return null;ts.subVectors(this.origin,e);const g=m*this.direction.dot(Nc.crossVectors(ts,Nc));if(g<0)return null;const h=m*this.direction.dot(jd.cross(ts));if(h<0||g+h>f)return null;const _=-m*ts.dot(Xd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class B_ extends ru{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bv=new fn,As=new RT,Dc=new up,Ev=new le,Uc=new le,Lc=new le,Oc=new le,Wd=new le,Pc=new le,Tv=new le,Ic=new le;class Vi extends ei{constructor(e=new Ta,i=new B_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(c&&m){Pc.set(0,0,0);for(let g=0,h=c.length;g<h;g++){const _=m[g],S=c[g];_!==0&&(Wd.fromBufferAttribute(S,e),f?Pc.addScaledVector(Wd,_):Pc.addScaledVector(Wd.sub(i),_))}i.add(Pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),As.copy(e.ray).recast(e.near),!(Dc.containsPoint(As.origin)===!1&&(As.intersectSphere(Dc,Ev)===null||As.origin.distanceToSquared(Ev)>(e.far-e.near)**2))&&(bv.copy(c).invert(),As.copy(e.ray).applyMatrix4(bv),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,As)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,m=c.index,g=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,v=c.groups,M=c.drawRange;if(m!==null)if(Array.isArray(f))for(let b=0,C=v.length;b<C;b++){const y=v[b],x=f[y.materialIndex],N=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let L=N,F=D;L<F;L+=3){const H=m.getX(L),V=m.getX(L+1),A=m.getX(L+2);l=Fc(this,x,e,s,h,_,S,H,V,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,x=C;y<x;y+=3){const N=m.getX(y),D=m.getX(y+1),L=m.getX(y+2);l=Fc(this,f,e,s,h,_,S,N,D,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(f))for(let b=0,C=v.length;b<C;b++){const y=v[b],x=f[y.materialIndex],N=Math.max(y.start,M.start),D=Math.min(g.count,Math.min(y.start+y.count,M.start+M.count));for(let L=N,F=D;L<F;L+=3){const H=L,V=L+1,A=L+2;l=Fc(this,x,e,s,h,_,S,H,V,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(g.count,M.start+M.count);for(let y=b,x=C;y<x;y+=3){const N=y,D=y+1,L=y+2;l=Fc(this,f,e,s,h,_,S,N,D,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function CT(r,e,i,s,l,c,f,m){let g;if(e.side===kn?g=s.intersectTriangle(f,c,l,!0,m):g=s.intersectTriangle(l,c,f,e.side===ss,m),g===null)return null;Ic.copy(m),Ic.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Ic);return h<i.near||h>i.far?null:{distance:h,point:Ic.clone(),object:r}}function Fc(r,e,i,s,l,c,f,m,g,h){r.getVertexPosition(m,Uc),r.getVertexPosition(g,Lc),r.getVertexPosition(h,Oc);const _=CT(r,e,i,s,Uc,Lc,Oc,Tv);if(_){const S=new le;yi.getBarycoord(Tv,Uc,Lc,Oc,S),l&&(_.uv=yi.getInterpolatedAttribute(l,m,g,h,S,new Lt)),c&&(_.uv1=yi.getInterpolatedAttribute(c,m,g,h,S,new Lt)),f&&(_.normal=yi.getInterpolatedAttribute(f,m,g,h,S,new le),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:m,b:g,c:h,normal:new le,materialIndex:0};yi.getNormal(Uc,Lc,Oc,v.normal),_.face=v,_.barycoord=S}return _}class NT extends On{constructor(e=null,i=1,s=1,l,c,f,m,g,h=An,_=An,S,v){super(null,f,m,g,h,_,l,c,S,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qd=new le,DT=new le,UT=new ut;class Ns{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=qd.subVectors(s,i).cross(DT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(qd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||UT.getNormalMatrix(e),l=this.coplanarPoint(qd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new up,LT=new Lt(.5,.5),Bc=new le;class z_{constructor(e=new Ns,i=new Ns,s=new Ns,l=new Ns,c=new Ns,f=new Ns){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ii,s=!1){const l=this.planes,c=e.elements,f=c[0],m=c[1],g=c[2],h=c[3],_=c[4],S=c[5],v=c[6],M=c[7],b=c[8],C=c[9],y=c[10],x=c[11],N=c[12],D=c[13],L=c[14],F=c[15];if(l[0].setComponents(h-f,M-_,x-b,F-N).normalize(),l[1].setComponents(h+f,M+_,x+b,F+N).normalize(),l[2].setComponents(h+m,M+S,x+C,F+D).normalize(),l[3].setComponents(h-m,M-S,x-C,F-D).normalize(),s)l[4].setComponents(g,v,y,L).normalize(),l[5].setComponents(h-g,M-v,x-y,F-L).normalize();else if(l[4].setComponents(h-g,M-v,x-y,F-L).normalize(),i===Ii)l[5].setComponents(h+g,M+v,x+y,F+L).normalize();else if(i===eu)l[5].setComponents(g,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=LT.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?e.max.x:e.min.x,Bc.y=l.normal.y>0?e.max.y:e.min.y,Bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H_ extends On{constructor(e=[],i=Ps,s,l,c,f,m,g,h,_){super(e,i,s,l,c,f,m,g,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $o extends On{constructor(e,i,s=Gi,l,c,f,m=An,g=An,h,_=Ma,S=1){if(_!==Ma&&_!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:S};super(v,l,c,f,m,g,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class OT extends $o{constructor(e,i=Gi,s=Ps,l,c,f=An,m=An,g,h=Ma){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,i,s,l,c,f,m,g,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class G_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sl extends Ta{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const m=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const g=[],h=[],_=[],S=[];let v=0,M=0;b("z","y","x",-1,-1,s,i,e,f,c,0),b("z","y","x",1,-1,s,i,-e,f,c,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new xa(h,3)),this.setAttribute("normal",new xa(_,3)),this.setAttribute("uv",new xa(S,2));function b(C,y,x,N,D,L,F,H,V,A,U){const he=L/V,G=F/A,te=L/2,ae=F/2,de=H/2,J=V+1,I=A+1;let z=0,ce=0;const ve=new le;for(let O=0;O<I;O++){const Z=O*G-ae;for(let ue=0;ue<J;ue++){const Se=ue*he-te;ve[C]=Se*N,ve[y]=Z*D,ve[x]=de,h.push(ve.x,ve.y,ve.z),ve[C]=0,ve[y]=0,ve[x]=H>0?1:-1,_.push(ve.x,ve.y,ve.z),S.push(ue/V),S.push(1-O/A),z+=1}}for(let O=0;O<A;O++)for(let Z=0;Z<V;Z++){const ue=v+Z+J*O,Se=v+Z+J*(O+1),Ue=v+(Z+1)+J*(O+1),qe=v+(Z+1)+J*O;g.push(ue,Se,qe),g.push(Se,Ue,qe),ce+=6}m.addGroup(M,ce,U),M+=ce,v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rl extends Ta{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,m=Math.floor(s),g=Math.floor(l),h=m+1,_=g+1,S=e/m,v=i/g,M=[],b=[],C=[],y=[];for(let x=0;x<_;x++){const N=x*v-f;for(let D=0;D<h;D++){const L=D*S-c;b.push(L,-N,0),C.push(0,0,1),y.push(D/m),y.push(1-x/g)}}for(let x=0;x<g;x++)for(let N=0;N<m;N++){const D=N+h*x,L=N+h*(x+1),F=N+1+h*(x+1),H=N+1+h*x;M.push(D,L,H),M.push(L,F,H)}this.setIndex(M),this.setAttribute("position",new xa(b,3)),this.setAttribute("normal",new xa(C,3)),this.setAttribute("uv",new xa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Br(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Br(r[i]);for(const l in s)e[l]=s[l]}return e}function PT(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function V_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const IT={clone:Br,merge:Ln};var FT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends ru{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FT,this.fragmentShader=BT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=PT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class zT extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HT extends ru{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GT extends ru{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zc=new le,Hc=new Vr,Ui=new le;class k_ extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Hc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(zc,Hc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new le,Av=new Lt,wv=new Lt;class Si extends k_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,Av,wv),i.subVectors(wv,Av)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ed*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const g=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/g,i-=f.offsetY*s/h,l*=f.width/g,s*=f.height/h}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class fp extends k_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,m-=_*this.view.offsetY,g=m-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cr=-90,Nr=1;class VT extends ei{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Cr,Nr,e,i);l.layers=this.layers,this.add(l);const c=new Si(Cr,Nr,e,i);c.layers=this.layers,this.add(c);const f=new Si(Cr,Nr,e,i);f.layers=this.layers,this.add(f);const m=new Si(Cr,Nr,e,i);m.layers=this.layers,this.add(m);const g=new Si(Cr,Nr,e,i);g.layers=this.layers,this.add(g);const h=new Si(Cr,Nr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,m,g]=i;for(const h of i)this.remove(h);if(e===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,m,g,h,_]=this.children,S=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(S,v,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class kT extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Rv(r,e,i,s){const l=XT(s);switch(i){case C_:return r*e;case D_:return r*e/l.components*l.byteLength;case ap:return r*e/l.components*l.byteLength;case Ir:return r*e*2/l.components*l.byteLength;case sp:return r*e*2/l.components*l.byteLength;case N_:return r*e*3/l.components*l.byteLength;case Mi:return r*e*4/l.components*l.byteLength;case rp:return r*e*4/l.components*l.byteLength;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(r,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(r,8)*Math.max(e,8)/2;case vh:case _h:case Sh:case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xh:case Mh:case bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Bh:case zh:case Hh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gh:case Vh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case kh:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function XT(r){switch(r){case ui:case T_:return{byteLength:1,components:1};case Qo:case A_:case ya:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case Gi:case tp:case Pi:return{byteLength:4,components:1};case w_:case R_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function WT(r){const e=new WeakMap;function i(m,g){const h=m.array,_=m.usage,S=h.byteLength,v=r.createBuffer();r.bindBuffer(g,v),r.bufferData(g,h,_),m.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:S}}function s(m,g,h){const _=g.array,S=g.updateRanges;if(r.bindBuffer(h,m),S.length===0)r.bufferSubData(h,0,_);else{S.sort((M,b)=>M.start-b.start);let v=0;for(let M=1;M<S.length;M++){const b=S[v],C=S[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++v,S[v]=C)}S.length=v+1;for(let M=0,b=S.length;M<b;M++){const C=S[M];r.bufferSubData(h,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=e.get(m);g&&(r.deleteBuffer(g.buffer),e.delete(m))}function f(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const _=e.get(m);(!_||_.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,i(m,g));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,m,g),h.version=m.version}}return{get:l,remove:c,update:f}}var qT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YT=`#ifdef USE_ALPHAHASH
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
#endif`,ZT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$T=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
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
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r1=`#ifdef USE_IRIDESCENCE
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
#endif`,o1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g1=`#define PI 3.141592653589793
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
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_1=`vec3 transformedNormal = objectNormal;
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
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O1=`#ifdef USE_GRADIENTMAP
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
}`,P1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
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
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,X1=`uniform sampler2D dfgLUT;
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
}`,W1=`
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
#endif`,q1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nA=`#if defined( USE_POINTS_UV )
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
#endif`,iA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
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
#endif`,cA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mA=`#ifdef USE_NORMALMAP
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
#endif`,gA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DA=`float getShadowMask() {
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
}`,UA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
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
#endif`,OA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
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
#endif`,IA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HA=`#ifdef USE_TRANSMISSION
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
#endif`,GA=`#ifdef USE_TRANSMISSION
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
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qA=`uniform sampler2D t2D;
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
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`#include <common>
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
}`,$A=`#if DEPTH_PACKING == 3200
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
}`,ew=`#define DISTANCE
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
}`,tw=`#define DISTANCE
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
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`uniform float scale;
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
}`,sw=`uniform vec3 diffuse;
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
}`,rw=`#include <common>
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
}`,ow=`uniform vec3 diffuse;
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
}`,lw=`#define LAMBERT
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
}`,cw=`#define LAMBERT
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
}`,uw=`#define MATCAP
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
}`,fw=`#define MATCAP
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
}`,dw=`#define NORMAL
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
}`,hw=`#define NORMAL
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
}`,pw=`#define PHONG
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
}`,mw=`#define PHONG
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
}`,gw=`#define STANDARD
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
}`,vw=`#define STANDARD
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
}`,_w=`#define TOON
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
}`,xw=`#define TOON
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
}`,Sw=`uniform float size;
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
}`,yw=`uniform vec3 diffuse;
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
}`,Mw=`#include <common>
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
}`,bw=`uniform vec3 color;
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
}`,Ew=`uniform float rotation;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:qT,alphahash_pars_fragment:YT,alphamap_fragment:ZT,alphamap_pars_fragment:KT,alphatest_fragment:QT,alphatest_pars_fragment:JT,aomap_fragment:$T,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:a1,bsdfs:s1,iridescence_fragment:r1,bumpmap_pars_fragment:o1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:f1,color_fragment:d1,color_pars_fragment:h1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:_1,displacementmap_pars_vertex:x1,displacementmap_vertex:S1,emissivemap_fragment:y1,emissivemap_pars_fragment:M1,colorspace_fragment:b1,colorspace_pars_fragment:E1,envmap_fragment:T1,envmap_common_pars_fragment:A1,envmap_pars_fragment:w1,envmap_pars_vertex:R1,envmap_physical_pars_fragment:z1,envmap_vertex:C1,fog_vertex:N1,fog_pars_vertex:D1,fog_fragment:U1,fog_pars_fragment:L1,gradientmap_pars_fragment:O1,lightmap_pars_fragment:P1,lights_lambert_fragment:I1,lights_lambert_pars_fragment:F1,lights_pars_begin:B1,lights_toon_fragment:H1,lights_toon_pars_fragment:G1,lights_phong_fragment:V1,lights_phong_pars_fragment:k1,lights_physical_fragment:j1,lights_physical_pars_fragment:X1,lights_fragment_begin:W1,lights_fragment_maps:q1,lights_fragment_end:Y1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:J1,map_fragment:$1,map_pars_fragment:eA,map_particle_fragment:tA,map_particle_pars_fragment:nA,metalnessmap_fragment:iA,metalnessmap_pars_fragment:aA,morphinstance_vertex:sA,morphcolor_vertex:rA,morphnormal_vertex:oA,morphtarget_pars_vertex:lA,morphtarget_vertex:cA,normal_fragment_begin:uA,normal_fragment_maps:fA,normal_pars_fragment:dA,normal_pars_vertex:hA,normal_vertex:pA,normalmap_pars_fragment:mA,clearcoat_normal_fragment_begin:gA,clearcoat_normal_fragment_maps:vA,clearcoat_pars_fragment:_A,iridescence_pars_fragment:xA,opaque_fragment:SA,packing:yA,premultiplied_alpha_fragment:MA,project_vertex:bA,dithering_fragment:EA,dithering_pars_fragment:TA,roughnessmap_fragment:AA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:RA,shadowmap_pars_vertex:CA,shadowmap_vertex:NA,shadowmask_pars_fragment:DA,skinbase_vertex:UA,skinning_pars_vertex:LA,skinning_vertex:OA,skinnormal_vertex:PA,specularmap_fragment:IA,specularmap_pars_fragment:FA,tonemapping_fragment:BA,tonemapping_pars_fragment:zA,transmission_fragment:HA,transmission_pars_fragment:GA,uv_pars_fragment:VA,uv_pars_vertex:kA,uv_vertex:jA,worldpos_vertex:XA,background_vert:WA,background_frag:qA,backgroundCube_vert:YA,backgroundCube_frag:ZA,cube_vert:KA,cube_frag:QA,depth_vert:JA,depth_frag:$A,distance_vert:ew,distance_frag:tw,equirect_vert:nw,equirect_frag:iw,linedashed_vert:aw,linedashed_frag:sw,meshbasic_vert:rw,meshbasic_frag:ow,meshlambert_vert:lw,meshlambert_frag:cw,meshmatcap_vert:uw,meshmatcap_frag:fw,meshnormal_vert:dw,meshnormal_frag:hw,meshphong_vert:pw,meshphong_frag:mw,meshphysical_vert:gw,meshphysical_frag:vw,meshtoon_vert:_w,meshtoon_frag:xw,points_vert:Sw,points_frag:yw,shadow_vert:Mw,shadow_frag:bw,sprite_vert:Ew,sprite_frag:Tw},Oe={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Oi={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Oi.physical={uniforms:Ln([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Gc={r:0,b:0,g:0},Rs=new ba,Aw=new fn;function ww(r,e,i,s,l,c){const f=new Gt(0);let m=l===!0?0:1,g,h,_=null,S=0,v=null;function M(N){let D=N.isScene===!0?N.background:null;if(D&&D.isTexture){const L=N.backgroundBlurriness>0;D=e.get(D,L)}return D}function b(N){let D=!1;const L=M(N);L===null?y(f,m):L&&L.isColor&&(y(L,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(N,D){const L=M(D);L&&(L.isCubeTexture||L.mapping===su)?(h===void 0&&(h=new Vi(new sl(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Br(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,H,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Rs.copy(D.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(Rs)),h.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ft,(_!==L||S!==L.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,_=L,S=L.version,v=r.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(g===void 0&&(g=new Vi(new rl(2,2),new bi({name:"BackgroundMaterial",uniforms:Br(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=L,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ft,L.matrixAutoUpdate===!0&&L.updateMatrix(),g.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||S!==L.version||v!==r.toneMapping)&&(g.material.needsUpdate=!0,_=L,S=L.version,v=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function y(N,D){N.getRGB(Gc,V_(r)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,D,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,D=1){f.set(N),m=D,y(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,y(f,m)},render:b,addToRenderList:C,dispose:x}}function Rw(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function m(G,te,ae,de,J){let I=!1;const z=S(G,de,ae,te);c!==z&&(c=z,h(c.object)),I=M(G,de,ae,J),I&&b(G,de,ae,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,L(G,te,ae,de),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function g(){return r.createVertexArray()}function h(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function S(G,te,ae,de){const J=de.wireframe===!0;let I=s[te.id];I===void 0&&(I={},s[te.id]=I);const z=G.isInstancedMesh===!0?G.id:0;let ce=I[z];ce===void 0&&(ce={},I[z]=ce);let ve=ce[ae.id];ve===void 0&&(ve={},ce[ae.id]=ve);let O=ve[J];return O===void 0&&(O=v(g()),ve[J]=O),O}function v(G){const te=[],ae=[],de=[];for(let J=0;J<i;J++)te[J]=0,ae[J]=0,de[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:ae,attributeDivisors:de,object:G,attributes:{},index:null}}function M(G,te,ae,de){const J=c.attributes,I=te.attributes;let z=0;const ce=ae.getAttributes();for(const ve in ce)if(ce[ve].location>=0){const Z=J[ve];let ue=I[ve];if(ue===void 0&&(ve==="instanceMatrix"&&G.instanceMatrix&&(ue=G.instanceMatrix),ve==="instanceColor"&&G.instanceColor&&(ue=G.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;z++}return c.attributesNum!==z||c.index!==de}function b(G,te,ae,de){const J={},I=te.attributes;let z=0;const ce=ae.getAttributes();for(const ve in ce)if(ce[ve].location>=0){let Z=I[ve];Z===void 0&&(ve==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),ve==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor));const ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),J[ve]=ue,z++}c.attributes=J,c.attributesNum=z,c.index=de}function C(){const G=c.newAttributes;for(let te=0,ae=G.length;te<ae;te++)G[te]=0}function y(G){x(G,0)}function x(G,te){const ae=c.newAttributes,de=c.enabledAttributes,J=c.attributeDivisors;ae[G]=1,de[G]===0&&(r.enableVertexAttribArray(G),de[G]=1),J[G]!==te&&(r.vertexAttribDivisor(G,te),J[G]=te)}function N(){const G=c.newAttributes,te=c.enabledAttributes;for(let ae=0,de=te.length;ae<de;ae++)te[ae]!==G[ae]&&(r.disableVertexAttribArray(ae),te[ae]=0)}function D(G,te,ae,de,J,I,z){z===!0?r.vertexAttribIPointer(G,te,ae,J,I):r.vertexAttribPointer(G,te,ae,de,J,I)}function L(G,te,ae,de){C();const J=de.attributes,I=ae.getAttributes(),z=te.defaultAttributeValues;for(const ce in I){const ve=I[ce];if(ve.location>=0){let O=J[ce];if(O===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(O=G.instanceColor)),O!==void 0){const Z=O.normalized,ue=O.itemSize,Se=e.get(O);if(Se===void 0)continue;const Ue=Se.buffer,qe=Se.type,$=Se.bytesPerElement,Ee=qe===r.INT||qe===r.UNSIGNED_INT||O.gpuType===tp;if(O.isInterleavedBufferAttribute){const Me=O.data,Je=Me.stride,Ke=O.offset;if(Me.isInstancedInterleavedBuffer){for(let $e=0;$e<ve.locationSize;$e++)x(ve.location+$e,Me.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let $e=0;$e<ve.locationSize;$e++)y(ve.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let $e=0;$e<ve.locationSize;$e++)D(ve.location+$e,ue/ve.locationSize,qe,Z,Je*$,(Ke+ue/ve.locationSize*$e)*$,Ee)}else{if(O.isInstancedBufferAttribute){for(let Me=0;Me<ve.locationSize;Me++)x(ve.location+Me,O.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Me=0;Me<ve.locationSize;Me++)y(ve.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Me=0;Me<ve.locationSize;Me++)D(ve.location+Me,ue/ve.locationSize,qe,Z,ue*$,ue/ve.locationSize*Me*$,Ee)}}else if(z!==void 0){const Z=z[ce];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(ve.location,Z);break;case 3:r.vertexAttrib3fv(ve.location,Z);break;case 4:r.vertexAttrib4fv(ve.location,Z);break;default:r.vertexAttrib1fv(ve.location,Z)}}}}N()}function F(){U();for(const G in s){const te=s[G];for(const ae in te){const de=te[ae];for(const J in de){const I=de[J];for(const z in I)_(I[z].object),delete I[z];delete de[J]}}delete s[G]}}function H(G){if(s[G.id]===void 0)return;const te=s[G.id];for(const ae in te){const de=te[ae];for(const J in de){const I=de[J];for(const z in I)_(I[z].object),delete I[z];delete de[J]}}delete s[G.id]}function V(G){for(const te in s){const ae=s[te];for(const de in ae){const J=ae[de];if(J[G.id]===void 0)continue;const I=J[G.id];for(const z in I)_(I[z].object),delete I[z];delete J[G.id]}}}function A(G){for(const te in s){const ae=s[te],de=G.isInstancedMesh===!0?G.id:0,J=ae[de];if(J!==void 0){for(const I in J){const z=J[I];for(const ce in z)_(z[ce].object),delete z[ce];delete J[I]}delete ae[de],Object.keys(ae).length===0&&delete s[te]}}}function U(){he(),f=!0,c!==l&&(c=l,h(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:U,resetDefaultState:he,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfObject:A,releaseStatesOfProgram:V,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function Cw(r,e,i){let s;function l(h){s=h}function c(h,_){r.drawArrays(s,h,_),i.update(_,s,1)}function f(h,_,S){S!==0&&(r.drawArraysInstanced(s,h,_,S),i.update(_,s,S))}function m(h,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,_,0,S);let M=0;for(let b=0;b<S;b++)M+=_[b];i.update(M,s,1)}function g(h,_,S,v){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)f(h[b],_[b],v[b]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,_,0,v,0,S);let b=0;for(let C=0;C<S;C++)b+=_[C]*v[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function Nw(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(V){return!(V!==Mi&&s.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(V){const A=V===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==ui&&s.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Pi&&!A)}function g(V){if(V==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=g(h);_!==h&&(at("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const S=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:f,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:L,maxSamples:F,samples:H}}function Dw(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Ns,m=new ut,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(S,v){const M=S.length!==0||v||s!==0||l;return l=v,s=S.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,v){i=_(S,v,0)},this.setState=function(S,v,M){const b=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,x=r.get(S);if(!l||b===null||b.length===0||c&&!y)c?_(null):h();else{const N=c?0:s,D=N*4;let L=x.clippingState||null;g.value=L,L=_(b,v,D,M);for(let F=0;F!==D;++F)L[F]=i[F];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function h(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(S,v,M,b){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=g.value,b!==!0||y===null){const x=M+C*4,N=v.matrixWorldInverse;m.getNormalMatrix(N),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,L=M;D!==C;++D,L+=4)f.copy(S[D]).applyMatrix4(N,m),f.normal.toArray(y,L),y[L+3]=f.constant}g.value=y,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const as=4,Cv=[.125,.215,.35,.446,.526,.582],Us=20,Uw=256,Wo=new fp,Nv=new Gt;let Yd=null,Zd=0,Kd=0,Qd=!1;const Lw=new le;class Dv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:m=Lw}=c;Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,Zd,Kd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ps||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ya,format:Mi,colorSpace:Fr,depthBuffer:!1},l=Uv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ow(c)),this._blurMaterial=Iw(c,e,i),this._ggxMaterial=Pw(c,e,i)}return l}_compileMaterial(e){const i=new Vi(new Ta,e);this._renderer.compile(i,Wo)}_sceneToCubeUV(e,i,s,l,c){const g=new Si(90,1,i,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,v=S.autoClear,M=S.toneMapping;S.getClearColor(Nv),S.toneMapping=Fi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new sl,new B_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,x=!0):(y.color.copy(Nv),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(g.up.set(0,h[D],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+_[D],c.y,c.z)):L===1?(g.up.set(0,0,h[D]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+_[D],c.z)):(g.up.set(0,h[D],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+_[D]));const F=this._cubeSize;Dr(l,L*F,D>2?F:0,F,F),S.setRenderTarget(l),x&&S.render(C,g),S.render(e,g)}S.toneMapping=M,S.autoClear=v,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ps||e.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const m=c.uniforms;m.envMap.value=e;const g=this._cubeSize;Dr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(f,Wo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,m=this._lodMeshes[s];m.material=f;const g=f.uniforms,h=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-_*_),v=0+h*1.25,M=S*v,{_lodMax:b}=this,C=this._sizeLods[s],y=3*C*(s>b-as?s-b+as:0),x=4*(this._cubeSize-C);g.envMap.value=e.texture,g.roughness.value=M,g.mipInt.value=b-i,Dr(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(m,Wo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=b-s,Dr(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(m,Wo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,m){const g=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const _=3,S=this._lodMeshes[l];S.material=h;const v=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Us-1),C=c/b,y=isFinite(c)?1+Math.floor(_*C):Us;y>Us&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const x=[];let N=0;for(let V=0;V<Us;++V){const A=V/C,U=Math.exp(-A*A/2);x.push(U),V===0?N+=U:V<y&&(N+=2*U)}for(let V=0;V<x.length;V++)x[V]=x[V]/N;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=f==="latitudinal",m&&(v.poleAxis.value=m);const{_lodMax:D}=this;v.dTheta.value=b,v.mipInt.value=D-s;const L=this._sizeLods[l],F=3*L*(l>D-as?l-D+as:0),H=4*(this._cubeSize-L);Dr(i,F,H,3*L,2*L),g.setRenderTarget(i),g.render(S,Wo)}}function Ow(r){const e=[],i=[],s=[];let l=r;const c=r-as+1+Cv.length;for(let f=0;f<c;f++){const m=Math.pow(2,l);e.push(m);let g=1/m;f>r-as?g=Cv[f-r+as-1]:f===0&&(g=0),i.push(g);const h=1/(m-2),_=-h,S=1+h,v=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,b=6,C=3,y=2,x=1,N=new Float32Array(C*b*M),D=new Float32Array(y*b*M),L=new Float32Array(x*b*M);for(let H=0;H<M;H++){const V=H%3*2/3-1,A=H>2?0:-1,U=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];N.set(U,C*b*H),D.set(v,y*b*H);const he=[H,H,H,H,H,H];L.set(he,x*b*H)}const F=new Ta;F.setAttribute("position",new zi(N,C)),F.setAttribute("uv",new zi(D,y)),F.setAttribute("faceIndex",new zi(L,x)),s.push(new Vi(F,null)),l>as&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Uv(r,e,i){const s=new Bi(r,e,i);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function Pw(r,e,i){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Iw(r,e,i){const s=new Float32Array(Us),l=new le(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Lv(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Ov(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}class X_ extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new H_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new sl(5,5,5),c=new bi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:va});c.uniforms.tEquirect.value=i;const f=new Vi(l,c),m=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Dn),new VT(1,10,this).update(e,f),i.minFilter=m,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function Fw(r){let e=new WeakMap,i=new WeakMap,s=null;function l(v,M=!1){return v==null?null:M?f(v):c(v)}function c(v){if(v&&v.isTexture){const M=v.mapping;if(M===yd||M===Md)if(e.has(v)){const b=e.get(v).texture;return m(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const C=new X_(b.height);return C.fromEquirectangularTexture(r,v),e.set(v,C),v.addEventListener("dispose",h),m(C.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const M=v.mapping,b=M===yd||M===Md,C=M===Ps||M===Pr;if(b||C){let y=i.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new Dv(r)),y=b?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const N=v.image;return b&&N&&N.height>0||C&&N&&g(N)?(s===null&&(s=new Dv(r)),y=b?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function m(v,M){return M===yd?v.mapping=Ps:M===Md&&(v.mapping=Pr),v}function g(v){let M=0;const b=6;for(let C=0;C<b;C++)v[C]!==void 0&&M++;return M===b}function h(v){const M=v.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function _(v){const M=v.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function Bw(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&nu("WebGLRenderer: "+s+" extension not supported."),l}}}function zw(r,e,i,s){const l={},c=new WeakMap;function f(S){const v=S.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function m(S,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function g(S){const v=S.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function h(S){const v=[],M=S.index,b=S.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const N=M.array;C=M.version;for(let D=0,L=N.length;D<L;D+=3){const F=N[D+0],H=N[D+1],V=N[D+2];v.push(F,H,H,V,V,F)}}else{const N=b.array;C=b.version;for(let D=0,L=N.length/3-1;D<L;D+=3){const F=D+0,H=D+1,V=D+2;v.push(F,H,H,V,V,F)}}const y=new(b.count>=65535?F_:I_)(v,1);y.version=C;const x=c.get(S);x&&e.remove(x),c.set(S,y)}function _(S){const v=c.get(S);if(v){const M=S.index;M!==null&&v.version<M.version&&h(S)}else h(S);return c.get(S)}return{get:m,update:g,getWireframeAttribute:_}}function Hw(r,e,i){let s;function l(v){s=v}let c,f;function m(v){c=v.type,f=v.bytesPerElement}function g(v,M){r.drawElements(s,M,c,v*f),i.update(M,s,1)}function h(v,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,v*f,b),i.update(M,s,b))}function _(v,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];i.update(y,s,1)}function S(v,M,b,C){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/f,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,C,0,b);let x=0;for(let N=0;N<b;N++)x+=M[N]*C[N];i.update(x,s,1)}}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function Gw(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,m){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=m*(c/3);break;case r.LINES:i.lines+=m*(c/2);break;case r.LINE_STRIP:i.lines+=m*(c-1);break;case r.LINE_LOOP:i.lines+=m*c;break;case r.POINTS:i.points+=m*c;break;default:At("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Vw(r,e,i){const s=new WeakMap,l=new on;function c(f,m,g){const h=f.morphTargetInfluences,_=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,S=_!==void 0?_.length:0;let v=s.get(m);if(v===void 0||v.count!==S){let he=function(){A.dispose(),s.delete(m),m.removeEventListener("dispose",he)};var M=he;v!==void 0&&v.texture.dispose();const b=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,y=m.morphAttributes.color!==void 0,x=m.morphAttributes.position||[],N=m.morphAttributes.normal||[],D=m.morphAttributes.color||[];let L=0;b===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let F=m.attributes.position.count*L,H=1;F>e.maxTextureSize&&(H=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const V=new Float32Array(F*H*4*S),A=new L_(V,F,H,S);A.type=Pi,A.needsUpdate=!0;const U=L*4;for(let G=0;G<S;G++){const te=x[G],ae=N[G],de=D[G],J=F*H*4*G;for(let I=0;I<te.count;I++){const z=I*U;b===!0&&(l.fromBufferAttribute(te,I),V[J+z+0]=l.x,V[J+z+1]=l.y,V[J+z+2]=l.z,V[J+z+3]=0),C===!0&&(l.fromBufferAttribute(ae,I),V[J+z+4]=l.x,V[J+z+5]=l.y,V[J+z+6]=l.z,V[J+z+7]=0),y===!0&&(l.fromBufferAttribute(de,I),V[J+z+8]=l.x,V[J+z+9]=l.y,V[J+z+10]=l.z,V[J+z+11]=de.itemSize===4?l.w:1)}}v={count:S,texture:A,size:new Lt(F,H)},s.set(m,v),m.addEventListener("dispose",he)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const C=m.morphTargetsRelative?1:1-b;g.getUniforms().setValue(r,"morphTargetBaseInfluence",C),g.getUniforms().setValue(r,"morphTargetInfluences",h)}g.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function kw(r,e,i,s,l){let c=new WeakMap;function f(h){const _=l.render.frame,S=h.geometry,v=e.get(h,S);if(c.get(v)!==_&&(e.update(v),c.set(v,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",g)===!1&&h.addEventListener("dispose",g),c.get(h)!==_&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return v}function m(){c=new WeakMap}function g(h){const _=h.target;_.removeEventListener("dispose",g),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:m}}const jw={[v_]:"LINEAR_TONE_MAPPING",[__]:"REINHARD_TONE_MAPPING",[x_]:"CINEON_TONE_MAPPING",[S_]:"ACES_FILMIC_TONE_MAPPING",[M_]:"AGX_TONE_MAPPING",[b_]:"NEUTRAL_TONE_MAPPING",[y_]:"CUSTOM_TONE_MAPPING"};function Xw(r,e,i,s,l){const c=new Bi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Bi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),m=new Ta;m.setAttribute("position",new xa([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new xa([0,2,0,0,2,0],2));const g=new zT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Vi(m,g),_=new fp(-1,1,1,-1,0,1);let S=null,v=null,M=!1,b,C=null,y=[],x=!1;this.setSize=function(N,D){c.setSize(N,D),f.setSize(N,D);for(let L=0;L<y.length;L++){const F=y[L];F.setSize&&F.setSize(N,D)}},this.setEffects=function(N){y=N,x=y.length>0&&y[0].isRenderPass===!0;const D=c.width,L=c.height;for(let F=0;F<y.length;F++){const H=y[F];H.setSize&&H.setSize(D,L)}},this.begin=function(N,D){if(M||N.toneMapping===Fi&&y.length===0)return!1;if(C=D,D!==null){const L=D.width,F=D.height;(c.width!==L||c.height!==F)&&this.setSize(L,F)}return x===!1&&N.setRenderTarget(c),b=N.toneMapping,N.toneMapping=Fi,!0},this.hasRenderPass=function(){return x},this.end=function(N,D){N.toneMapping=b,M=!0;let L=c,F=f;for(let H=0;H<y.length;H++){const V=y[H];if(V.enabled!==!1&&(V.render(N,F,L,D),V.needsSwap!==!1)){const A=L;L=F,F=A}}if(S!==N.outputColorSpace||v!==N.toneMapping){S=N.outputColorSpace,v=N.toneMapping,g.defines={},Mt.getTransfer(S)===Ft&&(g.defines.SRGB_TRANSFER="");const H=jw[v];H&&(g.defines[H]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(C),N.render(h,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),m.dispose(),g.dispose()}}const W_=new On,Wh=new $o(1,1),q_=new L_,Y_=new mT,Z_=new H_,Pv=[],Iv=[],Fv=new Float32Array(16),Bv=new Float32Array(9),zv=new Float32Array(4);function kr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Pv[l];if(c===void 0&&(c=new Float32Array(l),Pv[l]=c),e!==0){s.toArray(c,0);for(let f=1,m=0;f!==e;++f)m+=i,r[f].toArray(c,m)}return c}function mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function gn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function lu(r,e){let i=Iv[e];i===void 0&&(i=new Int32Array(e),Iv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function Ww(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function qw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2fv(this.addr,e),gn(i,e)}}function Yw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;r.uniform3fv(this.addr,e),gn(i,e)}}function Zw(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4fv(this.addr,e),gn(i,e)}}function Kw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;zv.set(s),r.uniformMatrix2fv(this.addr,!1,zv),gn(i,s)}}function Qw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Bv.set(s),r.uniformMatrix3fv(this.addr,!1,Bv),gn(i,s)}}function Jw(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Fv.set(s),r.uniformMatrix4fv(this.addr,!1,Fv),gn(i,s)}}function $w(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function eR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2iv(this.addr,e),gn(i,e)}}function tR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3iv(this.addr,e),gn(i,e)}}function nR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4iv(this.addr,e),gn(i,e)}}function iR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function aR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2uiv(this.addr,e),gn(i,e)}}function sR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3uiv(this.addr,e),gn(i,e)}}function rR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4uiv(this.addr,e),gn(i,e)}}function oR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Wh.compareFunction=i.isReversedDepthBuffer()?lp:op,c=Wh):c=W_,i.setTexture2D(e||c,l)}function lR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Y_,l)}function cR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Z_,l)}function uR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||q_,l)}function fR(r){switch(r){case 5126:return Ww;case 35664:return qw;case 35665:return Yw;case 35666:return Zw;case 35674:return Kw;case 35675:return Qw;case 35676:return Jw;case 5124:case 35670:return $w;case 35667:case 35671:return eR;case 35668:case 35672:return tR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return aR;case 36295:return sR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return oR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return uR}}function dR(r,e){r.uniform1fv(this.addr,e)}function hR(r,e){const i=kr(e,this.size,2);r.uniform2fv(this.addr,i)}function pR(r,e){const i=kr(e,this.size,3);r.uniform3fv(this.addr,i)}function mR(r,e){const i=kr(e,this.size,4);r.uniform4fv(this.addr,i)}function gR(r,e){const i=kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function vR(r,e){const i=kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function _R(r,e){const i=kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function xR(r,e){r.uniform1iv(this.addr,e)}function SR(r,e){r.uniform2iv(this.addr,e)}function yR(r,e){r.uniform3iv(this.addr,e)}function MR(r,e){r.uniform4iv(this.addr,e)}function bR(r,e){r.uniform1uiv(this.addr,e)}function ER(r,e){r.uniform2uiv(this.addr,e)}function TR(r,e){r.uniform3uiv(this.addr,e)}function AR(r,e){r.uniform4uiv(this.addr,e)}function wR(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Wh:f=W_;for(let m=0;m!==l;++m)i.setTexture2D(e[m]||f,c[m])}function RR(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Y_,c[f])}function CR(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Z_,c[f])}function NR(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||q_,c[f])}function DR(r){switch(r){case 5126:return dR;case 35664:return hR;case 35665:return pR;case 35666:return mR;case 35674:return gR;case 35675:return vR;case 35676:return _R;case 5124:case 35670:return xR;case 35667:case 35671:return SR;case 35668:case 35672:return yR;case 35669:case 35673:return MR;case 5125:return bR;case 36294:return ER;case 36295:return TR;case 36296:return AR;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return RR;case 35680:case 36300:case 36308:case 36293:return CR;case 36289:case 36303:case 36311:case 36292:return NR}}class UR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=fR(i.type)}}class LR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DR(i.type)}}class OR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const m=l[c];m.setValue(e,i[m.id],s)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function Hv(r,e){r.seq.push(e),r.map[e.id]=e}function PR(r,e,i){const s=r.name,l=s.length;for(Jd.lastIndex=0;;){const c=Jd.exec(s),f=Jd.lastIndex;let m=c[1];const g=c[2]==="]",h=c[3];if(g&&(m=m|0),h===void 0||h==="["&&f+2===l){Hv(i,h===void 0?new UR(m,r,e):new LR(m,r,e));break}else{let S=i.map[m];S===void 0&&(S=new OR(m),Hv(i,S)),i=S}}}class Qc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const m=e.getActiveUniform(i,f),g=e.getUniformLocation(i,m.name);PR(m,g,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Gv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const IR=37297;let FR=0;function BR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const m=f+1;s.push(`${m===e?">":" "} ${m}: ${i[f]}`)}return s.join(`
`)}const Vv=new ut;function zR(r){Mt._getMatrix(Vv,Mt.workingColorSpace,r);const e=`mat3( ${Vv.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(r)){case $c:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const m=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+BR(r.getShaderSource(e),m)}else return c}function HR(r,e){const i=zR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const GR={[v_]:"Linear",[__]:"Reinhard",[x_]:"Cineon",[S_]:"ACESFilmic",[M_]:"AgX",[b_]:"Neutral",[y_]:"Custom"};function VR(r,e){const i=GR[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new le;function kR(){Mt.getLuminanceCoefficients(Vc);const r=Vc.x.toFixed(4),e=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function XR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function WR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let m=1;c.type===r.FLOAT_MAT2&&(m=2),c.type===r.FLOAT_MAT3&&(m=3),c.type===r.FLOAT_MAT4&&(m=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:m}}return i}function Zo(r){return r!==""}function jv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qR=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(r){return r.replace(qR,ZR)}const YR=new Map;function ZR(r,e){let i=ft[e];if(i===void 0){const s=YR.get(e);if(s!==void 0)i=ft[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return qh(i)}const KR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wv(r){return r.replace(KR,QR)}function QR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function qv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const JR={[Wc]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function $R(r){return JR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eC={[Ps]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function tC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":eC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const nC={[Pr]:"ENVMAP_MODE_REFRACTION"};function iC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":nC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aC={[g_]:"ENVMAP_BLENDING_MULTIPLY",[qE]:"ENVMAP_BLENDING_MIX",[YE]:"ENVMAP_BLENDING_ADD"};function sC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":aC[r.combine]||"ENVMAP_BLENDING_NONE"}function rC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function oC(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,m=i.fragmentShader;const g=$R(i),h=tC(i),_=iC(i),S=sC(i),v=rC(i),M=jR(i),b=XR(c),C=l.createProgram();let y,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Zo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Zo).join(`
`),x.length>0&&(x+=`
`)):(y=[qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),x=[qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Fi?VR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,HR("linearToOutputTexel",i.outputColorSpace),kR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),f=qh(f),f=jv(f,i),f=Xv(f,i),m=qh(m),m=jv(m,i),m=Xv(m,i),f=Wv(f),m=Wv(m),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=N+y+f,L=N+x+m,F=Gv(l,l.VERTEX_SHADER,D),H=Gv(l,l.FRAGMENT_SHADER,L);l.attachShader(C,F),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function V(G){if(r.debug.checkShaderErrors){const te=l.getProgramInfoLog(C)||"",ae=l.getShaderInfoLog(F)||"",de=l.getShaderInfoLog(H)||"",J=te.trim(),I=ae.trim(),z=de.trim();let ce=!0,ve=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,F,H);else{const O=kv(l,F,"vertex"),Z=kv(l,H,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+O+`
`+Z)}else J!==""?at("WebGLProgram: Program Info Log:",J):(I===""||z==="")&&(ve=!1);ve&&(G.diagnostics={runnable:ce,programLog:J,vertexShader:{log:I,prefix:y},fragmentShader:{log:z,prefix:x}})}l.deleteShader(F),l.deleteShader(H),A=new Qc(l,C),U=WR(l,C)}let A;this.getUniforms=function(){return A===void 0&&V(this),A};let U;this.getAttributes=function(){return U===void 0&&V(this),U};let he=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return he===!1&&(he=l.getProgramParameter(C,IR)),he},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=FR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=H,this}let lC=0;class cC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new uC(e),i.set(e,s)),s}}class uC{constructor(e){this.id=lC++,this.code=e,this.usedTimes=0}}function fC(r,e,i,s,l,c){const f=new O_,m=new cC,g=new Set,h=[],_=new Map,S=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return g.add(A),A===0?"uv":`uv${A}`}function C(A,U,he,G,te){const ae=G.fog,de=te.geometry,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,z=e.get(A.envMap||J,I),ce=z&&z.mapping===su?z.image.height:null,ve=M[A.type];A.precision!==null&&(v=s.getMaxPrecision(A.precision),v!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const O=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Z=O!==void 0?O.length:0;let ue=0;de.morphAttributes.position!==void 0&&(ue=1),de.morphAttributes.normal!==void 0&&(ue=2),de.morphAttributes.color!==void 0&&(ue=3);let Se,Ue,qe,$;if(ve){const Et=Oi[ve];Se=Et.vertexShader,Ue=Et.fragmentShader}else Se=A.vertexShader,Ue=A.fragmentShader,m.update(A),qe=m.getVertexShaderID(A),$=m.getFragmentShaderID(A);const Ee=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Je=te.isInstancedMesh===!0,Ke=te.isBatchedMesh===!0,$e=!!A.map,Jt=!!A.matcap,pt=!!z,St=!!A.aoMap,Ot=!!A.lightMap,ot=!!A.bumpMap,bt=!!A.normalMap,k=!!A.displacementMap,Yt=!!A.emissiveMap,yt=!!A.metalnessMap,wt=!!A.roughnessMap,je=A.anisotropy>0,P=A.clearcoat>0,T=A.dispersion>0,W=A.iridescence>0,me=A.sheen>0,_e=A.transmission>0,fe=je&&!!A.anisotropyMap,Le=P&&!!A.clearcoatMap,Ce=P&&!!A.clearcoatNormalMap,Ze=P&&!!A.clearcoatRoughnessMap,et=W&&!!A.iridescenceMap,be=W&&!!A.iridescenceThicknessMap,Ae=me&&!!A.sheenColorMap,Fe=me&&!!A.sheenRoughnessMap,He=!!A.specularMap,Pe=!!A.specularColorMap,lt=!!A.specularIntensityMap,X=_e&&!!A.transmissionMap,Re=_e&&!!A.thicknessMap,we=!!A.gradientMap,Ie=!!A.alphaMap,Te=A.alphaTest>0,pe=!!A.alphaHash,Ge=!!A.extensions;let nt=Fi;A.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(nt=r.toneMapping);const Dt={shaderID:ve,shaderType:A.type,shaderName:A.name,vertexShader:Se,fragmentShader:Ue,defines:A.defines,customVertexShaderID:qe,customFragmentShaderID:$,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Ke,batchingColor:Ke&&te._colorsTexture!==null,instancing:Je,instancingColor:Je&&te.instanceColor!==null,instancingMorph:Je&&te.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Fr,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:Jt,envMap:pt,envMapMode:pt&&z.mapping,envMapCubeUVHeight:ce,aoMap:St,lightMap:Ot,bumpMap:ot,normalMap:bt,displacementMap:k,emissiveMap:Yt,normalMapObjectSpace:bt&&A.normalMapType===JE,normalMapTangentSpace:bt&&A.normalMapType===QE,metalnessMap:yt,roughnessMap:wt,anisotropy:je,anisotropyMap:fe,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ze,dispersion:T,iridescence:W,iridescenceMap:et,iridescenceThicknessMap:be,sheen:me,sheenColorMap:Ae,sheenRoughnessMap:Fe,specularMap:He,specularColorMap:Pe,specularIntensityMap:lt,transmission:_e,transmissionMap:X,thicknessMap:Re,gradientMap:we,opaque:A.transparent===!1&&A.blending===Ur&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:pe,combine:A.combine,mapUv:$e&&b(A.map.channel),aoMapUv:St&&b(A.aoMap.channel),lightMapUv:Ot&&b(A.lightMap.channel),bumpMapUv:ot&&b(A.bumpMap.channel),normalMapUv:bt&&b(A.normalMap.channel),displacementMapUv:k&&b(A.displacementMap.channel),emissiveMapUv:Yt&&b(A.emissiveMap.channel),metalnessMapUv:yt&&b(A.metalnessMap.channel),roughnessMapUv:wt&&b(A.roughnessMap.channel),anisotropyMapUv:fe&&b(A.anisotropyMap.channel),clearcoatMapUv:Le&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:be&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&b(A.sheenRoughnessMap.channel),specularMapUv:He&&b(A.specularMap.channel),specularColorMapUv:Pe&&b(A.specularColorMap.channel),specularIntensityMapUv:lt&&b(A.specularIntensityMap.channel),transmissionMapUv:X&&b(A.transmissionMap.channel),thicknessMapUv:Re&&b(A.thicknessMap.channel),alphaMapUv:Ie&&b(A.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(bt||je),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!de.attributes.uv&&($e||Ie),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||de.attributes.normal===void 0&&bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:te.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ue,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&he.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&Mt.getTransfer(A.map.colorSpace)===Ft,decodeVideoTextureEmissive:Yt&&A.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(A.emissiveMap.colorSpace)===Ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pa,flipSided:A.side===kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&A.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Dt.vertexUv1s=g.has(1),Dt.vertexUv2s=g.has(2),Dt.vertexUv3s=g.has(3),g.clear(),Dt}function y(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const he in A.defines)U.push(he),U.push(A.defines[he]);return A.isRawShaderMaterial===!1&&(x(U,A),N(U,A),U.push(r.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function x(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function N(A,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),A.push(f.mask)}function D(A){const U=M[A.type];let he;if(U){const G=Oi[U];he=IT.clone(G.uniforms)}else he=A.uniforms;return he}function L(A,U){let he=_.get(U);return he!==void 0?++he.usedTimes:(he=new oC(r,U,A,l),h.push(he),_.set(U,he)),he}function F(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),_.delete(A.cacheKey),A.destroy()}}function H(A){m.remove(A)}function V(){m.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:D,acquireProgram:L,releaseProgram:F,releaseShaderCache:H,programs:h,dispose:V}}function dC(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let m=r.get(f);return m===void 0&&(m={},r.set(f,m)),m}function s(f){r.delete(f)}function l(f,m,g){r.get(f)[m]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function hC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Yv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function m(v,M,b,C,y,x){let N=r[e];return N===void 0?(N={id:v.id,object:v,geometry:M,material:b,materialVariant:f(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:x},r[e]=N):(N.id=v.id,N.object=v,N.geometry=M,N.material=b,N.materialVariant=f(v),N.groupOrder=C,N.renderOrder=v.renderOrder,N.z=y,N.group=x),e++,N}function g(v,M,b,C,y,x){const N=m(v,M,b,C,y,x);b.transmission>0?s.push(N):b.transparent===!0?l.push(N):i.push(N)}function h(v,M,b,C,y,x){const N=m(v,M,b,C,y,x);b.transmission>0?s.unshift(N):b.transparent===!0?l.unshift(N):i.unshift(N)}function _(v,M){i.length>1&&i.sort(v||hC),s.length>1&&s.sort(M||Yv),l.length>1&&l.sort(M||Yv)}function S(){for(let v=e,M=r.length;v<M;v++){const b=r[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:h,finish:S,sort:_}}function pC(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Zv,r.set(s,[f])):l>=c.length?(f=new Zv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function mC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Gt};break;case"SpotLight":i={position:new le,direction:new le,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":i={color:new Gt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=i,i}}}function gC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let vC=0;function _C(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xC(r){const e=new mC,i=gC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new le);const l=new le,c=new fn,f=new fn;function m(h){let _=0,S=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,b=0,C=0,y=0,x=0,N=0,D=0,L=0,F=0,H=0,V=0;h.sort(_C);for(let U=0,he=h.length;U<he;U++){const G=h[U],te=G.color,ae=G.intensity,de=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ir?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=te.r*ae,S+=te.g*ae,v+=te.b*ae;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],ae);V++}else if(G.isDirectionalLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,ce=i.get(G);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,s.directionalShadow[M]=ce,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=G.shadow.matrix,N++}s.directional[M]=I,M++}else if(G.isSpotLight){const I=e.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(te).multiplyScalar(ae),I.distance=de,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[C]=I;const z=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,z.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[C]=z.matrix,G.castShadow){const ce=i.get(G);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,s.spotShadow[C]=ce,s.spotShadowMap[C]=J,L++}C++}else if(G.isRectAreaLight){const I=e.get(G);I.color.copy(te).multiplyScalar(ae),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=I,y++}else if(G.isPointLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const z=G.shadow,ce=i.get(G);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,ce.shadowCameraNear=z.camera.near,ce.shadowCameraFar=z.camera.far,s.pointShadow[b]=ce,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=G.shadow.matrix,D++}s.point[b]=I,b++}else if(G.isHemisphereLight){const I=e.get(G);I.skyColor.copy(G.color).multiplyScalar(ae),I.groundColor.copy(G.groundColor).multiplyScalar(ae),s.hemi[x]=I,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=S,s.ambient[2]=v;const A=s.hash;(A.directionalLength!==M||A.pointLength!==b||A.spotLength!==C||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==N||A.numPointShadows!==D||A.numSpotShadows!==L||A.numSpotMaps!==F||A.numLightProbes!==V)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+F-H,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=V,A.directionalLength=M,A.pointLength=b,A.spotLength=C,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=N,A.numPointShadows=D,A.numSpotShadows=L,A.numSpotMaps=F,A.numLightProbes=V,s.version=vC++)}function g(h,_){let S=0,v=0,M=0,b=0,C=0;const y=_.matrixWorldInverse;for(let x=0,N=h.length;x<N;x++){const D=h[x];if(D.isDirectionalLight){const L=s.directional[S];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),S++}else if(D.isSpotLight){const L=s.spot[M];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),f.identity(),c.copy(D.matrixWorld),c.premultiply(y),f.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:m,setupView:g,state:s}}function Kv(r){const e=new xC(r),i=[],s=[];function l(_){h.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function m(){e.setup(i)}function g(_){e.setupView(i,_)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:m,setupLightsView:g,pushLight:c,pushShadow:f}}function SC(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let m;return f===void 0?(m=new Kv(r),e.set(l,[m])):c>=f.length?(m=new Kv(r),f.push(m)):m=f[c],m}function s(){e=new WeakMap}return{get:i,dispose:s}}const yC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MC=`uniform sampler2D shadow_pass;
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
}`,bC=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],EC=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],Qv=new fn,qo=new le,$d=new le;function TC(r,e,i){let s=new z_;const l=new Lt,c=new Lt,f=new on,m=new HT,g=new GT,h={},_=i.maxTextureSize,S={[ss]:kn,[kn]:ss,[pa]:pa},v=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:yC,fragmentShader:MC}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ta;b.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Vi(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let x=this.type;this.render=function(H,V,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;this.type===RE&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wc);const U=r.getRenderTarget(),he=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),te=r.state;te.setBlending(va),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ae=x!==this.type;ae&&V.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(J=>J.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,J=H.length;de<J;de++){const I=H[de],z=I.shadow;if(z===void 0){at("WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ce=z.getFrameExtents();l.multiply(ce),c.copy(z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ce.x),l.x=c.x*ce.x,z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ce.y),l.y=c.y*ce.y,z.mapSize.y=c.y));const ve=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ve,z.map===null||ae===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Yo){if(I.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Bi(l.x,l.y,{format:Ir,type:ya,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),z.map.texture.name=I.name+".shadowMap",z.map.depthTexture=new $o(l.x,l.y,Pi),z.map.depthTexture.name=I.name+".shadowMapDepth",z.map.depthTexture.format=Ma,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An}else I.isPointLight?(z.map=new X_(l.x),z.map.depthTexture=new OT(l.x,Gi)):(z.map=new Bi(l.x,l.y),z.map.depthTexture=new $o(l.x,l.y,Gi)),z.map.depthTexture.name=I.name+".shadowMap",z.map.depthTexture.format=Ma,this.type===Wc?(z.map.depthTexture.compareFunction=ve?lp:op,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An);z.camera.updateProjectionMatrix()}const O=z.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<O;Z++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,Z),r.clear();else{Z===0&&(r.setRenderTarget(z.map),r.clear());const ue=z.getViewport(Z);f.set(c.x*ue.x,c.y*ue.y,c.x*ue.z,c.y*ue.w),te.viewport(f)}if(I.isPointLight){const ue=z.camera,Se=z.matrix,Ue=I.distance||ue.far;Ue!==ue.far&&(ue.far=Ue,ue.updateProjectionMatrix()),qo.setFromMatrixPosition(I.matrixWorld),ue.position.copy(qo),$d.copy(ue.position),$d.add(bC[Z]),ue.up.copy(EC[Z]),ue.lookAt($d),ue.updateMatrixWorld(),Se.makeTranslation(-qo.x,-qo.y,-qo.z),Qv.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Qv,ue.coordinateSystem,ue.reversedDepth)}else z.updateMatrices(I);s=z.getFrustum(),L(V,A,z.camera,I,this.type)}z.isPointLightShadow!==!0&&this.type===Yo&&N(z,A),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(U,he,G)};function N(H,V){const A=e.update(C);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Bi(l.x,l.y,{format:Ir,type:ya})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(V,null,A,v,C,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(V,null,A,M,C,null)}function D(H,V,A,U){let he=null;const G=A.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)he=G;else if(he=A.isPointLight===!0?g:m,r.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const te=he.uuid,ae=V.uuid;let de=h[te];de===void 0&&(de={},h[te]=de);let J=de[ae];J===void 0&&(J=he.clone(),de[ae]=J,V.addEventListener("dispose",F)),he=J}if(he.visible=V.visible,he.wireframe=V.wireframe,U===Yo?he.side=V.shadowSide!==null?V.shadowSide:V.side:he.side=V.shadowSide!==null?V.shadowSide:S[V.side],he.alphaMap=V.alphaMap,he.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,he.map=V.map,he.clipShadows=V.clipShadows,he.clippingPlanes=V.clippingPlanes,he.clipIntersection=V.clipIntersection,he.displacementMap=V.displacementMap,he.displacementScale=V.displacementScale,he.displacementBias=V.displacementBias,he.wireframeLinewidth=V.wireframeLinewidth,he.linewidth=V.linewidth,A.isPointLight===!0&&he.isMeshDistanceMaterial===!0){const te=r.properties.get(he);te.light=A}return he}function L(H,V,A,U,he){if(H.visible===!1)return;if(H.layers.test(V.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&he===Yo)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,H.matrixWorld);const ae=e.update(H),de=H.material;if(Array.isArray(de)){const J=ae.groups;for(let I=0,z=J.length;I<z;I++){const ce=J[I],ve=de[ce.materialIndex];if(ve&&ve.visible){const O=D(H,ve,U,he);H.onBeforeShadow(r,H,V,A,ae,O,ce),r.renderBufferDirect(A,null,ae,O,H,ce),H.onAfterShadow(r,H,V,A,ae,O,ce)}}}else if(de.visible){const J=D(H,de,U,he);H.onBeforeShadow(r,H,V,A,ae,J,null),r.renderBufferDirect(A,null,ae,J,H,null),H.onAfterShadow(r,H,V,A,ae,J,null)}}const te=H.children;for(let ae=0,de=te.length;ae<de;ae++)L(te[ae],V,A,U,he)}function F(H){H.target.removeEventListener("dispose",F);for(const A in h){const U=h[A],he=H.target.uuid;he in U&&(U[he].dispose(),delete U[he])}}}function AC(r,e){function i(){let X=!1;const Re=new on;let we=null;const Ie=new on(0,0,0,0);return{setMask:function(Te){we!==Te&&!X&&(r.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){X=Te},setClear:function(Te,pe,Ge,nt,Dt){Dt===!0&&(Te*=nt,pe*=nt,Ge*=nt),Re.set(Te,pe,Ge,nt),Ie.equals(Re)===!1&&(r.clearColor(Te,pe,Ge,nt),Ie.copy(Re))},reset:function(){X=!1,we=null,Ie.set(-1,0,0,0)}}}function s(){let X=!1,Re=!1,we=null,Ie=null,Te=null;return{setReversed:function(pe){if(Re!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Re=pe;const nt=Te;Te=null,this.setClear(nt)}},getReversed:function(){return Re},setTest:function(pe){pe?Ee(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(pe){we!==pe&&!X&&(r.depthMask(pe),we=pe)},setFunc:function(pe){if(Re&&(pe=lT[pe]),Ie!==pe){switch(pe){case ah:r.depthFunc(r.NEVER);break;case sh:r.depthFunc(r.ALWAYS);break;case rh:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case oh:r.depthFunc(r.EQUAL);break;case lh:r.depthFunc(r.GEQUAL);break;case ch:r.depthFunc(r.GREATER);break;case uh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=pe}},setLocked:function(pe){X=pe},setClear:function(pe){Te!==pe&&(Te=pe,Re&&(pe=1-pe),r.clearDepth(pe))},reset:function(){X=!1,we=null,Ie=null,Te=null,Re=!1}}}function l(){let X=!1,Re=null,we=null,Ie=null,Te=null,pe=null,Ge=null,nt=null,Dt=null;return{setTest:function(Et){X||(Et?Ee(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!X&&(r.stencilMask(Et),Re=Et)},setFunc:function(Et,fi,vn){(we!==Et||Ie!==fi||Te!==vn)&&(r.stencilFunc(Et,fi,vn),we=Et,Ie=fi,Te=vn)},setOp:function(Et,fi,vn){(pe!==Et||Ge!==fi||nt!==vn)&&(r.stencilOp(Et,fi,vn),pe=Et,Ge=fi,nt=vn)},setLocked:function(Et){X=Et},setClear:function(Et){Dt!==Et&&(r.clearStencil(Et),Dt=Et)},reset:function(){X=!1,Re=null,we=null,Ie=null,Te=null,pe=null,Ge=null,nt=null,Dt=null}}}const c=new i,f=new s,m=new l,g=new WeakMap,h=new WeakMap;let _={},S={},v=new WeakMap,M=[],b=null,C=!1,y=null,x=null,N=null,D=null,L=null,F=null,H=null,V=new Gt(0,0,0),A=0,U=!1,he=null,G=null,te=null,ae=null,de=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ce)[1]),I=z>=1):ce.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),I=z>=2);let ve=null,O={};const Z=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),Se=new on().fromArray(Z),Ue=new on().fromArray(ue);function qe(X,Re,we,Ie){const Te=new Uint8Array(4),pe=r.createTexture();r.bindTexture(X,pe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<we;Ge++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Re+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return pe}const $={};$[r.TEXTURE_2D]=qe(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),m.setClear(0),Ee(r.DEPTH_TEST),f.setFunc(Or),ot(!1),bt(iv),Ee(r.CULL_FACE),St(va);function Ee(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Me(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function Je(X,Re){return S[X]!==Re?(r.bindFramebuffer(X,Re),S[X]=Re,X===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Re),X===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(X,Re){let we=M,Ie=!1;if(X){we=v.get(Re),we===void 0&&(we=[],v.set(Re,we));const Te=X.textures;if(we.length!==Te.length||we[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ge=Te.length;pe<Ge;pe++)we[pe]=r.COLOR_ATTACHMENT0+pe;we.length=Te.length,Ie=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(we)}function $e(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const Jt={[Ds]:r.FUNC_ADD,[NE]:r.FUNC_SUBTRACT,[DE]:r.FUNC_REVERSE_SUBTRACT};Jt[UE]=r.MIN,Jt[LE]=r.MAX;const pt={[OE]:r.ZERO,[PE]:r.ONE,[IE]:r.SRC_COLOR,[nh]:r.SRC_ALPHA,[VE]:r.SRC_ALPHA_SATURATE,[HE]:r.DST_COLOR,[BE]:r.DST_ALPHA,[FE]:r.ONE_MINUS_SRC_COLOR,[ih]:r.ONE_MINUS_SRC_ALPHA,[GE]:r.ONE_MINUS_DST_COLOR,[zE]:r.ONE_MINUS_DST_ALPHA,[kE]:r.CONSTANT_COLOR,[jE]:r.ONE_MINUS_CONSTANT_COLOR,[XE]:r.CONSTANT_ALPHA,[WE]:r.ONE_MINUS_CONSTANT_ALPHA};function St(X,Re,we,Ie,Te,pe,Ge,nt,Dt,Et){if(X===va){C===!0&&(Me(r.BLEND),C=!1);return}if(C===!1&&(Ee(r.BLEND),C=!0),X!==CE){if(X!==y||Et!==U){if((x!==Ds||L!==Ds)&&(r.blendEquation(r.FUNC_ADD),x=Ds,L=Ds),Et)switch(X){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case av:r.blendFunc(r.ONE,r.ONE);break;case sv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:At("WebGLState: Invalid blending: ",X);break}else switch(X){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case av:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case sv:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rv:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",X);break}N=null,D=null,F=null,H=null,V.set(0,0,0),A=0,y=X,U=Et}return}Te=Te||Re,pe=pe||we,Ge=Ge||Ie,(Re!==x||Te!==L)&&(r.blendEquationSeparate(Jt[Re],Jt[Te]),x=Re,L=Te),(we!==N||Ie!==D||pe!==F||Ge!==H)&&(r.blendFuncSeparate(pt[we],pt[Ie],pt[pe],pt[Ge]),N=we,D=Ie,F=pe,H=Ge),(nt.equals(V)===!1||Dt!==A)&&(r.blendColor(nt.r,nt.g,nt.b,Dt),V.copy(nt),A=Dt),y=X,U=!1}function Ot(X,Re){X.side===pa?Me(r.CULL_FACE):Ee(r.CULL_FACE);let we=X.side===kn;Re&&(we=!we),ot(we),X.blending===Ur&&X.transparent===!1?St(va):St(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ie=X.stencilWrite;m.setTest(Ie),Ie&&(m.setMask(X.stencilWriteMask),m.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),m.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Yt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){he!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),he=X)}function bt(X){X!==AE?(Ee(r.CULL_FACE),X!==G&&(X===iv?r.cullFace(r.BACK):X===wE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),G=X}function k(X){X!==te&&(I&&r.lineWidth(X),te=X)}function Yt(X,Re,we){X?(Ee(r.POLYGON_OFFSET_FILL),(ae!==Re||de!==we)&&(ae=Re,de=we,f.getReversed()&&(Re=-Re),r.polygonOffset(Re,we))):Me(r.POLYGON_OFFSET_FILL)}function yt(X){X?Ee(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function wt(X){X===void 0&&(X=r.TEXTURE0+J-1),ve!==X&&(r.activeTexture(X),ve=X)}function je(X,Re,we){we===void 0&&(ve===null?we=r.TEXTURE0+J-1:we=ve);let Ie=O[we];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[we]=Ie),(Ie.type!==X||Ie.texture!==Re)&&(ve!==we&&(r.activeTexture(we),ve=we),r.bindTexture(X,Re||$[X]),Ie.type=X,Ie.texture=Re)}function P(){const X=O[ve];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function me(){try{r.texSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function _e(){try{r.texSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ce(){try{r.texStorage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Ze(){try{r.texStorage3D(...arguments)}catch(X){At("WebGLState:",X)}}function et(){try{r.texImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function be(){try{r.texImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ae(X){Se.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Se.copy(X))}function Fe(X){Ue.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ue.copy(X))}function He(X,Re){let we=h.get(Re);we===void 0&&(we=new WeakMap,h.set(Re,we));let Ie=we.get(X);Ie===void 0&&(Ie=r.getUniformBlockIndex(Re,X.name),we.set(X,Ie))}function Pe(X,Re){const Ie=h.get(Re).get(X);g.get(Re)!==Ie&&(r.uniformBlockBinding(Re,Ie,X.__bindingPointIndex),g.set(Re,Ie))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ve=null,O={},S={},v=new WeakMap,M=[],b=null,C=!1,y=null,x=null,N=null,D=null,L=null,F=null,H=null,V=new Gt(0,0,0),A=0,U=!1,he=null,G=null,te=null,ae=null,de=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),m.reset()}return{buffers:{color:c,depth:f,stencil:m},enable:Ee,disable:Me,bindFramebuffer:Je,drawBuffers:Ke,useProgram:$e,setBlending:St,setMaterial:Ot,setFlipSided:ot,setCullFace:bt,setLineWidth:k,setPolygonOffset:Yt,setScissorTest:yt,activeTexture:wt,bindTexture:je,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:et,texImage3D:be,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:Ze,texSubImage2D:me,texSubImage3D:_e,compressedTexSubImage2D:fe,compressedTexSubImage3D:Le,scissor:Ae,viewport:Fe,reset:lt}}function wC(r,e,i,s,l,c,f){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,_=new WeakMap;let S;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return M?new OffscreenCanvas(P,T):tu("canvas")}function C(P,T,W){let me=1;const _e=je(P);if((_e.width>W||_e.height>W)&&(me=W/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*_e.width),Le=Math.floor(me*_e.height);S===void 0&&(S=b(fe,Le));const Ce=T?b(fe,Le):S;return Ce.width=fe,Ce.height=Le,Ce.getContext("2d").drawImage(P,0,0,fe,Le),at("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Le+")."),Ce}else return"data"in P&&at("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function y(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(P,T,W,me,_e=!1){if(P!==null){if(r[P]!==void 0)return r[P];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=T;if(T===r.RED&&(W===r.FLOAT&&(fe=r.R32F),W===r.HALF_FLOAT&&(fe=r.R16F),W===r.UNSIGNED_BYTE&&(fe=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.R8UI),W===r.UNSIGNED_SHORT&&(fe=r.R16UI),W===r.UNSIGNED_INT&&(fe=r.R32UI),W===r.BYTE&&(fe=r.R8I),W===r.SHORT&&(fe=r.R16I),W===r.INT&&(fe=r.R32I)),T===r.RG&&(W===r.FLOAT&&(fe=r.RG32F),W===r.HALF_FLOAT&&(fe=r.RG16F),W===r.UNSIGNED_BYTE&&(fe=r.RG8)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RG8UI),W===r.UNSIGNED_SHORT&&(fe=r.RG16UI),W===r.UNSIGNED_INT&&(fe=r.RG32UI),W===r.BYTE&&(fe=r.RG8I),W===r.SHORT&&(fe=r.RG16I),W===r.INT&&(fe=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),W===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),W===r.UNSIGNED_INT&&(fe=r.RGB32UI),W===r.BYTE&&(fe=r.RGB8I),W===r.SHORT&&(fe=r.RGB16I),W===r.INT&&(fe=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),W===r.UNSIGNED_INT&&(fe=r.RGBA32UI),W===r.BYTE&&(fe=r.RGBA8I),W===r.SHORT&&(fe=r.RGBA16I),W===r.INT&&(fe=r.RGBA32I)),T===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),T===r.RGBA){const Le=_e?$c:Mt.getTransfer(me);W===r.FLOAT&&(fe=r.RGBA32F),W===r.HALF_FLOAT&&(fe=r.RGBA16F),W===r.UNSIGNED_BYTE&&(fe=Le===Ft?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function L(P,T){let W;return P?T===null||T===Gi||T===Jo?W=r.DEPTH24_STENCIL8:T===Pi?W=r.DEPTH32F_STENCIL8:T===Qo&&(W=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gi||T===Jo?W=r.DEPTH_COMPONENT24:T===Pi?W=r.DEPTH_COMPONENT32F:T===Qo&&(W=r.DEPTH_COMPONENT16),W}function F(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function H(P){const T=P.target;T.removeEventListener("dispose",H),A(T),T.isVideoTexture&&_.delete(T)}function V(P){const T=P.target;T.removeEventListener("dispose",V),he(T)}function A(P){const T=s.get(P);if(T.__webglInit===void 0)return;const W=P.source,me=v.get(W);if(me){const _e=me[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&U(P),Object.keys(me).length===0&&v.delete(W)}s.remove(P)}function U(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const W=P.source,me=v.get(W);delete me[T.__cacheKey],f.memory.textures--}function he(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let _e=0;_e<T.__webglFramebuffer[me].length;_e++)r.deleteFramebuffer(T.__webglFramebuffer[me][_e]);else r.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)r.deleteFramebuffer(T.__webglFramebuffer[me]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=P.textures;for(let me=0,_e=W.length;me<_e;me++){const fe=s.get(W[me]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),f.memory.textures--),s.remove(W[me])}s.remove(P)}let G=0;function te(){G=0}function ae(){const P=G;return P>=l.maxTextures&&at("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function de(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function J(P,T){const W=s.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const me=P.image;if(me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,P,T);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function I(P,T){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){$(W,P,T);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function z(P,T){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){$(W,P,T);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function ce(P,T){const W=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Ee(W,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}const ve={[fh]:r.REPEAT,[ma]:r.CLAMP_TO_EDGE,[dh]:r.MIRRORED_REPEAT},O={[An]:r.NEAREST,[ZE]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[bd]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},Z={[$E]:r.NEVER,[aT]:r.ALWAYS,[eT]:r.LESS,[op]:r.LEQUAL,[tT]:r.EQUAL,[lp]:r.GEQUAL,[nT]:r.GREATER,[iT]:r.NOTEQUAL};function ue(P,T){if(T.type===Pi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===bd||T.magFilter===Sc||T.magFilter===Ls||T.minFilter===Dn||T.minFilter===bd||T.minFilter===Sc||T.minFilter===Ls)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ve[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ve[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ve[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,O[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==Sc&&T.minFilter!==Ls||T.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Se(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",H));const me=T.source;let _e=v.get(me);_e===void 0&&(_e={},v.set(me,_e));const fe=de(T);if(fe!==P.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),_e[fe].usedTimes++;const Le=_e[P.__cacheKey];Le!==void 0&&(_e[P.__cacheKey].usedTimes--,Le.usedTimes===0&&U(T)),P.__cacheKey=fe,P.__webglTexture=_e[fe].texture}return W}function Ue(P,T,W){return Math.floor(Math.floor(P/W)/T)}function qe(P,T,W,me){const fe=P.updateRanges;if(fe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,W,me,T.data);else{fe.sort((be,Ae)=>be.start-Ae.start);let Le=0;for(let be=1;be<fe.length;be++){const Ae=fe[Le],Fe=fe[be],He=Ae.start+Ae.count,Pe=Ue(Fe.start,T.width,4),lt=Ue(Ae.start,T.width,4);Fe.start<=He+1&&Pe===lt&&Ue(Fe.start+Fe.count-1,T.width,4)===Pe?Ae.count=Math.max(Ae.count,Fe.start+Fe.count-Ae.start):(++Le,fe[Le]=Fe)}fe.length=Le+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let be=0,Ae=fe.length;be<Ae;be++){const Fe=fe[be],He=Math.floor(Fe.start/4),Pe=Math.ceil(Fe.count/4),lt=He%T.width,X=Math.floor(He/T.width),Re=Pe,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,lt,X,Re,we,W,me,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,et)}}function $(P,T,W){let me=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=r.TEXTURE_3D);const _e=Se(P,T),fe=T.source;i.bindTexture(me,P.__webglTexture,r.TEXTURE0+W);const Le=s.get(fe);if(fe.version!==Le.__version||_e===!0){i.activeTexture(r.TEXTURE0+W);const Ce=Mt.getPrimaries(Mt.workingColorSpace),Ze=T.colorSpace===is?null:Mt.getPrimaries(T.colorSpace),et=T.colorSpace===is||Ce===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let be=C(T.image,!1,l.maxTextureSize);be=wt(T,be);const Ae=c.convert(T.format,T.colorSpace),Fe=c.convert(T.type);let He=D(T.internalFormat,Ae,Fe,T.colorSpace,T.isVideoTexture);ue(me,T);let Pe;const lt=T.mipmaps,X=T.isVideoTexture!==!0,Re=Le.__version===void 0||_e===!0,we=fe.dataReady,Ie=F(T,be);if(T.isDepthTexture)He=L(T.format===Os,T.type),Re&&(X?i.texStorage2D(r.TEXTURE_2D,1,He,be.width,be.height):i.texImage2D(r.TEXTURE_2D,0,He,be.width,be.height,0,Ae,Fe,null));else if(T.isDataTexture)if(lt.length>0){X&&Re&&i.texStorage2D(r.TEXTURE_2D,Ie,He,lt[0].width,lt[0].height);for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],X?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data);T.generateMipmaps=!1}else X?(Re&&i.texStorage2D(r.TEXTURE_2D,Ie,He,be.width,be.height),we&&qe(T,be,Ae,Fe)):i.texImage2D(r.TEXTURE_2D,0,He,be.width,be.height,0,Ae,Fe,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,lt[0].width,lt[0].height,be.depth);for(let Te=0,pe=lt.length;Te<pe;Te++)if(Pe=lt[Te],T.format!==Mi)if(Ae!==null)if(X){if(we)if(T.layerUpdates.size>0){const Ge=Rv(Pe.width,Pe.height,T.format,T.type);for(const nt of T.layerUpdates){const Dt=Pe.data.subarray(nt*Ge/Pe.data.BYTES_PER_ELEMENT,(nt+1)*Ge/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,nt,Pe.width,Pe.height,1,Ae,Dt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,be.depth,Ae,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,be.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,be.depth,Ae,Fe,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,be.depth,0,Ae,Fe,Pe.data)}else{X&&Re&&i.texStorage2D(r.TEXTURE_2D,Ie,He,lt[0].width,lt[0].height);for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],T.format!==Mi?Ae!==null?X?we&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data)}else if(T.isDataArrayTexture)if(X){if(Re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,be.width,be.height,be.depth),we)if(T.layerUpdates.size>0){const Te=Rv(be.width,be.height,T.format,T.type);for(const pe of T.layerUpdates){const Ge=be.data.subarray(pe*Te/be.data.BYTES_PER_ELEMENT,(pe+1)*Te/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,be.width,be.height,1,Ae,Fe,Ge)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ae,Fe,be.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,be.width,be.height,be.depth,0,Ae,Fe,be.data);else if(T.isData3DTexture)X?(Re&&i.texStorage3D(r.TEXTURE_3D,Ie,He,be.width,be.height,be.depth),we&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ae,Fe,be.data)):i.texImage3D(r.TEXTURE_3D,0,He,be.width,be.height,be.depth,0,Ae,Fe,be.data);else if(T.isFramebufferTexture){if(Re)if(X)i.texStorage2D(r.TEXTURE_2D,Ie,He,be.width,be.height);else{let Te=be.width,pe=be.height;for(let Ge=0;Ge<Ie;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,He,Te,pe,0,Ae,Fe,null),Te>>=1,pe>>=1}}else if(lt.length>0){if(X&&Re){const Te=je(lt[0]);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],X?we&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae,Fe,Pe):i.texImage2D(r.TEXTURE_2D,Te,He,Ae,Fe,Pe);T.generateMipmaps=!1}else if(X){if(Re){const Te=je(be);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}we&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Fe,be)}else i.texImage2D(r.TEXTURE_2D,0,He,Ae,Fe,be);y(T)&&x(me),Le.__version=fe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ee(P,T,W){if(T.image.length!==6)return;const me=Se(P,T),_e=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);const fe=s.get(_e);if(_e.version!==fe.__version||me===!0){i.activeTexture(r.TEXTURE0+W);const Le=Mt.getPrimaries(Mt.workingColorSpace),Ce=T.colorSpace===is?null:Mt.getPrimaries(T.colorSpace),Ze=T.colorSpace===is||Le===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const et=T.isCompressedTexture||T.image[0].isCompressedTexture,be=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!et&&!be?Ae[pe]=C(T.image[pe],!0,l.maxCubemapSize):Ae[pe]=be?T.image[pe].image:T.image[pe],Ae[pe]=wt(T,Ae[pe]);const Fe=Ae[0],He=c.convert(T.format,T.colorSpace),Pe=c.convert(T.type),lt=D(T.internalFormat,He,Pe,T.colorSpace),X=T.isVideoTexture!==!0,Re=fe.__version===void 0||me===!0,we=_e.dataReady;let Ie=F(T,Fe);ue(r.TEXTURE_CUBE_MAP,T);let Te;if(et){X&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,lt,Fe.width,Fe.height);for(let pe=0;pe<6;pe++){Te=Ae[pe].mipmaps;for(let Ge=0;Ge<Te.length;Ge++){const nt=Te[Ge];T.format!==Mi?He!==null?X?we&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,nt.width,nt.height,He,nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,lt,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,nt.width,nt.height,He,Pe,nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,lt,nt.width,nt.height,0,He,Pe,nt.data)}}}else{if(Te=T.mipmaps,X&&Re){Te.length>0&&Ie++;const pe=je(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(be){X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,He,Pe,Ae[pe].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Ae[pe].width,Ae[pe].height,0,He,Pe,Ae[pe].data);for(let Ge=0;Ge<Te.length;Ge++){const Dt=Te[Ge].image[pe].image;X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Dt.width,Dt.height,He,Pe,Dt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,lt,Dt.width,Dt.height,0,He,Pe,Dt.data)}}else{X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,He,Pe,Ae[pe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,He,Pe,Ae[pe]);for(let Ge=0;Ge<Te.length;Ge++){const nt=Te[Ge];X?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,He,Pe,nt.image[pe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,lt,He,Pe,nt.image[pe])}}}y(T)&&x(r.TEXTURE_CUBE_MAP),fe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Me(P,T,W,me,_e,fe){const Le=c.convert(W.format,W.colorSpace),Ce=c.convert(W.type),Ze=D(W.internalFormat,Le,Ce,W.colorSpace),et=s.get(T),be=s.get(W);if(be.__renderTarget=T,!et.__hasExternalTextures){const Ae=Math.max(1,T.width>>fe),Fe=Math.max(1,T.height>>fe);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?i.texImage3D(_e,fe,Ze,Ae,Fe,T.depth,0,Le,Ce,null):i.texImage2D(_e,fe,Ze,Ae,Fe,0,Le,Ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Yt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,_e,be.__webglTexture,0,k(T)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,_e,be.__webglTexture,fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(P,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const me=T.depthTexture,_e=me&&me.isDepthTexture?me.type:null,fe=L(T.stencilBuffer,_e),Le=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Yt(T)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),fe,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,P)}else{const me=T.textures;for(let _e=0;_e<me.length;_e++){const fe=me[_e],Le=c.convert(fe.format,fe.colorSpace),Ce=c.convert(fe.type),Ze=D(fe.internalFormat,Le,Ce,fe.colorSpace);Yt(T)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),Ze,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),Ze,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(P,T,W){const me=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(T.depthTexture);if(_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,T.depthTexture.addEventListener("dispose",H)),_e.__webglTexture===void 0){_e.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),ue(r.TEXTURE_CUBE_MAP,T.depthTexture);const et=c.convert(T.depthTexture.format),be=c.convert(T.depthTexture.type);let Ae;T.depthTexture.format===Ma?Ae=r.DEPTH_COMPONENT24:T.depthTexture.format===Os&&(Ae=r.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,T.width,T.height,0,et,be,null)}}else J(T.depthTexture,0);const fe=_e.__webglTexture,Le=k(T),Ce=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Ze=T.depthTexture.format===Os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ma)Yt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ce,fe,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ce,fe,0);else if(T.depthTexture.format===Os)Yt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ce,fe,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ce,fe,0);else throw new Error("Unknown depthTexture format")}function $e(P){const T=s.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=me}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let me=0;me<6;me++)Ke(T.__webglFramebuffer[me],P,me);else{const me=P.texture.mipmaps;me&&me.length>0?Ke(T.__webglFramebuffer[0],P,0):Ke(T.__webglFramebuffer,P,0)}else if(W){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=r.createRenderbuffer(),Je(T.__webglDepthbuffer[me],P,!1);else{const _e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,fe)}}else{const me=P.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Je(T.__webglDepthbuffer,P,!1);else{const _e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(P,T,W){const me=s.get(P);T!==void 0&&Me(me.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&$e(P)}function pt(P){const T=P.texture,W=s.get(P),me=s.get(T);P.addEventListener("dispose",V);const _e=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Le=_e.length>1;if(Le||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=T.version,f.memory.textures++),fe){W.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Ce]=[];for(let Ze=0;Ze<T.mipmaps.length;Ze++)W.__webglFramebuffer[Ce][Ze]=r.createFramebuffer()}else W.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)W.__webglFramebuffer[Ce]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Le)for(let Ce=0,Ze=_e.length;Ce<Ze;Ce++){const et=s.get(_e[Ce]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Yt(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ze=_e[Ce];W.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ce]);const et=c.convert(Ze.format,Ze.colorSpace),be=c.convert(Ze.type),Ae=D(Ze.internalFormat,et,be,Ze.colorSpace,P.isXRRenderTarget===!0),Fe=k(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Ae,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ue(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)Me(W.__webglFramebuffer[Ce][Ze],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ze);else Me(W.__webglFramebuffer[Ce],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let Ce=0,Ze=_e.length;Ce<Ze;Ce++){const et=_e[Ce],be=s.get(et);let Ae=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,be.__webglTexture),ue(Ae,et),Me(W.__webglFramebuffer,P,et,r.COLOR_ATTACHMENT0+Ce,Ae,0),y(et)&&x(Ae)}i.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,me.__webglTexture),ue(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)Me(W.__webglFramebuffer[Ze],P,T,r.COLOR_ATTACHMENT0,Ce,Ze);else Me(W.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Ce,0);y(T)&&x(Ce),i.unbindTexture()}P.depthBuffer&&$e(P)}function St(P){const T=P.textures;for(let W=0,me=T.length;W<me;W++){const _e=T[W];if(y(_e)){const fe=N(P),Le=s.get(_e).__webglTexture;i.bindTexture(fe,Le),x(fe),i.unbindTexture()}}}const Ot=[],ot=[];function bt(P){if(P.samples>0){if(Yt(P)===!1){const T=P.textures,W=P.width,me=P.height;let _e=r.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(P),Ce=T.length>1;if(Ce)for(let et=0;et<T.length;et++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ze=P.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let et=0;et<T.length;et++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[et]);const be=s.get(T[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,W,me,0,0,W,me,_e,r.NEAREST),g===!0&&(Ot.length=0,ot.length=0,Ot.push(r.COLOR_ATTACHMENT0+et),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ot.push(fe),ot.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let et=0;et<T.length;et++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Le.__webglColorRenderbuffer[et]);const be=s.get(T[et]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&g){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function k(P){return Math.min(l.maxSamples,P.samples)}function Yt(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(P){const T=f.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function wt(P,T){const W=P.colorSpace,me=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Fr&&W!==is&&(Mt.getTransfer(W)===Ft?(me!==Mi||_e!==ui)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),T}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=te,this.setTexture2D=J,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=ce,this.rebindTextures=Jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function RC(r,e){function i(s,l=is){let c;const f=Mt.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===np)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ip)return r.UNSIGNED_SHORT_5_5_5_1;if(s===w_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===R_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===T_)return r.BYTE;if(s===A_)return r.SHORT;if(s===Qo)return r.UNSIGNED_SHORT;if(s===tp)return r.INT;if(s===Gi)return r.UNSIGNED_INT;if(s===Pi)return r.FLOAT;if(s===ya)return r.HALF_FLOAT;if(s===C_)return r.ALPHA;if(s===N_)return r.RGB;if(s===Mi)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Os)return r.DEPTH_STENCIL;if(s===D_)return r.RED;if(s===ap)return r.RED_INTEGER;if(s===Ir)return r.RG;if(s===sp)return r.RG_INTEGER;if(s===rp)return r.RGBA_INTEGER;if(s===qc||s===Yc||s===Zc||s===Kc)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hh||s===ph||s===mh||s===gh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vh||s===_h||s===xh||s===Sh||s===yh||s===Mh||s===bh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===vh||s===_h)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Sh)return c.COMPRESSED_R11_EAC;if(s===yh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Mh)return c.COMPRESSED_RG11_EAC;if(s===bh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Eh||s===Th||s===Ah||s===wh||s===Rh||s===Ch||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh||s===Ph||s===Ih||s===Fh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Eh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Th)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ah)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ch)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Oh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ph)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ih)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bh||s===zh||s===Hh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Bh)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Gh||s===Vh||s===kh||s===jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Gh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const CC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NC=`
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

}`;class DC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new G_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new bi({vertexShader:CC,fragmentShader:NC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new rl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UC extends Gr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,m="local-floor",g=1,h=null,_=null,S=null,v=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new DC,x={},N=i.getContextAttributes();let D=null,L=null;const F=[],H=[],V=new Lt;let A=null;const U=new Si;U.viewport=new on;const he=new Si;he.viewport=new on;const G=[U,he],te=new kT;let ae=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Ee=F[$];return Ee===void 0&&(Ee=new Dd,F[$]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function($){let Ee=F[$];return Ee===void 0&&(Ee=new Dd,F[$]=Ee),Ee.getGripSpace()},this.getHand=function($){let Ee=F[$];return Ee===void 0&&(Ee=new Dd,F[$]=Ee),Ee.getHandSpace()};function J($){const Ee=H.indexOf($.inputSource);if(Ee===-1)return;const Me=F[Ee];Me!==void 0&&(Me.update($.inputSource,$.frame,h||f),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",z);for(let $=0;$<F.length;$++){const Ee=H[$];Ee!==null&&(H[$]=null,F[$].disconnect(Ee))}ae=null,de=null,y.reset();for(const $ in x)delete x[$];e.setRenderTarget(D),M=null,v=null,S=null,l=null,L=null,qe.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){m=$,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",I),l.addEventListener("inputsourceschange",z),N.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(V),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Je=null,Ke=null;N.depth&&(Ke=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=N.stencil?Os:Ma,Je=N.stencil?Jo:Gi);const $e={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};S=this.getBinding(),v=S.createProjectionLayer($e),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Bi(v.textureWidth,v.textureHeight,{format:Mi,type:ui,depthTexture:new $o(v.textureWidth,v.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Bi(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(g),h=null,f=await l.requestReferenceSpace(m),qe.setContext(l),qe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z($){for(let Ee=0;Ee<$.removed.length;Ee++){const Me=$.removed[Ee],Je=H.indexOf(Me);Je>=0&&(H[Je]=null,F[Je].disconnect(Me))}for(let Ee=0;Ee<$.added.length;Ee++){const Me=$.added[Ee];let Je=H.indexOf(Me);if(Je===-1){for(let $e=0;$e<F.length;$e++)if($e>=H.length){H.push(Me),Je=$e;break}else if(H[$e]===null){H[$e]=Me,Je=$e;break}if(Je===-1)break}const Ke=F[Je];Ke&&Ke.connect(Me)}}const ce=new le,ve=new le;function O($,Ee,Me){ce.setFromMatrixPosition(Ee.matrixWorld),ve.setFromMatrixPosition(Me.matrixWorld);const Je=ce.distanceTo(ve),Ke=Ee.projectionMatrix.elements,$e=Me.projectionMatrix.elements,Jt=Ke[14]/(Ke[10]-1),pt=Ke[14]/(Ke[10]+1),St=(Ke[9]+1)/Ke[5],Ot=(Ke[9]-1)/Ke[5],ot=(Ke[8]-1)/Ke[0],bt=($e[8]+1)/$e[0],k=Jt*ot,Yt=Jt*bt,yt=Je/(-ot+bt),wt=yt*-ot;if(Ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(wt),$.translateZ(yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ke[10]===-1)$.projectionMatrix.copy(Ee.projectionMatrix),$.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const je=Jt+yt,P=pt+yt,T=k-wt,W=Yt+(Je-wt),me=St*pt/P*je,_e=Ot*pt/P*je;$.projectionMatrix.makePerspective(T,W,me,_e,je,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,Ee){Ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let Ee=$.near,Me=$.far;y.texture!==null&&(y.depthNear>0&&(Ee=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),te.near=he.near=U.near=Ee,te.far=he.far=U.far=Me,(ae!==te.near||de!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ae=te.near,de=te.far),te.layers.mask=$.layers.mask|6,U.layers.mask=te.layers.mask&-5,he.layers.mask=te.layers.mask&-3;const Je=$.parent,Ke=te.cameras;Z(te,Je);for(let $e=0;$e<Ke.length;$e++)Z(Ke[$e],Je);Ke.length===2?O(te,U,he):te.projectionMatrix.copy(U.projectionMatrix),ue($,te,Je)};function ue($,Ee,Me){Me===null?$.matrix.copy(Ee.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(Ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Ee.projectionMatrix),$.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(v===null&&M===null))return g},this.setFoveation=function($){g=$,v!==null&&(v.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function($){return x[$]};let Se=null;function Ue($,Ee){if(_=Ee.getViewerPose(h||f),b=Ee,_!==null){const Me=_.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Je=!1;Me.length!==te.cameras.length&&(te.cameras.length=0,Je=!0);for(let pt=0;pt<Me.length;pt++){const St=Me[pt];let Ot=null;if(M!==null)Ot=M.getViewport(St);else{const bt=S.getViewSubImage(v,St);Ot=bt.viewport,pt===0&&(e.setRenderTargetTextures(L,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(L))}let ot=G[pt];ot===void 0&&(ot=new Si,ot.layers.enable(pt),ot.viewport=new on,G[pt]=ot),ot.matrix.fromArray(St.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(St.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),pt===0&&(te.matrix.copy(ot.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Je===!0&&te.cameras.push(ot)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const pt=S.getDepthInformation(Me[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let pt=0;pt<Me.length;pt++){const St=Me[pt].camera;if(St){let Ot=x[St];Ot||(Ot=new G_,x[St]=Ot);const ot=S.getCameraImage(St);Ot.sourceTexture=ot}}}}for(let Me=0;Me<F.length;Me++){const Je=H[Me],Ke=F[Me];Je!==null&&Ke!==void 0&&Ke.update(Je,Ee,h||f)}Se&&Se($,Ee),Ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Ee}),b=null}const qe=new j_;qe.setAnimationLoop(Ue),this.setAnimationLoop=function($){Se=$},this.dispose=function(){}}}const Cs=new ba,LC=new fn;function OC(r,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,V_(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,N,D,L){x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),S(y,x)):x.isMeshPhongMaterial?(c(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&M(y,x,L)):x.isMeshMatcapMaterial?(c(y,x),b(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&m(y,x)):x.isPointsMaterial?g(y,x,N,D):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const N=e.get(x),D=N.envMap,L=N.envMapRotation;D&&(y.envMap.value=D,Cs.copy(L),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),y.envMapRotation.value.setFromMatrix4(LC.makeRotationFromEuler(Cs)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function m(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function g(y,x,N,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*N,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function S(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,N){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const N=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function PC(r,e,i,s){let l={},c={},f=[];const m=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,D){const L=D.program;s.uniformBlockBinding(N,L)}function h(N,D){let L=l[N.id];L===void 0&&(b(N),L=_(N),l[N.id]=L,N.addEventListener("dispose",y));const F=D.program;s.updateUBOMapping(N,F);const H=e.render.frame;c[N.id]!==H&&(v(N),c[N.id]=H)}function _(N){const D=S();N.__bindingPointIndex=D;const L=r.createBuffer(),F=N.__size,H=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,F,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,L),L}function S(){for(let N=0;N<m;N++)if(f.indexOf(N)===-1)return f.push(N),N;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const D=l[N.id],L=N.uniforms,F=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let H=0,V=L.length;H<V;H++){const A=Array.isArray(L[H])?L[H]:[L[H]];for(let U=0,he=A.length;U<he;U++){const G=A[U];if(M(G,H,U,F)===!0){const te=G.__offset,ae=Array.isArray(G.value)?G.value:[G.value];let de=0;for(let J=0;J<ae.length;J++){const I=ae[J],z=C(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,te+de,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,de),de+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,D,L,F){const H=N.value,V=D+"_"+L;if(F[V]===void 0)return typeof H=="number"||typeof H=="boolean"?F[V]=H:F[V]=H.clone(),!0;{const A=F[V];if(typeof H=="number"||typeof H=="boolean"){if(A!==H)return F[V]=H,!0}else if(A.equals(H)===!1)return A.copy(H),!0}return!1}function b(N){const D=N.uniforms;let L=0;const F=16;for(let V=0,A=D.length;V<A;V++){const U=Array.isArray(D[V])?D[V]:[D[V]];for(let he=0,G=U.length;he<G;he++){const te=U[he],ae=Array.isArray(te.value)?te.value:[te.value];for(let de=0,J=ae.length;de<J;de++){const I=ae[de],z=C(I),ce=L%F,ve=ce%z.boundary,O=ce+ve;L+=ve,O!==0&&F-O<z.storage&&(L+=F-O),te.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=L,L+=z.storage}}}const H=L%F;return H>0&&(L+=F-H),N.__size=L,N.__cache={},this}function C(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",N),D}function y(N){const D=N.target;D.removeEventListener("dispose",y);const L=f.indexOf(D.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:g,update:h,dispose:x}}const IC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function FC(){return Li===null&&(Li=new NT(IC,16,16,Ir,ya),Li.name="DFG_LUT",Li.minFilter=Dn,Li.magFilter=Dn,Li.wrapS=ma,Li.wrapT=ma,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class BC{constructor(e={}){const{canvas:i=rT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:v=!1,outputBufferType:M=ui}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const C=M,y=new Set([rp,sp,ap]),x=new Set([ui,Gi,Qo,Jo,np,ip]),N=new Uint32Array(4),D=new Int32Array(4);let L=null,F=null;const H=[],V=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let he=!1;this._outputColorSpace=ci;let G=0,te=0,ae=null,de=-1,J=null;const I=new on,z=new on;let ce=null;const ve=new Gt(0);let O=0,Z=i.width,ue=i.height,Se=1,Ue=null,qe=null;const $=new on(0,0,Z,ue),Ee=new on(0,0,Z,ue);let Me=!1;const Je=new z_;let Ke=!1,$e=!1;const Jt=new fn,pt=new le,St=new on,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function bt(){return ae===null?Se:1}let k=s;function Yt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ep}`),i.addEventListener("webglcontextlost",Ge,!1),i.addEventListener("webglcontextrestored",nt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),k===null){const q="webgl2";if(k=Yt(q,R),k===null)throw Yt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw At("WebGLRenderer: "+R.message),R}let yt,wt,je,P,T,W,me,_e,fe,Le,Ce,Ze,et,be,Ae,Fe,He,Pe,lt,X,Re,we,Ie;function Te(){yt=new Bw(k),yt.init(),Re=new RC(k,yt),wt=new Nw(k,yt,e,Re),je=new AC(k,yt),wt.reversedDepthBuffer&&v&&je.buffers.depth.setReversed(!0),P=new Gw(k),T=new dC,W=new wC(k,yt,je,T,wt,Re,P),me=new Fw(U),_e=new WT(k),we=new Rw(k,_e),fe=new zw(k,_e,P,we),Le=new kw(k,fe,_e,we,P),Pe=new Vw(k,wt,W),Ae=new Dw(T),Ce=new fC(U,me,yt,wt,we,Ae),Ze=new OC(U,T),et=new pC,be=new SC(yt),He=new ww(U,me,je,Le,b,g),Fe=new TC(U,Le,wt),Ie=new PC(k,P,wt,je),lt=new Cw(k,yt,P),X=new Hw(k,yt,P),P.programs=Ce.programs,U.capabilities=wt,U.extensions=yt,U.properties=T,U.renderLists=et,U.shadowMap=Fe,U.state=je,U.info=P}Te(),C!==ui&&(A=new Xw(C,i.width,i.height,l,c));const pe=new UC(U,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(R){R!==void 0&&(Se=R,this.setSize(Z,ue,!1))},this.getSize=function(R){return R.set(Z,ue)},this.setSize=function(R,q,oe=!0){if(pe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,ue=q,i.width=Math.floor(R*Se),i.height=Math.floor(q*Se),oe===!0&&(i.style.width=R+"px",i.style.height=q+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Z*Se,ue*Se).floor()},this.setDrawingBufferSize=function(R,q,oe){Z=R,ue=q,Se=oe,i.width=Math.floor(R*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,q,oe,ne){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,oe,ne),je.viewport(I.copy($).multiplyScalar(Se).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,q,oe,ne){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,q,oe,ne),je.scissor(z.copy(Ee).multiplyScalar(Se).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){je.setScissorTest(Me=R)},this.setOpaqueSort=function(R){Ue=R},this.setTransparentSort=function(R){qe=R},this.getClearColor=function(R){return R.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,oe=!0){let ne=0;if(R){let K=!1;if(ae!==null){const De=ae.texture.format;K=y.has(De)}if(K){const De=ae.texture.type,Be=x.has(De),Ne=He.getClearColor(),Ve=He.getClearAlpha(),Xe=Ne.r,st=Ne.g,rt=Ne.b;Be?(N[0]=Xe,N[1]=st,N[2]=rt,N[3]=Ve,k.clearBufferuiv(k.COLOR,0,N)):(D[0]=Xe,D[1]=st,D[2]=rt,D[3]=Ve,k.clearBufferiv(k.COLOR,0,D))}else ne|=k.COLOR_BUFFER_BIT}q&&(ne|=k.DEPTH_BUFFER_BIT),oe&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ge,!1),i.removeEventListener("webglcontextrestored",nt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),He.dispose(),et.dispose(),be.dispose(),T.dispose(),me.dispose(),Le.dispose(),we.dispose(),Ie.dispose(),Ce.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Fs),pe.removeEventListener("sessionend",ol),ji.stop()};function Ge(R){R.preventDefault(),fv("WebGLRenderer: Context Lost."),he=!0}function nt(){fv("WebGLRenderer: Context Restored."),he=!1;const R=P.autoReset,q=Fe.enabled,oe=Fe.autoUpdate,ne=Fe.needsUpdate,K=Fe.type;Te(),P.autoReset=R,Fe.enabled=q,Fe.autoUpdate=oe,Fe.needsUpdate=ne,Fe.type=K}function Dt(R){At("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){const q=R.target;q.removeEventListener("dispose",Et),fi(q)}function fi(R){vn(R),T.remove(R)}function vn(R){const q=T.get(R).programs;q!==void 0&&(q.forEach(function(oe){Ce.releaseProgram(oe)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,oe,ne,K,De){q===null&&(q=Ot);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Ne=ll(R,q,oe,ne,K);je.setMaterial(ne,Be);let Ve=oe.index,Xe=1;if(ne.wireframe===!0){if(Ve=fe.getWireframeAttribute(oe),Ve===void 0)return;Xe=2}const st=oe.drawRange,rt=oe.attributes.position;let ze=st.start*Xe,Rt=(st.start+st.count)*Xe;De!==null&&(ze=Math.max(ze,De.start*Xe),Rt=Math.min(Rt,(De.start+De.count)*Xe)),Ve!==null?(ze=Math.max(ze,0),Rt=Math.min(Rt,Ve.count)):rt!=null&&(ze=Math.max(ze,0),Rt=Math.min(Rt,rt.count));const Zt=Rt-ze;if(Zt<0||Zt===1/0)return;we.setup(K,ne,Ne,oe,Ve);let Vt,Ct=lt;if(Ve!==null&&(Vt=_e.get(Ve),Ct=X,Ct.setIndex(Vt)),K.isMesh)ne.wireframe===!0?(je.setLineWidth(ne.wireframeLinewidth*bt()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(K.isLine){let nn=ne.linewidth;nn===void 0&&(nn=1),je.setLineWidth(nn*bt()),K.isLineSegments?Ct.setMode(k.LINES):K.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else K.isPoints?Ct.setMode(k.POINTS):K.isSprite&&Ct.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)nu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const nn=K._multiDrawStarts,We=K._multiDrawCounts,jt=K._multiDrawCount,vt=Ve?_e.get(Ve).bytesPerElement:1,Pn=T.get(ne).currentProgram.getUniforms();for(let In=0;In<jt;In++)Pn.setValue(k,"_gl_DrawID",In),Ct.render(nn[In]/vt,We[In])}else if(K.isInstancedMesh)Ct.renderInstances(ze,Zt,K.count);else if(oe.isInstancedBufferGeometry){const nn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,We=Math.min(oe.instanceCount,nn);Ct.renderInstances(ze,Zt,We)}else Ct.render(ze,Zt)};function dn(R,q,oe){R.transparent===!0&&R.side===pa&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Ei(R,q,oe),R.side=ss,R.needsUpdate=!0,Ei(R,q,oe),R.side=pa):Ei(R,q,oe)}this.compile=function(R,q,oe=null){oe===null&&(oe=R),F=be.get(oe),F.init(q),V.push(F),oe.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),R!==oe&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),F.setupLights();const ne=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const De=K.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Ne=De[Be];dn(Ne,oe,K),ne.add(Ne)}else dn(De,oe,K),ne.add(De)}),F=V.pop(),ne},this.compileAsync=function(R,q,oe=null){const ne=this.compile(R,q,oe);return new Promise(K=>{function De(){if(ne.forEach(function(Be){T.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){K(R);return}setTimeout(De,10)}yt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let _n=null;function Aa(R){_n&&_n(R)}function Fs(){ji.stop()}function ol(){ji.start()}const ji=new j_;ji.setAnimationLoop(Aa),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(R){_n=R,pe.setAnimationLoop(R),R===null?ji.stop():ji.start()},pe.addEventListener("sessionstart",Fs),pe.addEventListener("sessionend",ol),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(he===!0)return;const oe=pe.enabled===!0&&pe.isPresenting===!0,ne=A!==null&&(ae===null||oe)&&A.begin(U,ae);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(q),q=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,ae),F=be.get(R,V.length),F.init(q),V.push(F),Jt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Je.setFromProjectionMatrix(Jt,Ii,q.reversedDepth),$e=this.localClippingEnabled,Ke=Ae.init(this.clippingPlanes,$e),L=et.get(R,H.length),L.init(),H.push(L),pe.enabled===!0&&pe.isPresenting===!0){const Be=U.xr.getDepthSensingMesh();Be!==null&&Bs(Be,q,-1/0,U.sortObjects)}Bs(R,q,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(Ue,qe),ot=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ot&&He.addToRenderList(L,R),this.info.render.frame++,Ke===!0&&Ae.beginShadows();const K=F.state.shadowsArray;if(Fe.render(K,R,q),Ke===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&A.hasRenderPass())===!1){const Be=L.opaque,Ne=L.transmissive;if(F.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(Ne.length>0)for(let Xe=0,st=Ve.length;Xe<st;Xe++){const rt=Ve[Xe];zs(Be,Ne,R,rt)}ot&&He.render(R);for(let Xe=0,st=Ve.length;Xe<st;Xe++){const rt=Ve[Xe];wa(L,R,rt,rt.viewport)}}else Ne.length>0&&zs(Be,Ne,R,q),ot&&He.render(R),wa(L,R,q)}ae!==null&&te===0&&(W.updateMultisampleRenderTarget(ae),W.updateRenderTargetMipmap(ae)),ne&&A.end(U),R.isScene===!0&&R.onAfterRender(U,R,q),we.resetDefaultState(),de=-1,J=null,V.pop(),V.length>0?(F=V[V.length-1],Ke===!0&&Ae.setGlobalState(U.clippingPlanes,F.state.camera)):F=null,H.pop(),H.length>0?L=H[H.length-1]:L=null};function Bs(R,q,oe,ne){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Je.intersectsSprite(R)){ne&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Jt);const Be=Le.update(R),Ne=R.material;Ne.visible&&L.push(R,Be,Ne,oe,St.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Je.intersectsObject(R))){const Be=Le.update(R),Ne=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),St.copy(Be.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ne)){const Ve=Be.groups;for(let Xe=0,st=Ve.length;Xe<st;Xe++){const rt=Ve[Xe],ze=Ne[rt.materialIndex];ze&&ze.visible&&L.push(R,Be,ze,oe,St.z,rt)}}else Ne.visible&&L.push(R,Be,Ne,oe,St.z,null)}}const De=R.children;for(let Be=0,Ne=De.length;Be<Ne;Be++)Bs(De[Be],q,oe,ne)}function wa(R,q,oe,ne){const{opaque:K,transmissive:De,transparent:Be}=R;F.setupLightsView(oe),Ke===!0&&Ae.setGlobalState(U.clippingPlanes,oe),ne&&je.viewport(I.copy(ne)),K.length>0&&di(K,q,oe),De.length>0&&di(De,q,oe),Be.length>0&&di(Be,q,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function zs(R,q,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ne.id]===void 0){const ze=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ne.id]=new Bi(1,1,{generateMipmaps:!0,type:ze?ya:ui,minFilter:Ls,samples:Math.max(4,wt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const De=F.state.transmissionRenderTarget[ne.id],Be=ne.viewport||I;De.setSize(Be.z*U.transmissionResolutionScale,Be.w*U.transmissionResolutionScale);const Ne=U.getRenderTarget(),Ve=U.getActiveCubeFace(),Xe=U.getActiveMipmapLevel();U.setRenderTarget(De),U.getClearColor(ve),O=U.getClearAlpha(),O<1&&U.setClearColor(16777215,.5),U.clear(),ot&&He.render(oe);const st=U.toneMapping;U.toneMapping=Fi;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),F.setupLightsView(ne),Ke===!0&&Ae.setGlobalState(U.clippingPlanes,ne),di(R,oe,ne),W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De),yt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Rt=0,Zt=q.length;Rt<Zt;Rt++){const Vt=q[Rt],{object:Ct,geometry:nn,material:We,group:jt}=Vt;if(We.side===pa&&Ct.layers.test(ne.layers)){const vt=We.side;We.side=kn,We.needsUpdate=!0,Xi(Ct,oe,ne,nn,We,jt),We.side=vt,We.needsUpdate=!0,ze=!0}}ze===!0&&(W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De))}U.setRenderTarget(Ne,Ve,Xe),U.setClearColor(ve,O),rt!==void 0&&(ne.viewport=rt),U.toneMapping=st}function di(R,q,oe){const ne=q.isScene===!0?q.overrideMaterial:null;for(let K=0,De=R.length;K<De;K++){const Be=R[K],{object:Ne,geometry:Ve,group:Xe}=Be;let st=Be.material;st.allowOverride===!0&&ne!==null&&(st=ne),Ne.layers.test(oe.layers)&&Xi(Ne,q,oe,Ve,st,Xe)}}function Xi(R,q,oe,ne,K,De){R.onBeforeRender(U,q,oe,ne,K,De),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,q,oe,ne,R,De),K.transparent===!0&&K.side===pa&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,U.renderBufferDirect(oe,q,ne,K,R,De),K.side=ss,K.needsUpdate=!0,U.renderBufferDirect(oe,q,ne,K,R,De),K.side=pa):U.renderBufferDirect(oe,q,ne,K,R,De),R.onAfterRender(U,q,oe,ne,K,De)}function Ei(R,q,oe){q.isScene!==!0&&(q=Ot);const ne=T.get(R),K=F.state.lights,De=F.state.shadowsArray,Be=K.state.version,Ne=Ce.getParameters(R,K.state,De,q,oe),Ve=Ce.getProgramCacheKey(Ne);let Xe=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const st=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=me.get(R.envMap||ne.environment,st),ne.envMapRotation=ne.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Et),Xe=new Map,ne.programs=Xe);let rt=Xe.get(Ve);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Be)return tn(R,Ne),rt}else Ne.uniforms=Ce.getUniforms(R),R.onBeforeCompile(Ne,U),rt=Ce.acquireProgram(Ne,Ve),Xe.set(Ve,rt),ne.uniforms=Ne.uniforms;const ze=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),tn(R,Ne),ne.needsLights=qi(R),ne.lightsStateVersion=Be,ne.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function Wi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Qc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function tn(R,q){const oe=T.get(R);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ll(R,q,oe,ne,K){q.isScene!==!0&&(q=Ot),W.resetTextureUnits();const De=q.fog,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ne=ae===null?U.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Fr,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Xe=me.get(ne.envMap||Be,Ve),st=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!oe.morphAttributes.position,Rt=!!oe.morphAttributes.normal,Zt=!!oe.morphAttributes.color;let Vt=Fi;ne.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Vt=U.toneMapping);const Ct=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,nn=Ct!==void 0?Ct.length:0,We=T.get(ne),jt=F.state.lights;if(Ke===!0&&($e===!0||R!==J)){const an=R===J&&ne.id===de;Ae.setState(ne,R,an)}let vt=!1;ne.version===We.__version?(We.needsLights&&We.lightsStateVersion!==jt.state.version||We.outputColorSpace!==Ne||K.isBatchedMesh&&We.batching===!1||!K.isBatchedMesh&&We.batching===!0||K.isBatchedMesh&&We.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&We.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||K.isInstancedMesh&&We.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&We.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&We.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&We.instancingMorph===!1&&K.morphTexture!==null||We.envMap!==Xe||ne.fog===!0&&We.fog!==De||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ae.numPlanes||We.numIntersection!==Ae.numIntersection)||We.vertexAlphas!==st||We.vertexTangents!==rt||We.morphTargets!==ze||We.morphNormals!==Rt||We.morphColors!==Zt||We.toneMapping!==Vt||We.morphTargetsCount!==nn)&&(vt=!0):(vt=!0,We.__version=ne.version);let Pn=We.currentProgram;vt===!0&&(Pn=Ei(ne,q,K));let In=!1,Fn=!1,Yi=!1;const Ut=Pn.getUniforms(),Wt=We.uniforms;if(je.useProgram(Pn.program)&&(In=!0,Fn=!0,Yi=!0),ne.id!==de&&(de=ne.id,Fn=!0),In||J!==R){je.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ut.setValue(k,"projectionMatrix",R.projectionMatrix),Ut.setValue(k,"viewMatrix",R.matrixWorldInverse);const hi=Ut.map.cameraPosition;hi!==void 0&&hi.setValue(k,pt.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,Fn=!0,Yi=!0)}if(We.needsLights&&(jt.state.directionalShadowMap.length>0&&Ut.setValue(k,"directionalShadowMap",jt.state.directionalShadowMap,W),jt.state.spotShadowMap.length>0&&Ut.setValue(k,"spotShadowMap",jt.state.spotShadowMap,W),jt.state.pointShadowMap.length>0&&Ut.setValue(k,"pointShadowMap",jt.state.pointShadowMap,W)),K.isSkinnedMesh){Ut.setOptional(k,K,"bindMatrix"),Ut.setOptional(k,K,"bindMatrixInverse");const an=K.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ut.setValue(k,"boneTexture",an.boneTexture,W))}K.isBatchedMesh&&(Ut.setOptional(k,K,"batchingTexture"),Ut.setValue(k,"batchingTexture",K._matricesTexture,W),Ut.setOptional(k,K,"batchingIdTexture"),Ut.setValue(k,"batchingIdTexture",K._indirectTexture,W),Ut.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Ut.setValue(k,"batchingColorTexture",K._colorsTexture,W));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Pe.update(K,oe,Pn),(Fn||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,Ut.setValue(k,"receiveShadow",K.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Wt.envMapIntensity.value=q.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=FC()),Fn&&(Ut.setValue(k,"toneMappingExposure",U.toneMappingExposure),We.needsLights&&cl(Wt,Yi),De&&ne.fog===!0&&Ze.refreshFogUniforms(Wt,De),Ze.refreshMaterialUniforms(Wt,ne,Se,ue,F.state.transmissionRenderTarget[R.id]),Qc.upload(k,Wi(We),Wt,W)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Qc.upload(k,Wi(We),Wt,W),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ut.setValue(k,"center",K.center),Ut.setValue(k,"modelViewMatrix",K.modelViewMatrix),Ut.setValue(k,"normalMatrix",K.normalMatrix),Ut.setValue(k,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const an=ne.uniformsGroups;for(let hi=0,Ai=an.length;hi<Ai;hi++){const fl=an[hi];Ie.update(fl,Pn),Ie.bind(fl,Pn)}}return Pn}function cl(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function qi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(R,q,oe){const ne=T.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=q,T.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const oe=T.get(R);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const Ra=k.createFramebuffer();this.setRenderTarget=function(R,q=0,oe=0){ae=R,G=q,te=oe;let ne=null,K=!1,De=!1;if(R){const Ne=T.get(R);if(Ne.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(k.FRAMEBUFFER,Ne.__webglFramebuffer),I.copy(R.viewport),z.copy(R.scissor),ce=R.scissorTest,je.viewport(I),je.scissor(z),je.setScissorTest(ce),de=-1;return}else if(Ne.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Ne.__hasExternalTextures)W.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const st=R.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&T.has(st)&&(R.width!==st.image.width||R.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const Xe=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?ne=Xe[q][oe]:ne=Xe[q],K=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?ne=T.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?ne=Xe[oe]:ne=Xe,I.copy(R.viewport),z.copy(R.scissor),ce=R.scissorTest}else I.copy($).multiplyScalar(Se).floor(),z.copy(Ee).multiplyScalar(Se).floor(),ce=Me;if(oe!==0&&(ne=Ra),je.bindFramebuffer(k.FRAMEBUFFER,ne)&&je.drawBuffers(R,ne),je.viewport(I),je.scissor(z),je.setScissorTest(ce),K){const Ne=T.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,oe)}else if(De){const Ne=q;for(let Ve=0;Ve<R.textures.length;Ve++){const Xe=T.get(R.textures[Ve]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,oe,Ne)}}else if(R!==null&&oe!==0){const Ne=T.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,oe)}de=-1},this.readRenderTargetPixels=function(R,q,oe,ne,K,De,Be,Ne=0){if(!(R&&R.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){je.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const Xe=R.textures[Ne],st=Xe.format,rt=Xe.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ne),!wt.textureFormatReadable(st)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(rt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ne&&oe>=0&&oe<=R.height-K&&k.readPixels(q,oe,ne,K,Re.convert(st),Re.convert(rt),De)}finally{const Xe=ae!==null?T.get(ae).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,q,oe,ne,K,De,Be,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve)if(q>=0&&q<=R.width-ne&&oe>=0&&oe<=R.height-K){je.bindFramebuffer(k.FRAMEBUFFER,Ve);const Xe=R.textures[Ne],st=Xe.format,rt=Xe.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ne),!wt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.bufferData(k.PIXEL_PACK_BUFFER,De.byteLength,k.STREAM_READ),k.readPixels(q,oe,ne,K,Re.convert(st),Re.convert(rt),0);const Rt=ae!==null?T.get(ae).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Rt);const Zt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await oT(k,Zt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,De),k.deleteBuffer(ze),k.deleteSync(Zt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,oe=0){const ne=Math.pow(2,-oe),K=Math.floor(R.image.width*ne),De=Math.floor(R.image.height*ne),Be=q!==null?q.x:0,Ne=q!==null?q.y:0;W.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,Be,Ne,K,De),je.unbindTexture()};const cu=k.createFramebuffer(),ul=k.createFramebuffer();this.copyTextureToTexture=function(R,q,oe=null,ne=null,K=0,De=0){let Be,Ne,Ve,Xe,st,rt,ze,Rt,Zt;const Vt=R.isCompressedTexture?R.mipmaps[De]:R.image;if(oe!==null)Be=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,st=oe.min.y,rt=oe.isBox3?oe.min.z:0;else{const Wt=Math.pow(2,-K);Be=Math.floor(Vt.width*Wt),Ne=Math.floor(Vt.height*Wt),R.isDataArrayTexture?Ve=Vt.depth:R.isData3DTexture?Ve=Math.floor(Vt.depth*Wt):Ve=1,Xe=0,st=0,rt=0}ne!==null?(ze=ne.x,Rt=ne.y,Zt=ne.z):(ze=0,Rt=0,Zt=0);const Ct=Re.convert(q.format),nn=Re.convert(q.type);let We;q.isData3DTexture?(W.setTexture3D(q,0),We=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),We=k.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),We=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const jt=k.getParameter(k.UNPACK_ROW_LENGTH),vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=k.getParameter(k.UNPACK_SKIP_PIXELS),In=k.getParameter(k.UNPACK_SKIP_ROWS),Fn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xe),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rt);const Yi=R.isDataArrayTexture||R.isData3DTexture,Ut=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Wt=T.get(R),Ti=T.get(q),an=T.get(Wt.__renderTarget),hi=T.get(Ti.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,an.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Ai=0;Ai<Ve;Ai++)Yi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(R).__webglTexture,K,rt+Ai),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(q).__webglTexture,De,Zt+Ai)),k.blitFramebuffer(Xe,st,Be,Ne,ze,Rt,Be,Ne,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||T.has(R)){const Wt=T.get(R),Ti=T.get(q);je.bindFramebuffer(k.READ_FRAMEBUFFER,cu),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,ul);for(let an=0;an<Ve;an++)Yi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.__webglTexture,K,rt+an):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wt.__webglTexture,K),Ut?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ti.__webglTexture,De,Zt+an):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ti.__webglTexture,De),K!==0?k.blitFramebuffer(Xe,st,Be,Ne,ze,Rt,Be,Ne,k.COLOR_BUFFER_BIT,k.NEAREST):Ut?k.copyTexSubImage3D(We,De,ze,Rt,Zt+an,Xe,st,Be,Ne):k.copyTexSubImage2D(We,De,ze,Rt,Xe,st,Be,Ne);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ut?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(We,De,ze,Rt,Zt,Be,Ne,Ve,Ct,nn,Vt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(We,De,ze,Rt,Zt,Be,Ne,Ve,Ct,Vt.data):k.texSubImage3D(We,De,ze,Rt,Zt,Be,Ne,Ve,Ct,nn,Vt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,De,ze,Rt,Be,Ne,Ct,nn,Vt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,De,ze,Rt,Vt.width,Vt.height,Ct,Vt.data):k.texSubImage2D(k.TEXTURE_2D,De,ze,Rt,Be,Ne,Ct,nn,Vt);k.pixelStorei(k.UNPACK_ROW_LENGTH,jt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,In),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Fn),De===0&&q.generateMipmaps&&k.generateMipmap(We),je.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){G=0,te=0,ae=null,je.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Mt._getUnpackColorSpace()}}const zC=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,HC=`
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
`;function GC(){const r=re.useRef(null);return re.useEffect(()=>{const e=r.current,i=window.innerWidth,s=window.innerHeight,l=new BC({antialias:!1,alpha:!0});l.setPixelRatio(1),l.setSize(i,s),l.setClearColor(0,0),e.appendChild(l.domElement);const c=new bT,f=new fp(-1,1,1,-1,0,1),m=C=>Math.max(4,Math.min(6,C/300)),g={uTime:{value:0},uGrainSize:{value:m(i)},uMouse:{value:new Lt(.5,.5)},uResolution:{value:new Lt(i,s)}},h=new bi({vertexShader:zC,fragmentShader:HC,uniforms:g,transparent:!0,depthWrite:!1});c.add(new Vi(new rl(2,2),h));const _=C=>{g.uMouse.value.set(C.clientX/window.innerWidth,1-C.clientY/window.innerHeight)};window.addEventListener("mousemove",_);const S=()=>{const C=window.innerWidth,y=window.innerHeight;l.setSize(C,y),g.uResolution.value.set(C,y),g.uGrainSize.value=m(C)};window.addEventListener("resize",S);let v;const M=new jT,b=()=>{v=requestAnimationFrame(b),g.uTime.value=M.getElapsedTime(),l.render(c,f)};return b(),()=>{cancelAnimationFrame(v),window.removeEventListener("mousemove",_),window.removeEventListener("resize",S),l.dispose(),h.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),p.jsx("div",{ref:r,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}function VC(){if(typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches)return null;const r=re.useRef(null),e=re.useRef(null);return re.useEffect(()=>{const i=r.current,s=e.current,l=m=>{i.style.left=m.clientX+"px",i.style.top=m.clientY+"px";const g=document.elementFromPoint(m.clientX,m.clientY);!!(g&&g.closest(".cursor-companies"))?(s.style.display="inline",i.style.padding="8px 14px",i.style.width="auto",i.style.height="auto",i.style.borderRadius="999px"):(s.style.display="none",i.style.padding="0",i.style.width="17px",i.style.height="17px",i.style.borderRadius="50%")},c=()=>{i.style.animation="none",i.offsetWidth,i.style.animation="dotShrink 0.38s cubic-bezier(0.22,1,0.36,1) forwards"},f=()=>{i.style.animation="none"};return window.addEventListener("mousemove",l),window.addEventListener("mousedown",c),i.addEventListener("animationend",f),()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mousedown",c),i.removeEventListener("animationend",f)}},[]),p.jsxs(p.Fragment,{children:[p.jsx("style",{children:`
        *, *::before, *::after { cursor: none !important; }

        @keyframes dotShrink {
          0%   { transform: translate(-50%, -50%) scale(1);    }
          30%  { transform: translate(-50%, -50%) scale(0.4);  }
          65%  { transform: translate(-50%, -50%) scale(1.15); }
          100% { transform: translate(-50%, -50%) scale(1);    }
        }
      `}),p.jsx("div",{ref:r,style:{position:"fixed",top:"-200px",left:"-200px",width:"17px",height:"17px",borderRadius:"50%",backgroundColor:"#000000",transform:"translate(-50%, -50%)",transition:"width 0.22s cubic-bezier(0.34,1.56,0.64,1), height 0.22s cubic-bezier(0.34,1.56,0.64,1), padding 0.22s cubic-bezier(0.34,1.56,0.64,1)",pointerEvents:"none",zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx("span",{ref:e,style:{display:"none",fontFamily:"'IBM Plex Mono', monospace",fontSize:"12px",fontWeight:500,letterSpacing:"0.08em",color:"#ffffff",whiteSpace:"nowrap",userSelect:"none"},children:"CHATGPT, NOTION, AND TYPEFORM!"})})]})}const kC="/assets/notion-nitu-D0HPhEhh.png",jC="/assets/clawd-logo-Bu_GsNtA.png",XC=["/work/searchneu","/work/wrap","/work/safehub","/work/chatgpt","/work/pogo","/work/pogo/sections","/writing","/writing/rejection","/work/chatgpt/article"];function WC(){const r=rs(),[e,i]=re.useState(r.pathname),[s,l]=re.useState("fade-in"),[c,f]=re.useState(!1);return re.useEffect(()=>{if(r.pathname!==e){l("fade-out");const m=setTimeout(()=>{i(r.pathname),l("fade-in")},180);return()=>clearTimeout(m)}},[r,e]),p.jsxs(p.Fragment,{children:[p.jsx(VC,{}),!XC.includes(r.pathname)&&p.jsx(GC,{}),p.jsxs("div",{className:`navbar${r.pathname==="/photos"?" navbar--solid":""}`,children:[p.jsxs("div",{className:"nav-links",children:[p.jsx(Xc,{to:"/",className:"nav-item",children:"WORK"}),p.jsx("span",{className:"nav-sep",children:"/"}),p.jsx(Xc,{to:"/about",className:"nav-item",children:"ABOUT"}),p.jsx("span",{className:"nav-sep",children:"/"}),p.jsx(Xc,{to:"/writing",className:"nav-item",children:"WRITING"})]}),p.jsx("img",{src:kC,alt:"",className:"navbar-notion-face cursor-notion"})]}),p.jsx("div",{className:`page-wrapper ${s}`,children:p.jsxs($y,{location:{pathname:e},children:[p.jsx($n,{path:"/",element:p.jsx(XM,{})}),p.jsx($n,{path:"/about",element:p.jsx(ZM,{})}),p.jsx($n,{path:"/work/searchneu",element:p.jsx(Cb,{})}),p.jsx($n,{path:"/work/wrap",element:p.jsx(Ub,{})}),p.jsx($n,{path:"/work/safehub",element:p.jsx(Vb,{})}),p.jsx($n,{path:"/work/chatgpt",element:p.jsx(aE,{})}),p.jsx($n,{path:"/photos",element:p.jsx(hb,{})}),p.jsx($n,{path:"/work/pogo",element:p.jsx(rE,{})}),p.jsx($n,{path:"/work/pogo/sections",element:p.jsx(hE,{})}),p.jsx($n,{path:"/writing",element:p.jsx(mE,{})}),p.jsx($n,{path:"/writing/rejection",element:p.jsx(vE,{})}),p.jsx($n,{path:"/work/chatgpt/article",element:p.jsx(TE,{})})]})}),p.jsx("footer",{className:"site-footer",style:r.pathname==="/photos"?{display:"none"}:{},children:p.jsxs("div",{className:"site-footer-content",children:[p.jsx("div",{className:"site-footer-made-block",children:p.jsxs("p",{className:"site-footer-madewith",children:["© 2026 Nitish Gannu. Made with"," ",p.jsx("a",{href:"https://www.anthropic.com/claude-code",target:"_blank",rel:"noopener noreferrer",className:"site-footer-clawd-link",children:p.jsx("img",{src:jC,alt:"Claude Code",className:"site-footer-clawd-logo"})})]})}),p.jsxs("div",{className:"site-footer-links-row",children:[p.jsx("a",{href:"https://www.linkedin.com/in/nitishgannu/",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"LINKEDIN"}),p.jsx("span",{className:"site-footer-sep",children:" / "}),p.jsx("a",{href:"https://medium.com/@nitishgannu",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"MEDIUM"}),p.jsx("span",{className:"site-footer-sep",children:" / "}),p.jsx("a",{href:"https://x.com/nitishgannu",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"X"})]})]})})]})}ly.createRoot(document.getElementById("root")).render(p.jsx(bM,{children:p.jsx(WC,{})}));

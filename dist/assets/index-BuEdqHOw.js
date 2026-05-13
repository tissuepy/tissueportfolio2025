(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Yv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cd={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function qS(){if(O0)return Io;O0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var P0;function YS(){return P0||(P0=1,cd.exports=qS()),cd.exports}var g=YS(),ud={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function ZS(){if(I0)return ct;I0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function y(O,Z,ue){this.props=O,this.context=Z,this.refs=C,this.updater=ue||M}y.prototype.isReactComponent={},y.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function N(O,Z,ue){this.props=O,this.context=Z,this.refs=C,this.updater=ue||M}var D=N.prototype=new x;D.constructor=N,E(D,y.prototype),D.isPureReactComponent=!0;var L=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function V(O,Z,ue,Se,Ue,qe){return ue=qe.ref,{$$typeof:r,type:O,key:Z,ref:ue!==void 0?ue:null,props:qe}}function A(O,Z){return V(O.type,Z,void 0,void 0,void 0,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function he(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ue){return Z[ue]})}var G=/\/+/g;function te(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?he(""+O.key):Z.toString(36)}function ae(){}function de(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ae,ae):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function J(O,Z,ue,Se,Ue){var qe=typeof O;(qe==="undefined"||qe==="boolean")&&(O=null);var $=!1;if(O===null)$=!0;else switch(qe){case"bigint":case"string":case"number":$=!0;break;case"object":switch(O.$$typeof){case r:case e:$=!0;break;case _:return $=O._init,J($(O._payload),Z,ue,Se,Ue)}}if($)return Ue=Ue(O),$=Se===""?"."+te(O,0):Se,L(Ue)?(ue="",$!=null&&(ue=$.replace(G,"$&/")+"/"),J(Ue,Z,ue,"",function(Je){return Je})):Ue!=null&&(U(Ue)&&(Ue=A(Ue,ue+(Ue.key==null||O&&O.key===Ue.key?"":(""+Ue.key).replace(G,"$&/")+"/")+$)),Z.push(Ue)),1;$=0;var be=Se===""?".":Se+":";if(L(O))for(var Me=0;Me<O.length;Me++)Se=O[Me],qe=be+te(Se,Me),$+=J(Se,Z,ue,qe,Ue);else if(Me=v(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(Se=O.next()).done;)Se=Se.value,qe=be+te(Se,Me++),$+=J(Se,Z,ue,qe,Ue);else if(qe==="object"){if(typeof O.then=="function")return J(de(O),Z,ue,Se,Ue);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return $}function I(O,Z,ue){if(O==null)return O;var Se=[],Ue=0;return J(O,Se,"","",function(qe){return Z.call(ue,qe,Ue++)}),Se}function z(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=ue)},function(ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=ue)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var ce=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ve(){}return ct.Children={map:I,forEach:function(O,Z,ue){I(O,function(){Z.apply(this,arguments)},ue)},count:function(O){var Z=0;return I(O,function(){Z++}),Z},toArray:function(O){return I(O,function(Z){return Z})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ct.Component=y,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=N,ct.StrictMode=s,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ct.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},ct.cache=function(O){return function(){return O.apply(null,arguments)}},ct.cloneElement=function(O,Z,ue){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Se=E({},O.props),Ue=O.key,qe=void 0;if(Z!=null)for($ in Z.ref!==void 0&&(qe=void 0),Z.key!==void 0&&(Ue=""+Z.key),Z)!H.call(Z,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&Z.ref===void 0||(Se[$]=Z[$]);var $=arguments.length-2;if($===1)Se.children=ue;else if(1<$){for(var be=Array($),Me=0;Me<$;Me++)be[Me]=arguments[Me+2];Se.children=be}return V(O.type,Ue,void 0,void 0,qe,Se)},ct.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ct.createElement=function(O,Z,ue){var Se,Ue={},qe=null;if(Z!=null)for(Se in Z.key!==void 0&&(qe=""+Z.key),Z)H.call(Z,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ue[Se]=Z[Se]);var $=arguments.length-2;if($===1)Ue.children=ue;else if(1<$){for(var be=Array($),Me=0;Me<$;Me++)be[Me]=arguments[Me+2];Ue.children=be}if(O&&O.defaultProps)for(Se in $=O.defaultProps,$)Ue[Se]===void 0&&(Ue[Se]=$[Se]);return V(O,qe,void 0,void 0,null,Ue)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(O){return{$$typeof:p,render:O}},ct.isValidElement=U,ct.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:z}},ct.memo=function(O,Z){return{$$typeof:h,type:O,compare:Z===void 0?null:Z}},ct.startTransition=function(O){var Z=F.T,ue={};F.T=ue;try{var Se=O(),Ue=F.S;Ue!==null&&Ue(ue,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(ve,ce)}catch(qe){ce(qe)}finally{F.T=Z}},ct.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ct.use=function(O){return F.H.use(O)},ct.useActionState=function(O,Z,ue){return F.H.useActionState(O,Z,ue)},ct.useCallback=function(O,Z){return F.H.useCallback(O,Z)},ct.useContext=function(O){return F.H.useContext(O)},ct.useDebugValue=function(){},ct.useDeferredValue=function(O,Z){return F.H.useDeferredValue(O,Z)},ct.useEffect=function(O,Z,ue){var Se=F.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(O,Z)},ct.useId=function(){return F.H.useId()},ct.useImperativeHandle=function(O,Z,ue){return F.H.useImperativeHandle(O,Z,ue)},ct.useInsertionEffect=function(O,Z){return F.H.useInsertionEffect(O,Z)},ct.useLayoutEffect=function(O,Z){return F.H.useLayoutEffect(O,Z)},ct.useMemo=function(O,Z){return F.H.useMemo(O,Z)},ct.useOptimistic=function(O,Z){return F.H.useOptimistic(O,Z)},ct.useReducer=function(O,Z,ue){return F.H.useReducer(O,Z,ue)},ct.useRef=function(O){return F.H.useRef(O)},ct.useState=function(O){return F.H.useState(O)},ct.useSyncExternalStore=function(O,Z,ue){return F.H.useSyncExternalStore(O,Z,ue)},ct.useTransition=function(){return F.H.useTransition()},ct.version="19.1.0",ct}var F0;function Wh(){return F0||(F0=1,ud.exports=ZS()),ud.exports}var re=Wh();const KS=Yv(re);var fd={exports:{}},Fo={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function QS(){return B0||(B0=1,function(r){function e(I,z){var ce=I.length;I.push(z);e:for(;0<ce;){var ve=ce-1>>>1,O=I[ve];if(0<l(O,z))I[ve]=z,I[ce]=O,ce=ve;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var z=I[0],ce=I.pop();if(ce!==z){I[0]=ce;e:for(var ve=0,O=I.length,Z=O>>>1;ve<Z;){var ue=2*(ve+1)-1,Se=I[ue],Ue=ue+1,qe=I[Ue];if(0>l(Se,ce))Ue<O&&0>l(qe,Se)?(I[ve]=qe,I[Ue]=ce,ve=Ue):(I[ve]=Se,I[ue]=ce,ve=ue);else if(Ue<O&&0>l(qe,ce))I[ve]=qe,I[Ue]=ce,ve=Ue;else break e}}return z}function l(I,z){var ce=I.sortIndex-z.sortIndex;return ce!==0?ce:I.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],_=1,S=null,v=3,M=!1,E=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var z=i(h);z!==null;){if(z.callback===null)s(h);else if(z.startTime<=I)s(h),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(h)}}function F(I){if(C=!1,L(I),!E)if(i(m)!==null)E=!0,H||(H=!0,te());else{var z=i(h);z!==null&&J(F,z.startTime-I)}}var H=!1,V=-1,A=5,U=-1;function he(){return y?!0:!(r.unstable_now()-U<A)}function G(){if(y=!1,H){var I=r.unstable_now();U=I;var z=!0;try{e:{E=!1,C&&(C=!1,N(V),V=-1),M=!0;var ce=v;try{t:{for(L(I),S=i(m);S!==null&&!(S.expirationTime>I&&he());){var ve=S.callback;if(typeof ve=="function"){S.callback=null,v=S.priorityLevel;var O=ve(S.expirationTime<=I);if(I=r.unstable_now(),typeof O=="function"){S.callback=O,L(I),z=!0;break t}S===i(m)&&s(m),L(I)}else s(m);S=i(m)}if(S!==null)z=!0;else{var Z=i(h);Z!==null&&J(F,Z.startTime-I),z=!1}}break e}finally{S=null,v=ce,M=!1}z=void 0}}finally{z?te():H=!1}}}var te;if(typeof D=="function")te=function(){D(G)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,de=ae.port2;ae.port1.onmessage=G,te=function(){de.postMessage(null)}}else te=function(){x(G,0)};function J(I,z){V=x(function(){I(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var ce=v;v=z;try{return I()}finally{v=ce}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ce=v;v=I;try{return z()}finally{v=ce}},r.unstable_scheduleCallback=function(I,z,ce){var ve=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ve+ce:ve):ce=ve,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ce+O,I={id:_++,callback:z,priorityLevel:I,startTime:ce,expirationTime:O,sortIndex:-1},ce>ve?(I.sortIndex=ce,e(h,I),i(m)===null&&I===i(h)&&(C?(N(V),V=-1):C=!0,J(F,ce-ve))):(I.sortIndex=O,e(m,I),E||M||(E=!0,H||(H=!0,te()))),I},r.unstable_shouldYield=he,r.unstable_wrapCallback=function(I){var z=v;return function(){var ce=v;v=z;try{return I.apply(this,arguments)}finally{v=ce}}}}(hd)),hd}var z0;function JS(){return z0||(z0=1,dd.exports=QS()),dd.exports}var pd={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function $S(){if(H0)return wn;H0=1;var r=Wh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,_)},wn.flushSync=function(m){var h=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=_,s.d.f()}},wn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,S=p(_,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:v,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:S,integrity:v,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},wn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},wn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,S=p(_,h.crossOrigin);s.d.L(m,_,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},wn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,h){return m(h)},wn.useFormState=function(m,h,_){return f.H.useFormState(m,h,_)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var G0;function ey(){if(G0)return pd.exports;G0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=$S(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function ty(){if(V0)return Fo;V0=1;var r=JS(),e=Wh(),i=ey();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,R=u.child;R;){if(R===a){b=!0,a=u,o=d;break}if(R===o){b=!0,o=u,a=d;break}R=R.sibling}if(!b){for(R=d.child;R;){if(R===a){b=!0,a=d,o=u;break}if(R===o){b=!0,o=d,a=u;break}R=R.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case D:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var J=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},ve=[],O=-1;function Z(t){return{current:t}}function ue(t){0>O||(t.current=ve[O],ve[O]=null,O--)}function Se(t,n){O++,ve[O]=t.current,t.current=n}var Ue=Z(null),qe=Z(null),$=Z(null),be=Z(null);function Me(t,n){switch(Se($,n),Se(qe,t),Se(Ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?l0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=l0(n),t=c0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(Ue),Se(Ue,t)}function Je(){ue(Ue),ue(qe),ue($)}function Ke(t){t.memoizedState!==null&&Se(be,t);var n=Ue.current,a=c0(n,t.type);n!==a&&(Se(qe,t),Se(Ue,a))}function $e(t){qe.current===t&&(ue(Ue),ue(qe)),be.current===t&&(ue(be),Do._currentValue=ce)}var Jt=Object.prototype.hasOwnProperty,pt=r.unstable_scheduleCallback,St=r.unstable_cancelCallback,Ot=r.unstable_shouldYield,ot=r.unstable_requestPaint,Et=r.unstable_now,k=r.unstable_getCurrentPriorityLevel,Yt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,Rt=r.unstable_NormalPriority,je=r.unstable_LowPriority,P=r.unstable_IdlePriority,T=r.log,W=r.unstable_setDisableYieldValue,me=null,_e=null;function fe(t){if(typeof T=="function"&&W(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(me,t)}catch{}}var Le=Math.clz32?Math.clz32:et,Ce=Math.log,Ze=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Ce(t)/Ze|0)|0}var Ee=256,Ae=4194304;function Fe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function He(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Fe(o):(b&=R,b!==0?u=Fe(b):a||(a=R&~t,a!==0&&(u=Fe(a))))):(R=o&~d,R!==0?u=Fe(R):b!==0?u=Fe(b):a||(a=o&~t,a!==0&&(u=Fe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function we(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,d){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(a=b&~a;0<a;){var ge=31-Le(a),ye=1<<ge;R[ge]=0,B[ge]=-1;var ie=ee[ge];if(ie!==null)for(ee[ge]=null,ge=0;ge<ie.length;ge++){var se=ie[ge];se!==null&&(se.lane&=-536870913)}a&=~ye}o!==0&&pe(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(b&~n))}function pe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Le(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ge(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Le(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:w0(t.type))}function fi(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var vn=Math.random().toString(36).slice(2),dn="__reactFiber$"+vn,_n="__reactProps$"+vn,Aa="__reactContainer$"+vn,Is="__reactEvents$"+vn,rl="__reactListeners$"+vn,ji="__reactHandles$"+vn,Fs="__reactResources$"+vn,Ra="__reactMarker$"+vn;function Bs(t){delete t[dn],delete t[_n],delete t[Is],delete t[rl],delete t[ji]}function di(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Aa]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=h0(t);t!==null;){if(a=t[dn])return a;t=h0(t)}return n}t=a,a=t.parentNode}return null}function Xi(t){if(t=t[dn]||t[Aa]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function bi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Wi(t){var n=t[Fs];return n||(n=t[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[Ra]=!0}var ol=new Set,ll={};function qi(t,n){wa(t,n),wa(t+"Capture",n)}function wa(t,n){for(ll[t]=n,t=0;t<n.length;t++)ol.add(n[t])}var ou=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cl={},w={};function q(t){return Jt.call(w,t)?!0:Jt.call(cl,t)?!1:ou.test(t)?w[t]=!0:(cl[t]=!0,!1)}function oe(t,n,a){if(q(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ne(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function K(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var De,Be;function Ne(t){if(De===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);De=n&&n[1]||"",Be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+De+t+Be}var Ve=!1;function Xe(t,n){if(!t||Ve)return"";Ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(se){var ie=se}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(se){ie=se}t.call(ye.prototype)}}else{try{throw Error()}catch(se){ie=se}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(se){if(se&&ie&&typeof se.stack=="string")return[se.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],R=d[1];if(b&&R){var B=b.split(`
`),ee=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ee.length)for(o=B.length-1,u=ee.length-1;1<=o&&0<=u&&B[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ee[u]){var ge=`
`+B[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{Ve=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ne(a):""}function st(t){switch(t.tag){case 26:case 27:case 5:return Ne(t.type);case 16:return Ne("Lazy");case 13:return Ne("Suspense");case 19:return Ne("SuspenseList");case 0:case 15:return Xe(t.type,!1);case 11:return Xe(t.type.render,!1);case 1:return Xe(t.type,!0);case 31:return Ne("Activity");default:return""}}function rt(t){try{var n="";do n+=st(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t){var n=wt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){o=""+b,d.call(this,b)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vt(t){t._valueTracker||(t._valueTracker=Zt(t))}function Ct(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=wt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var We=/[\n"\\]/g;function jt(t){return t.replace(We,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vt(t,n,a,o,u,d,b,R){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?In(t,b,ze(n)):a!=null?In(t,b,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ze(R):t.removeAttribute("name")}function Pn(t,n,a,o,u,d,b,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function In(t,n,a){n==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Yi(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function Ut(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Wt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ti=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ti.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&an(t,d,n[d])}function Ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return W_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var lu=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zs=null,Hs=null;function up(t){var n=Xi(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(vt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[_n]||null;if(!u)throw Error(s(90));vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ct(o)}break e;case"textarea":Yi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Fn(t,!!a.multiple,n,!1)}}}var uu=!1;function fp(t,n,a){if(uu)return t(n,a);uu=!0;try{var o=t(n);return o}finally{if(uu=!1,(zs!==null||Hs!==null)&&(Kl(),zs&&(n=zs,t=Hs,Hs=zs=null,up(n),t)))for(n=0;n<t.length;n++)up(t[n])}}function kr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(Zi)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){fu=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{fu=!1}var Ca=null,du=null,dl=null;function dp(){if(dl)return dl;var t,n=du,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return dl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function hp(){return!1}function Bn(t){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pl:hp,this.isPropagationStopped=hp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Bn(os),Xr=_({},os,{view:0,detail:0}),q_=Bn(Xr),hu,pu,Wr,gl=_({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wr&&(Wr&&t.type==="mousemove"?(hu=t.screenX-Wr.screenX,pu=t.screenY-Wr.screenY):pu=hu=0,Wr=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),pp=Bn(gl),Y_=_({},gl,{dataTransfer:0}),Z_=Bn(Y_),K_=_({},Xr,{relatedTarget:0}),mu=Bn(K_),Q_=_({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),J_=Bn(Q_),$_=_({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ex=Bn($_),tx=_({},os,{data:0}),mp=Bn(tx),nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ax[t])?!!n[t]:!1}function gu(){return sx}var rx=_({},Xr,{key:function(t){if(t.key){var n=nx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ox=Bn(rx),lx=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Bn(lx),cx=_({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),ux=Bn(cx),fx=_({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),dx=Bn(fx),hx=_({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),px=Bn(hx),mx=_({},os,{newState:0,oldState:0}),gx=Bn(mx),vx=[9,13,27,32],vu=Zi&&"CompositionEvent"in window,qr=null;Zi&&"documentMode"in document&&(qr=document.documentMode);var _x=Zi&&"TextEvent"in window&&!qr,vp=Zi&&(!vu||qr&&8<qr&&11>=qr),_p=" ",xp=!1;function Sp(t,n){switch(t){case"keyup":return vx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function xx(t,n){switch(t){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(xp=!0,_p);case"textInput":return t=n.data,t===_p&&xp?null:t;default:return null}}function Sx(t,n){if(Gs)return t==="compositionend"||!vu&&Sp(t,n)?(t=dp(),dl=du=Ca=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yx[t.type]:n==="textarea"}function Ep(t,n,a,o){zs?Hs?Hs.push(o):Hs=[o]:zs=o,n=nc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Yr=null,Zr=null;function Mx(t){i0(t,0)}function vl(t){var n=bi(t);if(Ct(n))return t}function bp(t,n){if(t==="change")return n}var Tp=!1;if(Zi){var _u;if(Zi){var xu="oninput"in document;if(!xu){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),xu=typeof Ap.oninput=="function"}_u=xu}else _u=!1;Tp=_u&&(!document.documentMode||9<document.documentMode)}function Rp(){Yr&&(Yr.detachEvent("onpropertychange",wp),Zr=Yr=null)}function wp(t){if(t.propertyName==="value"&&vl(Zr)){var n=[];Ep(n,Zr,t,cu(t)),fp(Mx,n)}}function Ex(t,n,a){t==="focusin"?(Rp(),Yr=n,Zr=a,Yr.attachEvent("onpropertychange",wp)):t==="focusout"&&Rp()}function bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(Zr)}function Tx(t,n){if(t==="click")return vl(n)}function Ax(t,n){if(t==="input"||t==="change")return vl(n)}function Rx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Rx;function Kr(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Jt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Np(t,n){var a=Cp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cp(a)}}function Dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nn(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wx=Zi&&"documentMode"in document&&11>=document.documentMode,Vs=null,yu=null,Qr=null,Mu=!1;function Lp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Vs==null||Vs!==nn(o)||(o=Vs,"selectionStart"in o&&Su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qr&&Kr(Qr,o)||(Qr=o,o=nc(yu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Vs)))}function ls(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ks={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Eu={},Op={};Zi&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function cs(t){if(Eu[t])return Eu[t];if(!ks[t])return t;var n=ks[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Op)return Eu[t]=n[a];return t}var Pp=cs("animationend"),Ip=cs("animationiteration"),Fp=cs("animationstart"),Cx=cs("transitionrun"),Nx=cs("transitionstart"),Dx=cs("transitioncancel"),Bp=cs("transitionend"),zp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function pi(t,n){zp.set(t,n),qi(n,[t])}var Hp=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=Hp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:rt(n)},Hp.set(t,n),n)}return{value:t,source:n,stack:rt(n)}}var ti=[],js=0,Tu=0;function _l(){for(var t=js,n=Tu=js=0;n<t;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var d=ti[n];if(ti[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&Gp(a,u,d)}}function xl(t,n,a,o){ti[js++]=t,ti[js++]=n,ti[js++]=a,ti[js++]=o,Tu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Au(t,n,a,o){return xl(t,n,a,o),Sl(t)}function Xs(t,n){return xl(t,null,null,n),Sl(t)}function Gp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Le(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Sl(t){if(50<Eo)throw Eo=0,Lf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ws={};function Ux(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,o){return new Ux(t,n,a,o)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,d){var b=0;if(o=t,typeof t=="function")Ru(t)&&(b=1);else if(typeof t=="string")b=OS(t,a,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Xn(31,a,n,u),t.elementType=U,t.lanes=d,t;case E:return us(a.children,u,d,n);case C:b=8,u|=24;break;case y:return t=Xn(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case F:return t=Xn(13,a,n,u),t.elementType=F,t.lanes=d,t;case H:return t=Xn(19,a,n,u),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case D:b=10;break e;case N:b=9;break e;case L:b=11;break e;case V:b=14;break e;case A:b=16,o=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Xn(b,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function us(t,n,a,o){return t=Xn(7,t,o,n),t.lanes=a,t}function wu(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Cu(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qs=[],Ys=0,Ml=null,El=0,ni=[],ii=0,fs=null,Qi=1,Ji="";function ds(t,n){qs[Ys++]=El,qs[Ys++]=Ml,Ml=t,El=n}function kp(t,n,a){ni[ii++]=Qi,ni[ii++]=Ji,ni[ii++]=fs,fs=t;var o=Qi;t=Ji;var u=32-Le(o)-1;o&=~(1<<u),a+=1;var d=32-Le(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Qi=1<<32-Le(n)+u|a<<u|o,Ji=d+t}else Qi=1<<d|a<<u|o,Ji=t}function Nu(t){t.return!==null&&(ds(t,1),kp(t,1,0))}function Du(t){for(;t===Ml;)Ml=qs[--Ys],qs[Ys]=null,El=qs[--Ys],qs[Ys]=null;for(;t===fs;)fs=ni[--ii],ni[ii]=null,Ji=ni[--ii],ni[ii]=null,Qi=ni[--ii],ni[ii]=null}var Un=null,$t=null,Nt=!1,hs=null,Ri=!1,Uu=Error(s(519));function ps(t){var n=Error(s(418,""));throw eo(ei(n,t)),Uu}function jp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[_n]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)gt(To[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Vt(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Ut(n,o.value,o.defaultValue,o.children),Vt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||o0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=ic),n=!0):n=!1,n||ps(t)}function Xp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Un=Un.return}}function Jr(t){if(t!==Un)return!1;if(!Nt)return Xp(t),Nt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zf(t.type,t.memoizedProps)),a=!a),a&&$t&&ps(t),Xp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=gi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Xa(t.type)?(t=$f,$f=null,$t=t):$t=n):$t=Un?gi(t.stateNode.nextSibling):null;return!0}function $r(){$t=Un=null,Nt=!1}function Wp(){var t=hs;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),hs=null),t}function eo(t){hs===null?hs=[t]:hs.push(t)}var Lu=Z(null),ms=null,$i=null;function Na(t,n,a){Se(Lu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Lu.current,ue(Lu)}function Ou(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Pu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Ou(d.return,a,t),o||(b=null);break e}d=R.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),Ou(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function to(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var R=u.type;jn(u.pendingProps.value,b.value)||(t!==null?t.push(R):t=[R])}}else if(u===be.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Pu(n,t,a,o),n.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){ms=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return qp(ms,t)}function Tl(t,n){return ms===null&&gs(t),qp(t,n)}function qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var Lx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ox=r.unstable_scheduleCallback,Px=r.unstable_NormalPriority,hn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new Lx,data:new Map,refCount:0}}function no(t){t.refCount--,t.refCount===0&&Ox(Px,function(){t.controller.abort()})}var io=null,Fu=0,Zs=0,Ks=null;function Ix(t,n){if(io===null){var a=io=[];Fu=0,Zs=Hf(),Ks={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then(Yp,Yp),n}function Yp(){if(--Fu===0&&io!==null){Ks!==null&&(Ks.status="fulfilled");var t=io;io=null,Zs=0,Ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Zp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ix(t,n),Zp!==null&&Zp(t,n)};var vs=Z(null);function Bu(){var t=vs.current;return t!==null?t:Xt.pooledCache}function Al(t,n){n===null?Se(vs,vs.current):Se(vs,n.pool)}function Kp(){var t=Bu();return t===null?null:{parent:hn._currentValue,pool:t}}var ao=Error(s(460)),Qp=Error(s(474)),Rl=Error(s(542)),zu={then:function(){}};function Jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wl(){}function $p(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(wl,wl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tm(t),t;default:if(typeof n.status=="string")n.then(wl,wl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tm(t),t}throw so=n,ao}}var so=null;function em(){if(so===null)throw Error(s(459));var t=so;return so=null,t}function tm(t){if(t===ao||t===Rl)throw Error(s(483))}var Da=!1;function Hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(t),Gp(t,null,a),n}return xl(t,o,n,a),Sl(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ge(t,a)}}function Vu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ku=!1;function oo(){if(ku){var t=Ks;if(t!==null)throw t}}function lo(t,n,a,o){ku=!1;var u=t.updateQueue;Da=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,ee=B.next;B.next=null,b===null?d=ee:b.next=ee,b=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==b&&(R===null?ge.firstBaseUpdate=ee:R.next=ee,ge.lastBaseUpdate=B))}if(d!==null){var ye=u.baseState;b=0,ge=ee=B=null,R=d;do{var ie=R.lane&-536870913,se=ie!==R.lane;if(se?(xt&ie)===ie:(o&ie)===ie){ie!==0&&ie===Zs&&(ku=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var it=t,Qe=R;ie=n;var Ht=a;switch(Qe.tag){case 1:if(it=Qe.payload,typeof it=="function"){ye=it.call(Ht,ye,ie);break e}ye=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=Qe.payload,ie=typeof it=="function"?it.call(Ht,ye,ie):it,ie==null)break e;ye=_({},ye,ie);break e;case 2:Da=!0}}ie=R.callback,ie!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[ie]:se.push(ie))}else se={lane:ie,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ee=ge=se,B=ye):ge=ge.next=se,b|=ie;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;se=R,R=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);ge===null&&(B=ye),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=ge,d===null&&(u.shared.lanes=0),Ga|=b,t.lanes=b,t.memoizedState=ye}}function nm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function im(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)nm(a[t],n)}var Qs=Z(null),Cl=Z(0);function am(t,n){t=oa,Se(Cl,t),Se(Qs,n),oa=t|n.baseLanes}function ju(){Se(Cl,oa),Se(Qs,Qs.current)}function Xu(){oa=Cl.current,ue(Qs),ue(Cl)}var Oa=0,dt=null,Bt=null,ln=null,Nl=!1,Js=!1,_s=!1,Dl=0,co=0,$s=null,Bx=0;function sn(){throw Error(s(321))}function Wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function qu(t,n,a,o,u,d){return Oa=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Gm:Vm,_s=!1,d=a(o,u),_s=!1,Js&&(d=rm(n,a,o,u)),sm(t),d}function sm(t){I.H=Fl;var n=Bt!==null&&Bt.next!==null;if(Oa=0,ln=Bt=dt=null,Nl=!1,co=0,$s=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&bl(t)&&(xn=!0))}function rm(t,n,a,o){dt=t;var u=0;do{if(Js&&($s=null),co=0,Js=!1,25<=u)throw Error(s(301));if(u+=1,ln=Bt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Xx,d=n(a,o)}while(Js);return d}function zx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?uo(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Yu(){var t=Dl!==0;return Dl=0,t}function Zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ku(t){if(Nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Nl=!1}Oa=0,ln=Bt=dt=null,Js=!1,co=Dl=0,$s=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?dt.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(Bt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=ln===null?dt.memoizedState:ln.next;if(n!==null)ln=n,Bt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},ln===null?dt.memoizedState=ln=t:ln=ln.next=t}return ln}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(t){var n=co;return co+=1,$s===null&&($s=[]),t=$p($s,t,n),n=dt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Gm:Vm),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return uo(t);if(t.$$typeof===D)return Rn(t)}throw Error(s(438,String(t)))}function Ju(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Qu(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=he;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=cn();return $u(n,Bt,t)}function $u(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=b=null,B=null,ee=n,ge=!1;do{var ye=ee.lane&-536870913;if(ye!==ee.lane?(xt&ye)===ye:(Oa&ye)===ye){var ie=ee.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ye===Zs&&(ge=!0);else if((Oa&ie)===ie){ee=ee.next,ie===Zs&&(ge=!0);continue}else ye={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(R=B=ye,b=d):B=B.next=ye,dt.lanes|=ie,Ga|=ie;ye=ee.action,_s&&a(d,ye),d=ee.hasEagerState?ee.eagerState:a(d,ye)}else ie={lane:ye,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(R=B=ie,b=d):B=B.next=ie,dt.lanes|=ye,Ga|=ye;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?b=d:B.next=R,!jn(d,t.memoizedState)&&(xn=!0,ge&&(a=Ks,a!==null)))throw a;t.memoizedState=d,t.baseState=b,t.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ef(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=t(d,b.action),b=b.next;while(b!==u);jn(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function om(t,n,a){var o=dt,u=cn(),d=Nt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!jn((Bt||u).memoizedState,a);b&&(u.memoizedState=a,xn=!0),u=u.queue;var R=um.bind(null,o,u,t);if(fo(2048,8,R,[t]),u.getSnapshot!==n||b||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,er(9,Ol(),cm.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));d||(Oa&124)!==0||lm(o,n,a)}return a}function lm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Qu(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function cm(t,n,a,o){n.value=a,n.getSnapshot=o,fm(n)&&dm(t)}function um(t,n,a){return a(function(){fm(n)&&dm(t)})}function fm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function dm(t){var n=Xs(t,2);n!==null&&Kn(n,t,2)}function tf(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),_s){fe(!0);try{a()}finally{fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function hm(t,n,a,o){return t.baseState=a,$u(t,Bt,typeof o=="function"?o:ta)}function Hx(t,n,a,o,u){if(Il(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,pm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function pm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,b={};I.T=b;try{var R=a(u,o),B=I.S;B!==null&&B(b,R),mm(t,n,R)}catch(ee){nf(t,n,ee)}finally{I.T=d}}else try{d=a(u,o),mm(t,n,d)}catch(ee){nf(t,n,ee)}}function mm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){gm(t,n,o)},function(o){return nf(t,n,o)}):gm(t,n,a)}function gm(t,n,a){n.status="fulfilled",n.value=a,vm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,pm(t,a)))}function nf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,vm(n),n=n.next;while(n!==o)}t.action=null}function vm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function _m(t,n){return n}function xm(t,n){if(Nt){var a=Xt.formState;if(a!==null){e:{var o=dt;if(Nt){if($t){t:{for(var u=$t,d=Ri;u.nodeType!==8;){if(!d){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=gi(u.nextSibling),o=u.data==="F!";break e}}ps(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:n},a.queue=o,a=Bm.bind(null,dt,o),o.dispatch=a,o=tf(!1),d=lf.bind(null,dt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Hx.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Sm(t){var n=cn();return ym(n,Bt,t)}function ym(t,n,a){if(n=$u(t,n,_m)[0],t=Ll(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(b){throw b===ao?Rl:b}else o=n;n=cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,er(9,Ol(),Gx.bind(null,u,a),null)),[o,d,t]}function Gx(t,n){t.action=n}function Mm(t){var n=cn(),a=Bt;if(a!==null)return ym(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function er(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Qu(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Ol(){return{destroy:void 0,resource:void 0}}function Em(){return cn().memoizedState}function Pl(t,n,a,o){var u=zn();o=o===void 0?null:o,dt.flags|=t,u.memoizedState=er(1|n,Ol(),a,o)}function fo(t,n,a,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;Bt!==null&&o!==null&&Wu(o,Bt.memoizedState.deps)?u.memoizedState=er(n,d,a,o):(dt.flags|=t,u.memoizedState=er(1|n,d,a,o))}function bm(t,n){Pl(8390656,8,t,n)}function Tm(t,n){fo(2048,8,t,n)}function Am(t,n){return fo(4,2,t,n)}function Rm(t,n){return fo(4,4,t,n)}function wm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cm(t,n,a){a=a!=null?a.concat([t]):null,fo(4,4,wm.bind(null,n,t),a)}function af(){}function Nm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Wu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Dm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Wu(n,o[1]))return o[0];if(o=t(),_s){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o}function sf(t,n,a){return a===void 0||(Oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Og(),dt.lanes|=t,Ga|=t,a)}function Um(t,n,a,o){return jn(a,n)?a:Qs.current!==null?(t=sf(t,a,o),jn(t,n)||(xn=!0),t):(Oa&42)===0?(xn=!0,t.memoizedState=a):(t=Og(),dt.lanes|=t,Ga|=t,n)}function Lm(t,n,a,o,u){var d=z.p;z.p=d!==0&&8>d?d:8;var b=I.T,R={};I.T=R,lf(t,!1,n,a);try{var B=u(),ee=I.S;if(ee!==null&&ee(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ge=Fx(B,o);ho(t,n,ge,Zn(t))}else ho(t,n,o,Zn(t))}catch(ye){ho(t,n,{then:function(){},status:"rejected",reason:ye},Zn())}finally{z.p=d,I.T=b}}function Vx(){}function rf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Om(t).queue;Lm(t,u,n,ce,a===null?Vx:function(){return Pm(t),a(o)})}function Om(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:ce},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Pm(t){var n=Om(t).next.queue;ho(t,n,{},Zn())}function of(){return Rn(Do)}function Im(){return cn().memoizedState}function Fm(){return cn().memoizedState}function kx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=Ua(a);var o=La(n,t,a);o!==null&&(Kn(o,n,a),ro(o,n,a)),n={cache:Iu()},t.payload=n;return}n=n.return}}function jx(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Il(t)?zm(n,a):(a=Au(t,n,a,o),a!==null&&(Kn(a,t,o),Hm(a,n,o)))}function Bm(t,n,a){var o=Zn();ho(t,n,a,o)}function ho(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(t))zm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,R=d(b,a);if(u.hasEagerState=!0,u.eagerState=R,jn(R,b))return xl(t,n,u,0),Xt===null&&_l(),!1}catch{}finally{}if(a=Au(t,n,u,o),a!==null)return Kn(a,t,o),Hm(a,n,o),!0}return!1}function lf(t,n,a,o){if(o={lane:2,revertLane:Hf(),action:o,hasEagerState:!1,eagerState:null,next:null},Il(t)){if(n)throw Error(s(479))}else n=Au(t,a,o,2),n!==null&&Kn(n,t,2)}function Il(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function zm(t,n){Js=Nl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Hm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ge(t,a)}}var Fl={readContext:Rn,use:Ul,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Gm={readContext:Rn,use:Ul,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:bm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Pl(4194308,4,wm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Pl(4194308,4,t,n)},useInsertionEffect:function(t,n){Pl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(_s){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(_s){fe(!0);try{a(n)}finally{fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=jx.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=tf(t);var n=t.queue,a=Bm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:af,useDeferredValue:function(t,n){var a=zn();return sf(a,t,n)},useTransition:function(){var t=tf(!1);return t=Lm.bind(null,dt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=zn();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(xt&124)!==0||lm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,bm(um.bind(null,o,d,t),[t]),o.flags|=2048,er(9,Ol(),cm.bind(null,o,d,a,n),null),a},useId:function(){var t=zn(),n=Xt.identifierPrefix;if(Nt){var a=Ji,o=Qi;a=(o&~(1<<32-Le(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Bx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:of,useFormState:xm,useActionState:xm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ju,useCacheRefresh:function(){return zn().memoizedState=kx.bind(null,dt)}},Vm={readContext:Rn,use:Ul,useCallback:Nm,useContext:Rn,useEffect:Tm,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Dm,useReducer:Ll,useRef:Em,useState:function(){return Ll(ta)},useDebugValue:af,useDeferredValue:function(t,n){var a=cn();return Um(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Ll(ta)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:uo(t),n]},useSyncExternalStore:om,useId:Im,useHostTransitionStatus:of,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=cn();return hm(a,Bt,t,n)},useMemoCache:Ju,useCacheRefresh:Fm},Xx={readContext:Rn,use:Ul,useCallback:Nm,useContext:Rn,useEffect:Tm,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Dm,useReducer:ef,useRef:Em,useState:function(){return ef(ta)},useDebugValue:af,useDeferredValue:function(t,n){var a=cn();return Bt===null?sf(a,t,n):Um(a,Bt.memoizedState,t,n)},useTransition:function(){var t=ef(ta)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:uo(t),n]},useSyncExternalStore:om,useId:Im,useHostTransitionStatus:of,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=cn();return Bt!==null?hm(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Fm},tr=null,po=0;function Bl(t){var n=po;return po+=1,tr===null&&(tr=[]),$p(tr,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function km(t){var n=t._init;return n(t._payload)}function jm(t){function n(Y,j){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[j],Y.flags|=16):Q.push(j)}}function a(Y,j){if(!t)return null;for(;j!==null;)n(Y,j),j=j.sibling;return null}function o(Y){for(var j=new Map;Y!==null;)Y.key!==null?j.set(Y.key,Y):j.set(Y.index,Y),Y=Y.sibling;return j}function u(Y,j){return Y=Ki(Y,j),Y.index=0,Y.sibling=null,Y}function d(Y,j,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<j?(Y.flags|=67108866,j):Q):(Y.flags|=67108866,j)):(Y.flags|=1048576,j)}function b(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,j,Q,xe){return j===null||j.tag!==6?(j=wu(Q,Y.mode,xe),j.return=Y,j):(j=u(j,Q),j.return=Y,j)}function B(Y,j,Q,xe){var ke=Q.type;return ke===E?ge(Y,j,Q.props.children,xe,Q.key):j!==null&&(j.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===A&&km(ke)===j.type)?(j=u(j,Q.props),mo(j,Q),j.return=Y,j):(j=yl(Q.type,Q.key,Q.props,null,Y.mode,xe),mo(j,Q),j.return=Y,j)}function ee(Y,j,Q,xe){return j===null||j.tag!==4||j.stateNode.containerInfo!==Q.containerInfo||j.stateNode.implementation!==Q.implementation?(j=Cu(Q,Y.mode,xe),j.return=Y,j):(j=u(j,Q.children||[]),j.return=Y,j)}function ge(Y,j,Q,xe,ke){return j===null||j.tag!==7?(j=us(Q,Y.mode,xe,ke),j.return=Y,j):(j=u(j,Q),j.return=Y,j)}function ye(Y,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=wu(""+j,Y.mode,Q),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case v:return Q=yl(j.type,j.key,j.props,null,Y.mode,Q),mo(Q,j),Q.return=Y,Q;case M:return j=Cu(j,Y.mode,Q),j.return=Y,j;case A:var xe=j._init;return j=xe(j._payload),ye(Y,j,Q)}if(J(j)||te(j))return j=us(j,Y.mode,Q,null),j.return=Y,j;if(typeof j.then=="function")return ye(Y,Bl(j),Q);if(j.$$typeof===D)return ye(Y,Tl(Y,j),Q);zl(Y,j)}return null}function ie(Y,j,Q,xe){var ke=j!==null?j.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ke!==null?null:R(Y,j,""+Q,xe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===ke?B(Y,j,Q,xe):null;case M:return Q.key===ke?ee(Y,j,Q,xe):null;case A:return ke=Q._init,Q=ke(Q._payload),ie(Y,j,Q,xe)}if(J(Q)||te(Q))return ke!==null?null:ge(Y,j,Q,xe,null);if(typeof Q.then=="function")return ie(Y,j,Bl(Q),xe);if(Q.$$typeof===D)return ie(Y,j,Tl(Y,Q),xe);zl(Y,Q)}return null}function se(Y,j,Q,xe,ke){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Y=Y.get(Q)||null,R(j,Y,""+xe,ke);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case v:return Y=Y.get(xe.key===null?Q:xe.key)||null,B(j,Y,xe,ke);case M:return Y=Y.get(xe.key===null?Q:xe.key)||null,ee(j,Y,xe,ke);case A:var ht=xe._init;return xe=ht(xe._payload),se(Y,j,Q,xe,ke)}if(J(xe)||te(xe))return Y=Y.get(Q)||null,ge(j,Y,xe,ke,null);if(typeof xe.then=="function")return se(Y,j,Q,Bl(xe),ke);if(xe.$$typeof===D)return se(Y,j,Q,Tl(j,xe),ke);zl(j,xe)}return null}function it(Y,j,Q,xe){for(var ke=null,ht=null,Ye=j,tt=j=0,yn=null;Ye!==null&&tt<Q.length;tt++){Ye.index>tt?(yn=Ye,Ye=null):yn=Ye.sibling;var Tt=ie(Y,Ye,Q[tt],xe);if(Tt===null){Ye===null&&(Ye=yn);break}t&&Ye&&Tt.alternate===null&&n(Y,Ye),j=d(Tt,j,tt),ht===null?ke=Tt:ht.sibling=Tt,ht=Tt,Ye=yn}if(tt===Q.length)return a(Y,Ye),Nt&&ds(Y,tt),ke;if(Ye===null){for(;tt<Q.length;tt++)Ye=ye(Y,Q[tt],xe),Ye!==null&&(j=d(Ye,j,tt),ht===null?ke=Ye:ht.sibling=Ye,ht=Ye);return Nt&&ds(Y,tt),ke}for(Ye=o(Ye);tt<Q.length;tt++)yn=se(Ye,Y,tt,Q[tt],xe),yn!==null&&(t&&yn.alternate!==null&&Ye.delete(yn.key===null?tt:yn.key),j=d(yn,j,tt),ht===null?ke=yn:ht.sibling=yn,ht=yn);return t&&Ye.forEach(function(Ka){return n(Y,Ka)}),Nt&&ds(Y,tt),ke}function Qe(Y,j,Q,xe){if(Q==null)throw Error(s(151));for(var ke=null,ht=null,Ye=j,tt=j=0,yn=null,Tt=Q.next();Ye!==null&&!Tt.done;tt++,Tt=Q.next()){Ye.index>tt?(yn=Ye,Ye=null):yn=Ye.sibling;var Ka=ie(Y,Ye,Tt.value,xe);if(Ka===null){Ye===null&&(Ye=yn);break}t&&Ye&&Ka.alternate===null&&n(Y,Ye),j=d(Ka,j,tt),ht===null?ke=Ka:ht.sibling=Ka,ht=Ka,Ye=yn}if(Tt.done)return a(Y,Ye),Nt&&ds(Y,tt),ke;if(Ye===null){for(;!Tt.done;tt++,Tt=Q.next())Tt=ye(Y,Tt.value,xe),Tt!==null&&(j=d(Tt,j,tt),ht===null?ke=Tt:ht.sibling=Tt,ht=Tt);return Nt&&ds(Y,tt),ke}for(Ye=o(Ye);!Tt.done;tt++,Tt=Q.next())Tt=se(Ye,Y,tt,Tt.value,xe),Tt!==null&&(t&&Tt.alternate!==null&&Ye.delete(Tt.key===null?tt:Tt.key),j=d(Tt,j,tt),ht===null?ke=Tt:ht.sibling=Tt,ht=Tt);return t&&Ye.forEach(function(WS){return n(Y,WS)}),Nt&&ds(Y,tt),ke}function Ht(Y,j,Q,xe){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var ke=Q.key;j!==null;){if(j.key===ke){if(ke=Q.type,ke===E){if(j.tag===7){a(Y,j.sibling),xe=u(j,Q.props.children),xe.return=Y,Y=xe;break e}}else if(j.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===A&&km(ke)===j.type){a(Y,j.sibling),xe=u(j,Q.props),mo(xe,Q),xe.return=Y,Y=xe;break e}a(Y,j);break}else n(Y,j);j=j.sibling}Q.type===E?(xe=us(Q.props.children,Y.mode,xe,Q.key),xe.return=Y,Y=xe):(xe=yl(Q.type,Q.key,Q.props,null,Y.mode,xe),mo(xe,Q),xe.return=Y,Y=xe)}return b(Y);case M:e:{for(ke=Q.key;j!==null;){if(j.key===ke)if(j.tag===4&&j.stateNode.containerInfo===Q.containerInfo&&j.stateNode.implementation===Q.implementation){a(Y,j.sibling),xe=u(j,Q.children||[]),xe.return=Y,Y=xe;break e}else{a(Y,j);break}else n(Y,j);j=j.sibling}xe=Cu(Q,Y.mode,xe),xe.return=Y,Y=xe}return b(Y);case A:return ke=Q._init,Q=ke(Q._payload),Ht(Y,j,Q,xe)}if(J(Q))return it(Y,j,Q,xe);if(te(Q)){if(ke=te(Q),typeof ke!="function")throw Error(s(150));return Q=ke.call(Q),Qe(Y,j,Q,xe)}if(typeof Q.then=="function")return Ht(Y,j,Bl(Q),xe);if(Q.$$typeof===D)return Ht(Y,j,Tl(Y,Q),xe);zl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,j!==null&&j.tag===6?(a(Y,j.sibling),xe=u(j,Q),xe.return=Y,Y=xe):(a(Y,j),xe=wu(Q,Y.mode,xe),xe.return=Y,Y=xe),b(Y)):a(Y,j)}return function(Y,j,Q,xe){try{po=0;var ke=Ht(Y,j,Q,xe);return tr=null,ke}catch(Ye){if(Ye===ao||Ye===Rl)throw Ye;var ht=Xn(29,Ye,null,Y.mode);return ht.lanes=xe,ht.return=Y,ht}finally{}}}var nr=jm(!0),Xm=jm(!1),ai=Z(null),wi=null;function Pa(t){var n=t.alternate;Se(pn,pn.current&1),Se(ai,t),wi===null&&(n===null||Qs.current!==null||n.memoizedState!==null)&&(wi=t)}function Wm(t){if(t.tag===22){if(Se(pn,pn.current),Se(ai,t),wi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(wi=t)}}else Ia()}function Ia(){Se(pn,pn.current),Se(ai,ai.current)}function na(t){ue(ai),wi===t&&(wi=null),ue(pn)}var pn=Z(0);function Hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Jf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function cf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(Kn(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,o),n!==null&&(Kn(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=La(t,o,a),n!==null&&(Kn(n,t,a),ro(n,t,a))}};function qm(t,n,a,o,u,d,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,o)||!Kr(u,d):!0}function Ym(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function xs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Zm(t){Gl(t)}function Km(t){console.error(t)}function Qm(t){Gl(t)}function Vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Jm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,n)},a}function $m(t){return t=Ua(t),t.tag=3,t}function eg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Jm(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Jm(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Wx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&to(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 13:return wi===null?Pf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(t,o,u)),!1;case 22:return a.flags|=65536,o===zu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(t,o,u)),!1}throw Error(s(435,a.tag))}return Ff(t,o,u),Pf(),!1}if(Nt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(t=Error(s(422),{cause:o}),eo(ei(t,a)))):(o!==Uu&&(n=Error(s(423),{cause:o}),eo(ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ei(o,a),u=ff(t.stateNode,o,u),Vu(t,u),en!==4&&(en=2)),!1;var d=Error(s(520),{cause:o});if(d=ei(d,a),Mo===null?Mo=[d]:Mo.push(d),en!==4&&(en=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,o,t),Vu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Va===null||!Va.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$m(u),eg(u,t,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var tg=Error(s(461)),xn=!1;function En(t,n,a,o){n.child=t===null?Xm(n,null,a,o):nr(n,t.child,a,o)}function ng(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var R in o)R!=="ref"&&(b[R]=o[R])}else b=o;return gs(n),o=qu(t,n,a,b,d,u),R=Yu(),t!==null&&!xn?(Zu(t,n,u),ia(t,n,u)):(Nt&&R&&Nu(n),n.flags|=1,En(t,n,o,u),n.child)}function ig(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Ru(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,ag(t,n,d,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!xf(t,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(b,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Ki(d,o),t.ref=n.ref,t.return=n,n.child=t}function ag(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Kr(d,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=d,xf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return df(t,n,a,o,u)}function sg(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return rg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,d!==null?d.cachePool:null),d!==null?am(n,d):ju(),Wm(n);else return n.lanes=n.childLanes=536870912,rg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Al(n,d.cachePool),am(n,d),Ia(),n.memoizedState=null):(t!==null&&Al(n,null),ju(),Ia());return En(t,n,u,a),n.child}function rg(t,n,a,o){var u=Bu();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Al(n,null),ju(),Wm(n),t!==null&&to(t,n,o,!0),null}function kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function df(t,n,a,o,u){return gs(n),a=qu(t,n,a,o,void 0,u),o=Yu(),t!==null&&!xn?(Zu(t,n,u),ia(t,n,u)):(Nt&&o&&Nu(n),n.flags|=1,En(t,n,a,u),n.child)}function og(t,n,a,o,u,d){return gs(n),n.updateQueue=null,a=rm(n,o,a,u),sm(t),o=Yu(),t!==null&&!xn?(Zu(t,n,d),ia(t,n,d)):(Nt&&o&&Nu(n),n.flags|=1,En(t,n,a,d),n.child)}function lg(t,n,a,o,u){if(gs(n),n.stateNode===null){var d=Ws,b=a.contextType;typeof b=="object"&&b!==null&&(d=Rn(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=uf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Hu(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?Rn(b):Ws,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(cf(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&uf.enqueueReplaceState(d,d.state,null),lo(n,o,d,u),oo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,B=xs(a,R);d.props=B;var ee=d.context,ge=a.contextType;b=Ws,typeof ge=="object"&&ge!==null&&(b=Rn(ge));var ye=a.getDerivedStateFromProps;ge=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ee!==b)&&Ym(n,d,o,b),Da=!1;var ie=n.memoizedState;d.state=ie,lo(n,o,d,u),oo(),ee=n.memoizedState,R||ie!==ee||Da?(typeof ye=="function"&&(cf(n,a,ye,o),ee=n.memoizedState),(B=Da||qm(n,a,B,o,ie,ee,b))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=b,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Gu(t,n),b=n.memoizedProps,ge=xs(a,b),d.props=ge,ye=n.pendingProps,ie=d.context,ee=a.contextType,B=Ws,typeof ee=="object"&&ee!==null&&(B=Rn(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==ye||ie!==B)&&Ym(n,d,o,B),Da=!1,ie=n.memoizedState,d.state=ie,lo(n,o,d,u),oo();var se=n.memoizedState;b!==ye||ie!==se||Da||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof R=="function"&&(cf(n,a,R,o),se=n.memoizedState),(ge=Da||qm(n,a,ge,o,ie,se,B)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,se,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,se,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=B,o=ge):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=nr(n,t.child,null,u),n.child=nr(n,null,a,u)):En(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ia(t,n,u),t}function cg(t,n,a,o){return $r(),n.flags|=256,En(t,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(t){return{baseLanes:t,cachePool:Kp()}}function mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function ug(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Pa(n):Ia(),Nt){var R=$t,B;if(B=R){e:{for(B=R,R=Ri;B.nodeType!==8;){if(!R){R=null;break e}if(B=gi(B.nextSibling),B===null){R=null;break e}}R=B}R!==null?(n.memoizedState={dehydrated:R,treeContext:fs!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},B=Xn(18,null,null,0),B.stateNode=R,B.return=n,n.child=B,Un=n,$t=null,B=!0):B=!1}B||ps(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Jf(R)?n.lanes=32:n.lanes=536870912,null;na(n)}return R=o.children,o=o.fallback,u?(Ia(),u=n.mode,R=jl({mode:"hidden",children:R},u),o=us(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=pf(a),u.childLanes=mf(t,b,a),n.memoizedState=hf,o):(Pa(n),gf(n,R))}if(B=t.memoizedState,B!==null&&(R=B.dehydrated,R!==null)){if(d)n.flags&256?(Pa(n),n.flags&=-257,n=vf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),u=o.fallback,R=n.mode,o=jl({mode:"visible",children:o.children},R),u=us(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,nr(n,t.child,null,a),o=n.child,o.memoizedState=pf(a),o.childLanes=mf(t,b,a),n.memoizedState=hf,n=u);else if(Pa(n),Jf(R)){if(b=R.nextSibling&&R.nextSibling.dataset,b)var ee=b.dgst;b=ee,o=Error(s(419)),o.stack="",o.digest=b,eo({value:o,source:null,stack:null}),n=vf(t,n,a)}else if(xn||to(t,n,a,!1),b=(a&t.childLanes)!==0,xn||b){if(b=Xt,b!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(b.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Xs(t,o),Kn(b,t,o),tg;R.data==="$?"||Pf(),n=vf(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,$t=gi(R.nextSibling),Un=n,Nt=!0,hs=null,Ri=!1,t!==null&&(ni[ii++]=Qi,ni[ii++]=Ji,ni[ii++]=fs,Qi=t.id,Ji=t.overflow,fs=n),n=gf(n,o.children),n.flags|=4096);return n}return u?(Ia(),u=o.fallback,R=n.mode,B=t.child,ee=B.sibling,o=Ki(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ee!==null?u=Ki(ee,u):(u=us(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=pf(a):(B=R.cachePool,B!==null?(ee=hn._currentValue,B=B.parent!==ee?{parent:ee,pool:ee}:B):B=Kp(),R={baseLanes:R.baseLanes|a,cachePool:B}),u.memoizedState=R,u.childLanes=mf(t,b,a),n.memoizedState=hf,o):(Pa(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function vf(t,n,a){return nr(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function fg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ou(t.return,n,a)}function _f(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function dg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(En(t,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,a,n);else if(t.tag===19)fg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Se(pn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Hl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Hl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,d);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(to(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function qx(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Na(n,hn,t.memoizedState.cache),$r();break;case 27:case 5:Ke(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ug(t,n,a):(Pa(n),t=ia(t,n,a),t!==null?t.sibling:null);Pa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(to(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return dg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,sg(t,n,a);case 24:Na(n,hn,t.memoizedState.cache)}return ia(t,n,a)}function hg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!xf(t,a)&&(n.flags&128)===0)return xn=!1,qx(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Nt&&(n.flags&1048576)!==0&&kp(n,El,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Ru(o)?(t=xs(o,t),n.tag=1,n=lg(null,n,o,t,a)):(n.tag=0,n=df(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===L){n.tag=11,n=ng(null,n,o,t,a);break e}else if(u===V){n.tag=14,n=ig(null,n,o,t,a);break e}}throw n=de(o)||o,Error(s(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xs(o,n.pendingProps),lg(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Gu(t,n),lo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Na(n,hn,o),o!==d.cache&&Pu(n,[hn],a,!0),oo(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=cg(t,n,o,a);break e}else if(o!==u){u=ei(Error(s(424)),n),eo(u),n=cg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=gi(t.firstChild),Un=n,Nt=!0,hs=null,Ri=!0,a=Xm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($r(),o===u){n=ia(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return kl(t,n),t===null?(a=v0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,t=n.pendingProps,o=ac($.current).createElement(a),o[dn]=n,o[_n]=t,Tn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=v0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Nt&&(o=n.stateNode=p0(n.type,n.pendingProps,$.current),Un=n,Ri=!0,u=$t,Xa(n.type)?($f=u,$t=gi(o.firstChild)):$t=u),En(t,n,n.pendingProps.children,a),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=$t)&&(o=yS(o,n.type,n.pendingProps,Ri),o!==null?(n.stateNode=o,Un=n,$t=gi(o.firstChild),Ri=!1,u=!0):u=!1),u||ps(n)),Ke(n),u=n.type,d=n.pendingProps,b=t!==null?t.memoizedProps:null,o=d.children,Zf(u,d)?o=null:b!==null&&Zf(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(t,n,zx,null,null,a),Do._currentValue=u),kl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Nt&&((t=a=$t)&&(a=MS(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,Un=n,$t=null,t=!0):t=!1),t||ps(n)),null;case 13:return ug(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=nr(n,null,o,a):En(t,n,o,a),n.child;case 11:return ng(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gs(n),u=Rn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return ig(t,n,n.type,n.pendingProps,a);case 15:return ag(t,n,n.type,n.pendingProps,a);case 19:return dg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ki(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return sg(t,n,a);case 24:return gs(n),o=Rn(hn),t===null?(u=Bu(),u===null&&(u=Xt,d=Iu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Hu(n),Na(n,hn,u)):((t.lanes&a)!==0&&(Gu(t,n),lo(n,null,null,a),oo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,hn,o)):(o=d.cache,Na(n,hn,o),o!==u.cache&&Pu(n,[hn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function pg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!M0(n)){if(n=ai.current,n!==null&&((xt&4194048)===xt?wi!==null:(xt&62914560)!==xt&&(xt&536870912)===0||n!==wi))throw so=zu,Qp;t.flags|=8192}}function Xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?we():536870912,t.lanes|=n,rr|=n)}function go(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Yx(t,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(hn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wp())),Kt(n),null;case 26:return a=n.memoizedState,t===null?(aa(n),a!==null?(Kt(n),pg(n,a)):(Kt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(aa(n),Kt(n),pg(n,a)):(Kt(n),n.flags&=-16777217):(t.memoizedProps!==o&&aa(n),Kt(n),n.flags&=-16777217),null;case 27:$e(n),a=$.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Ue.current,Jr(n)?jp(n):(t=p0(u,o,a),n.stateNode=t,aa(n))}return Kt(n),null;case 5:if($e(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(t=Ue.current,Jr(n))jp(n);else{switch(u=ac($.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[dn]=n,t[_n]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Tn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&aa(n)}}return Kt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=$.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||o0(t.nodeValue,a)),t||ps(n)}else t=ac(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else $r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Wp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(na(n),n):(na(n),null)}if(na(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Kt(n),null;case 4:return Je(),t===null&&jf(n.stateNode.containerInfo),Kt(n),null;case 10:return ea(n.type),Kt(n),null;case 19:if(ue(pn),u=n.memoizedState,u===null)return Kt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)go(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Hl(t),d!==null){for(n.flags|=128,go(u,!1),t=d.updateQueue,n.updateQueue=t,Xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Vp(a,t),a=a.sibling;return Se(pn,pn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Et()>Yl&&(n.flags|=128,o=!0,go(u,!1),n.lanes=4194304)}else{if(!o)if(t=Hl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Xl(n,t),go(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Nt)return Kt(n),null}else 2*Et()-u.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,o=!0,go(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Et(),n.sibling=null,t=pn.current,Se(pn,o?t&1|2:t&1),n):(Kt(n),null);case 22:case 23:return na(n),Xu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ue(vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(hn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Zx(t,n){switch(Du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(hn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 13:if(na(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ue(pn),null;case 4:return Je(),null;case 10:return ea(n.type),null;case 22:case 23:return na(n),Xu(),t!==null&&ue(vs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(hn),null;case 25:return null;default:return null}}function mg(t,n){switch(Du(n),n.tag){case 3:ea(hn),Je();break;case 26:case 27:case 5:$e(n);break;case 4:Je();break;case 13:na(n);break;case 19:ue(pn);break;case 10:ea(n.type);break;case 22:case 23:na(n),Xu(),t!==null&&ue(vs);break;case 24:ea(hn)}}function vo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Fa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var b=o.inst,R=b.destroy;if(R!==void 0){b.destroy=void 0,u=n;var B=a,ee=R;try{ee()}catch(ge){kt(u,B,ge)}}}o=o.next}while(o!==d)}}catch(ge){kt(n,n.return,ge)}}function gg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{im(n,a)}catch(o){kt(t,t.return,o)}}}function vg(t,n,a){a.props=xs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function _o(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Ci(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function _g(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Sf(t,n,a){try{var o=t.stateNode;gS(o,t.type,a,n),o[_n]=n}catch(u){kt(t,t.return,u)}}function xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ic));else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Mf(t,n,a),t=t.sibling;t!==null;)Mf(t,n,a),t=t.sibling}function Wl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Wl(t,n,a),t=t.sibling;t!==null;)Wl(t,n,a),t=t.sibling}function Sg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[dn]=t,n[_n]=a}catch(d){kt(t,t.return,d)}}var sa=!1,rn=!1,Ef=!1,yg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Kx(t,n){if(t=t.containerInfo,qf=uc,t=Up(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var b=0,R=-1,B=-1,ee=0,ge=0,ye=t,ie=null;t:for(;;){for(var se;ye!==a||u!==0&&ye.nodeType!==3||(R=b+u),ye!==d||o!==0&&ye.nodeType!==3||(B=b+o),ye.nodeType===3&&(b+=ye.nodeValue.length),(se=ye.firstChild)!==null;)ie=ye,ye=se;for(;;){if(ye===t)break t;if(ie===a&&++ee===u&&(R=b),ie===d&&++ge===o&&(B=b),(se=ye.nextSibling)!==null)break;ye=ie,ie=ye.parentNode}ye=se}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:t,selectionRange:a},uc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=xs(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){kt(a,a.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Qf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Mg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),o&4&&vo(5,a);break;case 1:if(Ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){kt(a,a.return,b)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){kt(a,a.return,b)}}o&64&&gg(a),o&512&&_o(a,a.return);break;case 3:if(Ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{im(t,n)}catch(b){kt(a,a.return,b)}}break;case 27:n===null&&o&4&&Sg(a);case 26:case 5:Ba(t,a),n===null&&o&4&&_g(a),o&512&&_o(a,a.return);break;case 12:Ba(t,a);break;case 13:Ba(t,a),o&4&&Tg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sS.bind(null,a),ES(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||rn,u=sa;var d=rn;sa=o,(rn=n)&&!d?za(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),sa=u,rn=d}break;case 30:break;default:Ba(t,a)}}function Eg(t){var n=t.alternate;n!==null&&(t.alternate=null,Eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Bs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,Hn=!1;function ra(t,n,a){for(a=a.child;a!==null;)bg(t,n,a),a=a.sibling}function bg(t,n,a){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:rn||Ci(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ci(a,n);var o=qt,u=Hn;Xa(a.type)&&(qt=a.stateNode,Hn=!1),ra(t,n,a),Ro(a.stateNode),qt=o,Hn=u;break;case 5:rn||Ci(a,n);case 6:if(o=qt,u=Hn,qt=null,ra(t,n,a),qt=o,Hn=u,qt!==null)if(Hn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{qt.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:qt!==null&&(Hn?(t=qt,d0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Po(t)):d0(qt,a.stateNode));break;case 4:o=qt,u=Hn,qt=a.stateNode.containerInfo,Hn=!0,ra(t,n,a),qt=o,Hn=u;break;case 0:case 11:case 14:case 15:rn||Fa(2,a,n),rn||Fa(4,a,n),ra(t,n,a);break;case 1:rn||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&vg(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,ra(t,n,a),rn=o;break;default:ra(t,n,a)}}function Tg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Po(t)}catch(a){kt(n,n.return,a)}}function Qx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new yg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new yg),n;default:throw Error(s(435,t.tag))}}function bf(t,n){var a=Qx(t);n.forEach(function(o){var u=rS.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,b=n,R=b;e:for(;R!==null;){switch(R.tag){case 27:if(Xa(R.type)){qt=R.stateNode,Hn=!1;break e}break;case 5:qt=R.stateNode,Hn=!1;break e;case 3:case 4:qt=R.stateNode.containerInfo,Hn=!0;break e}R=R.return}if(qt===null)throw Error(s(160));bg(d,b,u),qt=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ag(n,t),n=n.sibling}var mi=null;function Ag(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Fa(3,t,t.return),vo(3,t),Fa(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(rn||a===null||Ci(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(Wn(n,t),qn(t),o&512&&(rn||a===null||Ci(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ra]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,a),d[dn]=t,tn(d),o=d;break e;case"link":var b=S0("link","href",u).get(o+(a.href||""));if(b){for(var R=0;R<b.length;R++)if(d=b[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(R,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=S0("meta","content",u).get(o+(a.content||""))){for(R=0;R<b.length;R++)if(d=b[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(R,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[dn]=t,tn(d),o=d}t.stateNode=o}else y0(u,t.type,t.stateNode);else t.stateNode=x0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?y0(u,t.type,t.stateNode):x0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(rn||a===null||Ci(a,a.return)),a!==null&&o&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(rn||a===null||Ci(a,a.return)),t.flags&32){u=t.stateNode;try{Wt(u,"")}catch(se){kt(t,t.return,se)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ef=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(se){kt(t,t.return,se)}}break;case 3:if(oc=null,u=mi,mi=sc(n.containerInfo),Wn(n,t),mi=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Po(n.containerInfo)}catch(se){kt(t,t.return,se)}Ef&&(Ef=!1,Rg(t));break;case 4:o=mi,mi=sc(t.stateNode.containerInfo),Wn(n,t),qn(t),mi=o;break;case 12:Wn(n,t),qn(t);break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nf=Et()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bf(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=sa,ge=rn;if(sa=ee||u,rn=ge||B,Wn(n,t),rn=ge,sa=ee,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||sa||rn||Ss(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(d=B.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{R=B.stateNode;var ye=B.memoizedProps.style,ie=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(se){kt(B,B.return,se)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(se){kt(B,B.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,bf(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bf(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(xg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=yf(t);Wl(t,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(Wt(b,""),a.flags&=-33);var R=yf(t);Wl(t,R,b);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=yf(t);Mf(t,ee,B);break;default:throw Error(s(161))}}catch(ge){kt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(t,n.alternate,n),n=n.sibling}function Ss(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Ss(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vg(n,n.return,a),Ss(n);break;case 27:Ro(n.stateNode);case 26:case 5:Ci(n,n.return),Ss(n);break;case 22:n.memoizedState===null&&Ss(n);break;case 30:Ss(n);break;default:Ss(n)}t=t.sibling}}function za(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:za(u,d,a),vo(4,d);break;case 1:if(za(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){kt(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)nm(B[u],R)}catch(ee){kt(o,o.return,ee)}}a&&b&64&&gg(d),_o(d,d.return);break;case 27:Sg(d);case 26:case 5:za(u,d,a),a&&o===null&&b&4&&_g(d),_o(d,d.return);break;case 12:za(u,d,a);break;case 13:za(u,d,a),a&&b&4&&Tg(u,d);break;case 22:d.memoizedState===null&&za(u,d,a),_o(d,d.return);break;case 30:break;default:za(u,d,a)}n=n.sibling}}function Tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&no(a))}function Af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&no(t))}function Ni(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wg(t,n,a,o),n=n.sibling}function wg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,o),u&2048&&vo(9,n);break;case 1:Ni(t,n,a,o);break;case 3:Ni(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&no(t)));break;case 12:if(u&2048){Ni(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,b=d.id,R=d.onPostCommit;typeof R=="function"&&R(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){kt(n,n.return,B)}}else Ni(t,n,a,o);break;case 13:Ni(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?Ni(t,n,a,o):xo(t,n):d._visibility&2?Ni(t,n,a,o):(d._visibility|=2,ir(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Tf(b,n);break;case 24:Ni(t,n,a,o),u&2048&&Af(n.alternate,n);break;default:Ni(t,n,a,o)}}function ir(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,b=n,R=a,B=o,ee=b.flags;switch(b.tag){case 0:case 11:case 15:ir(d,b,R,B,u),vo(8,b);break;case 23:break;case 22:var ge=b.stateNode;b.memoizedState!==null?ge._visibility&2?ir(d,b,R,B,u):xo(d,b):(ge._visibility|=2,ir(d,b,R,B,u)),u&&ee&2048&&Tf(b.alternate,b);break;case 24:ir(d,b,R,B,u),u&&ee&2048&&Af(b.alternate,b);break;default:ir(d,b,R,B,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&Tf(o.alternate,o);break;case 24:xo(a,o),u&2048&&Af(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var So=8192;function ar(t){if(t.subtreeFlags&So)for(t=t.child;t!==null;)Cg(t),t=t.sibling}function Cg(t){switch(t.tag){case 26:ar(t),t.flags&So&&t.memoizedState!==null&&IS(mi,t.memoizedState,t.memoizedProps);break;case 5:ar(t);break;case 3:case 4:var n=mi;mi=sc(t.stateNode.containerInfo),ar(t),mi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=So,So=16777216,ar(t),So=n):ar(t));break;default:ar(t)}}function Ng(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Ug(o,t)}Ng(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dg(t),t=t.sibling}function Dg(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ql(t)):yo(t);break;default:yo(t)}}function ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Ug(o,t)}Ng(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ql(n));break;default:ql(n)}t=t.sibling}}function Ug(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(Eg(o),o===a){Sn=null;break e}if(u!==null){u.return=d,Sn=u;break e}Sn=d}}}var Jx={getCacheForType:function(t){var n=Rn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},$x=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Xt=null,mt=null,xt=0,It=0,Yn=null,Ha=!1,sr=!1,Rf=!1,oa=0,en=0,Ga=0,ys=0,wf=0,si=0,rr=0,Mo=null,Gn=null,Cf=!1,Nf=0,Yl=1/0,Zl=null,Va=null,bn=0,ka=null,or=null,lr=0,Df=0,Uf=null,Lg=null,Eo=0,Lf=null;function Zn(){if((Pt&2)!==0&&xt!==0)return xt&-xt;if(I.T!==null){var t=Zs;return t!==0?t:Hf()}return bt()}function Og(){si===0&&(si=(xt&536870912)===0||Nt?X():536870912);var t=ai.current;return t!==null&&(t.flags|=32),si}function Kn(t,n,a){(t===Xt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(cr(t,0),ja(t,xt,si,!1)),Ie(t,a),((Pt&2)===0||t!==Xt)&&(t===Xt&&((Pt&2)===0&&(ys|=a),en===4&&ja(t,xt,si,!1)),Di(t))}function Pg(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?nS(t,n):If(t,n,!0),d=o;do{if(u===0){sr&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!eS(a)){u=If(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var R=t;u=Mo;var B=R.current.memoizedState.isDehydrated;if(B&&(cr(R,b).flags|=256),b=If(R,b,!1),b!==2){if(Rf&&!B){R.errorRecoveryDisabledLanes|=d,ys|=d,u=4;break e}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){cr(t,0),ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,si,!Ha);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Nf+300-Et(),10<u)){if(ja(o,n,si,!Ha),He(o,0,!0)!==0)break e;o.timeoutHandle=u0(Ig.bind(null,o,a,Gn,Zl,Cf,n,si,ys,rr,Ha,d,2,-0,0),u);break e}Ig(o,a,Gn,Zl,Cf,n,si,ys,rr,Ha,d,0,-0,0)}}break}while(!0);Di(t)}function Ig(t,n,a,o,u,d,b,R,B,ee,ge,ye,ie,se){if(t.timeoutHandle=-1,ye=n.subtreeFlags,(ye&8192||(ye&16785408)===16785408)&&(No={stylesheets:null,count:0,unsuspend:PS},Cg(n),ye=FS(),ye!==null)){t.cancelPendingCommit=ye(kg.bind(null,t,n,d,a,o,u,b,R,B,ge,1,ie,se)),ja(t,d,b,!ee);return}kg(t,n,d,a,o,u,b,R,B)}function eS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!jn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~wf,n&=~ys,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Le(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&pe(t,a,n)}function Kl(){return(Pt&6)===0?(bo(0),!1):!0}function Of(){if(mt!==null){if(It===0)var t=mt.return;else t=mt,$i=ms=null,Ku(t),tr=null,po=0,t=mt;for(;t!==null;)mg(t.alternate,t),t=t.return;mt=null}}function cr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_S(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Of(),Xt=t,mt=a=Ki(t.current,null),xt=n,It=0,Yn=null,Ha=!1,sr=Pe(t,n),Rf=!1,rr=si=wf=ys=Ga=en=0,Gn=Mo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Le(o),d=1<<u;n|=t[u],o&=~d}return oa=n,_l(),a}function Fg(t,n){dt=null,I.H=Fl,n===ao||n===Rl?(n=em(),It=3):n===Qp?(n=em(),It=4):It=n===tg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,mt===null&&(en=1,Vl(t,ei(n,t.current)))}function Bg(){var t=I.H;return I.H=Fl,t===null?Fl:t}function zg(){var t=I.A;return I.A=Jx,t}function Pf(){en=4,Ha||(xt&4194048)!==xt&&ai.current!==null||(sr=!0),(Ga&134217727)===0&&(ys&134217727)===0||Xt===null||ja(Xt,xt,si,!1)}function If(t,n,a){var o=Pt;Pt|=2;var u=Bg(),d=zg();(Xt!==t||xt!==n)&&(Zl=null,cr(t,n)),n=!1;var b=en;e:do try{if(It!==0&&mt!==null){var R=mt,B=Yn;switch(It){case 8:Of(),b=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ee=It;if(It=0,Yn=null,ur(t,R,B,ee),a&&sr){b=0;break e}break;default:ee=It,It=0,Yn=null,ur(t,R,B,ee)}}tS(),b=en;break}catch(ge){Fg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,$i=ms=null,Pt=o,I.H=u,I.A=d,mt===null&&(Xt=null,xt=0,_l()),b}function tS(){for(;mt!==null;)Hg(mt)}function nS(t,n){var a=Pt;Pt|=2;var o=Bg(),u=zg();Xt!==t||xt!==n?(Zl=null,Yl=Et()+500,cr(t,n)):sr=Pe(t,n);e:do try{if(It!==0&&mt!==null){n=mt;var d=Yn;t:switch(It){case 1:It=0,Yn=null,ur(t,n,d,1);break;case 2:case 9:if(Jp(d)){It=0,Yn=null,Gg(n);break}n=function(){It!==2&&It!==9||Xt!==t||(It=7),Di(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Jp(d)?(It=0,Yn=null,Gg(n)):(It=0,Yn=null,ur(t,n,d,7));break;case 5:var b=null;switch(mt.tag){case 26:b=mt.memoizedState;case 5:case 27:var R=mt;if(!b||M0(b)){It=0,Yn=null;var B=R.sibling;if(B!==null)mt=B;else{var ee=R.return;ee!==null?(mt=ee,Ql(ee)):mt=null}break t}}It=0,Yn=null,ur(t,n,d,5);break;case 6:It=0,Yn=null,ur(t,n,d,6);break;case 8:Of(),en=6;break e;default:throw Error(s(462))}}iS();break}catch(ge){Fg(t,ge)}while(!0);return $i=ms=null,I.H=o,I.A=u,Pt=a,mt!==null?0:(Xt=null,xt=0,_l(),en)}function iS(){for(;mt!==null&&!Ot();)Hg(mt)}function Hg(t){var n=hg(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?Ql(t):mt=n}function Gg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=og(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=og(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Ku(n);default:mg(a,n),n=mt=Vp(n,oa),n=hg(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?Ql(t):mt=n}function ur(t,n,a,o){$i=ms=null,Ku(n),tr=null,po=0;var u=n.return;try{if(Wx(t,u,n,a,xt)){en=1,Vl(t,ei(a,t.current)),mt=null;return}}catch(d){if(u!==null)throw mt=u,d;en=1,Vl(t,ei(a,t.current)),mt=null;return}n.flags&32768?(Nt||o===1?t=!0:sr||(xt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Vg(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){Vg(n,Ha);return}t=n.return;var a=Yx(n.alternate,n,oa);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);en===0&&(en=5)}function Vg(t,n){do{var a=Zx(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);en=6,mt=null}function kg(t,n,a,o,u,d,b,R,B){t.cancelPendingCommit=null;do Jl();while(bn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Tu,Te(t,a,d,b,R,B),t===Xt&&(mt=Xt=null,xt=0),or=n,ka=t,lr=a,Df=d,Uf=u,Lg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,oS(Rt,function(){return Yg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=z.p,z.p=2,b=Pt,Pt|=4;try{Kx(t,n,a)}finally{Pt=b,z.p=u,I.T=o}}bn=1,jg(),Xg(),Wg()}}function jg(){if(bn===1){bn=0;var t=ka,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=Pt;Pt|=4;try{Ag(n,t);var d=Yf,b=Up(t.containerInfo),R=d.focusedElem,B=d.selectionRange;if(b!==R&&R&&R.ownerDocument&&Dp(R.ownerDocument.documentElement,R)){if(B!==null&&Su(R)){var ee=B.start,ge=B.end;if(ge===void 0&&(ge=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(ge,R.value.length);else{var ye=R.ownerDocument||document,ie=ye&&ye.defaultView||window;if(ie.getSelection){var se=ie.getSelection(),it=R.textContent.length,Qe=Math.min(B.start,it),Ht=B.end===void 0?Qe:Math.min(B.end,it);!se.extend&&Qe>Ht&&(b=Ht,Ht=Qe,Qe=b);var Y=Np(R,Qe),j=Np(R,Ht);if(Y&&j&&(se.rangeCount!==1||se.anchorNode!==Y.node||se.anchorOffset!==Y.offset||se.focusNode!==j.node||se.focusOffset!==j.offset)){var Q=ye.createRange();Q.setStart(Y.node,Y.offset),se.removeAllRanges(),Qe>Ht?(se.addRange(Q),se.extend(j.node,j.offset)):(Q.setEnd(j.node,j.offset),se.addRange(Q))}}}}for(ye=[],se=R;se=se.parentNode;)se.nodeType===1&&ye.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var xe=ye[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}uc=!!qf,Yf=qf=null}finally{Pt=u,z.p=o,I.T=a}}t.current=n,bn=2}}function Xg(){if(bn===2){bn=0;var t=ka,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=Pt;Pt|=4;try{Mg(t,n.alternate,n)}finally{Pt=u,z.p=o,I.T=a}}bn=3}}function Wg(){if(bn===4||bn===3){bn=0,ot();var t=ka,n=or,a=lr,o=Lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,or=ka=null,qg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Dt(a),n=n.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=z.p,z.p=2,I.T=null;try{for(var d=t.onRecoverableError,b=0;b<o.length;b++){var R=o[b];d(R.value,{componentStack:R.stack})}}finally{I.T=n,z.p=u}}(lr&3)!==0&&Jl(),Di(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Lf?Eo++:(Eo=0,Lf=t):Eo=0,bo(0)}}function qg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,no(n)))}function Jl(t){return jg(),Xg(),Wg(),Yg()}function Yg(){if(bn!==5)return!1;var t=ka,n=Df;Df=0;var a=Dt(lr),o=I.T,u=z.p;try{z.p=32>a?32:a,I.T=null,a=Uf,Uf=null;var d=ka,b=lr;if(bn=0,or=ka=null,lr=0,(Pt&6)!==0)throw Error(s(331));var R=Pt;if(Pt|=4,Dg(d.current),wg(d,d.current,b,a),Pt=R,bo(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{z.p=u,I.T=o,qg(t,n)}}function Zg(t,n,a){n=ei(a,n),n=ff(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Ie(t,2),Di(t))}function kt(t,n,a){if(t.tag===3)Zg(t,t,a);else for(;n!==null;){if(n.tag===3){Zg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=ei(a,t),a=$m(2),o=La(n,a,2),o!==null&&(eg(a,o,n,t),Ie(o,2),Di(o));break}}n=n.return}}function Ff(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new $x;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Rf=!0,u.add(a),t=aS.bind(null,t,n,a),n.then(t,t))}function aS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(xt&a)===a&&(en===4||en===3&&(xt&62914560)===xt&&300>Et()-Nf?(Pt&2)===0&&cr(t,0):wf|=a,rr===xt&&(rr=0)),Di(t)}function Kg(t,n){n===0&&(n=we()),t=Xs(t,n),t!==null&&(Ie(t,n),Di(t))}function sS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Kg(t,a)}function rS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Kg(t,a)}function oS(t,n){return pt(t,n)}var $l=null,fr=null,Bf=!1,ec=!1,zf=!1,Ms=0;function Di(t){t!==fr&&t.next===null&&(fr===null?$l=fr=t:fr=fr.next=t),ec=!0,Bf||(Bf=!0,cS())}function bo(t,n){if(!zf&&ec){zf=!0;do for(var a=!1,o=$l;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Le(42|t)+1)-1,d&=u&~(b&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,e0(o,d))}else d=xt,d=He(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pe(o,d)||(a=!0,e0(o,d));o=o.next}while(a);zf=!1}}function lS(){Qg()}function Qg(){ec=Bf=!1;var t=0;Ms!==0&&(vS()&&(t=Ms),Ms=0);for(var n=Et(),a=null,o=$l;o!==null;){var u=o.next,d=Jg(o,n);d===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(fr=a)):(a=o,(t!==0||(d&3)!==0)&&(ec=!0)),o=u}bo(t)}function Jg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var b=31-Le(d),R=1<<b,B=u[b];B===-1?((R&a)===0||(R&o)!==0)&&(u[b]=lt(R,n)):B<=n&&(t.expiredLanes|=R),d&=~R}if(n=Xt,a=xt,a=He(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&St(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&St(o),Dt(a)){case 2:case 8:a=yt;break;case 32:a=Rt;break;case 268435456:a=P;break;default:a=Rt}return o=$g.bind(null,t),a=pt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&St(o),t.callbackPriority=2,t.callbackNode=null,2}function $g(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Jl()&&t.callbackNode!==a)return null;var o=xt;return o=He(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Pg(t,o,n),Jg(t,Et()),t.callbackNode!=null&&t.callbackNode===a?$g.bind(null,t):null)}function e0(t,n){if(Jl())return null;Pg(t,n,!0)}function cS(){xS(function(){(Pt&6)!==0?pt(Yt,lS):Qg()})}function Hf(){return Ms===0&&(Ms=X()),Ms}function t0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function n0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function uS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=t0((u[_n]||null).action),b=o.submitter;b&&(n=(n=b[_n]||null)?t0(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var R=new ml("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ms!==0){var B=b?n0(u,b):new FormData(u);rf(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(R.preventDefault(),B=b?n0(u,b):new FormData(u),rf(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Gf=0;Gf<bu.length;Gf++){var Vf=bu[Gf],fS=Vf.toLowerCase(),dS=Vf[0].toUpperCase()+Vf.slice(1);pi(fS,"on"+dS)}pi(Pp,"onAnimationEnd"),pi(Ip,"onAnimationIteration"),pi(Fp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Cx,"onTransitionRun"),pi(Nx,"onTransitionStart"),pi(Dx,"onTransitionCancel"),pi(Bp,"onTransitionEnd"),wa("onMouseEnter",["mouseout","mouseover"]),wa("onMouseLeave",["mouseout","mouseover"]),wa("onPointerEnter",["pointerout","pointerover"]),wa("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function i0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var R=o[b],B=R.instance,ee=R.currentTarget;if(R=R.listener,B!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(ge){Gl(ge)}u.currentTarget=null,d=B}else for(b=0;b<o.length;b++){if(R=o[b],B=R.instance,ee=R.currentTarget,R=R.listener,B!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ee;try{d(u)}catch(ge){Gl(ge)}u.currentTarget=null,d=B}}}}function gt(t,n){var a=n[Is];a===void 0&&(a=n[Is]=new Set);var o=t+"__bubble";a.has(o)||(a0(n,t,2,!1),a.add(o))}function kf(t,n,a){var o=0;n&&(o|=4),a0(a,t,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function jf(t){if(!t[tc]){t[tc]=!0,ol.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||kf(a,!1,t),kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[tc]||(n[tc]=!0,kf("selectionchange",!1,n))}}function a0(t,n,a,o){switch(w0(n)){case 2:var u=HS;break;case 8:u=GS;break;default:u=ad}a=u.bind(null,n,a,t),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var R=o.stateNode.containerInfo;if(R===u)break;if(b===4)for(b=o.return;b!==null;){var B=b.tag;if((B===3||B===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;R!==null;){if(b=di(R),b===null)return;if(B=b.tag,B===5||B===6||B===26||B===27){o=d=b;continue e}R=R.parentNode}}o=o.return}fp(function(){var ee=d,ge=cu(a),ye=[];e:{var ie=zp.get(t);if(ie!==void 0){var se=ml,it=t;switch(t){case"keypress":if(hl(a)===0)break e;case"keydown":case"keyup":se=ox;break;case"focusin":it="focus",se=mu;break;case"focusout":it="blur",se=mu;break;case"beforeblur":case"afterblur":se=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=ux;break;case Pp:case Ip:case Fp:se=J_;break;case Bp:se=dx;break;case"scroll":case"scrollend":se=q_;break;case"wheel":se=px;break;case"copy":case"cut":case"paste":se=ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=gp;break;case"toggle":case"beforetoggle":se=gx}var Qe=(n&4)!==0,Ht=!Qe&&(t==="scroll"||t==="scrollend"),Y=Qe?ie!==null?ie+"Capture":null:ie;Qe=[];for(var j=ee,Q;j!==null;){var xe=j;if(Q=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||Q===null||Y===null||(xe=kr(j,Y),xe!=null&&Qe.push(Ao(j,xe,Q))),Ht)break;j=j.return}0<Qe.length&&(ie=new se(ie,it,null,a,ge),ye.push({event:ie,listeners:Qe}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",ie&&a!==lu&&(it=a.relatedTarget||a.fromElement)&&(di(it)||it[Aa]))break e;if((se||ie)&&(ie=ge.window===ge?ge:(ie=ge.ownerDocument)?ie.defaultView||ie.parentWindow:window,se?(it=a.relatedTarget||a.toElement,se=ee,it=it?di(it):null,it!==null&&(Ht=c(it),Qe=it.tag,it!==Ht||Qe!==5&&Qe!==27&&Qe!==6)&&(it=null)):(se=null,it=ee),se!==it)){if(Qe=pp,xe="onMouseLeave",Y="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=gp,xe="onPointerLeave",Y="onPointerEnter",j="pointer"),Ht=se==null?ie:bi(se),Q=it==null?ie:bi(it),ie=new Qe(xe,j+"leave",se,a,ge),ie.target=Ht,ie.relatedTarget=Q,xe=null,di(ge)===ee&&(Qe=new Qe(Y,j+"enter",it,a,ge),Qe.target=Q,Qe.relatedTarget=Ht,xe=Qe),Ht=xe,se&&it)t:{for(Qe=se,Y=it,j=0,Q=Qe;Q;Q=dr(Q))j++;for(Q=0,xe=Y;xe;xe=dr(xe))Q++;for(;0<j-Q;)Qe=dr(Qe),j--;for(;0<Q-j;)Y=dr(Y),Q--;for(;j--;){if(Qe===Y||Y!==null&&Qe===Y.alternate)break t;Qe=dr(Qe),Y=dr(Y)}Qe=null}else Qe=null;se!==null&&s0(ye,ie,se,Qe,!1),it!==null&&Ht!==null&&s0(ye,Ht,it,Qe,!0)}}e:{if(ie=ee?bi(ee):window,se=ie.nodeName&&ie.nodeName.toLowerCase(),se==="select"||se==="input"&&ie.type==="file")var ke=bp;else if(Mp(ie))if(Tp)ke=Ax;else{ke=bx;var ht=Ex}else se=ie.nodeName,!se||se.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&Ai(ee.elementType)&&(ke=bp):ke=Tx;if(ke&&(ke=ke(t,ee))){Ep(ye,ke,a,ge);break e}ht&&ht(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&In(ie,"number",ie.value)}switch(ht=ee?bi(ee):window,t){case"focusin":(Mp(ht)||ht.contentEditable==="true")&&(Vs=ht,yu=ee,Qr=null);break;case"focusout":Qr=yu=Vs=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Lp(ye,a,ge);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Lp(ye,a,ge)}var Ye;if(vu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Gs?Sp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(vp&&a.locale!=="ko"&&(Gs||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Gs&&(Ye=dp()):(Ca=ge,du="value"in Ca?Ca.value:Ca.textContent,Gs=!0)),ht=nc(ee,tt),0<ht.length&&(tt=new mp(tt,t,null,a,ge),ye.push({event:tt,listeners:ht}),Ye?tt.data=Ye:(Ye=yp(a),Ye!==null&&(tt.data=Ye)))),(Ye=_x?xx(t,a):Sx(t,a))&&(tt=nc(ee,"onBeforeInput"),0<tt.length&&(ht=new mp("onBeforeInput","beforeinput",null,a,ge),ye.push({event:ht,listeners:tt}),ht.data=Ye)),uS(ye,t,ee,a,ge)}i0(ye,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function nc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=kr(t,a),u!=null&&o.unshift(Ao(t,u,d)),u=kr(t,n),u!=null&&o.push(Ao(t,u,d))),t.tag===3)return o;t=t.return}return[]}function dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s0(t,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var R=a,B=R.alternate,ee=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||ee===null||(B=ee,u?(ee=kr(a,d),ee!=null&&b.unshift(Ao(a,ee,B))):u||(ee=kr(a,d),ee!=null&&b.push(Ao(a,ee,B)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function r0(t){return(typeof t=="string"?t:""+t).replace(pS,`
`).replace(mS,"")}function o0(t,n){return n=r0(n),r0(t)===n}function ic(){}function zt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Wt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Wt(t,""+o);break;case"className":ne(t,"class",o);break;case"tabIndex":ne(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(t,a,o);break;case"style":hi(t,o,d);break;case"data":if(n!=="object"){ne(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",u.name,u,null),zt(t,n,"formEncType",u.formEncType,u,null),zt(t,n,"formMethod",u.formMethod,u,null),zt(t,n,"formTarget",u.formTarget,u,null)):(zt(t,n,"encType",u.encType,u,null),zt(t,n,"method",u.method,u,null),zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ic);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),oe(t,"popover",o);break;case"xlinkActuate":K(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":K(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":K(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":K(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":K(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":K(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":K(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":K(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":K(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ul.get(a)||a,oe(t,a,o))}}function Wf(t,n,a,o,u,d){switch(a){case"style":hi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Wt(t,o):(typeof o=="number"||typeof o=="bigint")&&Wt(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ic);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ll.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):oe(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:zt(t,n,d,b,a,null)}}u&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var R=d=b=u=null,B=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":b=ge;break;case"checked":B=ge;break;case"defaultChecked":ee=ge;break;case"value":d=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:zt(t,n,o,ge,a,null)}}Pn(t,d,R,B,ee,b,u,!1),Vt(t);return;case"select":gt("invalid",t),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":b=R;break;case"multiple":o=R;default:zt(t,n,u,R,a,null)}n=d,a=b,t.multiple=!!o,n!=null?Fn(t,!!o,n,!1):a!=null&&Fn(t,!!o,a,!0);return;case"textarea":gt("invalid",t),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(R=a[b],R!=null))switch(b){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:zt(t,n,b,R,a,null)}Ut(t,o,u,d),Vt(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,B,o,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)gt(To[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:zt(t,n,ee,o,a,null)}return;default:if(Ai(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&Wf(t,n,ge,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&zt(t,n,R,o,a,null))}function gS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,R=null,B=null,ee=null,ge=null;for(se in a){var ye=a[se];if(a.hasOwnProperty(se)&&ye!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":B=ye;default:o.hasOwnProperty(se)||zt(t,n,se,null,o,ye)}}for(var ie in o){var se=o[ie];if(ye=a[ie],o.hasOwnProperty(ie)&&(se!=null||ye!=null))switch(ie){case"type":d=se;break;case"name":u=se;break;case"checked":ee=se;break;case"defaultChecked":ge=se;break;case"value":b=se;break;case"defaultValue":R=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==ye&&zt(t,n,ie,se,o,ye)}}vt(t,b,R,B,ee,ge,d,u);return;case"select":se=b=R=ie=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":se=B;default:o.hasOwnProperty(d)||zt(t,n,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":ie=d;break;case"defaultValue":R=d;break;case"multiple":b=d;default:d!==B&&zt(t,n,u,d,o,B)}n=R,a=b,o=se,ie!=null?Fn(t,!!a,ie,!1):!!o!=!!a&&(n!=null?Fn(t,!!a,n,!0):Fn(t,!!a,a?[]:"",!1));return;case"textarea":se=ie=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:zt(t,n,R,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":ie=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&zt(t,n,b,u,o,d)}Yi(t,ie,se);return;case"option":for(var it in a)if(ie=a[it],a.hasOwnProperty(it)&&ie!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:zt(t,n,it,null,o,ie)}for(B in o)if(ie=o[B],se=a[B],o.hasOwnProperty(B)&&ie!==se&&(ie!=null||se!=null))switch(B){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:zt(t,n,B,ie,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)ie=a[Qe],a.hasOwnProperty(Qe)&&ie!=null&&!o.hasOwnProperty(Qe)&&zt(t,n,Qe,null,o,ie);for(ee in o)if(ie=o[ee],se=a[ee],o.hasOwnProperty(ee)&&ie!==se&&(ie!=null||se!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:zt(t,n,ee,ie,o,se)}return;default:if(Ai(n)){for(var Ht in a)ie=a[Ht],a.hasOwnProperty(Ht)&&ie!==void 0&&!o.hasOwnProperty(Ht)&&Wf(t,n,Ht,void 0,o,ie);for(ge in o)ie=o[ge],se=a[ge],!o.hasOwnProperty(ge)||ie===se||ie===void 0&&se===void 0||Wf(t,n,ge,ie,o,se);return}}for(var Y in a)ie=a[Y],a.hasOwnProperty(Y)&&ie!=null&&!o.hasOwnProperty(Y)&&zt(t,n,Y,null,o,ie);for(ye in o)ie=o[ye],se=a[ye],!o.hasOwnProperty(ye)||ie===se||ie==null&&se==null||zt(t,n,ye,ie,o,se)}var qf=null,Yf=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function l0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function vS(){var t=window.event;return t&&t.type==="popstate"?t===Kf?!1:(Kf=t,!0):(Kf=null,!1)}var u0=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,f0=typeof Promise=="function"?Promise:void 0,xS=typeof queueMicrotask=="function"?queueMicrotask:typeof f0<"u"?function(t){return f0.resolve(null).then(t).catch(SS)}:u0;function SS(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function d0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var b=t.ownerDocument;if(a&1&&Ro(b.documentElement),a&2&&Ro(b.body),a&4)for(a=b.head,Ro(a),b=a.firstChild;b;){var R=b.nextSibling,B=b.nodeName;b[Ra]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=R}}if(u===0){t.removeChild(d),Po(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Po(n)}function Qf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qf(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function MS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ES(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var $f=null;function h0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function p0(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Bs(t)}var ri=new Map,m0=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=z.d;z.d={f:bS,r:TS,D:AS,C:RS,L:wS,m:CS,X:DS,S:NS,M:US};function bS(){var t=la.f(),n=Kl();return t||n}function TS(t){var n=Xi(t);n!==null&&n.tag===5&&n.type==="form"?Pm(n):la.r(t)}var hr=typeof document>"u"?null:document;function g0(t,n,a){var o=hr;if(o&&typeof n=="string"&&n){var u=jt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),m0.has(u)||(m0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function AS(t){la.D(t),g0("dns-prefetch",t,null)}function RS(t,n){la.C(t,n),g0("preconnect",t,n)}function wS(t,n,a){la.L(t,n,a);var o=hr;if(o&&t&&n){var u='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+jt(a.imageSizes)+'"]')):u+='[href="'+jt(t)+'"]';var d=u;switch(n){case"style":d=pr(t);break;case"script":d=mr(t)}ri.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(wo(d))||n==="script"&&o.querySelector(Co(d))||(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function CS(t,n){la.m(t,n);var a=hr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+jt(o)+'"][href="'+jt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=mr(t)}if(!ri.has(d)&&(t=_({rel:"modulepreload",href:t},n),ri.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(d)))return}o=a.createElement("link"),Tn(o,"link",t),tn(o),a.head.appendChild(o)}}}function NS(t,n,a){la.S(t,n,a);var o=hr;if(o&&t){var u=Wi(o).hoistableStyles,d=pr(t);n=n||"default";var b=u.get(d);if(!b){var R={loading:0,preload:null};if(b=o.querySelector(wo(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(d))&&ed(t,a);var B=b=o.createElement("link");tn(B),Tn(B,"link",t),B._p=new Promise(function(ee,ge){B.onload=ee,B.onerror=ge}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,rc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:R},u.set(d,b)}}}function DS(t,n){la.X(t,n);var a=hr;if(a&&t){var o=Wi(a).hoistableScripts,u=mr(t),d=o.get(u);d||(d=a.querySelector(Co(u)),d||(t=_({src:t,async:!0},n),(n=ri.get(u))&&td(t,n),d=a.createElement("script"),tn(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function US(t,n){la.M(t,n);var a=hr;if(a&&t){var o=Wi(a).hoistableScripts,u=mr(t),d=o.get(u);d||(d=a.querySelector(Co(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=ri.get(u))&&td(t,n),d=a.createElement("script"),tn(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function v0(t,n,a,o){var u=(u=$.current)?sc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Wi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var d=Wi(u).hoistableStyles,b=d.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,b),(d=u.querySelector(wo(t)))&&!d._p&&(b.instance=d,b.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),d||LS(u,t,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Wi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+jt(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function _0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function LS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),tn(n),t.head.appendChild(n))}function mr(t){return'[src="'+jt(t)+'"]'}function Co(t){return"script[async]"+t}function x0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+jt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),Tn(o,"style",u),rc(o,a.precedence,t),n.instance=o;case"stylesheet":u=pr(a.href);var d=t.querySelector(wo(u));if(d)return n.state.loading|=4,n.instance=d,tn(d),d;o=_0(a),(u=ri.get(u))&&ed(o,u),d=(t.ownerDocument||t).createElement("link"),tn(d);var b=d;return b._p=new Promise(function(R,B){b.onload=R,b.onerror=B}),Tn(d,"link",o),n.state.loading|=4,rc(d,a.precedence,t),n.instance=d;case"script":return d=mr(a.src),(u=t.querySelector(Co(d)))?(n.instance=u,tn(u),u):(o=a,(u=ri.get(d))&&(o=_({},a),td(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),Tn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,a.precedence,t));return n.instance}function rc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var R=o[b];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function S0(t,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ra]||d[dn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=t+b;var R=o.get(b);R?R.push(d):o.set(b,[d])}}return o}function y0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function OS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var No=null;function PS(){}function IS(t,n,a){if(No===null)throw Error(s(475));var o=No;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=pr(a.href),d=t.querySelector(wo(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=lc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,tn(d);return}d=t.ownerDocument||t,a=_0(a),(u=ri.get(u))&&ed(a,u),d=d.createElement("link"),tn(d);var b=d;b._p=new Promise(function(R,B){b.onload=R,b.onerror=B}),Tn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=lc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function FS(){if(No===null)throw Error(s(475));var t=No;return t.stylesheets&&t.count===0&&nd(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&nd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function lc(){if(this.count--,this.count===0){if(this.stylesheets)nd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function nd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(BS,t),cc=null,lc.call(t))}function BS(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var o=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:D,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function zS(t,n,a,o,u,d,b,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function E0(t,n,a,o,u,d,b,R,B,ee,ge,ye){return t=new zS(t,n,a,b,R,B,ee,ye),n=1,d===!0&&(n|=24),d=Xn(3,null,null,n),t.current=d,d.stateNode=t,n=Iu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Hu(d),t}function b0(t){return t?(t=Ws,t):Ws}function T0(t,n,a,o,u,d){u=b0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=La(t,o,n),a!==null&&(Kn(a,t,n),ro(a,t,n))}function A0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function id(t,n){A0(t,n),(t=t.alternate)&&A0(t,n)}function R0(t){if(t.tag===13){var n=Xs(t,67108864);n!==null&&Kn(n,t,67108864),id(t,67108864)}}var uc=!0;function HS(t,n,a,o){var u=I.T;I.T=null;var d=z.p;try{z.p=2,ad(t,n,a,o)}finally{z.p=d,I.T=u}}function GS(t,n,a,o){var u=I.T;I.T=null;var d=z.p;try{z.p=8,ad(t,n,a,o)}finally{z.p=d,I.T=u}}function ad(t,n,a,o){if(uc){var u=sd(o);if(u===null)Xf(t,n,o,fc,a),C0(t,o);else if(kS(u,t,n,a,o))o.stopPropagation();else if(C0(t,o),n&4&&-1<VS.indexOf(t)){for(;u!==null;){var d=Xi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Fe(d.pendingLanes);if(b!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;b;){var B=1<<31-Le(b);R.entanglements[1]|=B,b&=~B}Di(d),(Pt&6)===0&&(Yl=Et()+500,bo(0))}}break;case 13:R=Xs(d,2),R!==null&&Kn(R,d,2),Kl(),id(d,2)}if(d=sd(o),d===null&&Xf(t,n,o,fc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Xf(t,n,o,null,a)}}function sd(t){return t=cu(t),rd(t)}var fc=null;function rd(t){if(fc=null,t=di(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return fc=t,null}function w0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case Yt:return 2;case yt:return 8;case Rt:case je:return 32;case P:return 268435456;default:return 32}default:return 32}}var od=!1,Wa=null,qa=null,Ya=null,Uo=new Map,Lo=new Map,Za=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C0(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Xi(n),n!==null&&R0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function kS(t,n,a,o,u){switch(n){case"focusin":return Wa=Oo(Wa,t,n,a,o,u),!0;case"dragenter":return qa=Oo(qa,t,n,a,o,u),!0;case"mouseover":return Ya=Oo(Ya,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Uo.set(d,Oo(Uo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Lo.set(d,Oo(Lo.get(d)||null,t,n,a,o,u)),!0}return!1}function N0(t){var n=di(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,fi(t.priority,function(){if(a.tag===13){var o=Zn();o=nt(o);var u=Xs(a,o);u!==null&&Kn(u,a,o),id(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return n=Xi(a),n!==null&&R0(n),t.blockedOn=a,!1;n.shift()}return!0}function D0(t,n,a){dc(t)&&a.delete(n)}function jS(){od=!1,Wa!==null&&dc(Wa)&&(Wa=null),qa!==null&&dc(qa)&&(qa=null),Ya!==null&&dc(Ya)&&(Ya=null),Uo.forEach(D0),Lo.forEach(D0)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,od||(od=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jS)))}var pc=null;function U0(t){pc!==t&&(pc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===t&&(pc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(rd(o||a)===null)continue;break}var d=Xi(a);d!==null&&(t.splice(n,3),n-=3,rf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Po(t){function n(B){return hc(B,t)}Wa!==null&&hc(Wa,t),qa!==null&&hc(qa,t),Ya!==null&&hc(Ya,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)N0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[_n]||null;if(typeof d=="function")b||U0(a);else if(b){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[_n]||null)R=b.formAction;else if(rd(u)!==null)continue}else R=b.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),U0(a)}}}function ld(t){this._internalRoot=t}mc.prototype.render=ld.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Zn();T0(a,o,t,n,null,null)},mc.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;T0(t.current,2,null,t,null,null),Kl(),n[Aa]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&N0(t)}};var L0=e.version;if(L0!=="19.1.0")throw Error(s(527,L0,"19.1.0"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var XS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{me=gc.inject(XS),_e=gc}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Zm,d=Km,b=Qm,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=E0(t,1,!1,null,null,a,o,u,d,b,R,null),t[Aa]=n.current,jf(t),new ld(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Zm,b=Km,R=Qm,B=null,ee=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(ee=a.formState)),n=E0(t,1,!0,n,a??null,o,u,d,b,R,B,ee),n.context=b0(null),a=n.current,o=Zn(),o=nt(o),u=Ua(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Ie(n,a),Di(n),t[Aa]=n.current,jf(t),new mc(n)},Fo.version="19.1.0",Fo}var k0;function ny(){if(k0)return fd.exports;k0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),fd.exports=ty(),fd.exports}var iy=ny();const ay=Yv(iy);var Bo={},j0;function sy(){if(j0)return Bo;j0=1,Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.parse=f,Bo.serialize=h;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,M){const E=new c,C=v.length;if(C<2)return E;const y=(M==null?void 0:M.decode)||_;let x=0;do{const N=v.indexOf("=",x);if(N===-1)break;const D=v.indexOf(";",x),L=D===-1?C:D;if(N>L){x=v.lastIndexOf(";",N-1)+1;continue}const F=p(v,x,N),H=m(v,N,F),V=v.slice(F,H);if(E[V]===void 0){let A=p(v,N+1,L),U=m(v,L,A);const he=y(v.slice(A,U));E[V]=he}x=L+1}while(x<C);return E}function p(v,M,E){do{const C=v.charCodeAt(M);if(C!==32&&C!==9)return M}while(++M<E);return E}function m(v,M,E){for(;M>E;){const C=v.charCodeAt(--M);if(C!==32&&C!==9)return M+1}return E}function h(v,M,E){const C=(E==null?void 0:E.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=C(M);if(!e.test(y))throw new TypeError(`argument val is invalid: ${M}`);let x=v+"="+y;if(!E)return x;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);x+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);x+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);x+="; Path="+E.path}if(E.expires){if(!S(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);x+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(x+="; HttpOnly"),E.secure&&(x+="; Secure"),E.partitioned&&(x+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":x+="; Priority=Low";break;case"medium":x+="; Priority=Medium";break;case"high":x+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":x+="; SameSite=Strict";break;case"lax":x+="; SameSite=Lax";break;case"none":x+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return x}function _(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function S(v){return l.call(v)==="[object Date]"}return Bo}sy();var X0="popstate";function ry(r={}){function e(s,l){let{pathname:c,search:f,hash:p}=s.location;return Qd("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Zo(l)}return ly(e,i,null,r)}function Qt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Hi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oy(){return Math.random().toString(36).substring(2,10)}function W0(r,e){return{usr:r.state,key:r.key,idx:e}}function Qd(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Br(e):e,state:i,key:e&&e.key||s||oy()}}function Zo({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Br(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function ly(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,h=_();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function _(){return(f.state||{idx:null}).idx}function S(){p="POP";let y=_(),x=y==null?null:y-h;h=y,m&&m({action:p,location:C.location,delta:x})}function v(y,x){p="PUSH";let N=Qd(C.location,y,x);h=_()+1;let D=W0(N,h),L=C.createHref(N);try{f.pushState(D,"",L)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(L)}c&&m&&m({action:p,location:C.location,delta:1})}function M(y,x){p="REPLACE";let N=Qd(C.location,y,x);h=_();let D=W0(N,h),L=C.createHref(N);f.replaceState(D,"",L),c&&m&&m({action:p,location:C.location,delta:0})}function E(y){return cy(y)}let C={get action(){return p},get location(){return r(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(X0,S),m=y,()=>{l.removeEventListener(X0,S),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:M,go(y){return f.go(y)}};return C}function cy(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Zo(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function Zv(r,e,i="/"){return uy(r,e,i,!1)}function uy(r,e,i,s){let l=typeof e=="string"?Br(e):e,c=Sa(l.pathname||"/",i);if(c==null)return null;let f=Kv(r);fy(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=My(c);p=Sy(f[m],h,s)}return p}function Kv(r,e=[],i=[],s=""){let l=(c,f,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(Qt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let h=ga([s,m.relativePath]),_=i.concat(m);c.children&&c.children.length>0&&(Qt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Kv(c.children,e,_,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:_y(h,c.index),routesMeta:_})};return r.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,f);else for(let m of Qv(c.path))l(c,f,m)}),e}function Qv(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Qv(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function fy(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:xy(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var dy=/^:[\w-]+$/,hy=3,py=2,my=1,gy=10,vy=-2,q0=r=>r==="*";function _y(r,e){let i=r.split("/"),s=i.length;return i.some(q0)&&(s+=vy),e&&(s+=py),i.filter(l=>!q0(l)).reduce((l,c)=>l+(dy.test(c)?hy:c===""?my:gy),s)}function xy(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function Sy(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],h=p===s.length-1,_=c==="/"?e:e.slice(c.length)||"/",S=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},_),v=m.route;if(!S&&h&&i&&!s[s.length-1].route.index&&(S=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!S)return null;Object.assign(l,S.params),f.push({params:l,pathname:ga([c,S.pathname]),pathnameBase:Ay(ga([c,S.pathnameBase])),route:v}),S.pathnameBase!=="/"&&(c=ga([c,S.pathnameBase]))}return f}function Kc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=yy(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((h,{paramName:_,isOptional:S},v)=>{if(_==="*"){let E=p[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=p[v];return S&&!M?h[_]=void 0:h[_]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function yy(r,e=!1,i=!0){Hi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function My(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Sa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function Ey(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Br(r):r;return{pathname:i?i.startsWith("/")?i:by(i,e):e,search:Ry(s),hash:wy(l)}}function by(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function md(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ty(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Jv(r){let e=Ty(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function $v(r,e,i,s=!1){let l;typeof r=="string"?l=Br(r):(l={...r},Qt(!l.pathname||!l.pathname.includes("?"),md("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),md("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),md("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let S=e.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),S-=1;l.pathname=v.join("/")}p=S>=0?e[S]:"/"}let m=Ey(l,p),h=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||_)&&(m.pathname+="/"),m}var ga=r=>r.join("/").replace(/\/\/+/g,"/"),Ay=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Ry=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,wy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Cy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var e_=["POST","PUT","PATCH","DELETE"];new Set(e_);var Ny=["GET",...e_];new Set(Ny);var zr=re.createContext(null);zr.displayName="DataRouter";var tu=re.createContext(null);tu.displayName="DataRouterState";var t_=re.createContext({isTransitioning:!1});t_.displayName="ViewTransition";var Dy=re.createContext(new Map);Dy.displayName="Fetchers";var Uy=re.createContext(null);Uy.displayName="Await";var ki=re.createContext(null);ki.displayName="Navigation";var $o=re.createContext(null);$o.displayName="Location";var ba=re.createContext({outlet:null,matches:[],isDataRoute:!1});ba.displayName="Route";var qh=re.createContext(null);qh.displayName="RouteError";function Ly(r,{relative:e}={}){Qt(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=re.useContext(ki),{hash:l,pathname:c,search:f}=tl(r,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:ga([i,c])),s.createHref({pathname:p,search:f,hash:l})}function el(){return re.useContext($o)!=null}function rs(){return Qt(el(),"useLocation() may be used only in the context of a <Router> component."),re.useContext($o).location}var n_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function i_(r){re.useContext(ki).static||re.useLayoutEffect(r)}function Ps(){let{isDataRoute:r}=re.useContext(ba);return r?Wy():Oy()}function Oy(){Qt(el(),"useNavigate() may be used only in the context of a <Router> component.");let r=re.useContext(zr),{basename:e,navigator:i}=re.useContext(ki),{matches:s}=re.useContext(ba),{pathname:l}=rs(),c=JSON.stringify(Jv(s)),f=re.useRef(!1);return i_(()=>{f.current=!0}),re.useCallback((m,h={})=>{if(Hi(f.current,n_),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=$v(m,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ga([e,_.pathname])),(h.replace?i.replace:i.push)(_,h.state,h)},[e,i,c,l,r])}re.createContext(null);function tl(r,{relative:e}={}){let{matches:i}=re.useContext(ba),{pathname:s}=rs(),l=JSON.stringify(Jv(i));return re.useMemo(()=>$v(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function Py(r,e){return a_(r,e)}function a_(r,e,i,s){var N;Qt(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=re.useContext(ki),{matches:f}=re.useContext(ba),p=f[f.length-1],m=p?p.params:{},h=p?p.pathname:"/",_=p?p.pathnameBase:"/",S=p&&p.route;{let D=S&&S.path||"";s_(h,!S||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=rs(),M;if(e){let D=typeof e=="string"?Br(e):e;Qt(_==="/"||((N=D.pathname)==null?void 0:N.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${D.pathname}" was given in the \`location\` prop.`),M=D}else M=v;let E=M.pathname||"/",C=E;if(_!=="/"){let D=_.replace(/^\//,"").split("/");C="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=!c&&i&&i.matches&&i.matches.length>0?i.matches:Zv(r,{pathname:C});Hi(S||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Hi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Hy(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:ga([_,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?_:ga([_,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,i,s);return e&&x?re.createElement($o.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},x):x}function Iy(){let r=Xy(),e=Cy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=re.createElement(re.Fragment,null,re.createElement("p",null,"💿 Hey developer 👋"),re.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",re.createElement("code",{style:c},"ErrorBoundary")," or"," ",re.createElement("code",{style:c},"errorElement")," prop on your route.")),re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),i?re.createElement("pre",{style:l},i):null,f)}var Fy=re.createElement(Iy,null),By=class extends re.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?re.createElement(ba.Provider,{value:this.props.routeContext},re.createElement(qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zy({routeContext:r,match:e,children:i}){let s=re.useContext(zr);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),re.createElement(ba.Provider,{value:r},i)}function Hy(r,e=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let m=l.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);Qt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,p=-1;if(i)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(p=m),h.route.id){let{loaderData:_,errors:S}=i,v=h.route.loader&&!_.hasOwnProperty(h.route.id)&&(!S||S[h.route.id]===void 0);if(h.route.lazy||v){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,h,_)=>{let S,v=!1,M=null,E=null;i&&(S=c&&h.route.id?c[h.route.id]:void 0,M=h.route.errorElement||Fy,f&&(p<0&&_===0?(s_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):p===_&&(v=!0,E=h.route.hydrateFallbackElement||null)));let C=e.concat(l.slice(0,_+1)),y=()=>{let x;return S?x=M:v?x=E:h.route.Component?x=re.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=m,re.createElement(zy,{match:h,routeContext:{outlet:m,matches:C,isDataRoute:i!=null},children:x})};return i&&(h.route.ErrorBoundary||h.route.errorElement||_===0)?re.createElement(By,{location:i.location,revalidation:i.revalidation,component:M,error:S,children:y(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):y()},null)}function Yh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gy(r){let e=re.useContext(zr);return Qt(e,Yh(r)),e}function Vy(r){let e=re.useContext(tu);return Qt(e,Yh(r)),e}function ky(r){let e=re.useContext(ba);return Qt(e,Yh(r)),e}function Zh(r){let e=ky(r),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function jy(){return Zh("useRouteId")}function Xy(){var s;let r=re.useContext(qh),e=Vy("useRouteError"),i=Zh("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[i]}function Wy(){let{router:r}=Gy("useNavigate"),e=Zh("useNavigate"),i=re.useRef(!1);return i_(()=>{i.current=!0}),re.useCallback(async(l,c={})=>{Hi(i.current,n_),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Y0={};function s_(r,e,i){!e&&!Y0[r]&&(Y0[r]=!0,Hi(!1,i))}re.memo(qy);function qy({routes:r,future:e,state:i}){return a_(r,void 0,i,e)}function li(r){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Yy({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){Qt(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),p=re.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Br(i));let{pathname:m="/",search:h="",hash:_="",state:S=null,key:v="default"}=i,M=re.useMemo(()=>{let E=Sa(m,f);return E==null?null:{location:{pathname:E,search:h,hash:_,state:S,key:v},navigationType:s}},[f,m,h,_,S,v,s]);return Hi(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${h}${_}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:re.createElement(ki.Provider,{value:p},re.createElement($o.Provider,{children:e,value:M}))}function Zy({children:r,location:e}){return Py(Jd(r),e)}function Jd(r,e=[]){let i=[];return re.Children.forEach(r,(s,l)=>{if(!re.isValidElement(s))return;let c=[...e,l];if(s.type===re.Fragment){i.push.apply(i,Jd(s.props.children,c));return}Qt(s.type===li,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Jd(s.props.children,c)),i.push(f)}),i}var Vc="get",kc="application/x-www-form-urlencoded";function nu(r){return r!=null&&typeof r.tagName=="string"}function Ky(r){return nu(r)&&r.tagName.toLowerCase()==="button"}function Qy(r){return nu(r)&&r.tagName.toLowerCase()==="form"}function Jy(r){return nu(r)&&r.tagName.toLowerCase()==="input"}function $y(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function eM(r,e){return r.button===0&&(!e||e==="_self")&&!$y(r)}var vc=null;function tM(){if(vc===null)try{new FormData(document.createElement("form"),0),vc=!1}catch{vc=!0}return vc}var nM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gd(r){return r!=null&&!nM.has(r)?(Hi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kc}"`),null):r}function iM(r,e){let i,s,l,c,f;if(Qy(r)){let p=r.getAttribute("action");s=p?Sa(p,e):null,i=r.getAttribute("method")||Vc,l=gd(r.getAttribute("enctype"))||kc,c=new FormData(r)}else if(Ky(r)||Jy(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Sa(m,e):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||Vc,l=gd(r.getAttribute("formenctype"))||gd(p.getAttribute("enctype"))||kc,c=new FormData(p,r),!tM()){let{name:h,type:_,value:S}=r;if(_==="image"){let v=h?`${h}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else h&&c.append(h,S)}}else{if(nu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Vc,s=null,l=kc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}function Kh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function aM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function rM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await aM(c,i);return f.links?f.links():[]}return[]}));return uM(s.flat(1).filter(sM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Z0(r,e,i,s,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>{var _;return i[h].pathname!==m.pathname||((_=i[h].route.path)==null?void 0:_.endsWith("*"))&&i[h].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{var S;let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((S=i[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function oM(r,e,{includeHydrateFallback:i}={}){return lM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function lM(r){return[...new Set(r)]}function cM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function uM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(cM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fM=new Set([100,101,204,205]);function dM(r,e){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":e&&Sa(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function r_(){let r=re.useContext(zr);return Kh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function hM(){let r=re.useContext(tu);return Kh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Qh=re.createContext(void 0);Qh.displayName="FrameworkContext";function o_(){let r=re.useContext(Qh);return Kh(r,"You must render this element inside a <HydratedRouter> element"),r}function pM(r,e){let i=re.useContext(Qh),[s,l]=re.useState(!1),[c,f]=re.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:_,onTouchStart:S}=e,v=re.useRef(null);re.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=x=>{x.forEach(N=>{f(N.isIntersecting)})},y=new IntersectionObserver(C,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),re.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:zo(p,M),onBlur:zo(m,E),onMouseEnter:zo(h,M),onMouseLeave:zo(_,E),onTouchStart:zo(S,M)}]:[!1,v,{}]}function zo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function mM({page:r,...e}){let{router:i}=r_(),s=re.useMemo(()=>Zv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?re.createElement(vM,{page:r,matches:s,...e}):null}function gM(r){let{manifest:e,routeModules:i}=o_(),[s,l]=re.useState([]);return re.useEffect(()=>{let c=!1;return rM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function vM({page:r,matches:e,...i}){let s=rs(),{manifest:l,routeModules:c}=o_(),{basename:f}=r_(),{loaderData:p,matches:m}=hM(),h=re.useMemo(()=>Z0(r,e,m,l,s,"data"),[r,e,m,l,s]),_=re.useMemo(()=>Z0(r,e,m,l,s,"assets"),[r,e,m,l,s]),S=re.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,C=!1;if(e.forEach(x=>{var D;let N=l.routes[x.route.id];!N||!N.hasLoader||(!h.some(L=>L.route.id===x.route.id)&&x.route.id in p&&((D=c[x.route.id])!=null&&D.shouldRevalidate)||N.hasClientLoader?C=!0:E.add(x.route.id))}),E.size===0)return[];let y=dM(r,f);return C&&E.size>0&&y.searchParams.set("_routes",e.filter(x=>E.has(x.route.id)).map(x=>x.route.id).join(",")),[y.pathname+y.search]},[f,p,s,l,h,e,r,c]),v=re.useMemo(()=>oM(_,l),[_,l]),M=gM(_);return re.createElement(re.Fragment,null,S.map(E=>re.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>re.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:C})=>re.createElement("link",{key:E,...C})))}function _M(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var l_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{l_&&(window.__reactRouterVersion="7.6.0")}catch{}function xM({basename:r,children:e,window:i}){let s=re.useRef();s.current==null&&(s.current=ry({window:i,v5Compat:!0}));let l=s.current,[c,f]=re.useState({action:l.action,location:l.location}),p=re.useCallback(m=>{re.startTransition(()=>f(m))},[f]);return re.useLayoutEffect(()=>l.listen(p),[l,p]),re.createElement(Yy,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l})}var c_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,u_=re.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:h,preventScrollReset:_,viewTransition:S,...v},M){let{basename:E}=re.useContext(ki),C=typeof h=="string"&&c_.test(h),y,x=!1;if(typeof h=="string"&&C&&(y=h,l_))try{let U=new URL(window.location.href),he=h.startsWith("//")?new URL(U.protocol+h):new URL(h),G=Sa(he.pathname,E);he.origin===U.origin&&G!=null?h=G+he.search+he.hash:x=!0}catch{Hi(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=Ly(h,{relative:l}),[D,L,F]=pM(s,v),H=MM(h,{replace:f,state:p,target:m,preventScrollReset:_,relative:l,viewTransition:S});function V(U){e&&e(U),U.defaultPrevented||H(U)}let A=re.createElement("a",{...v,...F,href:y||N,onClick:x||c?e:V,ref:_M(M,L),target:m,"data-discover":!C&&i==="render"?"true":void 0});return D&&!C?re.createElement(re.Fragment,null,A,re.createElement(mM,{page:N})):A});u_.displayName="Link";var $d=re.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},_){let S=tl(f,{relative:h.relative}),v=rs(),M=re.useContext(tu),{navigator:E,basename:C}=re.useContext(ki),y=M!=null&&RM(S)&&p===!0,x=E.encodeLocation?E.encodeLocation(S).pathname:S.pathname,N=v.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(N=N.toLowerCase(),D=D?D.toLowerCase():null,x=x.toLowerCase()),D&&C&&(D=Sa(D,C)||D);const L=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let F=N===x||!l&&N.startsWith(x)&&N.charAt(L)==="/",H=D!=null&&(D===x||!l&&D.startsWith(x)&&D.charAt(x.length)==="/"),V={isActive:F,isPending:H,isTransitioning:y},A=F?e:void 0,U;typeof s=="function"?U=s(V):U=[s,F?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let he=typeof c=="function"?c(V):c;return re.createElement(u_,{...h,"aria-current":A,className:U,ref:_,style:he,to:f,viewTransition:p},typeof m=="function"?m(V):m)});$d.displayName="NavLink";var SM=re.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Vc,action:p,onSubmit:m,relative:h,preventScrollReset:_,viewTransition:S,...v},M)=>{let E=TM(),C=AM(p,{relative:h}),y=f.toLowerCase()==="get"?"get":"post",x=typeof p=="string"&&c_.test(p),N=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,F=(L==null?void 0:L.getAttribute("formmethod"))||f;E(L||D.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:c,relative:h,preventScrollReset:_,viewTransition:S})};return re.createElement("form",{ref:M,method:y,action:C,onSubmit:s?m:N,...v,"data-discover":!x&&r==="render"?"true":void 0})});SM.displayName="Form";function yM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function f_(r){let e=re.useContext(zr);return Qt(e,yM(r)),e}function MM(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let p=Ps(),m=rs(),h=tl(r,{relative:c});return re.useCallback(_=>{if(eM(_,e)){_.preventDefault();let S=i!==void 0?i:Zo(m)===Zo(h);p(r,{replace:S,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,p,h,i,s,e,r,l,c,f])}var EM=0,bM=()=>`__${String(++EM)}__`;function TM(){let{router:r}=f_("useSubmit"),{basename:e}=re.useContext(ki),i=jy();return re.useCallback(async(s,l={})=>{let{action:c,method:f,encType:p,formData:m,body:h}=iM(s,e);if(l.navigate===!1){let _=l.fetcherKey||bM();await r.fetch(_,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function AM(r,{relative:e}={}){let{basename:i}=re.useContext(ki),s=re.useContext(ba);Qt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...tl(r||".",{relative:e})},f=rs();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(S=>S).forEach(S=>p.append("index",S));let _=p.toString();c.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ga([i,c.pathname])),Zo(c)}function RM(r,e={}){let i=re.useContext(t_);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=f_("useViewTransitionState"),l=tl(r,{relative:e.relative});if(!i.isTransitioning)return!1;let c=Sa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Sa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Kc(l.pathname,f)!=null||Kc(l.pathname,c)!=null}[...fM];const wM="/assets/scanner-BiZN9XhY.png",CM="/assets/chatlogo-D_FQmafv.png",NM="/assets/wallet%20front%202-CPq3dhWT.png",DM="/assets/second%20base%203-BA33XM_5.png",UM="/assets/sos%20button-Cq0nAT1v.png",LM="/assets/pogo-logo3-CiYjFcgo.png",OM={CHATGPT:{badge:"01",badgeClass:"",title:"CHATGPT",deImg:CM,deClass:"wallet-card-logo"},SAFEHUB:{badge:"02",badgeClass:"wallet-card-badge-red",title:"SAFEHUB",deImg:UM,deClass:"wallet-card-sos-button"},POGO:{badge:"03",badgeClass:"wallet-card-badge-purple",title:"POGO",deImg:LM,deClass:"wallet-card-pogo-logo"},WRAP:{badge:"04",badgeClass:"wallet-card-badge-yellow",title:"WRAP",deImg:null,deClass:""}},PM=()=>{const r=Ps(),[e,i]=re.useState("INDIVIDUAL"),[s,l]=re.useState("CHATGPT"),[c,f]=re.useState(!1),p=M=>{i(E=>E===M?null:M)},m=M=>{if(M===s)return;l(M);const E=["POGO","WRAP"].includes(M)?"TEAM":"INDIVIDUAL";i(E),f(!1)},h=()=>{switch(s){case"CHATGPT":r("/work/chatgpt/article");break;case"SAFEHUB":r("/work/safehub");break;case"POGO":r("/work/pogo");break;case"WRAP":window.open("https://trywrap.com/","_blank","noopener,noreferrer");break}},_=M=>{M.stopPropagation();const E=M.target,C=M.currentTarget;(E===C||E.closest(".wallet-card-header, .wallet-card-badge, .wallet-card-title")!==null)&&f(!0)},S=M=>{M.stopPropagation(),f(!1)},v=OM[s];return g.jsx("div",{className:"wallet-wrapper",children:g.jsxs("div",{className:"wallet-layout",children:[g.jsx("div",{className:"wallet-container",children:g.jsxs("div",{className:"wallet-pocket",children:[g.jsx("img",{src:NM,alt:"",className:"wallet-pocket-image"}),g.jsxs("div",{className:`wallet-card ${c?"card-hovered":""}`,onClick:h,onMouseEnter:_,onMouseLeave:S,style:{cursor:"pointer"},children:[g.jsxs("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",borderRadius:"16px",pointerEvents:"none",overflow:"hidden"},xmlns:"http://www.w3.org/2000/svg",children:[g.jsx("clipPath",{id:"card-clip",children:g.jsx("rect",{width:"100%",height:"100%",rx:"16"})}),g.jsx("g",{clipPath:"url(#card-clip)",children:Array.from({length:120},(M,E)=>g.jsx("circle",{cx:"0",cy:"0",r:20+E*6,fill:"none",stroke:"rgba(0,0,0,0.025)",strokeWidth:"1"},E))})]}),g.jsxs("div",{className:"wallet-card-header",children:[g.jsx("div",{className:`wallet-card-badge ${v.badgeClass}`,children:v.badge}),g.jsx("span",{className:"wallet-card-title",children:v.title})]}),v.deImg&&g.jsx("img",{src:v.deImg,alt:"",className:v.deClass}),g.jsx("img",{src:wM,alt:"",className:"wallet-card-chip"})]},s),g.jsx("img",{src:DM,alt:"",className:"wallet-second-base"})]})}),g.jsxs("div",{className:"wallet-nav",children:[g.jsxs("div",{className:`wallet-nav-section wallet-nav-individual${e==="INDIVIDUAL"?" open":""}`,children:[g.jsxs("button",{className:"wallet-nav-header",onClick:()=>p("INDIVIDUAL"),children:[g.jsx("span",{className:"wallet-nav-label",children:"INDIVIDUAL"}),g.jsx("span",{className:`wallet-nav-chevron${e==="INDIVIDUAL"?" rotated":""}`})]}),g.jsxs("div",{className:"wallet-nav-items",children:[g.jsx("div",{className:`wallet-nav-item${s==="CHATGPT"?" active":""}`,onClick:()=>m("CHATGPT"),children:"CHATGPT"}),g.jsx("div",{className:`wallet-nav-item${s==="SAFEHUB"?" active":""}`,onClick:()=>m("SAFEHUB"),children:"SAFEHUB"})]})]}),g.jsxs("div",{className:`wallet-nav-section wallet-nav-team${e==="TEAM"?" open":""}`,children:[g.jsxs("button",{className:"wallet-nav-header",onClick:()=>p("TEAM"),children:[g.jsx("span",{className:"wallet-nav-label",children:"TEAM"}),g.jsx("span",{className:`wallet-nav-chevron${e==="TEAM"?" rotated":""}`})]}),g.jsxs("div",{className:"wallet-nav-items",children:[g.jsx("div",{className:`wallet-nav-item${s==="POGO"?" active":""}`,onClick:()=>m("POGO"),children:"POGO"}),g.jsx("div",{className:`wallet-nav-item${s==="WRAP"?" active":""}`,onClick:()=>m("WRAP"),children:"WRAP"})]})]})]})]})})},IM="/assets/emoji-mail-Cgi9Z51R.png",FM="/assets/emoji-folder-CPcV07Op.png",K0=()=>g.jsx("svg",{width:"9",height:"9",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:g.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),gr=({href:r,children:e,internal:i=!1})=>{const s=Ps();return i?g.jsxs("span",{className:"hero-inline-link",style:{cursor:"none"},onClick:()=>s(r),children:[e,g.jsx("sup",{className:"hero-inline-sup",children:g.jsx(K0,{})})]}):g.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"hero-inline-link",children:[e,g.jsx("sup",{className:"hero-inline-sup",children:g.jsx(K0,{})})]})},BM=()=>g.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[g.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),g.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),zM=()=>g.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M20 6L9 17l-5-5",stroke:"#BF5656",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),HM=()=>g.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[g.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),g.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]});function GM(){const r=Ps(),e=re.useRef(null),[i,s]=re.useState(!1),l=()=>{navigator.clipboard.writeText("ng545@cornell.edu"),s(!0),setTimeout(()=>s(!1),2e3)};return re.useEffect(()=>{const c=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&m.target.classList.add("fade-in-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"}),f=document.querySelectorAll(".fade-in-on-scroll");return f.forEach(p=>c.observe(p)),()=>f.forEach(p=>c.unobserve(p))},[]),g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"new-hero-wrap",children:g.jsxs("div",{className:"new-hero-content",children:[g.jsxs("div",{className:"new-hero-top",children:[g.jsx("span",{className:"new-hero-name",children:"Nitish's Digital Corner"}),g.jsx("span",{className:"new-hero-location",children:"NEW YORK"})]}),g.jsxs("p",{className:"new-hero-body",children:["I'm a designer building ambitious tools that feel surprisingly simple. Currently studying Data Science & Statistics @"," ",g.jsx(gr,{href:"https://www.cornell.edu",children:"Cornell University"})," ","while conducting HCI research with the"," ",g.jsx(gr,{href:"https://interplay.tech/",children:"Interplay Research Studio"})," ","and working as a Product Design Intern @"," ",g.jsx(gr,{href:"https://www.joinpogo.com/",children:"Pogo"}),"."]}),g.jsxs("p",{className:"new-hero-body-grey",children:["Incoming TPM @"," ",g.jsx(gr,{href:"https://www.cisco.com/",children:"Cisco"}),"."," ","Previously designed an intuitive bookmarking experience for"," ",g.jsx(gr,{href:"/work/chatgpt/article",internal:!0,children:"ChatGPT"})," ","conversations, and led the design of a consumer dating app for"," ",g.jsx(gr,{href:"https://trywrap.com/",children:"Wrap"}),"."]}),g.jsxs("div",{className:"hero-contact-block",children:[g.jsxs("button",{className:"hero-email-row",onClick:l,"aria-label":"Copy email address",children:[g.jsx("img",{src:IM,alt:"",className:"hero-contact-emoji","aria-hidden":"true"}),g.jsx("span",{className:"hero-email-text",children:"ng545@cornell.edu"}),g.jsx("span",{className:`hero-email-icon${i?" hero-email-icon--copied":""}`,children:i?g.jsx(zM,{}):g.jsx(BM,{})})]}),g.jsxs("a",{href:"https://www.linkedin.com/in/nitishgannu/",target:"_blank",rel:"noopener noreferrer",className:"hero-linkedin-row",children:[g.jsx("img",{src:FM,alt:"",className:"hero-contact-emoji","aria-hidden":"true"}),g.jsx("span",{className:"hero-linkedin-text",children:"linkedin.com/in/nitishg/"}),g.jsx("span",{className:"hero-linkedin-icon",children:g.jsx(HM,{})})]})]})]})}),g.jsx("div",{className:"main-content-container wallet-desktop-only",ref:e,children:g.jsx("div",{className:"wallet-side-panel",children:g.jsx(PM,{})})}),g.jsxs("div",{className:"mobile-project-list",children:[g.jsx("p",{className:"mobile-project-heading",children:"FEATURED WORK"}),[{num:"01",bg:"#111111",color:"#ffffff",label:"ChatGPT",date:"Fall 2025",path:"/work/chatgpt/article"},{num:"02",bg:"#7c3aed",color:"#ffffff",label:"Pogo",date:"Spring 2026",path:"/work/pogo"},{num:"03",bg:"#d5061b",color:"#ffffff",label:"Safehub",date:"Spring 2024",path:"/work/safehub"},{num:"04",bg:"#ffb700",color:"#ffffff",label:"Wrap",date:"Summer 2025",href:"https://trywrap.com/"}].map(({num:c,bg:f,color:p,label:m,date:h,path:_,href:S})=>g.jsxs("a",{href:S||_,onClick:_?v=>{v.preventDefault(),r(_)}:void 0,target:S?"_blank":void 0,rel:S?"noopener noreferrer":void 0,className:"mobile-project-row",children:[g.jsx("span",{className:"mobile-project-badge",style:{backgroundColor:f,color:p},children:c}),g.jsxs("span",{className:"mobile-project-info",children:[g.jsx("span",{className:"mobile-project-title",children:m}),g.jsx("span",{className:"mobile-project-date",children:h})]}),g.jsx("svg",{className:"mobile-project-arrow",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:g.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]},c))]})]})}function VM(){const[r,e]=re.useState(0);re.useRef(0),re.useRef(null),Ps();const[i,s]=re.useState(!1),[l,c]=re.useState(!1),[f,p]=re.useState(""),[m,h]=re.useState(!1);return g.jsx("div",{className:"about-page-new"})}const kM="/assets/playground1-DOa-1y59.jpg",jM="/assets/playground2-CbEEjSiB.jpg",XM="/assets/playground3-DWks5Hfq.jpg",WM="/assets/playground4-Eno4u8ze.jpg",qM="/assets/playground5-bDrwqSFX.jpg",YM="/assets/playground6-Cy4jFYxE.jpg",ZM="/assets/playground7-Bc1qX_Vl.jpg",KM="/assets/playground8-t8mD4Cep.jpg",QM="/assets/playground9-Dwc8lrmg.jpg",JM="/assets/playground10-CK7-_Z_v.jpg",$M="/assets/playground11-CkeUv4g9.png",eE="/assets/playground12-Ckj-evdO.jpg",tE="/assets/playground13-ilk_oeJQ.jpg",nE="/assets/playground14-D2yoYerN.jpg",iE="/assets/playground15-DIGDscYW.jpg",aE="/assets/plane-f4ad0RLY.png",vd="/assets/planet-CFEYygEu.png",_c="/assets/cloud-C_RrmoAy.png",sE=[{id:1,src:kM,x:-700,y:-380,rotation:-4,width:320,zIndex:1},{id:2,src:jM,x:320,y:-420,rotation:3,width:300,zIndex:2},{id:3,src:XM,x:680,y:-160,rotation:-2,width:310,zIndex:3},{id:4,src:qM,x:-400,y:120,rotation:5,width:290,zIndex:4},{id:5,src:YM,x:-720,y:400,rotation:-3,width:300,zIndex:5},{id:6,src:WM,x:-100,y:-680,rotation:2,width:290,zIndex:6},{id:7,src:ZM,x:-650,y:-740,rotation:-2,width:370,zIndex:7},{id:8,src:KM,x:700,y:200,rotation:3,width:280,zIndex:8},{id:9,src:QM,x:250,y:90,rotation:-4,width:290,zIndex:9},{id:10,src:JM,x:700,y:-900,rotation:4,width:310,zIndex:10},{id:11,src:$M,x:-1150,y:-520,rotation:-3,width:300,zIndex:11},{id:12,src:eE,x:0,y:600,rotation:2,width:320,zIndex:12},{id:13,src:tE,x:-1190,y:200,rotation:-5,width:295,zIndex:13},{id:14,src:nE,x:120,y:-1080,rotation:1,width:330,zIndex:14},{id:15,src:iE,x:1100,y:180,rotation:-3,width:285,zIndex:15}];function rE(){const[r,e]=re.useState({x:0,y:0}),[i,s]=re.useState(sE),[l,c]=re.useState(!1),f=re.useRef(null),p=re.useRef({x:0,y:0});re.useEffect(()=>{const S={x:Math.round(window.innerWidth/2),y:Math.round(window.innerHeight/2)};p.current=S,e(S)},[]);const m=re.useCallback(S=>{p.current=S,e(S)},[]),h=re.useCallback(S=>{S.button===0&&(f.current={type:"canvas",startMouseX:S.clientX,startMouseY:S.clientY,startCanvasX:p.current.x,startCanvasY:p.current.y},c(!0))},[]),_=re.useCallback((S,v)=>{S.stopPropagation(),S.button===0&&(f.current={type:"photo",photoId:v.id,startMouseX:S.clientX,startMouseY:S.clientY,startPhotoX:v.x,startPhotoY:v.y},c(!0),s(M=>{const E=Math.max(...M.map(C=>C.zIndex));return M.map(C=>C.id===v.id?{...C,zIndex:E+1}:C)}))},[]);return re.useEffect(()=>{const S=M=>{if(!f.current)return;const E=M.clientX-f.current.startMouseX,C=M.clientY-f.current.startMouseY;if(f.current.type==="canvas")m({x:f.current.startCanvasX+E,y:f.current.startCanvasY+C});else{const{photoId:y,startPhotoX:x,startPhotoY:N}=f.current;s(D=>D.map(L=>L.id===y?{...L,x:x+E,y:N+C}:L))}},v=()=>{f.current=null,c(!1)};return window.addEventListener("mousemove",S),window.addEventListener("mouseup",v),()=>{window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",v)}},[m]),g.jsx("div",{className:`photos-page${l?" dragging":""}`,onMouseDown:h,children:g.jsxs("div",{className:"photos-canvas",style:{transform:`translate(${r.x}px, ${r.y}px)`},children:[g.jsx("img",{src:_c,className:"deco-icon deco-cloud",alt:"",draggable:!1,style:{filter:"invert(1)"}}),g.jsx("img",{src:aE,className:"deco-icon deco-plane",alt:"",draggable:!1,style:{filter:"invert(1)"}}),g.jsx("img",{src:vd,className:"deco-icon deco-planet",alt:"",draggable:!1,style:{filter:"invert(1)"}}),g.jsx("div",{className:"photos-hint-group",children:g.jsx("p",{className:"hint-sub",children:"DRAG TO MOVE"})}),g.jsx("img",{src:_c,className:"scatter-deco",style:{filter:"invert(1)",left:-900,top:-400,width:90,"--base-rot":"-6deg",animation:"fadeIn 0.55s ease-out 1.30s both, cartoon-rock 3s steps(1,end) -2.4s infinite"},alt:"",draggable:!1}),g.jsx("img",{src:_c,className:"scatter-deco",style:{filter:"invert(1)",left:530,top:-490,width:75,"--base-rot":"4deg",animation:"fadeIn 0.55s ease-out 1.40s both, cartoon-rock 3s steps(1,end) -0.8s infinite"},alt:"",draggable:!1}),g.jsx("img",{src:_c,className:"scatter-deco",style:{filter:"invert(1)",left:-130,top:430,width:80,"--base-rot":"-3deg",animation:"fadeIn 0.55s ease-out 1.35s both, cartoon-rock 3s steps(1,end) -1.8s infinite"},alt:"",draggable:!1}),g.jsx("img",{src:vd,className:"scatter-deco",style:{filter:"invert(1)",left:870,top:-110,width:100,"--base-rot":"8deg",animation:"fadeIn 0.55s ease-out 1.45s both, cartoon-rock 3s steps(1,end) -1.2s infinite"},alt:"",draggable:!1}),g.jsx("img",{src:vd,className:"scatter-deco",style:{filter:"invert(1)",left:-820,top:170,width:90,"--base-rot":"-5deg",animation:"fadeIn 0.55s ease-out 1.38s both, cartoon-rock 3s steps(1,end) -2.7s infinite"},alt:"",draggable:!1}),i.map((S,v)=>g.jsx("div",{className:"canvas-photo",style:{left:S.x,top:S.y,width:S.width,zIndex:S.zIndex,"--rot":`${S.rotation}deg`,animationDelay:`${1.5+v*.09}s`},onMouseDown:M=>_(M,S),children:g.jsx("img",{src:S.src,alt:"",draggable:!1})},S.id))]})})}const oE="/assets/searchpeek-BC0UxGDT.png",lE="/assets/searchflow-BW40ulZP.mov",cE="/assets/tabs-7xy82rau.png",uE="/assets/quotes-D4dGwG2w.png",fE="/assets/notifications%20tutorial-D53RamJF.png",dE="/assets/searching%20tutorial-B0vJ0EXt.png",hE="/assets/FAQs%20segment-YLZ06GBZ.png",pE="/assets/ITERATION%201%20SEARCH-5kJI9bzb.png",mE="/assets/ITERATION%202%20SEARCH-DgyTGixC.png",gE="/assets/final%20product-CixDOueA.png",vE="/assets/filterpanel-DMyyXSfg.png",_E="/assets/notif-aZsFLyqM.png",xE="/assets/search1-Dyu9bfD0.JPG",SE="/assets/search2-B8lPCkW7.jpg",yE="/assets/search3-CrVMwTNY.jpg",ME=()=>{const[r,e]=re.useState(""),i=re.useRef({});re.useEffect(()=>{window.scrollTo(0,0)},[]),re.useEffect(()=>{const c=()=>{const f=window.scrollY+200,p=["context","introducing","problem","solution","final-product","reflections"];let m="";for(const h of p){const _=i.current[h];if(_){const S=_.offsetTop;f>=S&&(m=h)}}e(m)};return window.addEventListener("scroll",c),c(),()=>window.removeEventListener("scroll",c)},[]);const s=c=>{const f=i.current[c];if(f){const h=f.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:h,behavior:"smooth"})}},l=[{id:"context",label:"CONTEXT"},{id:"introducing",label:"INTRODUCTION"},{id:"problem",label:"THE PROBLEM"},{id:"solution",label:"SOLUTION"},{id:"final-product",label:"FINAL PRODUCT"},{id:"reflections",label:"REFLECTIONS"}];return g.jsxs("div",{className:"case-study-container searchneu-case-study",children:[g.jsx("aside",{className:"case-study-sidebar",children:g.jsx("nav",{className:"sidebar-nav",children:l.map(c=>g.jsx("button",{className:`sidebar-nav-link ${r===c.id?"active":""}`,onClick:()=>s(c.id),children:c.label},c.id))})}),g.jsxs("div",{className:"case-study-content",children:[g.jsx("div",{className:"case-study-thumbnail-banner-container",children:g.jsx("img",{src:oE,alt:"SearchNEU Project Thumbnail",className:"case-study-thumbnail-wireframes"})}),g.jsx("h1",{className:"searchneu-case-study-title",children:"Building an Interactive Course Registration Experience"}),g.jsxs("div",{className:"case-study-columns",children:[g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"searchneu-column-title",children:"TEAM"}),g.jsx("p",{className:"column-content",children:"5 Developers, 1 PM, 3 Designers"})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"searchneu-column-title",children:"ROLE"}),g.jsx("p",{className:"column-content",children:"Product Designer"})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"searchneu-column-title",children:"TIMELINE"}),g.jsx("p",{className:"column-content",children:"5 Months"})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"searchneu-column-title",children:"SKILLS & TOOLS"}),g.jsxs("p",{className:"column-content",children:["Figma, User Research, ",g.jsx("br",{}),"Notion"]})]})]}),g.jsxs("div",{className:"case-study-section",id:"context",ref:c=>i.current.context=c,children:[g.jsx("h2",{className:"searchneu-section-title",children:"[1] CONTEXT"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"Course registration is stressful and fragmented"})}),g.jsx("p",{className:"section-paragraph",children:"Course registration is often a stressful and fragmented process, requiring students to juggle multiple tabs to check degree requirements, course availability, schedules, and professor reviews."}),g.jsx("div",{className:"searchneu-tabs-container",children:g.jsx("img",{className:"searchneu-tabs-image",src:cE,alt:"Tabs"})}),g.jsx("div",{className:"searchneu-quotes-container",children:g.jsx("img",{className:"searchneu-quotes-image",src:uE,alt:"Quotes"})})]}),g.jsxs("div",{className:"case-study-section",id:"introducing",ref:c=>i.current.introducing=c,children:[g.jsx("h2",{className:"searchneu-section-title",children:"[2] INTRODUCING SEARCHNEU"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"So what is SearchNEU?"})}),g.jsx("p",{className:"section-paragraph",children:"SearchNEU is a platform built to make course registration easier and more reliable for students. It brings everything into one place where students can view real-time class data, track availability, and get instant notifications when seats open up."}),g.jsx("div",{className:"searchneu-video-container",children:g.jsx("video",{className:"searchneu-video",src:lE,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),g.jsxs("div",{className:"searchneu-feature-one-two-column",style:{marginTop:"60px"},children:[g.jsxs("div",{className:"searchneu-feature-one-left-column",children:[g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"Streamlines the course search process"})}),g.jsxs("p",{className:"section-paragraph",children:["Using ",g.jsx("span",{className:"dotted-underline",children:"filters"})," helps narrow down results quickly, allowing users to streamline their search and find relevant courses without digging through thousands of options."]})]}),g.jsx("div",{className:"searchneu-feature-one-right-column",children:g.jsx("div",{className:"searchneu-feature-canvas",children:g.jsx("img",{className:"searchneu-intro-feature-image",src:vE,alt:"Filter Panel"})})})]}),g.jsxs("div",{className:"searchneu-feature-one-two-column",style:{marginTop:"60px"},children:[g.jsxs("div",{className:"searchneu-feature-one-left-column",children:[g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"Helps you enroll as soon as a spot opens"})}),g.jsxs("p",{className:"section-paragraph",children:["Enabling ",g.jsx("span",{className:"dotted-underline",children:"notifications"})," for a waitlisted course lets you know as soon as a spot opens, so you can act quickly without constantly checking back."]})]}),g.jsx("div",{className:"searchneu-feature-one-right-column",children:g.jsx("div",{className:"searchneu-feature-canvas",children:g.jsx("img",{className:"searchneu-intro-feature-image-2",src:_E,alt:"Notifications"})})})]})]}),g.jsxs("div",{className:"case-study-section",id:"problem",ref:c=>i.current.problem=c,children:[g.jsx("h2",{className:"searchneu-section-title",children:"[3] THE SPRING 2025 PROBLEM"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"How could we fix SearchNEU?"})}),g.jsxs("p",{className:"section-paragraph problem-statement-text-searchneu",children:[g.jsx("span",{className:"searchneu-blue",children:"SearchNEU"})," ",g.jsx("span",{className:"problem-text-grey",children:"faces usability challenges for"})," ",g.jsx("span",{className:"searchneu-blue",children:"new students"}),", ",g.jsx("span",{className:"problem-text-grey",children:"especially those unfamiliar with college course registration, highlighting the need for a more"})," ",g.jsx("span",{className:"searchneu-blue",children:"intuitive"})," ",g.jsx("span",{className:"problem-text-grey",children:"and"})," ",g.jsx("span",{className:"searchneu-blue",children:"user-friendly"})," ",g.jsx("span",{className:"problem-text-grey",children:"platform that encourages adoption and helps students"})," ",g.jsx("span",{className:"searchneu-blue",children:"navigate course selection efficiently"}),"."]}),g.jsx("p",{className:"section-paragraph",children:"This made us wonder."}),g.jsxs("div",{className:"callout",children:[g.jsx("span",{className:"callout-icon",style:{color:"#0066cc"},children:"⚠"}),g.jsx("div",{children:g.jsx("p",{className:"callout-caption",children:"How might we make SearchNEU more intuitive and user-friendly so that new students can easily navigate course registration and feel confident using the platform?"})})]})]}),g.jsxs("div",{className:"case-study-section",id:"solution",ref:c=>i.current.solution=c,children:[g.jsx("h2",{className:"searchneu-section-title",children:"[4] SOLUTION"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"What did we design?"})}),g.jsx("p",{className:"section-paragraph",children:"Throughout the spring semester, our design team focused on making SearchNEU easier to learn and navigate."}),g.jsxs("p",{className:"section-paragraph",children:["We decided to build an FAQ section with a unique twist. Instead of relying on static text, we introduced ",g.jsx("span",{className:"dotted-underline",children:"interactive tutorial modals"})," that guided students through the platform step by step."]}),g.jsxs("div",{className:"searchneu-feature-one-two-column",children:[g.jsxs("div",{className:"searchneu-feature-one-left-column",children:[g.jsx("h2",{className:"searchneu-section-title",children:"[4.1] FEATURE #1"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"Notifications Guide"})}),g.jsxs("p",{className:"section-paragraph",children:["Shows users how to set up notifications for an entire course code or for a specific section so they never miss ",g.jsx("span",{className:"dotted-underline",children:"availability updates"}),"."]})]}),g.jsx("div",{className:"searchneu-feature-one-right-column",children:g.jsx("div",{className:"searchneu-feature-canvas",children:g.jsx("img",{className:"searchneu-feature-image",src:fE,alt:"Notifications Tutorial"})})})]}),g.jsxs("div",{className:"searchneu-feature-two-two-column",style:{marginTop:"60px"},children:[g.jsxs("div",{className:"searchneu-feature-two-left-column",children:[g.jsx("h2",{className:"searchneu-section-title",children:"[4.2] FEATURE #2"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"Searching Guide"})}),g.jsx("p",{className:"section-paragraph",children:"Walks users through using filters effectively so they can narrow down courses and find the best fit faster."})]}),g.jsx("div",{className:"searchneu-feature-two-right-column",children:g.jsx("div",{className:"searchneu-feature-canvas",children:g.jsx("img",{className:"searchneu-feature-image",src:dE,alt:"Searching Tutorial"})})})]}),g.jsxs("div",{style:{marginTop:"60px"},children:[g.jsx("h2",{className:"searchneu-section-title",children:"[4.3] FEATURE #3"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"Comprehensive FAQs"})}),g.jsxs("p",{className:"section-paragraph",children:["Designing the FAQs page took more iteration than I expected, but it became a valuable opportunity to practice clear, user-focused ",g.jsx("span",{className:"dotted-underline",children:"UX writing"}),"."]}),g.jsxs("div",{className:"searchneu-two-column-canvas-container",children:[g.jsxs("div",{className:"searchneu-canvas-column",children:[g.jsx("span",{className:"searchneu-canvas-column-caption",children:"ITERATION #1"}),g.jsx("img",{className:"searchneu-canvas-column-image",src:pE,alt:"Iteration #1"})]}),g.jsxs("div",{className:"searchneu-canvas-column",children:[g.jsx("span",{className:"searchneu-canvas-column-caption",children:"ITERATION #2"}),g.jsx("img",{className:"searchneu-canvas-column-image",src:mE,alt:"Iteration #2"})]})]}),g.jsxs("div",{className:"searchneu-feature-canvas-wide",children:[g.jsx("span",{className:"searchneu-faqs-caption",children:"FINAL DESIGN"}),g.jsx("img",{className:"searchneu-faqs-image",src:hE,alt:"FAQs Segment"})]})]})]}),g.jsxs("div",{className:"case-study-section",id:"final-product",ref:c=>i.current["final-product"]=c,children:[g.jsx("h2",{className:"searchneu-section-title",children:"[5] PUTTING IT TOGETHER"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"The final product"})}),g.jsx("p",{className:"section-paragraph",children:"Here's 5 months of design work, research, and iteration assmbled together."}),g.jsx("div",{className:"searchneu-final-product-canvas",children:g.jsx("img",{className:"searchneu-final-product-image",src:gE,alt:"Final Product"})})]}),g.jsxs("div",{className:"case-study-section",id:"reflections",ref:c=>i.current.reflections=c,children:[g.jsx("h2",{className:"searchneu-section-title",children:"[6] REFLECTIONS"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"A semester filled with design crits and new friends"})}),g.jsx("p",{className:"section-paragraph",children:"SearchNEU was my first experience working as a product designer with a cross-functional team of product managers, engineers, and other product designers. It was an enjoyable experience filled with late-night work sessions for SearchNEU, team dinners, social outings, and learning new quirky design things."}),g.jsxs("div",{className:"searchneu-reflections-images",children:[g.jsxs("div",{className:"searchneu-reflections-image-item",children:[g.jsx("img",{src:xE,alt:"SearchNEU reflection image 1",className:"searchneu-reflections-image"}),g.jsx("p",{className:"searchneu-reflections-image-caption",children:"SearchNEU Photoshoot"})]}),g.jsxs("div",{className:"searchneu-reflections-image-item",children:[g.jsx("img",{src:SE,alt:"SearchNEU reflection image 2",className:"searchneu-reflections-image"}),g.jsx("p",{className:"searchneu-reflections-image-caption",children:"Sandbox Demo Day"})]}),g.jsxs("div",{className:"searchneu-reflections-image-item",children:[g.jsx("img",{src:yE,alt:"SearchNEU reflection image 3",className:"searchneu-reflections-image"}),g.jsx("p",{className:"searchneu-reflections-image-caption",children:"SearchNEU Team Dinner"})]})]}),g.jsx("p",{style:{fontFamily:"'Georgia', 'Times New Roman', serif",fontStyle:"italic",fontSize:"32px",fontWeight:"400",color:"#333",textAlign:"center",marginTop:"60px",lineHeight:"1.2"},children:"Full case study coming soon!"})]})]})]})},EE="/assets/wrap%20project%20thumbnail%20in%20case%20study-CDZPNK_v.png",bE="/assets/collage%20wrap%20case%20study-JR7ZTVP_.png",TE=()=>(Ps(),KS.useEffect(()=>{window.scrollTo(0,0)},[]),g.jsx("div",{className:"case-study-container wrap-case-study",children:g.jsxs("div",{className:"case-study-content",children:[g.jsxs("div",{className:"case-study-header",children:[g.jsx("h1",{className:"case-study-title",children:g.jsx("em",{children:"Redefining Modern Dating with Real Connections & Safer Spaces"})}),g.jsx("p",{className:"case-study-description",children:"Worked with a cross-functional team to create a dating platform that fostered honesty, security, and real connections through intuitive and responsible design."}),g.jsx("img",{src:EE,alt:"Wrap Project Thumbnail",className:"case-study-thumbnail"}),g.jsxs("div",{className:"case-study-columns",children:[g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"wrap-column-title",children:"TEAM"}),g.jsx("p",{className:"column-content",children:"9 Engineers, 1 Product Designer, 1 PM"})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"wrap-column-title",children:"ROLE"}),g.jsx("p",{className:"column-content",children:"Founding Product Designer"})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"wrap-column-title",children:"TIMELINE"}),g.jsx("p",{className:"column-content",children:"June 2025 - Present"})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"wrap-column-title",children:"SKILLS & TOOLS"}),g.jsx("p",{className:"column-content",children:"User Research, Figma, Miro, Design Systems"})]})]})]}),g.jsxs("div",{className:"case-study-section",children:[g.jsx("h2",{className:"wrap-section-title",children:"SUMMER 2025 INTERNSHIP"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"Trying on new hats every single day"})}),g.jsx("p",{className:"section-paragraph",children:"Over the summer at Wrap, I had the opportunity to step into a variety of roles—managing engineer hand-offs, assisting with coding tasks, and exploring new marketing initiatives. Each day brought a chance to expand my skill set and contribute in different ways."}),g.jsxs("p",{className:"section-paragraph",children:["While the nature of my work is under ",g.jsx("b",{children:"NDA"}),", here are some of my contributions:"]}),g.jsxs("div",{className:"interview-callouts",children:[g.jsxs("div",{className:"callout",children:[g.jsx("div",{className:"callout-icon",children:"✦"}),g.jsxs("div",{className:"callout-content",children:[g.jsx("h4",{className:"callout-title",children:"Shipped 7 features throughout 3 months"}),g.jsx("p",{className:"callout-caption",children:"Led brainstorming sessions with the CEO and 2 engineers to ideate sketches for features, and built ~15 prototypes that were implemented."})]})]}),g.jsxs("div",{className:"callout",children:[g.jsx("div",{className:"callout-icon",children:"✦"}),g.jsxs("div",{className:"callout-content",children:[g.jsx("h4",{className:"callout-title",children:"Supported Engineering Workflows"}),g.jsx("p",{className:"callout-caption",children:"Assisted engineers with writing and reviewing code, managing hand-offs, and streamlining implementation of key features."})]})]}),g.jsxs("div",{className:"callout",children:[g.jsx("div",{className:"callout-icon",children:"✦"}),g.jsxs("div",{className:"callout-content",children:[g.jsx("h4",{className:"callout-title",children:"Built a Scalable Design System"}),g.jsx("p",{className:"callout-caption",children:"Developed a cohesive design system to ensure consistency across the product, streamline UI updates, and improve collaboration between designers and engineers."})]})]})]}),g.jsx("img",{src:bE,alt:"Wrap Project Collage",className:"wrap-collage-image"}),g.jsx("p",{className:"wrap-collage-caption",children:"JUST SOME THINGS I MADE FOR FUN"})]}),g.jsxs("div",{className:"case-study-section",children:[g.jsx("h2",{className:"wrap-section-title",children:"TAKEAWAYS"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:'My Summer 2025 "Wrapped"'})}),g.jsx("p",{className:"section-paragraph",children:"I learned many things this summer, from using auto layout and writing unbiased user interview questions to navigating the streets of NYC without Google Maps."}),g.jsx("p",{className:"section-paragraph",children:"But here are some of the main things I took away:"}),g.jsxs("div",{className:"interview-callouts",children:[g.jsxs("div",{className:"callout",children:[g.jsx("div",{className:"callout-icon",children:"★"}),g.jsxs("div",{className:"callout-content",children:[g.jsx("h4",{className:"callout-title",children:"Build Connections Early"}),g.jsx("p",{className:"callout-caption",children:"Socializing with engineers helped me discover people from my own college I never knew and made collaboration much smoother."})]})]}),g.jsxs("div",{className:"callout",children:[g.jsx("div",{className:"callout-icon",children:"★"}),g.jsxs("div",{className:"callout-content",children:[g.jsx("h4",{className:"callout-title",children:"Own the Design Process"}),g.jsx("p",{className:"callout-caption",children:"Being the only designer meant I led research initiatives, maintained the design system, and wrote documentation, which was a huge learning experience."})]})]}),g.jsxs("div",{className:"callout",children:[g.jsx("div",{className:"callout-icon",children:"★"}),g.jsxs("div",{className:"callout-content",children:[g.jsx("h4",{className:"callout-title",children:"Mentor and Learn"}),g.jsx("p",{className:"callout-caption",children:"I taught the CEO about UX design while learning from his perspective, making it a mutually rewarding experience."})]})]})]}),g.jsxs("p",{className:"contact-paragraph",children:["To learn more about my project or hear more about my process, reach out to ",g.jsx("a",{href:"mailto:ng545@cornell.edu",className:"contact-email",children:"ng545@cornell.edu"})," to set up a coffee chat ☕!"]})]})]})})),AE="/assets/safehub-main-C_myJ9cK.png",RE="/assets/safehub-v1-D6CXDAvT.png",wE="/assets/safehub-v2-B7-hVRoK.png",CE="/assets/safehub-location-v1-CGmCgpTE.png",NE="/assets/safehub-maps-video-CfJtSI_s.mov",DE="/assets/safehub-tooltip-recording-2-ftKGaPaP.mov",UE="/assets/safehub-you-are-here-CenqAm5f.mov",LE="/assets/safehub-location-v2-DJhZImjY.png",OE="/assets/safehub-emergency-v1-DZiS4JeJ.png",Q0=()=>g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:g.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),PE=()=>(re.useEffect(()=>{window.scrollTo(0,0)},[]),g.jsx("div",{className:"case-study-container",children:g.jsxs("div",{className:"safehub-content",children:[g.jsxs("div",{className:"safehub-header",children:[g.jsxs("div",{className:"safehub-header-left",children:[g.jsx("h1",{className:"safehub-header-title",children:"Safehub"}),g.jsx("p",{className:"safehub-header-date",children:"Spring 2024"})]}),g.jsx("div",{className:"safehub-header-right",children:g.jsx("p",{className:"safehub-description",children:"A 0→1 mobile safety app for Stamford High School, enabling students, teachers, and staff a faster way to report and respond to on-campus emergencies."})})]}),g.jsx("div",{className:"safehub-image-container",children:g.jsx("img",{src:AE,alt:"Safehub app",className:"safehub-main-image"})}),g.jsxs("div",{className:"safehub-section",children:[g.jsx("p",{className:"safehub-section-heading",children:"Introduction"}),g.jsx("p",{className:"safehub-section-body",children:"Stamford High School faces significant challenges in maintaining rapid and reliable emergency response."}),g.jsxs("div",{className:"safehub-news-links",children:[g.jsxs("a",{href:"https://www.stamfordadvocate.com/news/article/stamford-school-shooting-threat-student-arrest-19749508.php",target:"_blank",rel:"noopener noreferrer",className:"safehub-news-card",children:[g.jsx("span",{className:"safehub-news-text",children:"Stamford High School student threatened to 'shoot up the school' on Snapchat"}),g.jsx("span",{className:"safehub-news-arrow",children:g.jsx(Q0,{})})]}),g.jsxs("a",{href:"https://www.nbcnewyork.com/news/local/active-shooter-hoax-call-triggers-lockdown-at-ct-schools-week-after-nj-swatting-spree/3917578/",target:"_blank",rel:"noopener noreferrer",className:"safehub-news-card",children:[g.jsx("span",{className:"safehub-news-text",children:"'Extremely Traumatic:' CT Official Blasts 'Active Shooter' Hoax"}),g.jsx("span",{className:"safehub-news-arrow",children:g.jsx(Q0,{})})]})]})]}),g.jsxs("div",{className:"safehub-section",children:[g.jsx("p",{className:"safehub-section-heading",children:"User Research"}),g.jsx("p",{className:"safehub-section-body",children:"I noticed that students had very different reactions when I asked how safe campus felt. This led me to conduct user research to better understand those experiences."}),g.jsxs("div",{className:"safehub-quotes",children:[g.jsxs("div",{className:"safehub-quote-block",children:[g.jsx("p",{className:"safehub-quote-text",children:`"Marijuana and Vaping are relatively common in the Bathrooms, especially on the 6th & 7th floors, but the fights get out of hand since there are no cameras and staff can't intervene"`}),g.jsx("p",{className:"safehub-quote-attribution",children:"Stamford High Junior"})]}),g.jsxs("div",{className:"safehub-quote-block",children:[g.jsx("p",{className:"safehub-quote-text",children:'"There was a fight near the auditorium one afternoon, and it honestly terrified me. It took almost ten minutes before anyone showed up to help, and by then, everyone was already panicking."'}),g.jsx("p",{className:"safehub-quote-attribution",children:"Stamford High Sophomore"})]})]})]}),g.jsxs("div",{className:"safehub-section",children:[g.jsx("p",{className:"safehub-section-heading",children:"Insights"}),g.jsx("p",{className:"safehub-section-body",children:"I combined AI with affinity diagramming to determine common themes and found 2 insights that stood out:"}),g.jsxs("div",{className:"safehub-key-insights",children:[g.jsxs("div",{className:"safehub-key-insight",children:[g.jsx("p",{className:"safehub-key-insight-label",children:"Key Insight #1"}),g.jsx("p",{className:"safehub-key-insight-text",children:"Students were most concerned about medical emergencies, strangers, fights, suspicious objects, and fires."})]}),g.jsxs("div",{className:"safehub-key-insight",children:[g.jsx("p",{className:"safehub-key-insight-label",children:"Key Insight #2"}),g.jsx("p",{className:"safehub-key-insight-text",children:"Students questioned the effectiveness of current safety measures, including guards and cameras."})]})]})]}),g.jsxs("div",{className:"safehub-section",children:[g.jsx("p",{className:"safehub-section-heading",children:"The Problem"}),g.jsx("p",{className:"safehub-section-body",children:"Stamford High faces critical safety risks due to limited security staff and the absence of an efficient emergency response system, highlighting the need for a faster, technology-driven solution."}),g.jsxs("div",{className:"safehub-callout",children:[g.jsx("span",{className:"safehub-callout-icon",children:"⚠"}),g.jsx("p",{className:"safehub-callout-text",children:"How might we empower students, teachers, and staff with tools that improve emergency preparedness and response?"})]})]}),g.jsxs("div",{className:"safehub-section",children:[g.jsx("p",{className:"safehub-section-heading",children:"Design"}),g.jsx("p",{className:"safehub-section-body",children:"After taking into account all of the insights from my research, I started defining how I wanted the core elements of the app to look."}),g.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[g.jsxs("div",{className:"safehub-design-label safehub-design-label--iteration",children:[g.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--red",children:g.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:g.jsx("path",{d:"M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})})}),g.jsx("span",{className:"safehub-design-label-text",children:"ITERATION"})]}),g.jsx("img",{src:wE,alt:"Main screen v2",className:"safehub-main-image"})]}),g.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"Iteration led me to a final concept that felt adequate."}),g.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[g.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[g.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:g.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:g.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),g.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),g.jsx("img",{src:RE,alt:"Main screen v1",className:"safehub-main-image"})]})]}),g.jsxs("div",{className:"safehub-section",children:[g.jsx("p",{className:"safehub-section-heading",children:"Location"}),g.jsx("p",{className:"safehub-section-body",children:"While exploring location reporting, I aimed to find a balance between giving users control to report locations accurately and keeping the process simple and effortless."}),g.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[g.jsxs("div",{className:"safehub-design-label safehub-design-label--iteration",children:[g.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--red",children:g.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:g.jsx("path",{d:"M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})})}),g.jsx("span",{className:"safehub-design-label-text",children:"ITERATION"})]}),g.jsx("img",{src:CE,alt:"Location v1",className:"safehub-main-image"})]}),g.jsx("p",{className:"safehub-image-caption",children:"BRUTE FORCE APPROACH"}),g.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"I tried to explore a way to integrate maps, following patterns from familiar tools like Google Maps, Uber, and Lyft."}),g.jsx("div",{className:"safehub-image-container safehub-image-container--video",children:g.jsx("video",{className:"safehub-video",src:NE,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),g.jsxs("div",{className:"safehub-video-pair",children:[g.jsx("div",{className:"safehub-video-block",children:g.jsx("video",{className:"safehub-video",src:DE,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),g.jsx("div",{className:"safehub-video-block",children:g.jsx("video",{className:"safehub-video",src:UE,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})]}),g.jsx("p",{className:"safehub-section-body",style:{marginTop:"28px"},children:"Putting that together, I assembled a solid design."}),g.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[g.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[g.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:g.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:g.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),g.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),g.jsx("img",{src:LE,alt:"Location v2",className:"safehub-main-image"})]})]}),g.jsxs("div",{className:"safehub-section",children:[g.jsx("p",{className:"safehub-section-heading",children:"Emergency Selection"}),g.jsx("p",{className:"safehub-section-body",children:"Accounting for how users specify their emergency felt relatively straightforward to incorporate into the flow. I compiled these emergency choices from user research."}),g.jsxs("div",{className:"safehub-image-container",style:{position:"relative"},children:[g.jsxs("div",{className:"safehub-design-label safehub-design-label--final",children:[g.jsx("span",{className:"safehub-design-label-icon safehub-design-label-icon--green",children:g.jsx("svg",{width:"6",height:"6",viewBox:"0 0 8 8",fill:"none",children:g.jsx("path",{d:"M1.5 4L3.5 6L6.5 2",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),g.jsx("span",{className:"safehub-design-label-text",children:"FINAL DESIGN"})]}),g.jsx("img",{src:OE,alt:"Emergency selection",className:"safehub-main-image"})]})]})]})})),IE="/assets/ChatGPT%20Thumbnail-CU9zW1Hs.png",FE="/assets/hmw-mWAKJkvP.webp",BE="/assets/matcha%20flow%202%202-lsPGq96-.mov",zE="/assets/local%20with%20colors-Dvplt9YA.mov",HE="/assets/Global%20Bookmarks-B0R53pk7.mov",GE="/assets/vedant%201-DKEQ0i9R.png",VE="/assets/ryan%202-C1j2N_UV.png",kE="/assets/Aditi%203-CtLfI4Ac.png",jE="/assets/sticky--_sXhqSu.webp",XE="/assets/solutions-ok1WU0ts.webp",WE="/assets/swot-x7fHZY3s.png",qE="/assets/local%20bookmarks%20man-Cfy3X5JU.webp",YE="/assets/gloal%20bookmarks%20man-S1zA0VGb.webp",ZE="/assets/claude%20analysis-BsZWfSHr.png",KE="/assets/gemini%20analysis-BmeCR9WI.png",QE=()=>(re.useEffect(()=>{window.scrollTo(0,0)},[]),g.jsx("div",{className:"case-study-container chatgpt-case-study",children:g.jsxs("div",{className:"case-study-content",children:[g.jsxs("div",{className:"case-study-header",children:[g.jsx("h1",{className:"case-study-title",children:g.jsx("em",{children:"Building Bookmarks into ChatGPT Mobile"})}),g.jsx("p",{className:"case-study-description",children:"Creating a more intuitive mobile interface for ChatGPT's mobile app through Bookmark integration, enabling users to save and organize their most valuable conversations."}),g.jsx("img",{src:IE,alt:"ChatGPT Project Thumbnail",className:"chatgpt-thumbnail-image"}),g.jsxs("div",{className:"case-study-columns",children:[g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"chatgpt-column-title chatgpt-column-team",children:"TEAM"}),g.jsx("p",{className:"column-content",children:"Just Me!"})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"chatgpt-column-title chatgpt-column-role",children:"ROLE"}),g.jsx("p",{className:"column-content",children:"Product Designer"})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"chatgpt-column-title chatgpt-column-timeline",children:"TIMELINE"}),g.jsxs("p",{className:"column-content",children:["3 months",g.jsx("br",{}),"(Sept 2025 - Nov 2025)"]})]}),g.jsxs("div",{className:"case-study-column",children:[g.jsx("h3",{className:"chatgpt-column-title chatgpt-column-skills",children:"SKILLS & TOOLS"}),g.jsxs("p",{className:"column-content",children:["Figma, User Research,",g.jsx("br",{}),"Prototyping"]})]})]})]}),g.jsxs("div",{className:"case-study-section",children:[g.jsx("h2",{className:"chatgpt-section-title chatgpt-section-background",children:"[1] BACKGROUND"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"One of the greatest AI tools on the market"})}),g.jsx("p",{className:"section-paragraph",children:"ChatGPT. It's the AI tool most of us rely on without even thinking about it."}),g.jsxs("p",{className:"section-paragraph",children:["I recently realized I rarely use ChatGPT's mobile app. The experience just never felt as ",g.jsx("span",{className:"dotted-underline",children:"smooth"})," or ",g.jsx("span",{className:"dotted-underline",children:"intuitive"})," as the desktop version. ",g.jsx("em",{children:"Was it just me?"})," Or were other users also struggling to rely on ChatGPT on the go?"]}),g.jsx("p",{className:"section-paragraph",children:"Information retrieval on the mobile app often felt like a hassle:"}),g.jsxs("div",{className:"chatgpt-callouts",children:[g.jsx("div",{className:"chatgpt-callout",children:g.jsxs("div",{className:"chatgpt-callout-content",children:[g.jsx("h4",{className:"chatgpt-callout-title",children:"OVERLAPPING CONVERSATIONS"}),g.jsx("p",{className:"chatgpt-callout-caption",children:"Multiple chat threads made it hard to locate specific conversations quickly."})]})}),g.jsx("div",{className:"chatgpt-callout",children:g.jsxs("div",{className:"chatgpt-callout-content",children:[g.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-pink",children:"LIMITED SCREEN SPACE"}),g.jsx("p",{className:"chatgpt-callout-caption",children:"The mobile interface felt cramped, making it difficult to navigate and find important messages."})]})}),g.jsx("div",{className:"chatgpt-callout",children:g.jsxs("div",{className:"chatgpt-callout-content",children:[g.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-bubblegum",children:"COMPACT INTERFACE"}),g.jsx("p",{className:"chatgpt-callout-caption",children:"The condensed layout made it challenging to revisit past insights and organize conversations effectively."})]})})]}),g.jsx("p",{className:"section-paragraph",children:"This made me wonder:"}),g.jsx("div",{className:"chatgpt-hmw-container",children:g.jsx("img",{src:FE,alt:"How Might We",className:"chatgpt-hmw-image"})})]}),g.jsxs("div",{className:"case-study-section",children:[g.jsx("h2",{className:"chatgpt-section-title chatgpt-section-final-product",children:"[2] THE FINAL PRODUCT"}),g.jsx("h3",{className:"section-subtitle",children:g.jsx("em",{children:"A little preview of the final product"})}),g.jsxs("p",{className:"section-paragraph",children:["The output of the project was ",g.jsx("span",{className:"dotted-underline",children:"three well-crafted high-fidelity flows"})," that integrated my bookmarks feature into the ChatGPT mobile app!"]}),g.jsxs("div",{className:"chatgpt-videos-canvas",children:[g.jsx("video",{src:BE,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),g.jsx("video",{src:zE,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),g.jsx("video",{src:HE,className:"chatgpt-canvas-video chatgpt-video-item",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]})]}),g.jsxs("div",{className:"case-study-section",children:[g.jsx("h2",{className:"chatgpt-section-title chatgpt-section-user-research",children:"[3] USER RESEARCH"}),g.jsx("h3",{className:"section-subtitle",children:"Discovering how others felt through User Research"}),g.jsxs("p",{className:"section-paragraph",children:["I conducted informal interviews with a small but diverse group of ChatGPT users: a mix of ",g.jsx("span",{className:"dotted-underline",children:"software engineers"})," and ",g.jsx("span",{className:"dotted-underline",children:"college students"}),"."]}),g.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[3.1] THE SOFTWARE ENGINEER"}),g.jsx("div",{className:"chatgpt-wide-canvas",children:g.jsx("img",{src:GE,alt:"Vedant",className:"chatgpt-wide-canvas-image chatgpt-vedant-image"})}),g.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-pink",children:"[3.2] THE BU STUDENT"}),g.jsx("div",{className:"chatgpt-wide-canvas",children:g.jsx("img",{src:VE,alt:"Ryan",className:"chatgpt-wide-canvas-image chatgpt-ryan-image"})}),g.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-bubblegum",children:"[3.3] THE CORNELL STUDENT"}),g.jsx("div",{className:"chatgpt-wide-canvas",children:g.jsx("img",{src:kE,alt:"Aditi",className:"chatgpt-wide-canvas-image chatgpt-aditi-image"})})]}),g.jsxs("div",{className:"case-study-section",children:[g.jsx("h2",{className:"chatgpt-section-title chatgpt-section-brainstorming",children:"[4] BRAINSTORMING"}),g.jsx("h3",{className:"section-subtitle",children:"Brainstorming HMWs with my Friends"}),g.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[4.1] HMW QUESTIONS"}),g.jsx("p",{className:"section-paragraph",children:"I spent around 4 hours coming up with HMW questions with my roommate and one of my closest friends!"}),g.jsx("div",{className:"chatgpt-wide-canvas chatgpt-sticky-canvas",children:g.jsx("img",{src:jE,alt:"Sticky Notes",className:"chatgpt-sticky-image"})}),g.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-pink",children:"[4.2] SOLUTIONS"}),g.jsxs("p",{className:"section-paragraph",children:["We condensed the HMWs into three core problem spaces which are the following: ",g.jsx("span",{className:"dotted-underline chatgpt-yellow",children:"Enhancing Learning Retention"}),", ",g.jsx("span",{className:"dotted-underline chatgpt-blue",children:"Conversation Structure"}),", and ",g.jsx("span",{className:"dotted-underline chatgpt-green",children:"Summarizing Takeaways"}),"."]}),g.jsx("div",{className:"chatgpt-wide-canvas chatgpt-solutions-canvas",children:g.jsx("img",{src:XE,alt:"Solutions",className:"chatgpt-wide-canvas-image chatgpt-solutions-image"})}),g.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-bubblegum",children:"[4.3] FEASABILITY"}),g.jsx("p",{className:"section-paragraph",children:"Conducting SWOT analysis led me to discover the feasibility of these solution spaces, especially on a mobile interface."}),g.jsx("div",{className:"chatgpt-wide-canvas chatgpt-swot-canvas",children:g.jsx("img",{src:WE,alt:"SWOT Analysis",className:"chatgpt-wide-canvas-image chatgpt-swot-image"})}),g.jsx("h4",{className:"chatgpt-subsection-title chatgpt-subsection-orange",children:"[4.4] MARKET RESEARCH"}),g.jsx("p",{className:"section-paragraph",children:"To determine which features made the most sense for users, I evaluated other AI tools to identify patterns in interactions and functionality."}),g.jsx("div",{className:"chatgpt-wide-canvas",children:g.jsx("img",{src:ZE,alt:"Claude Analysis",className:"chatgpt-wide-canvas-image chatgpt-claude-image"})}),g.jsx("div",{className:"chatgpt-wide-canvas",children:g.jsx("img",{src:KE,alt:"Gemini Analysis",className:"chatgpt-wide-canvas-image chatgpt-gemini-image"})})]}),g.jsxs("div",{className:"case-study-section",children:[g.jsx("h2",{className:"chatgpt-section-title chatgpt-section-more-brainstorming",children:"[5] MORE BRAINSTORMING"}),g.jsx("h3",{className:"section-subtitle",children:"Understanding the terminology"}),g.jsx("div",{className:"chatgpt-callout",children:g.jsxs("div",{className:"chatgpt-callout-content",children:[g.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-title-orange",children:"[5.1] LOCAL BOOKMARKS"}),g.jsxs("p",{className:"chatgpt-callout-caption",children:[g.jsx("em",{children:"Local Bookmarks"}),' are for "in-moment organization" within a single chat. They keep important messages easily accessible without forcing users to think about categorization.']})]})}),g.jsx("div",{className:"chatgpt-wide-canvas chatgpt-local-bookmarks-canvas",children:g.jsx("img",{src:qE,alt:"Local Bookmarks",className:"chatgpt-wide-canvas-image chatgpt-local-bookmarks-image"})}),g.jsx("div",{className:"chatgpt-callout",children:g.jsxs("div",{className:"chatgpt-callout-content",children:[g.jsx("h4",{className:"chatgpt-callout-title chatgpt-callout-title-orange",children:"[5.2] GLOBAL BOOKMARKS"}),g.jsx("p",{className:"chatgpt-callout-caption",children:"Global Bookmarks are category tagged bookmarks that are designed for cross-conversation organization."})]})}),g.jsx("div",{className:"chatgpt-wide-canvas chatgpt-local-bookmarks-canvas",children:g.jsx("img",{src:YE,alt:"Global Bookmarks",className:"chatgpt-wide-canvas-image chatgpt-local-bookmarks-image"})}),g.jsx("p",{className:"section-paragraph",children:"Support users with managing key information across numerous chats and enables thematic organization."})]})]})})),JE=[{name:"AI Qualitative Branching",date:"May 26",comingSoon:!0},{name:"Sections",date:"Apr 26",comingSoon:!1},{name:"Virtual Backgrounds",date:"Apr 26",comingSoon:!1},{name:"Monadic Study Builder",date:"Mar 26",comingSoon:!1},{name:"TURF Study Builder",date:"Feb 26",comingSoon:!1}];function $E(){return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),g.jsx("div",{className:"pogo-features-page",children:g.jsxs("div",{className:"pogo-features-inner",children:[g.jsxs("div",{className:"pogo-header",children:[g.jsxs("div",{className:"pogo-header-left",children:[g.jsx("h1",{className:"pogo-header-title",children:"Pogo AI Survey Platform"}),g.jsx("p",{className:"pogo-header-date",children:"Spring 2026"})]}),g.jsx("div",{className:"pogo-header-right",children:g.jsx("p",{className:"pogo-header-desc",children:"Currently working as a Product Design Intern at Pogo, an enterprise AI survey platform that has raised $14.8M in funding."})})]}),g.jsx("p",{className:"pogo-header-title pogo-section-label",children:"Shipped Features"}),g.jsx("ul",{className:"pogo-features-list",children:JE.map((r,e)=>g.jsxs("li",{className:`pogo-features-row${r.comingSoon?" pogo-features-row--dim cursor-coming-soon":""}`,style:{animationDelay:`${.2+e*.08}s`},children:[g.jsx("span",{className:"pogo-features-name",children:r.name}),g.jsx("span",{className:"pogo-features-date",children:r.date})]},r.name))})]})})}const eb=[{num:"01",title:"Rejection",date:"APR 2026",path:"/writing/rejection"}];function tb(){const r=Ps();return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),g.jsx("div",{className:"pogo-features-page",children:g.jsxs("div",{className:"pogo-features-inner",children:[g.jsx("p",{className:"pogo-features-heading",children:"WRITING"}),g.jsx("ul",{className:"pogo-features-list",children:eb.map((e,i)=>g.jsxs("li",{className:"pogo-features-row writing-row",style:{animationDelay:`${.2+i*.08}s`,cursor:"pointer"},onClick:()=>r(e.path),children:[g.jsxs("span",{className:"pogo-features-name",children:[g.jsx("span",{className:"writing-num",children:e.num}),"  ",e.title]}),g.jsx("span",{className:"pogo-features-date",children:e.date})]},e.num))})]})})}function nb(){return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),g.jsx("div",{className:"article-page",children:g.jsxs("div",{className:"article-inner",children:[g.jsx("h1",{className:"article-title",children:"Rejection"}),g.jsx("p",{className:"article-dateline",children:g.jsx("span",{className:"article-date",children:"Apr 17, 2026"})})]})})}const ib="/assets/screen1-ppgaT2M6.png",ab="/assets/screen2-BYvi939c.png",sb="/assets/screen3-Bg4PHBuL.png",rb="/assets/reddit-logo2-DkJOcndy.webp",ob="/assets/chatgpt-logo-DyzhL--E.png",lb="/assets/screen4-VvD5IonC.png",cb="/assets/screen5-BBQ9xSz2.png",J0=()=>g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",focusable:"false",children:g.jsx("path",{d:"M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});function ub(){return re.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]),g.jsx("div",{className:"case-study-container",children:g.jsxs("div",{className:"chatgpt-article-content",children:[g.jsxs("div",{className:"chatgpt-article-header",children:[g.jsxs("div",{className:"chatgpt-article-header-left",children:[g.jsx("h1",{className:"chatgpt-article-title",children:"ChatGPT Bookmarks"}),g.jsx("p",{className:"chatgpt-article-date",children:"Fall 2025"}),g.jsx("a",{href:"https://medium.com/@nitishgannu/building-bookmarks-into-chatgpt-46ca50a7b2a4",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-article-case-link cursor-medium",children:"Full Case Study"})]}),g.jsx("div",{className:"chatgpt-article-header-right",children:g.jsx("p",{className:"chatgpt-article-body",children:"As part of a fun semester-wide project, I explored how bookmarking could work inside ChatGPT conversations to help users save, revisit, and navigate important messages more naturally."})})]}),g.jsxs("div",{className:"chatgpt-feedback-section",children:[g.jsx("p",{className:"chatgpt-feedback-heading",children:"Motivation"}),g.jsxs("a",{href:"https://www.reddit.com/r/ChatGPT/comments/1oxm491/feature_suggestion_bookmarks_table_of_contents_in/?utm_source=chatgpt.com",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-feedback-card chatgpt-feedback-card--reddit",children:[g.jsx("img",{src:rb,alt:"Reddit",className:"chatgpt-feedback-logo"}),g.jsx("span",{className:"chatgpt-feedback-text",children:"Feature Suggestion: Bookmarks"}),g.jsx("span",{className:"chatgpt-feedback-arrow",children:g.jsx(J0,{})})]}),g.jsxs("a",{href:"https://community.openai.com/t/add-ability-to-bookmark-favorite-a-message-in-any-chat-thread/1086947",target:"_blank",rel:"noopener noreferrer",className:"chatgpt-feedback-card",children:[g.jsx("img",{src:ob,alt:"ChatGPT",className:"chatgpt-feedback-logo chatgpt-feedback-logo--sm"}),g.jsx("span",{className:"chatgpt-feedback-text",children:"Add ability to bookmark / favorite a message"}),g.jsx("span",{className:"chatgpt-feedback-arrow",children:g.jsx(J0,{})})]})]}),g.jsxs("div",{className:"chatgpt-article-canvas",children:[g.jsx("img",{src:ib,alt:"Screen 1",className:"chatgpt-screen-img"}),g.jsx("img",{src:ab,alt:"Screen 2",className:"chatgpt-screen-img",style:{marginTop:"140px"}})]}),g.jsx("div",{className:"chatgpt-article-canvas",style:{marginTop:"16px",aspectRatio:"4 / 3"},children:g.jsx("img",{src:sb,alt:"Screen 3",className:"chatgpt-screen-img chatgpt-screen-large"})}),g.jsxs("div",{className:"chatgpt-article-canvas",style:{marginTop:"16px"},children:[g.jsx("img",{src:cb,alt:"Screen 5",className:"chatgpt-screen-img",style:{marginTop:"140px"}}),g.jsx("img",{src:lb,alt:"Screen 4",className:"chatgpt-screen-img"})]}),g.jsxs("p",{className:"chatgpt-last-updated",children:[g.jsx("span",{className:"chatgpt-last-updated-label",children:"Last Updated: "}),g.jsx("span",{className:"chatgpt-last-updated-date",children:"December 2025"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="183",fb=0,$0=1,db=2,jc=1,hb=2,qo=3,ss=0,kn=1,pa=2,va=0,Dr=1,ev=2,tv=3,nv=4,pb=5,Ns=100,mb=101,gb=102,vb=103,_b=104,xb=200,Sb=201,yb=202,Mb=203,eh=204,th=205,Eb=206,bb=207,Tb=208,Ab=209,Rb=210,wb=211,Cb=212,Nb=213,Db=214,nh=0,ih=1,ah=2,Lr=3,sh=4,rh=5,oh=6,lh=7,d_=0,Ub=1,Lb=2,Fi=0,h_=1,p_=2,m_=3,g_=4,v_=5,__=6,x_=7,S_=300,Os=301,Or=302,_d=303,xd=304,iu=306,ch=1e3,ma=1001,uh=1002,An=1003,Ob=1004,xc=1005,Dn=1006,Sd=1007,Us=1008,ui=1009,y_=1010,M_=1011,Ko=1012,$h=1013,Gi=1014,Pi=1015,ya=1016,ep=1017,tp=1018,Qo=1020,E_=35902,b_=35899,T_=1021,A_=1022,Mi=1023,Ma=1026,Ls=1027,R_=1028,np=1029,Pr=1030,ip=1031,ap=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,fh=35840,dh=35841,hh=35842,ph=35843,mh=36196,gh=37492,vh=37496,_h=37488,xh=37489,Sh=37490,yh=37491,Mh=37808,Eh=37809,bh=37810,Th=37811,Ah=37812,Rh=37813,wh=37814,Ch=37815,Nh=37816,Dh=37817,Uh=37818,Lh=37819,Oh=37820,Ph=37821,Ih=36492,Fh=36494,Bh=36495,zh=36283,Hh=36284,Gh=36285,Vh=36286,Pb=3200,Ib=0,Fb=1,is="",ci="srgb",Ir="srgb-linear",Qc="linear",Ft="srgb",vr=7680,iv=519,Bb=512,zb=513,Hb=514,sp=515,Gb=516,Vb=517,rp=518,kb=519,av=35044,sv="300 es",Ii=2e3,Jc=2001;function jb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $c(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xb(){const r=$c("canvas");return r.style.display="block",r}const rv={};function ov(...r){const e="THREE."+r.shift();console.log(e,...r)}function w_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=w_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function At(...r){r=w_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function eu(...r){const e=r.join(" ");e in rv||(rv[e]=!0,at(...r))}function Wb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const qb={[nh]:ih,[ah]:oh,[sh]:lh,[Lr]:rh,[ih]:nh,[oh]:ah,[lh]:sh,[rh]:Lr};class Hr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,kh=180/Math.PI;function nl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function _t(r,e,i){return Math.max(e,Math.min(i,r))}function Yb(r,e){return(r%e+e)%e}function Md(r,e,i){return(1-i)*r+i*e}function Ho(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,i=0){Lt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],_=s[l+2],S=s[l+3],v=c[f+0],M=c[f+1],E=c[f+2],C=c[f+3];if(S!==C||m!==v||h!==M||_!==E){let y=m*v+h*M+_*E+S*C;y<0&&(v=-v,M=-M,E=-E,C=-C,y=-y);let x=1-p;if(y<.9995){const N=Math.acos(y),D=Math.sin(N);x=Math.sin(x*N)/D,p=Math.sin(p*N)/D,m=m*x+v*p,h=h*x+M*p,_=_*x+E*p,S=S*x+C*p}else{m=m*x+v*p,h=h*x+M*p,_=_*x+E*p,S=S*x+C*p;const N=1/Math.sqrt(m*m+h*h+_*_+S*S);m*=N,h*=N,_*=N,S*=N}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],_=s[l+3],S=c[f],v=c[f+1],M=c[f+2],E=c[f+3];return e[i]=p*E+_*S+m*M-h*v,e[i+1]=m*E+_*v+h*S-p*M,e[i+2]=h*E+_*M+p*v-m*S,e[i+3]=_*E-p*S-m*v-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),_=p(l/2),S=p(c/2),v=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*_*S+h*M*E,this._y=h*M*S-v*_*E,this._z=h*_*E+v*M*S,this._w=h*_*S-v*M*E;break;case"YXZ":this._x=v*_*S+h*M*E,this._y=h*M*S-v*_*E,this._z=h*_*E-v*M*S,this._w=h*_*S+v*M*E;break;case"ZXY":this._x=v*_*S-h*M*E,this._y=h*M*S+v*_*E,this._z=h*_*E+v*M*S,this._w=h*_*S-v*M*E;break;case"ZYX":this._x=v*_*S-h*M*E,this._y=h*M*S+v*_*E,this._z=h*_*E-v*M*S,this._w=h*_*S+v*M*E;break;case"YZX":this._x=v*_*S+h*M*E,this._y=h*M*S+v*_*E,this._z=h*_*E-v*M*S,this._w=h*_*S-v*M*E;break;case"XZY":this._x=v*_*S-h*M*E,this._y=h*M*S-v*_*E,this._z=h*_*E+v*M*S,this._w=h*_*S+v*M*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],_=i[6],S=i[10],v=s+p+S;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(s>p&&s>S){const M=2*Math.sqrt(1+s-p-S);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>S){const M=2*Math.sqrt(1+p-s-S);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+S-s-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=s*_+f*p+l*h-c*m,this._y=l*_+f*m+c*p-s*h,this._z=c*_+f*h+s*m-l*p,this._w=f*_-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,s=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(lv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(lv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),_=2*(p*i-c*l),S=2*(c*s-f*i);return this.x=i+m*h+f*S-p*_,this.y=s+m*_+p*h-c*S,this.z=l+m*S+c*_-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ed=new le,lv=new Gr;class ut{constructor(e,i,s,l,c,f,p,m,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],_=s[4],S=s[7],v=s[2],M=s[5],E=s[8],C=l[0],y=l[3],x=l[6],N=l[1],D=l[4],L=l[7],F=l[2],H=l[5],V=l[8];return c[0]=f*C+p*N+m*F,c[3]=f*y+p*D+m*H,c[6]=f*x+p*L+m*V,c[1]=h*C+_*N+S*F,c[4]=h*y+_*D+S*H,c[7]=h*x+_*L+S*V,c[2]=v*C+M*N+E*F,c[5]=v*y+M*D+E*H,c[8]=v*x+M*L+E*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*f*_-i*p*h-s*c*_+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8],S=_*f-p*h,v=p*m-_*c,M=h*c-f*m,E=i*S+s*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=S*C,e[1]=(l*h-_*s)*C,e[2]=(p*s-l*f)*C,e[3]=v*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(s*m-h*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(bd.makeScale(e,i)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,i){return this.premultiply(bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bd=new ut,cv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zb(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=Ur(l.r),l.g=Ur(l.g),l.b=Ur(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return eu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return eu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ir]:{primaries:e,whitePoint:s,transfer:Qc,toXYZ:cv,fromXYZ:uv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:cv,fromXYZ:uv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Mt=Zb();function _a(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ur(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _r;class Kb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{_r===void 0&&(_r=$c("canvas")),_r.width=e.width,_r.height=e.height;const l=_r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=_r}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=$c("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=_a(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qb=0;class op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Td(l[f].image)):c.push(Td(l[f]))}else c=Td(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Td(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Jb=0;const Ad=new le;class On extends Hr{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ma,l=ma,c=Dn,f=Us,p=Mi,m=ui,h=On.DEFAULT_ANISOTROPY,_=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=nl(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ad).x}get height(){return this.source.getSize(Ad).y}get depth(){return this.source.getSize(Ad).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ch:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ch:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=S_;On.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],_=m[4],S=m[8],v=m[1],M=m[5],E=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(_-v)<.01&&Math.abs(S-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(S+C)<.1&&Math.abs(E+y)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(h+1)/2,L=(M+1)/2,F=(x+1)/2,H=(_+v)/4,V=(S+C)/4,A=(E+y)/4;return D>L&&D>F?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=H/s,c=V/s):L>F?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=H/l,c=A/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=V/c,l=A/c),this.set(s,l,c,i),this}let N=Math.sqrt((y-E)*(y-E)+(S-C)*(S-C)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(S-C)/N,this.z=(v-_)/N,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $b extends Hr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new On(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new op(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends $b{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class C_ extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eT extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e,i,s,l,c,f,p,m,h,_,S,v,M,E,C,y){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,_,S,v,M,E,C,y)}set(e,i,s,l,c,f,p,m,h,_,S,v,M,E,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=h,x[6]=_,x[10]=S,x[14]=v,x[3]=M,x[7]=E,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),f=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const v=f*_,M=f*S,E=p*_,C=p*S;i[0]=m*_,i[4]=-m*S,i[8]=h,i[1]=M+E*h,i[5]=v-C*h,i[9]=-p*m,i[2]=C-v*h,i[6]=E+M*h,i[10]=f*m}else if(e.order==="YXZ"){const v=m*_,M=m*S,E=h*_,C=h*S;i[0]=v+C*p,i[4]=E*p-M,i[8]=f*h,i[1]=f*S,i[5]=f*_,i[9]=-p,i[2]=M*p-E,i[6]=C+v*p,i[10]=f*m}else if(e.order==="ZXY"){const v=m*_,M=m*S,E=h*_,C=h*S;i[0]=v-C*p,i[4]=-f*S,i[8]=E+M*p,i[1]=M+E*p,i[5]=f*_,i[9]=C-v*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const v=f*_,M=f*S,E=p*_,C=p*S;i[0]=m*_,i[4]=E*h-M,i[8]=v*h+C,i[1]=m*S,i[5]=C*h+v,i[9]=M*h-E,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,M=f*h,E=p*m,C=p*h;i[0]=m*_,i[4]=C-v*S,i[8]=E*S+M,i[1]=S,i[5]=f*_,i[9]=-p*_,i[2]=-h*_,i[6]=M*S+E,i[10]=v-C*S}else if(e.order==="XZY"){const v=f*m,M=f*h,E=p*m,C=p*h;i[0]=m*_,i[4]=-S,i[8]=h*_,i[1]=v*S+C,i[5]=f*_,i[9]=M*S-E,i[2]=E*S-M,i[6]=p*_,i[10]=C*S+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tT,e,nT)}lookAt(e,i,s){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Qa.crossVectors(s,Qn),Qa.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Qa.crossVectors(s,Qn)),Qa.normalize(),Sc.crossVectors(Qn,Qa),l[0]=Qa.x,l[4]=Sc.x,l[8]=Qn.x,l[1]=Qa.y,l[5]=Sc.y,l[9]=Qn.y,l[2]=Qa.z,l[6]=Sc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],_=s[1],S=s[5],v=s[9],M=s[13],E=s[2],C=s[6],y=s[10],x=s[14],N=s[3],D=s[7],L=s[11],F=s[15],H=l[0],V=l[4],A=l[8],U=l[12],he=l[1],G=l[5],te=l[9],ae=l[13],de=l[2],J=l[6],I=l[10],z=l[14],ce=l[3],ve=l[7],O=l[11],Z=l[15];return c[0]=f*H+p*he+m*de+h*ce,c[4]=f*V+p*G+m*J+h*ve,c[8]=f*A+p*te+m*I+h*O,c[12]=f*U+p*ae+m*z+h*Z,c[1]=_*H+S*he+v*de+M*ce,c[5]=_*V+S*G+v*J+M*ve,c[9]=_*A+S*te+v*I+M*O,c[13]=_*U+S*ae+v*z+M*Z,c[2]=E*H+C*he+y*de+x*ce,c[6]=E*V+C*G+y*J+x*ve,c[10]=E*A+C*te+y*I+x*O,c[14]=E*U+C*ae+y*z+x*Z,c[3]=N*H+D*he+L*de+F*ce,c[7]=N*V+D*G+L*J+F*ve,c[11]=N*A+D*te+L*I+F*O,c[15]=N*U+D*ae+L*z+F*Z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],_=e[2],S=e[6],v=e[10],M=e[14],E=e[3],C=e[7],y=e[11],x=e[15],N=m*M-h*v,D=p*M-h*S,L=p*v-m*S,F=f*M-h*_,H=f*v-m*_,V=f*S-p*_;return i*(C*N-y*D+x*L)-s*(E*N-y*F+x*H)+l*(E*D-C*F+x*V)-c*(E*L-C*H+y*V)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],_=e[8],S=e[9],v=e[10],M=e[11],E=e[12],C=e[13],y=e[14],x=e[15],N=i*p-s*f,D=i*m-l*f,L=i*h-c*f,F=s*m-l*p,H=s*h-c*p,V=l*h-c*m,A=_*C-S*E,U=_*y-v*E,he=_*x-M*E,G=S*y-v*C,te=S*x-M*C,ae=v*x-M*y,de=N*ae-D*te+L*G+F*he-H*U+V*A;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/de;return e[0]=(p*ae-m*te+h*G)*J,e[1]=(l*te-s*ae-c*G)*J,e[2]=(C*V-y*H+x*F)*J,e[3]=(v*H-S*V-M*F)*J,e[4]=(m*he-f*ae-h*U)*J,e[5]=(i*ae-l*he+c*U)*J,e[6]=(y*L-E*V-x*D)*J,e[7]=(_*V-v*L+M*D)*J,e[8]=(f*te-p*he+h*A)*J,e[9]=(s*he-i*te-c*A)*J,e[10]=(E*H-C*L+x*N)*J,e[11]=(S*L-_*H-M*N)*J,e[12]=(p*U-f*G-m*A)*J,e[13]=(i*G-s*U+l*A)*J,e[14]=(C*D-E*F-y*N)*J,e[15]=(_*F-S*D+v*N)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,_=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+s,_*m-l*f,0,h*m-l*p,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,_=f+f,S=p+p,v=c*h,M=c*_,E=c*S,C=f*_,y=f*S,x=p*S,N=m*h,D=m*_,L=m*S,F=s.x,H=s.y,V=s.z;return l[0]=(1-(C+x))*F,l[1]=(M+L)*F,l[2]=(E-D)*F,l[3]=0,l[4]=(M-L)*H,l[5]=(1-(v+x))*H,l[6]=(y+N)*H,l[7]=0,l[8]=(E+D)*V,l[9]=(y-N)*V,l[10]=(1-(v+C))*V,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=xr.set(l[0],l[1],l[2]).length();const p=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),vi.copy(this);const h=1/f,_=1/p,S=1/m;return vi.elements[0]*=h,vi.elements[1]*=h,vi.elements[2]*=h,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=S,vi.elements[9]*=S,vi.elements[10]*=S,i.setFromRotationMatrix(vi),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=Ii,m=!1){const h=this.elements,_=2*c/(i-e),S=2*c/(s-l),v=(i+e)/(i-e),M=(s+l)/(s-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(p===Ii)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===Jc)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=Ii,m=!1){const h=this.elements,_=2/(i-e),S=2/(s-l),v=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(p===Ii)E=-2/(f-c),C=-(f+c)/(f-c);else if(p===Jc)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const xr=new le,vi=new fn,tT=new le(0,0,0),nT=new le(1,1,1),Qa=new le,Sc=new le,Qn=new le,fv=new fn,dv=new Gr;class Ea{constructor(e=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],_=l[9],S=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_t(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return dv.setFromEuler(this),this.setFromQuaternion(dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class N_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iT=0;const hv=new le,Sr=new Gr,ca=new fn,yc=new le,Go=new le,aT=new le,sT=new Gr,pv=new le(1,0,0),mv=new le(0,1,0),gv=new le(0,0,1),vv={type:"added"},rT={type:"removed"},yr={type:"childadded",child:null},Rd={type:"childremoved",child:null};class $n extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new le,i=new Ea,s=new Gr,l=new le(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ut}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(pv,e)}rotateY(e){return this.rotateOnAxis(mv,e)}rotateZ(e){return this.rotateOnAxis(gv,e)}translateOnAxis(e,i){return hv.copy(e).applyQuaternion(this.quaternion),this.position.add(hv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(pv,e)}translateY(e){return this.translateOnAxis(mv,e)}translateZ(e){return this.translateOnAxis(gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?yc.copy(e):yc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Go,yc,this.up):ca.lookAt(yc,Go,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(ca),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),yr.child=e,this.dispatchEvent(yr),yr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(rT),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,aT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,sT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const S=m[h];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),_=f(e.images),S=f(e.shapes),v=f(e.skeletons),M=f(e.animations),E=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),S.length>0&&(s.shapes=S),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}$n.DEFAULT_UP=new le(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mc extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oT={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(h,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],v=_.position.distanceTo(S.position),M=.02,E=.005;h.inputState.pinching&&v>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(oT)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Mc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const D_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Cd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Gt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Mt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Mt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Mt.workingColorSpace){if(e=Yb(e,1),i=_t(i,0,1),s=_t(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Cd(f,c,e+1/3),this.g=Cd(f,c,e),this.b=Cd(f,c,e-1/3)}return Mt.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=D_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Mt.workingToColorSpace(Nn.copy(this),e),Math.round(_t(Nn.r*255,0,255))*65536+Math.round(_t(Nn.g*255,0,255))*256+Math.round(_t(Nn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Mt.workingColorSpace){Mt.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const _=(p+f)/2;if(p===f)m=0,h=0;else{const S=f-p;switch(h=_<=.5?S/(f+p):S/(2-f-p),f){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Mt.workingColorSpace){return Mt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ci){Mt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,s=Nn.g,l=Nn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Ec);const s=Md(Ja.h,Ec.h,i),l=Md(Ja.s,Ec.s,i),c=Md(Ja.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Gt;Gt.NAMES=D_;class lT extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const _i=new le,ua=new le,Nd=new le,fa=new le,Mr=new le,Er=new le,_v=new le,Dd=new le,Ud=new le,Ld=new le,Od=new on,Pd=new on,Id=new on;class yi{constructor(e=new le,i=new le,s=new le){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),_i.subVectors(e,i),l.cross(_i);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){_i.subVectors(l,i),ua.subVectors(s,i),Nd.subVectors(e,i);const f=_i.dot(_i),p=_i.dot(ua),m=_i.dot(Nd),h=ua.dot(ua),_=ua.dot(Nd),S=f*h-p*p;if(S===0)return c.set(0,0,0),null;const v=1/S,M=(h*m-p*_)*v,E=(f*_-p*m)*v;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(p,fa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Od.setScalar(0),Pd.setScalar(0),Id.setScalar(0),Od.fromBufferAttribute(e,i),Pd.fromBufferAttribute(e,s),Id.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Od,c.x),f.addScaledVector(Pd,c.y),f.addScaledVector(Id,c.z),f}static isFrontFacing(e,i,s,l){return _i.subVectors(s,i),ua.subVectors(e,i),_i.cross(ua).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),_i.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Mr.subVectors(l,s),Er.subVectors(c,s),Dd.subVectors(e,s);const m=Mr.dot(Dd),h=Er.dot(Dd);if(m<=0&&h<=0)return i.copy(s);Ud.subVectors(e,l);const _=Mr.dot(Ud),S=Er.dot(Ud);if(_>=0&&S<=_)return i.copy(l);const v=m*S-_*h;if(v<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Mr,f);Ld.subVectors(e,c);const M=Mr.dot(Ld),E=Er.dot(Ld);if(E>=0&&M<=E)return i.copy(c);const C=M*h-m*E;if(C<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(s).addScaledVector(Er,p);const y=_*E-M*S;if(y<=0&&S-_>=0&&M-E>=0)return _v.subVectors(c,l),p=(S-_)/(S-_+(M-E)),i.copy(l).addScaledVector(_v,p);const x=1/(y+C+v);return f=C*x,p=v*x,i.copy(s).addScaledVector(Mr,f).addScaledVector(Er,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class il{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Tc.subVectors(this.max,Vo),br.subVectors(e.a,Vo),Tr.subVectors(e.b,Vo),Ar.subVectors(e.c,Vo),$a.subVectors(Tr,br),es.subVectors(Ar,Tr),Es.subVectors(br,Ar);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-Es.z,Es.y,$a.z,0,-$a.x,es.z,0,-es.x,Es.z,0,-Es.x,-$a.y,$a.x,0,-es.y,es.x,0,-Es.y,Es.x,0];return!Fd(i,br,Tr,Ar,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Fd(i,br,Tr,Ar,Tc))?!1:(Ac.crossVectors($a,es),i=[Ac.x,Ac.y,Ac.z],Fd(i,br,Tr,Ar,Tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new le,new le,new le,new le,new le,new le,new le,new le],xi=new le,bc=new il,br=new le,Tr=new le,Ar=new le,$a=new le,es=new le,Es=new le,Vo=new le,Tc=new le,Ac=new le,bs=new le;function Fd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){bs.fromArray(r,c);const p=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=e.dot(bs),h=i.dot(bs),_=s.dot(bs);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const un=new le,Rc=new Lt;let cT=0;class zi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=av,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(e),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==av&&(e.usage=this.usage),e}}class U_ extends zi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class L_ extends zi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class xa extends zi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const uT=new il,ko=new le,Bd=new le;class lp{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):uT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ko,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Bd)),this.expandByPoint(ko.copy(e.center).sub(Bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fT=0;const oi=new fn,zd=new $n,Rr=new le,Jn=new il,jo=new il,Mn=new le;class Ta extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jb(e)?L_:U_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,s){return oi.makeTranslation(e,i,s),this.applyMatrix4(oi),this}scale(e,i,s){return oi.makeScale(e,i,s),this.applyMatrix4(oi),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xa(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];jo.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(Jn.min,jo.min),Jn.expandByPoint(Mn),Mn.addVectors(Jn.max,jo.max),Jn.expandByPoint(Mn)):(Jn.expandByPoint(jo.min),Jn.expandByPoint(jo.max))}Jn.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)Mn.fromBufferAttribute(p,h),m&&(Rr.fromBufferAttribute(e,h),Mn.add(Rr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let A=0;A<s.count;A++)p[A]=new le,m[A]=new le;const h=new le,_=new le,S=new le,v=new Lt,M=new Lt,E=new Lt,C=new le,y=new le;function x(A,U,he){h.fromBufferAttribute(s,A),_.fromBufferAttribute(s,U),S.fromBufferAttribute(s,he),v.fromBufferAttribute(c,A),M.fromBufferAttribute(c,U),E.fromBufferAttribute(c,he),_.sub(h),S.sub(h),M.sub(v),E.sub(v);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(G),y.copy(S).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(G),p[A].add(C),p[U].add(C),p[he].add(C),m[A].add(y),m[U].add(y),m[he].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let A=0,U=N.length;A<U;++A){const he=N[A],G=he.start,te=he.count;for(let ae=G,de=G+te;ae<de;ae+=3)x(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const D=new le,L=new le,F=new le,H=new le;function V(A){F.fromBufferAttribute(l,A),H.copy(F);const U=p[A];D.copy(U),D.sub(F.multiplyScalar(F.dot(U))).normalize(),L.crossVectors(H,U);const G=L.dot(m[A])<0?-1:1;f.setXYZW(A,D.x,D.y,D.z,G)}for(let A=0,U=N.length;A<U;++A){const he=N[A],G=he.start,te=he.count;for(let ae=G,de=G+te;ae<de;ae+=3)V(e.getX(ae+0)),V(e.getX(ae+1)),V(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new le,c=new le,f=new le,p=new le,m=new le,h=new le,_=new le,S=new le;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),_.subVectors(f,c),S.subVectors(l,c),_.cross(S),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,y),p.add(_),m.add(_),h.add(_),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,c),S.subVectors(l,c),_.cross(S),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,S=p.normalized,v=new h.constructor(m.length*_);let M=0,E=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*_;for(let x=0;x<_;x++)v[E++]=h[M++]}return new zi(v,_,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ta,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,S=h.length;_<S;_++){const v=h[_],M=e(v,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let S=0,v=h.length;S<v;S++){const M=h[S];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],S=c[h];for(let v=0,M=S.length;v<M;v++)_.push(S[v].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,_=f.length;h<_;h++){const S=f[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dT=0;class au extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Dr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==eh&&(s.blendSrc=this.blendSrc),this.blendDst!==th&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ha=new le,Hd=new le,wc=new le,ts=new le,Gd=new le,Cc=new le,Vd=new le;class hT{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Hd.copy(e).add(i).multiplyScalar(.5),wc.copy(i).sub(e).normalize(),ts.copy(this.origin).sub(Hd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(wc),p=ts.dot(this.direction),m=-ts.dot(wc),h=ts.lengthSq(),_=Math.abs(1-f*f);let S,v,M,E;if(_>0)if(S=f*m-p,v=f*p-m,E=c*_,S>=0)if(v>=-E)if(v<=E){const C=1/_;S*=C,v*=C,M=S*(S+f*v+2*p)+v*(f*S+v+2*m)+h}else v=c,S=Math.max(0,-(f*v+p)),M=-S*S+v*(v+2*m)+h;else v=-c,S=Math.max(0,-(f*v+p)),M=-S*S+v*(v+2*m)+h;else v<=-E?(S=Math.max(0,-(-f*c+p)),v=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+v*(v+2*m)+h):v<=E?(S=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+h):(S=Math.max(0,-(f*c+p)),v=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+v*(v+2*m)+h);else v=f>0?-c:c,S=Math.max(0,-(f*v+p)),M=-S*S+v*(v+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Hd).addScaledVector(wc,v),M}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,l=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,l=(e.min.x-v.x)*h),_>=0?(c=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),S>=0?(p=(e.min.z-v.z)*S,m=(e.max.z-v.z)*S):(p=(e.max.z-v.z)*S,m=(e.min.z-v.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,s,l,c){Gd.subVectors(i,e),Cc.subVectors(s,e),Vd.crossVectors(Gd,Cc);let f=this.direction.dot(Vd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ts.subVectors(this.origin,e);const m=p*this.direction.dot(Cc.crossVectors(ts,Cc));if(m<0)return null;const h=p*this.direction.dot(Gd.cross(ts));if(h<0||m+h>f)return null;const _=-p*ts.dot(Vd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class O_ extends au{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xv=new fn,Ts=new hT,Nc=new lp,Sv=new le,Dc=new le,Uc=new le,Lc=new le,kd=new le,Oc=new le,yv=new le,Pc=new le;class Vi extends $n{constructor(e=new Ta,i=new O_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Oc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],S=c[m];_!==0&&(kd.fromBufferAttribute(S,e),f?Oc.addScaledVector(kd,_):Oc.addScaledVector(kd.sub(i),_))}i.add(Oc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),Ts.copy(e.ray).recast(e.near),!(Nc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Nc,Sv)===null||Ts.origin.distanceToSquared(Sv)>(e.far-e.near)**2))&&(xv.copy(c).invert(),Ts.copy(e.ray).applyMatrix4(xv),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ts)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,v=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,C=v.length;E<C;E++){const y=v[E],x=f[y.materialIndex],N=Math.max(y.start,M.start),D=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let L=N,F=D;L<F;L+=3){const H=p.getX(L),V=p.getX(L+1),A=p.getX(L+2);l=Ic(this,x,e,s,h,_,S,H,V,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=E,x=C;y<x;y+=3){const N=p.getX(y),D=p.getX(y+1),L=p.getX(y+2);l=Ic(this,f,e,s,h,_,S,N,D,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=v.length;E<C;E++){const y=v[E],x=f[y.materialIndex],N=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let L=N,F=D;L<F;L+=3){const H=L,V=L+1,A=L+2;l=Ic(this,x,e,s,h,_,S,H,V,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=E,x=C;y<x;y+=3){const N=y,D=y+1,L=y+2;l=Ic(this,f,e,s,h,_,S,N,D,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function pT(r,e,i,s,l,c,f,p){let m;if(e.side===kn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===ss,p),m===null)return null;Pc.copy(p),Pc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Pc);return h<i.near||h>i.far?null:{distance:h,point:Pc.clone(),object:r}}function Ic(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Dc),r.getVertexPosition(m,Uc),r.getVertexPosition(h,Lc);const _=pT(r,e,i,s,Dc,Uc,Lc,yv);if(_){const S=new le;yi.getBarycoord(yv,Dc,Uc,Lc,S),l&&(_.uv=yi.getInterpolatedAttribute(l,p,m,h,S,new Lt)),c&&(_.uv1=yi.getInterpolatedAttribute(c,p,m,h,S,new Lt)),f&&(_.normal=yi.getInterpolatedAttribute(f,p,m,h,S,new le),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:p,b:m,c:h,normal:new le,materialIndex:0};yi.getNormal(Dc,Uc,Lc,v.normal),_.face=v,_.barycoord=S}return _}class mT extends On{constructor(e=null,i=1,s=1,l,c,f,p,m,h=An,_=An,S,v){super(null,f,p,m,h,_,l,c,S,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new le,gT=new le,vT=new ut;class Cs{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=jd.subVectors(s,i).cross(gT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(jd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||vT.getNormalMatrix(e),l=this.coplanarPoint(jd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new lp,_T=new Lt(.5,.5),Fc=new le;class P_{constructor(e=new Cs,i=new Cs,s=new Cs,l=new Cs,c=new Cs,f=new Cs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ii,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],_=c[4],S=c[5],v=c[6],M=c[7],E=c[8],C=c[9],y=c[10],x=c[11],N=c[12],D=c[13],L=c[14],F=c[15];if(l[0].setComponents(h-f,M-_,x-E,F-N).normalize(),l[1].setComponents(h+f,M+_,x+E,F+N).normalize(),l[2].setComponents(h+p,M+S,x+C,F+D).normalize(),l[3].setComponents(h-p,M-S,x-C,F-D).normalize(),s)l[4].setComponents(m,v,y,L).normalize(),l[5].setComponents(h-m,M-v,x-y,F-L).normalize();else if(l[4].setComponents(h-m,M-v,x-y,F-L).normalize(),i===Ii)l[5].setComponents(h+m,M+v,x+y,F+L).normalize();else if(i===Jc)l[5].setComponents(m,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);const i=_T.distanceTo(e.center);return As.radius=.7071067811865476+i,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fc.x=l.normal.x>0?e.max.x:e.min.x,Fc.y=l.normal.y>0?e.max.y:e.min.y,Fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I_ extends On{constructor(e=[],i=Os,s,l,c,f,p,m,h,_){super(e,i,s,l,c,f,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jo extends On{constructor(e,i,s=Gi,l,c,f,p=An,m=An,h,_=Ma,S=1){if(_!==Ma&&_!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:S};super(v,l,c,f,p,m,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class xT extends Jo{constructor(e,i=Gi,s=Os,l,c,f=An,p=An,m,h=Ma){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,i,s,l,c,f,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class F_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends Ta{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],_=[],S=[];let v=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new xa(h,3)),this.setAttribute("normal",new xa(_,3)),this.setAttribute("uv",new xa(S,2));function E(C,y,x,N,D,L,F,H,V,A,U){const he=L/V,G=F/A,te=L/2,ae=F/2,de=H/2,J=V+1,I=A+1;let z=0,ce=0;const ve=new le;for(let O=0;O<I;O++){const Z=O*G-ae;for(let ue=0;ue<J;ue++){const Se=ue*he-te;ve[C]=Se*N,ve[y]=Z*D,ve[x]=de,h.push(ve.x,ve.y,ve.z),ve[C]=0,ve[y]=0,ve[x]=H>0?1:-1,_.push(ve.x,ve.y,ve.z),S.push(ue/V),S.push(1-O/A),z+=1}}for(let O=0;O<A;O++)for(let Z=0;Z<V;Z++){const ue=v+Z+J*O,Se=v+Z+J*(O+1),Ue=v+(Z+1)+J*(O+1),qe=v+(Z+1)+J*O;m.push(ue,Se,qe),m.push(Se,Ue,qe),ce+=6}p.addGroup(M,ce,U),M+=ce,v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sl extends Ta{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,_=m+1,S=e/p,v=i/m,M=[],E=[],C=[],y=[];for(let x=0;x<_;x++){const N=x*v-f;for(let D=0;D<h;D++){const L=D*S-c;E.push(L,-N,0),C.push(0,0,1),y.push(D/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let N=0;N<p;N++){const D=N+h*x,L=N+h*(x+1),F=N+1+h*(x+1),H=N+1+h*x;M.push(D,L,H),M.push(L,F,H)}this.setIndex(M),this.setAttribute("position",new xa(E,3)),this.setAttribute("normal",new xa(C,3)),this.setAttribute("uv",new xa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Fr(r[i]);for(const l in s)e[l]=s[l]}return e}function ST(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function B_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const yT={clone:Fr,merge:Ln};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends au{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=ST(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class bT extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class TT extends au{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AT extends au{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bc=new le,zc=new Gr,Ui=new le;class z_ extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bc,zc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,zc,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Bc,zc,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,zc,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new le,Mv=new Lt,Ev=new Lt;class Si extends z_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,Mv,Ev),i.subVectors(Ev,Mv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cp extends z_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const wr=-90,Cr=1;class RT extends $n{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(wr,Cr,e,i);l.layers=this.layers,this.add(l);const c=new Si(wr,Cr,e,i);c.layers=this.layers,this.add(c);const f=new Si(wr,Cr,e,i);f.layers=this.layers,this.add(f);const p=new Si(wr,Cr,e,i);p.layers=this.layers,this.add(p);const m=new Si(wr,Cr,e,i);m.layers=this.layers,this.add(m);const h=new Si(wr,Cr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,_]=this.children,S=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(S,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class wT extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class CT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function bv(r,e,i,s){const l=NT(s);switch(i){case T_:return r*e;case R_:return r*e/l.components*l.byteLength;case np:return r*e/l.components*l.byteLength;case Pr:return r*e*2/l.components*l.byteLength;case ip:return r*e*2/l.components*l.byteLength;case A_:return r*e*3/l.components*l.byteLength;case Mi:return r*e*4/l.components*l.byteLength;case ap:return r*e*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:case ph:return Math.max(r,16)*Math.max(e,8)/4;case fh:case hh:return Math.max(r,8)*Math.max(e,8)/2;case mh:case gh:case _h:case xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vh:case Sh:case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Fh:case Bh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zh:case Hh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Gh:case Vh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function NT(r){switch(r){case ui:case y_:return{byteLength:1,components:1};case Ko:case M_:case ya:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case Gi:case $h:case Pi:return{byteLength:4,components:1};case E_:case b_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function DT(r){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,S=h.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,h,_),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const _=m.array,S=m.updateRanges;if(r.bindBuffer(h,p),S.length===0)r.bufferSubData(h,0,_);else{S.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<S.length;M++){const E=S[v],C=S[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++v,S[v]=C)}S.length=v+1;for(let M=0,E=S.length;M<E;M++){const C=S[M];r.bufferSubData(h,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var UT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LT=`#ifdef USE_ALPHAHASH
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
#endif`,OT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BT=`#ifdef USE_AOMAP
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
#endif`,zT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HT=`#ifdef USE_BATCHING
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
#endif`,GT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XT=`#ifdef USE_IRIDESCENCE
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
#endif`,WT=`#ifdef USE_BUMPMAP
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
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,h1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x1=`#ifdef USE_GRADIENTMAP
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
}`,S1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E1=`uniform bool receiveShadow;
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
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
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
#endif`,N1=`uniform sampler2D dfgLUT;
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
}`,D1=`
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G1=`#if defined( USE_POINTS_UV )
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
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
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
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eA=`#ifdef USE_NORMALMAP
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
#endif`,tA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gA=`float getShadowMask() {
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
}`,vA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_A=`#ifdef USE_SKINNING
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
#endif`,xA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SA=`#ifdef USE_SKINNING
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
#endif`,yA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TA=`#ifdef USE_TRANSMISSION
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
#endif`,AA=`#ifdef USE_TRANSMISSION
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
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UA=`uniform sampler2D t2D;
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`#include <common>
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
}`,BA=`#if DEPTH_PACKING == 3200
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
}`,zA=`#define DISTANCE
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
}`,HA=`#define DISTANCE
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`uniform float scale;
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
}`,jA=`uniform vec3 diffuse;
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
}`,XA=`#include <common>
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
}`,WA=`uniform vec3 diffuse;
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
}`,qA=`#define LAMBERT
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
}`,YA=`#define LAMBERT
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
}`,ZA=`#define MATCAP
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
}`,KA=`#define MATCAP
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
}`,QA=`#define NORMAL
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
}`,JA=`#define NORMAL
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
}`,$A=`#define PHONG
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
}`,eR=`#define PHONG
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
}`,tR=`#define STANDARD
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
}`,nR=`#define STANDARD
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
}`,iR=`#define TOON
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
}`,aR=`#define TOON
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
}`,sR=`uniform float size;
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
}`,rR=`uniform vec3 diffuse;
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
}`,oR=`#include <common>
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
}`,lR=`uniform vec3 color;
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
}`,cR=`uniform float rotation;
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
}`,uR=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:UT,alphahash_pars_fragment:LT,alphamap_fragment:OT,alphamap_pars_fragment:PT,alphatest_fragment:IT,alphatest_pars_fragment:FT,aomap_fragment:BT,aomap_pars_fragment:zT,batching_pars_vertex:HT,batching_vertex:GT,begin_vertex:VT,beginnormal_vertex:kT,bsdfs:jT,iridescence_fragment:XT,bumpmap_pars_fragment:WT,clipping_planes_fragment:qT,clipping_planes_pars_fragment:YT,clipping_planes_pars_vertex:ZT,clipping_planes_vertex:KT,color_fragment:QT,color_pars_fragment:JT,color_pars_vertex:$T,color_vertex:e1,common:t1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:a1,displacementmap_vertex:s1,emissivemap_fragment:r1,emissivemap_pars_fragment:o1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:u1,envmap_common_pars_fragment:f1,envmap_pars_fragment:d1,envmap_pars_vertex:h1,envmap_physical_pars_fragment:b1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:v1,fog_pars_fragment:_1,gradientmap_pars_fragment:x1,lightmap_pars_fragment:S1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:M1,lights_pars_begin:E1,lights_toon_fragment:T1,lights_toon_pars_fragment:A1,lights_phong_fragment:R1,lights_phong_pars_fragment:w1,lights_physical_fragment:C1,lights_physical_pars_fragment:N1,lights_fragment_begin:D1,lights_fragment_maps:U1,lights_fragment_end:L1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:P1,logdepthbuf_pars_vertex:I1,logdepthbuf_vertex:F1,map_fragment:B1,map_pars_fragment:z1,map_particle_fragment:H1,map_particle_pars_fragment:G1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:k1,morphinstance_vertex:j1,morphcolor_vertex:X1,morphnormal_vertex:W1,morphtarget_pars_vertex:q1,morphtarget_vertex:Y1,normal_fragment_begin:Z1,normal_fragment_maps:K1,normal_pars_fragment:Q1,normal_pars_vertex:J1,normal_vertex:$1,normalmap_pars_fragment:eA,clearcoat_normal_fragment_begin:tA,clearcoat_normal_fragment_maps:nA,clearcoat_pars_fragment:iA,iridescence_pars_fragment:aA,opaque_fragment:sA,packing:rA,premultiplied_alpha_fragment:oA,project_vertex:lA,dithering_fragment:cA,dithering_pars_fragment:uA,roughnessmap_fragment:fA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:hA,shadowmap_pars_vertex:pA,shadowmap_vertex:mA,shadowmask_pars_fragment:gA,skinbase_vertex:vA,skinning_pars_vertex:_A,skinning_vertex:xA,skinnormal_vertex:SA,specularmap_fragment:yA,specularmap_pars_fragment:MA,tonemapping_fragment:EA,tonemapping_pars_fragment:bA,transmission_fragment:TA,transmission_pars_fragment:AA,uv_pars_fragment:RA,uv_pars_vertex:wA,uv_vertex:CA,worldpos_vertex:NA,background_vert:DA,background_frag:UA,backgroundCube_vert:LA,backgroundCube_frag:OA,cube_vert:PA,cube_frag:IA,depth_vert:FA,depth_frag:BA,distance_vert:zA,distance_frag:HA,equirect_vert:GA,equirect_frag:VA,linedashed_vert:kA,linedashed_frag:jA,meshbasic_vert:XA,meshbasic_frag:WA,meshlambert_vert:qA,meshlambert_frag:YA,meshmatcap_vert:ZA,meshmatcap_frag:KA,meshnormal_vert:QA,meshnormal_frag:JA,meshphong_vert:$A,meshphong_frag:eR,meshphysical_vert:tR,meshphysical_frag:nR,meshtoon_vert:iR,meshtoon_frag:aR,points_vert:sR,points_frag:rR,shadow_vert:oR,shadow_frag:lR,sprite_vert:cR,sprite_frag:uR},Oe={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Oi={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Oi.physical={uniforms:Ln([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Hc={r:0,b:0,g:0},Rs=new Ea,fR=new fn;function dR(r,e,i,s,l,c){const f=new Gt(0);let p=l===!0?0:1,m,h,_=null,S=0,v=null;function M(N){let D=N.isScene===!0?N.background:null;if(D&&D.isTexture){const L=N.backgroundBlurriness>0;D=e.get(D,L)}return D}function E(N){let D=!1;const L=M(N);L===null?y(f,p):L&&L.isColor&&(y(L,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(N,D){const L=M(D);L&&(L.isCubeTexture||L.mapping===iu)?(h===void 0&&(h=new Vi(new al(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Fr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,H,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Rs.copy(D.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fR.makeRotationFromEuler(Rs)),h.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ft,(_!==L||S!==L.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,_=L,S=L.version,v=r.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Vi(new sl(2,2),new Ei({name:"BackgroundMaterial",uniforms:Fr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Ft,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||S!==L.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,_=L,S=L.version,v=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,D){N.getRGB(Hc,B_(r)),i.buffers.color.setClear(Hc.r,Hc.g,Hc.b,D,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,D=1){f.set(N),p=D,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,y(f,p)},render:E,addToRenderList:C,dispose:x}}function hR(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function p(G,te,ae,de,J){let I=!1;const z=S(G,de,ae,te);c!==z&&(c=z,h(c.object)),I=M(G,de,ae,J),I&&E(G,de,ae,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,L(G,te,ae,de),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function h(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function S(G,te,ae,de){const J=de.wireframe===!0;let I=s[te.id];I===void 0&&(I={},s[te.id]=I);const z=G.isInstancedMesh===!0?G.id:0;let ce=I[z];ce===void 0&&(ce={},I[z]=ce);let ve=ce[ae.id];ve===void 0&&(ve={},ce[ae.id]=ve);let O=ve[J];return O===void 0&&(O=v(m()),ve[J]=O),O}function v(G){const te=[],ae=[],de=[];for(let J=0;J<i;J++)te[J]=0,ae[J]=0,de[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:ae,attributeDivisors:de,object:G,attributes:{},index:null}}function M(G,te,ae,de){const J=c.attributes,I=te.attributes;let z=0;const ce=ae.getAttributes();for(const ve in ce)if(ce[ve].location>=0){const Z=J[ve];let ue=I[ve];if(ue===void 0&&(ve==="instanceMatrix"&&G.instanceMatrix&&(ue=G.instanceMatrix),ve==="instanceColor"&&G.instanceColor&&(ue=G.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;z++}return c.attributesNum!==z||c.index!==de}function E(G,te,ae,de){const J={},I=te.attributes;let z=0;const ce=ae.getAttributes();for(const ve in ce)if(ce[ve].location>=0){let Z=I[ve];Z===void 0&&(ve==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),ve==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor));const ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),J[ve]=ue,z++}c.attributes=J,c.attributesNum=z,c.index=de}function C(){const G=c.newAttributes;for(let te=0,ae=G.length;te<ae;te++)G[te]=0}function y(G){x(G,0)}function x(G,te){const ae=c.newAttributes,de=c.enabledAttributes,J=c.attributeDivisors;ae[G]=1,de[G]===0&&(r.enableVertexAttribArray(G),de[G]=1),J[G]!==te&&(r.vertexAttribDivisor(G,te),J[G]=te)}function N(){const G=c.newAttributes,te=c.enabledAttributes;for(let ae=0,de=te.length;ae<de;ae++)te[ae]!==G[ae]&&(r.disableVertexAttribArray(ae),te[ae]=0)}function D(G,te,ae,de,J,I,z){z===!0?r.vertexAttribIPointer(G,te,ae,J,I):r.vertexAttribPointer(G,te,ae,de,J,I)}function L(G,te,ae,de){C();const J=de.attributes,I=ae.getAttributes(),z=te.defaultAttributeValues;for(const ce in I){const ve=I[ce];if(ve.location>=0){let O=J[ce];if(O===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(O=G.instanceColor)),O!==void 0){const Z=O.normalized,ue=O.itemSize,Se=e.get(O);if(Se===void 0)continue;const Ue=Se.buffer,qe=Se.type,$=Se.bytesPerElement,be=qe===r.INT||qe===r.UNSIGNED_INT||O.gpuType===$h;if(O.isInterleavedBufferAttribute){const Me=O.data,Je=Me.stride,Ke=O.offset;if(Me.isInstancedInterleavedBuffer){for(let $e=0;$e<ve.locationSize;$e++)x(ve.location+$e,Me.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let $e=0;$e<ve.locationSize;$e++)y(ve.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let $e=0;$e<ve.locationSize;$e++)D(ve.location+$e,ue/ve.locationSize,qe,Z,Je*$,(Ke+ue/ve.locationSize*$e)*$,be)}else{if(O.isInstancedBufferAttribute){for(let Me=0;Me<ve.locationSize;Me++)x(ve.location+Me,O.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Me=0;Me<ve.locationSize;Me++)y(ve.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Me=0;Me<ve.locationSize;Me++)D(ve.location+Me,ue/ve.locationSize,qe,Z,ue*$,ue/ve.locationSize*Me*$,be)}}else if(z!==void 0){const Z=z[ce];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(ve.location,Z);break;case 3:r.vertexAttrib3fv(ve.location,Z);break;case 4:r.vertexAttrib4fv(ve.location,Z);break;default:r.vertexAttrib1fv(ve.location,Z)}}}}N()}function F(){U();for(const G in s){const te=s[G];for(const ae in te){const de=te[ae];for(const J in de){const I=de[J];for(const z in I)_(I[z].object),delete I[z];delete de[J]}}delete s[G]}}function H(G){if(s[G.id]===void 0)return;const te=s[G.id];for(const ae in te){const de=te[ae];for(const J in de){const I=de[J];for(const z in I)_(I[z].object),delete I[z];delete de[J]}}delete s[G.id]}function V(G){for(const te in s){const ae=s[te];for(const de in ae){const J=ae[de];if(J[G.id]===void 0)continue;const I=J[G.id];for(const z in I)_(I[z].object),delete I[z];delete J[G.id]}}}function A(G){for(const te in s){const ae=s[te],de=G.isInstancedMesh===!0?G.id:0,J=ae[de];if(J!==void 0){for(const I in J){const z=J[I];for(const ce in z)_(z[ce].object),delete z[ce];delete J[I]}delete ae[de],Object.keys(ae).length===0&&delete s[te]}}}function U(){he(),f=!0,c!==l&&(c=l,h(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:he,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfObject:A,releaseStatesOfProgram:V,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function pR(r,e,i){let s;function l(h){s=h}function c(h,_){r.drawArrays(s,h,_),i.update(_,s,1)}function f(h,_,S){S!==0&&(r.drawArraysInstanced(s,h,_,S),i.update(_,s,S))}function p(h,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,_,0,S);let M=0;for(let E=0;E<S;E++)M+=_[E];i.update(M,s,1)}function m(h,_,S,v){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<h.length;E++)f(h[E],_[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,_,0,v,0,S);let E=0;for(let C=0;C<S;C++)E+=_[C]*v[C];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function mR(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(V){return!(V!==Mi&&s.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(V){const A=V===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==ui&&s.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Pi&&!A)}function m(V){if(V==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(at("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const S=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:L,maxSamples:F,samples:H}}function gR(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Cs,p=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,v){const M=S.length!==0||v||s!==0||l;return l=v,s=S.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,v){i=_(S,v,0)},this.setState=function(S,v,M){const E=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,x=r.get(S);if(!l||E===null||E.length===0||c&&!y)c?_(null):h();else{const N=c?0:s,D=N*4;let L=x.clippingState||null;m.value=L,L=_(E,v,D,M);for(let F=0;F!==D;++F)L[F]=i[F];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(S,v,M,E){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const x=M+C*4,N=v.matrixWorldInverse;p.getNormalMatrix(N),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,L=M;D!==C;++D,L+=4)f.copy(S[D]).applyMatrix4(N,p),f.normal.toArray(y,L),y[L+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const as=4,Tv=[.125,.215,.35,.446,.526,.582],Ds=20,vR=256,Xo=new cp,Av=new Gt;let Xd=null,Wd=0,qd=0,Yd=!1;const _R=new le;class Rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=_R}=c;Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,Wd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Os||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ya,format:Mi,colorSpace:Ir,depthBuffer:!1},l=wv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xR(c)),this._blurMaterial=yR(c,e,i),this._ggxMaterial=SR(c,e,i)}return l}_compileMaterial(e){const i=new Vi(new Ta,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,s,l,c){const m=new Si(90,1,i,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,v=S.autoClear,M=S.toneMapping;S.getClearColor(Av),S.toneMapping=Fi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new al,new O_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,x=!0):(y.color.copy(Av),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(m.up.set(0,h[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[D],c.y,c.z)):L===1?(m.up.set(0,0,h[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[D],c.z)):(m.up.set(0,h[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[D]));const F=this._cubeSize;Nr(l,L*F,D>2?F:0,F,F),S.setRenderTarget(l),x&&S.render(C,m),S.render(e,m)}S.toneMapping=M,S.autoClear=v,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Os||e.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Xo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-_*_),v=0+h*1.25,M=S*v,{_lodMax:E}=this,C=this._sizeLods[s],y=3*C*(s>E-as?s-E+as:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Nr(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(p,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Nr(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(p,Xo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const _=3,S=this._lodMeshes[l];S.material=h;const v=h.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ds-1),C=c/E,y=isFinite(c)?1+Math.floor(_*C):Ds;y>Ds&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ds}`);const x=[];let N=0;for(let V=0;V<Ds;++V){const A=V/C,U=Math.exp(-A*A/2);x.push(U),V===0?N+=U:V<y&&(N+=2*U)}for(let V=0;V<x.length;V++)x[V]=x[V]/N;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=f==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-s;const L=this._sizeLods[l],F=3*L*(l>D-as?l-D+as:0),H=4*(this._cubeSize-L);Nr(i,F,H,3*L,2*L),m.setRenderTarget(i),m.render(S,Xo)}}function xR(r){const e=[],i=[],s=[];let l=r;const c=r-as+1+Tv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-as?m=Tv[f-r+as-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,S=1+h,v=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,E=6,C=3,y=2,x=1,N=new Float32Array(C*E*M),D=new Float32Array(y*E*M),L=new Float32Array(x*E*M);for(let H=0;H<M;H++){const V=H%3*2/3-1,A=H>2?0:-1,U=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];N.set(U,C*E*H),D.set(v,y*E*H);const he=[H,H,H,H,H,H];L.set(he,x*E*H)}const F=new Ta;F.setAttribute("position",new zi(N,C)),F.setAttribute("uv",new zi(D,y)),F.setAttribute("faceIndex",new zi(L,x)),s.push(new Vi(F,null)),l>as&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function wv(r,e,i){const s=new Bi(r,e,i);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function SR(r,e,i){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function yR(r,e,i){const s=new Float32Array(Ds),l=new le(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:su(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Cv(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Nv(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}class G_ extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new I_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new al(5,5,5),c=new Ei({name:"CubemapFromEquirect",uniforms:Fr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:va});c.uniforms.tEquirect.value=i;const f=new Vi(l,c),p=i.minFilter;return i.minFilter===Us&&(i.minFilter=Dn),new RT(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function MR(r){let e=new WeakMap,i=new WeakMap,s=null;function l(v,M=!1){return v==null?null:M?f(v):c(v)}function c(v){if(v&&v.isTexture){const M=v.mapping;if(M===_d||M===xd)if(e.has(v)){const E=e.get(v).texture;return p(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const C=new G_(E.height);return C.fromEquirectangularTexture(r,v),e.set(v,C),v.addEventListener("dispose",h),p(C.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const M=v.mapping,E=M===_d||M===xd,C=M===Os||M===Or;if(E||C){let y=i.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new Rv(r)),y=E?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const N=v.image;return E&&N&&N.height>0||C&&N&&m(N)?(s===null&&(s=new Rv(r)),y=E?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function p(v,M){return M===_d?v.mapping=Os:M===xd&&(v.mapping=Or),v}function m(v){let M=0;const E=6;for(let C=0;C<E;C++)v[C]!==void 0&&M++;return M===E}function h(v){const M=v.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function _(v){const M=v.target;M.removeEventListener("dispose",_);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function ER(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&eu("WebGLRenderer: "+s+" extension not supported."),l}}}function bR(r,e,i,s){const l={},c=new WeakMap;function f(S){const v=S.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(S,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(S){const v=S.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function h(S){const v=[],M=S.index,E=S.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const N=M.array;C=M.version;for(let D=0,L=N.length;D<L;D+=3){const F=N[D+0],H=N[D+1],V=N[D+2];v.push(F,H,H,V,V,F)}}else{const N=E.array;C=E.version;for(let D=0,L=N.length/3-1;D<L;D+=3){const F=D+0,H=D+1,V=D+2;v.push(F,H,H,V,V,F)}}const y=new(E.count>=65535?L_:U_)(v,1);y.version=C;const x=c.get(S);x&&e.remove(x),c.set(S,y)}function _(S){const v=c.get(S);if(v){const M=S.index;M!==null&&v.version<M.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:_}}function TR(r,e,i){let s;function l(v){s=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,M){r.drawElements(s,M,c,v*f),i.update(M,s,1)}function h(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,v*f,E),i.update(M,s,E))}function _(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,E);let y=0;for(let x=0;x<E;x++)y+=M[x];i.update(y,s,1)}function S(v,M,E,C){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/f,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,C,0,E);let x=0;for(let N=0;N<E;N++)x+=M[N]*C[N];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function AR(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:At("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function RR(r,e,i){const s=new WeakMap,l=new on;function c(f,p,m){const h=f.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=_!==void 0?_.length:0;let v=s.get(p);if(v===void 0||v.count!==S){let he=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",he)};var M=he;v!==void 0&&v.texture.dispose();const E=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],N=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let L=0;E===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let F=p.attributes.position.count*L,H=1;F>e.maxTextureSize&&(H=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const V=new Float32Array(F*H*4*S),A=new C_(V,F,H,S);A.type=Pi,A.needsUpdate=!0;const U=L*4;for(let G=0;G<S;G++){const te=x[G],ae=N[G],de=D[G],J=F*H*4*G;for(let I=0;I<te.count;I++){const z=I*U;E===!0&&(l.fromBufferAttribute(te,I),V[J+z+0]=l.x,V[J+z+1]=l.y,V[J+z+2]=l.z,V[J+z+3]=0),C===!0&&(l.fromBufferAttribute(ae,I),V[J+z+4]=l.x,V[J+z+5]=l.y,V[J+z+6]=l.z,V[J+z+7]=0),y===!0&&(l.fromBufferAttribute(de,I),V[J+z+8]=l.x,V[J+z+9]=l.y,V[J+z+10]=l.z,V[J+z+11]=de.itemSize===4?l.w:1)}}v={count:S,texture:A,size:new Lt(F,H)},s.set(p,v),p.addEventListener("dispose",he)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const C=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function wR(r,e,i,s,l){let c=new WeakMap;function f(h){const _=l.render.frame,S=h.geometry,v=e.get(h,S);if(c.get(v)!==_&&(e.update(v),c.set(v,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return v}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:p}}const CR={[h_]:"LINEAR_TONE_MAPPING",[p_]:"REINHARD_TONE_MAPPING",[m_]:"CINEON_TONE_MAPPING",[g_]:"ACES_FILMIC_TONE_MAPPING",[__]:"AGX_TONE_MAPPING",[x_]:"NEUTRAL_TONE_MAPPING",[v_]:"CUSTOM_TONE_MAPPING"};function NR(r,e,i,s,l){const c=new Bi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Bi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),p=new Ta;p.setAttribute("position",new xa([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new xa([0,2,0,0,2,0],2));const m=new bT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Vi(p,m),_=new cp(-1,1,1,-1,0,1);let S=null,v=null,M=!1,E,C=null,y=[],x=!1;this.setSize=function(N,D){c.setSize(N,D),f.setSize(N,D);for(let L=0;L<y.length;L++){const F=y[L];F.setSize&&F.setSize(N,D)}},this.setEffects=function(N){y=N,x=y.length>0&&y[0].isRenderPass===!0;const D=c.width,L=c.height;for(let F=0;F<y.length;F++){const H=y[F];H.setSize&&H.setSize(D,L)}},this.begin=function(N,D){if(M||N.toneMapping===Fi&&y.length===0)return!1;if(C=D,D!==null){const L=D.width,F=D.height;(c.width!==L||c.height!==F)&&this.setSize(L,F)}return x===!1&&N.setRenderTarget(c),E=N.toneMapping,N.toneMapping=Fi,!0},this.hasRenderPass=function(){return x},this.end=function(N,D){N.toneMapping=E,M=!0;let L=c,F=f;for(let H=0;H<y.length;H++){const V=y[H];if(V.enabled!==!1&&(V.render(N,F,L,D),V.needsSwap!==!1)){const A=L;L=F,F=A}}if(S!==N.outputColorSpace||v!==N.toneMapping){S=N.outputColorSpace,v=N.toneMapping,m.defines={},Mt.getTransfer(S)===Ft&&(m.defines.SRGB_TRANSFER="");const H=CR[v];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(C),N.render(h,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const V_=new On,jh=new Jo(1,1),k_=new C_,j_=new eT,X_=new I_,Dv=[],Uv=[],Lv=new Float32Array(16),Ov=new Float32Array(9),Pv=new Float32Array(4);function Vr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Dv[l];if(c===void 0&&(c=new Float32Array(l),Dv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function gn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function ru(r,e){let i=Uv[e];i===void 0&&(i=new Int32Array(e),Uv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function DR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function UR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2fv(this.addr,e),gn(i,e)}}function LR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;r.uniform3fv(this.addr,e),gn(i,e)}}function OR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4fv(this.addr,e),gn(i,e)}}function PR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Pv.set(s),r.uniformMatrix2fv(this.addr,!1,Pv),gn(i,s)}}function IR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Ov.set(s),r.uniformMatrix3fv(this.addr,!1,Ov),gn(i,s)}}function FR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Lv.set(s),r.uniformMatrix4fv(this.addr,!1,Lv),gn(i,s)}}function BR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function zR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2iv(this.addr,e),gn(i,e)}}function HR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3iv(this.addr,e),gn(i,e)}}function GR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4iv(this.addr,e),gn(i,e)}}function VR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function kR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2uiv(this.addr,e),gn(i,e)}}function jR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3uiv(this.addr,e),gn(i,e)}}function XR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4uiv(this.addr,e),gn(i,e)}}function WR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jh.compareFunction=i.isReversedDepthBuffer()?rp:sp,c=jh):c=V_,i.setTexture2D(e||c,l)}function qR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||j_,l)}function YR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||X_,l)}function ZR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||k_,l)}function KR(r){switch(r){case 5126:return DR;case 35664:return UR;case 35665:return LR;case 35666:return OR;case 35674:return PR;case 35675:return IR;case 35676:return FR;case 5124:case 35670:return BR;case 35667:case 35671:return zR;case 35668:case 35672:return HR;case 35669:case 35673:return GR;case 5125:return VR;case 36294:return kR;case 36295:return jR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return YR;case 36289:case 36303:case 36311:case 36292:return ZR}}function QR(r,e){r.uniform1fv(this.addr,e)}function JR(r,e){const i=Vr(e,this.size,2);r.uniform2fv(this.addr,i)}function $R(r,e){const i=Vr(e,this.size,3);r.uniform3fv(this.addr,i)}function ew(r,e){const i=Vr(e,this.size,4);r.uniform4fv(this.addr,i)}function tw(r,e){const i=Vr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function nw(r,e){const i=Vr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function iw(r,e){const i=Vr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function aw(r,e){r.uniform1iv(this.addr,e)}function sw(r,e){r.uniform2iv(this.addr,e)}function rw(r,e){r.uniform3iv(this.addr,e)}function ow(r,e){r.uniform4iv(this.addr,e)}function lw(r,e){r.uniform1uiv(this.addr,e)}function cw(r,e){r.uniform2uiv(this.addr,e)}function uw(r,e){r.uniform3uiv(this.addr,e)}function fw(r,e){r.uniform4uiv(this.addr,e)}function dw(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=jh:f=V_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function hw(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||j_,c[f])}function pw(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||X_,c[f])}function mw(r,e,i){const s=this.cache,l=e.length,c=ru(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||k_,c[f])}function gw(r){switch(r){case 5126:return QR;case 35664:return JR;case 35665:return $R;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return aw;case 35667:case 35671:return sw;case 35668:case 35672:return rw;case 35669:case 35673:return ow;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}class vw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=KR(i.type)}}class _w{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=gw(i.type)}}class xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function Iv(r,e){r.seq.push(e),r.map[e.id]=e}function Sw(r,e,i){const s=r.name,l=s.length;for(Zd.lastIndex=0;;){const c=Zd.exec(s),f=Zd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){Iv(i,h===void 0?new vw(p,r,e):new _w(p,r,e));break}else{let S=i.map[p];S===void 0&&(S=new xw(p),Iv(i,S)),i=S}}}class Zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);Sw(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Fv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const yw=37297;let Mw=0;function Ew(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Bv=new ut;function bw(r){Mt._getMatrix(Bv,Mt.workingColorSpace,r);const e=`mat3( ${Bv.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(r)){case Qc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function zv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Ew(r.getShaderSource(e),p)}else return c}function Tw(r,e){const i=bw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Aw={[h_]:"Linear",[p_]:"Reinhard",[m_]:"Cineon",[g_]:"ACESFilmic",[__]:"AgX",[x_]:"Neutral",[v_]:"Custom"};function Rw(r,e){const i=Aw[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new le;function ww(){Mt.getLuminanceCoefficients(Gc);const r=Gc.x.toFixed(4),e=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function Nw(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Dw(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function Yo(r){return r!==""}function Hv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(r){return r.replace(Uw,Ow)}const Lw=new Map;function Ow(r,e){let i=ft[e];if(i===void 0){const s=Lw.get(e);if(s!==void 0)i=ft[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Xh(i)}const Pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vv(r){return r.replace(Pw,Iw)}function Iw(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function kv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const Fw={[jc]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function Bw(r){return Fw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zw={[Os]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function Hw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":zw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Gw={[Or]:"ENVMAP_MODE_REFRACTION"};function Vw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Gw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kw={[d_]:"ENVMAP_BLENDING_MULTIPLY",[Ub]:"ENVMAP_BLENDING_MIX",[Lb]:"ENVMAP_BLENDING_ADD"};function jw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":kw[r.combine]||"ENVMAP_BLENDING_NONE"}function Xw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function Ww(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=Bw(i),h=Hw(i),_=Vw(i),S=jw(i),v=Xw(i),M=Cw(i),E=Nw(c),C=l.createProgram();let y,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),x.length>0&&(x+=`
`)):(y=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),x=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Fi?Rw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Tw("linearToOutputTexel",i.outputColorSpace),ww(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),f=Xh(f),f=Hv(f,i),f=Gv(f,i),p=Xh(p),p=Hv(p,i),p=Gv(p,i),f=Vv(f),p=Vv(p),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=N+y+f,L=N+x+p,F=Fv(l,l.VERTEX_SHADER,D),H=Fv(l,l.FRAGMENT_SHADER,L);l.attachShader(C,F),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function V(G){if(r.debug.checkShaderErrors){const te=l.getProgramInfoLog(C)||"",ae=l.getShaderInfoLog(F)||"",de=l.getShaderInfoLog(H)||"",J=te.trim(),I=ae.trim(),z=de.trim();let ce=!0,ve=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,F,H);else{const O=zv(l,F,"vertex"),Z=zv(l,H,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+O+`
`+Z)}else J!==""?at("WebGLProgram: Program Info Log:",J):(I===""||z==="")&&(ve=!1);ve&&(G.diagnostics={runnable:ce,programLog:J,vertexShader:{log:I,prefix:y},fragmentShader:{log:z,prefix:x}})}l.deleteShader(F),l.deleteShader(H),A=new Zc(l,C),U=Dw(l,C)}let A;this.getUniforms=function(){return A===void 0&&V(this),A};let U;this.getAttributes=function(){return U===void 0&&V(this),U};let he=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return he===!1&&(he=l.getProgramParameter(C,yw)),he},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Mw++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=H,this}let qw=0;class Yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Zw(e),i.set(e,s)),s}}class Zw{constructor(e){this.id=qw++,this.code=e,this.usedTimes=0}}function Kw(r,e,i,s,l,c){const f=new N_,p=new Yw,m=new Set,h=[],_=new Map,S=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return m.add(A),A===0?"uv":`uv${A}`}function C(A,U,he,G,te){const ae=G.fog,de=te.geometry,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,z=e.get(A.envMap||J,I),ce=z&&z.mapping===iu?z.image.height:null,ve=M[A.type];A.precision!==null&&(v=s.getMaxPrecision(A.precision),v!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const O=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Z=O!==void 0?O.length:0;let ue=0;de.morphAttributes.position!==void 0&&(ue=1),de.morphAttributes.normal!==void 0&&(ue=2),de.morphAttributes.color!==void 0&&(ue=3);let Se,Ue,qe,$;if(ve){const bt=Oi[ve];Se=bt.vertexShader,Ue=bt.fragmentShader}else Se=A.vertexShader,Ue=A.fragmentShader,p.update(A),qe=p.getVertexShaderID(A),$=p.getFragmentShaderID(A);const be=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Je=te.isInstancedMesh===!0,Ke=te.isBatchedMesh===!0,$e=!!A.map,Jt=!!A.matcap,pt=!!z,St=!!A.aoMap,Ot=!!A.lightMap,ot=!!A.bumpMap,Et=!!A.normalMap,k=!!A.displacementMap,Yt=!!A.emissiveMap,yt=!!A.metalnessMap,Rt=!!A.roughnessMap,je=A.anisotropy>0,P=A.clearcoat>0,T=A.dispersion>0,W=A.iridescence>0,me=A.sheen>0,_e=A.transmission>0,fe=je&&!!A.anisotropyMap,Le=P&&!!A.clearcoatMap,Ce=P&&!!A.clearcoatNormalMap,Ze=P&&!!A.clearcoatRoughnessMap,et=W&&!!A.iridescenceMap,Ee=W&&!!A.iridescenceThicknessMap,Ae=me&&!!A.sheenColorMap,Fe=me&&!!A.sheenRoughnessMap,He=!!A.specularMap,Pe=!!A.specularColorMap,lt=!!A.specularIntensityMap,X=_e&&!!A.transmissionMap,we=_e&&!!A.thicknessMap,Re=!!A.gradientMap,Ie=!!A.alphaMap,Te=A.alphaTest>0,pe=!!A.alphaHash,Ge=!!A.extensions;let nt=Fi;A.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(nt=r.toneMapping);const Dt={shaderID:ve,shaderType:A.type,shaderName:A.name,vertexShader:Se,fragmentShader:Ue,defines:A.defines,customVertexShaderID:qe,customFragmentShaderID:$,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Ke,batchingColor:Ke&&te._colorsTexture!==null,instancing:Je,instancingColor:Je&&te.instanceColor!==null,instancingMorph:Je&&te.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ir,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:Jt,envMap:pt,envMapMode:pt&&z.mapping,envMapCubeUVHeight:ce,aoMap:St,lightMap:Ot,bumpMap:ot,normalMap:Et,displacementMap:k,emissiveMap:Yt,normalMapObjectSpace:Et&&A.normalMapType===Fb,normalMapTangentSpace:Et&&A.normalMapType===Ib,metalnessMap:yt,roughnessMap:Rt,anisotropy:je,anisotropyMap:fe,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ze,dispersion:T,iridescence:W,iridescenceMap:et,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:Ae,sheenRoughnessMap:Fe,specularMap:He,specularColorMap:Pe,specularIntensityMap:lt,transmission:_e,transmissionMap:X,thicknessMap:we,gradientMap:Re,opaque:A.transparent===!1&&A.blending===Dr&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:pe,combine:A.combine,mapUv:$e&&E(A.map.channel),aoMapUv:St&&E(A.aoMap.channel),lightMapUv:Ot&&E(A.lightMap.channel),bumpMapUv:ot&&E(A.bumpMap.channel),normalMapUv:Et&&E(A.normalMap.channel),displacementMapUv:k&&E(A.displacementMap.channel),emissiveMapUv:Yt&&E(A.emissiveMap.channel),metalnessMapUv:yt&&E(A.metalnessMap.channel),roughnessMapUv:Rt&&E(A.roughnessMap.channel),anisotropyMapUv:fe&&E(A.anisotropyMap.channel),clearcoatMapUv:Le&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(A.sheenRoughnessMap.channel),specularMapUv:He&&E(A.specularMap.channel),specularColorMapUv:Pe&&E(A.specularColorMap.channel),specularIntensityMapUv:lt&&E(A.specularIntensityMap.channel),transmissionMapUv:X&&E(A.transmissionMap.channel),thicknessMapUv:we&&E(A.thicknessMap.channel),alphaMapUv:Ie&&E(A.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Et||je),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!de.attributes.uv&&($e||Ie),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||de.attributes.normal===void 0&&Et===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:te.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ue,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&he.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&Mt.getTransfer(A.map.colorSpace)===Ft,decodeVideoTextureEmissive:Yt&&A.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(A.emissiveMap.colorSpace)===Ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pa,flipSided:A.side===kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&A.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Dt.vertexUv1s=m.has(1),Dt.vertexUv2s=m.has(2),Dt.vertexUv3s=m.has(3),m.clear(),Dt}function y(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const he in A.defines)U.push(he),U.push(A.defines[he]);return A.isRawShaderMaterial===!1&&(x(U,A),N(U,A),U.push(r.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function x(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function N(A,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),A.push(f.mask)}function D(A){const U=M[A.type];let he;if(U){const G=Oi[U];he=yT.clone(G.uniforms)}else he=A.uniforms;return he}function L(A,U){let he=_.get(U);return he!==void 0?++he.usedTimes:(he=new Ww(r,U,A,l),h.push(he),_.set(U,he)),he}function F(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),_.delete(A.cacheKey),A.destroy()}}function H(A){p.remove(A)}function V(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:D,acquireProgram:L,releaseProgram:F,releaseShaderCache:H,programs:h,dispose:V}}function Qw(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function Jw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function jv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function p(v,M,E,C,y,x){let N=r[e];return N===void 0?(N={id:v.id,object:v,geometry:M,material:E,materialVariant:f(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:x},r[e]=N):(N.id=v.id,N.object=v,N.geometry=M,N.material=E,N.materialVariant=f(v),N.groupOrder=C,N.renderOrder=v.renderOrder,N.z=y,N.group=x),e++,N}function m(v,M,E,C,y,x){const N=p(v,M,E,C,y,x);E.transmission>0?s.push(N):E.transparent===!0?l.push(N):i.push(N)}function h(v,M,E,C,y,x){const N=p(v,M,E,C,y,x);E.transmission>0?s.unshift(N):E.transparent===!0?l.unshift(N):i.unshift(N)}function _(v,M){i.length>1&&i.sort(v||Jw),s.length>1&&s.sort(M||jv),l.length>1&&l.sort(M||jv)}function S(){for(let v=e,M=r.length;v<M;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:S,sort:_}}function $w(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Xv,r.set(s,[f])):l>=c.length?(f=new Xv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function eC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Gt};break;case"SpotLight":i={position:new le,direction:new le,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":i={color:new Gt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=i,i}}}function tC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let nC=0;function iC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aC(r){const e=new eC,i=tC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new le);const l=new le,c=new fn,f=new fn;function p(h){let _=0,S=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,E=0,C=0,y=0,x=0,N=0,D=0,L=0,F=0,H=0,V=0;h.sort(iC);for(let U=0,he=h.length;U<he;U++){const G=h[U],te=G.color,ae=G.intensity,de=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Pr?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=te.r*ae,S+=te.g*ae,v+=te.b*ae;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],ae);V++}else if(G.isDirectionalLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,ce=i.get(G);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,s.directionalShadow[M]=ce,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=G.shadow.matrix,N++}s.directional[M]=I,M++}else if(G.isSpotLight){const I=e.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(te).multiplyScalar(ae),I.distance=de,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[C]=I;const z=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,z.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[C]=z.matrix,G.castShadow){const ce=i.get(G);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,s.spotShadow[C]=ce,s.spotShadowMap[C]=J,L++}C++}else if(G.isRectAreaLight){const I=e.get(G);I.color.copy(te).multiplyScalar(ae),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=I,y++}else if(G.isPointLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const z=G.shadow,ce=i.get(G);ce.shadowIntensity=z.intensity,ce.shadowBias=z.bias,ce.shadowNormalBias=z.normalBias,ce.shadowRadius=z.radius,ce.shadowMapSize=z.mapSize,ce.shadowCameraNear=z.camera.near,ce.shadowCameraFar=z.camera.far,s.pointShadow[E]=ce,s.pointShadowMap[E]=J,s.pointShadowMatrix[E]=G.shadow.matrix,D++}s.point[E]=I,E++}else if(G.isHemisphereLight){const I=e.get(G);I.skyColor.copy(G.color).multiplyScalar(ae),I.groundColor.copy(G.groundColor).multiplyScalar(ae),s.hemi[x]=I,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=S,s.ambient[2]=v;const A=s.hash;(A.directionalLength!==M||A.pointLength!==E||A.spotLength!==C||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==N||A.numPointShadows!==D||A.numSpotShadows!==L||A.numSpotMaps!==F||A.numLightProbes!==V)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+F-H,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=V,A.directionalLength=M,A.pointLength=E,A.spotLength=C,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=N,A.numPointShadows=D,A.numSpotShadows=L,A.numSpotMaps=F,A.numLightProbes=V,s.version=nC++)}function m(h,_){let S=0,v=0,M=0,E=0,C=0;const y=_.matrixWorldInverse;for(let x=0,N=h.length;x<N;x++){const D=h[x];if(D.isDirectionalLight){const L=s.directional[S];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),S++}else if(D.isSpotLight){const L=s.spot[M];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),f.identity(),c.copy(D.matrixWorld),c.premultiply(y),f.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:s}}function Wv(r){const e=new aC(r),i=[],s=[];function l(_){h.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function p(){e.setup(i)}function m(_){e.setupView(i,_)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function sC(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new Wv(r),e.set(l,[p])):c>=f.length?(p=new Wv(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const rC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oC=`uniform sampler2D shadow_pass;
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
}`,lC=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],cC=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],qv=new fn,Wo=new le,Kd=new le;function uC(r,e,i){let s=new P_;const l=new Lt,c=new Lt,f=new on,p=new TT,m=new AT,h={},_=i.maxTextureSize,S={[ss]:kn,[kn]:ss,[pa]:pa},v=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:rC,fragmentShader:oC}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ta;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Vi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let x=this.type;this.render=function(H,V,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;this.type===hb&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const U=r.getRenderTarget(),he=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),te=r.state;te.setBlending(va),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ae=x!==this.type;ae&&V.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(J=>J.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,J=H.length;de<J;de++){const I=H[de],z=I.shadow;if(z===void 0){at("WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ce=z.getFrameExtents();l.multiply(ce),c.copy(z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ce.x),l.x=c.x*ce.x,z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ce.y),l.y=c.y*ce.y,z.mapSize.y=c.y));const ve=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ve,z.map===null||ae===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===qo){if(I.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Bi(l.x,l.y,{format:Pr,type:ya,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),z.map.texture.name=I.name+".shadowMap",z.map.depthTexture=new Jo(l.x,l.y,Pi),z.map.depthTexture.name=I.name+".shadowMapDepth",z.map.depthTexture.format=Ma,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An}else I.isPointLight?(z.map=new G_(l.x),z.map.depthTexture=new xT(l.x,Gi)):(z.map=new Bi(l.x,l.y),z.map.depthTexture=new Jo(l.x,l.y,Gi)),z.map.depthTexture.name=I.name+".shadowMap",z.map.depthTexture.format=Ma,this.type===jc?(z.map.depthTexture.compareFunction=ve?rp:sp,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An);z.camera.updateProjectionMatrix()}const O=z.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<O;Z++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,Z),r.clear();else{Z===0&&(r.setRenderTarget(z.map),r.clear());const ue=z.getViewport(Z);f.set(c.x*ue.x,c.y*ue.y,c.x*ue.z,c.y*ue.w),te.viewport(f)}if(I.isPointLight){const ue=z.camera,Se=z.matrix,Ue=I.distance||ue.far;Ue!==ue.far&&(ue.far=Ue,ue.updateProjectionMatrix()),Wo.setFromMatrixPosition(I.matrixWorld),ue.position.copy(Wo),Kd.copy(ue.position),Kd.add(lC[Z]),ue.up.copy(cC[Z]),ue.lookAt(Kd),ue.updateMatrixWorld(),Se.makeTranslation(-Wo.x,-Wo.y,-Wo.z),qv.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),z._frustum.setFromProjectionMatrix(qv,ue.coordinateSystem,ue.reversedDepth)}else z.updateMatrices(I);s=z.getFrustum(),L(V,A,z.camera,I,this.type)}z.isPointLightShadow!==!0&&this.type===qo&&N(z,A),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(U,he,G)};function N(H,V){const A=e.update(C);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Bi(l.x,l.y,{format:Pr,type:ya})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(V,null,A,v,C,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(V,null,A,M,C,null)}function D(H,V,A,U){let he=null;const G=A.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)he=G;else if(he=A.isPointLight===!0?m:p,r.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const te=he.uuid,ae=V.uuid;let de=h[te];de===void 0&&(de={},h[te]=de);let J=de[ae];J===void 0&&(J=he.clone(),de[ae]=J,V.addEventListener("dispose",F)),he=J}if(he.visible=V.visible,he.wireframe=V.wireframe,U===qo?he.side=V.shadowSide!==null?V.shadowSide:V.side:he.side=V.shadowSide!==null?V.shadowSide:S[V.side],he.alphaMap=V.alphaMap,he.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,he.map=V.map,he.clipShadows=V.clipShadows,he.clippingPlanes=V.clippingPlanes,he.clipIntersection=V.clipIntersection,he.displacementMap=V.displacementMap,he.displacementScale=V.displacementScale,he.displacementBias=V.displacementBias,he.wireframeLinewidth=V.wireframeLinewidth,he.linewidth=V.linewidth,A.isPointLight===!0&&he.isMeshDistanceMaterial===!0){const te=r.properties.get(he);te.light=A}return he}function L(H,V,A,U,he){if(H.visible===!1)return;if(H.layers.test(V.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&he===qo)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,H.matrixWorld);const ae=e.update(H),de=H.material;if(Array.isArray(de)){const J=ae.groups;for(let I=0,z=J.length;I<z;I++){const ce=J[I],ve=de[ce.materialIndex];if(ve&&ve.visible){const O=D(H,ve,U,he);H.onBeforeShadow(r,H,V,A,ae,O,ce),r.renderBufferDirect(A,null,ae,O,H,ce),H.onAfterShadow(r,H,V,A,ae,O,ce)}}}else if(de.visible){const J=D(H,de,U,he);H.onBeforeShadow(r,H,V,A,ae,J,null),r.renderBufferDirect(A,null,ae,J,H,null),H.onAfterShadow(r,H,V,A,ae,J,null)}}const te=H.children;for(let ae=0,de=te.length;ae<de;ae++)L(te[ae],V,A,U,he)}function F(H){H.target.removeEventListener("dispose",F);for(const A in h){const U=h[A],he=H.target.uuid;he in U&&(U[he].dispose(),delete U[he])}}}function fC(r,e){function i(){let X=!1;const we=new on;let Re=null;const Ie=new on(0,0,0,0);return{setMask:function(Te){Re!==Te&&!X&&(r.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){X=Te},setClear:function(Te,pe,Ge,nt,Dt){Dt===!0&&(Te*=nt,pe*=nt,Ge*=nt),we.set(Te,pe,Ge,nt),Ie.equals(we)===!1&&(r.clearColor(Te,pe,Ge,nt),Ie.copy(we))},reset:function(){X=!1,Re=null,Ie.set(-1,0,0,0)}}}function s(){let X=!1,we=!1,Re=null,Ie=null,Te=null;return{setReversed:function(pe){if(we!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),we=pe;const nt=Te;Te=null,this.setClear(nt)}},getReversed:function(){return we},setTest:function(pe){pe?be(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(pe){Re!==pe&&!X&&(r.depthMask(pe),Re=pe)},setFunc:function(pe){if(we&&(pe=qb[pe]),Ie!==pe){switch(pe){case nh:r.depthFunc(r.NEVER);break;case ih:r.depthFunc(r.ALWAYS);break;case ah:r.depthFunc(r.LESS);break;case Lr:r.depthFunc(r.LEQUAL);break;case sh:r.depthFunc(r.EQUAL);break;case rh:r.depthFunc(r.GEQUAL);break;case oh:r.depthFunc(r.GREATER);break;case lh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=pe}},setLocked:function(pe){X=pe},setClear:function(pe){Te!==pe&&(Te=pe,we&&(pe=1-pe),r.clearDepth(pe))},reset:function(){X=!1,Re=null,Ie=null,Te=null,we=!1}}}function l(){let X=!1,we=null,Re=null,Ie=null,Te=null,pe=null,Ge=null,nt=null,Dt=null;return{setTest:function(bt){X||(bt?be(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(bt){we!==bt&&!X&&(r.stencilMask(bt),we=bt)},setFunc:function(bt,fi,vn){(Re!==bt||Ie!==fi||Te!==vn)&&(r.stencilFunc(bt,fi,vn),Re=bt,Ie=fi,Te=vn)},setOp:function(bt,fi,vn){(pe!==bt||Ge!==fi||nt!==vn)&&(r.stencilOp(bt,fi,vn),pe=bt,Ge=fi,nt=vn)},setLocked:function(bt){X=bt},setClear:function(bt){Dt!==bt&&(r.clearStencil(bt),Dt=bt)},reset:function(){X=!1,we=null,Re=null,Ie=null,Te=null,pe=null,Ge=null,nt=null,Dt=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let _={},S={},v=new WeakMap,M=[],E=null,C=!1,y=null,x=null,N=null,D=null,L=null,F=null,H=null,V=new Gt(0,0,0),A=0,U=!1,he=null,G=null,te=null,ae=null,de=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ce)[1]),I=z>=1):ce.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),I=z>=2);let ve=null,O={};const Z=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),Se=new on().fromArray(Z),Ue=new on().fromArray(ue);function qe(X,we,Re,Ie){const Te=new Uint8Array(4),pe=r.createTexture();r.bindTexture(X,pe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<Re;Ge++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(we+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return pe}const $={};$[r.TEXTURE_2D]=qe(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),be(r.DEPTH_TEST),f.setFunc(Lr),ot(!1),Et($0),be(r.CULL_FACE),St(va);function be(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Me(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function Je(X,we){return S[X]!==we?(r.bindFramebuffer(X,we),S[X]=we,X===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=we),X===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=we),!0):!1}function Ke(X,we){let Re=M,Ie=!1;if(X){Re=v.get(we),Re===void 0&&(Re=[],v.set(we,Re));const Te=X.textures;if(Re.length!==Te.length||Re[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ge=Te.length;pe<Ge;pe++)Re[pe]=r.COLOR_ATTACHMENT0+pe;Re.length=Te.length,Ie=!0}}else Re[0]!==r.BACK&&(Re[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Re)}function $e(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Jt={[Ns]:r.FUNC_ADD,[mb]:r.FUNC_SUBTRACT,[gb]:r.FUNC_REVERSE_SUBTRACT};Jt[vb]=r.MIN,Jt[_b]=r.MAX;const pt={[xb]:r.ZERO,[Sb]:r.ONE,[yb]:r.SRC_COLOR,[eh]:r.SRC_ALPHA,[Rb]:r.SRC_ALPHA_SATURATE,[Tb]:r.DST_COLOR,[Eb]:r.DST_ALPHA,[Mb]:r.ONE_MINUS_SRC_COLOR,[th]:r.ONE_MINUS_SRC_ALPHA,[Ab]:r.ONE_MINUS_DST_COLOR,[bb]:r.ONE_MINUS_DST_ALPHA,[wb]:r.CONSTANT_COLOR,[Cb]:r.ONE_MINUS_CONSTANT_COLOR,[Nb]:r.CONSTANT_ALPHA,[Db]:r.ONE_MINUS_CONSTANT_ALPHA};function St(X,we,Re,Ie,Te,pe,Ge,nt,Dt,bt){if(X===va){C===!0&&(Me(r.BLEND),C=!1);return}if(C===!1&&(be(r.BLEND),C=!0),X!==pb){if(X!==y||bt!==U){if((x!==Ns||L!==Ns)&&(r.blendEquation(r.FUNC_ADD),x=Ns,L=Ns),bt)switch(X){case Dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ev:r.blendFunc(r.ONE,r.ONE);break;case tv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:At("WebGLState: Invalid blending: ",X);break}else switch(X){case Dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ev:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tv:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nv:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",X);break}N=null,D=null,F=null,H=null,V.set(0,0,0),A=0,y=X,U=bt}return}Te=Te||we,pe=pe||Re,Ge=Ge||Ie,(we!==x||Te!==L)&&(r.blendEquationSeparate(Jt[we],Jt[Te]),x=we,L=Te),(Re!==N||Ie!==D||pe!==F||Ge!==H)&&(r.blendFuncSeparate(pt[Re],pt[Ie],pt[pe],pt[Ge]),N=Re,D=Ie,F=pe,H=Ge),(nt.equals(V)===!1||Dt!==A)&&(r.blendColor(nt.r,nt.g,nt.b,Dt),V.copy(nt),A=Dt),y=X,U=!1}function Ot(X,we){X.side===pa?Me(r.CULL_FACE):be(r.CULL_FACE);let Re=X.side===kn;we&&(Re=!Re),ot(Re),X.blending===Dr&&X.transparent===!1?St(va):St(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ie=X.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Yt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){he!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),he=X)}function Et(X){X!==fb?(be(r.CULL_FACE),X!==G&&(X===$0?r.cullFace(r.BACK):X===db?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),G=X}function k(X){X!==te&&(I&&r.lineWidth(X),te=X)}function Yt(X,we,Re){X?(be(r.POLYGON_OFFSET_FILL),(ae!==we||de!==Re)&&(ae=we,de=Re,f.getReversed()&&(we=-we),r.polygonOffset(we,Re))):Me(r.POLYGON_OFFSET_FILL)}function yt(X){X?be(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function Rt(X){X===void 0&&(X=r.TEXTURE0+J-1),ve!==X&&(r.activeTexture(X),ve=X)}function je(X,we,Re){Re===void 0&&(ve===null?Re=r.TEXTURE0+J-1:Re=ve);let Ie=O[Re];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[Re]=Ie),(Ie.type!==X||Ie.texture!==we)&&(ve!==Re&&(r.activeTexture(Re),ve=Re),r.bindTexture(X,we||$[X]),Ie.type=X,Ie.texture=we)}function P(){const X=O[ve];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function me(){try{r.texSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function _e(){try{r.texSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ce(){try{r.texStorage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Ze(){try{r.texStorage3D(...arguments)}catch(X){At("WebGLState:",X)}}function et(){try{r.texImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Ee(){try{r.texImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ae(X){Se.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Se.copy(X))}function Fe(X){Ue.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ue.copy(X))}function He(X,we){let Re=h.get(we);Re===void 0&&(Re=new WeakMap,h.set(we,Re));let Ie=Re.get(X);Ie===void 0&&(Ie=r.getUniformBlockIndex(we,X.name),Re.set(X,Ie))}function Pe(X,we){const Ie=h.get(we).get(X);m.get(we)!==Ie&&(r.uniformBlockBinding(we,Ie,X.__bindingPointIndex),m.set(we,Ie))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ve=null,O={},S={},v=new WeakMap,M=[],E=null,C=!1,y=null,x=null,N=null,D=null,L=null,F=null,H=null,V=new Gt(0,0,0),A=0,U=!1,he=null,G=null,te=null,ae=null,de=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:be,disable:Me,bindFramebuffer:Je,drawBuffers:Ke,useProgram:$e,setBlending:St,setMaterial:Ot,setFlipSided:ot,setCullFace:Et,setLineWidth:k,setPolygonOffset:Yt,setScissorTest:yt,activeTexture:Rt,bindTexture:je,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:et,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:Ze,texSubImage2D:me,texSubImage3D:_e,compressedTexSubImage2D:fe,compressedTexSubImage3D:Le,scissor:Ae,viewport:Fe,reset:lt}}function dC(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,_=new WeakMap;let S;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return M?new OffscreenCanvas(P,T):$c("canvas")}function C(P,T,W){let me=1;const _e=je(P);if((_e.width>W||_e.height>W)&&(me=W/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*_e.width),Le=Math.floor(me*_e.height);S===void 0&&(S=E(fe,Le));const Ce=T?E(fe,Le):S;return Ce.width=fe,Ce.height=Le,Ce.getContext("2d").drawImage(P,0,0,fe,Le),at("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Le+")."),Ce}else return"data"in P&&at("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function y(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(P,T,W,me,_e=!1){if(P!==null){if(r[P]!==void 0)return r[P];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=T;if(T===r.RED&&(W===r.FLOAT&&(fe=r.R32F),W===r.HALF_FLOAT&&(fe=r.R16F),W===r.UNSIGNED_BYTE&&(fe=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.R8UI),W===r.UNSIGNED_SHORT&&(fe=r.R16UI),W===r.UNSIGNED_INT&&(fe=r.R32UI),W===r.BYTE&&(fe=r.R8I),W===r.SHORT&&(fe=r.R16I),W===r.INT&&(fe=r.R32I)),T===r.RG&&(W===r.FLOAT&&(fe=r.RG32F),W===r.HALF_FLOAT&&(fe=r.RG16F),W===r.UNSIGNED_BYTE&&(fe=r.RG8)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RG8UI),W===r.UNSIGNED_SHORT&&(fe=r.RG16UI),W===r.UNSIGNED_INT&&(fe=r.RG32UI),W===r.BYTE&&(fe=r.RG8I),W===r.SHORT&&(fe=r.RG16I),W===r.INT&&(fe=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),W===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),W===r.UNSIGNED_INT&&(fe=r.RGB32UI),W===r.BYTE&&(fe=r.RGB8I),W===r.SHORT&&(fe=r.RGB16I),W===r.INT&&(fe=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),W===r.UNSIGNED_INT&&(fe=r.RGBA32UI),W===r.BYTE&&(fe=r.RGBA8I),W===r.SHORT&&(fe=r.RGBA16I),W===r.INT&&(fe=r.RGBA32I)),T===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),T===r.RGBA){const Le=_e?Qc:Mt.getTransfer(me);W===r.FLOAT&&(fe=r.RGBA32F),W===r.HALF_FLOAT&&(fe=r.RGBA16F),W===r.UNSIGNED_BYTE&&(fe=Le===Ft?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function L(P,T){let W;return P?T===null||T===Gi||T===Qo?W=r.DEPTH24_STENCIL8:T===Pi?W=r.DEPTH32F_STENCIL8:T===Ko&&(W=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gi||T===Qo?W=r.DEPTH_COMPONENT24:T===Pi?W=r.DEPTH_COMPONENT32F:T===Ko&&(W=r.DEPTH_COMPONENT16),W}function F(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function H(P){const T=P.target;T.removeEventListener("dispose",H),A(T),T.isVideoTexture&&_.delete(T)}function V(P){const T=P.target;T.removeEventListener("dispose",V),he(T)}function A(P){const T=s.get(P);if(T.__webglInit===void 0)return;const W=P.source,me=v.get(W);if(me){const _e=me[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&U(P),Object.keys(me).length===0&&v.delete(W)}s.remove(P)}function U(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const W=P.source,me=v.get(W);delete me[T.__cacheKey],f.memory.textures--}function he(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let _e=0;_e<T.__webglFramebuffer[me].length;_e++)r.deleteFramebuffer(T.__webglFramebuffer[me][_e]);else r.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)r.deleteFramebuffer(T.__webglFramebuffer[me]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=P.textures;for(let me=0,_e=W.length;me<_e;me++){const fe=s.get(W[me]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),f.memory.textures--),s.remove(W[me])}s.remove(P)}let G=0;function te(){G=0}function ae(){const P=G;return P>=l.maxTextures&&at("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function de(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function J(P,T){const W=s.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const me=P.image;if(me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,P,T);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function I(P,T){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){$(W,P,T);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function z(P,T){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){$(W,P,T);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function ce(P,T){const W=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){be(W,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}const ve={[ch]:r.REPEAT,[ma]:r.CLAMP_TO_EDGE,[uh]:r.MIRRORED_REPEAT},O={[An]:r.NEAREST,[Ob]:r.NEAREST_MIPMAP_NEAREST,[xc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Sd]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},Z={[Bb]:r.NEVER,[kb]:r.ALWAYS,[zb]:r.LESS,[sp]:r.LEQUAL,[Hb]:r.EQUAL,[rp]:r.GEQUAL,[Gb]:r.GREATER,[Vb]:r.NOTEQUAL};function ue(P,T){if(T.type===Pi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===Sd||T.magFilter===xc||T.magFilter===Us||T.minFilter===Dn||T.minFilter===Sd||T.minFilter===xc||T.minFilter===Us)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ve[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ve[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ve[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,O[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==xc&&T.minFilter!==Us||T.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Se(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",H));const me=T.source;let _e=v.get(me);_e===void 0&&(_e={},v.set(me,_e));const fe=de(T);if(fe!==P.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),_e[fe].usedTimes++;const Le=_e[P.__cacheKey];Le!==void 0&&(_e[P.__cacheKey].usedTimes--,Le.usedTimes===0&&U(T)),P.__cacheKey=fe,P.__webglTexture=_e[fe].texture}return W}function Ue(P,T,W){return Math.floor(Math.floor(P/W)/T)}function qe(P,T,W,me){const fe=P.updateRanges;if(fe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,W,me,T.data);else{fe.sort((Ee,Ae)=>Ee.start-Ae.start);let Le=0;for(let Ee=1;Ee<fe.length;Ee++){const Ae=fe[Le],Fe=fe[Ee],He=Ae.start+Ae.count,Pe=Ue(Fe.start,T.width,4),lt=Ue(Ae.start,T.width,4);Fe.start<=He+1&&Pe===lt&&Ue(Fe.start+Fe.count-1,T.width,4)===Pe?Ae.count=Math.max(Ae.count,Fe.start+Fe.count-Ae.start):(++Le,fe[Le]=Fe)}fe.length=Le+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Ae=fe.length;Ee<Ae;Ee++){const Fe=fe[Ee],He=Math.floor(Fe.start/4),Pe=Math.ceil(Fe.count/4),lt=He%T.width,X=Math.floor(He/T.width),we=Pe,Re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,lt,X,we,Re,W,me,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,et)}}function $(P,T,W){let me=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=r.TEXTURE_3D);const _e=Se(P,T),fe=T.source;i.bindTexture(me,P.__webglTexture,r.TEXTURE0+W);const Le=s.get(fe);if(fe.version!==Le.__version||_e===!0){i.activeTexture(r.TEXTURE0+W);const Ce=Mt.getPrimaries(Mt.workingColorSpace),Ze=T.colorSpace===is?null:Mt.getPrimaries(T.colorSpace),et=T.colorSpace===is||Ce===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ee=C(T.image,!1,l.maxTextureSize);Ee=Rt(T,Ee);const Ae=c.convert(T.format,T.colorSpace),Fe=c.convert(T.type);let He=D(T.internalFormat,Ae,Fe,T.colorSpace,T.isVideoTexture);ue(me,T);let Pe;const lt=T.mipmaps,X=T.isVideoTexture!==!0,we=Le.__version===void 0||_e===!0,Re=fe.dataReady,Ie=F(T,Ee);if(T.isDepthTexture)He=L(T.format===Ls,T.type),we&&(X?i.texStorage2D(r.TEXTURE_2D,1,He,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Ae,Fe,null));else if(T.isDataTexture)if(lt.length>0){X&&we&&i.texStorage2D(r.TEXTURE_2D,Ie,He,lt[0].width,lt[0].height);for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],X?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data);T.generateMipmaps=!1}else X?(we&&i.texStorage2D(r.TEXTURE_2D,Ie,He,Ee.width,Ee.height),Re&&qe(T,Ee,Ae,Fe)):i.texImage2D(r.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Ae,Fe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,lt[0].width,lt[0].height,Ee.depth);for(let Te=0,pe=lt.length;Te<pe;Te++)if(Pe=lt[Te],T.format!==Mi)if(Ae!==null)if(X){if(Re)if(T.layerUpdates.size>0){const Ge=bv(Pe.width,Pe.height,T.format,T.type);for(const nt of T.layerUpdates){const Dt=Pe.data.subarray(nt*Ge/Pe.data.BYTES_PER_ELEMENT,(nt+1)*Ge/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,nt,Pe.width,Pe.height,1,Ae,Dt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ee.depth,Ae,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Ee.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Re&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ee.depth,Ae,Fe,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Ee.depth,0,Ae,Fe,Pe.data)}else{X&&we&&i.texStorage2D(r.TEXTURE_2D,Ie,He,lt[0].width,lt[0].height);for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],T.format!==Mi?Ae!==null?X?Re&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data)}else if(T.isDataArrayTexture)if(X){if(we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,Ee.width,Ee.height,Ee.depth),Re)if(T.layerUpdates.size>0){const Te=bv(Ee.width,Ee.height,T.format,T.type);for(const pe of T.layerUpdates){const Ge=Ee.data.subarray(pe*Te/Ee.data.BYTES_PER_ELEMENT,(pe+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Ae,Fe,Ge)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Fe,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Ee.width,Ee.height,Ee.depth,0,Ae,Fe,Ee.data);else if(T.isData3DTexture)X?(we&&i.texStorage3D(r.TEXTURE_3D,Ie,He,Ee.width,Ee.height,Ee.depth),Re&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Fe,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,He,Ee.width,Ee.height,Ee.depth,0,Ae,Fe,Ee.data);else if(T.isFramebufferTexture){if(we)if(X)i.texStorage2D(r.TEXTURE_2D,Ie,He,Ee.width,Ee.height);else{let Te=Ee.width,pe=Ee.height;for(let Ge=0;Ge<Ie;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,He,Te,pe,0,Ae,Fe,null),Te>>=1,pe>>=1}}else if(lt.length>0){if(X&&we){const Te=je(lt[0]);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}for(let Te=0,pe=lt.length;Te<pe;Te++)Pe=lt[Te],X?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae,Fe,Pe):i.texImage2D(r.TEXTURE_2D,Te,He,Ae,Fe,Pe);T.generateMipmaps=!1}else if(X){if(we){const Te=je(Ee);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}Re&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Fe,Ee)}else i.texImage2D(r.TEXTURE_2D,0,He,Ae,Fe,Ee);y(T)&&x(me),Le.__version=fe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function be(P,T,W){if(T.image.length!==6)return;const me=Se(P,T),_e=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);const fe=s.get(_e);if(_e.version!==fe.__version||me===!0){i.activeTexture(r.TEXTURE0+W);const Le=Mt.getPrimaries(Mt.workingColorSpace),Ce=T.colorSpace===is?null:Mt.getPrimaries(T.colorSpace),Ze=T.colorSpace===is||Le===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const et=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!et&&!Ee?Ae[pe]=C(T.image[pe],!0,l.maxCubemapSize):Ae[pe]=Ee?T.image[pe].image:T.image[pe],Ae[pe]=Rt(T,Ae[pe]);const Fe=Ae[0],He=c.convert(T.format,T.colorSpace),Pe=c.convert(T.type),lt=D(T.internalFormat,He,Pe,T.colorSpace),X=T.isVideoTexture!==!0,we=fe.__version===void 0||me===!0,Re=_e.dataReady;let Ie=F(T,Fe);ue(r.TEXTURE_CUBE_MAP,T);let Te;if(et){X&&we&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,lt,Fe.width,Fe.height);for(let pe=0;pe<6;pe++){Te=Ae[pe].mipmaps;for(let Ge=0;Ge<Te.length;Ge++){const nt=Te[Ge];T.format!==Mi?He!==null?X?Re&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,nt.width,nt.height,He,nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,lt,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,nt.width,nt.height,He,Pe,nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,lt,nt.width,nt.height,0,He,Pe,nt.data)}}}else{if(Te=T.mipmaps,X&&we){Te.length>0&&Ie++;const pe=je(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){X?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,He,Pe,Ae[pe].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Ae[pe].width,Ae[pe].height,0,He,Pe,Ae[pe].data);for(let Ge=0;Ge<Te.length;Ge++){const Dt=Te[Ge].image[pe].image;X?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Dt.width,Dt.height,He,Pe,Dt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,lt,Dt.width,Dt.height,0,He,Pe,Dt.data)}}else{X?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,He,Pe,Ae[pe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,He,Pe,Ae[pe]);for(let Ge=0;Ge<Te.length;Ge++){const nt=Te[Ge];X?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,He,Pe,nt.image[pe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,lt,He,Pe,nt.image[pe])}}}y(T)&&x(r.TEXTURE_CUBE_MAP),fe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Me(P,T,W,me,_e,fe){const Le=c.convert(W.format,W.colorSpace),Ce=c.convert(W.type),Ze=D(W.internalFormat,Le,Ce,W.colorSpace),et=s.get(T),Ee=s.get(W);if(Ee.__renderTarget=T,!et.__hasExternalTextures){const Ae=Math.max(1,T.width>>fe),Fe=Math.max(1,T.height>>fe);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?i.texImage3D(_e,fe,Ze,Ae,Fe,T.depth,0,Le,Ce,null):i.texImage2D(_e,fe,Ze,Ae,Fe,0,Le,Ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Yt(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,_e,Ee.__webglTexture,0,k(T)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,_e,Ee.__webglTexture,fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(P,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const me=T.depthTexture,_e=me&&me.isDepthTexture?me.type:null,fe=L(T.stencilBuffer,_e),Le=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Yt(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),fe,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,P)}else{const me=T.textures;for(let _e=0;_e<me.length;_e++){const fe=me[_e],Le=c.convert(fe.format,fe.colorSpace),Ce=c.convert(fe.type),Ze=D(fe.internalFormat,Le,Ce,fe.colorSpace);Yt(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),Ze,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),Ze,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(P,T,W){const me=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(T.depthTexture);if(_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,T.depthTexture.addEventListener("dispose",H)),_e.__webglTexture===void 0){_e.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),ue(r.TEXTURE_CUBE_MAP,T.depthTexture);const et=c.convert(T.depthTexture.format),Ee=c.convert(T.depthTexture.type);let Ae;T.depthTexture.format===Ma?Ae=r.DEPTH_COMPONENT24:T.depthTexture.format===Ls&&(Ae=r.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,T.width,T.height,0,et,Ee,null)}}else J(T.depthTexture,0);const fe=_e.__webglTexture,Le=k(T),Ce=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Ze=T.depthTexture.format===Ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ma)Yt(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ce,fe,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ce,fe,0);else if(T.depthTexture.format===Ls)Yt(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ze,Ce,fe,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Ze,Ce,fe,0);else throw new Error("Unknown depthTexture format")}function $e(P){const T=s.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=me}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let me=0;me<6;me++)Ke(T.__webglFramebuffer[me],P,me);else{const me=P.texture.mipmaps;me&&me.length>0?Ke(T.__webglFramebuffer[0],P,0):Ke(T.__webglFramebuffer,P,0)}else if(W){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=r.createRenderbuffer(),Je(T.__webglDepthbuffer[me],P,!1);else{const _e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,fe)}}else{const me=P.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Je(T.__webglDepthbuffer,P,!1);else{const _e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(P,T,W){const me=s.get(P);T!==void 0&&Me(me.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&$e(P)}function pt(P){const T=P.texture,W=s.get(P),me=s.get(T);P.addEventListener("dispose",V);const _e=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Le=_e.length>1;if(Le||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=T.version,f.memory.textures++),fe){W.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Ce]=[];for(let Ze=0;Ze<T.mipmaps.length;Ze++)W.__webglFramebuffer[Ce][Ze]=r.createFramebuffer()}else W.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)W.__webglFramebuffer[Ce]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Le)for(let Ce=0,Ze=_e.length;Ce<Ze;Ce++){const et=s.get(_e[Ce]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Yt(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ze=_e[Ce];W.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ce]);const et=c.convert(Ze.format,Ze.colorSpace),Ee=c.convert(Ze.type),Ae=D(Ze.internalFormat,et,Ee,Ze.colorSpace,P.isXRRenderTarget===!0),Fe=k(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Ae,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ue(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)Me(W.__webglFramebuffer[Ce][Ze],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ze);else Me(W.__webglFramebuffer[Ce],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let Ce=0,Ze=_e.length;Ce<Ze;Ce++){const et=_e[Ce],Ee=s.get(et);let Ae=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),ue(Ae,et),Me(W.__webglFramebuffer,P,et,r.COLOR_ATTACHMENT0+Ce,Ae,0),y(et)&&x(Ae)}i.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,me.__webglTexture),ue(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)Me(W.__webglFramebuffer[Ze],P,T,r.COLOR_ATTACHMENT0,Ce,Ze);else Me(W.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Ce,0);y(T)&&x(Ce),i.unbindTexture()}P.depthBuffer&&$e(P)}function St(P){const T=P.textures;for(let W=0,me=T.length;W<me;W++){const _e=T[W];if(y(_e)){const fe=N(P),Le=s.get(_e).__webglTexture;i.bindTexture(fe,Le),x(fe),i.unbindTexture()}}}const Ot=[],ot=[];function Et(P){if(P.samples>0){if(Yt(P)===!1){const T=P.textures,W=P.width,me=P.height;let _e=r.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(P),Ce=T.length>1;if(Ce)for(let et=0;et<T.length;et++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ze=P.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let et=0;et<T.length;et++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[et]);const Ee=s.get(T[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,W,me,0,0,W,me,_e,r.NEAREST),m===!0&&(Ot.length=0,ot.length=0,Ot.push(r.COLOR_ATTACHMENT0+et),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ot.push(fe),ot.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let et=0;et<T.length;et++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Le.__webglColorRenderbuffer[et]);const Ee=s.get(T[et]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function k(P){return Math.min(l.maxSamples,P.samples)}function Yt(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(P){const T=f.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function Rt(P,T){const W=P.colorSpace,me=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Ir&&W!==is&&(Mt.getTransfer(W)===Ft?(me!==Mi||_e!==ui)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),T}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=te,this.setTexture2D=J,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=ce,this.rebindTextures=Jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hC(r,e){function i(s,l=is){let c;const f=Mt.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===ep)return r.UNSIGNED_SHORT_4_4_4_4;if(s===tp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===E_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===b_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===y_)return r.BYTE;if(s===M_)return r.SHORT;if(s===Ko)return r.UNSIGNED_SHORT;if(s===$h)return r.INT;if(s===Gi)return r.UNSIGNED_INT;if(s===Pi)return r.FLOAT;if(s===ya)return r.HALF_FLOAT;if(s===T_)return r.ALPHA;if(s===A_)return r.RGB;if(s===Mi)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Ls)return r.DEPTH_STENCIL;if(s===R_)return r.RED;if(s===np)return r.RED_INTEGER;if(s===Pr)return r.RG;if(s===ip)return r.RG_INTEGER;if(s===ap)return r.RGBA_INTEGER;if(s===Xc||s===Wc||s===qc||s===Yc)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fh||s===dh||s===hh||s===ph)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mh||s===gh||s===vh||s===_h||s===xh||s===Sh||s===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===mh||s===gh)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===vh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===_h)return c.COMPRESSED_R11_EAC;if(s===xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Sh)return c.COMPRESSED_RG11_EAC;if(s===yh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Mh||s===Eh||s===bh||s===Th||s===Ah||s===Rh||s===wh||s===Ch||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh||s===Ph)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Mh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Eh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Th)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ah)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ch)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Uh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ph)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ih||s===Fh||s===Bh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ih)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zh||s===Hh||s===Gh||s===Vh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===zh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Hh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const pC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mC=`
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

}`;class gC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new F_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ei({vertexShader:pC,fragmentShader:mC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new sl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vC extends Hr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,_=null,S=null,v=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",y=new gC,x={},N=i.getContextAttributes();let D=null,L=null;const F=[],H=[],V=new Lt;let A=null;const U=new Si;U.viewport=new on;const he=new Si;he.viewport=new on;const G=[U,he],te=new wT;let ae=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let be=F[$];return be===void 0&&(be=new wd,F[$]=be),be.getTargetRaySpace()},this.getControllerGrip=function($){let be=F[$];return be===void 0&&(be=new wd,F[$]=be),be.getGripSpace()},this.getHand=function($){let be=F[$];return be===void 0&&(be=new wd,F[$]=be),be.getHandSpace()};function J($){const be=H.indexOf($.inputSource);if(be===-1)return;const Me=F[be];Me!==void 0&&(Me.update($.inputSource,$.frame,h||f),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",z);for(let $=0;$<F.length;$++){const be=H[$];be!==null&&(H[$]=null,F[$].disconnect(be))}ae=null,de=null,y.reset();for(const $ in x)delete x[$];e.setRenderTarget(D),M=null,v=null,S=null,l=null,L=null,qe.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){p=$,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",I),l.addEventListener("inputsourceschange",z),N.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(V),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Je=null,Ke=null;N.depth&&(Ke=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=N.stencil?Ls:Ma,Je=N.stencil?Qo:Gi);const $e={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};S=this.getBinding(),v=S.createProjectionLayer($e),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Bi(v.textureWidth,v.textureHeight,{format:Mi,type:ui,depthTexture:new Jo(v.textureWidth,v.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Bi(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),qe.setContext(l),qe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z($){for(let be=0;be<$.removed.length;be++){const Me=$.removed[be],Je=H.indexOf(Me);Je>=0&&(H[Je]=null,F[Je].disconnect(Me))}for(let be=0;be<$.added.length;be++){const Me=$.added[be];let Je=H.indexOf(Me);if(Je===-1){for(let $e=0;$e<F.length;$e++)if($e>=H.length){H.push(Me),Je=$e;break}else if(H[$e]===null){H[$e]=Me,Je=$e;break}if(Je===-1)break}const Ke=F[Je];Ke&&Ke.connect(Me)}}const ce=new le,ve=new le;function O($,be,Me){ce.setFromMatrixPosition(be.matrixWorld),ve.setFromMatrixPosition(Me.matrixWorld);const Je=ce.distanceTo(ve),Ke=be.projectionMatrix.elements,$e=Me.projectionMatrix.elements,Jt=Ke[14]/(Ke[10]-1),pt=Ke[14]/(Ke[10]+1),St=(Ke[9]+1)/Ke[5],Ot=(Ke[9]-1)/Ke[5],ot=(Ke[8]-1)/Ke[0],Et=($e[8]+1)/$e[0],k=Jt*ot,Yt=Jt*Et,yt=Je/(-ot+Et),Rt=yt*-ot;if(be.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Rt),$.translateZ(yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ke[10]===-1)$.projectionMatrix.copy(be.projectionMatrix),$.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const je=Jt+yt,P=pt+yt,T=k-Rt,W=Yt+(Je-Rt),me=St*pt/P*je,_e=Ot*pt/P*je;$.projectionMatrix.makePerspective(T,W,me,_e,je,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,be){be===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(be.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let be=$.near,Me=$.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),te.near=he.near=U.near=be,te.far=he.far=U.far=Me,(ae!==te.near||de!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ae=te.near,de=te.far),te.layers.mask=$.layers.mask|6,U.layers.mask=te.layers.mask&-5,he.layers.mask=te.layers.mask&-3;const Je=$.parent,Ke=te.cameras;Z(te,Je);for(let $e=0;$e<Ke.length;$e++)Z(Ke[$e],Je);Ke.length===2?O(te,U,he):te.projectionMatrix.copy(U.projectionMatrix),ue($,te,Je)};function ue($,be,Me){Me===null?$.matrix.copy(be.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(be.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(be.projectionMatrix),$.projectionMatrixInverse.copy(be.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=kh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function($){m=$,v!==null&&(v.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function($){return x[$]};let Se=null;function Ue($,be){if(_=be.getViewerPose(h||f),E=be,_!==null){const Me=_.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Je=!1;Me.length!==te.cameras.length&&(te.cameras.length=0,Je=!0);for(let pt=0;pt<Me.length;pt++){const St=Me[pt];let Ot=null;if(M!==null)Ot=M.getViewport(St);else{const Et=S.getViewSubImage(v,St);Ot=Et.viewport,pt===0&&(e.setRenderTargetTextures(L,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(L))}let ot=G[pt];ot===void 0&&(ot=new Si,ot.layers.enable(pt),ot.viewport=new on,G[pt]=ot),ot.matrix.fromArray(St.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(St.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),pt===0&&(te.matrix.copy(ot.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Je===!0&&te.cameras.push(ot)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const pt=S.getDepthInformation(Me[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let pt=0;pt<Me.length;pt++){const St=Me[pt].camera;if(St){let Ot=x[St];Ot||(Ot=new F_,x[St]=Ot);const ot=S.getCameraImage(St);Ot.sourceTexture=ot}}}}for(let Me=0;Me<F.length;Me++){const Je=H[Me],Ke=F[Me];Je!==null&&Ke!==void 0&&Ke.update(Je,be,h||f)}Se&&Se($,be),be.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:be}),E=null}const qe=new H_;qe.setAnimationLoop(Ue),this.setAnimationLoop=function($){Se=$},this.dispose=function(){}}}const ws=new Ea,_C=new fn;function xC(r,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,B_(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,N,D,L){x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),S(y,x)):x.isMeshPhongMaterial?(c(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&M(y,x,L)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,N,D):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const N=e.get(x),D=N.envMap,L=N.envMapRotation;D&&(y.envMap.value=D,ws.copy(L),ws.x*=-1,ws.y*=-1,ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),y.envMapRotation.value.setFromMatrix4(_C.makeRotationFromEuler(ws)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,N,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*N,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function S(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,N){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const N=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function SC(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,D){const L=D.program;s.uniformBlockBinding(N,L)}function h(N,D){let L=l[N.id];L===void 0&&(E(N),L=_(N),l[N.id]=L,N.addEventListener("dispose",y));const F=D.program;s.updateUBOMapping(N,F);const H=e.render.frame;c[N.id]!==H&&(v(N),c[N.id]=H)}function _(N){const D=S();N.__bindingPointIndex=D;const L=r.createBuffer(),F=N.__size,H=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,F,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,L),L}function S(){for(let N=0;N<p;N++)if(f.indexOf(N)===-1)return f.push(N),N;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const D=l[N.id],L=N.uniforms,F=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let H=0,V=L.length;H<V;H++){const A=Array.isArray(L[H])?L[H]:[L[H]];for(let U=0,he=A.length;U<he;U++){const G=A[U];if(M(G,H,U,F)===!0){const te=G.__offset,ae=Array.isArray(G.value)?G.value:[G.value];let de=0;for(let J=0;J<ae.length;J++){const I=ae[J],z=C(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,te+de,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,de),de+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,D,L,F){const H=N.value,V=D+"_"+L;if(F[V]===void 0)return typeof H=="number"||typeof H=="boolean"?F[V]=H:F[V]=H.clone(),!0;{const A=F[V];if(typeof H=="number"||typeof H=="boolean"){if(A!==H)return F[V]=H,!0}else if(A.equals(H)===!1)return A.copy(H),!0}return!1}function E(N){const D=N.uniforms;let L=0;const F=16;for(let V=0,A=D.length;V<A;V++){const U=Array.isArray(D[V])?D[V]:[D[V]];for(let he=0,G=U.length;he<G;he++){const te=U[he],ae=Array.isArray(te.value)?te.value:[te.value];for(let de=0,J=ae.length;de<J;de++){const I=ae[de],z=C(I),ce=L%F,ve=ce%z.boundary,O=ce+ve;L+=ve,O!==0&&F-O<z.storage&&(L+=F-O),te.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=L,L+=z.storage}}}const H=L%F;return H>0&&(L+=F-H),N.__size=L,N.__cache={},this}function C(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",N),D}function y(N){const D=N.target;D.removeEventListener("dispose",y);const L=f.indexOf(D.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:h,dispose:x}}const yC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function MC(){return Li===null&&(Li=new mT(yC,16,16,Pr,ya),Li.name="DFG_LUT",Li.minFilter=Dn,Li.magFilter=Dn,Li.wrapS=ma,Li.wrapT=ma,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class EC{constructor(e={}){const{canvas:i=Xb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:v=!1,outputBufferType:M=ui}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=M,y=new Set([ap,ip,np]),x=new Set([ui,Gi,Ko,Qo,ep,tp]),N=new Uint32Array(4),D=new Int32Array(4);let L=null,F=null;const H=[],V=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let he=!1;this._outputColorSpace=ci;let G=0,te=0,ae=null,de=-1,J=null;const I=new on,z=new on;let ce=null;const ve=new Gt(0);let O=0,Z=i.width,ue=i.height,Se=1,Ue=null,qe=null;const $=new on(0,0,Z,ue),be=new on(0,0,Z,ue);let Me=!1;const Je=new P_;let Ke=!1,$e=!1;const Jt=new fn,pt=new le,St=new on,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Et(){return ae===null?Se:1}let k=s;function Yt(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jh}`),i.addEventListener("webglcontextlost",Ge,!1),i.addEventListener("webglcontextrestored",nt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),k===null){const q="webgl2";if(k=Yt(q,w),k===null)throw Yt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw At("WebGLRenderer: "+w.message),w}let yt,Rt,je,P,T,W,me,_e,fe,Le,Ce,Ze,et,Ee,Ae,Fe,He,Pe,lt,X,we,Re,Ie;function Te(){yt=new ER(k),yt.init(),we=new hC(k,yt),Rt=new mR(k,yt,e,we),je=new fC(k,yt),Rt.reversedDepthBuffer&&v&&je.buffers.depth.setReversed(!0),P=new AR(k),T=new Qw,W=new dC(k,yt,je,T,Rt,we,P),me=new MR(U),_e=new DT(k),Re=new hR(k,_e),fe=new bR(k,_e,P,Re),Le=new wR(k,fe,_e,Re,P),Pe=new RR(k,Rt,W),Ae=new gR(T),Ce=new Kw(U,me,yt,Rt,Re,Ae),Ze=new xC(U,T),et=new $w,Ee=new sC(yt),He=new dR(U,me,je,Le,E,m),Fe=new uC(U,Le,Rt),Ie=new SC(k,P,Rt,je),lt=new pR(k,yt,P),X=new TR(k,yt,P),P.programs=Ce.programs,U.capabilities=Rt,U.extensions=yt,U.properties=T,U.renderLists=et,U.shadowMap=Fe,U.state=je,U.info=P}Te(),C!==ui&&(A=new NR(C,i.width,i.height,l,c));const pe=new vC(U,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=yt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=yt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(w){w!==void 0&&(Se=w,this.setSize(Z,ue,!1))},this.getSize=function(w){return w.set(Z,ue)},this.setSize=function(w,q,oe=!0){if(pe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,ue=q,i.width=Math.floor(w*Se),i.height=Math.floor(q*Se),oe===!0&&(i.style.width=w+"px",i.style.height=q+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(Z*Se,ue*Se).floor()},this.setDrawingBufferSize=function(w,q,oe){Z=w,ue=q,Se=oe,i.width=Math.floor(w*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,q,oe,ne){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,q,oe,ne),je.viewport(I.copy($).multiplyScalar(Se).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,q,oe,ne){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,q,oe,ne),je.scissor(z.copy(be).multiplyScalar(Se).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){je.setScissorTest(Me=w)},this.setOpaqueSort=function(w){Ue=w},this.setTransparentSort=function(w){qe=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,oe=!0){let ne=0;if(w){let K=!1;if(ae!==null){const De=ae.texture.format;K=y.has(De)}if(K){const De=ae.texture.type,Be=x.has(De),Ne=He.getClearColor(),Ve=He.getClearAlpha(),Xe=Ne.r,st=Ne.g,rt=Ne.b;Be?(N[0]=Xe,N[1]=st,N[2]=rt,N[3]=Ve,k.clearBufferuiv(k.COLOR,0,N)):(D[0]=Xe,D[1]=st,D[2]=rt,D[3]=Ve,k.clearBufferiv(k.COLOR,0,D))}else ne|=k.COLOR_BUFFER_BIT}q&&(ne|=k.DEPTH_BUFFER_BIT),oe&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ge,!1),i.removeEventListener("webglcontextrestored",nt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),He.dispose(),et.dispose(),Ee.dispose(),T.dispose(),me.dispose(),Le.dispose(),Re.dispose(),Ie.dispose(),Ce.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Is),pe.removeEventListener("sessionend",rl),ji.stop()};function Ge(w){w.preventDefault(),ov("WebGLRenderer: Context Lost."),he=!0}function nt(){ov("WebGLRenderer: Context Restored."),he=!1;const w=P.autoReset,q=Fe.enabled,oe=Fe.autoUpdate,ne=Fe.needsUpdate,K=Fe.type;Te(),P.autoReset=w,Fe.enabled=q,Fe.autoUpdate=oe,Fe.needsUpdate=ne,Fe.type=K}function Dt(w){At("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function bt(w){const q=w.target;q.removeEventListener("dispose",bt),fi(q)}function fi(w){vn(w),T.remove(w)}function vn(w){const q=T.get(w).programs;q!==void 0&&(q.forEach(function(oe){Ce.releaseProgram(oe)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,oe,ne,K,De){q===null&&(q=Ot);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Ne=ol(w,q,oe,ne,K);je.setMaterial(ne,Be);let Ve=oe.index,Xe=1;if(ne.wireframe===!0){if(Ve=fe.getWireframeAttribute(oe),Ve===void 0)return;Xe=2}const st=oe.drawRange,rt=oe.attributes.position;let ze=st.start*Xe,wt=(st.start+st.count)*Xe;De!==null&&(ze=Math.max(ze,De.start*Xe),wt=Math.min(wt,(De.start+De.count)*Xe)),Ve!==null?(ze=Math.max(ze,0),wt=Math.min(wt,Ve.count)):rt!=null&&(ze=Math.max(ze,0),wt=Math.min(wt,rt.count));const Zt=wt-ze;if(Zt<0||Zt===1/0)return;Re.setup(K,ne,Ne,oe,Ve);let Vt,Ct=lt;if(Ve!==null&&(Vt=_e.get(Ve),Ct=X,Ct.setIndex(Vt)),K.isMesh)ne.wireframe===!0?(je.setLineWidth(ne.wireframeLinewidth*Et()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(K.isLine){let nn=ne.linewidth;nn===void 0&&(nn=1),je.setLineWidth(nn*Et()),K.isLineSegments?Ct.setMode(k.LINES):K.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else K.isPoints?Ct.setMode(k.POINTS):K.isSprite&&Ct.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)eu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const nn=K._multiDrawStarts,We=K._multiDrawCounts,jt=K._multiDrawCount,vt=Ve?_e.get(Ve).bytesPerElement:1,Pn=T.get(ne).currentProgram.getUniforms();for(let In=0;In<jt;In++)Pn.setValue(k,"_gl_DrawID",In),Ct.render(nn[In]/vt,We[In])}else if(K.isInstancedMesh)Ct.renderInstances(ze,Zt,K.count);else if(oe.isInstancedBufferGeometry){const nn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,We=Math.min(oe.instanceCount,nn);Ct.renderInstances(ze,Zt,We)}else Ct.render(ze,Zt)};function dn(w,q,oe){w.transparent===!0&&w.side===pa&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,bi(w,q,oe),w.side=ss,w.needsUpdate=!0,bi(w,q,oe),w.side=pa):bi(w,q,oe)}this.compile=function(w,q,oe=null){oe===null&&(oe=w),F=Ee.get(oe),F.init(q),V.push(F),oe.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),w!==oe&&w.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),F.setupLights();const ne=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const De=K.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Ne=De[Be];dn(Ne,oe,K),ne.add(Ne)}else dn(De,oe,K),ne.add(De)}),F=V.pop(),ne},this.compileAsync=function(w,q,oe=null){const ne=this.compile(w,q,oe);return new Promise(K=>{function De(){if(ne.forEach(function(Be){T.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){K(w);return}setTimeout(De,10)}yt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let _n=null;function Aa(w){_n&&_n(w)}function Is(){ji.stop()}function rl(){ji.start()}const ji=new H_;ji.setAnimationLoop(Aa),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(w){_n=w,pe.setAnimationLoop(w),w===null?ji.stop():ji.start()},pe.addEventListener("sessionstart",Is),pe.addEventListener("sessionend",rl),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(he===!0)return;const oe=pe.enabled===!0&&pe.isPresenting===!0,ne=A!==null&&(ae===null||oe)&&A.begin(U,ae);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(q),q=pe.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,q,ae),F=Ee.get(w,V.length),F.init(q),V.push(F),Jt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Je.setFromProjectionMatrix(Jt,Ii,q.reversedDepth),$e=this.localClippingEnabled,Ke=Ae.init(this.clippingPlanes,$e),L=et.get(w,H.length),L.init(),H.push(L),pe.enabled===!0&&pe.isPresenting===!0){const Be=U.xr.getDepthSensingMesh();Be!==null&&Fs(Be,q,-1/0,U.sortObjects)}Fs(w,q,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(Ue,qe),ot=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ot&&He.addToRenderList(L,w),this.info.render.frame++,Ke===!0&&Ae.beginShadows();const K=F.state.shadowsArray;if(Fe.render(K,w,q),Ke===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&A.hasRenderPass())===!1){const Be=L.opaque,Ne=L.transmissive;if(F.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(Ne.length>0)for(let Xe=0,st=Ve.length;Xe<st;Xe++){const rt=Ve[Xe];Bs(Be,Ne,w,rt)}ot&&He.render(w);for(let Xe=0,st=Ve.length;Xe<st;Xe++){const rt=Ve[Xe];Ra(L,w,rt,rt.viewport)}}else Ne.length>0&&Bs(Be,Ne,w,q),ot&&He.render(w),Ra(L,w,q)}ae!==null&&te===0&&(W.updateMultisampleRenderTarget(ae),W.updateRenderTargetMipmap(ae)),ne&&A.end(U),w.isScene===!0&&w.onAfterRender(U,w,q),Re.resetDefaultState(),de=-1,J=null,V.pop(),V.length>0?(F=V[V.length-1],Ke===!0&&Ae.setGlobalState(U.clippingPlanes,F.state.camera)):F=null,H.pop(),H.length>0?L=H[H.length-1]:L=null};function Fs(w,q,oe,ne){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)F.pushLight(w),w.castShadow&&F.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){ne&&St.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Jt);const Be=Le.update(w),Ne=w.material;Ne.visible&&L.push(w,Be,Ne,oe,St.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const Be=Le.update(w),Ne=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),St.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),St.copy(Be.boundingSphere.center)),St.applyMatrix4(w.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ne)){const Ve=Be.groups;for(let Xe=0,st=Ve.length;Xe<st;Xe++){const rt=Ve[Xe],ze=Ne[rt.materialIndex];ze&&ze.visible&&L.push(w,Be,ze,oe,St.z,rt)}}else Ne.visible&&L.push(w,Be,Ne,oe,St.z,null)}}const De=w.children;for(let Be=0,Ne=De.length;Be<Ne;Be++)Fs(De[Be],q,oe,ne)}function Ra(w,q,oe,ne){const{opaque:K,transmissive:De,transparent:Be}=w;F.setupLightsView(oe),Ke===!0&&Ae.setGlobalState(U.clippingPlanes,oe),ne&&je.viewport(I.copy(ne)),K.length>0&&di(K,q,oe),De.length>0&&di(De,q,oe),Be.length>0&&di(Be,q,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Bs(w,q,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ne.id]===void 0){const ze=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ne.id]=new Bi(1,1,{generateMipmaps:!0,type:ze?ya:ui,minFilter:Us,samples:Math.max(4,Rt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const De=F.state.transmissionRenderTarget[ne.id],Be=ne.viewport||I;De.setSize(Be.z*U.transmissionResolutionScale,Be.w*U.transmissionResolutionScale);const Ne=U.getRenderTarget(),Ve=U.getActiveCubeFace(),Xe=U.getActiveMipmapLevel();U.setRenderTarget(De),U.getClearColor(ve),O=U.getClearAlpha(),O<1&&U.setClearColor(16777215,.5),U.clear(),ot&&He.render(oe);const st=U.toneMapping;U.toneMapping=Fi;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),F.setupLightsView(ne),Ke===!0&&Ae.setGlobalState(U.clippingPlanes,ne),di(w,oe,ne),W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De),yt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let wt=0,Zt=q.length;wt<Zt;wt++){const Vt=q[wt],{object:Ct,geometry:nn,material:We,group:jt}=Vt;if(We.side===pa&&Ct.layers.test(ne.layers)){const vt=We.side;We.side=kn,We.needsUpdate=!0,Xi(Ct,oe,ne,nn,We,jt),We.side=vt,We.needsUpdate=!0,ze=!0}}ze===!0&&(W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De))}U.setRenderTarget(Ne,Ve,Xe),U.setClearColor(ve,O),rt!==void 0&&(ne.viewport=rt),U.toneMapping=st}function di(w,q,oe){const ne=q.isScene===!0?q.overrideMaterial:null;for(let K=0,De=w.length;K<De;K++){const Be=w[K],{object:Ne,geometry:Ve,group:Xe}=Be;let st=Be.material;st.allowOverride===!0&&ne!==null&&(st=ne),Ne.layers.test(oe.layers)&&Xi(Ne,q,oe,Ve,st,Xe)}}function Xi(w,q,oe,ne,K,De){w.onBeforeRender(U,q,oe,ne,K,De),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(U,q,oe,ne,w,De),K.transparent===!0&&K.side===pa&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,U.renderBufferDirect(oe,q,ne,K,w,De),K.side=ss,K.needsUpdate=!0,U.renderBufferDirect(oe,q,ne,K,w,De),K.side=pa):U.renderBufferDirect(oe,q,ne,K,w,De),w.onAfterRender(U,q,oe,ne,K,De)}function bi(w,q,oe){q.isScene!==!0&&(q=Ot);const ne=T.get(w),K=F.state.lights,De=F.state.shadowsArray,Be=K.state.version,Ne=Ce.getParameters(w,K.state,De,q,oe),Ve=Ce.getProgramCacheKey(Ne);let Xe=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const st=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=me.get(w.envMap||ne.environment,st),ne.envMapRotation=ne.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",bt),Xe=new Map,ne.programs=Xe);let rt=Xe.get(Ve);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Be)return tn(w,Ne),rt}else Ne.uniforms=Ce.getUniforms(w),w.onBeforeCompile(Ne,U),rt=Ce.acquireProgram(Ne,Ve),Xe.set(Ve,rt),ne.uniforms=Ne.uniforms;const ze=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),tn(w,Ne),ne.needsLights=qi(w),ne.lightsStateVersion=Be,ne.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function Wi(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Zc.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function tn(w,q){const oe=T.get(w);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ol(w,q,oe,ne,K){q.isScene!==!0&&(q=Ot),W.resetTextureUnits();const De=q.fog,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ne=ae===null?U.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ir,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Xe=me.get(ne.envMap||Be,Ve),st=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!oe.morphAttributes.position,wt=!!oe.morphAttributes.normal,Zt=!!oe.morphAttributes.color;let Vt=Fi;ne.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Vt=U.toneMapping);const Ct=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,nn=Ct!==void 0?Ct.length:0,We=T.get(ne),jt=F.state.lights;if(Ke===!0&&($e===!0||w!==J)){const an=w===J&&ne.id===de;Ae.setState(ne,w,an)}let vt=!1;ne.version===We.__version?(We.needsLights&&We.lightsStateVersion!==jt.state.version||We.outputColorSpace!==Ne||K.isBatchedMesh&&We.batching===!1||!K.isBatchedMesh&&We.batching===!0||K.isBatchedMesh&&We.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&We.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||K.isInstancedMesh&&We.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&We.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&We.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&We.instancingMorph===!1&&K.morphTexture!==null||We.envMap!==Xe||ne.fog===!0&&We.fog!==De||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ae.numPlanes||We.numIntersection!==Ae.numIntersection)||We.vertexAlphas!==st||We.vertexTangents!==rt||We.morphTargets!==ze||We.morphNormals!==wt||We.morphColors!==Zt||We.toneMapping!==Vt||We.morphTargetsCount!==nn)&&(vt=!0):(vt=!0,We.__version=ne.version);let Pn=We.currentProgram;vt===!0&&(Pn=bi(ne,q,K));let In=!1,Fn=!1,Yi=!1;const Ut=Pn.getUniforms(),Wt=We.uniforms;if(je.useProgram(Pn.program)&&(In=!0,Fn=!0,Yi=!0),ne.id!==de&&(de=ne.id,Fn=!0),In||J!==w){je.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ut.setValue(k,"projectionMatrix",w.projectionMatrix),Ut.setValue(k,"viewMatrix",w.matrixWorldInverse);const hi=Ut.map.cameraPosition;hi!==void 0&&hi.setValue(k,pt.setFromMatrixPosition(w.matrixWorld)),Rt.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,Fn=!0,Yi=!0)}if(We.needsLights&&(jt.state.directionalShadowMap.length>0&&Ut.setValue(k,"directionalShadowMap",jt.state.directionalShadowMap,W),jt.state.spotShadowMap.length>0&&Ut.setValue(k,"spotShadowMap",jt.state.spotShadowMap,W),jt.state.pointShadowMap.length>0&&Ut.setValue(k,"pointShadowMap",jt.state.pointShadowMap,W)),K.isSkinnedMesh){Ut.setOptional(k,K,"bindMatrix"),Ut.setOptional(k,K,"bindMatrixInverse");const an=K.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ut.setValue(k,"boneTexture",an.boneTexture,W))}K.isBatchedMesh&&(Ut.setOptional(k,K,"batchingTexture"),Ut.setValue(k,"batchingTexture",K._matricesTexture,W),Ut.setOptional(k,K,"batchingIdTexture"),Ut.setValue(k,"batchingIdTexture",K._indirectTexture,W),Ut.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&Ut.setValue(k,"batchingColorTexture",K._colorsTexture,W));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Pe.update(K,oe,Pn),(Fn||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,Ut.setValue(k,"receiveShadow",K.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Wt.envMapIntensity.value=q.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=MC()),Fn&&(Ut.setValue(k,"toneMappingExposure",U.toneMappingExposure),We.needsLights&&ll(Wt,Yi),De&&ne.fog===!0&&Ze.refreshFogUniforms(Wt,De),Ze.refreshMaterialUniforms(Wt,ne,Se,ue,F.state.transmissionRenderTarget[w.id]),Zc.upload(k,Wi(We),Wt,W)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Zc.upload(k,Wi(We),Wt,W),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ut.setValue(k,"center",K.center),Ut.setValue(k,"modelViewMatrix",K.modelViewMatrix),Ut.setValue(k,"normalMatrix",K.normalMatrix),Ut.setValue(k,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const an=ne.uniformsGroups;for(let hi=0,Ai=an.length;hi<Ai;hi++){const ul=an[hi];Ie.update(ul,Pn),Ie.bind(ul,Pn)}}return Pn}function ll(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function qi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(w,q,oe){const ne=T.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=q,T.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const oe=T.get(w);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const wa=k.createFramebuffer();this.setRenderTarget=function(w,q=0,oe=0){ae=w,G=q,te=oe;let ne=null,K=!1,De=!1;if(w){const Ne=T.get(w);if(Ne.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(k.FRAMEBUFFER,Ne.__webglFramebuffer),I.copy(w.viewport),z.copy(w.scissor),ce=w.scissorTest,je.viewport(I),je.scissor(z),je.setScissorTest(ce),de=-1;return}else if(Ne.__webglFramebuffer===void 0)W.setupRenderTarget(w);else if(Ne.__hasExternalTextures)W.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&T.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const Xe=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?ne=Xe[q][oe]:ne=Xe[q],K=!0):w.samples>0&&W.useMultisampledRTT(w)===!1?ne=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?ne=Xe[oe]:ne=Xe,I.copy(w.viewport),z.copy(w.scissor),ce=w.scissorTest}else I.copy($).multiplyScalar(Se).floor(),z.copy(be).multiplyScalar(Se).floor(),ce=Me;if(oe!==0&&(ne=wa),je.bindFramebuffer(k.FRAMEBUFFER,ne)&&je.drawBuffers(w,ne),je.viewport(I),je.scissor(z),je.setScissorTest(ce),K){const Ne=T.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,oe)}else if(De){const Ne=q;for(let Ve=0;Ve<w.textures.length;Ve++){const Xe=T.get(w.textures[Ve]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,oe,Ne)}}else if(w!==null&&oe!==0){const Ne=T.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,oe)}de=-1},this.readRenderTargetPixels=function(w,q,oe,ne,K,De,Be,Ne=0){if(!(w&&w.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){je.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const Xe=w.textures[Ne],st=Xe.format,rt=Xe.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ne),!Rt.textureFormatReadable(st)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(rt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ne&&oe>=0&&oe<=w.height-K&&k.readPixels(q,oe,ne,K,we.convert(st),we.convert(rt),De)}finally{const Xe=ae!==null?T.get(ae).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(w,q,oe,ne,K,De,Be,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve)if(q>=0&&q<=w.width-ne&&oe>=0&&oe<=w.height-K){je.bindFramebuffer(k.FRAMEBUFFER,Ve);const Xe=w.textures[Ne],st=Xe.format,rt=Xe.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ne),!Rt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.bufferData(k.PIXEL_PACK_BUFFER,De.byteLength,k.STREAM_READ),k.readPixels(q,oe,ne,K,we.convert(st),we.convert(rt),0);const wt=ae!==null?T.get(ae).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,wt);const Zt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Wb(k,Zt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,De),k.deleteBuffer(ze),k.deleteSync(Zt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,oe=0){const ne=Math.pow(2,-oe),K=Math.floor(w.image.width*ne),De=Math.floor(w.image.height*ne),Be=q!==null?q.x:0,Ne=q!==null?q.y:0;W.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,Be,Ne,K,De),je.unbindTexture()};const ou=k.createFramebuffer(),cl=k.createFramebuffer();this.copyTextureToTexture=function(w,q,oe=null,ne=null,K=0,De=0){let Be,Ne,Ve,Xe,st,rt,ze,wt,Zt;const Vt=w.isCompressedTexture?w.mipmaps[De]:w.image;if(oe!==null)Be=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,st=oe.min.y,rt=oe.isBox3?oe.min.z:0;else{const Wt=Math.pow(2,-K);Be=Math.floor(Vt.width*Wt),Ne=Math.floor(Vt.height*Wt),w.isDataArrayTexture?Ve=Vt.depth:w.isData3DTexture?Ve=Math.floor(Vt.depth*Wt):Ve=1,Xe=0,st=0,rt=0}ne!==null?(ze=ne.x,wt=ne.y,Zt=ne.z):(ze=0,wt=0,Zt=0);const Ct=we.convert(q.format),nn=we.convert(q.type);let We;q.isData3DTexture?(W.setTexture3D(q,0),We=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),We=k.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),We=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const jt=k.getParameter(k.UNPACK_ROW_LENGTH),vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=k.getParameter(k.UNPACK_SKIP_PIXELS),In=k.getParameter(k.UNPACK_SKIP_ROWS),Fn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xe),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rt);const Yi=w.isDataArrayTexture||w.isData3DTexture,Ut=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Wt=T.get(w),Ti=T.get(q),an=T.get(Wt.__renderTarget),hi=T.get(Ti.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,an.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Ai=0;Ai<Ve;Ai++)Yi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(w).__webglTexture,K,rt+Ai),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(q).__webglTexture,De,Zt+Ai)),k.blitFramebuffer(Xe,st,Be,Ne,ze,wt,Be,Ne,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||T.has(w)){const Wt=T.get(w),Ti=T.get(q);je.bindFramebuffer(k.READ_FRAMEBUFFER,ou),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,cl);for(let an=0;an<Ve;an++)Yi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.__webglTexture,K,rt+an):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wt.__webglTexture,K),Ut?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ti.__webglTexture,De,Zt+an):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ti.__webglTexture,De),K!==0?k.blitFramebuffer(Xe,st,Be,Ne,ze,wt,Be,Ne,k.COLOR_BUFFER_BIT,k.NEAREST):Ut?k.copyTexSubImage3D(We,De,ze,wt,Zt+an,Xe,st,Be,Ne):k.copyTexSubImage2D(We,De,ze,wt,Xe,st,Be,Ne);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ut?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(We,De,ze,wt,Zt,Be,Ne,Ve,Ct,nn,Vt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(We,De,ze,wt,Zt,Be,Ne,Ve,Ct,Vt.data):k.texSubImage3D(We,De,ze,wt,Zt,Be,Ne,Ve,Ct,nn,Vt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,De,ze,wt,Be,Ne,Ct,nn,Vt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,De,ze,wt,Vt.width,Vt.height,Ct,Vt.data):k.texSubImage2D(k.TEXTURE_2D,De,ze,wt,Be,Ne,Ct,nn,Vt);k.pixelStorei(k.UNPACK_ROW_LENGTH,jt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,In),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Fn),De===0&&q.generateMipmaps&&k.generateMipmap(We),je.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&W.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?W.setTextureCube(w,0):w.isData3DTexture?W.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?W.setTexture2DArray(w,0):W.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){G=0,te=0,ae=null,je.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Mt._getUnpackColorSpace()}}const bC=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,TC=`
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
`;function AC(){const r=re.useRef(null);return re.useEffect(()=>{const e=r.current,i=window.innerWidth,s=window.innerHeight,l=new EC({antialias:!1,alpha:!0});l.setPixelRatio(1),l.setSize(i,s),l.setClearColor(0,0),e.appendChild(l.domElement);const c=new lT,f=new cp(-1,1,1,-1,0,1),p=C=>Math.max(4,Math.min(6,C/300)),m={uTime:{value:0},uGrainSize:{value:p(i)},uMouse:{value:new Lt(.5,.5)},uResolution:{value:new Lt(i,s)}},h=new Ei({vertexShader:bC,fragmentShader:TC,uniforms:m,transparent:!0,depthWrite:!1});c.add(new Vi(new sl(2,2),h));const _=C=>{m.uMouse.value.set(C.clientX/window.innerWidth,1-C.clientY/window.innerHeight)};window.addEventListener("mousemove",_);const S=()=>{const C=window.innerWidth,y=window.innerHeight;l.setSize(C,y),m.uResolution.value.set(C,y),m.uGrainSize.value=p(C)};window.addEventListener("resize",S);let v;const M=new CT,E=()=>{v=requestAnimationFrame(E),m.uTime.value=M.getElapsedTime(),l.render(c,f)};return E(),()=>{cancelAnimationFrame(v),window.removeEventListener("mousemove",_),window.removeEventListener("resize",S),l.dispose(),h.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),g.jsx("div",{ref:r,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}const RC="/assets/notion-nitu-D0HPhEhh.png",wC="/assets/clawd-logo-Bu_GsNtA.png",CC=["/work/searchneu","/work/wrap","/work/safehub","/work/chatgpt","/work/pogo","/writing","/writing/rejection","/work/chatgpt/article"];function NC(){const r=rs(),[e,i]=re.useState(r.pathname),[s,l]=re.useState("fade-in"),[c,f]=re.useState(!1);return re.useEffect(()=>{if(r.pathname!==e){l("fade-out");const p=setTimeout(()=>{i(r.pathname),l("fade-in")},180);return()=>clearTimeout(p)}},[r,e]),g.jsxs(g.Fragment,{children:[!CC.includes(r.pathname)&&g.jsx(AC,{}),g.jsxs("div",{className:`navbar${r.pathname==="/photos"?" navbar--solid":""}`,children:[g.jsxs("div",{className:"nav-links",children:[g.jsx($d,{to:"/",className:"nav-item",children:"WORK"}),g.jsx($d,{to:"/about",className:"nav-item",children:"ABOUT"})]}),g.jsx("img",{src:RC,alt:"",className:"navbar-notion-face cursor-notion"})]}),g.jsx("div",{className:`page-wrapper ${s}`,children:g.jsxs(Zy,{location:{pathname:e},children:[g.jsx(li,{path:"/",element:g.jsx(GM,{})}),g.jsx(li,{path:"/about",element:g.jsx(VM,{})}),g.jsx(li,{path:"/work/searchneu",element:g.jsx(ME,{})}),g.jsx(li,{path:"/work/wrap",element:g.jsx(TE,{})}),g.jsx(li,{path:"/work/safehub",element:g.jsx(PE,{})}),g.jsx(li,{path:"/work/chatgpt",element:g.jsx(QE,{})}),g.jsx(li,{path:"/photos",element:g.jsx(rE,{})}),g.jsx(li,{path:"/work/pogo",element:g.jsx($E,{})}),g.jsx(li,{path:"/writing",element:g.jsx(tb,{})}),g.jsx(li,{path:"/writing/rejection",element:g.jsx(nb,{})}),g.jsx(li,{path:"/work/chatgpt/article",element:g.jsx(ub,{})})]})}),g.jsx("footer",{className:"site-footer",style:r.pathname==="/photos"?{display:"none"}:{},children:g.jsxs("div",{className:"site-footer-content",children:[g.jsx("div",{className:"site-footer-made-block",children:g.jsxs("p",{className:"site-footer-madewith",children:["© 2026 Nitish Gannu. Made with"," ",g.jsx("a",{href:"https://www.anthropic.com/claude-code",target:"_blank",rel:"noopener noreferrer",className:"site-footer-clawd-link",children:g.jsx("img",{src:wC,alt:"Claude Code",className:"site-footer-clawd-logo"})})]})}),g.jsxs("div",{className:"site-footer-links-row",children:[g.jsx("a",{href:"https://www.linkedin.com/in/nitishgannu/",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"LINKEDIN"}),g.jsx("span",{className:"site-footer-sep",children:" / "}),g.jsx("a",{href:"https://medium.com/@nitishgannu",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"MEDIUM"}),g.jsx("span",{className:"site-footer-sep",children:" / "}),g.jsx("a",{href:"https://x.com/nitishgannu",target:"_blank",rel:"noopener noreferrer",className:"site-footer-simple-link",children:"X"})]})]})})]})}ay.createRoot(document.getElementById("root")).render(g.jsx(xM,{children:g.jsx(NC,{})}));

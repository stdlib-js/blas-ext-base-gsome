"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=v(function(A,q){
function p(e,r,a,t,u){var i,n,s,o,c;if(n=a.data,s=a.accessors[0],t===0)return s(n,u)?r<=e:r<=0;for(o=u,i=0,c=0;c<e;c++){if(s(n,o)&&(i+=1,i>=r))return!0;o+=t}return!1}q.exports=p
});var f=v(function(B,x){
var b=require('@stdlib/array-base-arraylike2object/dist'),d=l();function j(e,r,a,t,u){var i,n,s,o;if(e<=0)return!1;if(s=b(a),s.accessorProtocol)return d(e,r,s,t,u);if(t===0)return a[u]?r<=e:r<=0;for(n=u,i=0,o=0;o<e;o++){if(a[n]&&(i+=1,i>=r))return!0;n+=t}return!1}x.exports=j
});var g=v(function(C,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),P=f();function R(e,r,a,t){var u=O(e,t);return P(e,r,a,t,u)}y.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=g(),w=f();h(m,"ndarray",w);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

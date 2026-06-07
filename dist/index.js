"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=v(function(A,q){
function p(e,r,t,a,u){var i,n,s,o,c;if(n=t.data,s=t.accessors[0],a===0)return s(n,u)?r<=e:r<=0;for(o=u,i=0,c=0;c<e;c++){if(s(n,o)&&(i+=1,i>=r))return!0;o+=a}return!1}q.exports=p
});var f=v(function(B,x){
var b=require('@stdlib/array-base-arraylike2object/dist'),d=l();function j(e,r,t,a,u){var i,n,s,o;if(e<=0)return!1;if(s=b(t),s.accessorProtocol)return d(e,r,s,a,u);if(a===0)return t[u]?r<=e:r<=0;for(n=u,i=0,o=0;o<e;o++){if(t[n]&&(i+=1,i>=r))return!0;n+=a}return!1}x.exports=j
});var g=v(function(C,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),P=f();function R(e,r,t,a){var u=O(e,a);return P(e,r,t,a,u)}y.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=g(),w=f();h(m,"ndarray",w);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

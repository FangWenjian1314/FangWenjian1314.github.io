import{n as m}from"./base-466dee4e.js";import{l as p,z as g,k as v}from"./index-32a92878.js";import{S as C}from"./index-2ac27e18.js";import{b as x,K as y,z as u,I as f,J as I,u as b}from"./index-b6327078.js";const d=Symbol(),i=x();function z(o,n=void 0){const t=f()?I(d,i):i;return o?u(()=>{var r,e;return(e=(r=t.value)==null?void 0:r[o])!=null?e:n}):t}const j=(o,n,t=!1)=>{var r;const e=!!f(),a=e?z():void 0,s=(r=n==null?void 0:n.provide)!=null?r:e?y:void 0;if(!s)return;const l=u(()=>{const c=b(o);return a!=null&&a.value?K(a.value,c):c});return s(d,l),s(p,u(()=>l.value.locale)),s(m,u(()=>l.value.namespace)),s(g,u(()=>l.value.zIndex)),s(C,{size:u(()=>l.value.size||"")}),(t||!i.value)&&(i.value=l.value),l},K=(o,n)=>{var t;const r=[...new Set([...v(o),...v(n)])],e={};for(const a of r)e[a]=(t=n[a])!=null?t:o[a];return e};export{j as p,z as u};

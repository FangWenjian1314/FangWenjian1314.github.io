import{D as O,E as g,G as y,H as P,N as b,I as w,J as E,b as _,z as B,u as I}from"./index-1899a4d4.js";function K(e){for(var n=-1,t=e==null?0:e.length,r={};++n<t;){var c=e[n];r[c[0]]=c[1]}return r}const T=e=>e===void 0,x=e=>typeof e=="boolean",z=e=>typeof e=="number",A=e=>typeof Element>"u"?!1:e instanceof Element,H=e=>O(e)?!Number.isNaN(Number(e)):!1,V="__epPropKey",U=e=>e,j=e=>g(e)&&!!e[V],C=(e,n)=>{if(!g(e)||j(e))return e;const{values:t,required:r,default:c,type:u,validator:d}=e,m={type:u,required:!!r,validator:t||d?p=>{let l=!1,f=[];if(t&&(f=Array.from(t),y(e,"default")&&f.push(c),l||(l=f.includes(p))),d&&(l||(l=d(p))),!l&&f.length>0){const $=[...new Set(f)].map(N=>JSON.stringify(N)).join(", ");P(`Invalid prop: validation failed${n?` for prop "${n}"`:""}. Expected one of [${$}], got value ${JSON.stringify(p)}.`)}return l}:void 0,[V]:!0};return y(e,"default")&&(m.default=c),m},F=e=>K(Object.entries(e).map(([n,t])=>[n,C(t,n)])),L=(e,n)=>{if(e.install=t=>{for(const r of[e,...Object.values(n??{})])t.component(r.name,r)},n)for(const[t,r]of Object.entries(n))e[t]=r;return e},M=e=>(e.install=b,e),v="el",J="is-",i=(e,n,t,r,c)=>{let u=`${e}-${n}`;return t&&(u+=`-${t}`),r&&(u+=`__${r}`),c&&(u+=`--${c}`),u},q=Symbol("namespaceContextKey"),D=e=>{const n=e||(w()?E(q,_(v)):_(v));return B(()=>I(n)||v)},Q=(e,n)=>{const t=D(n);return{namespace:t,b:(s="")=>i(t.value,e,s,"",""),e:s=>s?i(t.value,e,"",s,""):"",m:s=>s?i(t.value,e,"","",s):"",be:(s,a)=>s&&a?i(t.value,e,s,a,""):"",em:(s,a)=>s&&a?i(t.value,e,"",s,a):"",bm:(s,a)=>s&&a?i(t.value,e,s,"",a):"",bem:(s,a,o)=>s&&a&&o?i(t.value,e,s,a,o):"",is:(s,...a)=>{const o=a.length>=1?a[0]:!0;return s&&o?`${J}${s}`:""},cssVar:s=>{const a={};for(const o in s)s[o]&&(a[`--${t.value}-${o}`]=s[o]);return a},cssVarName:s=>`--${t.value}-${s}`,cssVarBlock:s=>{const a={};for(const o in s)s[o]&&(a[`--${t.value}-${e}-${o}`]=s[o]);return a},cssVarBlockName:s=>`--${t.value}-${e}-${s}`}};var R=(e,n)=>{const t=e.__vccOpts||e;for(const[r,c]of n)t[r]=c;return t};export{R as _,M as a,F as b,C as c,U as d,H as e,T as f,D as g,x as h,z as i,K as j,A as k,q as n,Q as u,L as w};

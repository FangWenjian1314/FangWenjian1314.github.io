import{z as r,I,u as v,J as l,b as c,f as z,x as h,P as j,Z as F}from"./index-1899a4d4.js";import{a as K}from"./index-ac7dd7bf.js";import{g as S}from"./base-f7f9854c.js";const y=s=>{const o=I();return r(()=>{var e,n;return(n=(e=o==null?void 0:o.proxy)==null?void 0:e.$props)==null?void 0:n[s]})},p={prefix:Math.floor(Math.random()*1e4),current:0},_=Symbol("elIdInjection"),R=()=>I()?l(_,p):p,$=s=>{const o=R(),e=S();return r(()=>v(s)||`${e.value}-id-${o.prefix}-${o.current++}`)},f=Symbol("formContextKey"),b=Symbol("formItemContextKey"),E=(s,o={})=>{const e=c(void 0),n=o.prop?e:y("size"),u=o.global?e:K(),t=o.form?{size:void 0}:l(f,void 0),a=o.formItem?{size:void 0}:l(b,void 0);return r(()=>n.value||v(s)||(a==null?void 0:a.size)||(t==null?void 0:t.size)||u.value||"")},J=s=>{const o=y("disabled"),e=l(f,void 0);return r(()=>o.value||v(s)||(e==null?void 0:e.disabled)||!1)},P=()=>{const s=l(f,void 0),o=l(b,void 0);return{form:s,formItem:o}},U=(s,{formItemContext:o,disableIdGeneration:e,disableIdManagement:n})=>{e||(e=c(!1)),n||(n=c(!1));const u=c();let t;const a=r(()=>{var i;return!!(!s.label&&o&&o.inputIds&&((i=o.inputIds)==null?void 0:i.length)<=1)});return z(()=>{t=h([j(s,"id"),e],([i,m])=>{const d=i??(m?void 0:$().value);d!==u.value&&(o!=null&&o.removeInputId&&(u.value&&o.removeInputId(u.value),!(n!=null&&n.value)&&!m&&d&&o.addInputId(d)),u.value=d)},{immediate:!0})}),F(()=>{t&&t(),o!=null&&o.removeInputId&&u.value&&o.removeInputId(u.value)}),{isLabeledByFormItem:a,inputId:u}};export{E as a,J as b,R as c,$ as d,U as e,b as f,P as u};

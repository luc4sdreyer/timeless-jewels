import{d as f}from"./index.098253ec.js";let o;const G={},L={},y={},b={},A={},U={},me=()=>{o=JSON.parse(f.SkillTree),console.log("Loaded skill tree",o),Object.keys(o.groups).forEach(t=>{const s=o.groups[t];s.nodes.forEach(r=>{const n=o.nodes[r];n.isProxy||"classStartIndex"in n||n.expansionJewel&&n.expansionJewel.parent||n.isBlighted||n.ascendancyName||(G[parseInt(t)]=s,L[parseInt(r)]=n)})}),Object.keys(o.sprites.keystoneInactive["0.3835"].coords).forEach(t=>y[t]=o.sprites.keystoneInactive["0.3835"]),Object.keys(o.sprites.notableInactive["0.3835"].coords).forEach(t=>y[t]=o.sprites.notableInactive["0.3835"]),Object.keys(o.sprites.normalInactive["0.3835"].coords).forEach(t=>y[t]=o.sprites.normalInactive["0.3835"]),Object.keys(o.sprites.masteryInactive["0.3835"].coords).forEach(t=>y[t]=o.sprites.masteryInactive["0.3835"]),Object.keys(o.sprites.keystoneActive["0.3835"].coords).forEach(t=>b[t]=o.sprites.keystoneActive["0.3835"]),Object.keys(o.sprites.notableActive["0.3835"].coords).forEach(t=>b[t]=o.sprites.notableActive["0.3835"]),Object.keys(o.sprites.normalActive["0.3835"].coords).forEach(t=>b[t]=o.sprites.normalActive["0.3835"]),Object.keys(o.sprites.masteryInactive["0.3835"].coords).forEach(t=>b[t]=o.sprites.masteryInactive["0.3835"]),Object.keys(o.sprites.groupBackground["0.3835"].coords).forEach(t=>y[t]=o.sprites.groupBackground["0.3835"]),Object.keys(o.sprites.frame["0.3835"].coords).forEach(t=>y[t]=o.sprites.frame["0.3835"]),[f.StatTranslationsJSON,f.PassiveSkillStatTranslationsJSON,f.PassiveSkillAuraStatTranslationsJSON].forEach(t=>{JSON.parse(t).descriptors.forEach(r=>{r.ids.forEach(n=>{n in A||(A[n]=r)})})}),Object.keys(f.TreeToPassive).forEach(t=>{U[f.TreeToPassive[parseInt(t)].Index]=parseInt(t)})},T={negate:-1,times_twenty:1/20,canonical_stat:1,per_minute_to_per_second:60,milliseconds_to_seconds:1e3,display_indexable_support:1,divide_by_one_hundred:100,milliseconds_to_seconds_2dp_if_required:1e3,deciseconds_to_seconds:10,old_leech_percent:1,old_leech_permyriad:1e4,times_one_point_five:1/1.5,"30%_of_value":100/30,divide_by_one_thousand:1e3,divide_by_twelve:12,divide_by_six:6,per_minute_to_per_second_2dp_if_required:60,"60%_of_value":100/60,double:1/2,negate_and_double:1/-2,multiply_by_four:1/4,per_minute_to_per_second_0dp:60,milliseconds_to_seconds_0dp:1e3,mod_value_to_item_class:1,milliseconds_to_seconds_2dp:1e3,multiplicative_damage_modifier:1,divide_by_one_hundred_2dp:100,per_minute_to_per_second_1dp:60,divide_by_one_hundred_2dp_if_required:100,divide_by_ten_1dp_if_required:10,milliseconds_to_seconds_1dp:1e3,divide_by_fifty:50,per_minute_to_per_second_2dp:60,divide_by_ten_0dp:10,divide_by_one_hundred_and_negate:-100,tree_expansion_jewel_passive:1,passive_hash:1,divide_by_ten_1dp:10,affliction_reward_type:1,divide_by_five:5,metamorphosis_reward_description:1,divide_by_two_0dp:2,divide_by_fifteen_0dp:15,divide_by_three:3,divide_by_twenty_then_double_0dp:10,divide_by_four:4},I=(e,t,s,r,n)=>({x:(Math.abs(o.min_x)+e+s)/n,y:(Math.abs(o.min_y)+t+r)/n}),B=(e,t,s)=>{const r=Math.PI/180*s,n=Math.cos(r),_=Math.sin(r),i=n*(t.x-e.x)+_*(t.y-e.y)+e.x,c=n*(t.y-e.y)-_*(t.x-e.x)+e.y;return{x:i,y:c}},M=[0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330],N=[0,10,20,30,40,45,50,60,70,80,90,100,110,120,130,135,140,150,160,170,180,190,200,210,220,225,230,240,250,260,270,280,290,300,310,315,320,330,340,350],$=(e,t)=>{const s=o.constants.skillsPerOrbit[e];return s==16?M[M.length-t]||0:s==40?N[N.length-t]||0:360-360/s*t},C=(e,t,s,r)=>{if(e.group===void 0||e.orbit===void 0||e.orbitIndex===void 0)return{x:0,y:0};const n=o.groups[e.group],_=$(e.orbit,e.orbitIndex),i=I(n.x,n.y,t,s,r),c=I(n.x,n.y-o.constants.orbitRadii[e.orbit],t,s,r);return B(i,c,_)},K=(e,t)=>Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)),Q=(e,t)=>{var _,i;let s=-1;for(let c=0;c<e.list.length;c++){const a=e.list[c];let l=!0;if(((_=a.conditions)==null?void 0:_.length)>0){const d=a.conditions[0];d.min!==void 0&&t<d.min&&(l=!1),d.max!==void 0&&t>d.max&&(l=!1),d.negated&&(l=!l)}if(l){s=c;break}}if(s==-1)return;const r=e.list[s];let n=t;return r.index_handlers!==void 0&&(Array.isArray(r.index_handlers)?((i=r.index_handlers)==null?void 0:i.length)>0&&r.index_handlers[0].forEach(c=>{n=n/(T[c]||1)}):Object.keys(r.index_handlers).forEach(c=>{n=n/(T[c]||1)})),r.string.replace(/\{0(?::(.*?)d(.*?))\}/,"$1"+n.toString()+"$2").replace("{0}",parseFloat(n.toFixed(2)).toString())},X=1800,ye=e=>{const t=[],s=C(e,0,0,1);for(const r of Object.values(L)){const n=C(r,0,0,1);K(n,s)<X&&t.push(r)}return t},j={},Y=e=>{const t=typeof e=="string"?parseInt(e):e;return t in j||(j[t]=f.GetStatByIndex(t)),j[t]},he=(e,t)=>{const s=Y(e),r=A[s.ID];if(t)return Q(r,t)||s.ID;let n=s.Text||s.ID;return r&&r.list&&r.list.length&&(n=r.list[0].string,n=n.replace(/\{\d(?::(.*?)d(.*?))\}/,"$1#$2").replace(/\{\d\}/,"#")),n},x={1:{Ahuana:"explicit.pseudo_timeless_jewel_ahuana",Xibaqua:"explicit.pseudo_timeless_jewel_xibaqua",Doryani:"explicit.pseudo_timeless_jewel_doryani",Zerphi:"explicit.pseudo_timeless_jewel_zerphi"},2:{Kaom:"explicit.pseudo_timeless_jewel_kaom",Rakiata:"explicit.pseudo_timeless_jewel_rakiata",Kiloava:"explicit.pseudo_timeless_jewel_kiloava",Akoya:"explicit.pseudo_timeless_jewel_akoya"},3:{Deshret:"explicit.pseudo_timeless_jewel_deshret",Balbala:"explicit.pseudo_timeless_jewel_balbala",Asenath:"explicit.pseudo_timeless_jewel_asenath",Nasima:"explicit.pseudo_timeless_jewel_nasima"},4:{Venarius:"explicit.pseudo_timeless_jewel_venarius",Maxarius:"explicit.pseudo_timeless_jewel_maxarius",Dominus:"explicit.pseudo_timeless_jewel_dominus",Avarius:"explicit.pseudo_timeless_jewel_avarius"},5:{Cadiro:"explicit.pseudo_timeless_jewel_cadiro",Victario:"explicit.pseudo_timeless_jewel_victario",Chitus:"explicit.pseudo_timeless_jewel_chitus",Caspiro:"explicit.pseudo_timeless_jewel_caspiro"}},Z=(e,t,s)=>{const i=[],c={type:"count",value:{min:1},filters:[],disabled:!1};if(s.length==1){for(const a of Object.keys(x[e]))c.filters.push({id:x[e][a],value:{min:s[0].seed,max:s[0].seed},disabled:a!=t});i.push(c)}else if(s.length>200){for(let a=0;a<4;a++)i.push({type:"count",value:{min:1},filters:[],disabled:a!=0});for(const[a,l]of s.slice(0,200).entries()){const d=Math.floor(a/50);i[d].filters.push({id:x[e][t],value:{min:l.seed,max:l.seed}}),console.log("too many results case, Final query: ",i[d])}}else{for(let a=0;a<4;a++)i.push({type:"count",value:{min:1},filters:[],disabled:a!=0});for(const[a,l]of s.entries()){const d=Math.floor(a/50);i[d].filters.push({id:x[e][t],value:{min:l.seed,max:l.seed}})}console.log("3rd case, Final query: ",i)}return{query:{status:{option:"online"},stats:i},sort:{price:"asc"}}},ge=(e,t,s)=>{console.log("openTrade: ",e,t);const r=new URL("https://www.pathofexile.com/trade/search/Necropolis");r.searchParams.set("q",JSON.stringify(Z(e,t,s))),window.open(r,"_blank")};function ee(){return new Worker(""+new URL("../workers/sync_worker-80151994.js",import.meta.url).href)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const W=Symbol("Comlink.proxy"),te=Symbol("Comlink.endpoint"),se=Symbol("Comlink.releaseProxy"),O=Symbol("Comlink.finalizer"),v=Symbol("Comlink.thrown"),q=e=>typeof e=="object"&&e!==null||typeof e=="function",ne={canHandle:e=>q(e)&&e[W],serialize(e){const{port1:t,port2:s}=new MessageChannel;return D(e,t),[s,[s]]},deserialize(e){return e.start(),H(e)}},re={canHandle:e=>q(e)&&v in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},z=new Map([["proxy",ne],["throw",re]]);function ie(e,t){for(const s of e)if(t===s||s==="*"||s instanceof RegExp&&s.test(t))return!0;return!1}function D(e,t=globalThis,s=["*"]){t.addEventListener("message",function r(n){if(!n||!n.data)return;if(!ie(s,n.origin)){console.warn(`Invalid origin '${n.origin}' for comlink proxy`);return}const{id:_,type:i,path:c}=Object.assign({path:[]},n.data),a=(n.data.argumentList||[]).map(m);let l;try{const d=c.slice(0,-1).reduce((u,g)=>u[g],e),p=c.reduce((u,g)=>u[g],e);switch(i){case"GET":l=p;break;case"SET":d[c.slice(-1)[0]]=m(n.data.value),l=!0;break;case"APPLY":l=p.apply(d,a);break;case"CONSTRUCT":{const u=new p(...a);l=_e(u)}break;case"ENDPOINT":{const{port1:u,port2:g}=new MessageChannel;D(e,g),l=de(u,[u])}break;case"RELEASE":l=void 0;break;default:return}}catch(d){l={value:d,[v]:0}}Promise.resolve(l).catch(d=>({value:d,[v]:0})).then(d=>{const[p,u]=S(d);t.postMessage(Object.assign(Object.assign({},p),{id:_}),u),i==="RELEASE"&&(t.removeEventListener("message",r),F(t),O in e&&typeof e[O]=="function"&&e[O]())}).catch(d=>{const[p,u]=S({value:new TypeError("Unserializable return value"),[v]:0});t.postMessage(Object.assign(Object.assign({},p),{id:_}),u)})}),t.start&&t.start()}function oe(e){return e.constructor.name==="MessagePort"}function F(e){oe(e)&&e.close()}function H(e,t){return P(e,[],t)}function w(e){if(e)throw new Error("Proxy has been released and is not useable")}function J(e){return h(e,{type:"RELEASE"}).then(()=>{F(e)})}const k=new WeakMap,E="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(k.get(e)||0)-1;k.set(e,t),t===0&&J(e)});function ae(e,t){const s=(k.get(t)||0)+1;k.set(t,s),E&&E.register(e,t,e)}function ce(e){E&&E.unregister(e)}function P(e,t=[],s=function(){}){let r=!1;const n=new Proxy(s,{get(_,i){if(w(r),i===se)return()=>{ce(n),J(e),r=!0};if(i==="then"){if(t.length===0)return{then:()=>n};const c=h(e,{type:"GET",path:t.map(a=>a.toString())}).then(m);return c.then.bind(c)}return P(e,[...t,i])},set(_,i,c){w(r);const[a,l]=S(c);return h(e,{type:"SET",path:[...t,i].map(d=>d.toString()),value:a},l).then(m)},apply(_,i,c){w(r);const a=t[t.length-1];if(a===te)return h(e,{type:"ENDPOINT"}).then(m);if(a==="bind")return P(e,t.slice(0,-1));const[l,d]=R(c);return h(e,{type:"APPLY",path:t.map(p=>p.toString()),argumentList:l},d).then(m)},construct(_,i){w(r);const[c,a]=R(i);return h(e,{type:"CONSTRUCT",path:t.map(l=>l.toString()),argumentList:c},a).then(m)}});return ae(n,e),n}function le(e){return Array.prototype.concat.apply([],e)}function R(e){const t=e.map(S);return[t.map(s=>s[0]),le(t.map(s=>s[1]))]}const V=new WeakMap;function de(e,t){return V.set(e,t),e}function _e(e){return Object.assign(e,{[W]:!0})}function S(e){for(const[t,s]of z)if(s.canHandle(e)){const[r,n]=s.serialize(e);return[{type:"HANDLER",name:t,value:r},n]}return[{type:"RAW",value:e},V.get(e)||[]]}function m(e){switch(e.type){case"HANDLER":return z.get(e.name).deserialize(e.value);case"RAW":return e.value}}function h(e,t,s){return new Promise(r=>{const n=ue();e.addEventListener("message",function _(i){!i.data||!i.data.id||i.data.id!==n||(e.removeEventListener("message",_),r(i.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:n},t),s)})}function ue(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function pe(){console.log("Creating sync worker");const e=new ee,t=H(e);return{syncWorker:e,syncWrap:t}}const{syncWorker:be,syncWrap:xe}=pe();export{o as a,X as b,L as c,G as d,C as e,K as f,Q as g,b as h,A as i,y as j,ge as k,me as l,he as m,ye as n,$ as o,_e as p,xe as s,I as t};
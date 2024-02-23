(function(){"use strict";var t={6096:function(t,e,n){var o=n(5328),i=n(8464),s=n(6760);const a={id:"app"};function r(t,e,n,o,i,r){const c=(0,s.E1)("router-view");return(0,s.Wz)(),(0,s.An)("div",a,[(0,s.K2)(c)])}n(3248),n(2168),n(5104),n(8312);const c=(0,i.O6)("auth",{state:()=>({isAuthenticated:!1,accessToken:"",userData:{},loading:!1}),actions:{initializeAccessToken(){const t=localStorage.getItem("accessToken"),e=localStorage.getItem("userData");this.accessToken=t||"",this.isAuthenticated=!!t,this.userData=e?JSON.parse(e):{}},login(t){this.$patch((e=>{e.accessToken=t,e.isAuthenticated=!0})),localStorage.setItem("accessToken",t)},setUserData(t){this.userData=t,localStorage.setItem("userData",JSON.stringify(t))},setLoading(t){this.loading=t}},getters:{isLoading(){return this.loading},getUserData(){return this.userData}}});const l="d9e20d499a3894452cdd",u="bb31e83cd0fff1cf60db4305e8b9ef3f168f41b4",d="/gists-manager/";async function f(t){try{const e=await fetch(`${d}api/access_token`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({client_id:l,client_secret:u,code:t})});if(!e.ok)throw new Error("Failed to fetch access token");const n=await e.json();return n.access_token}catch(e){throw console.error("Error fetching access token:",e),e}}var g=n(5216),p={name:"App",setup(){const t=c(),e=(0,g.KX)();async function n(){try{const n=new URLSearchParams(window.location.search).get("code"),o=await f(n);t.login(o),e.push("/")}catch(n){console.log("Error fetching access token:",n)}}return(0,s.u2)((()=>{t.initializeAccessToken(),window.location.search.includes("code")&&n()})),{}}},m=n(8152);const h=(0,m.c)(p,[["render",r]]);var v=h,y=n(8752);const b=t=>((0,s.ED)("data-v-44a2d07d"),t=t(),(0,s.ii)(),t),D={key:0},w={key:1,class:"gistList"},k={class:"container mx-auto mt-[70px] md:px-20 md:py-8 px-10 py-4"},C={class:"gistList__header flex items-center"},A=b((()=>(0,s.QD)("h2",null,"All gists",-1))),x={key:0,class:"counter rounded-full w-6 h-6 flex justify-center items-center ml-2"},z={class:"text-white"},E={class:"actions"},W={class:"flex flex-col md:flex-row justify-between py-2"},L={class:"pt-2"},Q={class:"flex gap-5"};function _(t,e,n,o,i,a){const r=(0,s.E1)("PageLoader"),c=(0,s.E1)("TopBar"),l=(0,s.E1)("router-link"),u=(0,s.E1)("IconButton");return(0,s.Wz)(),(0,s.An)("div",null,[o.isLoading?((0,s.Wz)(),(0,s.An)("div",D,[(0,s.K2)(r)])):((0,s.Wz)(),(0,s.An)("div",w,[(0,s.K2)(c),(0,s.QD)("div",k,[(0,s.QD)("div",null,[(0,s.QD)("div",C,[A,o.countGists?((0,s.Wz)(),(0,s.An)("div",x,[(0,s.QD)("span",z,(0,y.WA)(o.countGists),1)])):(0,s.g1)("",!0)]),(0,s.QD)("div",E,[(0,s.oF)(t.$slots,"customButtons",{},void 0,!0)])]),(0,s.QD)("ul",null,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(o.gists,(t=>((0,s.Wz)(),(0,s.An)("li",{key:t.id},[(0,s.QD)("div",W,[(0,s.QD)("div",L,[(0,s.K2)(l,{to:{name:"GistDetail",params:{id:t.id}}},{default:(0,s.Ql)((()=>[(0,s.mY)((0,y.WA)(Object.keys(t.files)[0]||"Untitled"),1)])),_:2},1032,["to"]),(0,s.QD)("p",null,(0,y.WA)(o.formatDate(t.created_at)),1),(0,s.QD)("p",null,(0,y.WA)(t.description||"Untitled"),1)]),(0,s.QD)("div",Q,[(0,s.K2)(u,{"icon-class":"far fa-file",label:o.getCount(t.files),size:"sm"},null,8,["label"]),(0,s.K2)(u,{"icon-class":"far fa-comment",label:t.comments,size:"sm"},null,8,["label"])])])])))),128))])])]))])}var I=n(8568),S=n(1288);const j=localStorage.getItem("accessToken");async function T(t,e={}){const n=(0,S.Wo)();try{c().setLoading(!0);const n=await fetch(t,e);if(!n.ok)throw new Error("Failed to fetch data");return c().setLoading(!1),204===n.status?null:await n.json()}catch(o){throw c().setLoading(!1),n.error(`Operation failed: ${o.message}`,{position:"top-right",timeout:3e3}),o}}async function G(t){const e="/api/user",n={headers:{Authorization:`token ${t}`}};return await T(e,n)}async function O(t){const e=(new Date).getTime(),n=`/api/gists?timestamp=${e}`,o={headers:{Authorization:`token ${t}`}};return await T(n,o)}async function K(t){const e=(new Date).getTime(),n=`/api/gists/${t}?timestamp=${e}`,o={headers:{Authorization:`token ${j}`}};return await T(n,o)}async function B(t,e){const n=(0,S.Wo)(),o=`/api/gists/${t}`,i={method:"PATCH",headers:{Accept:"application/vnd.github+json",Authorization:`token ${j}`,"Content-Type":"application/json"},body:JSON.stringify({files:e})},s=await T(o,i);return n.success("Edit was successful",{position:"top-right",timeout:3e3}),s}async function $(t){const e=(0,S.Wo)(),n=`/api/gists/${t}`,o={method:"DELETE",headers:{Authorization:`token ${j}`}},i=await T(n,o);return e.success("Delete was successful",{position:"top-right",timeout:3e3}),i}const U=t=>((0,s.ED)("data-v-eee31c6e"),t=t(),(0,s.ii)(),t),P={class:"flex items-center justify-center min-h-screen"},N=U((()=>(0,s.QD)("div",{class:"lds-bounce"},[(0,s.QD)("div"),(0,s.QD)("div")],-1))),F=[N];function J(t,e){return(0,s.Wz)(),(0,s.An)("div",P,F)}const V={},R=(0,m.c)(V,[["render",J],["__scopeId","data-v-eee31c6e"]]);var X=R;function q(t,e,n,o,i,a){return(0,s.Wz)(),(0,s.An)("button",{class:(0,y.WN)([o.buttonClasses,"icon-button",n.border?`icon-button--border-${n.color||"default"}`:"",n.color?`icon-button--${n.color}`:"icon-button--default"]),onClick:e[0]||(e[0]=(...t)=>o.handleClick&&o.handleClick(...t))},[(0,s.QD)("i",{class:(0,y.WN)([n.iconClass,o.iconSizeClass])},null,2),void 0!==n.label?((0,s.Wz)(),(0,s.An)("div",{key:0,class:(0,y.WN)([o.labelSizeClass,"pl-1"])},(0,y.WA)(n.label),3)):(0,s.g1)("",!0)],2)}var M={name:"IconButton",props:{iconClass:String,label:String,count:Number,onClick:Function,size:{type:String,default:"md"},border:{type:Boolean,default:!1},color:{type:String,default:"default"}},setup(t){const e=()=>{t.onClick&&t.onClick()},n=(0,s.S6)((()=>["icon-button","sm"===t.size&&"text-sm","md"===t.size&&"text-base","lg"===t.size&&"text-lg"])),o=(0,s.S6)((()=>"icon-"+t.size)),i=(0,s.S6)((()=>"label-"+t.size));return{handleClick:e,buttonClasses:n,iconSizeClass:o,labelSizeClass:i}}};const H=(0,m.c)(M,[["render",q],["__scopeId","data-v-9093bf48"]]);var Y=H;const Z={class:"topBar h-[70px] fixed top-0 left-0 w-full px-12 py-5 border-b-2 flex items-center justify-between"},tt={class:"text-start"},et={class:""},nt={class:"actions"};function ot(t,e,n,o,i,a){const r=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)("div",Z,[(0,s.QD)("h1",tt,[(0,s.K2)(r,{class:"text-lg topBar_name",to:"/"},{default:(0,s.Ql)((()=>[(0,s.mY)((0,y.WA)(o.userData.login),1)])),_:1})]),(0,s.QD)("div",et,[(0,s.QD)("div",nt,[(0,s.oF)(t.$slots,"customButtons",{},void 0,!0)])])])}var it={props:{pageTitle:String,count:Number},setup(){const t=c(),e=(0,s.S6)((()=>t.getUserData));return{userData:e}}};const st=(0,m.c)(it,[["render",ot],["__scopeId","data-v-525ed7f2"]]);var at=st,rt={name:"GistList",components:{PageLoader:X,IconButton:Y,TopBar:at},setup(){const t=c(),e=(0,I.IL)([]),n=(0,I.IL)(0),o=(0,s.S6)((()=>t.isLoading)),i=(0,s.S6)((()=>t.getUserData));(0,s.u2)((async()=>{try{const o=t.accessToken;if(!o)return;const i=await G(o),s=await O(o);t.setUserData(i),e.value=s,n.value=s.length}catch(o){console.error("Error fetching user Gists:",o)}}));const a=t=>Object.keys(t).join(", "),r=t=>{const e=new Date,n=new Date(t),o=e.getTime()-n.getTime(),i=o/36e5;if(0===i)return"Created now";if(i<24)return`Created ${Math.round(i)} hours ago`;if(i>48)return"Created yesterday";{const t={year:"numeric",month:"short",day:"numeric"};return n.toLocaleDateString(void 0,t)}},l=t=>Array.isArray(t)?t.length:"object"===typeof t&&null!==t?Object.keys(t).length:0;return{gists:e,userData:i,countGists:n,getFileNames:a,formatDate:r,isLoading:o,getCount:l}}};const ct=(0,m.c)(rt,[["render",_],["__scopeId","data-v-44a2d07d"]]);var lt=ct;const ut={class:"flex items-center justify-center h-screen"};function dt(t,e,n,o,i,a){return(0,s.Wz)(),(0,s.An)("div",ut,[(0,s.QD)("button",{class:"github-btn",onClick:e[0]||(e[0]=(...t)=>o.login&&o.login(...t))}," Login with GitHub ")])}var ft={name:"LoginPage",setup(){const t=c(),e=(0,g.KX)();t.isAuthenticated&&e.push("/");const n="d9e20d499a3894452cdd",o=()=>{window.location.href=`https://github.com/login/oauth/authorize?client_id=${n}&scope=user,gist`};return{login:o}}};const gt=(0,m.c)(ft,[["render",dt],["__scopeId","data-v-3c2e5475"]]);var pt=gt;const mt=t=>((0,s.ED)("data-v-ee694bd6"),t=t(),(0,s.ii)(),t),ht={key:0},vt={key:1},yt={key:0,class:"container mx-auto mt-[70px] md:px-20 md:py-8 px-10 py-4"},bt={class:"inline-block sm:block"},Dt={class:"inline-block pr-7"},wt={class:"mt-5"},kt={class:"gist-file__header flex justify-between items-center h-12 px-5 py-1"},Ct=mt((()=>(0,s.QD)("i",{class:"fa-solid fa-code text-xs"},null,-1))),At={class:"ml-2 text-s"},xt=["href"],zt={class:"gist-file__content p-5"};function Et(t,e,n,o,i,a){const r=(0,s.E1)("PageLoader"),c=(0,s.E1)("TopBar"),l=(0,s.E1)("IconButton"),u=(0,s.E1)("ConfirmationDialog");return(0,s.Wz)(),(0,s.An)("div",null,[o.isLoading?((0,s.Wz)(),(0,s.An)("div",ht,[(0,s.K2)(r)])):((0,s.Wz)(),(0,s.An)("div",vt,[(0,s.K2)(c,{"page-title":"Gist Detail"}),o.gist?((0,s.Wz)(),(0,s.An)("div",yt,[(0,s.QD)("div",bt,[(0,s.QD)("h2",Dt,(0,y.WA)(o.gist.description||"Untitled"),1),(0,s.K2)(l,{"icon-class":"fa-regular fa-trash-can",label:"Remove",size:"sm",color:"yellow",class:"float-right ml-2 min-w-[80px]",border:!0,onClick:o.showConfirmationDialog},null,8,["onClick"]),(0,s.K2)(l,{"icon-class":"fa-regular fa-pen-to-square",label:"Edit",size:"sm",color:"yellow",class:"float-right min-w-[80px]",border:!0,onClick:o.editGist},null,8,["onClick"]),(0,s.K2)(u,{"is-visible":o.isConfirmationDialogVisible,onConfirm:o.onRemoveGist,onCancel:o.hideConfirmationDialog},null,8,["is-visible","onConfirm","onCancel"])]),(0,s.QD)("ul",wt,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(o.gist.files,((t,e)=>((0,s.Wz)(),(0,s.An)("li",{key:e,class:"mb-3 gist-file"},[(0,s.QD)("div",kt,[Ct,(0,s.QD)("span",At,(0,y.WA)(e),1),(0,s.QD)("a",{href:t.raw_url,target:"_blank",class:"float-right"},"raw",8,xt)]),(0,s.QD)("div",zt,[(0,s.QD)("pre",null,(0,y.WA)(t.content),1)])])))),128))])])):(0,s.g1)("",!0)]))])}const Wt=t=>{const e=new Date(t);return e.toLocaleDateString()},Lt={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"},Qt={class:"bg-white p-8 rounded-lg"},_t=(0,s.QD)("h2",{class:"text-lg"}," Are you sure you want to delete this gist? ",-1),It={class:"flex justify-end mt-3"};function St(t,e,n,o,i,a){return n.isVisible?((0,s.Wz)(),(0,s.An)("div",Lt,[(0,s.QD)("div",Qt,[_t,(0,s.QD)("div",It,[(0,s.QD)("button",{class:"bg-red-500 text-white px-4 py-2 rounded mr-2",onClick:e[0]||(e[0]=(...t)=>o.confirm&&o.confirm(...t))}," Delete "),(0,s.QD)("button",{class:"bg-gray-300 text-gray-800 px-4 py-2 rounded",onClick:e[1]||(e[1]=(...t)=>o.cancel&&o.cancel(...t))}," Cancel ")])])])):(0,s.g1)("",!0)}var jt={props:{isVisible:{type:Boolean,default:!1}},setup(t,{emit:e}){const n=()=>{e("confirm")},o=()=>{e("cancel")};return{confirm:n,cancel:o}}};const Tt=(0,m.c)(jt,[["render",St]]);var Gt=Tt,Ot={name:"GistDetail",components:{PageLoader:X,TopBar:at,IconButton:Y,ConfirmationDialog:Gt},setup(){const t=(0,g.MJ)(),e=(0,g.KX)(),n=c(),o=(0,I.IL)(null),i=(0,I.IL)(!1),a=(0,s.S6)((()=>n.isLoading)),r=t.params.id,l=(0,I.IL)(!1);(0,s.u2)((async()=>{try{const t=n.accessToken;if(!t)return;const e=await K(r);o.value=e}catch(t){console.error("Error fetching user Gist Detail:",t)}}));const u=t=>Object.keys(t).join(", "),d=()=>{i.value=!1},f=()=>{e.push({name:"EditGist",params:{id:r}})},p=()=>{l.value=!0},m=()=>{l.value=!1},h=async()=>{try{await $(r);e.push("/")}catch(t){m(),console.error("Error deleting Gist",t)}};return{gist:o,getFileNames:u,formatDate:Wt,isEditing:i,editGist:f,cancelEdit:d,isLoading:a,isConfirmationDialogVisible:l,showConfirmationDialog:p,hideConfirmationDialog:m,onRemoveGist:h}}};const Kt=(0,m.c)(Ot,[["render",Et],["__scopeId","data-v-ee694bd6"]]);var Bt=Kt;const $t={key:0},Ut={key:1},Pt={key:0,class:"container mx-auto mt-[70px] md:px-20 md:py-8 px-10 py-4"},Nt={class:"inline-block w-full sm:w-1/2 pr-7"},Ft={class:"mt-5"};function Jt(t,e,n,o,i,a){const r=(0,s.E1)("PageLoader"),c=(0,s.E1)("TopBar"),l=(0,s.E1)("IconButton"),u=(0,s.E1)("CodeEditor");return(0,s.Wz)(),(0,s.An)("div",null,[o.isLoading?((0,s.Wz)(),(0,s.An)("div",$t,[(0,s.K2)(r)])):((0,s.Wz)(),(0,s.An)("div",Ut,[(0,s.K2)(c,{"page-title":"Edit Gist"}),o.gist?((0,s.Wz)(),(0,s.An)("div",Pt,[(0,s.QD)("h2",Nt," Editing "+(0,y.WA)(o.gist.description||"Untitled"),1),(0,s.K2)(l,{"icon-class":"fa-regular fa-floppy-disk",label:"Save",size:"sm",color:"yellow",class:"float-right min-w-[80px]",border:!0,onClick:o.saveChanges},null,8,["onClick"]),(0,s.QD)("ul",Ft,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(o.gist.files,((t,e)=>((0,s.Wz)(),(0,s.Az)(u,{key:e,filename:e,content:t.content,language:t.language,onUpdateContent:n=>o.handleUpdateContent(t,e,n)},null,8,["filename","content","language","onUpdateContent"])))),128))])])):(0,s.g1)("",!0)]))])}function Vt(t,e,n,o,i,a){const r=(0,s.E1)("v-ace-editor");return(0,s.Wz)(),(0,s.An)("div",null,[(0,s.QD)("p",null,(0,y.WA)(n.filename),1),(0,s.K2)(r,{value:o.editorContent,mode:o.mode,theme:"chrome",style:{height:"300px"},onInput:o.updateContent,onInit:o.editorInit},null,8,["value","mode","onInput","onInit"])])}var Rt=n(6620),Xt={components:{VAceEditor:Rt.o},props:["filename","content","language"],setup(t,{emit:e}){const n=(0,I.IL)(t.content||"a");let o=null;const i=r(t.language),s=t=>{o=t},a=()=>{if(o){const t=o.getValue();e("updateContent",t)}};function r(t){switch(t.toLowerCase()){case"javascript":return"javascript";case"html":return"htmlmixed";case"css":return"css";default:return""}}return{editorContent:n,mode:i,editorInit:s,updateContent:a}}};const qt=(0,m.c)(Xt,[["render",Vt]]);var Mt=qt,Ht={name:"EditGist",components:{PageLoader:X,TopBar:at,IconButton:Y,CodeEditor:Mt},setup(){const t=(0,g.MJ)(),e=(0,g.KX)(),n=c(),o=(0,s.S6)((()=>n.isLoading)),i=(0,I.IL)(null),a=t.params.id;(0,s.u2)((async()=>{try{const t=await K(a);i.value=t}catch(t){console.error("Error fetching user Gist Detail:",t)}}));const r=async()=>{try{await B(a,i.value.files);e.push({name:"GistDetail",params:{id:a}})}catch(t){console.error("Error saving changes:",t)}},l=(t,e,n)=>{i.value&&i.value.files&&i.value.files[e]&&(i.value.files[e].content=n)};return{gist:i,isLoading:o,formatDate:Wt,saveChanges:r,handleUpdateContent:l}}};const Yt=(0,m.c)(Ht,[["render",Jt]]);var Zt=Yt;const te="/gists-manager/",ee=[{path:"/",name:"GistList",component:lt,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:pt},{path:"/gist/:id",name:"GistDetail",component:Bt},{path:"/gist/:id/edit",name:"EditGist",component:Zt}];console.log("base url: ",te);const ne=(0,g.gv)({history:(0,g.oz)(te),routes:ee});ne.beforeEach(((t,e,n)=>{const o=c();t.matched.some((t=>t.meta.requiresAuth))?o.isAuthenticated?n():n("/login"):n()}));var oe=ne;n(7144);const ie=(0,i.Kw)(),se=(0,o.W0)(v);se.use(ie),se.use(oe),se.use(S.cp),se.mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var t=[];n.O=function(e,o,i,s){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],s=t[u][2];for(var r=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(r=!1,s<a&&(a=s));if(r){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,i,s]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,a=o[0],r=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var u=c(n)}for(e&&e(o);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self["webpackChunkgithub_gists_manager"]=self["webpackChunkgithub_gists_manager"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[999],(function(){return n(6096)}));o=n.O(o)})();
//# sourceMappingURL=app.c47c4d41.js.map
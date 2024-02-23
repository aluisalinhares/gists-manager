(function(){"use strict";var t={2536:function(t,e,n){var s=n(5328),o=n(8464),i=n(6760);const a={id:"app"};function c(t,e,n,s,o,c){const r=(0,i.E1)("router-view");return(0,i.Wz)(),(0,i.An)("div",a,[(0,i.K2)(r)])}n(3248),n(2168),n(5104),n(8312);const r=(0,o.O6)("auth",{state:()=>({isAuthenticated:!1,accessToken:"",userData:{},loading:!1}),actions:{initializeAccessToken(){const t=localStorage.getItem("accessToken"),e=localStorage.getItem("userData");this.accessToken=t||"",this.isAuthenticated=!!t,this.userData=e?JSON.parse(e):{}},login(t){this.$patch((e=>{e.accessToken=t,e.isAuthenticated=!0})),localStorage.setItem("accessToken",t)},setUserData(t){this.userData=t,localStorage.setItem("userData",JSON.stringify(t))},setLoading(t){this.loading=t}},getters:{isLoading(){return this.loading},getUserData(){return this.userData}}});const l={accessToken:"/api/access_token",getUser:"/api/user",getGists:"/api/gists"},u={accessToken:"https://github.com/login/oauth/access_token",getUser:"https://api.github.com/user",getGists:"https://api.github.com/gists"},d="d9e20d499a3894452cdd",g="bb31e83cd0fff1cf60db4305e8b9ef3f168f41b4";async function p(t){try{const e=u.accessToken,n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({client_id:d,client_secret:g,code:t})});if(!n.ok)throw new Error("Failed to fetch access token");const s=await n.json();return s.access_token}catch(e){throw console.error("Error fetching access token:",e),e}}var f=n(5216),m={name:"App",setup(){const t=r(),e=(0,f.KX)();async function n(){try{const n=new URLSearchParams(window.location.search).get("code"),s=await p(n);t.login(s),e.push("/")}catch(n){console.log("Error fetching access token:",n)}}return(0,i.u2)((()=>{t.initializeAccessToken(),window.location.search.includes("code")&&n()})),{}}},h=n(8152);const v=(0,h.c)(m,[["render",c]]);var b=v,y=n(8752);const D=t=>((0,i.ED)("data-v-44a2d07d"),t=t(),(0,i.ii)(),t),w={key:0},k={key:1,class:"gistList"},C={class:"container mx-auto mt-[70px] md:px-20 md:py-8 px-10 py-4"},A={class:"gistList__header flex items-center"},x=D((()=>(0,i.QD)("h2",null,"All gists",-1))),z={key:0,class:"counter rounded-full w-6 h-6 flex justify-center items-center ml-2"},E={class:"text-white"},W={class:"actions"},L={class:"flex flex-col md:flex-row justify-between py-2"},Q={class:"pt-2"},_={class:"flex gap-5"};function G(t,e,n,s,o,a){const c=(0,i.E1)("PageLoader"),r=(0,i.E1)("TopBar"),l=(0,i.E1)("router-link"),u=(0,i.E1)("IconButton");return(0,i.Wz)(),(0,i.An)("div",null,[s.isLoading?((0,i.Wz)(),(0,i.An)("div",w,[(0,i.K2)(c)])):((0,i.Wz)(),(0,i.An)("div",k,[(0,i.K2)(r),(0,i.QD)("div",C,[(0,i.QD)("div",null,[(0,i.QD)("div",A,[x,s.countGists?((0,i.Wz)(),(0,i.An)("div",z,[(0,i.QD)("span",E,(0,y.WA)(s.countGists),1)])):(0,i.g1)("",!0)]),(0,i.QD)("div",W,[(0,i.oF)(t.$slots,"customButtons",{},void 0,!0)])]),(0,i.QD)("ul",null,[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(s.gists,(t=>((0,i.Wz)(),(0,i.An)("li",{key:t.id},[(0,i.QD)("div",L,[(0,i.QD)("div",Q,[(0,i.K2)(l,{to:{name:"GistDetail",params:{id:t.id}}},{default:(0,i.Ql)((()=>[(0,i.mY)((0,y.WA)(Object.keys(t.files)[0]||"Untitled"),1)])),_:2},1032,["to"]),(0,i.QD)("p",null,(0,y.WA)(s.formatDate(t.created_at)),1),(0,i.QD)("p",null,(0,y.WA)(t.description||"Untitled"),1)]),(0,i.QD)("div",_,[(0,i.K2)(u,{"icon-class":"far fa-file",label:s.getCount(t.files),size:"sm"},null,8,["label"]),(0,i.K2)(u,{"icon-class":"far fa-comment",label:t.comments,size:"sm"},null,8,["label"])])])])))),128))])])]))])}var S=n(8568),T=n(1288);const I="production";async function j(t,e={}){const n=(0,T.Wo)();try{const n=r(),s=n.accessToken;n.setLoading(!0);const o={...e,headers:{...e.headers,Authorization:`token ${s}`}},i=await fetch(t,o);if(!i.ok)throw new Error("Failed to fetch data");return n.setLoading(!1),204===i.status?null:await i.json()}catch(s){throw authStore.setLoading(!1),n.error(`Operation failed: ${s.message}`,{position:"top-right",timeout:3e3}),s}}async function O(t){const e="production"===I?u.getUser:l.getUser;return await j(e,{})}async function K(t){const e=(new Date).getTime();let n="production"===I?u.getGists:l.getGists;n=`${n}?timestamp=${e}`;const s={headers:{"Cache-Control":"no-cache"}};return await j(n,s)}async function B(t){const e=(new Date).getTime();let n="production"===I?u.getGists:l.getGists;return n=`${n}/${t}?timestamp=${e}`,await j(n,{})}async function U(t,e){const n=(0,T.Wo)();let s="production"===I?u.getGists:l.getGists;s=`${s}/${t}`;const o={method:"PATCH",headers:{Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:e})},i=await j(s,o);return n.success("Edit was successful",{position:"top-right",timeout:3e3}),i}async function $(t){const e=(0,T.Wo)();let n="production"===I?u.getGists:l.getGists;n=`${n}/${t}`;const s={method:"DELETE"},o=await j(n,s);return e.success("Delete was successful",{position:"top-right",timeout:3e3}),o}const P=t=>((0,i.ED)("data-v-eee31c6e"),t=t(),(0,i.ii)(),t),N={class:"flex items-center justify-center min-h-screen"},F=P((()=>(0,i.QD)("div",{class:"lds-bounce"},[(0,i.QD)("div"),(0,i.QD)("div")],-1))),J=[F];function V(t,e){return(0,i.Wz)(),(0,i.An)("div",N,J)}const R={},X=(0,h.c)(R,[["render",V],["__scopeId","data-v-eee31c6e"]]);var q=X;function M(t,e,n,s,o,a){return(0,i.Wz)(),(0,i.An)("button",{class:(0,y.WN)([s.buttonClasses,"icon-button",n.border?`icon-button--border-${n.color||"default"}`:"",n.color?`icon-button--${n.color}`:"icon-button--default"]),onClick:e[0]||(e[0]=(...t)=>s.handleClick&&s.handleClick(...t))},[(0,i.QD)("i",{class:(0,y.WN)([n.iconClass,s.iconSizeClass])},null,2),void 0!==n.label?((0,i.Wz)(),(0,i.An)("div",{key:0,class:(0,y.WN)([s.labelSizeClass,"pl-1"])},(0,y.WA)(n.label),3)):(0,i.g1)("",!0)],2)}var H={name:"IconButton",props:{iconClass:String,label:String,count:Number,onClick:Function,size:{type:String,default:"md"},border:{type:Boolean,default:!1},color:{type:String,default:"default"}},setup(t){const e=()=>{t.onClick&&t.onClick()},n=(0,i.S6)((()=>["icon-button","sm"===t.size&&"text-sm","md"===t.size&&"text-base","lg"===t.size&&"text-lg"])),s=(0,i.S6)((()=>"icon-"+t.size)),o=(0,i.S6)((()=>"label-"+t.size));return{handleClick:e,buttonClasses:n,iconSizeClass:s,labelSizeClass:o}}};const Y=(0,h.c)(H,[["render",M],["__scopeId","data-v-9093bf48"]]);var Z=Y;const tt={class:"topBar h-[70px] fixed top-0 left-0 w-full px-12 py-5 border-b-2 flex items-center justify-between"},et={class:"text-start"},nt={class:""},st={class:"actions"};function ot(t,e,n,s,o,a){const c=(0,i.E1)("router-link");return(0,i.Wz)(),(0,i.An)("div",tt,[(0,i.QD)("h1",et,[(0,i.K2)(c,{class:"text-lg topBar_name",to:"/"},{default:(0,i.Ql)((()=>[(0,i.mY)((0,y.WA)(s.userData.login),1)])),_:1})]),(0,i.QD)("div",nt,[(0,i.QD)("div",st,[(0,i.oF)(t.$slots,"customButtons",{},void 0,!0)])])])}var it={props:{pageTitle:String,count:Number},setup(){const t=r(),e=(0,i.S6)((()=>t.getUserData));return{userData:e}}};const at=(0,h.c)(it,[["render",ot],["__scopeId","data-v-525ed7f2"]]);var ct=at,rt={name:"GistList",components:{PageLoader:q,IconButton:Z,TopBar:ct},setup(){const t=r(),e=(0,S.IL)([]),n=(0,S.IL)(0),s=(0,i.S6)((()=>t.isLoading)),o=(0,i.S6)((()=>t.getUserData));(0,i.u2)((async()=>{try{const s=t.accessToken;if(!s)return;const o=await O(s),i=await K(s);t.setUserData(o),e.value=i,n.value=i.length}catch(s){console.error("Error fetching user Gists:",s)}}));const a=t=>Object.keys(t).join(", "),c=t=>{const e=new Date,n=new Date(t),s=e.getTime()-n.getTime(),o=s/36e5;if(0===o)return"Created now";if(o<24)return`Created ${Math.round(o)} hours ago`;if(o>48)return"Created yesterday";{const t={year:"numeric",month:"short",day:"numeric"};return n.toLocaleDateString(void 0,t)}},l=t=>Array.isArray(t)?t.length:"object"===typeof t&&null!==t?Object.keys(t).length:0;return{gists:e,userData:o,countGists:n,getFileNames:a,formatDate:c,isLoading:s,getCount:l}}};const lt=(0,h.c)(rt,[["render",G],["__scopeId","data-v-44a2d07d"]]);var ut=lt;const dt={class:"flex items-center justify-center h-screen"};function gt(t,e,n,s,o,a){return(0,i.Wz)(),(0,i.An)("div",dt,[(0,i.QD)("button",{class:"github-btn",onClick:e[0]||(e[0]=(...t)=>s.login&&s.login(...t))}," Login with GitHub ")])}var pt={name:"LoginPage",setup(){const t=r(),e=(0,f.KX)();t.isAuthenticated&&e.push("/");const n="d9e20d499a3894452cdd",s=()=>{window.location.href=`https://github.com/login/oauth/authorize?client_id=${n}&scope=user,gist`};return{login:s}}};const ft=(0,h.c)(pt,[["render",gt],["__scopeId","data-v-3c2e5475"]]);var mt=ft;const ht=t=>((0,i.ED)("data-v-ee694bd6"),t=t(),(0,i.ii)(),t),vt={key:0},bt={key:1},yt={key:0,class:"container mx-auto mt-[70px] md:px-20 md:py-8 px-10 py-4"},Dt={class:"inline-block sm:block"},wt={class:"inline-block pr-7"},kt={class:"mt-5"},Ct={class:"gist-file__header flex justify-between items-center h-12 px-5 py-1"},At=ht((()=>(0,i.QD)("i",{class:"fa-solid fa-code text-xs"},null,-1))),xt={class:"ml-2 text-s"},zt=["href"],Et={class:"gist-file__content p-5"};function Wt(t,e,n,s,o,a){const c=(0,i.E1)("PageLoader"),r=(0,i.E1)("TopBar"),l=(0,i.E1)("IconButton"),u=(0,i.E1)("ConfirmationDialog");return(0,i.Wz)(),(0,i.An)("div",null,[s.isLoading?((0,i.Wz)(),(0,i.An)("div",vt,[(0,i.K2)(c)])):((0,i.Wz)(),(0,i.An)("div",bt,[(0,i.K2)(r,{"page-title":"Gist Detail"}),s.gist?((0,i.Wz)(),(0,i.An)("div",yt,[(0,i.QD)("div",Dt,[(0,i.QD)("h2",wt,(0,y.WA)(s.gist.description||"Untitled"),1),(0,i.K2)(l,{"icon-class":"fa-regular fa-trash-can",label:"Remove",size:"sm",color:"yellow",class:"float-right ml-2 min-w-[80px]",border:!0,onClick:s.showConfirmationDialog},null,8,["onClick"]),(0,i.K2)(l,{"icon-class":"fa-regular fa-pen-to-square",label:"Edit",size:"sm",color:"yellow",class:"float-right min-w-[80px]",border:!0,onClick:s.editGist},null,8,["onClick"]),(0,i.K2)(u,{"is-visible":s.isConfirmationDialogVisible,onConfirm:s.onRemoveGist,onCancel:s.hideConfirmationDialog},null,8,["is-visible","onConfirm","onCancel"])]),(0,i.QD)("ul",kt,[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(s.gist.files,((t,e)=>((0,i.Wz)(),(0,i.An)("li",{key:e,class:"mb-3 gist-file"},[(0,i.QD)("div",Ct,[At,(0,i.QD)("span",xt,(0,y.WA)(e),1),(0,i.QD)("a",{href:t.raw_url,target:"_blank",class:"float-right"},"raw",8,zt)]),(0,i.QD)("div",Et,[(0,i.QD)("pre",null,(0,y.WA)(t.content),1)])])))),128))])])):(0,i.g1)("",!0)]))])}const Lt=t=>{const e=new Date(t);return e.toLocaleDateString()},Qt={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"},_t={class:"bg-white p-8 rounded-lg"},Gt=(0,i.QD)("h2",{class:"text-lg"}," Are you sure you want to delete this gist? ",-1),St={class:"flex justify-end mt-3"};function Tt(t,e,n,s,o,a){return n.isVisible?((0,i.Wz)(),(0,i.An)("div",Qt,[(0,i.QD)("div",_t,[Gt,(0,i.QD)("div",St,[(0,i.QD)("button",{class:"bg-red-500 text-white px-4 py-2 rounded mr-2",onClick:e[0]||(e[0]=(...t)=>s.confirm&&s.confirm(...t))}," Delete "),(0,i.QD)("button",{class:"bg-gray-300 text-gray-800 px-4 py-2 rounded",onClick:e[1]||(e[1]=(...t)=>s.cancel&&s.cancel(...t))}," Cancel ")])])])):(0,i.g1)("",!0)}var It={props:{isVisible:{type:Boolean,default:!1}},setup(t,{emit:e}){const n=()=>{e("confirm")},s=()=>{e("cancel")};return{confirm:n,cancel:s}}};const jt=(0,h.c)(It,[["render",Tt]]);var Ot=jt,Kt={name:"GistDetail",components:{PageLoader:q,TopBar:ct,IconButton:Z,ConfirmationDialog:Ot},setup(){const t=(0,f.MJ)(),e=(0,f.KX)(),n=r(),s=(0,S.IL)(null),o=(0,S.IL)(!1),a=(0,i.S6)((()=>n.isLoading)),c=t.params.id,l=(0,S.IL)(!1);(0,i.u2)((async()=>{try{const t=n.accessToken;if(!t)return;const e=await B(c);s.value=e}catch(t){console.error("Error fetching user Gist Detail:",t)}}));const u=t=>Object.keys(t).join(", "),d=()=>{o.value=!1},g=()=>{e.push({name:"EditGist",params:{id:c}})},p=()=>{l.value=!0},m=()=>{l.value=!1},h=async()=>{try{await $(c);e.push("/")}catch(t){m(),console.error("Error deleting Gist",t)}};return{gist:s,getFileNames:u,formatDate:Lt,isEditing:o,editGist:g,cancelEdit:d,isLoading:a,isConfirmationDialogVisible:l,showConfirmationDialog:p,hideConfirmationDialog:m,onRemoveGist:h}}};const Bt=(0,h.c)(Kt,[["render",Wt],["__scopeId","data-v-ee694bd6"]]);var Ut=Bt;const $t={key:0},Pt={key:1},Nt={key:0,class:"container mx-auto mt-[70px] md:px-20 md:py-8 px-10 py-4"},Ft={class:"inline-block w-full sm:w-1/2 pr-7"},Jt={class:"mt-5"};function Vt(t,e,n,s,o,a){const c=(0,i.E1)("PageLoader"),r=(0,i.E1)("TopBar"),l=(0,i.E1)("IconButton"),u=(0,i.E1)("CodeEditor");return(0,i.Wz)(),(0,i.An)("div",null,[s.isLoading?((0,i.Wz)(),(0,i.An)("div",$t,[(0,i.K2)(c)])):((0,i.Wz)(),(0,i.An)("div",Pt,[(0,i.K2)(r,{"page-title":"Edit Gist"}),s.gist?((0,i.Wz)(),(0,i.An)("div",Nt,[(0,i.QD)("h2",Ft," Editing "+(0,y.WA)(s.gist.description||"Untitled"),1),(0,i.K2)(l,{"icon-class":"fa-regular fa-floppy-disk",label:"Save",size:"sm",color:"yellow",class:"float-right min-w-[80px]",border:!0,onClick:s.saveChanges},null,8,["onClick"]),(0,i.QD)("ul",Jt,[((0,i.Wz)(!0),(0,i.An)(i.ae,null,(0,i.mi)(s.gist.files,((t,e)=>((0,i.Wz)(),(0,i.Az)(u,{key:e,filename:e,content:t.content,language:t.language,onUpdateContent:n=>s.handleUpdateContent(t,e,n)},null,8,["filename","content","language","onUpdateContent"])))),128))])])):(0,i.g1)("",!0)]))])}function Rt(t,e,n,s,o,a){const c=(0,i.E1)("v-ace-editor");return(0,i.Wz)(),(0,i.An)("div",null,[(0,i.QD)("p",null,(0,y.WA)(n.filename),1),(0,i.K2)(c,{value:s.editorContent,mode:s.mode,theme:"chrome",style:{height:"300px"},onInput:s.updateContent,onInit:s.editorInit},null,8,["value","mode","onInput","onInit"])])}var Xt=n(6620),qt={components:{VAceEditor:Xt.o},props:["filename","content","language"],setup(t,{emit:e}){const n=(0,S.IL)(t.content||"a");let s=null;const o=c(t.language),i=t=>{s=t},a=()=>{if(s){const t=s.getValue();e("updateContent",t)}};function c(t){switch(t.toLowerCase()){case"javascript":return"javascript";case"html":return"htmlmixed";case"css":return"css";default:return""}}return{editorContent:n,mode:o,editorInit:i,updateContent:a}}};const Mt=(0,h.c)(qt,[["render",Rt]]);var Ht=Mt,Yt={name:"EditGist",components:{PageLoader:q,TopBar:ct,IconButton:Z,CodeEditor:Ht},setup(){const t=(0,f.MJ)(),e=(0,f.KX)(),n=r(),s=(0,i.S6)((()=>n.isLoading)),o=(0,S.IL)(null),a=t.params.id;(0,i.u2)((async()=>{try{const t=await B(a);o.value=t}catch(t){console.error("Error fetching user Gist Detail:",t)}}));const c=async()=>{try{await U(a,o.value.files);e.push({name:"GistDetail",params:{id:a}})}catch(t){console.error("Error saving changes:",t)}},l=(t,e,n)=>{o.value&&o.value.files&&o.value.files[e]&&(o.value.files[e].content=n)};return{gist:o,isLoading:s,formatDate:Lt,saveChanges:c,handleUpdateContent:l}}};const Zt=(0,h.c)(Yt,[["render",Vt]]);var te=Zt;const ee="/gists-manager/",ne=[{path:"/",name:"GistList",component:ut,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:mt},{path:"/gist/:id",name:"GistDetail",component:Ut},{path:"/gist/:id/edit",name:"EditGist",component:te}];console.log("base url: ",ee);const se=(0,f.gv)({history:(0,f.oz)(ee),routes:ne});se.beforeEach(((t,e,n)=>{const s=r();t.matched.some((t=>t.meta.requiresAuth))?s.isAuthenticated?n():n("/login"):n()}));var oe=se;n(7144);const ie=(0,o.Kw)(),ae=(0,s.W0)(b);ae.use(ie),ae.use(oe),ae.use(T.cp),ae.mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var t=[];n.O=function(e,s,o,i){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],o=t[u][1],i=t[u][2];for(var c=!0,r=0;r<s.length;r++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[r])}))?s.splice(r--,1):(c=!1,i<a&&(a=i));if(c){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,o,i]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,i,a=s[0],c=s[1],r=s[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(r)var u=r(n)}for(e&&e(s);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},s=self["webpackChunkgithub_gists_manager"]=self["webpackChunkgithub_gists_manager"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[999],(function(){return n(2536)}));s=n.O(s)})();
//# sourceMappingURL=app.f127e001.js.map
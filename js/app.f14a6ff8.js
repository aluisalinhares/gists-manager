(function(){"use strict";var n={2888:function(n,e,o){var t=o(5328),c=o(8464),i=o(6760);const s={id:"app"};function r(n,e,o,t,c,r){return(0,i.Wz)(),(0,i.An)("div",s,[(0,i.QD)("button",{onClick:e[0]||(e[0]=(...n)=>r.login&&r.login(...n))},"Login with GitHub")])}o(2168),o(5104),o(8312);const a=(0,c.O6)("auth",{state:()=>({accessToken:null}),actions:{setAccessToken(n){this.accessToken=n}}});const l="d9e20d499a3894452cdd",u="bb31e83cd0fff1cf60db4305e8b9ef3f168f41b4";console.log("process.env: ",{VUE_APP_GITHUB_CLIENT_ID:"d9e20d499a3894452cdd",VUE_APP_GITHUB_CLIENT_SECRET:"bb31e83cd0fff1cf60db4305e8b9ef3f168f41b4",NODE_ENV:"production",VUE_APP_GITHUB_PERSONAL_ACCESS_TOKEN:"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",BASE_URL:"/gists-manager/"}),console.log("Client",l,u);var f={name:"App",mounted(){console.log("mounted called"),window.location.search.includes("code")&&(console.log("includes code"),this.handleCallback())},methods:{async login(){window.location.href=`https://github.com/login/oauth/authorize?client_id=${l}&scope=user`},async handleCallback(){console.log("handleCallback called");const n=new URLSearchParams(window.location.search).get("code");console.log("code",n);personalAccessToken&&personalAccessToken,JSON.stringify({client_id:l,client_secret:u,code:n});const e=await fetch("https://github.com/login/oauth/access_token",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({client_id:l,client_secret:u,code:n})}),o=await e.json(),t=o.access_token;console.log("accessToken",t),localStorage.setItem("accessToken",t),window.location.href="/test",a().setAccessToken(t)}}},d=o(8152);const h=(0,d.c)(f,[["render",r]]);var p=h;const g=(0,c.Kw)(),b=(0,t.W0)(p);b.use(g),b.mount("#app")}},e={};function o(t){var c=e[t];if(void 0!==c)return c.exports;var i=e[t]={exports:{}};return n[t].call(i.exports,i,i.exports,o),i.exports}o.m=n,function(){var n=[];o.O=function(e,t,c,i){if(!t){var s=1/0;for(u=0;u<n.length;u++){t=n[u][0],c=n[u][1],i=n[u][2];for(var r=!0,a=0;a<t.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((function(n){return o.O[n](t[a])}))?t.splice(a--,1):(r=!1,i<s&&(s=i));if(r){n.splice(u--,1);var l=c();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[t,c,i]}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var c,i,s=t[0],r=t[1],a=t[2],l=0;if(s.some((function(e){return 0!==n[e]}))){for(c in r)o.o(r,c)&&(o.m[c]=r[c]);if(a)var u=a(o)}for(e&&e(t);l<s.length;l++)i=s[l],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(u)},t=self["webpackChunkgithub_gists_manager"]=self["webpackChunkgithub_gists_manager"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[999],(function(){return o(2888)}));t=o.O(t)})();
//# sourceMappingURL=app.f14a6ff8.js.map
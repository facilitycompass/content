(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return o}));var r=n("dSyh"),i=n("kBU6");const o=t=>new Promise((e,n)=>{Object(r.m)(()=>{a(t),s(t).then(n=>{n.animation&&n.animation.destroy(),c(t),e(n)},e=>{c(t),n(e)})})}),a=t=>{const e=t.enteringEl,n=t.leavingEl;C(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),v(e,!1),n&&v(n,!1)},s=async t=>{const e=await l(t);return e?u(e,t):d(t)},c=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await(()=>n.e(102).then(n.bind(null,"Lu00")))()).iosTransitionAnimation:(await(()=>n.e(103).then(n.bind(null,"wxTh")))()).mdTransitionAnimation},u=async(t,e)=>{let r;await h(e,!0);try{const i=await n.e(6).then(n.bind(null,"gHMO"));r=await i.create(t,e.baseEl,e)}catch(o){r=t(e.baseEl,e)}m(e.enteringEl,e.leavingEl);const i=await f(r,e);return e.progressCallback&&e.progressCallback(void 0),i&&g(e.enteringEl,e.leavingEl),{hasCompleted:i,animation:r}},d=async t=>{const e=t.enteringEl,n=t.leavingEl;return await h(t,!1),m(e,n),g(e,n),{hasCompleted:!0}},h=async(t,e)=>{const n=(void 0!==t.deepWait?t.deepWait:e)?[b(t.enteringEl),b(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)];await Promise.all(n),await p(t.viewIsReady,t.enteringEl)},p=async(t,e)=>{t&&await t(e)},f=(t,e)=>{const n=e.progressCallback,r=new Promise(e=>{t.onFinish(n=>{"number"==typeof n?e(1===n):void 0!==t.hasCompleted&&e(t.hasCompleted)})});return n?(t.progressStart(!0),n(t)):t.play(),r},m=(t,e)=>{w(e,i.c),w(t,i.a)},g=(t,e)=>{w(t,i.b),w(e,i.d)},w=(t,e)=>{if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},y=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),b=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(b))}},v=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},C=(t,e,n)=>{void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")},E=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},"6cUc":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("8Y7J");let i=(()=>{class t{constructor(){this.item=null}setCurrentItem(t){this.item=t}getCurrentItem(){return this.item}}return t.ngInjectableDef=r.Kb({factory:function(){return new t},token:t,providedIn:"root"}),t})()},Dl6n:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s}));const r=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n)}return!1}},OaAi:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("t8sF"),i=n("ZZ/e"),o=n("yTNM"),a=n("8Y7J");let s=(()=>{class t{constructor(t,e,n,r){this.file=t,this.alertController=e,this.api=n,this.platform=r,this.localCache={}}ensureLogin(){return new Promise((t,e)=>{this.api.isLoggedIn()?t():this.alertController.create({header:"Sign in",inputs:[{name:"Email",type:"text",placeholder:"Email Address"},{name:"Password",type:"password",placeholder:"Password"}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Sign in",handler:e=>{this.api.post("account/login-token",{u:e.Email,p:e.Password}).subscribe(e=>{!0===e.success&&e.token?(this.api.setToken(e.token),t()):this.alertController.create({header:"Alert",subHeader:"Sign in",message:e.message||"Sign in failed.",buttons:["OK"]})})}}]}).then(t=>{t.present()})})}getCached(t,e,n){return new Promise((r,i)=>{this.getFromLocalCache(t).then(i=>{null!=i&&r(i),n.then(n=>{r(n),this.writeToLocalCache(t,e,n)})})})}writeToLocalCache(t,e,n){const r={data:n,expiry:new Date((new Date).getTime()+60*e*1e3)},i=`cache_${t}.json`;return this.localCache[t]=r,this.platform.is("cordova")?this.file.writeFile(this.file.dataDirectory,i,JSON.stringify(r),{replace:!0,append:!1}):new Promise(t=>t())}isCacheExpired(t){return null===t||new Date(t.expiry).getTime()<=(new Date).getTime()}deleteAllCache(){this.file.listDir(this.file.dataDirectory,"").then(t=>{t.forEach(t=>{this.file.removeFile(this.file.dataDirectory,t.name)})})}getFromLocalCache(t){return new Promise((e,n)=>{if(this.localCache[t]&&!this.isCacheExpired(this.localCache[t]))return void e(this.localCache[t].data);this.platform.is("cordova")||e(null);const r=`cache_${t}.json`;this.file.checkFile(this.file.dataDirectory,r).then(t=>{!0===t?this.file.readAsText(this.file.dataDirectory,r).then(t=>{this.isCacheExpired(t)?e(null):e(JSON.parse(t).data)}).catch(t=>e(null)):e(null)}).catch(t=>e(null))})}}return t.ngInjectableDef=a.Kb({factory:function(){return new t(a.Lb(r.a),a.Lb(i.b),a.Lb(o.a),a.Lb(i.Jb))},token:t,providedIn:"root"}),t})()},YtD4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>{try{if("string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,s.forEach(t=>{const n=e.querySelectorAll(t);for(let r=n.length-1;r>=0;r--){const t=n[r];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const a=o(t);for(let e=0;e<a.length;e++)i(a[e])}});const r=o(e);for(let t=0;t<r.length;t++)i(r[t]);const a=document.createElement("div");a.appendChild(e);const c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),r=e.name;if(!a.includes(r.toLowerCase())){t.removeAttribute(r);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=o(t);for(let n=0;n<e.length;n++)i(e[n])},o=t=>null!=t.children?t.children:t.childNodes,a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},"j+vm":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("9B/o"),i=n("6cUc"),o=n("8Y7J"),a=n("iInd");let s=(()=>{class t{constructor(t,e,n){this.iab=t,this.router=e,this.videoContext=n}openExternalLink(t){window.open(t,"_system")}onClick(t){switch(t.type){case 1:this.videoContext.setCurrentItem(t),this.router.navigate(["video-player"]),this.saveToHistory(t);break;case 4:this.openExternalLink(t.url);break;case 5:this.router.navigate(["listing",{parentId:t.id,showLinkedItems:1}])}}saveToHistory(t){const e=window.localStorage,n=JSON.parse(e.getItem("history"))||[];n.unshift({i:t.id,t:t.title,p:t.thumbnailUrl}),n.length>10&&n.pop(),e.setItem("history",JSON.stringify(n))}}return t.ngInjectableDef=o.Kb({factory:function(){return new t(o.Lb(r.a),o.Lb(a.m),o.Lb(i.a))},token:t,providedIn:"root"}),t})()},m9yc:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));const r=async(t,e,n,r,i)=>{if(t)return t.attachViewToDom(e,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"nN+u":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));const r=(t,e,n)=>{const r=new MutationObserver(t=>{n(i(t,e))});return r.observe(t,{childList:!0,subtree:!0}),r},i=(t,e)=>{let n;return t.forEach(t=>{for(let r=0;r<t.addedNodes.length;r++)n=o(t.addedNodes[r],e)||n}),n},o=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find(t=>!0===t.checked)}},opz7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return r}));const r=()=>{const t=window.TapticEngine;t&&t.selection()},i=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},qaSm:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));class r{constructor(t,e){this.x=t,this.y=e}}const i=(t,e,n,r,i)=>{const s=a(t.y,e.y,n.y,r.y,i);return o(t.x,e.x,n.x,r.x,s[0])},o=(t,e,n,r,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-t*Math.pow(i-1,3),a=(t,e,n,r,i)=>s((r-=i)-3*(n-=i)+3*(e-=i)-(t-=i),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),s=(t,e,n,r)=>{if(0===t)return((t,e,n)=>{const r=e*e-4*t*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*t),(-e-Math.sqrt(r))/(2*t)]})(e,n,r);const i=(3*(n/=t)-(e/=t)*e)/3,o=(2*e*e*e-9*e*n+27*(r/=t))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];const a=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===a)return[Math.pow(o/2,.5)-e/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-e/3];const s=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(c/3)-e/3,l*Math.cos((c+2*Math.PI)/3)-e/3,l*Math.cos((c+4*Math.PI)/3)-e/3]}},yTNM:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("IheW"),i=n("8Y7J");let o=(()=>{class t{constructor(t){this.http=t,this.url="https://bosewana.com/api/",this.token="",null!=localStorage.getItem("t01")&&(this.token=localStorage.getItem("t01"))}get(t,e){if(null!=e){let n=t.indexOf("?")>-1?"":"?";for(const t in e)e.hasOwnProperty(t)&&(n+=(n.length>1?"&":"")+t+"="+encodeURIComponent(e[t]));t+=n}return this.http.get(`${this.url}${t}`,{headers:this.getHeaders()})}post(t,e){return this.http.post(`${this.url}${t}`,e,{headers:this.getHeaders()})}getHeaders(){let t=(new r.g).set("Content-Type","application/json");return this.token.length>0&&(t=t.set("Authorization",this.token)),t}isLoggedIn(){return null!=this.token&&this.token.length>0}logOut(){localStorage.removeItem("t01"),this.token=""}setToken(t){this.token=t,localStorage.setItem("t01",this.token)}getAuthHeader(){return{Authorization:this.token}}}return t.ngInjectableDef=i.Kb({factory:function(){return new t(i.Lb(r.c))},token:t,providedIn:"root"}),t})()}}]);
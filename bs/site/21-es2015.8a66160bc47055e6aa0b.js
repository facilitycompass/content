(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"k9r/":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");let e=(()=>{class l{constructor(){this.item=null}setCurrentItem(l){this.item=l}getCurrentItem(){return this.item}}return l.ngInjectableDef=u.Hb({factory:function(){return new l},token:l,providedIn:"root"}),l})();var o=t("yTNM"),i=t("nSqr"),r=t("OaAi");class s{constructor(l,n,t,u,e,o,i,r,s){this.domSanitizer=l,this.videoContext=n,this.api=t,this.toastController=u,this.appLauncher=e,this.platform=o,this.alertCtrl=i,this.utils=r,this.router=s,this.item=null,this.trustedVideoUrl=null,this.title="",this.showYoutubeOptions=!1,this.showOpenInApp=!1,this.linkUrl="",this.item=this.videoContext.getCurrentItem()}ngOnInit(){let l=this.item.url;l=this.addOption(l,"autoplay","autoplay=1"),l=this.addOption(l,"rel","rel=0"),this.trustedVideoUrl=this.domSanitizer.bypassSecurityTrustResourceUrl(l),this.showYoutubeOptions=1===this.item.type,this.showOpenInApp=this.platform.is("hybrid"),this.linkUrl=this.item.url.replace("https://www.youtube.com/embed/","https://youtu.be/"),this.linkUrl=this.linkUrl.substring(0,l.indexOf("?"))}addOption(l,n,t){return-1===l.indexOf(n)?l+(-1===l.indexOf("?")?"?":"&")+t:l}openYoutube(){const l={};this.platform.is("ios")?l.uri="youtube://":l.packageName="com.google.android.youtube",this.appLauncher.canLaunch(l).then(l=>{}).catch(l=>{})}copyLink(){this.alertCtrl.create({inputs:[{name:"url",placeholder:"Url",value:this.linkUrl}],buttons:[{text:"Done",handler:l=>{console.log("done")}}]}).then(l=>l.present())}saveToMyItems(){this.item&&this.utils.ensureLogin().then(()=>{this.api.post("my-items/save",{userId:1,itemId:this.item.id,action:1}).subscribe(l=>{l.isSuccess&&this.toastController.create({position:"bottom",duration:2e3,message:"Saved to my list",buttons:[{side:"end",text:"View",handler:()=>{this.router.navigate(["/tabs/tab3"])}}]}).then(l=>{l.present()})})})}handleIFrameLoadEvent(){}}class a{}var b=t("pMnS"),c=t("MKJQ"),h=t("sZkV"),p=t("SVse"),d=t("cUpR"),m=t("iInd"),x=u.mb({encapsulation:0,styles:[[""]],data:{}});function k(l){return u.Eb(0,[(l()(),u.ob(0,0,null,null,0,"iframe",[["allow","autoplay; encrypted-media"],["allowfullscreen",""],["frameborder","0"],["style","width:100%; min-height: 300px"]],[[8,"src",5]],[[null,"load"]],(function(l,n,t){var u=!0;return"load"===n&&(u=!1!==l.component.handleIFrameLoadEvent()&&u),u}),null,null))],null,(function(l,n){l(n,0,0,n.component.trustedVideoUrl)}))}function f(l){return u.Eb(0,[(l()(),u.ob(0,0,null,null,2,"ion-thumbnail",[["slot","start"]],null,null,null,c.T,c.v)),u.nb(1,49152,null,0,h.wb,[u.h,u.k,u.x],null,null),(l()(),u.ob(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.component.item.authorPhotoUrl)}))}function g(l){return u.Eb(0,[(l()(),u.ob(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Db(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.item.author)}))}function v(l){return u.Eb(0,[(l()(),u.ob(0,0,null,null,11,"ion-header",[],null,null,null,c.G,c.i)),u.nb(1,49152,null,0,h.B,[u.h,u.k,u.x],null,null),(l()(),u.ob(2,0,null,0,9,"ion-toolbar",[],null,null,null,c.V,c.x)),u.nb(3,49152,null,0,h.zb,[u.h,u.k,u.x],null,null),(l()(),u.ob(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.B,c.d)),u.nb(5,49152,null,0,h.l,[u.h,u.k,u.x],null,null),(l()(),u.ob(6,0,null,0,2,"ion-back-button",[["text","Back"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.zb(l,8).onClick(t)&&e),e}),c.z,c.b)),u.nb(7,49152,null,0,h.g,[u.h,u.k,u.x],{text:[0,"text"]},null),u.nb(8,16384,null,0,h.h,[[2,h.fb],h.Eb,h.d],null,null),(l()(),u.ob(9,0,null,0,2,"ion-title",[],null,null,null,c.U,c.w)),u.nb(10,49152,null,0,h.xb,[u.h,u.k,u.x],null,null),(l()(),u.Db(11,0,["",""])),(l()(),u.ob(12,0,null,null,22,"ion-content",[],null,null,null,c.E,c.g)),u.nb(13,49152,null,0,h.u,[u.h,u.k,u.x],null,null),(l()(),u.ob(14,0,null,0,20,"ion-card",[],null,null,null,c.C,c.e)),u.nb(15,49152,null,0,h.m,[u.h,u.k,u.x],null,null),(l()(),u.db(16777216,null,0,1,null,k)),u.nb(17,16384,null,0,p.i,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.ob(18,0,null,0,9,"ion-item",[],null,null,null,c.K,c.m)),u.nb(19,49152,null,0,h.H,[u.h,u.k,u.x],null,null),(l()(),u.db(16777216,null,0,1,null,f)),u.nb(21,16384,null,0,p.i,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.ob(22,0,null,0,5,"ion-label",[["text-wrap",""]],null,null,null,c.L,c.n)),u.nb(23,49152,null,0,h.N,[u.h,u.k,u.x],null,null),(l()(),u.db(16777216,null,0,1,null,g)),u.nb(25,16384,null,0,p.i,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.ob(26,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),u.Db(27,null,["",""])),(l()(),u.ob(28,0,null,0,6,"section",[],null,null,null,null,null)),(l()(),u.ob(29,0,null,null,2,"ion-button",[["expand","block"],["target","_blank"]],null,null,null,c.A,c.c)),u.nb(30,49152,null,0,h.k,[u.h,u.k,u.x],{expand:[0,"expand"],href:[1,"href"],target:[2,"target"]},null),(l()(),u.Db(-1,0,["Open in YouTube"])),(l()(),u.ob(32,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.saveToMyItems()&&u),u}),c.A,c.c)),u.nb(33,49152,null,0,h.k,[u.h,u.k,u.x],{expand:[0,"expand"]},null),(l()(),u.Db(-1,0,["Save to My List"]))],(function(l,n){var t=n.component;l(n,7,0,"Back"),l(n,17,0,t.trustedVideoUrl),l(n,21,0,t.item.authorPhotoUrl),l(n,25,0,t.item.author),l(n,30,0,"block",t.linkUrl,"_blank"),l(n,33,0,"block")}),(function(l,n){var t=n.component;l(n,11,0,t.title),l(n,27,0,t.item.title)}))}function y(l){return u.Eb(0,[(l()(),u.ob(0,0,null,null,1,"app-video-player",[],null,null,null,v,x)),u.nb(1,114688,null,0,s,[d.b,e,o.a,h.Ib,i.a,h.Fb,h.b,r.a,m.m],null,null)],(function(l,n){l(n,1,0)}),null)}var I=u.kb("app-video-player",s,y,{},{},[]),w=t("s7LF");t.d(n,"VideoPlayerPageModuleNgFactory",(function(){return U}));var U=u.lb(a,[],(function(l){return u.wb([u.xb(512,u.j,u.W,[[8,[b.a,I]],[3,u.j],u.v]),u.xb(4608,p.k,p.j,[u.s,[2,p.q]]),u.xb(4608,w.d,w.d,[]),u.xb(4608,h.c,h.c,[u.x,u.g]),u.xb(4608,h.Db,h.Db,[h.c,u.j,u.p]),u.xb(4608,h.Gb,h.Gb,[h.c,u.j,u.p]),u.xb(1073742336,p.b,p.b,[]),u.xb(1073742336,w.c,w.c,[]),u.xb(1073742336,w.a,w.a,[]),u.xb(1073742336,h.Bb,h.Bb,[]),u.xb(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),u.xb(1073742336,a,a,[]),u.xb(1024,m.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);
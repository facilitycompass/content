(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),o=u("oBZk"),r=u("s7LF"),a=u("ZZ/e"),c=u("SVse"),b=u("yTNM"),s=u("j+vm");class h{constructor(l,n){this.api=l,this.itemUtils=n,this.items=[],this.featuredTop=null,this.showFeaturedTop=!1,this.pageIndex=0,this.pageSize=20,this.filterText="",this.hasMore=!1,this.showSearchBar=!1}ngOnInit(){this.loadFeatured(),this.load(()=>{})}ionViewDidEnter(){}doRefresh(l){this.pageIndex=0,this.load(n=>{setTimeout(()=>{l.target.complete()},500)}),this.loadFeatured()}loadFeatured(){this.api.get("featured-item/hometop",{}).subscribe(l=>{this.featuredTop=l.item,this.applyItemFix(this.featuredTop),this.showFeaturedTop=null!=this.featuredTop})}loadMore(l){this.pageIndex++,this.load((function(){l.target.complete()}))}load(l){this.api.get("items",{pageIndex:this.pageIndex,pageSize:this.pageSize,q:this.filterText,parentId:0}).subscribe(n=>{n.items.forEach(l=>{this.applyItemFix(l)}),this.items=0==this.pageIndex?n.items:this.items.concat(n.items),this.hasMore=n.items.length>=this.pageSize,l&&l()})}applyItemFix(l){null!=l&&(l.showDetails=(1==l.info||0==l.info||3==l.info)&&(l.authorPhotoUrl||l.author),l.showTextOnly=3==l.info,l.showThumbnail=!l.showTextOnly)}refresh(){this.showFeaturedTop=!1,this.pageIndex=0,this.items=[],this.loadFeatured(),this.load(l=>{this.showFeaturedTop=!0})}onSearch(l){this.pageIndex=0,this.filterText=l.detail.value,this.load(l=>{this.showFeaturedTop=!1})}onCancelSearch(){this.pageIndex=0,this.filterText="",this.load(l=>{this.showFeaturedTop=null!=this.featuredTop}),this.showSearchBar=!1}onClick(l){this.itemUtils.onClick(l)}}var p=t.ob({encapsulation:0,styles:[[".text-only-item[_ngcontent-%COMP%]{background-color:#670000;color:#fff;padding:16px 8px;text-align:center;min-height:150px;background-image:url(https://cdn.jsdelivr.net/gh/facilitycompass/content/bs/bg/3.jpg);background-repeat:no-repeat;background-size:auto;background-position:center}.list-title-1[_ngcontent-%COMP%]{text-align:center;margin:14px;font-weight:700}ion-card[_ngcontent-%COMP%]{margin:0 0 20px;padding:0}@media screen and (min-width:576px){.text-only-item[_ngcontent-%COMP%]{min-height:320px}ion-card[_ngcontent-%COMP%]{min-height:360px;margin:8px}}ion-grid[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.item-title[_ngcontent-%COMP%]{padding:4px;color:#000}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:16px}"]],data:{}});function f(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,3,"ion-searchbar",[["animated",""],["debounce","500"],["placeholder","Search"],["showCancelButton","focus"]],null,[[null,"ionChange"],[null,"ionCancel"],[null,"ionBlur"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Cb(l,3)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Cb(l,3)._handleInputEvent(u.target)&&e),"ionChange"===n&&(e=!1!==i.onSearch(u)&&e),"ionCancel"===n&&(e=!1!==i.onCancelSearch()&&e),e}),o.ab,o.v)),t.Db(5120,null,r.b,(function(l){return[l]}),[a.Lb]),t.pb(2,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"],debounce:[1,"debounce"],placeholder:[2,"placeholder"],showCancelButton:[3,"showCancelButton"]},null),t.pb(3,16384,null,0,a.Lb,[t.k],null,null)],(function(l,n){l(n,2,0,"","500","Search","focus")}),null)}function d(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,9,"ion-buttons",[["slot","end"]],null,null,null,o.I,o.d)),t.pb(1,49152,null,0,a.m,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.showSearchBar=!0)&&t),t}),o.H,o.c)),t.pb(3,49152,null,0,a.l,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,1,"ion-icon",[["name","search"],["slot","icon-only"]],null,null,null,o.O,o.j)),t.pb(5,49152,null,0,a.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.refresh()&&t),t}),o.H,o.c)),t.pb(7,49152,null,0,a.l,[t.h,t.k,t.x],null,null),(l()(),t.qb(8,0,null,0,1,"ion-icon",[["name","refresh"],["slot","icon-only"]],null,null,null,o.O,o.j)),t.pb(9,49152,null,0,a.D,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,5,0,"search"),l(n,9,0,"refresh")}),null)}function g(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","text-only-item"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Gb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.component.featuredTop.title)}))}function m(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.featuredTop.thumbnailUrl)}))}function x(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,2,"ion-item",[["class","item-title"],["lines","none"]],null,null,null,o.U,o.m)),t.pb(1,49152,null,0,a.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.Gb(2,0,[" "," "]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,2,0,n.component.featuredTop.title)}))}function I(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,2,"ion-thumbnail",[["slot","start"]],null,null,null,o.hb,o.C)),t.pb(1,49152,null,0,a.Ab,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.component.featuredTop.authorPhotoUrl)}))}function k(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.featuredTop.author)}))}function q(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,7,"ion-item",[["detail",""],["lines","none"]],null,null,null,o.U,o.m)),t.pb(1,49152,null,0,a.I,[t.h,t.k,t.x],{detail:[0,"detail"],lines:[1,"lines"]},null),(l()(),t.fb(16777216,null,0,1,null,I)),t.pb(3,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(4,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.V,o.q)),t.pb(5,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,k)),t.pb(7,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"","none"),l(n,3,0,u.featuredTop.authorPhotoUrl),l(n,7,0,u.featuredTop.author)}),null)}function T(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,11,"ion-col",[["class","ion-no-margin ion-no-padding"],["size-md","4"],["size-sm","6"],["size-xs","12"]],null,null,null,o.K,o.f)),t.pb(1,49152,null,0,a.u,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,9,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.onClick(e.featuredTop)&&t),t}),o.J,o.e)),t.pb(3,49152,null,0,a.n,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,g)),t.pb(5,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,m)),t.pb(7,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,x)),t.pb(9,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,q)),t.pb(11,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,5,0,u.featuredTop.showTextOnly),l(n,7,0,u.featuredTop.showThumbnail),l(n,9,0,!u.featuredTop.showTextOnly),l(n,11,0,u.featuredTop.showDetails)}),null)}function w(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","text-only-item"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Gb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.title)}))}function C(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.thumbnailUrl)}))}function v(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,1,"div",[["class","item-title"],["lines","none"]],null,null,null,null,null)),(l()(),t.Gb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.title)}))}function H(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,2,"ion-thumbnail",[["slot","start"]],null,null,null,o.hb,o.C)),t.pb(1,49152,null,0,a.Ab,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.authorPhotoUrl)}))}function O(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.author)}))}function F(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,17,"ion-col",[["class","ion-no-margin ion-no-padding"],["size-md","4"],["size-sm","6"],["size-xs","12"]],null,null,null,o.K,o.f)),t.pb(1,49152,null,0,a.u,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,15,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick(l.context.$implicit)&&t),t}),o.J,o.e)),t.pb(3,49152,null,0,a.n,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,w)),t.pb(5,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,C)),t.pb(7,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,v)),t.pb(9,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(10,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,o.U,o.m)),t.pb(11,49152,null,0,a.I,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.fb(16777216,null,0,1,null,H)),t.pb(13,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(14,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.V,o.q)),t.pb(15,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,O)),t.pb(17,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,5,0,n.context.$implicit.showTextOnly),l(n,7,0,n.context.$implicit.showThumbnail),l(n,9,0,!n.context.$implicit.showTextOnly),l(n,11,0,"none"),l(n,13,0,n.context.$implicit.authorPhotoUrl),l(n,17,0,n.context.$implicit.author)}),null)}function L(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadMore(u)&&t),t}),o.Q,o.k)),t.pb(1,49152,null,0,a.F,[t.h,t.k,t.x],{threshold:[0,"threshold"]},null),(l()(),t.qb(2,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","\u0db8\u0daf\u0d9a\u0dca \u0dbb\u0dd0\u0daf\u0dd3 \u0dc3\u0dd2\u0da7\u0dd2\u0db1\u0dca\u0db1...."]],null,null,null,o.P,o.l)),t.pb(3,49152,null,0,a.G,[t.h,t.k,t.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){l(n,1,0,"100px"),l(n,3,0,"bubbles","\u0db8\u0daf\u0d9a\u0dca \u0dbb\u0dd0\u0daf\u0dd3 \u0dc3\u0dd2\u0da7\u0dd2\u0db1\u0dca\u0db1....")}),null)}function y(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,11,"ion-header",[],null,null,null,o.N,o.i)),t.pb(1,49152,null,0,a.C,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.jb,o.E)),t.pb(3,49152,null,0,a.Db,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,0,"img",[["height","36"],["slot","start"],["src","assets/icon/favicon.png"],["style","margin-left:12px;"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,0,2,"ion-title",[],null,null,null,o.ib,o.D)),t.pb(6,49152,null,0,a.Bb,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,[" \u0db6\u0ddd \u0dc3\u0dd9\u0dc0\u0dab "])),(l()(),t.fb(16777216,null,0,1,null,f)),t.pb(9,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,d)),t.pb(11,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(12,0,null,null,15,"ion-content",[],null,null,null,o.L,o.g)),t.pb(13,49152,null,0,a.v,[t.h,t.k,t.x],null,null),(l()(),t.qb(14,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.doRefresh(u)&&t),t}),o.Y,o.s)),t.pb(15,49152,null,0,a.eb,[t.h,t.k,t.x],null,null),(l()(),t.qb(16,0,null,0,1,"ion-refresher-content",[],null,null,null,o.X,o.t)),t.pb(17,49152,null,0,a.fb,[t.h,t.k,t.x],null,null),(l()(),t.qb(18,0,null,0,7,"ion-grid",[],null,null,null,o.M,o.h)),t.pb(19,49152,null,0,a.B,[t.h,t.k,t.x],null,null),(l()(),t.qb(20,0,null,0,5,"ion-row",[],null,null,null,o.Z,o.u)),t.pb(21,49152,null,0,a.kb,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,T)),t.pb(23,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,F)),t.pb(25,278528,null,0,c.h,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.fb(16777216,null,0,1,null,L)),t.pb(27,16384,null,0,c.i,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,9,0,u.showSearchBar),l(n,11,0,!u.showSearchBar),l(n,23,0,u.showFeaturedTop),l(n,25,0,u.items),l(n,27,0,u.hasMore)}),null)}function S(l){return t.Hb(0,[(l()(),t.qb(0,0,null,null,1,"app-tab1",[],null,null,null,y,p)),t.pb(1,114688,null,0,h,[b.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var M=t.mb("app-tab1",h,S,{},{},[]),P=u("iInd");u.d(n,"Tab1PageModuleNgFactory",(function(){return A}));var A=t.nb(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[i.a,M]],[3,t.j],t.v]),t.Ab(4608,c.k,c.j,[t.s,[2,c.q]]),t.Ab(4608,a.c,a.c,[t.x,t.g]),t.Ab(4608,a.Hb,a.Hb,[a.c,t.j,t.p]),t.Ab(4608,a.Kb,a.Kb,[a.c,t.j,t.p]),t.Ab(4608,r.d,r.d,[]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,a.Fb,a.Fb,[]),t.Ab(1073742336,r.c,r.c,[]),t.Ab(1073742336,r.a,r.a,[]),t.Ab(1073742336,P.n,P.n,[[2,P.s],[2,P.m]]),t.Ab(1073742336,e,e,[]),t.Ab(1024,P.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);
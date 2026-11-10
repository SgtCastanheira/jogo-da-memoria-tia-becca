import{d as ct,g as e,h as a,l as Lt,u as Ot}from"./main-UJR77VWA.js";import{An as xH,C as Fl,Ft as g,G as Og,Gt as jD,H as N,Ht as hg,Ot as d_,P as Ji,St as bD,V as Ld,X as RD,Yt as kd,Z as SD,Zt as lt,_ as E,_t as _D,bn as uI,cn as pg,d as CD,en as mn,ln as ps,n as $e,ot as Vl,q as Q,rn as nj,x as FD,y as Eg,yn as tj,z as LD}from"./chunk-DJTYPK2K.js";var W=new E(`MAT_CARD_CONFIG`);var G=(()=>{class a{appearance;constructor(){let t=g(W,{optional:!0});this.appearance=t?.appearance||`raised`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){return mn({type:a,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(c,r){c&2&&ps(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(c,r){c&1&&(FD(),jD(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return a})();var B=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=lt({type:a});static ɵinj=$e({imports:[xH]})}return a})();var Y=(a,n)=>n.id;function q(a,n){a&1&&(Ji(0,`span`,6),d_(1,`✓ Tema escolhido`),Vl())}function J(a,n){if(a&1){let t=RD();Ji(0,`mat-card`,2)(1,`button`,3),Eg(`click`,function(){let c=kd(t).$implicit,r=LD();return Ld(r.selectedChange.emit(c.id))}),Ji(2,`span`,4),hg(3,`img`,5),Ji(4,`span`),d_(5),Vl(),bD(6,q,2,0,`span`,6),Vl()()()}if(a&2){let t=n.$implicit,e=LD();ps(`theme-card--selected`,e.selected()===t.id),uI(),ps(`theme-option--selected`,e.selected()===t.id),Fl(`aria-pressed`,e.selected()===t.id)(`aria-label`,t.label),uI(2),pg(`appWebp`,t.preview),uI(2),Og(t.label),uI(),_D(e.selected()===t.id?6:-1)}}var X=class a$1{selected=nj(`mixed`);selectedChange=tj();themes=[{id:`mixed`,label:`Todos os temas`,preview:`cards/selvagens/coala.png`,detail:`32 cartas em 8 linhas`},...a.map(n=>Q(N({},n),{label:n.id===`espaco-1`?`Espaço 1`:n.id===`espaco-2`?`Espaço 2`:n.name,preview:e.find(t=>t.category===n.id).imagePath,detail:`12 figuras para descobrir`}))];static ɵfac=function(t){return new(t||a$1)};static ɵcmp=mn({type:a$1,selectors:[[`app-theme-selector`]],inputs:{selected:[1,`selected`]},outputs:{selectedChange:`selectedChange`},decls:3,vars:0,consts:[[`role`,`group`,`aria-label`,`Escolha o tema da partida`,1,`theme-grid`],[`appearance`,`outlined`,1,`theme-card`,3,`theme-card--selected`],[`appearance`,`outlined`,1,`theme-card`],[`mat-button`,``,`type`,`button`,1,`theme-option`,3,`click`],[1,`theme-content`],[`alt`,``,`aria-hidden`,`true`,`decoding`,`async`,`width`,`72`,`height`,`72`,3,`appWebp`],[1,`theme-detail`]],template:function(t,e){t&1&&(Ji(0,`div`,0),CD(1,J,7,9,`mat-card`,1,Y),Vl()),t&2&&(uI(),SD(e.themes))},dependencies:[Lt,Ot,B,G,ct],styles:[`[_nghost-%COMP%]{display:block;min-width:0}.theme-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.theme-card[_ngcontent-%COMP%]{min-width:0;border:3px solid #ecd2de;border-radius:24px;background:#fff;box-shadow:0 4px 12px #58374a0a;transition:border-color .14s,background .14s,transform .14s}.theme-card--selected[_ngcontent-%COMP%]{border-color:var(--%NS%play, #b4346a);background:#fff0f6;box-shadow:0 4px 14px #b4346a22}.theme-option[_ngcontent-%COMP%]{width:100%;min-width:0;min-height:150px;height:100%;padding:14px 8px;border-radius:20px;color:var(--%NS%ink, #3b2431)}.theme-option--selected[_ngcontent-%COMP%]{color:#7a1d47}.theme-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;width:100%;white-space:normal;text-align:center;line-height:1.25;font-size:1.05rem;font-weight:800}.theme-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:22.6%;display:block;flex:none;width:84px;height:84px;object-fit:contain}.theme-detail[_ngcontent-%COMP%]{color:#7a1d47;font-size:1rem;font-weight:800}@media(hover:hover){.theme-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);border-color:#d08aa8}}@media(min-width:520px){.theme-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:820px){.theme-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(prefers-reduced-motion:reduce){.theme-card[_ngcontent-%COMP%]{transition:none}.theme-card[_ngcontent-%COMP%]:hover{transform:none}}`]})};export{X as ThemeSelectorComponent};
(this.webpackJsonp=this.webpackJsonp||[]).push([[50],{"170301c0c5f906f1d146":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n("498f48497f164fb7c73f"),a=n("32de4e5ff28a331180c4");const o={angleDegrees:0,shape:r.k.circle,spacing:a.d};function c(e,t,n){return Object.assign(Object.assign({},o),{hardness:t,strength:n,size:e})}function l(e,t,n,r){const a=Math.sqrt(e[0]*e[1])*t;return Object.assign(Object.assign({},o),{hardness:n,strength:r,size:a})}},"5cbdb54163711f47f575":function(e,t,n){"use strict";n.r(t);var r=n("58cf5f1b1e4a6f0868c5"),a=n("8af190b70a6bc55c6f1b"),o=n("24a74d8dc2d9aae519f4"),c=n("4aaad9891c45466dfe8a"),l=n("9d145ef5aaf44b342f0f"),s=n("dc08d784e9162147899b"),i=n("6bda0ac4605defc1becf"),u=n("92f89ad909ff830126b9"),d=n("89f4e56fe386c673c91c"),f=n("94eca6a5e6406d417ee8"),b=n("170301c0c5f906f1d146"),p=n("2b9ee7288ec5565199f1"),m=n("6271a22b6df4975c3bb1"),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const O=p.c.airbrush,y=`${O}_brush_controls`;class x extends a.Component{constructor(){super(...arguments),this.updateBlurSize=e=>{this.props.updateFxAttr("blurSize",e)}}render(){const e=this.props,{updateFxAttr:t}=e,n=h(e,["updateFxAttr"]);return a.createElement(o.a,Object.assign({},n,{title:Object(r.d)("effect","airbrush"),panelId:O,showMaskButton:!1}),a.createElement(m.a,{sectionLabel:y},a.createElement(d.a,{initialBrushValues:Object(b.b)(this.props.documentSize,.1,50,100)})),a.createElement(l.a,null),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:t,debounceWaitMS:100}))}}var j=Object(c.a)(x,{effectType:u.a.Airbrush,panelId:O,fxAttrDefaults:i.b}),g=n("0a7b48a51c9436cd2497"),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const A=p.c.wrinkleRemover,F=`${A}_brush_controls`;class P extends a.Component{render(){const e=this.props,{uiFxAttrs:t,updateFxAttr:n}=e,c=E(e,["uiFxAttrs","updateFxAttr"]);return a.createElement(o.a,Object.assign({},c,{title:Object(r.d)("effect","skin_smoother"),panelId:A,showMaskButton:!1}),a.createElement(m.a,{sectionLabel:F},a.createElement(d.a,{initialBrushValues:Object(b.b)(this.props.documentSize,.03,30,50)})),a.createElement(l.a,null),a.createElement(s.a,{name:"softness",label:Object(r.d)("effect","smoothing"),min:1,max:100,formatter:s.b.roundedPercent,onChange:n,debounceWaitMS:100}),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n,debounceWaitMS:100}))}}var v=Object(c.a)(P,{effectType:u.a.WrinkleRemover,panelId:A,fxAttrDefaults:g.b}),S=n("04d59050701ce28f3a2d"),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const I=p.c.shineReduce,B=`${I}_brush_controls`;var C=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,undoCurFrame:c,documentSize:i}=e,u=w(e,["uiFxAttrs","updateFxAttr","undoCurFrame","documentSize"]);return a.createElement(o.a,Object.assign({},u,{title:Object(r.d)("effect","shine_reduce"),panelId:I,showMaskButton:!1}),a.createElement(m.a,{sectionLabel:B},a.createElement(d.a,{initialBrushValues:Object(b.b)(i,.015,10,50)})),a.createElement(l.a,null),a.createElement(s.a,{name:"strength",label:Object(r.d)("effect","intensity"),min:2,max:100,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.ShineReduce,panelId:I,fxAttrDefaults:S.b}),z=n("aa981bd5a021752b3b31"),_=n("8953b2be57367ca8a55a"),T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const M=p.c.blush,k=`${M}_brush_controls`;var D=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,undoCurFrame:c,documentSize:i}=e,u=T(e,["uiFxAttrs","updateFxAttr","undoCurFrame","documentSize"]);return a.createElement(o.a,Object.assign({},u,{title:Object(r.d)("effect","blush_boost"),panelId:M,showMaskButton:!1}),a.createElement(z.a,{name:"color",value:t.color,updateFxAttr:n,paletteId:"blushBoost",undoColorPreview:c}),a.createElement(l.a,null),a.createElement(m.a,{sectionLabel:k},a.createElement(d.a,{initialBrushValues:Object(b.b)(i,.1,30,50)})),a.createElement(l.a,null),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.Blush,panelId:M,fxAttrDefaults:_.b,getUiFxAttrs:function(e){const{color:t}=e;return{color:t}}}),V=n("177c997db2f39922b05d"),L=n("8ee0e7184e6724b5d17b"),R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const W=p.c.sprayTan,$=`${W}_brush_controls`;class N extends a.Component{getColors(){const e=[];for(let t=0;t<5;t++)e.push(Object(L.R)(Object(L.B)(9.5+t/4*31.5,.72,.48)));return e}render(){const e=this.props,{uiFxAttrs:t,updateFxAttr:n,undoCurFrame:c,documentSize:i}=e,u=R(e,["uiFxAttrs","updateFxAttr","undoCurFrame","documentSize"]);return a.createElement(o.a,Object.assign({},u,{title:Object(r.d)("effect","spray_tan"),panelId:W,showMaskButton:!1}),a.createElement(z.a,{name:"color",value:t.color,updateFxAttr:n,paletteId:"sprayTan",undoColorPreview:c}),a.createElement(s.a,{name:"intensity",label:Object(r.d)("effect","intensity"),min:0,max:100,formatter:s.b.roundedPercent,onChange:n,debounceWaitMS:100}),a.createElement(s.a,{name:"exposure",label:Object(r.d)("effect","darken"),min:0,max:100,formatter:s.b.roundedPercent,onChange:n,debounceWaitMS:100}),a.createElement(l.a,null),a.createElement(m.a,{sectionLabel:$},a.createElement(d.a,{initialBrushValues:Object(b.b)(i,.1,30,50)})))}}var U=Object(c.a)(N,{effectType:u.a.SprayTan,panelId:W,fxAttrDefaults:V.b,getUiFxAttrs:function(e){const{color:t}=e;return{color:t}}}),H=n("149243ca860f15ce2f5a"),J=n("025dab547b5bedacbfae"),q=n("04be3c4e4062068cf67d"),G=n("0a81c721557e72a0975d"),K=n("87f9eb26d27cad3b452b"),Q=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const X=p.c.blemishRemover,Y=`${X}_brush_controls`;class Z extends a.Component{render(){const e=this.props,{updateFxAttr:t}=e,n=Q(e,["updateFxAttr"]);return a.createElement(o.a,Object.assign({},n,{title:Object(r.d)("effect","blemish_fix"),panelId:X,showMaskButton:!1}),a.createElement(m.a,{sectionLabel:Y},a.createElement(d.a,{showBrushMode:!1,showHardnessSlider:!1,showStrengthSlider:!1,showShapes:!1,maxBrushSize:200,initialBrushValues:Object(b.b)(this.props.documentSize,.03,100,100)})),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:t}))}}const ee=Object(G.b)(null,(function(e,t){return{onOpenPanel:()=>{e(q.b.ux.setActiveBrush(K.a.default)),e(q.b.ux.changeBrushType(J.b.blemishFixBrush)),e(q.b.ux.setBrushHardness(.25)),t.onOpen()},onApply:()=>{e(q.b.ux.changeBrushType(J.b.softRoundBrush)),t.onApply()}}}));var te=Object(c.a)(ee(Z),{effectType:u.a.BlemishRemover,panelId:X,fxAttrDefaults:H.b}),ne=n("51965c7aa3c2c5d8c813"),re=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const ae=p.c.teethWhiten,oe=`${ae}_brush_controls`;var ce=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,documentSize:c}=e,i=re(e,["uiFxAttrs","updateFxAttr","documentSize"]);return a.createElement(o.a,Object.assign({},i,{title:Object(r.d)("effect","teeth_whiten"),panelId:ae,showMaskButton:!1}),a.createElement(m.a,{sectionLabel:oe},a.createElement(d.a,{initialBrushValues:Object(b.b)(c,.03,30,50)})),a.createElement(l.a,null),a.createElement(s.a,{name:"brightness",label:Object(r.d)("effect","brightness"),min:0,max:100,formatter:s.b.roundedPercent,onChange:n}),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.TeethWhiten,panelId:ae,fxAttrDefaults:ne.b}),le=n("d090e397567ae3c63b62"),se=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const ie=p.c.lipTint,ue=`${ie}_brush_controls`;var de=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,undoCurFrame:c,documentSize:l}=e,i=se(e,["uiFxAttrs","updateFxAttr","undoCurFrame","documentSize"]);return a.createElement(o.a,Object.assign({},i,{title:Object(r.d)("effect","lip_tint"),panelId:ie,showMaskButton:!1}),a.createElement(z.a,{name:"color",value:t.color,updateFxAttr:n,paletteId:"lipTint",undoColorPreview:c}),a.createElement(m.a,{sectionLabel:ue},a.createElement(d.a,{initialBrushValues:Object(b.b)(l,.03,30,15)})),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","intensity"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n}),a.createElement(s.a,{name:"tone",label:Object(r.d)("effect","tone"),min:-100,max:100,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.LipTint,panelId:ie,fxAttrDefaults:le.b,getUiFxAttrs:function(e){const{color:t}=e;return{color:t}}}),fe=n("a390ab266c5727f8c1dd"),be=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const pe=p.c.eyeBrighten;class me extends a.Component{render(){const e=this.props,{uiFxAttrs:t,updateFxAttr:n,documentSize:c}=e,i=be(e,["uiFxAttrs","updateFxAttr","documentSize"]);return a.createElement(o.a,Object.assign({},i,{title:Object(r.d)("effect","eye_brighten"),panelId:pe,showMaskButton:!1}),a.createElement(d.a,{initialBrushValues:Object(b.b)(c,.03,30,50)}),a.createElement(l.a,null),a.createElement(s.a,{name:"exposure",label:Object(r.d)("effect","lighten"),min:0,max:100,formatter:s.b.roundedPercent,onChange:n,debounceWaitMS:100}),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n,debounceWaitMS:100}))}}var he=Object(c.a)(me,{effectType:u.a.EyeBrighten,panelId:pe,fxAttrDefaults:fe.b}),Oe=n("695b41411659966a5dff"),ye=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const xe=p.c.eyeTint,je=`${xe}_brush_controls`;var ge=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,undoCurFrame:c,documentSize:i}=e,u=ye(e,["uiFxAttrs","updateFxAttr","undoCurFrame","documentSize"]);return a.createElement(o.a,Object.assign({},u,{title:Object(r.d)("effect","eye_tint"),panelId:xe,showMaskButton:!1}),a.createElement(z.a,{name:"color",value:t.color,updateFxAttr:n,paletteId:"eyeTint",undoColorPreview:c}),a.createElement(l.a,null),a.createElement(m.a,{sectionLabel:je},a.createElement(d.a,{initialBrushValues:Object(b.b)(i,.03,30,50)})),a.createElement(l.a,null),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.EyeTint,panelId:xe,fxAttrDefaults:Oe.b,getUiFxAttrs:function(e){const{color:t}=e;return{color:t}}}),Ee=n("a3dc589ad15e4fee74ab"),Ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const Fe=p.c.mascara,Pe=`${Fe}_brush_controls`;var ve=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,documentSize:c}=e,i=Ae(e,["uiFxAttrs","updateFxAttr","documentSize"]);return a.createElement(o.a,Object.assign({},i,{title:Object(r.d)("effect","mascara"),panelId:Fe,showMaskButton:!1}),a.createElement(m.a,{sectionLabel:Pe},a.createElement(d.a,{initialBrushValues:Object(b.b)(c,.03,30,50)})),a.createElement(l.a,null),a.createElement(s.a,{name:"strength",label:Object(r.d)("effect","intensity"),min:f.r,max:f.i,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.Mascara,panelId:Fe,fxAttrDefaults:Ee.b}),Se=n("05d95b4da4d460168192"),we=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const Ie=p.c.eyeliner,Be=`${Ie}_brush_controls`;class Ce extends a.Component{render(){const e=this.props,{uiFxAttrs:t,updateFxAttr:n,documentSize:c}=e,i=we(e,["uiFxAttrs","updateFxAttr","documentSize"]);return a.createElement(o.a,Object.assign({},i,{title:Object(r.d)("effect","eyeliner"),panelId:Ie,showMaskButton:!1}),a.createElement(m.a,{sectionLabel:Be},a.createElement(d.a,{initialBrushValues:Object(b.b)(c,.015,30,15)})),a.createElement(l.a,null),a.createElement(s.a,{name:"strength",label:Object(r.d)("effect","intensity"),min:f.r,max:f.i,formatter:s.b.roundedPercent,onChange:n}))}}var ze=Object(c.a)(Ce,{effectType:u.a.Eyeliner,panelId:Ie,fxAttrDefaults:Se.b}),_e=n("af28039fd7c5f448dfb8"),Te=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const Me=p.c.shadow,ke=`${Me}_brush_controls`;var De=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,undoCurFrame:c,documentSize:i}=e,u=Te(e,["uiFxAttrs","updateFxAttr","undoCurFrame","documentSize"]);return a.createElement(o.a,Object.assign({},u,{title:Object(r.d)("effect","eye_shadow"),panelId:Me,showMaskButton:!1}),a.createElement(z.a,{name:"color",value:t.color,updateFxAttr:n,paletteId:"eyeShadow",undoColorPreview:c}),a.createElement(l.a,null),a.createElement(m.a,{sectionLabel:ke},a.createElement(d.a,{initialBrushValues:Object(b.b)(i,.03,30,50)})),a.createElement(l.a,null),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.EyeShadow,panelId:Me,fxAttrDefaults:_e.b,getUiFxAttrs:function(e){const{color:t}=e;return{color:t}}}),Ve=n("ca764b45dfaa41c807ae"),Le=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const Re=p.c.eyebrowPencil,We=`${Re}_brush_controls`;var $e=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,undoCurFrame:c,documentSize:i}=e,u=Le(e,["uiFxAttrs","updateFxAttr","undoCurFrame","documentSize"]);return a.createElement(o.a,Object.assign({},u,{title:Object(r.d)("effect","eyebrow_pencil"),panelId:Re,showMaskButton:!1}),a.createElement(z.a,{name:"color",value:t.color,updateFxAttr:n,paletteId:"eyebrowPencil",undoColorPreview:c}),a.createElement(l.a,null),a.createElement(m.a,{sectionLabel:We},a.createElement(d.a,{initialBrushValues:Object(b.b)(i,.02,50,100)})),a.createElement(l.a,null),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.EyebrowPencil,panelId:Re,fxAttrDefaults:Ve.b,getUiFxAttrs:function(e){const{color:t}=e;return{color:t}}}),Ne=n("d98c0e6f982c183b4cba");const Ue=p.c.redEyeRemover,He=`${Ue}_brush_controls`;class Je extends a.PureComponent{render(){return a.createElement(o.a,Object.assign({},this.props,{title:Object(r.d)("effect","redeye_remover"),panelId:Ue,showMaskButton:!1}),a.createElement(m.a,{sectionLabel:He},a.createElement(d.a,{initialBrushValues:Object(b.b)(this.props.documentSize,.03,1,100)})),a.createElement(l.a,null),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:this.props.updateFxAttr}))}}var qe=Object(c.a)(Je,{effectType:u.a.RedEyeRemover,panelId:Ue,fxAttrDefaults:Ne.b}),Ge=n("34f719b0aff6fabd9895"),Ke=n("f8240f634fbfcfc7f8e7"),Qe=n("00defd4ac98cd035eada"),Xe=n("cd1a2d656b3886a6ba8d"),Ye=n("c2a1a3bf1c80a3aa5f57"),Ze=n("f621f3296c8011f2673b"),et=n("cf10fa747cb1e7cc154a"),tt=n("498f48497f164fb7c73f"),nt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const rt=p.c.sculpt,at=`${rt}_brush_controls`,ot={contract:Object(L.V)(0,0,0,255),expand:Object(L.V)(0,255,0,255),drag:Object(L.V)(255,0,0,255),erase:Object(L.V)(0,0,255,255)},ct=()=>[Object(r.d)("effect","brush_mode_nudge"),Object(r.d)("effect","brush_mode_shrink"),Object(r.d)("effect","brush_mode_expand"),Object(r.d)("effect","brush_mode_erase")],lt=e=>{const t=Object(L.S)(e);return(()=>{const e=ct();return{"255-0-0":e[0],"0-0-0":e[1],"0-255-0":e[2],"0-0-255":e[3]}})()[t]};function st(e,t){e(q.b.ux.setBrushColorNoAlpha(t))}const it=Object(G.b)((function(e){const t=Ke.getActiveBrush(e).props.color;return{brushMode:lt(t)}}),(function(e,t){return{updateBrush:t=>{st(e,ot[t]),e(q.b.ux.setBrushBlendMode("erase"===t?tt.j.reverseSubtract:tt.j.add))},onOpenPanel:()=>{e(q.b.ux.setActiveBrush(K.a.default)),e(q.b.ux.changeBrushType(J.b.sculptBrush)),st(e,ot.drag),t.onOpen()},onApply:()=>{e(q.b.ux.changeBrushType(J.b.softRoundBrush)),t.onApply()}}}));var ut,dt=Object(c.a)(it((function(e){var{updateBrush:t,onOpenPanel:n,onApply:c,uiFxAttrs:i,updateFxAttr:u,brushMode:f,documentSize:p}=e,h=nt(e,["updateBrush","onOpenPanel","onApply","uiFxAttrs","updateFxAttr","brushMode","documentSize"]);const O=ct();return a.createElement(o.a,Object.assign({},h,{onOpen:n,onApply:c,title:Object(r.d)("effect","sculpt"),panelId:rt,showMaskButton:!1}),a.createElement(Qe.b,{label:f,name:"brush",onChange:t,defaultValue:"drag",options:[{value:"drag",label:a.createElement(Ye.default,null),tooltip:O[0]},{value:"contract",label:a.createElement(Ze.default,null),tooltip:O[1]},{value:"expand",label:a.createElement(et.default,null),tooltip:O[2]},{value:"erase",label:a.createElement(Xe.default,null),tooltip:O[3]}]}),a.createElement(m.a,{sectionLabel:at},a.createElement(d.a,{showBrushMode:!1,showHardnessSlider:!1,showShapes:!1,initialBrushValues:Object(b.b)(p,.16,100,100)})),a.createElement(l.a,null),a.createElement(s.a,{name:"intensity",label:Object(r.d)("effect","intensity"),min:0,max:100,formatter:s.b.roundedPercent,onChange:u}))})),{effectType:u.a.Sculpt,panelId:rt,fxAttrDefaults:Ge.b}),ft=n("11b7103af4a8ac250093"),bt=n("87a15dbca1a196505b54"),pt=n("f2a8982de0a0fd05974b"),mt=n("faed06fa9ead504c5f83"),ht=n("a579ab53aa6c5f00c0bc"),Ot=n("ed6ecdbebdfc3fd224d3"),yt=n("f9e5519c41995b0f7695"),xt=n("0fdaf1f6041c5813ff64"),jt=n("a7152ee9577aa89685a0"),gt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};!function(e){e[e.Document=0]="Document",e[e.Selection=1]="Selection"}(ut||(ut={}));const Et=p.c.narrow;function At(e,t,n){e.resizeType===ut.Document?function(e,t,n){e.setDocumentSize(t);const r=ht.a.scaleFromPoint(mt.a.fromVec2(e.midPoint,0),mt.a.fromVec2(n,1));e.transformAllNodes(r,e.nodeIds),e.rerasterize(e.nodeIds)}(e,t,n):function(e,t,n){const r=ht.a.scaleFromPoint(mt.a.fromVec2(e.midPoint,0),mt.a.fromVec2(n,1));e.transformSelection(r),e.rerasterize(e.nodeIds)}(e,0,n)}function Ft(e){return s.b.roundedPercent(Math.abs(e))}class Pt extends a.Component{constructor(){super(...arguments),this.state={sizeChanged:!1},this.handleOpen=()=>this.setState({sizeChanged:!1},this.performOpen),this.performOpen=()=>{this.props.onOpen(),this.setSize(jt.b.intensity)},this.handleIntensityChange=(e,t,n)=>{this.setSize(t),this.props.updateFxAttr(e,t,n)},this.setSize=e=>{let t=this.props.uiFxAttrs.originalWidth;t||(t=this.props.width,this.props.updateFxAttr("originalWidth",t,!0));const{height:n}=this.props,r=Math.round(t*(1-.06*e/100)),a=pt.a.create(t,n),o=pt.a.create(r,n),c=pt.a.divide(o,a);this.state.sizeChanged?this.props.undoChanges():this.setState({sizeChanged:!0}),At(this.props,o,c),this.props.commit()}}render(){const e=this.props,{uiFxAttrs:t,layerEffectType:n,isLoading:c}=e,l=gt(e,["uiFxAttrs","layerEffectType","isLoading"]);return a.createElement(o.a,Object.assign({},l,{title:Object(r.d)("effect","narrow"),panelId:Et,isNew:!1,layerEffectType:n,onOpen:this.handleOpen,onApply:this.props.onApply,isLoading:c}),a.createElement(s.a,{name:"intensity",label:t.intensity>=0?Object(r.d)("effect","more"):Object(r.d)("effect","less"),min:-50,max:50,formatter:Ft,onChange:this.handleIntensityChange}))}}const vt={width:0,height:0,midPoint:pt.a.zeroes,nodeIds:xt.a,resizeType:ut.Document};function St(e){const t=Ke.getSelectedNodeIds(e),n=Ke.getSelectionIsBackground(e);return 0===t.length||n?function(e){const{dx:t,dy:n}=pt.a.toSize(Ke.getDocumentSize(e));return{width:t,height:n,midPoint:pt.a.zeroes,nodeIds:Ke.getAllTransformableNodeIds(e),resizeType:ut.Document}}(e):function(e){const t=Ke.getSelectionBounds(e),[n,r]=yt.a.size(yt.a.fromRect(t));return{width:n,height:r,midPoint:Ot.g.midPoint(t),nodeIds:Ke.getSelectedNodeIds(e),resizeType:ut.Selection}}(e)}const wt=Object(c.a)(Pt,{effectType:u.a.WeightLoss,panelId:Et,fxAttrDefaults:jt.b,shouldCommitEffect:!1,getUiFxAttrs:function(e){return e}});var It=Object(G.b)((function(e){const{ux:t}=e;return null!==t.panelSelected&&t.panelSelected.panelId===Et?St(e):vt}),(function(e){return{setDocumentSize:t=>e(Object(q.d)(q.b.document.resizeDocument(t))),transformAllNodes:(t,n)=>{e(Object(q.d)(q.b.scene.applyTransformOnlyToSelection(t))),n.forEach(n=>{e(Object(q.d)(q.b.scene.applyTransform(t,n)))})},transformSelection:t=>e(Object(q.d)(q.b.scene.applyTransformToSelection(t))),rerasterize:t=>e(q.b.sagas.rerasterize(t)),undoChanges:()=>e(q.b.sagas.undo()),commit:()=>e(q.b.undo.commit(K.m.standard,ft.a.soft)),onOpen:()=>e(q.b.editor.updateEditMode(bt.a.resize)),onApply:()=>e(q.b.undo.commit())}}))(wt),Bt=n("78acde9afbf03786d1f2"),Ct=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const zt=p.c.highlights,_t=`${zt}_brush_controls`;var Tt=Object(c.a)((function(e){var{uiFxAttrs:t,updateFxAttr:n,undoCurFrame:c,documentSize:i}=e,u=Ct(e,["uiFxAttrs","updateFxAttr","undoCurFrame","documentSize"]);return a.createElement(o.a,Object.assign({},u,{title:Object(r.d)("effect","highlights"),panelId:zt,showMaskButton:!1}),a.createElement(z.a,{name:"color",value:t.color,updateFxAttr:n,paletteId:"highlights",undoColorPreview:c}),a.createElement(m.a,{sectionLabel:_t},a.createElement(d.a,{initialBrushValues:Object(b.b)(i,.1,30,50)})),a.createElement(l.a,null),a.createElement(s.a,{name:"fade",label:Object(r.d)("effect","fade"),min:f.m,max:f.d,formatter:s.b.roundedPercent,onChange:n}))}),{effectType:u.a.Highlights,panelId:zt,fxAttrDefaults:Bt.b,getUiFxAttrs:function(e){const{color:t}=e;return{color:t}}});n.d(t,"AirbrushFxPanel",(function(){return j})),n.d(t,"WrinkleRemoverFxPanel",(function(){return v})),n.d(t,"ShineReduceFxPanel",(function(){return C})),n.d(t,"BlushFxPanel",(function(){return D})),n.d(t,"SprayTanFxPanel",(function(){return U})),n.d(t,"BlemishRemoverFxPanel",(function(){return te})),n.d(t,"TeethWhitenFxPanel",(function(){return ce})),n.d(t,"LipTintFxPanel",(function(){return de})),n.d(t,"EyeBrightenFxPanel",(function(){return he})),n.d(t,"EyeTintFxPanel",(function(){return ge})),n.d(t,"MascaraFxPanel",(function(){return ve})),n.d(t,"EyelinerFxPanel",(function(){return ze})),n.d(t,"EyeShadowFxPanel",(function(){return De})),n.d(t,"EyebrowPencilFxPanel",(function(){return $e})),n.d(t,"RedEyeRemoverFxPanel",(function(){return qe})),n.d(t,"NipTuckFxPanel",(function(){return dt})),n.d(t,"WeightLossFxPanel",(function(){return It})),n.d(t,"HighlightsFxPanel",(function(){return Tt}))}}]);
//# sourceMappingURL=editor-panel-touchups.49b1199da293f9202cda.bundle.js.map
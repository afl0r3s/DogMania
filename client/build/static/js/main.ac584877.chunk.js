(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports={navNav:"navsearch_navNav__3rG9K",navLogo:"navsearch_navLogo__2GtKu",navSearch:"navsearch_navSearch__3Neb1",navMenuLink:"navsearch_navMenuLink__2J0Bi",checkBtn:"navsearch_checkBtn__3sxZ6",checkOpt:"navsearch_checkOpt__38ToP",active:"navsearch_active__j_Kjm"}},19:function(e,t,a){e.exports={mainConent:"landing_mainConent__3Jod2",content:"landing_content__1JXcN",animate:"landing_animate__21RPM",text:"landing_text__36NaN",buttonConteiner:"landing_buttonConteiner__bj4EK",button:"landing_button__1tK0e",develop:"landing_develop__Z3OHQ"}},21:function(e,t,a){e.exports={cardContainer:"contentdisplay_cardContainer__J2vHt",pageNumber:"contentdisplay_pageNumber__2amRY",buttonPag:"contentdisplay_buttonPag__2KHY_",footer:"contentdisplay_footer__1hKgb"}},27:function(e,t,a){e.exports={navfiltercontent:"navfilter_navfiltercontent__3S0Zm",navfilGroup:"navfilter_navfilGroup__17QzR",navfilTitle:"navfilter_navfilTitle__ER6rX"}},3:function(e,t,a){e.exports={navNav:"create_navNav__2ZvfC",navLogo:"create_navLogo__2V0El",tittle:"create_tittle__sHDrR",createContent:"create_createContent__liwDl",imputCreateTxt:"create_imputCreateTxt__2L5TD",danger:"create_danger__2JL1v",close:"create_close__3jbXw",buttonSave:"create_buttonSave__1Bl46",mesage:"create_mesage__YX5sE"}},30:function(e,t,a){e.exports={contentError:"error404_contentError__340Zg",error:"error404_error__uSpwh",errorText:"error404_errorText__3hcKT"}},36:function(e,t,a){e.exports={imputSearch:"search_imputSearch__3GTMS",buttonSearch:"search_buttonSearch__26oPz"}},37:function(e,t,a){e.exports={homeMain:"home_homeMain__CB86d",imgLoad:"home_imgLoad__3RGGx"}},47:function(e,t,a){e.exports={pagination:"pagination_pagination__3Trqw",pageItem:"pagination_pageItem__1e3Sq",buttonNum:"pagination_buttonNum__3iKIs"}},48:function(e,t,a){e.exports={card:"card_card__3Vyjt",breedName:"card_breedName__2VGy2",breedTemnperaments:"card_breedTemnperaments__NuQMP"}},5:function(e,t,a){e.exports={navNav:"detail_navNav__1wyPi",navLogo:"detail_navLogo__1wH8o",cardContent:"detail_cardContent__3d9Qt",card:"detail_card__22hUY",cardTextContent:"detail_cardTextContent__Q1wjF",cardText:"detail_cardText__dEcW4",detailTitle:"detail_detailTitle__1ZtIA",detailInfo:"detail_detailInfo__1T8yf"}},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(28),s=a.n(r),i=a(7),l=a(8),o=a(19),j=a.n(o),d=a(0);function b(){return Object(d.jsx)("div",{className:j.a.mainConent,children:Object(d.jsxs)("div",{className:j.a.content,children:[Object(d.jsx)("h1",{"data-text":"Dog Mania",children:"Dog Mania"}),Object(d.jsx)("div",{className:j.a.text,children:"The place for Dog lovers... "}),Object(d.jsx)("div",{className:j.a.buttonConteiner,children:Object(d.jsxs)(l.b,{to:"/home",children:[" ",Object(d.jsx)("button",{className:j.a.button,children:"Go to Start \xbb "})," "]})}),Object(d.jsxs)("div",{className:j.a.develop,children:['"Soy Henry" P.I. App',Object(d.jsx)("br",{}),"Developed by Alejandro Flores"]})]})})}var u=a(4),h=a(15),m=a.n(h),p=a(20),O=a(23),x=a.n(O),g="GET_BREEDS",v="GET_BREEDS_NAME",f="ERROR_SEARCH",_="GET_DETAIL",N="FILTER_SOURCE",w="SORT_GENERAL",y="GET_TEMPERAMENTS",T="GET_BREEDTEMPERAMENT",C="POST_BREED",M="LOADING",L=function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3001/temperament");case 2:return a=e.sent,e.abrupt("return",t({type:y,payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:M}),e.prev=1,e.next=4,x.a.get("http://localhost:3001/dogs");case 4:return a=e.sent,e.abrupt("return",t({type:g,payload:a.data}));case 8:return e.prev=8,e.t0=e.catch(1),a=[{id:0,name:"No data response !!",temperament:"-- API Server down --",image:"http://localhost:3000/DogMania/sad_dog.png",weight_min:"0",weight_max:"0",height_min:"0",height_max:"0",origin:"API"}],e.abrupt("return",t({type:g,payload:a}));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},S=a(18),P=a(36),E=a.n(P);function k(){var e=Object(u.b)(),t=Object(n.useState)(""),a=Object(S.a)(t,2),c=a[0],r=a[1];return Object(d.jsxs)("form",{onSubmit:function(t){var a;(t.preventDefault(),c)?c.length<3?alert("Breed minimum length musy be of 3 characters !"):(e((a=c,function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:M}),e.next=3,x.a.get("http://localhost:3001/dogs?name=".concat(a));case 3:if(0!==(n=e.sent).data[0].id){e.next=8;break}return e.abrupt("return",t({type:f,payload:[{id:0,name:"WarnError"}]}));case 8:return e.abrupt("return",t({type:v,payload:n.data}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),r("")):alert("Enter a Breed name to search ..")},children:[Object(d.jsx)("input",{type:"search",placeholder:"breed for search..",className:E.a.imputSearch,value:c,onChange:function(e){return function(e){r(e.target.value)}(e)}}),Object(d.jsxs)("button",{type:"submit",className:E.a.buttonSearch,children:[" ",Object(d.jsx)("i",{className:"fa fa-search"})," Search"]})]})}var D=a(16),I=a.n(D);function R(){var e=Object(u.b)();return Object(d.jsxs)("nav",{className:I.a.navNav,children:[Object(d.jsx)("input",{type:"checkbox",id:"check",className:I.a.checkOpt}),Object(d.jsxs)("label",{htmlFor:"check",className:I.a.checkBtn,children:[" ",Object(d.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})," "]}),Object(d.jsx)("span",{className:I.a.navLogo,children:"Dog Mania App"}),Object(d.jsxs)("span",{className:I.a.navSearch,children:[" ",Object(d.jsx)(k,{})," "]}),Object(d.jsxs)("ul",{className:I.a.navMenu,children:[Object(d.jsxs)("li",{className:I.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/home",children:[" ",Object(d.jsxs)("span",{className:I.a.navMenuLink,onClick:function(t){return function(t){t.preventDefault(),e(A())}(t)},children:[" ",Object(d.jsx)("i",{className:"fa fa-home"})," Home"]})," "]})," "]}),Object(d.jsxs)("li",{className:I.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/about",children:[" ",Object(d.jsxs)("span",{className:I.a.navMenuLink,children:[" ",Object(d.jsx)("i",{className:"fa fa-info"})," About"]})," "]})," "]}),Object(d.jsxs)("li",{className:I.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/add",children:[" ",Object(d.jsxs)("span",{className:I.a.navMenuLink,children:[" ",Object(d.jsx)("i",{className:"fa fa-paw"})," Create"]})," "]})," "]})]})]})}var F=a(26),B=a(47),Z=a.n(B);function G(e){var t=e.totalPages,a=e.paginateFunction,n=Object(F.a)(Array(t).keys()).map((function(e){return e+1}));return Object(d.jsx)(d.Fragment,{children:n.map((function(e){return Object(d.jsxs)("button",{onClick:function(){return a(e)},className:Z.a.buttonNum,children:[" ",e," "]},e)}))})}var H=a(27),z=a.n(H);function J(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.temperaments}));Object(n.useEffect)((function(){e(L())}),[e]);var a=function(t){var a;e((a=t.target.value,function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:M}),e.abrupt("return",t({type:T,payload:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},c=function(t){var a;e((a=t.target.value,function(e){return e({type:M}),e({type:N,payload:a})}))},r=function(t){var a;e((a=t.target.value,function(e){return e({type:M}),e({type:w,payload:a})}))};return Object(d.jsxs)("div",{className:z.a.navfiltercontent,children:[Object(d.jsx)("div",{className:z.a.navfilGroup,children:Object(d.jsxs)("select",{id:"select",onChange:function(e){return a(e)},children:[Object(d.jsx)("option",{value:"ALL",children:"\uf0b0 Filter All Temperaments"},"0"),t.map((function(e){return Object(d.jsxs)("option",{value:e.name,children:["\uf11a ",e.name]},e.id)}))]})}),Object(d.jsx)("div",{className:z.a.navfilGroup,children:Object(d.jsxs)("select",{id:"select",onChange:function(e){return c(e)},children:[Object(d.jsx)("option",{value:"ALL",children:"\uf0b0  Filter All Source"}),Object(d.jsx)("option",{value:"API",children:"\uf1c9 Api"}),Object(d.jsx)("option",{value:"DB",children:"\uf1c0 Database"})]})}),Object(d.jsx)("div",{className:z.a.navfilGroup,children:Object(d.jsxs)("select",{id:"select",onChange:function(e){return r(e)},children:[Object(d.jsx)("option",{value:"ALL",children:"\uf0dc Order All"}),Object(d.jsx)("option",{value:"AZ",children:"A -\xbb Z"}),Object(d.jsx)("option",{value:"ZA",children:"Z -\xbb A"}),Object(d.jsx)("option",{value:"MoreLess",children:"\uf161 weigth"}),Object(d.jsx)("option",{value:"LessMore",children:"\uf160 weigth"})]})})]})}var K=a(48),q=a.n(K);function Q(e){var t=e.id,a=e.image,n=e.name,c=e.temperament;return Object(d.jsx)(l.b,{to:"/detail/".concat(t),children:Object(d.jsxs)("div",{className:q.a.card,children:[Object(d.jsx)("img",{src:a,alt:n}),Object(d.jsxs)("h4",{className:"breedName",children:[" ",n," "]}),Object(d.jsx)("div",{className:"breedTemnperaments",children:c})]})})}function U(){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{width:"230",src:"./sad_dog.png",alt:"error.."}),Object(d.jsx)("div",{className:"breedName",children:" No results founded ... "})]},"0")}var V=a(21),X=a.n(V);function Y(){var e=Object(u.c)((function(e){return e.breeds})),t=Object(u.c)((function(e){return e.totalPages})),a=Object(u.c)((function(e){return e.breedsPerPage})),c=Object(u.c)((function(e){return e.errorSearch})),r=Object(n.useState)(1),s=Object(S.a)(r,2),i=s[0],l=s[1],o=i*a[0],j=o-a[0],b=e.slice(j,o);return Object(d.jsx)("div",{children:c?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:X.a.cardContainer,children:Object(d.jsx)(U,{})})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(J,{}),Object(d.jsxs)("div",{className:X.a.pageNumber,children:["Page #: ",i]}),Object(d.jsx)("div",{className:X.a.cardContainer,children:b.map((function(e){return Object(d.jsx)(Q,{id:e.id,image:e.image,name:e.name,temperament:e.temperament},e.id)}))}),Object(d.jsxs)("div",{className:X.a.footer,children:[Object(d.jsx)("button",{className:X.a.buttonPag,onClick:function(){l(1===i?function(e){return 1}:function(e){return e-1})},children:" Back "}),Object(d.jsx)(G,{totalPages:t,paginateFunction:function(e){l(e)}}),Object(d.jsx)("button",{className:X.a.buttonPag,onClick:function(){l(i===t?function(e){return t}:function(e){return e+1})},children:" Next "})]}),Object(d.jsx)("p",{children:"\xa0"})]})})}var W=a(37),$=a.n(W);function ee(){var e=Object(u.c)((function(e){return e.loading})),t=Object(u.b)();return Object(n.useEffect)((function(){t(A())}),[t]),Object(d.jsx)("div",{className:$.a.homeMain,children:e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(R,{}),Object(d.jsx)("div",{className:$.a.imgLoad,children:Object(d.jsx)("img",{width:"230",src:"./DogMania/dog01.gif",alt:"loading.."})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(R,{}),Object(d.jsx)(Y,{})]})})}var te=a(5),ae=a.n(te);function ne(){var e=Object(u.b)(),t=Object(i.g)(),a=Object(i.f)(),c=Object(u.c)((function(e){return e.loading})),r=Object(u.c)((function(e){return e.breedDetail})),s=t.pathname.split("/").pop();Object(n.useEffect)((function(){var t;e((t=s,function(){var e=Object(p.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:M}),e.next=3,x.a.get("http://localhost:3001/dogs/".concat(t));case 3:return n=e.sent,e.abrupt("return",a({type:_,payload:n.data}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[e]);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{className:ae.a.navNav,children:[Object(d.jsx)("span",{className:ae.a.navLogo,children:"Dog Mania App"}),Object(d.jsxs)("ul",{className:ae.a.navMenu,children:[Object(d.jsxs)("li",{className:ae.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/home",children:[" ",Object(d.jsxs)("span",{className:ae.a.navMenuLink,onClick:function(t){return function(t){t.preventDefault(),e(A()),a.push("../home")}(t)},children:[" ",Object(d.jsx)("i",{className:"fa fa-home"})," Home"]})," "]})," "]}),Object(d.jsxs)("li",{className:ae.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/about",children:[" ",Object(d.jsxs)("span",{className:ae.a.navMenuLink,children:[" ",Object(d.jsx)("i",{className:"fa fa-info"})," About"]})," "]})," "]}),Object(d.jsxs)("li",{className:ae.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/add",children:[" ",Object(d.jsxs)("span",{className:ae.a.navMenuLink,children:[" ",Object(d.jsx)("i",{className:"fa fa-paw"})," Create"]})," "]})," "]})]})]}),c?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{width:"230",src:"../dog01.gif",alt:"error"})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:ae.a.cardContent,children:Object(d.jsx)("h1",{children:"Breed Detail:"})}),Object(d.jsx)("div",{className:ae.a.cardContent,children:Object(d.jsxs)("div",{className:ae.a.card,children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:r.image,alt:r.name})}),Object(d.jsx)("span",{className:ae.a.cardTextContent,children:Object(d.jsxs)("div",{className:ae.a.cardText,children:[Object(d.jsx)("div",{className:ae.a.detailTitle,children:"ID #:"}),Object(d.jsx)("div",{className:ae.a.detailInfo,children:r.id}),Object(d.jsx)("div",{className:ae.a.detailTitle,children:"Name :"}),Object(d.jsx)("div",{className:ae.a.detailInfo,children:r.name}),Object(d.jsx)("div",{className:ae.a.detailTitle,children:"Weight :"}),Object(d.jsxs)("div",{className:ae.a.detailInfo,children:[r.weight," Kg."]}),Object(d.jsx)("div",{className:ae.a.detailTitle,children:"Height :"}),Object(d.jsxs)("div",{className:ae.a.detailInfo,children:[r.height," cm."]}),Object(d.jsx)("div",{className:ae.a.detailTitle,children:"Life Span"}),Object(d.jsx)("div",{className:ae.a.detailInfo,children:r.life_span}),Object(d.jsx)("div",{className:ae.a.detailTitle,children:"Temperaments"}),Object(d.jsx)("div",{className:ae.a.detailInfo,children:r.temperament})]})})]})})]})]})}var ce=a(14),re=a(6),se=a(3),ie=a.n(se);function le(){var e=Object(u.b)(),t=Object(i.f)(),a=Object(u.c)((function(e){return e.temperaments})),c=Object(u.c)((function(e){return e.statePost})),r=Object(n.useState)({name:"",height:"",weight:"",life_span:"",image:""}),s=Object(S.a)(r,2),o=s[0],j=s[1],b=Object(n.useState)({}),h=Object(S.a)(b,2),O=h[0],g=h[1],v=Object(n.useState)([]),f=Object(S.a)(v,2),_=f[0],N=f[1],w=Object(n.useState)([]),y=Object(S.a)(w,2),T=y[0],M=y[1];Object(n.useEffect)((function(){e(L())}),[e]);var P=function(e){var t,a;g(function(e){var t={};return e.name?e.name.length<4?t.name="Lenght less than 4 characters":/^[a-zA-Z_ ]*$/.test(e.name)||(t.name="Name is invalid"):t.name="Name is required",e.height?/^\d{1,2}-\d{1,2}$/.test(e.height)||(t.height="Format is invalid"):t.height="Heigh is required",e.weight?/^\d{1,2}-\d{1,2}$/.test(e.weight)||(t.weight="Format is invalid"):t.weight="Heigh is required",e.life_span?/^\d{1,2}$/.test(e.life_span)||(t.life_span="Format is invalid"):t.life_span="Life Span is required",e.image?/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(e.image)||(t.image="Format of URL is invalid"):t.image="Image URL is required",t}(Object(re.a)(Object(re.a)({},o),{},(t={},Object(ce.a)(t,e.target.name,e.target.value),Object(ce.a)(t,e.target.height,e.target.value),Object(ce.a)(t,e.target.weight,e.target.value),Object(ce.a)(t,e.target.life_span,e.target.value),Object(ce.a)(t,e.target.image,e.target.value),t)))),j(Object(re.a)(Object(re.a)({},o),{},(a={},Object(ce.a)(a,e.target.name,e.target.value),Object(ce.a)(a,e.target.height,e.target.value),Object(ce.a)(a,e.target.weight,e.target.value),Object(ce.a)(a,e.target.life_span,e.target.value),Object(ce.a)(a,e.target.image,e.target.value),a)))};return Object(d.jsxs)("div",{className:ie.a.createContent,children:[Object(d.jsxs)("nav",{className:ie.a.navNav,children:[Object(d.jsx)("span",{className:ie.a.navLogo,children:"Dog Mania App"}),Object(d.jsxs)("ul",{className:ie.a.navMenu,children:[Object(d.jsxs)("li",{className:ie.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/home",children:[" ",Object(d.jsxs)("span",{className:ie.a.navMenuLink,onClick:function(a){return function(a){a.preventDefault(),e(A()),t.push("../home")}(a)},children:[" ",Object(d.jsx)("i",{className:"fa fa-home"})," Home"]})," "]})," "]}),Object(d.jsxs)("li",{className:ie.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/about",children:[" ",Object(d.jsxs)("span",{className:ie.a.navMenuLink,children:[" ",Object(d.jsx)("i",{className:"fa fa-info"})," About"]})," "]})," "]})]})]}),Object(d.jsx)("div",{className:ie.a.tittle,children:Object(d.jsx)("h1",{children:"Create New Breed"})}),Object(d.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),o.name&&o.height&&o.weight&&o.life_span&&o.image&&0!==_.length){var a={name:o.name,height:o.height,weight:o.weight,life_span:o.life_span,image:o.image,temperamentsArr:T.map((function(e){return parseInt(e)}))};e((n=a,function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("http://localhost:3001/dog",n);case 2:return a=e.sent,e.abrupt("return",t({type:C,payload:a}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),o.name="",o.height="",o.weight="",o.life_span="",o.image="",N([])}else alert("One o more fileds are empty !!");var n},children:[Object(d.jsxs)("fieldset",{children:[Object(d.jsxs)("legend",{children:[" ",Object(d.jsx)("h2",{children:"Create you new Breed"})," "]}),Object(d.jsx)("label",{children:"Name of breed"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:O.name?"".concat(ie.a.danger):"".concat(ie.a.imputCreateTxt),name:"name",placeholder:"Name for new breed..",value:o.name,onChange:P}),O.name&&Object(d.jsx)("p",{className:ie.a.danger,children:O.name}),Object(d.jsx)("p",{}),Object(d.jsx)("label",{children:"Height"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:O.height?"".concat(ie.a.danger):"".concat(ie.a.imputCreateTxt),name:"height",placeholder:"Min - Max",value:o.height,onChange:P}),O.height&&Object(d.jsx)("p",{className:ie.a.danger,children:O.height}),Object(d.jsx)("p",{}),Object(d.jsx)("label",{children:"Weight"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:O.weight?"".concat(ie.a.danger):"".concat(ie.a.imputCreateTxt),name:"weight",placeholder:"Min - Max",value:o.weight,onChange:P}),O.weight&&Object(d.jsx)("p",{className:ie.a.danger,children:O.weight}),Object(d.jsx)("p",{}),Object(d.jsx)("label",{children:"Life Span"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:O.life_span?"".concat(ie.a.danger):"".concat(ie.a.imputCreateTxt),name:"life_span",placeholder:"Max life years..",value:o.life_span,onChange:P}),O.life_span&&Object(d.jsx)("p",{className:ie.a.danger,children:O.life_span}),Object(d.jsx)("p",{}),Object(d.jsx)("label",{children:"Image"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:O.image?"".concat(ie.a.danger):"".concat(ie.a.imputCreateTxt),name:"image",placeholder:"Image URL..",value:o.image,onChange:P}),O.image&&Object(d.jsx)("p",{className:ie.a.danger,children:O.image}),Object(d.jsx)("p",{}),Object(d.jsx)("label",{children:"Temperament"}),Object(d.jsx)("br",{}),Object(d.jsxs)("select",{id:"selectTemp",onChange:function(e){return function(e){var t=document.getElementById("selectTemp"),a=document.getElementsByTagName("option"),n={id:t.value,name:a[t.value].innerHTML};M([].concat(Object(F.a)(T),[e.target.value])),N([].concat(Object(F.a)(_),[n]))}(e)},name:"selectTemp",children:[Object(d.jsx)("option",{value:"",children:"Select Temperaments"},"0"),a.map((function(e){return Object(d.jsxs)("option",{value:e.id,name:e.name,children:[e.name," "]},e.id)}))]}),Object(d.jsx)("div",{children:_.map((function(e){return Object(d.jsxs)("div",{children:[e.name," ",Object(d.jsx)("span",{onClick:function(){return function(e){var t=_.filter((function(t){return t.id!==e}));N(t)}(e.id)},className:ie.a.close,children:"[X]"})," "]},e.id)}))})]}),Object(d.jsxs)("button",{type:"submit",className:ie.a.buttonSave,children:[" ",Object(d.jsx)("i",{className:"fa fa-floppy-o"})," Save "]})]}),c?Object(d.jsx)("span",{className:ie.a.mesage,children:"New Breed save sucesfuly !"}):null]})}var oe=a(30),je=a.n(oe);function de(){return Object(d.jsx)("div",{className:je.a.contentError,children:Object(d.jsx)("div",{className:je.a.error,children:Object(d.jsxs)("div",{className:je.a.errorText,children:["Atention !!",Object(d.jsx)("p",{}),Object(d.jsx)("br",{}),"Page not found ..."]})})})}var be=a(9),ue=a.n(be);function he(){var e=Object(u.b)(),t=Object(i.f)();return Object(d.jsxs)("div",{className:ue.a.createContent,children:[Object(d.jsxs)("nav",{className:ue.a.navNav,children:[Object(d.jsx)("span",{className:ue.a.navLogo,children:"Dog Mania App"}),Object(d.jsx)("ul",{className:ue.a.navMenu,children:Object(d.jsxs)("li",{className:ue.a.navMenuItem,children:[" ",Object(d.jsxs)(l.b,{to:"/home",children:[" ",Object(d.jsxs)("span",{className:ue.a.navMenuLink,onClick:function(a){return function(a){a.preventDefault(),e(A()),t.push("../home")}(a)},children:[" ",Object(d.jsx)("i",{className:"fa fa-home"})," Home"]})," "]})," "]})})]}),Object(d.jsx)("div",{className:ue.a.tittle,children:Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"About..."})})}),Object(d.jsx)("div",{className:ue.a.tittle,children:Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"Mi name is: Alejandro Flores"})})}),Object(d.jsx)("div",{className:ue.a.tittle,children:Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:"Cohorte: FT-15A"})})}),Object(d.jsxs)("div",{className:ue.a.content,children:[Object(d.jsxs)("div",{className:ue.a.data,children:[" ",Object(d.jsx)("img",{width:"130",src:"./images/icon_nodejs.png",alt:"Node.JS"})," "]}),Object(d.jsxs)("div",{className:ue.a.data,children:[" ",Object(d.jsx)("img",{width:"130",src:"./images/icon_react.png",alt:"ReactJS"})," "]}),Object(d.jsxs)("div",{className:ue.a.data,children:[" ",Object(d.jsx)("img",{width:"130",src:"./images/icon_redux.png",alt:"Redux"})," "]}),Object(d.jsxs)("div",{className:ue.a.data,children:[" ",Object(d.jsx)("img",{width:"130",src:"./images/icon_sequelize.png",alt:"SequelizeJS"})," "]}),Object(d.jsxs)("div",{className:ue.a.data,children:[" ",Object(d.jsx)("img",{width:"130",src:"./images/icon_postgres.png",alt:"PostgreSQL"})," "]}),Object(d.jsxs)("div",{className:ue.a.data,children:[" ",Object(d.jsx)("img",{width:"130",src:"./images/icon_css.png",alt:"CSS"})," "]})]})]})}a(83);var me=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/DogMania",component:b}),Object(d.jsx)(i.a,{exact:!0,path:"/home",component:ee}),Object(d.jsx)(i.a,{exact:!0,path:"/detail/:id",component:ne}),Object(d.jsx)(i.a,{exact:!0,path:"/add",component:le}),Object(d.jsx)(i.a,{exact:!0,path:"/about",component:he}),Object(d.jsx)(i.a,{path:"*",component:de})]})})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},Oe=a(31),xe={breedsAll:[],breeds:[],breedDetail:[],temperaments:[],loading:!1,totalPages:0,breedsPerPage:[9],errorSearch:!1,statePost:!1};var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(re.a)(Object(re.a)({},e),{},{loading:!1,errorSearch:!1,breedsAll:t.payload,breeds:t.payload,totalPages:Math.ceil(t.payload.length/e.breedsPerPage[0])});case y:return Object(re.a)(Object(re.a)({},e),{},{temperaments:t.payload});case v:return Object(re.a)(Object(re.a)({},e),{},{loading:!1,errorSearch:!1,breeds:t.payload,totalPages:Math.ceil(t.payload.length/e.breedsPerPage[0])});case _:return Object(re.a)(Object(re.a)({},e),{},{loading:!1,breedDetail:t.payload,totalPages:Math.ceil(t.payload.length/e.breedsPerPage[0])});case T:var a=e.breedsAll,n=n="ALL"===t.payload?e.breedsAll:a.filter((function(e){return e.temperament&&e.temperament.includes(t.payload)}));return Object(re.a)(Object(re.a)({},e),{},{loading:!1,breeds:n,totalPages:Math.ceil(n.length/e.breedsPerPage[0])});case N:var c=e.breedsAll,r=r="ALL"===t.payload?e.breedsAll:c.filter((function(e){return e.origin===t.payload}));return Object(re.a)(Object(re.a)({},e),{},{loading:!1,breeds:r,totalPages:Math.ceil(r.length/e.breedsPerPage[0])});case w:var s=e.breeds;return"ALL"===t.payload?s.sort((function(e,t){return e.id-t.id})):"AZ"===t.payload?s.sort((function(e,t){var a=t.name,n=e.name;return a>n?-1:a<n?1:0})):"ZA"===t.payload?s.sort((function(e,t){var a=e.name,n=t.name;return a>n?-1:a<n?1:0})):"MoreLess"===t.payload?s.sort((function(e,t){return t.weight_min-e.weight_min})):s.sort((function(e,t){return e.weight_min-t.weight_min})),Object(re.a)(Object(re.a)({},e),{},{loading:!1,errorSearch:!1,breeds:s,totalPages:Math.ceil(s.length/e.breedsPerPage[0])});case C:var i=!1;return t.payload&&(i=!0),Object(re.a)(Object(re.a)({},e),{},{statePost:i});case M:return Object(re.a)(Object(re.a)({},e),{},{loading:!0});case f:return Object(re.a)(Object(re.a)({},e),{},{loading:!1,errorSearch:!0,breedDetail:t.payload});default:return e}},ve=a(49),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.b,_e=Object(Oe.c)(ge,fe(Object(Oe.a)(ve.a)));a(84);s.a.render(Object(d.jsx)(u.a,{store:_e,children:Object(d.jsx)(l.a,{children:Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(me,{})})})}),document.getElementById("root")),pe()},9:function(e,t,a){e.exports={navNav:"about_navNav__1CBTG",navLogo:"about_navLogo__1W9ex",createContent:"about_createContent__2QLVo",tittle:"about_tittle__VwaV9",content:"about_content__YYAi8",data:"about_data__1iU8j"}}},[[85,1,2]]]);
//# sourceMappingURL=main.ac584877.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports={card:"VideoGameDetails_card__Fn4Sq",img:"VideoGameDetails_img__2V-6c",area:"VideoGameDetails_area__3A63i",detalles:"VideoGameDetails_detalles__17Kq7",button:"VideoGameDetails_button__3Wr7U",descriptionName:"VideoGameDetails_descriptionName__lpoMQ",description:"VideoGameDetails_description__6Ek39",platforms:"VideoGameDetails_platforms__16jyJ",genres:"VideoGameDetails_genres__3v-6Q",rating:"VideoGameDetails_rating__3-i5a",delete:"VideoGameDetails_delete__2XYsD"}},18:function(e,t,a){e.exports={paginaEntera:"HomePage_paginaEntera__3v0DQ",header:"HomePage_header__22nuo",c3:"HomePage_c3__36z0y",paginado:"HomePage_paginado__2oVTF",cardgame:"HomePage_cardgame__1Zca2",botonHeader:"HomePage_botonHeader__18RHf",filterOrder:"HomePage_filterOrder__1ZLQx",filtros:"HomePage_filtros__CnLSj",busquedaCrear:"HomePage_busquedaCrear__1jmiS",loader:"HomePage_loader__31u0D"}},24:function(e,t,a){e.exports={container:"Vgcard_container__oSuvM",card:"Vgcard_card__1OOlM",imag:"Vgcard_imag__1cpLv",rating:"Vgcard_rating__3hQMn",name:"Vgcard_name__4RI2k",genre:"Vgcard_genre__3Gb94"}},30:function(e,t,a){e.exports={titulo:"LandingPage_titulo__6ty8x",h1:"LandingPage_h1__2xPTG",landingPage:"LandingPage_landingPage__4tEj0",button:"LandingPage_button__23Wbb"}},31:function(e,t,a){e.exports={text:"error_text__1ohRs",error:"error_error__rvsOz",errortext:"error_errortext__2eZrp",bot:"error_bot__2AW2H"}},40:function(e,t,a){e.exports={pagination:"Paging_pagination__yUkjI",lala:"Paging_lala__3odRX"}},41:function(e,t,a){e.exports={sbcontainer:"SearchBar_sbcontainer__2uWAp",sbbot:"SearchBar_sbbot__2vRTh",sbinput:"SearchBar_sbinput__2_gIb"}},53:function(e,t,a){e.exports={loader:"Loader_loader__13Lii"}},59:function(e,t,a){},60:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(32),i=a.n(c),s=(a(59),a(60),a(16)),o=a(6),l=a(8),d=a(7),u=a(11),j="GET_VIDEOGAMES",b="GET_GENRES",m="GET_PLATFORMS",g="GENRES_FILTER",p="VIDEOGAMES_ORIGIN",O="SORT_VGAMES",h="GET_VGAMES_BY_NAME",_="POST_VGAME",f="GET_VGAME_BY_ID",v="DELETE_VGAME",x="GET_CLEAN",N=a(12);function y(){return function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("http://localhost:3001/genres");case 3:return a=e.sent,e.abrupt("return",t({type:b,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("Error en GET_GENRES: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function E(){return function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("http://localhost:3001/videogames");case 3:return a=e.sent,e.abrupt("return",t({type:j,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("Error en GET_VIDEOGAMES: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function A(e){return{type:O,payload:e}}var D=a(30),G=a.n(D),V=a(0);function P(){var e=Object(l.b)();return Object(r.useEffect)((function(){e(function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("http://localhost:3001/platforms");case 3:return a=e.sent,e.abrupt("return",t({type:m,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("Error en GET_PLATFORMS: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),e(y()),e(E())}),[e]),Object(V.jsxs)("div",{className:G.a.landingPage,children:[Object(V.jsx)("div",{className:G.a.titulo,children:Object(V.jsx)("h1",{className:G.a.h1,children:"Videojuegos Henry PI"})}),Object(V.jsx)(s.b,{to:"/videogames",children:Object(V.jsx)("button",{className:G.a.button,onClick:function(t){e(A("asc"))},children:"Start Game"})})]})}var S=a(23),w=a(18),C=a.n(w),T=a(40),M=a.n(T);function R(e){for(var t=e.vgamesPerPage,a=e.allVgames,r=e.actualPage,n=[],c=Math.ceil(a/t),i=0;i<c;i++)n.push(i+1);return Object(V.jsx)("nav",{children:Object(V.jsx)("ul",{className:M.a.pagination,children:n&&n.map((function(e){return Object(V.jsx)("li",{className:M.a.pagenr,children:Object(V.jsx)("button",{id:M.a.lala,onClick:function(){return r(e)},children:e})},e)}))})})}var H=a(41),L=a.n(H);function k(){var e=Object(l.b)(),t=Object(r.useState)(""),a=Object(S.a)(t,2),n=a[0],c=a[1];function i(t){t.preventDefault(),e(function(e){return function(){var t=Object(u.a)(Object(d.a)().mark((function t(a){var r;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("http://localhost:3001/videogames?name=".concat(e));case 3:return r=t.sent,t.abrupt("return",a({type:h,payload:r.data}));case 7:t.prev=7,t.t0=t.catch(0),alert("Juego ".concat(e," no encontrado.")),window.location.replace("http://localhost:3000/videogames");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n)),c("")}return Object(V.jsxs)("div",{className:L.a.sbcontainer,children:[Object(V.jsx)("input",{className:L.a.sbinput,onChange:function(e){return function(e){e.preventDefault(),c(e.target.value)}(e)},type:"text",placeholder:"Search by name",value:n}),Object(V.jsx)("button",{className:L.a.sbbot,onClick:function(e){return i(e)},type:"submit",children:"Search"})]})}var I=a(53),Y=a.n(I),B=function(){return Object(V.jsx)("div",{className:Y.a.loader,children:"Loading..."})},q=a(24),F=a.n(q);function J(e){var t=e.name,a=e.image,r=e.genres,n=e.rating,c=r.split(",");return c.length>2&&(c=c.slice(0,2)),c=1===c.length?c.toString():c.toString()+" (...)",Object(V.jsx)("div",{className:F.a.container,children:Object(V.jsxs)("div",{className:F.a.card,children:[Object(V.jsx)("h4",{className:F.a.name,children:t}),Object(V.jsx)("img",{className:F.a.imag,src:a,alt:"Not Found"}),Object(V.jsx)("p",{className:F.a.genre,children:c}),Object(V.jsx)("span",{className:F.a.rating,children:n})]})})}function Q(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.videogames})),a=Object(l.c)((function(e){return e.genres})),n=Object(r.useState)(1),c=Object(S.a)(n,2),i=c[0],o=c[1],d=Object(r.useState)(15),u=Object(S.a)(d,1)[0],j=i*u,b=j-u,m=t.slice(b,j);function O(t){var a;t.preventDefault(),e((a=t.target.value,{type:g,payload:a}))}function h(t){var a;e((a=t.target.value,{type:p,payload:a})),o(1)}return Object(r.useEffect)((function(){e(y())}),[e]),Object(r.useEffect)((function(){0===t.length&&e(E())}),[t.length,e]),0===t.length?Object(V.jsx)("div",{className:C.a.loader,children:Object(V.jsx)(B,{})}):Object(V.jsxs)("div",{className:C.a.paginaEntera,children:[Object(V.jsxs)("div",{className:C.a.header,children:[Object(V.jsxs)("div",{className:C.a.busquedaCrear,children:[Object(V.jsx)("div",{children:Object(V.jsx)("button",{className:C.a.botonHeader,onClick:function(t){!function(t){t.preventDefault(),e(E())}(t)},children:"Cargar todos los Juegos"})}),Object(V.jsx)("div",{children:Object(V.jsx)(k,{})}),Object(V.jsx)("div",{children:Object(V.jsx)(s.b,{to:"/videogame",children:Object(V.jsx)("button",{className:C.a.botonHeader,children:"Crear Juego"})})})]}),Object(V.jsxs)("div",{className:C.a.filtros,children:[Object(V.jsx)("div",{children:Object(V.jsx)("select",{className:C.a.filterOrder,onChange:function(e){return O(e)},children:a.sort().map((function(e){return Object(V.jsx)("option",{value:e,children:e})}))})}),Object(V.jsx)("div",{children:Object(V.jsxs)("select",{className:C.a.filterOrder,onChange:function(t){return function(t){t.preventDefault(),e(A(t.target.value)),e(y())}(t)},children:[Object(V.jsx)("option",{value:"asc",children:"Forward"}),Object(V.jsx)("option",{value:"desc",children:"Backward"}),Object(V.jsx)("option",{value:"rating",children:"Rating"}),Object(V.jsx)("option",{value:"asc",children:"A-Z"}),Object(V.jsx)("option",{value:"desc",children:"Z-A"})]})}),Object(V.jsx)("div",{children:Object(V.jsxs)("select",{className:C.a.filterOrder,onChange:function(e){return h(e)},children:[Object(V.jsx)("option",{value:"All",children:"Api+DB Games"}),Object(V.jsx)("option",{value:"DB",children:"Db Games"}),Object(V.jsx)("option",{value:"API",children:"Api Games"})]})})]})]}),Object(V.jsx)("div",{className:C.a.paginado,children:Object(V.jsx)(R,{vgamesPerPage:u,allVgames:t.length,currpage:i,actualPage:function(e){o(e)}})}),Object(V.jsx)("div",{className:C.a.cardgame,children:m&&m.map((function(e){return Object(V.jsx)(s.b,{to:"/videogame/"+e.id,children:Object(V.jsx)(J,{id:e.id,name:e.name,image:e.image,genres:e.genres,rating:e.rating})},e.id)}))})]})}var X=a(46),Z=a(29),U=a(3);var W=a(9),$=a.n(W);function z(){var e=Object(l.b)(),t=Object(o.f)(),a=Object(r.useState)({name:"",description:"",reldate:"",rating:"",platform:[],genre:[]}),n=Object(S.a)(a,2),c=n[0],i=n[1],j=Object(r.useState)({}),b=Object(S.a)(j,2),m=b[0],g=b[1],p=Object(l.c)((function(e){return e.genres})),O=Object(l.c)((function(e){return e.platforms}));function h(e){i(Object(U.a)(Object(U.a)({},c),{},Object(Z.a)({},e.target.name,e.target.value))),g(function(e){var t={};return e.name?!e.rating||e.rating<0||e.rating>5?t.rating="Rating debe ser entre 0-5":e.reldate&&/^\d{1,2}\-\d{1,2}\-\d{4}$/.test(e.reldate)?0===e.platform.length?t.platform="Se requiere minimo una Platform":0===e.genre.length&&(t.genre="Se requiere minimo un Genre"):t.reldate="Release Date de ser en formato DD-MM-YYYY":t.name="Se requiere un Nombre",t}(Object(U.a)(Object(U.a)({},c),{},Object(Z.a)({},e.target.name,e.target.value))))}return p=p.filter((function(e){return"All"!==e})),Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)("div",{className:$.a.page,children:[Object(V.jsx)("h1",{className:$.a.titulo,children:"Crea tu propio Videojuego"}),Object(V.jsx)("div",{className:$.a.card,children:Object(V.jsxs)("form",{className:$.a.formArea,onSubmit:function(a){return a.preventDefault(),c.name?/^\d{1,2}\-\d{1,2}\-\d{4}$/.test(c.reldate)?c.rating?!/^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/.test(c.rating)||c.rating<0||c.rating>5?alert("Formato erroneo de Rating, deberia ser un numero entre 0-5"):0===c.platform.length?alert("La Platform es requerida"):0===c.genre.length?alert("El Genre es requerido"):(e((r=c,function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("http://localhost:3001/videogames",r);case 2:return a=e.sent,e.abrupt("return",t({type:_,payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(E()),alert("Has creado el juego ".concat(c.name," exitosamente")),i({name:"",description:"",reldate:"",rating:0,platform:[],genre:[]}),void t.push("/videogames")):alert("Rating es requerido"):alert("Formato erroneo de Release Date, deberia ser DD-MM-YYYY"):alert("Nombre es requerido");var r},children:[Object(V.jsxs)("div",{className:$.a.descriptionArea,children:[Object(V.jsx)("label",{children:"Description:"}),Object(V.jsx)("textarea",{onChange:h,type:"text",name:"description",value:c.description})]}),Object(V.jsxs)("div",{className:$.a.detailsArea,children:[Object(V.jsx)("label",{children:"Game Name:"}),Object(V.jsx)("input",{onChange:h,onBlur:h,type:"text",name:"name",value:c.name}),m.name&&Object(V.jsxs)("p",{className:$.a.error,children:[" ",m.name," "]}),Object(V.jsx)("label",{children:"Released date:"}),Object(V.jsx)("input",{onChange:h,type:"text",name:"reldate",value:c.reldate,placeholder:"DD-MM-YYYY"}),m.reldate&&Object(V.jsxs)("p",{className:$.a.error,children:[" ",m.reldate," "]}),Object(V.jsx)("label",{children:"Rating:"}),Object(V.jsx)("input",{onChange:h,onBlur:h,type:"text",name:"rating",value:c.rating,placeholder:"ex 4.3"}),m.rating&&Object(V.jsxs)("p",{className:$.a.error,children:[" ",m.rating," "]}),Object(V.jsx)("label",{children:"Platforms:"}),Object(V.jsx)("select",{className:$.a.platform,onChange:function(e){i(Object(U.a)(Object(U.a)({},c),{},{platform:[].concat(Object(X.a)(c.platform),[e.target.value])}))},children:O.sort().map((function(e){return Object(V.jsx)("option",{value:e,children:e})}))}),Object(V.jsx)("ul",{children:Object(V.jsx)("li",{children:c.platform.map((function(e){return e+" ,"}))})}),m.platform&&Object(V.jsxs)("p",{className:$.a.error,children:[" ",m.platform," "]}),Object(V.jsx)("label",{children:"Genres:"}),Object(V.jsx)("select",{className:$.a.genres,onChange:function(e){i(Object(U.a)(Object(U.a)({},c),{},{genre:[].concat(Object(X.a)(c.genre),[e.target.value])}))},children:p.sort().map((function(e){return Object(V.jsx)("option",{value:e,children:e})}))}),Object(V.jsx)("ul",{children:Object(V.jsx)("li",{children:c.genre.map((function(e){return e+" ,"}))})}),m.genre&&Object(V.jsxs)("p",{className:$.a.error,children:[" ",m.genre," "]}),Object(V.jsx)("button",{className:$.a.bot,type:"submit",children:"Agregar juego"}),Object(V.jsxs)("span",{children:[Object(V.jsx)(s.b,{to:"/videogames",children:Object(V.jsx)("button",{className:$.a.bot2,children:"Volver a Home"})})," "]})]})]})})]})})}var K=a(10),ee=a.n(K);var te=function(e){return function(){var t=Object(u.a)(Object(d.a)().mark((function t(a){return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.delete("http://localhost:3001/videogames/".concat(e)).then((function(e){return a({type:v,payload:e.data})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};function ae(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.videodetails}));return Object(r.useEffect)((function(){var a;return t((a=e.match.params.id,function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("http://localhost:3001/videogames/".concat(a));case 3:return r=e.sent,e.abrupt("return",t({type:f,payload:r.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("Error in Action GET_VGAMES_BY_ID: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),function(){t({type:x})}}),[t]),0===a.length?Object(V.jsx)("div",{className:ee.a.loader,children:Object(V.jsx)(B,{})}):Object(V.jsx)("div",{className:ee.a.card,children:Object(V.jsxs)("div",{className:ee.a.area,children:[Object(V.jsx)("div",{className:ee.a.detalles,children:Object(V.jsxs)("h2",{children:[a.name,"details"]})}),Object(V.jsx)("img",{className:ee.a.img,src:a.image,alt:""}),Object(V.jsx)("h3",{className:ee.a.descriptionName,children:"Description"}),Object(V.jsx)("h5",{className:ee.a.description,children:a.description}),Object(V.jsx)("div",{className:ee.a.detalles,children:Object(V.jsx)("h4",{className:ee.a.rating,children:"Rating: ".concat(a.rating)})}),Object(V.jsx)("div",{className:ee.a.detalles,children:Object(V.jsx)("h4",{children:"Released date: ".concat(a.released)})}),Object(V.jsx)("h4",{className:ee.a.platforms,children:"Platforms: ".concat(a.platforms)}),Object(V.jsx)("h4",{className:ee.a.genres,children:"Genres: ".concat(a.genres)}),Object(V.jsx)(s.b,{to:"/videogames",children:Object(V.jsx)("button",{className:ee.a.button,children:"Volver al Home"})}),Object(V.jsx)("div",{className:ee.a.contenedorDelete,children:Object(V.jsx)("button",{className:ee.a.delete,onClick:function(a){a.preventDefault(),t(te(e.match.params.id)),alert("Juego eliminado"),window.location.replace("http://localhost:3000/videogames")},children:"Eliminar Juego"})})]})})}var re=a(31),ne=a.n(re);var ce=function(){return Object(V.jsxs)("div",{className:ne.a.error,children:[Object(V.jsx)("p",{className:ne.a.text,children:"Esa pagina no existe pero has desbloqueado nuevo logro:"}),Object(V.jsx)("p",{className:ne.a.errortext,children:" 404 error"}),Object(V.jsx)("span",{children:Object(V.jsx)(s.b,{to:"/videogames",children:Object(V.jsx)("button",{className:ne.a.bot,children:"Volver a Home"})})})]})};var ie=function(){return Object(V.jsx)(s.a,{children:Object(V.jsx)("div",{className:"App",children:Object(V.jsxs)(o.c,{children:[Object(V.jsx)(o.a,{exact:!0,path:"/",component:P}),Object(V.jsx)(o.a,{exact:!0,path:"/videogame",component:z}),Object(V.jsx)(o.a,{exact:!0,path:"/videogame/:id",component:ae}),Object(V.jsx)(o.a,{exact:!0,path:"/videogames",component:Q}),Object(V.jsx)(o.a,{path:"*",component:ce})]})})})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))},oe=a(42),le={videogames:[],videodetails:[],vgfilter:[],genres:[],platforms:[]};var de=a(54),ue="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.b,je=Object(oe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload?Object(U.a)(Object(U.a)({},e),{},{videogames:t.payload,vgfilter:t.payload}):Object(U.a)(Object(U.a)({},e),{},{videogames:[]});case h:return Object(U.a)(Object(U.a)({},e),{},{videogames:t.payload});case f:return Object(U.a)(Object(U.a)({},e),{},{videodetails:t.payload});case b:var a=t.payload;return a.unshift("All"),Object(U.a)(Object(U.a)({},e),{},{genres:a});case m:return Object(U.a)(Object(U.a)({},e),{},{platforms:t.payload});case g:var r=e.vgfilter,n="All"===t.payload?r:r.filter((function(e){return e.genres.includes(t.payload)}));return 0===n.length?(alert("No hay videojuegos con el genero ".concat(t.payload)),e):Object(U.a)(Object(U.a)({},e),{},{videogames:n});case _:return Object(U.a)({},e);case v:return Object(U.a)(Object(U.a)({},e),{},{videodetails:e.videodetails.filter((function(e){return e.id!==t.payload}))});case p:var c=e.vgfilter,i="DB"===t.payload?c.filter((function(e){return"DB"===e.origin})):c.filter((function(e){return"API"===e.origin}));return Object(U.a)(Object(U.a)({},e),{},{videogames:"All"===t.payload?e.vgfilter:i});case O:if("rating"===t.payload){var s=e.videogames.sort((function(e,t){return e.rating>t.rating?-1:t.rating>e.rating?1:0}));return Object(U.a)(Object(U.a)({},e),{},{videogames:s})}var o="asc"===t.payload?e.videogames.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):e.videogames.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(U.a)(Object(U.a)({},e),{},{videogames:o});case x:return Object(U.a)(Object(U.a)({},e),{},{videodetails:[]});default:return e}}),ue(Object(oe.a)(de.a))),be=je;i.a.render(Object(V.jsx)(l.a,{store:be,children:Object(V.jsx)(n.a.StrictMode,{children:Object(V.jsx)(ie,{})})}),document.getElementById("root")),se()},9:function(e,t,a){e.exports={page:"AddVideogame_page__1gxga",card:"AddVideogame_card__2XvAJ",titulo:"AddVideogame_titulo__Ja6n_",formArea:"AddVideogame_formArea__1aA1G",descriptionArea:"AddVideogame_descriptionArea__1mXLK",detailsArea:"AddVideogame_detailsArea__r9j-l",error:"AddVideogame_error__1DZsd",bot:"AddVideogame_bot__2Gmy7",bot2:"AddVideogame_bot2__QqT-U",platform:"AddVideogame_platform__T_XoE",genres:"AddVideogame_genres__1PPTQ"}}},[[75,1,2]]]);
//# sourceMappingURL=main.19d12472.chunk.js.map
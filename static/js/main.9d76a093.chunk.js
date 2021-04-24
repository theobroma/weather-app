(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{108:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(36),i=(n(80),n(11)),o=n(58),s=n(136),l=n(137),d=n(138),j=n(130),u=n(69),b=n(22),h=n(14),O=n(128),x=n(142),p=n(129),f=n(131),m=n(114),y=n(2),g=Object(O.a)((function(e){return Object(h.a)({},Object(x.a)({grow:{flexGrow:1},title:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"})}))})),v=function(){var e=g();return Object(y.jsx)("div",{className:e.grow,children:Object(y.jsx)(p.a,{position:"static",children:Object(y.jsx)(j.a,{maxWidth:"lg",children:Object(y.jsxs)(f.a,{style:{padding:0},children:[Object(y.jsx)(m.a,{className:e.title,variant:"h6",noWrap:!0,children:"Weather App"}),Object(y.jsx)("div",{className:e.grow})]})})})})},S=function(e){return e.currentWeather},W=n(18),w=n.n(W),k=n(26),C=n(13),N=n(63),L="ad86b534a1a14d4891f171701201710",T=n.n(N).a.create({baseURL:"https://api.weatherapi.com/v1"}),_=function(e,t){return T.get("/current.json?key=".concat(L,"&q=").concat(e,",").concat(t))},A=Object(C.b)("currentWeather/getUserCoordinatesTC",(function(e,t){navigator.geolocation.getCurrentPosition((function(e){t.dispatch(E({lat:e.coords.latitude,lon:e.coords.longitude}))}))})),z=Object(C.b)("currentWeather/getCurrentWeather",function(){var e=Object(k.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t.lat,t.lon);case 3:return a=e.sent,n.dispatch(U(a.data.location)),e.abrupt("return",{currentWeather:a.data.current});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(C.c)({name:"currentWeather",initialState:{lat:0,lon:0,location:{},currentWeather:{}},reducers:{userCoordinatesAC:function(e,t){e.lat=t.payload.lat,e.lon=t.payload.lon},setLocationAC:function(e,t){e.location=t.payload}},extraReducers:function(e){e.addCase(z.fulfilled,(function(e,t){t.payload&&(e.currentWeather=t.payload.currentWeather)}))}}),B=F.reducer,D=F.actions,E=D.userCoordinatesAC,U=D.setLocationAC,R=n(19),q=n(20),G=n(132),I=Object(O.a)((function(e){return Object(h.a)({},Object(x.a)({condition:{position:"absolute",width:"150px",opacity:.15},conditionText:{fontSize:30,fontWeight:300},temperatureWrap:{position:"relative"},temperature:Object(b.a)({lineHeight:1,fontSize:140,fontWeight:700},e.breakpoints.down("xs"),{fontSize:75})}))})),P=function(e){var t=e.temp,n=e.condition,a=I();return Object(y.jsxs)(d.a,{className:a.temperatureWrap,children:[Object(y.jsx)("img",{src:null===n||void 0===n?void 0:n.icon,className:a.condition,width:"150",alt:"condition"}),Object(y.jsxs)(d.a,{pt:5,children:[Object(y.jsxs)(m.a,{className:a.temperature,component:"p",variant:"subtitle1",color:"textSecondary",align:"center",children:[t,"\xb0C"]}),Object(y.jsx)(m.a,{className:a.conditionText,component:"p",variant:"subtitle1",color:"textSecondary",align:"center",children:null===n||void 0===n?void 0:n.text})]})]})},V=Object(O.a)((function(){return Object(h.a)({},Object(x.a)({title:{paddingLeft:10,paddingRight:7}}))})),H=function(e){var t=e.currentWeather,n=t.temp_c,a=t.condition,c=t.last_updated,r=t.humidity,i=t.wind_kph,o=t.wind_dir,s=t.gust_kph,l=V(),j=new Date(c),u=j.toLocaleString("en-US",{weekday:"long"}),b=j.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"});return Object(y.jsxs)("div",{children:[Object(y.jsxs)(G.a,{container:!0,spacing:1,children:[Object(y.jsx)(G.a,{item:!0,xs:12,md:6,children:Object(y.jsx)(P,{temp:n,condition:a})}),Object(y.jsx)(G.a,{item:!0,xs:12,md:6,children:Object(y.jsxs)("div",{children:[Object(y.jsxs)(d.a,{my:2,children:[Object(y.jsx)(m.a,{color:"textSecondary",display:"inline",children:Object(y.jsx)(R.a,{icon:q.b})}),Object(y.jsx)(m.a,{className:l.title,color:"textSecondary",display:"inline",children:"Today:"}),Object(y.jsxs)(m.a,{variant:"subtitle1",align:"center",display:"inline",children:[u," ",b]})]}),Object(y.jsxs)(d.a,{my:2,children:[Object(y.jsx)(m.a,{color:"textSecondary",display:"inline",children:Object(y.jsx)(R.a,{icon:q.e})}),Object(y.jsx)(m.a,{className:l.title,color:"textSecondary",display:"inline",children:"Feels Like:"}),Object(y.jsxs)(m.a,{variant:"subtitle1",align:"center",display:"inline",children:[n,"\xb0C"]})]}),Object(y.jsxs)(d.a,{my:2,children:[Object(y.jsx)(m.a,{color:"textSecondary",display:"inline",children:Object(y.jsx)(R.a,{icon:q.f})}),Object(y.jsx)(m.a,{className:l.title,color:"textSecondary",display:"inline",children:"Humidity:"}),Object(y.jsxs)(m.a,{variant:"subtitle1",align:"center",display:"inline",children:[r," %"]})]}),Object(y.jsxs)(d.a,{my:2,children:[Object(y.jsx)(m.a,{color:"textSecondary",display:"inline",children:Object(y.jsx)(R.a,{icon:q.g})}),Object(y.jsx)(m.a,{className:l.title,color:"textSecondary",display:"inline",children:"Wind:"}),Object(y.jsxs)(m.a,{variant:"subtitle1",align:"center",display:"inline",children:[i," km/h (",o,")"]})]}),Object(y.jsxs)(d.a,{my:2,children:[Object(y.jsx)(m.a,{color:"textSecondary",display:"inline",children:Object(y.jsx)(R.a,{icon:q.a})}),Object(y.jsx)(m.a,{className:l.title,color:"textSecondary",display:"inline",children:"Gust:"}),Object(y.jsx)(m.a,{variant:"subtitle1",align:"center",display:"inline",children:s})]})]})})]}),Object(y.jsx)("div",{})]})},J=Object(O.a)((function(){return Object(h.a)({},Object(x.a)({title:{fontSize:30,fontWeight:300}}))})),M=function(e){var t=e.location,n=J();return Object(y.jsx)("div",{children:Object(y.jsxs)(m.a,{className:n.title,component:"h2",variant:"h6",children:[t.name,", ",t.region,", ",t.country]})})},$=function(){var e=Object(i.b)(),t=Object(i.c)(S),n=t.lon,c=t.lat,r=t.location,o=t.currentWeather;return Object(a.useEffect)((function(){0!==c&&0!==n&&e(z({lat:c,lon:n}))}),[c,n,e]),Object(y.jsxs)(d.a,{p:3,children:[Object(y.jsx)(M,{location:r}),Object(y.jsx)(H,{currentWeather:o})]})},K=n(68),Q=function(e){return e.forecast.forecastday},X=function(e,t,n){return T.get("/forecast.json?key=".concat(L,"&q=").concat(t,",").concat(n,"&days=").concat(e))},Y=Object(C.b)("forecast/getForecast",function(){var e=Object(k.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X(t.days,t.lat,t.lon);case 3:return a=e.sent,e.abrupt("return",{forecastday:a.data.forecast.forecastday});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.response.data));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),Z=Object(C.c)({name:"forecast",initialState:{forecastday:[]},reducers:{},extraReducers:function(e){e.addCase(Y.fulfilled,(function(e,t){t.payload&&(e.forecastday=t.payload.forecastday)}))}}).reducer,ee=n(133),te=n(134),ne=Object(O.a)((function(e){return Object(h.a)({},Object(x.a)({root:Object(b.a)({minWidth:275},e.breakpoints.down("sm"),{marginBottom:16}),title:{fontSize:14},pos:{marginBottom:6},temperature:{fontWeight:300,fontSize:"24px"}}))})),ae=function(e){var t=e.weekDay,n=e.date,a=e.sunrise,c=e.sunset,r=e.icon,i=e.condition_text,o=e.min_temp,s=e.max_temp,l=ne();return Object(y.jsx)(ee.a,{className:l.root,children:Object(y.jsxs)(te.a,{children:[Object(y.jsx)(m.a,{className:l.title,color:"textSecondary",gutterBottom:!0,align:"center",children:t}),Object(y.jsx)(m.a,{className:l.pos,color:"textSecondary",align:"center",children:n}),Object(y.jsx)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:Object(y.jsx)("img",{src:r,alt:"icon"})}),Object(y.jsx)(m.a,{className:l.pos,color:"textSecondary",align:"center",style:{marginBottom:24},children:i}),Object(y.jsxs)(m.a,{className:l.temperature,color:"textSecondary",align:"center",style:{marginBottom:24},children:[o," - ",s,"\xb0C"]}),Object(y.jsxs)(m.a,{className:l.pos,color:"textSecondary",align:"center",children:[Object(y.jsx)(R.a,{icon:q.d})," ",a]}),Object(y.jsxs)(m.a,{className:l.pos,color:"textSecondary",align:"center",children:[Object(y.jsx)(R.a,{icon:q.c})," ",c]})]})})},ce=function(){var e=Object(i.b)(),t=Object(i.c)(S),n=t.lon,c=t.lat,r=Object(i.c)(Q);Object(a.useEffect)((function(){0!==c&&0!==n&&e(Y({days:3,lat:c,lon:n}))}),[c,n,3,e]);var o={weekday:"long"},s={year:"numeric",month:"long",day:"numeric"};return Object(y.jsxs)(d.a,{p:3,children:[Object(y.jsx)(d.a,{mb:1,children:Object(y.jsx)(m.a,{variant:"h6",noWrap:!0,children:"Forecast"})}),Object(y.jsx)(d.a,{children:Object(y.jsx)(G.a,{container:!0,spacing:1,children:r.map((function(e){var t=new Date(e.date);return Object(y.jsx)(G.a,{item:!0,xs:12,md:4,children:Object(y.jsx)(ae,{weekDay:t.toLocaleString("en-US",o),date:t.toLocaleString("en-US",s),sunrise:e.astro.sunrise,sunset:e.astro.sunset,icon:e.day.condition.icon,condition_text:e.day.condition.text,min_temp:e.day.mintemp_c,max_temp:e.day.maxtemp_c})},Object(K.a)(8))}))})})]})},re=n(42),ie=n(143),oe=n(141),se=n(139),le=n(135);var de=function(e){return e.search.data},je=function(e){return T.get("/search.json?key=".concat(L,"&q=").concat(e))},ue=Object(C.b)("search/searchTC",function(){var e=Object(k.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je(t);case 3:return a=e.sent,e.abrupt("return",{data:a.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.response.data));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()),be=Object(C.c)({name:"search",initialState:{data:[]},reducers:{clearData:function(e){e.data=[]}},extraReducers:function(e){e.addCase(ue.fulfilled,(function(e,t){t.payload&&(e.data=t.payload.data)}))}}),he=be.reducer,Oe=be.actions.clearData,xe=function(){var e=Object(i.b)(),t=Object(i.c)(de),n=Object(a.useState)(""),c=Object(re.a)(n,2),r=c[0],o=c[1],s=function(e,t){var n=Object(a.useState)(e),c=Object(re.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){i(e)}),t);return function(){clearTimeout(n)}}),[e,t]),r}(r,300),l=Object(a.useCallback)((function(t,n){e(z({lat:t,lon:n})),e(Y({days:3,lat:t,lon:n})),e(Oe()),o("")}),[e]);Object(a.useEffect)((function(){s.length>2&&e(ue(s))}),[s,e]);return Object(y.jsxs)(d.a,{p:3,children:[Object(y.jsxs)(ie.a,{fullWidth:!0,variant:"outlined",children:[Object(y.jsx)(oe.a,{htmlFor:"search-input",children:"Search"}),Object(y.jsx)(se.a,{id:"search-input",value:r,onChange:function(e){o(e.currentTarget.value.trim())},startAdornment:Object(y.jsx)(le.a,{position:"start",children:"$"}),labelWidth:60})]}),t.map((function(e){return Object(y.jsx)("div",{onClick:function(){return l(e.lat,e.lon)},role:"menuitem","aria-hidden":!0,children:e.name},e.id)}))]})},pe=Object(O.a)((function(){return Object(h.a)({},Object(x.a)({grow:{flexGrow:1},copyright:{textAlign:"center",marginBottom:0,fontSize:16}}))})),fe=function(){var e=pe();return Object(y.jsx)(p.a,{position:"static",children:Object(y.jsx)(j.a,{maxWidth:"lg",children:Object(y.jsx)(f.a,{style:{padding:0},children:Object(y.jsx)(m.a,{className:e.copyright,variant:"h6",noWrap:!0,children:"\xa9 created by Aleksandr Siryi"})})})})},me=function(){var e=Object(i.b)();return Object(a.useEffect)((function(){e(A())}),[e]),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(d.a,{mb:2,children:Object(y.jsx)(v,{})}),Object(y.jsxs)(j.a,{maxWidth:"lg",children:[Object(y.jsx)(d.a,{mb:2,children:Object(y.jsx)(u.a,{elevation:3,children:Object(y.jsx)(xe,{})})}),Object(y.jsx)(d.a,{mb:2,children:Object(y.jsx)(u.a,{elevation:3,children:Object(y.jsx)($,{})})}),Object(y.jsx)(d.a,{mb:2,children:Object(y.jsx)(u.a,{elevation:3,children:Object(y.jsx)(ce,{})})})]}),Object(y.jsx)(fe,{})]})},ye=n(67),ge=n(64),ve=n(21),Se=n(65),We=n.n(Se),we=n(9),ke=Object(we.c)({currentWeather:B,forecast:Z,search:he}),Ce=Object(ge.createLogger)({collapsed:!0}),Ne={key:"root",storage:We.a,whitelist:["none"]},Le=Object(ve.g)(Ne,ke),Te=[].concat(Object(ye.a)(Object(C.d)({thunk:!0,serializableCheck:{ignoredActions:[ve.a,ve.f,ve.b,ve.c,ve.d,ve.e]}})),[Ce]),_e=Object(C.a)({reducer:Le,middleware:Te,devTools:!0}),Ae=Object(ve.h)(_e),ze=function(){return Object(y.jsx)("div",{children:"Loading..."})},Fe=n(66),Be=Object(Fe.a)({typography:{fontFamily:'"Open Sans", sans-serif',fontSize:14},palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Ee=(n(108),n(109),document.getElementById("root"));Object(r.render)(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(i.a,{store:_e,children:Object(y.jsx)(o.a,{loading:Object(y.jsx)(ze,{}),persistor:Ae,children:Object(y.jsxs)(s.a,{theme:Be,children:[Object(y.jsx)(l.a,{}),Object(y.jsx)(me,{})]})})})}),Ee),De()},80:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.9d76a093.chunk.js.map
(this.webpackJsonpinrainorshine=this.webpackJsonpinrainorshine||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"APIkey":"0a12db146c850ff71f959d2eac0d28ef"}')},40:function(e,a,t){e.exports=t(99)},45:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},66:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(35),s=t.n(c),i=(t(45),t(13)),l=t.n(i),o=t(16),u=t(7),h=t(8),d=t(9),m=t(10),p=(t(47),t(20)),f=t(14),y=(t(48),t(17)),v=t.n(y),g=t(36),E=t.n(g),w=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={city:void 0,isLoading:void 0,results:[]},e.handleShowSearchResults=function(e,a){(e.length||0===e.length)&&a.length>1?document.querySelector(".Search-results").classList.add("show"):document.querySelector(".Search-results").classList.remove("show")},e.handleClearSearch=function(a){e.setState({city:a}),document.querySelector(".Search").value="",document.querySelector(".Search-results").classList.remove("show"),setTimeout((function(){e.handleSendSearchRequestData(a)}),200)},e.handleSendSearchRequestData=function(){e.props.parentCallbackSearchData(e.state)},e}return Object(h.a)(t,[{key:"handleFetchSearchResults",value:function(){var e=Object(o.a)(l.a.mark((function e(a){var t,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.target.value,n=[],!(t.length>=2)){e.next=8;break}return e.next=5,v.a.get("https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=".concat(t,"&apiKey=").concat("cB21szIO9BPCX6bU9ZYfWRg0ttZ9ugXptQxsJXUsVA4"));case 5:r=e.sent,0!==(c=r.data.suggestions).length&&(c.map((function(e){if("county"===e.matchLevel&&void 0!==e.address.county){var a={name:e.address.county,country:E()(e.countryCode)};return n.push(a)}return null})),this.setState({city:t,isLoading:!0,results:n}));case 8:this.handleShowSearchResults(n,t);case 9:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state.results;return r.a.createElement("div",{className:"Search-container"},r.a.createElement("input",{className:"Search",type:"text",placeholder:"Search by typing the name of the city",onChange:function(a){return e.handleFetchSearchResults(a)}}),r.a.createElement("button",{className:"Search-button",onClick:function(){return e.handleSendSearchRequestData()}},"Search"),r.a.createElement("div",{className:"Search-results"},0!==a.length?a.map((function(a,t){return r.a.createElement("p",{className:"Search-result",key:"result"+t,onClick:function(){return e.handleClearSearch(a.name+","+a.country)}}," ",a.name+", "+a.country," ")})):r.a.createElement("p",{className:"Search-result"},"No results")))}}]),t}(n.Component),S=(t(66),t(1)),b=t(37),k=(t(91),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0},e}return Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Loader-wrapper"},r.a.createElement(b.BounceLoader,{color:"white",loading:this.state.isLoading,className:"Loader"}))}}]),t}(n.Component)),N=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c)))._isMounted=!1,e.state={isLoading:e.props.isLoading},e.handleLoading=function(){if(e.state.isLoading)return r.a.createElement(k,null)},e.handleConvertDate=function(){var a=e.props.date,t=new Date(1e3*a),n=t.toDateString(),r=n.slice(4,n.length),c=t.toTimeString().slice(0,-41),s=n.slice(0,4);e.setState({date:r,time:c,day:s})},e.handleWeatherType=function(e){var a;switch(e){case"Clouds":a=r.a.createElement(S.a,{className:"Icon"});break;case"Clear":a=r.a.createElement(S.e,{className:"Icon"});break;case"Rain":case"Drizzle":a=r.a.createElement(S.b,{className:"Icon"});break;case"Snow":a=r.a.createElement(S.d,{className:"Icon"});break;case"Mist":a=r.a.createElement(S.f,{className:"Icon"});break;default:a=r.a.createElement(S.c,{className:"Logo"})}return a},e.handleCapitalizeString=function(){var a=e.props.desc.charAt(0).toUpperCase()+e.props.desc.slice(1);e.setState({desc:a})},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.state.isLoading?this.handleLoading():(this.handleConvertDate(),this.handleCapitalizeString())}},{key:"render",value:function(){var e=this.props,a=e.city,t=e.country,n=e.aTemp,c=e.fTemp,s=e.wind,i=e.weather,l=this.state,o=l.date,u=l.time,h=l.desc,d=l.day;return r.a.createElement("div",{className:"Current-weather-container"},this.handleLoading(),r.a.createElement("h1",{className:"Header"},a," | ",t),r.a.createElement("div",{className:"Current-weather"},r.a.createElement("h2",{className:"Day"},d),r.a.createElement("p",null,o," | ",u),this.handleWeatherType(i),r.a.createElement("h2",{className:"Temp"},n," \xb0c"),r.a.createElement("p",null,"Feels like ",c," \xb0c"),r.a.createElement("h2",{className:"Weather"},h),r.a.createElement("p",{className:"Wind-icon"},r.a.createElement(S.f,null)),r.a.createElement("p",{className:"Wind"},s," m/s")))}}]),t}(n.Component),C=(t(92),t(93),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={isLoading:e.props.isLoading},e.handleWeatherType=function(e){var a;switch(e){case"Clouds":a=r.a.createElement(S.a,{className:"Icon"});break;case"Clear":a=r.a.createElement(S.e,{className:"Icon"});break;case"Rain":case"Drizzle":a=r.a.createElement(S.b,{className:"Icon"});break;case"Snow":a=r.a.createElement(S.d,{className:"Icon"});break;case"Mist":a=r.a.createElement(S.f,{className:"Icon"});break;default:a=r.a.createElement(S.c,{className:"Logo Icon"})}return a},e.handleConvertDate=function(){var a=e.props.forecastData.date,t=new Date(1e3*a).toDateString(),n=t.slice(4,t.length),r=t.slice(0,4);e.setState({date:n,day:r})},e.handleCapitalizeString=function(){var a=e.props.forecastData.desc.charAt(0).toUpperCase()+e.props.forecastData.desc.slice(1);e.setState({desc:a})},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.handleCapitalizeString(),this.handleConvertDate()}},{key:"render",value:function(){var e=this.props.forecastData,a=e.aTemp,t=e.fTemp,n=e.wind,c=e.weather,s=this.state,i=s.day,l=s.date,o=s.desc;return r.a.createElement("div",null,r.a.createElement("div",{className:"Single-forecast Current-weather"},r.a.createElement("h3",null,i),r.a.createElement("p",null,l),this.handleWeatherType(c),r.a.createElement("h2",{className:"Temp"},a," \xb0c"),r.a.createElement("p",null,"Feels like ",t," \xb0c"),r.a.createElement("h2",{className:"Weather"},o),r.a.createElement("p",null,r.a.createElement(S.f,null)),r.a.createElement("p",{className:"Wind"},n," m/s")))}}]),t}(n.Component)),L=t(21),D=L.APIkey,O=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={isLoading:e.props.isLoading,currentForecastList:[]},e.handleLoading=function(){if(e.state.isLoading)return r.a.createElement(k,null)},e.handleSearchInput=function(){e.handleFetchForecastData(e.props.city)},e.handleRenderSingleForecast=function(){return e.state.currentForecastList.map((function(a,t){return t%8===0?r.a.createElement(C,{key:"forecast-"+t,isLoading:e.state.isLoading,forecastData:a}):null}))},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.city&&(this.handleFetchForecastData(this.props.city),this.state.isLoading&&this.handleLoading())}},{key:"handleFetchForecastData",value:function(){var e=Object(o.a)(l.a.mark((function e(a){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(a,"&appid=").concat(D,"&units=metric"));case 2:t=e.sent,n=t.data.list.map((function(e){return{date:e.dt,city:t.data.city.name,country:t.data.city.country,weather:e.weather[0].main,desc:e.weather[0].description,aTemp:e.main.temp,fTemp:e.main.feels_like,minTemp:e.main.temp_min,maxTemp:e.main.temp_max,humidity:e.main.humidity,clouds:e.clouds.all,wind:e.wind.speed,sunrise:t.data.city.sunrise,sunset:t.data.city.sunset}})),this.setState({currentForecastList:n,isLoading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,a=e.city,t=e.country;return r.a.createElement("div",{className:"Forecast-container"},r.a.createElement("h1",{className:"Header"},a+" | "+t),this.handleLoading(),r.a.createElement("div",{className:"Forecast"},this.handleRenderSingleForecast()))}}]),t}(n.Component),j=L.APIkey,T=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,city:"Copenhagen",country:void 0,weather:void 0,desc:void 0,aTemp:null,fTemp:null,minTemp:null,maxTemp:null,humidity:null,clouds:null,wind:null,sunrise:null,sunset:null},e.handleWeatherType=function(e){document.querySelector(".App").className="App "+e},e.handleCallbackFunctionSearchData=function(a){e.setState({city:a.city,isLoading:a.isLoading}),e.handleFetchCurrentWeatherData(a.city)},e.handleCallBackFunctionWeatherType=function(a){e.setState({weather:a})},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.state.city&&this.handleFetchCurrentWeatherData(this.state.city)}},{key:"handleFetchCurrentWeatherData",value:function(){var e=Object(o.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&APPID=").concat(j,"&units=metric"));case 2:t=e.sent,this.setState({date:t.data.dt,city:t.data.name,country:t.data.sys.country,weather:t.data.weather[0].main,desc:t.data.weather[0].description,icon:t.data.weather[0].icon,aTemp:t.data.main.temp,fTemp:t.data.main.feels_like,minTemp:t.data.main.temp_min,maxTemp:t.data.main.temp_max,humidity:t.data.main.humidity,clouds:t.data.clouds.all,wind:t.data.wind.speed,sunrise:t.data.sys.sunrise,sunset:t.data.sys.sunset,isLoading:!1}),this.handleWeatherType(this.state.weather);case 5:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Grid-container Grid-two-thirds"},r.a.createElement("nav",{className:"Navigation"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p.b,{to:"".concat("/inrainorshine_weatherapp","/")},r.a.createElement("h1",null,"In Rain or Shine"),r.a.createElement("div",{className:"Logo"},r.a.createElement(S.c,null))," ")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.c,{activeClassName:"active",to:"".concat("/inrainorshine_weatherapp","/"),exact:!0},"Current Weather")),r.a.createElement("li",null,r.a.createElement(p.c,{activeClassName:"active",to:"".concat("/inrainorshine_weatherapp","/forecast")},"5-day Forecast"))),r.a.createElement(w,{parentCallbackSearchData:this.handleCallbackFunctionSearchData})),r.a.createElement("main",null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"".concat("/inrainorshine_weatherapp","/"),component:function(a){return r.a.createElement(N,Object.assign({},a,e.state,{weather:e.state.weather}))}}),r.a.createElement(f.a,{exact:!0,path:"".concat("/inrainorshine_weatherapp","/forecast"),component:function(a){return r.a.createElement(O,Object.assign({},a,{city:e.state.city,isLoading:e.state.isLoading,country:e.state.country}))}})))),r.a.createElement("footer",null,"This Weather App is created by Mathilde Runge")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.cc593b09.chunk.js.map
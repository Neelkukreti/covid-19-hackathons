(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/home.952d1e79.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/map.7ffacdd5.png"},145:function(e,t,a){e.exports=a.p+"static/media/pmdonate.5aeeb8fc.png"},146:function(e,t,a){e.exports=a.p+"static/media/01.b8c4ef56.png"},147:function(e,t,a){e.exports=a.p+"static/media/02.03878e4e.png"},148:function(e,t,a){e.exports=a.p+"static/media/03.d8406100.png"},149:function(e,t,a){e.exports=a.p+"static/media/04.4d2c0436.png"},150:function(e,t,a){e.exports=a.p+"static/media/05.f0d60dcd.png"},151:function(e,t,a){e.exports=a.p+"static/media/06.bc02e58f.png"},152:function(e,t,a){e.exports=a.p+"static/media/symptoms.65ef3a01.png"},153:function(e,t,a){e.exports=a.p+"static/media/breathelessness.e05795d3.gif"},187:function(e,t,a){"use strict";var n=a(10),r=a.n(n),o=a(15),i=a.n(o),c=a(3),s=a.n(c),l=a(5),d=a.n(l),m=a(6),u=a.n(m),f=a(2),p=a.n(f),y=a(7),g=a.n(y),h=a(0),E=a.n(h),w=a(18),x=a(359),C=a(49),v=a(360),b=a(358),R=a(4),T=a(9),I=a(8),k=a(108),S=a(25),D=a(176),F=a(177),P=a(170),z=a(100),A=a.n(z),W=a(105),L=a.n(W),j=a(357),M=a(186);function B(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var N=S.a.get("window"),G=N.width,H=N.height,V=function(e){g()(n,e);var t,a=(t=n,function(){var e,a=p()(t);if(B()){var n=p()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return u()(this,e)});function n(){return s()(this,n),a.apply(this,arguments)}return d()(n,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.color;return E.a.createElement(M.a,{data:{datasets:[{data:t}]},width:.7*G,height:.2*H,yAxisInterval:1,formatYLabel:function(e){return""},chartConfig:{color:function(){return a},backgroundGradientFrom:"#fff",backgroundGradientFromOpacity:0,backgroundGradientTo:"#fff",backgroundGradientToOpacity:0,strokeWidth:2,barPercentage:.5,propsForDots:{r:"0",strokeWidth:"0",stroke:a},propsForBackgroundLines:{opacity:0}},bezier:!0,style:{marginVertical:8,borderRadius:16}})}}]),n}(h.Component);function _(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O="#FC312F",J=S.a.get("window"),U=J.width,q=J.height,K=function(e){g()(o,e);var t,n=(t=o,function(){var e,a=p()(t);if(_()){var n=p()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return u()(this,e)});function o(){var e;s()(this,o);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={loading:!0,dataRecovered:{},totalCases:"",dataConfirmed:{},recoveredCases:"",newsLoaded:!1},e.fetchData=function(){var t,a,n,o,i,c,s,l,d,m,u,f,p,y;return r.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return e.setState({refreshing:!0,loading:!0}),g.next=3,r.a.awrap(L.a.get("https://api.covid19india.org/data.json"));case 3:return t=g.sent,a=t.data.cases_time_series,n=a.map((function(e){return e.totalconfirmed})),o=a.map((function(e){return e.totalrecovered})),i=a.map((function(e){return e.totaldeceased})),c=a[a.length-1],s=c.dailyconfirmed,l=c.dailydeceased,d=c.dailyrecovered,m=c.totalconfirmed,u=c.totaldeceased,f=c.totalrecovered,e.setState({dataRecovered:o,dataConfirmed:n,dataDeceased:i,loading:!1,totalconfirmed:m,totaldeceased:u,dailyconfirmed:s,dailydeceased:l,totalrecovered:f,dailyrecovered:d,refreshing:!1}),g.next=12,r.a.awrap(L.a.get("https://newsapi.org/v2/top-headlines?country=in&q=corona&apiKey=1a54f1fa7c7741d28b862ba1a32875ef"));case 12:p=g.sent,y=p.data.articles,e.setState({news:y,newsLoaded:!0});case 15:case"end":return g.stop()}}),null,null,null,Promise)},e}return d()(o,[{key:"componentDidMount",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchData();case 1:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.dataConfirmed,r=e.dataRecovered,o=e.totalconfirmed,i=e.totaldeceased,c=e.dailyconfirmed,s=e.dailydeceased,l=e.totalrecovered,d=e.dailyrecovered,m=e.dataDeceased;return t?E.a.createElement(R.a,{style:Y.loadingConatiner},E.a.createElement(w.a,{style:Y.loadingGif,source:a(238)})):E.a.createElement(R.a,{style:Y.container},E.a.createElement(k.a,{refreshControl:E.a.createElement(P.a,{refreshing:this.state.refreshing,onRefresh:this.fetchData})},E.a.createElement(w.a,{source:A.a,style:Y.headerImage}),E.a.createElement(R.a,{style:Y.content},E.a.createElement(R.a,{style:{height:.3*q}},E.a.createElement(k.a,{horizontal:!0,showsHorizontalScrollIndicator:!1},E.a.createElement(R.a,{style:Y.chartsScrollViewContainer},E.a.createElement(R.a,{style:Y.flexStartConatier},E.a.createElement(T.a,{style:Y.chartTitle},"Total Confirmed ",E.a.createElement(j.a,{color:"#FC312F",name:"caretup"})),E.a.createElement(T.a,{style:Y.chartNumbers},o)),E.a.createElement(R.a,{style:Y.charts},E.a.createElement(V,{data:n,color:O}))),E.a.createElement(R.a,{style:Y.chartContainer},E.a.createElement(R.a,{style:Y.flexStartConatier},E.a.createElement(T.a,{style:Y.chartTitle},"Total Recovered ",E.a.createElement(j.a,{color:"#29AF62",name:"caretup"})),E.a.createElement(T.a,{style:Y.chartNumbers},l)),E.a.createElement(R.a,{style:Y.charts},E.a.createElement(V,{data:r,color:"#29AF62"}))),E.a.createElement(R.a,{style:Y.chartContainer},E.a.createElement(R.a,{style:Y.flexStartConatier},E.a.createElement(T.a,{style:Y.chartTitle},"Total Deceased ",E.a.createElement(j.a,{color:"#FC312F",name:"caretup"})),E.a.createElement(T.a,{style:Y.chartNumbers},i)),E.a.createElement(R.a,{style:Y.charts},E.a.createElement(V,{data:m,color:O}))))),E.a.createElement(R.a,{style:Y.moreInfoConatiner},E.a.createElement(T.a,{style:{opacity:.7,fontSize:24,fontWeight:"bold"}},"COVID-19 India Stats"),E.a.createElement(R.a,{style:Y.moreInfoInnerConatiner},E.a.createElement(T.a,{style:[Y.moreInfoText,{flex:2}]},"Recently Confirmed"),E.a.createElement(T.a,{style:[Y.moreInfoText,{color:O}]},c)),E.a.createElement(R.a,{style:Y.moreInfoInnerConatiner},E.a.createElement(T.a,{style:[Y.moreInfoText,{flex:2}]},"Recently Recovered"),E.a.createElement(T.a,{style:[Y.moreInfoText,{color:"#29AF62"}]},d)),E.a.createElement(R.a,{style:Y.moreInfoInnerConatiner},E.a.createElement(T.a,{style:[Y.moreInfoText,{flex:2}]},"Recently Deceased"),E.a.createElement(T.a,{style:[Y.moreInfoText,{color:O}]},s)),E.a.createElement(R.a,{style:Y.moreInfoInnerConatiner},E.a.createElement(T.a,{style:[Y.moreInfoText,{textAlign:"right"}]},"Made by Sunny Dhama"))),E.a.createElement(R.a,{style:Y.mapConatiner},E.a.createElement(w.a,{style:Y.mapImage,source:a(144)})),E.a.createElement(R.a,{style:Y.pmFundsConatiner},E.a.createElement(w.a,{style:Y.pmFundsImage,source:a(145)})),E.a.createElement(T.a,{style:Y.title},"What you should do?"),E.a.createElement(R.a,{style:Y.row},E.a.createElement(w.a,{style:Y.imagesPrecaution,source:a(146)}),E.a.createElement(w.a,{style:Y.imagesPrecaution,source:a(147)})),E.a.createElement(R.a,{style:Y.row},E.a.createElement(T.a,{style:Y.rowText},"Wash Hands"),E.a.createElement(T.a,{style:Y.rowText},"Wear Mask")),E.a.createElement(R.a,{style:Y.row},E.a.createElement(w.a,{style:Y.imagesPrecaution,source:a(148)}),E.a.createElement(w.a,{style:Y.imagesPrecaution,source:a(149)})),E.a.createElement(R.a,{style:Y.row},E.a.createElement(T.a,{style:Y.rowText},"Use Sanitizers"),E.a.createElement(T.a,{style:Y.rowText},"Respect Lockdown")),E.a.createElement(R.a,{style:Y.row},E.a.createElement(w.a,{style:Y.imagesPrecaution,source:a(150)}),E.a.createElement(w.a,{style:Y.imagesPrecaution,source:a(151)})),E.a.createElement(R.a,{style:Y.imageContainer},E.a.createElement(T.a,{style:Y.rowText},"Prefer Namaste"),E.a.createElement(T.a,{style:Y.rowText},"Stay Safe")),E.a.createElement(T.a,{style:Y.title},"Symptoms"),E.a.createElement(R.a,{style:Y.imageContainer},E.a.createElement(w.a,{style:Y.symptomsImage,source:a(152)})),E.a.createElement(R.a,{style:Y.imageContainer},E.a.createElement(w.a,{style:[Y.imagesPrecaution,Y.imageSymptoms],source:a(336)}),E.a.createElement(T.a,{style:Y.symptomsText},"Dry Cough")),E.a.createElement(R.a,{style:Y.imageContainer},E.a.createElement(w.a,{style:[Y.imagesPrecaution,Y.imageSymptoms],source:a(337)}),E.a.createElement(T.a,{style:Y.symptomsText},"High Fever")),E.a.createElement(R.a,{style:Y.imageContainer},E.a.createElement(w.a,{style:[Y.imagesPrecaution,Y.imageSymptoms],source:a(153)}),E.a.createElement(T.a,{style:Y.symptomsText},"Difficulty in Breathing")),E.a.createElement(R.a,{style:Y.newsParentContainer},E.a.createElement(R.a,{style:Y.newsConatiner},E.a.createElement(T.a,{style:Y.title},"Latest News"),this.state.newsLoaded&&this.state.news.map((function(e,t){return E.a.createElement(D.a,{key:t,style:Y.newsPostConatiner,onPress:function(){return F.a.openURL(e.url)}},E.a.createElement(R.a,{style:Y.newsPostTitle},E.a.createElement(w.a,{style:Y.newsImage,source:{uri:e.urlToImage}}),E.a.createElement(R.a,{style:{paddingHorizontal:20}},E.a.createElement(T.a,{style:Y.newsAuthor},e.author),E.a.createElement(T.a,{style:Y.sourceName},e.source.name))),E.a.createElement(T.a,{style:Y.description},e.title),E.a.createElement(T.a,{style:Y.descriptionText},e.description+"...click to read more."))})))))))}}]),o}(h.Component),Y=I.a.create({container:{flex:1,backgroundColor:"#F2F4F5"},headerImage:{width:U,resizeMode:"contain",height:.4*q},content:{paddingHorizontal:20,borderTopLeftRadius:30,borderTopRightRadius:30,marginTop:-40,paddingTop:40,backgroundColor:"#F2F4F5",flex:1},moreInfoConatiner:{backgroundColor:"white",borderRadius:16,flex:1,padding:20},imagesPrecaution:{resizeMode:"contain",width:.3*U,height:.3*U},chartContainer:{height:.25*q,width:.75*U,flexDirection:"row",position:"relative",backgroundColor:"#fff",borderRadius:16,padding:10,marginLeft:.1*U},chartsScrollViewContainer:{height:.25*q,width:.75*U,flexDirection:"row",position:"relative",backgroundColor:"#fff",borderRadius:16,padding:10},chartTitle:{fontSize:16,color:"gray"},chartNumbers:{fontSize:27,fontWeight:"bold",opacity:.8},flexStartConatier:{flex:1,justifyContent:"center",alignItems:"flex-start"},charts:{flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",flex:1},moreInfoText:{opacity:.7,fontSize:20,fontWeight:"bold",color:"gray",marginTop:20,flex:1},moreInfoInnerConatiner:{flexDirection:"row"},mapConatiner:{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"white",paddingBottom:20,marginTop:20,borderRadius:16},mapImage:{width:U-50,resizeMode:"contain",height:200,borderRadius:16,marginTop:10},pmFundsConatiner:{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"#F2F2F2",paddingBottom:20,marginTop:20,borderRadius:16},pmFundsImage:{width:U-50,resizeMode:"contain",height:300,borderRadius:16,marginTop:10},title:{textAlign:"left",backgroundColor:"white",opacity:1,fontSize:27,color:"#1f1f1f",paddingLeft:20,marginTop:20,borderTopLeftRadius:16,borderTopRightRadius:16,paddingTop:20},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"white"},rowText:{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"white"},loadingConatiner:{flex:1,justifyContent:"center",alignItems:"center"},loadingGif:{resizeMode:"contain",height:300,width:300},imageContainer:{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"white",paddingBottom:20},symptomsImage:{width:U-50,resizeMode:"contain",height:200,borderRadius:10,marginTop:10},imageSymptoms:{backgroundColor:"white",padding:20,borderRadius:16},symptomsText:{flex:1,textAlign:"center"},newsConatiner:{backgroundColor:"white",padding:20,paddingTop:0,borderRadius:16},newsParentContainer:{marginTop:30,borderRadius:16},newsPostConatiner:{borderBottomColor:"#d9d9d9",borderBottomWidth:1,paddingVertical:20,borderRadius:16},newsPostTitle:{flexDirection:"row",alignItems:"center",marginBottom:10},newsImage:{resizeMode:"cover",height:60,width:60,borderRadius:10},newsAuthor:{fontSize:16,color:"#1f1f1f",fontWeight:"bold"},sourceName:{fontSize:16,color:"gray",fontWeight:"bold"},description:{fontSize:16,fontWeight:"bold",opacity:.8},descriptionText:{fontSize:14,opacity:.6}});function Q(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}a.d(t,"a",(function(){return X}));var X=function(e){g()(o,e);var t,n=(t=o,function(){var e,a=p()(t);if(Q()){var n=p()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return u()(this,e)});function o(){var e;s()(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={isReady:!1},e}return d()(o,[{key:"_loadAssetsAsync",value:function(){var e,t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return c=[a(146),a(147),a(148),a(149),a(150),a(151),a(152),a(153),a(100),a(144),a(145)],e=c.map((function(e){return"string"===typeof e?w.a.prefetch(e):v.a.fromModule(e).downloadAsync()})),o=[b.a.font],t=o.map((function(e){return C.b(e)})),n.next=4,r.a.awrap(Promise.all([].concat(i()(e),i()(t))));case 4:case"end":return n.stop()}var o,c}),null,null,null,Promise)}},{key:"render",value:function(){var e=this;return this.state.isReady?h.createElement(K,null):h.createElement(x.a,{startAsync:this._loadAssetsAsync,onFinish:function(){return e.setState({isReady:!0})},onError:console.warn})}}]),o}(h.Component)},191:function(e,t,a){a(192),e.exports=a(347)},192:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},238:function(e,t,a){e.exports=a.p+"static/media/loading.2e827a45.gif"},336:function(e,t,a){e.exports=a.p+"static/media/cough.4e0c35c4.gif"},337:function(e,t,a){e.exports=a.p+"static/media/fever.854eb4a2.gif"}},[[191,1,2]]]);
//# sourceMappingURL=app.5b83a586.chunk.js.map
var gvjs_fX="ABCDEFGHIJKLMNOPQRSTUVWXYZ",gvjs_gX="allValuesSuffix",gvjs_hX="annotationsContainer",gvjs_iX="annotationsFilterContainer",gvjs_jX="background-color",gvjs_kX="chartContainer",gvjs_lX="containerTable",gvjs_mX="dateFormat",gvjs_nX="displayAnnotations",gvjs_oX="displayDateBarSeparator",gvjs_pX="displayLegendDots",gvjs_qX="displayLegendValues",gvjs_rX="displayRangeSelector",gvjs_sX="displayZoomButtons",gvjs_tX="numberFormats",gvjs_uX="outerChartContainer",gvjs_vX="zoomButtons.",gvjs_Yja={annotationsWidth:25,
annotationsFilter:"off",scaleValues:null,dateFormat:"MMMM dd, yyyy",displayRangeSelector:!0,displayAnnotations:!0,displayAnnotationsFilter:!1,displayZoomButtons:!0,zoomButtons:{"1-second":{label:"1s",offset:[0,0,1]},"5-seconds":{label:"5s",offset:[0,0,5]},"10-seconds":{label:"10s",offset:[0,0,10]},"15-seconds":{label:"15s",offset:[0,0,15]},"1-minute":{label:"1min",offset:[0,1,0]},"5-minutes":{label:"5min",offset:[0,5,0]},"10-minutes":{label:"10min",offset:[0,10,0]},"15-minutes":{label:"15min",offset:[0,
15,0]},"1-hour":{label:"1h",offset:[1,0,0]},"6-hours":{label:"6h",offset:[6,0,0]},"1-day":{label:"1d",offset:[1,0,0,0,0]},"5-days":{label:"5d",offset:[5,0,0,0,0]},"1-week":{label:"1w",offset:[7,0,0,0,0]},"1-month":{label:"1m",offset:[1,0,0,0,0,0]},"3-months":{label:"3m",offset:[3,0,0,0,0,0]},"6-months":{label:"6m",offset:[6,0,0,0,0,0]},"1-year":{label:"1y",offset:[1,0,0,0,0,0,0]},max:{label:gvjs_Sv,range:{start:null,end:null}}},zoomButtonsOrder:["1-hour","1-day","5-days","1-week","1-month","3-months",
"6-months","1-year",gvjs_Sv],displayLegendDots:!0,displayDateBarSeparator:"|&nbsp;",displayExactValues:!1,fill:0,lclt:0,labelColors:null,allowHtml:!1},gvjs_Zja={annotations:{textStyle:{fontSize:10,auraColor:gvjs_d},boxStyle:{stroke:"#888888",strokeWidth:.5,rx:2,ry:2,gradient:{color1:"#eeeeee",color2:"#dddddd",x1:gvjs_6q,y1:gvjs_6q,x2:gvjs_6q,y2:gvjs_9q,useObjectBoundingBoxUnits:!0}}},backgroundColor:gvjs_ea,chartArea:{width:gvjs_9q,backgroundColor:gvjs_ea},height:200,width:gvjs_9q,hAxis:{baselineColor:gvjs_d,
gridlines:{count:-1},textStyle:{fontSize:9}},vAxis:{baselineColor:"#ababab",gridlines:{count:-1,color:"#ECECF7"},textPosition:gvjs_fv,inTextPosition:"high",viewWindowMode:gvjs_Wv},legend:{position:gvjs_d,alignment:gvjs_3},colors:gvjs_aF,targetAxisIndex:1,focusTarget:gvjs_8s,tooltipTrigger:gvjs_d,candlestick:{hollowIsRising:!0},forceIFrame:!1,animation:{duration:0}},gvjs__ja={filterColumnIndex:0,ui:{chartType:gvjs_Ck,chartOptions:{chartArea:{width:gvjs_9q,height:gvjs_9q,backgroundColor:{fill:gvjs_ea,
stroke:"#ababab",strokeWidth:.5}},height:40,width:gvjs_9q,backgroundColor:gvjs_ea,areaOpacity:.1,lineWidth:1,forceIFrame:!1,hAxis:{baselineColor:gvjs_d,gridlines:{count:-1},textPosition:gvjs_fv,textStyle:{fontSize:9}},vAxis:{baselineColor:gvjs_d,scaleType:gvjs_3v}},sideScreenColor:{fill:"#f2f2f2",fillOpacity:.75},zoomAroundSelection:!0,chartView:{columns:[0,1]}}},gvjs_0ja={width:gvjs_9q,height:gvjs_9q,allowHtml:!0,sortAscending:!1,sortColumn:0};function gvjs_wX(a){gvjs_rp.call(this,a);this.kb=null;this.fI=!0;this.ya=null;this.sh=0;this.UN=this.IX=this.ku=this.$i=this.ax=this.ju=this.Hh=this.V=this.lG=this.nm=this.Sc=this.L=this.m=this.xr=null;this.xJ={};this.An=this.qP=this.LE=this.Kb=null;this.da=new gvjs_Qp;this.ae=new gvjs_1J(this);this.i1=!1;this.G=gvjs_fm()}gvjs_q(gvjs_wX,gvjs_rp);gvjs_=gvjs_wX.prototype;
gvjs_.mg=function(){this.da.Kc();gvjs_V(this.ae);this.ae=new gvjs_1J(this);gvjs_V(this.da);this.da=new gvjs_Qp;this.i1=!1;this.$i&&this.$i.clear();this.Hh&&this.Hh.clear();this.V&&this.V.clear();this.ga&&this.G.pc(this.ga)};gvjs_.$u=function(){return this.V.Ef()};gvjs_.getSelection=function(){var a=this.$u().getSelection();return gvjs_s(a,function(a){a=gvjs_xX(this,a.row,a.column);return{row:a.row,column:a.Yb}},this)};
gvjs_.setSelection=function(a){var b=this.$u();null==a||0===a.length?b.setSelection([]):(a=gvjs_s(a,function(a){a=gvjs_yX(this,a.row,a.column);return{row:a.row,column:a.Yb}},this),b.setSelection(a))};gvjs_.Xba=function(){return this.Hh.getState().range};gvjs_.setVisibleChartRange=function(a,b,c){this.Hh.Ad({range:{start:a,end:b}});this.Hh.draw();gvjs_zX(this,null==c?!0:c)};gvjs_.Rca=function(a){gvjs_AX(this,a,!0)};gvjs_.cia=function(a){gvjs_AX(this,a,!1)};
function gvjs_AX(a,b,c){gvjs_k(b)||(b=[b]);gvjs_r(b,function(a){this.xJ[a]=c},a);a.Qq()}gvjs_.Qq=function(){this.draw(this.ya,this.xr,this.L)};
gvjs_.Hg=function(a,b,c,d){this.xr=c||{};this.L=d||{};this.mN(b);this.L1(b);gvjs_1ja(this);a=this.Vi=new gvjs_Y(this.ya);a.Zq(this.Kb);b=a.kC([{column:this.sh,test:function(a){return null!=a}}]);a.lp(b);b=a.Ns(this.sh);a.lp(b);b=gvjs_Jm(this.Vi,0,this.sh);c=gvjs_Jm(this.Vi,this.Vi.fa()-1,this.sh);this.sP={min:b,max:c};this.eQ();gvjs_2ja(this);gvjs_BX(this);gvjs_3ja(this);gvjs_4ja(this);gvjs_5ja(this);gvjs_6ja(this);gvjs_7ja(this);gvjs_8ja(this);this.V.lh(a);this.Hh.lh(a);this.Hh.draw();gvjs_zX(this,
!1)};gvjs_.L1=function(a){this.ya=a;this.ep()};
gvjs_.mN=function(a){if(!a)throw Error(gvjs_Gr);var b=a.Y();if(2>b)throw Error("Data must contain at least two columns.");if(a.X(0)!=gvjs_Xa&&a.X(0)!=gvjs_Ya)throw Error("First column must contain date, or date and time.");for(var c,d,e=!1,f=0,g=1;g<b&&!e;g++)c=a.X(g),c==gvjs_e?f=1:0==f?(e=!0,d=g):1==f?c==gvjs_f?f=2:(e=!0,d=g):2==f&&(c==gvjs_f?f=0:(e=!0,d=g));if(e)throw Error("Each values column may be followed by one or two annotation columns. column number "+d+gvjs_xq+c);};
function gvjs_2ja(a){var b=a.kb;b&&b.oU&&gvjs_Q(b.oU,gvjs_Pj,gvjs_d);var c=gvjs_$l(a.ga,a.m),d=gvjs_9l(a.ga,a.m);if(b){gvjs_3k(b.oU,d,c);gvjs_Q(b.oU,gvjs_Pj,"");var e=gvjs_gl(b.QG);a.Ma=c-(e.top+e.bottom);a.ha=d-(e.left+e.right);gvjs_3k(b.QG,a.ha,a.Ma)}else{var b=a.kb={},f=a.G;f.pc(a.ga);gvjs_TA(a.ga,["google-visualization-atl","container"]);var g=a.ga.id+"_AnnotationChart_",h=function(a,b,c){var d=f.createElement(gvjs_Za);a&&(d.id=g+a);d.className=b;c.appendChild(d);return d},k=b.oU=h("","",a.ga);
gvjs_Q(k,gvjs_Bi,gvjs_yi);gvjs_3k(k,d,c);k=h("","",k);gvjs_Q(k,gvjs_Bi,gvjs_O);gvjs_Uk(k,0,0);gvjs_3k(k,gvjs_9q,gvjs_9q);k=b.QG=h("borderDiv","border",k);k=b.cFa=h(gvjs_lX,gvjs_lX,k);e=gvjs_gl(b.QG);a.Ma=c-(e.top+e.bottom);a.ha=d-(e.left+e.right);gvjs_3k(b.QG,a.ha,a.Ma);a=b.aFa=h("chartTd","td chartTdContainer",k);c=b.JX=h("annotationsTd","td annotationsTdContainer",k);d=b.UFa=h(gvjs_uX,gvjs_uX,a);k=b.Tna=h("chartControlsContainer","chartControls",d);b.YF=h("zoomControlContainer","zoomControls",k);
b.kva=h("legendContainer",gvjs_xv,k);b.Rna=h(gvjs_kX,gvjs_kX,d);b.D4=h("rangeControlContainer","rangeControl",a);b.mG=h(gvjs_iX,gvjs_iX,c);b.HX=b.HX=h(gvjs_hX,gvjs_hX,c)}}
function gvjs_5ja(a){var b=1+gvjs_Hh(a.Sc,["series.0.pointSize",gvjs_Aw],6),c=gvjs_dl(a.kb.Tna).height,d=gvjs_D(a.m,gvjs_rX)?gvjs_E(a.nm,"ui.chartOptions.height"):0,c=a.Ma-(c+d),e=Math.max(b,gvjs_E(a.Sc,gvjs_it,0)),f=Math.max(b,2+2*gvjs_E(a.Sc,"hAxis.textStyle.fontSize")),f=Math.max(f,gvjs_E(a.Sc,gvjs_et,0));gvjs_qh(a.Sc,1,{height:c,chartArea:{top:e,bottom:f,height:c-(e+f)}});gvjs_qh(a.nm,1,{ui:{chartOptions:{chartArea:{height:d}}}});d=0;a.fI?(d=a.lG.ba(gvjs_nb,gvjs_3j),gvjs_4k(a.kb.JX,d),d=gvjs_5k(a.kb.JX).width,
d=Math.max(0,d)):gvjs_4k(a.kb.JX,0);d=a.ha-d;c=Math.max(b,gvjs_E(a.Sc,gvjs_gt,0));b=Math.max(b,gvjs_E(a.Sc,gvjs_ht,0));e=d-(c+b);gvjs_qh(a.Sc,1,{width:d,chartArea:{left:c,right:b,width:e}});gvjs_qh(a.nm,1,{ui:{chartOptions:{width:d,chartArea:{left:c+1,right:b+2,width:e-3}}}})}
function gvjs_6ja(a){a.V||(a.V=new gvjs_Z({chartType:gvjs_vk,container:a.kb.Rna}));a.Hh||(a.Hh=new gvjs__({controlType:"ChartRangeFilter",container:a.kb.D4}),gvjs_mo(a.Hh,gvjs_L,gvjs_p(function(){gvjs_io(this.Hh,gvjs_ui,gvjs_p(this.mta,this))},a)));if(a.fI){var b=gvjs_D(a.m,"displayAnnotationsFilter"),c=gvjs_p(function(){var a=this.fI&&b?gvjs_5k(this.kb.mG).height:0;this.kb.HX.style.height=gvjs_Vk(this.Ma-a+gvjs_M,!0)},a);a.nG||(a.nG=new gvjs__({controlType:"StringFilter",container:a.kb.mG,options:{filterColumnLabel:"Text",
matchType:"any",useFormattedValue:!0,ui:{label:"Filter",labelSeparator:": "}}}));gvjs_Q(a.kb.mG,gvjs_Pj,b?"":gvjs_d);a.$i||(a.$i=new gvjs_Z({chartType:gvjs_ak,container:a.kb.HX}),gvjs_mo(a.$i,gvjs_L,gvjs_p(function(){gvjs_io(this.$i,gvjs_J,gvjs_p(this.vta,this))},a)));a.ju?c():(a.ju=new gvjs_hq(a.kb.mG),a.ju.bind(a.nG,a.$i),gvjs_mo(a.ju,gvjs_L,c))}else a.kb.mG.EFa="",a.$i&&(a.$i.clear(),a.$i=null),a.nG&&(a.nG.clear(),a.nG=null),a.ju&&(a.ju.clear(),a.ju=null);a.i1||(a.i1=!0,gvjs_io(a.V,gvjs_L,gvjs_p(a.D2,
a)),gvjs_mo(a.V,gvjs_L,gvjs_p(function(){var a=this.$u();gvjs_io(a,gvjs_J,gvjs_p(this.Rsa,this));gvjs_io(a,gvjs_kw,gvjs_p(this.Tsa,this));gvjs_io(a,gvjs_jw,gvjs_p(this.Ssa,this))},a)))}gvjs_.D2=function(){this.ae.dispatchEvent(gvjs_L)};gvjs_.mta=function(){var a=this.Hh.getState();gvjs_zX(this,!1);this.ae.dispatchEvent(gvjs_Nw,a.range)};
function gvjs_zX(a,b){var c=a.Hh.getState();a.V.$("hAxis.viewWindow",{min:c.range.start,max:c.range.end});c=a.V.getOption(gvjs_ls);b&&0===c&&a.V.$(gvjs_ls,150);a.V.draw();a.V.$(gvjs_ls,c)}
function gvjs_1ja(a){a.Kb=[{label:"Datetime",type:a.ya.X(a.sh),calc:gvjs_p(function(a,b){return{v:a.getValue(b,this.sh),p:{dataRow:b}}},a)}];a.LE=[];for(var b=0,c=a.sh+1,d=a.ya.Y();c<d;){var e=c,f={label:a.ya.Xa(c)+"  ",sourceColumn:c,properties:{dataColumn:e,viewColumn:a.Kb.length}};a.xJ[b]&&(f.type=gvjs_e,f.calc=function(){return null});a.Kb.push(f);a.LE.push(f);c++;c<d&&a.ya.X(c)===gvjs_f&&(c++,c<d&&a.ya.X(c)===gvjs_f&&c++,a.xJ[b]||a.Kb.push({calc:function(a){return gvjs_p(function(b,c){b.getValue(c,
this.sh);return(b=gvjs_CX(this,c,a))?b.key:null},this)}.call(a,e),type:gvjs_f,role:gvjs_ns,properties:{dataColumn:e}}));b++}for(c=b=0;c<a.LE.length;c++)if(!a.xJ[c]){b=c;break}gvjs_qh(a.nm,1,{ui:{chartView:{columns:[0,a.LE[b].properties.viewColumn]}}});gvjs_qh(a.nm,1,{ui:{chartOptions:{colors:[a.Jb[b%a.Jb.length]]}}})}
gvjs_.eQ=function(){function a(){return("      "+b(f++)).substr(-e)}function b(a){return 26<=a?b(Math.floor(a/26)-1)+gvjs_fX[a%26]:gvjs_fX[a]}var c=this.ya.Y(),d=this.ya.fa();this.ku=[];this.IX={};for(var e=Math.ceil(Math.log(d)/Math.log(26)),f=0,g=0;g<d;g++){this.ya.getValue(g,this.sh);for(var h=this.sh+1;h<c;){var k=h;h++;if(h<c&&this.ya.X(h)===gvjs_f){var l=h,m=null;h++;h<c&&this.ya.X(h)===gvjs_f&&(m=h,h++);(k=gvjs_9ja(this,this.ku.length,g,k,l,m,a))&&gvjs_$ja(this,k)}}}this.fI=gvjs_D(this.m,gvjs_nX)&&
0<this.ku.length};function gvjs_9ja(a,b,c,d,e,f,g){e=e&&a.ya.getValue(c,e);f=f&&a.ya.getValue(c,f);return e||f?(g=g(),a=a.ya.getValue(c,a.sh),{wd:b,key:g,title:e,text:f,Fa:a,IZ:c,fs:d}):null}
function gvjs_aka(a){a.ax=new gvjs_S;a.ax.jg(gvjs_f,"Key");a.ax.jg(gvjs_f,"Text");a.UN=[];for(var b=[],c=0;c<a.ku.length;c++){var d=a.ku[c],e='<button type="button" class="key">'+gvjs_Qb(d.key)+"</button>",f=d.Fa;a.qP&&(f=gvjs_Qb(a.qP.yc(d.Fa)));var g=d.title||"",d=d.text||"";gvjs_D(a.m,"allowHtml")||(g=gvjs_Qb(g),d=gvjs_Qb(d));b.push([e,'<span class="title">'+g+'</span> <span class="description">'+d+'</span> <span class="date">'+f+"</span> "])}a.ax.hu(b);var h=a.ax.fa();gvjs_r(b,function(a,b){this.ax.Tha(b,
"idx",h-b-1);this.UN[h-b-1]=b},a)}function gvjs_7ja(a){if(a.fI){gvjs_aka(a);var b=gvjs_uh(a.lG);b.width=gvjs_9q;b.height=gvjs_9q;a.$i.setOptions(b);a.ju.draw(a.ax)}}
gvjs_.ep=function(){this.m=new gvjs_nh([this.xr,gvjs_Yja]);this.Sc=new gvjs_nh([gvjs_Wh(this.m,gvjs_Zj)||{},gvjs_Zja]);this.nm=new gvjs_nh([gvjs_Wh(this.m,gvjs_Mw)||{},gvjs__ja]);this.lG=new gvjs_nh([gvjs_Wh(this.m,gvjs_si)||{},gvjs_0ja]);var a=gvjs_Mh(this.m,gvjs_Is);a&&(gvjs_Q(this.kb.QG,gvjs_jX,a),gvjs_qh(this.Sc,1,{backgroundColor:a}),gvjs_qh(this.nm,1,{ui:{chartOptions:{backgroundColor:a}}}));gvjs_qh(this.Sc,1,{colors:this.m.ba(gvjs_At)});this.Jb=this.Sc.ba(gvjs_At);gvjs_qh(this.nm,1,{ui:{chartOptions:{colors:[this.Jb[0]]}}});
gvjs_n(this.m.ba(gvjs_mu))&&gvjs_qh(this.Sc,1,{areaOpacity:gvjs_E(this.m,gvjs_mu)/100,seriesType:gvjs_Bs});a=gvjs_D(this.m,gvjs_kv,!1);gvjs_qh(this.Sc,1,{interpolateNulls:a});gvjs_qh(this.nm,1,{ui:{chartOptions:{interpolateNulls:a}}});gvjs_qh(this.Sc,1,{vAxis:{maxValue:this.m.ba(gvjs_Sv),minValue:this.m.ba(gvjs__v)}});if(a=this.m.ba("scaleColumns"))if(0===a.length)gvjs_qh(this.Sc,1,{vAxis:{textPosition:gvjs_d}});else{for(var b=1===a.length,c={},d=0;d<a.length;d++)c[a[d]]=b?{targetAxisIndex:1}:{targetAxisIndex:d};
gvjs_qh(this.Sc,1,{series:c})}else gvjs_qh(this.Sc,1,{vAxis:{targetAxisIndex:1}});this.m.ba(gvjs_2w)&&(this.m.ba(gvjs_2w)!==gvjs_Hj&&"allfixed"!==this.m.ba(gvjs_2w)||gvjs_qh(this.Sc,1,{vAxis:{baseline:0}}));this.ya.X(this.sh)===gvjs_Ya?gvjs_qh(this.m,1,{minDisplaySeconds:60,dateFormat:"HH:mm MMMM dd, yyyy",minTimelineGranularity:0}):gvjs_qh(this.m,1,{minDisplaySeconds:86400,dateFormat:"MMMM dd, yyyy",minTimelineGranularity:86400});a=this.m.ba(gvjs_mX);a=gvjs_m(a)?{pattern:gvjs_G(this.m,gvjs_mX)}:
gvjs_Wh(this.m,gvjs_mX);this.qP=new gvjs_7h(a);a=this.m.ba(gvjs_tX);if(gvjs_m(a))a={pattern:gvjs_G(this.m,gvjs_tX)},this.An=new gvjs_ai(a);else if(gvjs_l(a)){var e=[];this.An=e;gvjs_t(gvjs_Wh(this.m,gvjs_tX),function(a,b){a={pattern:a};b=parseInt(b,10);e[b]=new gvjs_ai(a)})}else gvjs_D(this.m,"displayExactValues")?this.An=null:(a={pattern:"#.##"},this.An=new gvjs_ai(a));a=gvjs_G(this.m,"scaleFormat","#.########")+gvjs_G(this.m,gvjs_gX,"");gvjs_qh(this.Sc,1,{vAxis:{format:a}});a=gvjs_F(this.m,"thickness");
gvjs_qh(this.Sc,1,{lineWidth:null!=a?Math.max(1,a):1});a=this.m.ba("annotationsWidth");gvjs_n(a)?gvjs_qh(this.lG,1,{width:a+"%"}):a&&gvjs_qh(this.lG,1,{width:a});this.Sna="newRow"===gvjs_G(this.m,"legendPosition","sameRow")?"twoRows":"oneRow";gvjs_qh(this.nm,1,{ui:{chartOptions:{width:this.Sc.ba(gvjs_nb)}}});gvjs_qh(this.nm,1,{ui:{chartOptions:{chartArea:{width:this.Sc.ba(gvjs_jt)}}}});this.m.ba("async",!1)&&(gvjs_qh(this.Sc,1,{async:!0}),gvjs_qh(this.nm,1,{ui:{chartOptions:{async:!0}}}))};
function gvjs_8ja(a){var b=a.Hh.getState()||{};b.range=b.range||{};var c=a.m.ba("zoomEndTime");null!=c&&(b.range.end=c);c=a.m.ba("zoomStartTime");null!=c&&(b.range.start=c);a.Hh.Ad(b);gvjs_D(a.m,gvjs_rX)?a.kb.D4.style.display="":a.kb.D4.style.display=gvjs_d;b=gvjs_uh(a.Sc);a.V.setOptions(b);b=gvjs_uh(a.nm);a.Hh.setOptions(b)}
function gvjs_3ja(a){if(gvjs_D(a.m,"displayAggregationButtons")){var b=[{id:"daily",label:"Daily",modCalc:function(a){if(null!=a)return new Date(a.getFullYear(),a.getMonth(),a.getDate(),0)}},{id:"weekly",label:"Weekly",modCalc:function(a){if(null!=a)return new Date(a.getFullYear(),a.getMonth(),a.getDate()-a.getDay())}},{id:"monthly",label:"Monthly",modCalc:function(a){if(null!=a)return new Date(a.getFullYear(),a.getMonth(),1)}},{id:"year",label:"Yearly",modCalc:function(a){if(null!=a)return new Date(a.getFullYear(),
0,1)}}],c=a.kb.YF.id,d;d="Aggragate: ";for(var e=0;e<b.length;e++){var f=b[e],g=c+"_"+f.id;d+=' <button type="button" id="'+g+'" href="#">'+gvjs_Qb(f.label)+"</button>"}d+="<br />";for(var e=function(a){for(var b=0;b<a.length;b++)if(null!==a[b])return a[b]},h=[],f=a.ya.Y(),g=a.sh+1;g<f;)h.push({column:g,type:gvjs_e,label:a.ya.Xa(g),aggregation:gvjs_qq}),g++,g<f&&(h.push({column:g,type:gvjs_f,label:a.ya.Xa(g),aggregation:e}),g++,g<f&&(h.push({column:g,type:gvjs_f,label:a.ya.Xa(g),aggregation:e}),g++));
for(var k=a.ya.Xa(a.sh),e=0;e<b.length;e++)f=b[e],d=gvjs_p(function(a){return gvjs_p(function(){gvjs_rq(this.ya,[{column:this.sh,type:gvjs_Xa,label:k,modifier:a}],h)},this)},a),g=c+"_"+f.id,a.da.F(a.G.j(g),gvjs_Yj,d(f.modCalc))}}
function gvjs_4ja(a){var b=a.kb.YF.id,c=gvjs_D(a.m,gvjs_sX),d=gvjs_Rh(a.m,"zoomButtonsOrder"),e=a.G;e.pc(a.kb.YF);c&&(e.append(a.kb.YF,"Zoom: "),gvjs_r(d,function(a){if(gvjs_wh(this.m,gvjs_vX+a)){var c=gvjs_G(this.m,gvjs_vX+a+".className","zoomButton"),d=gvjs_G(this.m,gvjs_vX+a+".label",a),c=gvjs_uf(gvjs_2s,{type:gvjs_2s,id:b+"_"+a,"class":c,href:"#"},d),f=gvjs_jg(e.td,c);e.append(this.kb.YF,f);var f=gvjs_5aa(this.kb.YF),l=gvjs_p(gvjs_bka(this,a),this);gvjs_mo(this,gvjs_L,gvjs_p(function(){this.da.F(f,
gvjs_Yj,l)},this))}},a))}function gvjs_bka(a,b){var c=a.m.ba(gvjs_vX+b+".offset");if(c)var d=gvjs_YD(c);var e=gvjs_wh(a.m,gvjs_vX+b+".range");return gvjs_p(function(){var a=this.Hh.getState(),b;b=a.range.end;null==b&&(b=this.sP.max);var h;c&&null!=b?(b=gvjs_QD(b,d,-1),h=this.sP.min,b=b.getTime()>h.getTime()?b:h,h={start:b}):e&&(h=e);gvjs_i(h.start)&&(a.range.start=h.start);gvjs_i(h.end)&&(a.range.end=h.end);this.Hh.Ad(a);this.Hh.draw();gvjs_zX(this,!0)},a)}
gvjs_.Ssa=function(a){a=gvjs_xX(this,a.row,a.column);this.ae.dispatchEvent(gvjs_jw,{row:a.row,column:a.Yb});var b;a=this.getSelection();0<a.length&&(b=a[0].row);gvjs_BX(this,b)};gvjs_.Tsa=function(a){var b=gvjs_xX(this,a.row,a.column);this.ae.dispatchEvent(gvjs_kw,{row:b.row,column:b.Yb});a=this.V.fb().getProperty(a.row,this.sh,"dataRow");gvjs_BX(this,a)};
function gvjs_BX(a,b){if(null!=b)var c=a.ya.getValue(b,a.sh),c=a.qP.yc(c);for(var d="",e=0;e<a.LE.length;e++)if(!a.xJ[e]){var f=a.LE[e],g=f.properties.dataColumn,h=a.Jb[e%a.Jb.length];h&&h.color&&(h=h.color);var k="",l="";h&&(k=gvjs_$e({color:h}).Ko(),l=gvjs_$e({"background-color":h}).Ko());h=gvjs_D(a.m,gvjs_pX)?'<div class="legend-dot" style="'+l+gvjs_Eq:"";d+='<span style="'+k+gvjs_Dq+h+gvjs_Qb(f.label)+gvjs_kr;null!=b&&gvjs_D(a.m,gvjs_qX,!0)&&(g=a.ya.getValue(b,g),null!==g&&(f=g,k=null,a.An&&(k=
gvjs_k(a.An)?a.An[e]:a.An),k&&(f=k.yc(g)),(g=gvjs_Mh(a.m,gvjs_gX))&&(f+=g),d+=": "+gvjs_Qb(f)));d+="&nbsp;&nbsp;"}"oneRow"===a.Sna?(b=a.m.ba(gvjs_oX),b=d+(c?(!0===b?"|&nbsp;":b||"&nbsp; &nbsp;")+c:"")):b=(c?c:"")+"&nbsp;&nbsp;<br/>"+d;a.kb.kva.innerHTML=b}function gvjs_xX(a,b,c){var d=a.V.fb();return{row:null!=b?d.getProperty(b,a.sh,"dataRow"):null,Yb:null!=c?d.vg(c,"dataColumn"):null}}function gvjs_yX(a,b,c){return{row:null==b?null:a.Vi.G0(b),Yb:null==c?null:a.Vi.Uba(c)}}
gvjs_.Rsa=function(){this.ae.dispatchEvent(gvjs_J);if(this.$i&&!this.Hca){var a=this.$i.Ef();if(a){var b;if((b=this.$u().getSelection())&&b.length){b=b[0];var c=b.column;b=!c||1>c?null:b}else b=null;b?(b=gvjs_xX(this,b.row,b.column),(b=gvjs_CX(this,b.row,b.Yb))?(c=this.$i.fb(),b=c.fa()-c.G0(this.UN[b.wd])-1,a.setSelection([{row:b}])):a.setSelection([])):a.setSelection([])}}};function gvjs_CX(a,b,c){b=[String(b),String(c)].join();return a.ku[a.IX[b]]}
function gvjs_$ja(a,b){var c=b.IZ+","+b.fs,d=b.wd;a.ku.push(b);a.IX[c]=d}
gvjs_.vta=function(){var a=this.$u(),b=this.$i.Ef().getSelection()[0];if(b){this.Hca=!0;var c=this.$i.fb(),b=c.fa()-c.al(b.row)-1,d=this.ku[this.UN[b]],b=gvjs_p(function(){var b=this.V.ld().hAxis.viewWindow,c=b&&b.min&&b.min.getTime()||-Infinity,b=b&&b.max&&b.max.getTime()||Infinity,g=d.Fa.getTime(),h=gvjs_yX(this,d.IZ,d.fs);return g>=c&&g<=b?(a.setSelection([{row:h.row,column:h.Yb+1}]),this.Hca=!1,!0):!1},this);b()||(c=gvjs_L,gvjs_Hh(this.Sc,gvjs_ls)&&(c=gvjs_ms),gvjs_mo(a,c,b),gvjs_cka(this,d.IZ))}else a.setSelection([])};
function gvjs_cka(a,b){var c=a.sP.min.getTime(),d=a.sP.max.getTime(),e=a.V.ld().hAxis.viewWindow,f=e&&e.min&&e.min.getTime()||c,e=e&&e.max&&e.max.getTime()||d;b=a.ya.getValue(b,a.sh).getTime();f=e-f;b=Math.max(c,b-Math.round(f/2));d=Math.min(d,b+f);b=Math.max(c,d-f);a.setVisibleChartRange(new Date(b),new Date(d),!0)};gvjs_j(gvjs_xj,gvjs_wX,void 0);gvjs_wX.prototype.clearChart=gvjs_wX.prototype.cc;gvjs_wX.prototype.draw=gvjs_wX.prototype.draw;gvjs_wX.prototype.getContainer=gvjs_wX.prototype.getContainer;gvjs_wX.prototype.getSelection=gvjs_wX.prototype.getSelection;gvjs_wX.prototype.getVisibleChartRange=gvjs_wX.prototype.Xba;gvjs_wX.prototype.setVisibleChartRange=gvjs_wX.prototype.setVisibleChartRange;gvjs_wX.prototype.showDataColumns=gvjs_wX.prototype.cia;gvjs_wX.prototype.hideDataColumns=gvjs_wX.prototype.Rca;
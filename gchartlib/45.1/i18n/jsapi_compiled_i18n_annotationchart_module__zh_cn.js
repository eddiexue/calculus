var gvjs_7W="ABCDEFGHIJKLMNOPQRSTUVWXYZ",gvjs_8W="allValuesSuffix",gvjs_9W="annotationsContainer",gvjs_$W="annotationsFilterContainer",gvjs_aX="background-color",gvjs_bX="chartContainer",gvjs_cX="containerTable",gvjs_dX="dateFormat",gvjs_eX="displayAnnotations",gvjs_fX="displayDateBarSeparator",gvjs_gX="displayLegendDots",gvjs_hX="displayLegendValues",gvjs_iX="displayRangeSelector",gvjs_jX="displayZoomButtons",gvjs_kX="numberFormats",gvjs_lX="outerChartContainer",gvjs_mX="zoomButtons.",gvjs_Yja={annotationsWidth:25,
annotationsFilter:"off",scaleValues:null,dateFormat:"MMMM dd, yyyy",displayRangeSelector:!0,displayAnnotations:!0,displayAnnotationsFilter:!1,displayZoomButtons:!0,zoomButtons:{"1-second":{label:"1s",offset:[0,0,1]},"5-seconds":{label:"5s",offset:[0,0,5]},"10-seconds":{label:"10s",offset:[0,0,10]},"15-seconds":{label:"15s",offset:[0,0,15]},"1-minute":{label:"1min",offset:[0,1,0]},"5-minutes":{label:"5min",offset:[0,5,0]},"10-minutes":{label:"10min",offset:[0,10,0]},"15-minutes":{label:"15min",offset:[0,
15,0]},"1-hour":{label:"1h",offset:[1,0,0]},"6-hours":{label:"6h",offset:[6,0,0]},"1-day":{label:"1d",offset:[1,0,0,0,0]},"5-days":{label:"5d",offset:[5,0,0,0,0]},"1-week":{label:"1w",offset:[7,0,0,0,0]},"1-month":{label:"1m",offset:[1,0,0,0,0,0]},"3-months":{label:"3m",offset:[3,0,0,0,0,0]},"6-months":{label:"6m",offset:[6,0,0,0,0,0]},"1-year":{label:"1y",offset:[1,0,0,0,0,0,0]},max:{label:gvjs_Lv,range:{start:null,end:null}}},zoomButtonsOrder:["1-hour","1-day","5-days","1-week","1-month","3-months",
"6-months","1-year",gvjs_Lv],displayLegendDots:!0,displayDateBarSeparator:"|&nbsp;",displayExactValues:!1,fill:0,lclt:0,labelColors:null,allowHtml:!1},gvjs_Zja={annotations:{textStyle:{fontSize:10,auraColor:gvjs_d},boxStyle:{stroke:"#888888",strokeWidth:.5,rx:2,ry:2,gradient:{color1:"#eeeeee",color2:"#dddddd",x1:gvjs_3q,y1:gvjs_3q,x2:gvjs_3q,y2:gvjs_6q,useObjectBoundingBoxUnits:!0}}},backgroundColor:gvjs_ea,chartArea:{width:gvjs_6q,backgroundColor:gvjs_ea},height:200,width:gvjs_6q,hAxis:{baselineColor:gvjs_d,
gridlines:{count:-1},textStyle:{fontSize:9}},vAxis:{baselineColor:"#ababab",gridlines:{count:-1,color:"#ECECF7"},textPosition:gvjs_9u,inTextPosition:"high",viewWindowMode:gvjs_Pv},legend:{position:gvjs_d,alignment:gvjs_3},colors:gvjs_4E,targetAxisIndex:1,focusTarget:gvjs_1s,tooltipTrigger:gvjs_d,candlestick:{hollowIsRising:!0},forceIFrame:!1,animation:{duration:0}},gvjs__ja={filterColumnIndex:0,ui:{chartType:gvjs_zk,chartOptions:{chartArea:{width:gvjs_6q,height:gvjs_6q,backgroundColor:{fill:gvjs_ea,
stroke:"#ababab",strokeWidth:.5}},height:40,width:gvjs_6q,backgroundColor:gvjs_ea,areaOpacity:.1,lineWidth:1,forceIFrame:!1,hAxis:{baselineColor:gvjs_d,gridlines:{count:-1},textPosition:gvjs_9u,textStyle:{fontSize:9}},vAxis:{baselineColor:gvjs_d,scaleType:gvjs_Xv}},sideScreenColor:{fill:"#f2f2f2",fillOpacity:.75},zoomAroundSelection:!0,chartView:{columns:[0,1]}}},gvjs_0ja={width:gvjs_6q,height:gvjs_6q,allowHtml:!0,sortAscending:!1,sortColumn:0};function gvjs_nX(a){gvjs_op.call(this,a);this.kb=null;this.fI=!0;this.ya=null;this.sh=0;this.YN=this.NX=this.ku=this.$i=this.ax=this.ju=this.Hh=this.V=this.lG=this.nm=this.Sc=this.L=this.m=this.xr=null;this.xJ={};this.An=this.tP=this.LE=this.Kb=null;this.da=new gvjs_Np;this.ae=new gvjs_VJ(this);this.m1=!1;this.G=gvjs_cm()}gvjs_q(gvjs_nX,gvjs_op);gvjs_=gvjs_nX.prototype;
gvjs_.mg=function(){this.da.Kc();gvjs_V(this.ae);this.ae=new gvjs_VJ(this);gvjs_V(this.da);this.da=new gvjs_Np;this.m1=!1;this.$i&&this.$i.clear();this.Hh&&this.Hh.clear();this.V&&this.V.clear();this.ga&&this.G.pc(this.ga)};gvjs_.$u=function(){return this.V.Ef()};gvjs_.getSelection=function(){var a=this.$u().getSelection();return gvjs_s(a,function(a){a=gvjs_oX(this,a.row,a.column);return{row:a.row,column:a.Yb}},this)};
gvjs_.setSelection=function(a){var b=this.$u();null==a||0===a.length?b.setSelection([]):(a=gvjs_s(a,function(a){a=gvjs_pX(this,a.row,a.column);return{row:a.row,column:a.Yb}},this),b.setSelection(a))};gvjs_.dca=function(){return this.Hh.getState().range};gvjs_.setVisibleChartRange=function(a,b,c){this.Hh.Ad({range:{start:a,end:b}});this.Hh.draw();gvjs_qX(this,null==c?!0:c)};gvjs_.Yca=function(a){gvjs_rX(this,a,!0)};gvjs_.jia=function(a){gvjs_rX(this,a,!1)};
function gvjs_rX(a,b,c){gvjs_k(b)||(b=[b]);gvjs_r(b,function(a){this.xJ[a]=c},a);a.Qq()}gvjs_.Qq=function(){this.draw(this.ya,this.xr,this.L)};
gvjs_.Hg=function(a,b,c,d){this.xr=c||{};this.L=d||{};this.mN(b);this.O1(b);gvjs_1ja(this);a=this.Vi=new gvjs_Y(this.ya);a.Zq(this.Kb);b=a.kC([{column:this.sh,test:function(a){return null!=a}}]);a.lp(b);b=a.Ns(this.sh);a.lp(b);b=gvjs_Gm(this.Vi,0,this.sh);c=gvjs_Gm(this.Vi,this.Vi.fa()-1,this.sh);this.vP={min:b,max:c};this.hQ();gvjs_2ja(this);gvjs_sX(this);gvjs_3ja(this);gvjs_4ja(this);gvjs_5ja(this);gvjs_6ja(this);gvjs_7ja(this);gvjs_8ja(this);this.V.lh(a);this.Hh.lh(a);this.Hh.draw();gvjs_qX(this,
!1)};gvjs_.O1=function(a){this.ya=a;this.ep()};
gvjs_.mN=function(a){if(!a)throw Error(gvjs_Cr);var b=a.Y();if(2>b)throw Error("Data must contain at least two columns.");if(a.X(0)!=gvjs_Xa&&a.X(0)!=gvjs_Ya)throw Error("First column must contain date, or date and time.");for(var c,d,e=!1,f=0,g=1;g<b&&!e;g++)c=a.X(g),c==gvjs_e?f=1:0==f?(e=!0,d=g):1==f?c==gvjs_f?f=2:(e=!0,d=g):2==f&&(c==gvjs_f?f=0:(e=!0,d=g));if(e)throw Error("Each values column may be followed by one or two annotation columns. column number "+d+gvjs_uq+c);};
function gvjs_2ja(a){var b=a.kb;b&&b.rU&&gvjs_Q(b.rU,gvjs_Mj,gvjs_d);var c=gvjs_7l(a.ga,a.m),d=gvjs_6l(a.ga,a.m);if(b){gvjs_0k(b.rU,d,c);gvjs_Q(b.rU,gvjs_Mj,"");var e=gvjs_dl(b.QG);a.Ma=c-(e.top+e.bottom);a.ha=d-(e.left+e.right);gvjs_0k(b.QG,a.ha,a.Ma)}else{var b=a.kb={},f=a.G;f.pc(a.ga);gvjs_MA(a.ga,["google-visualization-atl","container"]);var g=a.ga.id+"_AnnotationChart_",h=function(a,b,c){var d=f.createElement(gvjs_Za);a&&(d.id=g+a);d.className=b;c.appendChild(d);return d},k=b.rU=h("","",a.ga);
gvjs_Q(k,gvjs_yi,gvjs_vi);gvjs_0k(k,d,c);k=h("","",k);gvjs_Q(k,gvjs_yi,gvjs_O);gvjs_Rk(k,0,0);gvjs_0k(k,gvjs_6q,gvjs_6q);k=b.QG=h("borderDiv","border",k);k=b.cFa=h(gvjs_cX,gvjs_cX,k);e=gvjs_dl(b.QG);a.Ma=c-(e.top+e.bottom);a.ha=d-(e.left+e.right);gvjs_0k(b.QG,a.ha,a.Ma);a=b.aFa=h("chartTd","td chartTdContainer",k);c=b.OX=h("annotationsTd","td annotationsTdContainer",k);d=b.UFa=h(gvjs_lX,gvjs_lX,a);k=b.Tna=h("chartControlsContainer","chartControls",d);b.YF=h("zoomControlContainer","zoomControls",k);
b.kva=h("legendContainer",gvjs_qv,k);b.Rna=h(gvjs_bX,gvjs_bX,d);b.I4=h("rangeControlContainer","rangeControl",a);b.mG=h(gvjs_$W,gvjs_$W,c);b.KX=b.KX=h(gvjs_9W,gvjs_9W,c)}}
function gvjs_5ja(a){var b=1+gvjs_Eh(a.Sc,["series.0.pointSize",gvjs_tw],6),c=gvjs_al(a.kb.Tna).height,d=gvjs_D(a.m,gvjs_iX)?gvjs_E(a.nm,"ui.chartOptions.height"):0,c=a.Ma-(c+d),e=Math.max(b,gvjs_E(a.Sc,gvjs_bt,0)),f=Math.max(b,2+2*gvjs_E(a.Sc,"hAxis.textStyle.fontSize")),f=Math.max(f,gvjs_E(a.Sc,gvjs_8s,0));gvjs_nh(a.Sc,1,{height:c,chartArea:{top:e,bottom:f,height:c-(e+f)}});gvjs_nh(a.nm,1,{ui:{chartOptions:{chartArea:{height:d}}}});d=0;a.fI?(d=a.lG.ba(gvjs_nb,gvjs_0j),gvjs_1k(a.kb.OX,d),d=gvjs_2k(a.kb.OX).width,
d=Math.max(0,d)):gvjs_1k(a.kb.OX,0);d=a.ha-d;c=Math.max(b,gvjs_E(a.Sc,gvjs_$s,0));b=Math.max(b,gvjs_E(a.Sc,gvjs_at,0));e=d-(c+b);gvjs_nh(a.Sc,1,{width:d,chartArea:{left:c,right:b,width:e}});gvjs_nh(a.nm,1,{ui:{chartOptions:{width:d,chartArea:{left:c+1,right:b+2,width:e-3}}}})}
function gvjs_6ja(a){a.V||(a.V=new gvjs_Z({chartType:gvjs_sk,container:a.kb.Rna}));a.Hh||(a.Hh=new gvjs__({controlType:"ChartRangeFilter",container:a.kb.I4}),gvjs_jo(a.Hh,gvjs_L,gvjs_p(function(){gvjs_fo(this.Hh,gvjs_ri,gvjs_p(this.mta,this))},a)));if(a.fI){var b=gvjs_D(a.m,"displayAnnotationsFilter"),c=gvjs_p(function(){var a=this.fI&&b?gvjs_2k(this.kb.mG).height:0;this.kb.KX.style.height=gvjs_Sk(this.Ma-a+gvjs_M,!0)},a);a.nG||(a.nG=new gvjs__({controlType:"StringFilter",container:a.kb.mG,options:{filterColumnLabel:"Text",
matchType:"any",useFormattedValue:!0,ui:{label:"Filter",labelSeparator:": "}}}));gvjs_Q(a.kb.mG,gvjs_Mj,b?"":gvjs_d);a.$i||(a.$i=new gvjs_Z({chartType:gvjs_8j,container:a.kb.KX}),gvjs_jo(a.$i,gvjs_L,gvjs_p(function(){gvjs_fo(this.$i,gvjs_J,gvjs_p(this.vta,this))},a)));a.ju?c():(a.ju=new gvjs_eq(a.kb.mG),a.ju.bind(a.nG,a.$i),gvjs_jo(a.ju,gvjs_L,c))}else a.kb.mG.EFa="",a.$i&&(a.$i.clear(),a.$i=null),a.nG&&(a.nG.clear(),a.nG=null),a.ju&&(a.ju.clear(),a.ju=null);a.m1||(a.m1=!0,gvjs_fo(a.V,gvjs_L,gvjs_p(a.I2,
a)),gvjs_jo(a.V,gvjs_L,gvjs_p(function(){var a=this.$u();gvjs_fo(a,gvjs_J,gvjs_p(this.Rsa,this));gvjs_fo(a,gvjs_dw,gvjs_p(this.Tsa,this));gvjs_fo(a,gvjs_cw,gvjs_p(this.Ssa,this))},a)))}gvjs_.I2=function(){this.ae.dispatchEvent(gvjs_L)};gvjs_.mta=function(){var a=this.Hh.getState();gvjs_qX(this,!1);this.ae.dispatchEvent(gvjs_Gw,a.range)};
function gvjs_qX(a,b){var c=a.Hh.getState();a.V.$("hAxis.viewWindow",{min:c.range.start,max:c.range.end});c=a.V.getOption(gvjs_es);b&&0===c&&a.V.$(gvjs_es,150);a.V.draw();a.V.$(gvjs_es,c)}
function gvjs_1ja(a){a.Kb=[{label:"Datetime",type:a.ya.X(a.sh),calc:gvjs_p(function(a,b){return{v:a.getValue(b,this.sh),p:{dataRow:b}}},a)}];a.LE=[];for(var b=0,c=a.sh+1,d=a.ya.Y();c<d;){var e=c,f={label:a.ya.Xa(c)+"  ",sourceColumn:c,properties:{dataColumn:e,viewColumn:a.Kb.length}};a.xJ[b]&&(f.type=gvjs_e,f.calc=function(){return null});a.Kb.push(f);a.LE.push(f);c++;c<d&&a.ya.X(c)===gvjs_f&&(c++,c<d&&a.ya.X(c)===gvjs_f&&c++,a.xJ[b]||a.Kb.push({calc:function(a){return gvjs_p(function(b,c){b.getValue(c,
this.sh);return(b=gvjs_tX(this,c,a))?b.key:null},this)}.call(a,e),type:gvjs_f,role:gvjs_gs,properties:{dataColumn:e}}));b++}for(c=b=0;c<a.LE.length;c++)if(!a.xJ[c]){b=c;break}gvjs_nh(a.nm,1,{ui:{chartView:{columns:[0,a.LE[b].properties.viewColumn]}}});gvjs_nh(a.nm,1,{ui:{chartOptions:{colors:[a.Jb[b%a.Jb.length]]}}})}
gvjs_.hQ=function(){function a(){return("      "+b(f++)).substr(-e)}function b(a){return 26<=a?b(Math.floor(a/26)-1)+gvjs_7W[a%26]:gvjs_7W[a]}var c=this.ya.Y(),d=this.ya.fa();this.ku=[];this.NX={};for(var e=Math.ceil(Math.log(d)/Math.log(26)),f=0,g=0;g<d;g++){this.ya.getValue(g,this.sh);for(var h=this.sh+1;h<c;){var k=h;h++;if(h<c&&this.ya.X(h)===gvjs_f){var l=h,m=null;h++;h<c&&this.ya.X(h)===gvjs_f&&(m=h,h++);(k=gvjs_9ja(this,this.ku.length,g,k,l,m,a))&&gvjs_$ja(this,k)}}}this.fI=gvjs_D(this.m,gvjs_eX)&&
0<this.ku.length};function gvjs_9ja(a,b,c,d,e,f,g){e=e&&a.ya.getValue(c,e);f=f&&a.ya.getValue(c,f);return e||f?(g=g(),a=a.ya.getValue(c,a.sh),{wd:b,key:g,title:e,text:f,Fa:a,OZ:c,fs:d}):null}
function gvjs_aka(a){a.ax=new gvjs_S;a.ax.jg(gvjs_f,"Key");a.ax.jg(gvjs_f,"Text");a.YN=[];for(var b=[],c=0;c<a.ku.length;c++){var d=a.ku[c],e='<button type="button" class="key">'+gvjs_Rb(d.key)+"</button>",f=d.Fa;a.tP&&(f=gvjs_Rb(a.tP.yc(d.Fa)));var g=d.title||"",d=d.text||"";gvjs_D(a.m,"allowHtml")||(g=gvjs_Rb(g),d=gvjs_Rb(d));b.push([e,'<span class="title">'+g+'</span> <span class="description">'+d+'</span> <span class="date">'+f+"</span> "])}a.ax.hu(b);var h=a.ax.fa();gvjs_r(b,function(a,b){this.ax.$ha(b,
"idx",h-b-1);this.YN[h-b-1]=b},a)}function gvjs_7ja(a){if(a.fI){gvjs_aka(a);var b=gvjs_rh(a.lG);b.width=gvjs_6q;b.height=gvjs_6q;a.$i.setOptions(b);a.ju.draw(a.ax)}}
gvjs_.ep=function(){this.m=new gvjs_kh([this.xr,gvjs_Yja]);this.Sc=new gvjs_kh([gvjs_Th(this.m,gvjs_Wj)||{},gvjs_Zja]);this.nm=new gvjs_kh([gvjs_Th(this.m,gvjs_Fw)||{},gvjs__ja]);this.lG=new gvjs_kh([gvjs_Th(this.m,gvjs_pi)||{},gvjs_0ja]);var a=gvjs_Jh(this.m,gvjs_Bs);a&&(gvjs_Q(this.kb.QG,gvjs_aX,a),gvjs_nh(this.Sc,1,{backgroundColor:a}),gvjs_nh(this.nm,1,{ui:{chartOptions:{backgroundColor:a}}}));gvjs_nh(this.Sc,1,{colors:this.m.ba(gvjs_tt)});this.Jb=this.Sc.ba(gvjs_tt);gvjs_nh(this.nm,1,{ui:{chartOptions:{colors:[this.Jb[0]]}}});
gvjs_n(this.m.ba(gvjs_fu))&&gvjs_nh(this.Sc,1,{areaOpacity:gvjs_E(this.m,gvjs_fu)/100,seriesType:gvjs_us});a=gvjs_D(this.m,gvjs_dv,!1);gvjs_nh(this.Sc,1,{interpolateNulls:a});gvjs_nh(this.nm,1,{ui:{chartOptions:{interpolateNulls:a}}});gvjs_nh(this.Sc,1,{vAxis:{maxValue:this.m.ba(gvjs_Lv),minValue:this.m.ba(gvjs_Tv)}});if(a=this.m.ba("scaleColumns"))if(0===a.length)gvjs_nh(this.Sc,1,{vAxis:{textPosition:gvjs_d}});else{for(var b=1===a.length,c={},d=0;d<a.length;d++)c[a[d]]=b?{targetAxisIndex:1}:{targetAxisIndex:d};
gvjs_nh(this.Sc,1,{series:c})}else gvjs_nh(this.Sc,1,{vAxis:{targetAxisIndex:1}});this.m.ba(gvjs_Ww)&&(this.m.ba(gvjs_Ww)!==gvjs_Ej&&"allfixed"!==this.m.ba(gvjs_Ww)||gvjs_nh(this.Sc,1,{vAxis:{baseline:0}}));this.ya.X(this.sh)===gvjs_Ya?gvjs_nh(this.m,1,{minDisplaySeconds:60,dateFormat:"HH:mm MMMM dd, yyyy",minTimelineGranularity:0}):gvjs_nh(this.m,1,{minDisplaySeconds:86400,dateFormat:"MMMM dd, yyyy",minTimelineGranularity:86400});a=this.m.ba(gvjs_dX);a=gvjs_m(a)?{pattern:gvjs_G(this.m,gvjs_dX)}:
gvjs_Th(this.m,gvjs_dX);this.tP=new gvjs_4h(a);a=this.m.ba(gvjs_kX);if(gvjs_m(a))a={pattern:gvjs_G(this.m,gvjs_kX)},this.An=new gvjs_8h(a);else if(gvjs_l(a)){var e=[];this.An=e;gvjs_t(gvjs_Th(this.m,gvjs_kX),function(a,b){a={pattern:a};b=parseInt(b,10);e[b]=new gvjs_8h(a)})}else gvjs_D(this.m,"displayExactValues")?this.An=null:(a={pattern:"#.##"},this.An=new gvjs_8h(a));a=gvjs_G(this.m,"scaleFormat","#.########")+gvjs_G(this.m,gvjs_8W,"");gvjs_nh(this.Sc,1,{vAxis:{format:a}});a=gvjs_F(this.m,"thickness");
gvjs_nh(this.Sc,1,{lineWidth:null!=a?Math.max(1,a):1});a=this.m.ba("annotationsWidth");gvjs_n(a)?gvjs_nh(this.lG,1,{width:a+"%"}):a&&gvjs_nh(this.lG,1,{width:a});this.Sna="newRow"===gvjs_G(this.m,"legendPosition","sameRow")?"twoRows":"oneRow";gvjs_nh(this.nm,1,{ui:{chartOptions:{width:this.Sc.ba(gvjs_nb)}}});gvjs_nh(this.nm,1,{ui:{chartOptions:{chartArea:{width:this.Sc.ba(gvjs_ct)}}}});this.m.ba("async",!1)&&(gvjs_nh(this.Sc,1,{async:!0}),gvjs_nh(this.nm,1,{ui:{chartOptions:{async:!0}}}))};
function gvjs_8ja(a){var b=a.Hh.getState()||{};b.range=b.range||{};var c=a.m.ba("zoomEndTime");null!=c&&(b.range.end=c);c=a.m.ba("zoomStartTime");null!=c&&(b.range.start=c);a.Hh.Ad(b);gvjs_D(a.m,gvjs_iX)?a.kb.I4.style.display="":a.kb.I4.style.display=gvjs_d;b=gvjs_rh(a.Sc);a.V.setOptions(b);b=gvjs_rh(a.nm);a.Hh.setOptions(b)}
function gvjs_3ja(a){if(gvjs_D(a.m,"displayAggregationButtons")){var b=[{id:"daily",label:"Daily",modCalc:function(a){if(null!=a)return new Date(a.getFullYear(),a.getMonth(),a.getDate(),0)}},{id:"weekly",label:"Weekly",modCalc:function(a){if(null!=a)return new Date(a.getFullYear(),a.getMonth(),a.getDate()-a.getDay())}},{id:"monthly",label:"Monthly",modCalc:function(a){if(null!=a)return new Date(a.getFullYear(),a.getMonth(),1)}},{id:"year",label:"Yearly",modCalc:function(a){if(null!=a)return new Date(a.getFullYear(),
0,1)}}],c=a.kb.YF.id,d;d="Aggragate: ";for(var e=0;e<b.length;e++){var f=b[e],g=c+"_"+f.id;d+=' <button type="button" id="'+g+'" href="#">'+gvjs_Rb(f.label)+"</button>"}d+="<br />";for(var e=function(a){for(var b=0;b<a.length;b++)if(null!==a[b])return a[b]},h=[],f=a.ya.Y(),g=a.sh+1;g<f;)h.push({column:g,type:gvjs_e,label:a.ya.Xa(g),aggregation:gvjs_nq}),g++,g<f&&(h.push({column:g,type:gvjs_f,label:a.ya.Xa(g),aggregation:e}),g++,g<f&&(h.push({column:g,type:gvjs_f,label:a.ya.Xa(g),aggregation:e}),g++));
for(var k=a.ya.Xa(a.sh),e=0;e<b.length;e++)f=b[e],d=gvjs_p(function(a){return gvjs_p(function(){gvjs_oq(this.ya,[{column:this.sh,type:gvjs_Xa,label:k,modifier:a}],h)},this)},a),g=c+"_"+f.id,a.da.F(a.G.j(g),gvjs_Vj,d(f.modCalc))}}
function gvjs_4ja(a){var b=a.kb.YF.id,c=gvjs_D(a.m,gvjs_jX),d=gvjs_Oh(a.m,"zoomButtonsOrder"),e=a.G;e.pc(a.kb.YF);c&&(e.append(a.kb.YF,"Zoom: "),gvjs_r(d,function(a){if(gvjs_th(this.m,gvjs_mX+a)){var c=gvjs_G(this.m,gvjs_mX+a+".className","zoomButton"),d=gvjs_G(this.m,gvjs_mX+a+".label",a),c=gvjs_rf(gvjs_Ws,{type:gvjs_Ws,id:b+"_"+a,"class":c,href:"#"},d),f=gvjs_gg(e.td,c);e.append(this.kb.YF,f);var f=gvjs_5aa(this.kb.YF),l=gvjs_p(gvjs_bka(this,a),this);gvjs_jo(this,gvjs_L,gvjs_p(function(){this.da.F(f,
gvjs_Vj,l)},this))}},a))}function gvjs_bka(a,b){var c=a.m.ba(gvjs_mX+b+".offset");if(c)var d=gvjs_RD(c);var e=gvjs_th(a.m,gvjs_mX+b+".range");return gvjs_p(function(){var a=this.Hh.getState(),b;b=a.range.end;null==b&&(b=this.vP.max);var h;c&&null!=b?(b=gvjs_JD(b,d,-1),h=this.vP.min,b=b.getTime()>h.getTime()?b:h,h={start:b}):e&&(h=e);gvjs_i(h.start)&&(a.range.start=h.start);gvjs_i(h.end)&&(a.range.end=h.end);this.Hh.Ad(a);this.Hh.draw();gvjs_qX(this,!0)},a)}
gvjs_.Ssa=function(a){a=gvjs_oX(this,a.row,a.column);this.ae.dispatchEvent(gvjs_cw,{row:a.row,column:a.Yb});var b;a=this.getSelection();0<a.length&&(b=a[0].row);gvjs_sX(this,b)};gvjs_.Tsa=function(a){var b=gvjs_oX(this,a.row,a.column);this.ae.dispatchEvent(gvjs_dw,{row:b.row,column:b.Yb});a=this.V.fb().getProperty(a.row,this.sh,"dataRow");gvjs_sX(this,a)};
function gvjs_sX(a,b){if(null!=b)var c=a.ya.getValue(b,a.sh),c=a.tP.yc(c);for(var d="",e=0;e<a.LE.length;e++)if(!a.xJ[e]){var f=a.LE[e],g=f.properties.dataColumn,h=a.Jb[e%a.Jb.length];h&&h.color&&(h=h.color);var k="",l="";h&&(k=gvjs_7e({color:h}).Ko(),l=gvjs_7e({"background-color":h}).Ko());h=gvjs_D(a.m,gvjs_gX)?'<div class="legend-dot" style="'+l+gvjs_Bq:"";d+='<span style="'+k+gvjs_Aq+h+gvjs_Rb(f.label)+gvjs_hr;null!=b&&gvjs_D(a.m,gvjs_hX,!0)&&(g=a.ya.getValue(b,g),null!==g&&(f=g,k=null,a.An&&(k=
gvjs_k(a.An)?a.An[e]:a.An),k&&(f=k.yc(g)),(g=gvjs_Jh(a.m,gvjs_8W))&&(f+=g),d+=": "+gvjs_Rb(f)));d+="&nbsp;&nbsp;"}"oneRow"===a.Sna?(b=a.m.ba(gvjs_fX),b=d+(c?(!0===b?"|&nbsp;":b||"&nbsp; &nbsp;")+c:"")):b=(c?c:"")+"&nbsp;&nbsp;<br/>"+d;a.kb.kva.innerHTML=b}function gvjs_oX(a,b,c){var d=a.V.fb();return{row:null!=b?d.getProperty(b,a.sh,"dataRow"):null,Yb:null!=c?d.vg(c,"dataColumn"):null}}function gvjs_pX(a,b,c){return{row:null==b?null:a.Vi.J0(b),Yb:null==c?null:a.Vi.aca(c)}}
gvjs_.Rsa=function(){this.ae.dispatchEvent(gvjs_J);if(this.$i&&!this.Oca){var a=this.$i.Ef();if(a){var b;if((b=this.$u().getSelection())&&b.length){b=b[0];var c=b.column;b=!c||1>c?null:b}else b=null;b?(b=gvjs_oX(this,b.row,b.column),(b=gvjs_tX(this,b.row,b.Yb))?(c=this.$i.fb(),b=c.fa()-c.J0(this.YN[b.wd])-1,a.setSelection([{row:b}])):a.setSelection([])):a.setSelection([])}}};function gvjs_tX(a,b,c){b=[String(b),String(c)].join();return a.ku[a.NX[b]]}
function gvjs_$ja(a,b){var c=b.OZ+","+b.fs,d=b.wd;a.ku.push(b);a.NX[c]=d}
gvjs_.vta=function(){var a=this.$u(),b=this.$i.Ef().getSelection()[0];if(b){this.Oca=!0;var c=this.$i.fb(),b=c.fa()-c.al(b.row)-1,d=this.ku[this.YN[b]],b=gvjs_p(function(){var b=this.V.ld().hAxis.viewWindow,c=b&&b.min&&b.min.getTime()||-Infinity,b=b&&b.max&&b.max.getTime()||Infinity,g=d.Fa.getTime(),h=gvjs_pX(this,d.OZ,d.fs);return g>=c&&g<=b?(a.setSelection([{row:h.row,column:h.Yb+1}]),this.Oca=!1,!0):!1},this);b()||(c=gvjs_L,gvjs_Eh(this.Sc,gvjs_es)&&(c=gvjs_fs),gvjs_jo(a,c,b),gvjs_cka(this,d.OZ))}else a.setSelection([])};
function gvjs_cka(a,b){var c=a.vP.min.getTime(),d=a.vP.max.getTime(),e=a.V.ld().hAxis.viewWindow,f=e&&e.min&&e.min.getTime()||c,e=e&&e.max&&e.max.getTime()||d;b=a.ya.getValue(b,a.sh).getTime();f=e-f;b=Math.max(c,b-Math.round(f/2));d=Math.min(d,b+f);b=Math.max(c,d-f);a.setVisibleChartRange(new Date(b),new Date(d),!0)};gvjs_j(gvjs_uj,gvjs_nX,void 0);gvjs_nX.prototype.clearChart=gvjs_nX.prototype.cc;gvjs_nX.prototype.draw=gvjs_nX.prototype.draw;gvjs_nX.prototype.getContainer=gvjs_nX.prototype.getContainer;gvjs_nX.prototype.getSelection=gvjs_nX.prototype.getSelection;gvjs_nX.prototype.getVisibleChartRange=gvjs_nX.prototype.dca;gvjs_nX.prototype.setVisibleChartRange=gvjs_nX.prototype.setVisibleChartRange;gvjs_nX.prototype.showDataColumns=gvjs_nX.prototype.jia;gvjs_nX.prototype.hideDataColumns=gvjs_nX.prototype.Yca;

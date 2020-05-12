(this["webpackJsonphackcovid-app"]=this["webpackJsonphackcovid-app"]||[]).push([[0],{32:function(e,a,t){e.exports=t(43)},37:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(27),r=t.n(s),c=(t(37),t(7)),m=t(9),o=t(12),u=t(15),i=t(16),d=t(30),E=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).chartRef=l.a.createRef(),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new i.b).module(d.a,(function(a){if("chart"===a)return new i.a(e.chartRef.current)})).redefine("state",this.props.uf)}},{key:"render",value:function(){return l.a.createElement("div",{className:"FanChart"},l.a.createElement("div",{ref:this.chartRef}))}}]),t}(n.Component),p=t(31),v=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).chartRef=l.a.createRef(),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new i.b).module(p.a,(function(a){if("chart"===a)return new i.a(e.chartRef.current)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"BarChart"},l.a.createElement("div",{ref:this.chartRef}))}}]),t}(n.Component);t(42);var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bodyPage"},l.a.createElement("h1",null,"R",l.a.createElement("sub",null,"t")," Covid-19"),l.a.createElement("p",{className:"hackcovid"},"O que \xe9 o HackCovid?"),l.a.createElement("p",{className:"hackcoviddescription"},"\xc9 um projeto social que tem como objetivo auxiliar na diminui\xe7\xe3o do impacto do covid-19 atrav\xe9s de dados e machine learning. Nossa miss\xe3o \xe9 calcular e mostrar em tempo real o Rt (n\xfamero de reprodu\xe7\xe3o do v\xedrus no tempo t) do covid-19 de todos os estados do Brasil. Uma vez com acesso a este dashboard, o cidad\xe3o brasileiro consegue entender como o virus est\xe1 se espalhando e qu\xe3o efetivo est\xe3o sendo as medidas de quarentena em sua regi\xe3o. E os governos estaduais, com a vis\xe3o do Rt, conseguem avaliar melhor as medidas de restri\xe7\xe3o, para maximizar tanto a prosperidade econ\xf4mica quanto a sa\xfade e seguran\xe7a de sua popula\xe7\xe3o."),l.a.createElement("p",{className:"whatsRt"},"O que \xe9 o Rt?"),l.a.createElement("p",{className:"answerRt"},"Rt \xe9 o numero de reprodu\xe7\xe3o do v\xedrus no tempo t. Esse n\xfamero descreve a m\xe9dia de pessoas que s\xe3o contaminadas por pessoa infectada. A forma mais conhecida dessa m\xe9trica \xe9 o n\xfamero b\xe1sico de reprodu\xe7\xe3o, R0 (r-zero) quando t=0. O problema do R0 \xe9 que ele n\xe3o adapta a mudan\xe7as de comportamento ou restri\xe7\xf5es governamentais e sociais, ele \xe9 fixo. Na forma que a pandemia evolui e as restri\xe7\xf5es aumentam ou diminuem, o Rt tamb\xe9m muda. Quando Rt > 1, a pandemia espalha para uma por\xe7\xe3o grande da popula\xe7\xe3o. Se o Rt menor que 1, a pandemia diminui rapidamente antes de infectar muita gente. Inspirados pelo ",l.a.createElement("a",{className:"link",href:"https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb"},"notebook")," do Kevin Systrom, reproduzimos o modelo utilizando os dados do Brasil."),l.a.createElement("p",{className:"States"},"Compara\xe7\xe3o entre estados"),l.a.createElement("p",{className:"latestWeek"},"\xdaltimo Dia"),l.a.createElement("div",{className:"barchartstyle"},l.a.createElement(v,null)),l.a.createElement("div",{className:"allState"},l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Acre"),l.a.createElement(E,{className:"state",uf:"AC"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Alagoas"),l.a.createElement(E,{className:"state",uf:"AL"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Amap\xe1"),l.a.createElement(E,{className:"state",uf:"AP"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Amazonas"),l.a.createElement(E,{className:"state",uf:"AM"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Bahia"),l.a.createElement(E,{className:"state",uf:"BA"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Cear\xe1"),l.a.createElement(E,{className:"state",uf:"CE"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Distrito Federal"),l.a.createElement(E,{className:"state",uf:"DF"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Esp\xedrito Santo"),l.a.createElement(E,{className:"state",uf:"ES"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Goi\xe1s"),l.a.createElement(E,{className:"state",uf:"GO"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Maranh\xe3o"),l.a.createElement(E,{className:"state",uf:"MA"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Mato Grosso"),l.a.createElement(E,{className:"state",uf:"MT"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Mato Grosso do Sul"),l.a.createElement(E,{className:"state",uf:"MS"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Minas Gerais"),l.a.createElement(E,{className:"state",uf:"MG"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Par\xe1"),l.a.createElement(E,{className:"state",uf:"PA"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Para\xedba"),l.a.createElement(E,{className:"state",uf:"PB"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Paran\xe1"),l.a.createElement(E,{className:"state",uf:"PR"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Pernambuco"),l.a.createElement(E,{className:"state",uf:"PB"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Piau\xed"),l.a.createElement(E,{className:"state",uf:"PI"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Rio de Janeiro"),l.a.createElement(E,{className:"state",uf:"RJ"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Rio Grande do Norte"),l.a.createElement(E,{className:"state",uf:"RN"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Rio Grande do Sul"),l.a.createElement(E,{className:"state",uf:"RS"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Rond\xf4nia"),l.a.createElement(E,{className:"state",uf:"RO"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Roraima"),l.a.createElement(E,{className:"state",uf:"RR"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Santa Catarina"),l.a.createElement(E,{className:"state",uf:"SC"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"S\xe3o Paulo"),l.a.createElement(E,{className:"state",uf:"SP"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Sergipe"),l.a.createElement(E,{className:"state",uf:"SE"})),l.a.createElement("div",{className:"uniqueState"},l.a.createElement("p",null,"Tocantins"),l.a.createElement(E,{className:"state",uf:"TO"})))),l.a.createElement("br",null),l.a.createElement("div",{className:"Footer"},l.a.createElement("br",null),l.a.createElement("br",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.843588e7.chunk.js.map
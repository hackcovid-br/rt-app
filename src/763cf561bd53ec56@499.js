// https://observablehq.com/d/763cf561bd53ec56@499
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Fan Chart

This variation of a line chart switches to an area chart to show projected uncertainty in the future. Data: [IHME](https://covid19.healthdata.org/)`
)});
  main.variable(observer("chart")).define("chart", ["d3","width","height","DOM","negativeColor","y","threshold","positiveColor","xAxis","yAxis","grid","area","data","line","margin","x"], function(d3,width,height,DOM,negativeColor,y,threshold,positiveColor,xAxis,yAxis,grid,area,data,line,margin,x)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("stroke-miterlimit", 1);

  const gradient = DOM.uid();
  
  svg.append("linearGradient")
      .attr("id", gradient.id)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", height)
    .selectAll("stop")
      .data([
        {offset: 0, color: negativeColor},
        {offset: y(threshold) / height, color: negativeColor},
        {offset: y(threshold) / height, color: positiveColor},
        {offset: 1, color: positiveColor}
      ])
    .join("stop")
      .attr("offset", d => d.offset)
      .attr("stop-color", d => d.color);
  
  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  svg.append("g")
      .call(grid);

  svg.append("path")
      .attr("fill", gradient)
      .attr("fill-opacity", 0.5)
      .attr("d", area(data));

  // svg.append("path")
  //     .attr("fill", "none")
  //     .attr("stroke", "steelblue")
  //     .attr("stroke-width", 1.5)
  //     .attr("d", line(data.slice(0, 1)));

  svg.append("path")
      .attr("fill", "none")
      .attr("stroke", gradient)
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "3,3")
      .attr("d", line(data.slice(1)));
  
  svg.append("line")
    .attr("id", "followline")
    .attr("x1", margin.left) //x("2020-01-20") x(data[0]["date"])
    .attr("x2", margin.left)
    .attr("y1", 0)
    .attr("y2", height - margin.top)
    .attr("stroke-dasharray", "3,3")
    .style("stroke", "steelblue")
    .style("stroke-width", 1.5)
  
  const circles = svg.append("g")
      .attr("stroke", gradient)
      .attr("stroke-opacity", 1)
    .selectAll("circle")
    .data(data.slice(1))
    .join("circle")
      .attr("cx", d => x(d.date))
      .attr("cy", d => y(d.mean))
      .attr("fill", gradient)
      .attr("fill-opacity", 0.1)
      .attr("r", 5)
  
  circles.append("title")
    .attr("class", "tootlip")
    // .html(d => `
    //       <div class="tootlip">
    //         <p>upper: ${d.upper}</p>
    //         <p>mean: ${d.mean}</p>
    //         <p>lower: ${d.lower}</p>
    //       </div>`)
    .text(d => `upper: ${d.upper}\nmean: ${d.mean}\nlower: ${d.lower}`)
  
  // .append("title")
  //     .text(d => `${d.names.join(" → ")}\n${d.value.toLocaleString()}`);
    // const tooltip = d3
    // .select(div)
    // .append("div")
    // .attr("class", "tooltip")
    // .style("display", "none");
  //https://observablehq.com/@radames/youtube-demonetized-words-similarity-study
  
  svg.on("mousemove", function(){
      const coordinates = d3.mouse(this);
      const followline = d3.select("#followline")
      followline.attr("x1", coordinates[0]);
      followline.attr("x2", coordinates[0]);
  });
  
  return svg.node();
}
);
  main.variable(observer("positiveColor")).define("positiveColor", function(){return(
"steelblue"
)});
  main.variable(observer("negativeColor")).define("negativeColor", function(){return(
"red"
)});
  main.variable(observer("threshold")).define("threshold", function(){return(
1
)});
  main.variable(observer()).define(["data"], function(data){return(
typeof(data[0]["date"])
)});
  main.variable(observer("columns")).define("columns", ["data2"], function(data2){return(
data2[0]
)});
  main.variable(observer("realData")).define("realData", ["data2"], function(data2){return(
data2.slice(1)
)});
  main.variable(observer("data")).define("data", ["d3"], async function(d3){return(
Object.assign(await d3.csv("https://gist.githubusercontent.com/Jefersonalves/faf4f6ec1cb39b37ccadc4394db5c994/raw/5fa48a3ed5a49555f943e8220dc2d9672b1be124/rt-sp.csv", d3.autoType), {y: "↑ Mortes por dia"})
)});
  main.variable(observer("data2")).define("data2", function(){return(
[['mean', 'lower', 'upper', 'date'],
 ['0.0', '0.0', '10.81', '2020-01-01'],
 ['5.8500000000000005', '0.12', '10.16', '2020-01-02'],
 ['3.01', '0.0', '7.1000000000000005', '2020-01-03'],
 ['3.35', '0.03', '6.45', '2020-01-04'],
 ['2.5500000000000003', '0.0', '5.22', '2020-01-05'],
 ['2.15', '0.0', '4.55', '2020-01-06'],
 ['2.34', '0.06', '4.47', '2020-01-07'],
 ['2.72', '0.37', '4.73', '2020-01-08'],
 ['2.79', '0.6', '4.64', '2020-01-09'],
 ['3.42', '1.53', '5.1000000000000005', '2020-01-10'],
 ['3.33', '1.71', '4.73', '2020-01-11'],
 ['3.02', '1.61', '4.23', '2020-01-12'],
 ['2.97', '1.74', '4.04', '2020-01-13'],
 ['2.71', '1.62', '3.68', '2020-01-14'],
 ['2.67', '1.68', '3.5500000000000003', '2020-01-15'],
 ['2.56', '1.68', '3.39', '2020-01-16'],
 ['2.62', '1.77', '3.35', '2020-01-17'],
 ['2.63', '1.85', '3.3000000000000003', '2020-01-18'],
 ['2.38', '1.65', '3.0', '2020-01-19'],
 ['1.99', '1.29', '2.58', '2020-01-20'],
 ['1.77', '1.13', '2.38', '2020-01-21'],
 ['1.61', '0.97', '2.2', '2020-01-22'],
 ['1.65', '1.01', '2.22', '2020-01-23'],
 ['1.52', '0.88', '2.07', '2020-01-24'],
 ['1.4', '0.79', '1.96', '2020-01-25'],
 ['2.06', '1.47', '2.6', '2020-01-26'],
 ['2.65', '2.08', '3.12', '2020-01-27'],
 ['2.94', '2.45', '3.37', '2020-01-28'],
 ['2.88', '2.46', '3.28', '2020-01-29'],
 ['2.4', '2.0', '2.76', '2020-01-30'],
 ['1.68', '1.29', '2.03', '2020-01-31'],
 ['1.01', '0.61', '1.36', '2020-02-01'],
 ['0.61', '0.21', '0.98', '2020-02-02'],
 ['0.98', '0.56', '1.36', '2020-02-03'],
 ['1.58', '1.18', '1.95', '2020-02-04'],
 ['1.97', '1.57', '2.3000000000000003', '2020-02-05'],
 ['1.75', '1.38', '2.07', '2020-02-06'],
 ['1.29', '0.93', '1.61', '2020-02-07'],
 ['0.59', '0.23', '0.92', '2020-02-08'],
 ['0.0', '0.0', '0.4', '2020-02-09'],
 ['0.47', '0.11', '0.8200000000000001', '2020-02-10'],
 ['1.15', '0.75', '1.52', '2020-02-11'],
 ['2.1', '1.72', '2.44', '2020-02-12'],
 ['2.42', '2.08', '2.73', '2020-02-13'],
 ['1.89', '1.58', '2.19', '2020-02-14'],
 ['1.46', '1.15', '1.75', '2020-02-15'],
 ['1.0', '0.67', '1.28', '2020-02-16'],
 ['0.43', '0.11', '0.72', '2020-02-17']]
)});
  main.variable(observer("covertedNumbers")).define("covertedNumbers", ["realData","columns"], function(realData,columns){return(
realData.map(d => (columns.slice(0,3).reduce((a,b,i) => (a[b]=parseFloat(d[i]), a), {})))
)});
  main.variable(observer("covertedDates")).define("covertedDates", ["realData","columns"], function(realData,columns){return(
realData.map(d => (columns.slice(3,4).reduce((a,b,i) => (a[b]=d[3], a), {})))
)});
  main.variable(observer()).define(["data"], function(data){return(
console.log(data)
)});
  main.variable(observer()).define(["columns"], function(columns){return(
columns.slice(3,4)
)});
  main.variable(observer("line")).define("line", ["d3","x","y"], function(d3,x,y){return(
d3.line()
    .x(d => x(d.date))
    .y(d => y(d.mean))
)});
  main.variable(observer("area")).define("area", ["d3","x","y"], function(d3,x,y){return(
d3.area()
    .x(d => x(d.date))
    .y0(d => y(d.lower))
    .y1(d => y(d.upper))
)});
  main.variable(observer("x")).define("x", ["d3","data","margin","width"], function(d3,data,margin,width){return(
d3.scaleUtc()
    .domain(d3.extent(data, d => d.date))
    .rangeRound([margin.left, width - margin.right])
)});
  main.variable(observer("y")).define("y", ["d3","data","height","margin"], function(d3,data,height,margin){return(
d3.scaleLinear() //scaleLinear domain([-1, ]) //scaleLog() domain([1, ])
    .domain([-1, d3.max(data, d => d.upper)])
    .rangeRound([height - margin.bottom, margin.top])
    .clamp(true)
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x","width"], function(height,margin,d3,x,width){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80))
    .call(g => g.select(".domain").remove())
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y","data"], function(margin,d3,y,data){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, ",d"))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text(data.y))
)});
  main.variable(observer("grid")).define("grid", ["x","margin","height","y","width"], function(x,margin,height,y,width){return(
g => g
    .attr("stroke", "currentColor")
    .attr("stroke-opacity", 0.1)
    .call(g => g.append("g")
      .selectAll("line")
      .data(x.ticks())
      .join("line")
        .attr("x1", d => 0.5 + x(d))
        .attr("x2", d => 0.5 + x(d))
        .attr("y1", margin.top)
        .attr("y2", height - margin.bottom))
    .call(g => g.append("g")
      .selectAll("line")
      .data(y.ticks())
      .join("line")
        .attr("y1", d => 0.5 + y(d))
        .attr("y2", d => 0.5 + y(d))
        .attr("x1", margin.left)
        .attr("x2", width - margin.right))
)});
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 20, right: 30, bottom: 30, left: 40}
)});
  main.variable(observer()).define(["d3","locale"], function(d3,locale){return(
d3.timeFormatDefaultLocale(locale)
)});
  main.variable(observer("locale")).define("locale", function(){return(
{
      "decimal": ",",
      "thousands": ".",
      "grouping": [3],
      "currency": ["R$", ""],
      "dateTime": "%d/%m/%Y %H:%M:%S",
      "date": "%d/%m/%Y",
      "time": "%H:%M:%S",
      "periods": ["AM", "PM"],
      "days": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      "shortDays": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      "months": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      "shortMonths": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    }
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style>
.tootlip {
    background-color: "red"
    clip-path: circle(40% at 50% 50%);
    -webkit-clip-path: circle(40% at 50% 50%);
}
</style>`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}

// https://observablehq.com/d/eecfb4a87c02491a@690
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Fan Chart new

This variation of a line chart switches to an area chart to show projected uncertainty in the future. Data: [IHME](https://covid19.healthdata.org/)`
)});
  main.variable(observer("chart")).define("chart", ["d3","width","height","DOM","negativeColor","y","threshold","positiveColor","xAxis","yAxis","grid","area","data","line","x","mutable lookup","bisect"], function(d3,width,height,DOM,negativeColor,y,threshold,positiveColor,xAxis,yAxis,grid,area,data,line,x,$0,bisect)
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

  svg.append("path")
      .attr("fill", "none")
      .attr("stroke", gradient)
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "3,3")
      .attr("d", line(data.slice(1)));
  
  // svg.append("line")
  //   .attr("id", "followline")
  //   .attr("x1", x(Date.parse("2020-01-20"))) //Date.parse("2020-01-20")
  //   .attr("x2", x(Date.parse("2020-01-20")))
  //   .attr("y1", 0)
  //   .attr("y2", height - margin.top)
  //   .attr("stroke-dasharray", "3,3")
  //   .style("stroke", "#ccc")
  //   .style("stroke-width", 1.5)
  
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
  
  if (!$0.value) $0.value = new Date(data[0].date);
  
  const bar = svg
    .append("line")
    .attr("style", "stroke:#999; stroke-width:0.8; stroke-dasharray: 5 3;")
    .attr("y2", height)
    .attr("x1", x($0.value))
    .attr("x2", x($0.value));
  
  const legend = svg
    .append("text")
    .style("font", "12px sans-serif")
    .attr("x", 10)
    .attr("y", 20);
  
  const marker = svg
    .append("circle")
    .attr("r", 4)
    .attr("cx", -100)
    .attr("fill", "black");
  
  const formatTime = d3.timeFormat("%d/%m/%Y");
  
  function update(date) {
    const i = bisect.right(data, date);
    if (i < data.length) {
      legend.text(`${(formatTime(data[i].date))}: ${data[i].mean}`);
      marker.attr("cx", x(data[i].date)).attr("cy", y(data[i].mean));
    }
    $0.value = new Date(date);
    bar.attr("x1", x($0.value)).attr("x2", x($0.value));
  }
  
  svg.on("mousemove click touchmove", function() {
    const m = d3.mouse(this);
    update(x.invert(m[0]));
  });
  
  update($0.value);
  
  return svg.node();
}
);
  main.define("initial lookup", function(){return(
null
)});
  main.variable(observer("mutable lookup")).define("mutable lookup", ["Mutable", "initial lookup"], (M, _) => new M(_));
  main.variable(observer("lookup")).define("lookup", ["mutable lookup"], _ => _.generator);
  main.variable(observer("bisect")).define("bisect", ["d3"], function(d3){return(
d3.bisector(d => d.date)
)});
  main.variable(observer("positiveColor")).define("positiveColor", function(){return(
"steelblue"
)});
  main.variable(observer("negativeColor")).define("negativeColor", function(){return(
"red"
)});
  main.variable(observer("threshold")).define("threshold", function(){return(
1
)});
  main.variable(observer("data")).define("data", ["d3"], async function(d3){return(
Object.assign(await d3.csv("https://gist.githubusercontent.com/Jefersonalves/faf4f6ec1cb39b37ccadc4394db5c994/raw/5fa48a3ed5a49555f943e8220dc2d9672b1be124/rt-sp.csv", d3.autoType), {y: "↑ Mortes por dia"})
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
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y"], function(margin,d3,y){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, ",d"))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        //.text(data.y)
     )
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
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}

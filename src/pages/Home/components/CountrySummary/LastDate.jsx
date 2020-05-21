import define from "@bbjacob123/rt-chart";
import { useState } from "react";
import { Runtime } from "@observablehq/runtime";

export default function LastDate () {
  const [state, setState] = useState({
    lastDate: '',
  });

  const runtime = new Runtime();
  const module = runtime.module(define);
  module.value('lastDate').then(value => {
    const lastDate = Intl.DateTimeFormat('pt-BR').format(value)
    setState({...state, lastDate});
  });
  
  return (
    <span className="featured-text">{ state.lastDate }</span>
  )
}
import define from "@bbjacob123/rt-chart";
import { Runtime } from "@observablehq/runtime";
import { useState } from "react";

export default function LastDate () {
  const [state, setState] = useState({
    lastDate: '',
  });

  const runtime = new Runtime();
  const module = runtime.module(define);
  module.value('lastDate').then(value => {
    const lastDate = Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(value)
    setState({...state, lastDate});
  });
  
  return (
    <span className="featured-text">{ state.lastDate }</span>
  )
}
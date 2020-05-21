import define from "@bbjacob123/rt-chart";
import { useEffect, useState } from "react";
import { Runtime } from "@observablehq/runtime";

export default function LastDate () {
  const [lastDate, setLastDate] = useState('');

  useEffect(() => {
    const runtime = new Runtime();
    const module = runtime.module(define);
    module.value('lastDate').then(value => {
      const formattedDate = Intl.DateTimeFormat('pt-BR').format(value)
      setLastDate(formattedDate);
    });
  }, []);

  
  return (
    <span className="featured-text">{ lastDate }</span>
  )
}
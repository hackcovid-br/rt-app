import define from "@bbjacob123/covid-19-brasil-estado-curvas";
import { Runtime, Inspector } from "@observablehq/runtime";
import { useRef, useEffect } from "react";

export default function Evolution ({ type }) {

  const cells = [
    "viewof stateSelection",
    "chart",
  ];

  const observables = cells.map(cell => {
    return {
      name: cell,
      element: useRef(null)
    }
  });

  useEffect(() => {
    const runtime = new Runtime();
    const module = runtime.module(define, name => {
      const observable = observables.find(observable => observable.name === name);
      if (observable) {
        return new Inspector(observable.element.current)
      }
    })

    module.redefine('ySelection', type);
  }, [type])

  return observables.map(observable => (
    <div key={observable.name} ref={observable.element}/>
  ))
}
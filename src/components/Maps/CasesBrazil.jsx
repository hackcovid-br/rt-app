import define from "@bernaferrari/brazil-coronavirus-daily-cases-map-covid-19-not-working";
import {
  Runtime, 
  Inspector
 } from "@observablehq/runtime";
 import { 
   useRef, 
   useEffect 
  } from "react";

 export default function CasesBrazilMap () {

  const cells = [
    "viewof confirmed_or_deaths",
    "viewof scale",
    "viewof day",
    "map",
    "style",
    "draw",
    "indexSetter"
  ];

  const observables = cells.map(cell => {
    return {
      name: cell,
      element: useRef(null)
    }
  });

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(define, name => {
      const observable = observables.find(observable => observable.name === name);
      if (observable) {
        return new Inspector(observable.element.current)
      }
    })
  }, [])

  return (
    observables.map(observable => (
      <div key={observable.name} ref={observable.element}/>
    ))
  )
}
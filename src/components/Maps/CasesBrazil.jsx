import define from "@bbjacob123/cases-map-covid";
import {
  Runtime, 
  Inspector
 } from "@observablehq/runtime";
 import { 
   useRef, 
   useEffect 
  } from "react";

 export default function CasesBrazilMap ({type}) {

  const cells = [
    "map",
    "style",
    "viewof day",
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
    module.redefine("confirmed_or_deaths", type)
  }, [type])

  return observables.map(observable => (
    <div key={observable.name} ref={observable.element}/>
  ))
  
}
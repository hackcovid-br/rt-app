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
  const elementRef0 = useRef(null);
  const elementRef1 = useRef(null);

  const elementRef2 = useRef(null);

  const elementRef3 = useRef(null);

  const elementRef4 = useRef(null);

  const elementRef5 = useRef(null);

  const elementRef6 = useRef(null);

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(define, name => {
      if (name === "viewof confirmed_or_deaths")
        return new Inspector(elementRef0.current);
      if (name === "viewof scale")
        return new Inspector(elementRef1.current);
      if (name === "viewof day")
        return new Inspector(elementRef2.current);
      if (name === "map")
        return new Inspector(elementRef3.current);
      if (name === "style")
        return new Inspector(elementRef4.current);
      if (name === "draw")
        return new Inspector(elementRef5.current);
      if (name === "indexSetter")
        return new Inspector(elementRef6.current);
    })
  }, [])

  return (
    <>
    <div ref={elementRef0}/>
    <div ref={elementRef1}/>
    <div ref={elementRef2}/>
    <div ref={elementRef3}/>
    <div ref={elementRef4}/>
    <div ref={elementRef5}/>
    <div ref={elementRef6}/>
    </>
  )
}
import define from "@santanacostamarco/mobility-in-brazilian-states"

import VariableChart from './VariableChart';

export default function MobilityChart({ uf }) {
  return <VariableChart config={{
    define: define,
    variable: 'state',
    value: uf
  }} />
}
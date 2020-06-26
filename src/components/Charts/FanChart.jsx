import define from "@bbjacob123/fan-chart";

import VariableChart from './VariableChart';

export default function FanChart({ uf }) {
  return <VariableChart config={{
    define: define,
    variable: 'state',
    value: uf
  }} />
}
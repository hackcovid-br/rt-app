import define from '@bbjacob123/cases-chart';

import VariableChart from './VariableChart';

export default function Cases ({ uf }) {
  return <VariableChart config={{
    define: define,
    variable: 'state',
    value: uf
  }} />
}
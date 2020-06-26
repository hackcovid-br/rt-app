import define from '@bbjacob123/deaths-chart';

import VariableChart from './VariableChart';

export default function Deaths ({ uf }) {
  return <VariableChart config={{
    define: define,
    variable: 'state',
    value: uf
  }} />
}
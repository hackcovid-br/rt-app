import define from '@bbjacob123/mortes-chart';

import VariableChart from './VariableChart';

export default function Deaths ({ uf }) {
  return <VariableChart config={{
    define: define,
    variable: 'state',
    value: uf
  }} />
}
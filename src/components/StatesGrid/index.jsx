import './StatesGrid.scss'
import statesOfBrazil from 'helpers/statesOfBrazil'

import { useMaxWidth } from 'hooks'

export default function StatesGrid({ render }) {

  const isSmallDevice = useMaxWidth()
  const isMediumDevice = useMaxWidth("1080px")

  return (
    <ul className={`states-grid ${isSmallDevice 
      ? 'small' : isMediumDevice ? 'medium' : 'large'}`}
    >
      {statesOfBrazil.map(state => {
        return (
          <li className="states-grid__item" key={state.uf}>
            <p className="states-grid__state">
              {state.name}
            </p>
            <div className="states-grid__chart">
              {render(state.uf)}
            </div>
          </li>
        )
      })}  
    </ul>
  )
}
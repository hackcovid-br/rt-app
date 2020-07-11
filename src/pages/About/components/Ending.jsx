import Highlight from 'components/Highlight';

import { useMaxWidth } from 'hooks'

export default function Ending () {

  const isMobile = useMaxWidth('767px');

  return (
    <section className="about-us__ending">
      <div className="container">
        <h3 className={`ending-title ${ isMobile ? 'small' : '' }`}>
          Agora não é hora de achismo, mais do que nunca, agora é hora de {' '}
          todos sermos <Highlight>direcionados por dados</Highlight>.
        </h3>
      </div>
    </section>
  )
}
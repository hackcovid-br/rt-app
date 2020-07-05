import "./CasesContainer.scss"
import Button from 'components/Button';
import Cases from 'components/Cases';
import { navigateTo } from 'gatsby'

function CasesContainer() {
  return (
    <section id="cases">
        <div className="wrapper">        
          <div className="title">
            <h2>
              Acompanhe como a pandemia está evoluindo em nosso país!
            </h2>
          </div>
          <Cases />
          <div className="button-wrapper">
            <Button label="Veja Agora" onClick={ () => {
              navigateTo('/casos')
            }} />
          </div>
        </div>
      </section>
  )
}
export default CasesContainer

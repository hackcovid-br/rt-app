import "./NoRoute.scss";
import Highlight from 'components/Highlight';
import Layout from "layouts"; 

export default function NoRoute() {

  return (
    <Layout>
      <div className="container">
        <h1>
          <Highlight className="p-404" size={100}>
            <span>4</span>
            <span className="virus-as-zero">0</span>
            <span>4</span>
          </Highlight>
          {' '} Página não encontrada
        </h1>
      </div>
    </Layout>
  )
}
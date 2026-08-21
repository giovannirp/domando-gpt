import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Banner from "./Components/Banner"
import Cards from "./Components/Cards";
import Footer from "./Components/Footer"
import "./Global.css"
import FeedBack from "./Components/FeedBack";

function App() {

  return (
    <div className="container">
      <Header 
        titleHeader="🍕Bem-vindo à OpenPizzaria!" 
        textHeader="As melhores pizzas, feitas com carinho e muito sabor para você!" 
      />

      <Menu />

      <Banner /> 

      <Cards />

      <FeedBack />

      <Footer titleFooter="OpenPizzaria! - Todos os direitos reservados - 2026" />
     
    </div>
  )
}

export default App

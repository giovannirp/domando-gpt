import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer"
import Router from "./Router";
import "./Global.css"

function App() {

  return (
    <div className="container">
      <Header 
        titleHeader="🍕Bem-vindo à OpenPizzaria!" 
        textHeader="As melhores pizzas, feitas com carinho e muito sabor para você!" 
      />

      <Router />

      <Footer titleFooter="OpenPizzaria! - Todos os direitos reservados - 2026" />
     
    </div>
  )
}

export default App

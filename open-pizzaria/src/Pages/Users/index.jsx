import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Users.css"

export default function index() {
  // UseState do react para gerenciar estado dos usuários
  const [usuarios, setUsuarios] = useState([]);

  // Hook useEffect para lidar com efeitos colaterais no componente
  useEffect(() => {
    console.log("Oláaaaa");
  }, [])

  return (
    <main className="containerUsers">
        <h1>Lista de Usuários</h1>
        <Link to="/">Voltar para HOME</Link>
        <section className="contentUsers">
            <article>
                <strong>Nome: Kaio</strong>
                <strong>Telefone: 119729-68761</strong>
            </article>
        </section>
    </main>
  )
}

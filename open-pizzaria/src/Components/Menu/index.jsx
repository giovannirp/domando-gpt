import "./Menu.css"

const Menu = () => {

    return (
         <nav className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Cardápio</a></li>

                <li className="submenu">
                    <a href="#">Mais ▾</a>

                    <ul className="submenu-list">
                        <li>
                            <a href="#">Fale Conosco</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

    )
}

export default Menu
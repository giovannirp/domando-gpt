import "./Footer.css"

const Footer = (props) => {
    return (
        // tag do html
        <footer className="footer">
            <h1>{props.titleFooter}</h1>
        </footer>
    )
}

export default Footer
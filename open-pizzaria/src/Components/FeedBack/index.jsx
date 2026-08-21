import "./FeedBack.css"
import estrela from "../../assets/estrela.png"

const FeedBack = () => {
    return (
        <section className="feedBack">
            <article className="contentBack">
                <img src="https://fastly.picsum.photos/id/324/80/80.jpg?hmac=_Ql1z2HqWLqlbzGE5FQVw101OlNM-KCJ6pPbp9_eC4w" alt="" />
                <h1>
                    Lorem Ipsum
                </h1>
                <img src={estrela} width="30" height="30" alt="" />
                <strong>5.0</strong>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis at omnis, quisquam fugiat sint repudiandae vel! Assumenda error quas nulla. Consectetur facere consequatur neque maiores voluptatibus nam ipsum nemo delectus.
                </p>
            </article>
        </section>
    )
}

export default FeedBack;
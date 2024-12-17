import style from "../Card.module.css";
import Button from "./Button.jsx";

function Card({
    image = "https://picsum.photos/600/400",
    title,
    content = "Descrizione mancante"
}) {
    return (
        <div className={`card ${style.cardEffect}`}>
            <img src={image} className={`${style.cardImg}card-img-top`} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <Button />
            </div>
        </div>
    )
}

export default Card;
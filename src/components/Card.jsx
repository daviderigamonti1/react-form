import style from "../Card.module.css";
import Button from "./Button.jsx";

function Card({ image, title, content, author, date, id, posts, setPosts }) {
    const deletePost = (e) => {
        const updatePosts = posts.filter((post) => post.id !== id)
        setPosts(updatePosts);
    }

    return (
        <div className={`card ${style.cardEffect}`}>
            <img src={image} className={`${style.cardImg}card-img-top`} />
            <div className="card-body">
                <h5>{title}</h5>
                <p>{content}</p>
                <div className="d-flex justify-content-between">
                    <Button />
                    <button
                        className="btn btn-danger"
                        onClick={deletePost}>Elimina
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;
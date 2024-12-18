import { useState } from "react";
import posts from "../data/posts";

const newPost = {
    title: '',
    content: ''
}
function MyForm({ onAddPost }) {
    const [formData, setFormData] = useState(newPost);

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formData);

        onAddPost(formData);
    }

    function handleInput(e) {
        const value = e.target.value;

        console.log({ ...formData, [e.target.name]: value, id: crypto.randomUUID() });

        setFormData({ ...formData, [e.target.name]: value, id: crypto.randomUUID() })

    }

    return (
        <section>
            <form className="p-4" onSubmit={handleSubmit}>
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={handleInput}
                    value={formData.title}
                />
                <textarea className="form-control" name="content" onChange={handleInput} value={formData.content}></textarea>
                <button className="btn btn-primary mt-4">Invia</button>
            </form>

            <ul>{posts.map((post) => (
                <li key={post.id} className="p-2">
                    <div>{post.title}</div>
                </li>
            ))}
            </ul>
        </section>
    );
}
export default MyForm;

/*
Creare un semplice form con un campo input per il titolo di un articolo del blog.
Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.
*BONUS*
 Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore)



 const [newPost, setNewPost] = useState(newPost);
    const [postList, setPostList] = useState([]);

 function addPost(e) {
        e.preventDefault();
        setPostList({ ...newPost, [e.target.name]: e.target.value });
    }
        function deletePost(id) {
        setPostList(posts.filter((post) => post.id !== id));
    };

    <button
                        onClick={() => deletePost(post.id)} className="btn btn-danger ms-2">
                        Elimina
                    </button>
    





                    e.target.type === "checkbox" ? e.target.checked :
*/


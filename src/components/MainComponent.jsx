import { useState } from "react";
import Card from "./Card.jsx";
import posts from "../data/posts.js";
function MainComponent() {
    const postItem = [...posts];
    const { firstName, setFirstName } = useState('');
    return (
        <main className="container">
            <div className="row gy-4">
                {postItem.map((post) => (
                    <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                        <Card
                            image={post.image}
                            title={post.title}
                            content={post.content}
                        />
                    </div>
                ))}
            </div>
            <form action="submit">
                <input type="text" value={firstName} onChange={e => { setFirstName(e.target.value) }} />
            </form>
        </main>
    );
}
export default MainComponent;
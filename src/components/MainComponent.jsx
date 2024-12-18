import Card from "./Card.jsx";
import posts from "../data/posts.js";
import MyForm from "./MyForm.jsx";
import { useState } from "react";
function MainComponent() {
    const [postItem, setPostItem] = useState(posts);

    function addPost(postData) {
        const newPost = {
            id: postData.id,
            image: '',
            title: postData.title,
            content: postData.content
        };

        console.info(newPost);

        setPostItem([...postItem, newPost]);
    }

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

            <MyForm onAddPost={addPost} />
        </main>
    );
}
export default MainComponent;
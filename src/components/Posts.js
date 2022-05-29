import Post from "./Post";

function Posts({ posts }) {
    return (
        <div className="posts-container" >
            <div className="posts">
                {posts.map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
}

export default Posts;

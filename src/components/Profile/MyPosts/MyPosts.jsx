import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'This is my first post!', likesCount: 15 },
    ];

    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/state';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
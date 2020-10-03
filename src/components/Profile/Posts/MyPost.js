import React from "react";
import universal from './MyPost.module.css'
import SimplePost from "./SimplePost/SimplePost";

const MyPost = (props) => {

	let postElement =
		 props.postData.map(post => <SimplePost message={post.message} like={post.like} addLike={props.addCountLike}/>);

	let newPostElement = React.createRef();
	let placeholderText = 'Enter to share news...';
	let addPostElement = () => {
		let text = newPostElement.current.value;
		if(text.length == 0) {
			alert("Вы ничего не написали")
		}else if (text.length > 5000){
			alert("Макс. симолов 5000");
		}else{
			props.addPost(text);
		}
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return(
		 <div className={universal.MyPost}>
			 <div className={universal.post}>My Post</div>
			 <div className={universal.block}>
				 <textarea ref={newPostElement} className={universal.textPost} placeholder={placeholderText}
							  value={props.newTextPost} onChange={onPostChange} />
				 <button onClick={addPostElement} className={universal.send}>Add post</button>
			 </div>
				 {postElement}

		 </div>
	);
}

export default MyPost;
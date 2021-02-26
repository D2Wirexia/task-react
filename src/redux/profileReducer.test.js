import profileReducer, {
	addLike,
	addPost,
	deletePost, pushIdLikes,
	setProfileStatus,
	setUserProfile
} from "./profileReducer";

let state = {
	postData: [
		{id: 4, message: 'DA DA DA', like: 3115},
		{id: 3, message: 'I talk u come me', like: 146311},
		{id: 2, message: 'Hi bro, how are u?', like: 1244444},
		{id: 1, message: 'It\'s first post', like: 21600875346},
	],
	profile: null,
	status: "",
	isShowIdLike: [],
};

it('length of post should be incremented',  ()=>{
	let action = addPost("anything");
	let newState = profileReducer(state, action);
	expect(newState.postData.length).toBe(5);
});
it('message of new post should be correct',  ()=>{
	let action = addPost("anything");
	let newState = profileReducer(state, action);
	expect(newState.postData[0].message).toBe("anything");
});
it('after deleting length of message should be decremented',  ()=>{
	let action = deletePost(1);
	let newState = profileReducer(state, action);
	expect(newState.postData.length).toBe(3);
});
it('after deleting length shouldn\'t be decremented if ID is incorrect',  ()=>{
	let action = deletePost(10000);
	let newState = profileReducer(state, action);
	expect(newState.postData.length).toBe(4);
});
it('after added count like should be incremented',  ()=>{
	let action = addLike(4);
	let newState = profileReducer(state, action);
	expect(newState.postData[0].like).toBe(3116);
});
it('set id for showed total count likes',  ()=>{
	let action = pushIdLikes(true,1);
	let newState = profileReducer(state, action);
	expect(newState.isShowIdLike).toStrictEqual([1]);
});
it('delete id for hided total count likes',  ()=>{
	let action = pushIdLikes(false,1);
	let newState = profileReducer(state, action);
	expect(newState.isShowIdLike).toStrictEqual([]);
});
it('status should be changed',  ()=>{
	let action = setProfileStatus("something status");
	let newState = profileReducer(state, action);
	expect(newState.status).toBe("something status");
});
it('profile data should be added',  ()=>{
	let action = setUserProfile({});
	let newState = profileReducer(state, action);
	expect(newState.profile).toStrictEqual({});
});
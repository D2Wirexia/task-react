import React from "react";
import universal from './Users.module.css'

const Users = (props) => {
	if( props.users.length === 0){
		props.setUsers([
			{	id: 1,
				followed: true,
				name: 'Vladimir Zelensky',
				photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
				status: '#ThePrezedent',
				locetion: {city: 'Kiev', country: 'Ukraine'}
			},
			{	id: 2,
				followed: true,
				name: 'Nastenka',
				photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
				status: 'I\'m Little girl',
				locetion: {city: 'Sumy', country: 'Ukraine'}
			},
			{	id: 3,
				followed: false,
				name: 'Dima developer',
				photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
				status: 'next lvl improve skills',
				locetion: {city: 'Paris', country: 'Franch'}
			},
			{	id: 4,
				followed: false,
				name: 'Artem lowSkill',
				photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg/248px-Volodymyr_Zelensky_Official_portrait_%28cropped%29.jpg',
				status: 'All about this...',
				locetion: {city: 'Sumy', country: 'Ukraine'}
			},
		]);
	}
	return (
		 <div> <span>Users</span>
			 {
				 props.users.map(u => <div key={u.id}>
					 <div className={universal.user}>
						 <div className={universal.info}>
							 <div>
								 <img src={u.photoUrl}/>
							 </div>
							 <div className={universal.arrButton}>
								 {u.followed
									  ? <button className={universal.btn} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
									  : <button className={universal.btn} onClick={() => {props.follow(u.id)}}>Follow</button>
								 }
							 </div>
						 </div>
						 <div className={universal.location}>
							 <div>
								 <div className={universal.name}>{u.name}</div>
								 <div className={universal.status}>{u.status}</div>
							 </div>
							 <div className={universal.rightBlock}>
								 <div className={universal.country}>{u.locetion.country}</div>
								 <div className={universal.city}>{u.locetion.city}</div>
							 </div>
						 </div>
					 </div>
				 </div>)
			 }
		 </div>
	);
}

export default Users;
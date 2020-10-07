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
				photoUrl: 'https://svirtus.cdnvideo.ru/SO9sxAqnAkR1tN1Kg6jXFhWvYMM=/0x0:371x371/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/d4/d4e61b79893464edf8fac84d5b25bcd6.jpg?m=6abf7ca4aedde894c0fb76aea5a89542',
				status: 'I\'m Little girl',
				locetion: {city: 'Kiev', country: 'Ukraine'}
			},
			{	id: 3,
				followed: false,
				name: 'Dima BigBoss',
				photoUrl: 'https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s176-c-k-c0x00ffffff-no-rj-mo',
				status: 'next lvl improve skills',
				locetion: {city: 'Paris', country: 'Franch'}
			},
			{	id: 4,
				followed: false,
				name: 'Artem lowSkill',
				photoUrl: 'https://abakan-news.ru/wp-content/uploads/2018/03/-e1520919096875.jpg',
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
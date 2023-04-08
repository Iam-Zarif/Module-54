import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friend  = useLoaderData();

    let friendDetails =(id) =>{
        console.log(id)
    }
    
    return (
      <div className="mt-10">
        <h1>These are my friends{friend.length}</h1>
        <div>
          {friend.map((singleFriend) => (
            <Friend
              key={singleFriend.id}
              singleFriend={singleFriend}
              friendDetails={friendDetails}
            ></Friend>
          ))}
          {/* {friend.map((data) => console.log(data))} */}
        </div>
      </div>
    );
};

export default Friends;
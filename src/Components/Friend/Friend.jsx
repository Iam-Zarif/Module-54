import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ singleFriend, friendDetails }) => {
  let { name, phone,id } = singleFriend;
  return (
    <div className="border mt-10 py-4 rounded">
      <p>Name : {name}</p>
      <p>phone : {phone}</p>
      <Link to={`/friend/${id}`}>
        <button
          onClick={() => friendDetails(name)}
          className="border px-4 py-2 mt-5 rounded-xl hover:border-green-500"
        >
          Show more
        </button>
      </Link>
    </div>
  );
};

export default Friend;
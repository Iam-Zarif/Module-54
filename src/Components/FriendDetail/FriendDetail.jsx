import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const data = useLoaderData();
    console.log(data);
    return (
      <div>
        <h1>{data.name}</h1>
        <h1>{data.username}</h1>
        <h1>{data.address.city}</h1>
        <h1>{data.email}</h1>
        <h1>{data.phone}</h1>
        <h1>{data.company.name}</h1>
        <a href="">
          <h1>{data.website}</h1>
        </a>
      </div>
    );
};

export default FriendDetail;
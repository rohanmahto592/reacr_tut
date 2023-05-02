import React from 'react';
import { useSearchParams } from 'react-router-dom';
const Users = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active';
  return (
    <div>
      users

      <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
      <button  onClick={()=>setSearchParams({})}>All users</button>

      {
        showActiveUsers?<h1>showing active users</h1>:<h2>all users</h2>
      }
    </div>

  );
}

export default Users;

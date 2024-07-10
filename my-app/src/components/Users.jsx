import { useState, useEffect } from "react";

const Users = () => {
  // https://jsonplaceholder.typicode.com/

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
    console.log(userData);
  }, []);

  const fetchUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUserData(data);
    console.log(userData);
  };

  return (
    <div>
      <h2>Call API and Fetch User Data</h2>
      {userData?.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
};

export default Users;

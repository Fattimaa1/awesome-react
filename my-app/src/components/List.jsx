import { useState, useEffect } from "react";

const List = () => {
  const [userData, setUserData] = useState([]);

  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
    { title: "Avocado", id: 4 },
    { title: "Banana", id: 5 },
  ];

  const users = [
    { name: "Sarah", age: "22", id: 1 },
    { name: "pari", age: "30", id: 2 },
    { name: "sareh", age: "43", id: 3 },
    { name: "farzaneh", age: "20", id: 4 },
    { name: "amir", age: "40", id: 5 },
  ];

  useEffect(() => {
    setUserData(users);
  }, []);

  // for (let i = 0; i < products.length; i++) {
  //   return (
  //     <li key={i}>
  //       <h4>{products[i].title}</h4>
  //     </li>
  //   );
  // }

  const fetchData = async () => {
    const response = await fetch("http://fakeurl.com");
    if (response.ok) {
      consolr.log("Data is here");
    }
    if (!response.ok) {
      console.log("Failed");
    }
  };

  const myProducts = products?.map((product) => (
    <li key={product.id}>{product.title.startsWith("a")}</li>
  ));

  return (
    <ul>
      <h2>List</h2>
      {/* {products
        ?.filter((product) => product.title.toLowerCase().startsWith("a"))
        .map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      {users
        ?.filter((user) => user.age > 30)
        .map((user) => (
          <li key={user.id}>
            Name: {user.name} age: {user.age}
          </li>
        ))} */}

      <button onClick={() => setUserData(users)} style={{ background: "pink" }}>
        User Data
      </button>
      {userData.length > 0 &&
        userData.map((user) => <div key={user.id}>{user.name}</div>)}
    </ul>
  );
};

export default List;

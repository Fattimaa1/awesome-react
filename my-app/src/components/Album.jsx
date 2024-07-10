import { useEffect, useState } from "react";

const Album = () => {
  const [albumData, setAlbumData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetchAlbumData();
  }, []);

  const fetchAlbumData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");

    const data = await response.json();
    setAlbumData(data);
  };

  const filteredItems = albumData.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLocaleLowerCase())
  );

  return (
    <div>
      <h2>this is Album</h2>
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {filteredItems?.slice(2, 20).map((data) => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
};

export default Album;

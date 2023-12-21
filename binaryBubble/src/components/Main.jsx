import { useState } from "react";

const Main = () => {
  const [userInput, setUserInput] = useState("");
  const [key, setKey] = useState("");
  const [inactive, setInactive] = useState([]);
  const [active, setActive] = useState([]);
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  //   userInput.split(", ");
  const searchKey = () => {
    setData(userInput.split(","));
  };
  const search = () => {
    console.log(data);
    console.log(binarySearch(data, 14));
    console.log(inactive);
  };

  function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (arr[middle] < target) {
        setTimeout(() => {
          console.log(arr.slice(start, middle));
          let array = arr.slice(start, middle);
          setInactive((prev) => [...prev, ...array]);
          setActive(arr.slice(middle, end));
        }, 1000);

        start = middle + 1;
      } else if (arr[middle] > target) {
        setTimeout(() => {
          let array = arr.slice(middle, end);
          setActive(arr.slice(start, middle));
          setInactive((prev) => [...prev, ...array]);
        }, 1000);

        end = middle - 1;
      } else if (arr[middle] === target) {
        return middle;
      }
    }
    return -1;
  }

  return (
    <div>
      <h1>Hiii</h1>
      <textarea
        rows="10"
        cols="50"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        type="text"
      ></textarea>
      <button onClick={searchKey}>Set key</button>
      <input value={key} onChange={(e) => setKey(e.target.value)}></input>
      <button onClick={search}>Search</button>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          {inactive &&
            inactive.map((item, index) => (
              <div style={{ backgroundColor: "grey" }} key={index}>
                {item}
              </div>
            ))}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {active &&
            active.map((item, index) => (
              <div style={{ backgroundColor: "green" }} key={index}>
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

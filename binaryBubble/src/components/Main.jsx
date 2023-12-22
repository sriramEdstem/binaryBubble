import { useState } from "react";

const Main = () => {
  const [userInput, setUserInput] = useState("");
  const [key, setKey] = useState("");
  const [inactive, setInactive] = useState([]);
  const [active, setActive] = useState([]);
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]);

  //   userInput.split(", ");
  const searchKey = () => {
    setData(userInput.split(","));
  };
  const search = () => {
    console.log(data);
    console.log(binarySearch(data, 20));
    // console.log(result);
    console.log(inactive);
  };
  async function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let middle = Math.floor((start + end) / 2);
      if (arr[middle] < target) {
        console.log(arr.slice(start, middle));
        let array = arr.slice(start, middle + 1);
        setInactive((prev) => [...prev, ...array]);
        setActive(arr.slice(middle, end + 1));
        start = middle + 1;
      } else if (arr[middle] > target) {
        let array = arr.slice(middle, end + 1);
        setActive(arr.slice(start, middle + 1));
        setInactive((prev) => [...prev, ...array]);
        console.log(arr.slice(middle, end));
        end = middle - 1;
      } else if (arr[middle] === target) {
        setActive(arr.splice(middle, 1));
        setInactive(arr);
        console.log(arr);
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
            inactive.sort().map((item, index) => (
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
                {active.length < 2 && <>at index {item - 1}</>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

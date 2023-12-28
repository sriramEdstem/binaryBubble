import { useSelector, useDispatch } from "react-redux";
import { setKey, setInactive, setActive, setData } from "../redux/bubbleSlice";
import { useState } from "react";

const Main = () => {
  const [userInput, setUserInput] = useState([]);
  const [userKey, setUserKey] = useState("");
  const dispatch = useDispatch();
  const { key, inactive, active, data } = useSelector((state) => state.data);

  const searchKey = () => {
    const inputArray = userInput.split(",").map((num) => parseInt(num));
    dispatch(setKey(parseInt(userKey)));
    dispatch(setData(inputArray));
  };

  const search = () => {
    binarySearch(data, key);
  };

  async function binarySearch(array, target) {
    let arr = [...array];
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let middle = Math.floor((start + end) / 2);
      if (arr[middle] < target) {
        let array = arr.slice(start, middle + 1);
        console.log(active, inactive);
        dispatch(setInactive([...inactive, ...array].sort((a, b) => a - b)));
        dispatch(setActive(arr.slice(middle, end + 1).sort((a, b) => a - b)));
        start = middle + 1;
      } else if (arr[middle] > target) {
        let array = arr.slice(middle, end + 1);
        console.log(active, inactive);
        dispatch(setActive(arr.slice(start, middle + 1).sort((a, b) => a - b)));
        dispatch(setInactive([...inactive, ...array].sort((a, b) => a - b)));

        end = middle - 1;
      } else if (arr[middle] === target) {
        dispatch(setActive(arr.splice(middle, 1)));
        dispatch(setInactive(arr));

        return middle;
      }
    }
    return -1;
  }

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        type="text"
      ></textarea>
      <button onClick={searchKey}>Set key</button>
      <input
        value={userKey}
        onChange={(e) => setUserKey(e.target.value)}
      ></input>
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
                {active.length < 2 && <>at index {item - 1}</>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

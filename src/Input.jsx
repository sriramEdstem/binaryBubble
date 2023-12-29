import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateArray, updateSelected } from "./bubbleSlice";

function Input() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const bubbleSort = async (array) => {
    const inputArray = array.split(",").map((num) => parseInt(num));
    let isSwapped = false;
    for (let i = 0; i < inputArray.length; i++) {
      isSwapped = false;

      for (let j = 0; j < inputArray.length - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (
          (sortOrder === "asc" && inputArray[j] > inputArray[j + 1]) ||
          (sortOrder === "desc" && inputArray[j] < inputArray[j + 1])
        ) {
          swapIndex(inputArray, j, j + 1);
          isSwapped = true;
        }

        dispatch(updateArray([...inputArray]));
        dispatch(updateSelected(j));
      }

      if (!isSwapped) {
        break;
      }
    }
  };

  const swapIndex = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <div>
        <button onClick={() => bubbleSort(userInput)}>Bubble Sort</button>
        <input
          style={{ padding: "10px" }}
          placeholder="Enter unsorted numbers"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sortOrder">Sort Order: </label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </>
  );
}

export default Input;

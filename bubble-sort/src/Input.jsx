import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateArray, updateSelected } from "./bubbleSlice";

function Input() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const bubbleSort = async () => {
    const inputArray = userInput.split(",").map((num) => parseInt(num));
    let isSwapped = false;

    for (let i = 0; i < inputArray.length; i++) {
      isSwapped = false;

      for (let j = 0; j < inputArray.length - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (inputArray[j] > inputArray[j + 1]) {
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

  return (
    <>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <input
        style={{ padding: "10px" }}
        placeholder="Enter unsorted numbers"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </>
  );
}

export default Input;

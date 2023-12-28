import { useSelector } from "react-redux";

const CustomOutput = () => {
  const start = useSelector((state) => state.binary.start);
  const end = useSelector((state) => state.binary.end);
  const outputArray = useSelector((state) => state.binary.numbers);
  const output = useSelector((state) => state.binary.output);

  return (
    <div>
      <div>{output ? `Found at position ${output}` : "Not Found"}</div>

      <div className="container">
        {outputArray?.map((value, index) => (
          <div
            key={index}
            className={`box ${index < start || index > end ? "inactive" : ""}`}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomOutput;

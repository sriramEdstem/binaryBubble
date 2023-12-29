import { useSelector } from "react-redux";

function SortingVisualizer() {
  const { array, selected } = useSelector((state) => state.sorting);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {array.map((item, index) => {
        return (
          <h2
            key={index}
            style={{
              backgroundColor:
                index === selected
                  ? "red"
                  : index === selected + 1
                  ? "red"
                  : "blue",
              height: `${Math.sqrt(item * 100)}px`,
            }}
          >
            {item}
          </h2>
        );
      })}
    </div>
  );
}

export default SortingVisualizer;

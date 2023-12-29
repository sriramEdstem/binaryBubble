import { useSelector } from "react-redux";

function SortingVisualizer() {
  const { array, selected } = useSelector((state) => state.sorting);

  const maxVal = array.length > 0 ? Math.max(...array) : 0;

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {array.map((item, index) => {
        const graphicalHeight = maxVal > 0 ? (item / maxVal) * 100 : 0;
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
              height: `${graphicalHeight}px`,
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

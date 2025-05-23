import "./HeatMap.css";
import HeatMap from "@uiw/react-heat-map";

const value = [
    { date: "2025/08/18", count: 1 },
    { date: "2025/08/19", count: 1 },
    { date: "2025/08/20", count: 1 },
    { date: "2025/08/21", count: 2 },
    { date: "2025/08/22", count: 2 },
    { date: "2025/08/23", count: 2 },
    { date: "2025/08/24", count: 3 },
    { date: "2025/08/25", count: 3 },
    { date: "2025/08/26", count: 3 },
];

const Heat_Map = () => {
  return (
    <div>
      <HeatMap
        value={value}
        width={220}
        height={80}
        weekLabels={["Пн", "", "", "Чт", "", "", "Вс"]}
        startDate={new Date("2025/05/5")}
        endDate={new Date("2025/08/26")}
        legendCellSize={0}
        rectSize={8}
        panelColors={{
          0: "#2E323A",
          1: "#004C00",
          2: "#027400",
          3: "#2A9C00",
        }}
        space={3}
        monthLabels={false}
        rectProps={{
          rx: 2,
        }}
      />
    </div>
  );
};

export default Heat_Map;

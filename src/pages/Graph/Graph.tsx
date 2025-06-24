import { useEffect, useRef } from "react";
import { Network } from "vis-network";
import { useNavigate } from "react-router";

function Graph() {
  const navigate = useNavigate();

  const graphContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphContainer.current) return;
    const nodes = [
      {
        id: 1,
        label: "Проект",
        size: 40,
        font: { size: 20 },
        color: "#4AA1FF",
        borderColor: "#045BFF",
        borderWidth: 1,
        cursor: "pointer",
      },

      { id: 2, label: "Аналитика", size: 24 },
      { id: 3, label: "Проектирование", size: 24 },
      { id: 4, label: "Разработка", size: 24 },
      { id: 5, label: "Тестирование", size: 24 },
      { id: 6, label: "Подготовка к защите", size: 24 },

      { id: 7, label: "Тех. задание", size: 24 },
      { id: 8, label: "Требования", size: 24 },
      { id: 9, label: "Диаграммы", size: 24 },
      { id: 10, label: "Архитектура", size: 24 },
      { id: 11, label: "Исходный код", size: 24 },
      { id: 12, label: "API док", size: 24 },
      { id: 13, label: "Тест-кейсы", size: 24 },
      { id: 14, label: "Результаты", size: 24 },
      { id: 15, label: "Презентация", size: 24 },
      { id: 16, label: "Отчёт", size: 24 },
    ];

    const edges = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 1, to: 5 },
      { from: 1, to: 6 },

      { from: 2, to: 7 },
      { from: 2, to: 8 },

      { from: 3, to: 9 },
      { from: 3, to: 10 },

      { from: 4, to: 11 },
      { from: 4, to: 12 },

      { from: 5, to: 13 },
      { from: 5, to: 14 },

      { from: 6, to: 15 },
      { from: 6, to: 16 },
    ];

    const options = {
      nodes: {
        shape: "dot",
        font: { size: 14, color: "rgb(0, 0, 0, 0.85)" },
        color: {
          hover: {
            background: "#4AA1FF",
            border: "none",
          },
          background: "#C2C3C5",
          border: "none",
          highlight: {
            background: "#2C83FF",
            border: "none",
          },
        },
      },
      edges: {
        width: 2,
        color: { color: "#A4A5A7", highlight: "#2C83FF", hover: "#68BFF5" },
        smooth: { enabled: true, type: "continuous", roundness: 0.5 },
      },
      interaction: {
        hover: true,
        selectable: true,
        multiselect: false,
        dragNodes: true,
        dragView: true,
        zoomView: true,
      },
      layout: {
        improvedLayout: true,
      },
      physics: {
        enabled: true,
        barnesHut: {
          centralGravity: 0.1,
        },
      },
    };

    const data = { nodes, edges };

    const network = new Network(graphContainer.current, data, options);

    network.on("hoverNode", () => {
      graphContainer.current!.style.cursor = "pointer";
    });

    network.on("doubleClick", function (params) {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        navigate(`/editor`);
        console.log("Clicked node:", nodeId);
      }
    });

    network.on("blurNode", () => {
      graphContainer.current!.style.cursor = "default";
    });
  }, []);

  return (
    <>
      <div
        ref={graphContainer}
        style={{
          width: "100%",
          height: "calc(100vh - 56px)",
          backgroundColor: "#f0f2f5",
        }}
      ></div>
    </>
  );
}

export default Graph;

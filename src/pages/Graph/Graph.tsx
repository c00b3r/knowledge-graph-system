import { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

function Graph() {
  const graphContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphContainer.current) return;
    const nodes = [
      {
        id: 1,
        label: 'Проект',
        size: 50,
        font: { size: 20 },
        color: '#6a4c93',
        cursor: 'pointer',
      },

      { id: 2, label: 'Аналитика', size: 35 },
      { id: 3, label: 'Проектирование', size: 35 },
      { id: 4, label: 'Разработка', size: 35 },
      { id: 5, label: 'Тестирование', size: 35 },
      { id: 6, label: 'Подготовка к защите', size: 35 },

      { id: 7, label: 'Тех. задание', size: 20 },
      { id: 8, label: 'Требования', size: 20 },
      { id: 9, label: 'Диаграммы', size: 20 },
      { id: 10, label: 'Архитектура', size: 20 },
      { id: 11, label: 'Исходный код', size: 20 },
      { id: 12, label: 'API док', size: 20 },
      { id: 13, label: 'Тест-кейсы', size: 20 },
      { id: 14, label: 'Результаты', size: 20 },
      { id: 15, label: 'Презентация', size: 20 },
      { id: 16, label: 'Отчёт', size: 20 },
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
      height: '600px',
      nodes: {
        shape: 'circle',
        font: { size: 14, color: 'white' },
        color: {
          background: '#aaaab3',
          border: 'none',
          highlight: { background: '#8a5cec', border: 'none' },
        },
        chosen: {
          node: (values: { borderWidth: number }) => {
            values.borderWidth = 2;
          },
          label: true,
        },
      },
      edges: {
        width: 2,
        color: { highlight: '#8a5cec' },
        smooth: { enabled: true, type: 'continuous', roundness: 0.5 },
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

    network.on('hoverNode', () => {
      graphContainer.current!.style.cursor = 'pointer';
    });

    network.on('blurNode', () => {
      graphContainer.current!.style.cursor = 'default';
    });
  }, []);
  return (
    <div ref={graphContainer} style={{ width: '100%', height: '600px' }}></div>
  );
}

export default Graph;

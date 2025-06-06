import { useEffect, useState } from 'react';

export default function ContextMenu({
  contextMenu,
  ref,
}: {
  contextMenu: { x: number; y: number } | null;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const [positionY, setPositionY] = useState(contextMenu?.y);

  useEffect(() => {
    if (!contextMenu || !positionY || !ref.current?.parentElement?.clientHeight)
      return;
    console.log(ref.current?.parentElement?.clientHeight, contextMenu.y);

    if (contextMenu.y + 55 > ref.current?.parentElement?.clientHeight) {
      setPositionY(contextMenu.y - 100);
    } else {
      setPositionY(contextMenu.y + 12);
    }
  }, [contextMenu, contextMenu?.y, positionY, ref]);

  return (
    <div
      className='context-menu'
      style={{
        left: contextMenu?.x,
        top: positionY,
        position: 'fixed',
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        zIndex: 1000,
      }}
      ref={ref}
    >
      <div className='context-menu-item'>GGGggg</div>
    </div>
  );
}

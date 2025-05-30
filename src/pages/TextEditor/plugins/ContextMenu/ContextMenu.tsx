export default function ContextMenu({
  contextMenu,
  ref,
}: {
  contextMenu: { x: number; y: number } | null;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className='context-menu'
      style={{
        left: contextMenu?.x,
        top: contextMenu?.y && contextMenu.y + 12,
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

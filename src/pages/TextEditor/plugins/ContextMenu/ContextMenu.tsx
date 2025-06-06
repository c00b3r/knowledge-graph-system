import { useEffect, useState } from 'react';
import './ContextMenu.css';
import LinkIcon from '../../../../components/icons/TextEditor/LinkIcon';
import ParagraphIcon from '../../../../components/icons/TextEditor/ParagraphIcon';
import PasteElementIcon from '../../../../components/icons/TextEditor/PasteElementIcon';
import CutIcon from '../../../../components/icons/TextEditor/CutIcon';
import CopyIcon from '../../../../components/icons/TextEditor/CopyIcon';
import PasteIcon from '../../../../components/icons/TextEditor/PasteIcon';
import SelectIcon from '../../../../components/icons/TextEditor/SelectIcon';
import ArrowRight from '../../../../components/icons/ArrowRight';

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
      }}
      ref={ref}
    >
      <div className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <LinkIcon />
        </span>
        Вставить ссылку
      </div>
      <div className='context-menu-divider' />
      <div
        className='context-menu-item'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className='context-menu-item-icon'>
          <ParagraphIcon />
        </span>
        <span style={{ flex: 1 }}>Абзац</span>
        <span className='context-menu-item-icon'>
          <ArrowRight />
        </span>
      </div>
      <div
        className='context-menu-item'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className='context-menu-item-icon'>
          <PasteElementIcon />
        </span>
        <span style={{ flex: 1 }}>Вставка</span>
        <span className='context-menu-item-icon'>
          <ArrowRight />
        </span>
      </div>
      <div className='context-menu-divider' />
      <div className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <CutIcon />
        </span>
        Вырезать
      </div>
      <div className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <CopyIcon />
        </span>
        Копировать
      </div>
      <div className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <PasteIcon />
        </span>
        Вставить
      </div>
      <div className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <SelectIcon />
        </span>
        Выделить В С Ё
      </div>
    </div>
  );
}

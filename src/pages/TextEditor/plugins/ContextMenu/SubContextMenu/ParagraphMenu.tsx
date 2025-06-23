import ListIcon from '../../../../../components/icons/ContextMenu/ListIcon';
import NumberedListIcon from '../../../../../components/icons/ContextMenu/NumberedListIcon';
import CheckListIcon from '../../../../../components/icons/ContextMenu/CheckListIcon';
import H1Icon from '../../../../../components/icons/ContextMenu/H1Icon';
import H2Icon from '../../../../../components/icons/ContextMenu/H2Icon';
import H3Icon from '../../../../../components/icons/ContextMenu/H3Icon';
import RemoveHeaderIcon from '../../../../../components/icons/ContextMenu/RemoveHeaderIcon';
import { useEffect, useRef, useState } from 'react';

function ParagraphMenu() {
  const paragraphMenuRef = useRef<HTMLDivElement>(null);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    if (
      paragraphMenuRef.current?.getBoundingClientRect() &&
      paragraphMenuRef.current.parentElement?.parentElement?.parentElement
        ?.clientHeight
    ) {
      const rect = paragraphMenuRef.current.getBoundingClientRect();

      console.log(
        rect.y + 249,
        paragraphMenuRef.current.parentElement?.parentElement?.parentElement
          ?.clientHeight
      );

      if (
        rect.y + 249 >
        paragraphMenuRef.current.parentElement?.parentElement?.parentElement
          ?.clientHeight
      ) {
        setPositionY(rect.y - 470);
      } else {
        setPositionY(0);
      }
    }
  }, []);

  return (
    <div
      className='context-menu'
      style={{
        position: 'absolute',
        left: '228px',
        top: positionY,
        zIndex: 1001,
      }}
      ref={paragraphMenuRef}
    >
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <ListIcon />
        </span>
        Список
      </button>
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <NumberedListIcon />
        </span>
        Нумерованный список
      </button>
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <CheckListIcon />
        </span>
        Список задач
      </button>
      <div className='context-menu-divider' />
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <H1Icon />
        </span>
        Заголовок уровня 1
      </button>
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <H2Icon />
        </span>
        Заголовок уровня 2
      </button>
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <H3Icon />
        </span>
        Заголовок уровня 3
      </button>
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <RemoveHeaderIcon />
        </span>
        Убрать заголовок
      </button>
    </div>
  );
}

export default ParagraphMenu;

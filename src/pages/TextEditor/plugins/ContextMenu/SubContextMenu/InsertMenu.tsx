import CodeIcon from '../../../../../components/icons/ContextMenu/CodeIcon';
import HorizontalLineIcon from '../../../../../components/icons/ContextMenu/HorizontalLineIcon';
import TableIcon from '../../../../../components/icons/ContextMenu/TableIcon';

function InsertMenu() {
  return (
    <div
      className='context-menu'
      style={{ position: 'absolute', left: '228px', top: '0px' }}
    >
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <TableIcon />
        </span>
        Таблица
      </button>
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <HorizontalLineIcon />
        </span>
        Горизонтальная линия
      </button>
      <div className='context-menu-divider' />
      <button className='context-menu-item'>
        <span className='context-menu-item-icon'>
          <CodeIcon />
        </span>
        Код
      </button>
    </div>
  );
}

export default InsertMenu;

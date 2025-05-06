import { Flex, Tooltip } from "antd";
import { Input } from "antd";
import { Button, Dropdown} from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import AddIcon from "../Icons/AddIcon";
import HelpIcon from "../Icons/HelpIcon";
import './Questions.css';
import Question from "../Question/Question";
import { NavLink } from "react-router";

function QuestionsItem({
  title,
  icon,
  to,
}: {
  title: string;
  icon: React.ReactNode;
  to: string;
}) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Tooltip title={title}>
          <div
            className={`navigation-menu-nav-item ${isActive ? 'active' : ''}`}
          >
            {icon}
          </div>
        </Tooltip>
      )}
    </NavLink>
  );
}

const { Search } = Input;

const items: MenuProps['items'] = [
  {
    label: 'Аналитика',
    key: '1',
  },
  {
    label: 'Проектирование',
    key: '2',
  },
  {
    label: 'Разработка',
    key: '3',
  },
  {
    label: 'Тестирование',
    key: '4',
  },
  {
    label: 'Подготовка к защите',
    key: '5',
  },
];

const menuProps = {
  items
};

function Questions() {
  return <div style={{ width: '194px', backgroundColor: '#2E323A' }}>
      <Flex vertical gap={'8px'} style={{margin: '16px'}}>
        <Search placeholder="Поиск"  className="search-box"/>
        <Dropdown menu={menuProps} className="questions-dropdown">
          <Button>
            <Flex gap={'58px'} justify="start">
              Аналитика
            <DownOutlined />
            </Flex>
        </Button>
        </Dropdown>
        <Flex  align="center" justify="space-between" style={{padding: '0 4px'}}>
          <QuestionsItem title='Добавить вопрос' icon={<AddIcon />} to='/*' />
          <QuestionsItem title='Справка' icon={<HelpIcon />} to='/*' />
        </Flex>
        <Flex vertical gap={'2px'}>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
        </Flex>
      </Flex>
  </div>;
}

export default Questions;

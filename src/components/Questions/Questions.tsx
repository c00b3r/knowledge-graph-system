import { Flex, Tooltip } from 'antd';
import { Input } from 'antd';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import AddIcon from '../icons/AddIcon';
import HelpIcon from '../icons/HelpIcon';
import './Questions.css';
import QuestionsList from '../QuestionList/QuestionList';

function QuestionsItem({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <Tooltip title={title}>
      <div className='navigation-menu-nav-item'>{icon}</div>
    </Tooltip>
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
  items,
};

const questions:string[] = [
  'Какие ключевые метрики вы отслеживаете для оценки успешности проекта?',
  'Какие инструменты (Google Analytics, Excel, Power BI, SQL) вы используете и почему?',
  'Какие частые ошибки в данных вы находите и как их исправляете?',
  'Как вы представляете данные команде?',
  'Как вы предсказываете риски или задержки в проекте?',
  'Как вы собираете и анализируете фидбэк от участников?',
  'Какие рутинные процессы можно автоматизировать в аналитике?',
  'С какими аналогичными проектами вы сравниваете результаты?'
]

const questionsCount:number = questions.length;

function Questions() {
  return (
    <div style={{ width: '194px', backgroundColor: '#2E323A' }}>
      <Flex vertical gap={'8px'} style={{ margin: '16px' }}>
        <Search placeholder='Поиск' className='search-box' />
        <Dropdown menu={menuProps} className='questions-dropdown'>
          <Button>
            <Flex gap={'58px'} justify='start'>
              Аналитика
              <DownOutlined />
            </Flex>
          </Button>
        </Dropdown>
        <Flex
          align='center'
          justify='space-between'
          style={{ padding: '0 4px' }}
        >
          <QuestionsItem title='Добавить вопрос' icon={<AddIcon />} />
          <QuestionsItem title='Справка' icon={<HelpIcon />} />
        </Flex>
        <QuestionsList questions={questions} count={questionsCount} />;
      </Flex>
    </div>
  );
}

export default Questions;

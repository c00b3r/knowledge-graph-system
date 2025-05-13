import { Flex } from 'antd';
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';
import './MainHeader.css';
import { Breadcrumb } from 'antd';

function MainHeader() {
  return (
    <div className='wrapper'>
      <Flex gap={24.6} align='center' className='arrows-wrapper'>
        <ArrowLeft />
        <ArrowRight />
      </Flex>
      <Breadcrumb
        className='breadcrumb'
        items={[
          {
            title: 'Home',
          },
        ]}
      />
    </div>
  );
}

export default MainHeader;

import { Flex } from 'antd';
import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';
import './MainHeader.css';
import { Breadcrumb } from 'antd';

function MainHeader() {
  return (
    <div className='wrapper'>
      <Flex gap={8} align='center' className='arrows-wrapper'>
        <span className='arrows-wrapper-icon'>
          <ArrowLeft />
        </span>
        <span className='arrows-wrapper-icon'>
          <ArrowRight />
        </span>
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

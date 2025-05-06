import './Activity.css';
import { Flex, Typography } from 'antd';

function Activity() {
  return (
    <Flex vertical gap={8}>
        <Typography.Title level={5} className='title'>Активность</Typography.Title>
        <div className='activity'></div>
    </Flex>
  )
};

export default Activity;
import { Flex, Progress, Typography } from 'antd'
import "./style.css";

function ProgressBar() {
  return (
    <Flex vertical gap={4}>
        <Typography.Title level={5} className='title'>Прогресс</Typography.Title>
        <Progress percent={30} className='bar' />
    </Flex>
  )
}

export default ProgressBar
import { Flex, Input, Typography } from 'antd';
import Activity from '../../components/Heat-map/Activity';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './style.css';

function Info() {
  return (
    <div className='container'>
        <Flex vertical gap={24} className='container-content'>
            <ProgressBar/>
            <Activity/>
            <Flex vertical gap={2}>
                <Typography.Title level={5} className='container-input-title'>Фамилия, имя и отчество</Typography.Title>
                <Input placeholder="Мильчаков Владимир Александрович" disabled className='input-disabled'/>
            </Flex>
            <Flex vertical gap={2}>
                <Typography.Title level={5} className='container-input-title'>Email</Typography.Title>
                <Input placeholder="" className='input-enabled'/>
            </Flex>
            <Flex vertical gap={2}>
                <Typography.Title level={5} className='container-input-title'>Телефон</Typography.Title>
                <Input type='phone' placeholder="" className='input-enabled'/>
            </Flex>
        </Flex>
    </div>
  )
}

export default Info
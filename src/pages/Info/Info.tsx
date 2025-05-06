import { Flex, Input, Typography } from 'antd';
import Activity from '../../components/Activity/Activity';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './Info.css';

function Info() {
  return (
    <div className='container'>
        <Flex vertical gap={24} className='container-content'>
            <ProgressBar/>
            <Activity/>
            <Flex vertical gap={2}>
                <Typography.Title level={5} className='container-input-title'>Фамилия, имя и отчество</Typography.Title>
                <Input defaultValue="Мильчаков Владимир Александрович" disabled className='input-disabled'/>
            </Flex>
            <Flex vertical gap={2}>
                <Typography.Title level={5} className='container-input-title'>Email</Typography.Title>
                <Input defaultValue="example@mail.com" disabled className='input-enabled'/>
            </Flex>
            <Flex vertical gap={2}>
                <Typography.Title level={5} className='container-input-title'>Телефон</Typography.Title>
                <Input disabled defaultValue={'+7 (999) 999-99-99'} className='input-enabled'/>
            </Flex>
        </Flex>
        
    </div>
  )
}

export default Info
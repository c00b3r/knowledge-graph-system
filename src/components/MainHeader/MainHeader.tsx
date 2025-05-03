import { Flex } from 'antd'
import ArrowLeft from '../icons/ArrowLeft'
import ArrowRight from '../icons/ArrowRight'
import './style.css'

function MainHeader() {
  return (
    <div className='wrapper'>
       <Flex gap={24.6} align='center' className='arrows-wrapper'>
            <ArrowLeft/>
            <ArrowRight/>
       </Flex>
    </div>
  )
}

export default MainHeader
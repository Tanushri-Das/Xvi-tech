import React from 'react'
import Botprocessautomation from '../../Components/Bot-process-automation/Botprocessautomation'
import AlignDesign from '../../Components/AlignDesign/AlignDesign'
import LetsCollaborate from '../../Components/LetsCollaborate/LetsCollaborate'
import FocusDesignCards from '../../Components/FocusDesign/FocusDesignCards'
import GetInTouch from '../../Components/GetInTouch/GetInTouch'


const Home = () => {
  return (
    <div>
        <Botprocessautomation/>
        <AlignDesign/>
        {/* <FocusDesignCards/> */}
        <LetsCollaborate/>
        <GetInTouch/>
    </div>
  )
}

export default Home
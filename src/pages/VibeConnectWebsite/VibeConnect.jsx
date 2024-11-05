import React from 'react'
import VibePage3 from './VibePage3'
import VibePage4 from './VibePage4'
import VibePage2 from './VibePage2'
import ProfilePage from './ProfilesPage'
import VibePage from './VibePage'
import ProfileCard from './ProfileCard'
import VibePage1 from './VibePage1'
import ProfileCard1 from './ProfileCard1'
import VibePage5 from './VibePage5'
import ProfileCard2 from './ProfileCard2'

const VibeConnect = () => {
  return (
    <div className="w-full overflow-hidden">
        <VibePage3/>
        <VibePage4/>
        <VibePage2/>
        <ProfilePage/>
        <VibePage/>
        <ProfileCard/>
        <VibePage1/>
        <ProfileCard1/>
        <VibePage5/>
        <ProfileCard2/>
    </div>
  )
}

export default VibeConnect
import { useAppStore } from '@/store'
import React from 'react'

function Profile() {
  const {userInfo} = useAppStore();
  console.log(userInfo);
  return (<>
    <div>Profile</div>
    <div>Email : {userInfo.email}</div>
  </>

  )
}

export default Profile
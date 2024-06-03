'use client'
import React, { useState } from 'react'
import AccountTabContent from './AccountTabContent/AccountTabContent'
import RestartMembership from './RestartMembership'
import MyLashProduct from './MyLashProduct'

export default function StandardTabs(props) {
    console.log(props,"props")
    const [showRestart,setShowRestart]=useState(false)
  return (
    <div >
        {showRestart==false?

        <AccountTabContent setShowRestart={setShowRestart} />:showRestart==false?
        <RestartMembership/>:null
        }
    {props?.value=="MY lash product info" ?
        <MyLashProduct/>:null
    }
    
    </div>
  )
}

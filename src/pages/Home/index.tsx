import React, { useState } from 'react'
import {Box} from "@chakra-ui/react"
import NoAccountModal from '../Auth/modals/NoAccountModal'

export default function Home() {

  
  const [showNoAccount, setShowNoAccount] = useState(true);

  return (
    <>
    <NoAccountModal openModal={showNoAccount}/>
    <Box>Home</Box>
    </>
  )
}

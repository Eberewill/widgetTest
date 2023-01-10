import React, { useState } from 'react'
import {Box} from "@chakra-ui/react"
import NoAccountModal from '../Auth/modals/NoAccountModal'
import WalletConnectModal from '../../components/wallet/WalletConnectModal';

export default function Home() {

  
  const [showNoAccount, setShowNoAccount] = useState(true);

  return (
    <>
    <WalletConnectModal openModal={showNoAccount}/>
    <Box>Home</Box>
    </>
  )
}

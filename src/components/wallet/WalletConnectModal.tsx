import {
    Button,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";

  import React, { useEffect, useState } from "react";
  import {  useLocation, useNavigate } from "react-router-dom";
  import walletConnect from "../../assets/images/walletConnect.png";
import ChooseNetwork from "./ChooseNetwork";
  
  const WalletConnectModal = ({
    openModal,
  }: {
    openModal: boolean;
   }) => {
    const bgColour = useColorModeValue("#FFFFFF", "#15202B");
    const textColour = useColorModeValue("#333333", "#F1F5F8");
    const textColour2 = useColorModeValue("#666666", "#F1F5F8");
    const {  onClose, onOpen, isOpen } = useDisclosure();
    const navigate = useNavigate();
  
    const mode = useColorModeValue("light", "dark");
    
    const [showNetworkModal, setShowNetworkModal] = useState(false);
  
    useEffect(() => {
      onOpen()
    }, [])
    
  
    return (
      <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg={bgColour}
          color='#fff'
          borderRadius='6px'
          paddingBottom='15px'
          width={398}
        >
            <Flex my={5} >
              <ModalCloseButton
              mt={5}
              mr={4}
              size='sm'
               color={textColour2}
                border={
                  mode === "dark" ? "1px solid #FFF" : "1px solid #666666"
                }
              />
            </Flex>
          <ModalBody
            my={2}
            px={8}
            display='flex'
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Image src={walletConnect} mt='17px' />
            <Text fontSize='16px' fontWeight='500' py={3} color={textColour}>
            Connect wallet
            </Text>
  
            <Text
              px={4}
              pb={4}
              color={textColour2}
              fontSize='14px'
              fontWeight={400}
              align='center'
            >
              You need to connect your wallet to be able to buy or sell on the platform. 
            </Text>
            <Button
              mt='24px'
              onClick={
               
                () =>{ 
                  setShowNetworkModal(true)
                    onClose()
                }
              }
              variant={"brand"}
              width='100%'
              height='48px'
            >
             Connect wallet
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ChooseNetwork openModal={showNetworkModal}/>
    
      </>
    );
  };
  
  export default WalletConnectModal;
  
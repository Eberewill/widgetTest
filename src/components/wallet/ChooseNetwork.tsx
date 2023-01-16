import {
    Box,
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
  import {  useNavigate } from "react-router-dom";
import { BinanceIcon, Eth, EthereumIcon, PolygonIcon, PolygonIconNew } from "../../assets/Icons";
import ChooseWalletModal from "./ChooseWalletModal";
  
  const ChooseNetwork = ({
    openModal,
    setReload,
  }: {
    openModal: boolean;
    setReload?: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const bgColour = useColorModeValue("#FFFFFF", "#15202B");
    const textColour = useColorModeValue("#333333", "#F1F5F8");
    const textColour2 = useColorModeValue("#666666", "#F1F5F8");
    const {  onClose, onOpen, isOpen } = useDisclosure();
    
  
    const mode = useColorModeValue("light", "dark");
    const [showWalletModal, setShowWalletModal] = useState(false);
  
    useEffect(() => {
      setShowWalletModal(false)
      if(openModal){
        onOpen()
      }else{
        onClose()
      }
    }, [openModal])
    
    
    return (
      <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg={bgColour}
          color="#fff"
          borderRadius="6px"
          paddingBottom="15px"
          width={386}
        >
          <Flex my={5}>
            <ModalCloseButton
              mt={5}
              size='sm'
              mr={4}
              color={textColour2}
              border={mode === "dark" ? "1px solid #FFF" : "1px solid #666666"}
            />
          </Flex>
          <ModalBody my={2} display="flex" flexDirection={"column"}>
            <Text
              fontSize="20px"
              fontWeight="500"
              mt={"25px"}
              color={textColour}
            >
              Choose a network to connect to
            </Text>

            <Flex
              border={
                mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"
              }
              onClick={()=> setShowWalletModal(true)}
              borderRadius="6px"
              mt={"16px"}
              p={4}
              fontWeight="400"
              fontSize="16px"
              cursor="pointer"
              width={"100%"}
            >
              <Box>
                <Eth />
              </Box>
              <Text ml={"10px"} color={textColour}>
                {" "}
                Ethereum Network
              </Text>
            </Flex>

            <Flex
              border={
                mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"
              }
              onClick={()=> setShowWalletModal(true)}
              borderRadius="6px"
              mt={"16px"}
              p={4}
              fontWeight="400"
              fontSize="16px"
              cursor="pointer"
              width={"100%"}
            >
              <Box>
                <BinanceIcon />
              </Box>
              <Text ml={"10px"} color={textColour}>
                {" "}
                Binance Smart Chain Network
              </Text>
            </Flex>

            <Flex
              border={
                mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"
              }
              onClick={()=> setShowWalletModal(true)}
              borderRadius="6px"
              mt={"16px"}
              p={4}
              fontWeight="400"
              fontSize="16px"
              cursor="pointer"
              width={"100%"}
            >
              <Box>
                <PolygonIconNew />
              </Box>
              <Text ml={"10px"} color={textColour}>
                {" "}
                Polygon Network
              </Text>
            </Flex>

            <Box
              borderRadius="6px"
               mt={"16px"}
              p={4}
              backgroundColor={"#F2F5F8"}
            >
              <Text 
              color={textColour2}
              fontSize={"12px"} fontWeight={500}>
                By connecting a wallet, you agree to RigelProtocol’s 
                <span  style={{color : "#319EF6",  cursor: 'pointer' , textDecoration: 'underline'}}> Terms of  Service </span> and acknowledge that you have read and understand the
                RigelProtocol <span  style={{color : "#319EF6", cursor: 'pointer' , textDecoration: 'underline'}}>Privacy Policy.</span> 
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ChooseWalletModal openModal={showWalletModal}/>
      </>
    );
  };
  
  export default ChooseNetwork;
  
import {
  Box,
  Button,
  Flex,
  HStack,
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
import { useNavigate } from "react-router-dom";
import {
  BinanceIcon,
  Eth,
  EthereumIcon,
  PolygonIcon,
  PolygonIconNew,
  TrustWalletIcon,
} from "../../assets/Icons";
import Metamask from "../../assets/images/metamaskLogo.png";
import TransactionModal from "../modals/TransactionModal";

const ChooseWalletModal = ({ openModal }: { openModal: boolean }) => {
  const bgColour = useColorModeValue("#FFFFFF", "#15202B");
  const textColour = useColorModeValue("#333333", "#F1F5F8");
  const textColour2 = useColorModeValue("#666666", "#F1F5F8");
  const { onClose, onOpen, isOpen } = useDisclosure();

  const mode = useColorModeValue("light", "dark");
  const [showTrxnModal, setShowTrxnModal] = useState(false);
  
  useEffect(() => {
    if (openModal) {
      onOpen();
    }
  }, [openModal ]);

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg={bgColour}
        color="#fff"
        borderRadius="6px"
        paddingBottom="15px"
        width={'386px'}
      >
        <Flex my={5}>
          
          <ModalCloseButton
            mt={7}
            size="sm"
            mr={4}
            color={textColour2}
            border={mode === "dark" ? "1px solid #FFF" : "1px solid #666666"}
          />
        </Flex>
        <HStack onClick={onClose} cursor={'pointer'} ml={6}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 21.75H8C2.57 21.75 0.25 19.43 0.25 14V8C0.25 2.57 2.57 0.25 8 0.25H14C19.43 0.25 21.75 2.57 21.75 8V14C21.75 19.43 19.43 21.75 14 21.75ZM8 1.75C3.39 1.75 1.75 3.39 1.75 8V14C1.75 18.61 3.39 20.25 8 20.25H14C18.61 20.25 20.25 18.61 20.25 14V8C20.25 3.39 18.61 1.75 14 1.75H8Z"
                fill="#666666"
              />
              <path
                d="M12.26 15.2799C12.07 15.2799 11.88 15.2099 11.73 15.0599L8.20004 11.5299C7.91004 11.2399 7.91004 10.7599 8.20004 10.4699L11.73 6.93991C12.02 6.64991 12.5 6.64991 12.79 6.93991C13.08 7.22991 13.08 7.70991 12.79 7.99991L9.79004 10.9999L12.79 13.9999C13.08 14.2899 13.08 14.7699 12.79 15.0599C12.65 15.2099 12.46 15.2799 12.26 15.2799Z"
                fill="#666666"
              />
            </svg>

            <Text fontSize="16px" fontWeight="500" color={textColour2}>Choose a wallet</Text>
          </HStack>
        <ModalBody my={2} display="flex" flexDirection={"column"}>
          <Text fontSize="20px" fontWeight="500" mt={"24px"} color={textColour}>
            Choose a wallet
          </Text>

          <Flex
            border={mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"}
            borderRadius="6px"
            mt={"16px"}
            p={4}
            onClick={()=> {
                setShowTrxnModal(true)
                onClose()
            }}
            fontWeight="400"
            fontSize="16px"
            cursor="pointer"
            width={"100%"}
            height="64px"
            _hover={{
                border : "1px solid #319EF6" 
            }}
          >
            <Box>
              <Image src={Metamask} />
            </Box>
            <Text ml={"10px"} color={textColour}>
              {" "}
              Metamask
            </Text>
          </Flex>

          <Flex
            border={mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"}
            borderRadius="6px"
            mt={"16px"}
            p={4}
            mb='40px'
            onClick={()=> {
                setShowTrxnModal(true)
                onClose()
            }}
            fontWeight="400"
            fontSize="16px"
            cursor="pointer"
            width={"100%"}
            height="64px"
            _hover={{
                border : "1px solid #319EF6" 
            }}
          >
            <Box>
              <TrustWalletIcon />
            </Box>
            <Text ml={"10px"} color={textColour}>
              {" "}
              Trust Wallet
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>

    <TransactionModal openModal={showTrxnModal}/>
    </>
  );
};

export default ChooseWalletModal;

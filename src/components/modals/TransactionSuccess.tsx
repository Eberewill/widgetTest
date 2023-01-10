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
  import React, { useEffect } from "react";
  import {  useLocation, useNavigate } from "react-router-dom";
  import NoAccount from "../../../assets/images/noAccount.png";
  
  const TransactionSuccess = ({
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
  
    useEffect(() => {
        if(openModal){
       onOpen()
        }
    }, [openModal])
    
  
    return (
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
              mt={4}
              mr={4}
              size='sm'
              color={textColour2}
              border={mode === "dark" ? "1px solid #FFF" : "1px solid #666666"}
            />
          </Flex>
          <ModalBody
            my={2}
            px={8}
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box mt='30px' >
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 89.7918C20.2917 89.7918 0.208328 69.7085 0.208328 45.0002C0.208328 20.2918 20.2917 0.208496 45 0.208496C69.7083 0.208496 89.7917 20.2918 89.7917 45.0002C89.7917 69.7085 69.7083 89.7918 45 89.7918ZM45 6.4585C23.75 6.4585 6.45833 23.7502 6.45833 45.0002C6.45833 66.2502 23.75 83.5418 45 83.5418C66.25 83.5418 83.5417 66.2502 83.5417 45.0002C83.5417 23.7502 66.25 6.4585 45 6.4585Z"
                  fill="#22BB33"
                />
                <path
                  d="M39.0833 59.9168C38.25 59.9168 37.4583 59.5835 36.875 59.0002L25.0833 47.2085C23.875 46.0002 23.875 44.0002 25.0833 42.7918C26.2917 41.5835 28.2917 41.5835 29.5 42.7918L39.0833 52.3752L60.5 30.9585C61.7083 29.7502 63.7083 29.7502 64.9167 30.9585C66.125 32.1668 66.125 34.1668 64.9167 35.3752L41.2917 59.0002C40.7083 59.5835 39.9167 59.9168 39.0833 59.9168Z"
                  fill="#22BB33"
                />
              </svg>
            </Box>
            <Text mt='30px' fontSize="20px" fontWeight="500" color={textColour}>
              Transaction Successful
            </Text>

            <Text
              px={2}
              mt={'16px'}
              color={"#319EF6"}
              fontSize="16px"
              fontWeight={500}
              align="center"
              textDecoration={"underline"}
            >
              View on Etherscan
            </Text>
            <Button
              mt="24px"
              variant={"brand"}
              width="100%"
              height={'48px'}
            >
              Continue
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default TransactionSuccess;
  
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
  import React, { useEffect } from "react";
  import {  useLocation, useNavigate } from "react-router-dom";
  import NoAccount from "../../../assets/images/noAccount.png";
  
  const NoAccountModal = ({
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
    const navigate = useNavigate();
  
    const mode = useColorModeValue("light", "dark");
    let Location = useLocation();
  
    useEffect(() => {
      onOpen()
    }, [])
    
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg={bgColour}
          color='#fff'
          borderRadius='6px'
          paddingBottom='15px'
          width={435}
        >
            <Flex my={5} >
              <ModalCloseButton
              mt={4}
              mr={4}
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
            <Image src={NoAccount} py={3} />
            <Text fontSize='20px' fontWeight='700' py={3} color={textColour}>
            You don’t have an account
            </Text>
  
            <Text
              px={2}
              pb={4}
              color={textColour2}
              fontSize='14px'
              fontWeight={500}
              align='center'
            >
                You need a user account to be able to buy and sell cryptocurrencies. Click the button below to create an account in <span style={{color : "#319EF6"}}>less than 2 minutes.</span> 
            </Text>
            <Button
              mt='24px'
              onClick={
               
                () =>{ 
                    navigate('/create-account')
                    onClose()
                }
              }
              variant={"brand"}
              width='100%'
            >
              Create an account
            </Button>

            <Button
              mt='16px'
              onClick={onClose}
              variant='outline'
              width='100%'
              color={'#666666'}
            >
              Cancel
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default NoAccountModal;
  
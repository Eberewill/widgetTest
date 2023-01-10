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
  Spinner,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NoAccount from "../../../assets/images/noAccount.png";
import TransactionSuccess from "./TransactionSuccess";

const TransactionModal = ({ openModal }: { openModal: boolean }) => {
  const bgColour = useColorModeValue("#FFFFFF", "#15202B");
  const textColour = useColorModeValue("#333333", "#F1F5F8");
  const textColour2 = useColorModeValue("#666666", "#F1F5F8");
  const { onClose, onOpen, isOpen } = useDisclosure();
  const navigate = useNavigate();

  const mode = useColorModeValue("light", "dark");

  const [openSuccess, setOpenSuccess] = useState(false);

  useEffect(() => {
    if (openModal) {
      onOpen();
    } else {
      onClose();
    }
  }, [openModal]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setOpenSuccess(true);
        onClose();
      }, 5000);
    }
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg={bgColour}
          color="#fff"
          borderRadius="6px"
          paddingBottom="15px"
          width={435}
        >
          <Flex my={5}>
            <ModalCloseButton
              mt={6}
              size="sm"
              mr={4}
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
            <Spinner
              thickness="4px"
              speed="0.53s"
              emptyColor="transparent"
              color="#319EF6"
              size="xl"
              width="100px"
              height="100px"
              mt="30px"
            />

            <Text fontSize="20px" fontWeight="500" mt="40px" color={textColour}>
              Waiting for confirmation
            </Text>

            <Text
              px={2}
              color={textColour2}
              fontSize="16px"
              fontWeight={500}
              align="center"
              mt="16px"
            >
              Requesting for access from your wallet
            </Text>

            <Text color={"#999999"} fontSize="14px" fontWeight={500} mt="16px">
              Go to your wallet to confirm this
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      <TransactionSuccess openModal={openSuccess} />
    </>
  );
};

export default TransactionModal;

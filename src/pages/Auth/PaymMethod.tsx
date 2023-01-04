import {
  Box,
  Flex,
  useColorModeValue,
  useMediaQuery,
  Text,
  Spacer,
  Input,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import React, { useState } from "react";
import NetworkIndicator from "./components/NetworkIndicator";
import { useDispatch } from "react-redux";
import {
  accountScreens,
  setActiveAccountScreen,
} from "../../state/application/account";
import AccountSuccess from "./modals/AccountSuccess";
import WidgetNav from "./components/WidgetNav";

const PaymMethod = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const [countryCode, setCountryCode] = useState("+234");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setemailAddress] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const labelColor = useColorModeValue("#666666", "");
  const inactiveTextColor = useColorModeValue("#CCCCCC", "");
  const inputBorderColor = useColorModeValue("#DEE5ED", "#2D3748");
  const activeTextColor = useColorModeValue("#333333", "");
  const account = "0x";

  const dispatch = useDispatch();

  const mode = useColorModeValue("light", "dark");
  const [phone, setPhone] = useState("");

  return (
    <>
      <Flex minH="100vh" zIndex={1} mt={10} flexWrap="wrap">
        <Box
          display={isMobileDevice ? "none" : undefined}
          mx={4}
          w={["100%", "100%", "37%", "29.5%"]}
          mb={4}
        >
          <Spacer />
        </Box>
        <Box
          mx={4}
          mb={isMobileDevice ? 45 : 5}
          w={["100%", "100%", "45%", "40.5%"]}
        >
          <Box
            mt={5}
            p={7}
            mb="10px"
            backgroundColor={mode === "dark" ? "#213345" : "#FFFFFF"}
            border={mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"}
            borderRadius="12px"
          >
            
             <WidgetNav/>
            <Text
              fontSize="20px"
              fontWeight={500}
              color={mode === "dark" ? "white" : "#333333"}
              mt="24px"
            >
              Create an account
            </Text>

            <Text
              fontSize="16px"
              fontWeight={700}
              color={mode === "dark" ? "white" : "#666666"}
              mt="25px"
            >
              Add payment method
            </Text>

            <Text
              fontSize="14px"
              fontWeight={400}
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="24px"
            >
              Choose Payment Country
            </Text>

            <Flex mt="8px" flexDirection="column">
              <Flex
                px={{ base: 2 }}
                alignItems="center"
                justifyContent="space-between"
                h="10"
                border="1px"
                borderColor={inputBorderColor}
                borderRadius="4px"
                //onClick={() => setOpenModal(true)}
                cursor="pointer"
              >
                <Text color={inactiveTextColor} fontSize="14px">
                  Select Country
                </Text>
                <ChevronDownIcon color={inactiveTextColor} />
              </Flex>
            </Flex>

            <Text
              fontSize="14px"
              fontWeight={400}
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="24px"
            >
              Choose Payment Method
            </Text>

            <Flex mt="8px" flexDirection="column">
              <Flex
                px={{ base: 2 }}
                alignItems="center"
                justifyContent="space-between"
                h="10"
                border="1px"
                borderColor={inputBorderColor}
                borderRadius="4px"
                //onClick={() => setOpenModal(true)}
                cursor="pointer"
              >
                <Text color={inactiveTextColor} fontSize="14px">
                  Select Payment Method
                </Text>
                <ChevronDownIcon color={inactiveTextColor} />
              </Flex>
            </Flex>

            <Text
              fontSize="14px"
              fontWeight={400}
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="24px"
            >
              Choose Bank
            </Text>

            <Flex mt="8px" flexDirection="column">
              <Flex
                px={{ base: 2 }}
                alignItems="center"
                justifyContent="space-between"
                h="10"
                border="1px"
                borderColor={inputBorderColor}
                borderRadius="4px"
                //onClick={() => setOpenModal(true)}
                cursor="pointer"
              >
                <Text color={inactiveTextColor} fontSize="14px">
                  Choose a bank
                </Text>
                <ChevronDownIcon color={inactiveTextColor} />
              </Flex>
            </Flex>

            <Text
              fontSize="14px"
              fontWeight={400}
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="24px"
            >
              Enter Bank Account Number
            </Text>

            <Input
              type={"number"}
              mt="8px"
              // display={account ? undefined : "none"}
              _focus={{ borderColor: "none" }}
            />

            <Text
              fontSize="14px"
              fontWeight={400}
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="24px"
            >
              Account Name
            </Text>

            <Input
              value={"Esosa Chiejine"}
              type={"text"}
              mt="8px"
              // display={account ? undefined : "none"}
              _focus={{ borderColor: "none" }}
            />

            <Button
              onClick={() => {
                // dispatch(setActiveAccountScreen(accountScreens.ADDDETAILS));
                setShowSuccess(true);
              }}
              variant={"brand"}
              // disabled={!phone || !fullName}
              _hover={{
                bgColor: "brand",
                color: "white",
              }}
              width="100%"
              mt="40px"
              mb="80px"
            >
              Create account
            </Button>
          </Box>
        </Box>
      </Flex>

      <AccountSuccess openModal={showSuccess} />
    </>
  );
};

export default PaymMethod;

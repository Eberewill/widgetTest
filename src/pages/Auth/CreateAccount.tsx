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
import { accountScreens, setActiveAccountScreen } from "../../state/application/account";
import WidgetNav from "./components/WidgetNav";

const CreateAccount = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const [countryCode, setCountryCode] = useState("+234");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setemailAddress] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const account = "0x";

  const dispatch = useDispatch()

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
              Add details
            </Text>

            <Text
              fontSize="14px"
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="25px"
            >
              Name
            </Text>

            <Input
              mt="8px"
              value={fullName}
              onChange={(e) => {
                const re = /^[a-zA-Z ]*$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setFullName(e.target.value);
                }
              }}
              _focus={{ borderColor: "none" }}
            />
            <Flex
              mt={2}
              color="#fff"
              flexDirection={"row"}
              // justifyContent='center'
              alignItems="center"
              mb={3}
            >
              <AiOutlineExclamationCircle color="#EEC749" />

              <Text pl={2} fontSize={12} color={"#EEC749"}>
                These names will be associated with this wallet address & cannot
                be changed later.
              </Text>
            </Flex>

            <Text
              fontSize="14px"
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="24px"
            >
              Email Address
            </Text>

            <Input
              value={emailAddress}
              type={"email"}
              onChange={(e) => {
                setemailAddress(e.target.value);
              }}
              mt="8px"
              // display={account ? undefined : "none"}
              _focus={{ borderColor: "none" }}
            />

            <Text
              fontSize="14px"
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="24px"
            >
              Mobile Number
            </Text>

            <Flex mt="8px" color="#fff" mb="10px" flexDirection={"row"}>
              <Flex
                color="#fff"
                h="50px"
                cursor="pointer"
                // width={"23%"}
                px={2}
                flexDirection={"row"}
                backgroundColor={
                  !account
                    ? mode === "dark"
                      ? "#213345"
                      : "#F2F5F8"
                    : mode === "dark"
                    ? "#213345"
                    : "#fff"
                }
                border={
                  mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"
                }
                borderRadius="6px"
                alignItems="center"
                onClick={() => {
                  if (account) {
                    setOpenModal(true);
                  }
                }}
              >
                {account ? (
                  <Text
                    fontSize={14}
                    p={3}
                    color={mode === "dark" ? "#DCE5EF" : "#666666"}
                  >
                    {countryCode}
                  </Text>
                ) : (
                  <Text
                    fontSize={14}
                    p={3}
                    color={mode === "dark" ? "#DCE5EF" : "#999999"}
                  >
                    {countryCode}
                  </Text>
                )}
                <ChevronDownIcon color="#666666" />
              </Flex>
              <Box
                color="#fff"
                display={account ? "none" : undefined}
                h="50px"
                width={"74%"}
                ml={4}
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
                backgroundColor={mode === "dark" ? "#213345" : "#F2F5F8"}
                border={
                  mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"
                }
                borderRadius="6px"
              ></Box>
              <Input
                color={mode === "dark" ? "#DCE5EF" : "#666666"}
                pattern="[0-9]{1,5}"
                ml={4}
                h="50px"
                _focus={{ borderColor: "none" }}
                display={account ? undefined : "none"}
                value={phone}
                // placeholder="number"
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (e.target.value === "" || re.test(e.target.value)) {
                    setPhone(e.target.value);
                  }
                }}
              />
            </Flex>
            <Button
              onClick={()=> {
                    dispatch(setActiveAccountScreen(accountScreens.VERIFYEMAIL))
              }}
              variant={"brand"}
              disabled={!phone || !fullName}
              _hover={{
                bgColor: "brand",
                color: "white",
              }}
              width="100%"
              mt="40px"
              mb="130px"
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default CreateAccount;

import {
  Flex,
  useColorModeValue,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import AccountSuccess from "./modals/AccountSuccess";

const PaymMethod = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const inactiveTextColor = useColorModeValue("#CCCCCC", "");
  const inputBorderColor = useColorModeValue("#DEE5ED", "#2D3748");
  const mode = useColorModeValue("light", "dark");
  return (
    <>
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
        <AccountSuccess openModal={showSuccess} />
    </>
  );
};

export default PaymMethod;

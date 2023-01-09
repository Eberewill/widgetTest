import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Button,
  Link,
  PinInput,
  HStack,
  PinInputField,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { accountScreens, setActiveAccountScreen } from "../../state/application/account";
import { useDispatch } from "react-redux";

const VerifyEmail = () => {
  const [error, setError] = useState(false);
  const mode = useColorModeValue("light", "dark");
  const [valueArray, setValueArray] = useState<string[]>([]);
  const inputerrorBorderColor = useColorModeValue("#CC334F", "#FF3358");
  const inputBorderColor = useColorModeValue("#319EF6", "");
  const inputBgColor = useColorModeValue("#EBF6FE", "");
  const dispatch = useDispatch()

  return (
    <>            <Text
              fontSize="16px"
              fontWeight={700}
              color={mode === "dark" ? "white" : "#666666"}
              mt="25px"
            >
              Verify Email Address
            </Text>

            <Text
              fontSize="16px"
              fontWeight={400}
              color={mode === "dark" ? "#DCE5EF" : "#666666"}
              mt="8px"
            >
              Enter the OTP sent to your email address to verify.
            </Text>

            <Flex
              w="80%"
              mt="24px"
              color="#fff"
              mb="10px"
              flexDirection={"row"}
              justifyContent="center"
              alignContent="center"
            >
              <Text
                alignContent={"center"}
                fontSize="16px"
                color={mode === "dark" ? "#DCE5EF" : "#666666"}
                fontWeight={400}
              >
                Didn’t get a code? <Link color={"#319EF6"}>Resend</Link>
              </Text>
            </Flex>

            <HStack
              w="100%"
              justifyContent='center'
              mt='24px'
              spacing={{ base: 10 }}
            >
              <PinInput
                // value={OTP}

                type="alphanumeric"
                size="lg"
                placeholder=""
                autoFocus
              >
                <PinInputField
                  
                  borderColor={
                    valueArray[0]
                      ? error
                        ? inputerrorBorderColor
                        : inputBorderColor
                      : ""
                      
                  }
                  bgColor={valueArray[0] ? (error ? "" : inputBgColor) : ""}
                />
                <PinInputField
                  borderColor={
                    valueArray[1]
                      ? error
                        ? inputerrorBorderColor
                        : inputBorderColor
                      : "#DEE5ED"
                  }
                  bgColor={valueArray[1] ? (error ? "" : inputBgColor) : ""}
                />
                <PinInputField
                  borderColor={
                    valueArray[2]
                      ? error
                        ? inputerrorBorderColor
                        : inputBorderColor
                      : "#DEE5ED"
                  }
                  bgColor={valueArray[2] ? (error ? "" : inputBgColor) : ""}
                />
                <PinInputField
                  borderColor={
                    valueArray[3]
                      ? error
                        ? inputerrorBorderColor
                        : inputBorderColor
                      : "#DEE5ED"
                  }
                  bgColor={valueArray[3] ? (error ? "" : inputBgColor) : ""}
                />
                <PinInputField
                  borderColor={
                    valueArray[4]
                      ? error
                        ? inputerrorBorderColor
                        : inputBorderColor
                      : "#DEE5ED"
                  }
                  bgColor={valueArray[4] ? (error ? "" : inputBgColor) : ""}
                />
                <PinInputField
                  autoFocus={false}
                  borderColor={
                    valueArray[5]
                      ? error
                        ? inputerrorBorderColor
                        : inputBorderColor
                      : "#DEE5ED"
                  }
                  bgColor={valueArray[5] ? (error ? "" : inputBgColor) : ""}
                />
              </PinInput>
            </HStack>

            <Button
              variant={"brand"}
             // disabled={!phone || !fullName}
             onClick={()=> {
                dispatch(setActiveAccountScreen(accountScreens.PAYMETHOD))
          }}
              _hover={{
                bgColor: "brand",
                color: "white",
              }}
              // isFullWidth
              width="100%"
              mt="40px"
              mb="318px"
            >
              Continue
            </Button>
            </>
    
  );
};

export default VerifyEmail;

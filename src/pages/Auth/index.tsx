import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import CreateAccount from "./CreateAccount";
import { accountScreens } from "../../state/application/account";
import VerifyEmail from "./VerifyEmail";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import PaymMethod from "./PaymMethod";
import WidgetNav from "./components/WidgetNav";

export default function Index() {
  const activeScreen = useSelector(
    (state: RootState) => state.account.activeBar
  );

  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const mode = useColorModeValue("light", "dark");

  return (
    <>
      <Flex minH="100vh" zIndex={1} mt={10} flexWrap="wrap">
        <Spacer />
        <Box
          mx={4}
          mb={isMobileDevice ? 45 : 5}
          w={["100%", "100%", "508px", "508px"]}
        >
          <Box
            mt={5}
            p={7}
            mb="10px"
            backgroundColor={mode === "dark" ? "#213345" : "#FFFFFF"}
            border={mode === "dark" ? "1px solid #324D68" : "1px solid #DEE6ED"}
            borderRadius="12px"
          >
            <WidgetNav />
            <Text
              fontSize="20px"
              fontWeight={500}
              color={mode === "dark" ? "white" : "#333333"}
              mt="24px"
            >
              Create an account
            </Text>
            {activeScreen === accountScreens.ADDDETAILS ? (
              <CreateAccount />
            ) : activeScreen === accountScreens.VERIFYEMAIL ? (
              <VerifyEmail />
            ) : activeScreen === accountScreens.PAYMETHOD ? (
              <PaymMethod />
            ) : (
              <>Nill </>
            )}
          </Box>
        </Box>
        <Spacer />
      </Flex>
    </>
  );
}

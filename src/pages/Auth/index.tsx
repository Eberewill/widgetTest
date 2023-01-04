import React from "react";
import { Box } from "@chakra-ui/react";
import CreateAccount from "./CreateAccount";
import { accountScreens } from "../../state/application/account";
import VerifyEmail from "./VerifyEmail";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import PaymMethod from "./PaymMethod";

export default function Index() {
  const activeScreen = useSelector(
    (state: RootState) => state.account.activeBar
  );

  return (
    <>
      {activeScreen === accountScreens.ADDDETAILS ? (
        <CreateAccount />
      ) : activeScreen === accountScreens.VERIFYEMAIL ? (
        <VerifyEmail />
      ) : activeScreen === accountScreens.PAYMETHOD ? (
        <PaymMethod />
      ) : (
        <>Nill </>
      )}
    </>
  );
}

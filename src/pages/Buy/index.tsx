import { Box, Flex } from "@chakra-ui/react";
import BuySellHeader from "./components/BuySellHeader";

export default function Buy() {
  return (
    <Flex py={5} minH={"100vh"} border={"1px solid"} justifyContent={"center"}>
      <Flex
        border={"1px solid #666666"}
        borderRadius={"20px"}
        w='460px'
        h='600px'

        // justifyContent={"center"}
        // alignItems={"center"}
      >
        <BuySellHeader />
      </Flex>
    </Flex>
  );
}

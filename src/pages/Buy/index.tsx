import { Box, Flex } from "@chakra-ui/react";
import BuySellHeader from "./components/BuySellHeader";

export default function Buy() {
  return (
    <Flex py={5} minH={"100vh"} justifyContent={"center"}>
      <BuySellHeader />
    </Flex>
  );
}

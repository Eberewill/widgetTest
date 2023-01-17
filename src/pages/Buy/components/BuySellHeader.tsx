import {
  Flex,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import Buy from "..";
import BuySection from "./Buy";
import SellSection from "./Sell";

const BuySellHeader = () => {
  const buyBgColor = useColorModeValue("#0CCB80", "");
  const sellBgColor = useColorModeValue("#CC334F", "");
  const borderColor = useColorModeValue("#F2F5F8", "");
  const currencyTextColor = useColorModeValue("#666666", "");
  const activeCurrencyColor = useColorModeValue("#319EF6", "");
  return (
    <Flex
      px={4}
      py={4}
      // maxW='508px'
      h='580px'
      border={"1px solid black"}
      // justifyContent={"center"}
      borderRadius={"6px"}
    >
      <Flex justifyContent={"center"}>
        <Tabs>
          <TabList
            w='508px'
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex>
              <Tab
                px={5}
                borderRadius={"6px"}
                border={`1px solid ${borderColor}`}
                _selected={{ color: "white", bg: buyBgColor }}
                fontWeight={"500"}
              >
                Buy
              </Tab>
              <Tab
                fontWeight={"500"}
                px={5}
                borderRadius={"6px"}
                ml={2}
                border={`1px solid ${borderColor}`}
                _selected={{ color: "white", bg: sellBgColor }}
              >
                Sell
              </Tab>
            </Flex>

            <Flex mt={4} alignItems={"center"} ml={10}>
              <Text
                color={activeCurrencyColor}
                borderBottom={`2px solid ${activeCurrencyColor}`}
                px={3}
              >
                RGP
              </Text>
              <Text color={currencyTextColor} px={3}>
                USDT
              </Text>
              <Text color={currencyTextColor} px={3}>
                BNB
              </Text>
              <Text color={currencyTextColor} px={3}>
                BUSD
              </Text>
            </Flex>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <BuySection />
            </TabPanel>
            <TabPanel px={0}>
              <SellSection />
            </TabPanel>
          </TabPanels>
          {/* <TabPanels>
            <TabPanel>
              <p>one</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels> */}
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default BuySellHeader;

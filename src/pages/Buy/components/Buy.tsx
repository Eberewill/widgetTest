import {
  Flex,
  Text,
  Input,
  Box,
  Select,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  InputRightAddon,
  Img,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import USDLOGO from "../../../assets/usdlogo.svg";

const BuySection = () => {
  const textColor = useColorModeValue("#666666", "");
  const borderColor = useColorModeValue("#DEE5ED", "");
  const searchColor = useColorModeValue("#319EF6", "");
  const searchBgColor = useColorModeValue("transparent", "");
  const allButtonTextColor = useColorModeValue("#3CB1D2", "");
  const allButtonBgColor = useColorModeValue("#D6EEF5", "");
  const resetColor = useColorModeValue("#666666", "");
  const buyBgColor = useColorModeValue("#0CCB80", "");
  const buyColor = useColorModeValue("#FFFFFF", "");
  return (
    <Box>
      <Flex pt={3} flexDirection={"column"}>
        <Text color={textColor} fontSize={"14px"} mb={2}>
          Payment Method
        </Text>
        <Select
          color={textColor}
          fontSize={"14px"}
          placeholder='All Payment Methods'
        >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Flex>
      <Flex mt={5} flex={1} justifyContent={"space-between"}>
        <Flex flex={0.4} mr={5} flexDirection={"column"}>
          <Text color={textColor} fontSize={"14px"} mb={2}>
            Fiat Currency
          </Text>
          <Flex
            h='10'
            borderRadius={"6px"}
            px={2}
            alignItems={"center"}
            justifyContent={"space-between"}
            border={`1px solid ${borderColor}`}
          >
            <Img src={USDLOGO} />
            <Text color={textColor} fontSize={"14px"}>
              USD
            </Text>
            <ChevronDownIcon color={textColor} />
          </Flex>
        </Flex>
        <Flex flex={1} flexDirection={"column"}>
          <Text color={textColor} fontSize={"14px"} mb={2}>
            Amount
          </Text>
          <InputGroup>
            <Input />
            <InputRightElement>
              <Flex
                borderRadius={"4px"}
                mr={44}
                border={`1px solid ${borderColor}`}
                p={1}
              >
                <Text color={textColor} fontSize={"14px"}>
                  NGN
                </Text>
              </Flex>
            </InputRightElement>
            <InputRightAddon
              bgColor={searchBgColor}
              color={searchColor}
              fontSize={"14px"}
              children='Search'
            />
          </InputGroup>
        </Flex>
      </Flex>
      <Flex mt={5} flexDirection={"column"}>
        <Text color={textColor} fontSize={"14px"} mb={2}>
          I want to pay
        </Text>
        <InputGroup>
          <Input />
          <InputRightElement>
            <Flex
              borderRadius={"4px"}
              mr={44}
              border={`1px solid ${borderColor}`}
              py={0.1}
              px={2}
              bgColor={allButtonBgColor}
            >
              <Text color={allButtonTextColor} fontSize={"14px"}>
                All
              </Text>
            </Flex>
          </InputRightElement>
          <InputRightAddon
            color={searchColor}
            fontSize={"14px"}
            children='NGN'
          />
        </InputGroup>
      </Flex>

      <Flex mt={5} flexDirection={"column"}>
        <Text color={textColor} fontSize={"14px"} mb={2}>
          I Will receive
        </Text>
        <InputGroup>
          <Input />

          <InputRightAddon
            color={searchColor}
            fontSize={"14px"}
            children='RGP'
          />
        </InputGroup>
      </Flex>
      <Flex justifyContent={"space-between"} mt={10}>
        <Flex
          borderRadius={"6px"}
          py={3}
          px={16}
          border={`1px solid ${resetColor}`}
        >
          <Text color={resetColor}>Reset</Text>
        </Flex>
        <Flex borderRadius={"6px"} py={3} px={16} bgColor={buyBgColor}>
          <Text color={buyColor}>Buy RGP</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BuySection;

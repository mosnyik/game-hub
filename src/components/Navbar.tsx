import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import logo from "../assets/logo.webp";
const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo} boxSize={"50px"} padding={"5px"} />
      <Text>Navbar</Text>
      <Button onClick={toggleColorMode}>Change Theme</Button>
    </HStack>
  );
};

export default Navbar;

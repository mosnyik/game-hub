import { HStack, Icon } from "@chakra-ui/react";
import { Switch } from "./ui/switch";
import { useColorMode } from "./ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorPalette="blue"
        size="lg"
        trackLabel={{
          on: (
            <Icon color="yellow.400">
              <FaSun />
            </Icon>
          ),
          off: (
            <Icon color="gray.400">
              <FaMoon />
            </Icon>
          ),
        }}
        onCheckedChange={toggleColorMode}
      >
        Dark Mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;

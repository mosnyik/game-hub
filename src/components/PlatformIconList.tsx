import {
  FaWindows,
  FaApple,
  FaXbox,
  FaAndroid,
  FaPlaystation,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../types/game-types";
import { IconType } from "react-icons";

interface Prop {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Prop) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendogamecube,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

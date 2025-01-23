import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiCommodore, SiNintendoswitch, SiSega } from "react-icons/si";

interface Props {
  platforms: Platform[];
}
const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendoswitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    sega: SiSega,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
  };

  return (
    <HStack marginY={2}>
      {platforms.map(
        (platform) => (
          console.log(platform),
          (
            <Icon
              key={platform.id}
              as={iconMap[platform.slug]}
              color="gray.500"
            />
          )
        )
      )}
    </HStack>
  );
};

export default PlatformIconsList;

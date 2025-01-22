import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const PlatformSelector = () => {
  const { data, error, loading } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">
          Platforms <LuChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {loading && <MenuItem value="">Loading...</MenuItem>}
        {data.map((platform: Platform) => (
          <MenuItem value={platform.slug}>{platform.name}</MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;

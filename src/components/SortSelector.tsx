import { Button } from "@chakra-ui/react/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";

import { LuChevronDown } from "react-icons/lu";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">
          Order by: Relevance
          <LuChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="">Relevance</MenuItem>
        <MenuItem value="added">Date Added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="released">Release Date</MenuItem>
        <MenuItem value="metacritic">Metacritic Rating</MenuItem>
        <MenuItem value="rating">Average Rating</MenuItem>
        {/* {loading && <MenuItem value="">Loading...</MenuItem>}
          {data.map((platform: Platform) => ( }
            <MenuItem
              key={platform.id}
              value={platform.slug}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))} */}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

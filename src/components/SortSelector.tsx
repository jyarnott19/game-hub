import { Button } from "@chakra-ui/react/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";

import { LuChevronDown } from "react-icons/lu";
const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date Added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release Date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average Rating" },
];
interface Props {
  onSelectSort: (sort: string) => void;
}
const SortSelector = ({ onSelectSort }: Props) => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">
          Order by: Relevance
          <LuChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectSort(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

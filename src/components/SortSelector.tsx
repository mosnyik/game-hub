import {
  Button,
  HStack,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm" marginBottom={1}>
          <HStack padding='0'>
            {<span> Order By: {currentSortOrder?.label || "Relevance"} </span>}
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent
        borderRadius={"5px"}
        zIndex="10"
        position="absolute"
       
      >
        {/* {isLoading && <PlatformSelectorSkeleton />}  */}
        {sortOrders.map((order) => (
          <MenuItem
            value={order.value}
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

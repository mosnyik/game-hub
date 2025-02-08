import { Button, HStack, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import PlatformSelectorSkeleton from "./PlatformSelectorSkeleton";

const SortSelector = () => {
//  const { data, error, isLoading } = usePlatforms();

//  if (error) return null;
 return (
   <MenuRoot>
     <MenuTrigger asChild>
       <Button variant="outline" size="sm" marginBottom={1}>
         <HStack>
           {/* {selectedPlatform ? selectedPlatform.name : <span>Platforms</span>} */}

           <BsChevronDown />
         </HStack>
       </Button>
     </MenuTrigger>
     <MenuContent position="absolute" zIndex="10" borderRadius={"5px"}>
       {/* {isLoading && <PlatformSelectorSkeleton />}  */}
       {/* {data.map((platform) => (
         <MenuItem
           value={platform.name}
           key={platform.id}
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

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardConatainer = ({ children }: Props) => {
  return (
    <Box width="250px" borderRadius={10} maxW={"sm"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardConatainer;

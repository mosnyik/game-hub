import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardConatainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={20} maxW={"sm"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardConatainer;

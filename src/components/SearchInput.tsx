import { useRef } from "react";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
            onSearch(ref.current.value);
          console.log("Sbumitted search", ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<BsSearch />} width={"100%"}>
        <Input
          borderRadius={20}
          placeholder="Search game..."
          variant={"outline"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

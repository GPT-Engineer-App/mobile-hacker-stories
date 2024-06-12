import { HStack, Button } from "@chakra-ui/react";

const FilterBar = ({ setFilter }) => {
  return (
    <HStack spacing={4} mb={4}>
      <Button onClick={() => setFilter("engineering")}>Engineering</Button>
      <Button onClick={() => setFilter("design")}>Design</Button>
      <Button onClick={() => setFilter("psychology")}>Psychology</Button>
      <Button onClick={() => setFilter("")}>All</Button>
    </HStack>
  );
};

export default FilterBar;
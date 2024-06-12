import { Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";

const StoryCard = ({ title, url, score, by }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={bg} width="100%">
      <Heading fontSize="xl">
        <Link href={url} isExternal>
          {title}
        </Link>
      </Heading>
      <Text mt={4}>Score: {score}</Text>
      <Text>By: {by}</Text>
    </Box>
  );
};

export default StoryCard;
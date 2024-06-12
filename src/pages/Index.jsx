import { useEffect, useState } from "react";
import { Container, VStack, useColorMode, Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import StoryCard from "../components/StoryCard";
import FilterBar from "../components/FilterBar";

const Index = () => {
  const [stories, setStories] = useState([]);
  const [filter, setFilter] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const fetchTopStories = async () => {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
      const storyIds = await response.json();
      const storiesPromises = storyIds.slice(0, 10).map(async (id) => {
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return await storyResponse.json();
      });
      const stories = await Promise.all(storiesPromises);
      setStories(stories);
    };

    fetchTopStories();
  }, []);

  const filteredStories = stories.filter((story) => {
    if (!filter) return true;
    const lowerTitle = story.title.toLowerCase();
    return lowerTitle.includes(filter);
  });

  return (
    <Container centerContent maxW="container.md" p={4}>
      <Button onClick={toggleColorMode} mb={4}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
      <FilterBar setFilter={setFilter} />
      <VStack spacing={4} width="100%">
        {filteredStories.map((story) => (
          <StoryCard key={story.id} title={story.title} url={story.url} score={story.score} by={story.by} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
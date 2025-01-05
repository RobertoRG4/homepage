import { Box, Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

const WorksItem = ({ title, url, description, categoria, id }) => {
  return (
    <Box maxWidth="300px" textAlign="center" marginY="20px" marginX="20px">
      <LinkBox display="flex" flexDirection="column" alignItems="center">
        <Image
          width="300px"
          height="200px"
          borderRadius="10px"
          src={url}
          alt={title}
          loading="lazy"
        />
        <LinkOverlay href={`/${categoria}/${id}`}>
          <Text as="h2" fontSize="x-large" fontWeight="bold" color="#fff">
            {title}
          </Text>
          <Text as="p" color="#fff" fontWeight="bold">
            {description}
          </Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
};
export default WorksItem;

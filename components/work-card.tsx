import { Box, Heading, HStack, Link, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import Image from "next/image";

type Props = {
  title: string;
  image: StaticImageData;
  url: string;
  tags: string[];
  description: string;
};

export default function WorkCard({
  title,
  image,
  url,
  tags,
  description,
}: Props) {
  return (
    <Box
      w={["100%", "480px"]}
      border="1px"
      borderColor="gray.200"
      borderRadius="4px"
      overflowY="hidden"
    >
      <Box w="100%" h="240px" overflowY="hidden">
        <Image src={image} alt="作品の画像" />
      </Box>
      <Box p="24px">
        <Heading size="md" mb="12px">
          {title}
        </Heading>
        <Link color="cyan.700" href={url}>
          {url}
        </Link>
        <Text mt="12px">{description}</Text>
        <HStack spacing="12px" mt="12px">
          {tags.map((tag) => (
            <Tag key={tag} colorScheme="cyan">
              {tag}
            </Tag>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}

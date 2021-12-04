import { IconButton } from "@chakra-ui/button";
import {
  Box,
  Center,
  Circle,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Image from "next/image";
import profilePic from "../public/profile.webp";
import hobby1 from "../public/hobby1.jpg";
import hobby2 from "../public/hobby2.jpg";
import {
  BsFacebook,
  BsGithub,
  BsLink,
  BsTwitter,
  BsLaptop,
  BsServer,
} from "react-icons/bs";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { ListIcon } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container pb="48px" maxWidth="60%">
      <Flex pt="48px" width="50%" alignItems="center">
        <Circle w="120px" h="120px" overflow="hidden">
          <Image src={profilePic} alt="プロフィール写真" />
        </Circle>
        <Box ml="18px">
          <Heading>山田太郎</Heading>
          <Text mt="8px">フリーランス</Text>
          <Stack mt="8px" direction="row" spacing={4}>
            <IconButton aria-label="Twitterへのリンク" icon={<BsTwitter />} />
            <IconButton aria-label="Facebookへのリンク" icon={<BsFacebook />} />
            <IconButton aria-label="GitHubへのリンク" icon={<BsGithub />} />
            <IconButton aria-label="サイトへのリンク" icon={<BsLink />} />
          </Stack>
        </Box>
      </Flex>
      <Box mt="48px">
        <Heading size="md" mb="12px">
          自己紹介
        </Heading>
        <Text>
          2000年生まれ。座右の銘は「継続は力なり」です。大学では経済学部に所属しマクロ経済について勉強しています。昨年よりプログラミング学習を始め、Rect、Next.jsを用いたアプリ開発を得意としています。
        </Text>
      </Box>
      <Box mt="48px" mb="36px">
        <Heading size="md" mb="12px">
          スキルセット
        </Heading>
        <List>
          <ListItem fontSize="md">
            <ListIcon as={DiJavascript1} color="cyan.600" />
            JavaScript
          </ListItem>
          <ListItem fontSize="md">
            <ListIcon as={SiTypescript} color="cyan.600" />
            TypeScript
          </ListItem>
          <ListItem fontSize="md">
            <ListIcon as={DiReact} color="cyan.600" />
            React
          </ListItem>
          <ListItem fontSize="md">
            <ListIcon as={BsLaptop} color="cyan.600" />
            Next.js
          </ListItem>
          <ListItem fontSize="md">
            <ListIcon as={BsServer} color="cyan.600" />
            Firebase(Cloud Firestore, Authentication)
          </ListItem>
        </List>
      </Box>
      <Box mt="48px" mb="36px">
        <Heading size="md" mb="12px">
          経歴
        </Heading>
        <UnorderedList>
          <ListItem>2000年埼玉県生まれ</ListItem>
          <ListItem>2018年4月 一橋大学経済学部入学</ListItem>
          <ListItem>2022年4月 株式会社ホゲホゲ開発部入社</ListItem>
          <ListItem>2021年8月 株式会社ホゲホゲ退社</ListItem>
          <ListItem>2021年9月 株式会社フガフガ研究開発部入社</ListItem>
        </UnorderedList>
      </Box>
      <Box mt="48px">
        <Heading size="md" mb="12px">
          趣味
        </Heading>
        <HStack spacing="18px">
          <Box
            w="100%"
            border="1px solid"
            borderColor="gray.100"
            borderRadius="4px"
            overflow="hidden"
            boxShadow="sm"
          >
            <Box>
              <Image alt="趣味の写真" src={hobby1} objectFit="cover" />
            </Box>
            <Box p="24px">
              犬と猫を2匹ずつ飼っているので一緒に過ごすのが好きです。
            </Box>
          </Box>
          <Box
            w="100%"
            border="1px solid"
            borderColor="gray.100"
            borderRadius="2px"
            overflow="hidden"
            boxShadow="sm"
          >
            <Box>
              <Image alt="趣味の写真" src={hobby2} objectFit="cover" />
            </Box>
            <Box p="24px">
              サッカー歴15年です。中学の時に全国大会に出場しました。
            </Box>
          </Box>
        </HStack>
      </Box>
    </Container>
  );
};

export default Home;

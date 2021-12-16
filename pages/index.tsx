import { IconButton } from "@chakra-ui/button";
import Link from "next/link";
import {
  Box,
  Circle,
  Container,
  Flex,
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
import profile from "../public/profile2.png";
import animal from "../public/animal.png";
import soccer from "../public/soccer.png";
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
    <Container pb="48px" maxWidth={["85%", "60%"]}>
      <Stack
        pt="48px"
        width={["100%", "45%"]}
        direction={["column", "row"]}
        alignItems="center"
        justifyContent="space-between"
      >
        <Circle w="160px" h="160px" overflow="hidden">
          <Image src={profile} alt="プロフィール写真" />
        </Circle>
        <Box>
          <Heading>青野耀慈</Heading>
          <Text mt="8px">フロントエンドエンジニア</Text>
          <Stack mt="8px" direction="row" spacing={4}>
            <a
              href="https://twitter.com/gooner_kapi"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="Twitterへのリンク" icon={<BsTwitter />} />
            </a>
            <a
              href="https://github.com/perio29"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="githubへのリンク" icon={<BsGithub />} />
            </a>
          </Stack>
        </Box>
      </Stack>

      <Box mt="48px">
        <Heading size="md" mb="12px">
          自己紹介
        </Heading>
        <Text>
          1999年生まれ。座右の銘は「正しさよりも楽しさを」です。大学では獣医になるための勉強をしていて、伝染病学研究室に所属しています。2021年からプログラミング学習を始め、React、Next.jsを用いたアプリ開発を得意としています。
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
          <ListItem>1999年神奈川県生まれ</ListItem>
          <ListItem>2018年4月 麻布大学獣医学部獣医学科入学</ListItem>
          <ListItem>2024年3月 麻布大学獣医学部獣医学科卒業予定</ListItem>
        </UnorderedList>
      </Box>
      <Box mt="48px">
        <Heading size="md" mb="12px">
          趣味
        </Heading>
        <Stack direction={["column", "row"]} spacing="18px">
          <Box
            w="100%"
            border="1px solid"
            borderColor="gray.100"
            borderRadius="4px"
            overflow="hidden"
            boxShadow="sm"
          >
            <Box>
              <Image alt="趣味の写真" src={animal} width={477} height={400} />
            </Box>
            <Box p="24px">犬と猫を3匹ずつ飼っていて、動物が好きです。</Box>
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
              <Image alt="趣味の写真" src={soccer} width={477} height={400} />
            </Box>
            <Box p="24px">
              サッカー歴15年です。大学でもサッカーをしています。
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;

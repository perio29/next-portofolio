import { Flex, Grid, HStack } from "@chakra-ui/layout";
import WorkCard from "../components/work-card";
import work1 from "../public/work1.png";
import work2 from "../public/work2.png";

export default function Works() {
  return (
    <HStack spacing="24px" p="48px" alignItems="flex-start">
      <WorkCard
        title="チャットアプリ"
        image={work1}
        url="https://react-chat-d27d0.web.app
        "
        tags={["JavaScript", "React", "Firebase"]}
        description="チャットのアプリを作りました"
      />
      <WorkCard
        title="ペット健康管理アプリ"
        image={work2}
        url="https://pets-health-care.web.app"
        tags={["TypeScript", "React", "Firebase"]}
        description="ペットの健康を管理するアプリを作りました"
      />
    </HStack>
  );
}

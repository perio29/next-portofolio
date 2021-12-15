import { Flex, Grid, Stack, Box } from "@chakra-ui/layout";
import WorkCard from "../components/work-card";
import work1 from "../public/work1.png";
import work2 from "../public/work2.png";
import work3 from "../public/work3.png";

export default function Works() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="24px"
      p="48px"
      alignItems="flex-start"
      justifyContent={["center", "center"]}
    >
      <WorkCard
        title="チャットアプリ"
        image={work1}
        url="https://react-chat-d27d0.web.app
        "
        tags={["JavaScript", "React", "Firebase"]}
        description="このアプリを作成した理由は、チャット機能がinstagramやtwitterなどのSNSやLINEなどのメッセージアプリでも使用されているため、優れたアウトプットになると思ったからです。使用した技術はReactとfirebaseで、スタイリングはstyled-componentsを使用しました。ログイン機能をfirebase authenticationで行い、ユーザーの情報やチャットのメッセージはfirebase firestoreで追加、取得をしました。ドキュメントの取得をfirestoreのリアルタイムアップデートで実装することで、最初の呼び出しでドキュメントスナップショットが作成され、ドキュメントのコンテンツが変更されるたびに、ドキュメントスナップショットが更新されるため、データの取得を容易にしました。"
      />

      <WorkCard
        title="ペット健康管理アプリ"
        image={work2}
        url="https://pets-health-care.web.app"
        tags={["TypeScript", "React", "Firebase"]}
        description="このアプリを作成した理由は、自分自身動物を飼っていて、ペットの体重や診療履歴を記録することは、ペットの健康を守ることに繋がると考えたからです。使用した技術はReact,firebase,TypeScriptで、スタイリングはmaterial uiを使用しました。ログイン機能はfirebase authenticationで実装し、ユーザー情報やペット情報はfirebase firestoreでデータの追加、取得をしました。このアプリでは、TypeScriptを導入し、型宣言を行うことで安全なアプリケーションを作成しました。また、ログインユーザーのIDは複数のコンポーネントで使用するため、カスタムフックを作成することで、ログインユーザーのIDを取得するというロジックを複数のコンポーネントで再利用可能にしました。"
      />

      <WorkCard
        title="ポートフォリオサイト"
        image={work3}
        url="https://next-portfolio-nine-opal.vercel.app"
        tags={["TypeScript", "Next.js"]}
        description="作品を掲載するために、ポートフォリオサイトを作りました。使用技術はNext.js、TypeScriptで、スタイリングはChakra UIを使用しました。"
      />
    </Stack>
  );
}

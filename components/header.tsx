import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <Stack
      w="100%"
      h="64px"
      direction="row"
      spacing={4}
      align="center"
      borderBottom="1px"
      borderColor="gray.100"
      pl="48px"
      boxShadow="base"
    >
      <Button
        variant="ghost"
        size="sm"
        color="cyan.600"
        onClick={() => router.push("/")}
      >
        プロフィール
      </Button>
      <Button
        variant="ghost"
        size="sm"
        color="cyan.600"
        onClick={() => router.push("/works")}
      >
        作品
      </Button>
    </Stack>
  );
}

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { GithubRepo } from "../types/types";
function GithubCard({
  repo,
  username,
}: {
  repo: GithubRepo;
  username: string;
}) {
  const { theme } = useTheme();

  const cardStyle = theme === 'light' ? { backgroundColor: 'lightgrey' } : {};
  const glowClass = theme === "dark" ? "glow" : "glow-light";
  return (
    <Card
      shadow="sm"
      // className="max-w-[400px]"
      style={cardStyle}
      isPressable
      onPress={() => (window.location.href = repo.html_url)}
    >
      <CardHeader className="flex-col items-center">
        {repo.name.toUpperCase()}
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{repo.description}</p>
      </CardBody>
      <Divider />
      <CardFooter className="flex-col items-end">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className={glowClass}
        >
          Visit my GitHub page
        </a>
      </CardFooter>
    </Card>
  );
}

export default GithubCard;

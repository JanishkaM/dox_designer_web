import PostData from "@/data/Posts";
import PageCover from "@/components/PageCover";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const navigate = useNavigate();

  const handlePostLink = (title: string, link: string) => {
    ReactGA.event({
      category: "Post",
      action: `Post Clicked:+${title}`,
    });
    navigate(link);
  };

  return (
    <main>
      <PageCover title="Posts" des="Posts that offers you great assistance." />
      <section className="py-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PostData.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-video object-cover mb-3"
                />
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  className="text-sm"
                  onClick={() => handlePostLink(post.title, post.link)}
                >
                  See More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

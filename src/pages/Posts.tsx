import PostData from "@/data/Posts";
import PageCover from "@/components/PageCover";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Posts() {
  return (
    <main>
      <PageCover title="Posts" des="Posts that offers you great assistance." />
      <section className="py-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PostData.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <img src={post.image} alt={post.title} className="aspect-video object-cover mb-3"/>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to={`${post.link}`}>
                  <Button className="text-sm">See More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

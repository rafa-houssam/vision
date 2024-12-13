import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development for 2024 and beyond.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    date: "March 15, 2024",
  },
  {
    title: "Mastering React Performance",
    excerpt: "Tips and tricks for optimizing your React applications for better performance.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    date: "March 10, 2024",
  },
  {
    title: "Building Accessible Web Apps",
    excerpt: "A comprehensive guide to making your web applications accessible to everyone.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    date: "March 5, 2024",
  },
];

export function BlogPosts() {
  return (
    <section id="blog" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Read more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
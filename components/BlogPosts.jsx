import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    readTime: "5 min read",
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Essential techniques and best practices for building high-performance React applications.",
    date: "April 10, 2024",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    readTime: "7 min read",
  },
  {
    title: "Building Scalable Backend Systems",
    excerpt: "A comprehensive guide to designing and implementing scalable backend architectures.",
    date: "April 5, 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    readTime: "6 min read",
  },
];

const BlogPosts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">From My Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights and articles about web development, technology, and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-colors"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
import BlogCard from "../components/ui/BlogCard";
import { blogPosts } from "../components/data/blogPosts";

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const related = blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 6);

  return (
    <section className="bg-[#F5F7FB] py-20">
      <div className="max-w-6xl mx-auto px-4">

        <h3 className="text-3xl font-bold text-[#401AB2] mb-10 text-center">
          Leia também
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {related.map((post, i) => (
            <div
              key={post.slug}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              data-aos-duration="1000"
            >
              <BlogCard
                image={post.image}
                title={post.title}
                desc={post.desc}
                link={`/blog/${post.slug}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

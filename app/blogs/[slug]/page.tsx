import { notFound } from "next/navigation";
import { blogs } from "../data";
import { marked } from "marked";
import Head from "next/head";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

// This function is used to generate static paths for your dynamic routes
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const BlogDetail = ({ params }: BlogDetailProps) => {
  // Find the blog by the slug provided in the URL
  const blog = blogs.find((blog) => blog.slug === params.slug);

  // If no blog is found, return a 404 page
  if (!blog) {
    return notFound();
  }

  // Convert the Markdown content to HTML
  const contentHTML = marked(blog.content || "");
  const canonicalUrl = `https://www.zahads.com/blog/${blog.slug}`;

  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description || ""} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description || ""} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={blog.image || "https://zahads.com/default-image.jpg"}
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description || ""} />
        <meta
          name="twitter:image"
          content={blog.image || "https://zahads.com/default-image.jpg"}
        />
      </Head>
      <div className="md:px-[160px] md:py-12 text-justify max-sm:p-6 max-sm:pt-[150px] md:pt-[150px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[1024px] h-[360px] ml-auto mr-auto rounded-xl my-6 object-cover"
        />
        <h1 className="text-start leading-tight pb-2 font-bold md:text-[2.1rem] max-sm:text-[1.5rem]">
          {blog.title}
        </h1>
        <div>
          <p
            className="blogContent prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

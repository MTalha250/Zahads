import BlogCard from "./Card";
import React from "react";
import { blogPosts } from "@/data";
import { blogs } from "@/app/blogs/data";
import Link from "next/link";
// import { to } from './../../../.next/server/vendor-chunks/next';

const Bloglist = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:px-32">
        {blogs.slice(blogs.length - 3, blogs.length).map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            image={post.image}
            description={post.description}
            link={"/blogs/" + post.slug}
          />
        ))}
      </div>
      <Link href='/blogs' >
      <button className="text-white bg-primary py-4 mt-5 px-8 text-lg rounded">
        Visit Our Blog
      </button>
      </Link>
    </div>
  );
};

export default Bloglist;
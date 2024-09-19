"use client"; // This directive marks the file as a Client Component

import { useState, useEffect } from "react";
import Link from "next/link";
import { blogs } from "./data";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const BlogList: React.FC = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(9);
  const [loading, setLoading] = useState(false);

  const reversedBlogs = [...blogs].reverse();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 &&
        !loading &&
        visibleBlogs < reversedBlogs.length
      ) {
        setLoading(true);
        setTimeout(() => {
          setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 9);
          setLoading(false);
        }, 700);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, visibleBlogs, reversedBlogs.length]);

  return (
    <>
      <div className="md:px-[60px] pt-[150px] pb-6 max-sm:px-1 flex justify-center flex-col">
        <h1 className="text-center font-bold text-[2rem] py-4">Blogs</h1>
        <div className="flex justify-center flex-grow-0 gap-6 flex-wrap">
          {reversedBlogs.slice(0, visibleBlogs).map((blog: Blog) => (
            <div
              key={blog.id}
              className="rounded-lg md:w-[330px] max-sm:w-[280px] shadow-lg hover:shadow-2xl transition-all mb-4"
            >
              <Link href={`/blogs/${blog.slug}`}>
                <img
                  src={blog.image}
                  className="rounded-t-lg h-[200px] w-[400px] object-fit"
                  alt={blog.title}
                />
                <div className="p-3 pt-3">
                  <h2 className="font-semibold text-[1.4rem]">{blog.title}</h2>
                  <p className="text-[.85rem]">{blog.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {loading && visibleBlogs < reversedBlogs.length && (
          <div className="flex justify-center mt-6">
            <div className="loader">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
        }
        .bar {
          width: 4px;
          height: 70%;
          margin: 0 2px;
          background: #B2923C;
          border-radius: 100px;
          animation: pulse 1.2s infinite ease-in-out;
        }
        .bar:nth-child(1) {
          animation-delay: -1.2s;
        }
        .bar:nth-child(2) {
          animation-delay: -1.1s;
        }
        .bar:nth-child(3) {
          animation-delay: -1.0s;
        }
        .bar:nth-child(4) {
          animation-delay: -0.9s;
        }
        .bar:nth-child(5) {
          animation-delay: -0.8s;
        }
        @keyframes pulse {
          0%, 40%, 100% {
            transform: scaleY(1);
          }
          20% {
            transform: scaleY(1.5);
          }
        }
      `}</style>
    </>
  );
};

export default BlogList;

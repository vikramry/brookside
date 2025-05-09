"use client";
import React from "react";
import blogsJsonData from "../app/blog/blogs.json";

export default function LatestBlogs() {
    return (
 
 <div className="col-span-12 md:col-span-3 p-4 ">
<div className="border p-2">
  <h2 className="font-semibold text-xl">Our Latest Blogs</h2>
</div>
<div className="mb-2">
  {blogsJsonData
    .sort((a, b) => b.id - a.id) // Sort by id (latest first)
    .slice(0, 5)
    .map((blog) => (
      <div
        key={blog.id}
        className="bg-white shadow-md rounded-lg overflow-hidden mb-2"
      >
        <a
          href={blog.link}
          className="inline-block px-4 py-2 rounded-md "
        >
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-36 object-cover"
          />
          <h5 className="text-sm font-semibold p-2">{blog.title}</h5>
        </a>
      </div>
    ))}
</div>
</div>
 
    );
    }

 
 
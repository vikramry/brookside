import React from "react";
import blogsdata from "./blogs.json";
export const metadata = {
  title: "Insightful Blogs | Brookside Global",
  description:
    "Discover engaging blogs from Brookside Global School, covering education, student growth, school events, and insights into holistic learning experiences.",
  keywords:
    "Best Primary School in Kondapur - Hyderabad, Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad, Best Play Group in Kondapur, Best Kindergarten in Kondapur, Best School in kondapur",
};
function BlogPage() {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogsdata.sort((a, b) => b.id - a.id) // Sort by id (latest first)
               .map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h5 className="text-xl font-semibold mb-2">{blog.title}</h5>
                  <p className="text-gray-700 text-sm mb-4">
                  {blog.description.split(" ").slice(0, 30).join(" ")}...
                  </p>
                  <a
                    href={blog.link}
                    className="bg-orMain text-black font-roboto px-4 py-2 rounded text-xs font-boldinline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* latest Blogs */}
        <div className="col-span-3 p-4 ">
          <div className="border p-2">
            <h2 className="font-semibold text-xl">Our Latest Blogs</h2>
          </div>
          <div className="mb-2">
            {blogsdata
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
      </div>
    </div>
  );
}

export default BlogPage;

import React from "react";
import blogsdata from "./blogs.json";
export const metadata = {
  title: 'Insightful Blogs | Brookside Global',
  description: 'Discover engaging blogs from Brookside Global School, covering education, student growth, school events, and insights into holistic learning experiences.',
  keywords:"Best Primary School in Kondapur - Hyderabad, Best Primary School in Hyderabad, Best Pre Primary Schools in Hyderabad, Best Play Group in Kondapur, Best Kindergarten in Kondapur, Best School in kondapur"
}
function BlogPage() {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsdata.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h5 className="text-xl font-semibold mb-2">{blog.title}</h5>
              <p className="text-gray-700 text-sm mb-4">
                {blog.description}
              </p>
              <a
                href={blog.link}
                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;

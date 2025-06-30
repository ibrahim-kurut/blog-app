import Image from "next/image";

const PostCard = () => {
  const posts = [
    {
      id: 1,
      title: "Post Title 1",
      createdat: "2023-10-01",
      img: "/assets/hero.jpg", // Replace with actual image path
      content: "This is the content of post 1.",
    },
    {
      id: 2,
      title: "Post Title 2",
      createdat: "2023-10-01",
      img: "/assets/hero.jpg", // Replace with actual image path
      content: "This is the content of post 2.",
    },
    {
      id: 3,
      title: "Post Title 3",
      createdat: "2023-10-01",
      img: "/assets/hero.jpg", // Replace with actual image path
      content: "This is the content of post 3.",
    },
    {
      id: 4,
      title: "Post Title 4",
      createdat: "2023-10-01",
      img: "/assets/hero.jpg", // Replace with actual image path
      content: "This is the content of post 4.",
    },
  ];
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="max-w-sm mx-auto my-4 p-4 border rounded-lg shadow-lg"
        >
          <div className="relative w-full h-48">
            <Image
              src={post.img || "/assets/hero.jpg"} // Fallback image
              alt={post.title}
              fill
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-xl font-bold mt-2">{post.title}</h2>
          <p className="text-gray-500 text-sm mt-1">
            {new Date(post.createdat).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mt-1">{post.content}</p>
          <div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-200">
              show more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;

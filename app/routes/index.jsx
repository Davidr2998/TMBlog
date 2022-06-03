import { Link, useLoaderData } from "@remix-run/react";
import Post from "../components/Post";
import { db } from "../services/db";

export const loader = async () => {
  const findPosts = await db.post.findMany();
  const posts = findPosts.slice(-3);
  return {
    posts,
  };
};
export default function Index() {
  const { posts } = useLoaderData();
  return (
    <div>
      <h1>Remix Blog 🎸</h1>
      <nav>
        <ul>
          <li>
            <Link to="/posts/create">Crear un post</Link>
          </li>
          <li>
            <Link to="/posts">Todos los posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h4>Post recientes</h4>
      {posts.map(({ id, title, body }) => (
        <Post key={id} title={title} body={body} id={id} />
      ))}
    </div>
  );
}

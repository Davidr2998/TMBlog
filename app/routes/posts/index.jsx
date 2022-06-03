import { Link, useLoaderData } from "@remix-run/react";
import Post from "../../components/Post/index.jsx";
import { db } from "../../services/db.js";

export const loader = async () => {
  const posts = await db.post.findMany();

  return {
    posts,
  };
};

export default function Index() {
  const { posts } = useLoaderData();
  return (
    <div>
      <h1>Lista de posts</h1>
      <nav>
        <ul>
          <li>
            <Link to="/posts/create">Crear un post</Link>
          </li>
          <li>
            <Link to="/about">Ir a about</Link>
          </li>
        </ul>
      </nav>

      {posts.map(({ title, body, id }) => (
        <Post key={id} title={title} body={body} id={id} />
      ))}
    </div>
  );
}

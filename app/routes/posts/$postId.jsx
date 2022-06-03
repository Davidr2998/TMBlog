import { useLoaderData } from "@remix-run/react";
import { db } from "../../services/db";

export const loader = async ({ params }) => {
  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
  });
  return { post };
};

export default function SinglePost() {
  const { post } = useLoaderData();
  return (
    <div
      style={{
        backgroundColor: "#eee",
        borderRadius: "15px",
        padding: "5px 20px",
      }}
    >
      <h2 style={{ margin: "0", color: "#F0A902" }}>{post.title}</h2>
      <p style={{ color: "#212121" }}>{post.body}</p>
    </div>
  );
}

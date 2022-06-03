import { Link } from "@remix-run/react";

export default function Post({ title, body, id }) {
  return (
    <div
      key={id}
      style={{
        backgroundColor: "#eee",
        borderRadius: "15px",
        padding: "5px 20px",
        marginBottom: "10px",
      }}
    >
      <h2 style={{ margin: "0", color: "#F0A902" }}>{title}</h2>
      <p style={{ color: "#212121" }}>{body}</p>
      <Link to={`/posts/${id}`}>
        <small style={{ color: "#ababab" }}>Ver mas</small>
      </Link>
    </div>
  );
}

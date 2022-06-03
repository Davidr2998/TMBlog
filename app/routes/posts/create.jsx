import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { db } from "../../services/db";

const badRequest = (data) => {
  return json(data, { status: 400 });
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const fieldErrors = {
    title: title.length < 3 ? "Title must be longer than 3 characters" : null,
    body: body.length < 10 ? "Body must be longer than 10 characters" : null,
  };

  const hasErrors = Object.values(fieldErrors).some(Boolean);

  const fields = { body, title };

  if (hasErrors) {
    return badRequest({ fieldErrors, fields });
  }

  const post = await db.post.create({ data: fields });

  return redirect(`/posts/${post.id}`);
};

export function ErrorBoundary({ error }) {
  return (
    <div>
      <strong>😕 Algo salio mal</strong>
      <span style={{ color: "red" }}>{error.message}</span>
    </div>
  );
}

export default function CreatePost() {
  const { state } = useTransition();

  const actionData = useActionData();
  console.log(actionData);
  const { fieldErrors } = actionData ?? {};
  const { title: titleError, body: bodyError } = fieldErrors ?? {};

  return (
    <>
      <h2>Create new post</h2>
      <Form method="POST" disabled={state === "submitting"}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            placeholder="Title of the post"
            type="text"
            id="title"
            name="title"
          />
          {titleError && (
            <p>
              <small style={{ color: "red" }}>{titleError}</small>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <br />
          <input
            placeholder="Content of post"
            type="text"
            id="body"
            name="body"
          />
          {bodyError && (
            <p>
              <small style={{ color: "red" }}>{bodyError}</small>
            </p>
          )}
        </div>

        <button type="submit">
          {state === "submitting" ? "Wait for it..." : "Create new post"}
        </button>
      </Form>
    </>
  );
}

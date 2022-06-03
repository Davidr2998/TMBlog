import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from "~/styles/global.css";

export const meta = () => ({
  charset: "utf-8",
  title: "TMRemix 🎹",
  viewport: "width=device-width,initial-scale=1",
});

function Layout() {
  return (
    <main>
      <header>
        <Link to="/">Inicio 🚀</Link>
      </header>
      <Outlet />
      <footer>Todos los derechos libres ®️</footer>
    </main>
  );
}

export const links = () => [
  {
    rel: "stylesheet",
    href: globalStyles,
  },
  {
    rel: "stylesheet",
    href: "https://cdn.simplecss.org/simple.min.css",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

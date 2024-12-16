import Layout from "./_layout";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "portfolio page" },
    { name: "description", content: "Welcome to portfolio page with remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Layout />
    </>
  );
}


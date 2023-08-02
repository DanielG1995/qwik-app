import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";




export default component$(() => {
  return (
    <>
      Dashboard
    </>
  );
});

export const head: DocumentHead = {
  title: "Login",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

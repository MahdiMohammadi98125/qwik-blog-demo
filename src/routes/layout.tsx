import { component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/Header/Header";

export default component$(() => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main class="container">
        <Slot />
      </main>
      <footer class="text-white">@mario life all right reserved 2023</footer>
    </>
  );
});

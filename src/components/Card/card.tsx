import { Slot, component$ } from "@builder.io/qwik";

export const Card = component$(() => {
  return (
    <div class="bg-white shadow-md rounded p-4 ">
      <div class="mb-2 pb-2 border-b-2 border-gray-100 text-black">
        <Slot name="title" />
      </div>
      <div class="my-2">
        <Slot name="content" />
      </div>
      <div class="mt-6 text-center text-black">
        <Slot name="footer" />
      </div>
    </div>
  );
});

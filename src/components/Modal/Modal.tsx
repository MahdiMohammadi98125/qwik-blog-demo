import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import modalStyles from "./modal.css?inline";
import type { PropFunction } from "@builder.io/qwik";

interface modalProps {
  size: "sm" | "lg";
  frosted?: boolean;
  close: PropFunction<() => void>;
}

export default component$(({ size, frosted, close }: modalProps) => {
  useStylesScoped$(modalStyles);

  return (
    <div class={`modal ${size}  ${frosted && "frosted"}`}>
      <div class={`modal-content`}>
        <div class="close" onClick$={close}>
          close
        </div>
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  );
});

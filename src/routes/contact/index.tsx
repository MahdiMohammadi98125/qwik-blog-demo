import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import contactStyles from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(contactStyles);
  const isFormVisible = useSignal(false);
  const formState = useStore({ name: "", message: "" });
  return (
    <article>
      <h1 id="getting-started">Contact us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        soluta iusto ex illum aut reiciendis repellendus commodi, explicabo
        laboriosam tempore eos cumque. Facilis reprehenderit eius ab impedit
        quas dolorem hic!
      </p>
      <button onClick$={() => (isFormVisible.value = true)}>Contact</button>
      {isFormVisible.value && (
        <form
          preventdefault:submit
          onSubmit$={() => {
            console.log(formState.name, formState.message);
          }}
        >
          <label>
            <span>Your name:</span>
            <input
              value={formState.name}
              type="text"
              onInput$={(e) => {
                formState.name = (e.target as HTMLInputElement).value;
              }}
            />
          </label>
          <label>
            <span>Your message:</span>
            <textarea
              value={formState.message}
              onInput$={(e) => {
                formState.message = (e.target as HTMLInputElement).value;
              }}
            ></textarea>
          </label>
          <button>Send</button>
        </form>
      )}
    </article>
  );
});

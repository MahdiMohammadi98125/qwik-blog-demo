import { component$, useSignal, useStylesScoped$, $ } from "@builder.io/qwik";
import aboutStyle from "./about.css?inline";
import Modal from "~/components/Modal/Modal";

export default component$(() => {
  const modalVisible = useSignal(false);
  const closeModal = $(() => {
    modalVisible.value = false;
  });
  useStylesScoped$(aboutStyle);
  return (
    <article>
      <h1 id="getting-started">Getting Started</h1>
      <p>
        Qwik is a framework for building web applications that can be rendered
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        soluta iusto ex illum aut reiciendis repellendus commodi, explicabo
        laboriosam tempore eos cumque. Facilis reprehenderit eius ab impedit
        quas dolorem hic!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        soluta iusto ex illum aut reiciendis repellendus commodi, explicabo
        laboriosam tempore eos cumque. Facilis reprehenderit eius ab impedit
        quas dolorem hic!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        soluta iusto ex illum aut reiciendis repellendus commodi, explicabo
        laboriosam tempore eos cumque. Facilis reprehenderit eius ab impedit
        quas dolorem hic!
      </p>
      <button onClick$={() => (modalVisible.value = true)}>open modal</button>
      {modalVisible.value && (
        <Modal size="sm" frosted={true} close={closeModal}>
          <div>some modal content</div>
          <div q:slot="content">
            <h3>Great News!!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              aspernatur itaque praesentium quasi aut culpa? Maiores enim
              repellendus inventore eius alias, impedit sit fugiat laudantium
              nobis at illum ipsum non.
            </p>
          </div>
          <div q:slot="footer">
            <button>Sign up now!</button>
          </div>
        </Modal>
      )}
    </article>
  );
});

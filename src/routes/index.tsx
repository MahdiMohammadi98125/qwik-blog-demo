import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/Card/card";

export default component$(() => {
  const comment = useResource$(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = res.json();

    return data;
  });

  return (
    <>
      <Resource
        value={comment}
        onPending={() => <p>loading...</p>}
        onResolved={(comments) => (
          <div class="blogs">
            {comments.map(
              (comment: { name: string; body: string; id: number }) => (
                <Card key={comment.id}>
                  <h1 q:slot="title">{comment.name}</h1>
                  <p q:slot="content">{comment.body.slice(0, 50) + "..."}</p>
                  <Link href={"/blog/" + comment.id} q:slot="footer">
                    Read More
                  </Link>
                </Card>
              )
            )}
          </div>
        )}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "a blog site about everything Super Mario related",
    },
  ],
};

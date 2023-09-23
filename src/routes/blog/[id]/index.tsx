import { routeLoader$ } from "@builder.io/qwik-city";
import { Resource, component$, useResource$ } from "@builder.io/qwik";

export const userId = routeLoader$(async (requestEvent) => {
  return requestEvent.params.id;
});

export default component$(() => {
  const id = userId();
  console.log(id.value);

  const comment = useResource$(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id.value}`
    );

    const data = res.json();
    return data;
  });

  return (
    <Resource
      value={comment}
      onPending={() => <p>loading...</p>}
      onResolved={(user) => (
        <div
          key={user.id}
          class="rounded-md shadow-emerald-50 p-4 max-w-[500px] ml-auto mr-auto"
        >
          <h1>{user.name}</h1>
          <a href="#">{user.email}</a>
          <p>{user.body}</p>
        </div>
      )}
    />
  );
});

import { component$, useStyles$ } from "@builder.io/qwik";
import headerStyles from "./Header.css?inline";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  useStyles$(headerStyles);
  return (
    <header>
      <nav>
        <img
          src="../../../public/mario_block.jpeg"
          alt="mario life"
          width={50}
          height={50}
        />
        <h1>Mario Life</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

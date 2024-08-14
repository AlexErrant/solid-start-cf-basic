import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { clientOnly } from '@solidjs/start'

const ClientCounter = clientOnly(
	async () => await import('~/components/Counter'),
)


export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <div>
         Plain Counter:
        <Counter />
      </div>
      <div>
        Client Counter:
        <ClientCounter />
      </div>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

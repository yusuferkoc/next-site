import Layout from "../components/Layout";
import Head from "next/head";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <ul>
        {characters.results.map(character => (
          <li key={character.id}>
            <Link href="/character/[id]" as={'/character/$ {character.id}'}>
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h1>.</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/');
  const characters = await data.json();

  return {
    props: {
      characters,
    },
  };
}
export default HomePage;

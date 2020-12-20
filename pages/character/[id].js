import Layout from "../../components/Layout";
import Head from "next/head";
import unfetch from "isomorphic-unfetch";
function CharacterDetails({ character }) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <div>hi</div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();

  const paths = characters.results.map((character) => {
    return { params: { id: "${character.id}" } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await unfetch(
    "https://rickandmortyapi.com/api/character/" + params.id
  );
  const characters = await data.json();

  return {
    props: {
      characters,
    },
  };
}
export default CharacterDetails;

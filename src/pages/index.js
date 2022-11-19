import { About, CategoryGrid } from "@components/common";
import { Hero } from "@components/ui";
import { FeaturedProducts } from "@components/home";

import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient(process.env.GRAPHCMS_API);

const query = `
  query HomepageQuery{
    categories {
      name
      image {
        url
      }
      slug
    }
    info(where: {id: "cktsl7960fynm0b605xp188nl"}) {
      description
      image {
        url
      }
      tagLine {
        raw
      }
    }
  }
`;

export default function Home({ categories, info }) {
  return (
    <>
      <Hero />
      <CategoryGrid categories={categories} />
      <FeaturedProducts />
      <About info={info} />
    </>
  );
}

export async function getStaticProps() {
  const { categories, info } = await graphcms.request(query);

  return {
    props: {
      categories,
      info,
    },
  };
}

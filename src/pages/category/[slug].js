import { GraphQLClient } from "graphql-request";

import { PageHeader } from "@components/ui";
import { ProductPreviewGrid } from "@components/product";
import { CategoryGrid } from "@components/common";
import About from "@components/common/About";
import { NextSeo } from "next-seo";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_API);

const query = `
query CategoryPageQuery($slug: String!) {
  category(where: {slug: $slug}) {
    name
    slug
    products(orderBy: isNew_DESC) {
      name
      features
      description
      mainImage {
        url
      }
      slug
      id
      isNew
    }
  }
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

const Category = ({ category, categories, info }) => (
  <>
    <NextSeo title={category.name} />
    <PageHeader pageTitle={category.name} />
    <section>
      <ProductPreviewGrid products={category.products} />
      <CategoryGrid categories={categories} />
      <About info={info} />
    </section>
  </>
);

export async function getStaticProps({ params }) {
  const { category, categories, info } = await graphcms.request(query, {
    slug: params.slug,
  });

  return {
    props: {
      category,
      categories,
      info,
    },
  };
}

export async function getStaticPaths() {
  const { categories } = await graphcms.request(`
    {
      categories {
        id
        name
        slug
      }
    }
  `);

  return {
    paths: categories.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default Category;

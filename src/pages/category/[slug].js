import { GraphQLClient } from "graphql-request";

import { PageHeader } from "@components/ui";
import { ProductPreviewGrid } from "@components/product";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_API);

const Category = ({ category }) => (
  <>
    <PageHeader pageTitle={category.name} />
    <ProductPreviewGrid products={category.products} />
  </>
);

export async function getStaticProps({ params }) {
  const { category } = await graphcms.request(
    `
    query CategoryPageQuery($slug: String!) {
      category(where: { slug: $slug }) {
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
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      category,
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

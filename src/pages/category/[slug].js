import { GraphQLClient } from "graphql-request";

import { PageHeader } from "@components/ui";
import { ProductPreviewGrid } from "@components/product";
import { CategoryGrid } from "@components/common";

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
}
`;

const Category = ({ category, categories }) => (
  <>
    <PageHeader pageTitle={category.name} />
    <section>
      <ProductPreviewGrid products={category.products} />
      <CategoryGrid categories={categories} />
    </section>
  </>
);

export async function getStaticProps({ params }) {
  const { category, categories } = await graphcms.request(query, {
    slug: params.slug,
  });

  return {
    props: {
      category,
      categories,
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

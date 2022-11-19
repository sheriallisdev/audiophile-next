import { ProductView } from "@components/product";
import { GraphQLClient } from "graphql-request";
import { NextSeo } from "next-seo";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_API);

const query = `
query ProductPageQuery($slug: String!){
  products {
    id
    name
    slug
  }
  product(where: {slug: $slug}) {
    id
    slug
    mainImage {
      url
    }
    isNew
    price
    description
    features
    productIncludes {
      id
      itemName
      quantity
    }
    imageGallery {
      url
    }
    name
    otherProducts {
      mainImage {
        url
      }
      name
      slug
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

const ProductPage = ({ product, categories, info }) => (
  <>
    <NextSeo title={product.name} />
    <ProductView product={product} categories={categories} info={info} />
  </>
);

export async function getStaticProps({ params }) {
  const { product, categories, info } = await graphcms.request(query, {
    slug: params.slug,
  });

  return {
    props: {
      product,
      categories,
      info,
    },
  };
}

export async function getStaticPaths() {
  const { products } = await graphcms.request(`
  {
    products {
      id
      name
      slug
    }
  }

  `);

  return {
    paths: products.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ProductPage;

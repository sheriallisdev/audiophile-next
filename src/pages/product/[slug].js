import { ProductView } from "@components/product";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_API);

const query = `
query ProductPageQuery($slug: String!){
  products {
    id
    name
    slug
  }
  product(where: {slug: $slug}) {
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
}
`;

const ProductPage = ({ product }) => (
  <>
    <ProductView product={product} />
  </>
);

export async function getStaticProps({ params }) {
  const { product } = await graphcms.request(query, {
    slug: params.slug,
  });

  return {
    props: {
      product,
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

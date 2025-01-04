import Grid from '@mui/material/Grid2';
import getProducts from "./actions/get-products";
import Product from "./product";

export default async function Products() {
  const products = await getProducts();

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, md: 4, lg: 4 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
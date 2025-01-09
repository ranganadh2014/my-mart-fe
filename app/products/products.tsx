import Grid from '@mui/material/Grid2';
import getProducts from "./actions/get-products";
import Product from "./product";

export default async function Products() {
  const products = await getProducts();

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        // 12 columns for mobile screen
        // 6 columns for tablet screen
        // 4 columns for desktop screen
        <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
import getProduct from "./actions/getProduct";
import Grid from '@mui/material/Grid2';
import { Stack, Typography, Box } from "@mui/material";
import Checkout from "@/app/checkout/checkout";

interface SingleProductProps {
    params: Promise<{ prodId: string }>;
}
export default async function SingleProduct({params}: SingleProductProps) {
    const {prodId} = await params;
    const product = await getProduct(prodId);
    if (!product) {
        return <Typography>No product found</Typography>;
    }

    return(
        <Box sx={{ marginBottom: '2rem' }}>
        <Grid container spacing={2}>
          {/* Product Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="figure" sx={{ margin: 0 }}>
              <img
                src={product.image_url}
                alt={product.name || 'Product Image'}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
  
          {/* Product Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography variant="h4" component="h1">
                {product.name}
              </Typography>
              <Typography variant="body1">{product.description}</Typography>
              <Typography
                variant="h4"
                component="p"
                color="primary"
                sx={{ fontWeight: 'bold' }}
              >
                Rs. {product.price}
              </Typography>
              <Checkout prodId={product.id}/>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
}
import getProduct from "./actions/getProduct";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import { Stack, Typography, Box } from "@mui/material";

interface SingleProductProps {
    params: {
        prodId: string
    }
}
export default async function SingleProduct({params}: SingleProductProps) {
    const product = await getProduct(+(await params).prodId);
    if (!product) {
        return <Typography>No product found</Typography>;
    }

    return(
        <Box sx={{ marginBottom: '2rem' }}>
        <Grid container spacing={2}>
          {/* Product Image */}
          <Grid xs={12} md={6}>
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
          <Grid md={6}>
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
                ${product.price}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
}
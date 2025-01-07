"use client";

import { Card, CardActionArea, Typography } from "@mui/material";
import {IProduct} from "./interfaces/product.interface";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useRouter } from "next/navigation";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const router= useRouter();
  return (
    <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
      <Card sx={{ maxWidth: 345}}>
        <CardMedia
          sx={{ height: 140 }}
          image={product.image_url}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom component="div">
            Rs. {product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>

  );
}
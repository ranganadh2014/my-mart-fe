import { Card, Typography } from "@mui/material";
import {IProduct} from "../common/interfaces/product.interface";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <Card className="p-4">
      <CardMedia
        sx={{ height: 140 }}
        image={product.image_url}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Rs {product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
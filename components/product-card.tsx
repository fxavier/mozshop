'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useCart';
import { addToCart } from '@/lib/store/features/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/lib/store/features/wishlistSlice';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import type { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <Card className="group h-full flex flex-col">
      <Link href={`/products/${product.id}`}>
        <CardHeader className="relative p-0">
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            {(product.isFeatured || product.isNewArrival) && (
              <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                {product.isFeatured && (
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Destaque
                  </span>
                )}
                {product.isNewArrival && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Novo
                  </span>
                )}
              </div>
            )}
          </div>
        </CardHeader>
      </Link>
      <CardContent className="flex-grow p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/products/${product.id}`} className="flex-grow">
            <CardTitle className="text-base sm:text-lg hover:underline line-clamp-2">
              {product.title}
            </CardTitle>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 flex-shrink-0"
            onClick={handleToggleWishlist}
          >
            <Heart
              className={`h-5 w-5 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
            />
          </Button>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>
        <p className="text-xl sm:text-2xl font-bold mb-2">MT {product.price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/useCart';
import { addToCart } from '@/lib/store/features/cartSlice';
import { removeFromWishlist } from '@/lib/store/features/wishlistSlice';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

export default function WishlistPage() {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container py-8 text-center">
        <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-2xl font-bold mb-4">Sua lista de desejos está vazia</h1>
        <p className="text-muted-foreground mb-6">
          Adicione itens que você gosta à sua lista de desejos e eles aparecerão aqui
        </p>
        <Link href="/">
          <Button>Continuar Comprando</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-8">Minha Lista de Desejos ({wishlistItems.length})</h1>
      <div className="grid grid-cols-1 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-6 p-4 bg-card rounded-lg"
          >
            <div className="w-full md:w-48 aspect-square relative overflow-hidden rounded">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <Link href={`/products/${item.id}`}>
                    <h3 className="text-lg font-semibold hover:underline">{item.title}</h3>
                  </Link>
                  <p className="text-2xl font-bold my-2">MT {item.price.toFixed(2)}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  <Trash2 className="h-5 w-5 text-muted-foreground" />
                </Button>
              </div>
              <div className="mt-4">
                <Button onClick={() => handleAddToCart(item)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
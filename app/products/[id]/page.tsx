'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useAppDispatch } from '@/lib/hooks/useCart';
import { addToCart } from '@/lib/store/features/cartSlice';
import { ShoppingCart, Star } from 'lucide-react';
import { products } from '@/lib/data/products';

export default function ProductPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const product = products.find(p => p.id === params.id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return <div className="container py-8">Produto não encontrado</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="container py-4 md:py-8 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.images[selectedImageIndex]}
              alt={`${product.title} - Visualização ${selectedImageIndex + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {product.images.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 basis-1/4 sm:basis-1/5">
                    <button
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                        selectedImageIndex === index
                          ? 'border-primary'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} - Miniatura ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4" />
              <CarouselNext className="hidden sm:flex -right-4" />
            </Carousel>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
            <span className="text-sm text-muted-foreground">{product.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">Marca: {product.brand}</span>
          </div>
          <p className="text-3xl md:text-4xl font-bold">MT {product.price.toFixed(2)}</p>
          <p className="text-base md:text-lg">{product.description}</p>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-3">Características Principais</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-base md:text-lg">{feature}</li>
              ))}
            </ul>
          </div>
          <Button onClick={handleAddToCart} size="lg" className="w-full sm:w-auto">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
}
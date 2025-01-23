'use client';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { categories } from '@/lib/data/products';
import {
  Smartphone,
  Monitor,
  Home,
  Briefcase,
  Headphones,
  Gamepad,
  Camera,
  Package
} from 'lucide-react';

interface CategoryCarouselProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Eletrônicos': <Smartphone className="h-6 w-6" />,
  'Computadores': <Monitor className="h-6 w-6" />,
  'Smart Home': <Home className="h-6 w-6" />,
  'Acessórios': <Smartphone className="h-6 w-6" />,
  'Escritório': <Briefcase className="h-6 w-6" />,
  'Áudio': <Headphones className="h-6 w-6" />,
  'Jogos': <Gamepad className="h-6 w-6" />,
  'Fotografia': <Camera className="h-6 w-6" />
};

export function CategoryCarousel({ selectedCategory, onSelectCategory }: CategoryCarouselProps) {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:pl-4 basis-28 md:basis-36">
            <Button
              variant={selectedCategory === null ? "default" : "ghost"}
              className="w-full h-24 flex flex-col items-center justify-center gap-2"
              onClick={() => onSelectCategory(null)}
            >
              <Package className="h-6 w-6" />
              <span className="text-sm font-medium">Todos</span>
            </Button>
          </CarouselItem>

          {categories.map((category) => (
            <CarouselItem key={category} className="pl-2 md:pl-4 basis-28 md:basis-36">
              <Button
                variant={selectedCategory === category ? "default" : "ghost"}
                className="w-full h-24 flex flex-col items-center justify-center gap-2"
                onClick={() => onSelectCategory(category)}
              >
                {categoryIcons[category]}
                <span className="text-sm font-medium whitespace-nowrap">{category}</span>
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { CategoryCarousel } from '@/components/category-carousel';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { categories, products } from '@/lib/data/products';
import { SlidersHorizontal, Star } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState<'all' | 'featured' | 'new'>('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesRating = product.rating >= minRating;
    const matchesView = view === 'all' || 
                       (view === 'featured' && product.isFeatured) || 
                       (view === 'new' && product.isNewArrival);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesView;
  });

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <section className="bg-card shadow-sm border-b sticky top-16 z-40">
        <div className="container py-4 px-4 md:px-8">
          <div className="mb-4 md:mb-6">
            <CategoryCarousel
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full sm:w-auto"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pt-4 border-t">
              <div>
                <h3 className="font-semibold mb-2">Categorias</h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Todos
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  <span>Faixa de Preço: MT {priceRange[0]} - MT {priceRange[1]}</span>
                </h3>
                <Slider
                  min={0}
                  max={1500}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="w-full"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  <span>Avaliação Mínima: {minRating}</span>
                </h3>
                <div className="flex items-center gap-2">
                  <Slider
                    min={0}
                    max={5}
                    step={0.5}
                    value={[minRating]}
                    onValueChange={([value]) => setMinRating(value)}
                    className="w-full"
                  />
                  <Star className="h-4 w-4 text-yellow-400" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container px-4 md:px-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <span>{selectedCategory || 'Todos os Produtos'}</span>
              {filteredProducts.length > 0 && (
                <span className="text-sm font-normal text-muted-foreground">
                  ({filteredProducts.length} itens)
                </span>
              )}
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={view === 'all' ? 'default' : 'outline'}
                onClick={() => setView('all')}
                size="sm"
                className="flex-1 sm:flex-none"
              >
                Todos
              </Button>
              <Button
                variant={view === 'featured' ? 'default' : 'outline'}
                onClick={() => setView('featured')}
                size="sm"
                className="flex-1 sm:flex-none"
              >
                Destaques
              </Button>
              <Button
                variant={view === 'new' ? 'default' : 'outline'}
                onClick={() => setView('new')}
                size="sm"
                className="flex-1 sm:flex-none"
              >
                Novidades
              </Button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum produto encontrado com os critérios selecionados.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
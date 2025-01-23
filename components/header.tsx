'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, Package, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppSelector } from '@/lib/hooks/useCart';

export function Header() {
	const cartItems = useAppSelector((state) => state.cart.items);
	const wishlistItems = useAppSelector((state) => state.wishlist.items);
	const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center gap-4 px-4'>
				<Link href='/' className='flex items-center gap-2'>
					<Package className='h-6 w-6' />
					<span className='font-bold hidden sm:inline'>
						mozshop. Loja Online
					</span>
				</Link>

				<Button variant='ghost' size='icon' className='md:hidden'>
					<Menu className='h-5 w-5' />
				</Button>

				{/*  <div className="hidden md:flex flex-1 mx-6">
          <div className="flex w-full max-w-2xl mx-auto">
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="rounded-r-none"
            />
            <Button className="rounded-l-none px-3">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div> */}

				<div className='flex items-center gap-2 md:gap-4 ml-auto'>
					<div className='hidden md:block'>
						<Link href='/account'>
							<Button variant='ghost' className='text-sm'>
								<span>
									Olá, Faça Login
									<span className='font-bold block'>Conta e Listas</span>
								</span>
							</Button>
						</Link>
					</div>

					<div className='hidden md:block'>
						<Link href='/orders'>
							<Button variant='ghost' className='text-sm'>
								<span>
									Devoluções
									<span className='font-bold block'>e Pedidos</span>
								</span>
							</Button>
						</Link>
					</div>

					<Link href='/wishlist' className='relative'>
						<Button variant='ghost' size='icon'>
							<Heart className='h-5 w-5' />
							{wishlistItems.length > 0 && (
								<span className='absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center'>
									{wishlistItems.length}
								</span>
							)}
						</Button>
					</Link>

					<Link href='/cart' className='relative'>
						<Button variant='ghost' size='icon'>
							<ShoppingCart className='h-5 w-5' />
							{itemCount > 0 && (
								<span className='absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center'>
									{itemCount}
								</span>
							)}
						</Button>
					</Link>
				</div>
			</div>

			<div className='md:hidden border-t'>
				<div className='container p-2'>
					<div className='flex w-full'>
						<Input
							type='search'
							placeholder='Buscar produtos...'
							className='rounded-r-none'
						/>
						<Button className='rounded-l-none px-3'>
							<Search className='h-4 w-4' />
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

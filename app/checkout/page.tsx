'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/useCart';
import { clearCart } from '@/lib/store/features/cartSlice';

export default function CheckoutPage() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { items, total } = useAppSelector((state) => state.cart);
	const [mounted, setMounted] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		address: '',
		city: '',
		country: '',
		postalCode: '',
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted && items.length === 0) {
			router.push('/cart');
		}
	}, [mounted, items.length, router]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(clearCart());
		router.push('/checkout/success');
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	if (!mounted) {
		return null;
	}

	return (
		<div className='container py-4 md:py-8 px-4 md:px-8'>
			<h1 className='text-xl md:text-2xl font-bold mb-4 md:mb-8'>
				Finalizar Compra
			</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='space-y-4'>
						<h2 className='text-lg md:text-xl font-semibold'>
							Informações de Contato
						</h2>
						<Input
							name='email'
							type='email'
							placeholder='E-mail'
							required
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className='space-y-4'>
						<h2 className='text-lg md:text-xl font-semibold'>
							Endereço de Entrega
						</h2>
						<Input
							name='name'
							placeholder='Nome Completo'
							required
							value={formData.name}
							onChange={handleChange}
						/>
						<Input
							name='address'
							placeholder='Endereço'
							required
							value={formData.address}
							onChange={handleChange}
						/>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<Input
								name='city'
								placeholder='Cidade'
								required
								value={formData.city}
								onChange={handleChange}
							/>
							<Input
								name='postalCode'
								placeholder='Código Postal'
								required
								value={formData.postalCode}
								onChange={handleChange}
							/>
						</div>
						<Input
							name='country'
							placeholder='País'
							required
							value={formData.country}
							onChange={handleChange}
						/>
					</div>
					<Button type='submit' className='w-full'>
						Finalizar Pedido
					</Button>
				</form>
				<div className='bg-card p-4 md:p-6 rounded-lg h-fit lg:sticky lg:top-20'>
					<h2 className='text-lg md:text-xl font-bold mb-4'>
						Resumo do Pedido
					</h2>
					<div className='space-y-4 mb-4'>
						{items.map((item) => (
							<div key={item.id} className='flex justify-between'>
								<span className='line-clamp-1'>
									{item.title} × {item.quantity}
								</span>
								<span className='ml-2 whitespace-nowrap'>
									MT {(item.price * item.quantity).toFixed(2)}
								</span>
							</div>
						))}
						<div className='border-t pt-2 flex justify-between font-bold'>
							<span>Total</span>
							<span>MT {total.toFixed(2)}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

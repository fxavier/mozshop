export interface Product {
	id: string;
	title: string;
	price: number;
	image: string;
	images: string[];
	description: string;
	category: string;
	features: string[];
	brand: string;
	rating: number;
	isFeatured?: boolean;
	isNewArrival?: boolean;
}

export const categories = [
	'Eletrônicos',
	'Computadores',
	'Smart Home',
	'Acessórios',
	'Escritório',
	'Áudio',
	'Jogos',
	'Fotografia',
	'Vestuário',
] as const;

export const products: Product[] = [
	{
		id: '1',
		title: 'Wireless Earbuds Pro',
		price: 99.99,
		image:
			'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=500',
		],
		description:
			'Premium wireless earbuds with active noise cancellation and crystal-clear sound quality.',
		category: 'Áudio',
		brand: 'SoundTech',
		rating: 4.5,
		isFeatured: true,
		features: [
			'Active Noise Cancellation',
			'Up to 24 hours battery life',
			'Wireless charging case',
			'Touch controls',
			'Water resistant',
		],
	},
	{
		id: '2',
		title: 'SmartWatch X2',
		price: 199.99,
		image:
			'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=500',
		],
		description:
			'Advanced smartwatch with comprehensive health tracking and smartphone integration.',
		category: 'Eletrônicos',
		brand: 'TechFit',
		rating: 4.7,
		isNewArrival: true,
		features: [
			'Heart rate monitoring',
			'Sleep tracking',
			'GPS',
			'Water resistant',
			'5-day battery life',
		],
	},
	{
		id: '3',
		title: 'Premium Over-Ear Headphones',
		price: 299.99,
		image:
			'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=500',
		],
		description: 'Studio-quality headphones with premium sound and comfort.',
		category: 'Áudio',
		brand: 'AudioPro',
		rating: 4.8,
		isFeatured: true,
		features: [
			'Active noise cancellation',
			'40-hour battery life',
			'Premium leather cushions',
			'Foldable design',
			'Built-in microphone',
		],
	},
	{
		id: '4',
		title: 'Gaming Laptop Pro',
		price: 1499.99,
		image:
			'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&q=80&w=500',
		],
		description:
			'High-performance gaming laptop with RTX graphics and high refresh rate display.',
		category: 'Computadores',
		brand: 'TechPro',
		rating: 4.9,
		isNewArrival: true,
		features: [
			'NVIDIA RTX 4070',
			'16GB RAM',
			'1TB NVMe SSD',
			'165Hz Display',
			'RGB Keyboard',
		],
	},
	{
		id: '5',
		title: 'Smart Home Hub',
		price: 149.99,
		image:
			'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500',
		],
		description:
			'Central smart home controller with voice commands and automation.',
		category: 'Smart Home',
		brand: 'HomeSmart',
		rating: 4.4,
		features: [
			'Voice control',
			'Device automation',
			'Energy monitoring',
			'Mobile app control',
			'Multi-device support',
		],
	},
	{
		id: '6',
		title: 'Professional DSLR Camera',
		price: 2499.99,
		image:
			'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1613284155618-40d9dfd877d6?auto=format&fit=crop&q=80&w=500',
		],
		description:
			'Professional-grade DSLR camera with advanced features for photography enthusiasts.',
		category: 'Fotografia',
		brand: 'PhotoPro',
		rating: 4.9,
		isFeatured: true,
		features: [
			'45MP full-frame sensor',
			'8K video recording',
			'Dual card slots',
			'Weather-sealed body',
			'Advanced autofocus',
		],
	},
	{
		id: '7',
		title: 'Ergonomic Office Chair',
		price: 299.99,
		image:
			'https://images.unsplash.com/photo-1505797149-35ebcb05a2fc?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1505797149-35ebcb05a2fc?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1589884629038-b631346a23c0?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=500',
		],
		description:
			'Premium ergonomic office chair with adjustable features for maximum comfort.',
		category: 'Escritório',
		brand: 'ErgoComfort',
		rating: 4.6,
		features: [
			'Adjustable lumbar support',
			'Breathable mesh back',
			'Multi-position armrests',
			'Height adjustment',
			'Tilt mechanism',
		],
	},
	{
		id: '8',
		title: 'Gaming Console Pro',
		price: 499.99,
		image:
			'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&q=80&w=500',
		],
		description:
			'Next-generation gaming console with stunning graphics and immersive gameplay.',
		category: 'Jogos',
		brand: 'GameTech',
		rating: 4.8,
		isNewArrival: true,
		features: [
			'4K gaming at 120fps',
			'Ray tracing support',
			'1TB SSD storage',
			'Wireless controller',
			'Backward compatibility',
		],
	},
	{
		id: '9',
		title: 'Wireless Phone Charger',
		price: 39.99,
		image:
			'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1587037542794-6ca5f4eb5f6c?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1585338677500-12f1c2687ebe?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1585338677500-12f1c2687ebe?auto=format&fit=crop&q=80&w=500',
		],
		description:
			'Fast wireless charging pad compatible with all Qi-enabled devices.',
		category: 'Acessórios',
		brand: 'PowerTech',
		rating: 4.5,
		features: [
			'15W fast charging',
			'Multi-device support',
			'LED indicator',
			'Compact design',
			'Safety protection',
		],
	},
	{
		id: '10',
		title: 'Smart Security Camera',
		price: 129.99,
		image:
			'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80&w=500',
		images: [
			'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1580152785720-5de6eb3dce8d?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&q=80&w=500',
			'https://images.unsplash.com/photo-1579256945418-f3b7edb2c4b7?auto=format&fit=crop&q=80&w=500',
		],
		description: 'HD security camera with night vision and motion detection.',
		category: 'Smart Home',
		brand: 'SecureHome',
		rating: 4.7,
		features: [
			'1080p HD video',
			'Night vision',
			'Motion detection',
			'Two-way audio',
			'Cloud storage',
		],
	},
	{
		id: '11',
		title: '4K Ultra HD Smart TV',
		price: 799.99,
		image:
			'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80',
		images: [
			'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80',
			'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80',
			'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80',
			'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80',
		],
		description:
			'4K Ultra HD Smart TV with built-in streaming services and voice control.',
		category: 'Eletrônicos',
		brand: 'TechVision',
		rating: 4.8,
		isFeatured: true,
		features: [
			'4K Ultra HD resolution',
			'Smart TV apps',
			'Voice remote control',
			'Dolby Vision HDR',
			'Built-in Chromecast',
		],
	},
	{
		id: '12',
		title: 'Jaqueta de Couro Clássica',
		price: 299.99,
		image:
			'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format',
		images: [
			'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format',
			'https://images.unsplash.com/photo-1565384014103-7e0a5e2e4f0b?w=500&auto=format',
			'https://images.unsplash.com/photo-1565384014103-7e0a5e2e4f0b?w=500&auto=format',
			'https://images.unsplash.com/photo-1565384014103-7e0a5e2e4f0b?w=500&auto=format',
		],
		description: 'Jaqueta de couro clássica para homens e mulheres.',
		category: 'Vestuário',
		brand: 'FashionStyle',
		rating: 4.9,
		isFeatured: true,
		features: [
			'Couro genuíno',
			'Forro de poliéster',
			'Bolsos laterais',
			'Fecho frontal',
			'Design clássico',
		],
	},
	{
		id: '13',
		title: 'Calça Jeans Premium',
		price: 999.99,
		image:
			'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format',
		images: [
			'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format',
			'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format',
			'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format',
		],
		description: 'Calça jeans premium com design moderno e confortável.',
		category: 'Vestuário',
		brand: 'FashionStyle',
		rating: 4.7,
		isFeatured: true,
		features: [
			'Couro genuíno',
			'Forro de poliéster',
			'Bolsos laterais',
			'Fecho frontal',
			'Design clássico',
		],
	},
	{
		id: '14',
		title: 'Vestido Floral de Verão',
		price: 599.99,
		image:
			'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format',
		images: [
			'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format',
			'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format',
			'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format',
		],
		description: 'Vestido floral de verão com design elegante e confortável.',
		category: 'Vestuário',
		brand: 'FashionStyle',
		rating: 4.5,
		isFeatured: false,
		isNewArrival: true,
		features: [
			'Algodão macio',
			'Estampa floral',
			'Design de verão',
			'Decote em V',
			'Mangas curtas',
		],
	},
];

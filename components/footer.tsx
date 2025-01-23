export function Footer() {
	return (
		<footer className='w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container py-10'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div>
						<h3 className='font-bold mb-4'>Conheça-nos</h3>
						<ul className='space-y-2'>
							<li>Carreiras</li>
							<li>Blog</li>
							<li>Sobre a Loja</li>
							<li>Relações com Investidores</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold mb-4'>Ganhe Dinheiro Conosco</h3>
						<ul className='space-y-2'>
							<li>Venda produtos</li>
							<li>Venda aplicativos</li>
							<li>Seja um Afiliado</li>
							<li>Anuncie Seus Produtos</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold mb-4'>Formas de Pagamento</h3>
						<ul className='space-y-2'>
							<li>Cartão Corporativo</li>
							<li>Compre com Pontos</li>
							<li>Recarregue seu Saldo</li>
							<li>Conversor de Moedas</li>
						</ul>
					</div>
					<div>
						<h3 className='font-bold mb-4'>Deixe-nos Ajudar Você</h3>
						<ul className='space-y-2'>
							<li>Sua Conta</li>
							<li>Seus Pedidos</li>
							<li>Frete e Prazo de Entrega</li>
							<li>Devoluções e Reembolsos</li>
						</ul>
					</div>
				</div>
				<div className='mt-10 text-center text-sm text-muted-foreground'>
					<p>
						© {new Date().getFullYear()} mozshop Loja Online. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}

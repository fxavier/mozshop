import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="container py-16 text-center">
      <div className="max-w-md mx-auto">
        <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
        <h1 className="text-3xl font-bold mb-4">Pedido Confirmado!</h1>
        <p className="text-muted-foreground mb-8">
          Obrigado pela sua compra. Enviaremos um e-mail de confirmação com os detalhes do seu pedido.
        </p>
        <Link href="/">
          <Button>Continuar Comprando</Button>
        </Link>
      </div>
    </div>
  );
}
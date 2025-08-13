import React from "react";
import Link from "next/link";

export default function CartPage() {
  // Simulação de itens no carrinho
  const cartItems = [
    {
      id: 1,
      name: "Creatina Improve",
      price: 29.99,
      quantity: 2,
      image: "/media/products/creatina.jpg",
    },
    {
      id: 2,
      name: "Complexo B Improve",
      price: 19.99,
      quantity: 1,
      image: "/media/products/complexo-b.jpg",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-areia px-4 py-8">
      <h1 className="text-2xl font-bold text-azul mb-6">Seu Carrinho</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white/70 backdrop-blur rounded-md shadow-sm p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="font-bold text-azul">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 mt-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-xl font-bold text-azul">
              ${total.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Link
              href="/products"
              className="px-6 py-3 bg-gray-300 rounded-md hover:bg-gray-400 transition"
            >
              Continuar comprando
            </Link>
            <button className="px-6 py-3 bg-azul text-white rounded-md hover:bg-azul/90 transition">
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

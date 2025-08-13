import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-areia flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur rounded-md shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-azul mb-6 text-center">
          Acesse sua conta
        </h1>

        {/* Login com Google */}
        <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition mb-4">
          Entrar com Google
        </button>

        {/* Login com e-mail */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-azul"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-azul"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-azul text-white py-3 rounded-md hover:bg-azul/90 transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Ainda não tem conta?{" "}
          <Link href="/signup" className="text-azul hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}

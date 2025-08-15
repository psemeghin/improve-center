import Link from "next/link";

export default function PartnerSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur">
        <h3 className="text-lg font-semibold">Produtores / Fornecedores</h3>
        <p className="text-sm text-slate-600 mt-1">
          Qualidade, compliance e rastreabilidade. Traga seus diferenciais para um marketplace curado.
        </p>
        <div className="mt-4">
          <Link href="/parcerias" className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
            Quero ser fornecedor
          </Link>
        </div>
      </div>
      <div className="rounded-xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur">
        <h3 className="text-lg font-semibold">Vendedores / Dropshippers</h3>
        <p className="text-sm text-slate-600 mt-1">
          Operação transparente, margens claras e alcance global. Cresça com a Improve.
        </p>
        <div className="mt-4">
          <Link href="/parcerias" className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
            Quero vender
          </Link>
        </div>
      </div>
    </div>
  );
}

import { supabase } from "@/lib/supabase/client";

export default async function Home() {
  const { data: mouvements } = await supabase
    .from("mouvements_bancaires")
    .select("*")
    .order("date_operation", { ascending: false })
    .limit(20);

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Comptabilité Intelligente
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Libellé</th>
            <th className="p-2 text-right">Montant</th>
          </tr>
        </thead>
        <tbody>
          {mouvements?.map((mvt) => (
            <tr key={mvt.id} className="border-b">
              <td className="p-2">{mvt.date_operation}</td>
              <td className="p-2">{mvt.libelle}</td>
              <td className="p-2 text-right">{mvt.montant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
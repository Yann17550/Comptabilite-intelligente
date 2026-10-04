import { supabase } from "@/lib/supabase/client";
import TransactionsTable from "@/components/transactions/TransactionsTable";
import { classifierMouvement } from "@/lib/classification/classifierMouvement";
 
export default async function Home() {
 
const { data: mouvements } = await supabase
.from("mouvements_bancaires")
.select("*")
.order("date_operation", { ascending: false })
.limit(20);
 
const { data: regles, error } = await supabase
.from("regles_classification")
.select("*");
 
const premier = mouvements?.[0];
 
const resultat =
premier && regles
? classifierMouvement(premier.libelle, regles)
: null;
 
return (
<main className="p-8">
<h1 className="mb-6 text-3xl font-bold">
Comptabilité Intelligente
</h1>
 
{premier && resultat && (
<div className="mb-6 border rounded p-4">
<div>
<strong>Libellé :</strong> {premier.libelle}
</div>
 
<div>
<strong>Catégorie :</strong>{" "}
{resultat.categorie_comptable}
</div>
 
<div>
<strong>Sous-catégorie :</strong>{" "}
{resultat.sous_categorie}
</div>
 
<div>
<strong>Contrepartie :</strong>{" "}
{resultat.nom_normalise}
</div>
</div>
)}

<TransactionsTable mouvements={mouvements ?? []} />
</main>
);
}
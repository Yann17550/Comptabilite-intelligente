type Mouvement = {
id: number;
date_operation: string;
libelle: string;
montant: number;
};
type Props = {
mouvements: Mouvement[];
};
export default function TransactionsTable({
mouvements,
}: Props) {
return (
<table className="w-full border-collapse">
<thead>
<tr className="border-b">
<th className="p-2 text-left">Date</th>
<th className="p-2 text-left">Libellé</th>
<th className="p-2 text-right">Montant</th>
</tr>
</thead>

<tbody>
{mouvements.map((mvt) => (
<tr key={mvt.id} className="border-b">
<td className="p-2">{mvt.date_operation}</td>
<td className="p-2">{mvt.libelle}</td>
<td className="p-2 text-right">
{mvt.montant}
</td>
</tr>
))}
</tbody>
</table>
);
}
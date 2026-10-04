type RegleClassification = {
pattern: string;
categorie_comptable: string | null;
sous_categorie: string | null;
nom_normalise: string | null;
justificatif_attendu: boolean | null;
compte_comptable: string | null;
};
 
export function classifierMouvement(
libelle: string,
regles: RegleClassification[]
) {
const texte = libelle.toUpperCase();
 
const regle = regles.find((r) =>
texte.includes(r.pattern.toUpperCase())
);
 
if (!regle) {
return {
categorie_comptable: "inconnu",
sous_categorie: null,
nom_normalise: null,
justificatif_attendu: false,
compte_comptable: null,
};
}

return {
categorie_comptable: regle.categorie_comptable,
sous_categorie: regle.sous_categorie,
nom_normalise: regle.nom_normalise,
justificatif_attendu: regle.justificatif_attendu,
compte_comptable: regle.compte_comptable,
};
}
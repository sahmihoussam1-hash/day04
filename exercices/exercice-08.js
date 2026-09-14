/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const trouverMinMax = (tableau) => {
 
  let min = tableau[0];
  let max = tableau[0];

  
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
      max = tableau[i]; 
    }
    if (tableau[i] < min) {
      min = tableau[i]; 
    }
  }


  return [min, max];
};


const mesNombres = [24, 5, 19, 3, 20, 5, 3];
const resultat = trouverMinMax(mesNombres);

console.log("Le plus petit nombre est :", resultat[0]); 
console.log("Le plus grand nombre est :", resultat[1]); 
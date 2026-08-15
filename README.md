# Al-Amana — Site vitrine

Site vitrine fictif pour une association musulmane, réalisé dans le cadre d'un projet d'apprentissage HTML / CSS / JavaScript (sans framework).

## 🎯 Objectif du projet

Projet d'entraînement personnel visant à se perfectionner en **HTML sémantique**, **CSS responsive** (Flexbox/Grid) et **JavaScript vanilla** (manipulation du DOM, événements, logique conditionnelle), sans recourir à un framework (pas de React/Bootstrap).

## 📄 Pages du site

| Page | Contenu |
|---|---|
| `index.html` | Bandeau de bienvenue plein écran, présentation, statistiques animées, horaires de prière, dernières annonces |
| `apropos.html` | Histoire, mission et valeurs de l'association |
| `activites.html` | Liste des activités filtrable par catégorie (Enfants / Cours / Adultes) |
| `evenements.html` | Liste des événements à venir avec dates |
| `contacts.html` | Formulaire de contact avec validation + coordonnées |

## ⚙️ Fonctionnalités JavaScript

- ✅ **Menu burger responsive** — affichage/masquage du menu sur mobile
- ✅ **Filtre d'activités** — boutons de filtrage par catégorie
- ✅ **Formulaire de contact avec validation** — vérification des champs (nom, email, longueur du message) sans backend
- ✅ **Accordéon FAQ** — questions/réponses dépliables au clic
- ✅ **Mode sombre / clair** — bascule de thème persistée via `localStorage`
- ✅ **Horaires de prière** — affichage des 5 horaires du jour
- ✅ **Statistiques animées** — compteurs qui s'incrémentent au scroll (`IntersectionObserver`)

## 🎨 Charte graphique

- **Couleurs** : vert `#0F6B3F` + doré `#B08D3E` + blanc / gris clair
- **Police** : Poppins (Google Fonts)
- **Style** : épuré, sections en bandes pleine largeur, cards avec ombre et effet au survol

## 📱 Responsive

Le site s'adapte au mobile, à la tablette et au desktop via des media queries CSS (breakpoint principal à `768px`).

## 🗂️ Structure du projet

```
al-amana/
├── index.html
├── apropos.html
├── activites.html
├── evenements.html
├── contacts.html
├── style.css
├── script.js
└── images/
```

## 🚫 Hors périmètre

- Pas de backend / base de données
- Pas de paiement en ligne
- Pas de système de connexion
- Pas de framework CSS/JS

## 🚀 Lancer le projet

Aucune installation nécessaire — c'est un site statique.

1. Cloner le repo
2. Ouvrir `index.html` dans un navigateur

```bash
git clone <URL_DU_REPO>
cd al-amana
```

## 📚 Contexte

Projet réalisé à des fins pédagogiques, à partir d'un cahier des charges fictif (association et contenu imaginaires).

## 📝 Licence

Projet libre à usage pédagogique.
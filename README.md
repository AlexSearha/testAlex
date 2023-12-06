# Mini-Application React : Aperçu du Projet

## Description

Cette mini-application React est une simulation d'une application déjà existante de la société ARCHIREPORT. Elle est un rendu qui implémente un écran de connexion, une barre de navigation et une page de liste de projets basés sur les maquettes fournies sur Figma. Elle intègre des fonctionnalités telles que l'authentification utilisateur, une mise en page responsive. L'application comprend également des fonctionnalités optionnelles telles que le mode sombre/clair, la suppression de projet, et la possibilité d'être utilisée hors ligne en tant qu'application Web progressive (PWA). L'application n'a pas de connexion GraphQL car la connexion à celle-ci n'a pas été possible dans mon cas.

## Dépendances

- **@apollo/client** : Client GraphQL pour interagir avec les API GraphQL.
- **@emotion/react & @emotion/styled** : Bibliothèque CSS-in-JS pour styliser les composants.
- **@mui/icons-material & @mui/material & @mui/styled-engine-sc** : Composants et stylisation Material-UI.
- **@reduxjs/toolkit** : Bibliothèque de gestion d'état pour les applications React.
- **graphql** : Implémentation JavaScript de GraphQL pour le serveur et le client.
- **react & react-dom** : Bibliothèques React de base.
- **react-router-dom** : Routage déclaratif pour les applications React.
- **styled-components** : Bibliothèque CSS-in-JS pour la stylisation des composants.
- **yarn** : Gestionnaire de paquets pour gérer les dépendances du projet.

## Installation

1. Assurez-vous que Yarn est installé sur votre machine.
2. Clonez le dépôt du projet.
   ```bash
   git clone [URL_du_dépôt]
   ```
3. Clonez le dépôt du projet.
   ```bash
   cd [répertoir_du_projet]
   ```
4. Installer les dependances
   ```bash
   yarn
   ```

## Exécution de l'Application

1. Exécutez la commande suivante pour démarrer le serveur de développement.

   ```bash
   yarn dev
   ```

2. Ouvrez votre navigateur et visitez [http://localhost:5173/](http://localhost:5173/) pour voir l'application.

# Fonctionnalités Bonus

## Mode Sombre/Clair

Basculez entre les modes sombre et clair pour améliorer l'expérience utilisateur.

## Slider

Le slider n'était pas sensé etre fonctionnel mais il à été tout de meme codé donc fonctionnel

## Dynamisme du header

Le header possède de variables qui dependent du context et se manifestent,ou non, en fonction de l'authentification d'un user.

## MUI

Tout le design CSS à été développé avec la librairie `Material UI` et une petite partie en `SASS` pour la gestion des mediasQueries.

## Fakes Datas

Pour pallier aux problèmes liés aux fetch de la liste des projets sur votre API, j'ai dû simuler l'obtention d'un tableau d'objets et utiliser `.map` sur cette liste-ci afin d'en extraire les données et les afficher dynamiquement sur la page de bureau.

## Hors Ligne (PWA)

Activez l'accès hors ligne à l'application en en faisant une application Web progressive.

# Issues

## GraphQL

1. En effet, je le confesse, ce fut la première fois que je travaillais avec une API GraphQL. Jusqu'à présent, je n'avais travaillé qu'avec des API REST. J'ai découvert l'environnement Apollo, qui reste néanmoins assez similaire du point de vue des queries et mutations que j'ai pu expérimenter sur React-Query ou RTK-Query de Redux. Je conçois que je n'ai pas pu vous prouver mes capacités CRUD sur votre application, mais si vous le souhaitez, vous pouvez jeter un œil sur le code que j'ai réalisé sur un autre projet qui execute des requêtes sur une API REST (Express) que j'ai développée. J'ai utilisé `RTK-Query` pour définir les endpoints. L'application en question est visible ici :

   ```bash
   https://github.com/AlexSearha/adeuxpas-Front
   ```

# Conclusion

Au-delà de ma frustration vis-à-vis de la connexion à votre API, ce fut un challenge très enrichissant et une belle découverte de l'univers GraphQL !

Merci pour ce challenge intéressant et j'espère que ce que j'ai fait vous plaira !

Alexis

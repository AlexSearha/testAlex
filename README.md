# Mini-Application React : Aperçu du Projet

## Description

Cette mini-application React implémente un écran de connexion, une barre de navigation et une page de liste de projets basés sur les maquettes fournies sur Figma. Elle intègre des fonctionnalités telles que l'authentification utilisateur, une mise en page responsive, et des interactions avec GraphQL. L'application comprend également des fonctionnalités optionnelles telles que le mode sombre/clair, la suppression de projet, et la possibilité d'être utilisée hors ligne en tant qu'application Web progressive (PWA).

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

## Fonctionnalités Bonus

## Mode Sombre/Clair

Basculez entre les modes sombre et clair pour améliorer l'expérience utilisateur.

## Slider

Le slider n'était pas sensé etre fonctionnel mais il à été tout de meme codé donc fonctionnel

## Suppression de Projet

Implémentez la fonctionnalité de suppression de projet pour retirer les projets indésirables.

## Hors Ligne (PWA)

Activez l'accès hors ligne à l'application en en faisant une application Web progressive.

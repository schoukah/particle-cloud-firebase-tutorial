# Tutoriel d'intégration Particle Cloud à Google Firebase, Particle Cloud to Google Firebase integration tutorial

En construction. *English version below.*

Ce tutoriel a pour but de vous montrer comment intégrer la plateforme
Particle Cloud à Google Firebase. Il est basé sur le tutoriel de
[Particle](https://docs.particle.io/tutorials/integrations/google-firebase/).

Les deux autres tutoriels ayant servi à la construction de celui-ci
sont:

- [Cloud Functions: moving data from Pubsub to Firebase Cloud Firestore
  in TypeScript](https://www.youtube.com/watch?v=3Zohd6U6CL8) de
  [D-I-Ry](https://www.youtube.com/channel/UCMHvK9tare9Y9O152C9wm3Q).
- [Tutorial: Set up Particle Cloud, Google Cloud, and Firestore! - Part
  1](https://www.youtube.com/watch?v=ON_3hfPOuyI&t=595s) de [Nordic
  Cloud Labs](https://www.youtube.com/channel/UCVUrqGCjyOB60kdr4wGzGiQ).
  [Google Cloud Platform - Getting Started - Guide Particle](https://docs.particle.io/getting-started/integrations/google-cloud-platform/).


## Prérequis

- Un compte [Particle Cloud](https://console.particle.io/signup).
- Un compte [Google Firebase](https://firebase.google.com/).
- Un compte [Google Cloud Platform](https://cloud.google.com/).
- Un éditeur de texte (par exemple [Visual Studio
  Code](https://code.visualstudio.com/)).
- Un terminal (par exemple [Git Bash](https://gitforwindows.org/)).
- Node.js et npm installés (par exemple
  [Node.js](https://nodejs.org/en/)).

## Pour commencer

### Création d'un projet Google Cloud platform et d'un topic (sujet)

- Créer un nouveau projet Google Cloud Platform (GCP) en suivant les
  instructions de [Google Cloud
  Platform](https://cloud.google.com/resource-manager/docs/creating-managing-projects).
- Créer un nouveau topic (sujet) en suivant les instructions de [Google Cloud
  Platform](https://cloud.google.com/pubsub/docs/quickstart-console#create_a_topic).
- Activer l'API Pub/Sub en suivant les instructions de [Google Cloud
  Platform](https://cloud.google.com/pubsub/docs/quickstart-console#enable_the_api).

- Ne pas oublier de donner la permission à Particle de publier dans le
  topic en suivant les instructions dans le tutoriel d'intégration de
  [Google Cloud Platform à Particle Cloud](https://docs.particle.io/getting-started/integrations/google-cloud-platform/).

- Créer et activer l'intégration sur Particle Cloud en [suivant les
  instructions](https://docs.particle.io/getting-started/integrations/google-cloud-platform/#enabling-the-integration).

### Création d'un projet Google Firebase

- Créer un nouveau projet Google Firebase en suivant les instructions de
  [Google Firebase](https://firebase.google.com/docs/web/setup).

### Création d'une Fonction Google Cloud

- Suivre le [tutoriel de D-I-Ry à partir de ce
  point](https://youtu.be/3Zohd6U6CL8?t=118).
- À la différence que le script TypeScript doit initialiser les
  variables pour votre propre projet de capteurs. Voici un [exemple un
  utilisant trois variables envoyées sous format JSON par
  Particle](https://github.com/schoukah/particle-cloud-firebase-tutorial/blob/main/src/index.ts).
  - Pour plus d'informations sur les différents types de *payloads*,
    consultez la section de référence sur les webhooks et les propriétés
    *body* dans la [documentation de Particle
    Cloud](https://docs.particle.io/reference/cloud-apis/webhooks/#body).
    Consultez aussi les exemples concernant l'envoi de [données complexes](https://docs.particle.io/reference/cloud-apis/webhooks/#sending-complex-data).

## Particle Cloud to Google Firebase integration tutorial


## Inspirations


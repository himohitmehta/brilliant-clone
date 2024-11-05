# Brilliant Clone

This is a clone of the [Brilliant](https://brilliant.org/) website. The clone is built using React, Typescript, Tailwind CSS, shadcn UI, and Firebase Authentication.

## Setup Instructions:

1.  Clone the repository
2.  Add the environment variables:

        - Create a `.env` file in the root directory
        - Add the following environment variables:
        `env

    VITE_FIREBASE_API_KEY="XXXXX"
    VITE_FIREBASE_AUTH_DOMAIN="XXXX"
    VITE_FIREBASE_PROJECT_ID="XXXX"
    VITE_FIREBASE_STORAGE_BUCKET="XXXX"
    VITE_FIREBASE_MESSAGING_SENDER_ID="XXXX"
    VITE_FIREBASE_APP_ID="XXXX"

        -   Replace `XXXXX` with your own values

3.  Install dependencies:
    ```bash
    pnpm install
    ```
4.  Start the development server:
    ```bash
    pnpm dev
    ```

## Features Added:

-   Landing Page UI
-   Authentication: using email and password and Google (Facebook auth not implemented)
-   Dashboard home page and courses catalog. In course catalog the user can switch between different categories using the tabs.

## Known Limitations:

-   UI Interactions and font not similar to the original website
-   No animations
-   Limited authentication options, i.e., **facebook** not implemented
-   Search is not implemented in the dashboard
-   UI is not consistent as per the figma design provided.
-   No responsive design, only desktop friendly.

Built with:

-   React
-   Typescript
-   zod for schema validation
-   Tailwind CSS
-   shadcn UI
-   Firebase Authentication
-   React hook forms
-   Nuqs for managing search params state
-   React Router for routing inside the app

Deployed On: [https://brilliant-clone.vercel.app/](https://brilliant-clone.vercel.app/)
Demo Video: [https://drive.google.com/drive/folders/1uzrF6yXwrH3ZDibem_92tzO695gTTA6x?usp=drive_link](https://drive.google.com/drive/folders/1uzrF6yXwrH3ZDibem_92tzO695gTTA6x?usp=drive_link)

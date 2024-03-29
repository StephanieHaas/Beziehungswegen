# Beziehungswegen Website

Hallo, dies ist die Website von [Beziehungswegen.de](https://beziehungswegen.de).

Diese Website wird mit Hilfe von [Gatsby](https://www.gatsbyjs.com/) erstellt und verwendet Daten von Google Docs. Die Seiten sind jeweils eigene Google Docs Dokumente, die über `gatsby-source-google-docs` abgerufen und in Markdown konvertiert werden.

## Setup

1. Installiere [Node.js](https://nodejs.org/en/download/)
2. Installiere [pnpm](https://pnpm.io/installation)
3. Installiere die Abhängigkeiten mit `pnpm install`
4. Kopiere die `.env.example` Datei und benenne sie in `.env` um
5. Bearbeite die `.env` Datei und fülle die Felder aus
6. Anschließend kannst du die Entwicklungsumgebung mit `pnpm run develop` starten

## Deployment

Das Deployment erfolgt automatisch über GitHub Actions. Die GitHub Action muss manuell gestartet werden.

# Euphrosyne Digilab

## Description

Euphrosyne Digilab is a platform that catalogs research data from projects conducted at New AGLAE, the particle accelerator located in the basement of the Louvre Palace. It allows searching for data from these projects by keywords, materials, date, or geographical area.

The project is currently under development. A production version will be available soon containing data from selected projects only.

## Specs

The project is built with [Next.js](https://nextjs.org/) and its static site generation. The code is written in TypeScript.

The data required for page generation is retrieved from an Opensearch/Elasticsearch instance, which is synchronized with Euphrosyne ([site](https://euphrosyne.beta.gouv.fr) | [repo](https://github.com/betagouv/euphrosyne)). The data catalog page queries are made through an API available on Euphrosyne.

## Installation

1. Clone the project:

   ```bash
   git clone https://github.com/betagouv/euphrosyne-digilab
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Development

1. Copy the `.env.example` file to `.env.development` and fill in the values.
2. Launch the [euphrosyne](https://github.com/betagouv/euphrosyne) webserver. The environment variable `NEXT_PUBLIC_EUPHROSYNE_HOST` must point to the Euphrosyne application URL. For example [http://localhost:8000](http://localhost:8000).
3. Launch the Elasticsearch / Opensearch instance. It contains the catalog data and is used to generate pages during build time. See Euphrosyne documentation.
4. Launch the development server:

   ```bash
   npm run dev
   ```

## Build

1. Copy the `.env.example` file to `.env.production` and fill in the values.
2. Build the pages:

   ```bash
   npm run build
   ```

## Euphrosyne Ecosystem

- [Euphrosyne](https://github.com/betagouv/euphrosyne)
- [Euphrosyne Tools API](https://github.com/betagouv/euphrosyne-tools-api)
- [Euphrosyne Infra](https://github.com/betagouv/euphrosyne-tools-infra)
- [New AGLAE Data Converter](https://github.com/betagouv/new-aglae-data-converter)

on/deploying) for more details.

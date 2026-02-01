# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups!

All our other developers are busy, and we need you to deliver the app for tomorrow. Some bugs are left, and we need you to fix those. Don't spend too much time on it.

We need you to follow these steps to understand the app and to fix the bugs :

- Sign up to the app
- Create at least 2 others users on people page ( not with signup )
- Edit these profiles and add aditional information
- Create a project
- Input some information about the project
- Input some activities to track your work in the good project

Then, see what happens in the app and fix any bugs you find during this process.

**The goal is to fix at least 3 bugs**

## Feedback

Send us the project and answer the following questions :

- What bugs did you find ? How did you solve them and why ?
- Do you have any feedback about the code / architecture of the project?
- What difficulties did you encounter while working on it ?

We look forward to your submission and appreciate your effort!

## Live Coding

During a live coding session, you'll need to add a new feature that allows switching activities to another organization on demand. This change is requested by the client and should accommodate additional functional rules as needed, such as resetting data during the switch. Be prepared to explain your approach and thought process during the session.

## Setup

### Setup database

We need to start a docker container for mongodb and import initial data

```bash
docker-compose up -d
```

### Setup api

```bash
cd api
npm i
npm run dev
```

### Setup app

```bash
cd app
npm i
npm run dev
```

# Ecommerce Full Stack Web App

## Overview

This is a full-stack E-commerce web application built with [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [React](https://reactjs.org/), and [MongoDB](https://www.mongodb.com/). The project includes server-side and client-side code for seamless integration.

## Prerequisites

Before running the application, make sure to create your own `.env` file in the root directory with the following environment variables:

1. `HOST` (127.0.0.1)
2. `PORT` (5000)
3. `DB_URL` (mongodb://127.0.0.1:27017/<your-db-name>)
4. `DEBUG_MODE` (BOOLEAN)
5. `ACCESS_TOKEN_SECRET` (ACCESS_TOKEN_SECRET)
6. `ACCESS_TOKEN_EXPIRY` (1D)

### CLOUDINARY Configuration

[CLOUDINARY](https://cloudinary.com/) is used for uploading product images. Add the following Cloudinary environment variables:

7. `CLOUDINARY_CLOUD_NAME` (your-cloudinary-name)
8. `CLOUDINARY_API_KEY` (your-cloudinary-key)
9. `CLOUDINARY_API_SECRET` (your-cloudinary-secret)

## Getting Started

### Installation

Install project dependencies for both the server and client:

First 

```
npm i
# or
yarn
# or
pnpm i
```

Second

```
npm dep
# or
yarn dep
# or
pnpm dep
```

### Run Development Server
Third
```
npm dev
# or
yarn dev
# or
pnpm dev
```



###### Remember to replace placeholders like `<your-db-name>` with actual values. Additionally, consider creating a `CONTRIBUTING.md` file if you have specific guidelines for contributors. Feel free to adapt this template based on your project's specific needs.



# GitHub Gists Manager

Welcome to GitHub Gists Manager! This web application provides users with superpowers to effortlessly organize and enhance their GitHub Gists. Below you will find important information about the application, including how to set it up, its features, and more.

## Table of Contents

1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Features](#features)
4. [Optional Features](#optional-features)
5. [Deployment](#deployment)
6. [Testing](#testing)
7. [Additional Notes](#additional-notes)

## Introduction

GitHub Gists Manager is a Vue.js application developed to simplify the management of GitHub Gists. It allows users to authenticate using OAuth flow, access and edit their Gists, view gist contents, and more.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd github-gists-manager`
3. Install dependencies: `npm install`
4. Run the development server: `npm run serve`
5. Access the application at `http://localhost:8080` in your web browser.

## Features

- **OAuth Authentication:** Users can authenticate using the OAuth flow to access their GitHub Gists.
- **List Gists:** View a list of all Gists associated with the authenticated user.
- **View Gist Content:** Clicking on a Gist from the list allows users to view its content.
- **Edit Gist:** Users can edit the content of their Gists.
- **Remove Gist:** Delete unwanted Gists.

## Optional Features

Although not implemented, the following optional features can be added to enhance the application further:

- **Gist Filtering:** Allow users to filter Gists based on criteria such as user's Gists, other people's Gists, starred/unstarred Gists, etc.
- **Stats Display:** Show statistics such as "showing 5 of 10 total Gists."
- **Create Gist:** Enable users to create new Gists.
- **Star/Unstar Gist:** Allow users to star or unstar Gists.
- **Accessibility:** Ensure the application follows web accessibility standards.
- **GitHub Workflow:** Configure a GitHub workflow to run unit tests as a PR check.

## Deployment

The frontend application is deployed to GitHub Pages. You can access it [here](<https://aluisalinhares.github.io/gists-manager/>).

## Testing

Unit tests have been implemented for at least IconButton component. To run tests, use the command: `npm test`.


## Additional Notes

The project handles proxying to overcome CORS in development mode, ensuring smooth interaction with GitHub's REST API. In addition to this, a Netlify Express server has been implemented to handle certain requests, such as accessing the token for authorization. This server acts as a proxy to bypass CORS restrictions and facilitates seamless communication between the frontend application and GitHub's API.

Happy Gisting! 🚀

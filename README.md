# Plants

## Overview

![Screen ](src/assets/screen.png)

"Plants" is a landing page project designed to showcase garden plant growing and care services. This project is part of the tasks RSSchool, where participants create an adaptive and interactive landing page. The website features semantic HTML5, adaptive CSS using SASS, and interactive JavaScript components.


***************************

## Deploy

* [https://massaracsh7.github.io/plants/](https://massaracsh7.github.io/plants/)

***************************

## Key Features

- **Semantic and Adaptive Layout**: The website uses valid and semantic HTML5 tags and is designed to be fully responsive on all devices.
- **Interactive Elements**: JavaScript is used to enhance user interactions with service focusing in the "Service and our projects" section, an accordion in the "Prices" section, and a custom select dropdown in the "Contacts" section.
- **Exporting Styles and Graphics from Figma**: Graphics and design elements were converted from Figma assets to ensure visual consistency with the original design.

## Project Structure

The project is organized into three main blocks:

- **Header**: Contains the site navigation and branding.
- **Main**: Includes all the core content sections:
  - Welcome
  - About
  - Service
  - Prices
  - Contacts
- **Footer**: Provides additional information and links, combined with the nearest section for layout purposes.

## Technologies Used

- HTML5
- CSS3 / SASS
- JavaScript
- Webpack for bundling
- Babel for JavaScript transpilation
- npm for dependency management
- `gh-pages` for deployment

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/massaracsh7/plants.git
   cd plants

2. **Install dependencies:**

   ```bash
   npm install
   
3. **Running the development server:**

   ```bash
   npm run dev
   
   This will open up a local server at http://localhost:8080 where you can see your changes as you develop.

4. **Building for production:**

   ```bash
   npm run build

   This command prepares the dist directory with your bundled application ready for deployment.

5. **Deploying to GitHub Pages:**

   ```bash
   npm run deploy
  
  This will update the gh-pages branch of your repository with the contents of the dist directory, making your project live on GitHub Pages.


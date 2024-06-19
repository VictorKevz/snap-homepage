# Intro Section with Dropdown Navigation
![alt text](public/design/desktop-preview.jpg)
## Overview

This project is a solution to the [Intro Section with Dropdown Navigation challenge](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5/hub) on Frontend Mentor. The goal was to build out the intro section with dropdown navigation and ensure it looks as close to the provided design as possible.

## Features

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links.
- View the optimal layout for the content depending on their device's screen size.
- See hover states for all interactive elements on the page.

## Technologies Used

- **HTML5**: For the markup of the webpage.
- **CSS3**: For styling the webpage and ensuring responsiveness.
- **React JS**: For building the user interface components.
- **Vite**: For bundling the application.

## Project Structure

The project is structured as follows:

```
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── Navbar
│   │   │   ├── Navbar.jsx
│   │   │   ├── DropDown.jsx
│   │   │   └── dropdown.css
│   │   └── Hero
│   │       ├── Hero.jsx
│   │       └── hero.css
│   ├── App.jsx
│   └── App.css
└── index.html
```


## CSS Variables

To maintain a consistent color scheme across the project, CSS variables have been defined for neutral colors:

```css
:root {
  --almost-white: hsl(0, 0%, 98%);
  --medium-gray: hsl(0, 0%, 41%);
  --almost-black: hsl(0, 0%, 8%);
}
```

## Key Components

### Navbar Component

The `Navbar` component includes the main navigation links, which trigger dropdown menus on click. The dropdowns are displayed conditionally based on the state.

### Hero Component

The `Hero` component represents the main intro section of the page.

### Mask

The `mask` div is used to create an overlay effect when the dropdowns are active, ensuring they are displayed on top of the rest of the content without pushing it down.

## Running the Project

1. **Clone the repository**:

    git clone https://github.com/VictorKevz/snap-homepage.git
    cd snap-homepage
    ```

2. **Install dependencies**:

    npm install
    ```

3. **Start the development server**:

    npm run dev
    ```

4. **Build the project for production**:

    npm run build
    ```

5. **Preview the production build**:
    npm run dev
    ```

## Notes

- The dropdown positioning and mask functionality ensure that the dropdown menus appear on top of other content without pushing it down.
- Responsive design techniques are used to provide an optimal layout on different screen sizes.
- Hover states are implemented for interactive elements to enhance the user experience.



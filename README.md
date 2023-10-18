# Appstem React Native Developer Prototype

Designed by Kevin Nielsen

[GitHub Repo Link](https://github.com/knielsen24/rn-dev-proto "Go to repo Link")

## Table of Contents
- [Installation](#installation)
- [Design Decisions & Assumptions](#design-decisions--assumptions)
- [Checklist](#checklist)
- [Prompt](#prompt)

## Installation

Clone repo

    cd rn-dev-proto
    yarn install

This project uses Expo. To run the app, you can use the following command:

    yarn start

## Design Decisions & Assumptions

### Priorities
Due to the limited time for the assessment, I decided to focus on the following:
1. Use familiar tools and technologies
2. Quick research and selection of the Image API, dictionary file, and other technologies
3. Delivering MVP with simple & elegant styling
4. Add simple branding/styling, if time permits

### Architecture
Created the app using Expo and yarn
* I decided to use Expo to create the app. I have used Expo in the past, and I am very familiar with its development environment. It also has excellent documentation and community support.

Image Search API: Pixabay
* Out of the 3 APIs listed in the prompt, Pixabay had the simplest documentation and was extremely easy to understand. Additionally, it only required me to register an account to gain access to an API key. Within a few minutes, I was able to test a GET request with a search parameter in Postman and get a response back.

Screen Navigation: React Navigation
* For screen navigation, I decided to use React Navigation. I have used this library for the app I created with Xalt, and it is a very powerful tool. There is a lot of community support, and the documentation is easy to navigate (no pun intended!).

Screen Layout (v1)
* Home screen with a search bar, search button, search results
    * Flexbox with a column direction
* The search bar section will have a text input and search button at the top of the screen below the header
    * An icon will be in the text input
    * An icon will be used for the search button
    * Error handling message below the search bar
* The gallery container (data response) will be below the search bar
    * Flatlist will be used to render images
        * ScrollView is built-in and is responsive with other utilities
    * The Flatlist will be conditionally rendered based on search results
        * If there are no results, display an error message
* Cards will be used to display images in the Flatlist gallery
    * An image will be displayed in the card
    * The card will be pressable and will navigate to the Image Overlay screen
    * The detail section below the image will display image details
        * Icons will be used to display image details
            * Number of likes
            * Number of downloads
* Stack screen for the Image overlay
    * Fade transition into the overlay screen
    * Use the built-in header with React Navigation
        * A back button on the top left of the screen
        * Title in the middle of the header
    * Close (go back) button at the bottom of the screen

### File & Folder Structure

All files that return JSX are in PascalCase, including all folder names that have a root index.js file (which returns JSX). All other files or folders are in camelCase, including files named index.js.

* App.js
    * The main entry point for the app
    * Contains app wrappers and providers (navigation container, SafeAreaProvider)
    * Status bar component (anything that is constant throughout the app)

The design of the folder structure is intended to be scalable, easy to navigate, and follows the principles of the UX/UI. For this project, there are 4 main folders in the root directory: navigators, screens, components, lib. All

* Navigators folder
    * Contains the navigation stack for the app. For this app, it may not be necessary to have a separate folder, but it allows scalability if other navigators are needed, like a bottom tab, drawer, or other stacks. I strongly believe the screens should be separate from the navigators. When you get 6+ more screens, it can be difficult to navigate through the code if the screens are in the same folder as the navigators.

* Screens folder
    * Contains the components that are specifically used for that screen. For this app, there are only 2 screens, Home and Overlay.

* Components folder
    * This is used for components that are screen-agnostic or, in other words, reusable with any screen. Some examples are reusable buttons, icons, or cards that would be in this folder, and dynamically adjusting them using props.

* Lib folder
    * This folder is used for any helper functions or utilities used throughout the app. These file names are in camelCase since they do not return any JSX. For bigger apps, this folder could contain more folders depending on the use cases and complexity of the app. In this folder, I created a file called `createURL.js`, which dynamically creates the API URL to Pixabay with the search params. I also created a file called `theme.js` that contains any constants used throughout the app. In this case, I added a simple color palette.

## Checklist
* [x] Research and select an image search API
* [x] Test API with Postman
* [x] Create Repo
* [x] Create App using Expo
* [x] Create README
* [x] Configure React Navigation
* [x] Search Bar (text input)
* [x] Search Button
* [x] API GET request logic
* [x] Results Area
* [x] Responsive Gallery
* [x] Error Handling
* [x] Responsive Overlay
* [] Research and select a 3rd-party dictionary file
* [] Spelling Checker
* [] Decisions & Assumptions


## Prompt

Appstem React Native Developer Prototype
Create a simple mobile app using React Native. The app should display images from a search
term using an image search API of your choice (Getty Images, Unsplash, and Pixabay are some
examples). Please do not use a library or SDK that encapsulates interaction with the chosen
API, as we would like to see you demonstrate how you would design interaction with an API that
is not public. 

The app should include one text entry field, a button to request results, and a results area to
display the images in a responsive gallery style of your choice. When tapping on an image, it
should display in a responsive overlay.

Implement your own spelling checker that automatically corrects some user input mistakes. Do
NOT use any third party code or libraries to implement the spell checker as we want to see how
you write code to solve a problem; however, you are encouraged to use third party libraries for
other parts of the app. Feel free to include a third party words dictionary file to assist in
determining the validity of words.

Run your spell checker on the input word before submitting the image search requests. If
multiple corrections are possible, just pick from any of them. For example, if the user types in
ce3t, your program should return images for cat even though the user mistyped the word.

Your spell checker should perform these specific kinds of typo corrections (and only these):
- Remove non-letter characters. nyl;on should auto-correct to nylon
- Mistyped vowels. ceku should auto-correct to cake

Make sure to take into account some error handling, and keep your code clean and organized.
Create a README that documents the assumptions and decisions that you have made in
designing the architecture of your app.
Please share the code with us via Drive, Github, or another similar service
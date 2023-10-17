# Appstem React Native Developer Prototype

Designed by Kevin Nielsen


## Table of Contents
- [Installation](#installation)
- [Design Decisions & Assumptions](#design-decisions--assumptions)
- [Check-List](#check-list)
- [Prompt](#prompt)

## Installation

Describe how to install the project and its dependencies.

## Design Decisions & Assumptions

### Priorities
Due to the limited time for the assessment, I decided to focus on the following:
1. Use familiar tools and technologies
2. Quick research and selection of Image API, dictionary file, and other technologies
3. Delivering MVP with minimal styling
4. Add simple branding/styling, if time permits

### Architecture
Created app using Expo and yarn
* I decided to use Expo to create the app. I have used Expo in the past and I am very familiar with it's development environment. It also has a great documentation and community support.

Image Search API: Pixabay
* Out of the 3 API's that were listed in the prompt, Pixabay had the simiplist documentation and was extremely easy to understand.
Additionally, it only required me to register an account to gain access for an API key.
Within a few minutes I was able to get test a get request with a search parameter in Postman and get a response back.

V1 Screen Layout + Modal (Image Overlay):
* Home screen with search bar, search button, search results
    * Flex box with column direction
* Search bar section will have text input and search button
    * *Bonus, add x icon to remove all text
    * Dynamic Layout
        * if results are displayed, search bar will be at top of screen
    * error handling message below search bar
* Results area will be below search bar
    * Flatlist will be used to render images
        * Scrollview is built-in with lazy loading
* Modal screen for Image overlay

V2
1. Home 
    * Button to navigate to Search Screen
2. Search Screen modal
    * Text input (Search Bar)
    * Search Button
    * Error handling message below search bar
3. Search Results
    * Image Overlay

## Check-List
* [x] Research and select image search API
* [x] Test API with Postman
* [x] Create Repo
* [x] Create App using Expo
* [x] Create README
* [] Research and select 3rd part dictionary file
* [] Search Bar (text input)
* [] Search Button
* [] API GET request logic
* [] Error Handling
* [] Results Area
* [] Responsive Gallery
* [] Responsive Overlay
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
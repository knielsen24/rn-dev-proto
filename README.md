# Pixabay Lite React Native Developer Prototype

Designed by Kevin Nielsen

[GitHub Repo Link](https://github.com/knielsen24/rn-dev-proto "Go to repo Link")

# Table of Contents

-   [Installation](#installation)
-   [Design Decisions & Assumptions](#design-decisions--assumptions)

    -   [Priorities](#priorities)
    -   [Architecture](#architecture)
-   [File & Folder Structure](#file--folder-structure)
-   [UI Updates: React Hooks & React Native Components](#ui-updates-react-hooks--react-native-components)
    -   [Text Input Field: useState](#text-input-field-usestate)
    -   [Triggering the spellChecker: useEffect Hook](#triggering-the-spellchecker-useeffect-hook)
    -   [Submit Button: useState](#submit-button-usestate)
    -   [Custom Hook: useGetQuery](#custom-hook-usegetquery)

-   [MVP Checklist](#mvp-checklist)
-   [Prompt](#prompt)

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
3. Deliver MVP using brute force with simple styling
4. Optimize spellchecker to work for all edge cases
5. Refactor code to be scalable and reusable

### Architecture

#### The app was created using Expo and yarn

-   I decided to use Expo to create the app. I have used Expo in the past, and I am very familiar with its development environment. It also has excellent documentation and community support.

#### Image Search API: Pixabay

-   Out of the 3 APIs listed in the prompt, Pixabay had the simplest documentation and was extremely easy to understand. Additionally, it only required me to register an account to gain access to an API key. Within a few minutes, I was able to test a GET request with a search parameter in Postman and get a response back.

#### Screen Navigation: React Navigation

-   For screen navigation, I decided to use React Navigation. I have used this library for the app I created with Xalt, and it is a very powerful tool. There is a lot of community support, and the documentation is easy to navigate (no pun intended!).

#### Screen Layout (v1)

-   Home screen with a search bar, search button, search results
    -   Flexbox with a column direction
-   The search bar section will have a text input and search button at the top of the screen below the header
    -   An icon will be in the text input
    -   An icon will be used for the search button
    -   Error handling message below the search bar
-   The gallery container (data response) will be below the search bar
    -   Flatlist will be used to render images
        -   ScrollView is built-in and is responsive with other utilities
    -   The Flatlist will be conditionally rendered based on search results
        -   If there are no results, display an error message
-   Cards will be used to display images in the Flatlist gallery
    -   An image will be displayed in the card
    -   The card will be pressable and will navigate to the Image Overlay screen
    -   The detail section below the image will display image details
        -   Icons will be used to display image details
            -   Number of likes
            -   Number of downloads
-   Stack screen for the Image overlay
    -   Fade transition into the overlay screen
    -   Use the built-in header with React Navigation
        -   A back button on the top left of the screen
        -   Title in the middle of the header
    -   Close (go back) button at the bottom of the screen

### File & Folder Structure

    ├── rn-dev-proto
    │   ├── App.js
    |   |
    │   ├── navigators
    │   │   └── MainStack.jsx
    |   |
    │   ├── screens
    │   │   ├── Home
    │   │   │   ├── index.jsx
    |   |   |   ├── SearchInput.jsx
    │   │   └── Overlay
    │   │       ├── index.jsx
    |   |
    │   ├── components
    │   │   ├── Button.jsx
    │   │   └── CloseButton.jsx
    |   |   └── etc..
    |   |
    │   └── lib
    │       ├── useGetQuery.js
    │       ├── apiURL.js
    │       ├── spellChecker.js
    │       └── theme.js

All files that return JSX are in PascalCase in a `.jsx` file type, including all folder names that have a root `index.js` file (which returns JSX). All other files or folders are in camelCase with a `.js` file type, including files named `index.jsx`.

-   `App.js`
    -   The main entry point for the app
    -   Contains app wrappers and providers (navigation container, SafeAreaProvider)
    -   Status bar component (anything that is constant throughout the app)

The design of the folder structure is intended to be scalable, easy to navigate, and follows the principles of the UX/UI. For this project, there are 4 main folders in the root directory: `navigators`, `screens`, `components`, `lib`.

-   `Navigators` folder

    -   Contains the navigation stack for the app. For this app, it may not be necessary to have a separate folder, but it allows scalability if other navigators are needed, like a bottom tab, drawer, or other stacks. I strongly believe the screens should be separate from the navigators. When you get 6+ more screens, it can be difficult to navigate through the code if the screens are in the same folder as the navigators.

-   `Screens` folder

    -   Contains the components that are specifically used for that screen. For this app, there are only 2 screens, `Home` and `Overlay`.

-   `Components` folder

    -   This is used for components that are screen-agnostic or, in other words, reusable with any screen. Some examples are reusable buttons, icons, or cards that would be in this folder, and dynamically adjusting them using props.

-   `Lib` folder
    -   This folder is used for any helper functions or utilities used throughout the app. These file names are in camelCase since they do not return any JSX. For bigger apps, this folder could contain more folders depending on the use cases and complexity of the app. In this folder, I created a file called `apiURL.js`, which dynamically creates the API URL to Pixabay with the search params. I also created a file called `theme.js` that contains any constants used throughout the app. In this case, I added a simple color palette.

## UI Updates: React Hooks & React Native Components

### Text Input Field: useState

Starting with the search input, there is an on-change handler to update and set the state for the search query, and the value is connected to the React Native TextInput (passed down as props into the SearchInput component). Additionally, that handler updates the state to show a reset button that clears the search query and sets a state to show the user is typing (I will expand on that in the submit).

### Triggering the spellChecker: useEffect Hook

Getting the spell checker to function properly was a bit tricky since the spell checker needed to be triggered before submitting the request.

-   Initially, I tried putting it in the on-change handler, but that was causing the spell checker to run after every character was typed. Also, I was running into an issue where the spellChecker function was autocorrecting too quickly (sometimes after typing two letters it would autocorrect before I finished typing the word).
-   Applying the useEffect hook allowed me to trigger the spellChecker function after the user stopped typing using a setTimeout function and simply another useState function to determine if the user was typing, and it would be triggered when the searchInput state was updated. From there, the spellChecker function would run and update the searchInput state with the corrected word.
-   I felt by adding the setTimeout function, it gave a much better user experience, since they were more likely to finish typing their word and they could see the word autocorrect in real time.

### Submit Button: useState

The submit button triggers the handle submit function. Since the submit is making an API request, I used an async-await function.

### Custom Hook: useGetQuery

Created a custom hook called `useGetQuery.js` that handles the API request and returns the trigger function, data (results), error, and loading state.

-   This was a significant refactor for a couple of reasons:
    1. The `useGetQuery` hook is reusable for any screen component. It is more scalable and with a few adjustments, it could work for any API request.
    2. Not quite as important, but it makes the Home screen more readable and easier to navigate through the code.

Inspiration for the refactor

-   Although the original design did work, it lacked scalability and was not reusable in other components.
-   One of the first couple React Native YouTube tutorials I followed showed how to create a custom hook. Understanding that the prompt asked to NOT use a library or SDK that encapsulates interaction with the chosen API, I felt this was a good opportunity to show my ability to refactor and optimize.
-   Experience with Redux Toolkit and RTK Query: I've enjoyed working with this SDK in previous projects. I will say it is rewarding knowing how to create a custom hook from scratch and not needing to install the packages and set up the configuration.

## Spell Checker

Dictionary File: Found a word list JSON file (2,285 words) on GitHub. [Wordlist Link](https://github.com/bevacqua/correcthorse/blob/master/wordlist.json "Go to repo Link")

### Remove Non-Letter Characters

-   This was a simple regex expression that removed any non-letter characters from the string. I used the `replace()` method to replace any non-letter characters with an empty string.

### Mistyped Vowels

1st Attempt

-   I wanted to test problem-solving skills without "researching" for help, and I can say on my "first" attempt I was able to get the vowel replacer function to work under certain circumstances and would only change the first vowel if that was mistyped. It was finicky but it was a start, although far from ideal since it did not work for all test cases. After spending a few hours on it (easily the most time spent on one feature), I decided to step up my research game to find the solution in order to deliver the MVP on time.

2nd Attempt

-   Using my best logical (Google search) skills, I was able to find a much better solution on LeetCode for a similar problem.
-   From there, I was able to modify the code to fit the needs of the prompt to properly auto-correct for mistyped vowels. Additionally, since the solution was so elegantly simplified, I actually adjusted the logic so it was easier for me to read and understand.
-   It did force me to get a better understanding of sets and maps and the differences between them versus arrays and objects, so overall it was a great learning experience.

Logic

-   The `wordlist.json` file is imported using the `require()` method.
-   The word list is then converted into a set using the `new Set()` method (a list of unique values).
-   A Map is initialized using the `new Map()` method.
-   The query (word) gets the non-letter characters removed and is converted to lowercase.
-   To add to the Map, I used an iterator over the set to convert words to a masked word (e.g., `c_t`) and then added the masked word as the key and the original word as the value (e.g., `{"c_t" => "cat"}`).
-   From there, there are two conditional statements to see if the initial word is in the Set, and if not, check if the masked word is in the Map. If the masked word is in the Map, then the original word is returned; otherwise, the original word is returned.
-   Lastly, if there is no match, the original word is returned.

## MVP Checklist

-   [x] Research and select an image search API
-   [x] Test API with Postman
-   [x] Create Repo
-   [x] Create App using Expo
-   [x] Create README
-   [x] Configure React Navigation
-   [x] Search Bar (text input)
-   [x] Search Button
-   [x] API GET request logic
-   [x] Results Area
-   [x] Responsive Gallery
-   [x] Error Handling
-   [x] Responsive Overlay
-   [x] Research and select a 3rd-party dictionary file
-   [x] Spelling Checker
    -   [x] Remove non-letter characters
        -   [x] nyl;on -> nylon
        -   [x] cak3e -> cake
    -   [x] Mistyped vowels
        -   [x] Working with one vowel words
        -   [x] ce3t -> cat
        -   [x] ceke -> cake
        -   [x] Working with 2+ vowel words
            -   [x] ceku -> cake
            -   [x] uctur -> actor
            -   [x] bioity -> beauty
-   [x] Decisions & Assumptions
-   [x] Testing
    -   [x] Simulators: iOS & Android simulators
    -   [x] Physical Devices: iOS & Android using the Expo Go



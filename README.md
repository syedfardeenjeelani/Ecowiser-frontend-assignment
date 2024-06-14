# Ecowiser-frontend-assignment
# Notes Keeper

## Overview

Notes Keeper is a React application integrated with Firebase Firestore, designed for managing personal notes. The app supports features like creating, reading, updating, deleting, and pinning notes. It also includes pagination for easy navigation through the notes.

## Features

1. **Add Note**: Users can add a new note with a title, tagline, and body. The note is displayed in a grid layout.
2. **Edit Note**: Clicking on a note opens a pop-up allowing users to edit the note's content. The changes are saved in the database.
3. **Pin Note**: Users can pin notes such that pinned notes always appear at the top, regardless of their creation or last edit date. Only up to two notes can be pinned at a time.
4. **Pagination**: The app implements pagination, displaying a maximum of 6 notes per page.
5. **CRUD Operations**: The app uses Google Cloud's Firebase Firestore for managing the notes.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/syedfardeenjeelani/Ecowiser-frontend-assignment.git
    cd NOTEKEEPER
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Setup Firebase:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project (or use an existing one).
    - Add a web app to the project and copy the Firebase config object.
    - Create a `firebase-config.js` file in the `src` directory and add the Firebase config:
      ```javascript
      // src/firebase-config.js
      import { initializeApp } from "firebase/app";
      import { getFirestore } from "firebase/firestore";

      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      export { db };
      ```

4. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Project Structure

- `src/components/Cards.js`: Contains the main component for displaying and managing notes.
- `src/utils/Context.js`: Contains the context for managing note data.
- `src/firebase-config.js`: Firebase configuration and initialization.

## Usage

1. **Adding Notes**: Use the form to add a new note with a title, tagline, and body.
2. **Editing Notes**: Click on a note to open a pop-up for editing its content.
3. **Pinning Notes**: Click the pin icon on a note to pin it. Only two notes can be pinned at a time.
4. **Deleting Notes**: Click the delete icon to remove a note.
5. **Pagination**: Navigate through notes using the pagination controls.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.


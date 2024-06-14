# Notekeeper Application

## Overview

This Notekeeper application is designed to function similarly to Google Keep, allowing users to add, edit, and manage notes efficiently. The application includes features such as adding notes with specific details, pinning important notes, pagination, and a user-friendly interface for viewing and editing notes.

## Features

1. **Add a Note**:
    - Users can add a note with a title, tagline, and body.
    - Notes are displayed in a grid layout on the main page.
    - Clicking on a note opens a pop-up with editable content.

2. **Pin Notes**:
    - Notes can be pinned to ensure they remain at the top of the list.
    - Pinned notes are displayed above all other notes regardless of their creation or last edit date.

3. **Pagination**:
    - The application supports pagination, displaying a maximum of 6 notes per page.
    - Users can navigate through pages to view additional notes.

4. **CRUD Operations**:
    - The application uses Firebase for managing Create, Read, Update, and Delete (CRUD) operations.
    - Multiple users can add notes without requiring a sign-in.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **State Management**: React Context API
- **Backend**: Firebase
- **Frameworks/Libraries**: React, Tailwind CSS

## Installation and Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/syedfardeenjeelani/Ecowiser-frontend-assignment.git
    ```

2. Navigate to the project directory:
    ```sh
    cd notekeeper
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Set up Firebase:
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add a web app to your Firebase project.
    - Copy your Firebase configuration and replace the placeholders in your `firebaseConfig.js` file.

5. Start the application:
    ```sh
    npm start
    ```

## Usage

1. **Adding a Note**:
    - Click on the "Add Note" button.
    - Enter the title, tagline, and body of the note.
    - Click "Save" to add the note to the main page.

2. **Editing a Note**:
    - Click on a note to open it in a pop-up.
    - Edit the content and click "Save" to update the note.

3. **Pinning a Note**:
    - Click the pin icon on a note to pin it to the top of the list.
    - Pinned notes will always appear above unpinned notes.

4. **Pagination**:
    - Use the pagination controls at the bottom of the page to navigate between pages of notes.

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

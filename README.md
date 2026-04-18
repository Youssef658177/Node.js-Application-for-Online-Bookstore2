# Node.js-Application-for-Online-Bookstore2
# Book Review Application - Project Overview
This repository contains the source code for a Book Review Application. The project involves setting up the application, implementing user routes, and enhancing functionality using Promises and Async-Await.

## Completed Tasks

### Tasks 1-6: Implementing General Routes

#### Task 1: Get List of Books
Implemented code to retrieve the list of books available in the shop.

#### Task 2: Get Book Details by ISBN
Completed the functionality to retrieve book details based on the ISBN.

#### Task 3: Get Book Details by Author
Successfully implemented code to retrieve book details based on the author's name.

#### Task 4: Get Book Details by Title
Completed the code for retrieving book details based on the title.

#### Task 5: Get Book Reviews
Implemented the functionality to retrieve book reviews.

#### Task 6: Register a New User
Successfully completed the code for user registration. The application now handles scenarios where the username already exists and other error cases like missing username/password.

### Tasks 7-9: Implementing Authenticated Routes
#### Task 7: User Login
Successfully implemented user login functionality. The code validates and signs in a customer based on the username and password created during user registration (Task 6). User credentials are saved for the session as a JWT.

#### Task 8: Add/Modify Book Review
Completed the code for adding or modifying a book review. Reviews are posted with the username stored in the session. If the same user posts a different review on the same ISBN, it modifies the existing review. If another user logs in and posts a review on the same ISBN, it adds a new review under the same ISBN.

#### Task 9: Delete Book Review
Implemented the code for deleting a book review. Reviews are filtered and deleted based on the session username, allowing a user to delete only their reviews and not others'.

These tasks enhance the functionality of the Book Review Application, providing features like user login, review addition/modification, and review deletion.

### Task 10-13: Async Functionality and API Integration
Implemented advanced features leveraging Promise callbacks and async-await with Axios for asynchronous operations:

#### Task 10: Fetched the list of books using Promise callbacks and async-await.
#### Task 11: Enhanced book details retrieval by ISBN with improved asynchronous handling.
#### Task 12: Extended functionality to fetch book details by author using async-await.
#### Task 13: Added the ability to fetch book details by title with async-await.
These enhancements contribute to a more efficient and responsive Book Review Application.

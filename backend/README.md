# Backend for Simple Note-Taking Application

## Overview
This is the backend server for the Simple Note-Taking Application built using Node.js and Express.js. The server interacts with MongoDB to store notes along with their associated random cat facts.

## Features
- Create, retrieve, delete, and search notes.
- Each note is associated with a random cat fact.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing notes.
- **Axios**: For making HTTP requests to retrieve random cat facts.

## Installation

### Prerequisites
- Node.js (>=14.x)
- MongoDB

### Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd <repository_name>/backend

2.	**Install Dependencies**

### `npm install`

3. **Start the Server**

### `npm start`

The backend server will run on http://localhost:5000.

**API Endpoints**

1. **Create a Note**

	### •	Endpoint: POST /api/notes
	**•	Request Body:**

```{
    "title": "Note Title",
    "content": "This is the content of the note."
    }```


	** •	Response: **

```{
    "id": "unique_note_id",
    "title": "Note Title",
    "content": "This is the content of the note.",
    "catfact": "Random cat fact."
    }



2. ** Retrieve All Notes **

	### •	Endpoint: GET /api/notes
	** •	Response: **

``` [
        {
            "id": "unique_note_id",
            "title": "Note Title",
            "content": "This is the content of the note.",
            "catfact": "Random cat fact."
        }
    ]



3. ** Delete a Note **

	### •	Endpoint: DELETE /api/notes/:id
	**  •	Response: **

    ``` {
        "message": "Note deleted successfully."
        }



4. ** Search for Notes**

	### •	Endpoint: GET /api/notes/search?query=search_term
	**  •	Response: **

    ``` [
            {
                "id": "unique_note_id",
                "title": "Note Title",
                "content": "This is the content of the note.",
                "catfact": "Random cat fact."
            }
        ]



** Error Handling ** 

	•	The server implements error handling for all endpoints, returning relevant status codes and error messages.

Contribution

Feel free to contribute by creating issues or submitting pull requests!

License

This project is licensed under the MIT License.

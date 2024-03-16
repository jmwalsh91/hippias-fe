/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

interface paths {
  "/authors": {
    /** Retrieves a list of authors */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Author"][];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/authors/{id}": {
    /** Retrieves an author by their ID */
    get: {
      parameters: {
        path: {
          /** Author ID */
          id: number;
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Author"];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/book/{id}": {
    /** Retrieves a book by its ID */
    get: {
      parameters: {
        path: {
          /** Book ID */
          id: number;
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Book"];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/books/author/{id}": {
    /** Retrieves books by the author's ID */
    get: {
      parameters: {
        path: {
          /** Author ID */
          id: number;
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Book"][];
        };
        /** Bad Request */
        400: {
          schema: definitions["server.ErrorResponse"];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/courses": {
    /** Retrieves a list of courses */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Course"][];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
    /** Creates a new course */
    post: {
      parameters: {
        body: {
          /** Course object */
          course: definitions["models.Course"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Course"];
        };
        /** Bad Request */
        400: {
          schema: definitions["server.ErrorResponse"];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/courses/details/{id}": {
    /** Retrieves the course details along with its associated facilitator and an array of books included in the course */
    get: {
      parameters: {
        path: {
          /** Course ID */
          id: number;
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["server.GetCourseWithDetailsResponse"];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/courses/{id}": {
    /** Retrieves a course by its ID */
    get: {
      parameters: {
        path: {
          /** Course ID */
          id: number;
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Course"];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/facilitators": {
    /** Retrieves a list of facilitators */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Facilitator"][];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
    /** Creates a new facilitator */
    post: {
      parameters: {
        body: {
          /** Facilitator object */
          facilitator: definitions["models.Facilitator"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Facilitator"];
        };
        /** Bad Request */
        400: {
          schema: definitions["server.ErrorResponse"];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/facilitators/{id}": {
    /** Retrieves a facilitator by their ID */
    get: {
      parameters: {
        path: {
          /** Facilitator ID */
          id: number;
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Facilitator"];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
    /** Deletes a facilitator by their ID */
    delete: {
      parameters: {
        path: {
          /** Facilitator ID */
          id: number;
        };
      };
      responses: {
        /** No Content */
        204: never;
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
  "/list": {
    /** Retrieves a list of books */
    get: {
      responses: {
        /** OK */
        200: {
          schema: definitions["models.Book"][];
        };
        /** Internal Server Error */
        500: {
          schema: definitions["server.ErrorResponse"];
        };
      };
    };
  };
}

interface definitions {
  "models.Author": {
    createdAt?: string;
    description?: string;
    id?: number;
    name?: string;
    nationality?: string;
    updatedAt?: string;
  };
  "models.Book": {
    author?: string;
    authorId?: number;
    createdAt?: string;
    description?: string;
    id?: number;
    title?: string;
    updatedAt?: string;
  };
  "models.Course": {
    createdAt?: string;
    description?: string;
    facilitatorId?: number;
    id?: number;
    title?: string;
    updatedAt?: string;
  };
  "models.Facilitator": {
    bio?: string;
    createdAt?: string;
    email?: string;
    id?: number;
    name?: string;
    updatedAt?: string;
  };
  "server.ErrorResponse": {
    message?: string;
  };
  "server.GetCourseWithDetailsResponse": {
    books?: definitions["models.Book"][];
    course?: definitions["models.Course"];
    facilitator?: definitions["models.Facilitator"];
  };
}

interface operations {}

interface external {}
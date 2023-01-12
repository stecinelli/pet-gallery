# &lt;/salt&gt;

## Puppies API with Typescript

In this exercise you will create a puppy API with Express and Typescript. The goal is to get familiar with Typescript and how to use it in Node.js. Again, if you are in the DNFS or JFS stack, switch this API to your respective language and skip TypeScript. (then, just delete the rest of the files and just keep this README!)

### The task

Your task is to create a RESTful API with the following endpoints:

- GET: `api/puppies`. This should return a list of all puppies in JSON-format.
- GET: `api/puppies/:id`. This should return one puppy in JSON-format.
- POST: `api/puppies`. This should create and return the newly added puppy.
- PUT: `api/puppies/:id`. This should put one puppy down (jk, just update the specific puppy).
- DELETE: `api/puppies/:id`. This should actually put one puppy down aka delete it.

The database for this task can just be a local array or a real database, it is up to you.

Each `puppy` should have the following attributes: 
    - id
    - breed
    - name
    - birth date

### TypeScript

Remember that there are built in types in Express that you should use, e.g. in app.ts you can see that `Request`, `Response` and `Application` are types supplied from Express.

### Extra challenge

Your task is to create a frontend to the API that you created. The application should be built with React and TypeScript

Requirements for the UI:
- It should display the initial puppies that exist in the DB on first load.
- It should have the possibility to add a new puppy.
- It should have the possibility to update an existing puppy.
- It should be able to delete a puppy from the DB.
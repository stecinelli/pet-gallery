## Puppies API with Typescript

In this app I created an API with Express and Typescript and a quick frontend with React and Typescript.

<img src="/Screenshot Web 1 - Card Gallery.jpg" alt="Screenshot Web" title="Screenshot Web" width="30%" height="30%"/> &nbsp;<img src="/Screenshot Web - Card Gallery.jpg" alt="Screenshot Web" title="Screenshot Web" width="23%" height="23%"/> &nbsp;<img src="/Screenshot Mobile - Card Gallery.jpg" alt="Screenshot Mobile" title="Screenshot Web" width="10%" height="10%"/> &nbsp;<img src="/Screenshot Mobile 2 - Card Gallery.jpg" alt="Screenshot Mobile" title="Screenshot Web" width="10%" height="10%"/>

### API Info

I chose to do this API with puppies informations 🐶💓

- GET: `api/puppies`. This return a list of all puppies in JSON-format.
- GET: `api/puppies/:id`. This return one puppy in JSON-format.
- POST: `api/puppies`. This create and return the newly added puppy.
- PUT: `api/puppies/:id`. This put one puppy down (jk, just update the specific puppy).
- DELETE: `api/puppies/:id`. This actually put one puppy down aka delete it.

Data structure

Each `puppy` have the following attributes: 
    - id
    - breed
    - name
    - birth date

### Frontend

- It display the initial puppies that exist in the DB on first load.
- It has the possibility to add a new puppy.
- It has the possibility to update an existing puppy.
- It is possible to delete a puppy from the DB.

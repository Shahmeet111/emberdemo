export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
 let userCtrl = {
    getAll: (db, request) => { return db.db.users; },
    create: (db, request) => { db.db.users.insert(JSON.parse(request.requestBody)); return { success: true }; },
    update: (db, request) => { db.db.users.update(request.params.id, JSON.parse(request.requestBody)); return { success: true }; },
    remove: (db, request) => { var id = request.params.id; db.db.users.remove({ id: id }); return { success: true }; },
    get: (db, request) => { var id = request.params.id; return db.users.find(id); }
  };
  this.namespace = '/api';
  //Get all user
  this.get('/users', userCtrl.getAll);
  //Create new user
  this.post('/user', userCtrl.create);
  //Update user by Id
  this.put('/users/:id', userCtrl.update);
  //Delete user by Id
  this.del('/users/:id', userCtrl.remove);
  //Get user by Id
  this.get('/users/:id', userCtrl.get);
}

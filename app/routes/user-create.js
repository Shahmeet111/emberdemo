import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(params) {
    if (params.queryParams.id == undefined) {
      this.id = 0;
    }
    else {
      this.id = params.queryParams.id;
    }
  },
  model() {
    if (this.id == 0) {
      localStorage.removeItem('id');
      return this.get('store').createRecord('user', {
      });
    }
    else {
      return Ember.$.ajax({
        url: "/api/users/" + this.id,
        type: "get"
      }).then((resp) => {
        localStorage.setItem('id', this.id);
        var detail = resp.data.attributes;
        return this.get('store').createRecord('user', {
          userId: detail.id,
          firstName: detail['first-name'],
          lastName: detail['last-name'],
          email: detail.email,
          age: detail.age,
          address: detail.address,
          password: detail.password,
          confirmpassword: detail.password
        });
      }).catch((error) => {
        alert('something went wrong, try again');
        // handle errors here
      });

    }

  }
});

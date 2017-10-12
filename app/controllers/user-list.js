import Ember from 'ember';

export default Ember.Controller.extend({
    actions:
    {
        delete(id) {
            var result = confirm("Are you sure want to delete?");
            if (result) {
                Ember.$.ajax({
                    url: "/api/users/" + id,
                    type: "delete"
                }).then((resp) => {
                    Ember.$.get("/api/users").then(
                        (response) => {
                            this.set('model', response);
                            //return response;
                        },

                    );
                }).catch((error) => {
                    // handle errors here
                     alert('something went wrong, try again');
                });
            }
        },

        edit(id) {
            this.transitionToRoute('user-create', { queryParams: { id: id } });
        }

    }
});

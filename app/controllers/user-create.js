import Ember from 'ember';
import UserValidations from '../validations/user'
import { schema } from '../models/user';
const { get } = Ember;
const { keys } = Object;


export default Ember.Controller.extend({
    UserValidations,
    actions: {
        save(changeset) {
            let snapshot = changeset.snapshot();
            return changeset
                .cast(keys(schema))
                .validate()
                .then(() => {
                    
                    if (get(changeset, 'isValid')) {
                        if (localStorage.getItem('id')) {
                            Ember.$.ajax({
                                url: "/api/users/"+localStorage.getItem('id'),
                                type: "put",
                                data: JSON.stringify(snapshot.changes)
                            }).then((resp) => {
                                this.transitionToRoute('/');
                            }).catch((error) => {
                                 alert('something went wrong, try again');
                                // handle errors here
                            });
                        }
                        else {
                            var data = snapshot.changes;
                            data.id = Math.floor((Math.random() * 100) + 1);
                            Ember.$.ajax({
                                url: "/api/user",
                                type: "POST",
                                data: JSON.stringify(data)
                            }).then((resp) => {
                                this.transitionToRoute('/');
                            }).catch((error) => {
                                 alert('something went wrong, try again');
                                // handle errors here
                            });
                            // return changeset.execute();
                        }
                    }
                }).catch(() => {
                    changeset.restore(snapshot);
                });

        },

        reset(changeset) {
            this.transitionToRoute('/');
           // return changeset.rollback();
        },

        validateProperty(changeset, property) {
            return changeset.validate(property);
        }
    }
});

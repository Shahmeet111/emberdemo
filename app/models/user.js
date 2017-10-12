import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export const schema = {
    firstName: attr('string'),
    lastName: attr('string'),
    email: attr('string'),
    age: attr('number'),
    address: attr('string'),
    password: attr('string'),
    confirmpassword: attr('string')
};

export default Model.extend(schema);
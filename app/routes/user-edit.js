import Ember from 'ember';

export default Ember.Route.extend({
     beforeModel(params){ 
      console.log(params.queryParams.id); //if the parameter contains test as the key
  }

//   Model(params)
//   {
//       return
//   }
});

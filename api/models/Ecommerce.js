/**
 * Ecommerce.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      //id: {type:'string',columnName:'_id', autoIncrement: false },
      name: {type: 'string', required: true},
      price: {type: 'number', required: true},
      desc: {type: 'string', required: true},
      img: {type: 'string', required: true}, 
      stock: {type: 'number', required: true}
  },

};


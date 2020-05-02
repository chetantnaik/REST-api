var mongooseRest = require('mongoose');
//Define the schema
var statesSchema = mongooseRest.Schema({
    area: { type: Number, required: true },
    name: { type: String, required: true },
    region: { type: String, required: true },
    state_abbr: { type: String, required: true },
    population: { type: Number, required: false }
});
//Export schema
module.exports = mongooseRest.model('USA_states', statesSchema, 'USA_states');

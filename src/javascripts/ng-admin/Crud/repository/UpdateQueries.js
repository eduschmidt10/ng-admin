var utils = require('../../lib/utils'),
    Queries = require('./Queries');

/**
 * @constructor
 */
function UpdateQueries() {
    Queries.apply(this, arguments);
}

utils.inherits(UpdateQueries, Queries);

/**
 * Update an entity
 * Put the data to the API to create the new object
 *
 * @param {View}   view             the formView related to the entity
 * @param {Object} rawEntity        the entity's object
 * @param {String} originEntityId   if entity identifier is modified
 *
 * @returns {promise} the updated object
 */
UpdateQueries.prototype.updateOne = function (view, rawEntity, originEntityId) {
    var entityId = originEntityId || rawEntity[view.getEntity().identifier().name()];

    // Get element data
    return this.Restangular
        .oneUrl(view.entity.name(), this.config.getRouteFor(view, entityId))
        .customPUT(rawEntity)
        .then(function (response) {
            return view.mapEntry(response.data);
        });
};

UpdateQueries.$inject = ['$q', 'Restangular', 'NgAdminConfiguration', 'PromisesResolver'];

module.exports = UpdateQueries;

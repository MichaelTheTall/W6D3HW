const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let result = this.journeys.map(j=>j.startLocation);
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let result = this.journeys.map(j=>j.endLocation);
  return result;
};

Traveller.prototype.getModesOfTransport = function () {
  let result = this.journeys.map(j=>j.transport);
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter(j => j.transport === transport);
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let result = this.journeys.filter(j => j.distance >= minDistance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let lengthArray = this.journeys.map(j => j.distance);
  let sum = (total, currentValue) => total + currentValue;
  let result = lengthArray.reduce(sum);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

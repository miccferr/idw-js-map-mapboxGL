var turf = require('turf');
var fs = require('fs');

var IDW = require('./index.js');

IDW.IDW()
// create random points with random
// z-values in their properties
var points = turf.random('point', 100, {
  bbox: [0, 30, 20, 50]
});
for (var i = 0; i < points.features.length; i++) {
  points.features[i].properties.z = Math.random() * 10;
}
var breaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isolined = turf.isolines(points, 'z', 15, breaks);

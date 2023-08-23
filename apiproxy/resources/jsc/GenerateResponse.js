 
var elevationMeters = context.getVariable('elevationresponse.elevation');
var elevationFeet = elevationMeters * 3.2808399;


response.content = '';
response.headers['Content-Type'] = 'application/json';


var r = response.content.asJSON;
r.country = context.getVariable('Country');
r.postalcode = context.getVariable('PostalCode');

var el = new Object();
el.meters = elevationMeters;
el.feet = elevationFeet;
r.elevation = el;

var loc = new Object();
loc.latitude = context.getVariable('geocoderesponse.latitude');
loc.longitude = context.getVariable('geocoderesponse.longitude');
r.location = loc;
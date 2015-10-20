
var userTestData = {
  "user": [
    {"member-id":"12345", "last-name": "Testman", "first-name":"Roger", "eligibility-start": "1420070400", "carrier-name": "Williamette Health Alliance", "carrier-id":"9999999", "provider": "100", "status" : "1" }
  ]
}

var providerTestData = [
{"id": "100", "name": "Dr. Shurt's Office"},
{"id": "101", "name": "Rose City Clinic"},
{"id": "102", "name": "Hillsboro Northside"}
                                      ]

var carrierTestData = [
  {"id": "1000", "name": "Williamette Health Alliance"},
  {"id": "1001", "name": "Group Health"},
  {"id": "1002", "name": "Blue Cross"}
]

// API CALL STUBS
function getLocations(){
  // This would be my call to the server/API
  return locationTestData;
}

function getProviders(){
  return providerTestData;

}
function getCarriers(){
  return carrierTestData;
}

function getUser(id){
  //This would be my call to the server/API
  var user = userTestData.user[0];
  return user;
}

//Controller Class
function controllerUserNew(){
  this.providers = getProviders();
  this.carriers = getCarriers();
  this.statusOptions = ["ineligible", "eligible", "termed"];
}

function User(){
  this.save = function(){
    //Call API to add new user
    return true;
  }
}

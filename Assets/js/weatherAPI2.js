//Array of Beach Objects
var beachIDs = [
    {
        beach: "Oak Street",
        foodQuery: "restaurants%20near%20Oak%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJQZJQJFfTD4gRajRN4wWCges",
        locationQuery: "41.9019772,-87.6222749",
        latQuery:"",
        lonQuery:""
    },
    {
        beach: "North Ave",
        foodQuery: "restaurants%20near%20North%20Avenue%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJDw9m7GbTD4gRfxvHEJFgLBs",
        locationQuery: "41.9141994,-87.6244975",
        latQuery:"41.9141994",
        lonQuery:"-87.6244975"
    },
    {
        beach: "Montrose",
        foodQuery: "restaurants%20near%20Montrose%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJlyqafN3TD4gRNJsjKC7Alk8",
        locationQuery: "41.9650322,-87.6347771",
        latQuery:"",
        lonQuery:""
    },
    {
        beach: "12th Street",
        foodQuery: "restaurants%20near%2012th%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJIfbnQHArDogRFE5PEwDHQbU",
        locationQuery: "41.8636,-87.6074",
        latQuery:"",
        lonQuery:""
    },
    {
        beach: "Ohio Street",
        foodQuery: "restaurants%20near%20Ohio%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJwR5paVMrDogRhMIXATY07a4",
        locationQuery: "41.8935,-87.6129",
        latQuery:"",
        lonQuery:""
    },
    {
        beach: "Foster",
        foodQuery: "restaurants%20near%20Foster%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJt9K2mXzRD4gRn6RCpGid0n0",
        locationQuery: "41.9800,-87.6499",
        latQuery:"",
        lonQuery:""
    },
    {
        beach: "Hollywood",
        foodQuery: "restaurants%20near%20Hollywood%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJYwGn4HDRD4gRJ1_Oj6Oh-R8",
        locationQuery: "41.9862,-87.6520",
        latQuery:"",
        lonQuery:""
    },
    {
        beach: "63rd Street",
        foodQuery: "restaurants%20near%2063rd%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJ1_rYG68pDogR0iUE_kgJ2cc",
        locationQuery: "41.7820,-87.5733",
        latQuery:"",
        lonQuery:""
    }
];

var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 41.9019772, lng: -87.6222749 },
                zoom: 15
            });
        };


$("button").on("click", function () {

    //Beach Dropdown Selection
    var event = document.getElementById("beachSelect");
    var selection = event.options[event.selectedIndex].value;
    document.getElementById("beachDisplay").innerHTML = selection;
    console.log("selection: " + selection)
    
    //Loop through Array
    var values = Object.values(beachIDs);
    console.log(values);
   

    //replace oak street with value from THIS id or value
    for (i = 0; i < values.length; i++) {
        if (values[i].beach = selection) {
            console.log(values[i].beach);
            //Find Matching Object Values in Array 
            var foodQueryString = values[i].foodQuery;
            console.log("FQ: " + foodQueryString);
            var locationQueryString = values[i].locationQuery;
            console.log("LQ: " + locationQueryString);
           
            //Dark Sky API Call with Selected Beach
            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4a4040a2a6849005fa4c1146c74f1d8f/" + locationQueryString,
                method: "GET",
            })
                .then(function (response) {
                    console.log(response);
                    var results = response.data;
                })
            
        } else {
            return
        }
    }
});


 // information of this app
        var appkey = "fad97b52a8bbcb92e7a4f0d6d76492f836b268ba7f3d2244bf8562857d43114c";
        var clientkey = "626dc2f01f7f3b636d38d1d764534320bdf03f2cf27cf363a2d0289b3545087e";
        var appID = "31yRkZqpIbL5l2Qm";
        var commonURL = "https://mb.api.cloud.nifty.com/2013-09-01/applications/"+ appID +"/publicFiles/";

        function omikuji (){
            // Initialize and set the app to use NCMB in Monaca
            NCMB.initialize(appkey, clientkey);
            var monotest = NCMB.Object.extend("monotest");
            var query = new NCMB.Query(monotest);

            query.find({
              success: function(results) {
                  // Get a random image name of the picture from the class "randomFortune" in NCMB  
                  var image_name = results[Math.floor(Math.random()*results.length)].get("image");

                  // Change the css styles and srcs according to the omiukji states  
                  document.getElementById("saisyo").style["display"] = "none";
                  document.getElementById("kekka").src = commonURL +image_name;
                  document.getElementById("kekka").style["display"] = "inline";
                  document.getElementById("button").src = "./images/omikuji-btn-yarinaosu.png";
              },
              error: function(error) {
                  alert(error.toString() + "error occured")
              }
            });
        }
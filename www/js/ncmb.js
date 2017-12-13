// gitテストするよ

 // information of this app
        var appkey = "fad97b52a8bbcb92e7a4f0d6d76492f836b268ba7f3d2244bf8562857d43114c";
        var clientkey = "626dc2f01f7f3b636d38d1d764534320bdf03f2cf27cf363a2d0289b3545087e";
        var appID = "31yRkZqpIbL5l2Qm";
        var commonURL = "https://mb.api.cloud.nifty.com/2013-09-01/applications/"+ appID +"/publicFiles/";

        window.onload = function(){
            // Initialize and set the app to use NCMB in Monaca
            NCMB.initialize(appkey, clientkey);
            var monokuro = NCMB.Object.extend("monokuro");
            var query = new NCMB.Query(monokuro);
        

            query.find({
              success: function(results) {
                  // Get a random image name of the picture from the class "randomFortune" in NCMB
                  var num = Math.floor(Math.random()*results.length);
                  var image_name = results[num].get("image");
                  var image_name2 = results[num - Math.floor(Math.random()*num)].get("image");
                  var image_name3 = results[num - Math.floor(Math.random()*num)].get("image");
                  var image_name4 = results[num - Math.floor(Math.random()*num)].get("image");
                  var image_name5 = results[num - Math.floor(Math.random()*num)].get("image");
                  var image_name6 = results[num - Math.floor(Math.random()*num)].get("image");
                  var image_name7 = results[num - Math.floor(Math.random()*num)].get("image");
                  var image_name8 = results[num - Math.floor(Math.random()*num)].get("image");
                  var image_name9 = results[num - Math.floor(Math.random()*num)].get("image");


                  // Change the css styles and srcs according to the omiukji states  
                 $(".img1").attr("src" ,commonURL +image_name);
                 $(".img2").attr("src" ,commonURL +image_name2);
                 $(".img3").attr("src" ,commonURL +image_name3);
                 $(".img4").attr("src" ,commonURL +image_name4);
                 $(".img5").attr("src" ,commonURL +image_name5);
                 $(".img6").attr("src" ,commonURL +image_name6);
                 $(".img7").attr("src" ,commonURL +image_name7);
                 $(".img8").attr("src" ,commonURL +image_name8);
                 $(".img9").attr("src" ,commonURL +image_name9);
                  
              },
              error: function(error) {
                  alert(error.toString() + "error occured");
              }
            });
}
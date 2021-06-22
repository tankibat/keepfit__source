
    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCkgY5iy0Y4SqQustDKlee7g';

      document.addEventListener("DOMContentLoaded", async function asyncCall() {
  

try {   //alert("Loadding........");
                    const data = await fetch(baseUrl).then(response => response.json());
                    if (!data.items) {
                        throw new Error();
                    }
                    
                   
    var i=0;

    for (i=0;i<10;i++) { 
//document.write(data.items[i].enclosure.thumbnail);
   //document.getelemenbyid("imgx"+i).href=data.items[i].enclosure.thumbnail;
 
  


 document.getElementById("myImg"+i).src = data.items[i].enclosure.thumbnail;

 document.getElementById("myAnchor"+i).href =  data.items[i].enclosure.link;
 document.getElementById("tiTle"+i).innerHTML = "   " + data.items[i].title;




         
                                        
   
       
   }

                    //console.log(data.items);
                    //console.log(data.items[0].author);
                    }

                catch (error) {
                    console.log(error);
                    console.log(`Couldn't retrieve videos, check your channel ID.`); // Set the error state if an error occurrs
                }

} );

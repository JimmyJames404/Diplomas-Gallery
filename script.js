fetch("data.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);

        galleryD = [];
        for (var i = 0; i < data.diploma.length; i++) {
          galleryD.push(data.diploma[i]);//tennisProducts2[i].ProductName;
          var num = galleryD[i].num;
          var category = galleryD[i].category;
          var name = galleryD[i].name;
          var image = galleryD[i].image;
          var granted = galleryD[i].granted;
          var skills = galleryD[i].skills;
          var description = galleryD[i].description;
          var online = galleryD[i].online;
          var pdf = galleryD[i].pdf;
          var simple 
          if (online != 'NONE') {
            var simple = '<button type="button" class="btn btn-default" onclick="window.location.href='+online+'" target="_blank" >ORIGINAL SITE</button>' 
            } 
          else {
            var simple ="<br>"
          }


          var badge = document.createElement('div');
          badge.innerHTML =
          '<div class="gallery-item ' + category + '">' +
            '<div class="gallery-item-inner">' +
                '<img class="resize"src="' + image + '" alt="'+ name + '">' +
                '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#'+ num +'">'+name+'</button>' +
              '<div class="modal fade" id="'+ num +'" role="dialog">' +
                '<div class="modal-dialog">' +
                  '<div class="modal-content">' +
                    '<div class="modal-header">' +
                      '<button type="button" class="close" data-dismiss="modal">&times;</button>' + 
                      '<h4 class="modal-title">'+ name +'</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                      '<p><b>Granted by :</b> '+granted+'</p>' +
                      '<p><b>Skills :</b> '+skills+'</p>' +
                      '<p><b>Description :</b> '+description+'</p>' +
                    '</div>' +
                    '<div class="modal-footer">' +
                      '<button type="button" class="btn btn-default" onclick="window.location.href='+pdf+'" target="_blank" >PDF</button>' +                        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                      simple +
                    '</div>'+
                  '</div>'+   
                '</div>'+     
              '</div>'+
            '</div>'+
          '</div>';
              document.getElementById('diplomas').appendChild(badge);
              
        }
        // FILTERS
        const filterContainer = document.querySelector(".gallery-filter");
        const galleryItems = document.querySelectorAll(".gallery-item");

        filterContainer.addEventListener("click", (event) =>{
          if(event.target.classList.contains("filter-item")){

            // deactivate existing active 'filter-item'
          filterContainer.querySelector(".active").classList.remove("active");

            // activate new 'filter-item'
          event.target.classList.add("active");

          const filterValue = event.target.getAttribute("data-filter");

          galleryItems.forEach((item) =>{

              if(item.classList.contains(filterValue) || filterValue === 'all'){
              item.classList.remove("hide");
                item.classList.add("show");
              }

              else{
              item.classList.remove("show");
              item.classList.add("hide");
              }

            });
          }
        });
    });







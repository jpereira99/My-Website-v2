(function() {

        //Get json data from server
        $.ajax({
            dataType: "json",
            url: "http://jaydenpereira.com/static/JSON/githubData.json",
            cache: false,  //do not cache
            success: function(data){

                var arrItems = [];
                $.each(data, function (index, value) {
                    arrItems.push(value);
                });

                //loop for objects in array
                for (var i = 0; i < arrItems.length ; i++) {

                    //Create primary card wrapper div
                    var newDiv = document.createElement("div");
                    newDiv.setAttribute("class", "uk-card uk-padding-small");
                    newDiv.id = i
                    document.getElementById('cardWrapper').appendChild(newDiv);

                    //Create secondary card wrapper div
                    var newDiv = document.createElement("div");
                    newDiv.setAttribute("class", "uk-card-body");
                    newDiv.id = (i + 'wrapper')
                    document.getElementById(i).appendChild(newDiv);

                    //Create image
                    var image = document.createElement("img");
                    image.style.borderRadius = "25px";
                    image.src = "/static/4by3test.png"
                    document.getElementById(i + 'wrapper').appendChild(image);

                    //Create text container div
                    var newDiv = document.createElement("div");
                    newDiv.setAttribute("class", "uk-padding-small uk-padding-remove-top");
                    newDiv.id = (i + 'textContainer')
                    document.getElementById('Cards').appendChild(newDiv);

                    var newDiv = document.createElement("div");
                    newDiv.setAttribute("class", "uk-card-body");
                    newDiv.id = (i + 50)
                    document.getElementById(i + 'textContainer').appendChild(newDiv);

                    //Create Title header
                    var createTitle = document.createElement("h1");
                    var tContent = document.createTextNode( arrItems[i]['name'] );
                    createTitle.appendChild(tContent);
                    var appender = document.getElementById(i + 'textContainer');
                    appender.append(createTitle);

                    //Create Date Paragraph
                    var createDate = document.createElement("p");
                    createDate.setAttribute("class", "uk-text-muted");
                    var dateContent = document.createTextNode("Updated: " + arrItems[i]['updated_at']);
                    createDate.appendChild(dateContent);
                    var appender = document.getElementById(i + 'textContainer');
                    appender.append(createDate);

                    //Create Description Paragraph
                    var createP = document.createElement("p");
                    createP.setAttribute("class", "uk-text-emphasis");
                    var pContent = document.createTextNode( arrItems[i]['description']);
                    createP.appendChild(pContent);
                    var appender = document.getElementById(i + 'textContainer');
                    appender.append(createP);

                    //Create Link Button to GitHub
                    var createLink = document.createElement("a");
                    createLink.setAttribute("href", arrItems[i]['url'] );
                    createLink.setAttribute("class", "resumeButton");
                    createLink.setAttribute("target", "_blank")
                    var lContent = document.createTextNode( "Link to GitHub" );
                    createLink.appendChild(lContent);
                    document.getElementById(i + 'wrapper').appendChild(createLink);

                }

            }

        });

}());
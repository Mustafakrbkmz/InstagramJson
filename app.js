document.getElementById("bring").addEventListener("click", call);

function call() {


    const xhr = new XMLHttpRequest();

    hashtag = document.getElementById("hashtag").value;
    xhr.open("GET", "https://www.instagram.com/explore/tags/" + hashtag + "/?__a=1")

    xhr.onload = function () {
        if (this.status == 200) {
            const response = JSON.parse(this.responseText);

            const rate = response.graphql.hashtag.edge_hashtag_to_media.edges;
            if (document.getElementsByClassName('col-md-3').length > 0) {
                for (var i = 0; i < 12; i++) {
                    const url = (rate[i].node.display_url);
                    document.getElementById("img-" + i).src = url;
                }
            }
            else {
                for (var i = 0; i < 12; i++) {
                    var col = document.createElement("div");
                    col.className = "col-md-3";
                    col.style = "margin-bottom: 50px; margin-right: 50px;";
                    col.id = 'col-md-image-' + i;

                    document.getElementById("row-img").appendChild(col);
                    const url = (rate[i].node.display_url);
                    var imag = document.createElement("img");
                    imag.id = "img-" + i;
                    document.getElementById('col-md-image-' + i).appendChild(imag);

                    imag.src = url;
                    imag.width = 300;
                    imag.height = 300;

                }
            }
        }
        else { alert("Not Found") }
    }
    xhr.send();

}
var urlPath = $("#urlPath").val();
let menuLength;
$(document).ready(function () {
    getMenu();

    const idMenu = document.getElementById("menuForm");
    const arrayOfData = Array.from(idMenu, node => node.children);
    console.log(idMenu.getElementsByTagName("li"));

    
});


function getMenu() {
    var i = 0;
    var j = 0;
    $.ajax({
        url: urlPath + '/api/form/user/get/menu',
        cache: false,
        method: "POST",
        //data: JSON.stringify({ id: $("#ddCategory").val() }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            document.getElementById("menuForm").innerHTML = "";

            rowMenu = res.responseJSON.Value;
            let rowChild;

            menuLength = rowMenu.length;

            while (i < rowMenu.length) {
                rowChild = rowMenu[i].children;
                document.getElementById("menuForm").innerHTML = document.getElementById("menuForm").innerHTML
                    + "<li class='nav-item'>" +
                    "<a class='nav-link text-white active bg-gradient-primary parentMenu' onclick='treeLevel(event, "+ [i] +");' href='#' id='master" + [i] + "'>" +
                        "<div class='text-white text-center me-2 d-flex align-items-center justify-content-center'>" +
                            "<i class='fa fa-sitemap' aria-hidden='true'></i>" +
                        "</div ><span class='nav-link-text ms-1'>" + rowMenu[i].nama + "</span>" +
                    "</a>" +
                    "<ul class='submenu navbar-nav' id='parent"+ [i] +"'>";
                        while (j < rowChild.length) {
                            document.getElementById("parent" + [i]).innerHTML = document.getElementById("parent" + [i]).innerHTML
                            //document.getElementsByClassName("submenu").innerHTML = document.getElementsByClassName("submenu").innerHTML
                                + `<li class="nav-item">
                                        <a href="${rowChild[j].domain + rowChild[j].url}" class="nav-link child text-white child" id="form${rowChild[j].id}">
                                            <div class="text-white text-xs text-center d-flex align-items-center justify-content-center">
                                            </div>
                                            <span class="nav-link-text">${rowChild[j].nama}</span>
                                        </a>
                                    </li>`;
                    
                            j++;
                        }
                j = 0;
                "</ul></li>";
                i++;
            }
        }
    })
}

function treeLevel(e, id) {
    var $yourUl = $("#parent" + id);
    //$(this).next('.submenu').slidetoggle();
    $yourUl.css("display", $yourUl.css("display") === 'none' ? 'block' : 'none');
}

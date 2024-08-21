var urlPath = $("#urlPath").val();

$(document).ready(function () {

    getMenu();

    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
        var options = {
            damping: '0.5'
        }
        Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
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

            let rowMenu = res.responseJSON.Value;
            let rowChild;
            //console.log(rowMenu);

            while (i < rowMenu.length) {
                rowChild = rowMenu[i].children;
                document.getElementById("menuForm").innerHTML = document.getElementById("menuForm").innerHTML
                    + "<li class='nav-item parentMenu'>" +
                    "<a class='nav-link text-white active bg-gradient-primary' href='#'>" +
                    "<div class='text-white text-center me-2 d-flex align-items-center justify-content-center'>" +
                    "<i class='fa fa-sitemap' aria-hidden='true'></i><input type='hidden' value='" + rowMenu[i].id + "' id='txtIdMenu'/>" +
                    "</div ><span class='nav-link-text ms-1'>" + rowMenu[i].nama + "</span>" +
                    "</a>" +
                    "<ul class='submenu navbar-nav' style='display: block;' id='parent" + rowMenu[i].id + "'>";
                while (j < rowChild.length) {
                    document.getElementById("parent" + rowChild[j].parent).innerHTML = document.getElementById("parent" + rowChild[j].parent).innerHTML
                        + `<li class="nav-item">
                                <a href="${rowChild[j].domain + rowChild[j].url}" class="nav-link child text-white child" id="form${rowChild[j].id}">
                                    <div class="text-white text-xs text-center d-flex align-items-center justify-content-center">
                                    </div>
                                    <span class="nav-link-text">${rowChild[j].nama}</span>
                                </a>
                            </li>`;
                    var currentUrl = window.location.href;
                    $('.child').each(function () {
                        if (this.href === currentUrl) {
                            $(this).addClass('bg-gradient-danger');
                            // Ensure the parent submenu is visible
                            $(this).closest('.submenu').show();
                            // Add a class to the parent nav-item to keep the submenu open
                            $(this).closest('.nav-item').addClass('active');
                        }
                    });

                    j++;
                }
                j = 0;
                "</ul></li>";
                i++;
            }


        }
    })
}

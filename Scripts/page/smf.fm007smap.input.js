var urlPath = $("#urlPath").val();

$(document).ready(function () {
    loadDdDept();
    loadDdCategory();
    //$("#ddType").select2({ allowClear: true, theme:'bootstrap'});
    $('#dtTglBeri').datepicker({
        dateFormat: 'yy-MM-dd',
        changeMonth: true,
        changeYear: true,
        orientation: "bottom auto"
    });

    $("#dtTglBeri").val(moment().format("YYYY-MMM-DD"))

})

$("#ddCategory").change(function () {
    if ($("#ddCategory").val() != "") {
        $("#ddType").attr("readonly", false);
        loadDdType();
    }
    else {
        $("#ddType").empty();
        $("#ddType").attr("readonly", true);
    }
})

function loadDdDept() {
    var i = 0;
    $.ajax({
        url: urlPath + 'api/form/007/smap/get/dept',
        cache: false,
        method: "POST",
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            $("#ddDept").empty();

            console.log(res)
            let rowDept = res.responseJSON.Value;

            document.getElementById("ddDept").innerHTML = document.getElementById("ddDept").innerHTML + "<option value=''>PILIH</option>";
            while (i < rowDept.length) {
                //console.log(document.getElementById("ddRole").innerHTML);

                document.getElementById("ddDept").innerHTML = document.getElementById("ddDept").innerHTML + "<option value='" + rowDept[i]["dept_code"] + "'>" + rowDept[i]["dept_name"] + "</option>";

                i++;

            }
        }
    })
}

function loadDdCategory() {
    var i = 0;
    $.ajax({
        url: urlPath + 'api/form/007/smap/get/ref',
        cache: false,
        method: "POST",
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            $("#ddCategory").empty();

            console.log(res)
            let rowCat = res.responseJSON.Value;

            document.getElementById("ddCategory").innerHTML = document.getElementById("ddCategory").innerHTML + "<option value=''>PILIH</option>";
            while (i < rowCat.length) {
                //console.log(document.getElementById("ddRole").innerHTML);

                document.getElementById("ddCategory").innerHTML = document.getElementById("ddCategory").innerHTML + "<option value='" + rowCat[i]["giving_category"] + "'>" + rowCat[i]["giving_category_desc"] + "</option>";

                i++;

            }
        }
    })
}

function loadDdType() {
    var i = 0;
    $.ajax({
        url: urlPath + 'api/form/007/smap/get/subref',
        cache: false,
        method: "POST",
        data: JSON.stringify({ id: $("#ddCategory").val() }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            $("#ddType").empty();

            console.log(res)
            let rowCat = res.responseJSON.Value;

            document.getElementById("ddType").innerHTML = document.getElementById("ddType").innerHTML + "<option value=''>PILIH</option>";
            while (i < rowCat.length) {
                //console.log(document.getElementById("ddRole").innerHTML);

                document.getElementById("ddType").innerHTML = document.getElementById("ddType").innerHTML + "<option value='" + rowCat[i]["sub_category_id"] + "'>" + rowCat[i]["sub_category_desc"] + "</option>";

                i++;

            }
        }
    })
}

function Save() {

}
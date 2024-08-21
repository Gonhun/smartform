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
    $("#ddAktivitas").attr("hidden", true);
    $("#txtAktivitas").attr("hidden", true);

})

$("#ddCategory").change(function () {
    if ($("#ddCategory").val() != "") {
        if ($("#ddCategory  option:selected").text() == "IDENTIFIKASI KEGIATAN SMAP") {
            console.log($("#ddCategory  option:selected").text())
            $("#ddAktivitas").attr("hidden", false);
            $("#txtAktivitas").attr("hidden", true);
            loadDdActivity();
        }
        else {
            $("#ddAktivitas").attr("hidden", true);
            $("#txtAktivitas").attr("hidden", false);
        }
        $("#ddType").attr("readonly", false);
        loadDdType();
    }
    else {
        $("#ddType").empty();
        $("#ddType").attr("readonly", true);
        $("#ddAktivitas").attr("hidden", true);
        $("#txtAktivitas").attr("hidden", true);
    }
})

function loadDdDept() {
    var i = 0;
    $.ajax({
        url: urlPath + '/api/form/007/smap/get/dept',
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
        url: urlPath + '/api/form/007/smap/get/ref',
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
        url: urlPath + '/api/form/007/smap/get/subref',
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

function loadDdActivity() {
    var i = 0;
    $.ajax({
        url: urlPath + '/api/form/007/smap/get/activity',
        cache: false,
        method: "POST",
        data: JSON.stringify({ id: $("#ddCategory").val() }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            $("#ddAktivitas").empty();

            console.log(res)
            let rowActivity = res.responseJSON.Value;

            document.getElementById("ddAktivitas").innerHTML = document.getElementById("ddAktivitas").innerHTML + "<option value=''>PILIH</option>";
            while (i < rowActivity.length) {
                //console.log(document.getElementById("ddRole").innerHTML);

                document.getElementById("ddAktivitas").innerHTML = document.getElementById("ddAktivitas").innerHTML + "<option value='" + rowActivity[i]["activity_id"] + "'>" + rowActivity[i]["activity_desc"] + "</option>";

                i++;

            }
        }
    })
}

function Save() {
    var S_DATA= {
        nik_req: $("#txtNik").val(),
        name_req: $("#txtNama").val(),
        dept_req: $("#ddDept").val(),
        site_req: $("#ddSite").val(),
        position_req: $("#ddJabatan").val(),
        email_req: $("#txtEmail").val(),
        phone_req: $("#txtTelp").val(),
        attachment: $("#txtAttachment").val(),
        giving_category: $("#ddCategory").val(),
        sub_giving_category: $("#ddType").val(),
        giving_activity: $("#ddCategory  option:selected").text() == "IDENTIFIKASI KEGIATAN SMAP" ? $("#ddAktivitas").val() : $("#txtAktivitas").val(),
        giving_date: $("#dtTglBeri").val(),
        giving_price: $("#txtNominal").val(),
        giving_place: $("#txtTempatBeri").val(),
        giving_to: $("#txtPenerima").val(),
        giving_position: $("#txtJabPenerima").val(),
        giving_organization: $("#txtOrganisasi").val(),
        giving_address: $("#txtAlamat").val(),
        giving_relation: $("#ddRelasi").val(),
        giving_purpose: $("#txtTujuan").val(),
        giving_chronology: $("#txtKronologi").val(),
    }

    $.ajax({
        url: urlPath + "/api/form/007/smap/insert",
        type: 'POST',
        dataType: "json",
        cache: false,
        data: JSON.stringify({ model: S_DATA }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            alert(res.responseJSON.StatusMessage);
            window.location = urlPath + "form/bss/smap/007";
        }
    })
}

var urlPath = $("#urlPath").val();
let rteProblem;

$(document).ready(function () {
    $('#dtTglSs').datepicker({
        dateFormat: 'yy-M-dd',
        changeMonth: true,
        changeYear: true,
        orientation: "bottom auto"
    });

    $("#dtTglSs").val(moment().format("YYYY-MMM-DD"))
    $("#txtTgl").val(moment().format("YYYY-MMM-DD"))

    rteProblem = new Quill('#editor', {
        modules: {
            syntax: true,
            toolbar: '#toolbar-container',
        },
        placeholder: 'Compose an epic...',
        theme: 'snow',
    });
})

function Save() {
    var S_DATA = {
        ss_date: $("#txtTglSs").val(),
        ss_nik: $("#txtNik").val(),
        ss_dept: $("#txtDept").val(),
        ss_site: $("#txtSite").val(),
        is_ss_quality: $("#chkQuality").checked() == true ? true : false,
        is_ss_cost: $("#chkCost").checked() == true ? true : false,
        is_ss_delivery: $("#chkDelivery").checked() == true ? true : false,
        is_ss_safety: $("#chkSafety").checked() == true ? true : false,
        is_ss_morale: $("#chkMorale").checked() == true ? true : false,
        ss_title: $("#txtJudulSs").val(),
        deviation_date: $("#dtTglTemuan").val(),
        deviation_loc: $("#txtLokasi").val(),
        deviation_relation: $("#ddRelation").val(),
        deviation_desc: $("#ddRelation").val(),
        idea_desc: $("#ddRelation").val(),
        process_desc: $("#ddRelation").val(),
        benefit_desc: $("#ddRelation").val(),
    }

    $.ajax({{
        url: urlPath + "/api/form/009/ss/insert",
        type: 'POST',
        dataType: "json",
        cache: false,
        data: JSON.stringify({ model: S_DATA }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            alert(res.responseJSON.StatusMessage);
            window.location = urlPath + "/form/bss/od/009";
        }
    });
}

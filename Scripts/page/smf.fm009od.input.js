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

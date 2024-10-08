﻿var urlPath = $("#urlPath").val();
let tableTruck;
let tableStation;

$(document).ready(function () {
    let tahun = new Date().getFullYear();
    $("#txtYear").val(tahun);
    $("#txtMonth").val(new Date().getMonth() + 1);
    loadGridLubeStation()
    loadGridFuelTruck()
})

$("#txtNik").change(function () {
    $.ajax({
        url: urlPath + '/api/form/032/log/get/emp',
        cache: false,
        data: JSON.stringify({ nik: $("#txtNik").val() }),
        method: "POST",
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            console.log(res.responseJSON);
            $("#txtNama").val(res.responseJSON.Value.name);
            $("#txtJabatan").val(res.responseJSON.Value.jabatan);
        }
    })
})

function loadGridLubeStation() {
    $.ajax({
        url: urlPath + '/api/questionaire/get',
        cache: false,
        method: "POST",
        data: JSON.stringify({ groupName: "LUBE_STATION" }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            tableStation = $('#tblLubeStation').DataTable({
                "data": res.responseJSON.Value,
                "destroy": true,
                "scrollX": true,
                "pageLength": 11,
                "autoWidth": false,
                "searching": false,
                "info": false,
                "columns": [
                    //{
                    //    "data": "id_questionaire",
                    //    width: '3%',
                    //    className: 'dt-body-center dt-head-center',
                    //    render: function (data, type, row, meta) {
                    //        return meta.row + meta.settings._iDisplayStart + 1;
                    //    },
                    //    sortable: false,
                    //},
                    {
                        "data": "id_questionaire",

                        className: 'dt-body-center dt-head-center',
                        width: '3%',
                        render: function (data, type, row, meta) {
                            return row.sort_no;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'id_questionaire',
                        className: 'dt-body-left dt-head-left',
                        width: '30%',
                        render: function (data, type, row) {
                            return '<span style="white-space:wrap">' + row.questionaire + "</span>";
                        },
                        sortable: false,
                    },
                    {
                        'data': 'questionaire_val',
                        className: 'dt-body-left dt-head-center dt-nowrap',
                        width: '10%',
                        render: function (data, type, row) {``
                            let checklistId = row.id_questionaire
                            return `
                                    <div class="form-check form-control-sm">
                                        <input class="form-check-input" type="radio" name="${checklistId}" id="${checklistId}y" value=1>
                                            <label class="form-check-label" for="w3Point1y">
                                                Ya
                                            </label>
                                    </div>
                                    <div class="form-check form-control-sm">
                                        <input class="form-check-input" type="radio" name="${checklistId}" id="${checklistId}t" value=0>
                                            <label class="form-check-label" for="w3Point1t">
                                                Tidak
                                            </label>
                                    </div>`;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'questionaire_comment',
                        className: 'dt-body-left dt-head-center dt-nowrap',
                        width: '30%',
                        render: function (data, type, row) {
                            let checklistId = row.id_questionaire
                            return `<textarea class="form-control input-group-outline" id="comment_${checklistId}" rows="3" placeholder="Update Comment Disini"></textarea>`;
                        },
                        sortable: false,
                    },
                    
                ],
            })
        }
    })
}

function loadGridFuelTruck() {
    $.ajax({
        url: urlPath + '/api/questionaire/get',
        cache: false,
        method: "POST",
        data: JSON.stringify({ groupName: "LUBE_TRUCK" }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            tableTruck = $('#tblLubeTruck').DataTable({
                "data": res.responseJSON.Value,
                "destroy": true,
                "scrollX": true,
                "pageLength": 9,
                "autoWidth": false,
                "searching": false,
                "info": false,
                "columns": [
                    //{
                    //    "data": "id_questionaire",

                    //    className: 'dt-body-center dt-head-center',
                    //    width:'3%',
                    //    render: function (data, type, row, meta) {
                    //        return meta.row + meta.settings._iDisplayStart + 12;
                    //    },
                    //    sortable: false,
                    //},
                    {
                        "data": "id_questionaire",

                        className: 'dt-body-center dt-head-center',
                        width: '3%',
                        render: function (data, type, row, meta) {
                            return row.sort_no;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'id_questionaire',
                        className: 'dt-body-left dt-head-left',
                        width: '30%',
                        render: function (data, type, row) {
                            return '<span style="white-space:wrap">' + row.questionaire + "</span>";
                        },
                        sortable: false,
                    },
                    {
                        'data': 'questionaire_val',
                        className: 'dt-body-left dt-head-center dt-nowrap',
                        width: '10%',

                        render: function (data, type, row) {
                            let checklistId = row.id_questionaire
                            return `
                                    <div class="form-check form-control-sm">
                                        <input class="form-check-input" type="radio" name="${checklistId}" id="${checklistId}y" value=1>
                                            <label class="form-check-label" for="w3Point1y">
                                                Ya
                                            </label>
                                    </div>
                                    <div class="form-check form-control-sm">
                                        <input class="form-check-input" type="radio" name="${checklistId}" id="${checklistId}t" value=0>
                                            <label class="form-check-label" for="w3Point1t">
                                                Tidak
                                            </label>
                                    </div>`;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'questionaire_comment',
                        className: 'dt-body-left dt-head-center dt-nowrap',
                        width: '30%',
                        render: function (data, type, row) {
                            let checklistId = row.id_questionaire
                            return `<textarea class="form-control input-group-outline" id="comment_${checklistId}" rows="3" placeholder="Update Comment Disini"></textarea>`;
                        },
                        sortable: false,
                    },
                    
                ],
            })
        }
    })
}

function Save() {
    console.log("OK");
    let i = 0;
    let y = 0;
    let checklistData;
    var rowStation = tableStation.rows().data().toArray();
    var rowTruck = tableTruck.rows().data().toArray();
    var allRow = [];

    while (i < rowStation.length) {
        var idStation = rowStation[i].id_questionaire;
        //checklistData = rowStation.find(x => x.id_questionaire == idRadio);
        //checklistData.questionaire_val = document.getElementById(idRadio).value;
        rowStation[i].questionaire_val = $("input[type='radio'][name='" + idStation + "']:checked").val();
        rowStation[i].questionaire_comment = $("#comment_" + idStation).val();
        
        i++;
    }

    while (y < rowTruck.length) {
        var idTruck = rowTruck[y].id_questionaire;
        rowTruck[y].questionaire_val = $("input[type='radio'][name='" + idTruck + "']:checked").val();
        rowTruck[y].questionaire_comment = $("#comment_" + idTruck).val();

        y++;
    }

    allRow = [].concat(rowStation, rowTruck);

    var S_DATA = {
        checklist_date: moment().format("YYYY-MMM-DD"),
        checklist_year: $("#txtYear").val(),
        checklist_month: $("#txtMonth").val(),
        checklist_week: $("#ddWeek").val(),
        checklist_by: $("#txtNik").val()
    }

    $.ajax({
        url: urlPath + "/api/form/032/log/insert",
        type: 'POST',
        dataType: "json",
        cache: false,
        data: JSON.stringify({ model: S_DATA, detail: allRow }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            alert(res.responseJSON.StatusMessage);
            window.location = urlPath + "form/bss/log/032";
        }
    })
}

function convertJsonDateToShortDate(data) {
    // This function converts a json date to a short date
    // e.g. /Date(1538377200000)/ to 10/1/2018
    const dateValue = new Date(parseInt(data.substr(6)));
    return moment(dateValue).format("YYYY-MMM-DD");
}
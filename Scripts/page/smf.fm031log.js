var urlPath = $("#urlPath").val();

$(document).ready(function () {
    loadGrid()
})

function loadGrid() {
    $.ajax({
        url: urlPath + 'api/form/031/log/get',
        cache: false,
        method: "POST",
        //data: JSON.stringify({ groupName: "FUEL_STATION" }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            console.log(res)
            table1 = $('#tblChecklist').DataTable({
                "data": res.responseJSON.Value,
                "destroy": true,
                "scrollX": true,
                "pageLength": 10,
                "columns": [
                    //{
                    //    'data': 'checklist_by',
                    //    className: 'dt-body-left dt-head-left',
                    //    render: function (data, type, row) {
                    //        return `<button type="button" class="btn btn-sm bg-gradient-success">
                    //                    <span class="material-icons md-24 opacity-10">print</span> Cetak Excel
                    //                </button>&nbsp;`;
                    //    },
                    //    sortable: false,
                    //},
                    {
                        'data': 'tahun',
                        className: 'dt-body-center dt-head-left',
                    },
                    {
                        'data': 'bulan',
                        className: 'dt-body-center dt-head-left',
                        render: function (data, type, row) {
                            return `<b>${row.bulan_desc}</b>`;
                        },
                    },
                    {
                        'data': 'checklist_by',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'avg_score_week_1',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            return `<b>${ row.avg_score_week_1 }%</b>`;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_1',
                        className: 'dt-body-center dt-head-center',
                        render: function (data, type, row) {
                            let fogc_flag;
                            let section_flag;
                            if (row.avg_score_week_1 != null) {
                                if (row.is_fogc_valid_week_1 == true) {
                                    fogc_flag = `<button type="button" id="fogcWeek1" class="btn btn-sm bg-gradient-success" disabled>${row.is_fogc_valid_week_1_flag}</button>&nbsp;`;
                                }
                                else if (row.is_fogc_valid_week_1 == false) {
                                    fogc_flag = `<button type="button" id="fogcWeek1" class="btn btn-sm bg-gradient-danger" disabled>${row.is_fogc_valid_week_1_flag}</button>&nbsp;`;
                                }
                                else {
                                    fogc_flag = `<button type="button" id="fogcWeek1" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_1_flag}</button>&nbsp;`;
                                }

                                if (row.is_section_valid_week_1 == true) {
                                    section_flag = `<button type="button" id="kasiWeek1" class="btn btn-sm bg-gradient-success" disabled>${row.is_section_valid_week_1_flag}</button>&nbsp;`;
                                }
                                else if (row.is_section_valid_week_1 == false) {
                                    section_flag = `<button type="button" id="kasiWeek1" class="btn btn-sm bg-gradient-danger" disabled>${row.is_section_valid_week_1_flag}</button>&nbsp;`;
                                }
                                else {
                                    section_flag = `<button type="button" id="kasiWeek1" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_1_flag}</button>&nbsp;`;
                                }
                            }
                            else {
                                fogc_flag = `<button type="button" id="fogcWeek1" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_1_flag}</button>&nbsp;`;
                                section_flag = `<button type="button" id="kasiWeek1" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_1_flag}</button>&nbsp;`;
                            }
                            return fogc_flag + '&nbsp;' + section_flag;
                        }
                    },
                    {
                        'data': 'avg_score_week_2',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            return `<b>${row.avg_score_week_2}%</b>`;

                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_2',
                        className: 'dt-body-center dt-head-center',
                        render: function (data, type, row) {
                            let fogc_flag;
                            let section_flag;
                            if (row.avg_score_week_2 != null) {
                                if (row.is_fogc_valid_week_2 == true) {
                                    fogc_flag = `<button type="button" id="fogcWeek2" class="btn btn-sm bg-gradient-success" disabled>${row.is_fogc_valid_week_2_flag}</button>&nbsp;`;
                                }
                                else if (row.is_fogc_valid_week_2 == false) {
                                    fogc_flag = `<button type="button" id="fogcWeek2" class="btn btn-sm bg-gradient-danger" disabled>${row.is_fogc_valid_week_2_flag}</button>&nbsp;`;
                                }
                                else {
                                    fogc_flag = `<button type="button" id="fogcWeek2" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_2_flag}</button>&nbsp;`;
                                }

                                if (row.is_section_valid_week_2 == true) {
                                    section_flag = `<button type="button" id="kasiWeek2" class="btn btn-sm bg-gradient-success" disabled>${row.is_section_valid_week_2_flag}</button>&nbsp;`;
                                }
                                else if (row.is_section_valid_week_2 == false) {
                                    section_flag = `<button type="button" id="kasiWeek2" class="btn btn-sm bg-gradient-danger" disabled>${row.is_section_valid_week_2_flag}</button>&nbsp;`;
                                }
                                else {
                                    section_flag = `<button type="button" id="kasiWeek2" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_2_flag}</button>&nbsp;`;
                                }
                            }
                            else {
                                fogc_flag = `<button type="button" id="fogcWeek2" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_2_flag}</button>&nbsp;`;
                                section_flag = `<button type="button" id="kasiWeek2" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_2_flag}</button>&nbsp;`;
                            }
                            return fogc_flag + '&nbsp;' + section_flag;
                        }
                    },
                    {
                        'data': 'avg_score_week_3',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            return `<b>${row.avg_score_week_3}%</b>`;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_3',
                        className: 'dt-body-center dt-head-center',
                        render: function (data, type, row) {
                            let fogc_flag;
                            let section_flag;

                            if (row.avg_score_week_3 != null) {
                                if (row.is_fogc_valid_week_3 == true) {
                                    fogc_flag = `<button type="button" id="fogcWeek3" class="btn btn-sm bg-gradient-success" disabled>${row.is_fogc_valid_week_3_flag}</button>&nbsp;`;
                                }
                                else if (row.is_fogc_valid_week_3 == false) {
                                    fogc_flag = `<button type="button" id="fogcWeek3" class="btn btn-sm bg-gradient-danger" disabled>${row.is_fogc_valid_week_3_flag}</button>&nbsp;`;
                                }
                                else {
                                    fogc_flag = `<button type="button" id="fogcWeek3" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_3_flag}</button>&nbsp;`;
                                }

                                if (row.is_section_valid_week_3 == true) {
                                    section_flag = `<button type="button" id="kasiWeek3" class="btn btn-sm bg-gradient-success" disabled>${row.is_section_valid_week_3_flag}</button>&nbsp;`;
                                }
                                else if (row.is_section_valid_week_3 == false) {
                                    section_flag = `<button type="button" id="kasiWeek3" class="btn btn-sm bg-gradient-danger" disabled>${row.is_section_valid_week_3_flag}</button>&nbsp;`;
                                }
                                else {
                                    section_flag = `<button type="button" id="kasiWeek3" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_3_flag}</button>&nbsp;`;
                                }
                            }
                            else {
                                fogc_flag = `<button type="button" id="fogcWeek3" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_3_flag}</button>&nbsp;`;
                                section_flag = `<button type="button" id="kasiWeek3" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_3_flag}</button>&nbsp;`;
                            }

                            return fogc_flag + '&nbsp;' + section_flag;
                        }
                    },
                    {
                        'data': 'avg_score_week_4',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            return `<b>${row.avg_score_week_4}%</b>`;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_4',
                        className: 'dt-body-center dt-head-center',
                        render: function (data, type, row) {
                            let fogc_flag;
                            let section_flag;

                            if (row.avg_score_week_4 != null) {
                                if (row.is_fogc_valid_week_4 == true) {
                                    fogc_flag = `<button type="button" id="fogcWeek4" class="btn btn-sm bg-gradient-success" disabled>${row.is_fogc_valid_week_4_flag}</button>&nbsp;`;
                                }
                                else if (row.is_fogc_valid_week_4 == false) {
                                    fogc_flag = `<button type="button" id="fogcWeek4" class="btn btn-sm bg-gradient-danger" disabled>${row.is_fogc_valid_week_4_flag}</button>&nbsp;`;
                                }
                                else {
                                    fogc_flag = `<button type="button" id="fogcWeek4" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_4_flag}</button>&nbsp;`;
                                }

                                if (row.is_section_valid_week_4 == true) {
                                    section_flag = `<button type="button" id="kasiWeek4" class="btn btn-sm bg-gradient-success" disabled>${row.is_section_valid_week_4_flag}</button>&nbsp;`;
                                }
                                else if (row.is_section_valid_week_4 == false) {
                                    section_flag = `<button type="button" id="kasiWeek4" class="btn btn-sm bg-gradient-danger" disabled>${row.is_section_valid_week_4_flag}</button>&nbsp;`;
                                }
                                else {
                                    section_flag = `<button type="button" id="kasiWeek4" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_4_flag}</button>&nbsp;`;
                                }
                            }
                            else {
                                fogc_flag = `<button type="button" id="fogcWeek4" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_4_flag}</button>&nbsp;`;
                                section_flag = `<button type="button" id="kasiWeek4" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_4_flag}</button>&nbsp;`;
                            }

                            return fogc_flag + '&nbsp;' + section_flag;
                        }
                    },
                    {
                        'data': 'avg_score_week_5',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            return `<b>${row.avg_score_week_5}%</b>`;

                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_5',
                        className: 'dt-body-center dt-head-center',
                        render: function (data, type, row) {
                            let fogc_flag;
                            let section_flag;

                            if (row.avg_score_week_5 != null) {
                                if (row.is_fogc_valid_week_5 == true) {
                                    fogc_flag = `<button type="button" id="fogcWeek5" class="btn btn-sm bg-gradient-success" disabled>${row.is_fogc_valid_week_5_flag}</button>&nbsp;`;
                                }
                                else if (row.is_fogc_valid_week_5 == false) {
                                    fogc_flag = `<button type="button" id="fogcWeek5" class="btn btn-sm bg-gradient-danger" disabled>${row.is_fogc_valid_week_5_flag}</button>&nbsp;`;
                                }
                                else {
                                    fogc_flag = `<button type="button" id="fogcWeek5" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_5_flag}</button>&nbsp;`;
                                }

                                if (row.is_section_valid_week_5 == true) {
                                    section_flag = `<button type="button" id="kasiWeek5" class="btn btn-sm bg-gradient-success" disabled>${row.is_section_valid_week_5_flag}</button>&nbsp;`;
                                }
                                else if (row.is_section_valid_week_5 == false) {
                                    section_flag = `<button type="button" id="kasiWeek5" class="btn btn-sm bg-gradient-danger" disabled>${row.is_section_valid_week_5_flag}</button>&nbsp;`;
                                }
                                else {
                                    section_flag = `<button type="button" id="kasiWeek5" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_5_flag}</button>&nbsp;`;
                                }
                            }
                            else {
                                fogc_flag = `<button type="button" id="fogcWeek5" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_fogc_valid_week_5_flag}</button>&nbsp;`;
                                section_flag = `<button type="button" id="kasiWeek5" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.is_section_valid_week_5_flag}</button>&nbsp;`;
                            }

                            return fogc_flag + '&nbsp;' + section_flag;
                        }
                    }

                ],
            })
        }
    })
}

$('#tblChecklist tbody').on('click', '#fogcWeek1', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(1);
    $("#txtFlag").val("FOGC");
})

$('#tblChecklist tbody').on('click', '#fogcWeek2', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(2);
    $("#txtFlag").val("FOGC");
})

$('#tblChecklist tbody').on('click', '#fogcWeek3', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(3);
    $("#txtFlag").val("FOGC");

})

$('#tblChecklist tbody').on('click', '#fogcWeek4', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(4);
    $("#txtFlag").val("FOGC");

})

$('#tblChecklist tbody').on('click', '#fogcWeek5', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(5);
    $("#txtFlag").val("FOGC");

})

$('#tblChecklist tbody').on('click', '#kasiWeek1', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(1);
    $("#txtFlag").val("KASI");

})

$('#tblChecklist tbody').on('click', '#kasiWeek2', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(2);
    $("#txtFlag").val("KASI");

})

$('#tblChecklist tbody').on('click', '#kasiWeek3', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(3);
    $("#txtFlag").val("KASI");

})

$('#tblChecklist tbody').on('click', '#kasiWeek4', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(4);
    $("#txtFlag").val("KASI");

})

$('#tblChecklist tbody').on('click', '#kasiWeek5', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(5);
    $("#txtFlag").val("KASI");

})



function Approve() {
    if ($("#txtFlag").val() == "FOGC") {
        var S_DATA = {
            id_checklist_fuel: $("#txtId").val(),
            checklist_year: $("#txtYear").val(),
            checklist_month: $("#txtMonth").val(),
            checklist_week: $("#txtWeek").val(),
            checklist_by: $("#txtUser").val(),
            is_fogc_valid: $("#ddStatus").val(),
            fogc_by: $("#txtNik").val(),
            fogc_remark: $("#txtRemark").val()
        }

        $.ajax({
            url: urlPath + 'api/form/031/log/update',
            type: 'POST',
            dataType: "json",
            cache: false,
            data: JSON.stringify({ model: S_DATA }),
            contentType: "application/json; charset=utf-8",
            complete: function (e) {
                loadGrid();
                alert(e.responseJSON.StatusMessage);
            }
        })
    }
    else if ($("#txtFlag").val() == "KASI") {
        var S_DATA = {
            id_checklist_fuel: $("#txtId").val(),
            checklist_year: $("#txtYear").val(),
            checklist_month: $("#txtMonth").val(),
            checklist_week: $("#txtWeek").val(),
            checklist_by: $("#txtUser").val(),
            is_section_valid: $("#ddStatus").val(),
            section_by: $("#txtNik").val(),
            section_remark: $("#txtRemark").val()
        }

        $.ajax({
            url: urlPath + 'api/form/031/log/update',
            type: 'POST',
            dataType: "json",
            cache: false,
            data: JSON.stringify({ model: S_DATA }),
            contentType: "application/json; charset=utf-8",
            complete: function (e) {
                loadGrid();
                alert(e.responseJSON.StatusMessage);
            }
        })
    }

}
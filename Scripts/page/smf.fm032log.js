var urlPath = $("#urlPath").val();

$(document).ready(function () {
    loadGrid()
})

function loadGrid() {
    $.ajax({
        url: urlPath + '/api/form/032/log/get',
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
                        'data': 'checklist_name',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'checklist_position',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'checklist_site',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'id_checklist',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.avg_score_week_1 > 0) {
                                return `<button type="button" id="detailWeek1" class="btn btn-sm bg-gradient-info" data-bs-toggle="modal" data-bs-target="#modalChecklist">Detail Checklist</button>`;
                            } else {
                                return `<b>BELUM DIINPUT</b>`;
                            }
                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_1',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.is_fogc_valid_week_1 == null) {
                                return `<b>0%</b>`;
                            } else {
                                return `<b>${row.avg_score_week_1}%</b>`;
                            }
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
                        'data': 'id_checklist',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.avg_score_week_2 > 0) {
                                return `<button type="button" id="detailWeek2" class="btn btn-sm bg-gradient-info" data-bs-toggle="modal" data-bs-target="#modalChecklist">Detail Checklist</button>`;
                            } else {
                                return `<b>BELUM DIINPUT</b>`;
                            }
                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_2',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.is_fogc_valid_week_2 == null) {
                                return `<b>0%</b>`;
                            } else {
                                return `<b>${row.avg_score_week_2}%</b>`;
                            }
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
                        'data': 'id_checklist',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.avg_score_week_3 > 0) {
                                return `<button type="button" id="detailWeek3" class="btn btn-sm bg-gradient-info" data-bs-toggle="modal" data-bs-target="#modalChecklist">Detail Checklist</button>`;
                            } else {
                                return `<b>BELUM DIINPUT</b>`;
                            }
                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_3',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.is_fogc_valid_week_3 == null) {
                                return `<b>0%</b>`;
                            } else {
                                return `<b>${row.avg_score_week_3}%</b>`;
                            }
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
                        'data': 'id_checklist',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.avg_score_week_4 > 0) {
                                return `<button type="button" id="detailWeek4" class="btn btn-sm bg-gradient-info" data-bs-toggle="modal" data-bs-target="#modalChecklist">Detail Checklist</button>`;
                            } else {
                                return `<b>BELUM DIINPUT</b>`;
                            }
                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_4',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.is_fogc_valid_week_4 == null) {
                                return `<b>0%</b>`;
                            } else {
                                return `<b>${row.avg_score_week_4}%</b>`;
                            }
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
                        'data': 'id_checklist',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.avg_score_week_5 . 0) {
                                return `<button type="button" id="detailWeek5" class="btn btn-sm bg-gradient-info" data-bs-toggle="modal" data-bs-target="#modalChecklist">Detail Checklist</button>`;
                            } else {
                                return `<b>BELUM DIINPUT</b>`;
                            }
                        },
                        sortable: false,
                    },
                    {
                        'data': 'avg_score_week_5',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        render: function (data, type, row) {
                            if (row.is_fogc_valid_week_5 == null) {
                                return `<b>0%</b>`;
                            } else {
                                return `<b>${row.avg_score_week_5}%</b>`;
                            }
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
                    },
                    {
                        'data': 'mtd',
                        className: 'dt-body-center dt-head-left',
                        render: function (data, type, row) {
                            return `<b>${row.mtd}%</b>`;

                        },
                        sortable: false,
                    },
                ],
            })
        }
    })
}

function loadDetailStation(idChecklist, weekChecklist) {
    $.ajax({
        url: urlPath + '/api/form/032/log/get/detail',
        cache: false,
        method: "POST",
        data: JSON.stringify({ id: idChecklist, week: weekChecklist, group: "FUEL_STATION" }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            console.log(res.responseJSON.Value);
            tableChecklist = $('#tblDetailStation').DataTable({
                "data": res.responseJSON.Value,
                "destroy": true,
                "scrollY": true,
                "autoWidth": true,
                "searching": false,
                "info": false,
                "columns": [
                    {
                        "data": "id_questionaire",
                        //width: '3%',
                        className: 'dt-body-center dt-head-center',
                        render: function (data, type, row, meta) {
                            return meta.row + meta.settings._iDisplayStart + 1;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'questionaire_desc',
                        className: 'dt-body-left dt-head-left dt-nowrap',
                        //width: '60%',
                        //render: function (data, type, row) {
                        //    return '<span style="white-space:wrap">' + row.questionaire_desc + "</span>";
                        //},
                        sortable: false,
                    },
                    {
                        'data': 'chcecklist_val_desc',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        //width: '10%',
                        sortable: false,
                    },
                    {
                        'data': 'questionaire_comment',
                        className: 'dt-body-left dt-head-center dt-nowrap',
                        //width: '20%',
                        sortable: false,
                    },
                ],
            })
        }
    })
}

function loadDetailTruck(idChecklist, weekChecklist) {
    $.ajax({
        url: urlPath + '/api/form/032/log/get/detail',
        cache: false,
        method: "POST",
        data: JSON.stringify({ id: idChecklist, week: weekChecklist, group: "FUEL_TRUCK" }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            console.log(res.responseJSON.Value);
            tableChecklist = $('#tblDetailTruck').DataTable({
                "data": res.responseJSON.Value,
                "destroy": true,
                "scrollY": true,
                "autoWidth": true,
                "searching": false,
                "info": false,
                "columns": [
                    {
                        "data": "id_questionaire",
                        //width: '3%',
                        className: 'dt-body-center dt-head-center',
                        render: function (data, type, row, meta) {
                            return meta.row + meta.settings._iDisplayStart + 1;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'questionaire_desc',
                        className: 'dt-body-left dt-head-left',
                        //width: '60%',
                        //render: function (data, type, row) {
                        //    return '<span style="white-space:wrap">' + row.questionaire_desc + "</span>";
                        //},
                        sortable: false,
                    },
                    {
                        'data': 'chcecklist_val_desc',
                        className: 'dt-body-center dt-head-center dt-nowrap',
                        //width: '10%',
                        sortable: false,
                    },
                    {
                        'data': 'questionaire_comment',
                        className: 'dt-body-left dt-head-center dt-nowrap',
                        //width: '20%',
                        sortable: false,
                    },
                ],
            })
        }
    })
}

$('#tblChecklist tbody').on('click', '#detailWeek1', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);
    loadDetailStation(data.id_checklist, 1);
    loadDetailTruck(data.id_checklist, 1);

    document.getElementById("lblNik").innerHTML = data.checklist_by;
    document.getElementById("lblNama").innerHTML = data.checklist_name;
    document.getElementById("lblMinggu").innerHTML = "Minggu Ke 1";
})

$('#tblChecklist tbody').on('click', '#detailWeek2', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);
    loadDetailStation(data.id_checklist, 2);
    loadDetailTruck(data.id_checklist, 2);

    document.getElementById("lblNik").innerHTML = data.checklist_by;
    document.getElementById("lblNama").innerHTML = data.checklist_name;
    document.getElementById("lblMinggu").innerHTML = "Minggu Ke 2";
})

$('#tblChecklist tbody').on('click', '#detailWeek3', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);
    loadDetailStation(data.id_checklist, 3);
    loadDetailTruck(data.id_checklist, 3);

    document.getElementById("lblNik").innerHTML = data.checklist_by;
    document.getElementById("lblNama").innerHTML = data.checklist_name;
    document.getElementById("lblMinggu").innerHTML = "Minggu Ke 3";
})

$('#tblChecklist tbody').on('click', '#detailWeek4', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);
    loadDetailStation(data.id_checklist, 4);
    loadDetailTruck(data.id_checklist, 4);

    document.getElementById("lblNik").innerHTML = data.checklist_by;
    document.getElementById("lblNama").innerHTML = data.checklist_name;
    document.getElementById("lblMinggu").innerHTML = "Minggu Ke 4";
})

$('#tblChecklist tbody').on('click', '#detailWeek5', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);
    loadDetailStation(data.id_checklist, 1);
    loadDetailTruck(data.id_checklist, 1);

    document.getElementById("lblNik").innerHTML = data.checklist_by;
    document.getElementById("lblNama").innerHTML = data.checklist_name;
    document.getElementById("lblMinggu").innerHTML = "Minggu Ke 5";
})

$('#tblChecklist tbody').on('click', '#fogcWeek1', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtId").val(data.id_checklist)
    $("#txtYear").val(data.tahun);
    $("#txtMonth").val(data.bulan);
    $("#txtUser").val(data.checklist_by);
    $("#txtWeek").val(1);
    $("#txtScore").val(data.avg_score_week_1);
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
    $("#txtScore").val(data.avg_score_week_2);
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
    $("#txtScore").val(data.avg_score_week_3);
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
    $("#txtScore").val(data.avg_score_week_4);
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
    $("#txtScore").val(data.avg_score_week_5);
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
    $("#txtScore").val(data.avg_score_week_1);
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
    $("#txtScore").val(data.avg_score_week_2);
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
    $("#txtScore").val(data.avg_score_week_3);
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
    $("#txtScore").val(data.avg_score_week_4);
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
    $("#txtScore").val(data.avg_score_week_5);
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
            avg_score: $("#txtScore").val(),
            is_fogc_valid: $("#ddStatus").val(),
            fogc_by: $("#txtNik").val(),
            fogc_remark: $("#txtRemark").val()
        }

        if (S_DATA.avg_score == 0) {
            alert("Pic ini belum input data minggu ke " + S_DATA.checklist_week + " di bulan ini");
        }
        else {
            $.ajax({
                url: urlPath + '/api/form/031/log/update',
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
    else if ($("#txtFlag").val() == "KASI") {
        var S_DATA = {
            id_checklist_fuel: $("#txtId").val(),
            checklist_year: $("#txtYear").val(),
            checklist_month: $("#txtMonth").val(),
            checklist_week: $("#txtWeek").val(),
            avg_score: $("#txtScore").val(),
            checklist_by: $("#txtUser").val(),
            is_section_valid: $("#ddStatus").val(),
            section_by: $("#txtNik").val(),
            section_remark: $("#txtRemark").val()
        }

        if (S_DATA.avg_score == 0) {
            alert("Pic ini belum input data minggu ke " + S_DATA.checklist_week + " di bulan ini");
        }
        else {
            $.ajax({
                url: urlPath + '/api/form/031/log/update',
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

}

function Cancel() {
    $("#txtId").val("")
    $("#txtYear").val("")
    $("#txtMonth").val("")
    $("#txtWeek").val("")
    $("#txtScore").val("")
    $("#txtUser").val("")
    $("#ddStatus").val("")
    $("#txtNik").val("")
    $("#txtRemark").val("")
}
var urlPath = $("#urlPath").val();
$(document).ready(function () {
    loadGrid();
});

function loadGrid() {
    $.ajax({
        url: urlPath + 'api/form/007/smap/get',
        cache: false,
        method: "POST",
        //data: JSON.stringify({ parameter: S_DATA }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            table1 = $('#tblGiving').DataTable({
                "data": res.responseJSON.Value,
                "destroy": true,
                "scrollX": true,
                "pageLength": 10,
                //"autoWidth": true,
                "columns": [
                    {
                        'data': 'id_smap_giving',
                        className: 'dt-nowrap align-center',
                        render: function (data, type, row) {
                            let flag;
                            if (row.is_approve != null) {
                                if (row.is_approve == true) {
                                    flag = `<button type="button" id="approvalBtn" class="btn btn-sm bg-gradient-success" disabled>${row.approve_flag}</button>&nbsp;`;
                                }
                                else if (row.is_approve == false) {
                                    flag = `<button type="button" id="approvalBtn" class="btn btn-sm bg-gradient-danger" disabled>${row.approve_flag}</button>&nbsp;`;
                                }
                            }
                            else {
                                flag = `<button type="button" id="approvalBtn" class="btn btn-sm bg-gradient-warning" data-bs-toggle="modal" data-bs-target="#modalValidasi">${row.approve_flag}</button>&nbsp;`;
                            }
                            return flag;
                        },
                        sortable: false,
                    },
                    {
                        'data': 'form_no',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'nik_req',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'name_req',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'position_req',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'dept_req',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'site_req',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'giving_category',
                        className: 'dt-body-left dt-head-left',
                        render: function (data, type, row) {
                            return row.giving_category_desc;
                        }
                    },
                    {
                        'data': 'sub_giving_category',
                        className: 'dt-body-left dt-head-left',
                        render: function (data, type, row) {
                            return row.sub_giving_category_desc;
                        }
                    },
                    {
                        'data': 'giving_activity',
                        className: 'dt-body-left dt-head-left',
                        render: function (data, type, row) {
                            return row.giving_activity_desc;
                        }
                    },
                    {
                        'data': 'giving_price',
                        className: 'dt-body-left dt-head-left',
                        render: $.fn.dataTable.render.number(',', '.', 2, 'Rp')
                    },
                    {
                        'data': 'giving_date',
                        className: 'dt-body-left dt-head-left',
                        render: function (data, type, row) {
                            return convertJsonDateToShortDate(row.giving_date);
                        }
                    },
                    {
                        'data': 'giving_to',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'giving_organization',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'giving_relation',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'giving_purpose',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'giving_chronology',
                        className: 'dt-body-left dt-head-left',
                    },
                    {
                        'data': 'attachment',
                        className: 'dt-body-left dt-head-left',
                        render: function (data, type, row) {
                            if (row.attachment == null || row.attachment == "") {
                                return "TIDAK ADA KELENGKAPAN";
                            }
                            else {
                                return row.attachment;
                            }
                        }
                    },
                ],
            })
        }
    })
}

$('#tblGiving tbody').on('click', '#approvalBtn', function () {
    var data = table1.row($(this).parents('tr')).data();
    console.log(data);

    $("#txtIdSmap").val(data.id_smap_giving);
})

function Approve() {
    var S_DATA = {
        id_smap_giving: $("#txtIdSmap").val(),
        is_approve: $("#ddStatus").val(),
        approve_by: $("#txtApprover").val(),
        approve_remark: $("#txtRemark").val(),
    }

    $.ajax({
        url: urlPath + "api/form/007/smap/approve",
        type: 'POST',
        dataType: "json",
        cache: false,
        data: JSON.stringify({ model: S_DATA }),
        contentType: "application/json; charset=utf-8",
        complete: function (res) {
            alert(res.responseJSON.StatusMessage);
            loadGrid();
        }
    })
}

function convertJsonDateToShortDate(data) {
    // This function converts a json date to a short date
    // e.g. /Date(1538377200000)/ to 10/1/2018
    const dateValue = new Date(parseInt(data.substr(6)));
    return moment(dateValue).format("YYYY-MMM-DD");
}
if ($.isFunction($.fn.dataTable)) {
    $.extend(true, $.fn.dataTable.defaults, {
        columnDefs: [
            {
                targets: 'actions',
                className: 'actions',
                searchable: false,
                sortable: false
            }
        ],
        lengthMenu: [5, 10, 25, 50, 100, 250, 500],
        pageLength: 25,
        language: {
            search: '',
            searchPlaceholder: 'Search'
        },
        processing: true,
        stateSave: true,
        stateDuration: 0,
        responsive: true,
        stateSaveParams: function (settings, data) {
            data.search.search = '';
            data.start = 0;
        },
        stateSaveCallback: function (settings, data) {
            localStorage.setItem($(this).attr('id'), JSON.stringify(data));
        },
        stateLoadCallback: function () {
            return JSON.parse(localStorage.getItem($(this).attr('id')));
        },
        initComplete: function (settings, json) {
            var self = this.api();
            var filter_input = $('#' + settings.nTable.id + '_filter input').unbind();
            var search_button = $('<button type="button" class="btn btn-link btn-sm btn-icon ml-2 mb-1" data-toggle="tooltip" title="Search"><i class="fa fa-fw fa-search"></i></button>')
                .click(function () {
                    self.search(filter_input.val()).draw();
                });
            var reset_button = $('<button type="button" class="btn btn-link btn-sm btn-icon mb-1" data-toggle="tooltip" title="Reset"><i class="fa fa-fw fa-undo"></i></button>')
                .click(function () {
                    filter_input.val('');
                    search_button.click();
                });

            $(document).keypress(function (event) {
                if (event.which === 13) {
                    search_button.click();
                }
            });

            $('#' + settings.nTable.id + '_filter').append(search_button, reset_button);
        }
    });
}

$(document).ready(function () {
    var body = $('body');

    body.tooltip({
        selector: '[data-toggle="tooltip"]'
    });
    body.popover({
        selector: '[data-toggle="popover"]'
    });

    $('.sidebar-toggle').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').toggleClass('toggled');
    });
});
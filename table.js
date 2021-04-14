$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // 編輯的 Modal 事件
    $('#editModal').on('show.bs.modal', function (event) {
        var btn = $(event.relatedTarget);
        var title = btn.data('title');
        var account = btn.data('username');
        var email = btn.data('email');
        var items = btn.data('items');
        var number = btn.data('number');

        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('.modal-username').val(account);
        modal.find('.modal-email').val(email);
        modal.find('.modal-items').val(items);
        modal.find('.modal-number').val(number);
    });

    $('#removeModal').on('show.bs.modal', function (event) {
        var btn = $(event.relatedTarget);
        var title = btn.data('title');

        var modal = $(this);
        modal.find('.modal-title').text('確認刪除 ' + title + ' 訂單');
    });
});
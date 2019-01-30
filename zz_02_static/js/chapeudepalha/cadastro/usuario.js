$(function () {

    $('#id_fone').inputmask('(99) 9999-9999');
    $('.js-submit').on('click', function () {
        if ($('#id_password').val() == $('#id_password_repeat').val()) {
            return true;
        } else {

            var animateEnter = $(this).data('animate-enter');
            var animateExit = $(this).data('animate-exit');

            showNotification(null, animateEnter, animateExit);
            return false;
        }
    });
});



function showNotification(text, animateEnter, animateExit) {
    if (text === null || text === '') { text = 'Senhas diferentes, Favor digitar novamente!!'; }
    if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
    if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }
    var allowDismiss = true;

    $.notify({
        message: text
    },
        {
            type: 'alert-warning',
            allow_dismiss: allowDismiss,
            newest_on_top: true,
            timer: 2000,
            placement: {
                // from: placementFrom,
                align: "center"
            },
            animate: {
                enter: animateEnter,
                exit: animateExit
            },
            template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + (allowDismiss ? "p-r-35" : "") + '" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
}
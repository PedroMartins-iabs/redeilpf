$(function () {

    //Masked Input ============================================================================================================================
    var $demoMaskedInput = $('.demo-masked-input');

    //Date
    $demoMaskedInput.find('.date').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });

    //Time
    $demoMaskedInput.find('.time12').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
    $demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });

    //Date Time
    $demoMaskedInput.find('.datetime').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: "datetime", hourFormat: '24' });

    //Mobile Phone Number
    $demoMaskedInput.find('.mobile-phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
    //Phone Number
    $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });

    //Dollar Money
    $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });
    //Euro Money
    $demoMaskedInput.find('.money-euro').inputmask('99,99 €', { placeholder: '__,__ €' });

    //IP Address
    $demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });

    //Credit Card
    $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });

    //Email
    $demoMaskedInput.find('.email').inputmask({ alias: "email" });

    //Serial Key
    $demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });





    //CPF
    $demoMaskedInput.find('.cpf-user').inputmask('999.999.999-99', { placeholder: '___.___.___-__' });

    //NIS
    $demoMaskedInput.find('.nis-user').inputmask('999.9999.999-9', { placeholder: '___.____.___-_' });

    //RG
    $demoMaskedInput.find('.rg-user').inputmask('99999999999999999999', { placeholder: '' });

    //DATA_NASCIMENTO
    $demoMaskedInput.find('.data-nasc-user').inputmask('99/99/9999', { placeholder: '99/99/9999' });

    //TITULO DE ELEITOR
    $demoMaskedInput.find('.titulo-eleitor-user').inputmask('999999999999', { placeholder: '' });

    //CTPS - CARTEIRA DE TRABALHO
    $demoMaskedInput.find('.ctps-user').inputmask('99999999999999999999', { placeholder: '' });

    //CTPS SERIE - CARTEIRA DE TRABALHO
    $demoMaskedInput.find('.ctps-serie-user').inputmask('9999999999', { placeholder: '' });

    //CNPJ EMPREGADOR
    $demoMaskedInput.find('.cnpj-empregador').inputmask('99.999.999/9999-99', { placeholder: '__.___.___/____-__' });
    //CPF EMPREGADOR
    $demoMaskedInput.find('.cpf-empregador').inputmask('999.999.999-99', { placeholder: '___.___.___-__' });
    //CNPJ EMPREGADOR
    $demoMaskedInput.find('.cei-empregador').inputmask('99999999999999999999', { placeholder: '' });

    //MASK FIELD DATA
    $demoMaskedInput.find('.mask-field-data').inputmask('99/99/9999', { placeholder: '__/__/____' });

    //CEP ENDERECO
    $demoMaskedInput.find('.cep-endereco').inputmask('9999999999', { placeholder: '' });

    //TEL CELULAR
    $demoMaskedInput.find('.tel-celular').inputmask('(99) 99999-9999', { placeholder: '(__) _____-____' });

    //TEL FIXO
    $demoMaskedInput.find('.tel-fone').inputmask('(99) 99999-9999', { placeholder: '(__) _____-____' });

    //DATA COMPROVANTE
    $demoMaskedInput.find('.mask-field-data').inputmask('99/99/9999', { placeholder: '__/__/____' });

    // $demoMaskedInput.find('.renda-mensal').inputmask('R$ 999.999.999,99', { numericInput: true});
    // $demoMaskedInput.find('.renda-mensal').maskMoney();
    $demoMaskedInput.find('.renda-mensal').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});


    //===========================================================================================================================================



    setTimeout(function(){
        $('#btn-error-alert').click();
    }, 1000);



});


$(function () {
    $('.jsdemo-notification-button button').on('click', function () {
        var placementFrom = $(this).data('placement-from');
        var placementAlign = $(this).data('placement-align');
        var animateEnter = $(this).data('animate-enter');
        var animateExit = $(this).data('animate-exit');
        var colorName = $(this).data('color-name');

        showNotification(colorName, null, placementFrom, placementAlign, animateEnter, animateExit);
    });
});

function showNotification(colorName, text, placementFrom, placementAlign, animateEnter, animateExit) {
    if (colorName === null || colorName === '') { colorName = 'bg-black'; }
    if (text === null || text === '') { text = 'Existe erro(s) no formulário, revise o(s) campo(s) para encontrar o(s) erro(s).'; }
    if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
    if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }
    var allowDismiss = true;

    $.notify({
        message: text
    },
        {
            type: colorName,
            allow_dismiss: allowDismiss,
            newest_on_top: true,
            timer: 2000,
            placement: {
                from: placementFrom,
                align: placementAlign
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

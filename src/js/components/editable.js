export default (() => {

    const inputs = $(".editable");

    inputs.focus(function () {
        $(this).removeClass("editable--error");
    });

    inputs.blur(function () {
        if( !$(this).val() ) {
            $(this).addClass("editable--error");
        }
    });

    inputs.keydown(function (e) {
        if (e.which === 13) {
            $(this).blur();
        }
    });

})();
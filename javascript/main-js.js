$(document).ready(function () {

    $("#hours").focusout(function () {

        var hours = $("#hours").val();
        var resultsMinutes = 0;
        var resultsSeconds = 0;

        resultsMinutes = hours * 60;
        resultsSeconds = hours * 3600;

        $("#minutes").val(resultsMinutes);
        $("#seconds").val(resultsSeconds);
    });

    $("#minutes").focusout(function () {

        var resultsHours = 0;
        var minutes = $("#minutes").val();
        var resultsSeconds = 0;

        resultsHours = minutes / 60;
        resultsSeconds = minutes * 60;

        $("#hours").val(resultsHours);
        $("#seconds").val(resultsSeconds);
    });
});

function openSideBar() {
    $('.sidebar').css({ 'width': '250px' });
    $('.header i, #vacationInfo i').css({ 'right': '260px' });
}

function closeSideBar() {
    $('.sidebar').css({ 'width': '0px' });
    $('.header i, #vacationInfo i').css({ 'right': '10px' });
}

function openInfo(name) {
    $('#main').css({ 'display': 'none' });
    $('#vacationInfo').css({ 'display': 'block' });
    $('#tripName').html(name);
    closeSideBar();
}

$(document).on('click', '.header i, #vacationInfo i', openSideBar);
$(document).on('click', '.closeSideBar', closeSideBar);

$(document).on('click', '.vacation', function() {
    openInfo($(this).text());
});

$(document).on('click', '#switchVacation', function() {
    var $selected = $('#tripsMenu option:selected').html();
    $('.vacation').each(function() {
        if ($selected == $(this).text()) {
            openInfo($selected);
        }
    });
})

$(function() {
    $('.vacation').each(function() {
        var $name = $(this).text();
        $('#tripsMenu').append('<option>' + $name + '</option>')
    });
});
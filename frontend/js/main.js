function openSideBar() {
    $('.sidebar').css({ 'width': '250px' });
    $('.header i').css({ 'right': '260px' });
}

function closeSideBar() {
    $('.sidebar').css({ 'width': '0px' });
    $('.header i').css({ 'right': '10px' });
}

$(document).on('click', '.header i', openSideBar);
$(document).on('click', '#closeSideBar', closeSideBar);

$(document).on('click', '.vacation', function() {
    $('#main').css({ 'display': 'none' });
    $('#vacationInfo').css({ 'display': 'block' });
});
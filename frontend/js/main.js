function openSideBar() {
    $('.sidebar').css({ 'width': '250px' });
    $('.header i').css({ 'right': '260px' });
}

function closeSideBar() {
    $('.sidebar').css({ 'width': '0px' });
    $('.header i').css({ 'right': '10px' });
}

window.onload = function() {
    $('.header i').click(openSideBar);
    $('#closeSideBar').click(closeSideBar);
}
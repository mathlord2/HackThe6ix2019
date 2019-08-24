function openSideBar() {
    $('.sidebar').css({ 'width': '250px' });
    $('.header i').css({ 'right': '260px' });
}

function closeSideBar() {
    $('.sidebar').css({ 'width': '0px' });
    $('.header i').css({ 'right': '10px' });
}

function exitInterview() {
    $('#main').css({ 'display': 'block' });
    $('#postInterview').css({ 'display': 'none' });
}

window.onload = function() {
    $('.header i').click(openSideBar);
    $('#closeSideBar').click(closeSideBar);
    $('#exitInterview').click(exitInterview);
}

$(document).on('click', '.interview', function() {
    $('#main').css({ 'display': 'none' });
    $('#postInterview').css({ 'display': 'block' });
    $('#tips').empty();

    var $repeatedWords = $(this).attr('repeated');
    $('#repeatedWords').html('Words utilized most frequently: ' + $repeatedWords);

    var $improvement = $(this).attr('improvement');
    $('#improvement').html($improvement);

    var $tips = $(this).attr('tips');
    var array = $tips.split('+;');
    for (var i=0; i<array.length; i++) {
        $('#tips').append('<li>' + array[i] + '</li>');
    }
});
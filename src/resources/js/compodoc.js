var compodoc = {
    EVENTS: {
        READY: 'compodoc.ready',
        SEARCH_READY: 'compodoc.search.ready'
    }
};

Object.assign(compodoc, EventDispatcher.prototype);

document.addEventListener('DOMContentLoaded', function () {
    compodoc.dispatchEvent({
        type: compodoc.EVENTS.READY
    });
});


// custom

$(document).ready(function () {
    $('h2, h3, h4, h5, h6').each(function (i, el) {
        $(this).mouseenter(function () {
            if ($(el).attr('id'))
                $(this).append('<a class="animated fadeIn" href="' + window.location.origin + window.location.pathname + '#' + $(el).attr('id') + '"><i class="fa fa-link" aria-hidden="true"></i></a>')
        })
        $(this).mouseleave(function () {
            if ($(el).attr('id'))
                $(this).find('a').remove()
        })
    })
});
$('#seName').click(function () {
    $('body').css('background-image', 'url("guillermo-alvarez-H2pZqb3vddI-unsplash.jpg")');
});
function apiSearch(q) {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '8fe86fe1971c4ea09ea2383d90139205'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
    //console.log(q);
}
$('#searchButton').click(function () {
    const query = $('#query').val();
    if (query) {
        apiSearch(query);
    } else {
        alert('Please enter a search term');
    }
});
$(document).ready(function () {
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    $('#timeButton').click(function () {
        const currentTime = getCurrentTime();
        $('#time').text(currentTime);
        $('#time').dialog({
            buttons: {
                OK: function () {
                    $(this).dialog("close");
                }
            }
        }
        );
    });
});
$(document).ready(function() {
    // Start your code from here
    const animes = ["Haikyuu", "Naruto", "Food wars", "Jujustu Kaisen", "My hero academia", "Attack on Titan", "Dr. Stone", "Tokyo Revengers"]
    var topicButtons = $('#animal-buttons');
    var gifs = $('#animals');
    var addTopic = $('#add-animal');
    var inputForm = $("#animal-input");

    animes.forEach(aux => {
        topicButtons.append(`<button>${aux}</button>`);
    });

    addTopic.on('click', function(e) {
        e.preventDefault();
        topicButtons.append(`<button>${inputForm.val()}</button>`)
        inputForm.val("");
    });

    topicButtons.on('click', 'button', function(e) {
        e.preventDefault();
        var aux = $(this)[0].innerText;
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=gRgiNoKnAcUvKRKkHYJY34gjqAO4Yeo9&q=${aux}&limit=10`,
            success: function(temp) {
                gifs.empty();
                temp.data.forEach(temp => {
                    gifs.append(`<div class="animal-item"><h3>Rating: <span style="color: black;">${temp.rating}</span></h3><img src='${temp.images.fixed_height_still.url}' data-still='${temp.images.fixed_height_still.url}' data-animated='${temp.images.fixed_height.url}' data-option='still' /></div>`)
                });
            },
            error: function(err) {
                console.log(err);
            }
        });
    });

    gifs.on('click', 'img', function(e) {
        e.preventDefault();
        var animate = $(this);
        var stillUrl = animate.attr('data-still');
        var animatedUrl = animate.attr('data-animated');

        if (animate.attr('data-option') === 'animated') {
            animate.attr('data-option', 'still');
            animate.attr('src', stillUrl);
        } else {
            animate.attr('data-option', 'animated');
            animate.attr('src', animatedUrl);
        }
    });
});

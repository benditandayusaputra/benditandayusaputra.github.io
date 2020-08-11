$(function () {

    // Youtube API
    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCXNOAPeyHZROXX8dCIn-1KQ&key=AIzaSyBTTqTBH3J1dO7Fy_kdU_cYgrM90a04w3E",
        dataType: "JSON",
        error: function (message) {
            console.log(message)
        },
        success: function (response) {
            $('#yt-profile-pict').attr('src', response.items[0].snippet.thumbnails.medium.url)
            $('#yt-username').html(response.items[0].snippet.title)
            $('#yt-subscribers').html(`${response.items[0].statistics.subscriberCount} Subscriber.`)
        }
    })

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXNOAPeyHZROXX8dCIn-1KQ&maxResults=1&key=AIzaSyBTTqTBH3J1dO7Fy_kdU_cYgrM90a04w3E&order=date",
        dataType: "JSON",
        error: function (message) {
            console.log(message)
        },
        success: function (response) {
            $('#yt-last-video').attr('src', `https://www.youtube.com/embed/${response.items[0].id.videoId}?rel=0`)
        }
    })

    // Instagram API
    // $.ajax({
    //     type: "GET",
    //     url: "https://graph.instagram.com/17841440066901176?fields=id,username&access_token=IGQVJYbmNDVXEtZAjFUZAlJVcXlkVUs0ZAUctOEE3eXl6eEhYMGg0SDZARX0p3dmxIWDF1X1VlV3pROGpsbzI3OE80d295bV85WFE5cEU3UUtfOXJ6U0hZAUmtkV0pna2xmcHRya1VmWW5BLXBGN01DQ2liQQZDZD",
    //     dataType: "JSON",
    //     error: function (message) {
    //         console.log(message)
    //     },
    //     success: function (response) {
    //         $("#ig-username").html(`@${response.username}`)
    //     }
    // })

    setTimeout(() => {
        $('#btns-intro').css('opacity', 1)
    }, 15500)

    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('nav').css('background-color', 'white')
            $('nav').addClass('shadow-lg')
        } else {
            $('nav').css('background-color', 'transparent')
            $('nav').removeClass('shadow-lg')
        }
    })

    $('.link').click(function (event) {
        const to = $(this).attr('href')
        const toElement = $(to)

        $('html,body').animate({
            scrollTop: toElement.offset().top - 100
        }, 1000)

        event.preventDefault()
    })

    $('#thumbnail').lightGallery({
        thumbnail: true,
        selector: 'a'
    })

    anime({
        targets: '.brand-logo .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: function (el, i) {
            return i * 300
        },
        direction: 'alternate',
        loop: true
    })

    let typed1 = new Typed(".type-1", {
        strings: ["Hello I'm Bendi Tandayu Saputra"],
        typeSpeed: 50,
        showCursor: false,
        loop: false
    })

    let typed2 = new Typed(".type-2", {
        strings: ["I'm Web Developer, Grapich Designer & YouTuber"],
        typeSpeed: 50,
        startDelay: 4000,
        showCursor: false,
        loop: false
    })

    let typed3 = new Typed("#intro-text", {
        strings: ["I'am still in school SMK N 1 Bawang, now i'm in grade 12 and my competency is software engineering."],
        typeSpeed: 50,
        startDelay: 7500,
        showCursor: false,
        loop: false
    })

    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });
})
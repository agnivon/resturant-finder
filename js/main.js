$.mobile.defaultPageTransition = "flow"

$(document).on('pagecreate', '#page2', function() {
    $('a[href="restaurants.html"]').click(function () {
        sessionStorage.setItem('restaurant-city', $(this).text())
    })
})


$(document).on('pagecreate', '#page3', function() {
    let $star = $('<i class="fa fa-star" aria-hidden="true"></i>')
    let $hstar = $('<i class="fa fa-star-half" aria-hidden="true"></i>')

    $('[rating]').each(function () {
        let rating = Number($(this).attr('rating'))
        let wr = Math.floor(rating)
        $(this).html('')
        for(let i = 0 ; i < wr; i++) {
            $(this).append($star.clone())
        }
        if(rating - wr >= 0.5) 
            $(this).append($hstar.clone())
    })

    $('a[href="restaurant.html"]').click(function () {
        sessionStorage.setItem('restaurant-name', $(this).children('h2').text())
        sessionStorage.setItem('restaurant-img', $(this).children('img').attr('src'))
        sessionStorage.setItem('restaurant-rating', $(this).find('[rating]').attr('rating'))
    })
})

$(document).on('pagebeforeshow', '#page4', function() {
    $('#restaurant-name').text(sessionStorage.getItem('restaurant-name'))
    $('#restaurant-img').attr('src', sessionStorage.getItem('restaurant-img'))
    console.log(sessionStorage.getItem('restaurant-city'))
    $('#restaurant-city').text(sessionStorage.getItem('restaurant-city'))
    $('#restaurant-rating').attr('rating', sessionStorage.getItem('restaurant-rating'))

    let $star = $('<i class="fa fa-star" aria-hidden="true"></i>')
    let $hstar = $('<i class="fa fa-star-half" aria-hidden="true"></i>')

    $('[rating]').each(function () {
        let rating = Number($(this).attr('rating'))
        let wr = Math.floor(rating)
        $(this).html('')
        for(let i = 0 ; i < wr; i++) {
            $(this).append($star.clone())
        }
        if(rating - wr >= 0.5) 
            $(this).append($hstar.clone())
    })
})
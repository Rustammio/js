const button = document.getElementsByClassName('tabs-title')
const tabContent = document.getElementsByClassName('info')
const text = document.getElementsByClassName('btn-text')
button[0].classList.add('active');
tabContent[0].classList.remove('hide');

function tab(event, name) {
    for (let i = 0; i < button.length; i++) {
        tabContent[i].classList.add('hide');
        button[i].classList.remove('active');


    }
    document.getElementById(name).classList.remove('hide');
    event.currentTarget.classList.add('active');
}


$(document).ready(function () {
    $('#myList li').hover(function(){
            let  hover= document.getElementById('box-hover')
            this.append(hover);
            $('#box-hover').slideDown(400);
        },
        function(){
            $('#box-hover').slideUp(200);
            $('#box-hover').stop(false, true);
        })

    $('[data-id]').click(function () {
        $('#myList li:lt(' + x + ')').show();
        $(".work-title").removeClass("filtered");
        $("#myList li::nth-child(4n)").addClass("3");
        $("#myList li::nth-child(4n-1)").addClass("2");
        $("#myList li::nth-child(4n-2)").addClass("4");
        $("#myList li::nth-child(4n-3)").addClass("5");
        let items = $('#myList li');
        let id = $(this).attr('data-id');
        if (id == 1) {
            $('#myList li:lt(' + x + ')').show();
            $('#loadMore').show();
            this.classList.toggle("filtered");
        }
        else {
            $( "#myList li" ).not( `[class="${id}"]` ).hide();
            $('#loadMore').hide();
            this.classList.toggle("filtered");
        }
    });
    size_li = $("#myList li").size();
    $("#myList li").hide();
    let x = 12;
    $('#myList li:lt(' + x + ')').show();
    $('#loadMore').click(function () {
        x = (x + 12 <= size_li) ? x + 12 : size_li;
        $('#myList li:lt(' + x + ')').show();
        if (x === size_li) {
            $('#loadMore').hide();
        }
    });

});


const sliderWrapper = document.getElementsByClassName('wrapper-slider')[0];
sliderWrapper.addEventListener('click', ({target}) => {
    if (target.classList.contains('img-slider')) {
        let activeIndex = target.dataset.set;
        let circles = Array.from(document.getElementsByClassName('img-slider'));
        let reviews = Array.from(document.getElementsByClassName('review-container'));
        circles.forEach(circle => circle.classList.remove('zoom'));
        circles[activeIndex - 1].classList.add('zoom');
        reviews.forEach(review => review.classList.remove('active'));
        reviews[activeIndex - 1].classList.add('active');
    }
});
const leftArrowBtn = document.getElementsByClassName('btn-left')[0];
leftArrowBtn.addEventListener('click', () => {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === 0 ? circles.length - 1 : prevActiveIndex - 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');
    activateReview(nextActiveIndex);
});
const rightArrowBtn = document.getElementsByClassName('btn-right')[0];
rightArrowBtn.addEventListener('click', () => {
    let circles = Array.from(document.getElementsByClassName('img-slider'));
    let prevActiveIndex = circles.findIndex(circle => circle.classList.contains('zoom'));
    let nextActiveIndex = prevActiveIndex === circles.length - 1 ? 0 : prevActiveIndex + 1;
    circles.forEach(circle => circle.classList.remove('zoom'));
    circles[nextActiveIndex].classList.add('zoom');
    activateReview(nextActiveIndex);
});
function activateReview(index) {
    let reviews = Array.from(document.getElementsByClassName('review-container'));
    reviews.forEach(review => review.classList.remove('active'));
    reviews[index].classList.add('active');
}


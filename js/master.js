$(window).ready(() => {
  $('.backdrop').css('display', 'none');



// Links

$('.menu__link').click((e) => {
  const targetId = e.target.id.replace('-link', '');
  $('html, body').animate({ scrollTop: `${$(`#${targetId}`).offset().top}`}, 900);
});

// Skills

const allSkills = {
  title: 'Complete experience',
  text: "Whether you need an aesthetic and functional user interface, an efficient web server with a database, or you just have a vague idea and need an entire project, you've come to the right place. Instead of displaying one long list, skills have been divided into three general areas. Clicking on the links above the title of this article will show more information about each one of them."
};

const frontSkills = {
  title: 'Presentation layer',
  text: "The work done over the years ranged from building simple static websites to full blown interactive Single Page Applications and Progressive Web Apps, as well as designing/optimizing the data flow, connecting the backend, optimizing performance and accessibility, writing tests, improving SEO, deploying and maintenance, adding international support and many other things. React and the React ecosystem have been my main passion and area of focus throughout my career."
};

const backSkills = {
  title: 'Data access layer',
  text: "Backend work included anything from designing and building servers from scratch, designing and building databases - both relational and non-relational, updating and creating schemas, adding custom middleware, password hashing, authentication, and many other things. Coming from a JS background, I do most of my backend work using Node and Express, however I am interested in learning and using other backend technologies as well, so the list may expand in the future. "
};

const otherSkills = {
  title: 'Bringing it together',
  text: "Knowledge of frontend and backend technologies isn't enough for one to be able to call himself a full stack developer, sometimes it's just as important to know how to combine all the elements into a full well-rounded app. In my case, that includes experience with both RESTful and non-RESTful architecture, WebSockets with Socket.IO, GraphQL, Docker, Redis, and so on. Switching between different responsibilities throughout my career gave me a habit of always keeping the big picture in mind."
};

$('.skills__option').click((e) => {
  switchSkills(e.target.id);
});

const switchSkills = (inp) => {
  switch (inp) {
    case 'frontskill':
      $('.skills__option').removeClass('active');
      $('#frontskill').addClass('active');
      $('.skills__info .title').text(frontSkills.title);
      $('.skills__info .text').text(frontSkills.text);
      $('.skills__layer').removeClass('active');
      $('.skills__layer').removeClass('inactive');
      $('#frontend').addClass('active');
      $('#backend').addClass('inactive');
      $('#rest').addClass('inactive');
      break;
    case 'backskill':
      $('.skills__option').removeClass('active');
      $('#backskill').addClass('active');
      $('.skills__info .title').text(backSkills.title);
      $('.skills__info .text').text(backSkills.text);
      $('.skills__layer').removeClass('active');
      $('.skills__layer').removeClass('inactive');
      $('#backend').addClass('active');
      $('#frontend').addClass('inactive');
      $('#rest').addClass('inactive');
      break;
    case 'otherskill':
      $('.skills__option').removeClass('active');
      $('#otherskill').addClass('active');
      $('.skills__info .title').text(otherSkills.title);
      $('.skills__info .text').text(otherSkills.text);
      $('.skills__layer').removeClass('active');
      $('.skills__layer').removeClass('inactive');
      $('#rest').addClass('active');
      $('#frontend').addClass('inactive');
      $('#backend').addClass('inactive');
      break;
    default:
      $('.skills__option').removeClass('active');
      $('#allskill').addClass('active');
      $('.skills__info .title').text(allSkills.title);
      $('.skills__info .text').text(allSkills.text);
      $('.skills__layer').removeClass('active');
      $('.skills__layer').removeClass('inactive');
  }
}

if ($(window).width() > 1150) {
  $('#skills').mousemove((e) => {

    var moveX = (($(window).width() /2) - e.pageX) * 0.02;
    var moveY = (($(window).height() /2) - e.pageY) * 0.02;

    $('#rest').css('transform', 'translate('+ moveX +'px, ' + moveY + 'px)');
    $('#backend').css('transform', 'translate('+ (moveX * 2) +'px, ' + (moveY * 2) + 'px)');
    $('#frontend').css('transform', 'translate('+ (moveX * 4) +'px, ' + (moveY * 4) + 'px)');

  });

  $('#about').mousemove((e) => {

    var moveX = (($(window).width() /2) - e.pageX) * 0.03;

    $('.about__image').css('transform', 'translateX('+ moveX +'px)');
    $('.about__article').css('transform', 'translateX('+ (moveX * 2) +'px)');

  });
}

// Gallery
const imgWidth = $('.gallery__item').outerWidth(true);
const maxSlide = $('.gallery__item').length - 2;
let sliding = false;
let current;

$('.gallery__item:nth-child(3)').addClass('active');

if ($(window).width() < 1150) {
  $('.gallery__list').css('left', `-${2 * imgWidth}px`);
  current = 2;
}

if ($(window).width() > 1150) {
  $('.gallery__list').css('left', `-${imgWidth}px`);
  current = 2;
  $('.gallery__item:nth-child(2)').addClass('left');
  $('.gallery__item:nth-child(4)').addClass('right');
}

const closeAll = () => {
  $('.gallery__item').each((index, element) => {
    if ($(element).hasClass('open')) {
      closeBook(element);
    }
  });
}

const nextSlide = () => {

  if (current > (maxSlide) || sliding === true) return;

  if (current === (maxSlide)) {

    $(`.gallery__item:nth-child(${maxSlide + 1})`).removeClass('active');
    $(`.gallery__item:nth-child(4)`).addClass('active');

    if ($(window).width() < 1150) {
      $('.gallery__list').css('left', `-${2 * imgWidth}px`);
    }

    if ($(window).width() > 1150) {
      $('.gallery__list').css('left', `-${imgWidth}px`);

      $(`.gallery__item:nth-child(${maxSlide})`).removeClass('left');
      $(`.gallery__item:nth-child(${maxSlide + 2})`).removeClass('right');
      $(`.gallery__item:nth-child(2)`).removeClass('left');
      $(`.gallery__item:nth-child(3)`).removeClass('active');
      $(`.gallery__item:nth-child(4)`).removeClass('right');

      $(`.gallery__item:nth-child(3)`).addClass('left');
      $(`.gallery__item:nth-child(5)`).addClass('right');
    }

    $('.gallery__list').animate({ 'left': `-=${imgWidth}`}, 500);
    current = 3;
  }

  else {
    sliding = true;
    current++;

    $(`.gallery__item:nth-child(${current})`).removeClass('active');
    $(`.gallery__item:nth-child(${current + 1})`).addClass('active');

    if ($(window).width() > 1150) {
      $(`.gallery__item:nth-child(${current - 1})`).removeClass('left');
      $(`.gallery__item:nth-child(${current + 1})`).removeClass('right');

      $(`.gallery__item:nth-child(${current})`).addClass('left');
      $(`.gallery__item:nth-child(${current + 2})`).addClass('right');
    }

    $('.gallery__list').animate({ 'left': `-=${imgWidth}`}, 500, () => {

      if (current === (maxSlide - 1) && $(window).width() > 1150) {
        $(`.gallery__item:nth-child(2)`).addClass('left');
        $(`.gallery__item:nth-child(3)`).addClass('active');
        $(`.gallery__item:nth-child(4)`).addClass('right');
      }

      sliding = false;
    });
  }

  closeAll();
};

const prevSlide = () => {

    if (current < 1 || sliding === true) return;

    if (current === 1) {

      $(`.gallery__item:nth-child(${maxSlide})`).removeClass('active');
      $(`.gallery__item:nth-child(${maxSlide - 1})`).addClass('active');

      if ($(window).width() < 1150) {
        $('.gallery__list').css('left', `-${(maxSlide - 1) * imgWidth}px`);
      }

      if ($(window).width() > 1150) {
        $('.gallery__list').css('left', `-${(maxSlide - 2) * imgWidth}px`);

        $(`.gallery__item:nth-child(3)`).removeClass('right');
        $(`.gallery__item:nth-child(2)`).removeClass('active');
        $(`.gallery__item:nth-child(1)`).removeClass('left');
        $(`.gallery__item:nth-child(${maxSlide - 1})`).removeClass('left');
        $(`.gallery__item:nth-child(${maxSlide + 1})`).removeClass('right');

        $(`.gallery__item:nth-child(${maxSlide})`).addClass('right');
        $(`.gallery__item:nth-child(${maxSlide - 2})`).addClass('left');
      }

      $('.gallery__list').animate({ 'left': `+=${imgWidth}`}, 500);
      current = maxSlide - 2;
    }

    else {
      sliding = true;
      current--;

        $(`.gallery__item:nth-child(${current + 2})`).removeClass('active');
        $(`.gallery__item:nth-child(${current + 1})`).addClass('active');

      if ($(window).width() > 1150){
        $(`.gallery__item:nth-child(${current + 3})`).removeClass('right');
        $(`.gallery__item:nth-child(${current + 1})`).removeClass('left');

        $(`.gallery__item:nth-child(${current + 2})`).addClass('right');
        $(`.gallery__item:nth-child(${current})`).addClass('left');
      }

      $('.gallery__list').animate({ 'left': `+=${imgWidth}`}, 500, () => {

        if (current === 1) {
          $(`.gallery__item:nth-child(${maxSlide - 1})`).addClass('left');
          $(`.gallery__item:nth-child(${maxSlide})`).addClass('active');
          $(`.gallery__item:nth-child(${maxSlide + 1})`).addClass('right');
        }

        sliding = false;
      });
    }

  closeAll();
};



$('#next').click(nextSlide);
$('#prev').click(prevSlide);


//open slides
$('.book__open').click((e) => {

  if ($(e.target).parent().parent().parent().parent().hasClass('active')) {
    const activeLi = $(e.target).parent().parent().parent().parent();
    if ($(window).width() < 1150) {
      $('.gallery__window').addClass('open');
      $(activeLi).addClass('open');
    }

    if ($(window).width() > 1150) {
        $(activeLi).addClass('open');
        $(activeLi).parent().animate({ 'left': `-=${imgWidth / 2}`}, 400);
    }
  }

  else return;
});

//close slides

const closeBook = (book) => {
  if ($(window).width() < 1150) {
    $('.gallery__window').removeClass('open');
    $(book).removeClass('open');
  }

  if ($(window).width() > 1150) {
      $(book).removeClass('open');
      $(book).parent().animate({ 'left': `+=${imgWidth / 2}`}, 400);
  }
}

$('.book__close').click((e) => {
  const activeLi = $(e.target).parent().parent().parent();

  if ($(activeLi).hasClass('active')) {
    closeBook(activeLi);
  }

  else return;
});
});

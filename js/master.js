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
  text: "The work done over the years ranged from building simple static websites using GatsbyJS or HTML & CSS combined with vanilla JS/JQuery, to building full blown interactive SPAs and PWAs built with React and it's many features, packages and popular pairings (Redux, Typescript, NextJS, etc.). On top of building and designing it, I was often in charge of connecting the apps to a backend, optimizing their performance, writing unit tests, improving SEO, deploying and maintaining, centralizing and optimizing state, localization and internationalization and many other things. React development has been my main passion and area of focus for years."
};

const backSkills = {
  title: 'Data access layer',
  text: "NodeJS combined with Express is the main approach I use for building a server, while the database can be either relational or non-relational, depending on the specific needs of the project. The most common choice for a relational database was PostgreSQL, while a non-relational approach usually meant using MongoDB (local, or in some instances, MongoAtlas), which I use with Mongoose and it's schemas almost exclusively. An important segment of my servers is also data security, which includes password hashing, route guarding, implementing strict boundaries to prevent storing invalid data and so on."
};

const otherSkills = {
  title: 'Bringing it together',
  text: "Other than just being familiar with various front-end and back-end technologies, one also needs to have the skills to combine all the elements into a full well-rounded app. In my case, those currently include knowledge of HTTP and AJAX requests, both RESTful and non-RESTful approaches to performing CRUD operations, WebSockets with Socket.IO for implementing duplex communication, GraphQL to easily work with complex systems, Docker for building containers, Redis for caching and/or storing data, different Amazon Web Services such as Lambda and S3 for improving the backend etc."
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

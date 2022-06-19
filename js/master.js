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
  text: "Whether you need an aesthetic and functional user interface, an efficiant web server, or a database to store various information, you've come to the right place. Instead of displaying one long list, skills have been divided into three general areas. Clicking on the links above the title of this article will show more information about each area of skills you may be interested in."
};

const frontSkills = {
  title: 'Presentation layer',
  text: "The work I've done over the years ranges from creating page elements and full web page layouts with HTML and CSS (including flexbox, grid, variables, animations etc), and/or implementing basic DOM manipulations with vanilla JS or JQuery, over building more complex websites that include AJAX requests, processing and outputting data, dynamically creating and conditionally rendering elements, all the way to building fast static websites with GatsbyJS and GraphQL, and finally, creating complex interactive SPAs with React & Redux (including Hooks, Context, Portals etc). React is the most commonly used item on this list, and it has been my main area of focus for any front-end work in the last few years."
};

const backSkills = {
  title: 'Data access layer',
  text: "NodeJS combined with Express is the main approach I use for building a server, while the database it connects to can be either relational or non-relational, depending on the specific needs of a certain project. The most common choice for a relational database is PostgreSQL, while a non-relational approach usually tends to be MongoDB (local, or in some instances, MongoAtlas), which I use with Mongoose and it's schemas almost exclusively. An important segment of my servers is also security, which includes everything from password hashing and route guarding, to setting constraints for various database fields to prevent storing invalid data."
};

const otherSkills = {
  title: 'Bringing it together',
  text: "Other than just being familiar with front-end and back-end technologies, one also needs to have the skills to combine all those elements into an fully rounded app. In my case, those currently include knowledge of HTTP and AJAX requests, both RESTful and non-RESTful, approaches to performing CRUD operations, WebSockets with Socket.IO for implementing duplex communication, GraphQL and many others. Of course, outside of development itself, knowing how to work with npm modules, and knowing how to use Git and GitHub also can't be left out. And finally, while it falls outside of the general area of web development, it's worth mentioning that I have experience with web/graphic design (UI/UX, logos, banners etc) and Adobe Photoshop."
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

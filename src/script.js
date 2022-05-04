$(document).ready(() => {
    const slickoptions = {
        autoplay: true,
        dots:false,
        prevArrow: '<button type="button" class="slick-prev slider_prev_arrow">Next</button>;',
        nextArrow: '<button type="button" class="slick-next slider_next_arrow">Next</button>;',
    }; 
    $('.slider').slick(slickoptions);

    $('form_submit').on('click',()=> {
       const email = $('#email').val();
       Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    });

  });

  
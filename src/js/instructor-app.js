const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');
const point3 = document.getElementById('point3');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const instructorAppEmail = document.getElementById('email');
const password = document.getElementById('password');
const btnPrev = document.querySelector(".whoflex-button__prev");
const btnNext = document.querySelector(".whoflex-button__next");

function activeStep1(){
    notActiveStep2();
    notActiveStep3();
    point1.classList.add('active');
    step1.classList.add('active');
    step1.classList.remove('d-none');
    btnPrev.classList.add('d-none');

    btnNext.addEventListener('click', function(){
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(instructorAppEmail.value)
            && firstName.value.length > 1
            && lastName.value.length > 1
            && password.value.length >= 6){
            activeStep2();
        }
    })
}

function activeStep2(){
    notActiveStep1();
    notActiveStep3();
    point2.classList.add('active');
    step2.classList.add('active');
    step2.classList.remove('d-none');
    btnPrev.classList.remove('d-none');
    btnPrev.addEventListener('click', function(){
        activeStep1();
    });
    btnNext.innerHTML = 'Next';
    btnNext.setAttribute('type', 'button');
    btnNext.addEventListener('click', function(){
        activeStep3();
    })
}

function activeStep3(){
    notActiveStep1();
    notActiveStep2();
    point3.classList.add('active');
    step3.classList.add('active');
    step3.classList.remove('d-none');
    btnPrev.classList.remove('d-none');
    btnPrev.addEventListener('click', function(){
        activeStep2();
    })
    btnNext.innerHTML = 'Submit';
    btnNext.addEventListener('click', function(){
        btnNext.setAttribute('type', 'submit');
    })
}
function notActiveStep1(){
    point1.classList.remove('active');
    step1.classList.remove('active');
    step1.classList.add('d-none');
}
function notActiveStep2(){
    point2.classList.remove('active');
    step2.classList.remove('active');
    step2.classList.add('d-none');
}
function notActiveStep3(){
    point3.classList.remove('active');
    step3.classList.remove('active');
    step3.classList.add('d-none');
}




(function (){
    let inputs = document.querySelectorAll('.input-file');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input-file__button-text').innerText;

        input.addEventListener('change', function (e) {
            // let countFiles = '';
            // if (this.files && this.files.length >= 1)
            //     countFiles = this.files.length;

            // if (countFiles)
            if (label)
                label.querySelector('.input-file__button-text').innerText = input.files[0].name;
            else
                label.querySelector('.input-file__button-text').innerText = labelVal;
        });
    });
}());

function instApp (){
    if(step1 && step2 && step3){
        if(step1.classList.contains('active')){
            activeStep1();
            notActiveStep2();
            notActiveStep3();
        }
        if(step2.classList.contains('active')){
            activeStep2();
            notActiveStep1();
            notActiveStep3();
        }
        if(step3.classList.contains('active')){
            activeStep3();
            notActiveStep1();
            notActiveStep2();
        }
        else {
            step1.classList.add('active');
            activeStep1();
        }
    }
};
instApp();

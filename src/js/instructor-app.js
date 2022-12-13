const instructorApp = document.querySelector(".instructor-app");
const step1 = document.querySelector(".wrap-step1");
const step2 = document.querySelector(".wrap-step2");
const step3 = document.querySelector(".wrap-step3");
const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');
const point3 = document.getElementById('point3');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const instructorAppEmail = document.getElementById('email');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const btnPrev = document.querySelector(".whoflex-button__prev");
const btnNext = document.querySelector(".whoflex-button__next");


function handleClick() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(instructorAppEmail.value)
        && firstName.value.length > 1
        && lastName.value.length > 1
        && password.value.length >= 6) {
        activeStep2();
    }
};
function btnNextStep3(){
    if(agreement.checked){
        btnNext.setAttribute('type', 'submit');
    }
}
function activeStep1(){
    btnNext.removeEventListener('click', activeStep2);
    btnNext.removeEventListener('click', activeStep3);

    notActiveStep2();
    notActiveStep3();
    instructorApp.classList.add('step1');
    point1.classList.add('active');
    step1.classList.add('active');
    step1.classList.remove('d-none');
    btnPrev.classList.add('d-none');
    btnNext.addEventListener('click', handleClick)
}

function activeStep2(){
    btnNext.removeEventListener('click', btnNextStep3);
    btnNext.removeEventListener('click', handleClick);

    notActiveStep1();
    notActiveStep3();
    instructorApp.classList.add('step2');
    point2.classList.add('active');
    step2.classList.add('active');
    step2.classList.remove('d-none');
    btnPrev.classList.remove('d-none');
    btnPrev.addEventListener('click', activeStep1);
    btnNext.innerHTML = 'Next';
    btnNext.setAttribute('type', 'button');
    btnNext.addEventListener('click', activeStep3)
}

function activeStep3(){
    btnPrev.removeEventListener('click', activeStep1);
    notActiveStep1();
    notActiveStep2();
    instructorApp.classList.add('step3');
    point3.classList.add('active');
    step3.classList.add('active');
    step3.classList.remove('d-none');
    btnPrev.classList.remove('d-none');
    btnPrev.addEventListener('click', activeStep2)
    btnNext.innerHTML = 'Submit';
    btnNext.addEventListener('click', btnNextStep3);
}
function notActiveStep1(){
    point1.classList.remove('active');
    step1.classList.remove('active');
    step1.classList.add('d-none');
    instructorApp.classList.remove('step1');
}
function notActiveStep2(){
    point2.classList.remove('active');
    step2.classList.remove('active');
    step2.classList.add('d-none');
    instructorApp.classList.remove('step2');
}
function notActiveStep3(){
    point3.classList.remove('active');
    step3.classList.remove('active');
    step3.classList.add('d-none');
    instructorApp.classList.remove('step3');
}




(function (){
    const inputs = document.querySelectorAll('.input-file');
    const paperClip = document.querySelector('.paperClip');
    const iconPdf = document.querySelector('.iconPdf');
    const buttonText = document.querySelector('.input-file__button-text');
    const inputFile = document.querySelector('.input-file__wrapper');
    const uploadBottom = document.querySelector('.upload-bottom');
    const tryAgain = document.querySelector('.tryAgain');
    Array.prototype.forEach.call(inputs, function (input) {
        const label = input.nextElementSibling,
            labelVal = label.querySelector('.input-file__button-text').innerText;

        input.addEventListener('change', function (e) {
            if (label) {
                inputFile.classList.add('upload');
                buttonText.innerText = input.files[0].name;
                paperClip.classList.add('d-none');
                iconPdf.classList.remove('d-none');
                uploadBottom.classList.remove('d-none');
                tryAgain.addEventListener('click', function (){
                    input.click();
                })
            }
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

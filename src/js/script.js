const signInModal = document.querySelector(".whoflex-signin-modal");
const signUpModal = document.querySelector(".whoflex-signup-modal");
const signInTrigger = document.querySelector(".signin-trigger");
const signUpTrigger = document.querySelector(".signup-trigger");
const signInCloseButton = document.querySelector(".whoflex-signin-close-button");
const signUpCloseButton = document.querySelector(".whoflex-signup-close-button");
const signUpTitle = document.querySelector(".whoflex-modal-title-sing-up");
const signUpButton = document.getElementById("signUpButton");
const signUpInputs = document.getElementById("signUpInputs");
const signUpSocialButtons = document.getElementById("signUpSocialButtons");
const signUpBackButton = document.getElementById("signUpBackButton");
const errorMessage = document.getElementById("error-message");
const email = document.getElementById('email');
const signinEmail = document.getElementById('signinEmail');
const signupEmail = document.getElementById('signupEmail');
const signinErrorMessage = document.getElementById('signin-error-message');
const signupErrorMessage = document.getElementById('signup-error-message');
const haveAccount = document.getElementById('have-account');
const signupRightContainer = document.getElementById('signup-right-container')
const whoflexAggrement = document.getElementById('whoflex-aggrement')
const signupImg = document.getElementById('signupImg')
const signupModalContainer = document.getElementById('signupModalContainer')
const whoflexLeftTextContainer = document.getElementById('whoflexLeftTextContainer');

(function(){
    if(signinErrorMessage){
        signinErrorMessage.style.display = "none";
    }
    if(signupErrorMessage){
        signupErrorMessage.style.display = "none";
    }
    if(errorMessage){
        errorMessage.style.display = "none";
    }
    if(haveAccount){
        haveAccount.innerHTML = 'Already have an account?'
    }
    if(signupRightContainer){
        signupRightContainer.classList.add("mt-36")
    }
    if(whoflexAggrement){
        whoflexAggrement.classList.add("mb-0", "mt-45")
    }
}());

function windowOnClick(event) {
    if (event.target === signInModal) {
        toggleSignInModal();
    } else if (event.target === signUpModal) {
        toggleSignUpModal();
    }
}

function toggleSignInModal() {
    signInModal.classList.toggle("whoflex-signin-show-modal");
}
function toggleSignUpModal() {
    signUpModal.classList.toggle("whoflex-signup-show-modal");
}


function hideEmailSignUpEmail(e) {
    e.preventDefault()
    signupImg.src = "images/sign-up2.png"
    // haveAccount.innerHTML = 'Don\'t have an account?'
    signUpInputs.classList.add("d-block")
    signUpInputs.classList.remove("d-none")
    signUpButton.classList.add("d-none")
    signUpSocialButtons.classList.add("d-none")
    signupRightContainer.classList.add("mt-0")
    signupRightContainer.classList.remove("mt-36")
    whoflexAggrement.classList.add("mb-17", "mt-90")
    whoflexAggrement.classList.remove("mb-0", "mt-45" )
    // signupModalContainer.style.height = "679px"
    whoflexLeftTextContainer.style.bottom = "192px"
    signUpTitle.classList.add("d-none")
}

function showEmailSignUpEmail(e) {
    e.preventDefault()
    signupImg.src = "images/sign-up.png"
    haveAccount.innerHTML = 'Already have an account?'
    signUpInputs.classList.add("d-none")
    signUpInputs.classList.remove("d-block")
    signUpButton.classList.add("d-block")
    signUpButton.classList.remove("d-none")
    signUpSocialButtons.classList.add("d-block")
    signUpSocialButtons.classList.remove("d-none")
    signupRightContainer.classList.add("mt-36")
    signupRightContainer.classList.remove("mt-0")
    whoflexAggrement.classList.add("mb-0", "mt-45")
    whoflexAggrement.classList.remove("mb-17", "mt-90")
    // signupModalContainer.style.height = "642px"
    whoflexLeftTextContainer.style.bottom = "158px"
    signUpTitle.classList.remove("d-none")

}

if(signInModal){
    signInTrigger.addEventListener("click", toggleSignInModal);
    signUpTrigger.addEventListener("click", toggleSignUpModal);
    signInCloseButton.addEventListener("click", toggleSignInModal);
}
if (signUpModal){
    signUpCloseButton.addEventListener("click", toggleSignUpModal);
    window.addEventListener("click", windowOnClick);
    signUpButton.addEventListener('click', (e) => hideEmailSignUpEmail(e))
    signUpBackButton.addEventListener('click', (e) => showEmailSignUpEmail(e))
}

const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function checkSignUpEmailValidation() {
    if (!filter.test(signupEmail.value)) {
        signupErrorMessage.style.display = "block";
        signupEmail.style.border = "1px solid #ea4335";

        signupEmail.focus();
        return false;
    } else {
        signupErrorMessage.style.display = "none";
        signupEmail.style.border = "1px solid #dddddd";
    }
};
function checkSignInEmailValidation() {
    if (!filter.test(signinEmail.value)) {
        signinErrorMessage.style.display = "block";
        signinEmail.style.border = "1px solid #ea4335";

        signinEmail.focus();
        return false;
    } else {
        signinErrorMessage.style.display = "none";
        signinEmail.style.border = "1px solid #dddddd";
    }
};
function checkEmailValidation() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        errorMessage.style.display = "block";
        email.style.border = "1px solid #ea4335";

        email.focus();
        return false;
    } else {
        errorMessage.style.display = "none";
        email.style.border = "1px solid #dddddd";
    }
};



function checkPassValidation() {
    const password = document.getElementById("password");
    const passHelpText = document.getElementById("passHelpText");
    password.addEventListener('change', function(){
        if (password.value.length < 6) {
            passHelpText.style.color = "#ea4335";
            password.style.border = "1px solid #ea4335";
        } else {
            passHelpText.style.color = "#666666";
            password.style.border = "1px solid #dddddd";
        }
    })

    if (password.value.length >= 6) {
        passHelpText.style.color = "#666666";
        password.style.border = "1px solid #dddddd";
    }
};

function showPassFunction() {
    const showPass = document.querySelectorAll(".showPass");
    showPass.forEach(item => {
        item.classList.add('d-none');
        const wrapPa = item.closest('.whoflex-input__wrap');
        const input = wrapPa.querySelector('input');

        input.addEventListener('keyup', function(){
            if(input.value.length > 0){
                item.classList.remove('d-none');
            }else{
                item.classList.add('d-none');
            }
        })
        item.addEventListener('click', function(){
            if (input.type === "password") {
                input.type = "text";
                item.innerHTML = "Hide";

            } else {
                input.type = "password";
                item.innerHTML = "Show";
            }
            input.focus();
            input.selectionStart = input.value.length;
        })
    })
};
showPassFunction();


const inputSearch = document.getElementById("jobSearch");
const dropdown = document.getElementById("instructorSearch");
const listSearch = document.querySelector(".instructor-list");
let itemSearch =  document.querySelectorAll(".instructor-list span");

function listJobSearch() {
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(inputSearch);
        if ( ! withinBoundaries ) {
            listSearch.classList.remove('active'); 
            inputSearch.classList.remove('active');
        }
    })

    itemSearch.forEach(item => {
        item.addEventListener('click', function(){
            let text = item.textContent; 
            inputSearch.value = text;
        })
    });
}listJobSearch();


function jobsSearch() {
    let filter, list, i, txtValue ;
    filter = inputSearch.value.toUpperCase();
    list = dropdown.getElementsByTagName("span");
    let jobItem = 0;

    listSearch.classList.add('active');
    inputSearch.classList.add('active');

    if(inputSearch.value == 0) {
        listSearch.classList.remove('active'); 
        inputSearch.classList.remove('active');
    }

    for (i = 0; i < list.length; i++) {
        
        txtValue = list[i].textContent || list[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        list[i].style.display = "";
        } else {
            list[i].style.display = "none";
            jobItem++;    
        }
        if(jobItem == list.length) {
            listSearch.classList.remove('active'); 
            inputSearch.classList.remove('active');
        }
    }
}
    

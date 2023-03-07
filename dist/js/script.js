"use strict";var signInModal=document.querySelector(".whoflex-signin-modal"),signUpModal=document.querySelector(".whoflex-signup-modal"),signInTrigger=document.querySelector(".signin-trigger"),signUpTrigger=document.querySelector(".signup-trigger"),signInCloseButton=document.querySelector(".whoflex-signin-close-button"),signUpCloseButton=document.querySelector(".whoflex-signup-close-button"),signUpTitle=document.querySelector(".whoflex-modal-title-sing-up"),signUpButton=document.getElementById("signUpButton"),signUpInputs=document.getElementById("signUpInputs"),signUpSocialButtons=document.getElementById("signUpSocialButtons"),signUpBackButton=document.getElementById("signUpBackButton"),errorMessage=document.getElementById("error-message"),email=document.getElementById("email"),signinEmail=document.getElementById("signinEmail"),signupEmail=document.getElementById("signupEmail"),signinErrorMessage=document.getElementById("signin-error-message"),signupErrorMessage=document.getElementById("signup-error-message"),haveAccount=document.getElementById("have-account"),signupRightContainer=document.getElementById("signup-right-container"),whoflexAggrement=document.getElementById("whoflex-aggrement"),signupImg=document.getElementById("signupImg"),signupModalContainer=document.getElementById("signupModalContainer"),whoflexLeftTextContainer=document.getElementById("whoflexLeftTextContainer");function windowOnClick(e){e.target===signInModal?toggleSignInModal():e.target===signUpModal&&toggleSignUpModal()}function toggleSignInModal(){signInModal.classList.toggle("whoflex-signin-show-modal")}function toggleSignUpModal(){signUpModal.classList.toggle("whoflex-signup-show-modal")}function hideEmailSignUpEmail(e){e.preventDefault(),signupImg.src="images/sign-up2.png",signUpInputs.classList.add("d-block"),signUpInputs.classList.remove("d-none"),signUpButton.classList.add("d-none"),signUpSocialButtons.classList.add("d-none"),signupRightContainer.classList.add("mt-0"),signupRightContainer.classList.remove("mt-36"),whoflexAggrement.classList.add("mb-17","mt-90"),whoflexAggrement.classList.remove("mb-0","mt-45"),whoflexLeftTextContainer.style.bottom="192px",signUpTitle.classList.add("d-none")}function showEmailSignUpEmail(e){e.preventDefault(),signupImg.src="images/sign-up.png",haveAccount.innerHTML="Already have an account?",signUpInputs.classList.add("d-none"),signUpInputs.classList.remove("d-block"),signUpButton.classList.add("d-block"),signUpButton.classList.remove("d-none"),signUpSocialButtons.classList.add("d-block"),signUpSocialButtons.classList.remove("d-none"),signupRightContainer.classList.add("mt-36"),signupRightContainer.classList.remove("mt-0"),whoflexAggrement.classList.add("mb-0","mt-45"),whoflexAggrement.classList.remove("mb-17","mt-90"),whoflexLeftTextContainer.style.bottom="158px",signUpTitle.classList.remove("d-none")}signinErrorMessage&&(signinErrorMessage.style.display="none"),signupErrorMessage&&(signupErrorMessage.style.display="none"),errorMessage&&(errorMessage.style.display="none"),haveAccount&&(haveAccount.innerHTML="Already have an account?"),signupRightContainer&&signupRightContainer.classList.add("mt-36"),whoflexAggrement&&whoflexAggrement.classList.add("mb-0","mt-45"),signInModal&&(signInTrigger.addEventListener("click",toggleSignInModal),signUpTrigger.addEventListener("click",toggleSignUpModal),signInCloseButton.addEventListener("click",toggleSignInModal)),signUpModal&&(signUpCloseButton.addEventListener("click",toggleSignUpModal),window.addEventListener("click",windowOnClick),signUpButton.addEventListener("click",(function(e){return hideEmailSignUpEmail(e)})),signUpBackButton.addEventListener("click",(function(e){return showEmailSignUpEmail(e)})));var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;function checkSignUpEmailValidation(){if(!filter.test(signupEmail.value))return signupErrorMessage.style.display="block",signupEmail.style.border="1px solid #ea4335",signupEmail.focus(),!1;signupErrorMessage.style.display="none",signupEmail.style.border="1px solid #dddddd"}function checkSignInEmailValidation(){if(!filter.test(signinEmail.value))return signinErrorMessage.style.display="block",signinEmail.style.border="1px solid #ea4335",signinEmail.focus(),!1;signinErrorMessage.style.display="none",signinEmail.style.border="1px solid #dddddd"}function checkEmailValidation(){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value))return errorMessage.style.display="block",email.style.border="1px solid #ea4335",email.focus(),!1;errorMessage.style.display="none",email.style.border="1px solid #dddddd"}function checkPassValidation(){var e=document.getElementById("password"),n=document.getElementById("passHelpText");e.addEventListener("change",(function(){e.value.length<6?(n.style.color="#ea4335",e.style.border="1px solid #ea4335"):(n.style.color="#666666",e.style.border="1px solid #dddddd")})),e.value.length>=6&&(n.style.color="#666666",e.style.border="1px solid #dddddd")}function showPassFunction(){document.querySelectorAll(".showPass").forEach((function(e){e.classList.add("d-none");var n=e.closest(".whoflex-input__wrap").querySelector("input");n.addEventListener("keyup",(function(){n.value.length>0?e.classList.remove("d-none"):e.classList.add("d-none")})),e.addEventListener("click",(function(){"password"===n.type?(n.type="text",e.innerHTML="Hide"):(n.type="password",e.innerHTML="Show"),n.focus(),n.selectionStart=n.value.length}))}))}showPassFunction();var inputSearch=document.getElementById("jobSearch"),dropdown=document.getElementById("instructorSearch"),listSearch=document.querySelector(".instructor-list"),itemSearch=document.querySelectorAll(".instructor-list span");function listJobSearch(){inputSearch.addEventListener("input",(function(){listSearch.classList.add("active"),inputSearch.classList.add("active"),0==inputSearch.value&&(listSearch.classList.remove("active"),inputSearch.classList.remove("active"))})),document.addEventListener("click",(function(e){e.composedPath().includes(inputSearch)||(listSearch.classList.remove("active"),inputSearch.classList.remove("active"))})),itemSearch.forEach((function(e){e.addEventListener("click",(function(){var n=e.textContent;inputSearch.value=n}))}))}function jobsSearch(){var e,n,t;e=inputSearch.value.toUpperCase(),n=dropdown.getElementsByTagName("span");var s=0;for(t=0;t<n.length;t++)(n[t].textContent||n[t].innerText).toUpperCase().indexOf(e)>-1?n[t].style.display="":(n[t].style.display="none",s++),s==n.length&&(listSearch.classList.remove("active"),inputSearch.classList.remove("active"))}listJobSearch();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJzaWduSW5Nb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNpZ25VcE1vZGFsIiwic2lnbkluVHJpZ2dlciIsInNpZ25VcFRyaWdnZXIiLCJzaWduSW5DbG9zZUJ1dHRvbiIsInNpZ25VcENsb3NlQnV0dG9uIiwic2lnblVwVGl0bGUiLCJzaWduVXBCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInNpZ25VcElucHV0cyIsInNpZ25VcFNvY2lhbEJ1dHRvbnMiLCJzaWduVXBCYWNrQnV0dG9uIiwiZXJyb3JNZXNzYWdlIiwiZW1haWwiLCJzaWduaW5FbWFpbCIsInNpZ251cEVtYWlsIiwic2lnbmluRXJyb3JNZXNzYWdlIiwic2lnbnVwRXJyb3JNZXNzYWdlIiwiaGF2ZUFjY291bnQiLCJzaWdudXBSaWdodENvbnRhaW5lciIsIndob2ZsZXhBZ2dyZW1lbnQiLCJzaWdudXBJbWciLCJzaWdudXBNb2RhbENvbnRhaW5lciIsIndob2ZsZXhMZWZ0VGV4dENvbnRhaW5lciIsIndpbmRvd09uQ2xpY2siLCJldmVudCIsInRhcmdldCIsInRvZ2dsZVNpZ25Jbk1vZGFsIiwidG9nZ2xlU2lnblVwTW9kYWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoaWRlRW1haWxTaWduVXBFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNyYyIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwiYm90dG9tIiwic2hvd0VtYWlsU2lnblVwRW1haWwiLCJpbm5lckhUTUwiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImZpbHRlciIsImNoZWNrU2lnblVwRW1haWxWYWxpZGF0aW9uIiwidGVzdCIsInZhbHVlIiwiYm9yZGVyIiwiZm9jdXMiLCJjaGVja1NpZ25JbkVtYWlsVmFsaWRhdGlvbiIsImNoZWNrRW1haWxWYWxpZGF0aW9uIiwiY2hlY2tQYXNzVmFsaWRhdGlvbiIsInBhc3N3b3JkIiwicGFzc0hlbHBUZXh0IiwibGVuZ3RoIiwiY29sb3IiLCJzaG93UGFzc0Z1bmN0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiaW5wdXQiLCJjbG9zZXN0IiwidHlwZSIsInNlbGVjdGlvblN0YXJ0IiwiaW5wdXRTZWFyY2giLCJkcm9wZG93biIsImxpc3RTZWFyY2giLCJpdGVtU2VhcmNoIiwibGlzdEpvYlNlYXJjaCIsImNvbXBvc2VkUGF0aCIsImluY2x1ZGVzIiwidGV4dCIsInRleHRDb250ZW50Iiwiam9ic1NlYXJjaCIsImxpc3QiLCJpIiwidG9VcHBlckNhc2UiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImpvYkl0ZW0iLCJpbm5lclRleHQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUFBLElBQU1BLFlBQWNDLFNBQVNDLGNBQWMseUJBQ3JDQyxZQUFjRixTQUFTQyxjQUFjLHlCQUNyQ0UsY0FBZ0JILFNBQVNDLGNBQWMsbUJBQ3ZDRyxjQUFnQkosU0FBU0MsY0FBYyxtQkFDdkNJLGtCQUFvQkwsU0FBU0MsY0FBYyxnQ0FDM0NLLGtCQUFvQk4sU0FBU0MsY0FBYyxnQ0FDM0NNLFlBQWNQLFNBQVNDLGNBQWMsZ0NBQ3JDTyxhQUFlUixTQUFTUyxlQUFlLGdCQUN2Q0MsYUFBZVYsU0FBU1MsZUFBZSxnQkFDdkNFLG9CQUFzQlgsU0FBU1MsZUFBZSx1QkFDOUNHLGlCQUFtQlosU0FBU1MsZUFBZSxvQkFDM0NJLGFBQWViLFNBQVNTLGVBQWUsaUJBQ3ZDSyxNQUFRZCxTQUFTUyxlQUFlLFNBQ2hDTSxZQUFjZixTQUFTUyxlQUFlLGVBQ3RDTyxZQUFjaEIsU0FBU1MsZUFBZSxlQUN0Q1EsbUJBQXFCakIsU0FBU1MsZUFBZSx3QkFDN0NTLG1CQUFxQmxCLFNBQVNTLGVBQWUsd0JBQzdDVSxZQUFjbkIsU0FBU1MsZUFBZSxnQkFDdENXLHFCQUF1QnBCLFNBQVNTLGVBQWUsMEJBQy9DWSxpQkFBbUJyQixTQUFTUyxlQUFlLHFCQUMzQ2EsVUFBWXRCLFNBQVNTLGVBQWUsYUFDcENj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cmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNpZ25Jbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LXNpZ25pbi1tb2RhbFwiKTtcclxuY29uc3Qgc2lnblVwTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndob2ZsZXgtc2lnbnVwLW1vZGFsXCIpO1xyXG5jb25zdCBzaWduSW5UcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduaW4tdHJpZ2dlclwiKTtcclxuY29uc3Qgc2lnblVwVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLXRyaWdnZXJcIik7XHJcbmNvbnN0IHNpZ25JbkNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LXNpZ25pbi1jbG9zZS1idXR0b25cIik7XHJcbmNvbnN0IHNpZ25VcENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LXNpZ251cC1jbG9zZS1idXR0b25cIik7XHJcbmNvbnN0IHNpZ25VcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LW1vZGFsLXRpdGxlLXNpbmctdXBcIik7XHJcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwQnV0dG9uXCIpO1xyXG5jb25zdCBzaWduVXBJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcElucHV0c1wiKTtcclxuY29uc3Qgc2lnblVwU29jaWFsQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwU29jaWFsQnV0dG9uc1wiKTtcclxuY29uc3Qgc2lnblVwQmFja0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwQmFja0J1dHRvblwiKTtcclxuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1tZXNzYWdlXCIpO1xyXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xyXG5jb25zdCBzaWduaW5FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduaW5FbWFpbCcpO1xyXG5jb25zdCBzaWdudXBFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBFbWFpbCcpO1xyXG5jb25zdCBzaWduaW5FcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbmluLWVycm9yLW1lc3NhZ2UnKTtcclxuY29uc3Qgc2lnbnVwRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC1lcnJvci1tZXNzYWdlJyk7XHJcbmNvbnN0IGhhdmVBY2NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhdmUtYWNjb3VudCcpO1xyXG5jb25zdCBzaWdudXBSaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtcmlnaHQtY29udGFpbmVyJylcclxuY29uc3Qgd2hvZmxleEFnZ3JlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aG9mbGV4LWFnZ3JlbWVudCcpXHJcbmNvbnN0IHNpZ251cEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBJbWcnKVxyXG5jb25zdCBzaWdudXBNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBNb2RhbENvbnRhaW5lcicpXHJcbmNvbnN0IHdob2ZsZXhMZWZ0VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aG9mbGV4TGVmdFRleHRDb250YWluZXInKTtcclxuXHJcbihmdW5jdGlvbigpe1xyXG4gICAgaWYoc2lnbmluRXJyb3JNZXNzYWdlKXtcclxuICAgICAgICBzaWduaW5FcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgaWYoc2lnbnVwRXJyb3JNZXNzYWdlKXtcclxuICAgICAgICBzaWdudXBFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgaWYoZXJyb3JNZXNzYWdlKXtcclxuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgaWYoaGF2ZUFjY291bnQpe1xyXG4gICAgICAgIGhhdmVBY2NvdW50LmlubmVySFRNTCA9ICdBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8nXHJcbiAgICB9XHJcbiAgICBpZihzaWdudXBSaWdodENvbnRhaW5lcil7XHJcbiAgICAgICAgc2lnbnVwUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm10LTM2XCIpXHJcbiAgICB9XHJcbiAgICBpZih3aG9mbGV4QWdncmVtZW50KXtcclxuICAgICAgICB3aG9mbGV4QWdncmVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYi0wXCIsIFwibXQtNDVcIilcclxuICAgIH1cclxufSgpKTtcclxuXHJcbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT09IHNpZ25Jbk1vZGFsKSB7XHJcbiAgICAgICAgdG9nZ2xlU2lnbkluTW9kYWwoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBzaWduVXBNb2RhbCkge1xyXG4gICAgICAgIHRvZ2dsZVNpZ25VcE1vZGFsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNpZ25Jbk1vZGFsKCkge1xyXG4gICAgc2lnbkluTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcIndob2ZsZXgtc2lnbmluLXNob3ctbW9kYWxcIik7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlU2lnblVwTW9kYWwoKSB7XHJcbiAgICBzaWduVXBNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwid2hvZmxleC1zaWdudXAtc2hvdy1tb2RhbFwiKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVFbWFpbFNpZ25VcEVtYWlsKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2lnbnVwSW1nLnNyYyA9IFwiaW1hZ2VzL3NpZ24tdXAyLnBuZ1wiXHJcbiAgICAvLyBoYXZlQWNjb3VudC5pbm5lckhUTUwgPSAnRG9uXFwndCBoYXZlIGFuIGFjY291bnQ/J1xyXG4gICAgc2lnblVwSW5wdXRzLmNsYXNzTGlzdC5hZGQoXCJkLWJsb2NrXCIpXHJcbiAgICBzaWduVXBJbnB1dHMuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgc2lnblVwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgIHNpZ25VcFNvY2lhbEJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgc2lnbnVwUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm10LTBcIilcclxuICAgIHNpZ251cFJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtdC0zNlwiKVxyXG4gICAgd2hvZmxleEFnZ3JlbWVudC5jbGFzc0xpc3QuYWRkKFwibWItMTdcIiwgXCJtdC05MFwiKVxyXG4gICAgd2hvZmxleEFnZ3JlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWItMFwiLCBcIm10LTQ1XCIgKVxyXG4gICAgLy8gc2lnbnVwTW9kYWxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCI2NzlweFwiXHJcbiAgICB3aG9mbGV4TGVmdFRleHRDb250YWluZXIuc3R5bGUuYm90dG9tID0gXCIxOTJweFwiXHJcbiAgICBzaWduVXBUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dFbWFpbFNpZ25VcEVtYWlsKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2lnbnVwSW1nLnNyYyA9IFwiaW1hZ2VzL3NpZ24tdXAucG5nXCJcclxuICAgIGhhdmVBY2NvdW50LmlubmVySFRNTCA9ICdBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8nXHJcbiAgICBzaWduVXBJbnB1dHMuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgc2lnblVwSW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJkLWJsb2NrXCIpXHJcbiAgICBzaWduVXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImQtYmxvY2tcIilcclxuICAgIHNpZ25VcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICBzaWduVXBTb2NpYWxCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJkLWJsb2NrXCIpXHJcbiAgICBzaWduVXBTb2NpYWxCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgIHNpZ251cFJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtdC0zNlwiKVxyXG4gICAgc2lnbnVwUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm10LTBcIilcclxuICAgIHdob2ZsZXhBZ2dyZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1iLTBcIiwgXCJtdC00NVwiKVxyXG4gICAgd2hvZmxleEFnZ3JlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWItMTdcIiwgXCJtdC05MFwiKVxyXG4gICAgLy8gc2lnbnVwTW9kYWxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCI2NDJweFwiXHJcbiAgICB3aG9mbGV4TGVmdFRleHRDb250YWluZXIuc3R5bGUuYm90dG9tID0gXCIxNThweFwiXHJcbiAgICBzaWduVXBUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcblxyXG59XHJcblxyXG5pZihzaWduSW5Nb2RhbCl7XHJcbiAgICBzaWduSW5UcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTaWduSW5Nb2RhbCk7XHJcbiAgICBzaWduVXBUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTaWduVXBNb2RhbCk7XHJcbiAgICBzaWduSW5DbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lnbkluTW9kYWwpO1xyXG59XHJcbmlmIChzaWduVXBNb2RhbCl7XHJcbiAgICBzaWduVXBDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lnblVwTW9kYWwpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3aW5kb3dPbkNsaWNrKTtcclxuICAgIHNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBoaWRlRW1haWxTaWduVXBFbWFpbChlKSlcclxuICAgIHNpZ25VcEJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd0VtYWlsU2lnblVwRW1haWwoZSkpXHJcbn1cclxuXHJcbmNvbnN0IGZpbHRlciA9IC9eKFthLXpBLVowLTlfXFwuXFwtXSkrXFxAKChbYS16QS1aMC05XFwtXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcblxyXG5mdW5jdGlvbiBjaGVja1NpZ25VcEVtYWlsVmFsaWRhdGlvbigpIHtcclxuICAgIGlmICghZmlsdGVyLnRlc3Qoc2lnbnVwRW1haWwudmFsdWUpKSB7XHJcbiAgICAgICAgc2lnbnVwRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc2lnbnVwRW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xyXG5cclxuICAgICAgICBzaWdudXBFbWFpbC5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2lnbnVwRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzaWdudXBFbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZGRkZGRkXCI7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGNoZWNrU2lnbkluRW1haWxWYWxpZGF0aW9uKCkge1xyXG4gICAgaWYgKCFmaWx0ZXIudGVzdChzaWduaW5FbWFpbC52YWx1ZSkpIHtcclxuICAgICAgICBzaWduaW5FcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzaWduaW5FbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZWE0MzM1XCI7XHJcblxyXG4gICAgICAgIHNpZ25pbkVtYWlsLmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaWduaW5FcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHNpZ25pbkVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNkZGRkZGRcIjtcclxuICAgIH1cclxufTtcclxuZnVuY3Rpb24gY2hlY2tFbWFpbFZhbGlkYXRpb24oKSB7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSAvXihbYS16QS1aMC05X1xcLlxcLV0pK1xcQCgoW2EtekEtWjAtOVxcLV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgaWYgKCFmaWx0ZXIudGVzdChlbWFpbC52YWx1ZSkpIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBlbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZWE0MzM1XCI7XHJcblxyXG4gICAgICAgIGVtYWlsLmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNkZGRkZGRcIjtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hlY2tQYXNzVmFsaWRhdGlvbigpIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcclxuICAgIGNvbnN0IHBhc3NIZWxwVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc0hlbHBUZXh0XCIpO1xyXG4gICAgcGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAocGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICBwYXNzSGVscFRleHQuc3R5bGUuY29sb3IgPSBcIiNlYTQzMzVcIjtcclxuICAgICAgICAgICAgcGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhc3NIZWxwVGV4dC5zdHlsZS5jb2xvciA9IFwiIzY2NjY2NlwiO1xyXG4gICAgICAgICAgICBwYXNzd29yZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZGRkZGRkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAocGFzc3dvcmQudmFsdWUubGVuZ3RoID49IDYpIHtcclxuICAgICAgICBwYXNzSGVscFRleHQuc3R5bGUuY29sb3IgPSBcIiM2NjY2NjZcIjtcclxuICAgICAgICBwYXNzd29yZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZGRkZGRkXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaG93UGFzc0Z1bmN0aW9uKCkge1xyXG4gICAgY29uc3Qgc2hvd1Bhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dQYXNzXCIpO1xyXG4gICAgc2hvd1Bhc3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBQYSA9IGl0ZW0uY2xvc2VzdCgnLndob2ZsZXgtaW5wdXRfX3dyYXAnKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IHdyYXBQYS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBcIkhpZGVcIjtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBcIlNob3dcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGlucHV0LnZhbHVlLmxlbmd0aDtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufTtcclxuc2hvd1Bhc3NGdW5jdGlvbigpO1xyXG5cclxuXHJcbmNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb2JTZWFyY2hcIik7XHJcbmNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0cnVjdG9yU2VhcmNoXCIpO1xyXG5jb25zdCBsaXN0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdG9yLWxpc3RcIik7XHJcbmxldCBpdGVtU2VhcmNoID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5zdHJ1Y3Rvci1saXN0IHNwYW5cIik7XHJcblxyXG5mdW5jdGlvbiBsaXN0Sm9iU2VhcmNoKCkge1xyXG4gICAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxpc3RTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYoaW5wdXRTZWFyY2gudmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICBsaXN0U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpOyBcclxuICAgICAgICAgICAgaW5wdXRTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpdGhpbkJvdW5kYXJpZXMgPSBlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGlucHV0U2VhcmNoKTtcclxuICAgICAgICBpZiAoICEgd2l0aGluQm91bmRhcmllcyApIHtcclxuICAgICAgICAgICAgbGlzdFNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgXHJcbiAgICAgICAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaXRlbVNlYXJjaC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0udGV4dENvbnRlbnQ7IFxyXG4gICAgICAgICAgICBpbnB1dFNlYXJjaC52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxufWxpc3RKb2JTZWFyY2goKTtcclxuXHJcblxyXG5mdW5jdGlvbiBqb2JzU2VhcmNoKCkge1xyXG4gICAgbGV0IGZpbHRlciwgbGlzdCwgaSwgdHh0VmFsdWUgO1xyXG4gICAgZmlsdGVyID0gaW5wdXRTZWFyY2gudmFsdWUudG9VcHBlckNhc2UoKTtcclxuICAgIGxpc3QgPSBkcm9wZG93bi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIik7XHJcbiAgICBsZXQgam9iSXRlbSA9IDA7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHR4dFZhbHVlID0gbGlzdFtpXS50ZXh0Q29udGVudCB8fCBsaXN0W2ldLmlubmVyVGV4dDtcclxuICAgICAgICBpZiAodHh0VmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xyXG4gICAgICAgIGxpc3RbaV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGpvYkl0ZW0rKzsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGpvYkl0ZW0gPT0gbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGlzdFNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgXHJcbiAgICAgICAgICAgIGlucHV0U2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgXHJcbiJdfQ==

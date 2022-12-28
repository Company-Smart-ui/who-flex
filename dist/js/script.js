"use strict";var signInModal=document.querySelector(".whoflex-signin-modal"),signUpModal=document.querySelector(".whoflex-signup-modal"),signInTrigger=document.querySelector(".signin-trigger"),signUpTrigger=document.querySelector(".signup-trigger"),signInCloseButton=document.querySelector(".whoflex-signin-close-button"),signUpCloseButton=document.querySelector(".whoflex-signup-close-button"),signUpTitle=document.querySelector(".whoflex-modal-title-sing-up"),signUpButton=document.getElementById("signUpButton"),signUpInputs=document.getElementById("signUpInputs"),signUpSocialButtons=document.getElementById("signUpSocialButtons"),signUpBackButton=document.getElementById("signUpBackButton"),errorMessage=document.getElementById("error-message"),email=document.getElementById("email"),signinEmail=document.getElementById("signinEmail"),signupEmail=document.getElementById("signupEmail"),signinErrorMessage=document.getElementById("signin-error-message"),signupErrorMessage=document.getElementById("signup-error-message"),haveAccount=document.getElementById("have-account"),signupRightContainer=document.getElementById("signup-right-container"),whoflexAggrement=document.getElementById("whoflex-aggrement"),signupImg=document.getElementById("signupImg"),signupModalContainer=document.getElementById("signupModalContainer"),whoflexLeftTextContainer=document.getElementById("whoflexLeftTextContainer");function windowOnClick(e){e.target===signInModal?toggleSignInModal():e.target===signUpModal&&toggleSignUpModal()}function toggleSignInModal(){signInModal.classList.toggle("whoflex-signin-show-modal")}function toggleSignUpModal(){signUpModal.classList.toggle("whoflex-signup-show-modal")}function hideEmailSignUpEmail(e){e.preventDefault(),signupImg.src="images/sign-up2.png",signUpInputs.classList.add("d-block"),signUpInputs.classList.remove("d-none"),signUpButton.classList.add("d-none"),signUpSocialButtons.classList.add("d-none"),signupRightContainer.classList.add("mt-0"),signupRightContainer.classList.remove("mt-36"),whoflexAggrement.classList.add("mb-17","mt-90"),whoflexAggrement.classList.remove("mb-0","mt-45"),whoflexLeftTextContainer.style.bottom="192px",signUpTitle.classList.add("d-none")}function showEmailSignUpEmail(e){e.preventDefault(),signupImg.src="images/sign-up.png",haveAccount.innerHTML="Already have an account?",signUpInputs.classList.add("d-none"),signUpInputs.classList.remove("d-block"),signUpButton.classList.add("d-block"),signUpButton.classList.remove("d-none"),signUpSocialButtons.classList.add("d-block"),signUpSocialButtons.classList.remove("d-none"),signupRightContainer.classList.add("mt-36"),signupRightContainer.classList.remove("mt-0"),whoflexAggrement.classList.add("mb-0","mt-45"),whoflexAggrement.classList.remove("mb-17","mt-90"),whoflexLeftTextContainer.style.bottom="158px",signUpTitle.classList.remove("d-none")}signinErrorMessage&&(signinErrorMessage.style.display="none"),signupErrorMessage&&(signupErrorMessage.style.display="none"),errorMessage&&(errorMessage.style.display="none"),haveAccount&&(haveAccount.innerHTML="Already have an account?"),signupRightContainer&&signupRightContainer.classList.add("mt-36"),whoflexAggrement&&whoflexAggrement.classList.add("mb-0","mt-45"),signInModal&&(signInTrigger.addEventListener("click",toggleSignInModal),signUpTrigger.addEventListener("click",toggleSignUpModal),signInCloseButton.addEventListener("click",toggleSignInModal)),signUpModal&&(signUpCloseButton.addEventListener("click",toggleSignUpModal),window.addEventListener("click",windowOnClick),signUpButton.addEventListener("click",(function(e){return hideEmailSignUpEmail(e)})),signUpBackButton.addEventListener("click",(function(e){return showEmailSignUpEmail(e)})));var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;function checkSignUpEmailValidation(){if(!filter.test(signupEmail.value))return signupErrorMessage.style.display="block",signupEmail.style.border="1px solid #ea4335",signupEmail.focus(),!1;signupErrorMessage.style.display="none",signupEmail.style.border="1px solid #dddddd"}function checkSignInEmailValidation(){if(!filter.test(signinEmail.value))return signinErrorMessage.style.display="block",signinEmail.style.border="1px solid #ea4335",signinEmail.focus(),!1;signinErrorMessage.style.display="none",signinEmail.style.border="1px solid #dddddd"}function checkEmailValidation(){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value))return errorMessage.style.display="block",email.style.border="1px solid #ea4335",email.focus(),!1;errorMessage.style.display="none",email.style.border="1px solid #dddddd"}function checkPassValidation(){var e=document.getElementById("password"),n=document.getElementById("passHelpText");e.addEventListener("change",(function(){e.value.length<6?(n.style.color="#ea4335",e.style.border="1px solid #ea4335",e.focus()):(n.style.color="#666666",e.style.border="1px solid #dddddd")})),e.value.length>=6&&(n.style.color="#666666",e.style.border="1px solid #dddddd")}function showPassFunction(){document.querySelectorAll(".showPass").forEach((function(e){e.classList.add("d-none");var n=e.closest(".whoflex-input__wrap").querySelector("input");n.addEventListener("keyup",(function(){n.value.length>0?e.classList.remove("d-none"):e.classList.add("d-none")})),n.addEventListener("click",(function(){n.focus(),n.selectionStart=n.value.length})),e.addEventListener("click",(function(){"password"===n.type?(n.type="text",e.innerHTML="Hide",n.focus(),n.selectionStart=n.value.length):(n.type="password",e.innerHTML="Show",n.focus(),n.selectionStart=n.value.length)}))}))}showPassFunction();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJzaWduSW5Nb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNpZ25VcE1vZGFsIiwic2lnbkluVHJpZ2dlciIsInNpZ25VcFRyaWdnZXIiLCJzaWduSW5DbG9zZUJ1dHRvbiIsInNpZ25VcENsb3NlQnV0dG9uIiwic2lnblVwVGl0bGUiLCJzaWduVXBCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInNpZ25VcElucHV0cyIsInNpZ25VcFNvY2lhbEJ1dHRvbnMiLCJzaWduVXBCYWNrQnV0dG9uIiwiZXJyb3JNZXNzYWdlIiwiZW1haWwiLCJzaWduaW5FbWFpbCIsInNpZ251cEVtYWlsIiwic2lnbmluRXJyb3JNZXNzYWdlIiwic2lnbnVwRXJyb3JNZXNzYWdlIiwiaGF2ZUFjY291bnQiLCJzaWdudXBSaWdodENvbnRhaW5lciIsIndob2ZsZXhBZ2dyZW1lbnQiLCJzaWdudXBJbWciLCJzaWdudXBNb2RhbENvbnRhaW5lciIsIndob2ZsZXhMZWZ0VGV4dENvbnRhaW5lciIsIndpbmRvd09uQ2xpY2siLCJldmVudCIsInRhcmdldCIsInRvZ2dsZVNpZ25Jbk1vZGFsIiwidG9nZ2xlU2lnblVwTW9kYWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoaWRlRW1haWxTaWduVXBFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNyYyIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwiYm90dG9tIiwic2hvd0VtYWlsU2lnblVwRW1haWwiLCJpbm5lckhUTUwiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImZpbHRlciIsImNoZWNrU2lnblVwRW1haWxWYWxpZGF0aW9uIiwidGVzdCIsInZhbHVlIiwiYm9yZGVyIiwiZm9jdXMiLCJjaGVja1NpZ25JbkVtYWlsVmFsaWRhdGlvbiIsImNoZWNrRW1haWxWYWxpZGF0aW9uIiwiY2hlY2tQYXNzVmFsaWRhdGlvbiIsInBhc3N3b3JkIiwicGFzc0hlbHBUZXh0IiwibGVuZ3RoIiwiY29sb3IiLCJzaG93UGFzc0Z1bmN0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiaW5wdXQiLCJjbG9zZXN0Iiwic2VsZWN0aW9uU3RhcnQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUFBLElBQU1BLFlBQWNDLFNBQVNDLGNBQWMseUJBQ3JDQyxZQUFjRixTQUFTQyxjQUFjLHlCQUNyQ0UsY0FBZ0JILFNBQVNDLGNBQWMsbUJBQ3ZDRyxjQUFnQkosU0FBU0MsY0FBYyxtQkFDdkNJLGtCQUFvQkwsU0FBU0MsY0FBYyxnQ0FDM0NLLGtCQUFvQk4sU0FBU0MsY0FBYyxnQ0FDM0NNLFlBQWNQLFNBQVNDLGNBQWMsZ0NBQ3JDTyxhQUFlUixTQUFTUyxlQUFlLGdCQUN2Q0MsYUFBZVYsU0FBU1MsZUFBZSxnQkFDdkNFLG9CQUFzQlgsU0FBU1MsZUFBZSx1QkFDOUNHLGlCQUFtQlosU0FBU1MsZUFBZSxvQkFDM0NJLGFBQWViLFNBQVNTLGVBQWUsaUJBQ3ZDSyxNQUFRZCxTQUFTUyxlQUFlLFNBQ2hDTSxZQUFjZixTQUFTUyxlQUFlLGVBQ3RDTyxZQUFjaEIsU0FBU1MsZUFBZSxlQUN0Q1EsbUJBQXFCakIsU0FBU1MsZUFBZSx3QkFDN0NTLG1CQUFxQmxCLFNBQVNTLGVBQWUsd0JBQzdDVSxZQUFjbkIsU0FBU1MsZUFBZSxnQkFDdENXLHFCQUF1QnBCLFNBQVNTLGVBQWUsMEJBQy9DWSxpQkFBbUJyQixTQUFTUyxlQUFlLHFCQUMzQ2EsVUFBWXRCLFNBQVNTLGVBQWUsYUFDcENjLHFCQUF1QnZCLFNBQVNTLGVBQWUsd0JBQy9DZSx5QkFBMkJ4QixTQUFTUyxlQUFlLDRCQXVCekQsU0FBU2dCLGNBQWNDLEdBQ2ZBLEVBQU1DLFNBQVc1QixZQUNqQjZCLG9CQUNPRixFQUFNQyxTQUFXekIsYUFDeEIyQixtQkFFUixDQUVBLFNBQVNELG9CQUNMN0IsWUFBWStCLFVBQVVDLE9BQU8sNEJBQ2pDLENBQ0EsU0FBU0Ysb0JBQ0wzQixZQUFZNEIsVUFBVUMs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IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1zaWduaW4tbW9kYWxcIik7XG5jb25zdCBzaWduVXBNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1zaWdudXAtbW9kYWxcIik7XG5jb25zdCBzaWduSW5UcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduaW4tdHJpZ2dlclwiKTtcbmNvbnN0IHNpZ25VcFRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC10cmlnZ2VyXCIpO1xuY29uc3Qgc2lnbkluQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndob2ZsZXgtc2lnbmluLWNsb3NlLWJ1dHRvblwiKTtcbmNvbnN0IHNpZ25VcENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LXNpZ251cC1jbG9zZS1idXR0b25cIik7XG5jb25zdCBzaWduVXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1tb2RhbC10aXRsZS1zaW5nLXVwXCIpO1xuY29uc3Qgc2lnblVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBCdXR0b25cIik7XG5jb25zdCBzaWduVXBJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcElucHV0c1wiKTtcbmNvbnN0IHNpZ25VcFNvY2lhbEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFNvY2lhbEJ1dHRvbnNcIik7XG5jb25zdCBzaWduVXBCYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBCYWNrQnV0dG9uXCIpO1xuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1tZXNzYWdlXCIpO1xuY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcbmNvbnN0IHNpZ25pbkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25pbkVtYWlsJyk7XG5jb25zdCBzaWdudXBFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBFbWFpbCcpO1xuY29uc3Qgc2lnbmluRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25pbi1lcnJvci1tZXNzYWdlJyk7XG5jb25zdCBzaWdudXBFcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLWVycm9yLW1lc3NhZ2UnKTtcbmNvbnN0IGhhdmVBY2NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhdmUtYWNjb3VudCcpO1xuY29uc3Qgc2lnbnVwUmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLXJpZ2h0LWNvbnRhaW5lcicpXG5jb25zdCB3aG9mbGV4QWdncmVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dob2ZsZXgtYWdncmVtZW50JylcbmNvbnN0IHNpZ251cEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBJbWcnKVxuY29uc3Qgc2lnbnVwTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwTW9kYWxDb250YWluZXInKVxuY29uc3Qgd2hvZmxleExlZnRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dob2ZsZXhMZWZ0VGV4dENvbnRhaW5lcicpO1xuXG4oZnVuY3Rpb24oKXtcbiAgICBpZihzaWduaW5FcnJvck1lc3NhZ2Upe1xuICAgICAgICBzaWduaW5FcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBpZihzaWdudXBFcnJvck1lc3NhZ2Upe1xuICAgICAgICBzaWdudXBFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBpZihlcnJvck1lc3NhZ2Upe1xuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBpZihoYXZlQWNjb3VudCl7XG4gICAgICAgIGhhdmVBY2NvdW50LmlubmVySFRNTCA9ICdBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8nXG4gICAgfVxuICAgIGlmKHNpZ251cFJpZ2h0Q29udGFpbmVyKXtcbiAgICAgICAgc2lnbnVwUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm10LTM2XCIpXG4gICAgfVxuICAgIGlmKHdob2ZsZXhBZ2dyZW1lbnQpe1xuICAgICAgICB3aG9mbGV4QWdncmVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYi0wXCIsIFwibXQtNDVcIilcbiAgICB9XG59KCkpO1xuXG5mdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gc2lnbkluTW9kYWwpIHtcbiAgICAgICAgdG9nZ2xlU2lnbkluTW9kYWwoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gc2lnblVwTW9kYWwpIHtcbiAgICAgICAgdG9nZ2xlU2lnblVwTW9kYWwoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNpZ25Jbk1vZGFsKCkge1xuICAgIHNpZ25Jbk1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJ3aG9mbGV4LXNpZ25pbi1zaG93LW1vZGFsXCIpO1xufVxuZnVuY3Rpb24gdG9nZ2xlU2lnblVwTW9kYWwoKSB7XG4gICAgc2lnblVwTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcIndob2ZsZXgtc2lnbnVwLXNob3ctbW9kYWxcIik7XG59XG5cblxuZnVuY3Rpb24gaGlkZUVtYWlsU2lnblVwRW1haWwoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNpZ251cEltZy5zcmMgPSBcImltYWdlcy9zaWduLXVwMi5wbmdcIlxuICAgIC8vIGhhdmVBY2NvdW50LmlubmVySFRNTCA9ICdEb25cXCd0IGhhdmUgYW4gYWNjb3VudD8nXG4gICAgc2lnblVwSW5wdXRzLmNsYXNzTGlzdC5hZGQoXCJkLWJsb2NrXCIpXG4gICAgc2lnblVwSW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICBzaWduVXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgIHNpZ25VcFNvY2lhbEJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgIHNpZ251cFJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtdC0wXCIpXG4gICAgc2lnbnVwUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm10LTM2XCIpXG4gICAgd2hvZmxleEFnZ3JlbWVudC5jbGFzc0xpc3QuYWRkKFwibWItMTdcIiwgXCJtdC05MFwiKVxuICAgIHdob2ZsZXhBZ2dyZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1iLTBcIiwgXCJtdC00NVwiIClcbiAgICAvLyBzaWdudXBNb2RhbENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjY3OXB4XCJcbiAgICB3aG9mbGV4TGVmdFRleHRDb250YWluZXIuc3R5bGUuYm90dG9tID0gXCIxOTJweFwiXG4gICAgc2lnblVwVGl0bGUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxufVxuXG5mdW5jdGlvbiBzaG93RW1haWxTaWduVXBFbWFpbChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2lnbnVwSW1nLnNyYyA9IFwiaW1hZ2VzL3NpZ24tdXAucG5nXCJcbiAgICBoYXZlQWNjb3VudC5pbm5lckhUTUwgPSAnQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/J1xuICAgIHNpZ25VcElucHV0cy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgc2lnblVwSW5wdXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJkLWJsb2NrXCIpXG4gICAgc2lnblVwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkLWJsb2NrXCIpXG4gICAgc2lnblVwQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICBzaWduVXBTb2NpYWxCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJkLWJsb2NrXCIpXG4gICAgc2lnblVwU29jaWFsQnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgc2lnbnVwUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm10LTM2XCIpXG4gICAgc2lnbnVwUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm10LTBcIilcbiAgICB3aG9mbGV4QWdncmVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYi0wXCIsIFwibXQtNDVcIilcbiAgICB3aG9mbGV4QWdncmVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtYi0xN1wiLCBcIm10LTkwXCIpXG4gICAgLy8gc2lnbnVwTW9kYWxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCI2NDJweFwiXG4gICAgd2hvZmxleExlZnRUZXh0Q29udGFpbmVyLnN0eWxlLmJvdHRvbSA9IFwiMTU4cHhcIlxuICAgIHNpZ25VcFRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcblxufVxuXG5pZihzaWduSW5Nb2RhbCl7XG4gICAgc2lnbkluVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lnbkluTW9kYWwpO1xuICAgIHNpZ25VcFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVNpZ25VcE1vZGFsKTtcbiAgICBzaWduSW5DbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lnbkluTW9kYWwpO1xufVxuaWYgKHNpZ25VcE1vZGFsKXtcbiAgICBzaWduVXBDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lnblVwTW9kYWwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgd2luZG93T25DbGljayk7XG4gICAgc2lnblVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhpZGVFbWFpbFNpZ25VcEVtYWlsKGUpKVxuICAgIHNpZ25VcEJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd0VtYWlsU2lnblVwRW1haWwoZSkpXG59XG5cbmNvbnN0IGZpbHRlciA9IC9eKFthLXpBLVowLTlfXFwuXFwtXSkrXFxAKChbYS16QS1aMC05XFwtXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XG5cbmZ1bmN0aW9uIGNoZWNrU2lnblVwRW1haWxWYWxpZGF0aW9uKCkge1xuICAgIGlmICghZmlsdGVyLnRlc3Qoc2lnbnVwRW1haWwudmFsdWUpKSB7XG4gICAgICAgIHNpZ251cEVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBzaWdudXBFbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZWE0MzM1XCI7XG5cbiAgICAgICAgc2lnbnVwRW1haWwuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZ251cEVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHNpZ251cEVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNkZGRkZGRcIjtcbiAgICB9XG59O1xuZnVuY3Rpb24gY2hlY2tTaWduSW5FbWFpbFZhbGlkYXRpb24oKSB7XG4gICAgaWYgKCFmaWx0ZXIudGVzdChzaWduaW5FbWFpbC52YWx1ZSkpIHtcbiAgICAgICAgc2lnbmluRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHNpZ25pbkVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlYTQzMzVcIjtcblxuICAgICAgICBzaWduaW5FbWFpbC5mb2N1cygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lnbmluRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgc2lnbmluRW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2RkZGRkZFwiO1xuICAgIH1cbn07XG5mdW5jdGlvbiBjaGVja0VtYWlsVmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSAvXihbYS16QS1aMC05X1xcLlxcLV0pK1xcQCgoW2EtekEtWjAtOVxcLV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xuICAgIGlmICghZmlsdGVyLnRlc3QoZW1haWwudmFsdWUpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBlbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZWE0MzM1XCI7XG5cbiAgICAgICAgZW1haWwuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNkZGRkZGRcIjtcbiAgICB9XG59O1xuXG5cblxuZnVuY3Rpb24gY2hlY2tQYXNzVmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XG4gICAgY29uc3QgcGFzc0hlbHBUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzSGVscFRleHRcIik7XG4gICAgcGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgIHBhc3NIZWxwVGV4dC5zdHlsZS5jb2xvciA9IFwiI2VhNDMzNVwiO1xuICAgICAgICAgICAgcGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xuXG4gICAgICAgICAgICBwYXNzd29yZC5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc0hlbHBUZXh0LnN0eWxlLmNvbG9yID0gXCIjNjY2NjY2XCI7XG4gICAgICAgICAgICBwYXNzd29yZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZGRkZGRkXCI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGlmIChwYXNzd29yZC52YWx1ZS5sZW5ndGggPj0gNikge1xuICAgICAgICBwYXNzSGVscFRleHQuc3R5bGUuY29sb3IgPSBcIiM2NjY2NjZcIjtcbiAgICAgICAgcGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2RkZGRkZFwiO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHNob3dQYXNzRnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2hvd1Bhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dQYXNzXCIpO1xuICAgIHNob3dQYXNzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIGNvbnN0IHdyYXBQYSA9IGl0ZW0uY2xvc2VzdCgnLndob2ZsZXgtaW5wdXRfX3dyYXAnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB3cmFwUGEucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgLy8gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLGZ1bmN0aW9uICgpe1xuICAgICAgICAvLyAgICAgaWYoaW5wdXQudmFsdWUubGVuZ3RoID4gMCl7XG4gICAgICAgIC8vICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZnMxMCcpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZnMxMCcpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGlucHV0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfSlcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gXCJIaWRlXCI7XG4gICAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGlucHV0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IFwiU2hvd1wiO1xuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5zaG93UGFzc0Z1bmN0aW9uKCk7XG5cblxuIl19

"use strict";var signInModal=document.querySelector(".whoflex-signin-modal"),signUpModal=document.querySelector(".whoflex-signup-modal"),signInTrigger=document.querySelector(".signin-trigger"),signUpTrigger=document.querySelector(".signup-trigger"),signInCloseButton=document.querySelector(".whoflex-signin-close-button"),signUpCloseButton=document.querySelector(".whoflex-signup-close-button"),signUpTitle=document.querySelector(".whoflex-modal-title-sing-up"),signUpButton=document.getElementById("signUpButton"),signUpInputs=document.getElementById("signUpInputs"),signUpSocialButtons=document.getElementById("signUpSocialButtons"),signUpBackButton=document.getElementById("signUpBackButton"),errorMessage=document.getElementById("error-message"),email=document.getElementById("email"),signinEmail=document.getElementById("signinEmail"),signupEmail=document.getElementById("signupEmail"),signinErrorMessage=document.getElementById("signin-error-message"),signupErrorMessage=document.getElementById("signup-error-message"),haveAccount=document.getElementById("have-account"),signupRightContainer=document.getElementById("signup-right-container"),whoflexAggrement=document.getElementById("whoflex-aggrement"),signupImg=document.getElementById("signupImg"),signupModalContainer=document.getElementById("signupModalContainer"),whoflexLeftTextContainer=document.getElementById("whoflexLeftTextContainer");function windowOnClick(e){e.target===signInModal?toggleSignInModal():e.target===signUpModal&&toggleSignUpModal()}function toggleSignInModal(){signInModal.classList.toggle("whoflex-signin-show-modal")}function toggleSignUpModal(){signUpModal.classList.toggle("whoflex-signup-show-modal")}function hideEmailSignUpEmail(e){e.preventDefault(),signupImg.src="images/sign-up2.png",signUpInputs.classList.add("d-block"),signUpInputs.classList.remove("d-none"),signUpButton.classList.add("d-none"),signUpSocialButtons.classList.add("d-none"),signupRightContainer.classList.add("mt-0"),signupRightContainer.classList.remove("mt-36"),whoflexAggrement.classList.add("mb-17","mt-90"),whoflexAggrement.classList.remove("mb-0","mt-45"),signupModalContainer.style.height="679px",whoflexLeftTextContainer.style.bottom="192px",signUpTitle.classList.add("d-none")}function showEmailSignUpEmail(e){e.preventDefault(),signupImg.src="images/sign-up.png",haveAccount.innerHTML="Already have an account?",signUpInputs.classList.add("d-none"),signUpInputs.classList.remove("d-block"),signUpButton.classList.add("d-block"),signUpButton.classList.remove("d-none"),signUpSocialButtons.classList.add("d-block"),signUpSocialButtons.classList.remove("d-none"),signupRightContainer.classList.add("mt-36"),signupRightContainer.classList.remove("mt-0"),whoflexAggrement.classList.add("mb-0","mt-45"),whoflexAggrement.classList.remove("mb-17","mt-90"),signupModalContainer.style.height="642px",whoflexLeftTextContainer.style.bottom="158px",signUpTitle.classList.remove("d-none")}signinErrorMessage&&(signinErrorMessage.style.display="none"),signupErrorMessage&&(signupErrorMessage.style.display="none"),errorMessage&&(errorMessage.style.display="none"),haveAccount&&(haveAccount.innerHTML="Already have an account?"),signupRightContainer&&signupRightContainer.classList.add("mt-36"),whoflexAggrement&&whoflexAggrement.classList.add("mb-0","mt-45"),signInModal&&(signInTrigger.addEventListener("click",toggleSignInModal),signUpTrigger.addEventListener("click",toggleSignUpModal),signInCloseButton.addEventListener("click",toggleSignInModal)),signUpModal&&(signUpCloseButton.addEventListener("click",toggleSignUpModal),window.addEventListener("click",windowOnClick),signUpButton.addEventListener("click",(function(e){return hideEmailSignUpEmail(e)})),signUpBackButton.addEventListener("click",(function(e){return showEmailSignUpEmail(e)})));var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;function checkSignUpEmailValidation(){if(!filter.test(signupEmail.value))return signupErrorMessage.style.display="block",signupEmail.style.border="1px solid #ea4335",signupEmail.focus(),!1;signupErrorMessage.style.display="none",signupEmail.style.border="1px solid #dddddd"}function checkSignInEmailValidation(){if(!filter.test(signinEmail.value))return signinErrorMessage.style.display="block",signinEmail.style.border="1px solid #ea4335",signinEmail.focus(),!1;signinErrorMessage.style.display="none",signinEmail.style.border="1px solid #dddddd"}function checkEmailValidation(){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value))return errorMessage.style.display="block",email.style.border="1px solid #ea4335",email.focus(),!1;errorMessage.style.display="none",email.style.border="1px solid #dddddd"}function checkPassValidation(){var e=document.getElementById("password"),n=document.getElementById("passHelpText");e.value.length<6?(n.style.color="#ea4335",e.style.border="1px solid #ea4335",e.focus()):(n.style.color="#666666",e.style.border="1px solid #dddddd")}function showPassFunction(){document.querySelectorAll(".showPass").forEach((function(e){e.classList.add("d-none");var n=e.closest(".whoflex-input__wrap").querySelector("input");n.addEventListener("keyup",(function(){n.value.length>0?e.classList.remove("d-none"):e.classList.add("d-none")})),e.addEventListener("click",(function(){"password"===n.type?(n.type="text",e.innerHTML="Hide"):(n.type="password",e.innerHTML="Show")}))}))}showPassFunction();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJzaWduSW5Nb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNpZ25VcE1vZGFsIiwic2lnbkluVHJpZ2dlciIsInNpZ25VcFRyaWdnZXIiLCJzaWduSW5DbG9zZUJ1dHRvbiIsInNpZ25VcENsb3NlQnV0dG9uIiwic2lnblVwVGl0bGUiLCJzaWduVXBCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInNpZ25VcElucHV0cyIsInNpZ25VcFNvY2lhbEJ1dHRvbnMiLCJzaWduVXBCYWNrQnV0dG9uIiwiZXJyb3JNZXNzYWdlIiwiZW1haWwiLCJzaWduaW5FbWFpbCIsInNpZ251cEVtYWlsIiwic2lnbmluRXJyb3JNZXNzYWdlIiwic2lnbnVwRXJyb3JNZXNzYWdlIiwiaGF2ZUFjY291bnQiLCJzaWdudXBSaWdodENvbnRhaW5lciIsIndob2ZsZXhBZ2dyZW1lbnQiLCJzaWdudXBJbWciLCJzaWdudXBNb2RhbENvbnRhaW5lciIsIndob2ZsZXhMZWZ0VGV4dENvbnRhaW5lciIsIndpbmRvd09uQ2xpY2siLCJldmVudCIsInRhcmdldCIsInRvZ2dsZVNpZ25Jbk1vZGFsIiwidG9nZ2xlU2lnblVwTW9kYWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoaWRlRW1haWxTaWduVXBFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNyYyIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwiaGVpZ2h0IiwiYm90dG9tIiwic2hvd0VtYWlsU2lnblVwRW1haWwiLCJpbm5lckhUTUwiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImZpbHRlciIsImNoZWNrU2lnblVwRW1haWxWYWxpZGF0aW9uIiwidGVzdCIsInZhbHVlIiwiYm9yZGVyIiwiZm9jdXMiLCJjaGVja1NpZ25JbkVtYWlsVmFsaWRhdGlvbiIsImNoZWNrRW1haWxWYWxpZGF0aW9uIiwiY2hlY2tQYXNzVmFsaWRhdGlvbiIsInBhc3N3b3JkIiwicGFzc0hlbHBUZXh0IiwibGVuZ3RoIiwiY29sb3IiLCJzaG93UGFzc0Z1bmN0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiaW5wdXQiLCJjbG9zZXN0IiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQSxJQUFNQSxZQUFjQyxTQUFTQyxjQUFjLHlCQUNyQ0MsWUFBY0YsU0FBU0MsY0FBYyx5QkFDckNFLGNBQWdCSCxTQUFTQyxjQUFjLG1CQUN2Q0csY0FBZ0JKLFNBQVNDLGNBQWMsbUJBQ3ZDSSxrQkFBb0JMLFNBQVNDLGNBQWMsZ0NBQzNDSyxrQkFBb0JOLFNBQVNDLGNBQWMsZ0NBQzNDTSxZQUFjUCxTQUFTQyxjQUFjLGdDQUNyQ08sYUFBZVIsU0FBU1MsZUFBZSxnQkFDdkNDLGFBQWVWLFNBQVNTLGVBQWUsZ0JBQ3ZDRSxvQkFBc0JYLFNBQVNTLGVBQWUsdUJBQzlDRyxpQkFBbUJaLFNBQVNTLGVBQWUsb0JBQzNDSSxhQUFlYixTQUFTUyxlQUFlLGlCQUN2Q0ssTUFBUWQsU0FBU1MsZUFBZSxTQUNoQ00sWUFBY2YsU0FBU1MsZUFBZSxlQUN0Q08sWUFBY2hCLFNBQVNTLGVBQWUsZUFDdENRLG1CQUFxQmpCLFNBQVNTLGVBQWUsd0JBQzdDUyxtQkFBcUJsQixTQUFTUyxlQUFlLHdCQUM3Q1UsWUFBY25CLFNBQVNTLGVBQWUsZ0JBQ3RDVyxxQkFBdUJwQixTQUFTUyxlQUFlLDBCQUMvQ1ksaUJBQW1CckIsU0FBU1MsZUFBZSxxQkFDM0NhLFVBQVl0QixTQUFTUyxlQUFlLGFBQ3BDYyxxQkFBdUJ2QixTQUFTUyxlQUFlLHdCQUMvQ2UseUJBQTJCeEIsU0FBU1MsZUFBZSw0QkF1QnpELFNBQVNnQixjQUFjQyxHQUNmQSxFQUFNQyxTQUFXNUIsWUFDakI2QixvQkFDT0YsRUFBTUMsU0FBV3pCLGFBQ3hCMkIsbUJBRVIsQ0FFQSxTQUFTRCxvQkFDTDdCLFlBQVkrQixVQUFVQyxPQUFPLDRCQUNqQyxDQUNBLFNBQVNGLG9CQUNMM0IsWUFBWTRCLFVBQVVDLE9BQU8sNEJB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UUFBVSxPQUM3QjdCLE1BQU13QixNQUFNWSxPQUFTLG1CQUU3QixDQUlBLFNBQVNJLHNCQUNMLElBQU1DLEVBQVd2RCxTQUFTUyxlQUFlLFlBQ25DK0MsRUFBZXhELFNBQVNTLGVBQWUsZ0JBQ3pDOEMsRUFBU04sTUFBTVEsT0FBUyxHQUN4QkQsRUFBYWxCLE1BQU1vQixNQUFRLFVBQzNCSCxFQUFTakIsTUFBTVksT0FBUyxvQkFFeEJLLEVBQVNKLFVBRVRLLEVBQWFsQixNQUFNb0IsTUFBUSxVQUMzQkgsRUFBU2pCLE1BQU1ZLE9BQVMsb0JBRWhDLENBRUEsU0FBU1MsbUJBQ1kzRCxTQUFTNEQsaUJBQWlCLGFBQ2xDQyxTQUFRLFNBQUFDLEdBQ2JBLEVBQUtoQyxVQUFVTSxJQUFJLFVBQ25CLElBQ00yQixFQURTRCxFQUFLRSxRQUFRLHdCQUNQL0QsY0FBYyxTQUNuQzhELEVBQU1uQixpQkFBaUIsU0FBUyxXQUN6Qm1CLEVBQU1kLE1BQU1RLE9BQVMsRUFDcEJLLEVBQUtoQyxVQUFVTyxPQUFPLFVBRXRCeUIsRUFBS2hDLFVBQVVNLElBQUksU0FFM0IsSUFDQTBCLEVBQUtsQixpQkFBaUIsU0FBUyxXQUNSLGFBQWZtQixFQUFNRSxNQUNORixFQUFNRSxLQUFPLE9BQ2JILEVBQUtwQixVQUFZLFNBRWpCcUIsRUFBTUUsS0FBTyxXQUNiSCxFQUFLcEIsVUFBWSxPQUV6QixHQUNKLEdBQ0osQ0FDQWlCIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNpZ25Jbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LXNpZ25pbi1tb2RhbFwiKTtcbmNvbnN0IHNpZ25VcE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LXNpZ251cC1tb2RhbFwiKTtcbmNvbnN0IHNpZ25JblRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ25pbi10cmlnZ2VyXCIpO1xuY29uc3Qgc2lnblVwVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLXRyaWdnZXJcIik7XG5jb25zdCBzaWduSW5DbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1zaWduaW4tY2xvc2UtYnV0dG9uXCIpO1xuY29uc3Qgc2lnblVwQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndob2ZsZXgtc2lnbnVwLWNsb3NlLWJ1dHRvblwiKTtcbmNvbnN0IHNpZ25VcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LW1vZGFsLXRpdGxlLXNpbmctdXBcIik7XG5jb25zdCBzaWduVXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcEJ1dHRvblwiKTtcbmNvbnN0IHNpZ25VcElucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwSW5wdXRzXCIpO1xuY29uc3Qgc2lnblVwU29jaWFsQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwU29jaWFsQnV0dG9uc1wiKTtcbmNvbnN0IHNpZ25VcEJhY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcEJhY2tCdXR0b25cIik7XG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLW1lc3NhZ2VcIik7XG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuY29uc3Qgc2lnbmluRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbmluRW1haWwnKTtcbmNvbnN0IHNpZ251cEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cEVtYWlsJyk7XG5jb25zdCBzaWduaW5FcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbmluLWVycm9yLW1lc3NhZ2UnKTtcbmNvbnN0IHNpZ251cEVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtZXJyb3ItbWVzc2FnZScpO1xuY29uc3QgaGF2ZUFjY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGF2ZS1hY2NvdW50Jyk7XG5jb25zdCBzaWdudXBSaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtcmlnaHQtY29udGFpbmVyJylcbmNvbnN0IHdob2ZsZXhBZ2dyZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hvZmxleC1hZ2dyZW1lbnQnKVxuY29uc3Qgc2lnbnVwSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cEltZycpXG5jb25zdCBzaWdudXBNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBNb2RhbENvbnRhaW5lcicpXG5jb25zdCB3aG9mbGV4TGVmdFRleHRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hvZmxleExlZnRUZXh0Q29udGFpbmVyJyk7XG5cbihmdW5jdGlvbigpe1xuICAgIGlmKHNpZ25pbkVycm9yTWVzc2FnZSl7XG4gICAgICAgIHNpZ25pbkVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGlmKHNpZ251cEVycm9yTWVzc2FnZSl7XG4gICAgICAgIHNpZ251cEVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGlmKGVycm9yTWVzc2FnZSl7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGlmKGhhdmVBY2NvdW50KXtcbiAgICAgICAgaGF2ZUFjY291bnQuaW5uZXJIVE1MID0gJ0FscmVhZHkgaGF2ZSBhbiBhY2NvdW50PydcbiAgICB9XG4gICAgaWYoc2lnbnVwUmlnaHRDb250YWluZXIpe1xuICAgICAgICBzaWdudXBSaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibXQtMzZcIilcbiAgICB9XG4gICAgaWYod2hvZmxleEFnZ3JlbWVudCl7XG4gICAgICAgIHdob2ZsZXhBZ2dyZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1iLTBcIiwgXCJtdC00NVwiKVxuICAgIH1cbn0oKSk7XG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBzaWduSW5Nb2RhbCkge1xuICAgICAgICB0b2dnbGVTaWduSW5Nb2RhbCgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBzaWduVXBNb2RhbCkge1xuICAgICAgICB0b2dnbGVTaWduVXBNb2RhbCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2lnbkluTW9kYWwoKSB7XG4gICAgc2lnbkluTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcIndob2ZsZXgtc2lnbmluLXNob3ctbW9kYWxcIik7XG59XG5mdW5jdGlvbiB0b2dnbGVTaWduVXBNb2RhbCgpIHtcbiAgICBzaWduVXBNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwid2hvZmxleC1zaWdudXAtc2hvdy1tb2RhbFwiKTtcbn1cblxuXG5mdW5jdGlvbiBoaWRlRW1haWxTaWduVXBFbWFpbChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2lnbnVwSW1nLnNyYyA9IFwiaW1hZ2VzL3NpZ24tdXAyLnBuZ1wiXG4gICAgLy8gaGF2ZUFjY291bnQuaW5uZXJIVE1MID0gJ0RvblxcJ3QgaGF2ZSBhbiBhY2NvdW50PydcbiAgICBzaWduVXBJbnB1dHMuY2xhc3NMaXN0LmFkZChcImQtYmxvY2tcIilcbiAgICBzaWduVXBJbnB1dHMuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgIHNpZ25VcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgc2lnblVwU29jaWFsQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgc2lnbnVwUmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm10LTBcIilcbiAgICBzaWdudXBSaWdodENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibXQtMzZcIilcbiAgICB3aG9mbGV4QWdncmVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYi0xN1wiLCBcIm10LTkwXCIpXG4gICAgd2hvZmxleEFnZ3JlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWItMFwiLCBcIm10LTQ1XCIgKVxuICAgIHNpZ251cE1vZGFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiNjc5cHhcIlxuICAgIHdob2ZsZXhMZWZ0VGV4dENvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjE5MnB4XCJcbiAgICBzaWduVXBUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG59XG5cbmZ1bmN0aW9uIHNob3dFbWFpbFNpZ25VcEVtYWlsKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzaWdudXBJbWcuc3JjID0gXCJpbWFnZXMvc2lnbi11cC5wbmdcIlxuICAgIGhhdmVBY2NvdW50LmlubmVySFRNTCA9ICdBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8nXG4gICAgc2lnblVwSW5wdXRzLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICBzaWduVXBJbnB1dHMuY2xhc3NMaXN0LnJlbW92ZShcImQtYmxvY2tcIilcbiAgICBzaWduVXBCdXR0b24uY2xhc3NMaXN0LmFkZChcImQtYmxvY2tcIilcbiAgICBzaWduVXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgIHNpZ25VcFNvY2lhbEJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImQtYmxvY2tcIilcbiAgICBzaWduVXBTb2NpYWxCdXR0b25zLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICBzaWdudXBSaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibXQtMzZcIilcbiAgICBzaWdudXBSaWdodENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibXQtMFwiKVxuICAgIHdob2ZsZXhBZ2dyZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1iLTBcIiwgXCJtdC00NVwiKVxuICAgIHdob2ZsZXhBZ2dyZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1iLTE3XCIsIFwibXQtOTBcIilcbiAgICBzaWdudXBNb2RhbENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjY0MnB4XCJcbiAgICB3aG9mbGV4TGVmdFRleHRDb250YWluZXIuc3R5bGUuYm90dG9tID0gXCIxNThweFwiXG4gICAgc2lnblVwVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuXG59XG5cbmlmKHNpZ25Jbk1vZGFsKXtcbiAgICBzaWduSW5UcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTaWduSW5Nb2RhbCk7XG4gICAgc2lnblVwVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lnblVwTW9kYWwpO1xuICAgIHNpZ25JbkNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTaWduSW5Nb2RhbCk7XG59XG5pZiAoc2lnblVwTW9kYWwpe1xuICAgIHNpZ25VcENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTaWduVXBNb2RhbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3aW5kb3dPbkNsaWNrKTtcbiAgICBzaWduVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGlkZUVtYWlsU2lnblVwRW1haWwoZSkpXG4gICAgc2lnblVwQmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzaG93RW1haWxTaWduVXBFbWFpbChlKSlcbn1cblxuY29uc3QgZmlsdGVyID0gL14oW2EtekEtWjAtOV9cXC5cXC1dKStcXEAoKFthLXpBLVowLTlcXC1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLztcblxuZnVuY3Rpb24gY2hlY2tTaWduVXBFbWFpbFZhbGlkYXRpb24oKSB7XG4gICAgaWYgKCFmaWx0ZXIudGVzdChzaWdudXBFbWFpbC52YWx1ZSkpIHtcbiAgICAgICAgc2lnbnVwRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHNpZ251cEVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlYTQzMzVcIjtcblxuICAgICAgICBzaWdudXBFbWFpbC5mb2N1cygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lnbnVwRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgc2lnbnVwRW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2RkZGRkZFwiO1xuICAgIH1cbn07XG5mdW5jdGlvbiBjaGVja1NpZ25JbkVtYWlsVmFsaWRhdGlvbigpIHtcbiAgICBpZiAoIWZpbHRlci50ZXN0KHNpZ25pbkVtYWlsLnZhbHVlKSkge1xuICAgICAgICBzaWduaW5FcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc2lnbmluRW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xuXG4gICAgICAgIHNpZ25pbkVtYWlsLmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWduaW5FcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBzaWduaW5FbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZGRkZGRkXCI7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGNoZWNrRW1haWxWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGZpbHRlciA9IC9eKFthLXpBLVowLTlfXFwuXFwtXSkrXFxAKChbYS16QS1aMC05XFwtXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XG4gICAgaWYgKCFmaWx0ZXIudGVzdChlbWFpbC52YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGVtYWlsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlYTQzMzVcIjtcblxuICAgICAgICBlbWFpbC5mb2N1cygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2RkZGRkZFwiO1xuICAgIH1cbn07XG5cblxuXG5mdW5jdGlvbiBjaGVja1Bhc3NWYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcbiAgICBjb25zdCBwYXNzSGVscFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3NIZWxwVGV4dFwiKTtcbiAgICBpZiAocGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNikge1xuICAgICAgICBwYXNzSGVscFRleHQuc3R5bGUuY29sb3IgPSBcIiNlYTQzMzVcIjtcbiAgICAgICAgcGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xuXG4gICAgICAgIHBhc3N3b3JkLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFzc0hlbHBUZXh0LnN0eWxlLmNvbG9yID0gXCIjNjY2NjY2XCI7XG4gICAgICAgIHBhc3N3b3JkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNkZGRkZGRcIjtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBzaG93UGFzc0Z1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNob3dQYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93UGFzc1wiKTtcbiAgICBzaG93UGFzcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICBjb25zdCB3cmFwUGEgPSBpdGVtLmNsb3Nlc3QoJy53aG9mbGV4LWlucHV0X193cmFwJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gd3JhcFBhLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBcIkhpZGVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IFwiU2hvd1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59O1xuc2hvd1Bhc3NGdW5jdGlvbigpO1xuXG5cbiJdfQ==

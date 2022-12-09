"use strict";var signInModal=document.querySelector(".whoflex-signin-modal"),signUpModal=document.querySelector(".whoflex-signup-modal"),signInTrigger=document.querySelector(".signin-trigger"),signUpTrigger=document.querySelector(".signup-trigger"),signInCloseButton=document.querySelector(".whoflex-signin-close-button"),signUpCloseButton=document.querySelector(".whoflex-signup-close-button"),signUpTitle=document.querySelector(".whoflex-modal-title-sing-up"),signUpButton=document.getElementById("signUpButton"),signUpInputs=document.getElementById("signUpInputs"),signUpSocialButtons=document.getElementById("signUpSocialButtons"),signUpBackButton=document.getElementById("signUpBackButton"),errorMessage=document.getElementById("error-message");errorMessage.style.display="none";var email=document.getElementById("email"),haveAccount=document.getElementById("have-account");haveAccount.innerHTML="Already have an account?";var signupRightContainer=document.getElementById("signup-right-container");signupRightContainer.classList.add("mt-36");var whoflexAggrement=document.getElementById("whoflex-aggrement");whoflexAggrement.classList.add("mb-0","mt-45");var signupImg=document.getElementById("signupImg"),signupModalContainer=document.getElementById("signupModalContainer"),whoflexLeftTextContainer=document.getElementById("whoflexLeftTextContainer");function windowOnClick(e){console.log("event",e.target),e.target===signInModal?toggleSignInModal():e.target===signUpModal&&toggleSignUpModal()}function toggleSignInModal(){signInModal.classList.toggle("whoflex-signin-show-modal")}function toggleSignUpModal(){signUpModal.classList.toggle("whoflex-signup-show-modal")}function hideEmailSignUpEmail(e){e.preventDefault(),signupImg.src="images/sign-up2.png",haveAccount.innerHTML="Don't have an account?",signUpInputs.classList.add("d-block"),signUpInputs.classList.remove("d-none"),signUpButton.classList.add("d-none"),signUpSocialButtons.classList.add("d-none"),signupRightContainer.classList.add("mt-0"),signupRightContainer.classList.remove("mt-36"),whoflexAggrement.classList.add("mb-17","mt-90"),whoflexAggrement.classList.remove("mb-0","mt-45"),signupModalContainer.style.height="679px",whoflexLeftTextContainer.style.bottom="192px",signUpTitle.classList.add("d-none")}function showEmailSignUpEmail(e){e.preventDefault(),signupImg.src="images/sign-up.png",haveAccount.innerHTML="Already have an account?",signUpInputs.classList.add("d-none"),signUpInputs.classList.remove("d-block"),signUpButton.classList.add("d-block"),signUpButton.classList.remove("d-none"),signUpSocialButtons.classList.add("d-block"),signUpSocialButtons.classList.remove("d-none"),signupRightContainer.classList.add("mt-36"),signupRightContainer.classList.remove("mt-0"),whoflexAggrement.classList.add("mb-0","mt-45"),whoflexAggrement.classList.remove("mb-17","mt-90"),signupModalContainer.style.height="642px",whoflexLeftTextContainer.style.bottom="158px",signUpTitle.classList.remove("d-none")}function checkEmailValidation(){if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value))return errorMessage.style.display="block",email.style.border="1px solid #ea4335",email.focus,!1;errorMessage.style.display="none",email.style.border="1px solid #dddddd"}signInTrigger.addEventListener("click",toggleSignInModal),signUpTrigger.addEventListener("click",toggleSignUpModal),signInCloseButton.addEventListener("click",toggleSignInModal),signUpCloseButton.addEventListener("click",toggleSignUpModal),window.addEventListener("click",windowOnClick),signUpButton.addEventListener("click",(function(e){return hideEmailSignUpEmail(e)})),signUpBackButton.addEventListener("click",(function(e){return showEmailSignUpEmail(e)}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJzaWduSW5Nb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNpZ25VcE1vZGFsIiwic2lnbkluVHJpZ2dlciIsInNpZ25VcFRyaWdnZXIiLCJzaWduSW5DbG9zZUJ1dHRvbiIsInNpZ25VcENsb3NlQnV0dG9uIiwic2lnblVwVGl0bGUiLCJzaWduVXBCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInNpZ25VcElucHV0cyIsInNpZ25VcFNvY2lhbEJ1dHRvbnMiLCJzaWduVXBCYWNrQnV0dG9uIiwiZXJyb3JNZXNzYWdlIiwic3R5bGUiLCJkaXNwbGF5IiwiZW1haWwiLCJoYXZlQWNjb3VudCIsImlubmVySFRNTCIsInNpZ251cFJpZ2h0Q29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwid2hvZmxleEFnZ3JlbWVudCIsInNpZ251cEltZyIsInNpZ251cE1vZGFsQ29udGFpbmVyIiwid2hvZmxleExlZnRUZXh0Q29udGFpbmVyIiwid2luZG93T25DbGljayIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInRvZ2dsZVNpZ25Jbk1vZGFsIiwidG9nZ2xlU2lnblVwTW9kYWwiLCJ0b2dnbGUiLCJoaWRlRW1haWxTaWduVXBFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNyYyIsInJlbW92ZSIsImhlaWdodCIsImJvdHRvbSIsInNob3dFbWFpbFNpZ25VcEVtYWlsIiwiY2hlY2tFbWFpbFZhbGlkYXRpb24iLCJ0ZXN0IiwidmFsdWUiLCJib3JkZXIiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBLGFBQUEsSUFBTUEsWUFBY0MsU0FBU0MsY0FBYyx5QkFDckNDLFlBQWNGLFNBQVNDLGNBQWMseUJBQ3JDRSxjQUFnQkgsU0FBU0MsY0FBYyxtQkFDdkNHLGNBQWdCSixTQUFTQyxjQUFjLG1CQUN2Q0ksa0JBQW9CTCxTQUFTQyxjQUFjLGdDQUMz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QUFpQixRQUFTckIsZUFDakNsQixhQUFhdUMsaUJBQWlCLFNBQVMsU0FBQ1osR0FBQyxPQUFLRCxxQkFBcUJDLEVBQUUsSUFDckV2QixpQkFBaUJtQyxpQkFBaUIsU0FBUyxTQUFDWixHQUFDLE9BQUtNLHFCQUFxQk4sRUFBRSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaWduSW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1zaWduaW4tbW9kYWxcIik7XG5jb25zdCBzaWduVXBNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1zaWdudXAtbW9kYWxcIik7XG5jb25zdCBzaWduSW5UcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduaW4tdHJpZ2dlclwiKTtcbmNvbnN0IHNpZ25VcFRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC10cmlnZ2VyXCIpO1xuY29uc3Qgc2lnbkluQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndob2ZsZXgtc2lnbmluLWNsb3NlLWJ1dHRvblwiKTtcbmNvbnN0IHNpZ25VcENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LXNpZ251cC1jbG9zZS1idXR0b25cIik7XG5jb25zdCBzaWduVXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1tb2RhbC10aXRsZS1zaW5nLXVwXCIpO1xuY29uc3Qgc2lnblVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBCdXR0b25cIik7XG5jb25zdCBzaWduVXBJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcElucHV0c1wiKTtcbmNvbnN0IHNpZ25VcFNvY2lhbEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25VcFNvY2lhbEJ1dHRvbnNcIik7XG5jb25zdCBzaWduVXBCYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBCYWNrQnV0dG9uXCIpO1xuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1tZXNzYWdlXCIpO1xuZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG5jb25zdCBoYXZlQWNjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXZlLWFjY291bnQnKTtcbmhhdmVBY2NvdW50LmlubmVySFRNTCA9ICdBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8nXG5jb25zdCBzaWdudXBSaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtcmlnaHQtY29udGFpbmVyJylcbnNpZ251cFJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtdC0zNlwiKVxuY29uc3Qgd2hvZmxleEFnZ3JlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aG9mbGV4LWFnZ3JlbWVudCcpXG53aG9mbGV4QWdncmVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYi0wXCIsIFwibXQtNDVcIilcbmNvbnN0IHNpZ251cEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXBJbWcnKVxuY29uc3Qgc2lnbnVwTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwTW9kYWxDb250YWluZXInKVxuY29uc3Qgd2hvZmxleExlZnRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dob2ZsZXhMZWZ0VGV4dENvbnRhaW5lcicpXG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudC50YXJnZXQpO1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHNpZ25Jbk1vZGFsKSB7XG4gICAgICAgIHRvZ2dsZVNpZ25Jbk1vZGFsKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IHNpZ25VcE1vZGFsKSB7XG4gICAgICAgIHRvZ2dsZVNpZ25VcE1vZGFsKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVTaWduSW5Nb2RhbCgpIHtcbiAgICBzaWduSW5Nb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwid2hvZmxleC1zaWduaW4tc2hvdy1tb2RhbFwiKTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZVNpZ25VcE1vZGFsKCkge1xuICAgIHNpZ25VcE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJ3aG9mbGV4LXNpZ251cC1zaG93LW1vZGFsXCIpO1xufVxuXG5cbmZ1bmN0aW9uIGhpZGVFbWFpbFNpZ25VcEVtYWlsKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzaWdudXBJbWcuc3JjID0gXCJpbWFnZXMvc2lnbi11cDIucG5nXCJcbiAgICBoYXZlQWNjb3VudC5pbm5lckhUTUwgPSAnRG9uXFwndCBoYXZlIGFuIGFjY291bnQ/J1xuICAgIHNpZ25VcElucHV0cy5jbGFzc0xpc3QuYWRkKFwiZC1ibG9ja1wiKVxuICAgIHNpZ25VcElucHV0cy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgc2lnblVwQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICBzaWduVXBTb2NpYWxCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICBzaWdudXBSaWdodENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibXQtMFwiKVxuICAgIHNpZ251cFJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtdC0zNlwiKVxuICAgIHdob2ZsZXhBZ2dyZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1iLTE3XCIsIFwibXQtOTBcIilcbiAgICB3aG9mbGV4QWdncmVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtYi0wXCIsIFwibXQtNDVcIiApXG4gICAgc2lnbnVwTW9kYWxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCI2NzlweFwiXG4gICAgd2hvZmxleExlZnRUZXh0Q29udGFpbmVyLnN0eWxlLmJvdHRvbSA9IFwiMTkycHhcIlxuICAgIHNpZ25VcFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbn1cblxuZnVuY3Rpb24gc2hvd0VtYWlsU2lnblVwRW1haWwoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNpZ251cEltZy5zcmMgPSBcImltYWdlcy9zaWduLXVwLnBuZ1wiXG4gICAgaGF2ZUFjY291bnQuaW5uZXJIVE1MID0gJ0FscmVhZHkgaGF2ZSBhbiBhY2NvdW50PydcbiAgICBzaWduVXBJbnB1dHMuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgIHNpZ25VcElucHV0cy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ibG9ja1wiKVxuICAgIHNpZ25VcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZC1ibG9ja1wiKVxuICAgIHNpZ25VcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgc2lnblVwU29jaWFsQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiZC1ibG9ja1wiKVxuICAgIHNpZ25VcFNvY2lhbEJ1dHRvbnMuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgIHNpZ251cFJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtdC0zNlwiKVxuICAgIHNpZ251cFJpZ2h0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtdC0wXCIpXG4gICAgd2hvZmxleEFnZ3JlbWVudC5jbGFzc0xpc3QuYWRkKFwibWItMFwiLCBcIm10LTQ1XCIpXG4gICAgd2hvZmxleEFnZ3JlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWItMTdcIiwgXCJtdC05MFwiKVxuICAgIHNpZ251cE1vZGFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiNjQycHhcIlxuICAgIHdob2ZsZXhMZWZ0VGV4dENvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjE1OHB4XCJcbiAgICBzaWduVXBUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG5cbn1cblxuc2lnbkluVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lnbkluTW9kYWwpO1xuc2lnblVwVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lnblVwTW9kYWwpO1xuc2lnbkluQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVNpZ25Jbk1vZGFsKTtcbnNpZ25VcENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTaWduVXBNb2RhbCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHdpbmRvd09uQ2xpY2spO1xuc2lnblVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGhpZGVFbWFpbFNpZ25VcEVtYWlsKGUpKVxuc2lnblVwQmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzaG93RW1haWxTaWduVXBFbWFpbChlKSlcblxuXG5mdW5jdGlvbiBjaGVja0VtYWlsVmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSAvXihbYS16QS1aMC05X1xcLlxcLV0pK1xcQCgoW2EtekEtWjAtOVxcLV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xuICAgIGlmICghZmlsdGVyLnRlc3QoZW1haWwudmFsdWUpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBlbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZWE0MzM1XCI7XG5cbiAgICAgICAgZW1haWwuZm9jdXM7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZGRkZGRkXCI7XG4gICAgfVxufVxuIl19

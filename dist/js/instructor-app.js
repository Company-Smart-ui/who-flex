"use strict";var instructorApp=document.querySelector(".instructor-app"),step1=document.querySelector(".wrap-step1"),step2=document.querySelector(".wrap-step2"),step3=document.querySelector(".wrap-step3"),point1=document.getElementById("point1"),point2=document.getElementById("point2"),point3=document.getElementById("point3"),firstName=document.getElementById("firstName"),lastName=document.getElementById("lastName"),instructorAppEmail=document.getElementById("email"),password=document.getElementById("password"),btnPrev=document.querySelector(".whoflex-button__prev"),btnNext=document.querySelector(".whoflex-button__next"),textArea=document.querySelectorAll(".whoflex-textarea");function handleClick(){var e=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;e.test(instructorAppEmail.value)&&firstName.value.length>0&&lastName.value.length>0&&password.value.length>=6&&activeStep2(),""===password.value&&(password.style.border="1px solid #ea4335",password.addEventListener("keyup",(function(){password.value.length>6&&(password.style.border="1px solid #ddd")})),password.focus()),e.test(instructorAppEmail.value)&&""!==instructorAppEmail.value||(instructorAppEmail.style.border="1px solid #ea4335",instructorAppEmail.focus()),""===lastName.value&&(lastName.style.border="1px solid #ea4335",lastName.addEventListener("keyup",(function(){lastName.value.length>0&&(lastName.style.border="1px solid #ddd")})),lastName.focus()),""===firstName.value&&(firstName.style.border="1px solid #ea4335",firstName.focus(),firstName.addEventListener("keyup",(function(){firstName.value.length>0&&(firstName.style.border="1px solid #ddd")})))}function btnNextStep3(){btnNext.setAttribute("type","submit")}function activeStep1(){btnNext.removeEventListener("click",activeStep2),btnNext.removeEventListener("click",activeStep3),notActiveStep2(),notActiveStep3(),instructorApp.classList.add("step1"),point1.classList.add("active"),step1.classList.add("active"),step1.classList.remove("d-none"),btnPrev.classList.add("d-none"),btnNext.addEventListener("click",handleClick)}function activeStep2(){btnNext.removeEventListener("click",btnNextStep3),btnNext.removeEventListener("click",handleClick),notActiveStep1(),notActiveStep3(),instructorApp.classList.add("step2"),point2.classList.add("active"),step2.classList.add("active"),step2.classList.remove("d-none"),btnPrev.classList.remove("d-none"),btnPrev.addEventListener("click",activeStep1),btnNext.innerHTML="Next",btnNext.setAttribute("type","button"),btnNext.addEventListener("click",activeStep3)}function activeStep3(){btnPrev.removeEventListener("click",activeStep1),notActiveStep1(),notActiveStep2(),instructorApp.classList.add("step3"),point3.classList.add("active"),step3.classList.add("active"),step3.classList.remove("d-none"),btnPrev.classList.remove("d-none"),btnPrev.addEventListener("click",activeStep2),btnNext.innerHTML="Submit",btnNext.addEventListener("click",btnNextStep3)}function notActiveStep1(){point1.classList.remove("active"),step1.classList.remove("active"),step1.classList.add("d-none"),instructorApp.classList.remove("step1")}function notActiveStep2(){point2.classList.remove("active"),step2.classList.remove("active"),step2.classList.add("d-none"),instructorApp.classList.remove("step2")}function notActiveStep3(){point3.classList.remove("active"),step3.classList.remove("active"),step3.classList.add("d-none"),instructorApp.classList.remove("step3")}function instApp(){step1&&step2&&step3&&(step1.classList.contains("active")&&(activeStep1(),notActiveStep2(),notActiveStep3()),step2.classList.contains("active")&&(activeStep2(),notActiveStep1(),notActiveStep3()),step3.classList.contains("active")?(activeStep3(),notActiveStep1(),notActiveStep2()):(step1.classList.add("active"),activeStep1()))}!function(){var e=document.querySelectorAll(".input-file"),t=document.getElementById("input-file"),n=document.querySelector(".paperClip"),s=document.querySelector(".iconPdf"),i=document.querySelector(".input-file__button-text"),o=document.querySelector(".input-file__button"),c=document.querySelector(".input-file__wrapper"),a=document.querySelector(".upload-bottom"),r=document.querySelector(".tryAgain"),d=document.querySelector(".comment_delete");d&&d.classList.add("d-none"),Array.prototype.forEach.call(e,(function(e){var l=e.nextElementSibling,p=l.querySelector(".input-file__button-text").innerText;function u(){l?(c.classList.add("upload"),n.classList.add("d-none"),s.classList.remove("d-none"),d.classList.remove("d-none"),a.classList.remove("d-none")):l.querySelector(".input-file__button-text").innerText=p}d.addEventListener("click",(function(){l.querySelector(".input-file__button-text").innerText=p,c.classList.remove("upload"),n.classList.remove("d-none"),s.classList.add("d-none"),a.classList.add("d-none"),d.classList.add("d-none"),e.value=""})),r.addEventListener("click",(function(){t.click()})),o.addEventListener("dragover",(function(e){e.preventDefault()})),o.addEventListener("drop",(function(e){e.preventDefault(),u(),i.innerText=e.dataTransfer.files[0].name})),e.addEventListener("change",(function(t){i.innerText=e.files[0].name})),e.addEventListener("change",u)}))}(),instApp(),function(){var e=document.querySelector(".notebook");textArea&&textArea.forEach((function(t){var n=t.closest(".wrap-textarea");t.addEventListener("focus",(function(){n.style.border="2px solid #E0C463"})),t.addEventListener("blur",(function(){n.style.border="1px solid #ddd"})),e&&(t.addEventListener("focus",(function(){n.style.outline="2px solid #E0C463"})),t.addEventListener("blur",(function(){n.style.outline="1px solid #000"})))}))}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0b3ItYXBwLmpzIl0sIm5hbWVzIjpbImluc3RydWN0b3JBcHAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGVwMSIsInN0ZXAyIiwic3RlcDMiLCJwb2ludDEiLCJnZXRFbGVtZW50QnlJZCIsInBvaW50MiIsInBvaW50MyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5zdHJ1Y3RvckFwcEVtYWlsIiwicGFzc3dvcmQiLCJidG5QcmV2IiwiYnRuTmV4dCIsInRleHRBcmVhIiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZUNsaWNrIiwiZmlsdGVyIiwidGVzdCIsInZhbHVlIiwibGVuZ3RoIiwiYWN0aXZlU3RlcDIiLCJzdHlsZSIsImJvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb2N1cyIsImJ0bk5leHRTdGVwMyIsInNldEF0dHJpYnV0ZSIsImFjdGl2ZVN0ZXAxIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZVN0ZXAzIiwibm90QWN0aXZlU3RlcDIiLCJub3RBY3RpdmVTdGVwMyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5vdEFjdGl2ZVN0ZXAxIiwiaW5uZXJIVE1MIiwiaW5zdEFwcCIsImNvbnRhaW5zIiwiaW5wdXRzIiwiaW5wdXRGaWxlSWQiLCJwYXBlckNsaXAiLCJpY29uUGRmIiwiYnV0dG9uVGV4dCIsImRyb3BBcmVhIiwiaW5wdXRGaWxlIiwidXBsb2FkQm90dG9tIiwidHJ5QWdhaW4iLCJjb21tZW50RGVsZXRlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImlucHV0IiwibGFiZWwiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsYWJlbFZhbCIsImlubmVyVGV4dCIsInVwbG9hZEZpbGUiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsImZpbGVzIiwibmFtZSIsIm5vdGVib29rIiwiaXRlbSIsIndyYXBQYSIsImNsb3Nlc3QiLCJvdXRsaW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUFBLElBQU1BLGNBQWdCQyxTQUFTQyxjQUFjLG1CQUN2Q0MsTUFBUUYsU0FBU0MsY0FBYyxlQUMvQkUsTUFBUUgsU0FBU0MsY0FBYyxlQUMvQkcsTUFBUUosU0FBU0MsY0FBYyxlQUMvQkksT0FBU0wsU0FBU00sZUFBZSxVQUNqQ0MsT0FBU1AsU0FBU00sZUFBZSxVQUNqQ0UsT0FBU1IsU0FBU00sZUFBZSxVQUNqQ0csVUFBWVQsU0FBU00sZUFBZSxhQUNwQ0ksU0FBV1YsU0FBU00sZUFBZSxZQUNuQ0ssbUJBQXFCWCxTQUFTTSxlQUFlLFNBQzdDTSxTQUFXWixTQUFTTSxlQUFlLFlBQ25DTyxRQUFVYixTQUFTQyxjQUFjLHlCQUNqQ2EsUUFBVWQsU0FBU0MsY0FBYyx5QkFDakNjLFNBQVdmLFNBQVNnQixpQkFBaUIscUJBRzNDLFNBQVNDLGNBQ0wsSUFBTUMsRUFBUyxrRUFDWEEsRUFBT0MsS0FBS1IsbUJBQW1CUyxRQUM1QlgsVUFBVVcsTUFBTUMsT0FBUyxHQUN6QlgsU0FBU1UsTUFBTUMsT0FBUyxHQUN4QlQsU0FBU1EsTUFBTUMsUUFBVSxHQUM1QkMsY0FFbUIsS0FBbkJWLFNBQVNRLFFBQ1RSLFNBQVNXLE1BQU1DLE9BQVMsb0JBQ3hCWixTQUFTYSxpQkFBaUIsU0FBUyxXQUM1QmIsU0FBU1EsTUFBTUMsT0FBUyxJQUN2QlQsU0FBU1csTUFBTUMsT0FBUyxpQkFDaEMsSUFDQVosU0FBU2MsU0FFVFIsRUFBT0MsS0FBS1IsbUJBQW1CUyxRQUF3QyxLQUE3QlQsbUJBQW1CUyxRQUM3RFQsbUJBQW1CWSxNQUFNQyxPQUFTLG9CQUNsQ2IsbUJBQW1CZSxTQUVELEtBQW5CaEIsU0FBU1UsUUFDUlYsU0FBU2EsTUFBTUMsT0FBUyxvQkFDeEJkLFNBQVNlLGlCQUFpQixTQUFTLFdBQzVCZixTQUFTVSxNQUFNQyxPQUFTLElBQ3ZCWCxTQUFTYSxNQUFNQyxPQUFTLGlCQUNoQyxJQUNBZCxTQUFTZ0IsU0FFVSxLQUFwQmpCLFVBQVVXLFFBQ1RYLFVBQVVjLE1BQU1DLE9BQVMsb0JBQ3pCZixVQUFVaUIsUUFDVmpCLFVBQVVnQixpQkFBaUIsU0FBUyxXQUM3QmhCLFVBQVVXLE1BQU1DLE9BQVMsSUFDeEJaLFVBQVVjLE1BQU1DLE9BQVMsaUJBQ2pDLElBR1IsQ0FDQSxTQUFTRyxlQUVEYixRQUFRYyxhQUFhLE9BQVEsU0FFckMsQ0FDQSxTQUFTQyxjQUNMZixRQUFRZ0Isb0JBQW9CLFFBQVNSLGFBQ3JDUixRQUFRZ0Isb0JBQW9CLFFBQVNDLGFBRXJDQyxpQkFDQUMsaUJBQ0FsQyxjQUFjbUMsVUFBVUMsSUFBSSxTQUM1QjlCLE9BQU82QixVQUFVQyxJQUFJLFVBQ3JCakMsTUFBTWdDLFVBQVVDLElBQUksVUFDcEJqQyxNQUFNZ0MsVUFBVUUsT0FBTyxVQUN2QnZCLFFBQVFxQixVQUFVQyxJQUFJLFVBQ3RCckIsUUFBUVcsaUJBQWlCLFFBQVNSLFlBQ3RDLENBRUEsU0FBU0ssY0FDTFIsUUFBUWdCLG9CQUFvQixRQUFTSCxjQUNyQ2IsUUFBUWdCLG9CQUFvQixRQUFTYixhQUVyQ29CLGlCQUNBSixpQkFDQWxDLGNBQWNtQyxVQUFVQyxJQUFJLFNBQzVCNUIsT0FBTzJCLFVBQVVDLElBQUksVUFDckJoQyxNQUFNK0IsVUFBVUMsSUFBSSxVQUNwQmhDLE1BQU0rQixVQUFVRSxPQUFPLFVBQ3ZCdkIsUUFBUXFCLFVBQVVFLE9BQU8sVUFDekJ2QixRQUFRWSxpQkFBaUIsUUFBU0ksYUFDbENmLFFBQVF3QixVQUFZLE9BQ3BCeEIsUUFBUWMsYUFBYSxPQUFRLFVBQzdCZCxRQUFRVyxpQkFBaUIsUUFBU00sWUFDdEMsQ0FFQSxTQUFTQSxjQUNMbEIsUUFBUWlCLG9CQUFvQixRQUFTRCxhQUNyQ1EsaUJBQ0FMLGlCQUNBakMsY0FBY21DLFVBQVVDLElBQUksU0FDNUIzQixPQUFPMEIsVUFBVUMsSUFBSSxVQUNyQi9CLE1BQU04QixVQUFVQyxJQUFJLFVBQ3BCL0IsTUFBTThCLFVBQVVFLE9BQU8sVUFDdkJ2QixRQUFRcUIsVUFBVUUsT0FBTyxVQUN6QnZCLFFBQVFZLGlCQUFpQixRQUFTSCxhQUNsQ1IsUUFBUXdCLFVBQVksU0FDcEJ4QixRQUFRVyxpQkFBaUIsUUFBU0UsYUFDdEMsQ0FDQSxTQUFTVSxpQkFDTGhDLE9BQU82QixVQUFVRSxPQUFPLFVBQ3hCbEMsTUFBTWdDLFVBQVVFLE9BQU8sVUFDdkJsQyxNQUFNZ0MsVUFBVUMsSUFBSSxVQUNwQnBDLGNBQWNtQyxVQUFVRSxPQUFPLFFBQ25DLENBQ0EsU0FBU0osaUJBQ0x6QixPQUFPMkIsVUFBVUUsT0FBTyxVQUN4QmpDLE1BQU0rQixVQUFVRSxPQUFPLFVBQ3ZCakMsTUFBTStCLFVBQVVDLElBQUksVUFDcEJwQyxjQUFjbUMsVUFBVUUsT0FBTyxRQUNuQyxDQUNBLFNBQVNILGlCQUNMekIsT0FBTzBCLFVBQVVFLE9BQU8sVUFDeEJoQyxNQUFNOEIsVUFBVUUsT0FBTyxVQUN2QmhDLE1BQU04QixVQUFVQyxJQUFJLFVBQ3BCcEMsY0FBY21DLFVBQVVFLE9BQU8sUUFDbkMsQ0FtRUEsU0FBU0csVUFDRnJDLE9BQVNDLE9BQVNDLFFBQ2RGLE1BQU1nQyxVQUFVTSxTQUFTLFlBQ3hCWCxjQUNBRyxpQkFDQUMsa0JBRUQ5QixNQUFNK0IsVUFBVU0sU0FBUyxZQUN4QmxCLGNBQ0FlLGlCQUNBSixrQkFFRDdCLE1BQU04QixVQUFVTSxTQUFTLFdBQ3hCVCxjQUNBTSxpQkFDQUwsbUJBR0E5QixNQUFNZ0MsVUFBVUMsSUFBSSxVQUNwQk4sZUFHWixFQXRGQyxXQUNHLElBQU1ZLEVBQVN6QyxTQUFTZ0IsaUJBQWlCLGVBQ25DMEIsRUFBYzFDLFNBQVNNLGVBQWUsY0FDdENxQyxFQUFZM0MsU0FBU0MsY0FBYyxjQUNuQzJDLEVBQVU1QyxTQUFTQyxjQUFjLFlBQ2pDNEMsRUFBYTdDLFNBQVNDLGNBQWMsNEJBQ3BDNkMsRUFBVzlDLFNBQVNDLGNBQWMsdUJBQ2xDOEMsRUFBWS9DLFNBQVNDLGNBQWMsd0JBQ25DK0MsRUFBZWhELFNBQVNDLGNBQWMsa0JBQ3RDZ0QsRUFBV2pELFNBQVNDLGNBQWMsYUFDbENpRCxFQUFnQmxELFNBQVNDLGNBQWMsbUJBQzFDaUQsR0FDQ0EsRUFBY2hCLFVBQVVDLElBQUksVUFJaENnQixNQUFNQyxVQUFVQyxRQUFRQyxLQUFLYixHQUFRLFNBQVVjLEdBQzNDLElBQU1DLEVBQVFELEVBQU1FLG1CQUNoQkMsRUFBV0YsRUFBTXZELGNBQWMsNEJBQTRCMEQsVUFnQi9ELFNBQVNDLElBQ0RKLEdBQ0FULEVBQVViLFVBQVVDLElBQUksVUFDeEJRLEVBQVVULFVBQVVDLElBQUksVUFDeEJTLEVBQVFWLFVBQVVFLE9BQU8sVUFDekJjLEVBQWNoQixVQUFVRSxPQUFPLFVBQy9CWSxFQUFhZCxVQUFVRSxPQUFPLFdBRzlCb0IsRUFBTXZELGNBQWMsNEJBQTRCMEQsVUFBWUQsQ0FDcEUsQ0FYQVIsRUFBY3pCLGlCQUFpQixTQVgvQixXQUNJK0IsRUFBTXZELGNBQWMsNEJBQTRCMEQsVUFBWUQsRUFDNURYLEVBQVViLFVBQVVFLE9BQU8sVUFFM0JPLEVBQVVULFVBQVVFLE9BQU8sVUFDM0JRLEVBQVFWLFVBQVVDLElBQUksVUFDdEJhLEVBQWFkLFVBQVVDLElBQUksVUFDM0JlLEVBQWNoQixVQUFVQyxJQUFJLFVBQzVCb0IsRUFBTW5DLE1BQVEsRUFDbEIsSUFjQTZCLEVBQVN4QixpQkFBaUIsU0FBUyxXQUMvQmlCLEVBQVltQixPQUNoQixJQUVBZixFQUFTckIsaUJBQWlCLFlBQVksU0FBQ3FDLEdBQ25DQSxFQUFFQyxnQkFDTixJQUNBakIsRUFBU3JCLGlCQUFpQixRQUFRLFNBQUNxQyxHQUMvQkEsRUFBRUMsaUJBQ0ZILElBQ0FmLEVBQVdjLFVBQVlHLEVBQUVFLGFBQWFDLE1BQU0sR0FBR0MsSUFDbkQsSUFDQVgsRUFBTTlCLGlCQUFpQixVQUFVLFNBQVVxQyxHQUN2Q2pCLEVBQVdjLFVBQVlKLEVBQU1VLE1BQU0sR0FBR0MsSUFDMUMsSUFDQVgsRUFBTTlCLGlCQUFpQixTQUFVbUMsRUFDckMsR0FDSCxDQTlEQSxHQXVGRHJCLFVBRUMsV0FDRyxJQUFNNEIsRUFBV25FLFNBQVNDLGNBQWMsYUFDckNjLFVBQ0NBLFNBQVNzQyxTQUFRLFNBQUFlLEdBQ2IsSUFBTUMsRUFBU0QsRUFBS0UsUUFBUSxrQkFDNUJGLEVBQUszQyxpQkFBaUIsU0FBUyxXQUMzQjRDLEVBQU85QyxNQUFNQyxPQUFTLG1CQUMxQixJQUNBNEMsRUFBSzNDLGlCQUFpQixRQUFRLFdBQzFCNEMsRUFBTzlDLE1BQU1DLE9BQVMsZ0JBQzFCLElBQ0cyQyxJQUNDQyxFQUFLM0MsaUJBQWlCLFNBQVMsV0FDM0I0QyxFQUFPOUMsTUFBTWdELFFBQVUsbUJBQzNCLElBQ0FILEVBQUszQyxpQkFBaUIsUUFBUSxXQUMxQjRDLEVBQU85QyxNQUFNZ0QsUUFBVSxnQkFDM0IsSUFFUixHQUVQLENBckJBIiwiZmlsZSI6Imluc3RydWN0b3ItYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5zdHJ1Y3RvckFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rvci1hcHBcIik7XG5jb25zdCBzdGVwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcC1zdGVwMVwiKTtcbmNvbnN0IHN0ZXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwLXN0ZXAyXCIpO1xuY29uc3Qgc3RlcDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXAtc3RlcDNcIik7XG5jb25zdCBwb2ludDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnQxJyk7XG5jb25zdCBwb2ludDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnQyJyk7XG5jb25zdCBwb2ludDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnQzJyk7XG5jb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROYW1lJyk7XG5jb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0TmFtZScpO1xuY29uc3QgaW5zdHJ1Y3RvckFwcEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xuY29uc3QgYnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1idXR0b25fX3ByZXZcIik7XG5jb25zdCBidG5OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LWJ1dHRvbl9fbmV4dFwiKTtcbmNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53aG9mbGV4LXRleHRhcmVhXCIpO1xuXG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnN0IGZpbHRlciA9IC9eKFthLXpBLVowLTlfXFwuXFwtXSkrXFxAKChbYS16QS1aMC05XFwtXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XG4gICAgaWYgKGZpbHRlci50ZXN0KGluc3RydWN0b3JBcHBFbWFpbC52YWx1ZSlcbiAgICAgICAgJiYgZmlyc3ROYW1lLnZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgJiYgbGFzdE5hbWUudmFsdWUubGVuZ3RoID4gMFxuICAgICAgICAmJiBwYXNzd29yZC52YWx1ZS5sZW5ndGggPj0gNikge1xuICAgICAgICBhY3RpdmVTdGVwMigpO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgcGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xuICAgICAgICBwYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKHBhc3N3b3JkLnZhbHVlLmxlbmd0aCA+IDYpXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2RkZFwiO1xuICAgICAgICB9KVxuICAgICAgICBwYXNzd29yZC5mb2N1cygpO1xuICAgIH1cbiAgICBpZighZmlsdGVyLnRlc3QoaW5zdHJ1Y3RvckFwcEVtYWlsLnZhbHVlKSB8fCAoaW5zdHJ1Y3RvckFwcEVtYWlsLnZhbHVlID09PSBcIlwiKSkge1xuICAgICAgICBpbnN0cnVjdG9yQXBwRW1haWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xuICAgICAgICBpbnN0cnVjdG9yQXBwRW1haWwuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYobGFzdE5hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgbGFzdE5hbWUuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNDMzNVwiO1xuICAgICAgICBsYXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKGxhc3ROYW1lLnZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgbGFzdE5hbWUuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2RkZFwiO1xuICAgICAgICB9KVxuICAgICAgICBsYXN0TmFtZS5mb2N1cygpO1xuICAgIH1cbiAgICBpZihmaXJzdE5hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZmlyc3ROYW1lLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlYTQzMzVcIjtcbiAgICAgICAgZmlyc3ROYW1lLmZvY3VzKCk7XG4gICAgICAgIGZpcnN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKGZpcnN0TmFtZS52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZGRkXCI7XG4gICAgICAgIH0pXG5cbiAgICB9XG59O1xuZnVuY3Rpb24gYnRuTmV4dFN0ZXAzKCl7XG4gICAgLy8gaWYoYWdyZWVtZW50LmNoZWNrZWQpe1xuICAgICAgICBidG5OZXh0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAvLyB9XG59XG5mdW5jdGlvbiBhY3RpdmVTdGVwMSgpe1xuICAgIGJ0bk5leHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmVTdGVwMik7XG4gICAgYnRuTmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2ZVN0ZXAzKTtcblxuICAgIG5vdEFjdGl2ZVN0ZXAyKCk7XG4gICAgbm90QWN0aXZlU3RlcDMoKTtcbiAgICBpbnN0cnVjdG9yQXBwLmNsYXNzTGlzdC5hZGQoJ3N0ZXAxJyk7XG4gICAgcG9pbnQxLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHN0ZXAxLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHN0ZXAxLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIGJ0blByZXYuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKVxufVxuXG5mdW5jdGlvbiBhY3RpdmVTdGVwMigpe1xuICAgIGJ0bk5leHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidG5OZXh0U3RlcDMpO1xuICAgIGJ0bk5leHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG5cbiAgICBub3RBY3RpdmVTdGVwMSgpO1xuICAgIG5vdEFjdGl2ZVN0ZXAzKCk7XG4gICAgaW5zdHJ1Y3RvckFwcC5jbGFzc0xpc3QuYWRkKCdzdGVwMicpO1xuICAgIHBvaW50Mi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzdGVwMi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzdGVwMi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBidG5QcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIGJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmVTdGVwMSk7XG4gICAgYnRuTmV4dC5pbm5lckhUTUwgPSAnTmV4dCc7XG4gICAgYnRuTmV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2ZVN0ZXAzKVxufVxuXG5mdW5jdGlvbiBhY3RpdmVTdGVwMygpe1xuICAgIGJ0blByZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmVTdGVwMSk7XG4gICAgbm90QWN0aXZlU3RlcDEoKTtcbiAgICBub3RBY3RpdmVTdGVwMigpO1xuICAgIGluc3RydWN0b3JBcHAuY2xhc3NMaXN0LmFkZCgnc3RlcDMnKTtcbiAgICBwb2ludDMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc3RlcDMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc3RlcDMuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgYnRuUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBidG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZlU3RlcDIpXG4gICAgYnRuTmV4dC5pbm5lckhUTUwgPSAnU3VibWl0JztcbiAgICBidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuTmV4dFN0ZXAzKTtcbn1cbmZ1bmN0aW9uIG5vdEFjdGl2ZVN0ZXAxKCl7XG4gICAgcG9pbnQxLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHN0ZXAxLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHN0ZXAxLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIGluc3RydWN0b3JBcHAuY2xhc3NMaXN0LnJlbW92ZSgnc3RlcDEnKTtcbn1cbmZ1bmN0aW9uIG5vdEFjdGl2ZVN0ZXAyKCl7XG4gICAgcG9pbnQyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHN0ZXAyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHN0ZXAyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIGluc3RydWN0b3JBcHAuY2xhc3NMaXN0LnJlbW92ZSgnc3RlcDInKTtcbn1cbmZ1bmN0aW9uIG5vdEFjdGl2ZVN0ZXAzKCl7XG4gICAgcG9pbnQzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHN0ZXAzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHN0ZXAzLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIGluc3RydWN0b3JBcHAuY2xhc3NMaXN0LnJlbW92ZSgnc3RlcDMnKTtcbn1cblxuXG4oZnVuY3Rpb24gKCl7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWZpbGUnKTtcbiAgICBjb25zdCBpbnB1dEZpbGVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1maWxlJyk7XG4gICAgY29uc3QgcGFwZXJDbGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcGVyQ2xpcCcpO1xuICAgIGNvbnN0IGljb25QZGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvblBkZicpO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZV9fYnV0dG9uLXRleHQnKTtcbiAgICBjb25zdCBkcm9wQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlX19idXR0b24nKTtcbiAgICBjb25zdCBpbnB1dEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZV9fd3JhcHBlcicpO1xuICAgIGNvbnN0IHVwbG9hZEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGxvYWQtYm90dG9tJyk7XG4gICAgY29uc3QgdHJ5QWdhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJ5QWdhaW4nKTtcbiAgICBjb25zdCBjb21tZW50RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRfZGVsZXRlJyk7XG4gICAgaWYoY29tbWVudERlbGV0ZSl7XG4gICAgICAgIGNvbW1lbnREZWxldGUuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgfVxuXG5cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGlucHV0cywgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgICAgbGFiZWxWYWwgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZV9fYnV0dG9uLXRleHQnKS5pbm5lclRleHQ7XG5cblxuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFySW5wdXQoKXtcbiAgICAgICAgICAgIGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWxlX19idXR0b24tdGV4dCcpLmlubmVyVGV4dCA9IGxhYmVsVmFsO1xuICAgICAgICAgICAgaW5wdXRGaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3VwbG9hZCcpO1xuXG4gICAgICAgICAgICBwYXBlckNsaXAuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICBpY29uUGRmLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgdXBsb2FkQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgY29tbWVudERlbGV0ZS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb21tZW50RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJJbnB1dCk7XG4gICAgICAgIGZ1bmN0aW9uIHVwbG9hZEZpbGUoKXtcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGlucHV0RmlsZS5jbGFzc0xpc3QuYWRkKCd1cGxvYWQnKTtcbiAgICAgICAgICAgICAgICBwYXBlckNsaXAuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgaWNvblBkZi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICBjb21tZW50RGVsZXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgIHVwbG9hZEJvdHRvbS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBsYWJlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZV9fYnV0dG9uLXRleHQnKS5pbm5lclRleHQgPSBsYWJlbFZhbDtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgIGlucHV0RmlsZUlkLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyb3BBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB1cGxvYWRGaWxlKCk7XG4gICAgICAgICAgICBidXR0b25UZXh0LmlubmVyVGV4dCA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdLm5hbWU7XG4gICAgICAgIH0pXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0LmlubmVyVGV4dCA9IGlucHV0LmZpbGVzWzBdLm5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGxvYWRGaWxlKTtcbiAgICB9KTtcbn0oKSk7XG5cbmZ1bmN0aW9uIGluc3RBcHAgKCl7XG4gICAgaWYoc3RlcDEgJiYgc3RlcDIgJiYgc3RlcDMpe1xuICAgICAgICBpZihzdGVwMS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgIGFjdGl2ZVN0ZXAxKCk7XG4gICAgICAgICAgICBub3RBY3RpdmVTdGVwMigpO1xuICAgICAgICAgICAgbm90QWN0aXZlU3RlcDMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZihzdGVwMi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgIGFjdGl2ZVN0ZXAyKCk7XG4gICAgICAgICAgICBub3RBY3RpdmVTdGVwMSgpO1xuICAgICAgICAgICAgbm90QWN0aXZlU3RlcDMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZihzdGVwMy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgIGFjdGl2ZVN0ZXAzKCk7XG4gICAgICAgICAgICBub3RBY3RpdmVTdGVwMSgpO1xuICAgICAgICAgICAgbm90QWN0aXZlU3RlcDIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0ZXAxLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgYWN0aXZlU3RlcDEoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5pbnN0QXBwKCk7XG5cbihmdW5jdGlvbigpe1xuICAgIGNvbnN0IG5vdGVib29rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVib29rJyk7XG4gICAgaWYodGV4dEFyZWEpe1xuICAgICAgICB0ZXh0QXJlYS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcFBhID0gaXRlbS5jbG9zZXN0KCcud3JhcC10ZXh0YXJlYScpO1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgIHdyYXBQYS5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjRTBDNDYzXCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCl7XG4gICAgICAgICAgICAgICAgd3JhcFBhLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNkZGRcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZihub3RlYm9vayl7XG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICB3cmFwUGEuc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkICNFMEM0NjNcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICB3cmFwUGEuc3R5bGUub3V0bGluZSA9IFwiMXB4IHNvbGlkICMwMDBcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0oKSk7XG4iXX0=

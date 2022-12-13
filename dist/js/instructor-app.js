"use strict";var step1=document.querySelector(".step-1"),step2=document.querySelector(".step-2"),step3=document.querySelector(".step-3"),point1=document.getElementById("point1"),point2=document.getElementById("point2"),point3=document.getElementById("point3"),firstName=document.getElementById("firstName"),lastName=document.getElementById("lastName"),instructorAppEmail=document.getElementById("email"),password=document.getElementById("password"),btnPrev=document.querySelector(".whoflex-button__prev"),btnNext=document.querySelector(".whoflex-button__next");function handleClick(){/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(instructorAppEmail.value)&&firstName.value.length>1&&lastName.value.length>1&&password.value.length>=6&&activeStep2()}function btnNextStep3(){btnNext.setAttribute("type","submit")}function activeStep1(){btnNext.removeEventListener("click",activeStep2),btnNext.removeEventListener("click",activeStep3),notActiveStep2(),notActiveStep3(),point1.classList.add("active"),step1.classList.add("active"),step1.classList.remove("d-none"),btnPrev.classList.add("d-none"),btnNext.addEventListener("click",handleClick)}function activeStep2(){btnNext.removeEventListener("click",btnNextStep3),btnNext.removeEventListener("click",handleClick),notActiveStep1(),notActiveStep3(),point2.classList.add("active"),step2.classList.add("active"),step2.classList.remove("d-none"),btnPrev.classList.remove("d-none"),btnPrev.addEventListener("click",activeStep1),btnNext.innerHTML="Next",btnNext.setAttribute("type","button"),btnNext.addEventListener("click",activeStep3)}function activeStep3(){btnPrev.removeEventListener("click",activeStep1),notActiveStep1(),notActiveStep2(),point3.classList.add("active"),step3.classList.add("active"),step3.classList.remove("d-none"),btnPrev.classList.remove("d-none"),btnPrev.addEventListener("click",activeStep2),btnNext.innerHTML="Submit",btnNext.addEventListener("click",btnNextStep3)}function notActiveStep1(){point1.classList.remove("active"),step1.classList.remove("active"),step1.classList.add("d-none")}function notActiveStep2(){point2.classList.remove("active"),step2.classList.remove("active"),step2.classList.add("d-none")}function notActiveStep3(){point3.classList.remove("active"),step3.classList.remove("active"),step3.classList.add("d-none")}function instApp(){step1&&step2&&step3&&(step1.classList.contains("active")&&(activeStep1(),notActiveStep2(),notActiveStep3()),step2.classList.contains("active")&&(activeStep2(),notActiveStep1(),notActiveStep3()),step3.classList.contains("active")?(activeStep3(),notActiveStep1(),notActiveStep2()):(step1.classList.add("active"),activeStep1()))}!function(){var t=document.querySelectorAll(".input-file");Array.prototype.forEach.call(t,(function(t){var e=t.nextElementSibling,n=e.querySelector(".input-file__button-text").innerText;t.addEventListener("change",(function(i){e.querySelector(".input-file__button-text").innerText=e?t.files[0].name:n}))}))}(),instApp();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0b3ItYXBwLmpzIl0sIm5hbWVzIjpbInN0ZXAxIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RlcDIiLCJzdGVwMyIsInBvaW50MSIsImdldEVsZW1lbnRCeUlkIiwicG9pbnQyIiwicG9pbnQzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpbnN0cnVjdG9yQXBwRW1haWwiLCJwYXNzd29yZCIsImJ0blByZXYiLCJidG5OZXh0IiwiaGFuZGxlQ2xpY2siLCJ0ZXN0IiwidmFsdWUiLCJsZW5ndGgiLCJhY3RpdmVTdGVwMiIsImJ0bk5leHRTdGVwMyIsInNldEF0dHJpYnV0ZSIsImFjdGl2ZVN0ZXAxIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZVN0ZXAzIiwibm90QWN0aXZlU3RlcDIiLCJub3RBY3RpdmVTdGVwMyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJub3RBY3RpdmVTdGVwMSIsImlubmVySFRNTCIsImluc3RBcHAiLCJjb250YWlucyIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwiaW5wdXQiLCJsYWJlbCIsIm5leHRFbGVtZW50U2libGluZyIsImxhYmVsVmFsIiwiaW5uZXJUZXh0IiwiZSIsImZpbGVzIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQSxJQUFNQSxNQUFRQyxTQUFTQyxjQUFjLFdBQy9CQyxNQUFRRixTQUFTQyxjQUFjLFdBQy9CRSxNQUFRSCxTQUFTQyxjQUFjLFdBQy9CRyxPQUFTSixTQUFTSyxlQUFlLFVBQ2pDQyxPQUFTTixTQUFTSyxlQUFlLFVBQ2pDRSxPQUFTUCxTQUFTSyxlQUFlLFVBQ2pDRyxVQUFZUixTQUFTSyxlQUFlLGFBQ3BDSSxTQUFXVCxTQUFTSyxlQUFlLFlBQ25DSyxtQkFBcUJWLFNBQVNLLGVBQWUsU0FDN0NNLFNBQVdYLFNBQVNLLGVBQWUsWUFDbkNPLFFBQVVaLFNBQVNDLGNBQWMseUJBQ2pDWSxRQUFVYixTQUFTQyxjQUFjLHlCQUd2QyxTQUFTYSxjQUNVLGtFQUNKQyxLQUFLTCxtQkFBbUJNLFFBQzVCUixVQUFVUSxNQUFNQyxPQUFTLEdBQ3pCUixTQUFTTyxNQUFNQyxPQUFTLEdBQ3hCTixTQUFTSyxNQUFNQyxRQUFVLEdBQzVCQyxhQUVSLENBQ0EsU0FBU0MsZUFDTE4sUUFBUU8sYUFBYSxPQUFRLFNBQ2pDLENBQ0EsU0FBU0MsY0FDTFIsUUFBUVMsb0JBQW9CLFFBQVNKLGFBQ3JDTCxRQUFRUyxvQkFBb0IsUUFBU0MsYUFFckNDLGlCQUNBQyxpQkFDQXJCLE9BQU9zQixVQUFVQyxJQUFJLFVBQ3JCNUIsTUFBTTJCLFVBQVVDLElBQUksVUFDcEI1QixNQUFNMkIsVUFBVUUsT0FBTyxVQUN2QmhCLFFBQVFjLFVBQVVDLElBQUksVUFDdEJkLFFBQVFnQixpQkFBaUIsUUFBU2YsWUFDdEMsQ0FFQSxTQUFTSSxjQUNMTCxRQUFRUyxvQkFBb0IsUUFBU0gsY0FDckNOLFFBQVFTLG9CQUFvQixRQUFTUixhQUVyQ2dCLGlCQUNBTCxpQkFDQW5CLE9BQU9vQixVQUFVQyxJQUFJLFVBQ3JCekIsTUFBTXdCLFVBQVVDLElBQUksVUFDcEJ6QixNQUFNd0IsVUFBVUUsT0FBTyxVQUN2QmhCLFFBQVFjLFVBQVVFLE9BQU8sVUFDekJoQixRQUFRaUIsaUJBQWlCLFFBQVNSLGFBQ2xDUixRQUFRa0IsVUFBWSxPQUNwQmxCLFFBQVFPLGFBQWEsT0FBUSxVQUM3QlAsUUFBUWdCLGlCQUFpQixRQUFTTixZQUN0QyxDQUVBLFNBQVNBLGNBQ0xYLFFBQVFVLG9CQUFvQixRQUFTRCxhQUNyQ1MsaUJBQ0FOLGlCQUNBakIsT0FBT21CLFVBQVVDLElBQUksVUFDckJ4QixNQUFNdUIsVUFBVUMsSUFBSSxVQUNwQnhCLE1BQU11QixVQUFVRSxPQUFPLFVBQ3ZCaEIsUUFBUWMsVUFBVUUsT0FBTyxVQUN6QmhCLFFBQVFpQixpQkFBaUIsUUFBU1gsYUFDbENMLFFBQVFrQixVQUFZLFNBQ3BCbEIsUUFBUWdCLGlCQUFpQixRQUFTVixhQUN0QyxDQUNBLFNBQVNXLGlCQUNMMUIsT0FBT3NCLFVBQVVFLE9BQU8sVUFDeEI3QixNQUFNMkIsVUFBVUUsT0FBTyxVQUN2QjdCLE1BQU0yQixVQUFVQyxJQUFJLFNBQ3hCLENBQ0EsU0FBU0gsaUJBQ0xsQixPQUFPb0IsVUFBVUUsT0FBTyxVQUN4QjFCLE1BQU13QixVQUFVRSxPQUFPLFVBQ3ZCMUIsTUFBTXdCLFVBQVVDLElBQUksU0FDeEIsQ0FDQSxTQUFTRixpQkFDTGxCLE9BQU9tQixVQUFVRSxPQUFPLFVBQ3hCekIsTUFBTXVCLFVBQVVFLE9BQU8sVUFDdkJ6QixNQUFNdUIsVUFBVUMsSUFBSSxTQUN4QixDQXlCQSxTQUFTSyxVQUNGakMsT0FBU0csT0FBU0MsUUFDZEosTUFBTTJCLFVBQVVPLFNBQVMsWUFDeEJaLGNBQ0FHLGlCQUNBQyxrQkFFRHZCLE1BQU13QixVQUFVTyxTQUFTLFlBQ3hCZixjQUNBWSxpQkFDQUwsa0JBRUR0QixNQUFNdUIsVUFBVU8sU0FBUyxXQUN4QlYsY0FDQU8saUJBQ0FOLG1CQUdBekIsTUFBTTJCLFVBQVVDLElBQUksVUFDcEJOLGVBR1osRUExQ0MsV0FDRyxJQUFJYSxFQUFTbEMsU0FBU21DLGlCQUFpQixlQUN2Q0MsTUFBTUMsVUFBVUMsUUFBUUMsS0FBS0wsR0FBUSxTQUFVTSxHQUMzQyxJQUFJQyxFQUFRRCxFQUFNRSxtQkFDZEMsRUFBV0YsRUFBTXhDLGNBQWMsNEJBQTRCMkMsVUFFL0RKLEVBQU1YLGlCQUFpQixVQUFVLFNBQVVnQixHQU9uQ0osRUFBTXhDLGNBQWMsNEJBQTRCMkMsVUFEaERILEVBQzRERCxFQUFNTSxNQUFNLEdBQUdDLEtBRWZKLENBQ3BFLEdBQ0osR0FDSCxDQWxCQSxHQTJDRFgiLCJmaWxlIjoiaW5zdHJ1Y3Rvci1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdGVwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RlcC0xXCIpO1xuY29uc3Qgc3RlcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0ZXAtMlwiKTtcbmNvbnN0IHN0ZXAzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGVwLTNcIik7XG5jb25zdCBwb2ludDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnQxJyk7XG5jb25zdCBwb2ludDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnQyJyk7XG5jb25zdCBwb2ludDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnQzJyk7XG5jb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROYW1lJyk7XG5jb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0TmFtZScpO1xuY29uc3QgaW5zdHJ1Y3RvckFwcEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xuY29uc3QgYnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hvZmxleC1idXR0b25fX3ByZXZcIik7XG5jb25zdCBidG5OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aG9mbGV4LWJ1dHRvbl9fbmV4dFwiKTtcblxuXG5mdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSAvXihbYS16QS1aMC05X1xcLlxcLV0pK1xcQCgoW2EtekEtWjAtOVxcLV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xuICAgIGlmIChmaWx0ZXIudGVzdChpbnN0cnVjdG9yQXBwRW1haWwudmFsdWUpXG4gICAgICAgICYmIGZpcnN0TmFtZS52YWx1ZS5sZW5ndGggPiAxXG4gICAgICAgICYmIGxhc3ROYW1lLnZhbHVlLmxlbmd0aCA+IDFcbiAgICAgICAgJiYgcGFzc3dvcmQudmFsdWUubGVuZ3RoID49IDYpIHtcbiAgICAgICAgYWN0aXZlU3RlcDIoKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gYnRuTmV4dFN0ZXAzKCl7XG4gICAgYnRuTmV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG59XG5mdW5jdGlvbiBhY3RpdmVTdGVwMSgpe1xuICAgIGJ0bk5leHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmVTdGVwMik7XG4gICAgYnRuTmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2ZVN0ZXAzKTtcblxuICAgIG5vdEFjdGl2ZVN0ZXAyKCk7XG4gICAgbm90QWN0aXZlU3RlcDMoKTtcbiAgICBwb2ludDEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc3RlcDEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc3RlcDEuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgYnRuUHJldi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICBidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spXG59XG5cbmZ1bmN0aW9uIGFjdGl2ZVN0ZXAyKCl7XG4gICAgYnRuTmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bk5leHRTdGVwMyk7XG4gICAgYnRuTmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcblxuICAgIG5vdEFjdGl2ZVN0ZXAxKCk7XG4gICAgbm90QWN0aXZlU3RlcDMoKTtcbiAgICBwb2ludDIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc3RlcDIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc3RlcDIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgYnRuUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBidG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZlU3RlcDEpO1xuICAgIGJ0bk5leHQuaW5uZXJIVE1MID0gJ05leHQnO1xuICAgIGJ0bk5leHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmVTdGVwMylcbn1cblxuZnVuY3Rpb24gYWN0aXZlU3RlcDMoKXtcbiAgICBidG5QcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZlU3RlcDEpO1xuICAgIG5vdEFjdGl2ZVN0ZXAxKCk7XG4gICAgbm90QWN0aXZlU3RlcDIoKTtcbiAgICBwb2ludDMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc3RlcDMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc3RlcDMuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgYnRuUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBidG5QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZlU3RlcDIpXG4gICAgYnRuTmV4dC5pbm5lckhUTUwgPSAnU3VibWl0JztcbiAgICBidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnRuTmV4dFN0ZXAzKTtcbn1cbmZ1bmN0aW9uIG5vdEFjdGl2ZVN0ZXAxKCl7XG4gICAgcG9pbnQxLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHN0ZXAxLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHN0ZXAxLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xufVxuZnVuY3Rpb24gbm90QWN0aXZlU3RlcDIoKXtcbiAgICBwb2ludDIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgc3RlcDIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgc3RlcDIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG59XG5mdW5jdGlvbiBub3RBY3RpdmVTdGVwMygpe1xuICAgIHBvaW50My5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBzdGVwMy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBzdGVwMy5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbn1cblxuXG5cblxuKGZ1bmN0aW9uICgpe1xuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZmlsZScpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaW5wdXRzLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgICAgbGFiZWxWYWwgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZV9fYnV0dG9uLXRleHQnKS5pbm5lclRleHQ7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIGxldCBjb3VudEZpbGVzID0gJyc7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+PSAxKVxuICAgICAgICAgICAgLy8gICAgIGNvdW50RmlsZXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gaWYgKGNvdW50RmlsZXMpXG4gICAgICAgICAgICBpZiAobGFiZWwpXG4gICAgICAgICAgICAgICAgbGFiZWwucXVlcnlTZWxlY3RvcignLmlucHV0LWZpbGVfX2J1dHRvbi10ZXh0JykuaW5uZXJUZXh0ID0gaW5wdXQuZmlsZXNbMF0ubmFtZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBsYWJlbC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmlsZV9fYnV0dG9uLXRleHQnKS5pbm5lclRleHQgPSBsYWJlbFZhbDtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KCkpO1xuXG5mdW5jdGlvbiBpbnN0QXBwICgpe1xuICAgIGlmKHN0ZXAxICYmIHN0ZXAyICYmIHN0ZXAzKXtcbiAgICAgICAgaWYoc3RlcDEuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICBhY3RpdmVTdGVwMSgpO1xuICAgICAgICAgICAgbm90QWN0aXZlU3RlcDIoKTtcbiAgICAgICAgICAgIG5vdEFjdGl2ZVN0ZXAzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc3RlcDIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICBhY3RpdmVTdGVwMigpO1xuICAgICAgICAgICAgbm90QWN0aXZlU3RlcDEoKTtcbiAgICAgICAgICAgIG5vdEFjdGl2ZVN0ZXAzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc3RlcDMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICBhY3RpdmVTdGVwMygpO1xuICAgICAgICAgICAgbm90QWN0aXZlU3RlcDEoKTtcbiAgICAgICAgICAgIG5vdEFjdGl2ZVN0ZXAyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGVwMS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGFjdGl2ZVN0ZXAxKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuaW5zdEFwcCgpO1xuIl19

const createText = document.getElementById('createText');


function accordionInit(accordion) {
  window.addEventListener("load", function () {
    accordionF(accordion)
  });
}

function accordionF(accordion){
  let items = accordion.querySelectorAll(".accordion__item");

  if(createText){
    createText.addEventListener("keyup", function(e) {
      if (e.keyCode === 13) {
        items = accordion.querySelectorAll(".accordion__item");
      }
    });
  }
  items.forEach((item) => {
    const title = item.querySelector(".accordion__title-text");
    title.addEventListener("click", ( ) => {
      openedItem(item)
    });
  });


  const openedItem = (item) => {
    // const opened_item = accordion.querySelector(".is-open");
    toggle_item(item);
    // if (opened_item && opened_item !== item) {
    //   toggle_item(opened_item);
    // }
  };

  const toggle_item = (item) => {
    const body = item.querySelector(".accordion__body");

    if (item.classList.contains("is-open")) {
      body.removeAttribute("style");
      item.classList.remove("is-open");
    } else {
      body.style.overflow = 'hidden';
      body.style.transition = 'max-height 5s cubic-bezier(0.22, 0.61, 0.36, 1)';
      body.style.maxHeight = '2000px';
      item.classList.add("is-open");
    }
  };
}


if (document.querySelector(".accordion")) {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(accordion => {
    accordionInit(accordion);
  });
}



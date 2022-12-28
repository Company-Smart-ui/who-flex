const edit = document.querySelectorAll('.notebook__edit');
const deleteText = document.querySelectorAll('.notebook__delete');
const text = document.querySelectorAll('.accordion__notebook-text');
const arentInfo = document.querySelector('.arent-info');
const createText = document.getElementById('createText');


if(edit && text){
    for( let i = 0; i < edit.length; i++ ){
        let editMode = false;

        edit[i].addEventListener('click', function(){
            if( editMode ) {
                text[i].removeAttribute('contentEditable');
            } else {
                text[i].setAttribute('contentEditable', true);
                text[i].focus();
            }
            text[i].addEventListener('blur', function (){
                text[i].removeAttribute('contentEditable');
                editMode = false;
            })

            editMode = !editMode;
        });
    }
}
if(deleteText){
    deleteText.forEach(item => {
        item.addEventListener('click', function(){
           const parent = item.closest('.accordion__body-wrap');
           const mainParent = item.closest('.accordion__item');
            parent.remove();
            if(!mainParent.querySelector('.accordion__body-wrap')){
                mainParent.remove();
            }
            arentInfoF();
        })
    })
}



const accordion = arentInfo.querySelector('.accordion');
const arent = arentInfo.querySelector('.arent')


function arentInfoF(){
    arent.classList.add('d-none');
    if(!arentInfo.querySelector('.accordion__item')){
        arent.classList.remove('d-none');
    }
}arentInfoF();
function createBlock(){
    arent.classList.add('d-none');
    const addAccItem = document.createElement('div');
    addAccItem.className = 'accordion__item 1';
    addAccItem.innerHTML = "<h3 type=\"button\" class=\"accordion__title-text\">Introduction</h3>\n" +
        "<div class=\"accordion__body\">\n" +
        "                        <div class=\"accordion__body-wrap\">\n" +
        "                            <div class=\"accordion__svg\">\n" +
        "                                <button class=\"notebook__edit\">\n" +
        "                                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\">\n" +
        "                                        <path d=\"M18 4.7156C18.0015 4.47636 17.9075 4.24646 17.739 4.07668L13.923 0.260956C13.7532 0.0925203 13.5232 -0.00149016 13.284 1.78666e-05C13.0447 -0.00148873 12.8148 0.0925203 12.645 0.260956L10.0979 2.80766L0.260979 12.6441C0.0925284 12.8139 -0.00149029 13.0438 1.78682e-05 13.2831V17.0988C1.78682e-05 17.3374 0.0947886 17.5664 0.26354 17.7352C0.432291 17.9039 0.661291 17.9987 0.899973 17.9987H4.71603C4.97066 18.0125 5.21927 17.9178 5.40006 17.7377L15.183 7.90164L17.739 5.39982C17.8211 5.31259 17.8882 5.2121 17.937 5.10273C17.9457 5.03101 17.9457 4.95855 17.937 4.88683C17.9412 4.84495 17.9412 4.80276 17.937 4.76088L18 4.7156ZM4.34714 16.1986H1.80005V13.6517L10.7371 4.71541L13.2842 7.26227L4.34714 16.1986ZM14.5532 5.99337L12.0063 3.44667L13.2843 2.17784L15.8223 4.71568L14.5532 5.99337Z\" fill=\"#666666\"/>\n" +
        "                                    </svg>\n" +
        "                                </button>\n" +
        "                                <button class=\"notebook__delete\">\n" +
        "                                    <svg viewBox=\"248.724 10.377 16.176 17.999\" width=\"16.176\" height=\"17.999\">\n" +
        "                                       <path d=\"M 5.656 3.341 L 6.189 2.576 L 9.104 0.837 L 7.976 0.85 C 7.336 0.85 6.724 1.105 6.272 1.556 C 5.82 2.008 5.491 2.722 5.49 3.361 L 4.583 3.486 L 3.015 3.466 M 2.199 4.974 C 2.199 5.087 2.225 7.921 2.168 7.895 C 1.578 7.627 0.914 6.714 0.914 6.472 C 0.67 5.781 0.777 5.014 1.2 4.417 C 1.624 3.819 2.311 3.464 3.044 3.466 M 2.021 4.469 C 2.358 4.416 2.286 3.947 2.915 3.656 C 3.403 3.431 4.594 3.417 5.25 3.359 C 5.941 3.298 6.837 1.87 7.825 1.478 C 8.819 1.083 8.965 0.892 9.528 0.834 C 10.168 0.834 10.871 1.105 11.323 1.556 C 11.775 2.008 12.029 2.621 12.03 3.26 L 12.03 3.316 L 14.551 3.316 C 15.412 3.316 16.208 3.775 16.638 4.521 C 17.069 5.267 17.069 6.185 16.638 6.931 C 16.208 7.677 15.412 8.136 14.551 8.136 L 3.811 8.136 L 3.811 16.411 C 3.811 16.644 3.904 16.867 4.068 17.031 C 4.233 17.196 4.456 17.288 4.688 17.289 L 12.907 17.289 C 13.14 17.288 13.363 17.196 13.527 17.031 C 13.692 16.867 13.784 16.644 13.785 16.411 L 13.785 11.48 C 13.785 11.206 13.931 10.953 14.168 10.816 C 14.405 10.679 14.697 10.679 14.934 10.816 C 15.172 10.953 15.318 11.206 15.318 11.48 L 15.318 16.411 C 15.317 17.05 15.063 17.663 14.611 18.115 C 14.159 18.567 13.547 18.821 12.908 18.821 L 12.907 18.821 L 4.688 18.821 C 4.049 18.821 3.436 18.567 2.984 18.115 C 2.532 17.663 2.278 17.05 2.278 16.411 L 2.286 7.954 L 2.021 4.469 Z M 10.712 3.287 C 11.207 3.523 10.589 2.26 9.516 2.286 L 7.954 2.286 C 7.954 2.286 7.52 2.476 7.356 2.64 C 7.191 2.805 7.099 3.028 7.098 3.26 M 7.098 3.26 L 7.098 3.316 M 7.098 3.26 L 7.098 3.316 M 7.098 3.316 L 11.401 3.304 M 15.171 6.346 C 15.336 6.182 15.428 5.959 15.429 5.726 C 15.428 5.494 15.336 5.271 15.171 5.106 C 15.007 4.942 14.784 4.849 14.551 4.849 L 3.044 4.849 C 2.4 4.793 1.958 5.79 2.284 6.165 C 2.61 6.54 2.579 6.588 3.044 6.603 L 14.551 6.603 M 15.171 6.346 L 15.277 6.452 C 15.085 6.645 14.824 6.753 14.551 6.753 L 14.551 6.603 M 15.171 6.346 C 15.007 6.51 14.784 6.603 14.551 6.603 M 15.171 6.346 C 15.38 6.523 14.903 6.901 14.551 6.603 M 3.09 18.009 C 3.514 18.433 4.089 18.671 4.688 18.671 L 12.907 18.671 C 13.507 18.671 14.013 16.824 14.505 18.009 C 14.997 19.194 3.068 19.018 3.09 18.009 Z\" fill=\"#666666\" stroke=\"#666666\" stroke-width=\"0.3\" transform=\"matrix(1, 0, 0, 1, 247.939087, 9.542551)\"></path>\n" +
        "                                        <path d=\"M 10.059 14.609 C 10.297 14.746 10.589 14.746 10.826 14.609 C 11.063 14.472 11.209 14.219 11.209 13.945 L 11.209 10.657 C 11.209 10.384 11.09 9.964 10.602 9.916 C 9.98 9.913 9.856 10.447 9.819 10.65 C 9.814 10.677 9.8 13.931 9.802 13.996 C 9.81 14.229 10.041 14.556 10.059 14.609 Z\" fill=\"#666666\" transform=\"matrix(1, 0, 0, 1, 247.939087, 9.542551)\" style=\"paint-order: stroke;\" stroke-width=\"0.3\"></path>\n" +
        "                                        <path d=\"M13.7836 9.0139V9.83577C13.7836 10.1097 13.9297 10.3627 14.1668 10.4996C14.4039 10.6364 14.6961 10.6364 14.9332 10.4996C15.1704 10.3627 15.3165 10.1096 15.3165 9.83577V9.0139C15.3165 8.74002 15.1704 8.48699 14.9332 8.35011C14.6961 8.21325 14.4039 8.21324 14.1668 8.35011C13.9297 8.48699 13.7836 8.74002 13.7836 9.0139Z\" fill=\"#666666\" stroke=\"#666666\" stroke-width=\"0.3\" transform=\"matrix(1, 0, 0, 1, 247.939087, 9.542551)\"></path>\n" +
        "                                        <path d=\"M 254.573 24.176 C 254.811 24.313 255.103 24.313 255.34 24.176 C 255.577 24.039 255.723 23.786 255.723 23.512 L 255.723 20.224 C 255.723 19.951 255.604 19.531 255.116 19.483 C 254.494 19.48 254.37 20.014 254.333 20.217 C 254.328 20.244 254.314 23.498 254.316 23.563 C 254.324 23.796 254.555 24.123 254.573 24.176 Z\" fill=\"#666666\" style=\"paint-order: stroke;\" stroke-width=\"0.3\"></path>\n" +
        "                                    </svg>\n" +
        "                                </button>\n" +
        "                            </div>\n" +
        "                            <h4 class=\"accordion__audio\">\n" +
        "                                <svg width=\"16\" height=\"19\" viewBox=\"0 0 16 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "                                    <path d=\"M1 1V17.6667L14.5417 9.33333L1 1Z\" stroke=\"#D2B038\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "                                </svg>\n" +
        "                                Why the future of work matters (00:24)\n" +
        "                            </h4>\n" +
        "                            <p class=\"accordion__notebook-text\">" +
        createText.value + "</p></div></div>";
    accordion.append(addAccItem);
}

(function(){
    if(arentInfo && createText){
        arentInfoF()
        createText.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                if(createText.value.length > 1 && createText.value !== " "){
                    createText.select();
                    console.log(createText.value.length);
                    document.execCommand("copy");
                    createBlock(createText.value);
                    createText.blur();
                    createText.value = "";
                } else{
                    createText.blur();
                    createText.value = "";
                }
            }
        });
    }
}());






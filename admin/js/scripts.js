/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
//

/*PreLoader*/

(function ($) {
    /*PreLoader*/

    $(window).on('load',function () {
        $(".loader").fadeOut;
        $("#preloader").delay(1000).fadeOut("slow");
    });
    $("#preloader").removeClass('hide');

    $(document).ready(function() {
        $('table.display').DataTable();
    });

    var todoListItem = $('.todo-list');
    var todoListInput = $('.todo-list-input');
    $('.todo-list-add-btn').on("click", function(event) {
        event.preventDefault();

        var item = $(this).prevAll('.todo-list-input').val();

        if (item) {
            todoListItem.append("<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox' />" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i> </li>");
            todoListInput.val("");
        }

    });

    todoListItem.on('change', '.checkbox', function() {
        if ($(this).attr('checked')) {
            $(this).removeAttr('checked');
        } else {
            $(this).attr('checked', 'checked');
        }

        $(this).closest("li").toggleClass('completed');

    });

    todoListItem.on('click', '.remove', function() {
        $(this).parent().remove();
    });

})(jQuery);

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//Validate Web setting form
function checkWeb(){
    ho = document.getElementById("cc1");
    ho1= document.getElementById("errorcc1");
    ten= document.getElementById("cc2");
    ten1= document.getElementById("errorcc2");
    sdt= document.getElementById("cc3");
    sdt1= document.getElementById("errorcc3");
    email= document.getElementById("cc4");
    email1= document.getElementById("errorcc4");
    button= document.getElementById("bt1");
    selectbox = document.getElementById("inlineFormCustomSelect");
    select1 = document.getElementById('errorbox');
    tick = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-size="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M86,21.5c-35.55872,0 -64.5,28.9413 -64.5,64.5c0,35.55869 28.94128,64.5 64.5,64.5c35.55872,0 64.5,-28.94131 64.5,-64.5c0,-35.5587 -28.94128,-64.5 -64.5,-64.5zM86,32.25c29.749,0 53.75,24.00103 53.75,53.75c0,29.74897 -24.001,53.75 -53.75,53.75c-29.749,0 -53.75,-24.00103 -53.75,-53.75c0,-29.74897 24.001,-53.75 53.75,-53.75zM112.60205,64.5l-33.59375,33.59375l-17.46875,-17.46875l-7.5166,7.5271l24.98535,24.99585l41.12085,-41.12085z"></path></g></g></svg>';
    x = '<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"20\" height=\"20\" viewBox=\"0 0 172 172\" style=\" fill:#000000;\"><g transform=\"\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-size=\"none\" style=\"mix-blend-mode: normal\"><path d=\"M0,172v-172h172v172z\" fill=\"none\"></path><path d=\"\" fill=\"none\"></path><g fill=\"#e74c3c\"><path d=\"M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM60.29406,55.04l20.94234,30.76515l-21.19765,31.15485h8.75453l16.5214,-24.41594h0.68531l16.22578,24.41594h9.26515l-20.98265,-30.80547l21.45297,-31.11453h-8.79485l-16.56172,24.63094h-0.69203l-16.3064,-24.63094z\"></path></g></g></g></svg>';
    if(ho.value===''){
        ho1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        ho1.innerHTML = tick;
    if(ten.value===''){
        ten1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        ten1.innerHTML = tick;
    if(sdt.value===''){
        sdt1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        sdt1.innerHTML = tick;
    if(email.value===''){
        email1.innerHTML = x;
        button.disabled = true;
    }
    else
        email1.innerHTML = tick;
    if(selectbox.selectedIndex <= 0){
        select1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    select1.innerHTML = tick;
    button.disabled = false;
    return true;
}

function checkCont(){
    ho = document.getElementById("cc1");
    ho1= document.getElementById("errorcc1");
    ten= document.getElementById("cc2");
    ten1= document.getElementById("errorcc2");
    sdt= document.getElementById("cc3");
    sdt1= document.getElementById("errorcc3");
    email= document.getElementById("cc4");
    email1= document.getElementById("errorcc4");
    file = document.getElementById("formFile");
    file1 = document.getElementById("errorFile");
    files = document.getElementById("formFileMultiple");
    files1 = document.getElementById("errorFiles");
    h1 = document.getElementById('cc7');
    errorh1 = document.getElementById('errorh1');
    con1 = document.getElementById('cc71');
    errorcon1 = document.getElementById('errorcon1');
    h2 = document.getElementById('cc8');
    errorh2 = document.getElementById('errorh2');
    con2 = document.getElementById('cc81');
    errorcon2 = document.getElementById('errorcon2');
    h3 = document.getElementById('cc9');
    errorh3 = document.getElementById('errorh3');
    con3 = document.getElementById('cc91');
    errorcon3 = document.getElementById('errorcon3');
    h4 = document.getElementById('cc10');
    errorh4 = document.getElementById('errorh4');
    con4 = document.getElementById('cc101');
    errorcon4 = document.getElementById('errorcon4');
    button= document.getElementById("bt1");
    selectbox = document.getElementById("selectbox");
    select1 = document.getElementById('errorbox');
    tick = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-size="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M86,21.5c-35.55872,0 -64.5,28.9413 -64.5,64.5c0,35.55869 28.94128,64.5 64.5,64.5c35.55872,0 64.5,-28.94131 64.5,-64.5c0,-35.5587 -28.94128,-64.5 -64.5,-64.5zM86,32.25c29.749,0 53.75,24.00103 53.75,53.75c0,29.74897 -24.001,53.75 -53.75,53.75c-29.749,0 -53.75,-24.00103 -53.75,-53.75c0,-29.74897 24.001,-53.75 53.75,-53.75zM112.60205,64.5l-33.59375,33.59375l-17.46875,-17.46875l-7.5166,7.5271l24.98535,24.99585l41.12085,-41.12085z"></path></g></g></svg>';
    x = '<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"20\" height=\"20\" viewBox=\"0 0 172 172\" style=\" fill:#000000;\"><g transform=\"\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-size=\"none\" style=\"mix-blend-mode: normal\"><path d=\"M0,172v-172h172v172z\" fill=\"none\"></path><path d=\"\" fill=\"none\"></path><g fill=\"#e74c3c\"><path d=\"M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM60.29406,55.04l20.94234,30.76515l-21.19765,31.15485h8.75453l16.5214,-24.41594h0.68531l16.22578,24.41594h9.26515l-20.98265,-30.80547l21.45297,-31.11453h-8.79485l-16.56172,24.63094h-0.69203l-16.3064,-24.63094z\"></path></g></g></g></svg>';
    if(selectbox.selectedIndex <= 0){
        select1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        select1.innerHTML = tick;
    if(ho.value===''){
        ho1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        ho1.innerHTML = tick;
    if(ten.value===''){
        ten1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        ten1.innerHTML = tick;
    if(sdt.value===''){
        sdt1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        sdt1.innerHTML = tick;
    if(email.value===''){
        email1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        email1.innerHTML = tick;
    if(file.files.length === 0){
        file1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        file1.innerHTML = tick;
    if(files.files.length === 0){
        files1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        files1.innerHTML = tick;
    if(h1.value === ''){
        errorh1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        errorh1.innerHTML = tick
    if(h1.value !== '' && con1.value === ''){
        errorcon1.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        errorcon1.innerHTML = tick;
    if((h2.value !== '' && con2.value === '')||(h2.value === '' && con2.value !== '')){
        errorh2.innerHTML = x;
        errorcon2.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        errorh2.innerHTML = tick;
        errorcon2.innerHTML = tick;
    if((h3.value !== '' && con3.value === '')||(h3.value === '' && con3.value !== '')){
        errorh3.innerHTML = x;
        errorcon3.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        errorh3.innerHTML = tick;
        errorcon3.innerHTML = tick;
    if((h4.value !== '' && con4.value === '')||(h4.value === '' && con4.value !== '')){
        errorh4.innerHTML = x;
        errorcon4.innerHTML = x;
        button.disabled = true;
        return false;
    }
    else
        errorh4.innerHTML = tick;
        errorcon4.innerHTML = tick;
    button.disabled = false;
    return true;
}

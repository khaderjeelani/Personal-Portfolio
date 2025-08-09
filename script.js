'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });






// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue.toLowerCase() === filterItems[i].dataset.category.toLowerCase()) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}

let modalImgs = [];
let currentImgIndex = 0;

document.querySelectorAll('.project-eye-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    modalImgs = JSON.parse(this.getAttribute('data-imgs'));
    currentImgIndex = 0;
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('img-modal-img');
    modalImg.src = modalImgs[currentImgIndex];
    modal.style.display = 'flex';
  });
});

document.querySelector('.img-modal-close').onclick = function(e) {
  e.stopPropagation();
  document.getElementById('img-modal').style.display = 'none';
};

document.querySelector('.img-modal-arrow-left').onclick = function(e) {
  e.stopPropagation();
  if (modalImgs.length > 0) {
    currentImgIndex = (currentImgIndex - 1 + modalImgs.length) % modalImgs.length;
    document.getElementById('img-modal-img').src = modalImgs[currentImgIndex];
  }
};

document.querySelector('.img-modal-arrow-right').onclick = function(e) {
  e.stopPropagation();
  if (modalImgs.length > 0) {
    currentImgIndex = (currentImgIndex + 1) % modalImgs.length;
    document.getElementById('img-modal-img').src = modalImgs[currentImgIndex];
  }
};

document.getElementById('img-modal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};

// Certificate modal variables
let certModalImgs = [];
let certCurrentImgIndex = 0;

document.querySelectorAll('.certificate-eye-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const figure = this.closest('figure');
    const img = figure.querySelector('img');
    certModalImgs = [img.src];
    certCurrentImgIndex = 0;
    const modal = document.getElementById('cert-img-modal');
    const modalImg = document.getElementById('cert-img-modal-img');
    modalImg.src = certModalImgs[certCurrentImgIndex];
    modal.style.display = 'flex';
  });
});

document.querySelector('.cert-img-modal-close').onclick = function(e) {
  e.stopPropagation();
  document.getElementById('cert-img-modal').style.display = 'none';
};

const faq = document.querySelector('.faqs').querySelectorAll('.faq');
console.log(faq);

// console.log(faq.nextSiblingElement);

const faq1 = document.querySelectorAll('.faq-question');
console.log(faq1);

faq.forEach((item) => {
  // console.log(`<div>${item}</div>`);
  console.log(item);
  item.addEventListener('click', () => {
    if (item.classList.contains('open')) {
      item.classList.remove('open');
    } else {
      item.classList.add('open');
    }
  });
});

let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move");
};

// ====== REVIEWS SWIPER ====== //

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ====== EMAILJS ====== // 
function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "Antoine" || email.value == "antoine.buchaillat@efap.com" || msg == ""){
            emptyerror();
        }
        else {
            sendmail(name.value, email.value,  msg.value);
            success;
        }
    })
}
validate();

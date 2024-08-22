// scripts.js

function showModal(imageSrc) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    // Get all modals and order links
    var modals = document.querySelectorAll('.modal');
    var orderLinks = document.querySelectorAll('.order-text');
    var closeBtns = document.querySelectorAll('.modal .close');

    // Function to open a specific modal
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    // Add click event listeners to all Order Now links
    orderLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            var modalId = this.id.replace('orderText', 'orderModal'); // Get corresponding modal ID
            openModal(modalId);
        });
    });

    // Add click event listeners to all close buttons
    closeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var modal = this.closest('.modal');
            modal.style.display = 'none'; // Hide the modal
        });
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function (event) {
        modals.forEach(function (modal) {
            if (event.target == modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        });
    });
});





// Toggle mobile menu visibility
// document.addEventListener('DOMContentLoaded', function () {
//     const canvasOpen = document.querySelector('.canvas__open');
//     const mobileMenu = document.querySelector('.mobile-menu');

//     canvasOpen.addEventListener('click', function () {
//         mobileMenu.classList.toggle('show');
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    var imageCercle = document.querySelector('.image-I-cercle');
    var imageI = document.querySelector('.image-I');

    // When you hover over image-I-cercle, hide image-I
    imageCercle.addEventListener('mouseover', function() {
        imageI.style.opacity = '0';
    });

    // When you stop hovering over image-I-cercle, show image-I
    imageCercle.addEventListener('mouseout', function() {
        imageI.style.opacity = '1';
    });
});
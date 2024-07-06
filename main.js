let currentImageIndex = 1;
const totalImages = 3; // Assume we have 3 images for the car

function showNextImage() {
    currentImageIndex = (currentImageIndex % totalImages) + 1;
    const carImage = document.querySelector('.car-gallery img');
    carImage.src = `car${currentImageIndex}.jpg`;
}

function submitOffer() {
    const userOffer = document.getElementById('user-offer').value;
    alert(`تم تقديم عرضك: $${userOffer}`);
}

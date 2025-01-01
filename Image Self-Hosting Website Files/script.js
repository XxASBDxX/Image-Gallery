document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const images = ['image1.webp', 'image2.webp', 'image3.webp', 'image4.webp']; // Update with your file names
    images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${img}`;
        imgElement.alt = img.split('.')[0]; // Optional: sets alt text to the file name without extension
        gallery.appendChild(imgElement);
    });
});

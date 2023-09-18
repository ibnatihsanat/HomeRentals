const dropzone = document.getElementById('dropzone');
dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];

        if (file.type.match('image/jpeg') || file.type.match('image/jpg') || file.type.match('image/png')) {
            const img = document.createElement('img');
            img.setAttribute('draggable', 'false');
            img.style.maxWidth = '12rem';
            img.style.maxHeight = '6rem';

            const reader = new FileReader();
            reader.onload = (event) => {
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
            dropzone.innerHTML = '';
            dropzone.appendChild(img);
        } else {
            alert('Please drop a valid image (png, jpeg, jpg).');
        }
    }
});

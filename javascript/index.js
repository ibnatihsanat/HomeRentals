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
            // img.style.maxWidth = '12rem';
            // img.style.maxHeight = '6rem';

            const reader = new FileReader();
            reader.onload = (event) => {
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
            dropzone.innerHTML = '';
            dropzone.appendChild(img);
            newProperty.appendChild(img);
            img.style.borderRadius = '1rem 1rem 0rem 0rem';
            img.className = 'pics'
        } else {
            alert('Please drop a valid image (png, jpeg, jpg).');
        }
    }
});

// FORM
const item_address = document.querySelector('.address')
const room_types = document.querySelector('#room-type');
const item_price = document.querySelector('.price');
const add_btn = document.querySelector('.propertybtn');
// Get the select element

const newProperty = document.createElement('div');
newProperty.className = 'one';
add_btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Create a new div for each card
    const location = document.createElement('h5');
    const locationtVal = document.createTextNode(item_address.value);
    location.appendChild(locationtVal);
    newProperty.appendChild(location);

    // Get the value of the selected option from the dropdown
    const selectedRoom = document.createElement('h6');
    const selectedRoomText = document.createTextNode(room_types.value);
    selectedRoom.appendChild(selectedRoomText);
    newProperty.appendChild(selectedRoom);

    const priceValue = document.createElement('h4');
    const priceValueText = document.createTextNode(`$ ${item_price.value}/month`);
    priceValue.appendChild(priceValueText);
    newProperty.appendChild(priceValue);

    const propertytable = document.createElement('table');
    propertytable.className = 'property-icons';
    propertytable.innerHTML = `
    <tbody>
        <tr>
            <td><img src="./icons/Bed.svg" alt="">4</td>
            <td class="tdleft"><img src="./icons/Shower.svg" alt="">3</td>
            <td class="tdleft"><img src="./icons/Size.svg" alt="">2</td>
        </tr>
    </tbody>
`;
    newProperty.appendChild(propertytable);
    const propertyResult = document.querySelector('.property-items');
    propertyResult.appendChild(newProperty);
});

// console.log('my name is deeyj')

const propertyItems = document.querySelectorAll('.property-items .one');
const propertyBtns = document.querySelectorAll('.property-btn button');
const itemsPerPage = 6;
let currentPage = 1;

function showPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = pageNumber * itemsPerPage;

    propertyItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Update the active button
    propertyBtns.forEach((btn) => {
        btn.classList.remove('active');
    });
    propertyBtns[pageNumber].classList.add('active');
}

function updatePagination() {
    const pageCount = Math.ceil(propertyItems.length / itemsPerPage);
    showPage(currentPage);

    for (let i = 1; i <= pageCount; i++) {
        propertyBtns[i].style.display = 'inline-block';
    }

    // Hide or show Previous and Next buttons
    if (currentPage === 1) {
        document.getElementById('btn-1').style.display = 'none';
    } else {
        document.getElementById('btn-1').style.display = 'inline-block';
    }
    if (currentPage === pageCount) {
        document.getElementById('btn-5').style.display = 'none';
    } else {
        document.getElementById('btn-5').style.display = 'inline-block';
    }
}
// Add event listeners to pagination buttons
propertyBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (index === 0) {
            // Previous button
            currentPage--;
        } else if (index === propertyBtns.length - 1) {
            // Next button
            currentPage++;
        } else {
            currentPage = index;
        }
        updatePagination();
    });
});

// Initialize pagination
updatePagination();

// const imageZone = document.querySelector('imageZone')
// imageZone.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     imageZone.classList.add("hover");
// })

// imageZone.addEventListener("dragleave", () => {
//     imageZone.classList.remove("hover")
// })

// imageZone.addEventListener("drop", (e) => {
//     e.preventDefault();
//     const image = e.datatransfer.files[0];
//     const type = image.type;
//     if (
//         type == "image/png" || type == "image/jpg" || type == "image/jpeg") {
//         return upload(image);
//     }
//     else {
//         imageZone.setAttribute("class", "imageZone invalid");
//         imageZone.innerHTML = "invalid file format"
//         return false
//     }
// });

// const upload = (image) => {
//     imageZone.setAttribute("class", "imageZone valid");
//     imageZone.innerHTML = "Added" + image.name
// };

const droparea = document.querySelector(".droparea");

droparea.addEventListener("dragover", (e) => {
  e.preventDefault();
  droparea.classList.add("hover");
});

droparea.addEventListener("dragleave", () => {
  droparea.classList.remove("hover");
});

droparea.addEventListener("drop", (e) => {
  e.preventDefault();

  const image = e.dataTransfer.files[0];
  const type = image.type;

  if (
    type == "image/png" ||
    type == "image/jpg" ||
    type == "image/jpeg"
  ) {
    return upload(image);
  } else {
    droparea.setAttribute("class", "droparea invalid");
    droparea.innerText = "Invalid File Format!";
    return false;
  }
});

const upload = (image) => {
  droparea.setAttribute("class", "droparea valid");
  droparea.innerText = "Added " + image.name;
};


const item_address = document.querySelector('.address');
const room_types = document.querySelector('#room-type');
const item_price = document.querySelector('.price');
const add_btn = document.querySelector('.propertybtn');
const propertyItemsContainer = document.querySelector('.property-items'); // Container div

add_btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Create a new div for each card
    const newProperty = document.createElement('div');
    newProperty.className = 'one';

    // Create and append the location element
    const location = document.createElement('h5');
    const locationtVal = document.createTextNode(item_address.value);
    location.appendChild(locationtVal);
    newProperty.appendChild(location);

    // Get the value of the selected option from the dropdown and append it
    const selectedRoom = document.createElement('h6');
    const selectedRoomText = document.createTextNode(room_types.value);
    selectedRoom.appendChild(selectedRoomText);
    newProperty.appendChild(selectedRoom);

    // Create and append the price element
    const priceValue = document.createElement('h4');
    const priceValueText = document.createTextNode(`$ ${item_price.value}/month`);
    priceValue.appendChild(priceValueText);
    newProperty.appendChild(priceValue);

    // Create and append the property table
    const propertytable = document.createElement('table');
    propertytable.className = 'property-icons';
    propertytable.innerHTML = `
        <tbody>
            <tr>s
                <td><img src="./icons/Bed.svg" alt="">4</td>
                <td class="tdleft"><img src="./icons/Shower.svg" alt="">3</td>
                <td class="tdleft"><img src="./icons/Size.svg" alt="">2</td>
            </tr>
        </tbody>
    `;
    newProperty.appendChild(propertytable);

    // Append the new item to the container
    propertyItemsContainer.appendChild(newProperty);
});


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
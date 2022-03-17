document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  let length = 0;
  const container = []
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();     
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        if(length < 5){
         updateThumbnail(dropZoneElement, inputElement.files[0]);
         length = length + 1;
         container.push(inputElement.files[0]);
        }else{
          console.log("Exceeded the limit");
        }
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {        
        if( length < 5){
          inputElement.files = e.dataTransfer.files;
          container.push(inputElement.files[0])
          updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
          length = length + 1;
        }else{
          console.log("Please you can't add more than 4 files!")
        }
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
    length = length + 1;
  });
  


















  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt") && length < 5) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement && length < 5) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/") && length < 5) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
  
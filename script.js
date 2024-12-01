
function toggleBox(boxId) {
    const boxes = document.querySelectorAll('.box');
    const radios = document.querySelectorAll('.bundle-radio');
  
    boxes.forEach((box, index) => {
      if (index === boxId - 1) {
        box.classList.add('selected'); 
        radios[index].checked = true; 
      } else {
        box.classList.remove('selected'); 
        radios[index].checked = false; 
      }
    });
  }
  
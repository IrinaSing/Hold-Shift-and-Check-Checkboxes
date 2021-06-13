const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

export const handleCheck = (e) => {

const target = e.currentTarget;
  let inBetween = false;
  if (e.shiftKey && target.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  
  lastChecked = target;
}

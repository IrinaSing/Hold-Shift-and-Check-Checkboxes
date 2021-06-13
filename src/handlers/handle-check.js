let lastChecked;

export const handleCheck = (e) => {
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

  const target = e.currentTarget;
  let inBetween = false;
  if (e.shiftKey && target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        // eslint-disable-next-line no-param-reassign
        checkbox.checked = true;
      }
    });
  }

  lastChecked = target;
};

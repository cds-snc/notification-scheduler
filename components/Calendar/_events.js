export const onKeydown = event => {
  const target = event.currentTarget;
  console.log(target.value);
  const key = event.key.replace("Arrow", "");
  let next = "";

  if (
    target.classList.contains("Calendar-item") &&
    key.match(/Up|Down|Left|Right|Home|End|PageUp|PageDown/)
  ) {
    switch (key) {
      case "Right":
        if (target === getLastDate()) {
          //nextMonth();
          //next = getFirstDate();
        } else {
          //next =
          //target.nextElementSibling ||
          //target.parentElement.nextElementSibling.firstElementChild;
        }
        break;
      case "Left":
        //if (target === getFirstDate()) {
        //previousMonth();
        //next = getLastDate();
        //} else {
        //next =
        //target.previousElementSibling ||
        //target.parentElement.previousElementSibling.lastElementChild;
        //}
        break;
      case "Up":
        if (target === getFirstDate()) {
          //previousMonth();
          //next = getLastDate();
        } else {
          // const parent = target.parentElement;
          // const index = Array.from(parent.children).indexOf(target);
          // const row = parent.previousElementSibling;
          //if (row) {
          // next = row.children.item(index);
          //}
        }
        break;
      case "Down":
        if (target === getLastDate()) {
          nextMonth();
          // next = getFirstDate();
        } else {
          // const parent = target.parentElement;
          //const index = Array.from(parent.children).indexOf(target);
          //const row = parent.nextElementSibling;
          //if (row) {
          //next = row.children.item(index);
          //}
        }
        break;
      case "Home":
        //next = getFirstDate();
        break;
      case "End":
        // next = getLastDate();
        break;
      case "PageUp":
      case "PageDown":
        //if (key === "PageUp") {
        //previousMonth();
        //} else {
        //nextMonth();
        //}
        //next = Array.from(
        //calendarSection.querySelectorAll(".Calendar-item")
        //).find(date => date.textContent === target.textContent);
        break;
      default:

      //
    }

    // event.preventDefault();

    if (next) {
      //next.focus();
    } else {
      // announce("end of calendar");
    }
  }
};

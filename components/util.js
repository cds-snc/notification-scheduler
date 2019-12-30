import dayjs from "dayjs";

export const today = dayjs()
  .set("hour", 0)
  .set("minute", 0)
  .set("second", 0)
  .set("millisecond", 0);

export const isWeekend = day => {
  return day.$W === 0 || day.$W === 6;
};

export const formattedDay = day => {
  return dayjs(day).format("dddd MMMM YYYY");
};

export const isBlockedDay = (day, today = today) => {
  return isWeekend(day) || day.isBefore(today);
};

export const yearMonthDay = day => {
  return dayjs(day).format("YYYY-MM-DD");
};

export const getDates = date => {
  let start = dayjs(date)
    .startOf("month")
    .startOf("week")
    .subtract(1, "day");
  const end = dayjs(date)
    .endOf("month")
    .endOf("week")
    .subtract(1, "day");

  let calendar = [];

  while (start.isBefore(end)) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          start = start.add(1, "day");
          return start;
        })
    );
  }

  return calendar;
};

export const setSelected = (arr, date) => {
  const index = isSelected(arr, date);

  if (index !== -1) {
    const cleaned = arr.filter(e => {
      return e !== date;
    });

    return cleaned;
  }

  return [...arr, date];
};

export const isSelected = (arr, date) => {
  return arr.findIndex(val => val === date);
};

export const parseMonth = date => {
  return dayjs(date).format("MM");
};

export const parseYear = date => {
  console.log(date);
  return dayjs(date).format("YYYY");
};

///// events

const getFirstDate = () => {
  return false;
};

const nextMonth = () => {
  return false;
};

const previousMonth = () => {
  return false;
};

const getLastDate = () => {
  return false;
};

export const onKeydown = event => {
  const target = event.currentTarget;
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

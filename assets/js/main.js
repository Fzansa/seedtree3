$(function () {
  $("#datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    duration: "fast",
  });
});


let data = [
  {
    "id": "2023-09-22 09:00:00",
    "date": "2023-09-22",
    "time": "09:00:00"
  },
  {
    "id": "2023-09-22 10:00:00",
    "date": "2023-09-22",
    "time": "10:00:00"
  },
  {
    "id": "2023-09-22 11:00:00",
    "date": "2023-09-22",
    "time": "11:00:00"
  },
  {
    "id": "2023-09-22 12:00:00",
    "date": "2023-09-22",
    "time": "12:00:00"
  },
  {
    "id": "2023-09-22 13:00:00",
    "date": "2023-09-22",
    "time": "13:00:00"
  },
  {
    "id": "2023-09-22 14:00:00",
    "date": "2023-09-22",
    "time": "14:00:00"
  },
  {
    "id": "2023-09-22 15:00:00",
    "date": "2023-09-22",
    "time": "15:00:00"
  },
  {
    "id": "2023-09-22 16:00:00",
    "date": "2023-09-22",
    "time": "16:00:00"
  },
  {
    "id": "2023-09-22 17:00:00",
    "date": "2023-09-22",
    "time": "17:00:00"
  }
]


function convertTo12HourFormat(time24) {
  // Split the time into hours and minutes
  const [hours, minutes] = time24.split(':');

  // Convert hours to an integer
  const hoursInt = parseInt(hours);

  // Determine AM or PM based on the hours
  const period = hoursInt >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const hours12 = hoursInt % 12 || 12;

  // Create the 12-hour time string
  const time12 = `${hours12}:${minutes} ${period}`;

  return time12;
}








function fun() {
  const datepickerInput = document.getElementById("datepicker");
  const currentDateContainer = document.getElementById('currentDateContainer')
  currentDateContainer.innerHTML = ''

  // Assuming 'data' is an array of objects with 'id' and 'time' properties
  data.forEach(item => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');

    // Set the input type to 'radio'
    input.setAttribute('type', 'radio');
    // Set the input id and label 'for' attribute to match
    input.setAttribute('id', item.id);
    input.setAttribute('name', 'time');
    label.setAttribute('for', item.id);

    // Set the label text to the 12-hour formatted time
    label.textContent = convertTo12HourFormat(item.time);

    // Append the input and label to the list item
    li.appendChild(input);
    li.appendChild(label);

    // Append the list item to the container (replace 'currentDateContainer' with your actual container)
    currentDateContainer.appendChild(li);
  });

  console.log(datepickerInput.value)
}



const endDate = "15 August 2023 05:27 PM"

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

// Java-script arrow function

// const clock = () => {

// }

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) /1000;
   
if (diff < 0) return;

    //calculating  days

    inputs[0].value = (Math.floor(diff / 3600 / 24));

// claculating Hours
    inputs[1].value = Math.floor(diff / 3600) % 24;

    inputs[2].value = Math.floor(diff / 60) % 60; 

    inputs[3].value = Math.floor(diff) % 60; 

}
clock()



setInterval(
    () => {
        clock()
    },
    1000
)
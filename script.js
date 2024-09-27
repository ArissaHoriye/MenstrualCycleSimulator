firstAug = new Date();
const year = firstAug.setFullYear(2024);
const month = firstAug.setMonth(8);

const firstWeekDay = 0;
const lastWeekDay = 6;

const initialDate = new Date(2024,8,1);
while (initialDate.getDate() != firstWeekDay){
    initialDate.setDate(initialDate.getDate() -1);
}

const finalDate = new Date(2024,8,30);
while (finalDate.getDate() != lastWeekDay){
    finalDate.setDate(finalDate.getDate() +1);
}

const days = [];
for(
    let days = new DataTransfer(initialDate.getDay());
    data <= finalDate;
    days.setDate((days.getDate) +1)
){
    days.push(new Date(days.getDay()));
}

console.table(Days);

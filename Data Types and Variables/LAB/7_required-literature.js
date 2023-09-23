function solve(pages, pagesInOneHour, days) {
    let totalTime = pages/pagesInOneHour;
    let hoursReadingADay = totalTime / days;
    console.log(hoursReadingADay);

}
solve(432, 15 ,4)
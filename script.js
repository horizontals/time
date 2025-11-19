
function loop() {
    let time = new Date() //ここに、Y,M,D, h,m,sを入れて確かめられる
    let Y = time.getFullYear()
    let M = time.getMonth()
    let D = time.getDate()
    let h = time.getHours()
    let m = time.getMinutes()
    const verySmallNumber = 0.0000_00000_1
    let s = time.getSeconds()

    // document.getElementById("debug").textContent = h

    let isLeapYear = (Y%400==0) - (Y%100==0) + (Y%4==0)
    let yearLength = 365 + isLeapYear


    //time2date

    let timeInDay = (60 * 60* h + m * 60 + s) / (24 * 60 *60)
    let secondOriginalDate = Math.floor(yearLength * timeInDay) + 1

    // document.getElementById("debug").textContent = timeInDay    

    let d = new Date(Y, 0, secondOriginalDate); // その年の1月1日からdayOfYear日目を求める
    let month = d.getMonth(); // getMonth() は0始まりなので +1
    let date = d.getDate();

    //time2dateはこれでおしまい。


    //date2time

    // let dayOfYear = Math.floor((time -new Date(Y, 0, 1)) / (1000 * 60 * 60 * 24)) + 1;
    let dayOfYear = (time -new Date(Y, 0, 1)) / (1000 * 60 * 60 * 24) + 1;
    let dateInYear = (dayOfYear - 1) / yearLength

    // console.log(dayOfYear,dateInYear); // その年の通算日（例：316

    let hour = Math.floor(dateInYear * 24)
    let minute = Math.floor(dateInYear * 24 * 60) % 60

    //date2timeはこれでおしまい。

    document.getElementById("hour").textContent = hour
    document.getElementById("minute").textContent = minute
    document.getElementById("month").textContent = month + 1
    document.getElementById("date").textContent = date

}


loop()
setInterval(() => {
    loop()

}, 1000);

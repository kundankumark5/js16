const counters = document.querySelectorAll(".counter");

// console.log(counters);
counters.forEach((counter) => {
  //   console.log(counter);
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    // console.log(targetCount);    since it is returning string value and we need to change it in num and there are following 3 ways to do so
    // 1.   using the unary + operator    ex var n = +str;
    // 2. using number constructor   var n = Number(str);
    // 3. using the parse float function  ex var n = parseFloat (str)

    //  so here we are adding + before counter to initialize num in targetCount

    const startingCount = Number(counter.innerHTML); // here we have used num constructor to convert str into num

    const incr = targetCount / 100;
    if (startingCount < targetCount) {
      counter.innerHTML = `${Math.round(startingCount + incr)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  updateCounter();
});

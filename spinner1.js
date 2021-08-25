const spinnerArray = ['\    ', '\/   ', '\-   ', '\\   ', '\|   '];

const spinner1 = function(arry) {
  let timeout = 100;
  const times = 2;

  for (let i = 0; i < arry.length * times; i++) {
    let tmpStr = arry[i % arry.length];

    setTimeout(() => {
      process.stdout.write("\r" + tmpStr);
      if(i === arry.length * times - 1) console.log();
    }, timeout += 200);    
  }
}

spinner1(spinnerArray);
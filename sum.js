const findSum = (n) => {
    let sum = 0;
      let i = 0;
      for (i = n; i > 0; i--) {
        if (i % 2 === 0) {
          sum = sum+ i;
        }
      }
      return(sum)  
  };
  
 
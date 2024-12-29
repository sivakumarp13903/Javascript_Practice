// Example of nested callbacks (Callback Hell)
function firstTask(callback) {
    setTimeout(function() {
      console.log("First task done");
      callback();
    }, 1000);
  }
  
  function secondTask(callback) {
    setTimeout(function() {
      console.log("Second task done");
      callback();
    }, 1000);
  }
  
  function thirdTask(callback) {
    setTimeout(function() {
      console.log("Third task done");
      callback();
    }, 1000);
  }
  
  firstTask(function() {
    secondTask(function() {
      thirdTask(function() {
        console.log("All tasks completed");
      });
    });
  });
  
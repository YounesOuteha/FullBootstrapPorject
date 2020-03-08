var i = 0;
      function makeProgress(){
          if(i < 100){
              i = i + 1;
              $(".progress-bar").css("width", i + "%").text(i + " %");
          }
          setTimeout("makeProgress()", 100);
      }
      makeProgress();
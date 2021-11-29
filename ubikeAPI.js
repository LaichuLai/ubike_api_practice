$().ready(() => { 
  const searchBike = document.querySelector('#searchBike');
  const searchBtn = document.querySelector('#searchBtn');
  const cName = document.querySelector('#cname');
  const amount = document.querySelector('#amount');
  const spaceAvailable = document.querySelector('spaceAvailable');
  const location = document.querySelector('location');
  const updateTime = document.querySelector('updateTime');


  searchBtn.addEventListener("click", () => {
    if (searchBike.value !== "") {
      $.ajax({
        url: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
        type: "GET",
        dataType: "json",
        success: function(ubike) {
      
          var NumOfData = ubike.length;
          console.log(NumOfData);
      
        },
        
        error: function() {
          alert("ERROR!!!");
        }
      });
    } else {
      alert ("請輸入地址!");
    };
  });




});


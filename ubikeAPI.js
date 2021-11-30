$().ready(() => { 
  const searchBike = document.querySelector('#searchBike');
  const searchBtn = document.querySelector('#searchBtn');
  const cName = document.querySelector('#cname');
  const amount = document.querySelector('#amount');
  const spaceAvailable = document.querySelector('spaceAvailable');
  const location = document.querySelector('location');
  const updateTime = document.querySelector('updateTime');


  searchBtn.addEventListener("click", () => {

    const bikeStop = searchBike.value
    if ( bikeStop !== "") {
      $.ajax({
        url: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
        type: "GET",
        dataType: "json",
        success: function(ubike) {
      

          console.log(ubike[i].sna);
          console.log(ubike[i].sbi);
          console.log(ubike[i].bemp);
          console.log(ubike[i].ar);
          console.log(ubike[i].aren);
          console.log(ubike[i].srcUpdateTime);

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


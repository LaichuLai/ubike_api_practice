$().ready(() => { 
  const searchBike = document.querySelector('#searchBike');
  const searchBtn = document.querySelector('#searchBtn');
  const cName = document.querySelector('#cName');
  const amount = document.querySelector('#amount');
  const spaceAvailable = document.querySelector('#spaceAvailable');
  const location = document.querySelector('#location');
  const updateTime = document.querySelector('#updateTime');


  searchBtn.addEventListener("click", () => {
    bikeStop = searchBike.value;

    if ( bikeStop !== "") {
      $.ajax({
        url: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
        type: "GET",
        dataType: "json",
        success: function(ubike) {

          ubike.forEach((bikeInfo) => {
            const myLocate = bikeInfo.ar
            if (myLocate.includes(bikeStop)) {
              const { sna: stopName, sbi: bikeNum, bemp: bikeSpace, ar: stopAddress, srcUpdateTime: infoTime } = bikeInfo;

              const findStopName = document.createElement("div");
              const findBikeNum = document.createElement("div");
              const findBikeSpace = document.createElement("div");
              const findStopAddress = document.createElement("div");
              const findTime = document.createElement("div");
              
              findStopName.innerText = stopName;
              findBikeNum.innerText = bikeNum;
              findBikeSpace.innerText = bikeSpace;
              findStopAddress.innerText = stopAddress;
              findTime.innerText = infoTime;
  
              cName.appendChild(findStopName);
              amount.appendChild(findBikeNum);
              spaceAvailable.appendChild(findBikeSpace);
              location.appendChild(findStopAddress);
              updateTime.appendChild(findTime);
  
            };
            


          });

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


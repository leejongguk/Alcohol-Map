import React, { useRef, useEffect } from "react";

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(36.63871097977052, 127.71382957781282), //지도의 중심좌표.
  level: 13, //지도의 레벨(확대, 축소 정도)
};



function MapPage() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    // return () => {};


    // 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
    window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      // 클릭한 위치에 마커를 표시합니다 
      addMarker(mouseEvent.latLng);
    });

    // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
    var markers = [];

    // 마커 하나를 지도위에 표시합니다 
    // addMarker(new window.kakao.maps.LatLng(33.450701, 126.570667));

    // 마커를 생성하고 지도위에 표시하는 함수입니다
    function addMarker(position) {

      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        position: position
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 생성된 마커를 배열에 추가합니다
      markers.push(marker);
    }


    console.log(markers)
    // // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
    // function setMarkers(map) {
    //   for (var i = 0; i < markers.length; i++) {
    //     markers[i].setMap(map);
    //   }
    // }

  }, []);



  return (
      <div style={{backgroundColor:"black", padding: "8% 0 13.2% 0"}}>
        <div
          className="map"
          style={{ width: "1200px", height: "800px", margin: "auto", borderRadius: "5%"}}
          ref={container}
        >        
        </div>
        </div>
  ); 

}
export default MapPage;

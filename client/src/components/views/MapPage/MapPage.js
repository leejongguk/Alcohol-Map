import React, { useRef, useEffect } from "react";

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(36.63871097977052, 127.71382957781282), //지도의 중심좌표.
  level: 13, //지도의 레벨(확대, 축소 정도)
};

function MapPage() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
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

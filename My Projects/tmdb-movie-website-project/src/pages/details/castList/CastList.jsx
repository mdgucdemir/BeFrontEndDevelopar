import React, { useEffect, useState } from "react";
import { fetchCredits } from "../../../components/api/fetchApi";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../../components/api/apiConfig";

const CastList = (props) => {
  const [casts, setCasts] = useState([]);
  const { mediaType } = useParams();

  // console.log(casts);

  useEffect(() => {
    fetchCredits(mediaType, props.id).then((data) => setCasts(data.cast));
  }, [mediaType, props.id]);

  return (
    <div className="casts">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {casts.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="casts_item">
              <div
                className="casts_item_img"
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(
                    item.profile_path
                  )})`,
                }}
              ></div>
              <p className="casts_item_name">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastList;

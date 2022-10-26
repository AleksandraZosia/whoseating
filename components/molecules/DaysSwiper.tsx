import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useDispatch, useSelector } from "../../store/store"
import "swiper/css/effect-fade"
import { setDate } from "../../store/slices/dateSlice"
import React from "react"
interface Props {
  dates: any
}

const DaysSwiper = ({ dates }: Props) => {
  const dispatch = useDispatch()
  const currentDate = useSelector((state) => state.date.date)

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      onSlideChange={(swiper) => {
        dispatch(setDate(dates[swiper.activeIndex].join()))
      }}
      initialSlide={dates.indexOf(currentDate)}
    >
      {dates.map((day: string) => (
        <SwiperSlide key={day}>
          {/* {({isActive})=>console.log(`slide ${day[0]} is active`)} */}
          {({ isActive }) => (
            <div
              className={
                isActive
                  ? "rounded-xl p-2 text-xs text-center bg-green text-white"
                  : "rounded-xl p-2 text-xs text-center bg-white"
              }
            >
              <p>{day[1]}</p>
              <p>{day[0]}</p>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default DaysSwiper

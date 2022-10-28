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
  const [active, setActive] = React.useState<number>(dates.indexOf(currentDate))
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      onSlideChange={(swiper) => {
        dispatch(setDate(dates[swiper.activeIndex].join()))
        setActive(swiper.activeIndex)
      }}
      initialSlide={active}
      centeredSlides={true}
      centerInsufficientSlides={true}
      centeredSlidesBounds
    >
      {dates.map((day: Array<string>, i: number) => (
        <SwiperSlide
          key={day[0]}
          onClick={() => {
            dispatch(setDate(day.join()))
            setActive(i)
          }}
        >
          <div
            className={
              active === i
                ? "rounded-xl p-2 text-xs text-center bg-green text-white"
                : "rounded-xl p-2 text-xs text-center bg-white"
            }
          >
            <p>{day[1]}</p>
            <p>{day[0]}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default DaysSwiper

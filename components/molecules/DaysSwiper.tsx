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

  const index = dates.reduce((acc: number, date: Array<string>, i: number) => {
    if (date.join() === currentDate) {
      acc = i
    }
    return acc
  }, 0)
  const [active, setActive] = React.useState<number>(index)

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      initialSlide={active}
      onSlideChange={(swiper) => {
        dispatch(setDate(dates[swiper.activeIndex].join()))
        setActive(swiper.activeIndex)
      }}
      centeredSlides={true}
      centerInsufficientSlides={true}
      centeredSlidesBounds={true}
      onTap={(swiper) => {
        setActive(swiper.clickedIndex)
        dispatch(setDate(dates[swiper.clickedIndex]))
      }}
      slideToClickedSlide
    >
      {dates.map((day: Array<string>, i: number) => (
        <SwiperSlide key={day[0]}>
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

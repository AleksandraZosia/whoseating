import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useDispatch, useSelector } from "../../store/store"
import "swiper/css/effect-fade"
import { setDate } from "../../store/slices/dateSlice"
import React from "react"
import { formatDate } from "../../bussiness_logic/data_functions"
interface Props {
  dates: any
}

const DaysSwiper = ({ dates }: Props) => {
  const dispatch = useDispatch()
  const currentDate = useSelector((state) => state.date.date)
  const calcInitIndex = (activeDate: string) =>
    dates.reduce((acc: number, date: Array<string>, i: number) => {
      if (date.join() === activeDate) {
        acc = i
      }
      return acc
    }, 0)

  const today = formatDate(new Date()).join()
  const [active, setActive] = React.useState<number>(
    calcInitIndex(currentDate || today)
  )

  return (
    <Swiper
      initialSlide={active}
      slidesPerView={3}
      spaceBetween={20}
      onSlideChange={(swiper) => {
        dispatch(setDate(dates[swiper.activeIndex].join()))
        setActive(swiper.activeIndex)
      }}
      centeredSlides={true}
      centerInsufficientSlides={true}
      centeredSlidesBounds={true}
      onTap={(swiper) => {
        setActive(swiper.clickedIndex)
        dispatch(setDate(dates[swiper.clickedIndex].join()))
      }}
      slideToClickedSlide={true}
    >
      {dates.map((day: Array<string>, i: number) => (
        <SwiperSlide key={day[0]}>
          <div
            className={
              active === i
                ? "rounded-xl p-2 text-xs text-center bg-lightpink bg-opacity-40 text-darkpink"
                : "rounded-xl p-2 text-xs text-center bg-white text-darkgreen"
            }
          >
            <p>{day[1]}</p>
            <p className="font-bold">{day[0]}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default DaysSwiper

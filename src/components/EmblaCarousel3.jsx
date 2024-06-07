import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButton'

const EmblaCarousel3 = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({stopOnInteraction: false})
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick
  // } = usePrevNextButtons(emblaApi)

  // const onButtonAutoplayClick = useCallback(
  //   (callback) => {
  //     const autoScroll = emblaApi?.plugins()?.autoScroll
  //     if (!autoScroll) return

  //     const resetOrStop =
  //       autoScroll.options.stopOnInteraction === false
  //         ? autoScroll.reset
  //         : autoScroll.stop

  //     resetOrStop()
  //     callback()
  //   },
  //   [emblaApi]
  // )

  // const toggleAutoplay = useCallback(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll
  //   if (!autoScroll) return

  //   const playOrStop = autoScroll.isPlaying()`
  //     ? autoScroll.stop
  //     : autoScroll.play
  //   playOrStop()
  // }, [emblaApi])

  // useEffect(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll
  //   if (!autoScroll) return

  //   setIsPlaying(autoScroll.isPlaying())
  //   emblaApi
  //     .on('autoScroll:play', () => setIsPlaying(true))
  //     .on('autoScroll:stop', () => setIsPlaying(false))
  //     .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  // }, [emblaApi])

  return (
    <div className="embla em1">
      <div className=" vp1" ref={emblaRef}>
        <div className=" cntnr1">
          {slides.map((item,index) => (
            <div className=" sld1" key={index}>
              <div className=" sldnm1">
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default EmblaCarousel3

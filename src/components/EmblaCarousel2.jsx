import React from 'react'
import { DotButton, useDotButton } from './EmblaCDB'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCAB'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className=" em">
      <div className=" vp" ref={emblaRef}>
        <div className=" cnt">
          {slides.map((item,index) => (
            <div className=" sld" key={index}>
              <div className=" sldn">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls cntr">
        <div className="embla__buttons bt">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots dts">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot dt'.concat(
                index === selectedIndex ? ' embla__dot--selected slct' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

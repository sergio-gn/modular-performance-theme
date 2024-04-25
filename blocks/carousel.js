<style>
.carousel-container{
    margin: 3rem auto;
}
.slide-glide_content {
    background: #000000d6;
    margin-top: -3.3rem;
    position: relative;
    padding: 1rem 0;
    color: #fff;
    text-align: center;
}
.glide {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.glide * {
  box-sizing: inherit;
}

.glide__track {
  overflow: hidden;
}

.glide__slides {
  position: relative;
  width: 100%;
  list-style: none;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  touch-action: pan-Y;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}

.glide__slides--dragging {
  user-select: none;
}

.glide__slide {
    height:20rem;
    overflow:hidden;
  width: 100%;
  flex-shrink: 0;
  white-space: initial;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
.glide__slide img{
    object-fit:cover;
    width:100%;
    height:100%;
}

.glide__slide a {
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.glide__arrows {
  -webkit-touch-callout: none;
  user-select: none;
}

.glide__bullets {
  -webkit-touch-callout: none;
  user-select: none;
}

.glide--rtl {
  direction: rtl;
}

.glide {
  cursor: -webkit-grab;
  width: 100%;
  margin: auto;
}

.slider__arrow--prev {
  left: 1.5rem;
}

.fas {
  right: 5px;
  position: absolute;
  top: 6px;
}

.slider__arrow--next {
  right: 1.5rem;
}

.slider__arrow {
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 24px;
  height: 24px;
  margin-top: -9px;
  border-radius: 50%;
  background-color: #454545;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-box-shadow: 0 0.5rem 4rem 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 0.5rem 4rem 0 rgba(0, 0, 0, 0.5);
}

.slider__arrow--prev {
  left: 1.5rem;
}

.slider__frame[class*=active] {
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: background 0.1s ease-in;
}

.slider__frame {

}

.glide__arrows {
  position: relative;
  z-index: 2;
  margin: 1rem;
}
.glide__arrow--prev{
    position:absolute;
    left: 0;
    top: 0;
    bottom: 0;
        pointer-events: auto;
}
.glide__arrow--next{
    position:absolute;
    right: 0;
    top: 0;
    bottom: 0;
        pointer-events: auto;
}

.glide__arrow {
  border: none;
  background: #ffffff00;
  cursor: pointer;
  z-index: 2;
}

.glide__arrow:hover {
  transform: scale(1.1);
  transition: ease-in 0.2s;
}

</style>
<div>
    <?php if (have_rows('carousel')) : ?>
        <div class="carousel-container">
            <div class="container">
                <div class="image-gallery">
                    <div id="intro" class="slider glide glide_carousel glide--ltr glide--carousel glide--swipeable">
                        
                        <div data-glide-el="controls">
                            <button class="glide__arrow glide__arrow--prev" data-glide-dir="<">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1486" cy="15.9245" r="15.7993" fill="#636364"/><path d="M18.3707 20.3687L13.9266 15.9246L18.3707 11.4805" stroke="white" stroke-width="1.5"/></svg>
                            </button>
                        </div>
                        
                        <div class="slider__track glide__track" data-glide-el="track">
                            <ul class="slider__slides glide__slides">
                                <?php while(have_rows('carousel')) : the_row(); ?>
                                    <li class="slider__frame glide__slide">
                                        <?php
                                        // Check if all sub-fields are not empty before outputting them
                                        if (get_sub_field('image') && get_sub_field('text') && get_sub_field('link')) :
                                            $image = get_sub_field('image');
                                            $image_url = $image['url'];
                                            $image_alt = $image['alt'];
                                            $text = get_sub_field('text');
                                            $link = get_sub_field('link');
                                        ?>
                                            <a href="<?php echo esc_url($link['url']); ?>">
                                                <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($image_alt); ?>">
                                                <div class="slide-glide_content">
                                                    <?php echo $text; ?>
                                                </div>
                                            </a>
                                        <?php endif; ?>
                                    </li>
                                <?php endwhile; ?>
                            </ul>
                        </div>
                        
                        <div data-glide-el="controls">
                            <button class="glide__arrow glide__arrow--next" data-glide-dir="&gt;">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.2477" cy="15.9245" r="15.7993" fill="#636364"/><path d="M14.0257 20.3687L18.4698 15.9246L14.0257 11.4805" stroke="white" stroke-width="1.5"/></svg>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>
</div>

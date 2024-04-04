<style>
.slider-wrapper {
    position: relative;
    overflow: hidden;
    height: 40rem;
}
.slider-wrapper img, .slider-wrapper picture{
    height: 100%;
    width:100%;
    object-fit:cover;
}
@media(max-width:1100px){
    .slider-wrapper {
        position: relative;
        overflow: hidden;
        height: 20rem;
    }
    .slider-wrapper img, .slider-wrapper picture{
        height: 100%;
        object-fit:cover;
    }
}

.slider-title{
  color: rgb(255, 255, 255);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 7vh;
  font-family: system-ui;
  line-height: normal;
  
  background: #00000057;
  margin: 0;
}
.slider-title span{
  background: #d42127;
  padding: 0.1rem;
}
.glide {
position: relative;
width: 100%;
box-sizing: border-box; }
.glide * {
  box-sizing: inherit; }
.glide__track {
  overflow: hidden; }
.glide__slides {
    margin:0;
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
  will-change: transform; }
  .glide__slides--dragging {
    user-select: none; }
.glide__slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  white-space: initial;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent; }
  .glide__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none; }
.glide__arrows {
  -webkit-touch-callout: none;
  user-select: none; 
  position: absolute;
  margin-top: -5rem;
  left: 0;
  right: 0;
  width: 110px;
  margin: -5rem auto 0 auto;
}
.glide__arrow{
  border: 4px solid #d42127;
  padding: 0.5rem 0.7rem;
  color: #d42127;
  background:#fff!important;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: monospace;
}
.glide__arrow:hover{
  background: #d42127!important;
  border: 4px solid #d42127;
  color: #fff;
  cursor: pointer;
}
.glide__bullets {
  -webkit-touch-callout: none;
  user-select: none; }
.glide--rtl {
  direction: rtl; }

.glide {
cursor: -webkit-grab;
margin-top: 0;
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
border-radius: 0.16667em;
text-align: center;
height: 75vh;
line-height: 150px;
-webkit-box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.112);
box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.116);
color: #fff;
font-size: 1em;
font-weight: 900;
}

@media(max-width:1100px){
.slider__frame {
  height: unset;
}
.slider-title{
  font-size: 4vh;
}
}

</style>
<div class="yourwebsite">
    <div id="intro" class="slider glide glide--ltr glide--carousel glide--swipeable">
        <div class="slider__track glide__track" data-glide-el="track">
            <ul class="slider__slides glide__slides">
                <li class="slider__frame glide__slide 1">
                    <div class="slider-wrapper">
                          <?php
                          if ( wp_is_mobile() ) {
                            // Output smaller image URL for mobile devices
                            $image_url = '#';
                          } else {
                            // Output larger image URL for non-mobile devices
                            $image_url = '#';
                          }
                          ?>
                          <img src="<?php echo esc_url( $image_url ); ?>" alt="Your Website Electrical Melbourne Vans">
                        <p class="slider-title">Reliable <br> <span>Team</span></p>
                    </div>
                </li>
                <li class="slider__frame glide__slide 2">
                    <div class="slider-wrapper">
                        <?php
                          if ( wp_is_mobile() ) {
                            // Output smaller image URL for mobile devices
                            $image_url = '#';
                          } else {
                            // Output larger image URL for non-mobile devices
                            $image_url = '#';
                          }
                          ?>
                          <img src="<?php echo esc_url( $image_url ); ?>" alt="Your Website Electrical Melbourne Workmanship">
                        <p class="slider-title">High Standard <br> <span>of Workmanship</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="glide__arrows glide-home" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--prev" data-glide-dir="<">
              <
          </button>
          <button class="glide__arrow glide__arrow--next" data-glide-dir=">">
              >
          </button>
      </div>
    </div>
    <script src="./js/glide.js" async></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var glideInit = function() {
                var glide = new Glide('.glide', {
                    type: 'carousel',
                    focusAt: 'center',
                    perView: 1,
                    animationDuration: 300,
                    autoplay: false,
                    hoverpause: true,
                    startAt: 0,
                });
                glide.mount();
            };
    
            // Check if Glide is defined
            if (typeof Glide !== 'undefined') {
                // Glide is already loaded
                glideInit();
            } else {
                // Wait for Glide to be loaded
                document.querySelector('[src="./js/glide.js"]').addEventListener('load', function() {
                    glideInit();
                });
            }
        });
    </script>

</div>
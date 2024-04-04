<style>
    
    .testimonials_slider-wrapper {
        position: relative;
        overflow: hidden;
        height: auto;
        cursor: pointer;
        padding: 1rem 10%;
    }
    .testimonials_slider-wrapper img{
        height: 100%;
        width:100%;
        object-fit:cover;
    }
    .testimonials_slider-wrapper p{
        color: #000;
        font-weight: normal;
    }
    @media(max-width:1100px){
        .testimonials_slider-wrapper {
            position: relative;
            overflow: hidden;
            height: auto;
        }
        .testimonials_slider-wrapper img{
            height: 100%;
            object-fit:cover;
        }
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

    .testimonials_slider__frame[class*=active] {
    -webkit-box-shadow: none;
    box-shadow: none;
    transition: background 0.1s ease-in;
    }

    .testimonials_slider__frame {
        border-radius: 0.16667em;
        text-align: center;
        height: unset;
        -webkit-box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.112);
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.116);
        color: #fff;
        font-size: 1em;
        font-weight: 900;
    }

    @media(max-width:1100px){
        .testimonials_slider__frame {
        height: unset;
        }
    }

    .glide__bullets{
        display: flex;
        justify-content: center;
        padding: 1rem;
        gap: 0.5rem;
    }
    .glide__bullet, .glide__bullet--active{
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        border: none;
    }
    .glide__bullet{
        background: #d42127;
        opacity: .5;
    }
    .glide__bullet--active{
        background: #d42127;
        opacity: 1;
    }
</style>

<?php 
    $video = get_sub_field('video');
    if (have_rows('repeater_testimonial')) :
            $quote = get_sub_field('quote');
            $name = get_sub_field('name');
            $slide_number = 0;
?>
        <section class="container d-flex_newcss flex-column_mb">
            <div class="flex-1 col-6_newcss col-12_mb">
                <?php if (!empty($video)): ?>
                    <div class="video-container" id="lazyVideoContainer">
                        <video video controls muted loop preload="none" class="lazyVideo w-100_newcss img-wrapper-videotag_newcss" src="<?php echo $video['url']; ?>"></video>
                    </div>
                <?php endif; ?>
            </div>
            <div class="flex-1 col-6_newcss col-12_mb">
                <div id="intro" class="slider glide2 glide--ltr glide--carousel glide--swipeable">
                    <div class="slider__track glide__track" data-glide-el="track">
                        <ul class="slider__slides glide__slides">
                            <?php while (have_rows('repeater_testimonial')) : the_row(); ?>
                                <li class="testimonials_slider__frame glide__slide <?php echo $slide_number; ?>">
                                    <div class="testimonials_slider-wrapper">
                                        <p><?php the_sub_field('quote'); ?></p>
                                        <p style="text-align: center; font-size: 25px; font-weight: 600; color: #d42127;" element-id="1586"><?php the_sub_field('name'); ?></p>
                                    </div>
                                </li>
                            <?php 
                                $slide_number++; // Increment slide number
                                endwhile; 
                            ?>
                        </ul>
                    </div>

                    <div class="glide__bullets" data-glide-el="controls[nav]">
                        <?php for ($i = 0; $i < $slide_number; $i++) : ?>
                            <button class="glide__bullet" data-glide-dir="=<?php echo $i; ?>" aria-label="bullet"></button>
                        <?php endfor; ?>
                    </div>
                </div>
                
                <script src="./js/glide.js"></script>
                <script>
                    var glide = new Glide('.glide2', {
                        type: 'carousel',
                        focusAt: 'center',
                        perView: 1,
                        animationDuration: 300,
                        autoplay: false,
                        hoverpause: true,
                        startAt: 0,
                        pagination: {
                            el: '.glide__bullets',
                        }
                    });
                    glide.mount();
                </script>
            </div>
        </section>
<?php
    endif;
?>
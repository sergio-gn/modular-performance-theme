<?php
/**
* Template Name: Template Locations Single
*
* @package WordPress
*/
?>
<?php 
    get_header();
    get_template_part( 'parts/navigation' ); 
?>
<style>
    body{
        font-family: system-ui;
    }
    .repeater_zigzag h1, .repeater_zigzag h2, .repeater_zigzag h3, .repeater_zigzag h4, .repeater_zigzag h5, .repeater_zigzag h6 {
        font-size: 2rem;
        color: var(--main-colour);
    }
    .d-flex_newcss {
        display: flex;
    }
    .vthz-center {
        justify-content: center;
        align-items: center;
    }
    .gap_3 {
        gap: 3rem;
    }
    .flex-1 {
        flex: 1;
    }
    .img_wrapper_repeater_zigzag {
        overflow: hidden;
        max-height: 40rem;
    }
    .img_wrapper_repeater_zigzag_imgtag {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }
    .front-zag {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .order-right {
        flex-direction: row;
    }
    .homepage_hero{
        display: flex;
        align-items: center;
        margin-top: -5rem;
        position: relative;
        background-position: bottom;
        height: 90vh;
    }
    .sidepage_hero{
        height: 50vh;
        position:relative;
        display: flex;
        align-items: center;
    }
    .center_title{
    	position:relative;
    	top: 3rem;
        z-index:1;
    }
    .center_title_sidebar{
        top: unset;
        position: relative;
        z-index: 1;
    }
    .banner-text {
        width: 30vw;
        background-color: rgb(83 90 94 / 15%);
        backdrop-filter: blur(3px);
        border-radius: 1rem;
        padding: 1rem;
    }
    .background-shadow{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        z-index:0;
        background: linear-gradient(to top, rgb(0 0 0 / 39%), rgb(255 255 255 / 1%));
    }
    .hero_img_background{
        object-fit: cover;
        width:100%;
        height:100%;
        top: 0;
        left:0;
        right:0;
        bottom:0;
        position:absolute;
        z-index: -1;
    }
    .banner-text h1{
        font-size:4rem;
        line-height: 1;
        margin: 1rem 0;
    }
    .banner-text h1 strong{
        background: -webkit-linear-gradient(#30513A, #607466);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media(max-width:1300px){
        .banner-text h1{
            font-size: 2.5rem;
        }
        .homepage_hero{
            margin-top:-7rem;
            height:80vh;
        }
    }
    @media(max-width:798px){
        .banner-text{
            width:100%;
        }
    }
    .repeater_zigzag h1, .repeater_zigzag h2, .repeater_zigzag h3, .repeater_zigzag h4, .repeater_zigzag h5, .repeater_zigzag h6 {
        font-size: 2rem;
        color: var(--main-colour);
    }
    .repeater_zigzag h1 strong, .repeater_zigzag h2 strong, .repeater_zigzag h3 strong, .repeater_zigzag h4 strong, .repeater_zigzag h5 strong, .repeater_zigzag h6 strong {
        font-size: 3rem;
        font-weight: 900;
        background: -webkit-linear-gradient(var(--main-colour), var(--main_colour_darker));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
    }
    .repeater_zigzag_container{
        padding: 2rem;
    }
    .repeater_zigzag p{
        padding:1rem 0;
        font-size: 1rem;
        margin: 0;
    }
    .img_wrapper_repeater_zigzag{
        overflow:hidden;
        max-height: 40rem;
    }
    .img_wrapper_repeater_zigzag_imgtag{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }
    @media(max-width:1100px){
        .img_wrapper_repeater_zigzag{
            height: 20rem;
            flex: unset;
        }
    }
    .testimonial_card{
        background: #efefef;
        border-radius: 1rem;
        padding: 2rem 0;
    }
    .testimonials_slider-wrapper {
        position: relative;
        overflow: hidden;
        height: auto;
        cursor: pointer;
        padding: 0rem 10%;
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
    .testimonials_slider-wrapper .quote_name{
        color: var(--main-colour);
        font-weight: bold;
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
        padding: 0.5rem 0.7rem;
        color: var(--main-colour);
        background:#fff!important;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: monospace;
    }
    .glide__arrow:hover{
        background: var(--main-colour)!important;
        border: 4px solid var(--main-colour);
        color: #fff;
        cursor: pointer;
    }
    .glide__bullets_testimonial {
        -webkit-touch-callout: none;
        user-select: none;
    }
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

    li.carousel_frame.glide__slide a{
        max-width: 5rem;
        display: flex;
    }
    @media(max-width:1100px){
        .testimonials_slider__frame {
        height: unset;
        }
    }

    .glide__bullets_testimonial{
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    }
    .container .testimonial-carousel button.glide__bullet.glide__bullet--active{
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        border: none;
        background: var(--main-colour)!important;
        opacity: 1;
    }
    .container .testimonial-carousel button.glide__bullet{
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        border: none;
        background: var(--main_colour_darker)!important;
        opacity: .5;
    }

    .text_centered_card{
        border-radius: 1rem;
    }

</style>

    <?php
        $suburbName = get_field('suburb_name');
    
        if (have_rows('page_banner', 'option')) :
            while (have_rows('page_banner', 'option')) : the_row();
                $link = get_sub_field('link');
                $image = get_sub_field('image');
        
                $content = get_sub_field('content');
                // Replace occurrences of "Location" or "location" with "suburb_name"
                $content = str_replace(['[Location]', '[location]'], $suburbName, $content);
    ?>
                <section class="sidepage_hero">
                    <div class="container">
                        <div class="center_title_sidebar">
                            <div class="banner-text">';
                                <?php echo $content; ?>
                            </div>
                        </div>
                        <div class="background-shadow"></div>
                        <img class="hero_img_background" src="<?php echo $image['url']?>" alt="<?php echo $image['alt']?>">
                    </div>
                </section>
    <?php
            endwhile;
        endif;
    ?>

    <?php if( have_rows('repeater_zigzag','option') ): ?>
        <?php while( have_rows('repeater_zigzag','option') ): the_row(); 
            $image = get_sub_field('image');
            $video = get_sub_field('video');
            $link = get_sub_field('link');
            $order = get_sub_field('order');
            $bgColour = get_sub_field('bg_colour');
            $padding = get_sub_field('padding');
            
            $content = get_sub_field('content');
            // Replace occurrences of "Suburb" or "suburb" with "suburb_name"
            $content = str_replace(['[Location]', '[location]'], $suburbName, $content);
        ?>
            <section class="repeater_zigzag d-flex_newcss justify-center_newcss <?php if($padding){echo 'blocks-padding';} ?>" style="background-color: <?php echo $bgColour; ?>">
                <div class="repeater_zigzag_container container" <?php if(!$padding){echo 'style="padding:0"';} ?>>
                    <div class="d-flex_newcss fd-column-r_mb vthz-center gap_3 <?php echo $order ?>">
                        <div class="flex-1">
                            <div class="front-zig zig_content">
                                <?php echo $content ?>
                            </div>
                            <?php
                                if (!empty($link) && isset($link['url']) && isset($link['title'])) {
                                    ?>
                                    <a href="<?php echo esc_url($link['url']); ?>" class="cta_button">
                                        <?php echo esc_html($link['title']); ?>
                                    </a>
                                    <?php
                                }
                            ?>
                        </div>
                        <?php if ($order !== 'order-center'): ?>
                            <div class="front-zag flex-1 img_wrapper_repeater_zigzag">
                                <?php if ($video): ?>
                                    <div class="video-container">
                                        <video video controls muted loop preload="none" class="lazyVideo w-100_newcss" src="<?php echo $video['url']; ?>"></video>
                                    </div>
                                <?php elseif($image): ?>
                                    <img loading="lazy" class="w-100_newcss img_wrapper_repeater_zigzag_imgtag" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </section>
        <?php endwhile; ?>
    <?php endif; ?>

    <script>
      document.addEventListener("DOMContentLoaded", function() {
        var lazyVideos = document.getElementsByClassName("lazyVideo");
        var options = {
          rootMargin: "50px 0px", // Adjust the rootMargin based on your layout
          threshold: 0.01 // Lower threshold to trigger intersection when more of the video is visible
        };
        var observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.play();
              observer.unobserve(entry.target);
            }
          });
        }, options);
        for (var i = 0; i < lazyVideos.length; i++) {
          observer.observe(lazyVideos[i]);
        }
      });
    </script>
    
    <?php 
        if (have_rows('text_centered','option')) :
            while (have_rows('text_centered','option')) : the_row();
                $text_centered_image = get_sub_field('image');
                $contentCard = get_sub_field('content_card');
                $button_centered_image = get_sub_field('button');
                $bgcolour = get_sub_field('background_color');
            endwhile;
        endif;
        
        $content = str_replace(['[Location]', '[location]'], $suburbName, $contentCard);
    ?>
    <section class="text_centered d-flex_newcss justify-center_newcss blocks-padding" >
        <div class="container">
            <div class="flex-d-column_mb justify-space-around gap_1">
                <div class="front-card_no-padding b-radius-1">
                    <?php if($text_centered_image): ?>
                        <div class="centered-block_img">
                            <img loading="lazy" class="w-100_newcss b-radius-1" alt="<?php echo $text_centered_image['alt']; ?>" src="<?php echo $text_centered_image['url']; ?>">
                        </div>
                    <?php endif; ?>
                    <div style="background:<?php echo $bgcolour ?>" class="text_centered_card fc-5 py-2">
                        <div>
                            <?php echo $content; ?>
                        </div>
                    <?php if($button_centered_image): ?>
                        <div class="d-flex_newcss justify-center_newcss">
                            <a class="cta_button" href="<?php echo $button_centered_image['url']; ?>">
                                <?php echo $button_centered_image['title']; ?>
                            </a>
                        </div>
                    <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php $use_global_testimonial = get_sub_field('use_global_testimonial');?>
    <?php $howManySlidesTestimonial = get_sub_field('slide_number'); ?>
    
    <?php if ($use_global_testimonial && in_array('use_global', $use_global_testimonial)): ?>
        <?php if (have_rows('testimonial_slider', 'option')) :
            $slide_counter = 0;
        ?>
                <section class="container d-flex_newcss flex-column_mb blocks-padding">
                    <div class="testimonial_card flex-1 col-6_newcss col-12_mb">
                        <div style="display: flex;justify-content: center;">
                            <svg width="136" height="24" viewBox="0 0 68 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.294 3.88818L22.0028 3.83968L20.6927 0.466875C20.4401 -0.155625 19.5586 -0.155625 19.3073 0.466875L17.9972 3.83968L14.706 3.88818C14.0248 3.92778 13.748 4.78368 14.2761 5.21358L16.9448 7.52768L16.0352 10.6875C15.8566 11.3368 16.5595 11.8726 17.1387 11.5281L20 9.96288L22.8613 11.5269C23.4405 11.8713 24.1433 11.3355 23.9648 10.6862L23.0552 7.52637L25.7239 5.21238C26.252 4.78248 25.9752 3.92648 25.294 3.88818Z" fill="#FBBC05"/><path d="M53.294 3.88818L50.003 3.83968L48.693 0.466875C48.44 -0.155625 47.559 -0.155625 47.307 0.466875L45.997 3.83968L42.706 3.88818C42.025 3.92778 41.748 4.78368 42.276 5.21358L44.945 7.52768L44.035 10.6875C43.857 11.3368 44.56 11.8726 45.139 11.5281L48 9.96288L50.861 11.5269C51.44 11.8713 52.143 11.3355 51.965 10.6862L51.055 7.52637L53.724 5.21238C54.252 4.78248 53.975 3.92648 53.294 3.88818Z" fill="#FBBC05"/><path d="M11.294 3.88818L8.00279 3.83968L6.69269 0.466875C6.44009 -0.155625 5.55859 -0.155625 5.30729 0.466875L3.99719 3.83968L0.70599 3.88818C0.0247896 3.92778 -0.252011 4.78368 0.276089 5.21358L2.94479 7.52768L2.03519 10.6875C1.85659 11.3368 2.55949 11.8726 3.13869 11.5281L5.99999 9.96288L8.86129 11.5269C9.44049 11.8713 10.1433 11.3355 9.96479 10.6862L9.05519 7.52637L11.7239 5.21238C12.252 4.78248 11.9752 3.92648 11.294 3.88818Z" fill="#FBBC05"/><path d="M39.294 3.88818L36.003 3.83968L34.693 0.466875C34.44 -0.155625 33.5586 -0.155625 33.3073 0.466875L31.9972 3.83968L28.706 3.88818C28.0248 3.92778 27.748 4.78368 28.2761 5.21358L30.9448 7.52768L30.0352 10.6875C29.8566 11.3368 30.5595 11.8726 31.1387 11.5281L34 9.96288L36.861 11.5269C37.44 11.8713 38.143 11.3355 37.965 10.6862L37.055 7.52637L39.724 5.21238C40.252 4.78248 39.975 3.92648 39.294 3.88818Z" fill="#FBBC05"/><path d="M67.294 3.88818L64.003 3.83968L62.693 0.466875C62.44 -0.155625 61.559 -0.155625 61.307 0.466875L59.997 3.83968L56.706 3.88818C56.025 3.92778 55.748 4.78368 56.276 5.21358L58.945 7.52768L58.035 10.6875C57.857 11.3368 58.56 11.8726 59.139 11.5281L62 9.96288L64.861 11.5269C65.44 11.8713 66.143 11.3355 65.965 10.6862L65.055 7.52637L67.724 5.21238C68.252 4.78248 67.975 3.92648 67.294 3.88818Z" fill="#FBBC05"/>
                            </svg>
                        </div>
                        <div id="intro" class="testimonial-carousel slider glide glide--ltr glide--carousel glide--swipeable">
                            <div class="slider__track glide__track" data-glide-el="track">
                                <ul class="slider__slides glide__slides">
                                    <?php while (have_rows('testimonial_slider', 'option')) : the_row();
                                        $quote = get_sub_field('quote');
                                        $name = get_sub_field('name');
                                    ?>
                                        <li class="testimonials_slider__frame glide__slide <?php echo $slide_counter; ?>">
                                            <div class="testimonials_slider-wrapper">
                                                <p><?php echo $quote  ?></p>
                                                <p class="quote_name">
                                                    <?php echo $name  ?>
                                                </p>
                                            </div>
                                        </li>
                                    <?php 
                                        $slide_counter++; // Increment slide number
                                        endwhile; 
                                    ?>
                                </ul>
                            </div>
        
                            <div class="glide__bullets_testimonial" data-glide-el="controls[nav]">
                                <?php for ($i = 0; $i < $slide_counter; $i++) : ?>
                                    <button class="glide__bullet" data-glide-dir="=<?php echo $i; ?>" aria-label="bullet"></button>
                                <?php endfor; ?>
                            </div>
                        </div>
                    </div>
                </section>
        <?php endif; ?>
    <?php else: ?>
        <?php if (have_rows('repeater_testimonial')):
            $slide_counter = 0;
        ?>
                <section class="container d-flex_newcss flex-column_mb blocks-padding">
                    <div class="testimonial_card flex-1 col-6_newcss col-12_mb">
                        <div style="display: flex;justify-content: center;">
                            <svg width="136" height="24" viewBox="0 0 68 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.294 3.88818L22.0028 3.83968L20.6927 0.466875C20.4401 -0.155625 19.5586 -0.155625 19.3073 0.466875L17.9972 3.83968L14.706 3.88818C14.0248 3.92778 13.748 4.78368 14.2761 5.21358L16.9448 7.52768L16.0352 10.6875C15.8566 11.3368 16.5595 11.8726 17.1387 11.5281L20 9.96288L22.8613 11.5269C23.4405 11.8713 24.1433 11.3355 23.9648 10.6862L23.0552 7.52637L25.7239 5.21238C26.252 4.78248 25.9752 3.92648 25.294 3.88818Z" fill="#FBBC05"/><path d="M53.294 3.88818L50.003 3.83968L48.693 0.466875C48.44 -0.155625 47.559 -0.155625 47.307 0.466875L45.997 3.83968L42.706 3.88818C42.025 3.92778 41.748 4.78368 42.276 5.21358L44.945 7.52768L44.035 10.6875C43.857 11.3368 44.56 11.8726 45.139 11.5281L48 9.96288L50.861 11.5269C51.44 11.8713 52.143 11.3355 51.965 10.6862L51.055 7.52637L53.724 5.21238C54.252 4.78248 53.975 3.92648 53.294 3.88818Z" fill="#FBBC05"/><path d="M11.294 3.88818L8.00279 3.83968L6.69269 0.466875C6.44009 -0.155625 5.55859 -0.155625 5.30729 0.466875L3.99719 3.83968L0.70599 3.88818C0.0247896 3.92778 -0.252011 4.78368 0.276089 5.21358L2.94479 7.52768L2.03519 10.6875C1.85659 11.3368 2.55949 11.8726 3.13869 11.5281L5.99999 9.96288L8.86129 11.5269C9.44049 11.8713 10.1433 11.3355 9.96479 10.6862L9.05519 7.52637L11.7239 5.21238C12.252 4.78248 11.9752 3.92648 11.294 3.88818Z" fill="#FBBC05"/><path d="M39.294 3.88818L36.003 3.83968L34.693 0.466875C34.44 -0.155625 33.5586 -0.155625 33.3073 0.466875L31.9972 3.83968L28.706 3.88818C28.0248 3.92778 27.748 4.78368 28.2761 5.21358L30.9448 7.52768L30.0352 10.6875C29.8566 11.3368 30.5595 11.8726 31.1387 11.5281L34 9.96288L36.861 11.5269C37.44 11.8713 38.143 11.3355 37.965 10.6862L37.055 7.52637L39.724 5.21238C40.252 4.78248 39.975 3.92648 39.294 3.88818Z" fill="#FBBC05"/><path d="M67.294 3.88818L64.003 3.83968L62.693 0.466875C62.44 -0.155625 61.559 -0.155625 61.307 0.466875L59.997 3.83968L56.706 3.88818C56.025 3.92778 55.748 4.78368 56.276 5.21358L58.945 7.52768L58.035 10.6875C57.857 11.3368 58.56 11.8726 59.139 11.5281L62 9.96288L64.861 11.5269C65.44 11.8713 66.143 11.3355 65.965 10.6862L65.055 7.52637L67.724 5.21238C68.252 4.78248 67.975 3.92648 67.294 3.88818Z" fill="#FBBC05"/>
                            </svg>
                        </div>
                        <div id="intro" class="testimonial-carousel slider glide glide--ltr glide--carousel glide--swipeable">
                            <div class="slider__track glide__track" data-glide-el="track">
                                <ul class="slider__slides glide__slides">
                                    <?php while (have_rows('repeater_testimonial')) : the_row();
                                        $quote = get_sub_field('quote');
                                        $name = get_sub_field('name');
                                    ?>
                                        <li class="testimonials_slider__frame glide__slide <?php echo $slide_counter; ?>">
                                            <div class="testimonials_slider-wrapper">
                                                <p><?php echo $quote  ?></p>
                                                <p class="quote_name">
                                                    <?php echo $name  ?>
                                                </p>
                                            </div>
                                        </li>
                                    <?php 
                                        $slide_counter++; // Increment slide number
                                        endwhile; 
                                    ?>
                                </ul>
                            </div>
        
                            <div class="glide__bullets_testimonial" data-glide-el="controls[nav]">
                                <?php for ($i = 0; $i < $slide_counter; $i++) : ?>
                                    <button class="glide__bullet" data-glide-dir="=<?php echo $i; ?>" aria-label="bullet"></button>
                                <?php endfor; ?>
                            </div>
                        </div>
                    </div>
                </section>
        <?php endif; ?>
    <?php endif; ?>

<?php get_footer(); ?>
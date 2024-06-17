<?php
/* Template Name: Thank You new 1 */

get_header();

get_template_part( 'parts/navigation' );

    if (have_posts()):
        while (have_posts()) : the_post();	?>

            <section>
                <style>
                    .grid-links{
                        display: flex;
                        justify-content: space-between; 
                    }
                    .grid-links a{
                        color:var(--main-colour)!important;
                    }
                    @media(max-width:1100px){
                        .grid-links{flex-direction: column;}
                    }
                    body{
                        background:#ffffff!important;
                        font-family: system-ui;
                    }
                    body h2, body h3, body h3, body h4, body h5, body h6{
                        color: #000;
                        font-weight: 800;
                        margin: 2rem 0 1rem 0;
                        line-height: 1;
                        margin: 0;
                    }
                    body h2{
                        font-size: 2.5rem;
                    }
                    body h3{
                        font-size: 1.6rem;
                    }
                    body h4{
                        font-size: 1.4rem;
                    }
                    body h5{
                        font-size: 1.3rem;
                    }
                    body h6{
                        font-size: 1.2rem;
                    }
                    @media (max-width:1100px){
                        body h2{
                            font-size: 2rem;
                        }
                        body h3{
                            font-size: 1.4rem;
                        }
                        body h4{
                            font-size: 1.2rem;
                        }
                        body h5{
                            font-size: 1.1rem;
                        }
                        body h6{
                            font-size: 1.1rem;
                        }
                    }
                    .site-main > * {
                        margin-top: 0!important;
                        margin-bottom: 0!important;
                    }
                    
                    ::selection {
                      background-color: var(--main-colour);
                      color: #fff;
                    }
                    
                    input::selection,
                    textarea::selection,
                    input::-moz-selection,
                    textarea::-moz-selection {
                      background-color: var(--main-colour);
                      color: #fff; /
                    }
        
                    .blocks-padding{
                        padding: 1.5rem 0rem;
                    }
        
                    .banner-img{
                        position: absolute;
                        margin-right: -60rem;
                    }
                    .text-white p,.text-white h1,.text-white h2,.text-white h3,.text-white h4,.text-white h5,.text-white h6{
                        color: #fff;
                    }
                    .mainh1{
                        font-size: 3rem;
                        color: #ffffff!important;
                        font-weight: bold;
                        text-shadow: 0 0 5px #32327c, 0 0 5px #32327c, 0 0 5px #32327c, 0 0 5px #32327c, 0 0 5px #32327c;
                    }
                    .suburb-banner-section {
                        justify-content: center;
                    }
        
                    /* new */
                    .d-block{
                        display:block;
                    }
                    .d-flex_newcss{
                        display:flex;
                    }
                    .d-grid_newcss{
                        display: grid;
                    }
                    .col-6_newcss{
                        width:50%;
                    }
                    .front-img {
                        position: relative;
                    }
                    .img__thumb {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .front-zag{
                        display:flex;
                        flex-direction: column;
                        justify-content: center;
                    }
        
                    .fd-column{
                        flex-direction:column;
                    }
                    .container{
                        max-width: 1300px;
                    }
                    .justify-center_newcss{
                        justify-content: center;
                    }
                    .align_center_blocks{
                        align-items: center;
                    }
                    .vthz-center{
                        justify-content: center;
                        align-items: center;
                    }
                    .gap_1{
                        gap: 1rem;
                    }
                    .gap_3{
                        gap: 3rem;
                    }
                    .bg-white{
                        background-color: #fff;
                    }

                    .headings_newcss{
                        font-size: 3rem;
                    }
                    .headings_small_newcss{
                        font-size: 1.6rem;
                    }
                    .w-100_newcss{
                        width:100%;
                    }
                    .flex-1{
                        flex: 1;
                    }
                    .justify-space-around{
                        justify-content: space-around;
                    }
                    .b-radius-1{
                        border-radius:1rem;
                    }
                    .py-2{
                        padding: 2rem;
                    }

                    .mb_3{
                        margin-bottom: 3rem!important;
                    }
                    
                    .text-center{
                        text-align:center;
                    }
                    .order-left{
                        flex-direction: row-reverse;
                    }
                    .order-right{
                        flex-direction: row;
                    }
                    .centered-block_img{
                        max-height: 10rem;
                        overflow: hidden;
                    }
                    @media(max-width: 1600px){
                        .banner-img{
                            margin-right: -80rem;
                        }
                    }
                    @media(max-width:1100px){
                        .blocks-padding{
                            padding: 0rem;
                        } 
                        .row_newcss{
                            flex-direction: column;
                        }
                        .fd-column-r_mb{
                            flex-direction:column-reverse;
                        }
                        .flex-d-column_mb{
                            flex-direction: column;
                        }
                        .headings_newcss{
                            font-size:2rem;
                        }
                        .front-hero{
                            margin-bottom: unset!important;
                            padding-top: unset!important;
                        }
                        .banner-img{
                            position: unset;
                            margin-right: unset;
                        }
                        #colophon .footer-form-section-wrap{
                            margin: -50px auto 0;
                        }
                        .order-left{
                            flex-direction: column;
                        }
                        .order-right{
                            flex-direction: column;
                        }
                        .break-anywhere{
                            overflow-wrap: anywhere;
                        }
                    }
                </style>
                <div class=""
                    <h1>
                        Thank You for contacting us
                    </h1>
                <article class="main-article">
                <?php 
                    $has_glide = false;
                        if( have_rows('blocks') ): 
                            while( have_rows('blocks') ): the_row();
                                if(get_row_layout() == 'testimonial_slider'):
                                    $has_glide = true;
                                elseif(get_row_layout() == 'carousel'):
                                    $has_glide = true;
                                endif;
                            endwhile;
                        endif;
                    ?>

                    <?php if($has_glide): ?>
                        <script src="<?php echo esc_url( get_template_directory_uri() . '/blocks/carousel-assets/carousel.js' ); ?>"></script>
                    <?php endif;?>

                    <?php
                        if( have_rows('blocks') ): 
                            while( have_rows('blocks') ): the_row();
                                if(get_row_layout() == 'page_banner'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'homepage_banner'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'grid_images'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'grid_cards'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'grid_icon_cards'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'stylized_zigzag'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'separated_zigzag'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'repeater_zigzag'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'faq_blocks'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'text_centered_card'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'text_centered'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'two_cards'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'content_sidebar'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'testimonial_slider'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'carousel'):
                                    include 'blocks/' . get_row_layout() . '.php';
                                endif;
                            endwhile;
                        endif;
                    ?>

                    <script>
                        document.addEventListener('DOMContentLoaded', function() {
                            <?php
                                $carouselConfig = [
                                    'testimonial' => isset($howManySlidesTestimonial) ? $howManySlidesTestimonial : 1,
                                    'carousel' => isset($howManySlidesCarousel) ? $howManySlidesCarousel : 1,
                                ];
                            ?>
                            const carouselConfig = <?php echo json_encode($carouselConfig); ?>;
                            const sliders = document.querySelectorAll('.glide');
                            sliders.forEach(item => {
                                let perView = 1;

                                if (item.classList.contains('testimonial-carousel')) {
                                    perView = carouselConfig.testimonial;
                                } else if (item.classList.contains('main-carousel')) {
                                    perView = carouselConfig.carousel;
                                }

                                const conf = {
                                    type: 'carousel',
                                    focusAt: 'center',
                                    perView: perView,
                                    animationDuration: 300,
                                    autoplay: false,
                                    hoverpause: true,
                                    breakpoints: {
                                        768: {
                                            perView: 1
                                        }
                                    }
                                };

                                new Glide(item, conf).mount();
                            });
                        });
                    </script>
                </article>
            </section>
            <!-- Event snippet for Quote Form conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-10987189108/7dnRCKGqjN8DEPTmjPco'});
</script>
<?php
        endwhile;
    endif;
?>

<?php get_footer(); ?>
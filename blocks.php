<?php
/* Template Name: Blocks */

get_header();

get_template_part( 'parts/navigation' );

    if (have_posts()):
        while (have_posts()) : the_post();	?>

            <section>
                <style>
                   <?php 
                        $websitePalette = get_field('website_palette','option');
                        if($websitePalette):
                    ?>
                        :root{
                        --main_colour: <?php echo $websitePalette['main_colour'] ?>;
                        --main_colour_darker: <?php echo $websitePalette['main_colour_darker'] ?>;
                        --secondary_colour: <?php echo $websitePalette['secondary_colour'] ?>;
                        --background_colour: <?php echo $websitePalette['background_colour'] ?>;
                        --font_gradient_left: <?php echo $websitePalette['font_gradient_colour_1'] ?>;
                        --font_gradient_right: <?php echo $websitePalette['font_gradient_colour_2'] ?>;
                        --white_tone:<?php echo $websitePalette['white_tone'] ?>;
                        --white_tone_darker: <?php echo $websitePalette['white_tone_darker'] ?>;
                        --black_tone: <?php echo $websitePalette['black_tone'] ?>;
                        --grey_tone: <?php echo $websitePalette['grey_tone'] ?>;
                        --light_grey_tone: <?php echo $websitePalette['light_grey_tone'] ?>;
                        }
                    <?php endif;?>
            
                    .grid-links{
                        display: flex;
                        justify-content: space-between; 
                    }
                    .grid-links a{
                        color:var(--main_colour)!important;
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
                      background-color: var(--main_colour);
                      color: #fff;
                    }
                    
                    input::selection,
                    textarea::selection,
                    input::-moz-selection,
                    textarea::-moz-selection {
                      background-color: var(--main_colour);
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
                    .front-images-2 {
                        flex: 0 0 calc(50% - (5rem * 2) / 3);
                    }
                    .front-images-3 {
                        flex: 0 0 calc(33.33% - (5rem * 3) / 4);
                    }
                    .front-images-4 {
                        flex: 0 0 calc(25% - (5rem * 4) / 5);
                    }
                    .front-images-5 {
                        flex: 0 0 calc(20% - (5rem * 5) / 5);
                    }
                    .front-images-6 {
                        flex: 0 0 calc(16.6% - (5rem * 6) / 5);
                    }
                    @media(max-width: 1600px){
                        .banner-img{
                            margin-right: -80rem;
                        }
                    }
                    @media(max-width:1100px){
                        .front-images-2,.front-images-3,.front-images-4,.front-images-5,.front-images-6 {
                            flex: unset;
                        }
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
                    
                <article class="main-article">
                    <?php 
                        $has_glide = false;
                        
                        // Dynamically get block layouts from the 'blocks' directory
                        $block_directory = get_template_directory() . '/blocks';
                        $block_files = glob($block_directory . '/*.php');

                        $block_layouts = array_map(function($file) {
                            return basename($file, '.php');
                        }, $block_files);

                        if (have_rows('blocks')): 
                            while (have_rows('blocks')): the_row();
                                $layout = get_row_layout();
                                if (in_array($layout, ['testimonial_slider', 'carousel'])) {
                                    $has_glide = true;
                                }

                                if (in_array($layout, $block_layouts)) {
                                    include $block_directory . '/' . $layout . '.php';
                                }
                            endwhile;
                        endif;
                    ?>

                    <?php if ($has_glide): ?>
                        <script src="<?php echo esc_url(get_template_directory_uri() . '/blocks/carousel-assets/carousel.js'); ?>"></script>
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
                    <?php endif; ?>
                </article>
            </section>
<?php
        endwhile;
    endif;
?>
<?php get_footer(); ?>

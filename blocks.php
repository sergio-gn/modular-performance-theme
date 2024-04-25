<?php
/* Template Name: Blocks */

get_header();
    if (have_posts()):
        while (have_posts()) : the_post();	?>

            <section class="blocks-template">
                <style>
                    :root{
                        --main-colour: #ea6f5b;
                        --secondary-colour: #7d89aa;
                        --background-colour: #21242f;
                    }
                    .blocks-template{
                        margin-top: 6rem;
                    }
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
                    }
                    body h2, body h3, body h3, body h4, body h5, body h6{
                        color: #000;
                        font-weight: 800;
                            margin: 2rem 0 1rem 0;
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
                        padding: 3rem 0rem;
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
                    .container_newcss{
                        max-width: 1300px;
                    }
                    .justify-center_newcss{
                        justify-content: center;
                    }
                    .align-center_newcss{
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
                    .cta_button_newcss {
                        background: var(--main-colour) !important;
                        border-radius: 4px;
                        padding: 1rem 2rem;
                        color: #fff !important;
                        font-size: 16px;
                        text-align: center;
                        text-decoration: none;
                    }
                    .w-100_newcss{
                        width:100%;
                    }
                    .flex-1{
                        flex: 1;
                    }
        
                    .front-two_cards{
                        margin-top: -5rem;
                    }
                    .justify-space-around{
                        justify-content: space-around;
                    }
                    .front-two_cards_card{
                        width: 35rem;
                        justify-content: space-between;
                        display: flex;
                        flex-direction: column;
                        overflow-wrap: break-word;
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
                        .container_newcss{
                            margin: 0 1rem;
                        }
                        .front-hero{
                            margin-bottom: unset!important;
                            padding-top: unset!important;
                        }
                        .banner-img{
                            position: unset;
                            margin-right: unset;
                        }
                        .front-two_cards_card{
                            width: 100%;
                        }
                        .front-two_cards{
                            margin-top: unset;
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
                        if( have_rows('blocks') ): 
                            while( have_rows('blocks') ): the_row();
                                if(get_row_layout() == 'page_banner'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'homepage_banner'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'grid_images'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'grid_cards'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'separated_zigzag'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'repeater_zigzag'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'testimonial_slider'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'faq_blocks'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'text_centered'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'content_sidebar'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                elseif(get_row_layout() == 'carousel'):
                                    include 'blocks-pure/' . get_row_layout() . '.php';
                                endif;
                            endwhile;
                        endif; 
                    ?>
                </article>
            </section>
        <?php 
            if( have_rows('blocks') ): 
                while( have_rows('blocks') ): the_row();
                    if(get_row_layout() == 'carousel'):?>
                        <script src="/carousel-assets/block-carousel.js"></script>
                        <script>
                            document.addEventListener('DOMContentLoaded', function() {
                                const sliders = document.querySelectorAll('.glide');
                                const conf = {
                                    type: 'carousel',
                                    focusAt: 'center',
                                    perView: 3,
                                    animationDuration: 300,
                                    autoplay: false,
                                    hoverpause: true,
                                };
                            
                                sliders.forEach(item => {
                                    new Glide(item, conf).mount();
                                });
                            });
                        </script>
                    <?php 
                    endif;
                endwhile;
            endif;
        ?>
<?php   endwhile;
    endif;
?>


<?php
get_footer();
?>

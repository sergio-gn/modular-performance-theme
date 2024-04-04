<?php
/*
Template Name: Blocks
Description: A custom template for my specific needs.
*/
?>
<?php get_header();?>
<body style="margin:0">
    <?php get_template_part( 'new-website/navigation' ); ?>
    <?php get_template_part( 'new-website/slider-cta' ); ?>
    <?php get_template_part( 'new-website/google-widget' ); ?>
    
    <style>
        .grid-links{display: flex;justify-content: space-between;}.grid-links a{color:#fe9eb9!important}@media(max-width:1100px){.grid-links{flex-direction: column;}}
            body{
                font-family: system-ui;
                background:#ffffff!important;
            }
            body h2, body h3, body h3, body h4, body h5, body h6{
                color: #000;
                font-weight: 800;
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
            .site-main > * {
                margin-top: 0!important;
                margin-bottom: 0!important;
            }
            /* Changing the text selection color */
            ::selection {
              background-color: #d42127; /* Change this to the desired selection color */
              color: #fff; /* Change this to the desired text color within selection */
            }
            
            /* Changing the caret color */
            /* For WebKit-based browsers */
            input::selection,
            textarea::selection,
            input::-moz-selection,
            textarea::-moz-selection {
              background-color: #d42127; /* Change this to the desired selection color */
              color: #fff; /* Change this to the desired text color within selection */
            }

            .blocks-padding{
                padding: 3rem 0rem;
            }

            .banner-img{
                position: absolute;
                margin-right: -60rem;
            }
            .text-white p, h1, h2, h3, h4, h5, h6{color: #fff;}
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
            .text_grid{
                max-width: 20rem;
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
            .headings_newcss, .headings_small_newcss{
                color: #32327c;
                font-weight: bold;
            }
            .headings_newcss{
                font-size: 3rem;
            }
            .headings_small_newcss{
                font-size: 1.6rem;
            }
            .cta_button_newcss {
                background: #ff0000 !important;
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
            .front-card{
                background: #fff;
                padding: 1rem;
                box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.5);
            }
            .front-card_no-padding{
                background: #fff;
                box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
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
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'two_cards'):
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'grid_images'):
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'grid_cards'):
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'separated_zigzag'):
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'repeater_zigzag'):
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'testimonial_slider'):
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'faq_blocks'):
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'text_centered'):
                        include 'blocks/' . get_row_layout() . '.php';
                    elseif(get_row_layout() == 'content_sidebar'):
                        include 'blocks/' . get_row_layout() . '.php';
                    endif;
                endwhile;
            endif; 
        ?>
    </article>

    <?php get_footer();?>
</body>
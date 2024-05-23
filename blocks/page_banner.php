<style>
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
    }
    .center-title{
    	position:relative;
    	top: 3rem;
        z-index:2;
    }
    .banner-text {
        width: 40vw;
    }
    .background-shadow{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        z-index:1;
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
</style>
<?php if (have_rows('page_banner')) :
    while (have_rows('page_banner')) : the_row();
        $content = get_sub_field('content');
        $link = get_sub_field('link');
        $image = get_sub_field('image');
?>
        <section class="<?php echo is_front_page() ? 'homepage_hero' : 'sidepage_hero'; ?>">
            <div class="container">
                <div class="center-title">
                    <div class="banner-text">
                        <?php echo $content ?>
                    </div>
                </div>
                <div class="background-shadow">
                </div>
                <img class="hero_img_background" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
            </div>    
        </section>
<?php
    endwhile;
endif;
?>

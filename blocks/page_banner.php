<style>
    .front-hero{
        height: 40vh;
        position: relative;
        background-position: center;
    }
    .center-title{
    	position:absolute;
    	top: 0;
        bottom:0;
        margin: auto;
        height: fit-content;
        z-index:1;
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
        background: #00000057;
    }
    .main-title_newcss{
        background: #d42127;
        border-right: 4px solid #fff;
        border-top: 4px solid #fff;
        border-bottom: 4px solid #fff;
        font-size:4rem;
        padding: 1rem 0 1rem 3rem;
        line-height: 1;
    }
</style>
<?php if (have_rows('page_banner')) :
    while (have_rows('page_banner')) : the_row();
        $description = get_sub_field('description');
        $link = get_sub_field('link');
        $image = get_sub_field('image');
?>
        <div class="front-hero" style="background-image:url(<?php echo $image['url'];?>);">
            <div class="center-title">
                <div class="banner-text">
                    <h1 class="main-title_newcss">
                        <?php the_title(); ?>
                    </h1>
                </div>
            </div>
            <div class="background-shadow">
            </div>
        </div>
<?php
    endwhile;
endif;
?>

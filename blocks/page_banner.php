<style>
    .front-hero{
        margin-top: -6.5rem;
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
</style>
<?php if (have_rows('page_banner')) :
    while (have_rows('page_banner')) : the_row();
        $content = get_sub_field('content');
        $link = get_sub_field('link');
        $image = get_sub_field('image');
?>
        <div class="front-hero" style="height: <?php echo is_front_page() ? '100vh' : '50vh'; ?>; background-image: url(<?php echo $image['url']; ?>);">
            <div class="container">
                <div class="center-title">
                    <div class="banner-text">
                        <?php echo $content ?>
                    </div>
                </div>
                <div class="background-shadow">
                </div>
            </div>    
        </div>
<?php
    endwhile;
endif;
?>

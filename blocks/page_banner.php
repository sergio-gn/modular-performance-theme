<?php if (have_rows('page_banner')) :
    while (have_rows('page_banner')) : the_row();
        $content = get_sub_field('content');
        $link = get_sub_field('link');
        $image = get_sub_field('image');
        $bannerSize = get_sub_field('banner_size');
?>
        <section class="<?php echo $bannerSize ?> <?php echo is_front_page() ? 'homepage_hero' : 'sidepage_hero'; ?>">
            <div class="container">
                <div class="<?php echo is_front_page() ? 'center_title' : 'center_title_sidebar'; ?>">
                    <div class="banner-text">
                        <?php echo $content ?>
                    </div>
                </div>
                <img class="hero_img_background" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                <div class="background-shadow">
                </div>
            </div>    
        </section>
<?php
    endwhile;
endif;
?>

<?php
    $bgColour = get_sub_field('background_colour'); 
    $grid_text = get_sub_field('grid_text');
    $gridNumber = get_sub_field('grid_column_number');
?>

<section class="grid_images <?php echo $bgColour ?>">
    <?php if($grid_text):?>
        <div class="container">
            <?php echo $grid_text; ?>
        </div>
    <?php endif;?>

    <?php if( have_rows('grid_images') ): ?>
        <div class="d-flex_newcss justify-center_newcss">
            <div class="container">
                <div class="grid_square_images front-images-<?php echo $gridNumber; ?>">
                    <?php while( have_rows('grid_images') ): the_row(); 
                        $link = get_sub_field('link');
                        $image = get_sub_field('image');
                        $gridContent = get_sub_field('content');
                    ?>
                        <div class="grid-item">
                            <?php if (!empty($link) && isset($link['url'])):?>
                                <a href="<?php echo esc_url($link['url']); ?>">
                            <?php endif; ?>

                                <div class="front-grid-img-wrap width-<?php echo $image['width']?>">
                                    <img class="img__thumb" loading="lazy" src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>">
                                </div>
                                <?php if($gridContent):?>
                                    <div class="text_grid text-center">
                                        <?php echo $gridContent ?>
                                    </div>
                                <?php endif;?>

                            <?php if (!empty($link) && isset($link['url'])): ?>
                                </a>
                            <?php endif; ?>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    <?php endif; ?>
</section>

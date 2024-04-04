<?php 
    if (have_rows('text_centered')) :
        while (have_rows('text_centered')) : the_row();
            $text_centered_image = get_sub_field('image');
            $contentCard = get_sub_field('content_card');
            $button_centered_image = get_sub_field('button');
        endwhile;
    endif;
?>

<section class="text_centered d-flex_newcss justify-center_newcss blocks-padding">
    <div class="container_newcss">
        <div class="flex-d-column_mb justify-space-around gap_1">
            <div class="front-card_no-padding b-radius-1">
                <div class="centered-block_img">
                    <img loading="lazy" class="w-100_newcss b-radius-1" alt="<?php echo $text_centered_image['alt']; ?>" src="<?php echo $text_centered_image['url']; ?>">
                </div>
                <div class="fc-5 py-2">
                    <div>
                        <?php echo $contentCard; ?>
                    </div>
                    <div class="d-flex_newcss justify-center_newcss">
                        <a class="cta_button_newcss" href="<?php echo $button_centered_image['url']; ?>">
                            <?php echo $button_centered_image['title']; ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
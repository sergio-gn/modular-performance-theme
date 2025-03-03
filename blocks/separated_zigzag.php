<?php if (have_rows('separated_zigzag')) :
    while (have_rows('separated_zigzag')) : the_row();
        $content = get_sub_field('content');
        $link = get_sub_field('button');
        $image= get_sub_field('image');
        $order = get_sub_field('order');
        $bgcolour = get_sub_field('bg_colour');
?>
        <section style="background:<?php echo $bgcolour; ?>" class="separated_zigzag">
            <div class="d-flex_newcss fd-column-r_mb vthz-center gap_3 <?php echo $order ?>">
                <?php if(!empty($image)):?>
                    <div class="separated_zigzag_half separated_zigzag_half_img">
                        <img class="d-block" loading="lazy" src="<?php echo $image['url'];?>" alt="<?php echo $image['alt'];?>">
                    </div>
                <?php endif;?>
                <div class="separated_zigzag_half">
                    <div class="separated_zigzag_half_content">
                        <?php echo $content; ?>
                        <?php
                            if (!empty($link) && isset($link['url']) && isset($link['title'])) {
                                ?>
                                <a href="<?php echo esc_url($link['url']); ?>" class="cta_button">
                                    <?php echo esc_html($link['title']); ?>
                                </a>
                                <?php
                            }
                        ?>
                    </div>
                </div>
            </div>
        </section>
<?php
    endwhile;
endif;
?>
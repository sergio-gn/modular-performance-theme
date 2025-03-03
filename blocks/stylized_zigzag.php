<?php if (have_rows('stylized_zigzag')) :
    while (have_rows('stylized_zigzag')) : the_row();
        $content = get_sub_field('content');
        $link = get_sub_field('link');
        $image= get_sub_field('image');
        $video= get_sub_field('video');
        $bgcolour = get_sub_field('bg_colour');
?>
        <section class="stylized_zigzag d-flex_newcss justify-center_newcss" style="background:<?php echo $bgcolour; ?>">
            <div class="container">
                <div class="flex_stylized_zigzag d-flex_newcss justify-center_newcss fd-column-r_mb vthz-center">
                    <?php if(!empty($image)):?>
                        <div class="stylized_zigzag_img_div">
                            <img loading="lazy" class="stylized_zigzag_img w-100_newcss" src="<?php echo $image['url'];?>" alt="<?php echo $image['alt'];?>">
                        </div>
                    <?php elseif(!empty($video)):?>
                        <div class="stylized_zigzag_video_div">
                            <video loop playsinline controls
                                src="<?php echo esc_url( $video['url'] ); ?>"
                                data-mobile-mp4="<?php echo esc_url( $video['url'] ); ?>">
                            </video>
                        </div>
                    <?php endif;?>
                    <div <?php if(!empty($video)){ echo 'style="margin-left:unset"'; } ?>class="stylized_zigzag_content d-flex_newcss justify-center_newcss">
                        <div>
                            <?php echo $content; ?>
                        </div>
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

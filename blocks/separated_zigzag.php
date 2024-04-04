<style>
blocknote{
    border-color: #D42127;
    margin: 10px 0px 25px 35px;
    padding: 15px 0 15px 20px;
}
</style>
<?php if (have_rows('separated_zigzag')) :
    while (have_rows('separated_zigzag')) : the_row();
        $content = get_sub_field('content');
        $link = get_sub_field('link');
        $image= get_sub_field('image');
        $bgcolour = get_sub_field('bg_colour');
?>
        <section style="background:<?php echo $bgcolour; ?>" class="front-zigzag d-flex_newcss justify-center_newcss bg-white">
            <div class="container">
                <div class="d-flex_newcss justify-center_newcss fd-column-r_mb vthz-center gap_3">
                    <div class="flex-1 d-flex_newcss justify-center_newcss">
                        <div>
                            <?php echo $content; ?>
                        </div>
                        <?php
                            if (!empty($link) && isset($link['url']) && isset($link['title'])) {
                                ?>
                                <a href="<?php echo esc_url($link['url']); ?>" class="cta_button_newcss">
                                    <?php echo esc_html($link['title']); ?>
                                </a>
                                <?php
                            }
                        ?>
                    </div>
                    <?php if(!empty($image)):?>
                        <div class="flex-1">
                            <img loading="lazy" class="w-100_newcss" src="<?php echo $image['url'];?>" alt="<?php echo $image['alt'];?>">
                        </div>
                    <?php endif;?>
                </div>
            </div>
        </section>
<?php
    endwhile;
endif;
?>
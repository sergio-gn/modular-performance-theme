<style>
    blocknote{
        border-color: #D42127;
        margin: 10px 0px 25px 35px;
        padding: 15px 0 15px 20px;
    }
    .stylized_zigzag{
        padding: 3rem 0;
    }
    .stylized_zigzag p {
        font-size: 1rem;
        margin: 0;
    }
    .stylized_zigzag_img{
        border-radius: 1rem;
    }
    .stylized_zigzag_img_div{
        flex:2;
    }
    .stylized_zigzag_content{
        margin-left: -15rem;
        background: #fff;
        padding: 1.5rem;
        border-radius: 1rem;
        flex: 1.5;
    }
    .stylized_zigzag_content h1, .stylized_zigzag_content h2,.stylized_zigzag_content h3,.stylized_zigzag_content h4,.stylized_zigzag_content h5, .stylized_zigzag_content h6{
        margin: 0;
        font-size: 1.4rem;
        color: #5C5C5C;
        font-weight: 500;
    }
    .stylized_zigzag_content h1 strong, .stylized_zigzag_content h2 strong,.stylized_zigzag_content h3 strong,.stylized_zigzag_content h4 strong,.stylized_zigzag_content h5 strong, .stylized_zigzag_content h6 strong{
        font-size: 2.5rem;
        font-weight: 900;
        background: -webkit-linear-gradient(#30513A, #607466);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

</style>
<?php if (have_rows('stylized_zigzag')) :
    while (have_rows('stylized_zigzag')) : the_row();
        $content = get_sub_field('content');
        $link = get_sub_field('link');
        $image= get_sub_field('image');
        $bgcolour = get_sub_field('bg_colour');
?>
        <section style="background:<?php echo $bgcolour; ?>" class="stylized_zigzag d-flex_newcss justify-center_newcss bg-white">
            <div class="container">
                <div class="d-flex_newcss justify-center_newcss fd-column-r_mb vthz-center gap_3">
                    <?php if(!empty($image)):?>
                        <div class="stylized_zigzag_img_div">
                            <img loading="lazy" class="stylized_zigzag_img w-100_newcss" src="<?php echo $image['url'];?>" alt="<?php echo $image['alt'];?>">
                        </div>
                    <?php endif;?>
                    <div class="stylized_zigzag_content d-flex_newcss justify-center_newcss">
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
                </div>
            </div>
        </section>
<?php
    endwhile;
endif;
?>
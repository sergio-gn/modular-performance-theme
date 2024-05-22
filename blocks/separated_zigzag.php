<style>
    blocknote{
        border-color: #D42127;
        margin: 10px 0px 25px 35px;
        padding: 15px 0 15px 20px;
    }
    .separated_zigzag h1, .separated_zigzag h2, .separated_zigzag h3, .separated_zigzag h4, .separated_zigzag h5, .separated_zigzag h6 {
        font-size: 3rem;
        color: #5C5C5C;
    }

    .separated_zigzag h1 strong, .separated_zigzag h2 strong, .separated_zigzag h3 strong, .separated_zigzag h4 strong, .separated_zigzag h5 strong, .separated_zigzag h6 strong {
        font-size: 3rem;
        font-weight: 900;
        background: -webkit-linear-gradient(var(--main-colour), var(--main_colour_darker));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
    }
    .separated_zigzag p{
        font-size: 1rem;
        margin: 0;
        width: 30vw;
        padding: 1rem 0;
    }
    @media(max-width:1100px){
        .separated_zigzag img{
            width:100%;
        }
        .separated_zigzag p{
            width: 100%;
        }
    }
</style>
<?php if (have_rows('separated_zigzag')) :
    while (have_rows('separated_zigzag')) : the_row();
        $content = get_sub_field('content');
        $link = get_sub_field('button');
        $image= get_sub_field('image');
        $bgcolour = get_sub_field('bg_colour');
?>
        <section style="background:<?php echo $bgcolour; ?>" class="separated_zigzag d-flex_newcss">
            <div>
                <div class="d-flex_newcss fd-column-r_mb vthz-center gap_3">
                    <?php if(!empty($image)):?>
                        <div class="flex-1">
                            <img class="d-block" loading="lazy" src="<?php echo $image['url'];?>" alt="<?php echo $image['alt'];?>">
                        </div>
                    <?php endif;?>
                    <div class="flex-1">
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
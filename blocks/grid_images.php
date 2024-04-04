<style>
    .front-grid-img-wrap{
        position: relative;
        overflow: hidden;
        width: auto;
        border-radius: 2rem;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .front-grid-2{
        grid-template-columns: 1fr 1fr;
    }
    .front-grid-3{
        grid-template-columns: 1fr 1fr 1fr;
    }
    .front-grid-4{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .front-grid-5{
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .grid-square_images{
        display:flex;
        justify-content: center;
    }
    .width-250{
        width: 10.625rem;
    }
    @media(max-width:1100px){
        .front-grid_mb{
            grid-template-columns: 1fr;
        }
    }
</style>

<section class="blocks-padding">
    <div>
        <div class="container">
            <?php echo get_sub_field('grid_images_title')?>
        </div>
    </div>
    
    <?php $gridNumber = get_sub_field('grid_column_number');?>
    <?php if( have_rows('grid_images') ): ?>
        <div class="front-grid d-flex_newcss justify-center_newcss">
            <div class="container">
                <div class="front-grid-<?php echo $gridNumber; ?> front-grid_mb d-grid_newcss gap_1">
                    <?php while( have_rows('grid_images') ): the_row(); 
                        $link = get_sub_field('link');
                        $image = get_sub_field('image');
                        $gridContent = get_sub_field('grid_content');
                    ?>
                        <div class="grid-square_images">
                            <?php
                                if (!empty($link) && isset($link['url'])) {
                            ?>
                                    <a href="<?php echo esc_url($link['url']); ?>">
                            <?php
                                }
                            ?>
                                <div class="front-grid-img-wrap width-<?php echo $image['width']?>">
                                    <img class="img__thumb" loading="lazy" src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>">
                                </div>
                                <div class="text_grid text-center headings_small_newcss"><?php echo $gridContent ?></div>
                            <?php
                                if (!empty($link) && isset($link['url'])) {
                            ?>
                                </a>
                            <?php
                                }
                            ?>
                            </div>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    <?php endif; ?>
</section>
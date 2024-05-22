<style>
    .front-grid-img-wrap{
        position: relative;
        overflow: hidden;
        border-radius: 2rem;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .grid_square_images {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: stretch;
        align-content: flex-start;
        outline: 1px solid black;
        gap: 1rem;
    }

    .front-images-2 {
        flex: 0 0 calc(50% - (1rem * 2) / 3);
    }

    .front-images-3 {
        flex: 0 0 calc(33.33% - (1rem * 3) / 4);
    }

    .front-images-4 {
        flex: 0 0 calc(25% - (1rem * 4) / 5);
    }

    .front-images-5 {
        flex: 0 0 calc(20% - (1rem * 5) / 5);
    }

    .front-images-6 {
        flex: 0 0 calc(16.6% - (1rem * 6) / 5);
    }

    @media(max-width:1100px){
        .front-images_mb{
            flex: 0 0 1;
        }
    }
</style>

<section class="blocks-padding">
    <div>
        <div class="container">
            <?php echo get_sub_field('grid_images_title')?>
            <?php echo get_sub_field('grid_text')?>
        </div>
    </div>
    
    <?php $gridNumber = get_sub_field('grid_column_number');?>
    <?php if( have_rows('grid_images') ): ?>
        <div class="d-flex_newcss justify-center_newcss">
            <div class="container">
                <div class="grid_square_images front-images_mb">
                    <?php while( have_rows('grid_images') ): the_row(); 
                        $link = get_sub_field('link');
                        $image = get_sub_field('image');
                        $gridContent = get_sub_field('grid_content');
                    ?>
                        <div class="front-images-<?php echo $gridNumber; ?>">
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
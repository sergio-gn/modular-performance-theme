<section class="front-grid d-flex_newcss justify-center_newcss">
    <div class="container">
        <div class="grid_text">
            <?php echo get_sub_field('grid_text')?>
        </div>
        <?php $gridNumber = get_sub_field('grid_column_number');?>
        <?php if( have_rows('grid_images') ): ?>
            <div class="front-grid-<?php echo $gridNumber; ?> front-grid_mb d-grid_newcss gap_1">
                <?php $count = 0; ?>
                <?php while( have_rows('grid_images') ): the_row(); 
                    $link = get_sub_field('link');
                    $image = get_sub_field('image');
                    $gridContent = get_sub_field('content');
                    $gridTitle = get_sub_field('title');
                ?>
                    <div class="grid-square <?php if ($count >= 6) echo 'extra'; ?>" <?php if ($count >= 6) echo 'style="display:none;"'; ?>>
                        <?php if (!empty($link) && isset($link['url'])): ?>
                            <a href="<?php echo esc_url($link['url']); ?>">
                        <?php endif; ?>
                        <div class="d-flex_newcss justify-center_newcss align_center_blocks">
                            <?php if (!empty($image) && isset($image['url'])): ?>
                                <div class="front-grid_card-img-wrap">
                                    <img class="img__thumb" loading="lazy" src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>">
                                </div>
                            <?php endif; ?>
                        </div>
                        <div class="text_card text-center">
                            <?php echo $gridContent ?>
                        </div>
                        <?php if (!empty($link) && isset($link['url'])): ?>
                            </a>
                        <?php endif; ?>
                    </div>
                    <?php $count++; ?>
                <?php endwhile; ?>
                <!-- View More Button -->
            </div>
            <?php if ($count >= 6): ?>
            <div class="d-flex_newcss justify-center_newcss">
                <button class="view-more-button" onclick="toggleExtraGrid()">View More</button>
            </div>
            <?php endif; ?>
        </div>
    </section>
    <script>
        function toggleExtraGrid() {
            var extraGrid = document.querySelectorAll('.grid-square.extra');
            extraGrid.forEach(function(grid) {
                grid.style.display = (grid.style.display === 'none' || grid.style.display === '') ? 'block' : 'none';
            });
        }
    </script>


<?php endif; ?>

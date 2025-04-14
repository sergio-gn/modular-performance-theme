<?php if( have_rows('double_wysiwyg') ): ?>
    <?php while( have_rows('double_wysiwyg') ): the_row(); 
        $contentOne = get_sub_field('content_1');
        $contentTwo = get_sub_field('content_2');
        $order = get_sub_field('order');
        $bgColour = get_sub_field('bg_colour');
        $padding = get_sub_field('padding');
    ?>
        <section class="double_wysigywg <?php if($padding){echo 'blocks-padding';} ?> <?php echo $bgColour; ?>">
            <div class="container" <?php if(!$padding){echo 'style="padding:0"';} ?>>
                <div class="row_double_wysigywg <?php echo $order ?>">
                    <div class="flex-1">
                        <div class="front-zig zig_content">
                            <?php echo $contentOne ?>
                        </div>
                    </div>
                    <?php if ($order !== 'order-center'): ?>
                        <div class="flex-1 img_wrapper_repeater_zigzag">
                            <div class="front-zig zig_content">
                                <?php echo $contentTwo ?>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </section>
    <?php endwhile; ?>
<?php endif; ?>

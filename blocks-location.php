<?php
/* Template Name: Blocks Location */

get_header();

get_template_part( 'parts/navigation' );

// Start output buffering
ob_start();

    if (have_posts()):
        while (have_posts()) : the_post();	?>

                <article class="main-article">
                    <?php 
                        // Dynamically get block layouts from the 'blocks' directory
                        $block_directory = get_template_directory() . '/blocks';
                        $block_files = glob($block_directory . '/*.php');

                        $block_layouts = array_map(function($file) {
                            return basename($file, '.php');
                        }, $block_files);

                        if (have_rows('blocks')): 
                            while (have_rows('blocks')): the_row();
                                $layout = get_row_layout();

                                    // Check if the current layout requires the carousel script
                                    if (!$carousel_script_included && in_array($layout, ['testimonial_slider', 'carousel'])) {
                                        ?>
                                        <script src="<?php echo esc_url(get_template_directory_uri() . '/blocks/carousel-assets/carousel.js'); ?>"></script>
                                        <?php
                                        // Set the flag to true to prevent further inclusion
                                        $carousel_script_included = true;
                                    }

                                if (in_array($layout, $block_layouts)) {
                                    include $block_directory . '/' . $layout . '.php';
                                }
                            endwhile;
                        endif;
                    ?>
                </article>
<?php
        endwhile;
    endif;
?>

<?php 
// Get the content from the output buffer
$page_content = ob_get_clean();

// Get the page title
$page_title = get_the_title();

// Replace [suburb] and [Suburb] with the page title
$page_content = str_replace(['[suburb]', '[Suburb]'], $page_title, $page_content);

// Output the modified content
echo $page_content;

get_footer(); ?>
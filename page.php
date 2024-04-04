<?php
/**
 * The template for displaying all single posts
*/

get_header();
?>

<section>
    <div class="container" style="margin:5rem 0">
        <?php
            while ( have_posts() ) :
            	the_content();
            	get_template_part( 'template-parts/content/content-page' );
            
            	// If comments are open or there is at least one comment, load up the comment template.
            	if ( comments_open() || get_comments_number() ) {
            		comments_template();
            	}
            endwhile; // End of the loop.
        ?>
    </div>
</section>

<?php get_footer();
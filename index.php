<?php
/**
 * Blogs 
 **/
get_header();
get_template_part( 'parts/navigation' );
?>

<?php if ( is_home() && ! is_front_page() && ! empty( single_post_title( '', false ) ) ) : ?>
	<header class="container">
		<h1 class="page-title"><?php single_post_title(); ?></h1>
	</header><!-- .page-header -->
<?php endif; ?>

<?php
 // set up the arguments for the query to select the main post
 $args = array(
	 'post_type' => 'post',
	 'post_status' => 'publish',
	 'posts_per_page' => 20
 );

 // create a new WP_Query instance with the arguments
 $query = new WP_Query( $args );

 // start the loop
 if ( $query->have_posts() ) : 
	 while ( $query->have_posts() ) : $query->the_post(); 
 ?>
		 <article class="d-flex">
			<div class="container">
				<?php
					if (has_post_thumbnail()): ?>
						<a href="<?php the_permalink(); ?>">
							<div class="img-wrapper_first-post">
								<div class="post__thumbnail">
									<?php if (has_post_thumbnail()) :
										$thumbnail_id = get_post_thumbnail_id(); // Get the ID of the post thumbnail
										$thumbnail = wp_get_attachment_image($thumbnail_id, 'medium_large', false, array('class' => 'post__thumbnail')); // Get the HTML for the post thumbnail without lazy loading
										?>
										<?php echo $thumbnail; ?>
									<?php endif; ?>
								</div>
							</div>
						</a>
					<?php
					endif;
					?>

				<header class="post__header p-2" role="heading">
				<h2 class="fs-2">
					<a style="color: #000;" href="<?php the_permalink(); ?>">
					<?php the_title(); ?>
					</a>
				</h2>
				<p class="post__date"><time><?php echo human_time_diff(strtotime($post->post_date)) . ' ' . __('ago'); ?></time></p>
				<p class="fc-5">
					<?php 
					$excerpt = get_the_excerpt();
					$excerpt = wp_trim_words( $excerpt, 20, '...' );
					echo $excerpt;
					?>
				</p>
				</header>
			</div>
		 </article>
 <?php
	 endwhile;
 endif;

 // reset the query
 wp_reset_postdata();
get_footer();
?>

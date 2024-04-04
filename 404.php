<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */

get_header();
?>

	<div class="inner-banner-section-wrap">
		<?php if ( is_active_sidebar( '404-banner-content' ) ) : ?>
					<div id="custom-inner-banner" class="chw-widget-area widget-area" role="complementary">
					<?php dynamic_sidebar( '404-banner-content' ); ?>
					</div>
					<?php endif; ?>
		<?php echo do_shortcode('[breadcrumb]');?>
	</div>
	<div class="error-404 not-found default-max-width">
		<div class="page-content container">
			<h1 class="page-title"><?php echo  '4<span>0</span>4'; ?></h1>
			<p><?php esc_html_e( 'Hey there mate! Your lost treasure is not found here...', 'twentytwentyone' ); ?></p>
			<p><?php esc_html_e( 'Sorry! The page you are looking for wasn\'t found!', 'twentytwentyone' ); ?></p>
			<div class="smart-btn"><a class="404-btn" href ="<?php echo site_url(); ?> ">Home</a></div>
			
			
			<?php //get_search_form(); ?>
		</div><!-- .page-content -->
	</div><!-- .error-404 -->

<?php
get_footer();

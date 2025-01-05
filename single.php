<?php
/**
 * The template for displaying all single posts
*/

get_header();
get_template_part( 'parts/navigation' );
?>
<style>
    .main{
        font-family: system-ui;
    }
    .container_blog {
        width: 100%;
        padding: 2rem 1rem;
        margin-right: auto;
        margin-left: auto;
        box-sizing: border-box;
    }
    .container_blog_inner{
        gap: 5rem;
        justify-content: center;
        display: flex;
    }
    .mainpost{
        width: 75%;
    }
    .sidebar{
        width: 25%;
    }
    .sidebar_link{
        text-decoration: none;
        color: var(--main_colour);
    }
    .post__title{
        color: var(--main_colour);
        font-size: 2rem;
    }
    @media(orientation: portrait){
        .container_blog_inner{
            flex-direction: column;
        }
        .mainpost{
            width:100%;
        }
        .sidebar{
            width: 100%;
        }
    }
    @media (min-width: 576px) {
        .container_blog {
            max-width: 540px;
        }
    }
    @media (min-width: 768px) {
        .container_blog {
            max-width: 720px;
        }
    }
    @media (min-width: 992px) {
        .container_blog {
            max-width: 900px;
        }
    }
    @media (min-width: 1200px) {
        .container_blog {
            max-width: 1100px;
        }
    }
</style>
<main class="main mt-xl-3" role="main">
    <div class="container_blog">
        <div class="container_blog_inner">
            <div class="mainpost">
                <?php while ( have_posts() ) : the_post(); ?>
                    <article <?php post_class(); ?>>
                        <?php if (has_post_thumbnail()): ?>
                            <div class="featured-image-wrapper">
                                <?php the_post_thumbnail('full', ['class' => 'featured-image']); ?>
                            </div>
                        <?php endif; ?>
                        <header class="post__header" role="heading">
                            <h1 class="post__title"><?php the_title(); ?></h1>
                        </header>
                        <p class="post__date pb-1">
                            Date: <?php echo esc_html(get_the_date('F j, Y'));?>
                        </p>
                        <hr>
                        <div class="post__content">
                            <?php the_content(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            <div class="sidebar">
                <div>
                    <p class="sidebar-title">Recent Blogs</p>
                    <?php
                            // set up the arguments for the query to select the main post
                            $args = array(
                                'post_type' => 'post',
                                'post_status' => 'publish',
                                'posts_per_page' => 5, // Set the number of recent posts to display
                                'orderby' => 'date',
                                'order' => 'DESC'
                            );
                        
                            // create a new WP_Query instance with the arguments
                            $query = new WP_Query( $args );
                        
                            // start the loop
                            if ( $query->have_posts() ) : 
                                while ( $query->have_posts() ) : $query->the_post(); 
                        ?>
                                <div style="border-top: 1px solid #414141;">
                                    <article <?php post_class(); ?>>
                                        <div class="d-flex align-items-center">
                                            <?php if(has_post_thumbnail()): ?>
                                                <div class="img-wrapper_sixpack_sidebar">
                                                    <div style="border-radius:.5rem" class="img-wrapper_thumbnail">
                                                        <?php the_post_thumbnail( array(40, 40) ); ?>
                                                    </div>
                                                </div>
                                            <?php endif; ?>
                                            <header class="post__header px-1" role="heading">
                                                <p class="recent-posts-title">
                                                    <a class="sidebar_link bold" href="<?php the_permalink(); ?>">
                                                        <?php the_title(); ?>
                                                    </a>
                                                </p>
                                            </header>
                                        </div>
                                    </article>
                                </div>
                        <?php
                                endwhile;
                            endif;
                            // reset the query
                            wp_reset_postdata();
                        ?>
                </div>
            </div>
        </div>
    </div>
</main>


<?php get_footer();?>
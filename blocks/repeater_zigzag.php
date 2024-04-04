<style>

    .front-zig h1{
        color: #d42127;
        font-weight: bold;
        font-size: 2rem;
        margin: 0;
    }
    .front-zigzag p{
        font-size: 1.3rem;
        margin: 0;
    }
    .img-wrapper_newcss{
        overflow:hidden;
        height: 500px;
    }
    .img-wrapper-imgtag_newcss{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }
</style>
<?php if( have_rows('repeater_zigzag') ): ?>
    <?php while( have_rows('repeater_zigzag') ): the_row(); 
        $image = get_sub_field('image');
        $video = get_sub_field('video');
        $content = get_sub_field('content');
        $link = get_sub_field('link');
        $order = get_sub_field('order');
        $bgColour = get_sub_field('bg_colour');
    ?>
        <section class="front-zigzag d-flex_newcss justify-center_newcss blocks-padding" style="background-color: <?php echo $bgColour; ?>">
            <div class="container p-1">
                <div class="d-flex_newcss fd-column-r_mb vthz-center gap_3 <?php echo $order ?>">
                    <div class="flex-1">
                        <div class="front-zig zig_content">
                            <?php echo $content ?>
                        </div>
                        <?php
                            if (!empty($link) && isset($link['url']) && isset($link['title'])) {
                                ?>
                                <a href="<?php echo esc_url($link['url']); ?>" class="cta_button_newcss">
                                    <?php echo esc_html($link['title']); ?>
                                </a>
                                <?php
                            }
                        ?>
                    </div>
                    <?php if ($order !== 'order-center'): ?>
                        <div class="front-zag flex-1 img-wrapper_newcss">
                            <?php if (!empty($video)): ?>
                                <div class="video-container">
                                    <video video controls muted loop preload="none" class="lazyVideo w-100_newcss img-wrapper-videotag_newcss" src="<?php echo $video['url']; ?>"></video>
                                </div>
                            <?php else: ?>
                                <img loading="lazy" class="w-100_newcss img-wrapper-imgtag_newcss" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </section>
    <?php endwhile; ?>
<?php endif; ?>

<script>
    // Function to check if the device is desktop
    function isDesktop() {
        // Check if the screen width is greater than a certain value (e.g., 768px)
        return window.matchMedia("(min-width: 768px)").matches;
    }

    // Function to update layout based on device width
    function updateLayout() {
        if (isDesktop()) {
            // Select the zig_content element
            var zigContent = document.querySelector('.zig_content');

            // Check if zig_content exists
            if (zigContent) {
                // Set max-height to 500px
                zigContent.style.maxHeight = '500px';
                
                // Set overflow to hidden
                zigContent.style.overflow = 'hidden';

                // If the content exceeds 500px, enable scrolling
                if (zigContent.scrollHeight > 500) {
                    zigContent.style.overflowY = 'scroll';
                }
            }
        } else {
            // Reset styles for mobile view
            var zigContent = document.querySelector('.zig_content');
            if (zigContent) {
                zigContent.style.maxHeight = '';
                zigContent.style.overflow = '';
                zigContent.style.overflowY = '';
            }
        }
    }

    // Initial call to updateLayout to set the layout based on the initial screen width
    updateLayout();

    // Listen for the resize event on the window and update layout accordingly
    window.addEventListener('resize', updateLayout);
</script>



<script>
  document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = document.getElementsByClassName("lazyVideo");
    var options = {
      rootMargin: "50px 0px", // Adjust the rootMargin based on your layout
      threshold: 0.01 // Lower threshold to trigger intersection when more of the video is visible
    };
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.play();
          observer.unobserve(entry.target);
        }
      });
    }, options);
    for (var i = 0; i < lazyVideos.length; i++) {
      observer.observe(lazyVideos[i]);
    }
  });
</script>


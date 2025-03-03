<?php if( have_rows('repeater_zigzag') ): ?>
<?php while( have_rows('repeater_zigzag') ): the_row(); 
    $image = get_sub_field('image');
    $video = get_sub_field('video');
    $content = get_sub_field('content');
    $link = get_sub_field('link');
    $order = get_sub_field('order');
    $bgColour = get_sub_field('bg_colour');
    $padding = get_sub_field('padding');
?>
    <section class="repeater_zigzag <?php if($padding){echo $padding;} ?> <?php echo $bgColour; ?>">
        <div class="repeater_zigzag_container container">
            <div class="repeater_align <?php echo $order ?>">
                <div class="repeater_content">
                    <div class="front-zig zig_content">
                        <?php echo $content ?>
                    </div>
                    <?php
                        if (!empty($link) && isset($link['url']) && isset($link['title'])) {
                            ?>
                            <a href="<?php echo esc_url($link['url']); ?>" class="cta_button">
                                <?php echo esc_html($link['title']); ?>
                            </a>
                            <?php
                        }
                    ?>
                </div>
                <?php if ($order !== 'order-center'): ?>
                    <div class="front-zag img_wrapper_repeater_zigzag">
                        <?php if ($video): ?>
                            <div class="video-container">
                                <video video controls muted loop preload="none" class="lazyVideo w-100_newcss" src="<?php echo $video['url']; ?>"></video>
                            </div>
                        <?php elseif($image): ?>
                            <img loading="lazy" class="w-100_newcss img_wrapper_repeater_zigzag_imgtag" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
<?php endwhile; ?>
<?php endif; ?>

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

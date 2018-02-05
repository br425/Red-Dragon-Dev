<?php get_header(); ?>

			<div id="content">

			<div id="inner-content" class="wrap cf">

					<main id="main" class="m-all t-2of3 d-5of7 cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

						<?php bones_page_navi(); ?>
	
						<section class="archive-nav">
							<h1>I'M HERE</h1>
							<?php 
					            $args = [
					              'menu' => 'ArchiveNav',
					              'link_before' => '<span class="theme-label">',
					              'link_after' => '</span>'
					            ];

					            wp_nav_menu($args);

							?>
						</section>


						</main>

				</div>

			</div>


<?php get_footer(); ?>

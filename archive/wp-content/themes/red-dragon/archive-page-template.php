<?php
/*
 Template Name: Archive Page Template
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header(); ?>

			<div id="content archive-page">

				<div id="inner-content" class="wrap cf">

						<main id="main" class="m-all t-2of3 d-5of7 cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

						<section class="archive-nav">
							<?php 
					            $args = [
					              'menu' => 'ArchiveNav',
					              'link_before' => '<span class="theme-label">',
					              'link_after' => '</span>'
					            ];

					            wp_nav_menu($args);

							?>
						</section>

<style>
	section {
/*		display: flex !important;
		flex-flow: row;
*/
	}

	.archive-nav .theme-label {
/*		margin: 16px !important;
		background-color: #aadddd;
		padding: 50px 30px;
*/	}
</style>
						</main>

						<?php get_sidebar(); ?>

				</div>

			</div>


<?php get_footer(); ?>

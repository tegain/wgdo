<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<h1><?php _e( 'Archives', 'wgdo' ); ?></h1>

			<?php get_template_part('partials/loop-jobs'); ?>

			<?php get_template_part('partials/pagination'); ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>

document.addEventListener('DOMContentLoaded', function () {
	// nav toggle for small screens
	const toggle = document.querySelector('.nav-toggle');
	const menu = document.querySelector('.nav-links');
	if (toggle && menu) {
		toggle.addEventListener('click', () => menu.classList.toggle('show'));
	}

	// smooth scroll for in-page links
	document.querySelectorAll('a[href^="#"]').forEach(a => {
		a.addEventListener('click', (e) => {
			const href = a.getAttribute('href');
			if (href.length > 1 && href.startsWith('#')) {
				const el = document.querySelector(href);
				if (el) {
					e.preventDefault();
					el.scrollIntoView({behavior: 'smooth', block: 'start'});
					if (menu && menu.classList.contains('show')) menu.classList.remove('show');
				}
			}
		});
	});

	// fill year in footer
	const year = document.getElementById('year');
	if (year) year.textContent = new Date().getFullYear();

	// make project cards open a dedicated report page in a new tab
	document.querySelectorAll('.project-card').forEach(card => {
		const slug = card.dataset.project;
		const title = card.dataset.title || '';
		if (!slug) return;
		card.style.cursor = 'pointer';
		card.addEventListener('click', (e) => {
			if (e.target.closest('a')) return; // allow inner links to work
			const url = `report.html?project=${encodeURIComponent(slug)}&title=${encodeURIComponent(title)}`;
			window.open(url, '_blank', 'noopener');
		});
	});

});


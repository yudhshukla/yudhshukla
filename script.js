document.addEventListener('DOMContentLoaded', function () {
	// nav toggle for small screens
	const toggle = document.querySelector('.nav-toggle');
	const menu = document.querySelector('.nav-menu');
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

	// simple contact form handler (no backend)
	const form = document.getElementById('contact-form') || document.getElementById('contactForm');
	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const btn = form.querySelector('button[type="submit"]');
			const orig = btn ? btn.textContent : null;
			if (btn) btn.textContent = 'Sending…';
			// simulate network delay
			setTimeout(() => {
				if (btn) btn.textContent = 'Sent ✓';
				form.reset();
				setTimeout(() => { if (btn) btn.textContent = orig; }, 2000);
			}, 700);
		});
	}
});


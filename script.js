const welcomeScreen = document.querySelector('.welcome-screen');

if (welcomeScreen) {
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const hideDelay = reducedMotion ? 0 : 3000;

	window.setTimeout(() => {
		welcomeScreen.classList.add('is-hidden');
		welcomeScreen.setAttribute('aria-hidden', 'true');
	}, hideDelay);
}

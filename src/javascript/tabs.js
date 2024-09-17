window.onload = function () {
	const tabs = document.querySelectorAll('.tabs');
	tabs.forEach(tabsBlock => {
		const triggerButtons = tabsBlock.querySelectorAll('.tab-trigger');
		triggerButtons.forEach(trigger => trigger.addEventListener('click', (event) => {
			event.preventDefault();

			const activeTrigger = tabsBlock.querySelector('.tab-trigger.active');
			activeTrigger.classList.remove('active');
			trigger.classList.add('active');

			const activeTab = tabsBlock.querySelector('.tab-content.active');
			activeTab.classList.remove('active');

			const neededTab = tabsBlock.querySelector(`.tab-content[data-tab="${trigger.dataset.tab}"]`);
			neededTab.classList.add('active')
		}))
	})
};

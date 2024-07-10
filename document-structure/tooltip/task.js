const hasTooltipElements = document.querySelectorAll('.has-tooltip');
let currentTooltip = null;

hasTooltipElements.forEach(element => {
  element.addEventListener('click', showTooltip);
});

const showTooltip = (event) => {
  event.preventDefault();

  if (currentTooltip) {
    currentTooltip.classList.remove('tooltip_active');
  }

  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = event.target.title;

  const rect = event.target.getBoundingClientRect();
  tooltip.style.left = `${rect.left}px`;
  tooltip.style.top =`${rect.bottom + 10}px`;

  document.body.appendChild(tooltip);
  tooltip.classList.add('tooltip_active');

  currentTooltip = tooltip;
};

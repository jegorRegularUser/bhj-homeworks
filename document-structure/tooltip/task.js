const hasTooltipElements = document.querySelectorAll('.has-tooltip');
let currentTooltip = null;

const showTooltip = e => {
  e.preventDefault();

  if (currentTooltip) {
    currentTooltip.classList.remove('tooltip_active');
  }

  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = e.target.title;

  const rect = e.target.getBoundingClientRect();
  tooltip.style.left = `${rect.left}px`;
  tooltip.style.top =`${rect.bottom + 10}px`;

  document.body.appendChild(tooltip);
  tooltip.classList.add('tooltip_active');

  currentTooltip = tooltip;
};

hasTooltipElements.forEach(el => {
  el.addEventListener('click', showTooltip);
});
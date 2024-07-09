const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {

    tabs.forEach(t => t.classList.remove('tab_active'));
    tabsContent.forEach(c => c.classList.remove('tab__content_active'));

    tab.classList.add('tab_active');
    tabsContent[index].classList.add('tab__content_active');
  });
});

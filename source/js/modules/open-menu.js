const openMenu = () => {
  if (document.querySelector('[data-menu]') && document.querySelector('[data-menu-btn]')) {
    const menu = document.querySelector('[data-menu]');
    const menuBtn = document.querySelector('[data-menu-btn]');
    const header = document.querySelector('[data-page-header]');
    const wrapper = document.querySelector('[data-page-wrapper]');
    const menuItems = menu.querySelectorAll('a');

    const closeMenu = () => {
      menuBtn.classList.remove('is-open');
      menu.classList.remove('is-open');
      wrapper.classList.remove('is-open');
      document.body.style.overflow = '';

      requestAnimationFrame(() => {
        menu.style.top = `${-1000}px`;
      });
    };

    const openMenu = () => {
      const headerHeight = header.offsetHeight;
      menuBtn.classList.add('is-open');
      menu.classList.add('is-open');
      wrapper.classList.add('is-open');
      document.body.style.overflow = 'hidden';

      requestAnimationFrame(() => {
        menu.style.top = `${headerHeight - 20}px`;
      });
    };

    const toggleMenu = () => {
      if (menu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    menuBtn.addEventListener('click', toggleMenu);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !menuBtn.contains(e.target) && menu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    menuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });
  }
};

export { openMenu };

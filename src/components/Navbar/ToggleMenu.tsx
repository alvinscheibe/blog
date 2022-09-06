export function ToggleMenu() {
  const toggleMenu = () => {
    document.getElementById('isToggle')?.classList.toggle('open');
    let isOpen = document.getElementById('navigation');

    if (isOpen != null) {
      if (isOpen.style.display === 'block')
        isOpen.style.display = 'none';
      else
        isOpen.style.display = 'block';
    }
  }

  return (
    <div className="menu-extras">
      <div className="menu-item">
        <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
          <div className="lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </div>
  );
}
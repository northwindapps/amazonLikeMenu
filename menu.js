function openNav() {
  
    document.querySelector('.sidemenu').classList.add('slide-in');
    document.querySelector('.restmenu').classList.add('slide-in');
  }
  
  function closeNav() {
    document.querySelector('.sidemenu').classList.remove('slide-in');
    document.querySelector('.restmenu').classList.remove('slide-in');
  }
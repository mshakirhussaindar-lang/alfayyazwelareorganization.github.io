 AOS.init({ duration: 800, once: true, offset: 100 });

  // Navbar scroll
  window.addEventListener('scroll', ()=>{
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Mobile menu
  const mobileBtn = document.getElementById('mobileBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  let isMenuOpen = false;
  mobileBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('active');
    mobileBtn.innerHTML = isMenuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  document.addEventListener('click', (e)=>{
    if(!mobileBtn.contains(e.target) && !mobileMenu.contains(e.target) && isMenuOpen){
      mobileMenu.classList.remove('active');
      mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
      isMenuOpen = false;
    }
  });

  function toggleMobileDropdown(id){
    document.getElementById(id).classList.toggle('show');
  }

  // Language toggle
  let isUrdu = false;
  document.getElementById('langToggle').addEventListener('click', function(){
    isUrdu = !isUrdu;
    document.documentElement.dir = isUrdu ? 'rtl' : 'ltr';
    this.innerHTML = isUrdu ? '<i class="fas fa-globe"></i> UR' : '<i class="fas fa-globe"></i> EN';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

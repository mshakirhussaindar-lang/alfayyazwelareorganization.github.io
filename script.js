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
// Yeh function mobile dropdown toggle ke liye hai
function toggleMobileDropdown(id) {
  const element = document.getElementById(id);
  element.classList.toggle('show');
  
  // Chevron icon change karo
  const parent = element.previousElementSibling;
  const icon = parent.querySelector('i.fa-chevron-down');
  if (icon) {
    if (element.classList.contains('show')) {
      icon.style.transform = 'rotate(180deg)';
    } else {
      icon.style.transform = 'rotate(0deg)';
    }
  }
}

// Mobile menu close karne ka better function
document.addEventListener('DOMContentLoaded', function() {
  const mobileBtn = document.getElementById('mobileBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  let isMenuOpen = false;

  if (mobileBtn) {
    mobileBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        mobileMenu.classList.add('active');
        mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden'; // Background scroll rokna
      } else {
        mobileMenu.classList.remove('active');
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = ''; // Scroll wapas enable
      }
    });
  }

  // Menu ke bahar click karne se close ho jaye
  document.addEventListener('click', function(event) {
    if (mobileMenu && mobileBtn) {
      if (!mobileBtn.contains(event.target) && !mobileMenu.contains(event.target) && isMenuOpen) {
        mobileMenu.classList.remove('active');
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        isMenuOpen = false;
        document.body.style.overflow = '';
      }
    }
  });

  // Window resize par menu close ho jaye
  window.addEventListener('resize', function() {
    if (window.innerWidth > 992 && isMenuOpen) {
      mobileMenu.classList.remove('active');
      mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
      isMenuOpen = false;
      document.body.style.overflow = '';
    }
  });

  // Dropdown toggle ke liye (agar inline onclick nahi hai to)
  window.toggleMobileDropdown = function(id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('show');
      const icon = event.currentTarget.querySelector('i.fa-chevron-down');
      if (icon) {
        icon.style.transform = element.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    }
  };
});

// Navbar scroll hide/show functionality
(function() {
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  // Initial state
  let isNavbarHidden = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const currentScrollY = window.scrollY;
        
        // Scroll down and not at top
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scroll down - hide navbar
          if (!isNavbarHidden) {
            navbar.classList.add('hide');
            navbar.classList.remove('show');
            isNavbarHidden = true;
          }
          
          // Background change for scrolled state
          if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
          }
        } 
        // Scroll up
        else if (currentScrollY < lastScrollY) {
          // Scroll up - show navbar
          if (isNavbarHidden) {
            navbar.classList.remove('hide');
            navbar.classList.add('show');
            isNavbarHidden = false;
          }
          
          // Background change based on position
          if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }
        
        // Top of page par background transparent
        if (currentScrollY <= 50) {
          navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
      });
      
      ticking = true;
    }
  });
  
  // Optional: Mouse movement near top par navbar show kar do
  document.addEventListener('mousemove', function(e) {
    if (e.clientY < 100 && isNavbarHidden) {
      navbar.classList.remove('hide');
      navbar.classList.add('show');
      isNavbarHidden = false;
    }
  });
  
  // Optional: Touch devices ke liye
  document.addEventListener('touchstart', function(e) {
    if (e.touches[0].clientY < 100 && isNavbarHidden) {
      navbar.classList.remove('hide');
      navbar.classList.add('show');
      isNavbarHidden = false;
    }
  });
})();


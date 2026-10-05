document.addEventListener('DOMContentLoaded', () => {
  // Stats Animation Logic
  const statValues = document.querySelectorAll('.stat-value');
  
  const animateStats = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          // Easing function for smooth slowdown
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          
          const currentCount = Math.floor(easeOutQuart * target);
          entry.target.textContent = currentCount.toLocaleString();
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.textContent = target.toLocaleString();
            observer.unobserve(entry.target);
          }
        };
        
        requestAnimationFrame(updateCounter);
      }
    });
  };

  const observer = new IntersectionObserver(animateStats, {
    threshold: 0.5
  });

  statValues.forEach(stat => {
    observer.observe(stat);
  });
});

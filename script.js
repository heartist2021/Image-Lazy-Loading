document.addEventListener('DOMContentLoaded', function () {
  const lazyLoadImages = document.querySelectorAll('.lazy-load');

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          img.setAttribute('src', src);
          img.classList.remove('lazy-load');
          observer.disconnect();
        }
      });
    });

    io.observe(target);
  };

  lazyLoadImages.forEach(lazyLoad);
});

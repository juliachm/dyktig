import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const smoothScrollHandler = (event) => {
      const targetLink = event.target.closest('a');
      if (targetLink) {
        event.preventDefault();
        const targetId = targetLink.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('click', smoothScrollHandler);
    return () => {
      window.removeEventListener('click', smoothScrollHandler);
    };
  }, []);

  return null;
};

export default SmoothScroll;

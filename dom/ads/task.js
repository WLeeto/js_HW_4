function rotateText() {
      const rotator = document.getElementsByClassName('rotator')[0];
      const cases = rotator.getElementsByClassName('rotator__case');
      const activeIndex = Array.from(cases).findIndex((el) =>
        el.classList.contains('rotator__case_active')
      );
      const nextIndex = (activeIndex + 1) % cases.length;

      cases[activeIndex].classList.remove('rotator__case_active');
      cases[nextIndex].classList.add('rotator__case_active');

      const nextCase = cases[nextIndex];
      const speed = parseInt(nextCase.dataset.speed);
      const color = nextCase.dataset.color;

      rotator.style.transitionDuration = `${speed}ms`;
      rotator.style.color = color;
    }

    setInterval(rotateText, 1000);
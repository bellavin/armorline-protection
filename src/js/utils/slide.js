export const slideUp = (target, duration) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';

  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.overflow = 'hidden';

  window.setTimeout( () => {
    target.style.display = 'none'; /* [8] */
    target.style.removeProperty('height'); /* [9] */
    target.style.removeProperty('padding-top');  /* [10.1] */
    target.style.removeProperty('padding-bottom');  /* [10.2] */
    target.style.removeProperty('margin-top');  /* [11.1] */
    target.style.removeProperty('margin-bottom');  /* [11.2] */
    target.style.removeProperty('overflow');  /* [12] */
    target.style.removeProperty('transition-duration');  /* [13.1] */
    target.style.removeProperty('transition-property');  /* [13.2] */
  }, duration);
}


export const slideDown = (target, duration) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'block';
  }
  target.style.display = display;

  let height = target.offsetHeight;
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.overflow = 'hidden';

  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');

  window.setTimeout( () => {
    target.style.removeProperty('height'); /* [13] */
    target.style.removeProperty('overflow'); /* [14] */
    target.style.removeProperty('transition-duration'); /* [15.1] */
    target.style.removeProperty('transition-property'); /* [15.2] */
  }, duration);
}

export const slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

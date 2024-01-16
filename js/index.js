const annotate = window.RoughNotation.annotate;

const exp = document.querySelector('.exp');
const ux = document.querySelector('.ux');
const endava = document.querySelector('.endava');
const alten = document.querySelector('.alten');
const drx = document.querySelector('.drx');

const effects = {
  underline: 'underline',
  box: 'box',
  circle: 'circle',
  highlight: 'highlight',
  strike: 'strike-through',
  crossed: 'crossed-off',
  bracket: 'bracket'
};
const colors = {
  green: 'hsl(159.4, 42.9%, 53.3%)',
  orange: 'hsl(37.1, 100%, 70.2%)',
  red: 'hsl(10.7, 100%, 70.2%)'
};

const annotationConfig = {
  type: effects.bracket,
  animate: true,
  animationDuration: 1500,
  color: colors.green,
  strokeWidth: 2,
  padding: [1],
  multiline: true,
  iterations: 2,
  brackets: ['right', 'top', 'bottom', 'left'],
  rtl: false
}

function applyAnnotationEffect(effects, colors, elements) {
  elements.forEach((el, index) => {
      annotationConfig.type = effects[index];
      annotationConfig.color = colors[index];
      const effect = annotate(el, annotationConfig);
      effect.show();
  });
}

const headerEffects = [effects.underline, effects.box];
const headerColors = [colors.green, colors.orange];
const headerElements = [exp, ux];
setTimeout(()=> applyAnnotationEffect(headerEffects, headerColors, headerElements), 700);

const timeoutDuration = 1200;

// scroll animation
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('card1')){
        entry.target.classList.add('show');
        entry.target.classList.add('slide-in-right');
        setTimeout(() => applyAnnotationEffect([effects.box], [colors.green], [endava]), timeoutDuration);
      }
      else if (entry.target.classList.contains('card3')){
        entry.target.classList.add('show');
        entry.target.classList.add('slide-in-right');
        setTimeout(() => applyAnnotationEffect([effects.box], [colors.red], [drx]), timeoutDuration);
      }
      else {
        entry.target.classList.add('show');
        entry.target.classList.add('slide-in-left');
        setTimeout(() => applyAnnotationEffect([effects.box], [colors.orange], [alten]), timeoutDuration);
      }
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.7, // Trigger when X% of the element is visible
});

const cards = document.querySelectorAll('.card1, .card2, .card3');
cards.forEach((card) => {
  observer.observe(card);
});

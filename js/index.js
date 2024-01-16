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
  animationDuration: 2000,
  color: colors.green,
  strokeWidth: 2,
  padding: [1],
  multiline: true,
  iterations: 3,
  brackets: ['right', 'top', 'bottom', 'left'],
  rtl: false
}

const usedEffects = [effects.underline, effects.box, effects.box, effects.box, effects.underline]
const usedColors = [colors.green, colors.orange, colors.green, colors.orange, colors.red];
const elementsToAnnotate = [exp, ux, endava, alten, drx];

elementsToAnnotate.forEach((element,index) => {
  annotationConfig.type = usedEffects[index];
  annotationConfig.color = usedColors[index];
  const effect = annotate(element, annotationConfig);
  effect.show();
});
import { clickLabelElements, intersectionObserver } from './utils';
const lableElements = document.querySelectorAll('label');
const sectionElements = document.querySelectorAll('section');
lableElements.forEach(clickLabelElements);
intersectionObserver(sectionElements);

// here you put all the js you want.

import Skills from "./js/skills";
import Options from "./js/opts";
import Project from "./js/project";
import Stages from "./js/stages";

var options = {
    rootMargin: '0px',
    threshold: 0.2
}

function callback(entries) {
    entries.filter(el => {
        if (el.isIntersecting) {
            el.target.classList.add('visible');
        }
    })
}

let observer = new IntersectionObserver(callback, options);

const skills = new Skills(observer);
const opts = new Options(observer);
const project = new Project(observer);
const stages = new Stages(observer);
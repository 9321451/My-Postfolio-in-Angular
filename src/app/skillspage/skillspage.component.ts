import { Component } from '@angular/core';

@Component({
  selector: 'app-skillspage',
  imports: [],
  templateUrl: './skillspage.component.html',
  styleUrl: './skillspage.component.css'
})
export class SkillspageComponent {
  ngAfterViewInit(): void {
  const cards = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.getAttribute('data-animation');
        entry.target.classList.add('animate__animated', animationClass || 'animate__fadeInUp');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
}

}

import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.css'
})
export class ChildBComponent {
  constructor(private route : ActivatedRoute){
    
  }
  link:string="about"
}

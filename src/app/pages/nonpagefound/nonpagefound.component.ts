import { Component } from '@angular/core';

@Component({
  selector: 'app-nonpagefound',
  templateUrl: './nonpagefound.component.html',
  styleUrls: ['./nonpagefound.component.css'
  ]
})
export class NonpagefoundComponent {
  year = new Date().getFullYear()

}

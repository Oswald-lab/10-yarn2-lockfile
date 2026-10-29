import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello my-app</h1>
    <input #a type="number" placeholder="First number" />
    <input #b type="number" placeholder="Second number" />
    <button (click)="calculate(a.value, b.value)">Add</button>
    <p>Result: {{ result() }}</p>
  `,
})
export class AppComponent {
  result = signal<number | null>(null);

  add(a: number, b: number): number {
    return a + b;
  }

  calculate(a: string, b: string): void {
    this.result.set(this.add(Number(a), Number(b)));
  }
}

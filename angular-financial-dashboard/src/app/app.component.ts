import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Financial Dashboard UI</h1>
    <div class="dashboard">
      <financial-dashboard></financial-dashboard>
      <wasm-financial-analysis></wasm-financial-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }
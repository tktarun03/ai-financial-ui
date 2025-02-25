import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'financial-dashboard',
  styleUrl: 'financial-dashboard.css',
  shadow: true
})
export class FinancialDashboard {
  @State() financialStatus: string = "Fetching financial insights...";

  analyzeFinance() {
    const insights = [
      "📈 Stock Market: Up 2.5% - Bullish Trend",
      "📉 Bitcoin Price Drop - Consider Holding",
      "💰 Savings Optimization - AI recommends a 10% increase",
      "🔍 Investment Risk: Low - Safe for long-term gains",
      "⚠️ Expense Alert: High Spending on Subscriptions!"
    ];
    this.financialStatus = insights[Math.floor(Math.random() * insights.length)];
  }

  render() {
    return (
      <div class="financial-box">
        <h2>AI Financial Dashboard</h2>
        <button onClick={() => this.analyzeFinance()}>Analyze Financial Data</button>
        <p>{this.financialStatus}</p>
      </div>
    );
  }
}

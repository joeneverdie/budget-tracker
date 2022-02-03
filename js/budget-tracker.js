export default class BudgetTracker {
  constructor(querySelectorString) {
    this.root = document.querySelector(querySelectorString);
    this.root.innerHTML = BudgetTracker.html();

    this.root.querySelector(".new-entry").addEventListener("click", () => {
      this.onNewEntryBtnClick();
    });

    this.load();
  }

  static html() {
    return `
        <table class="budget-tracker">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="entries">
          <tr>
            <td>
              <input type="date" class="input input-date" id="input-date" />
            </td>
            <td>
              <input
                type="text"
                class="input input-descriptions"
                id="input-description"
                placeholder="Add a Description (e.g. wages, bills, etc.)"
              />
            </td>
            <td>
              <select class="input input-type" id="input-type">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                class="input input-amount"
                id="input-amount"
              />
            </td>
            <td>
              <button type="button" class="delete-entry">&#10005;</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td colspan="5" class="controls">
              <button type="button" class="new-entry">New Entry</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="summary">
              <strong>Total:</strong>
              <span class="total">$0.00</span>
            </td>
          </tr>
        </tfoot>
      </table>
        `;
  }

  static entryHtml() {
    return `
        <tr>
        <td>
          <input type="date" class="input input-date" id="input-date" />
        </td>
        <td>
          <input
            type="text"
            class="input input-descriptions"
            id="input-description"
            placeholder="Add a Description (e.g. wages, bills, etc.)"
          />
        </td>
        <td>
          <select class="input input-type" id="input-type">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </td>
        <td>
          <input
            type="number"
            class="input input-amount"
            id="input-amount"
          />
        </td>
        <td>
          <button type="button" class="delete-entry">&#10005;</button>
        </td>
      </tr>
        `;
  }

  load() {
    const entries = JSON.parse(
      localStorage.getItem("budget-tracker-entries-dev") || "[]"
    );

    for (const entry of entries) {
        this.addEntry(entry);
    }

    this.updateSummary();
  }

  updateSummary() {}

  save() {}

  addEntry(entry = {}) {
      this.root.querySelector(".entries").insertAdjacentHTML("beforeend", BudgetTracker.entryHtml());
  }

  getEntryRows() {}

  onNewEntryBtnClick() {
      this.addEntry();
  }

  onDeleteEntryBtnClick(e) {}
}

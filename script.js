document.addEventListener('DOMContentLoaded', function() {
    const addEntryBtn = document.querySelector('#add-entry-btn');
    const calculateBtn = document.querySelector('#calculate-btn');

    addEntryBtn.addEventListener('click', addEntry);
    calculateBtn.addEventListener('click', calculateOverstay);

    function addEntry() {
        const entries = document.querySelector('.entries');
        const newEntryNumber = entries.children.length + 1;
        const entryHtml = `
            <div class="entry">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="entry-${newEntryNumber}" pattern="\\d{2}/\\d{2}/\\d{4}">
                    <label class="mdl-textfield__label" for="entry-${newEntryNumber}">Entry Date (DD/MM/YYYY)</label>
                    <span class="mdl-textfield__error">Input is not a date!</span>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="exit-${newEntryNumber}" pattern="\\d{2}/\\d{2}/\\d{4}">
                    <label class="mdl-textfield__label" for="exit-${newEntryNumber}">Exit Date (DD/MM/YYYY)</label>
                    <span class="mdl-textfield__error">Input is not a date!</span>
                </div>
            </div>`;
        entries.insertAdjacentHTML('beforeend', entryHtml);
        componentHandler.upgradeDom(); // Re-initializes MDL components
    }

    function calculateOverstay() {
        const entries = document.querySelectorAll('.entry');
        let totalDaysInAustralia = 0;
        let details = "";

        entries.forEach((entry, index) => {
            const entryInput = entry.querySelector('input[type="text"]:first-child');
            const exitInput = entry.querySelector('input[type="text"]:last-child');
            if (entryInput && exitInput && entryInput.value && exitInput.value) {
                const entryDate = parseDate(entryInput.value);
                const exitDate = parseDate(exitInput.value);
                if (entryDate && exitDate) {
                    const duration = Math.round((exitDate - entryDate) / (1000 * 60 * 60 * 24)); // Convert to days
                    if (duration > 0) {
                        totalDaysInAustralia += duration;
                        details += `<p>Stay ${index + 1}: ${duration} days (from ${entryInput.value} to ${exitInput.value})</p>`;
                    }
                }
            }
        });

        const allowedDays = 855;
        const overstay = totalDaysInAustralia - allowedDays;
        let resultText = `<h4>Total Days in Australia: ${totalDaysInAustralia} days</h4>`;
        resultText += details;
        resultText += overstay > 0 ? `<h4>Overstayed by ${overstay} days.</h4>` : `<h4>No overstay. Days left: ${-overstay}.</h4>`;

        document.getElementById('result').innerHTML = resultText;
    }

    function parseDate(input) {
        const parts = input.split('/');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
});


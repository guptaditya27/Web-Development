const form = document.querySelector('form');
const incomeInput = document.getElementById('income');
const result = document.getElementById('result');
const indianRupees = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
});

function calculateIncomeTax(income) {
  const slabs = [
    { limit: 400000, rate: 0 },
    { limit: 800000, rate: 0.05 },
    { limit: 1200000, rate: 0.10 },
    { limit: 1600000, rate: 0.15 },
    { limit: 2000000, rate: 0.20 },
    { limit: 2400000, rate: 0.25 },
    { limit: Infinity, rate: 0.30 },
  ];

  let tax = 0;
  let previousLimit = 0;

  for (const slab of slabs) {
    const taxableInSlab = Math.max(0, Math.min(income, slab.limit) - previousLimit);
    tax += taxableInSlab * slab.rate;
    previousLimit = slab.limit;

    if (income <= slab.limit) {
      break;
    }
  }

  if (income <= 1200000) {
    tax = Math.max(0, tax - Math.min(tax, 60000));
  } else {
    tax = Math.min(tax, income - 1200000);
  }

  return tax * 1.04;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const income = Number(incomeInput.value);
  if (!Number.isFinite(income) || income < 0) {
    result.textContent = 'Please enter a valid, non-negative income.';
    return;
  }

  result.textContent = `Estimated income tax: ${indianRupees.format(calculateIncomeTax(income))}`;
});
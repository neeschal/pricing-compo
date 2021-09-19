const check = document.getElementById("checked");
const yearly = document.getElementById("yearly");
const monthly = document.getElementById("monthly");

const yearly_pro = document.getElementById("yearly_pro");
const monthly_pro = document.getElementById("monthly_pro");

const yearly_master = document.getElementById("yearly_master");
const monthly_master = document.getElementById("monthly_master");

check.addEventListener("click", () => {
  yearly.classList.toggle("hide");
  monthly.classList.toggle("hide");

  yearly_pro.classList.toggle("hide");
  monthly_pro.classList.toggle("hide");

  yearly_master.classList.toggle("hide");
  monthly_master.classList.toggle("hide");
});

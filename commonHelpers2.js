import"./assets/reset-41fa52ec.js";/* empty css                      */document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".feedback-form"),t=o.querySelector('input[name="email"]'),a=o.querySelector('textarea[name="message"]');function m(){const e={email:t.value.trim(),message:a.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}function l(){const e=localStorage.getItem("feedback-form-state");if(e){const r=JSON.parse(e);t.value=r.email,a.value=r.message}}l(),o.addEventListener("input",()=>{m()}),o.addEventListener("submit",e=>{if(e.preventDefault(),t.value.trim()!==""&&a.value.trim()!==""){const r={email:t.value.trim(),message:a.value.trim()};console.log(r),localStorage.removeItem("feedback-form-state"),t.value="",a.value=""}else alert("Please fill in both fields before submitting.")})});
//# sourceMappingURL=commonHelpers2.js.map

const form = document.getElementById("form_sentence");
if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    let sentence = formData.get("sentence");

    if (sentence.length <= 5){
        alertMessage("error", "Please Input at least 5 characters");
    return;
  }

    const response = await window.axios.openAI(formData.get("sentence"));
    document.getElementById("list_interview").innerHTML = JSON.stringify(response.choices[0].text).replace(/\\n/g,''+"\n");
  };
}
 function alertMessage(status,sentence){
  window.Toastify.showToast({
    text: sentence,
    duration: 5000,
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style:{
      textAlign:"center",
      background: status == "error" ? "red":"green",
      color: "white",
      padding: "5px",
      marginTop: "2px"
    }

  });
 }
document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const fileInput = document.getElementById("profilePic");
  const file = fileInput.files[0];

  if (file) {
    const imageURL = URL.createObjectURL(file);

    document.getElementById("displayName").innerText = name;
    document.getElementById("displayEmail").innerText = email;
    document.getElementById("displayImage").src = imageURL;

    document.getElementById("userInfo").style.display = "block";
  } else {
    alert("Please upload a profile picture.");
  }
});

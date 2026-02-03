function getName(){

  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;

  if(!dob || !gender){
    document.getElementById("result").innerText="Fill all fields";
    return;
  }

  let date = new Date(dob);
  let day = date.getDay(); // 0-6

  const male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  const female = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama"];

  let name = gender==="male" ? male[day] : female[day];

  document.getElementById("result").innerText =
    "Your Akan name is: " + name;
}

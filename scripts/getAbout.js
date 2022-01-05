let studentInfo = {}

const openFile = function(event, i) {
    const input = event.target;
    let reader = new FileReader();
    reader.onload = function(){
      let text = reader.result;
      let node = document.getElementById('all-file');
      node.innerText += text + "\n";
      filename = String(input.files[i].name) 
      studentInfo[filename.substring(6, filename.indexOf(".txt"))] = text 
    };
    reader.readAsText(input.files[i]);
  };


// linked with button "choose files"

const openFiles = function(event){
  studentInfo = {}
  for(let i = 0; i < event.target.files.length; i++){
    openFile(event, i)
  }
  console.log(studentInfo)
}

function randomPickAbout(){
  const keys = Object.keys(studentInfo)
  randomPickedKey = keys[Math.floor(Math.random() * keys.length)]
  document.getElementById('random-name').innerText = randomPickedKey
  document.getElementById('random-text').innerText = studentInfo[randomPickedKey]
}





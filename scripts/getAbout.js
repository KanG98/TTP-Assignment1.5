const openFile = function(event, i) {
    const input = event.target;
    let reader = new FileReader();
    reader.onload = function(){
      let text = reader.result;
      let node = document.getElementById('output');
      node.innerText += text + "\n";
      console.log(text);
    };
    reader.readAsText(input.files[i]);
  };


const openFiles = function(event){
  for(let i = 0; i < event.target.files.length; i++){
    openFile(event, i)
  }
}


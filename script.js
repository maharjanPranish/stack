const command = document.getElementById('command');
const exeuteBtn = document.getElementById('executeBtn');
const stackContainer = document.getElementById('stackContainer')
const memoryUnit = document.getElementById('memory')

const memoryAddress = [];
const memoryField = [];

exeuteBtn.addEventListener('click', () => {
    let inpCommand = command.value;
    command.value = ''
    inpCommand = inpCommand.toUpperCase();

    let stackMember = document.createElement('div')
    stackMember.textContent = inpCommand

    // document.write(memoryField[5])

    if (inpCommand == 'POP') {
        // stackContainer.removeChild(stackContainer.children[5])
        // stackMember.parentNode.removeChild(stackMember)
    } else {
        stackContainer.appendChild(stackMember)
    }
})

window.onload = initializeMemory();

function initializeMemory() {
    let a = 0;
    for (i = 65; i <= 90; i++) {
        let memory = document.createElement('div');
        memory.textContent = String.fromCharCode(i);
        memoryUnit.appendChild(memory);

        // let memoryData = document.createElement('span');
        // memoryField[a] = 0;
        // memoryData.textContent = memoryField[a];
        // // memoryData.addEventListener('change', checkData)
        // memoryData.contentEditable = true
        // memoryUnit.appendChild(memoryData);
        // a++;

        let memoryData = document.createElement('div');
        // memoryData.type = "number"
        // memoryData.setAttribute('size', 4)
        memoryField[a] = 0;
        memoryData.value = memoryField[a];
        memoryData.textContent = memoryField[a];
        memoryData.dataset.index = a
        memoryData.addEventListener('click', changeData)
        memoryData.contentEditable = true
        memoryUnit.appendChild(memoryData);
        a++;



    }
}

function changeData(event) {
    if (!(/^\d+$/.test(event.target.textContent))) {
        alert("data must cotain an integer only")
        return
    }

    let field = event.target
    
    let updateMemoryListner =    window.addEventListener("click" , (event) => {
        updateMemoryField(event , field )   
              
    })
    console.log("event lisner added")
}


function updateMemoryField(e , field){
    if(e.target != field){
        memoryField[field.dataset.index] = Number(field.textContent)
        console.log(memoryField[field.dataset.index])
        window.removeEventListener("click", updateMemoryListner);
      console.log("Event listener removed");
    }
    
}


// window.removeEventListener('click' , updateMemoryField)
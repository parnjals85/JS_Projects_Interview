// Acces Of HTMl --
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


addBtn.addEventListener('click' , addtask); // Addtask Function call when we click on addbtn

function addtask(){
    const text = input.value.trim();  // trim extra space hatana
    if(text === ''){                   // Agr User Kuch bhi nhai likha text empty raheg
        alert("Please Enter the Task");
        return ;
    }
    const li = document.createElement('li');   // Ek naya Li banana hai jo Ul me Html ke add hoga 
    li.textContent = text;                      // User ne jo bhi likha hai wo Li ke andar likha jayega 
 
    li.addEventListener('click' , ()=>{     // User click On li to usme toggle ho completed ka
        li.classList.toggle('completed');
    })

    const delbtn = document.createElement('button');   // delete button create aur 
    delbtn.textContent = "Delete";    // Content Delete Name in button
    delbtn.classList.add('delete-btn');     // class add 'delete-btn' in then

    delbtn.addEventListener('click',(e)=>{   
        e.stopPropagation();         // togle event (completed wala rokene ke liye ---)
        li.remove();                 // uske andar ka li remove kr diya 
    });

    li.appendChild(delbtn);     // delt button ko webpage ke andar lana
    taskList.appendChild(li);   // li ke andar lana 

    input.value = "";            // task add hone ke baad inputu khali --
}
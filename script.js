const theme = document.querySelector('.dark');


let verif = 0;
    
    theme.addEventListener('click', () => {
        if(verif===0) {
            document.documentElement.style.setProperty('--color1', '--color2');
            verif++
            
        }
        else {
            document.documentElement.style.setProperty('--color1', '')
            verif--
        }
        
    })































//     if(verif===0) {
//         if(confirm("Vous allez passer en  mode jour !")){
//             document.documentElement.style.setProperty('--color1', '#f1f1f1')
//             verif++

//         }
      
//     }
//     else {
//         if(confirm("Vous allez passer en mode nuit!")) {
//             document.documentElement.style.setProperty('--color1', 'rgba(0, 0, 0, 0.76)')

//         verif--  

//         }
        
//     }
// });

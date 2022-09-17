const cpfs = `Os CPFS são:
    254.224.877-45 215.978.456-12 047.258.369-96
    
    
    
    963.987.321-00
    `

    const ips = `
    
    Os Ips são:
        0.0.0.0
        
        192.166.0.25

        255.255.255.255

    `
    // 250 - 255, 25[0-5]
    //200 - 249, 2[0-4][0-9]
    //100 - 199, 1\d{2}
    //10 - 99, 1\d 

    const IpRegExp1 = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g
    /*for (let i =0; i <= 300;i++){
        const ip = `${i}.${i}.${i}.${i}`
        console.log(ip,ip.match(IpRegExp1))
    }*/

console.log(ips.match(IpRegExp1))
    //console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g))
    const IpRegExp3 = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d]|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d]|\d)/g

    console.log(ips.match(IpRegExp3))
    const verificar = (cpf) =>{
        const cpf = window.document.querySelector('#cpf'); 
    }
   
    const verifCPF = /((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.)){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])/ 
   if (verifCPF.test(verificar)) {
        alert("deu certo")
    }else{
        alert("DEu errado")
    }


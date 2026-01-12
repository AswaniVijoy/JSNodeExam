import read from 'readline'
const rl=read.createInterface({
    input:process.stdin,
    output:process.stdout
});

const doctorMap=new Map();

showDoctor();

function showDoctor(){
    console.log(`
        1. Book Appointment
        2. Edit Appointment
        3. Cancel Appointment
        `);
        rl.question("Enter the choice : ",option)
    
}

function option(opt){
    switch(opt){
        case '1':rl.question('Enter Patient name : ',(name)=>{
            rl.question("Enter doctor name : ",(dname)=>{
                rl.question("Enter Appointment date : ",(date)=>{
                    rl.question("Enter Appointment time : ",(time)=>{
                        
                            doctorMap.set(name,{
                                doctorname : dname,
                                appointmentdate : date,
                                appointmenttime : time

                            })
                           
                             console.log(`
                                    Patient Name-${name} 
                                    Doctor Name-${dname} 
                                    Appointment Date-${date} 
                                    Appointment Time-${time}`);
                        showDoctor();

                            
                        
                    })
                })
            })
        })

        break;

        // case '2':rl.question("Enter patient name to edit : ",(name)=>{
        //     if(doctorMap.has(name)){
                
        //         rl.question("Enter new doctor name : ",(dname)=>{
        //             doctorMap.set(doctorname,dname)
        //             rl.question("Enter new date : ",(date)=>{
        //                 doctorMap.set(appointmentdate,date)
        //                 rl.question("Enter new time : ",(time)=>{
        //                 doctorMap.set(appointmentime,time)

        //                 })
        //             })
        //         })
                
        //         for(const i of doctorMap){
        //                         console.log(`Patient Name-${name} Doctor Name-${dname} Appointment Date-${date} Appointment Time-${time}`);
                                
        //                     }
                
                

        //     }
        //     else{
        //         console.log("Patient doesn't exist");
                
        //     }
        //     showDoctor();
        // })
        // break;

        case '3':
        doctorMap.clear()    
        console.log("Canceling Appointment....");         
        rl.close();
        break;
        
        
    }
}
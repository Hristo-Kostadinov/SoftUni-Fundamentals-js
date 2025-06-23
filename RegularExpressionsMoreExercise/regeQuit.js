function rageQuit(input) {
 
    const regex = /([^\d]+)(\d+)/g;  
    let match;
    let rageMessage = '';
    
    while ((match = regex.exec(input)) !== null) {
        const [_, str, numStr] = match;
        const num = parseInt(numStr, 10);
        const upperStr = str.toUpperCase();
        
        rageMessage += upperStr.repeat(num);
        
    }   
    const uniqueCount = new Set(rageMessage).size;
    
    console.log(`Unique symbols used: ${uniqueCount}`);
    console.log(rageMessage);
}
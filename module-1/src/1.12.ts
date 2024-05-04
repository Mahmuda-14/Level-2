{
    // Nullable types
    // unknown

    const speedInMeter = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = ((value * 100) / 3600);
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        // runtime checking
        else if (typeof value === 'string') {
            const [valueInNumber, unit] = value.split(" ")
            const convertedSpeed = (parseFloat(valueInNumber) * 100) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
            
        }
        else{
            console.log('null')
        }
    }

    speedInMeter(`1000 kmh^-1`);



    // Never = never kokhono kichu/kno type return kore na

const throwError = (msg: string): never =>{
    throw new Error(msg)
}
throwError('Error hogaya')
}
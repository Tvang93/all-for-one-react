const GetAskingQuestions = async(input1, input2) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/AskingQuestions/WakeUpTime/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}

const GetAdd2Numbers = async(text, text2) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/AddingTwoNumbers/AddTwoNumbers/${text}/${text2}`);
    const data = await promise.text();
    return data;
}

const GetHelloWorld = async(text) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/HelloWorld/HelloWorld/${text}`);
    const data = await promise.text();
    return data;
}

const GetGreaterThanLessThan = async(text, text2) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/GreaterThanLessThan/GreaterThanLessThan/${text}/${text2}`);
    const data = await promise.text();
    return data;
}

const GetMagic8Ball = async() => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/MagicEightBall/MagicEightBall`);
    const data = await promise.text();
    return data;
}

const GetOddOrEven = async(text) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${text}`);
    const data = await promise.text();
    return data;
}

const GetMadLib = async(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/MadLibNoModel/MadLib/${t1}/${t2}/${t3}/${t4}/${t5}/${t6}/${t7}/${t8}/${t9}/${t10}`);
    const data = await promise.text();
    return data;
}

const GetRestaurantPicker = async(text) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/RestaurantPicker/RestuarantPicker/${text}`);
    const data = await promise.text();
    return data;
}

const GetReverseItAN = async(text) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/ReverseItAlphanumerical/ReverseItAlphanumerical/${text}`);
    const data = await promise.text();
    return data;
}

const GetReverseItNO = async(text) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/ReverseItNumbers/ReverseItNumbers/${text}`);
    const data = await promise.text();
    return data;
}

export {
    GetHelloWorld, 
    GetAskingQuestions, 
    GetAdd2Numbers, 
    GetGreaterThanLessThan, 
    GetMagic8Ball, 
    GetOddOrEven,
    GetMadLib,
    GetRestaurantPicker,
    GetReverseItAN,
    GetReverseItNO
}
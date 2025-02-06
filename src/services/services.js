const GetHelloWorld = async(text) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/HelloWorld/HelloWorld/${text}`);
    const data = await promise.text();
    return data;
}

const GetAskingQuestions = async(input1, input2) => {
    const promise = await fetch(`https://allforonebuild-a9fgfcgkh5cnf6f7.westus-01.azurewebsites.net/AskingQuestions/WakeUpTime/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}

export {GetHelloWorld, GetAskingQuestions}
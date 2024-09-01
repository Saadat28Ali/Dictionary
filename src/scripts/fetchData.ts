import axios from "axios";

function splitDefinitions(rawText: string) {

    let retThis: Array<string> = [];
    let wordStart: boolean = false;
    let currWord: string = "";

    for (let index = 0; index < rawText.length; index++) {
        if (rawText.charAt(index) !== " ") wordStart = true;
        else wordStart = false;
        
        if (wordStart) {
            currWord += rawText.charAt(index);
            if (";".includes(rawText.charAt(index))) currWord += "\n";
        }
        else {
            if (currWord.endsWith(".") && "0123456789".includes(currWord.charAt(0))) {
                currWord = "\n";
            } else {
                retThis.push(currWord);
                currWord = "";
            }
        }
    }

    if (currWord !== "") retThis.push(currWord);
    // console.log("Curr word: ", currWord);
    return retThis.join(" ");
}

function fetchData(word: string) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET", 
            url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary', 
            params: {word: word}, 
            headers: {
                'x-rapidapi-key': 'cb84764be2mshd187c5270aed11ep17bd61jsn26f586772520',
                'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        }).then((response: any) => {
            console.log(splitDefinitions(response.data.definition));
            if (response.data.valid) resolve({word: response.data.word, definition: splitDefinitions(response.data.definition)});
            else resolve(null);
        }).catch((error: any) => reject(error));
    })
}

export { fetchData };
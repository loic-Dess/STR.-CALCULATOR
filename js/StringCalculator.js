class StringCalculator{
    constructor (){
        
    }

    add(numbers){
        let calcul
        let haveNegativNumber = false;
        let negativeNumbers = ""

        if (numbers === "") return 0
       
        if (numbers[0] === "/" && numbers[1] === "/") {
            let delimiters = numbers.split("\n")[0].replaceAll("//", "")

            if(delimiters[0] === "[")
                delimiters = delimiters.replaceAll("[", ",").replaceAll("]", "").slice(1)

            calcul = numbers.split("\n")[1]

            delimiters = delimiters.split(",")

            for (let i = 0; i < delimiters.length; i++) {
                calcul = calcul.replaceAll(delimiters[i], "+")
            }
        } else {
            calcul = numbers.replaceAll(",", "+").replaceAll("\n", "+")
        }

        calcul = calcul.split("+")

        for (let i = 0; i < calcul.length; i++) {
            if (parseInt(calcul[i]) < 0) {
                haveNegativNumber = true
                negativeNumbers += calcul[i] + " " 
            }

            if(parseInt(calcul[i]) >= 1000){
                calcul[i] = "0"
            }
        }

        if (haveNegativNumber)  
            return "Negatives not allowed. " + negativeNumbers.trimEnd()
        else
            return eval(calcul.join("+"))
    } 
}

export { StringCalculator }
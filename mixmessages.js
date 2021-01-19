

const predictor = () => {
    const string1 = ['Liverpool ', 'Manchseter United ', 'Arsenal '];
    const string2 = ['Will definitely ','Might ', 'Will not '];
    const string3 = ['be CHAMPIONS','finish in the top 4', 'be relegated and cease to exist!']

    const part1 = string1[Math.floor(Math.random() * string1.length)]
    const part2 = string2[Math.floor(Math.random() * string2.length)]
    const part3 = string3[Math.floor(Math.random() * string3.length)]

    const fullMessage = part1 + part2 + part3
    return fullMessage
}

predictor()

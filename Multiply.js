export function multiplicationTables(number) {

    /*let result = "# tabla del " + number + "#"; */
    let result = `# tabla del ${number} #\n`;

    for (let z = 1; z <= 10; z++) {

        let multiplication = (z * number);

        result += ` ${z} x ${number} = ${multiplication}\n`;

    }
    return result;
}
console.log(multiplicationTables(10));

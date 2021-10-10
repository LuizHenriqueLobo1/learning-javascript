function main() {

    let a = 2
    let b = 5

    let result = calculator(a, b, "+")

    console.log(result)
}

function calculator(a, b, operation) {
    return eval(a + operation + b)
}

main()
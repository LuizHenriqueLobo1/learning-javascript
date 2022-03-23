// Using split

const dict = [
    'teste',
    'nobre',
    'mexer',
    'termo',
    'senso',
    'algoz',
    'afeto',
    'plena',
    'ética'
];
  
const pattern = '*e**o';

const invalidCharsAmount = pattern.split('', pattern.length).filter(char => char !== '*').length;
  
const stringOnPattern =
    dict.filter(string => {
        let counter = 0;
        for(let i = 0; i < string.length; i++) {
            if(string.charAt(i) === pattern.charAt(i))
                counter++;
        }
        if(counter === invalidCharsAmount) return string;
    });
  
console.log(`Quantidade de palavras que seguem o padrão: ${stringOnPattern.length}`);

// Using match

const string = 'Este é um pequeno texto para ser usado de exemplo.';
const substring = 'ex';
const amountOfSubstrings = (string.toLowerCase().match(RegExp(substring, 'g') || []).length);

console.log(`Quantidade de ocorrências da substring: ${amountOfSubstrings}`);

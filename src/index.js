module.exports = function toReadable (number) {
    return toReadableFrom0To999(number)
}


function toReadableFrom0To999 (number) {
    switch (true) {
        case (number === 0): 
          return 'zero';
        case (number < 20): 
          return toReadableFrom1To19(number.toString());
        case (number < 100): 
          return toReadableFrom20To99(number.toString());
        case (number < 1000): 
          return toReadableFrom100To999(number.toString());
    }
}

function toReadableFrom1To19 (number) {
    switch (number) {
      case '1': return 'one';
      case '2': return 'two';
      case '3': return 'three';
      case '4': return 'four';
      case '5': return 'five';
      case '6': return 'six';
      case '7': return 'seven';
      case '8': return 'eight';
      case '9': return 'nine';
      case '10': return 'ten';
      case '11': return 'eleven';
      case '12': return 'twelve';
      case '13': return 'thirteen';
      case '14': return 'fourteen';
      case '15': return 'fifteen';
      case '16': return 'sixteen';
      case '17': return 'seventeen';
      case '18': return 'eighteen';
      case '19': return 'nineteen';
      default: return '';
    }
}

function toReadableFrom20To99 (number) {
    number = number.toString();
    if (number[1] === '0') {
      return toReadableTensDigit(number[0]);
    } else {
      return `${toReadableTensDigit(number[0])} ${toReadableFrom1To19(number[1])}`;
    }
}

function toReadableFrom100To999 (number) {
    number = number.toString();
    if (number.slice(1) === '00') {
      return `${toReadableFrom1To19(number[0])} hundred`;
    } else {
      return `${toReadableFrom1To19(number[0])} hundred ${toReadableFrom0To999(Number(number.slice(1)))}`;
    }
}

function toReadableTensDigit (number) {
    switch (number) {
      case '2': return 'twenty';
      case '3': return 'thirty';
      case '4': return 'forty';
      case '5': return 'fifty';
      case '6': return 'sixty';
      case '7': return 'seventy';
      case '8': return 'eighty';
      case '9': return 'ninety';
      default: return '';
    }
}


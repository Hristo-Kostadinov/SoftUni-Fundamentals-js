function arrayManipulations(commands) {
    let arr = commands
        .shift()
        .split(' ')
        .map(Number);

    for (let command of commands) {
        let [action, firstNum, secondNum] = command.split(' ');

        switch (action) {
            case 'Add':
                add(Number(firstNum));
                break;
            case 'Remove':
                remove(Number(firstNum));
                break;
            case 'RemoveAt':
                removeAt(Number(firstNum));
                break;
            case 'Insert':
                insert(Number(firstNum), Number(secondNum));
                break;
            default:
                break;
        }
    }

    function add(num) {
        arr.push(num);
    }

    function remove(num) {
        arr = arr.filter(x => x !== num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index, 0, num);
    }

    console.log(arr.join(' '));
}
arrayManipulations
([
    '4 19 2 53 6 43',

    'Add 3',
    
    'Remove 2',
    
    'RemoveAt 1',
    
    'Insert 8 3'
])
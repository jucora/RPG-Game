const name = (() => {
    const validation = () => {
        const input = document.querySelector('#playerName');
        if (!input.value.trim().length) {
            input.style.background = 'red';
        } else {
            return true;
        }

    }
    const inputNameValue = () => {
        return document.querySelector('#playerName')
    }
    const nameInputContainer = () => {
        return document.querySelector('#playerNameBox')
    }
    const inputNameField = () => {
        const div = document.createElement('div');
        div.setAttribute('id', 'playerNameBox');
        const input = document.createElement('input');
        input.setAttribute('id', 'playerName');
        div.appendChild(input);
        document.body.appendChild(div);
    };
    return {
        inputNameValue,
        nameInputContainer,
        inputNameField, validation
    }
})()


export default name
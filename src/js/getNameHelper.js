const name = (() => {
    const validation = () => {
        const input = document.querySelector('#playerName');
        if (!input.value.trim().length) {
            input.style.background = 'red';
        } else {
            return true;
        }

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
        inputNameField, validation
    }
})()


export default name
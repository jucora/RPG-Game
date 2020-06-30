const testSimulator = (() => {
    const inputNameField = () => {
        let input = document.createElement("input")
        input.setAttribute("id", "playerName")
        document.body.appendChild(input);
        return input
    }

    return {
        inputNameField
    }
})()

export default testSimulator

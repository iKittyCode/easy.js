// MIT license by coding can be easy foundation
class Easy {

    prints(message) {
        console.log(message)
        return message
    }
    popUpMessage(messsage) {
        alert(messsage)
    }
    createAParagrph(text) {
        document.createElement('p').textContent = text
    }
    inputPopUp(message) {
        prompt(message)
    }
    Div(insider) {
        document.createElement('div').innerHTML = insider
    }
    HelloWorldProgram() {
        this.createAParagrph("Hello world")
    }
    

}
module.exports = Easy;
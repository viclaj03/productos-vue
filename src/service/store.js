import {reactive} from 'vue'
export const store = {
    debug: true,
    state:{
        messages: reactive([])
    },
    addErrorMensage(newError){
        this.state.messages.push(newError)
    }

}
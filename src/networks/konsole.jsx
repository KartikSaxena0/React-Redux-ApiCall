import config from "../config.json"

const konsole = {

    log: (...arg) => {
        if (config.OPEN_CONSOLE) {
            console.log(...arg);
        }
    },
    error: (...arg) => {
        if (config.OPEN_CONSOLE) {
            console.error(...arg);
        }
    }
}

export default konsole

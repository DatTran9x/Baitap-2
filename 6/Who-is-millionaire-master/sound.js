class sound {
    constructor(fileName) {
        this.fileName = fileName;
        this.loaded = false
        this.audio = new Audio('sound/' + this.fileName);
        this.audio.addEventListener('canplaythrough', () => {
            this.loaded = true;
        });
        this.audio.addEventListener('canplaythrough', () => {
            this.loaded = true;
        });
    }
    start(onEndCallBack) {
        if (this.loaded) {
            this.audio.play();
            if (typeof onendedCallBack == "function"){
            this.audio.onended = onEndCallBack;
            }
        }
    }
    stop() {
        this.audio.stop();
    }
    onEnd(){

    }
}
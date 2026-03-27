
import { config } from "./config";
export let Appurl = {

    RUMMY_BACKGROUND_URL: "",
    load: function () {
        console.log("http url -------------", config.httpUrl);
        Appurl.RUMMY_BACKGROUND_URL = config.httpUrl;
    },
};

Appurl.load();


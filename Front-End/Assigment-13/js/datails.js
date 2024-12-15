import { Ui } from "./ui.js";
export class Details {
    constructor(id) {
        this.ui = new Ui();
        this.getDetails(id);
    }
    async getDetails(id) {
        this.ui.displayLoader();
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a87955c7bamsh668fd58ea00385fp193fc0jsna0e9af466666',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            this.ui.displayDetails(data);
        } catch (err) {
            console.error(err);
        }
        this.ui.hideLoader();
    }


}
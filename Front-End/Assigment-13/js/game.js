import { Ui } from "./ui.js";
import { Details } from './datails.js';
export class Games {
    constructor() {
        this.ui = new Ui();
        this.getCategorys();
        this.getPopularGames();
        this.getAllGames();
        this.startFilterEvents();

    }
    async getGameByCategory(category) {
        this.ui.displayLoader();
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a87955c7bamsh668fd58ea00385fp193fc0jsna0e9af466666',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: 'application/json',
            },
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (data) {
                this.ui.displayFilterGames(data, category);
                this.startShowDatails();
            } else {
                console.log('No data found');
            }
        } catch (error) {
            console.error(error);
        }
        this.ui.hideLoader();
    };
    async getPopularGames() {
        this.ui.displayLoader();
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a87955c7bamsh668fd58ea00385fp193fc0jsna0e9af466666',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: 'application/json',
            },
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (data) {
                this.ui.displayPopularGames(data);
                this.startShowDatails();
            } else {
                console.log('No data found');
            }
        } catch (error) {
            console.error(error);
        }
        this.ui.hideLoader();
    };
    async getAllGames() {
        this.ui.displayLoader();
        const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a87955c7bamsh668fd58ea00385fp193fc0jsna0e9af466666',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: 'application/json',
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            this.ui.displayFilterGames(data, 'All Games');
            this.startShowDatails();
        } catch (error) {
            console.error(error);
        }
        this.ui.hideLoader();
    }
    startFilterEvents() {
        document.querySelectorAll('#filterMenu li a').forEach(link => {
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                if (e.target.getAttribute('category') === 'All Games') {
                    this.getAllGames();
                } else {
                    this.getGameByCategory(e.target.getAttribute('category'));
                }

            });
        });
    };
    startShowDatails() {
        document.querySelectorAll('.game-card .show-datails-btn').forEach(item => {
            item.addEventListener('click', async (e) => {
                e.preventDefault();
                const gameId = item.getAttribute('gameid');
                this.getGameDetails(gameId);
            });
        });
    }
    async getCategorys() {
        this.ui.displayLoader();
        const categories = [
            "Shooter",
            "MMORPG",
            "MOBA",
            "Anime",
            "battle-royale",
            "Strategy",
            "Fantasy",
            "Sci-Fi",
            "card",
            "Racing",
            "Fighting",
            "Social",
            "Sports"];

        const result = [];
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a87955c7bamsh668fd58ea00385fp193fc0jsna0e9af466666',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: 'application/json',
            }
        };

        for (const category of categories) {
            const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}&sort-by=popularity`;
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                if (data.length > 0) {
                    result.push({
                        categoryName: category,
                        gameNumbers: data.length,
                        categoryThumbnail: data[Math.floor(Math.random() * data.length)].thumbnail,
                    });
                }
            } catch (error) {
                console.error(`Error fetching category ${category}:`, error);
            }
        }
        this.ui.hideLoader();

        if (result.length > 0) {
            this.ui.displayGamesCategories(result);
        } else {
            console.log('No data found');
        }
    }
    async getGameDetails(gameId) {
        new Details(gameId);
    }
}

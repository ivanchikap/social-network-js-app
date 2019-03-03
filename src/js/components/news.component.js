import {AuthService} from "../services/auth.service";
import {NewsService} from "../services/news.service";

export class News {
    constructor() {
        this._authService = new AuthService();
        this._newsService = new NewsService();
        this._news;
    }

    async beforeRender() {
        this._news = await this._newsService.getNews(this._authService.token);
    }

    render() {
        return `
                <style>
                  ${this._style()}
                </style>                
                <div class="img-wrapper">
                <p>Рисуем последнюю картинку</p>
                <img src="${this._news.news[this._news.news.length - 1].pictures[0].url}" alt="">
            </div>
                
`    }

    _style() {
        return `
            .img-wrapper {
                 max-width: 680px;
                 margin: 0 auto;
            }
            img {
                max-width: 100%;
                heigth: auto;
            }
        `;
    }

    afterRender() {
    }
}

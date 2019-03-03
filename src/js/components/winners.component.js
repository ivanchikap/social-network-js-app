import {WinnersService} from "../services/winners.service";


export class Winners {
    constructor() {
        this._winnersService = new WinnersService();
        this._winners;
    }

    async beforeRender() {
        this._winners = await this._winnersService.getWinners();
        console.log(this._winners);
        console.log(this._winners.winners[0].member_id.images[0].image_basic.url);
    }

    render() {
        return `
                <style>
                  ${this._style()}
                </style>                
                <div class="page-inner-bg d-flex justify-content-center align-items-center align-items-lg-start text-white">
                    <h1 class="m-auto">Discover inspiring</h1>
                </div>   
                <div class="container mx-auto">
                    <div class="photos-grid d-flex flex-wrap">
                        <div class="grid-item-wrap h-300 ng-start-inserted d-flex">
                            <div class="grid-item position-relative">
                                <img src="${this._winners.winners[0].member_id.images[0].image_basic.url}" alt="img">
                                
                            </div>
                            <div class="grid-item position-relative">
                                                            <img  src="${this._winners.winners[1].member_id.images[0].image_basic.url}" alt="">
                                                            
                            </div>


                            
                            </div>
                        </div>
                    </div>
                </div>  
        `;
    }

    _style() {
        return `
            * {
                box-sizing-border-box;
            }
            .page-inner-bg {
                background-image: url(http://mostlikedperson-client.herokuapp.com/assets/img/backgrounds/winners-bg.png);
            height: 500px;
            }
            .photos-grid {
                margin: 49px -1px;
            }
            .photos-grid .grid-item-wrap {               
                line-height: 0;
            }
            .h-300 {
                height: 300px !important;
            }
            .grid-item {
                  padding: 1px;
                cursor: pointer;
                height: 100%;
            }
            .grid-item img {
                height: 100%;
            }
            .grid-item[_ngcontent-c14] {
                height: 100%;
                overflow: hidden;
                background-color: #000;
            }
            .grid-item .grid-item-overlay {
                padding: 20px;
                opacity: 0;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            }            
            .transition {
                transition: .2s ease-out;
            }
        `;
    }

    afterRender() {
    }
}



export default class NewsModel {
    title: string
    datetime: Date
    constructor(title: string, datetime: string){
        this.title = title
        this.datetime = new Date(datetime)
    }
} 
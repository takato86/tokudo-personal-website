

export default class AwardModel {
    title: string
    awardTitle: string
    datetime: Date
    constructor(title: string, awardTitle: string, datetime: Date){
        this.title = title
        this.awardTitle = awardTitle
        this.datetime = datetime
    }
}
import { Component } from '@angular/core';
import { HistoryItem } from '../models/history-item';

@Component({
    selector: 'history-selector',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})

export class HistoryComponent {
    title = 'History';
    SelectedItem = null;
    HistoryItems = [];
    
    constructor() {
        var HistoryItem1 = new HistoryItem();
        HistoryItem1._id = 0;
        HistoryItem1.name = "story 1";
        HistoryItem1.date = new Date();
        HistoryItem1.text = "lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.lang lang gelden in een land hier ver vandaan.";

        var HistoryItem2 = new HistoryItem();
        HistoryItem2._id = 1;
        HistoryItem2.name = "story 2";
        HistoryItem2.date = new Date();
        HistoryItem2.text = "was er een konijntje genaamd knoffelstaart.";

        this.HistoryItems.push(HistoryItem1);
        this.HistoryItems.push(HistoryItem2);
        this.SelectedItem = HistoryItem1;  
    }  

    public SelectStory(historyitem) {
        this.SelectedItem = historyitem;
    }
}
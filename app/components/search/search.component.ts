import { Component } from '@angular/core';

import { SearchService } from '../../services/search.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})

export class SearchComponent {
    searchStr:string;
    data:any;

    constructor(private searchService:SearchService) {

    }

    onSearchChange() {
        this.searchService.getMixes(this.searchStr)
            .subscribe(res => this.data = res.data);
    }
}
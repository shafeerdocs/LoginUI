import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '@/_services';
@Component({ templateUrl: 'audit.component.html'
})
export class AuditComponent implements OnInit {
    users = [];
    displayedUser = [];
    totalData = 0;
    currentPage = 1;
    pageSize = 10;
    totalPages = 0;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.loadAllUsers();
    }
     private loadAllUsers() {
        this.userService.getAll()
            .subscribe(users => {
                this.users = users;
                this.totalData = this.users.length;
                this.totalPages = Math.floor(this.users.length / 10)
                let remainder = this.users.length % 10;
                this.totalPages = (remainder != 0 ? (this.totalPages + 1) : this.totalPages)
                this.displayedUser = this.users.slice(0, this.pageSize)
                console.log("users", users)
            });
    }

    prev(){
        if(this.currentPage >= 1){
            this.currentPage -= 1;
        this.displayedUser = this.users.slice(this.pageSize - 10, this.pageSize)
this.pageSize -= 10;
        }
    }
    next(){
this.currentPage += 1;
this.displayedUser = this.users.slice(this.pageSize, this.pageSize + 10)
this.pageSize += 10;
    }
}

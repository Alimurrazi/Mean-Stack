import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../issue.model';
import { IssueService } from '../../issue.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }
  
  fetchIssues(){
    this.issueService.getIssue().subscribe((data: Issue[])=>{
      this.issues = data;
    })
  };

  editIssue(id){
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id){
    this.issueService.deleteIssue(id).subscribe(()=>{
      this.fetchIssues();
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {GroupService} from '../group.service';
import {Student} from '../student';
import {Observable, Subject} from 'rxjs';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Group} from '../group';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService, private groupService: GroupService) {
  }

  get StudentName() {
    return this.studentUpdateForm.get('studentName');
  }

  // get GroupNumber() {
  //   return this.studentUpdateForm.get('groupNumber');
  // }

  // get Faculty() {
  //   return this.studentUpdateForm.get('faculty');
  // }

  get Scholarship() {
    return this.studentUpdateForm.get('scholarship');
  }

  get DateOfEnrollment() {
    return this.studentUpdateForm.get('dateOfEnrollment');
  }

  get StudentId() {
    return this.studentUpdateForm.get('studentId');
  }

  get GroupId() {
    return this.studentUpdateForm.get('groupId');
  }

  studentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  students: Observable<Student[]>;
  // groups: Observable<Group[]>;
  student: Student = new Student();
  // group: Group = new Group();
  // groupMap: Map<number, Group> = new Map<number, Group>();
  deleteMessage = false;
  studentList: any;
  isUpdated = false;

  studentUpdateForm = new FormGroup({
    studentId: new FormControl(),
    groupId: new FormControl(),
    studentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // groupNumber: new FormControl('', [Validators.required]),
    // faculty: new FormControl(),
    scholarship: new FormControl(),
    dateOfEnrollment: new FormControl()
  });


  ngOnInit() {
    this.isUpdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, 'All']],
      processing: true
    };
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
      this.dtTrigger.next();
    });
    // this.groupService.getGroupList().subscribe(data => {
    //   this.groups = data;
    //   this.dtTrigger.next();
    // });
    //
    // const map = new Map();
    // this.groups.forEach(function(value) {
    //   map.set(value[0].groupId, value);
    //   console.log(value);
    // });
    // this.groupMap = new Map(map);
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.studentService.getStudentList().subscribe(data => {
            this.students = data;
          });
        },
        error => console.log(error));
  }


  updateStudent(id: number) {
    this.studentService.getStudent(id)
      .subscribe(
        data => {
          this.studentList = data;
        },
        error => console.log(error));
  }

  updateStu(updStu) {
    this.student = new Student();
    this.student.studentId = this.StudentId.value;
    this.student.studentName = this.StudentName.value;
    this.student.groupId = this.GroupId.value;
    // this.student.groupNumber = this.GroupNumber.value;
    // this.student.faculty = this.Faculty.value;
    this.student.scholarship = this.Scholarship.value;
    this.student.dateOfEnrollment = this.DateOfEnrollment.value;
    // console.log(this.Faculty.value);


    this.studentService.updateStudent(this.student.studentId, this.student).subscribe(
      data => {
        this.isUpdated = true;
        this.studentService.getStudentList().subscribe(data => {
          this.students = data;
        });
      },
      error => console.log(error));
  }

  changeIsUpdate() {
    this.isUpdated = false;
  }
}

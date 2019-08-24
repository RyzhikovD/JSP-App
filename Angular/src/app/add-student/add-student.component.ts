import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student';
import {Group} from '../group';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService: StudentService) {
  }

  get StudentName() {
    return this.studentSaveForm.get('studentName');
  }

  // get GroupNumber() {
  //   return this.studentSaveForm.get('groupNumber');
  // }

  // get Faculty() {
  //   return this.studentSaveForm.get('faculty');
  // }

  get Scholarship() {
    return this.studentSaveForm.get('scholarship');
  }

  get DateOfEnrollment() {
    return this.studentSaveForm.get('dateOfEnrollment');
  }

  get Group() {
    return this.studentSaveForm.get('groupId');
  }

  // get Faculty() {
  //   return this.studentSaveForm.get('groupId')[1];
  // }

  student: Student = new Student();
  submitted = false;
  group: Group = new Group();

  studentSaveForm = new FormGroup({
    studentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    groupId: new FormControl('', [Validators.required]),
    // faculty: new FormControl(),
    // groupId: new FormControl('', [Validators.required]),
    scholarship: new FormControl(),
    dateOfEnrollment: new FormControl(),
  });

  ngOnInit() {
    this.submitted = false;
  }

  saveStudent(saveStudent) {
    this.student = new Student();
    this.student.studentName = this.StudentName.value;
    this.group.groupId = this.Group.value;
    this.group.groupNumber = 'B17-101';
    this.group.faculty = 'INPE';
    this.student.group = this.group;
    this.student.scholarship = this.Scholarship.value;
    this.student.dateOfEnrollment = this.DateOfEnrollment.value;
    this.submitted = true;
    this.save();
  }


  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }

  addStudentForm() {
    this.submitted = false;
    this.studentSaveForm.reset();
  }
}

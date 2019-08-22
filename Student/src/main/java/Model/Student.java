package Model;

import javax.persistence.*;

@Entity
@Table(name = "student")
//@SecondaryTable(name="groups", pkJoinColumns = @PrimaryKeyJoinColumn(name="groupId"))
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "studentId")
    private int studentId;
    private String studentName;
//    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = Group.class)
//    @JoinTable(name = "groups", joinColumns = { @JoinColumn(name = "groupId") }, inverseJoinColumns = { @JoinColumn(name = "groupId") })

//    @JoinColumn(name="groupId",referencedColumnName="groupId", insertable=false, updatable=false)
//    @Column(name="groupId", table="groups")
//    private int groupId;

//    @JoinColumn(name="groupId")
//    @JoinTable(name = "connection", joinColumns = @JoinColumn(name = "groupId"), inverseJoinColumns = @JoinColumn(name = "studentId"))
//    private int groupId;

//    @ManyToOne()
//    @JoinColumn(name = "groupId")
//    private Group group;
    private int groupId;

    private String scholarship;
    private String dateOfEnrollment;

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

//    public String getGroupNumber() {
//        return groupId.getGroupNumber();
//    }
//
//    public void setGroupNumber(String groupNumber) {
//        this.groupId.setGroupNumber(groupNumber);
//    }

//    public String getFaculty() {
//        return groupId.getFaculty();
//    }
//
//    public void setFaculty(String faculty) {
//        this.groupId.setFaculty(faculty);
//    }

    public String getScholarship() {
        return scholarship;
    }

    public void setScholarship(String scholarship) {
        this.scholarship = scholarship;
    }

    public String getDateOfEnrollment() {
        return dateOfEnrollment;
    }

    public void setDateOfEnrollment(String dateOfEnrollment) {
        this.dateOfEnrollment = dateOfEnrollment;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }
}

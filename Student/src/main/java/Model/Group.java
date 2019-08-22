package Model;

import javax.persistence.*;

import java.util.Set;

@Entity
@Table(name = "groupTable")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "groupId")
    private int groupId;
//    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = Group.class)
//    @JoinTable(name = "students", joinColumns = { @JoinColumn(name = "groupId") }, inverseJoinColumns = { @JoinColumn(name = "groupId") })

//    @OneToOne(optional=false)
//    @JoinColumn(name="groupId",referencedColumnName="groupId", insertable=false, updatable=false)

//    @Column(name="groupId", table="students")

//    @JoinTable(name = "connection", joinColumns = @JoinColumn(name = "groupId"), inverseJoinColumns = @JoinColumn(name = "studentId"))
//    private Set<Student> students;

//    @OneToMany(mappedBy = "group", cascade = CascadeType.ALL)
//    private Set<Student> students;

    private String groupNumber;
    private String faculty;

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public String getGroupNumber() {
        return groupNumber;
    }

    public void setGroupNumber(String groupNumber) {
        this.groupNumber = groupNumber;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }
}

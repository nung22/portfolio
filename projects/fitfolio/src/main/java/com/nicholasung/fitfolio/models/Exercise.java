package com.nicholasung.fitfolio.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.scheduling.config.Task;

@Entity
@Table(name="exercises")
public class Exercise {
	// Member Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Size(min = 1, max = 100, message="Name must be provided.")
    private String title;
    
    @NotEmpty(message="Type must be provided.")
    private String type;
    
    @Size(min = 3, max = 255, message="Description must be at least 3 characters.")
    private String description;
    
    @NotNull(message="Due date must be provided")
    @Future(message="Due date must not be in the past.")
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date dueDate;
    
    // createdAt & updatedAt
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
    
    // Implement many to one relationship with users
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User leader;
    // Implement one to many relationship with tasks
    @OneToMany(mappedBy="exercise", fetch=FetchType.LAZY)
    private List<Task> tasks;
    // Implement many to many relationship with user
    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(
    		name = "users_exercises",
    		joinColumns = @JoinColumn(name="exercise_id"),
    		inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> users;
    
    // Constructors
    public Exercise() {
    }  
    public Exercise(String title, String description, Date dueDate, User leader) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.leader = leader;
	}
    
	// Getters & Setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	public User getLeader() {
		return leader;
	}
	public void setLeader(User leader) {
		this.leader = leader;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	public List<Task> getTasks() {
		return tasks;
	}
	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}
}

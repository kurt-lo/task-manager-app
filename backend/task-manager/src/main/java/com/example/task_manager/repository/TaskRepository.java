package com.example.task_manager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.task_manager.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query("SELECT t FROM Task t WHERE (?1 is null or t.title = ?1) and (?2 is null"
    + " or t.completed = ?2)")
    public List<Task> findTasksByFilter(String search, boolean iscompleted);
}
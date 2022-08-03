package com.kkar.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kkar.demo.exception.RecordNotFoundException;
import com.kkar.demo.model.EmployeeEntity;
import com.kkar.demo.repository.EmployeeRepository;
 
@Service
public class EmployeeService {
     
    
	@Autowired 
    EmployeeRepository repository;
     
    
	
	public List<EmployeeEntity> getAllEmployees()
    {
//		EmployeeEntity employeeEntity =new EmployeeEntity();
//		
//		employeeEntity.setId(null);
//		employeeEntity.setFirstName("SR");
//		employeeEntity.setEmail("asdas@gmail.com");
//		repository.save(employeeEntity);
		
        List<EmployeeEntity> employeeList = repository.findAll();
//		List<EmployeeEntity> employeeList=new ArrayList<EmployeeEntity>();
        if(employeeList.size() > 0) {
            return employeeList;
        } else {
            return new ArrayList<EmployeeEntity>();
        }
    }
    
    
    
    
     
    public EmployeeEntity getEmployeeById(Long id) throws RecordNotFoundException
    {
        Optional<EmployeeEntity> employee = repository.findById(id);
         
        if(employee.isPresent()) {
            return employee.get();
        } else {
            throw new RecordNotFoundException("No employee record exist for given id");
        }
    }
    
    
    
    
    
     
    public EmployeeEntity createOrUpdateEmployee(EmployeeEntity entity) throws RecordNotFoundException
    {
    	System.out.println("entity.getId()----->"+entity);
        Optional<EmployeeEntity> employee = repository.findById(entity.getId());
         
        if(employee.isPresent())
        {
            EmployeeEntity newEntity = employee.get();
            newEntity.setEmail(entity.getEmail());
            newEntity.setFirstName(entity.getFirstName());
            newEntity.setLastName(entity.getLastName());
 
            newEntity = repository.save(newEntity);
             
            return newEntity;
        } else {
            entity = repository.save(entity);
             
            return entity;
        }
    }
    
     
    public void deleteEmployeeById(Long id) throws RecordNotFoundException
    {
        Optional<EmployeeEntity> employee = repository.findById(id);
         
        if(employee.isPresent())
        {
            repository.deleteById(id);
        } else {
            throw new RecordNotFoundException("No employee record exist for given id");
        }
    }
}